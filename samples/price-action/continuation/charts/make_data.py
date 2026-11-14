"""Generate data/gbpusd_1h_flag.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2605, 1.2618, 1.2632, 1.2645, 1.2658, 1.2670, 1.2677,  # flagpole
          1.2672, 1.2666, 1.2669, 1.2661, 1.2656, 1.2659, 1.2653,  # flag
          1.2674, 1.2686, 1.2695, 1.2690, 1.2703, 1.2712, 1.2708]  # breakout and follow-through
rows = from_closes(CLOSES, 1.2600, override={0: dict(l=1.2600), 6: dict(h=1.2680), 13: dict(l=1.2650)})
write_rows(DATA / "gbpusd_1h_flag.csv", rows, "Synthetic GBP/USD 1H candles for the Price Action Continuation lesson")
print(len(rows), "candles")
