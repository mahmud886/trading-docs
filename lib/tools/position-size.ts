/** Approximate pip value per 1.0 standard lot, in USD. Actual value depends on the pair and the account currency. */
export const PIP_VALUE_PER_LOT_USD = 10;

export function riskAmountUsd(balance: number, riskPercent: number): number {
  return (balance * riskPercent) / 100;
}

/** Lots = risk / (stop in pips x pip value per lot). */
export function positionSizeLots(
  balance: number,
  riskPercent: number,
  stopPips: number,
  pipValuePerLot: number = PIP_VALUE_PER_LOT_USD,
): number {
  if (stopPips <= 0 || pipValuePerLot <= 0) return 0;
  return riskAmountUsd(balance, riskPercent) / (stopPips * pipValuePerLot);
}
