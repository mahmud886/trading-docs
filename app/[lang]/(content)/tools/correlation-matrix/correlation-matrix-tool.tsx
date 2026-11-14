"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { pairs, getCorrelation, getColor } from "./correlation-matrix-data";

export function CorrelationMatrixPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const [selectedPairs] = useState(pairs.slice(0, 8));
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="mx-auto max-w-6xl py-10">
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
        Institutional traders never have two highly correlated positions in the same direction. A EUR/USD long + GBP/USD
        long = double risk on USD weakness. Use this matrix to avoid hidden concentration risk.
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
        <h3 className="font-semibold text-foreground">Institutional Correlation Rules</h3>
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
