export function generateArticleSchema(
  meta: {
    title: string;
    description: string;
    level?: string;
    lastUpdated?: string;
  },
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url,
    dateModified: meta.lastUpdated || new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Trading Docs Academy",
    },
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
    provider: { "@type": "Organization", name: "Trading Docs Academy" },
    url,
    educationalLevel: meta.level ?? "beginner",
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

