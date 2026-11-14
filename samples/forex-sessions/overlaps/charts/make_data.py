"""Generate data/eurusd_1h_day.csv: one synthetic day of EUR/USD hourly candles from 6:00 AM BD (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0851, 1.0853, 1.0850, 1.0852, 1.0849, 1.0851, 1.0853,          # Asia 6 AM – 12 PM
          1.0862, 1.0870, 1.0876, 1.0874, 1.0884,                          # London 1 PM – 5 PM
          1.0876, 1.0889, 1.0898, 1.0903,                                  # overlap 6 PM – 9 PM
          1.0899, 1.0901, 1.0898, 1.0900, 1.0902, 1.0899, 1.0901, 1.0900]  # 10 PM – 5 AM
rows = from_closes(CLOSES, 1.0850, up=(0.0003, 0.0002), down=(0.0002, 0.0003),
                   override={7: dict(l=1.0848), 11: dict(h=1.0888), 12: dict(h=1.0886, l=1.0868),
                             13: dict(h=1.0892), 15: dict(h=1.0906)})
write_rows(DATA / "eurusd_1h_day.csv", rows, "Synthetic EUR/USD 1H candles (one day) for the Session Overlaps lesson")
print(len(rows), "candles")
