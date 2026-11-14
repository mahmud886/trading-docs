import type { Metadata } from "next";
import { getFeaturedBlogPosts } from "@/lib/blog";
import { HomeLayoutSwitch } from "@/components/home/home-layout-switch";
import { BentoHome, IndexHome } from "@/components/home/home-layouts";
import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { LearningPathsSection } from "@/components/home/learning-paths-section";
import { ToolsSection } from "@/components/home/tools-section";
import { InstitutionalEdgeSection } from "@/components/home/institutional-edge-section";
import { CtaSection } from "@/components/home/cta-section";
import { FeaturedBlogs } from "@/components/blog/featured-blogs";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

function getLocaleAlternates(path: string) {
  return Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : "en";
  const dict = await getDictionary(locale);
  const title = dict.hero.title;
  const description = dict.hero.subtitle;
  const url = `${SITE_URL}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getLocaleAlternates(""),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
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

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const featuredPosts = getFeaturedBlogPosts(lang as Locale, 3);

  const classic = (
    <div className="relative">
      <HeroSection lang={lang} dict={dict} />
      <CategoriesSection lang={lang} />
      <LearningPathsSection lang={lang} dict={dict} />
      <ToolsSection lang={lang} />
      <InstitutionalEdgeSection lang={lang} />
      <CtaSection lang={lang} />
    </div>
  );

  return (
    <div className="relative">
      <HomeLayoutSwitch layouts={{ classic, bento: <BentoHome lang={lang} />, index: <IndexHome lang={lang} /> }} />
      {featuredPosts.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-6 py-28">
          <FeaturedBlogs posts={featuredPosts} locale={lang} />
        </section>
      )}
    </div>
  );
}
