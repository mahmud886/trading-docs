import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getDocBySlug, getAdjacentDocs, getOrderedSlugsFromTree } from "@/lib/content";
import { extractToc } from "@/lib/toc";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { createMdxComponents } from "@/components/docs/mdx-components";
import { Toc } from "@/components/docs/toc";
import { PrevNextNav } from "@/components/docs/prev-next-nav";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { LessonCard } from "@/components/docs/lesson-card";
import { type Locale, getDictionary } from "@/lib/i18n";
import { CATEGORY_CONFIG, getCategoryLabel, getCategoryDescription, type Category, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface DocPageProps {
  lang: string;
  slug?: string[];
  category: Category;
}

export async function generateDocMetadata({ lang, slug, category }: DocPageProps): Promise<Metadata> {
  const config = CATEGORY_CONFIG[category];

  if (!slug || slug.length === 0) {
    return {
      title: config.label,
      description: config.description,
    };
  }

  const doc = getDocBySlug(lang as Locale, category, slug);
  if (!doc) return {};

  return {
    title: doc.meta.title,
    description: doc.meta.description,
    openGraph: {
      title: doc.meta.title,
      description: doc.meta.description,
      type: "article",
    },
  };
}

export async function DocPage({ lang, slug, category }: DocPageProps) {
  const dict = await getDictionary(lang as Locale);
  const config = CATEGORY_CONFIG[category];

  // If no slug, show category index
  if (!slug || slug.length === 0) {
    // Use the same ordering as the sidebar tree for consistency
    const orderedSlugs = getOrderedSlugsFromTree(lang as Locale, category);

    // Get all doc metas for cards in sidebar order
    const docs = orderedSlugs.map((s) => getDocBySlug(lang as Locale, category, s)).filter(Boolean);

    return (
      <div className="px-8 py-10">
        <div className="mb-8">
          <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: config.color }} />
          <h1 className="text-4xl font-bold text-foreground">{getCategoryLabel(category, lang)}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{getCategoryDescription(category, lang)}</p>
        </div>

        {docs.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {docs.map(
              (doc) =>
                doc && (
                  <LessonCard
                    key={doc.meta.slug}
                    meta={doc.meta}
                    lang={lang}
                    category={category}
                    levelLabel={(dict.levels as Record<string, string>)[doc.meta.level]}
                  />
                ),
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              {lang === "bn" ? "বিষয়বস্তু শীঘ্রই আসছে। পরে আবার দেখুন!" : "Content coming soon. Check back later!"}
            </p>
            <Link href={`/${lang}`} className="mt-4 inline-block text-sm text-accent-green hover:underline">
              {lang === "bn" ? "← হোমে ফিরে যান" : "← Back to home"}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Render specific doc
  const doc = getDocBySlug(lang as Locale, category, slug);
  if (!doc) notFound();

  const toc = extractToc(doc.content);
  const { prev, next } = getAdjacentDocs(lang as Locale, category, slug);

  const { content } = await compileMDX({
    source: doc.content,
    components: createMdxComponents(),
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
      },
    },
  });

  const schema = generateArticleSchema(doc.meta, `${SITE_URL}/${lang}/${category}/${slug.join("/")}`);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/${lang}` },
    { name: getCategoryLabel(category, lang), url: `${SITE_URL}/${lang}/${category}` },
    { name: doc.meta.title, url: `${SITE_URL}/${lang}/${category}/${slug.join("/")}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="flex gap-10 px-8 py-10">
        <article className="min-w-0 max-w-3xl flex-1">
          <Breadcrumbs
            items={[
              { label: getCategoryLabel(category, lang), href: `/${lang}/${category}` },
              ...slug.slice(0, -1).map((s, i) => ({
                label: s.replace(/-/g, " "),
                href: `/${lang}/${category}/${slug.slice(0, i + 1).join("/")}`,
              })),
              { label: doc.meta.title },
            ]}
          />

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium capitalize"
              style={{
                backgroundColor: `${config.color}15`,
                color: config.color,
              }}
            >
              {(dict.levels as Record<string, string>)[doc.meta.level] || doc.meta.level}
            </span>
            <span>
              {doc.meta.readingTime} {dict.docs.readingTime}
            </span>
            {doc.meta.lastUpdated && (
              <span>
                {dict.docs.lastUpdated}: {doc.meta.lastUpdated}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground">{doc.meta.title}</h1>
          {doc.meta.description && <p className="mt-3 text-lg text-muted-foreground">{doc.meta.description}</p>}

          <div className="mt-8">{content}</div>

          <PrevNextNav lang={lang} category={category} prev={prev} next={next} />
        </article>

        {/* Table of contents */}
        {toc.length > 0 && (
          <div className="hidden xl:block">
            <Toc items={toc} label={dict.docs.onThisPage} />
          </div>
        )}
      </div>
    </>
  );
}
