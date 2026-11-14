"""Generate data/gbpusd_1h_range.csv from a close path (run once; the CSV is the source of truth)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2738, 1.2748, 1.2755, 1.2740, 1.2725, 1.2712, 1.2705, 1.2718, 1.2732, 1.2745, 1.2754, 1.2742, 1.2728,
          1.2714, 1.2706, 1.2716, 1.2724, 1.2713, 1.2704, 1.2709, 1.2714, 1.2720]
rows = from_closes(CLOSES, 1.2730, override={2: dict(h=1.2760), 6: dict(l=1.2700), 10: dict(h=1.2759),
                                              14: dict(l=1.2701), 19: dict(l=1.2697), 20: dict(l=1.2708)})
write_rows(DATA / "gbpusd_1h_range.csv", rows, "Synthetic GBP/USD 1H candles for the Price Action Range Trading lesson")
print(len(rows), "candles")
