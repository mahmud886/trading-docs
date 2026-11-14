"""Generate data/eurusd_1h_day2.csv: the day after a single-print zone forms - price returns into it (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0872, 1.0870, 1.0868, 1.0865, 1.0863, 1.0862, 1.0863, 1.0865, 1.0867, 1.0870, 1.0872, 1.0874]
rows = from_closes(CLOSES, 1.0874, dp=4, up=(0.00004, 0.00002), down=(0.00002, 0.00004), override={5: dict(l=1.0861)})
write_rows(DATA / "eurusd_1h_day2.csv", rows, "Synthetic EUR/USD 1H candles for the Single Prints lesson (the day after)")
print(len(rows), "candles")
