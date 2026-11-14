/**
 * The Academy "Markets & Trading Foundation" folder holds about 60 lessons. The sidebar splits them into
 * topic groups so the list is scannable. Files and URLs stay where they are; only the sidebar order changes.
 */
export interface AcademyGroup {
  id: string;
  title: { en: string; bn: string };
  slugs: string[];
}

export const ACADEMY_GROUPS: AcademyGroup[] = [
  {
    id: "start",
    title: { en: "Start here", bn: "শুরু করুন" },
    slugs: [
      "what-is-trading",
      "investing-vs-trading",
      "types-of-traders",
      "forex-basics",
      "pips-points-terminology",
      "bid-ask-spread",
      "margin-leverage",
      "order-types",
    ],
  },
  {
    id: "markets",
    title: { en: "Markets and instruments", bn: "মার্কেট ও ইনস্ট্রুমেন্ট" },
    slugs: [
      "futures-basics",
      "stock-market-basics",
      "commodity-markets",
      "gold-trading",
      "indices-trading",
      "bonds-etfs",
      "options-trading-basics",
      "crypto-trading",
      "cryptocurrency-fundamentals",
      "perpetual-futures",
    ],
  },
  {
    id: "technical",
    title: { en: "Technical analysis", bn: "টেকনিক্যাল অ্যানালাইসিস" },
    slugs: [
      "technical-indicators",
      "support-resistance-advanced",
      "chart-patterns",
      "trendlines-channels",
      "fibonacci-trading",
      "elliott-wave-theory",
      "harmonic-patterns",
      "bollinger-bands-trading",
      "volatility-analysis",
    ],
  },
  {
    id: "risk",
    title: { en: "Risk, psychology and process", bn: "রিস্ক, সাইকোলজি ও প্রসেস" },
    slugs: [
      "risk-management",
      "position-sizing",
      "money-management-advanced",
      "trading-plan",
      "trading-psychology",
      "journaling",
      "performance-tracking",
      "backtesting-forward-testing",
      "prop-firm-guide",
    ],
  },
  {
    id: "macro",
    title: { en: "Macro and fundamentals", bn: "ম্যাক্রো ও ফান্ডামেন্টাল" },
    slugs: [
      "economic-indicators-macro",
      "economic-calendar-guide",
      "central-bank-analysis",
      "cot-report",
      "institutional-positioning",
      "sentiment-analysis",
      "interest-rate-differentials",
      "gdp-inflation-cycles",
      "carry-trade",
      "seasonal-patterns",
    ],
  },
  {
    id: "execution",
    title: { en: "Execution and costs", bn: "এক্সিকিউশন ও খরচ" },
    slugs: [
      "trading-costs-spreads",
      "slippage-management",
      "spread-dynamics",
      "liquidity-providers",
      "ecn-vs-market-maker",
      "smart-order-routing",
      "twap-execution",
      "vwap-execution",
      "partial-fills-scaling",
    ],
  },
  {
    id: "onchain",
    title: { en: "Crypto derivatives and on-chain", bn: "ক্রিপ্টো ডেরিভেটিভ ও অন-চেইন" },
    slugs: [
      "funding-rate-trading",
      "liquidation-heatmaps",
      "on-chain-analysis",
      "basis-trading",
      "dex-liquidity-pools",
      "mev-order-flow",
    ],
  },
];

export const ACADEMY_MORE_TITLE = { en: "More", bn: "আরও" };
