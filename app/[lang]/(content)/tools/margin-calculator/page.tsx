"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";

interface Position {
  id: number;
  pair: string;
  direction: "long" | "short";
  lotSize: number;
  leverage: number;
}

export default function MarginCalculatorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [accountBalance, setAccountBalance] = useState(10000);
  const [positions, setPositions] = useState<Position[]>([
    { id: 1, pair: "EUR/USD", direction: "long", lotSize: 0.5, leverage: 100 },
  ]);

  const addPosition = () => {
    setPositions([
      ...positions,
      {
        id: Date.now(),
        pair: "GBP/USD",
        direction: "long",
        lotSize: 0.1,
        leverage: 100,
      },
    ]);
  };

  const removePosition = (id: number) => {
    setPositions(positions.filter((p) => p.id !== id));
  };

  const updatePosition = (id: number, field: keyof Position, value: string | number) => {
    setPositions(positions.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  // Calculate margin for each position
  const calculateMargin = (pos: Position) => {
    const contractValue = pos.lotSize * 100000; // standard lot = 100,000 units
    return contractValue / pos.leverage;
  };

  const totalMarginUsed = positions.reduce((sum, pos) => sum + calculateMargin(pos), 0);
  const freeMargin = accountBalance - totalMarginUsed;
  const marginLevel = totalMarginUsed > 0 ? (accountBalance / totalMarginUsed) * 100 : Infinity;
  const marginUsagePercent = (totalMarginUsed / accountBalance) * 100;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Margin Calculator</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Multi-position margin requirement tracker — manage your total exposure like a prop desk
      </p>

      <div className="mt-6 rounded-xl border border-accent-red/20 bg-accent-red/5 p-4 text-sm text-muted-foreground">
        🏦 Institutional risk management rule: Never use more than 30-50% of available margin. Below 100% margin level =
        margin call territory. Prop firms margin call at 80-90% equity-to-balance ratio.
      </div>

      {/* Account Balance */}
      <div className="mt-8">
        <label className="text-sm font-medium text-foreground">Account Balance ($)</label>
        <input
          type="number"
          value={accountBalance}
          onChange={(e) => setAccountBalance(Number(e.target.value))}
          className="mt-2 w-full max-w-xs rounded-lg border border-border bg-card px-4 py-3 text-foreground"
        />
      </div>

      {/* Positions */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Open Positions</h3>
          <button
            onClick={addPosition}
            className="flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Plus size={14} /> Add Position
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {positions.map((pos) => (
            <div key={pos.id} className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-4">
              <input
                value={pos.pair}
                onChange={(e) => updatePosition(pos.id, "pair", e.target.value)}
                className="w-24 rounded border border-border bg-background px-2 py-1.5 text-sm text-foreground"
              />
              <select
                value={pos.direction}
                onChange={(e) => updatePosition(pos.id, "direction", e.target.value)}
                className="rounded border border-border bg-background px-2 py-1.5 text-sm text-foreground"
              >
                <option value="long">Long</option>
                <option value="short">Short</option>
              </select>
              <input
                type="number"
                value={pos.lotSize}
                step="0.01"
                onChange={(e) => updatePosition(pos.id, "lotSize", Number(e.target.value))}
                className="w-20 rounded border border-border bg-background px-2 py-1.5 text-sm text-foreground"
              />
              <span className="text-xs text-muted-foreground">lots</span>
              <select
                value={pos.leverage}
                onChange={(e) => updatePosition(pos.id, "leverage", Number(e.target.value))}
                className="rounded border border-border bg-background px-2 py-1.5 text-sm text-foreground"
              >
                <option value={30}>1:30</option>
                <option value={50}>1:50</option>
                <option value={100}>1:100</option>
                <option value={200}>1:200</option>
                <option value={500}>1:500</option>
              </select>
              <span className="text-xs text-muted-foreground">Margin: ${calculateMargin(pos).toFixed(0)}</span>
              <button onClick={() => removePosition(pos.id)} className="ml-auto text-red-400 hover:text-red-300">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Total Margin Used</div>
          <div className="mt-1 text-xl font-bold text-foreground">${totalMarginUsed.toFixed(0)}</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Free Margin</div>
          <div className={`mt-1 text-xl font-bold ${freeMargin > 0 ? "text-green-400" : "text-red-400"}`}>
            ${freeMargin.toFixed(0)}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Margin Level</div>
          <div
            className={`mt-1 text-xl font-bold ${marginLevel > 200 ? "text-green-400" : marginLevel > 100 ? "text-yellow-400" : "text-red-400"}`}
          >
            {marginLevel === Infinity ? "∞" : marginLevel.toFixed(0)}%
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Margin Usage</div>
          <div
            className={`mt-1 text-xl font-bold ${marginUsagePercent < 30 ? "text-green-400" : marginUsagePercent < 50 ? "text-yellow-400" : "text-red-400"}`}
          >
            {marginUsagePercent.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Warning */}
      {marginLevel < 150 && marginLevel !== Infinity && (
        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-400">
          ⚠️ Warning: Margin level below 150%. You are approaching margin call territory. Reduce positions or add funds.
        </div>
      )}
    </div>
  );
}
