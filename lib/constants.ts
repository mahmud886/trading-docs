export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tradingdocs.vercel.app";
export const SITE_NAME = "Trading Docs";
export const SITE_DESCRIPTION =
  "Complete trading education platform for Price Action, Smart Money Concepts, ICT methodology, and institutional order flow — learn how banks and hedge funds move the markets.";

export const ACCENT_COLORS = {
  green: "#00ff9d",
  blue: "#38bdf8",
  orange: "#fb923c",
  purple: "#c084fc",
  red: "#ef4444",
} as const;

export const CATEGORIES = [
  "price-action",
  "smc",
  "ict",
  "forex-sessions",
  "academy",
  "order-flow",
  "intermarket",
  "quantitative",
  "wyckoff",
  "auction-market",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_CONFIG: Record<
  Category,
  { label: string; labelBn: string; color: string; description: string; descriptionBn: string }
> = {
  "price-action": {
    label: "Price Action",
    labelBn: "প্রাইস অ্যাকশন",
    color: ACCENT_COLORS.green,
    description: "Candlesticks, market structure, entries & exits — the foundation of reading institutional intent",
    descriptionBn: "ক্যান্ডেলস্টিক, মার্কেট স্ট্রাকচার, এন্ট্রি ও এক্সিট — ইনস্টিটিউশনাল ইচ্ছা পড়ার ভিত্তি",
  },
  smc: {
    label: "Smart Money Concepts",
    labelBn: "স্মার্ট মানি কনসেপ্ট",
    color: ACCENT_COLORS.blue,
    description: "Order blocks, FVG, liquidity — decode how banks and hedge funds engineer price",
    descriptionBn: "অর্ডার ব্লক, FVG, লিকুইডিটি — ব্যাংক ও হেজ ফান্ড কিভাবে প্রাইস ইঞ্জিনিয়ার করে ডিকোড করুন",
  },
  ict: {
    label: "ICT Concepts",
    labelBn: "ICT কনসেপ্ট",
    color: ACCENT_COLORS.orange,
    description: "Kill zones, PD arrays, market maker models — the institutional playbook",
    descriptionBn: "কিল জোন, PD অ্যারে, মার্কেট মেকার মডেল — ইনস্টিটিউশনাল প্লেবুক",
  },
  "forex-sessions": {
    label: "Forex Sessions",
    labelBn: "ফরেক্স সেশন",
    color: ACCENT_COLORS.purple,
    description: "Session timing, kill zones & overlaps — when banks execute in BD time",
    descriptionBn: "সেশন টাইমিং, কিল জোন ও ওভারল্যাপ — ব্যাংকরা কখন এক্সিকিউট করে (BD সময়)",
  },
  academy: {
    label: "Academy",
    labelBn: "একাডেমি",
    color: ACCENT_COLORS.green,
    description: "Psychology, risk management, prop firms — build an institutional trading mindset",
    descriptionBn: "মনোবিজ্ঞান, রিস্ক ম্যানেজমেন্ট, প্রপ ফার্ম — ইনস্টিটিউশনাল ট্রেডিং মানসিকতা তৈরি করুন",
  },
  "order-flow": {
    label: "Order Flow",
    labelBn: "অর্ডার ফ্লো",
    color: ACCENT_COLORS.red,
    description:
      "DOM, volume profile, delta, footprint charts — how institutions actually execute and leave footprints",
    descriptionBn:
      "DOM, ভলিউম প্রোফাইল, ডেল্টা, ফুটপ্রিন্ট চার্ট — ইনস্টিটিউশনরা কিভাবে এক্সিকিউট করে এবং ফুটপ্রিন্ট রেখে যায়",
  },
  intermarket: {
    label: "Intermarket Analysis",
    labelBn: "ইন্টারমার্কেট অ্যানালাইসিস",
    color: ACCENT_COLORS.blue,
    description: "DXY correlations, yield curves, cross-asset signals — no fund trades in isolation",
    descriptionBn: "DXY কোরিলেশন, ইয়েল্ড কার্ভ, ক্রস-অ্যাসেট সিগন্যাল — কোনো ফান্ড বিচ্ছিন্নভাবে ট্রেড করে না",
  },
  quantitative: {
    label: "Quantitative Trading",
    labelBn: "কোয়ান্টিটেটিভ ট্রেডিং",
    color: ACCENT_COLORS.purple,
    description: "Expectancy, Kelly criterion, Monte Carlo, backtesting — systematic edge quantification",
    descriptionBn: "এক্সপেক্টেন্সি, কেলি ক্রাইটেরিয়ন, মন্টে কার্লো, ব্যাকটেস্টিং — সিস্টেম্যাটিক এজ কোয়ান্টিফিকেশন",
  },
  wyckoff: {
    label: "Wyckoff Method",
    labelBn: "ওয়াইকফ মেথড",
    color: ACCENT_COLORS.orange,
    description: "Composite man, accumulation/distribution schematics, VSA — the original institutional framework",
    descriptionBn: "কম্পোজিট ম্যান, একুমুলেশন/ডিস্ট্রিবিউশন স্কিম্যাটিক, VSA — মূল ইনস্টিটিউশনাল ফ্রেমওয়ার্ক",
  },
  "auction-market": {
    label: "Auction Market Theory",
    labelBn: "অকশন মার্কেট থিওরি",
    color: ACCENT_COLORS.green,
    description: "Market profile, TPO charts, value areas, initial balance — how price discovers fair value",
    descriptionBn:
      "মার্কেট প্রোফাইল, TPO চার্ট, ভ্যালু এরিয়া, ইনিশিয়াল ব্যালেন্স — প্রাইস কিভাবে ফেয়ার ভ্যালু আবিষ্কার করে",
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
