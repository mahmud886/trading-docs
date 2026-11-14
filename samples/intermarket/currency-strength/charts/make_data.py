"""Generate data/fx_pairs.csv: 60 synthetic days of 7 USD-based pairs generated from underlying currency strengths (run once)."""

import math

from _paths import DATA
from imkit import gauss, write_series

N = 60
CUR = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF"]
# true underlying drift per day (in percent) for each currency: USD weak, AUD and EUR strong, JPY weak, CHF mixed
DRIFT = {"USD": -0.06, "EUR": 0.05, "GBP": 0.02, "JPY": -0.07, "AUD": 0.07, "CAD": 0.00, "CHF": -0.01}
noise = {c: gauss(81 + i, N, 0.18) for i, c in enumerate(CUR)}
level = {c: [0.0] for c in CUR}                                      # log-strength index per currency
for i in range(1, N):
    for c in CUR:
        level[c].append(level[c][-1] + (DRIFT[c] + noise[c][i]) / 100)
PAIRS = {"EURUSD": ("EUR", "USD", 1.0850), "GBPUSD": ("GBP", "USD", 1.2700), "AUDUSD": ("AUD", "USD", 0.6600),
         "USDJPY": ("USD", "JPY", 148.0), "USDCAD": ("USD", "CAD", 1.3500), "USDCHF": ("USD", "CHF", 0.8800),
         "EURGBP": ("EUR", "GBP", 0.8550), "EURJPY": ("EUR", "JPY", 160.5), "AUDJPY": ("AUD", "JPY", 97.7)}
cols = {}
for k, (b, q, s) in PAIRS.items():
    cols[k] = [s * math.exp(level[b][i] - level[q][i]) for i in range(N)]
write_series(DATA / "fx_pairs.csv", cols, "Synthetic daily prices of nine pairs built from underlying currency strengths (Currency Strength lesson)", dp=5)
print(N, "days")
