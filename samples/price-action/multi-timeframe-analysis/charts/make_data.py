"""Generate the three EUR/USD timeframes (daily, 4H, 15m) from close paths (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

DAILY = [1.0710, 1.0735, 1.0760, 1.0790, 1.0820, 1.0805, 1.0790, 1.0815, 1.0850, 1.0880, 1.0910, 1.0940, 1.0955,
         1.0935, 1.0915, 1.0900, 1.0890]
H4 = [1.0950, 1.0942, 1.0930, 1.0936, 1.0922, 1.0910, 1.0915, 1.0902, 1.0895, 1.0899, 1.0888, 1.0882, 1.0879]
M15 = [1.0892, 1.0889, 1.0885, 1.0887, 1.0882, 1.0877, 1.0873, 1.0878, 1.0884, 1.0882, 1.0893, 1.0898, 1.0894,
       1.0889, 1.0885, 1.0892, 1.0900, 1.0908, 1.0915, 1.0921, 1.0926]

write_rows(DATA / "eurusd_daily.csv", from_closes(DAILY, 1.0700, up=(0.0015, 0.0005), down=(0.0005, 0.0015),
                                                  override={12: dict(h=1.0960), 16: dict(l=1.0878)}),
           "Synthetic EUR/USD daily candles for the Multi-Timeframe Analysis lesson")
write_rows(DATA / "eurusd_4h.csv", from_closes(H4, 1.0955, up=(0.0006, 0.0002), down=(0.0002, 0.0006),
                                               override={12: dict(l=1.0876)}),
           "Synthetic EUR/USD 4H candles for the Multi-Timeframe Analysis lesson")
write_rows(DATA / "eurusd_15m.csv", from_closes(M15, 1.0896, up=(0.0002, 0.0001), down=(0.0001, 0.0003),
                                                override={3: dict(h=1.0889), 6: dict(l=1.0871), 9: dict(l=1.0879),
                                                          14: dict(l=1.0882)}),
           "Synthetic EUR/USD 15m candles for the Multi-Timeframe Analysis lesson")
print("ok")
