"use client";

import { usePathname } from "next/navigation";

export function SessionHeatmap() {
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "en";
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // Volatility intensity per hour (Bangladesh time) — 0-1 scale
  const heatData: Record<string, number[]> = {
    "EUR/USD":   [0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.7, 0.8, 0.8, 0.7, 0.6, 0.9, 1.0, 1.0, 0.9, 0.6, 0.3],
    "GBP/USD":   [0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.8, 0.9, 0.9, 0.7, 0.6, 0.9, 1.0, 0.9, 0.8, 0.5, 0.2],
    "USD/JPY":   [0.2, 0.2, 0.2, 0.3, 0.3, 0.6, 0.7, 0.7, 0.6, 0.5, 0.4, 0.3, 0.3, 0.5, 0.5, 0.5, 0.4, 0.4, 0.7, 0.8, 0.7, 0.5, 0.3, 0.2],
    "XAU/USD":   [0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.4, 0.4, 0.3, 0.3, 0.2, 0.2, 0.3, 0.7, 0.8, 0.8, 0.7, 0.7, 1.0, 1.0, 1.0, 0.8, 0.5, 0.2],
    "US30":      [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 0.4, 0.3, 0.4, 0.9, 1.0, 1.0, 0.8, 0.6, 0.3],
    "NAS100":    [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 0.4, 0.3, 0.4, 0.9, 1.0, 1.0, 0.8, 0.6, 0.3],
    "DXY":       [0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2, 0.3, 0.6, 0.7, 0.7, 0.6, 0.5, 0.8, 0.9, 0.9, 0.7, 0.4, 0.2],
  };

  function getColor(value: number): string {
    if (value >= 0.9) return "bg-[#ff9500]";
    if (value >= 0.7) return "bg-[#00ff9d]";
    if (value >= 0.5) return "bg-[#3b82f6]";
    if (value >= 0.3) return "bg-[#a855f7]/60";
    return "bg-zinc-800/50";
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card p-6">
      <h3 className="mb-1 text-lg font-semibold text-foreground">
        {lang === "bn" ? "ভোলাটিলিটি হিটম্যাপ" : "Volatility Heatmap"}
      </h3>
      <p className="mb-4 text-xs text-muted-foreground">
        {lang === "bn"
          ? "ইনস্ট্রুমেন্ট অনুযায়ী ট্রেডিং অ্যাক্টিভিটি — বাংলাদেশ সময় (GMT+6) — ইনস্টিটিউশনাল কিল জোন হাইলাইটেড"
          : "Trading activity by instrument — Bangladesh Time (GMT+6) — Institutional kill zones highlighted"}
      </p>

      <div className="min-w-175">
        {/* Hour labels */}
        <div className="mb-1 flex" style={{ paddingLeft: "80px" }}>
          {hours.map((h) => (
            <div key={h} className="flex-1 text-center text-[9px] text-muted-foreground">
              {h % 3 === 0 ? `${h}` : ""}
            </div>
          ))}
        </div>

        {/* Rows */}
        {Object.entries(heatData).map(([pair, values]) => (
          <div key={pair} className="mb-1 flex items-center">
            <div className="w-20 shrink-0 pr-2 text-right font-mono text-xs text-muted-foreground">{pair}</div>
            <div className="flex flex-1 gap-px">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`h-6 flex-1 rounded-xs transition-colors ${getColor(v)}`}
                  style={{ opacity: Math.max(0.3, v) }}
                  title={`${pair} at ${i}:00 BD — ${lang === "bn" ? "অ্যাক্টিভিটি" : "Activity"}: ${Math.round(v * 100)}%`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Session markers */}
        <div className="mt-3 flex" style={{ paddingLeft: "80px" }}>
          <div className="flex flex-1">
            {hours.map((h) => {
              let label = "";
              let color = "";
              if (h === 3) { label = "SYD"; color = "#a855f7"; }
              if (h === 5) { label = "TKY"; color = "#3b82f6"; }
              if (h === 13) { label = "LDN"; color = "#00ff9d"; }
              if (h === 18) { label = "NY"; color = "#ff9500"; }
              return (
                <div key={h} className="flex-1 text-center">
                  {label && (
                    <span className="text-[8px] font-bold" style={{ color }}>{label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-[10px] text-muted-foreground">
          <span>{lang === "bn" ? "অ্যাক্টিভিটি:" : "Activity:"}</span>
          <div className="flex items-center gap-1">
            <div className="h-3 w-6 rounded-sm bg-zinc-800/50" /> {lang === "bn" ? "কম" : "Low"}
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-6 rounded-sm bg-[#a855f7]/60" /> {lang === "bn" ? "মধ্যম" : "Med"}
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-6 rounded-sm bg-[#3b82f6]" /> {lang === "bn" ? "উচ্চ" : "High"}
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-6 rounded-sm bg-[#00ff9d]" /> {lang === "bn" ? "অতি উচ্চ" : "V.High"}
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-6 rounded-sm bg-[#ff9500]" /> {lang === "bn" ? "শীর্ষ" : "Peak"}
          </div>
        </div>
      </div>
    </div>
  );
}

