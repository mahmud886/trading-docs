"""Generate data/vsa_daily.csv: a decline, stopping volume, a test, a rally, a no-demand bar and a no-supply bar (run once)."""

from _paths import DATA
from sdkit import from_closes
from volkit import write_ohlcv

CLOSES = [105.0, 103.8, 102.4, 101.0, 99.4, 97.8, 96.0, 95.0, 96.0, 95.6,       # 7 stopping volume, 9 test
          97.4, 99.0, 100.6, 102.0, 103.4, 103.7,                              # 15 no demand
          102.8, 101.6, 101.3,                                                 # 18 no supply
          102.8, 104.2, 105.6, 106.8]
VOL = [1500, 1450, 1500, 1600, 1700, 1800, 2200, 3600, 2100, 700,
       1500, 1700, 1800, 1900, 2000, 700,
       1700, 2000, 600,
       1800, 2100, 2200, 2300]
rows = from_closes(CLOSES, 106.2, up=(0.4, 0.2), down=(0.2, 0.4), dp=2,
                   override={7: dict(l=92.0, h=96.4), 9: dict(h=96.1, l=95.3), 15: dict(h=104.0, l=103.3),
                             18: dict(h=101.8, l=101.0)})
write_ohlcv(DATA / "vsa_daily.csv", rows, VOL, "Synthetic daily candles and volume for the Volume Spread Analysis lesson", dp=2)
print(len(rows), "candles")
