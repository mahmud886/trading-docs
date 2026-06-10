"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  importance: "high" | "medium" | "low";
  country: string;
}

export default function EconomicCalendar() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      name: "Federal Open Market Committee Decision",
      date: "2024-05-14",
      time: "18:00",
      importance: "high",
      country: "USA",
    },
    {
      id: 2,
      name: "Retail Sales",
      date: "2024-05-15",
      time: "12:30",
      importance: "high",
      country: "USA",
    },
    {
      id: 3,
      name: "Producer Price Index",
      date: "2024-05-16",
      time: "12:30",
      importance: "medium",
      country: "USA",
    },
    {
      id: 4,
      name: "European Central Bank Interest Rate Decision",
      date: "2024-05-16",
      time: "13:00",
      importance: "high",
      country: "EUR",
    },
    {
      id: 5,
      name: "Bank of England Interest Rate Decision",
      date: "2024-05-17",
      time: "12:00",
      importance: "high",
      country: "GBP",
    },
  ]);

  const [filter, setFilter] = useState<"all" | "high" | "medium" | "low">("all");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const filteredEvents = filter === "all" ? events : events.filter((e) => e.importance === filter);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "high":
        return "bg-red-900/20 border-red-500/30 text-red-400";
      case "medium":
        return "bg-yellow-900/20 border-yellow-500/30 text-yellow-400";
      case "low":
        return "bg-green-900/20 border-green-500/30 text-green-400";
      default:
        return "";
    }
  };

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case "high":
        return "🔴 High Impact";
      case "medium":
        return "🟡 Medium Impact";
      case "low":
        return "🟢 Low Impact";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Tools
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-3xl font-bold text-foreground">Economic Calendar</h1>
        <p className="text-muted-foreground mt-2">Track important economic events that impact forex markets</p>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4 flex-wrap">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-foreground"
                  : "bg-muted text-muted-foreground hover:text-accent-green"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("high")}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                filter === "high"
                  ? "bg-red-600 text-foreground"
                  : "bg-muted text-muted-foreground hover:text-accent-green"
              }`}
            >
              High Impact
            </button>
            <button
              onClick={() => setFilter("medium")}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                filter === "medium"
                  ? "bg-yellow-600 text-foreground"
                  : "bg-muted text-muted-foreground hover:text-accent-green"
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setFilter("low")}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                filter === "low"
                  ? "bg-green-600 text-foreground"
                  : "bg-muted text-muted-foreground hover:text-accent-green"
              }`}
            >
              Low
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-foreground hover:text-accent-green">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm">Enable Alerts</span>
            </label>
          </div>
        </div>

        {/* Events List */}
        <div className="mt-8 space-y-3">
          <p className="text-muted-foreground text-sm font-medium">Upcoming Events ({filteredEvents.length})</p>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No events found for this filter</p>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`rounded-lg border p-4 transition-all hover:shadow-lg ${getImportanceColor(event.importance)}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{event.name}</h3>
                      <span className="text-xs font-bold px-2 py-1 bg-black/20 rounded">{event.country}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-foreground mt-2">
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time} UTC</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-bold whitespace-nowrap">{getImportanceBadge(event.importance)}</p>
                    {notificationsEnabled && (
                      <button className="mt-2 text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded transition-colors">
                        Set Alert
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Trading Tips */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-3">💡 Trading Around Economic Events</h3>
          <div className="space-y-2 text-sm text-foreground">
            <p>
              <span className="font-semibold">High Impact Events:</span> Major volatility expected, wider spreads may
              occur
            </p>
            <p>
              <span className="font-semibold">Medium Impact:</span> Moderate volatility potential
            </p>
            <p>
              <span className="font-semibold">Low Impact:</span> Minor price movement expected
            </p>
            <p className="mt-3 text-muted-foreground">
              <span className="font-semibold">Pro Tip:</span> Avoid trading 30 min before and after high-impact events
              if scalping
            </p>
          </div>
        </div>

        {/* Major Economic Indicators */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Important Economic Indicators</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-start">
              <span className="text-foreground">
                <span className="font-semibold">Non-Farm Payroll (NFP):</span> Monthly US employment data
              </span>
              <span className="text-red-400 font-bold">🔴</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-foreground">
                <span className="font-semibold">Fed Interest Rate:</span> FOMC rate decision
              </span>
              <span className="text-red-400 font-bold">🔴</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-foreground">
                <span className="font-semibold">CPI / Inflation:</span> Consumer price index data
              </span>
              <span className="text-red-400 font-bold">🔴</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-foreground">
                <span className="font-semibold">GDP:</span> Economic growth rate
              </span>
              <span className="text-red-400 font-bold">🔴</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="text-foreground">
                <span className="font-semibold">Retail Sales:</span> Consumer spending indicator
              </span>
              <span className="text-yellow-400 font-bold">🟡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
