"""Generate data/eurusd_4h_double_top.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0880, 1.0905, 1.0928, 1.0952, 1.0975, 1.0993, 1.0978, 1.0962, 1.0954, 1.0965, 1.0982, 1.0994, 1.0975,
          1.0958, 1.0940, 1.0932, 1.0944, 1.0928, 1.0915, 1.0910, 1.0906]
rows = from_closes(CLOSES, 1.0860, override={5: dict(h=1.1000), 8: dict(l=1.0950), 11: dict(h=1.0998),
                                              16: dict(h=1.0950)})
write_rows(DATA / "eurusd_4h_double_top.csv", rows,
           "Synthetic EUR/USD 4H candles for the Price Action Reversal Concepts lesson")
print(len(rows), "candles")
