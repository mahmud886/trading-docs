"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PipValueCalculator() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [currencyPair, setCurrencyPair] = useState<string>("EURUSD");
  const [lotSize, setLotSize] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number>(1.0900);

  const pipValues: { [key: string]: { usd: number; decimals: number } } = {
    EURUSD: { usd: 10, decimals: 4 },
    GBPUSD: { usd: 10, decimals: 4 },
    USDJPY: { usd: 9.26, decimals: 2 },
    USDCHF: { usd: 10, decimals: 4 },
    AUDUSD: { usd: 10, decimals: 4 },
    NZDUSD: { usd: 10, decimals: 4 },
    EURJPY: { usd: 9.26, decimals: 2 },
    GBPJPY: { usd: 9.26, decimals: 2 },
    XAUUSD: { usd: 0.10, decimals: 2 },
    BTCUSD: { usd: 1, decimals: 2 },
  };

  const pairInfo = pipValues[currencyPair] || pipValues.EURUSD;
  const pipValue = pairInfo.usd * lotSize;
  const pointValue = pipValue / 10;

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
        <h1 className="text-3xl font-bold text-foreground">Pip Value Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate the value of each pip movement for any instrument and lot size
        </p>

        <div className="mt-8 space-y-6">
          {/* Currency Pair */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Select Currency Pair
            </label>
            <select
              value={currencyPair}
              onChange={(e) => setCurrencyPair(e.target.value)}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
            >
              {Object.keys(pipValues).map((pair) => (
                <option key={pair} value={pair}>{pair}</option>
              ))}
            </select>
          </div>

          {/* Lot Size */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Lot Size (Standard Lots)
            </label>
            <input
              type="number"
              value={lotSize}
              onChange={(e) => setLotSize(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
              min="0.01"
              step="0.01"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter micro lots: 0.01 = 1,000 units | Standard lot: 1 = 100,000 units
            </p>
          </div>

          {/* Current Price */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Current Price (Optional)
            </label>
            <input
              type="number"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
              step="0.00001"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Pip Value</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground text-sm">Per Pip Value</p>
              <p className="text-3xl font-bold text-green-400 mt-1">
                ${pipValue.toFixed(2)}
              </p>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm">Per Point Value</p>
              <p className="text-3xl font-bold text-blue-400 mt-1">
                ${pointValue.toFixed(2)}
              </p>
            </div>

            <div className="col-span-2 mt-2 p-3 bg-card/50 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Lot Size:</span> {lotSize} standard lot(s) = {(lotSize * 100000).toFixed(0)} units
              </p>
              <p className="text-sm text-foreground mt-1">
                <span className="font-semibold">1 Pip Move:</span> Price change of {pairInfo.decimals === 4 ? '0.0001' : '0.01'} = ${pipValue.toFixed(2)}
              </p>
            </div>

            <div className="col-span-2">
              <p className="text-muted-foreground text-sm mb-2 font-medium">Quick Move Scenarios:</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-muted p-2 rounded border border-border">
                  <p className="text-muted-foreground">10 pips</p>
                  <p className="text-green-400 font-bold">${(pipValue * 10).toFixed(2)}</p>
                </div>
                <div className="bg-muted p-2 rounded border border-border">
                  <p className="text-muted-foreground">50 pips</p>
                  <p className="text-blue-400 font-bold">${(pipValue * 50).toFixed(2)}</p>
                </div>
                <div className="bg-muted p-2 rounded border border-border">
                  <p className="text-muted-foreground">100 pips</p>
                  <p className="text-purple-400 font-bold">${(pipValue * 100).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 Understanding Pips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>A pip is the smallest price unit (usually 0.0001 for majors, 0.01 for JPY pairs)</li>
            <li>Point = 1/10 of a pip (also called "pipette" in some brokers)</li>
            <li>1 standard lot = 100,000 units of base currency</li>
            <li>Pip value changes for different currency pairs and lot sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
