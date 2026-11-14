"""Generate data/cycle_daily.csv: one idealised Wyckoff market cycle with a volume column (run once)."""

import math

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


def wave(c, amp, n, f, ph=0.0):
    return [c + amp * math.sin(ph + f * k) for k in range(n)]


CLOSES = (seg(52, 40, 10)                       # 0-9    markdown
          + wave(39, 2.4, 22, 0.85)             # 10-31  accumulation
          + seg(41, 56, 14)                     # 32-45  markup
          + wave(57, 2.0, 22, 0.80, 1.0)        # 46-67  distribution
          + seg(56, 44, 12))                    # 68-79  markdown
VOL = ([900 + 60 * k for k in range(10)]                                          # markdown: rising
       + [1900 + 350 * math.sin(0.85 * k) for k in range(22)]                     # accumulation: heavy
       + [1100 + 40 * k for k in range(14)]                                       # markup: moderate
       + [2000 + 380 * math.sin(0.8 * k + 1) for k in range(22)]                  # distribution: heavy
       + [1500 - 30 * k for k in range(12)])                                      # markdown
VOL = [int(round(v, -1)) for v in VOL]
VOL[10] = 3600     # selling climax
VOL[46] = 3300     # buying climax
rows = from_closes([round(c, 2) for c in CLOSES], 52.5, up=(0.4, 0.2), down=(0.2, 0.4), dp=2)
write_ohlcv(DATA / "cycle_daily.csv", rows, VOL, "Synthetic daily candles and volume for the Wyckoff Introduction lesson", dp=2)
print(len(rows), "candles")
