"use client";

import { TradingViewChart } from "@/components/trading/tradingview-chart";

const symbols = [
  { symbol: "OANDA:EURUSD", label: "EUR/USD" },
  { symbol: "OANDA:GBPUSD", label: "GBP/USD" },
  { symbol: "TVC:GOLD", label: "Gold (XAU/USD)" },
  { symbol: "CAPITALCOM:US30", label: "US30 (Dow Jones)" },
  { symbol: "CAPITALCOM:US100", label: "NAS100" },
  { symbol: "BITSTAMP:BTCUSD", label: "BTC/USD" },
];

export default function ChartsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-bold text-white">Live Charts</h1>
      <p className="mt-3 text-lg text-zinc-400">
        Interactive TradingView charts for analysis and practice
      </p>

      <div className="mt-10">
        <TradingViewChart symbol="OANDA:EURUSD" height={550} />
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Popular Instruments
        </h2>
        <div className="flex flex-wrap gap-2">
          {symbols.map((s) => (
            <button
              key={s.symbol}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
              onClick={() => {
                // In a full implementation, this would update the chart symbol
                window.location.hash = s.symbol;
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

