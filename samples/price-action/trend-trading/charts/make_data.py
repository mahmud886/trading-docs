"""Generate data/eurusd_4h_trend_trade.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0990, 1.0978, 1.0965, 1.0953, 1.0960, 1.0968, 1.0972, 1.0962, 1.0948, 1.0935, 1.0923, 1.0930, 1.0938,
          1.0942, 1.0932, 1.0918, 1.0904, 1.0893, 1.0899, 1.0906, 1.0909, 1.0898, 1.0884, 1.0870, 1.0866, 1.0878,
          1.0892, 1.0905, 1.0915]
rows = from_closes(CLOSES, 1.0998, override={0: dict(h=1.1000), 3: dict(l=1.0950), 6: dict(h=1.0975),
                                              10: dict(l=1.0920), 13: dict(h=1.0945), 17: dict(l=1.0890),
                                              20: dict(h=1.0912), 24: dict(l=1.0863), 28: dict(h=1.0919)})
write_rows(DATA / "eurusd_4h_trend_trade.csv", rows,
           "Synthetic EUR/USD 4H candles for the Price Action Trend Trading lesson")
print(len(rows), "candles")
