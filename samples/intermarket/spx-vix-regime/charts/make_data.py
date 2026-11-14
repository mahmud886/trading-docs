"""Generate data/spx_vix.csv: 260 synthetic days of an index and a VIX-like volatility index (run once)."""

import math

from _paths import DATA
from imkit import gauss, write_series

N = 260
# volatility regime: calm (<80), stress (80-130), calm-ish again (>130); equity vol follows it, VIX leads/spikes with it
REG = [0.0045 if i < 80 else (0.0140 if i < 130 else (0.0085 if i < 190 else 0.0050)) for i in range(N)]
z = gauss(71, N)
spx, vix, p, v = [], [], 4500.0, 14.5
mu = [0.0006 if i < 80 else (-0.0030 if i < 130 else (0.0004 if i < 190 else 0.0007)) for i in range(N)]
for i in range(N):
    r = mu[i] + REG[i] * z[i]
    p *= 1 + r
    target = 100 * REG[i] * math.sqrt(252) * 1.15 + 4.0                  # annualised-looking level, with a risk premium
    v += 0.25 * (target - v) - 1.5 * r * 100 * 0.4                       # falls when stocks rally, jumps when they drop
    spx.append(p); vix.append(max(v, 9.0))
write_series(DATA / "spx_vix.csv", {"spx": spx, "vix": vix}, "Synthetic daily index level and VIX-like volatility index for the SPX-VIX lesson", dp=3)
print(N, "days", round(min(vix), 1), round(max(vix), 1))
