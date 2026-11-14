"""Generate data/eurusd_15m_ib_{a,b,c}.csv: one Initial Balance, three outcomes (run once)."""

from _paths import DATA
from sdkit import from_closes, write_rows

IB = [1.0860, 1.0864, 1.0858, 1.0862]                       # first hour: four 15-minute candles
IB_OVR = {1: dict(h=1.0866), 2: dict(l=1.0856)}
AFTER = {
    "a": ([1.0868, 1.0867, 1.0871, 1.0873, 1.0875, 1.0877, 1.0876, 1.0878], {0: dict(h=1.0870), 1: dict(l=1.0865)}),
    "b": ([1.0868, 1.0864, 1.0861, 1.0857, 1.0854, 1.0851, 1.0852, 1.0850], {0: dict(h=1.0870), 3: dict(l=1.0855)}),
    "c": ([1.0863, 1.0858, 1.0862, 1.0859, 1.0864, 1.0860, 1.0863, 1.0861], {}),
}
for k, (closes, ovr) in AFTER.items():
    o = dict(IB_OVR)
    o.update({i + len(IB): v for i, v in ovr.items()})
    rows = from_closes(IB + closes, 1.0859, override=o, dp=4, up=(0.00004, 0.00002), down=(0.00002, 0.00004))
    write_rows(DATA / f"eurusd_15m_ib_{k}.csv", rows,
               f"Synthetic EUR/USD 15m candles (Initial Balance, outcome {k.upper()}) for the Initial Balance lesson")
print("ok")
