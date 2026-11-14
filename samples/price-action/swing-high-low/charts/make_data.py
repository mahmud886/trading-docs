"""Generate data/eurusd_1h_swings.csv from a close path (open = previous close, 1–3 pip wicks), plus a swing failure."""

import csv

from _paths import DATA

CLOSES = [1.0892, 1.0900, 1.0908, 1.0903, 1.0910, 1.0914, 1.0907, 1.0901, 1.0905, 1.0899, 1.0909, 1.0918, 1.0926,
          1.0921, 1.0929, 1.0938, 1.0946, 1.0939, 1.0932, 1.0936, 1.0927, 1.0918, 1.0911, 1.0916, 1.0924, 1.0920,
          1.0927, 1.0933, 1.0937, 1.0941, 1.0945]
WICK = {16: 0.0004}
TAIL = [(1.0945, 1.0958, 1.0938, 1.0942), (1.0942, 1.0945, 1.0928, 1.0931), (1.0931, 1.0934, 1.0915, 1.0918)]

rows, prev = [], 1.0888
for i, c in enumerate(CLOSES):
    up = c > prev  # wicks are longer on the side the candle closed toward
    wh = WICK.get(i, 0.0003 if up else 0.0001)
    wl = 0.0001 if up else 0.0003
    rows.append((prev, max(prev, c) + wh, min(prev, c) - wl, c))
    prev = c
rows += TAIL
with (DATA / "eurusd_1h_swings.csv").open("w", newline="\n") as f:
    f.write("# Synthetic EUR/USD 1H candles for the Price Action Swing Highs & Lows lesson (not real prices)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "open", "high", "low", "close"])
    for k, (o, h, l, c) in enumerate(rows):
        w.writerow([k, f"{o:.4f}", f"{h:.4f}", f"{l:.4f}", f"{c:.4f}"])
print(len(rows), "candles")
