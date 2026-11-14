"""Generate data/yields_daily.csv: 200 synthetic days of 2-year, 10-year and 10-year breakeven yields (percent; run once)."""

import math

from _paths import DATA
from imkit import gauss, write_series

N = 200
n2, n10, nb = gauss(31, N, 0.035), gauss(32, N, 0.028), gauss(33, N, 0.012)
y2, y10, be = [], [], []
a, b, c = 3.60, 4.60, 2.60
for i in range(N):
    drift2 = 0.0130 if i < 130 else -0.0170            # front end rises (hikes expected), then falls (cuts expected)
    drift10 = 0.0030 if i < 130 else -0.0035
    a += drift2 + n2[i] - 0.005 * (a - 3.6) / 3
    b += drift10 + n10[i]
    c += nb[i] + (-0.0050 if i < 130 else 0.0)
    y2.append(a); y10.append(b); be.append(c)
write_series(DATA / "yields_daily.csv", {"y2": y2, "y10": y10, "be10": be},
             "Synthetic daily 2-year, 10-year and 10-year breakeven yields (percent) for the Yield Curve lesson", dp=3)
print(N, "days", round(y2[0], 2), round(y2[129], 2), round(y2[-1], 2), round(y10[129], 2), round(y10[-1], 2))
