export interface RiskRewardMetrics {
  riskPips: number;
  profitPips: number;
  riskRewardRatio: number;
  riskAmount: number;
  profitAmount: number;
  winRateRequired: number;
}

/** Assumes $10 per pip per 1.0 lot as a baseline; distances are price differences. */
export function riskRewardMetrics(entry: number, stop: number, target: number, lotSize: number): RiskRewardMetrics {
  const riskPips = Math.abs(entry - stop);
  const profitPips = Math.abs(target - entry);
  const riskRewardRatio = profitPips / riskPips;
  return {
    riskPips,
    profitPips,
    riskRewardRatio,
    riskAmount: riskPips * 10 * lotSize,
    profitAmount: profitPips * 10 * lotSize,
    winRateRequired: 100 / (riskRewardRatio + 1),
  };
}
