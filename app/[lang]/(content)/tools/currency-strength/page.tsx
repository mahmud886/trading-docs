"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "NZD", "CAD", "CHF"];

// Simulated strength scores (0-100)
function generateStrength(): Record<string, number> {
  const base: Record<string, number> = {
    USD: 72,
    EUR: 45,
    GBP: 58,
    JPY: 35,
    AUD: 62,
    NZD: 55,
    CAD: 48,
    CHF: 40,
  };
  const result: Record<string, number> = {};
  for (const [key, val] of Object.entries(base)) {
    result[key] = Math.max(0, Math.min(100, val + (Math.random() * 10 - 5)));
  }
  return result;
}

function getStrengthColor(value: number): string {
  if (value >= 70) return "text-green-400";
  if (value >= 55) return "text-green-300/70";
  if (value >= 45) return "text-zinc-400";
  if (value >= 30) return "text-red-300/70";
  return "text-red-400";
}

function getBarColor(value: number): string {
  if (value >= 70) return "bg-green-500";
  if (value >= 55) return "bg-green-500/60";
  if (value >= 45) return "bg-zinc-500";
  if (value >= 30) return "bg-red-500/60";
  return "bg-red-500";
}

export default function CurrencyStrengthPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const [strength, setStrength] = useState<Record<string, number>>({});
  const [timeframe, setTimeframe] = useState("4H");

  useEffect(() => {
    setStrength(generateStrength());
  }, [timeframe]);

  const sorted = Object.entries(strength).sort(([, a], [, b]) => b - a);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Currency Strength Meter</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Identify the strongest and weakest currencies — pair strong vs weak for maximum edge
      </p>

      <div className="mt-6 rounded-xl border border-accent-green/20 bg-accent-green/5 p-4 text-sm text-muted-foreground">
        🏦 Institutional strategy: Buy the STRONGEST currency against the WEAKEST. This gives you the highest
        probability directional trade with momentum on your side.
      </div>

      {/* Timeframe */}
      <div className="mt-8 flex gap-2">
        {["1H", "4H", "D1", "W1"].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              timeframe === tf
                ? "border-accent-green/30 bg-accent-green/10 text-accent-green"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Strength Bars */}
      <div className="mt-8 space-y-4">
        {sorted.map(([currency, value], index) => (
          <div key={currency} className="flex items-center gap-4">
            <span className="w-12 text-sm font-bold text-foreground">{currency}</span>
            <div className="flex-1 h-8 rounded-lg bg-muted/30 overflow-hidden relative">
              <div
                className={`h-full rounded-lg transition-all duration-500 ${getBarColor(value)}`}
                style={{ width: `${value}%` }}
              />
              <span
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold ${getStrengthColor(value)}`}
              >
                {value.toFixed(1)}
              </span>
            </div>
            <span className="w-16 text-xs text-muted-foreground">
              {index === 0 ? "🔥 Strongest" : index === sorted.length - 1 ? "❄️ Weakest" : ""}
            </span>
          </div>
        ))}
      </div>

      {/* Best Pair Suggestion */}
      {sorted.length >= 2 && (
        <div className="mt-8 rounded-xl border border-accent-green/30 bg-accent-green/5 p-6">
          <h3 className="font-semibold text-foreground">🎯 Suggested Trade</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-bold text-green-400">
              BUY {sorted[0][0]}/{sorted[sorted.length - 1][0]}
            </span>{" "}
            — Strongest currency ({sorted[0][0]}: {sorted[0][1].toFixed(1)}) against weakest (
            {sorted[sorted.length - 1][0]}: {sorted[sorted.length - 1][1].toFixed(1)})
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Always confirm with ICT/SMC market structure before entry. Strength = bias, structure = timing.
          </p>
        </div>
      )}

      {/* Tips */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground">💡 How Institutions Use Currency Strength</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Pair the strongest vs weakest for highest probability momentum trades</li>
          <li>• Avoid trading pairs where both currencies have similar strength (choppy)</li>
          <li>• Diverging strength between sessions = potential reversal signal</li>
          <li>• Sudden strength shift after news = institutional flow change</li>
          <li>• Use 4H strength for intraday bias, D1 for swing trade direction</li>
        </ul>
      </div>
    </div>
  );
}
