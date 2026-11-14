"""Generate synthetic 1-minute candles and a resting-liquidity grid (run once)."""

import csv

from _paths import DATA
from sdkit import from_closes

N = 40
LEVELS = [round(1.0848 + 0.0001 * k, 4) for k in range(19)]   # 1.0848 .. 1.0866
ICE_PX, SPOOF_PX = 1.0852, 1.0856
SPOOF = range(8, 16)          # wall resting on bars 8..15, pulled on bar 16
ICE = range(22, 32)           # iceberg defends 1.0852 on bars 22..31
EXEC = [58, 74, 66, 70, 62, 72, 60, 68, 54, 56]   # contracts sold into the bid per bar (sum 640)
VISIBLE = [42, 48, 40, 46, 44, 41, 47, 43, 45, 40]


def seg(a, b, n):
    return [a + (b - a) * (k + 1) / n for k in range(n)]


closes = (seg(1.0864, 1.0862, 6) + seg(1.0861, 1.0859, 10) + seg(1.0857, 1.0853, 6) + [1.0853, 1.0854, 1.0853, 1.0854, 1.0853,
          1.0854, 1.0853, 1.0854, 1.0853, 1.0854] + seg(1.0856, 1.0861, 8))
closes = [round(c, 4) for c in closes]
assert len(closes) == N, len(closes)
over = {i: dict(l=ICE_PX) for i in ICE}
rows = from_closes(closes, 1.0864, up=(0.00008, 0.00003), down=(0.00003, 0.00008), dp=4, override=over)
base = lambda i, j: 14 + ((i * 7 + j * 13) % 11)          # deterministic quiet book, 14..24
with (DATA / "eurusd_1m_ice.csv").open("w", newline="\n") as f:
    f.write("# Synthetic 1-minute candles for the Iceberg and Spoofing lesson (not real prices)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "open", "high", "low", "close"])
    for k, r in enumerate(rows):
        w.writerow([k, *(f"{x:.4f}" for x in r)])
with (DATA / "liquidity_grid.csv").open("w", newline="\n") as f:
    f.write("# Synthetic resting bid/ask size per price level per minute (not real data)\n")
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["i", "price", "size", "executed"])
    for i in range(N):
        for j, p in enumerate(LEVELS):
            s, ex = base(i, j), 0
            if i in SPOOF and p == SPOOF_PX:
                s = 100
            if i in ICE and p == ICE_PX:
                s, ex = VISIBLE[i - 22], EXEC[i - 22]
            w.writerow([i, f"{p:.4f}", s, ex])
print(sum(EXEC), "contracts executed into the iceberg")
