"""Generate data/eurusd_1h_trap.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.0900, 1.0915, 1.0927, 1.0918, 1.0900, 1.0885, 1.0878, 1.0890, 1.0905, 1.0920, 1.0928, 1.0912, 1.0896,
          1.0882, 1.0880, 1.0894, 1.0910, 1.0922, 1.0942, 1.0950, 1.0921, 1.0930, 1.0936, 1.0918, 1.0904, 1.0896,
          1.0889, 1.0884]
rows = from_closes(CLOSES, 1.0890, override={19: dict(h=1.0960), 20: dict(h=1.0952)})
write_rows(DATA / "eurusd_1h_trap.csv", rows, "Synthetic EUR/USD 1H candles for the Price Action Fakeouts lesson")
print(len(rows), "candles")
