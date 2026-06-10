import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getAllDocSlugs } from "@/lib/content";
import { getAllBlogPosts } from "@/lib/blog";
import { CATEGORIES } from "@/lib/constants";
import { SITE_URL } from "@/lib/constants";

const BASE_URL = SITE_URL;

function makeAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const lang of locales) {
    languages[lang] = `${BASE_URL}/${lang}${path}`;
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Tool slugs that have dedicated pages
  const toolSlugs = [
    "position-calculator",
    "pip-value-calculator",
    "fibonacci-calculator",
    "risk-reward-calculator",
    "session-timer",
    "lot-converter",
    "tp-sl-calculator",
    "portfolio-allocation",
    "atr-analyzer",
    "economic-calendar",
    "mtf-analyzer",
    "journal-template",
    "correlation-matrix",
    "currency-strength",
    "drawdown-calculator",
    "compounding-calculator",
    "expectancy-calculator",
    "cot-viewer",
    "swap-calculator",
    "margin-calculator",
    "equity-simulator",
    "regime-detector",
  ];

  for (const lang of locales) {
    // Homepage - highest priority
    entries.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: makeAlternates(""),
    });

    // Category index pages - high priority
    for (const category of CATEGORIES) {
      entries.push({
        url: `${BASE_URL}/${lang}/${category}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: makeAlternates(`/${category}`),
      });

      // Individual doc pages
      const slugs = getAllDocSlugs(lang, category);
      for (const slugParts of slugs) {
        const slugPath = `/${category}/${slugParts.join("/")}`;
        entries.push({
          url: `${BASE_URL}/${lang}${slugPath}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.8,
          alternates: makeAlternates(slugPath),
        });
      }
    }

    // Tools index
    entries.push({
      url: `${BASE_URL}/${lang}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: makeAlternates("/tools"),
    });

    // Individual tool pages
    for (const tool of toolSlugs) {
      entries.push({
        url: `${BASE_URL}/${lang}/tools/${tool}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: makeAlternates(`/tools/${tool}`),
      });
    }

    // Charts page
    entries.push({
      url: `${BASE_URL}/${lang}/charts`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.75,
      alternates: makeAlternates("/charts"),
    });

    // Blog index
    entries.push({
      url: `${BASE_URL}/${lang}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
      alternates: makeAlternates("/blog"),
    });

    // Blog posts
    for (const post of getAllBlogPosts(lang as (typeof locales)[number])) {
      const blogPath = `/blog/${post.slug}`;
      entries.push({
        url: `${BASE_URL}/${lang}${blogPath}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: makeAlternates(blogPath),
      });
    }

    // Glossary
    entries.push({
      url: `${BASE_URL}/${lang}/glossary`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: makeAlternates("/glossary"),
    });

    // Dashboard
    entries.push({
      url: `${BASE_URL}/${lang}/dashboard`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
      alternates: makeAlternates("/dashboard"),
    });

    // Legal pages
    entries.push(
      {
        url: `${BASE_URL}/${lang}/privacy-policy`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: makeAlternates("/privacy-policy"),
      },
      {
        url: `${BASE_URL}/${lang}/terms`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: makeAlternates("/terms"),
      },
      {
        url: `${BASE_URL}/${lang}/disclaimer`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: makeAlternates("/disclaimer"),
      },
    );
  }

  return entries;
}
