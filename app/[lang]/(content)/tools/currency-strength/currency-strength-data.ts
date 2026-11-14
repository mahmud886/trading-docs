export const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "NZD", "CAD", "CHF"];

// Simulated strength scores (0-100)
export function generateStrength(): Record<string, number> {
  const base: Record<string, number> = {
    USD: 72,
    EUR: 45,
    GBP: 58,
    JPY: 35,
    AUD: 62,
    NZD: 55,
    CAD: 48,
    CHF: 40,
  };
  const result: Record<string, number> = {};
  for (const [key, val] of Object.entries(base)) {
    result[key] = Math.max(0, Math.min(100, val + (Math.random() * 10 - 5)));
  }
  return result;
}

export function getStrengthColor(value: number): string {
  if (value >= 70) return "text-green-400";
  if (value >= 55) return "text-green-300/70";
  if (value >= 45) return "text-zinc-400";
  if (value >= 30) return "text-red-300/70";
  return "text-red-400";
}

export function getBarColor(value: number): string {
  if (value >= 70) return "bg-green-500";
  if (value >= 55) return "bg-green-500/60";
  if (value >= 45) return "bg-zinc-500";
  if (value >= 30) return "bg-red-500/60";
  return "bg-red-500";
}
