"use client";

import { useEffect, useState } from "react";

interface ClockData {
  city: string;
  timezone: string;
  flag: string;
  color: string;
  utcOffset: number;
}

const clocks: ClockData[] = [
  { city: "Dhaka (BD)", timezone: "BST", flag: "🇧🇩", color: "#00ff9d", utcOffset: 6 },
  { city: "Sydney", timezone: "AEST", flag: "🇦🇺", color: "#a855f7", utcOffset: 10 },
  { city: "Tokyo", timezone: "JST", flag: "🇯🇵", color: "#3b82f6", utcOffset: 9 },
  { city: "London", timezone: "GMT", flag: "🇬🇧", color: "#00ff9d", utcOffset: 0 },
  { city: "New York", timezone: "EST", flag: "🇺🇸", color: "#ff9500", utcOffset: -5 },
];

export function WorldMarketClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="grid gap-3 sm:grid-cols-5">
        {clocks.map((c) => (
          <div key={c.city} className="h-24 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/30" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-5">
      {clocks.map((clock) => {
        const utcMs = time.getTime() + time.getTimezoneOffset() * 60000;
        const localTime = new Date(utcMs + clock.utcOffset * 3600000);
        const hours = localTime.getHours();
        const minutes = localTime.getMinutes();
        const seconds = localTime.getSeconds();
        const isDay = hours >= 7 && hours < 19;

        return (
          <div
            key={clock.city}
            className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center"
          >
            {/* Glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{ background: `radial-gradient(circle at 50% 0%, ${clock.color}, transparent 70%)` }}
            />

            <div className="relative">
              <span className="text-lg">{clock.flag}</span>
              <div className="mt-1 font-mono text-xl font-bold text-white">
                {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[11px] font-medium text-zinc-400">{clock.city}</div>
              <div className="mt-0.5 flex items-center justify-center gap-1 text-[10px] text-zinc-600">
                <span>{isDay ? "☀️" : "🌙"}</span>
                {clock.timezone} (UTC{clock.utcOffset >= 0 ? "+" : ""}
                {clock.utcOffset})
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
