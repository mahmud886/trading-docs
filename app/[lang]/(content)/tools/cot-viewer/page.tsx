"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

// Simulated COT data (in production, fetch from CFTC API/proxy)
const cotData = {
  "EUR/USD": {
    assetManagers: { long: 180000, short: 95000 },
    leveragedFunds: { long: 120000, short: 145000 },
    dealers: { long: 85000, short: 130000 },
    change: { am: 12000, lf: -8000, d: -5000 },
  },
  "GBP/USD": {
    assetManagers: { long: 65000, short: 40000 },
    leveragedFunds: { long: 45000, short: 60000 },
    dealers: { long: 30000, short: 55000 },
    change: { am: 5000, lf: -3000, d: -2000 },
  },
  "USD/JPY": {
    assetManagers: { long: 95000, short: 45000 },
    leveragedFunds: { long: 80000, short: 55000 },
    dealers: { long: 50000, short: 75000 },
    change: { am: -8000, lf: 10000, d: 3000 },
  },
  "AUD/USD": {
    assetManagers: { long: 55000, short: 70000 },
    leveragedFunds: { long: 40000, short: 50000 },
    dealers: { long: 35000, short: 25000 },
    change: { am: -3000, lf: -2000, d: 5000 },
  },
  GOLD: {
    assetManagers: { long: 280000, short: 35000 },
    leveragedFunds: { long: 195000, short: 85000 },
    dealers: { long: 40000, short: 250000 },
    change: { am: 25000, lf: 15000, d: -30000 },
  },
};

type CotPair = keyof typeof cotData;

export default function CotViewerPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const [selectedPair, setSelectedPair] = useState<CotPair>("EUR/USD");

  const data = cotData[selectedPair];
  const amNet = data.assetManagers.long - data.assetManagers.short;
  const lfNet = data.leveragedFunds.long - data.leveragedFunds.short;
  const dNet = data.dealers.long - data.dealers.short;

  const getNetColor = (net: number) => (net > 0 ? "text-green-400" : "text-red-400");
  const getNetLabel = (net: number) => (net > 0 ? "NET LONG" : "NET SHORT");

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link
        href={`/${lang}/tools`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to Tools
      </Link>

      <h1 className="text-4xl font-bold text-foreground">COT Data Viewer</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        CFTC Commitment of Traders positioning — see where institutions are positioned
      </p>

      <div className="mt-6 rounded-xl border border-accent-blue/20 bg-accent-blue/5 p-4 text-sm text-muted-foreground">
        🏦 COT data shows ACTUAL institutional positions reported to the CFTC every Tuesday, released Friday. Asset
        Managers = directional signal. Leveraged Funds = speculative signal. Dealers = hedging (often contrarian to
        price).
      </div>

      {/* Pair Selector */}
      <div className="mt-8 flex flex-wrap gap-2">
        {(Object.keys(cotData) as CotPair[]).map((pair) => (
          <button
            key={pair}
            onClick={() => setSelectedPair(pair)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
              selectedPair === pair
                ? "border-accent-green/30 bg-accent-green/10 text-accent-green"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {pair}
          </button>
        ))}
      </div>

      {/* Positioning Data */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Asset Managers */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Asset Managers</h3>
          <div className={`mt-2 text-2xl font-bold ${getNetColor(amNet)}`}>{getNetLabel(amNet)}</div>
          <div className="mt-1 text-sm text-muted-foreground">Net: {amNet.toLocaleString()} contracts</div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-green-400">Longs:</span>
              <span>{data.assetManagers.long.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">Shorts:</span>
              <span>{data.assetManagers.short.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weekly Change:</span>
              <span className={data.change.am >= 0 ? "text-green-400" : "text-red-400"}>
                {data.change.am >= 0 ? "+" : ""}
                {data.change.am.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Leveraged Funds */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Leveraged Funds</h3>
          <div className={`mt-2 text-2xl font-bold ${getNetColor(lfNet)}`}>{getNetLabel(lfNet)}</div>
          <div className="mt-1 text-sm text-muted-foreground">Net: {lfNet.toLocaleString()} contracts</div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-green-400">Longs:</span>
              <span>{data.leveragedFunds.long.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">Shorts:</span>
              <span>{data.leveragedFunds.short.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weekly Change:</span>
              <span className={data.change.lf >= 0 ? "text-green-400" : "text-red-400"}>
                {data.change.lf >= 0 ? "+" : ""}
                {data.change.lf.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Dealers */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Dealers (Market Makers)</h3>
          <div className={`mt-2 text-2xl font-bold ${getNetColor(dNet)}`}>{getNetLabel(dNet)}</div>
          <div className="mt-1 text-sm text-muted-foreground">Net: {dNet.toLocaleString()} contracts</div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-green-400">Longs:</span>
              <span>{data.dealers.long.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">Shorts:</span>
              <span>{data.dealers.short.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weekly Change:</span>
              <span className={data.change.d >= 0 ? "text-green-400" : "text-red-400"}>
                {data.change.d >= 0 ? "+" : ""}
                {data.change.d.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Read */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold text-foreground">💡 How to Read COT Data</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>
            • <span className="text-foreground font-medium">Asset Managers</span> = Real money (pension funds,
            insurance). Their positioning = long-term directional bias.
          </li>
          <li>
            • <span className="text-foreground font-medium">Leveraged Funds</span> = Hedge funds & CTAs. More
            speculative, can flip quickly.
          </li>
          <li>
            • <span className="text-foreground font-medium">Dealers</span> = Banks/market makers. Usually OPPOSITE to
            price (they provide liquidity).
          </li>
          <li>
            • <span className="text-foreground font-medium">Extreme positioning</span> = Potential reversal. When
            everyone is on one side, who's left to push further?
          </li>
          <li>
            • <span className="text-foreground font-medium">Weekly change</span> = Most important signal. Are
            institutions ADDING or REDUCING positions?
          </li>
        </ul>
      </div>
    </div>
  );
}
