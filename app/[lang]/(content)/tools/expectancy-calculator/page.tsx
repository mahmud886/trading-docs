"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ExpectancyCalculatorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [winRate, setWinRate] = useState(55);
  const [avgWin, setAvgWin] = useState(150);
  const [avgLoss, setAvgLoss] = useState(75);
  const [tradesPerMonth, setTradesPerMonth] = useState(20);

  const winProb = winRate / 100;
  const lossProb = 1 - winProb;
  const expectancy = winProb * avgWin - lossProb * avgLoss;
  const expectancyR = expectancy / avgLoss;
  const monthlyExpected = expectancy * tradesPerMonth;
  const riskRewardRatio = avgWin / avgLoss;
  const breakEvenWinRate = (1 / (riskRewardRatio + 1)) * 100;
  const profitFactor = (winProb * avgWin) / (lossProb * avgLoss);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Trade Expectancy Calculator</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Calculate your mathematical edge — (Win% × Avg Win) - (Loss% × Avg Loss)
      </p>

      <div className="mt-6 rounded-xl border border-accent-green/20 bg-accent-green/5 p-4 text-sm text-muted-foreground">
        🏦 If your expectancy is positive, you have a mathematical edge. The ONLY thing that matters long-term is:
        positive expectancy + sufficient sample size + proper position sizing. Everything else is noise.
      </div>

      {/* Inputs */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground">Win Rate (%)</label>
          <input
            type="number"
            value={winRate}
            onChange={(e) => setWinRate(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Average Win ($)</label>
          <input
            type="number"
            value={avgWin}
            onChange={(e) => setAvgWin(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Average Loss ($)</label>
          <input
            type="number"
            value={avgLoss}
            onChange={(e) => setAvgLoss(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Trades per Month</label>
          <input
            type="number"
            value={tradesPerMonth}
            onChange={(e) => setTradesPerMonth(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Expectancy per Trade</div>
          <div className={`mt-1 text-2xl font-bold ${expectancy >= 0 ? "text-green-400" : "text-red-400"}`}>
            ${expectancy.toFixed(2)}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Expectancy (R-Multiple)</div>
          <div className={`mt-1 text-2xl font-bold ${expectancyR >= 0 ? "text-green-400" : "text-red-400"}`}>
            {expectancyR.toFixed(2)}R
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Monthly Expected</div>
          <div className={`mt-1 text-2xl font-bold ${monthlyExpected >= 0 ? "text-green-400" : "text-red-400"}`}>
            ${monthlyExpected.toFixed(0)}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Risk:Reward Ratio</div>
          <div className="mt-1 text-2xl font-bold text-accent-blue">1:{riskRewardRatio.toFixed(1)}</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Break-Even Win Rate</div>
          <div className="mt-1 text-2xl font-bold text-accent-orange">{breakEvenWinRate.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Profit Factor</div>
          <div className={`mt-1 text-2xl font-bold ${profitFactor >= 1 ? "text-green-400" : "text-red-400"}`}>
            {profitFactor.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div
        className={`mt-8 rounded-xl border p-6 ${expectancy >= 0 ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"}`}
      >
        <h3 className="font-semibold text-foreground">
          {expectancy >= 0 ? "✅ Positive Expectancy — You Have an Edge" : "❌ Negative Expectancy — No Edge"}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {expectancy >= 0
            ? `With ${winRate}% win rate and 1:${riskRewardRatio.toFixed(1)} R:R, you earn $${expectancy.toFixed(2)} per trade on average. Over ${tradesPerMonth} trades/month = $${monthlyExpected.toFixed(0)} expected monthly profit. Focus on CONSISTENCY and VOLUME.`
            : `Your current parameters result in negative expectancy. Either improve win rate above ${breakEvenWinRate.toFixed(1)}% OR improve your R:R ratio. Do NOT trade a negative expectancy system.`}
        </p>
      </div>
    </div>
  );
}
