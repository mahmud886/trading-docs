"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SwapCalculatorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [lotSize, setLotSize] = useState(1.0);
  const [pair, setPair] = useState("EUR/USD");
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [days, setDays] = useState(7);

  // Simulated swap rates (pips per lot per night)
  const swapRates: Record<string, { long: number; short: number }> = {
    "EUR/USD": { long: -6.5, short: 3.2 },
    "GBP/USD": { long: -5.8, short: 2.8 },
    "USD/JPY": { long: 4.5, short: -8.2 },
    "AUD/USD": { long: -3.2, short: 0.8 },
    "USD/CAD": { long: 2.1, short: -5.5 },
    "NZD/USD": { long: -2.8, short: 0.5 },
    "EUR/GBP": { long: -4.2, short: 1.5 },
    "USD/CHF": { long: 3.8, short: -7.1 },
    GOLD: { long: -12.5, short: 5.8 },
    "BTC/USD": { long: -25.0, short: -15.0 },
  };

  const rate = swapRates[pair] || { long: 0, short: 0 };
  const dailySwap = direction === "long" ? rate.long : rate.short;
  const totalSwapPips = dailySwap * days * lotSize;
  const totalSwapUSD = totalSwapPips * 10; // $10 per pip for standard lot (approximation)
  const wednesdayTriple = dailySwap * 3 * lotSize;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Swap/Rollover Calculator</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Calculate the cost of holding positions overnight — critical for carry trade analysis
      </p>

      <div className="mt-6 rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-4 text-sm text-muted-foreground">
        🏦 Carry traders earn positive swaps by buying high-interest currencies vs low-interest currencies.
        Institutional FX desks factor swap costs into every position. Wednesday night = 3x swap (weekends counted).
      </div>

      {/* Inputs */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground">Currency Pair</label>
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          >
            {Object.keys(swapRates).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as "long" | "short")}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          >
            <option value="long">Long (Buy)</option>
            <option value="short">Short (Sell)</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Lot Size</label>
          <input
            type="number"
            value={lotSize}
            onChange={(e) => setLotSize(Number(e.target.value))}
            step="0.1"
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Holding Period (Days)</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Daily Swap</div>
          <div className={`mt-1 text-xl font-bold ${dailySwap >= 0 ? "text-green-400" : "text-red-400"}`}>
            {dailySwap >= 0 ? "+" : ""}
            {(dailySwap * lotSize * 10).toFixed(2)} USD
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Wednesday (3x)</div>
          <div className={`mt-1 text-xl font-bold ${wednesdayTriple >= 0 ? "text-green-400" : "text-red-400"}`}>
            {wednesdayTriple >= 0 ? "+" : ""}
            {(wednesdayTriple * 10).toFixed(2)} USD
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Total ({days} days)</div>
          <div className={`mt-1 text-xl font-bold ${totalSwapUSD >= 0 ? "text-green-400" : "text-red-400"}`}>
            {totalSwapUSD >= 0 ? "+" : ""}
            {totalSwapUSD.toFixed(2)} USD
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Annual Projection</div>
          <div className={`mt-1 text-xl font-bold ${dailySwap >= 0 ? "text-green-400" : "text-red-400"}`}>
            {(dailySwap * lotSize * 10 * 365).toFixed(0)} USD
          </div>
        </div>
      </div>

      {/* Swap Rate Table */}
      <div className="mt-8 overflow-x-auto">
        <h3 className="mb-4 font-semibold text-foreground">All Swap Rates (per standard lot/night)</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="p-3 text-left">Pair</th>
              <th className="p-3 text-right">Long Swap</th>
              <th className="p-3 text-right">Short Swap</th>
              <th className="p-3 text-right">Best Direction</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(swapRates).map(([p, rates]) => (
              <tr key={p} className="border-b border-border/30">
                <td className="p-3 font-medium text-foreground">{p}</td>
                <td className={`p-3 text-right font-mono ${rates.long >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {rates.long >= 0 ? "+" : ""}
                  {rates.long} pips
                </td>
                <td className={`p-3 text-right font-mono ${rates.short >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {rates.short >= 0 ? "+" : ""}
                  {rates.short} pips
                </td>
                <td className="p-3 text-right text-xs text-muted-foreground">
                  {rates.long > rates.short ? "📈 Long" : "📉 Short"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
