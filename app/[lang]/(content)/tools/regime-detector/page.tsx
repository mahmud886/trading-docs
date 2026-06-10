"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function RegimeDetectorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [atr14, setAtr14] = useState(45);
  const [atr7, setAtr7] = useState(55);
  const [adx, setAdx] = useState(22);
  const [bbWidth, setBbWidth] = useState(0.015);
  const [recentRange, setRecentRange] = useState(120);
  const [avgRange, setAvgRange] = useState(100);

  // Regime detection logic
  const getRegime = () => {
    const volatilityRatio = atr7 / atr14;
    const rangeExpansion = recentRange / avgRange;

    if (adx > 25 && volatilityRatio > 1.1) {
      return {
        regime: "TRENDING",
        confidence: Math.min(95, adx + (volatilityRatio - 1) * 50),
        color: "text-green-400",
        bg: "border-green-500/30 bg-green-500/5",
      };
    }
    if (adx < 20 && bbWidth < 0.012) {
      return {
        regime: "RANGING",
        confidence: Math.min(95, (20 - adx) * 5 + (0.015 - bbWidth) * 3000),
        color: "text-blue-400",
        bg: "border-blue-500/30 bg-blue-500/5",
      };
    }
    if (volatilityRatio > 1.3 || rangeExpansion > 1.5) {
      return {
        regime: "VOLATILE",
        confidence: Math.min(95, volatilityRatio * 40 + rangeExpansion * 20),
        color: "text-red-400",
        bg: "border-red-500/30 bg-red-500/5",
      };
    }
    if (adx >= 20 && adx <= 25) {
      return {
        regime: "TRANSITIONING",
        confidence: 50,
        color: "text-yellow-400",
        bg: "border-yellow-500/30 bg-yellow-500/5",
      };
    }
    return { regime: "RANGING", confidence: 60, color: "text-blue-400", bg: "border-blue-500/30 bg-blue-500/5" };
  };

  const result = getRegime();

  const strategies: Record<string, { strategy: string; avoid: string; sizing: string }> = {
    TRENDING: {
      strategy: "Trend-following: trade pullbacks to OB/FVG in direction of trend. Trail stops aggressively.",
      avoid: "Mean reversion, counter-trend entries, tight take-profits",
      sizing: "Full size (1-2% risk). Momentum is with you.",
    },
    RANGING: {
      strategy: "Mean reversion: fade extremes, target POC/VWAP. Sell at VAH, buy at VAL.",
      avoid: "Breakout strategies, trend-following, wide targets",
      sizing: "Reduced size (0.5-1% risk). Choppy conditions reduce hit rate.",
    },
    VOLATILE: {
      strategy: "Reduced trading. Only highest conviction setups with wider stops. Wait for clarity.",
      avoid: "Tight stops, high frequency, overleveraging",
      sizing: "Minimal size (0.25-0.5% risk). Volatility expansion means larger stops needed.",
    },
    TRANSITIONING: {
      strategy: "Wait for confirmation of new regime. Prepare watchlist for either direction.",
      avoid: "Forcing trades, large positions, assuming old regime continues",
      sizing: "Minimal or no positions until regime clarifies.",
    },
  };

  const currentStrategy = strategies[result.regime];

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Market Regime Detector</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        ADX/ATR-based trending, ranging, and volatile regime classification
      </p>

      <div className="mt-6 rounded-xl border border-accent-orange/20 bg-accent-orange/5 p-4 text-sm text-muted-foreground">
        🏦 Institutional quant funds adapt their strategy based on market regime. A trend-following system that works
        beautifully in trending markets will BLEED in ranges. Regime detection = strategy selection.
      </div>

      {/* Inputs */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="text-sm font-medium text-foreground">ATR(14) - pips</label>
          <input
            type="number"
            value={atr14}
            onChange={(e) => setAtr14(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">ATR(7) - pips</label>
          <input
            type="number"
            value={atr7}
            onChange={(e) => setAtr7(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">ADX(14)</label>
          <input
            type="number"
            value={adx}
            onChange={(e) => setAdx(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Bollinger Band Width</label>
          <input
            type="number"
            value={bbWidth}
            onChange={(e) => setBbWidth(Number(e.target.value))}
            step="0.001"
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Recent 5-day Range (pips)</label>
          <input
            type="number"
            value={recentRange}
            onChange={(e) => setRecentRange(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Average 20-day Range (pips)</label>
          <input
            type="number"
            value={avgRange}
            onChange={(e) => setAvgRange(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
      </div>

      {/* Result */}
      <div className={`mt-8 rounded-xl border p-8 text-center ${result.bg}`}>
        <div className={`text-5xl font-bold ${result.color}`}>{result.regime}</div>
        <div className="mt-2 text-sm text-muted-foreground">Confidence: {result.confidence.toFixed(0)}%</div>
      </div>

      {/* Strategy Recommendation */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground">📋 Strategy Recommendation</h3>
        <div className="mt-4 space-y-4 text-sm">
          <div>
            <span className="font-medium text-green-400">✅ Optimal Strategy:</span>
            <p className="mt-1 text-muted-foreground">{currentStrategy.strategy}</p>
          </div>
          <div>
            <span className="font-medium text-red-400">❌ Avoid:</span>
            <p className="mt-1 text-muted-foreground">{currentStrategy.avoid}</p>
          </div>
          <div>
            <span className="font-medium text-accent-blue">📐 Position Sizing:</span>
            <p className="mt-1 text-muted-foreground">{currentStrategy.sizing}</p>
          </div>
        </div>
      </div>

      {/* Reference Table */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground">📊 Regime Classification Rules</h3>
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="p-2 text-left">Regime</th>
              <th className="p-2 text-left">ADX</th>
              <th className="p-2 text-left">ATR Ratio</th>
              <th className="p-2 text-left">BB Width</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/30">
              <td className="p-2 text-green-400">Trending</td>
              <td className="p-2">&gt;25</td>
              <td className="p-2">&gt;1.1</td>
              <td className="p-2">Expanding</td>
            </tr>
            <tr className="border-b border-border/30">
              <td className="p-2 text-blue-400">Ranging</td>
              <td className="p-2">&lt;20</td>
              <td className="p-2">~1.0</td>
              <td className="p-2">&lt;0.012</td>
            </tr>
            <tr className="border-b border-border/30">
              <td className="p-2 text-red-400">Volatile</td>
              <td className="p-2">Any</td>
              <td className="p-2">&gt;1.3</td>
              <td className="p-2">&gt;0.02</td>
            </tr>
            <tr>
              <td className="p-2 text-yellow-400">Transitioning</td>
              <td className="p-2">20-25</td>
              <td className="p-2">1.0-1.1</td>
              <td className="p-2">Mixed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
