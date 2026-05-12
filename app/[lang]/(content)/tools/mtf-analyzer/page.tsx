"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MTFAnalyzer() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const timeframes = [
    {
      period: "1M",
      trend: "Uptrend",
      support: "1.0850",
      resistance: "1.0950",
      signal: "Strong Buy",
      color: "text-green-400"
    },
    {
      period: "5M",
      trend: "Consolidation",
      support: "1.0880",
      resistance: "1.0920",
      signal: "Neutral",
      color: "text-yellow-400"
    },
    {
      period: "15M",
      trend: "Uptrend",
      support: "1.0870",
      resistance: "1.0940",
      signal: "Buy",
      color: "text-green-400"
    },
    {
      period: "1H",
      trend: "Uptrend",
      support: "1.0850",
      resistance: "1.0960",
      signal: "Buy",
      color: "text-green-400"
    },
    {
      period: "4H",
      trend: "Uptrend",
      support: "1.0800",
      resistance: "1.1000",
      signal: "Strong Buy",
      color: "text-green-400"
    },
    {
      period: "Daily",
      trend: "Uptrend",
      support: "1.0700",
      resistance: "1.1100",
      signal: "Buy",
      color: "text-green-400"
    }
  ];

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
        <h1 className="text-3xl font-bold text-foreground">Multi-Timeframe Analysis</h1>
        <p className="text-muted-foreground mt-2">
          Analyze multiple timeframes simultaneously to find confluence setups
        </p>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
            <p className="text-green-400 text-sm font-medium">Buy Signals</p>
            <p className="text-2xl font-bold text-green-300 mt-2">4/6</p>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 text-center">
            <p className="text-yellow-400 text-sm font-medium">Neutral</p>
            <p className="text-2xl font-bold text-yellow-300 mt-2">1/6</p>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
            <p className="text-blue-400 text-sm font-medium">Alignment Score</p>
            <p className="text-2xl font-bold text-blue-300 mt-2">67%</p>
          </div>
        </div>

        {/* MTF Analysis Table */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">EUR/USD Multi-Timeframe Analysis</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Timeframe</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Trend</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Support</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Resistance</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Signal</th>
                </tr>
              </thead>
              <tbody>
                {timeframes.map((tf) => (
                  <tr key={tf.period} className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-semibold text-foreground bg-muted px-3 py-1 rounded">
                        {tf.period}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${tf.trend === "Uptrend" ? "text-green-400" : tf.trend === "Downtrend" ? "text-red-400" : "text-yellow-400"}`}>
                        {tf.trend}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-foreground font-mono text-sm">{tf.support}</td>
                    <td className="py-4 px-4 text-foreground font-mono text-sm">{tf.resistance}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded font-bold text-sm ${tf.color} bg-opacity-20`}>
                        {tf.signal}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Confluence Analysis */}
        <div className="mt-8 bg-blue-900/20 border border-blue-500/20 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-blue-300 mb-4">🎯 Confluence Analysis</h2>

          <div className="space-y-3">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-foreground font-medium">Higher Timeframe Bias (Daily/4H)</p>
              <p className="text-foreground text-sm mt-1">Strong Uptrend - Primary support at 1.0700, Resistance at 1.1100</p>
            </div>

            <div className="bg-muted rounded-lg p-3">
              <p className="text-foreground font-medium">Medium Timeframe (1H)</p>
              <p className="text-foreground text-sm mt-1">Pullback setup at 1.0850 - Good confluence area for entry</p>
            </div>

            <div className="bg-muted rounded-lg p-3">
              <p className="text-foreground font-medium">Optimal Entry Zone</p>
              <p className="text-green-400 text-sm mt-1">1.0850-1.0880 (Confluence of supporting levels across timeframes)</p>
            </div>

            <div className="bg-muted rounded-lg p-3">
              <p className="text-foreground font-medium">Target Areas</p>
              <p className="text-blue-400 text-sm mt-1">TP1: 1.0920 | TP2: 1.0960 | TP3: 1.1000</p>
            </div>
          </div>
        </div>

        {/* MTF Strategy Tips */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-3">💡 Multi-Timeframe Strategy Tips</h3>
          <div className="space-y-2 text-sm text-foreground">
            <p>✓ <span className="font-semibold">Use higher TF for bias:</span> Daily/4H shows overall direction</p>
            <p>✓ <span className="font-semibold">Medium TF for entries:</span> 1H/15M for entry confirmation</p>
            <p>✓ <span className="font-semibold">Lower TF for timing:</span> 5M/1M for precise entries</p>
            <p>✓ <span className="font-semibold">Confluence zones:</span> Look where levels align across timeframes</p>
            <p>✓ <span className="font-semibold">Trend alignment:</span> Best trades when all timeframes agree</p>
            <p>✓ <span className="font-semibold">Stop logic:</span> Place below support on your bias timeframe</p>
          </div>
        </div>

        {/* Timeframe Guide */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Timeframe Selection Guide</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-start p-3 bg-muted rounded">
              <div>
                <p className="text-foreground font-medium">Daily / 4H (Market Bias)</p>
                <p className="text-muted-foreground text-xs">Long-term trend direction and major support/resistance</p>
              </div>
              <span className="text-yellow-400 font-bold whitespace-nowrap ml-2">Primary</span>
            </div>

            <div className="flex justify-between items-start p-3 bg-muted rounded">
              <div>
                <p className="text-foreground font-medium">1H (Swing Entry)</p>
                <p className="text-muted-foreground text-xs">Entry confirmation and pullback identification</p>
              </div>
              <span className="text-blue-400 font-bold whitespace-nowrap ml-2">Entry</span>
            </div>

            <div className="flex justify-between items-start p-3 bg-muted rounded">
              <div>
                <p className="text-foreground font-medium">15M / 5M (Timing)</p>
                <p className="text-muted-foreground text-xs">Precise entry timing and early exit signals</p>
              </div>
              <span className="text-green-400 font-bold whitespace-nowrap ml-2">Timing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
