"""Generate data/gold_dxy_ry.csv: 160 synthetic days of gold, the dollar index and the 10-year real yield (run once)."""

from _paths import DATA
from imkit import gauss, write_series

N, SPLIT = 160, 100
dr = gauss(41, N - 1, 0.04)                                   # daily change of the real yield, percentage points
dxy_r = [0.04 * dr[i] + x for i, x in enumerate(gauss(42, N - 1, 0.003))]
noise = gauss(43, N - 1, 0.0045)
gold_r = [(-0.8 * dxy_r[i] - 0.09 * dr[i] + noise[i]) if i < SPLIT else (0.1 * dxy_r[i] + 0.0 * dr[i] + 0.0030 + 1.7 * noise[i])
          for i in range(N - 1)]
gold, dxy, ry = [1900.0], [104.0], [1.50]
for i in range(N - 1):
    gold.append(gold[-1] * (1 + gold_r[i])); dxy.append(dxy[-1] * (1 + dxy_r[i])); ry.append(ry[-1] + dr[i])
write_series(DATA / "gold_dxy_ry.csv", {"gold": gold, "dxy": dxy, "ry": ry},
             "Synthetic daily gold, DXY and 10-year real yield (percent) for the Gold-Dollar-Bonds lesson", dp=3)
print(N, "days gold", round(gold[0]), round(gold[SPLIT - 1]), round(gold[-1]), "ry", round(ry[0], 2), round(ry[SPLIT - 1], 2), round(ry[-1], 2))
