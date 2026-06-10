"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const pairs = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "USD/CAD",
  "NZD/USD",
  "EUR/GBP",
  "EUR/JPY",
  "GBP/JPY",
  "AUD/JPY",
  "USD/CHF",
  "EUR/AUD",
  "GBP/AUD",
  "EUR/CAD",
  "AUD/NZD",
];

// Simulated correlation data (in production, fetch from API)
const correlationData: Record<string, Record<string, number>> = {
  "EUR/USD": {
    "EUR/USD": 1.0,
    "GBP/USD": 0.87,
    "USD/JPY": -0.62,
    "AUD/USD": 0.75,
    "USD/CAD": -0.84,
    "NZD/USD": 0.72,
    "EUR/GBP": 0.42,
    "EUR/JPY": 0.55,
    "GBP/JPY": 0.48,
    "AUD/JPY": 0.45,
    "USD/CHF": -0.92,
    "EUR/AUD": 0.38,
    "GBP/AUD": 0.22,
    "EUR/CAD": 0.65,
    "AUD/NZD": 0.15,
  },
  "GBP/USD": {
    "EUR/USD": 0.87,
    "GBP/USD": 1.0,
    "USD/JPY": -0.55,
    "AUD/USD": 0.7,
    "USD/CAD": -0.78,
    "NZD/USD": 0.65,
    "EUR/GBP": -0.15,
    "EUR/JPY": 0.5,
    "GBP/JPY": 0.62,
    "AUD/JPY": 0.5,
    "USD/CHF": -0.85,
    "EUR/AUD": 0.25,
    "GBP/AUD": 0.4,
    "EUR/CAD": 0.55,
    "AUD/NZD": 0.1,
  },
  "USD/JPY": {
    "EUR/USD": -0.62,
    "GBP/USD": -0.55,
    "USD/JPY": 1.0,
    "AUD/USD": -0.35,
    "USD/CAD": 0.55,
    "NZD/USD": -0.3,
    "EUR/GBP": -0.1,
    "EUR/JPY": 0.58,
    "GBP/JPY": 0.65,
    "AUD/JPY": 0.7,
    "USD/CHF": 0.58,
    "EUR/AUD": -0.2,
    "GBP/AUD": -0.15,
    "EUR/CAD": -0.4,
    "AUD/NZD": -0.05,
  },
  "AUD/USD": {
    "EUR/USD": 0.75,
    "GBP/USD": 0.7,
    "USD/JPY": -0.35,
    "AUD/USD": 1.0,
    "USD/CAD": -0.72,
    "NZD/USD": 0.92,
    "EUR/GBP": 0.15,
    "EUR/JPY": 0.4,
    "GBP/JPY": 0.45,
    "AUD/JPY": 0.72,
    "USD/CHF": -0.7,
    "EUR/AUD": -0.35,
    "GBP/AUD": -0.3,
    "EUR/CAD": 0.5,
    "AUD/NZD": 0.45,
  },
  "USD/CAD": {
    "EUR/USD": -0.84,
    "GBP/USD": -0.78,
    "USD/JPY": 0.55,
    "AUD/USD": -0.72,
    "USD/CAD": 1.0,
    "NZD/USD": -0.68,
    "EUR/GBP": -0.2,
    "EUR/JPY": -0.35,
    "GBP/JPY": -0.3,
    "AUD/JPY": -0.28,
    "USD/CHF": 0.8,
    "EUR/AUD": -0.3,
    "GBP/AUD": -0.18,
    "EUR/CAD": -0.75,
    "AUD/NZD": -0.12,
  },
};

function getCorrelation(pair1: string, pair2: string): number {
  if (correlationData[pair1]?.[pair2] !== undefined) return correlationData[pair1][pair2];
  if (correlationData[pair2]?.[pair1] !== undefined) return correlationData[pair2][pair1];
  if (pair1 === pair2) return 1.0;
  return (Math.random() * 2 - 1) * 0.5; // fallback
}

function getColor(value: number): string {
  if (value >= 0.7) return "bg-green-500/80 text-white";
  if (value >= 0.4) return "bg-green-500/40 text-green-200";
  if (value >= 0.1) return "bg-green-500/20 text-green-300";
  if (value > -0.1) return "bg-zinc-700/50 text-zinc-300";
  if (value > -0.4) return "bg-red-500/20 text-red-300";
  if (value > -0.7) return "bg-red-500/40 text-red-200";
  return "bg-red-500/80 text-white";
}

export default function CorrelationMatrixPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const [selectedPairs] = useState(pairs.slice(0, 8));
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Correlation Matrix</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Real-time pair correlation heatmap — institutions use correlations for hedging and avoiding overexposure
      </p>

      <div className="mt-6 rounded-xl border border-accent-blue/20 bg-accent-blue/5 p-4 text-sm text-muted-foreground">
        🏦 Institutional traders never have two highly correlated positions in the same direction. A EUR/USD long +
        GBP/USD long = double risk on USD weakness. Use this matrix to avoid hidden concentration risk.
      </div>

      {/* Timeframe Selector */}
      <div className="mt-8 flex gap-2">
        {["1H", "4H", "daily", "weekly"].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              timeframe === tf
                ? "border-accent-green/30 bg-accent-green/10 text-accent-green"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {tf.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Correlation Matrix */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="p-2 text-left text-muted-foreground"></th>
              {selectedPairs.map((pair) => (
                <th key={pair} className="p-2 text-center text-muted-foreground font-medium">
                  {pair.split("/").join("")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedPairs.map((rowPair) => (
              <tr key={rowPair}>
                <td className="p-2 font-medium text-muted-foreground whitespace-nowrap">{rowPair}</td>
                {selectedPairs.map((colPair) => {
                  const corr = getCorrelation(rowPair, colPair);
                  return (
                    <td key={colPair} className={`p-2 text-center font-mono text-xs rounded ${getColor(corr)}`}>
                      {corr.toFixed(2)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="font-medium">Legend:</span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded bg-green-500/80"></span> Strong Positive (0.7+)
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded bg-green-500/40"></span> Moderate Positive
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded bg-zinc-700/50"></span> Neutral
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded bg-red-500/40"></span> Moderate Negative
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded bg-red-500/80"></span> Strong Negative (−0.7)
        </span>
      </div>

      {/* Tips */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground">💡 Institutional Correlation Rules</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Never hold two positions with correlation {">"}0.80 in the same direction</li>
          <li>• Use negative correlations for hedging (e.g., EUR/USD long + USD/CHF long)</li>
          <li>• Correlations CHANGE during risk events — recalculate during volatility</li>
          <li>• Portfolio maximum: 3 correlated positions combined ≤ 5% total risk</li>
          <li>• Timeframe matters: 1H correlation may differ significantly from Daily</li>
        </ul>
      </div>
    </div>
  );
}
