import { DocPage, generateDocMetadata } from "@/components/docs/doc-page";
import { getAllDocSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";
import type { Metadata } from "next";

const CATEGORY = "intermarket" as const;

export async function generateStaticParams() {
  const params: { lang: string; slug?: string[] }[] = [];
  for (const lang of locales) {
    params.push({ lang, slug: [] });
    const slugs = getAllDocSlugs(lang, CATEGORY);
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  return generateDocMetadata({ lang, slug, category: CATEGORY });
}

export default async function IntermarketPage({ params }: { params: Promise<{ lang: string; slug?: string[] }> }) {
  const { lang, slug } = await params;
  return <DocPage lang={lang} slug={slug} category={CATEGORY} />;
}
