import { SITE_NAME, SITE_URL } from "./constants";

export function generateArticleSchema(
  meta: {
    title: string;
    description: string;
    level?: string;
    lastUpdated?: string;
    readingTime?: number;
    category?: string;
  },
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url,
    datePublished: meta.lastUpdated || "2026-01-01",
    dateModified: meta.lastUpdated || new Date().toISOString().split("T")[0],
    wordCount: meta.readingTime ? meta.readingTime * 200 : undefined,
    articleSection: meta.category,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/og/default.png`,
      },
    },
    author: {
      "@type": "Person",
      name: "Md. Iqbal Mahmud",
      url: "https://github.com/mahmud886",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: url.includes("/bn/") ? "bn" : "en",
    isAccessibleForFree: true,
    educationalLevel: meta.level || "beginner",
  };
}

export function generateCourseSchema(
  meta: { title: string; description: string; level?: string },
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: meta.title,
    description: meta.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: ["https://github.com/mahmud886"],
    },
    url,
    educationalLevel: meta.level ?? "beginner",
    isAccessibleForFree: true,
    availableLanguage: ["en", "bn"],
    courseMode: "online",
    teaches: meta.description,
  };
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Complete institutional-grade trading education platform covering Price Action, Smart Money Concepts, ICT methodology, Order Flow, Wyckoff Method, Intermarket Analysis, and Quantitative Trading — with 22+ professional tools. Learn how banks and hedge funds move the markets.",
    inLanguage: ["en", "bn"],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/og/default.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/en?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og/default.png`,
    description:
      "Free institutional-grade trading education platform with 350+ topics and 22+ professional tools.",
    sameAs: [
      "https://github.com/mahmud886",
      "https://bd.linkedin.com/in/mahmud886",
    ],
    founder: {
      "@type": "Person",
      name: "Md. Iqbal Mahmud",
    },
  };
}

export function generateSoftwareAppSchema(
  tool: { name: string; description: string; url: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}
