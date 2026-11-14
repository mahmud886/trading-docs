import { getAllDocSlugs, getDocBySlug } from "@/lib/content";
import { CATEGORIES } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

interface IndexEntry {
  title: string;
  titleLower: string;
  slug: string;
  category: string;
  /** Plain text of the lesson, no MDX, JSX or Markdown syntax. */
  text: string;
  textLower: string;
}

export interface SearchResult {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
}

const indexes = new Map<string, IndexEntry[]>();

/** Removes MDX/JSX/Markdown syntax so excerpts and matches use readable text only. */
export function toPlainText(source: string): string {
  return source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s*\|?[\s:|-]{3,}\|?\s*$/gm, " ")
    .replace(/[|*_`>#~]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildIndex(locale: Locale): IndexEntry[] {
  const entries: IndexEntry[] = [];
  for (const cat of CATEGORIES) {
    for (const parts of getAllDocSlugs(locale, cat)) {
      const doc = getDocBySlug(locale, cat, parts);
      if (!doc) continue;
      const text = toPlainText(`${doc.meta.description ?? ""} ${doc.content}`);
      entries.push({
        title: doc.meta.title,
        titleLower: doc.meta.title.toLowerCase(),
        slug: `/${locale}/${cat}/${parts.join("/")}`,
        category: cat,
        text,
        textLower: text.toLowerCase(),
      });
    }
  }
  return entries;
}

function getIndex(locale: Locale): IndexEntry[] {
  let idx = indexes.get(locale);
  if (!idx) {
    idx = buildIndex(locale);
    indexes.set(locale, idx);
  }
  return idx;
}

/** Ranked search: title matches first, then body matches by how often the words occur. Max 20 results. */
export function searchDocs(locale: Locale, rawQuery: string): SearchResult[] {
  const query = rawQuery.trim().toLowerCase();
  if (query.length < 2) return [];
  const words = query.split(/\s+/).filter(Boolean);

  const scored: { entry: IndexEntry; score: number; at: number }[] = [];
  for (const entry of getIndex(locale)) {
    let score = 0;
    if (entry.titleLower === query) score += 200;
    else if (entry.titleLower.startsWith(query)) score += 120;
    else if (entry.titleLower.includes(query)) score += 80;
    const inTitle = words.filter((w) => entry.titleLower.includes(w)).length;
    score += inTitle * 15;

    const first = entry.textLower.indexOf(query);
    if (first >= 0) {
      score += 10 + Math.min(entry.textLower.split(query).length - 1, 10) * 2;
    } else if (words.length > 1 && words.every((w) => entry.textLower.includes(w))) {
      score += 6;
    }
    if (score > 0) scored.push({ entry, score, at: first });
  }

  scored.sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  return scored.slice(0, 20).map(({ entry, at }) => {
    const start = at >= 0 ? Math.max(0, at - 50) : 0;
    const excerpt = entry.text.slice(start, start + 150).trim();
    return {
      title: entry.title,
      slug: entry.slug,
      category: entry.category,
      excerpt: (start > 0 ? "… " : "") + excerpt + (start + 150 < entry.text.length ? " …" : ""),
    };
  });
}
