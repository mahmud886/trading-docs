"use client";

interface SessionCardProps {
  name: string;
  flag: string;
  color: string;
  openBD: string;
  closeBD: string;
  openGMT: string;
  closeGMT: string;
  volatility: "Low" | "Medium" | "High" | "Very High";
  pairs: string[];
  characteristics: string[];
  scalpingSuitability: string;
  intradaySuitability: string;
}

const volColors = {
  Low: "text-muted-foreground bg-zinc-800",
  Medium: "text-blue-400 bg-blue-500/10",
  High: "text-[#00ff9d] bg-[#00ff9d]/10",
  "Very High": "text-[#ff9500] bg-[#ff9500]/10",
};

export function SessionCard({
  name,
  flag,
  color,
  openBD,
  closeBD,
  openGMT,
  closeGMT,
  volatility,
  pairs,
  characteristics,
  scalpingSuitability,
  intradaySuitability,
}: SessionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-border/80">
      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-[0.06] transition-opacity group-hover:opacity-[0.12]"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}, transparent)` }}
      />

      {/* Header */}
      <div className="relative border-b border-border/50 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{flag}</span>
            <div>
              <h3 className="text-xl font-bold text-foreground">{name} Session</h3>
              <div className="mt-1 flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${volColors[volatility]}`}>
                  {volatility} Volatility
                </span>
              </div>
            </div>
          </div>
          <div
            className="h-3 w-3 rounded-full animate-pulse-glow"
            style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}60` }}
          />
        </div>
      </div>

      {/* Time Grid */}
      <div className="grid grid-cols-2 gap-px bg-zinc-800/30 p-px">
        <div className="bg-muted p-4">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">BD Time (GMT+6)</div>
          <div className="mt-1 font-mono text-lg font-bold text-foreground">{openBD} → {closeBD}</div>
        </div>
        <div className="bg-muted p-4">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">GMT / UTC</div>
          <div className="mt-1 font-mono text-lg font-bold text-muted-foreground">{openGMT} → {closeGMT}</div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        {/* Best Pairs */}
        <div className="mb-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Best Currency Pairs</div>
          <div className="flex flex-wrap gap-1.5">
            {pairs.map((pair) => (
              <span
                key={pair}
                className="rounded-md border border-zinc-700/50 bg-zinc-800/50 px-2 py-1 text-xs font-mono text-zinc-300"
              >
                {pair}
              </span>
            ))}
          </div>
        </div>

        {/* Characteristics */}
        <div className="mb-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Characteristics</div>
          <ul className="space-y-1.5">
            {characteristics.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span style={{ color }} className="mt-0.5">▹</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Suitability */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-muted/50 p-3">
            <div className="text-[10px] font-medium uppercase text-muted-foreground">Scalping</div>
            <div className="mt-1 text-sm font-semibold text-foreground">{scalpingSuitability}</div>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-3">
            <div className="text-[10px] font-medium uppercase text-muted-foreground">Intraday</div>
            <div className="mt-1 text-sm font-semibold text-foreground">{intradaySuitability}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SessionCardsGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <SessionCard
        name="Sydney"
        flag="🇦🇺"
        color="#a855f7"
        openBD="3:00 AM"
        closeBD="12:00 PM"
        openGMT="9:00 PM (prev)"
        closeGMT="6:00 AM"
        volatility="Low"
        pairs={["AUD/USD", "NZD/USD", "AUD/JPY", "AUD/NZD"]}
        characteristics={[
          "Lowest volatility of all sessions",
          "Sets the initial range for Asian session",
          "Good for range-bound strategies",
          "Light institutional activity",
        ]}
        scalpingSuitability="⭐⭐"
        intradaySuitability="⭐⭐"
      />
      <SessionCard
        name="Tokyo"
        flag="🇯🇵"
        color="#3b82f6"
        openBD="5:00 AM"
        closeBD="2:00 PM"
        openGMT="11:00 PM (prev)"
        closeGMT="8:00 AM"
        volatility="Medium"
        pairs={["USD/JPY", "EUR/JPY", "GBP/JPY", "AUD/JPY"]}
        characteristics={[
          "Defines the Asian range for London to sweep",
          "JPY pairs most active",
          "Moderate institutional flow",
          "Range creation phase (ICT concept)",
        ]}
        scalpingSuitability="⭐⭐⭐"
        intradaySuitability="⭐⭐⭐"
      />
      <SessionCard
        name="London"
        flag="🇬🇧"
        color="#00ff9d"
        openBD="1:00 PM"
        closeBD="10:00 PM"
        openGMT="7:00 AM"
        closeGMT="4:00 PM"
        volatility="Very High"
        pairs={["EUR/USD", "GBP/USD", "EUR/GBP", "XAU/USD"]}
        characteristics={[
          "Highest volume session globally",
          "Sweeps Asian session liquidity",
          "Major trend-setting moves",
          "ICT London Kill Zone: 1:00 PM - 4:00 PM BD",
        ]}
        scalpingSuitability="⭐⭐⭐⭐⭐"
        intradaySuitability="⭐⭐⭐⭐⭐"
      />
      <SessionCard
        name="New York"
        flag="🇺🇸"
        color="#ff9500"
        openBD="6:00 PM"
        closeBD="3:00 AM"
        openGMT="12:00 PM"
        closeGMT="9:00 PM"
        volatility="High"
        pairs={["EUR/USD", "USD/CAD", "GBP/USD", "US30", "NAS100"]}
        characteristics={[
          "Second highest volume session",
          "Overlaps with London for peak volatility",
          "US economic data releases",
          "ICT NY Kill Zone: 7:00 PM - 10:00 PM BD",
        ]}
        scalpingSuitability="⭐⭐⭐⭐⭐"
        intradaySuitability="⭐⭐⭐⭐⭐"
      />
    </div>
  );
}

