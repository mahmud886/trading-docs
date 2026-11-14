"""Generate data/eurusd_5m_vwap.csv: an opening drive, a pullback to VWAP that holds, and a continuation (run once)."""

import math

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


CLOSES = [round(c, 4) for c in (seg(1.0853, 1.0872, 12) + seg(1.0870, 1.0865, 8)
                                + [1.0866 + 0.00012 * math.sin(1.2 * k) for k in range(8)]
                                + seg(1.0868, 1.0886, 16))]
VOL = ([int(2000 - 70 * k) for k in range(12)] + [900, 800, 700, 650, 600, 600, 650, 700]
       + [650, 600, 640, 700, 760, 820, 880, 940] + [1000 + 40 * k for k in range(16)])
rows = from_closes(CLOSES, 1.0851, up=(0.0001, 0.00004), down=(0.00004, 0.0001), dp=4)
write_ohlcv(DATA / "eurusd_5m_vwap.csv", rows, VOL, "Synthetic EUR/USD 5m candles and volume for the VWAP lesson", dp=4)
print(len(rows), "candles")
