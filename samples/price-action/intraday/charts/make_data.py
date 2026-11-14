"""Generate data/eurusd_15m_intraday.csv (12:00 PM – 6:45 PM BD, US summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0852, 1.0849, 1.0853, 1.0851,                          # London open, quiet
          1.0864, 1.0880, 1.0892, 1.0898,                          # London impulse (leaves an FVG)
          1.0903, 1.0897, 1.0901, 1.0903, 1.0899, 1.0895,          # London high area
          1.0892, 1.0889, 1.0891, 1.0886, 1.0884, 1.0886,          # midday drift
          1.0880, 1.0876, 1.0873, 1.0879, 1.0886, 1.0893, 1.0899, 1.0903]  # NY: retrace into the FVG, then up
rows = from_closes(CLOSES, 1.0850, override={11: dict(h=1.0906), 22: dict(l=1.0870)})
write_rows(DATA / "eurusd_15m_intraday.csv", rows, "Synthetic EUR/USD 15m candles for the Price Action Intraday lesson")
print(len(rows), "candles")
