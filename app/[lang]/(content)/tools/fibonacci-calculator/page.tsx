"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FibonacciCalculator() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [highPrice, setHighPrice] = useState<number>(1050);
  const [lowPrice, setLowPrice] = useState<number>(950);

  const calculateFibonacci = () => {
    const range = highPrice - lowPrice;

    return {
      high: highPrice,
      low: lowPrice,
      range: range,
      retracement: {
        level236: lowPrice + range * 0.236,
        level382: lowPrice + range * 0.382,
        level500: lowPrice + range * 0.5,
        level618: lowPrice + range * 0.618,
        level786: lowPrice + range * 0.786,
      },
      extension: {
        level127: highPrice + range * 0.127,
        level161: highPrice + range * 0.161,
        level200: highPrice + range * 0.2,
        level261: highPrice + range * 0.261,
        level423: highPrice + range * 0.423,
        level618: highPrice + range * 0.618,
      },
    };
  };

  const fib = calculateFibonacci();

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Tools
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-3xl font-bold text-foreground">Fibonacci Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate Fibonacci retracement and extension levels for technical analysis
        </p>

        <div className="mt-8 space-y-6">
          {/* Price Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">High Price (Swing High)</label>
              <input
                type="number"
                value={highPrice}
                onChange={(e) => setHighPrice(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Low Price (Swing Low)</label>
              <input
                type="number"
                value={lowPrice}
                onChange={(e) => setLowPrice(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="bg-muted border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">High</p>
            <p className="text-xl font-bold text-green-400 mt-1">{fib.high.toFixed(2)}</p>
          </div>
          <div className="bg-muted border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Low</p>
            <p className="text-xl font-bold text-red-400 mt-1">{fib.low.toFixed(2)}</p>
          </div>
          <div className="bg-muted border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Range</p>
            <p className="text-xl font-bold text-blue-400 mt-1">{fib.range.toFixed(2)}</p>
          </div>
        </div>

        {/* Retracement Levels */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Retracement Levels</h2>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">23.6% Retracement</p>
                <p className="text-xs text-muted-foreground">Support/Resistance</p>
              </div>
              <p className="text-lg font-bold text-green-400">{fib.retracement.level236.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">38.2% Retracement</p>
                <p className="text-xs text-muted-foreground">Strong Support/Resistance</p>
              </div>
              <p className="text-lg font-bold text-blue-400">{fib.retracement.level382.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">50.0% Retracement</p>
                <p className="text-xs text-muted-foreground">Key Psychological Level</p>
              </div>
              <p className="text-lg font-bold text-purple-400">{fib.retracement.level500.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">61.8% Retracement</p>
                <p className="text-xs text-muted-foreground">Golden Ratio - Most Important</p>
              </div>
              <p className="text-lg font-bold text-orange-400">{fib.retracement.level618.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">78.6% Retracement</p>
                <p className="text-xs text-muted-foreground">Deep Pullback Level</p>
              </div>
              <p className="text-lg font-bold text-pink-400">{fib.retracement.level786.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Extension Levels */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Extension Levels</h2>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">127.2% Extension</p>
              </div>
              <p className="text-lg font-bold text-cyan-400">{fib.extension.level127.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">161.8% Extension</p>
                <p className="text-xs text-muted-foreground">Golden Ratio Extension</p>
              </div>
              <p className="text-lg font-bold text-yellow-400">{fib.extension.level161.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">200% Extension</p>
              </div>
              <p className="text-lg font-bold text-green-400">{fib.extension.level200.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">261.8% Extension</p>
              </div>
              <p className="text-lg font-bold text-blue-400">{fib.extension.level261.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">423.6% Extension</p>
              </div>
              <p className="text-lg font-bold text-purple-400">{fib.extension.level423.toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted border border-border rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">618% Extension</p>
              </div>
              <p className="text-lg font-bold text-pink-400">{fib.extension.level618.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 Fibonacci Trading Tips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>61.8% is the most reliable retracement level (Golden Ratio)</li>
            <li>Use multiple timeframes to confirm Fib levels</li>
            <li>Combine Fib levels with support/resistance for better accuracy</li>
            <li>38.2% retracement often indicates strong trends continuing</li>
            <li>Extensions help determine take profit targets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
