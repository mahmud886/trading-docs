export interface HomeCourse {
  slug: string;
  level: "beginner" | "core" | "advanced";
  lessons: number;
  en: { title: string; desc: string };
  bn: { title: string; desc: string };
}

export const HOME_COURSES: HomeCourse[] = [
  {
    slug: "price-action",
    level: "beginner",
    lessons: 32,
    en: { title: "Price Action", desc: "Candles, patterns and trade management." },
    bn: { title: "প্রাইস অ্যাকশন", desc: "ক্যান্ডেল, প্যাটার্ন ও ট্রেড ম্যানেজমেন্ট।" },
  },
  {
    slug: "forex-sessions",
    level: "beginner",
    lessons: 16,
    en: { title: "Forex Sessions", desc: "Session times in Bangladesh time." },
    bn: { title: "ফরেক্স সেশন", desc: "বাংলাদেশ সময়ে সেশনের সময়।" },
  },
  {
    slug: "smc",
    level: "core",
    lessons: 31,
    en: { title: "Smart Money Concepts", desc: "Structure, zones, liquidity and entries." },
    bn: { title: "স্মার্ট মানি কনসেপ্ট", desc: "স্ট্রাকচার, জোন, লিকুইডিটি ও এন্ট্রি।" },
  },
  {
    slug: "ict",
    level: "core",
    lessons: 31,
    en: { title: "ICT Methodology", desc: "Time, price and the daily framework." },
    bn: { title: "ICT মেথডোলজি", desc: "সময়, প্রাইস ও ডেইলি ফ্রেমওয়ার্ক।" },
  },
  {
    slug: "wyckoff",
    level: "advanced",
    lessons: 8,
    en: { title: "Wyckoff", desc: "Accumulation, distribution and phases." },
    bn: { title: "ওয়াইকফ", desc: "অ্যাকুমুলেশন, ডিস্ট্রিবিউশন ও ফেজ।" },
  },
  {
    slug: "order-flow",
    level: "advanced",
    lessons: 8,
    en: { title: "Order Flow", desc: "Volume, delta and absorption." },
    bn: { title: "অর্ডার ফ্লো", desc: "ভলিউম, ডেল্টা ও অ্যাবজর্পশন।" },
  },
  {
    slug: "auction-market",
    level: "advanced",
    lessons: 7,
    en: { title: "Auction Market", desc: "Profiles, value area and balance." },
    bn: { title: "অকশন মার্কেট", desc: "প্রোফাইল, ভ্যালু এরিয়া ও ব্যালান্স।" },
  },
  {
    slug: "intermarket",
    level: "advanced",
    lessons: 8,
    en: { title: "Intermarket", desc: "Dollar, yields, gold and risk appetite." },
    bn: { title: "ইন্টারমার্কেট", desc: "ডলার, ইয়িল্ড, গোল্ড ও রিস্ক অ্যাপেটাইট।" },
  },
  {
    slug: "quantitative",
    level: "advanced",
    lessons: 9,
    en: { title: "Quantitative", desc: "Expectancy, Kelly and Monte Carlo." },
    bn: { title: "কোয়ান্টিটেটিভ", desc: "এক্সপেক্টেন্সি, কেলি ও মন্টে কার্লো।" },
  },
];

export const HOME_LEVEL_LABEL = {
  en: { beginner: "Beginner", core: "Core", advanced: "Advanced" },
  bn: { beginner: "শুরুর", core: "মূল", advanced: "অ্যাডভান্সড" },
} as const;

export const HOME_TOOLS = [
  { slug: "position-calculator", en: "Position size", bn: "পজিশন সাইজ" },
  { slug: "risk-reward-calculator", en: "Risk to reward", bn: "রিস্ক রিওয়ার্ড" },
  { slug: "drawdown-calculator", en: "Drawdown", bn: "ড্রডাউন" },
  { slug: "pip-value-calculator", en: "Pip value", bn: "পিপ ভ্যালু" },
  { slug: "session-timer", en: "Session timer", bn: "সেশন টাইমার" },
  { slug: "journal-template", en: "Journal", bn: "জার্নাল" },
];
