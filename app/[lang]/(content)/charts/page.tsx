"use client";

import { useState } from "react";
import { TradingViewChart } from "@/components/trading/tradingview-chart";
import { usePathname } from "next/navigation";

const symbols = [
  { symbol: "OANDA:EURUSD", label: "EUR/USD", category: "forex" },
  { symbol: "OANDA:GBPUSD", label: "GBP/USD", category: "forex" },
  { symbol: "OANDA:USDJPY", label: "USD/JPY", category: "forex" },
  { symbol: "OANDA:AUDUSD", label: "AUD/USD", category: "forex" },
  { symbol: "TVC:GOLD", label: "Gold (XAU/USD)", category: "commodity" },
  { symbol: "TVC:SILVER", label: "Silver (XAG/USD)", category: "commodity" },
  { symbol: "TVC:USOIL", label: "WTI Oil", category: "commodity" },
  { symbol: "CAPITALCOM:US30", label: "US30 (Dow Jones)", category: "index" },
  { symbol: "CAPITALCOM:US100", label: "NAS100", category: "index" },
  { symbol: "CAPITALCOM:US500", label: "S&P 500", category: "index" },
  { symbol: "BITSTAMP:BTCUSD", label: "BTC/USD", category: "crypto" },
  { symbol: "BITSTAMP:ETHUSD", label: "ETH/USD", category: "crypto" },
  { symbol: "TVC:DXY", label: "DXY (Dollar Index)", category: "institutional" },
  { symbol: "TVC:US10Y", label: "US 10Y Yield", category: "institutional" },
  { symbol: "TVC:VIX", label: "VIX (Fear Index)", category: "institutional" },
];

const chartsDict = {
  en: {
    title: "Live Charts",
    subtitle: "Interactive TradingView charts for institutional-grade analysis and practice",
    popularInstruments: "Popular Instruments",
    institutionalWatch: "Institutional Watchlist",
    institutionalNote:
      "🏦 Banks & institutions monitor DXY, bond yields, and VIX alongside their primary positions for correlation & risk management.",
    all: "All",
    forex: "Forex",
    commodity: "Commodities",
    index: "Indices",
    crypto: "Crypto",
    institutional: "Institutional",
  },
  bn: {
    title: "লাইভ চার্ট",
    subtitle: "ইনস্টিটিউশনাল-গ্রেড অ্যানালাইসিস ও প্র্যাকটিসের জন্য ইন্টারেক্টিভ TradingView চার্ট",
    popularInstruments: "জনপ্রিয় ইনস্ট্রুমেন্ট",
    institutionalWatch: "ইনস্টিটিউশনাল ওয়াচলিস্ট",
    institutionalNote:
      "🏦 ব্যাংক ও ইনস্টিটিউশনরা তাদের প্রাথমিক পজিশনের পাশাপাশি DXY, বন্ড ইয়েল্ড এবং VIX মনিটর করে correlation ও রিস্ক ম্যানেজমেন্টের জন্য।",
    all: "সব",
    forex: "ফরেক্স",
    commodity: "কমোডিটি",
    index: "ইন্ডিসেস",
    crypto: "ক্রিপ্টো",
    institutional: "ইনস্টিটিউশনাল",
  },
};

export default function ChartsPage() {
  const [activeSymbol, setActiveSymbol] = useState("OANDA:EURUSD");
  const [activeFilter, setActiveFilter] = useState("all");
  const pathname = usePathname();
  const lang = (pathname.split("/")[1] || "en") as "en" | "bn";
  const t = chartsDict[lang] || chartsDict.en;

  const filteredSymbols = activeFilter === "all" ? symbols : symbols.filter((s) => s.category === activeFilter);

  const filters = ["all", "forex", "commodity", "index", "crypto", "institutional"] as const;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-bold text-foreground">{t.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{t.subtitle}</p>

      {/* Institutional Note */}
      <div className="mt-6 rounded-xl border border-accent-blue/20 bg-accent-blue/5 p-4 text-sm text-muted-foreground">
        {t.institutionalNote}
      </div>

      <div className="mt-10">
        <TradingViewChart symbol={activeSymbol} height={550} />
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-foreground">{t.popularInstruments}</h2>

        {/* Category Filter */}
        <div className="mb-4 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "border-accent-green/30 bg-accent-green/10 text-accent-green"
                  : "border-border bg-card text-muted-foreground hover:border-accent-green/20 hover:text-foreground"
              }`}
            >
              {t[filter as keyof typeof t]}
            </button>
          ))}
        </div>

        {/* Symbol Buttons */}
        <div className="flex flex-wrap gap-2">
          {filteredSymbols.map((s) => (
            <button
              key={s.symbol}
              className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                activeSymbol === s.symbol
                  ? "border-accent-green/50 bg-accent-green/10 text-accent-green"
                  : "border-border bg-card text-muted-foreground hover:border-accent-green/20 hover:text-foreground"
              }`}
              onClick={() => setActiveSymbol(s.symbol)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
