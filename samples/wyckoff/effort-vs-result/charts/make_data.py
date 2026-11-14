"""Generate data/evr_daily.csv: a rally where volume tracks spread, except one easy bar and one absorbed bar (run once)."""

import math

from _paths import DATA
from volkit import write_ohlcv

CLOSES = [50.6, 51.6, 52.8, 53.8, 55.0, 57.4, 58.4, 59.2, 60.2, 60.8, 61.0, 60.4, 59.4, 58.2, 57.0, 56.2, 55.6, 56.4,
          57.0, 56.4, 55.8, 56.6]
SPECIAL_SPREAD = {5: 3.0, 10: 1.0}
SPECIAL_VOL = {5: 900, 10: 3500}
rows, vols, prev = [], [], 50.0
for i, c in enumerate(CLOSES):
    move = abs(c - prev)
    spread = SPECIAL_SPREAD.get(i, round(move + 0.8, 2))
    slack = spread - move
    lo = min(prev, c) - slack * 0.4
    hi = max(prev, c) + slack * 0.6
    rows.append((prev, round(hi, 2), round(lo, 2), c))
    vols.append(SPECIAL_VOL.get(i, int(round(900 + 450 * spread + 120 * math.sin(1.7 * i), -1))))
    prev = c
write_ohlcv(DATA / "evr_daily.csv", rows, vols, "Synthetic daily candles and volume for the Effort vs Result lesson", dp=2)
print(len(rows), "candles")
