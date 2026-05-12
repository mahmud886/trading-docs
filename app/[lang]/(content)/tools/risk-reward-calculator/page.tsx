"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function RiskRewardCalculator() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [entryPrice, setEntryPrice] = useState<number>(1.0900);
  const [stopLossPrice, setStopLossPrice] = useState<number>(1.0850);
  const [takeProfitPrice, setTakeProfitPrice] = useState<number>(1.1000);
  const [lotSize, setLotSize] = useState<number>(1);

  const calculateMetrics = () => {
    const riskPips = Math.abs(entryPrice - stopLossPrice);
    const profitPips = Math.abs(takeProfitPrice - entryPrice);
    const riskRewardRatio = profitPips / riskPips;
    
    // Assuming $10 per pip for 1.0 lot as baseline
    const riskAmount = riskPips * 10 * lotSize;
    const profitAmount = profitPips * 10 * lotSize;

    // Calculate win rate requirements
    const winRateRequired = (100 / (riskRewardRatio + 1));

    return {
      riskPips,
      profitPips,
      riskRewardRatio,
      riskAmount,
      profitAmount,
      winRateRequired,
    };
  };

  const metrics = calculateMetrics();

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
        <h1 className="text-3xl font-bold text-foreground">Risk-Reward Ratio Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Analyze your trade setup and determine break-even win rate requirements
        </p>

        <div className="mt-8 space-y-6">
          {/* Price Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Entry Price
              </label>
              <input
                type="number"
                value={entryPrice}
                onChange={(e) => setEntryPrice(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
                step="0.00001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Stop Loss Price
              </label>
              <input
                type="number"
                value={stopLossPrice}
                onChange={(e) => setStopLossPrice(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-red-500"
                step="0.00001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Take Profit Price
              </label>
              <input
                type="number"
                value={takeProfitPrice}
                onChange={(e) => setTakeProfitPrice(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-green-500"
                step="0.00001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Lot Size
              </label>
              <input
                type="number"
                value={lotSize}
                onChange={(e) => setLotSize(Number(e.target.value))}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
                min="0.01"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Trade Analysis</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg border border-red-500/20">
              <p className="text-muted-foreground text-sm">Risk in Pips</p>
              <p className="text-2xl font-bold text-red-400 mt-1">
                {metrics.riskPips.toFixed(4)}
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-green-500/20">
              <p className="text-muted-foreground text-sm">Profit in Pips</p>
              <p className="text-2xl font-bold text-green-400 mt-1">
                {metrics.profitPips.toFixed(4)}
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-blue-500/20 col-span-2">
              <p className="text-muted-foreground text-sm">Risk-Reward Ratio</p>
              <p className="text-3xl font-bold text-blue-400 mt-1">
                1 : {metrics.riskRewardRatio.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {metrics.riskRewardRatio < 1 ? "⚠️ Poor ratio" : "✓ Good ratio"}
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-red-500/20">
              <p className="text-muted-foreground text-sm">Risk Amount</p>
              <p className="text-xl font-bold text-red-400 mt-1">
                ${metrics.riskAmount.toFixed(2)}
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-green-500/20">
              <p className="text-muted-foreground text-sm">Profit Amount</p>
              <p className="text-xl font-bold text-green-400 mt-1">
                ${metrics.profitAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Win Rate Requirements */}
        <div className="mt-8 bg-purple-900/20 border border-purple-500/20 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-purple-300 mb-4">Win Rate Requirement</h2>
          
          <div className="space-y-3">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <p className="text-foreground">Minimum Win Rate for Profitability</p>
                <p className="text-2xl font-bold text-purple-400">
                  {metrics.winRateRequired.toFixed(1)}%
                </p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(metrics.winRateRequired, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                You need to win at least {metrics.winRateRequired.toFixed(1)}% of your trades to break even with this risk-reward ratio
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">Profitability Examples:</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">50% Win Rate:</span>
                  <span className={metrics.winRateRequired <= 50 ? 'text-green-400 font-bold' : 'text-red-400'}>
                    ${((metrics.profitAmount * 50 - metrics.riskAmount * 50) / 100).toFixed(2)} (Losing)
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">60% Win Rate:</span>
                  <span className={metrics.winRateRequired <= 60 ? 'text-green-400 font-bold' : 'text-red-400'}>
                    ${((metrics.profitAmount * 60 - metrics.riskAmount * 40) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">70% Win Rate:</span>
                  <span className="text-green-400 font-bold">
                    ${((metrics.profitAmount * 70 - metrics.riskAmount * 30) / 100).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 Risk-Reward Tips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>Minimum 1:1 ratio, but aim for 1:2 or better for consistency</li>
            <li>Higher R:R ratios require lower win rates to be profitable</li>
            <li>A 50% win rate with 1:2 R:R ratio makes money long-term</li>
            <li>Poor setups have low RR ratios - avoid trading them</li>
            <li>Always define your R:R BEFORE entering the trade</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
