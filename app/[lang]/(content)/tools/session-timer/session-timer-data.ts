export interface Session {
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

export const SESSIONS: Session[] = [
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

export function getSessionProgress(session: Session, currentMinutes: number) {
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
    totalDuration = 24 * 60 - open + close;
    if (isOpen) {
      elapsedMinutes = currentMinutes >= open ? currentMinutes - open : 24 * 60 - open + currentMinutes;
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

export function getTimeUntilOpen(session: Session, currentMinutes: number): string {
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
