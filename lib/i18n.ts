export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("@/lib/dictionaries/en.json").then((m) => m.default),
  bn: () => import("@/lib/dictionaries/bn.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
