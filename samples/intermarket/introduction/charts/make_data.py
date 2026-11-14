"""Generate data/dxy_eurusd_daily.csv: 140 synthetic days where EUR/USD tracks the dollar index inversely, then stops (run once)."""

from _paths import DATA
from imkit import gauss, prices_from_returns, write_series

N, SPLIT = 140, 90
dxy_r = [0.0030 * x for x in gauss(11, N - 1)]
noise = [0.0011 * x for x in gauss(12, N - 1)]
noise2 = [0.0030 * x for x in gauss(13, N - 1)]
eur_r = [(-0.62 * dxy_r[i] + noise[i]) if i < SPLIT else (-0.05 * dxy_r[i] + noise2[i]) for i in range(N - 1)]
dxy = prices_from_returns(104.0, dxy_r)
eur = prices_from_returns(1.0850, eur_r)
write_series(DATA / "dxy_eurusd_daily.csv", {"dxy": [104.0] + dxy, "eurusd": [1.0850] + eur},
             "Synthetic daily DXY and EUR/USD for the Intermarket introduction", dp=4)
print(N, "days")
