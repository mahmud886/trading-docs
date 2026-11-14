"""Generate data/eurusd_4h_cycle.csv from swing pivots (run once; the CSV is the source of truth)."""

import csv

from _paths import DATA
from smckit import from_pivots

PIVOTS = [(0, 1.0800), (5, 1.0850), (8, 1.0825), (13, 1.0880), (16, 1.0858), (21, 1.0910),
          (24, 1.0884), (28, 1.0908), (31, 1.0886), (35, 1.0906),
          (39, 1.0862), (42, 1.0878), (46, 1.0838), (49, 1.0856), (54, 1.0812)]

candles = from_pivots(PIVOTS, seed=7, wick=0.0006, noise=0.0004)
with (DATA / "eurusd_4h_cycle.csv").open("w", newline="") as f:
    f.write("# Synthetic EUR/USD 4H candles for the Price Action Market Structure lesson (not real prices)\n")
    w = csv.writer(f)
    w.writerow(["i", "open", "high", "low", "close"])
    for k, c in enumerate(candles):
        w.writerow([k, f"{c.o:.4f}", f"{c.h:.4f}", f"{c.l:.4f}", f"{c.c:.4f}"])
print(len(candles), "candles")
