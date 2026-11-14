"""Generate data/gbpusd_15m_nyrev.csv (1:00 – 10:45 PM BD, US/UK summer) from a close path (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

CLOSES = [1.2706, 1.2712, 1.2718, 1.2725, 1.2721, 1.2716, 1.2714, 1.2722, 1.2731, 1.2738, 1.2735, 1.2744, 1.2750,
          1.2747, 1.2755, 1.2760, 1.2757, 1.2763, 1.2766, 1.2762, 1.2760, 1.2764,      # London rally to 6:15 PM
          1.2762,                                                                      # 6:30 PM data: sweep
          1.2755, 1.2750, 1.2756,                                                      # CHOCH, retest
          1.2748, 1.2741, 1.2744, 1.2736, 1.2730, 1.2733, 1.2727, 1.2724, 1.2728, 1.2722, 1.2726, 1.2721, 1.2724,
          1.2720]
rows = from_closes(CLOSES, 1.2700, up=(0.0002, 0.0001), down=(0.0001, 0.0002),
                   override={0: dict(l=1.2699), 6: dict(l=1.2712), 18: dict(h=1.2768), 19: dict(l=1.2758),
                             22: dict(h=1.2779), 23: dict(l=1.2754), 25: dict(h=1.2759), 39: dict(l=1.2718)})
write_rows(DATA / "gbpusd_15m_nyrev.csv", rows, "Synthetic GBP/USD 15m candles for the New York Reversal lesson")
print(len(rows), "candles")
