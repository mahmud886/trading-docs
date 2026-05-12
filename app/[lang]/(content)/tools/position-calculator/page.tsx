"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PositionCalculator() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [riskPercentage, setRiskPercentage] = useState<number>(2);
  const [stopLossDistance, setStopLossDistance] = useState<number>(50);
  const [pairType, setPairType] = useState<string>("major");

  const calculatePositionSize = () => {
    const riskAmount = (accountBalance * riskPercentage) / 100;
    const lotSize = riskAmount / stopLossDistance;
    return lotSize;
  };

  const positionSize = calculatePositionSize();
  const riskAmount = (accountBalance * riskPercentage) / 100;

  return (
    <div className="max-w-2xl mx-auto">
      <Link 
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors duration-200"
      >
        <ArrowLeft size={18} />
        Back to Tools
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-3xl font-bold text-foreground">Position Size Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate the optimal position size for your risk management strategy
        </p>

        <div className="mt-8 space-y-6">
          {/* Account Balance */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Account Balance (USD)
            </label>
            <input
              type="number"
              value={accountBalance}
              onChange={(e) => setAccountBalance(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
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
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0.1%</span>
              <span>10%</span>
            </div>
          </div>

          {/* Stop Loss Distance */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Stop Loss Distance (Pips)
            </label>
            <input
              type="number"
              value={stopLossDistance}
              onChange={(e) => setStopLossDistance(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
              min="1"
              step="1"
            />
          </div>

          {/* Pair Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Currency Pair Type
            </label>
            <select
              value={pairType}
              onChange={(e) => setPairType(e.target.value)}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
            >
              <option value="major">Major Pairs</option>
              <option value="minor">Minor Pairs</option>
              <option value="exotic">Exotic Pairs</option>
              <option value="crypto">Cryptocurrency</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Calculation Results</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground text-sm">Risk Amount</p>
              <p className="text-2xl font-bold text-green-400 mt-1">
                ${riskAmount.toFixed(2)}
              </p>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm">Position Size</p>
              <p className="text-2xl font-bold text-blue-400 mt-1">
                {positionSize.toFixed(3)} Lots
              </p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">Micro Lots</p>
              <p className="text-2xl font-bold text-purple-400 mt-1">
                {(positionSize * 100).toFixed(0)} µLots
              </p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">Mini Lots</p>
              <p className="text-2xl font-bold text-orange-400 mt-1">
                {(positionSize * 10).toFixed(2)} mLots
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-card/50 border border-blue-500/20 rounded-lg">
            <p className="text-xs text-foreground">
              📝 You are risking <span className="text-green-400 font-semibold">${riskAmount.toFixed(2)}</span> on this trade. 
              With a <span className="text-yellow-400 font-semibold">{stopLossDistance} pip</span> stop loss, 
              you should trade <span className="text-blue-400 font-semibold">{positionSize.toFixed(3)} lots</span>.
            </p>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 Position Sizing Tips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>Never risk more than 2% per trade for professional traders</li>
            <li>Beginners should start with 1% per trade maximum</li>
            <li>Risk/reward ratio should be at least 1:2 for profitability</li>
            <li>Adjust position size based on volatility and market conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
