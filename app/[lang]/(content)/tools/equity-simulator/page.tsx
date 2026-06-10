"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function EquitySimulatorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [winRate, setWinRate] = useState(55);
  const [rr, setRr] = useState(2.0);
  const [riskPercent, setRiskPercent] = useState(1);
  const [trades, setTrades] = useState(200);
  const [numCurves, setNumCurves] = useState(50);
  const [curves, setCurves] = useState<number[][]>([]);

  const runSimulation = () => {
    const result: number[][] = [];
    for (let c = 0; c < numCurves; c++) {
      const curve: number[] = [100]; // start at 100%
      let equity = 100;
      for (let t = 0; t < trades; t++) {
        if (Math.random() * 100 < winRate) {
          equity += equity * (riskPercent / 100) * rr;
        } else {
          equity -= equity * (riskPercent / 100);
        }
        curve.push(equity);
      }
      result.push(curve);
    }
    setCurves(result);
  };

  // Statistics from curves
  const finalEquities = curves.map(c => c[c.length - 1]);
  const sortedFinals = [...finalEquities].sort((a, b) => a - b);
  const medianFinal = sortedFinals.length > 0 ? sortedFinals[Math.floor(sortedFinals.length / 2)] : 100;
  const worstFinal = sortedFinals.length > 0 ? sortedFinals[0] : 100;
  const bestFinal = sortedFinals.length > 0 ? sortedFinals[sortedFinals.length - 1] : 100;
  const ruinCount = finalEquities.filter(e => e < 50).length;
  const profitableCount = finalEquities.filter(e => e > 100).length;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link href={`/${lang}/tools`} className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Equity Curve Simulator</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Monte Carlo equity curve simulation — visualize the range of possible outcomes for your strategy
      </p>

      <div className="mt-6 rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-4 text-sm text-muted-foreground">
        🏦 Institutions run 10,000+ Monte Carlo simulations before deploying capital. This shows the RANGE of possible equity paths — not just the average. Prepare for the worst case, trade for the median.
      </div>

      {/* Inputs */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="text-sm font-medium text-foreground">Win Rate (%)</label>
          <input type="number" value={winRate} onChange={(e) => setWinRate(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Risk:Reward (R:R)</label>
          <input type="number" value={rr} onChange={(e) => setRr(Number(e.target.value))} step="0.5"
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Risk per Trade (%)</label>
          <input type="number" value={riskPercent} onChange={(e) => setRiskPercent(Number(e.target.value))} step="0.5"
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Total Trades</label>
          <input type="number" value={trades} onChange={(e) => setTrades(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Number of Curves</label>
          <input type="number" value={numCurves} onChange={(e) => setNumCurves(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground" />
        </div>
      </div>

      <button onClick={runSimulation}
        className="mt-6 rounded-lg bg-accent-green px-6 py-3 font-semibold text-black transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]">
        Run Simulation ({numCurves} curves × {trades} trades)
      </button>

      {/* Results */}
      {curves.length > 0 && (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs text-muted-foreground">Median Final Equity</div>
              <div className="mt-1 text-xl font-bold text-green-400">{medianFinal.toFixed(0)}%</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs text-muted-foreground">Best Case</div>
              <div className="mt-1 text-xl font-bold text-accent-blue">{bestFinal.toFixed(0)}%</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs text-muted-foreground">Worst Case</div>
              <div className="mt-1 text-xl font-bold text-red-400">{worstFinal.toFixed(0)}%</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs text-muted-foreground">Ruin Risk (&lt;50%)</div>
              <div className={`mt-1 text-xl font-bold ${ruinCount === 0 ? 'text-green-400' : 'text-red-400'}`}>
                {((ruinCount / numCurves) * 100).toFixed(1)}%
              </div>
            </div>
          </div>

          {/* Text-based visualization of curve range */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Distribution Summary</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-28 text-muted-foreground">Profitable:</span>
                <div className="flex-1 h-4 rounded bg-muted/30 overflow-hidden">
                  <div className="h-full bg-green-500/60 rounded" style={{ width: `${(profitableCount / numCurves) * 100}%` }} />
                </div>
                <span className="text-xs text-green-400">{((profitableCount / numCurves) * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-28 text-muted-foreground">Losing:</span>
                <div className="flex-1 h-4 rounded bg-muted/30 overflow-hidden">
                  <div className="h-full bg-red-500/60 rounded" style={{ width: `${((numCurves - profitableCount) / numCurves) * 100}%` }} />
                </div>
                <span className="text-xs text-red-400">{(((numCurves - profitableCount) / numCurves) * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

