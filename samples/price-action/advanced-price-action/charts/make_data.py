"""Generate data/gbpusd_1h_narrative.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2640, 1.2618, 1.2606, 1.2624, 1.2645, 1.2662, 1.2655, 1.2678, 1.2696, 1.2710, 1.2712,   # range up
          1.2700, 1.2694, 1.2706, 1.2710,                                                          # equal highs
          1.2690, 1.2668, 1.2648, 1.2632, 1.2645, 1.2640, 1.2632, 1.2638,                          # into discount
          1.2641,                                                                                  # sweep
          1.2662, 1.2688, 1.2680, 1.2660, 1.2672, 1.2690, 1.2700, 1.2708]                          # displacement
rows = from_closes(CLOSES, 1.2646, override={2: dict(l=1.2600), 10: dict(h=1.2720), 14: dict(h=1.2720),
                                             18: dict(l=1.2625), 21: dict(l=1.2625), 23: dict(l=1.2616, h=1.2643),
                                             25: dict(l=1.2660), 26: dict(l=1.2672), 27: dict(l=1.2650)})
write_rows(DATA / "gbpusd_1h_narrative.csv", rows,
           "Synthetic GBP/USD 1H candles for the Advanced Price Action lesson")
print(len(rows), "candles")
