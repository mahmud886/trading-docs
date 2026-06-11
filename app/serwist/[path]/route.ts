import { randomUUID } from "node:crypto";
import { createSerwistRoute } from "@serwist/turbopack";
import { getAllDocSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/constants";

const revision = process.env.VERCEL_GIT_COMMIT_SHA ?? randomUUID();

// Build a full list of pages to precache for offline support
const allPages: { url: string; revision: string }[] = [{ url: "/~offline", revision }];

// Add locale root pages
for (const locale of locales) {
  allPages.push({ url: `/${locale}`, revision });
}

// Add all doc/content pages for each locale and category
for (const locale of locales) {
  for (const category of CATEGORIES) {
    try {
      const slugs = getAllDocSlugs(locale, category);
      for (const slugParts of slugs) {
        allPages.push({
          url: `/${locale}/${category}/${slugParts.join("/")}`,
          revision,
        });
      }
      // Also cache the category index page
      allPages.push({ url: `/${locale}/${category}`, revision });
    } catch {
      // Skip if category doesn't exist for this locale
    }
  }
}

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } = createSerwistRoute({
  additionalPrecacheEntries: allPages,
  swSrc: "app/sw.ts",
  useNativeEsbuild: true,
});
