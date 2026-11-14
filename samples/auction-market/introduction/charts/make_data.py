"""Generate data/eurusd_5m_amt.csv: balance, an imbalance (a one-directional drive), a new balance (run once)."""

import math

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


bal1 = [1.0856 + 0.0004 * math.sin(0.75 * k + 0.4) for k in range(20)]
drive = seg(1.0860, 1.0876, 7)
bal2 = [1.0878 + 0.0003 * math.sin(0.8 * k + 1.2) for k in range(21)]
CLOSES = [round(c, 4) for c in bal1 + drive + bal2]
VOL = ([int(1100 + 200 * math.sin(1.3 * k)) for k in range(20)] + [820, 760, 700, 740, 780, 840, 900]
       + [int(1300 + 220 * math.sin(1.1 * k + 2)) for k in range(21)])
rows = from_closes(CLOSES, 1.0855, up=(0.0001, 0.00005), down=(0.00005, 0.0001), dp=4)
write_ohlcv(DATA / "eurusd_5m_amt.csv", rows, VOL, "Synthetic EUR/USD 5m candles and volume for the Auction Market introduction", dp=4)
print(len(rows), "candles")
