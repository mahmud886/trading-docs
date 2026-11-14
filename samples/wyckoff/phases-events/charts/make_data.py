"""Generate data/acc2_daily.csv: Wyckoff accumulation, schematic #2 (no spring: a higher-low test), with volume (run once)."""

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv

CLOSES = [50.0, 49.0, 48.0, 47.0, 45.8, 44.6, 43.2, 41.8, 40.8,                 # 0-8 decline
          40.6, 45.2, 44.0, 42.8, 41.8,                                        # 9 SC, 10 AR, 13 ST
          43.2, 44.4, 45.0, 43.8, 42.9, 43.8, 44.8, 45.2, 44.0, 43.0,          # 14-23 phase B
          42.8,                                                                # 24 higher-low test
          43.8, 44.6, 46.9, 46.2, 45.8,                                        # 27 SOS, 29 LPS
          47.2, 48.4, 49.6, 49.0, 50.0, 50.8]                                  # markup
VOL = [1300, 1350, 1400, 1500, 1600, 1700, 1900, 2200, 2400,
       3700, 3000, 2000, 1800, 1900,
       1500, 1400, 1300, 1200, 1400, 1500, 1300, 1200, 1250, 1300,
       600,
       1500, 1700, 3300, 1600, 900,
       2000, 2100, 2200, 1700, 2100, 2000]
rows = from_closes(CLOSES, 50.8, up=(0.4, 0.2), down=(0.2, 0.4), dp=2,
                   override={9: dict(l=39.4, h=41.8), 10: dict(h=45.8), 13: dict(l=40.0), 21: dict(h=45.7),
                             24: dict(l=41.9), 27: dict(h=47.2), 29: dict(l=44.6)})
write_ohlcv(DATA / "acc2_daily.csv", rows, VOL,
            "Synthetic daily candles and volume for the Wyckoff Phases and Events lesson", dp=2)
print(len(rows), "candles")
