"""Generate data/gbpusd_1h_momentum.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2622, 1.2645, 1.2668, 1.2690,          # impulse 1 (large bodies)
          1.2680, 1.2672, 1.2676, 1.2668,          # correction
          1.2683, 1.2698, 1.2712,                  # impulse 2 (smaller)
          1.2704, 1.2697, 1.2701,                  # correction
          1.2709, 1.2716, 1.2722,                  # impulse 3 (smallest)
          1.2700, 1.2678, 1.2660,                  # bearish impulse: the shift
          1.2668, 1.2675,                          # weak pullback
          1.2662, 1.2650, 1.2641, 1.2636]
rows = from_closes(CLOSES, 1.2600)
write_rows(DATA / "gbpusd_1h_momentum.csv", rows, "Synthetic GBP/USD 1H candles for the Price Action Momentum lesson")
print(len(rows), "candles")
