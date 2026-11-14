"""Generate data/usdjpy_1h_breakout.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [150.10, 150.30, 150.42, 150.25, 150.00, 149.78, 149.60, 149.70, 149.92, 150.15, 150.38, 150.44, 150.20,
          149.95, 149.72, 149.58, 149.80, 150.05, 150.30, 150.44, 150.72, 150.86, 150.78, 150.64, 150.58, 150.70,
          150.85, 150.98, 151.05, 151.18, 151.12]
rows = from_closes(CLOSES, 150.00, up=(0.06, 0.02), down=(0.02, 0.06), dp=2,
                   override={15: dict(l=149.50), 20: dict(h=150.76), 24: dict(l=150.48)})
write_rows(DATA / "usdjpy_1h_breakout.csv", rows, "Synthetic USD/JPY 1H candles for the Price Action Breakouts lesson",
           dp=2)
print(len(rows), "candles")
