import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const contentDir = path.join(process.cwd(), "content");

export interface DocMeta {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  order: number;
  slug: string;
  category: string;
  readingTime?: number;
  lastUpdated?: string;
}

export interface DocContent {
  meta: DocMeta;
  content: string;
}

export function getDocBySlug(
  locale: Locale,
  category: string,
  slugParts: string[]
): DocContent | null {
  const filePath = path.join(
    contentDir,
    locale,
    category,
    ...slugParts.slice(0, -1),
    `${slugParts[slugParts.length - 1]}.mdx`
  );

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title ?? slugParts[slugParts.length - 1],
      description: data.description ?? "",
      level: data.level ?? "beginner",
      order: data.order ?? 0,
      slug: slugParts.join("/"),
      category,
      readingTime: Math.ceil(content.split(/\s+/).length / 200),
      lastUpdated: data.lastUpdated,
    },
    content,
  };
}

export function getAllDocSlugs(locale: Locale, category: string): string[][] {
  const dir = path.join(contentDir, locale, category);
  if (!fs.existsSync(dir)) return [];

  const slugs: string[][] = [];

  function walk(currentDir: string, parts: string[]) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith("_")) continue;
      if (entry.isDirectory()) {
        walk(path.join(currentDir, entry.name), [...parts, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        slugs.push([...parts, entry.name.replace(".mdx", "")]);
      }
    }
  }

  walk(dir, []);
  return slugs;
}

export interface TreeNode {
  title: string;
  slug: string;
  children?: TreeNode[];
}

export function getSidebarTree(locale: Locale, category: string): TreeNode[] {
  const dir = path.join(contentDir, locale, category);
  if (!fs.existsSync(dir)) return [];
  return buildTree(dir);
}

function buildTree(dir: string, baseParts: string[] = []): TreeNode[] {
  const metaPath = path.join(dir, "_meta.json");
  let order: Record<string, string> = {};
  if (fs.existsSync(metaPath)) {
    order = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: TreeNode[] = [];
  const orderKeys = Object.keys(order);

  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue;

    if (entry.isDirectory()) {
      const children = buildTree(path.join(dir, entry.name), [
        ...baseParts,
        entry.name,
      ]);
      nodes.push({
        title: order[entry.name] ?? entry.name.replace(/-/g, " "),
        slug: [...baseParts, entry.name].join("/"),
        children,
      });
    } else if (entry.name.endsWith(".mdx")) {
      const name = entry.name.replace(".mdx", "");
      nodes.push({
        title: order[name] ?? name.replace(/-/g, " "),
        slug: [...baseParts, name].join("/"),
      });
    }
  }

  // Sort by order in _meta.json
  if (orderKeys.length > 0) {
    nodes.sort((a, b) => {
      const aKey = a.slug.split("/").pop() ?? "";
      const bKey = b.slug.split("/").pop() ?? "";
      const aIdx = orderKeys.indexOf(aKey);
      const bIdx = orderKeys.indexOf(bKey);
      if (aIdx === -1 && bIdx === -1) return 0;
      if (aIdx === -1) return 1;
      if (bIdx === -1) return -1;
      return aIdx - bIdx;
    });
  }

  return nodes;
}

export function getAdjacentDocs(
  locale: Locale,
  category: string,
  currentSlug: string[]
): {
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
} {
  const allSlugs = getAllDocSlugs(locale, category);
  const currentStr = currentSlug.join("/");
  const currentIdx = allSlugs.findIndex((s) => s.join("/") === currentStr);

  let prev = null;
  let next = null;

  if (currentIdx > 0) {
    const prevSlug = allSlugs[currentIdx - 1];
    const prevDoc = getDocBySlug(locale, category, prevSlug);
    if (prevDoc)
      prev = { title: prevDoc.meta.title, slug: prevSlug.join("/") };
  }

  if (currentIdx >= 0 && currentIdx < allSlugs.length - 1) {
    const nextSlug = allSlugs[currentIdx + 1];
    const nextDoc = getDocBySlug(locale, category, nextSlug);
    if (nextDoc)
      next = { title: nextDoc.meta.title, slug: nextSlug.join("/") };
  }

  return { prev, next };
}

