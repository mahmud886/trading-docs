"""Generate data/dist1_daily.csv: Wyckoff distribution with an upthrust after distribution (UTAD), with volume (run once)."""

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv

CLOSES = [20.0, 21.0, 22.1, 23.3, 24.6, 25.8, 27.0, 28.3, 29.6, 30.5,        # 0-9 rally, PSY at 9
          31.4, 31.8, 28.0, 29.2, 30.4, 31.6,                                # 11 BC, 12 AR, 15 ST
          30.2, 29.0, 28.2, 28.8, 30.0, 31.0, 31.8, 30.6, 29.4, 28.6, 29.8, 31.2,   # 16-27 phase B
          32.2,                                                              # 28 UTAD
          31.0, 29.8, 28.6, 28.1,                                            # 29-32
          26.0, 27.0,                                                        # 33 SOW, 34 LPSY
          25.8, 24.6, 23.8, 24.2, 23.2]                                      # markdown
VOL = [1300, 1350, 1400, 1500, 1550, 1600, 1700, 1800, 1900, 2600,
       2200, 3900, 3200, 2000, 1800, 2000,
       1500, 1400, 1300, 1200, 1400, 1500, 1400, 1300, 1250, 1350, 1400, 1500,
       2600,
       2000, 1800, 1700, 1500,
       3400, 900,
       2100, 2200, 2100, 1500, 2000]
rows = from_closes(CLOSES, 19.2, up=(0.4, 0.2), down=(0.2, 0.4), dp=2,
                   override={11: dict(h=33.0, l=30.6), 12: dict(l=27.5), 15: dict(h=32.8),
                             28: dict(h=34.4), 33: dict(l=25.8), 34: dict(h=27.6)})
write_ohlcv(DATA / "dist1_daily.csv", rows, VOL,
            "Synthetic daily candles and volume for the Wyckoff Distribution Schematic lesson", dp=2)
print(len(rows), "candles")
