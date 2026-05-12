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

  for (const lang of locales) {
    // Static pages
    entries.push(
      {
        url: `${BASE_URL}/${lang}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
        alternates: makeAlternates(""),
      },
      {
        url: `${BASE_URL}/${lang}/glossary`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: makeAlternates("/glossary"),
      },
      {
        url: `${BASE_URL}/${lang}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: makeAlternates("/blog"),
      },
      {
        url: `${BASE_URL}/${lang}/tools`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
        alternates: makeAlternates("/tools"),
      },
      {
        url: `${BASE_URL}/${lang}/charts`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
        alternates: makeAlternates("/charts"),
      }
    );

    // Doc pages
    for (const category of CATEGORIES) {
      entries.push({
        url: `${BASE_URL}/${lang}/${category}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: makeAlternates(`/${category}`),
      });

      const slugs = getAllDocSlugs(lang, category);
      for (const slugParts of slugs) {
        const slugPath = `/${category}/${slugParts.join("/")}`;
        entries.push({
          url: `${BASE_URL}/${lang}${slugPath}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
          alternates: makeAlternates(slugPath),
        });
      }
    }

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
  }

  return entries;
}

