"""Generate data/cause_{small,large}.csv: a short narrow range and a long wide range, each followed by markup (run once)."""

import math

from _paths import DATA
from sdkit import from_closes, write_rows


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


def wave(c, amp, n, f):
    return [c + amp * math.sin(f * k + 0.6) for k in range(n)]


small = wave(50.5, 1.1, 10, 1.1) + seg(52.6, 55.4, 8)
large = wave(41.0, 2.6, 28, 0.55) + seg(44.8, 56.0, 14)
for name, closes, start in (("small", small, 50.4), ("large", large, 41.5)):
    rows = from_closes([round(c, 2) for c in closes], start, up=(0.3, 0.2), down=(0.2, 0.3), dp=2)
    write_rows(DATA / f"cause_{name}.csv", rows, f"Synthetic daily candles ({name} range then markup) for the Cause and Effect lesson", dp=2)
    print(name, len(rows), "candles")
