"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ATRAnalyzer() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [high, setHigh] = useState<number>(1.095);
  const [low, setLow] = useState<number>(1.085);
  const [previousClose, setPreviousClose] = useState<number>(1.09);
  const [period, setPeriod] = useState<number>(14);

  const calculateATR = () => {
    const tr1 = high - low;
    const tr2 = Math.abs(high - previousClose);
    const tr3 = Math.abs(low - previousClose);
    const trueRange = Math.max(tr1, tr2, tr3);

    // Simple ATR calculation for single period
    const atr = trueRange;
    const atrPips = atr / 0.0001;

    return {
      trueRange,
      atr,
      atrPips,
      volatilityLevel: atrPips < 30 ? "Low" : atrPips < 60 ? "Medium" : "High",
    };
  };

  const data = calculateATR();

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Tools
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-3xl font-bold text-foreground">ATR & Volatility Analyzer</h1>
        <p className="text-muted-foreground mt-2">Calculate Average True Range and analyze market volatility</p>

        <div className="mt-8 space-y-6">
          {/* Price Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">High Price</label>
              <input
                type="number"
                value={high}
                onChange={(e) => setHigh(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
                step="0.00001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Low Price</label>
              <input
                type="number"
                value={low}
                onChange={(e) => setLow(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
                step="0.00001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Previous Close</label>
              <input
                type="number"
                value={previousClose}
                onChange={(e) => setPreviousClose(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
                step="0.00001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">ATR Period (for reference)</label>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
                min="5"
                max="50"
              />
              <p className="text-xs text-muted-foreground mt-1">Standard ATR period is 14</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 space-y-4">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <p className="text-muted-foreground text-sm font-medium">TRUE RANGE</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">{data.trueRange.toFixed(5)}</p>
            <p className="text-xs text-muted-foreground mt-2">{data.atrPips.toFixed(0)} pips</p>
          </div>

          <div
            className={`rounded-xl p-6 border ${
              data.volatilityLevel === "Low"
                ? "bg-green-900/20 border-green-500/30"
                : data.volatilityLevel === "Medium"
                  ? "bg-yellow-900/20 border-yellow-500/30"
                  : "bg-red-900/20 border-red-500/30"
            }`}
          >
            <p className="text-muted-foreground text-sm font-medium">VOLATILITY LEVEL</p>
            <p
              className={`text-3xl font-bold mt-2 ${
                data.volatilityLevel === "Low"
                  ? "text-green-400"
                  : data.volatilityLevel === "Medium"
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {data.volatilityLevel}
            </p>
            <p className="text-xs text-muted-foreground mt-2">Current 1-period ATR: {data.atrPips.toFixed(0)} pips</p>
          </div>
        </div>

        {/* Volatility Analysis */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Volatility Analysis</h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span className="text-muted-foreground">Current ATR (pips)</span>
              <span className="font-mono font-bold text-cyan-400">{data.atrPips.toFixed(0)}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span className="text-muted-foreground">Typical Stop Loss (2x ATR)</span>
              <span className="font-mono font-bold text-red-400">{(data.atrPips * 2).toFixed(0)} pips</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span className="text-muted-foreground">Position Size Adjustment</span>
              <span className="font-mono font-bold text-purple-400">
                {data.atrPips < 30 ? "Normal" : data.atrPips < 60 ? "Reduce" : "Reduce Significantly"}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span className="text-muted-foreground">Breakout Threshold (1.5x ATR)</span>
              <span className="font-mono font-bold text-green-400">{(data.atrPips * 1.5).toFixed(0)} pips</span>
            </div>
          </div>
        </div>

        {/* ATR Reference Table */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">ATR Volatility Reference</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-green-900/20 rounded border border-green-500/20">
              <span className="text-foreground">Low Volatility</span>
              <span className="font-mono font-bold text-green-400">&lt; 30 pips</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-yellow-900/20 rounded border border-yellow-500/20">
              <span className="text-foreground">Medium Volatility</span>
              <span className="font-mono font-bold text-yellow-400">30-60 pips</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-red-900/20 rounded border border-red-500/20">
              <span className="text-foreground">High Volatility</span>
              <span className="font-mono font-bold text-red-400">&gt; 60 pips</span>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 ATR Trading Tips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>ATR measures volatility, not price direction</li>
            <li>Use ATR to set appropriate stop loss levels</li>
            <li>Lower ATR = tighter stops possible, reduce position size in high volatility</li>
            <li>Rising ATR indicates increasing volatility, falling ATR indicates consolidation</li>
            <li>ATR {">="} 50 pips on 1H chart is generally considered high volatility</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
