"""Generate data/gbpusd_4h_trend.csv from swing pivots (run once; the CSV is the source of truth)."""

import csv

from _paths import DATA
from smckit import from_pivots

PIVOTS = [(0, 1.2500), (6, 1.2580), (9, 1.2550), (15, 1.2650), (18, 1.2610), (24, 1.2720), (29, 1.2632),
          (34, 1.2705), (39, 1.2600)]

candles = from_pivots(PIVOTS, seed=11, wick=0.0008, noise=0.0005)
with (DATA / "gbpusd_4h_trend.csv").open("w", newline="\n") as f:
    f.write("# Synthetic GBP/USD 4H candles for the Price Action Trend Analysis lesson (not real prices)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "open", "high", "low", "close"])
    for k, c in enumerate(candles):
        w.writerow([k, f"{c.o:.4f}", f"{c.h:.4f}", f"{c.l:.4f}", f"{c.c:.4f}"])
print(len(candles), "candles")
