export const SITE_URL = "https://tradingdocs.vercel.app";
export const SITE_NAME = "Trading Docs";
export const SITE_DESCRIPTION =
  "Complete trading education platform for Price Action, Smart Money Concepts, and ICT methodology.";

export const ACCENT_COLORS = {
  green: "#00ff9d",
  blue: "#38bdf8",
  orange: "#fb923c",
  purple: "#c084fc",
} as const;

export const CATEGORIES = ["price-action", "smc", "ict", "forex-sessions", "academy"] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_CONFIG: Record<
  Category,
  { label: string; labelBn: string; color: string; description: string; descriptionBn: string }
> = {
  "price-action": {
    label: "Price Action",
    labelBn: "প্রাইস অ্যাকশন",
    color: ACCENT_COLORS.green,
    description: "Candlesticks, market structure, entries & exits",
    descriptionBn: "ক্যান্ডেলস্টিক, মার্কেট স্ট্রাকচার, এন্ট্রি ও এক্সিট",
  },
  smc: {
    label: "Smart Money Concepts",
    labelBn: "স্মার্ট মানি কনসেপ্ট",
    color: ACCENT_COLORS.blue,
    description: "Order blocks, FVG, liquidity, institutional flow",
    descriptionBn: "অর্ডার ব্লক, FVG, লিকুইডিটি, ইনস্টিটিউশনাল ফ্লো",
  },
  ict: {
    label: "ICT Concepts",
    labelBn: "ICT কনসেপ্ট",
    color: ACCENT_COLORS.orange,
    description: "Kill zones, PD arrays, market maker models",
    descriptionBn: "কিল জোন, PD অ্যারে, মার্কেট মেকার মডেল",
  },
  "forex-sessions": {
    label: "Forex Sessions",
    labelBn: "ফরেক্স সেশন",
    color: ACCENT_COLORS.purple,
    description: "Session timing, kill zones & overlaps in BD time",
    descriptionBn: "সেশন টাইমিং, কিল জোন ও ওভারল্যাপ (BD সময়)",
  },
  academy: {
    label: "Academy",
    labelBn: "একাডেমি",
    color: ACCENT_COLORS.green,
    description: "Psychology, risk management, prop firms & more",
    descriptionBn: "মনোবিজ্ঞান, রিস্ক ম্যানেজমেন্ট, প্রপ ফার্ম ও আরো",
  },
};

export const SESSION_COLORS = {
  sydney: "#a855f7",
  tokyo: "#3b82f6",
  london: "#00ff9d",
  newyork: "#ff9500",
} as const;

export function getCategoryLabel(category: Category, lang: string): string {
  const config = CATEGORY_CONFIG[category];
  return lang === "bn" ? config.labelBn : config.label;
}

export function getCategoryDescription(category: Category, lang: string): string {
  const config = CATEGORY_CONFIG[category];
  return lang === "bn" ? config.descriptionBn : config.description;
}
