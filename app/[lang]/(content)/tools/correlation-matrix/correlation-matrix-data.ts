export const pairs = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "USD/CAD",
  "NZD/USD",
  "EUR/GBP",
  "EUR/JPY",
  "GBP/JPY",
  "AUD/JPY",
  "USD/CHF",
  "EUR/AUD",
  "GBP/AUD",
  "EUR/CAD",
  "AUD/NZD",
];

// Simulated correlation data (in production, fetch from API)
export const correlationData: Record<string, Record<string, number>> = {
  "EUR/USD": {
    "EUR/USD": 1.0,
    "GBP/USD": 0.87,
    "USD/JPY": -0.62,
    "AUD/USD": 0.75,
    "USD/CAD": -0.84,
    "NZD/USD": 0.72,
    "EUR/GBP": 0.42,
    "EUR/JPY": 0.55,
    "GBP/JPY": 0.48,
    "AUD/JPY": 0.45,
    "USD/CHF": -0.92,
    "EUR/AUD": 0.38,
    "GBP/AUD": 0.22,
    "EUR/CAD": 0.65,
    "AUD/NZD": 0.15,
  },
  "GBP/USD": {
    "EUR/USD": 0.87,
    "GBP/USD": 1.0,
    "USD/JPY": -0.55,
    "AUD/USD": 0.7,
    "USD/CAD": -0.78,
    "NZD/USD": 0.65,
    "EUR/GBP": -0.15,
    "EUR/JPY": 0.5,
    "GBP/JPY": 0.62,
    "AUD/JPY": 0.5,
    "USD/CHF": -0.85,
    "EUR/AUD": 0.25,
    "GBP/AUD": 0.4,
    "EUR/CAD": 0.55,
    "AUD/NZD": 0.1,
  },
  "USD/JPY": {
    "EUR/USD": -0.62,
    "GBP/USD": -0.55,
    "USD/JPY": 1.0,
    "AUD/USD": -0.35,
    "USD/CAD": 0.55,
    "NZD/USD": -0.3,
    "EUR/GBP": -0.1,
    "EUR/JPY": 0.58,
    "GBP/JPY": 0.65,
    "AUD/JPY": 0.7,
    "USD/CHF": 0.58,
    "EUR/AUD": -0.2,
    "GBP/AUD": -0.15,
    "EUR/CAD": -0.4,
    "AUD/NZD": -0.05,
  },
  "AUD/USD": {
    "EUR/USD": 0.75,
    "GBP/USD": 0.7,
    "USD/JPY": -0.35,
    "AUD/USD": 1.0,
    "USD/CAD": -0.72,
    "NZD/USD": 0.92,
    "EUR/GBP": 0.15,
    "EUR/JPY": 0.4,
    "GBP/JPY": 0.45,
    "AUD/JPY": 0.72,
    "USD/CHF": -0.7,
    "EUR/AUD": -0.35,
    "GBP/AUD": -0.3,
    "EUR/CAD": 0.5,
    "AUD/NZD": 0.45,
  },
  "USD/CAD": {
    "EUR/USD": -0.84,
    "GBP/USD": -0.78,
    "USD/JPY": 0.55,
    "AUD/USD": -0.72,
    "USD/CAD": 1.0,
    "NZD/USD": -0.68,
    "EUR/GBP": -0.2,
    "EUR/JPY": -0.35,
    "GBP/JPY": -0.3,
    "AUD/JPY": -0.28,
    "USD/CHF": 0.8,
    "EUR/AUD": -0.3,
    "GBP/AUD": -0.18,
    "EUR/CAD": -0.75,
    "AUD/NZD": -0.12,
  },
};

export function getCorrelation(pair1: string, pair2: string): number {
  if (correlationData[pair1]?.[pair2] !== undefined) return correlationData[pair1][pair2];
  if (correlationData[pair2]?.[pair1] !== undefined) return correlationData[pair2][pair1];
  if (pair1 === pair2) return 1.0;
  return (Math.random() * 2 - 1) * 0.5; // fallback
}

export function getColor(value: number): string {
  if (value >= 0.7) return "bg-green-500/80 text-white";
  if (value >= 0.4) return "bg-green-500/40 text-green-200";
  if (value >= 0.1) return "bg-green-500/20 text-green-300";
  if (value > -0.1) return "bg-zinc-700/50 text-zinc-300";
  if (value > -0.4) return "bg-red-500/20 text-red-300";
  if (value > -0.7) return "bg-red-500/40 text-red-200";
  return "bg-red-500/80 text-white";
}
