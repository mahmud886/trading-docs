"use client";

import { useEffect, useState } from "react";

interface SessionInfo {
  name: string;
  city: string;
  color: string;
  openBD: number; // hour in BD time (0-23)
  closeBD: number;
  flag: string;
}

const sessions: SessionInfo[] = [
  { name: "Sydney", city: "Sydney", color: "#a855f7", openBD: 3, closeBD: 12, flag: "🇦🇺" },
  { name: "Tokyo", city: "Tokyo", color: "#3b82f6", openBD: 5, closeBD: 14, flag: "🇯🇵" },
  { name: "London", city: "London", color: "#00ff9d", openBD: 13, closeBD: 22, flag: "🇬🇧" },
  { name: "New York", city: "New York", color: "#ff9500", openBD: 18, closeBD: 27, flag: "🇺🇸" }, // 27 = 3AM next day
];

function formatTime(h: number) {
  const hour = h % 24;
  const ampm = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 || 12;
  return `${h12}:00 ${ampm}`;
}

function isSessionActive(session: SessionInfo, currentHourBD: number): boolean {
  const open = session.openBD;
  const close = session.closeBD % 24;
  if (session.closeBD > 23) {
    // wraps past midnight
    return currentHourBD >= open || currentHourBD < close;
  }
  return currentHourBD >= open && currentHourBD < close;
}

export function SessionTimeline() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="h-48 animate-pulse rounded-lg bg-zinc-800/50" />
      </div>
    );
  }

  // Bangladesh time: UTC+6
  const utcHour = now.getUTCHours();
  const bdHour = (utcHour + 6) % 24;
  const bdMinute = now.getUTCMinutes();

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-6">
      {/* Current Time Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Live Session Timeline</h3>
          <p className="text-sm text-muted-foreground">Bangladesh Standard Time (GMT+6)</p>
        </div>
        <div className="text-right">
          <div className="font-mono text-2xl font-bold text-foreground">
            {String(bdHour).padStart(2, "0")}:{String(bdMinute).padStart(2, "0")}
          </div>
          <div className="text-xs text-muted-foreground">BST (BD Time)</div>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="space-y-3">
        {sessions.map((session) => {
          const active = isSessionActive(session, bdHour);
          return (
            <div key={session.name} className="flex items-center gap-3">
              {/* Session Label */}
              <div className="flex w-28 shrink-0 items-center gap-2">
                <span className="text-base">{session.flag}</span>
                <div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: active ? session.color : "#71717a" }}
                  >
                    {session.name}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="w-16 shrink-0">
                {active ? (
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                    style={{ backgroundColor: `${session.color}20`, color: session.color }}
                  >
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full"
                      style={{ backgroundColor: session.color }}
                    />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    Closed
                  </span>
                )}
              </div>

              {/* Bar */}
              <div className="relative flex-1">
                <div className="flex h-6 overflow-hidden rounded-md bg-zinc-800/50">
                  {hours.map((h) => {
                    const inSession =
                      session.closeBD > 23
                        ? h >= session.openBD || h < session.closeBD % 24
                        : h >= session.openBD && h < session.closeBD;

                    const isCurrent = h === bdHour;

                    return (
                      <div
                        key={h}
                        className="relative flex-1 border-r border-border/30"
                        style={{
                          backgroundColor: inSession ? `${session.color}25` : "transparent",
                        }}
                      >
                        {isCurrent && (
                          <div
                            className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2"
                            style={{ backgroundColor: "#fff" }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time */}
              <div className="w-24 shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                {formatTime(session.openBD)} - {formatTime(session.closeBD)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hour labels */}
      <div className="mt-2 flex" style={{ marginLeft: "172px", marginRight: "96px" }}>
        {[0, 3, 6, 9, 12, 15, 18, 21].map((h) => (
          <div
            key={h}
            className="text-[9px] text-zinc-600"
            style={{ width: `${(3 / 24) * 100}%` }}
          >
            {formatTime(h)}
          </div>
        ))}
      </div>

      {/* Overlap indicator */}
      <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-gradient-to-r from-[#3b82f6]/40 to-[#00ff9d]/40" />
          Tokyo-London Overlap: 1:00 PM - 2:00 PM BD
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-gradient-to-r from-[#00ff9d]/40 to-[#ff9500]/40" />
          London-NY Overlap: 6:00 PM - 10:00 PM BD
        </div>
      </div>
    </div>
  );
}

