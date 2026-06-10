import { NextRequest, NextResponse } from "next/server";
import { getAllDocSlugs, getDocBySlug } from "@/lib/content";
import { type Locale, locales } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/constants";

export async function GET(request: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  const locale = locales.includes(lang as Locale) ? (lang as Locale) : "en";
  const results: {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
  }[] = [];

  for (const cat of CATEGORIES) {
    const slugs = getAllDocSlugs(locale, cat);
    for (const slugParts of slugs) {
      const doc = getDocBySlug(locale, cat, slugParts);
      if (!doc) continue;
      if (doc.meta.title.toLowerCase().includes(query) || doc.content.toLowerCase().includes(query)) {
        const idx = doc.content.toLowerCase().indexOf(query);
        results.push({
          title: doc.meta.title,
          slug: `/${lang}/${cat}/${slugParts.join("/")}`,
          category: cat,
          excerpt: idx >= 0 ? doc.content.slice(Math.max(0, idx - 40), idx + 80).trim() : "",
        });
      }
      if (results.length >= 20) break;
    }
    if (results.length >= 20) break;
  }

  return NextResponse.json(results);
}
