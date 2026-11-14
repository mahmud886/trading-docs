"""Generate data/dxy_pairs_returns.csv: 120 synthetic daily returns for the dollar index and six pairs (run once)."""

from _paths import DATA
from imkit import gauss, write_series

N = 120
DXY = [0.004 * x for x in gauss(21, N)]
SPEC = {   # pair: (beta to DXY, noise sd, seed)
    "EURUSD": (-0.85, 0.0012, 22), "GBPUSD": (-0.55, 0.0022, 23), "AUDUSD": (-0.40, 0.0035, 24),
    "USDCAD": (0.45, 0.0025, 25), "USDCHF": (0.60, 0.0020, 26), "USDJPY": (0.30, 0.0035, 27),
}
cols = {"dxy": DXY}
for k, (b, sd, seed) in SPEC.items():
    n = gauss(seed, N, sd)
    cols[k] = [b * DXY[i] + n[i] for i in range(N)]
write_series(DATA / "dxy_pairs_returns.csv", cols, "Synthetic daily returns of DXY and six pairs for the DXY lesson", dp=6)
print(N, "days")
