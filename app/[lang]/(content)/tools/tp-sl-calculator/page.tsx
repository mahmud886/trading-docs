"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function TPSLCalculator() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [entryPrice, setEntryPrice] = useState<number>(1.0900);
  const [riskPercentage, setRiskPercentage] = useState<number>(2);
  const [rewardMultiplier, setRewardMultiplier] = useState<number>(2);
  const [accountBalance, setAccountBalance] = useState<number>(10000);

  const riskAmount = (accountBalance * riskPercentage) / 100;
  
  // Calculate pips based on risk amount (assuming $10 per pip for 1.0 lot)
  const stopLossPips = riskAmount / 10;
  const stopLossPrice = entryPrice - stopLossPips * 0.0001;
  const takeProfitPrice = entryPrice + (stopLossPips * rewardMultiplier) * 0.0001;
  const profitAmount = riskAmount * rewardMultiplier;

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
        <h1 className="text-3xl font-bold text-foreground">TP/SL Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate optimal take profit and stop loss levels based on risk-reward ratios
        </p>

        <div className="mt-8 space-y-6">
          {/* Entry Price */}
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

          {/* Account Balance */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Account Balance (USD)
            </label>
            <input
              type="number"
              value={accountBalance}
              onChange={(e) => setAccountBalance(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green"
              min="100"
              step="100"
            />
          </div>

          {/* Risk Percentage */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Risk Percentage (%): {riskPercentage.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>

          {/* Reward Multiplier */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Reward Multiplier: {rewardMultiplier.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={rewardMultiplier}
              onChange={(e) => setRewardMultiplier(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 space-y-4">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <p className="text-muted-foreground text-sm font-medium">STOP LOSS (SL)</p>
            <p className="text-3xl font-bold text-red-400 mt-2">
              {stopLossPrice.toFixed(5)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {stopLossPips.toFixed(1)} pips below entry | ${riskAmount.toFixed(2)} at risk
            </p>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
            <p className="text-muted-foreground text-sm font-medium">TAKE PROFIT (TP)</p>
            <p className="text-3xl font-bold text-green-400 mt-2">
              {takeProfitPrice.toFixed(5)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {(stopLossPips * rewardMultiplier).toFixed(1)} pips above entry | ${profitAmount.toFixed(2)} to win
            </p>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <p className="text-muted-foreground text-sm font-medium">RISK-REWARD RATIO</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">
              1 : {rewardMultiplier.toFixed(1)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Risk ${riskAmount.toFixed(2)} to win ${profitAmount.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Summary Table */}
        <div className="mt-8 bg-muted border border-border rounded-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Trade Setup Summary</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span className="text-muted-foreground">Entry</span>
                <span className="font-mono font-bold text-cyan-400">{entryPrice.toFixed(5)}</span>
              </div>

              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span className="text-muted-foreground">Stop Loss</span>
                <span className="font-mono font-bold text-red-400">{stopLossPrice.toFixed(5)}</span>
              </div>

              <div className="flex justify-between items-center p-2 bg-muted rounded">
                <span className="text-muted-foreground">Take Profit</span>
                <span className="font-mono font-bold text-green-400">{takeProfitPrice.toFixed(5)}</span>
              </div>

              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="text-muted-foreground">Max Risk</span>
                  <span className="font-bold text-red-400">-${riskAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-2 bg-muted rounded mt-2">
                  <span className="text-muted-foreground">Max Profit</span>
                  <span className="font-bold text-green-400">+${profitAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 TP/SL Tips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>Always set TP/SL BEFORE entering the trade</li>
            <li>Never move your stop loss against the risk direction</li>
            <li>Take profit partially at 1:1 ratio, let rest run for bigger wins</li>
            <li>Trailing stops help capture extended moves</li>
            <li>Psychological levels can serve as natural TP targets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
