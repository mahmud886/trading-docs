"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function LotConverter() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [standardLots, setStandardLots] = useState<number>(1);

  const microLots = standardLots * 100;
  const miniLots = standardLots * 10;
  const units = standardLots * 100000;

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
        <h1 className="text-3xl font-bold text-foreground">Lot Size Converter</h1>
        <p className="text-muted-foreground mt-2">Convert between standard lots, mini lots, micro lots, and units</p>

        <div className="mt-8">
          <label className="block text-sm font-medium text-foreground mb-2">Enter Standard Lots</label>
          <input
            type="number"
            value={standardLots}
            onChange={(e) => setStandardLots(Number(e.target.value))}
            className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
            min="0.01"
            step="0.01"
          />
        </div>

        {/* Conversion Table */}
        <div className="mt-8 space-y-3">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-blue-400 font-medium">Standard Lots</p>
            <p className="text-3xl font-bold text-blue-300 mt-2">{standardLots.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">1 Standard Lot = 100,000 units</p>
          </div>

          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-cyan-400 font-medium">Mini Lots</p>
            <p className="text-3xl font-bold text-cyan-300 mt-2">{miniLots.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">1 Mini Lot = 10,000 units</p>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-green-400 font-medium">Micro Lots</p>
            <p className="text-3xl font-bold text-green-300 mt-2">{microLots.toFixed(0)}</p>
            <p className="text-xs text-muted-foreground mt-1">1 Micro Lot = 1,000 units</p>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide text-purple-400 font-medium">Total Units</p>
            <p className="text-3xl font-bold text-purple-300 mt-2">{units.toFixed(0)}</p>
            <p className="text-xs text-muted-foreground mt-1">Base currency units</p>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Lot Size Reference</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Standard Lot (1.0)</span>
              <span className="font-mono font-bold text-green-400">100,000 units</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Mini Lot (0.1)</span>
              <span className="font-mono font-bold text-cyan-400">10,000 units</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Micro Lot (0.01)</span>
              <span className="font-mono font-bold text-purple-400">1,000 units</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Nano Lot (0.001)</span>
              <span className="font-mono font-bold text-orange-400">100 units</span>
            </div>
          </div>
        </div>

        {/* Pip Value Reference at 1.0900 */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Pip Value Examples (EUR/USD @ 1.0900)</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Standard Lot</span>
              <span className="font-mono font-bold text-green-400">$10 per pip</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Mini Lot</span>
              <span className="font-mono font-bold text-cyan-400">$1 per pip</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">1 Micro Lot</span>
              <span className="font-mono font-bold text-purple-400">$0.10 per pip</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">10 Micro Lots</span>
              <span className="font-mono font-bold text-orange-400">$1 per pip</span>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 Lot Size Guide</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>Beginners should practice with micro or mini lots first</li>
            <li>Smaller lot sizes allow better risk management</li>
            <li>Scale up lot sizes as your account grows</li>
            <li>Always use position sizing based on your risk tolerance</li>
            <li>Broker may have minimum lot size requirements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
