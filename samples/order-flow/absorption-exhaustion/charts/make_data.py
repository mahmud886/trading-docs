"""Generate data/eurusd_5m_abs.csv: a drop absorbed at support, a rally on fading delta, an exhaustion spike (run once)."""

import csv

from _paths import DATA
from sdkit import from_closes


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


CLOSES = [round(c, 4) for c in (seg(1.0868, 1.0853, 12) + [1.0852, 1.0853, 1.0855] + seg(1.0857, 1.0872, 15) + [1.0871]
                                + seg(1.0868, 1.0855, 13))]
VOL = ([1300 + 40 * k for k in range(12)] + [3100, 3400, 2900] + [2100 - 80 * k for k in range(15)] + [700]
       + [1500 + 50 * k for k in range(13)])
DELTA = ([-200 - 15 * k for k in range(12)] + [-950, -1150, -820]
         + [540, 520, 500, 470, 440, 400, 350, 310, 270, 230, 200, 160, 130, 100, 70] + [20]
         + [-300, -380, -420, -460, -430, -400, -360, -330, -300, -260, -230, -200, -170])
rows = from_closes(CLOSES, 1.0870, up=(0.0001, 0.00004), down=(0.00004, 0.0001), dp=4,
                   override={12: dict(l=1.0850), 13: dict(l=1.0850), 14: dict(l=1.0850), 30: dict(h=1.0876)})
assert len(rows) == len(VOL) == len(DELTA), (len(rows), len(VOL), len(DELTA))
with (DATA / "eurusd_5m_abs.csv").open("w", newline="\n") as f:
    f.write("# Synthetic EUR/USD 5m candles with volume and per-bar delta for the Absorption and Exhaustion lesson (not real prices)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "open", "high", "low", "close", "volume", "delta"])
    for k, (r, v, d) in enumerate(zip(rows, VOL, DELTA)):
        w.writerow([k, *(f"{x:.4f}" for x in r), v, d])
print(len(rows), "candles")
