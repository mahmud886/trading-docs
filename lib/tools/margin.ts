export interface MarginPosition {
  lotSize: number;
  leverage: number;
}

/** Standard lot = 100,000 units. */
export function requiredMargin(pos: MarginPosition): number {
  return (pos.lotSize * 100000) / pos.leverage;
}

export function marginSummary(balance: number, positions: MarginPosition[]) {
  const totalMarginUsed = positions.reduce((sum, p) => sum + requiredMargin(p), 0);
  return {
    totalMarginUsed,
    freeMargin: balance - totalMarginUsed,
    marginLevel: totalMarginUsed > 0 ? (balance / totalMarginUsed) * 100 : Infinity,
    marginUsagePercent: (totalMarginUsed / balance) * 100,
  };
}
