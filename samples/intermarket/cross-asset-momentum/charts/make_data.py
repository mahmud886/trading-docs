"""Generate data/momentum_assets.csv: 300 synthetic days for four assets with different trend persistence (run once)."""

import math

from _paths import DATA
from imkit import gauss, prices_from_returns, write_series

N = 300
SPEC = {"equity": (0.0009, 0.0095, 73, 0.9), "bond": (-0.0003, 0.0055, 67, 0.0), "gold": (0.0005, 0.0085, 81, 0.7), "fx": (0.0, 0.0050, 82, 0.0)}
cols = {}
for k, (mu, sd, seed, trend) in SPEC.items():
    n = gauss(seed, N - 1, sd)
    # a slow regime wave gives persistent drift to the 'trending' assets
    r = [mu + trend * 0.0030 * math.sin(2 * math.pi * i / 150 + seed) + n[i] for i in range(N - 1)]
    cols[k] = [100.0] + prices_from_returns(100.0, r)
write_series(DATA / "momentum_assets.csv", cols, "Synthetic daily index levels (start 100) for four assets for the Cross-Asset Momentum lesson", dp=3)
print(N, "days")
