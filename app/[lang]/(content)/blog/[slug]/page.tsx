import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { createMdxComponents } from "@/components/docs/mdx-components";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import remarkGfm from "remark-gfm";
import type { Locale } from "@/lib/i18n";
import { getBlogPostBySlug, getRelatedBlogPosts, getAllBlogPosts } from "@/lib/blog";
import { generateArticleSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { locales } from "@/lib/i18n";

function getLocaleAlternates(slug: string) {
  return Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}/${locale}/blog/${slug}`]));
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const locale of ["en", "bn"]) {
    const posts = getAllBlogPosts(locale as Locale);
    for (const post of posts) {
      params.push({ lang: locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang === "bn" ? "bn" : "en";
  const post = getBlogPostBySlug(locale as Locale, slug);

  if (!post) return {};

  const title = post.title;
  const description = post.description;
  const url = `${SITE_URL}/${locale}/blog/${slug}`;

  return {
    title,
    description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: getLocaleAlternates(slug),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: ["/images/og/default.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/default.png"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const post = getBlogPostBySlug(locale, slug);

  if (!post) return notFound();

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: createMdxComponents(),
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  // Get related posts
  const relatedPosts = getRelatedBlogPosts(locale, post, 3);
  const schema = generateArticleSchema(
    {
      title: post.title,
      description: post.description,
      lastUpdated: post.date,
    },
    `${SITE_URL}/${locale}/blog/${slug}`,
  );

  const isBn = locale === "bn";
  const backText = isBn ? "← ব্লগে ফিরে যান" : "← Back to Blog";
  const minRead = isBn ? "মিনিট পড়া" : "min read";

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Link
        href={`/${lang}/blog`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-green"
      >
        {backText}
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {post.category && (
              <span className="rounded-full border border-border px-2.5 py-0.5 font-medium">{post.category}</span>
            )}
            {post.date && (
              <span className="flex items-center gap-1">
                <Calendar size={10} />
                {post.date}
              </span>
            )}
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {post.readingTime} {minRead}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-bold text-foreground">{post.title}</h1>
          {post.description && <p className="mt-3 text-lg text-muted-foreground">{post.description}</p>}
        </div>

        <div className="prose max-w-none dark:prose-invert">{mdxContent}</div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} locale={locale} />}
    </div>
  );
}
