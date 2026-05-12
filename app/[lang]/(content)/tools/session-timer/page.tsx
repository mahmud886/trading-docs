"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Globe, Activity, Clock, Zap, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";

interface Session {
  name: string;
  shortName: string;
  city: string;
  flag: string;
  open: number;
  close: number;
  color: string;
  gradient: string;
  pairs: string[];
  volatility: "Low" | "Medium" | "High" | "Very High";
}

const SESSIONS: Session[] = [
  {
    name: "Sydney Session",
    shortName: "SYD",
    city: "Sydney",
    flag: "🇦🇺",
    open: 21 * 60,
    close: 6 * 60,
    color: "#f97316",
    gradient: "from-orange-500/20 to-orange-600/5",
    pairs: ["AUD/USD", "NZD/USD", "AUD/JPY"],
    volatility: "Low",
  },
  {
    name: "Tokyo Session",
    shortName: "TKY",
    city: "Tokyo",
    flag: "🇯🇵",
    open: 0 * 60,
    close: 9 * 60,
    color: "#ef4444",
    gradient: "from-red-500/20 to-red-600/5",
    pairs: ["USD/JPY", "EUR/JPY", "GBP/JPY"],
    volatility: "Medium",
  },
  {
    name: "London Session",
    shortName: "LDN",
    city: "London",
    flag: "🇬🇧",
    open: 8 * 60,
    close: 17 * 60,
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    pairs: ["EUR/USD", "GBP/USD", "EUR/GBP"],
    volatility: "High",
  },
  {
    name: "New York Session",
    shortName: "NYC",
    city: "New York",
    flag: "🇺🇸",
    open: 13 * 60,
    close: 22 * 60,
    color: "#22c55e",
    gradient: "from-green-500/20 to-green-600/5",
    pairs: ["EUR/USD", "USD/CAD", "USD/CHF"],
    volatility: "Very High",
  },
];

function getSessionProgress(session: Session, currentMinutes: number) {
  const { open, close } = session;
  let isOpen = false;
  let totalDuration = 0;
  let elapsedMinutes = 0;

  if (open < close) {
    isOpen = currentMinutes >= open && currentMinutes < close;
    totalDuration = close - open;
    elapsedMinutes = isOpen ? currentMinutes - open : 0;
  } else {
    isOpen = currentMinutes >= open || currentMinutes < close;
    totalDuration = (24 * 60 - open) + close;
    if (isOpen) {
      elapsedMinutes = currentMinutes >= open
        ? currentMinutes - open
        : (24 * 60 - open) + currentMinutes;
    }
  }

  const progress = isOpen ? (elapsedMinutes / totalDuration) * 100 : 0;
  const remainingMinutes = isOpen ? totalDuration - elapsedMinutes : 0;

  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return {
    isOpen,
    progress,
    remaining: formatTime(remainingMinutes),
    elapsed: formatTime(elapsedMinutes),
  };
}

function getTimeUntilOpen(session: Session, currentMinutes: number): string {
  const { open, close } = session;
  let isOpen = false;

  if (open < close) {
    isOpen = currentMinutes >= open && currentMinutes < close;
  } else {
    isOpen = currentMinutes >= open || currentMinutes < close;
  }

  if (isOpen) return "Now";

  let minutesUntil = open - currentMinutes;
  if (minutesUntil < 0) minutesUntil += 24 * 60;

  const h = Math.floor(minutesUntil / 60);
  const m = minutesUntil % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export default function SessionTimer() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    requestAnimationFrame(() => setMounted(true));
    return () => clearInterval(timer);
  }, []);

  const currentMinutes = currentTime.getUTCHours() * 60 + currentTime.getUTCMinutes();
  const activeSessions = useMemo(() =>
    SESSIONS.filter(s => getSessionProgress(s, currentMinutes).isOpen),
    [currentMinutes]
  );

  const isWeekend = currentTime.getUTCDay() === 0 || currentTime.getUTCDay() === 6;

  if (!mounted) {
    return (
      <div className="max-w-5xl mx-auto">
        <Link
          href={`/${lang}/tools`}
          className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Tools
        </Link>
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-muted-foreground flex items-center gap-2">
            <Clock className="animate-spin" size={20} />
            Loading session data...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        {lang === "bn" ? "টুলস এ ফিরুন" : "Back to Tools"}
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Globe className="text-cyan-400" size={28} />
            {lang === "bn" ? "ট্রেডিং সেশন টাইমার" : "Trading Session Timer"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {lang === "bn"
              ? "রিয়েল-টাইম ফরেক্স মার্কেট সেশন মনিটর"
              : "Real-time forex market session monitor"}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
            isWeekend
              ? "bg-red-500/10 text-red-400 border border-red-500/20"
              : "bg-green-500/10 text-green-400 border border-green-500/20"
          }`}>
            <span className={`w-2 h-2 rounded-full ${isWeekend ? "bg-red-400" : "bg-green-400 animate-pulse"}`}></span>
            {isWeekend ? (lang === "bn" ? "মার্কেট বন্ধ" : "Market Closed") : (lang === "bn" ? "মার্কেট চালু" : "Market Open")}
          </span>
        </div>
      </div>

      {/* Live Clock Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl mb-8">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-widest text-accent-green/80 font-medium mb-1">
                🇧🇩 {lang === "bn" ? "বাংলাদেশ সময় (UTC+6)" : "Bangladesh Time (UTC+6)"}
              </p>
              <p className="text-5xl sm:text-6xl font-bold text-foreground font-mono tracking-tight">
                {(() => {
                  const bdHour = (currentTime.getUTCHours() + 6) % 24;
                  const h12 = bdHour === 0 ? 12 : bdHour > 12 ? bdHour - 12 : bdHour;
                  const ampm = bdHour >= 12 ? "PM" : "AM";
                  return (
                    <>
                      {String(h12).padStart(2, '0')}
                      <span className="text-accent-green animate-pulse">:</span>
                      {String(currentTime.getUTCMinutes()).padStart(2, '0')}
                      <span className="text-accent-green animate-pulse">:</span>
                      <span className="text-muted-foreground">{String(currentTime.getUTCSeconds()).padStart(2, '0')}</span>
                      <span className="text-accent-green text-2xl ml-2">{ampm}</span>
                    </>
                  );
                })()}
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })}
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                {lang === "bn" ? "সক্রিয় সেশন" : "Active Sessions"}
              </p>
              <div className="flex items-center gap-2">
                {activeSessions.length > 0 ? (
                  activeSessions.map(s => (
                    <span
                      key={s.shortName}
                      className="px-3 py-1.5 rounded-lg text-sm font-bold border"
                      style={{
                        backgroundColor: `${s.color}15`,
                        borderColor: `${s.color}40`,
                        color: s.color,
                      }}
                    >
                      {s.flag} {s.shortName}
                    </span>
                  ))
                ) : (
                  <span className="text-muted-foreground text-sm">{lang === "bn" ? "কোন সক্রিয় সেশন নেই" : "No active sessions"}</span>
                )}
              </div>
              {activeSessions.length >= 2 && (
                <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-medium mt-1">
                  <Zap size={12} />
                  {lang === "bn" ? "ওভারল্যাপ! উচ্চ ভোলাটিলিটি" : "Overlap! High Volatility"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 24h Timeline Visual */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl mb-8 p-6">
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Activity size={16} className="text-cyan-400" />
          {lang === "bn" ? "২৪ ঘন্টার টাইমলাইন" : "24-Hour Timeline"}
        </h2>

        <div className="relative">
          <div className="flex justify-between text-[10px] text-muted-foreground mb-1 px-0.5">
            {[0, 3, 6, 9, 12, 15, 18, 21].map(h => (
              <span key={h}>{String(h).padStart(2, '0')}</span>
            ))}
          </div>

          <div className="relative h-32 rounded-xl overflow-hidden bg-muted border border-border">
            {SESSIONS.map((session, idx) => {
              const { open, close } = session;
              const status = getSessionProgress(session, currentMinutes);

              if (open < close) {
                const left = (open / (24 * 60)) * 100;
                const width = ((close - open) / (24 * 60)) * 100;
                return (
                  <div
                    key={session.shortName}
                    className="absolute h-6 rounded-md flex items-center px-2 cursor-pointer transition-all duration-300 hover:scale-y-125 hover:z-10"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      top: `${idx * 25 + 4}%`,
                      backgroundColor: `${session.color}${status.isOpen ? '40' : '20'}`,
                      border: `1px solid ${session.color}${status.isOpen ? '80' : '30'}`,
                    }}
                    onClick={() => setSelectedSession(selectedSession === session.shortName ? null : session.shortName)}
                  >
                    <span className="text-[10px] font-bold truncate" style={{ color: session.color }}>
                      {session.flag} {session.shortName}
                    </span>
                    {status.isOpen && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: session.color }} />
                    )}
                  </div>
                );
              } else {
                // Crosses midnight - two bars
                const leftPart = (open / (24 * 60)) * 100;
                const widthPart1 = ((24 * 60 - open) / (24 * 60)) * 100;
                const widthPart2 = (close / (24 * 60)) * 100;
                return (
                  <div key={session.shortName}>
                    <div
                      className="absolute h-6 rounded-md flex items-center px-2 cursor-pointer transition-all duration-300 hover:scale-y-125 hover:z-10"
                      style={{
                        left: `${leftPart}%`,
                        width: `${widthPart1}%`,
                        top: `${idx * 25 + 4}%`,
                        backgroundColor: `${session.color}${status.isOpen ? '40' : '20'}`,
                        border: `1px solid ${session.color}${status.isOpen ? '80' : '30'}`,
                      }}
                      onClick={() => setSelectedSession(selectedSession === session.shortName ? null : session.shortName)}
                    >
                      <span className="text-[10px] font-bold truncate" style={{ color: session.color }}>
                        {session.flag} {session.shortName}
                      </span>
                      {status.isOpen && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: session.color }} />
                      )}
                    </div>
                    <div
                      className="absolute h-6 rounded-md flex items-center px-2 transition-all duration-300 hover:scale-y-125 hover:z-10"
                      style={{
                        left: '0%',
                        width: `${widthPart2}%`,
                        top: `${idx * 25 + 4}%`,
                        backgroundColor: `${session.color}${status.isOpen ? '40' : '20'}`,
                        border: `1px solid ${session.color}${status.isOpen ? '80' : '30'}`,
                      }}
                    />
                  </div>
                );
              }
            })}

            {/* Current time indicator */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 z-20"
              style={{ left: `${(currentMinutes / (24 * 60)) * 100}%` }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            {SESSIONS.map(s => (
              <div key={s.shortName} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: `${s.color}60` }} />
                <span className="text-[11px] text-muted-foreground">{s.flag} {s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Session Cards */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {SESSIONS.map((session) => {
          const status = getSessionProgress(session, currentMinutes);
          const timeUntil = getTimeUntilOpen(session, currentMinutes);
          const isExpanded = selectedSession === session.shortName;

          return (
            <div
              key={session.shortName}
              onClick={() => setSelectedSession(isExpanded ? null : session.shortName)}
              className={`relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 cursor-pointer ${
                status.isOpen
                  ? "border-opacity-50 shadow-lg"
                  : "border-border/40 hover:border-border/60"
              }`}
              style={{
                borderColor: status.isOpen ? `${session.color}50` : undefined,
                boxShadow: status.isOpen ? `0 0 30px ${session.color}10` : undefined,
              }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${session.gradient} transition-opacity duration-500`}
                style={{ opacity: status.isOpen ? 1 : 0.3 }}
              />

              <div className="relative p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{session.flag}</span>
                    <div>
                      <h3 className="font-bold text-foreground text-base">{session.name}</h3>
                      <p className="text-xs text-muted-foreground">{session.city}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {status.isOpen ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/15 text-green-400 border border-green-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        LIVE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                        <Clock size={10} />
                        {timeUntil}
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5">
                    <span>{String(Math.floor(session.open / 60)).padStart(2, '0')}:{String(session.open % 60).padStart(2, '0')} UTC</span>
                    <span>{String(Math.floor(session.close / 60)).padStart(2, '0')}:{String(session.close % 60).padStart(2, '0')} UTC</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted/80 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-linear"
                      style={{
                        width: `${status.progress}%`,
                        background: status.isOpen
                          ? `linear-gradient(90deg, ${session.color}, ${session.color}cc)`
                          : 'transparent',
                        boxShadow: status.isOpen ? `0 0 8px ${session.color}60` : 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Live Stats */}
                {status.isOpen && (
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-black/20 rounded-lg p-2 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase">{lang === "bn" ? "অতিবাহিত" : "Elapsed"}</p>
                      <p className="text-sm font-bold text-foreground">{status.elapsed}</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-2 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase">{lang === "bn" ? "বাকি" : "Left"}</p>
                      <p className="text-sm font-bold" style={{ color: session.color }}>{status.remaining}</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-2 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase">{lang === "bn" ? "অগ্রগতি" : "Progress"}</p>
                      <p className="text-sm font-bold text-foreground">{status.progress.toFixed(0)}%</p>
                    </div>
                  </div>
                )}

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                  <div className="border-t border-border pt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{lang === "bn" ? "ভোলাটিলিটি" : "Volatility"}</span>
                      <span className={`text-xs font-bold ${
                        session.volatility === "Very High" ? "text-red-400" :
                        session.volatility === "High" ? "text-orange-400" :
                        session.volatility === "Medium" ? "text-yellow-400" :
                        "text-green-400"
                      }`}>{session.volatility}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{lang === "bn" ? "সেরা পেয়ার" : "Best Pairs"}</span>
                      <div className="flex gap-1">
                        {session.pairs.map(p => (
                          <span key={p} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-foreground border border-border">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-2">
                  <span className="text-[10px] text-muted-foreground">{isExpanded ? "▲" : "▼ Tap for details"}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Kill Zones & Overlaps */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {/* Kill Zones */}
        <div className="rounded-2xl border border-border bg-card backdrop-blur-sm p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Zap size={16} className="text-yellow-400" />
            {lang === "bn" ? "ICT কিল জোন" : "ICT Kill Zones"}
          </h3>
          <div className="space-y-3">
            {[
              { name: lang === "bn" ? "এশিয়ান কিল জোন" : "Asian Kill Zone", time: "00:00 - 04:00 UTC", color: "#ef4444", active: currentMinutes >= 0 && currentMinutes < 240 },
              { name: lang === "bn" ? "লন্ডন কিল জোন" : "London Kill Zone", time: "07:00 - 10:00 UTC", color: "#3b82f6", active: currentMinutes >= 420 && currentMinutes < 600 },
              { name: lang === "bn" ? "নিউ ইয়র্ক কিল জোন" : "NY Kill Zone", time: "12:00 - 15:00 UTC", color: "#22c55e", active: currentMinutes >= 720 && currentMinutes < 900 },
              { name: lang === "bn" ? "লন্ডন ক্লোজ কিল জোন" : "London Close KZ", time: "15:00 - 17:00 UTC", color: "#a855f7", active: currentMinutes >= 900 && currentMinutes < 1020 },
            ].map(kz => (
              <div
                key={kz.name}
                className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                  kz.active
                    ? "border-opacity-50 bg-opacity-10"
                    : "border border-border"
                }`}
                style={{
                  borderColor: kz.active ? `${kz.color}50` : undefined,
                  backgroundColor: kz.active ? `${kz.color}10` : undefined,
                }}
              >
                <div className="flex items-center gap-2">
                  {kz.active && <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: kz.color }} />}
                  <span className={`text-sm font-medium ${kz.active ? "text-foreground" : "text-muted-foreground"}`}>
                    {kz.name}
                  </span>
                </div>
                <span className="text-xs font-mono" style={{ color: kz.active ? kz.color : '#71717a' }}>
                  {kz.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Session Overlaps */}
        <div className="rounded-2xl border border-border bg-card backdrop-blur-sm p-6">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp size={16} className="text-green-400" />
            {lang === "bn" ? "সেশন ওভারল্যাপ" : "Session Overlaps"}
          </h3>
          <div className="space-y-3">
            {[
              { name: lang === "bn" ? "টোকিও-লন্ডন" : "Tokyo-London", time: "08:00 - 09:00", volatility: lang === "bn" ? "মাঝারি" : "Medium", color: "#f59e0b", active: currentMinutes >= 480 && currentMinutes < 540 },
              { name: lang === "bn" ? "লন্ডন-নিউ ইয়র্ক" : "London-New York", time: "13:00 - 17:00", volatility: lang === "bn" ? "সর্বোচ্চ" : "Highest", color: "#ef4444", active: currentMinutes >= 780 && currentMinutes < 1020 },
              { name: lang === "bn" ? "সিডনি-টোকিও" : "Sydney-Tokyo", time: "00:00 - 06:00", volatility: lang === "bn" ? "নিম্ন" : "Low", color: "#06b6d4", active: currentMinutes >= 0 && currentMinutes < 360 },
            ].map(overlap => (
              <div
                key={overlap.name}
                className={`p-3 rounded-lg border transition-all ${
                  overlap.active
                    ? "border-opacity-50"
                    : "border border-border"
                }`}
                style={{
                  borderColor: overlap.active ? `${overlap.color}50` : undefined,
                  backgroundColor: overlap.active ? `${overlap.color}10` : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-semibold ${overlap.active ? "text-foreground" : "text-muted-foreground"}`}>
                    {overlap.name}
                  </span>
                  {overlap.active && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: `${overlap.color}20`, color: overlap.color }}>
                      ACTIVE
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{overlap.time} UTC</span>
                  <span className="text-xs" style={{ color: overlap.color }}>{overlap.volatility}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bangladesh Time Reference */}
      <div className="rounded-2xl border border border-border bg-card backdrop-blur-sm p-6 mb-8">
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          🇧🇩 {lang === "bn" ? "বাংলাদেশ সময় রেফারেন্স (UTC+6)" : "Bangladesh Time Reference (UTC+6)"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { session: "Sydney", bdTime: "3:00 AM - 12:00 PM", flag: "🇦🇺" },
            { session: "Tokyo", bdTime: "6:00 AM - 3:00 PM", flag: "🇯🇵" },
            { session: "London", bdTime: "2:00 PM - 11:00 PM", flag: "🇬🇧" },
            { session: "New York", bdTime: "7:00 PM - 4:00 AM", flag: "🇺🇸" },
          ].map(item => (
            <div key={item.session} className="bg-muted rounded-xl p-3 text-center border border-border">
              <span className="text-lg">{item.flag}</span>
              <p className="text-xs text-muted-foreground mt-1">{item.session}</p>
              <p className="text-sm font-bold text-foreground mt-0.5">{item.bdTime}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          {lang === "bn"
            ? "💡 লন্ডন-নিউ ইয়র্ক ওভারল্যাপ (সন্ধ্যা ৭:০০ - রাত ১১:০০ বিডি সময়) সবচেয়ে বেশি ভোলাটাইল"
            : "💡 London-NY overlap (7:00 PM - 11:00 PM BD time) offers the highest volatility for BD traders"}
        </p>
      </div>

      {/* Pro Tips */}
      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm p-6">
        <h3 className="font-bold text-amber-200 mb-3 flex items-center gap-2">
          💡 {lang === "bn" ? "সেশন ট্রেডিং প্রো টিপস" : "Session Trading Pro Tips"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            lang === "bn" ? "লন্ডন-নিউ ইয়র্ক ওভারল্যাপে সবচেয়ে বেশি লিকুইডিটি থাকে" : "London-NY overlap has the highest liquidity and volatility",
            lang === "bn" ? "এশিয়ান সেশনে সাধারণত রেঞ্জ-বাউন্ড মুভমেন্ট দেখা যায়" : "Asian session typically shows range-bound movement",
            lang === "bn" ? "কিল জোনে উচ্চ সম্ভাবনার সেটআপ খুঁজুন" : "Look for high-probability setups during kill zones",
            lang === "bn" ? "সেশন ওপেনিং-এ ম্যানিপুলেশন সুইপ ঘটে" : "Session openings often feature manipulation sweeps",
            lang === "bn" ? "নিউজ ইভেন্টের ৩০ মিনিট আগে ট্রেড এড়িয়ে চলুন" : "Avoid trading 30 min before high-impact news events",
            lang === "bn" ? "আপনার টাইমজোন অনুযায়ী ট্রেডিং প্ল্যান তৈরি করুন" : "Build your trading plan around your timezone sessions",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">▸</span>
              <span className="text-sm text-foreground">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
