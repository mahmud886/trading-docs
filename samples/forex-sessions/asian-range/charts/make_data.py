"""Generate data/eurusd_1h_asian_{a,b,c}.csv: one Asian session, three London outcomes (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

ASIA = [1.0860, 1.0866, 1.0862, 1.0868, 1.0858, 1.0856, 1.0861]          # 6:00 AM – 12:00 PM BD candles
ASIA_OVR = {3: dict(h=1.0872), 5: dict(l=1.0852)}
LONDON = {
    "a": ([1.0849, 1.0862, 1.0874, 1.0883, 1.0889], {0: dict(l=1.0844)}),             # sweep low, reverse up
    "b": ([1.0878, 1.0874, 1.0885, 1.0893, 1.0897], {0: dict(h=1.0880), 1: dict(l=1.0870)}),  # break, hold
    "c": ([1.0866, 1.0857, 1.0864, 1.0859, 1.0863], {0: dict(h=1.0870), 4: dict(l=1.0854)}),  # range holds
}
for k, (closes, ovr) in LONDON.items():
    o = dict(ASIA_OVR)
    o.update({i + len(ASIA): v for i, v in ovr.items()})
    rows = from_closes(ASIA + closes, 1.0858, override=o)
    write_rows(DATA / f"eurusd_1h_asian_{k}.csv", rows,
               f"Synthetic EUR/USD 1H candles (Asian range, London outcome {k.upper()}) for the Asian Range lesson")
print("ok")
