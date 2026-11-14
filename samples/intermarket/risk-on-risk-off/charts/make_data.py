"""Generate data/risk_assets.csv: 140 synthetic days with a risk-off episode on days 70-99 (run once)."""

from _paths import DATA
from imkit import gauss, prices_from_returns, write_series

N, A, B = 140, 70, 100
f = [(-0.0065 if A <= i < B else 0.0007) + (0.0045 if A <= i < B else 0.0025) * x for i, x in enumerate(gauss(51, N - 1))]
f = [0.0] + f
SENS = {"spx": (1.0, 0.0030, 52), "audusd": (0.35, 0.0025, 53), "usdjpy": (0.30, 0.0022, 54), "usdchf": (0.12, 0.0022, 55)}
cols, start = {}, {"spx": 4500.0, "audusd": 0.6700, "usdjpy": 148.0, "usdchf": 0.8800}
for k, (b, sd, seed) in SENS.items():
    n = gauss(seed, N, sd)
    cols[k] = prices_from_returns(start[k], [b * f[i] + n[i] for i in range(1, N)])
    cols[k] = [start[k]] + cols[k]
v, sm, vix = 14.0, 0.0007, []
for i in range(N):
    sm = 0.8 * sm + 0.2 * f[i]
    v += 0.35 * ((15 - 2300 * sm) - v)
    vix.append(max(v, 9.0))
cols["vix"] = vix
write_series(DATA / "risk_assets.csv", cols, "Synthetic daily SPX, AUD/USD, USD/JPY, USD/CHF and VIX-like index for the Risk-On/Risk-Off lesson", dp=4)
print(N, "days")
