"""Generate data/eurusd_1h_volume.csv: candles from a close path plus a tick-volume column (run once)."""

import csv

from _paths import DATA
from sdkit import from_closes

CLOSES = [1.0915, 1.0928, 1.0936, 1.0922, 1.0908, 1.0903, 1.0914, 1.0926, 1.0934, 1.0930,
          1.0944,                                   # first break: low volume
          1.0932, 1.0921, 1.0912, 1.0906, 1.0915, 1.0927, 1.0935,
          1.0952, 1.0960,                           # second break: high volume
          1.0947,                                   # quiet retest
          1.0958, 1.0966, 1.0972]
VOLUME = [1250, 1400, 1300, 1350, 1500, 1200, 1150, 1300, 1250, 1100,
          900,
          1600, 1500, 1350, 1250, 1300, 1450, 1550,
          3200, 2600,
          1050,
          1900, 1750, 1600]
rows = from_closes(CLOSES, 1.0905, override={2: dict(h=1.0940), 5: dict(l=1.0900), 8: dict(h=1.0939),
                                              14: dict(l=1.0901), 20: dict(l=1.0941)})
with (DATA / "eurusd_1h_volume.csv").open("w", newline="\n") as f:
    f.write("# Synthetic EUR/USD 1H candles with tick volume for the Price Action Volume lesson (not real prices)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "open", "high", "low", "close", "volume"])
    for k, (r, v) in enumerate(zip(rows, VOLUME)):
        w.writerow([k, *(f"{x:.4f}" for x in r), v])
print(len(rows), "candles")
