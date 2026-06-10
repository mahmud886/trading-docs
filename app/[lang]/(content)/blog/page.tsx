import type { Metadata } from "next";
import { getAllBlogPosts, getAllBlogCategories } from "@/lib/blog";
import { type Locale } from "@/lib/i18n";
import { BlogListClient } from "@/components/blog/blog-list-client";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { locales } from "@/lib/i18n";

function getLocaleAlternates(path: string) {
  return Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "bn" ? "bn" : "en";
  const isBn = locale === "bn";
  const title = isBn ? "ট্রেডিং ব্লগ" : "Trading Blog";
  const description = isBn
    ? "প্রাইস অ্যাকশন, রিস্ক ম্যানেজমেন্ট, সাইকোলজি এবং আরও অনেক কিছুর সর্বশেষ ট্রেডিং নিবন্ধ পড়ুন।"
    : "Read the latest trading articles on price action, risk management, psychology, and more.";
  const url = `${SITE_URL}/${locale}/blog`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getLocaleAlternates("/blog"),
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: ["/images/og/default.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/images/og/default.png"],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;

  const posts = getAllBlogPosts(locale);
  const categories = getAllBlogCategories(locale);

  const isBn = locale === "bn";

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{isBn ? "ট্রেডিং ব্লগ" : "Trading Blog"}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          {isBn
            ? "প্রাইস অ্যাকশন, রিস্ক ম্যানেজমেন্ট, সাইকোলজি এবং আরও অনেক কিছু সম্পর্কে সর্বশেষ নিবন্ধ পড়ুন।"
            : "Read our latest articles on price action, risk management, psychology, and more."}
        </p>
      </div>

      {/* Blog List with Pagination & Filter */}
      <BlogListClient posts={posts} categories={categories} locale={locale} pageSize={6} />
    </div>
  );
}
