"""Generate data/gbpusd_d1_bias.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2480, 1.2450, 1.2425, 1.2465, 1.2510, 1.2550, 1.2530, 1.2575, 1.2620, 1.2600, 1.2655, 1.2695, 1.2670,
          1.2640, 1.2610, 1.2598, 1.2615,                      # idx 16 = yesterday: closes up in discount
          1.2640, 1.2668, 1.2690, 1.2698]                      # today and the days after (illustrative)
rows = from_closes(CLOSES, 1.2500, override={2: dict(l=1.2415), 6: dict(l=1.2495), 9: dict(l=1.2570),
                                             11: dict(h=1.2712), 15: dict(l=1.2580),
                                             20: dict(h=1.2705)})
write_rows(DATA / "gbpusd_d1_bias.csv", rows, "Synthetic GBP/USD daily candles for the Daily Session Bias lesson")
print(len(rows), "candles")
