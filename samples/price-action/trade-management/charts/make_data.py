"""Generate data/eurusd_1h_management.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0850, 1.0852, 1.0858, 1.0866, 1.0872, 1.0880, 1.0884, 1.0878, 1.0870, 1.0861, 1.0855, 1.0853, 1.0858,
          1.0868, 1.0879, 1.0890, 1.0898, 1.0905, 1.0908]
rows = from_closes(CLOSES, 1.0846, override={6: dict(h=1.0886), 11: dict(l=1.0849), 18: dict(h=1.0911)})
write_rows(DATA / "eurusd_1h_management.csv", rows,
           "Synthetic EUR/USD 1H candles for the Price Action Trade Management lesson")
print(len(rows), "candles")
