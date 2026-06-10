"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function CompoundingCalculatorPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [startBalance, setStartBalance] = useState(10000);
  const [monthlyReturn, setMonthlyReturn] = useState(5);
  const [months, setMonths] = useState(12);
  const [withdrawal, setWithdrawal] = useState(0);

  const calculateGrowth = () => {
    const data: { month: number; balance: number; profit: number; totalProfit: number }[] = [];
    let balance = startBalance;
    let totalProfit = 0;

    for (let m = 1; m <= months; m++) {
      const profit = balance * (monthlyReturn / 100);
      totalProfit += profit;
      balance = balance + profit - withdrawal;
      if (balance < 0) balance = 0;
      data.push({ month: m, balance, profit, totalProfit });
    }
    return data;
  };

  const growth = calculateGrowth();
  const finalBalance = growth.length > 0 ? growth[growth.length - 1].balance : startBalance;
  const totalProfit = growth.length > 0 ? growth[growth.length - 1].totalProfit : 0;
  const totalReturn = ((finalBalance - startBalance + withdrawal * months) / startBalance) * 100;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">Compounding Calculator</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Project account growth with compound returns — the 8th wonder of the world
      </p>

      <div className="mt-6 rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-4 text-sm text-muted-foreground">
        🏦 Consistent 3-5% monthly returns with compounding creates exponential growth. A $10K account at 5% monthly =
        $17,958 in 12 months without withdrawals. Patience + consistency = wealth.
      </div>

      {/* Inputs */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground">Starting Balance ($)</label>
          <input
            type="number"
            value={startBalance}
            onChange={(e) => setStartBalance(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Monthly Return (%)</label>
          <input
            type="number"
            value={monthlyReturn}
            onChange={(e) => setMonthlyReturn(Number(e.target.value))}
            step="0.5"
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Duration (Months)</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Monthly Withdrawal ($)</label>
          <input
            type="number"
            value={withdrawal}
            onChange={(e) => setWithdrawal(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Final Balance</div>
          <div className="mt-1 text-2xl font-bold text-green-400">
            ${finalBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Total Profit</div>
          <div className="mt-1 text-2xl font-bold text-accent-blue">
            ${totalProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="text-xs text-muted-foreground">Total Return</div>
          <div className="mt-1 text-2xl font-bold text-accent-orange">{totalReturn.toFixed(1)}%</div>
        </div>
      </div>

      {/* Growth Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-right">Balance</th>
              <th className="p-3 text-right">Monthly Profit</th>
              <th className="p-3 text-right">Total Profit</th>
            </tr>
          </thead>
          <tbody>
            {growth.slice(0, 24).map((row) => (
              <tr key={row.month} className="border-b border-border/30">
                <td className="p-3 text-muted-foreground">{row.month}</td>
                <td className="p-3 text-right font-mono text-foreground">
                  ${row.balance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="p-3 text-right font-mono text-green-400">
                  +${row.profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td className="p-3 text-right font-mono text-accent-blue">
                  ${row.totalProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
