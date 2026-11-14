"""Generate data/acc1_daily.csv: Wyckoff accumulation, schematic #1 (with a spring), with volume (run once)."""

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv

CLOSES = [30.0, 29.2, 28.4, 27.5, 28.2, 26.8, 25.5, 24.0, 22.5, 21.6,      # 0-9 decline; PS at 3
          21.2, 25.4, 24.4, 23.0, 21.0,                                     # 10 SC, 11 AR, 14 ST
          22.4, 23.8, 24.9, 25.5, 24.0, 22.6, 21.8, 22.6, 21.5,             # 15-23 phase B
          21.0, 22.4, 21.6,                                                 # 24 spring, 26 test
          23.0, 24.5, 26.9, 26.3, 25.9,                                     # 29 SOS, 31 LPS
          27.4, 28.8, 30.2, 29.6, 30.4, 31.0]                               # markup
VOL = [1300, 1350, 1400, 2300, 1500, 1600, 1800, 2100, 2500, 2800,
       3900, 3300, 2000, 1800, 2000,
       1500, 1400, 1300, 1200, 1400, 1500, 1300, 1200, 1250,
       1700, 1500, 600,
       1800, 2200, 3400, 1500, 900,
       2100, 2200, 2300, 1700, 2200, 2100]
rows = from_closes(CLOSES, 30.8, up=(0.4, 0.2), down=(0.2, 0.4), dp=2,
                   override={10: dict(l=19.6, h=22.0), 11: dict(h=26.0), 14: dict(l=20.0), 18: dict(h=25.9),
                             24: dict(l=18.9), 26: dict(l=20.3), 29: dict(h=27.2), 31: dict(l=24.9)})
write_ohlcv(DATA / "acc1_daily.csv", rows, VOL,
            "Synthetic daily candles and volume for the Wyckoff Accumulation Schematic lesson", dp=2)
print(len(rows), "candles")
