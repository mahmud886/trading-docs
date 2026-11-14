"""Generate data/eurusd_1h_compression.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0932, 1.0944, 1.0945, 1.0925, 1.0908, 1.0903, 1.0918, 1.0935, 1.0946, 1.0930, 1.0918, 1.0930, 1.0945,
          1.0934, 1.0930, 1.0941, 1.0947, 1.0940, 1.0962, 1.0970, 1.0960, 1.0954, 1.0966, 1.0975, 1.0983, 1.0988]
rows = from_closes(CLOSES, 1.0920, override={2: dict(h=1.0950), 5: dict(l=1.0900), 8: dict(h=1.0949),
                                              10: dict(l=1.0915), 12: dict(h=1.0950), 14: dict(l=1.0928),
                                              16: dict(h=1.0949), 17: dict(l=1.0938), 21: dict(l=1.0951)})
write_rows(DATA / "eurusd_1h_compression.csv", rows,
           "Synthetic EUR/USD 1H candles for the Price Action Compression lesson")
print(len(rows), "candles")
