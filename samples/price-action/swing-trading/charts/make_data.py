"""Generate data/gbpusd_d1_swing.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2480, 1.2525, 1.2570, 1.2590, 1.2560, 1.2520, 1.2495, 1.2530, 1.2565, 1.2588, 1.2550, 1.2530, 1.2560,
          1.2585, 1.2640, 1.2680, 1.2710, 1.2690, 1.2655, 1.2630, 1.2612, 1.2640, 1.2675, 1.2710, 1.2735, 1.2750]
rows = from_closes(CLOSES, 1.2450, up=(0.0040, 0.0012), down=(0.0012, 0.0040),
                   override={2: dict(h=1.2588), 3: dict(h=1.2600), 4: dict(h=1.2595), 8: dict(h=1.2590),
                             9: dict(h=1.2600), 10: dict(h=1.2598), 12: dict(h=1.2592), 13: dict(h=1.2597),
                             19: dict(l=1.2608), 20: dict(l=1.2598)})
write_rows(DATA / "gbpusd_d1_swing.csv", rows, "Synthetic GBP/USD daily candles for the Price Action Swing Trading lesson")
print(len(rows), "candles")
