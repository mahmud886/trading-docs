import { NextRequest, NextResponse } from "next/server";
import { searchDocs } from "@/lib/search-index";
import { type Locale, locales } from "@/lib/i18n";

export async function GET(request: NextRequest, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : "en";

  return NextResponse.json(searchDocs(locale, query), {
    // The index is rebuilt only when the server restarts, so results can be cached briefly.
    headers: { "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600" },
  });
}
