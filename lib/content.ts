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

export function getDocBySlug(locale: Locale, category: string, slugParts: string[]): DocContent | null {
  const filePath = path.join(
    contentDir,
    locale,
    category,
    ...slugParts.slice(0, -1),
    `${slugParts[slugParts.length - 1]}.mdx`,
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
  // Sort slugs by their frontmatter: level (beginner->intermediate->advanced->expert), then order, then filename
  const levelPriority: Record<string, number> = {
    beginner: 0,
    intermediate: 1,
    advanced: 2,
    expert: 3,
  };

  function readMetaForSlug(slugParts: string[]) {
    try {
      const filePath = path.join(
        contentDir,
        locale,
        category,
        ...slugParts.slice(0, -1),
        `${slugParts[slugParts.length - 1]}.mdx`,
      );
      if (!fs.existsSync(filePath)) return { levelPri: 0, order: 0, name: slugParts.join("/") };
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const level = (data.level || "beginner").toLowerCase();
      const order = Number.isFinite(Number(data.order)) ? Number(data.order) : 0;
      const levelPri = levelPriority[level] ?? 0;
      return { levelPri, order, name: slugParts.join("/") };
    } catch {
      return { levelPri: 0, order: 0, name: slugParts.join("/") };
    }
  }

  slugs.sort((a, b) => {
    const ma = readMetaForSlug(a);
    const mb = readMetaForSlug(b);
    if (ma.levelPri !== mb.levelPri) return ma.levelPri - mb.levelPri;
    if (ma.order !== mb.order) return ma.order - mb.order;
    return ma.name.localeCompare(mb.name);
  });

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
      const children = buildTree(path.join(dir, entry.name), [...baseParts, entry.name]);
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
  } else {
    // No _meta.json — sort files and directories by frontmatter level and order to present beginner->intermediate->advanced
    const levelPriority: Record<string, number> = {
      beginner: 0,
      intermediate: 1,
      advanced: 2,
      expert: 3,
    };

    nodes.sort((a, b) => {
      // If either is a directory (has children array), keep directories before files
      const aIsDir = Array.isArray(a.children) && a.children.length > 0;
      const bIsDir = Array.isArray(b.children) && b.children.length > 0;
      if (aIsDir && !bIsDir) return -1;
      if (!aIsDir && bIsDir) return 1;

      try {
        const aPath = path.join(dir, `${a.slug.split("/").pop()}.mdx`);
        const bPath = path.join(dir, `${b.slug.split("/").pop()}.mdx`);
        const aExists = fs.existsSync(aPath);
        const bExists = fs.existsSync(bPath);
        let aLevel = 0,
          bLevel = 0,
          aOrder = 0,
          bOrder = 0;
        if (aExists) {
          const aContent = fs.readFileSync(aPath, "utf-8");
          const { data: aData } = matter(aContent);
          aOrder = Number.isFinite(Number(aData.order)) ? Number(aData.order) : 0;
          aLevel = levelPriority[(aData.level || "beginner").toLowerCase()] ?? 0;
        }
        if (bExists) {
          const bContent = fs.readFileSync(bPath, "utf-8");
          const { data: bData } = matter(bContent);
          bOrder = Number.isFinite(Number(bData.order)) ? Number(bData.order) : 0;
          bLevel = levelPriority[(bData.level || "beginner").toLowerCase()] ?? 0;
        }

        if (aLevel !== bLevel) return aLevel - bLevel;
        if (aOrder !== bOrder) return aOrder - bOrder;
      } catch (e) {
        // ignore and fallback to slug compare
        console.error(e);
      }

      return a.slug.localeCompare(b.slug);
    });
  }

  return nodes;
}

export function getAdjacentDocs(
  locale: Locale,
  category: string,
  currentSlug: string[],
): {
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
} {
  const orderedSlugs = getOrderedSlugsFromTree(locale, category);
  const currentStr = currentSlug.join("/");
  const currentIdx = orderedSlugs.findIndex((s) => s.join("/") === currentStr);

  let prev = null;
  let next = null;

  if (currentIdx > 0) {
    const prevSlug = orderedSlugs[currentIdx - 1];
    const prevDoc = getDocBySlug(locale, category, prevSlug);
    if (prevDoc) prev = { title: prevDoc.meta.title, slug: prevSlug.join("/") };
  }

  if (currentIdx >= 0 && currentIdx < orderedSlugs.length - 1) {
    const nextSlug = orderedSlugs[currentIdx + 1];
    const nextDoc = getDocBySlug(locale, category, nextSlug);
    if (nextDoc) next = { title: nextDoc.meta.title, slug: nextSlug.join("/") };
  }

  return { prev, next };
}

/**
 * Flatten the sidebar tree into an ordered list of slugs.
 * This ensures category index pages and prev/next navigation
 * use the exact same order as the sidebar.
 */
export function getOrderedSlugsFromTree(locale: Locale, category: string): string[][] {
  const tree = getSidebarTree(locale, category);
  const slugs: string[][] = [];

  function flatten(nodes: TreeNode[]) {
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        flatten(node.children);
      } else {
        slugs.push(node.slug.split("/"));
      }
    }
  }

  flatten(tree);
  return slugs;
}
