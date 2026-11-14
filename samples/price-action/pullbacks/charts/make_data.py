"""Generate data/eurusd_4h_pullback.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0835, 1.0846, 1.0828, 1.0812, 1.0803, 1.0822, 1.0845, 1.0862, 1.0880, 1.0898, 1.0912, 1.0917, 1.0905,
          1.0889, 1.0874, 1.0861, 1.0851, 1.0864, 1.0878, 1.0893, 1.0905, 1.0911, 1.0915]
rows = from_closes(CLOSES, 1.0830, override={1: dict(h=1.0850), 4: dict(l=1.0800), 11: dict(h=1.0920),
                                              16: dict(l=1.0846)})
write_rows(DATA / "eurusd_4h_pullback.csv", rows, "Synthetic EUR/USD 4H candles for the Price Action Pullbacks lesson")
print(len(rows), "candles")
