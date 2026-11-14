"""Generate data/eurusd_5m_profile.csv: two balance areas joined by a fast move, with volume (run once)."""

import math

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


lower = [1.0855 + 0.0004 * math.sin(0.7 * k + 0.4) for k in range(20)]
move = seg(1.0858, 1.0873, 6)
upper = [1.0875 + 0.0003 * math.sin(0.8 * k + 1.2) for k in range(22)]
CLOSES = [round(c, 4) for c in lower + move + upper]
VOL = ([int(1050 + 180 * math.sin(1.3 * k)) for k in range(20)] + [620, 540, 500, 520, 580, 640]
       + [int(1250 + 200 * math.sin(1.1 * k + 2)) for k in range(22)])
rows = from_closes(CLOSES, 1.0854, up=(0.0001, 0.00005), down=(0.00005, 0.0001), dp=4)
write_ohlcv(DATA / "eurusd_5m_profile.csv", rows, VOL,
            "Synthetic EUR/USD 5m candles and volume for the Volume Profile lesson", dp=4)
print(len(rows), "candles")
