"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DrawdownCalculatorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [winRate, setWinRate] = useState(55);
  const [riskPerTrade, setRiskPerTrade] = useState(1);
  const [totalTrades, setTotalTrades] = useState(100);
  const [simulations, setSimulations] = useState(1000);

  const runSimulation = () => {
    let maxDrawdowns: number[] = [];

    for (let sim = 0; sim < simulations; sim++) {
      let equity = 100;
      let peak = 100;
      let maxDD = 0;

      for (let t = 0; t < totalTrades; t++) {
        const isWin = Math.random() * 100 < winRate;
        if (isWin) {
          equity += equity * (riskPerTrade / 100) * 2; // assume 1:2 R:R
        } else {
          equity -= equity * (riskPerTrade / 100);
        }
        if (equity > peak) peak = equity;
        const dd = ((peak - equity) / peak) * 100;
        if (dd > maxDD) maxDD = dd;
      }
      maxDrawdowns.push(maxDD);
    }

    maxDrawdowns.sort((a, b) => a - b);

    return {
      median: maxDrawdowns[Math.floor(simulations * 0.5)],
      percentile75: maxDrawdowns[Math.floor(simulations * 0.75)],
      percentile90: maxDrawdowns[Math.floor(simulations * 0.90)],
      percentile95: maxDrawdowns[Math.floor(simulations * 0.95)],
      percentile99: maxDrawdowns[Math.floor(simulations * 0.99)],
      worst: maxDrawdowns[simulations - 1],
    };
  };

  const [results, setResults] = useState<ReturnType<typeof runSimulation> | null>(null);

  const handleCalculate = () => {
    setResults(runSimulation());
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link href={`/${lang}/tools`} className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Drawdown Calculator</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Monte Carlo simulation — calculate max drawdown probability at your win rate and risk level
      </p>

      <div className="mt-6 rounded-xl border border-accent-orange/20 bg-accent-orange/5 p-4 text-sm text-muted-foreground">
        🏦 Prop firms typically allow 5-10% max drawdown. This tool helps you determine if your strategy parameters can stay within those limits. Run 1000+ simulations for reliable results.
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
          <label className="text-sm font-medium text-foreground">Risk Per Trade (%)</label>
          <input
            type="number"
            value={riskPerTrade}
            onChange={(e) => setRiskPerTrade(Number(e.target.value))}
            step="0.5"
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Total Trades</label>
          <input
            type="number"
            value={totalTrades}
            onChange={(e) => setTotalTrades(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Simulations</label>
          <input
            type="number"
            value={simulations}
            onChange={(e) => setSimulations(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="mt-6 rounded-lg bg-accent-green px-6 py-3 font-semibold text-black transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]"
      >
        Run Monte Carlo Simulation
      </button>

      {/* Results */}
      {results && (
        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Simulation Results ({simulations.toLocaleString()} runs)</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs text-muted-foreground">Median Max DD</div>
              <div className="mt-1 text-2xl font-bold text-foreground">{results.median.toFixed(1)}%</div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs text-muted-foreground">75th Percentile</div>
              <div className="mt-1 text-2xl font-bold text-yellow-400">{results.percentile75.toFixed(1)}%</div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs text-muted-foreground">90th Percentile</div>
              <div className="mt-1 text-2xl font-bold text-orange-400">{results.percentile90.toFixed(1)}%</div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs text-muted-foreground">95th Percentile</div>
              <div className="mt-1 text-2xl font-bold text-red-400">{results.percentile95.toFixed(1)}%</div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs text-muted-foreground">99th Percentile</div>
              <div className="mt-1 text-2xl font-bold text-red-500">{results.percentile99.toFixed(1)}%</div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs text-muted-foreground">Worst Case</div>
              <div className="mt-1 text-2xl font-bold text-red-600">{results.worst.toFixed(1)}%</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Interpretation: With {winRate}% win rate and {riskPerTrade}% risk per trade over {totalTrades} trades,
            there is a 5% chance your max drawdown will exceed {results.percentile95.toFixed(1)}%.
          </p>
        </div>
      )}
    </div>
  );
}

