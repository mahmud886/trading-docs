"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { usePathname } from "next/navigation";

export default function JournalTemplate() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [entries, setEntries] = useState([
    {
      date: "2024-05-12",
      pair: "EURUSD",
      entryPrice: 1.09,
      exitPrice: 1.0925,
      profitLoss: 25,
      pips: 25,
      setup: "Price action reversal at support",
      notes: "Good entry confirmation on 4H",
      result: "Win",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const totalProfitLoss = entries.reduce((sum, e) => sum + e.profitLoss, 0);
  const totalTrades = entries.length;
  const winCount = entries.filter((e) => e.result === "Win").length;
  const winRate = totalTrades > 0 ? ((winCount / totalTrades) * 100).toFixed(1) : 0;

  const downloadCSV = () => {
    let csv = "Date,Currency Pair,Entry Price,Exit Price,Pips,P&L,Setup,Notes,Result\n";
    entries.forEach((e) => {
      csv += `${e.date},${e.pair},${e.entryPrice},${e.exitPrice},${e.pips},${e.profitLoss},"${e.setup}","${e.notes}",${e.result}\n`;
    });

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv));
    element.setAttribute("download", "trading-journal.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Tools
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-foreground">Trading Journal</h1>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-foreground rounded-lg transition-colors"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>
        <p className="text-muted-foreground">Track your trades and analyze your trading performance over time</p>

        {/* Performance Summary */}
        <div className="mt-8 grid grid-cols-4 gap-4">
          <div className="bg-muted border border-border rounded-lg p-4 text-center">
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Total Trades</p>
            <p className="text-2xl font-bold text-foreground mt-2">{totalTrades}</p>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
            <p className="text-green-400 text-xs uppercase tracking-wide">Win Rate</p>
            <p className="text-2xl font-bold text-green-400 mt-2">{winRate}%</p>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
            <p className="text-blue-400 text-xs uppercase tracking-wide">Total Pips</p>
            <p className="text-2xl font-bold text-blue-400 mt-2">{entries.reduce((s, e) => s + e.pips, 0)}</p>
          </div>

          <div
            className={`rounded-lg p-4 text-center border ${totalProfitLoss >= 0 ? "bg-green-900/20 border-green-500/30" : "bg-red-900/20 border-red-500/30"}`}
          >
            <p
              className={`text-xs uppercase tracking-wide ${totalProfitLoss >= 0 ? "text-green-400" : "text-red-400"}`}
            >
              Total P&L
            </p>
            <p className={`text-2xl font-bold mt-2 ${totalProfitLoss >= 0 ? "text-green-400" : "text-red-400"}`}>
              ${totalProfitLoss.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Journal Entries */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-foreground">Trade Entries</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-foreground rounded-lg text-sm transition-colors"
            >
              {showAddForm ? "Cancel" : "+ Add Trade"}
            </button>
          </div>

          {showAddForm && (
            <div className="bg-muted border border-border rounded-lg p-4 mb-4">
              <p className="text-muted-foreground text-sm">
                Entry form coming soon - Track your trades manually for now
              </p>
            </div>
          )}

          {/* Entries Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Pair</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Entry</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Exit</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Pips</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">P&L</th>
                  <th className="text-center py-3 px-4 text-muted-foreground font-medium">Result</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Setup</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 text-foreground">{entry.date}</td>
                    <td className="py-3 px-4 text-foreground font-semibold">{entry.pair}</td>
                    <td className="py-3 px-4 text-right text-foreground">{entry.entryPrice.toFixed(4)}</td>
                    <td className="py-3 px-4 text-right text-foreground">{entry.exitPrice.toFixed(4)}</td>
                    <td className="py-3 px-4 text-right text-cyan-400 font-medium">{entry.pips}</td>
                    <td
                      className={`py-3 px-4 text-right font-semibold ${entry.profitLoss >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      ${entry.profitLoss.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          entry.result === "Win" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {entry.result}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground text-xs">{entry.setup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Journal Tips */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-3">💡 Trading Journal Best Practices</h3>
          <div className="space-y-2 text-sm text-foreground">
            <p>
              ✓ <span className="font-semibold">Record EVERY trade</span> - Even small ones count for your analysis
            </p>
            <p>
              ✓ <span className="font-semibold">Document your setup</span> - What confluence factors did you see?
            </p>
            <p>
              ✓ <span className="font-semibold">Note your emotions</span> - How did you feel entering/exiting?
            </p>
            <p>
              ✓ <span className="font-semibold">Review weekly</span> - Look for patterns in your winners and losers
            </p>
            <p>
              ✓ <span className="font-semibold">Track P&L monthly</span> - Monitor your profitability trends
            </p>
            <p>
              ✓ <span className="font-semibold">Analyze your W/L ratio</span> - Are you following your rules?
            </p>
          </div>
        </div>

        {/* Journal Template Download */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Additional Resources</h2>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <p className="text-foreground font-medium">Trading Journal Spreadsheet</p>
              <p className="text-muted-foreground text-sm mt-1">
                Professional journal template with formulas for P&L tracking
              </p>
              <button
                onClick={downloadCSV}
                className="mt-3 text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-foreground rounded transition-colors"
              >
                Download Template
              </button>
            </div>

            <div className="p-4 bg-muted rounded-lg border border-border">
              <p className="text-foreground font-medium">Journal Checklist</p>
              <p className="text-muted-foreground text-sm mt-1">Daily checklist to ensure consistent journal entries</p>
              <button className="mt-3 text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-foreground rounded transition-colors">
                View Checklist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
