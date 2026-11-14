"""Generate data/eurusd_5m_delta.csv: two legs up (the second on fading delta), then a drop; with per-bar delta (run once)."""

import csv

from _paths import DATA
from sdkit import from_closes


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


CLOSES = [round(c, 4) for c in (seg(1.0850, 1.0872, 12) + seg(1.0870, 1.0860, 8) + seg(1.0862, 1.0877, 10)
                                + seg(1.0874, 1.0858, 10))]
DELTA = ([260, 380, 420, 460, 430, 390, 350, 330, 300, 270, 250, 240]
         + [-180, -220, -150, -200, -120, -160, -90, -110]
         + [90, 140, 120, 80, 100, 60, 70, 40, 30, 20]
         + [-200, -280, -320, -340, -300, -260, -240, -200, -160, -140])
rows = from_closes(CLOSES, 1.0848, up=(0.0001, 0.00004), down=(0.00004, 0.0001), dp=4, override={29: dict(h=1.0879)})
with (DATA / "eurusd_5m_delta.csv").open("w", newline="\n") as f:
    f.write("# Synthetic EUR/USD 5m candles with per-bar delta for the Delta Analysis lesson (not real prices)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "open", "high", "low", "close", "delta"])
    for k, (r, d) in enumerate(zip(rows, DELTA)):
        w.writerow([k, *(f"{x:.4f}" for x in r), d])
print(len(rows), "candles")
