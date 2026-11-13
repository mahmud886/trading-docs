"""
Re-accumulation — an uptrend pauses in a range, sweeps the range low, and continues (EUR/USD 4H, synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "reaccumulation"
PIP = 0.0001


def load():
    with (DATA / "eurusd_4h_reacc.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"4H bar {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
RANGE, I0, I_SWEEP, I_FILL, I_BOS = (1.0880, 1.0910), 5, 15, 17, 18
ENTRY, STOP, TARGET = 1.0890, 1.0868, 1.0990


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[3].c > C[2].h and C[I0].h == RANGE[1], "uptrend with a BOS into the range"
    inside = C[I0:I_SWEEP]
    assert min(c.l for c in inside) == RANGE[0] and max(c.h for c in inside) == RANGE[1]
    s = C[I_SWEEP]
    assert s.l < RANGE[0] < s.c, "sweep of the range low, closed back inside"
    assert C[I_FILL].l <= ENTRY and C[I_BOS].c > RANGE[1], "retest fill, then BOS above the range"
    assert STOP < s.l and max(c.h for c in C) < TARGET


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("trend"):
        ch.label(1.5, 1.0860, "<b>markup</b>: BOS up", size=12, color=t.bull_text, xanchor="center")
    with ch.group("range"):
        ch.zone(I0 - 0.4, I_BOS - 0.4, *RANGE, color=t.ink3, alpha=0.10, dash="dot")
        ch.label(I0 - 0.3, RANGE[1] + 0.0004, "<b>re-accumulation range</b> 1.0880 – 1.0910", size=11,
                 yanchor="bottom")
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].l, 11.0, 1.0858, "<b>Sweep</b> of the range low to 1.0872,<br>closed back "
                   "inside", xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, N + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("bos"):
        ch.callout(I_BOS, C[I_BOS].c, 14.5, 1.0945, "<b>BOS</b> above the range: the trend resumes",
                   xanchor="center")
    ch.header("SMC · Re-accumulation", "Re-accumulation — a Pause in the Uptrend, a Sweep, Then Continuation",
              "EUR/USD · 4-hour candles · a range mid-trend, a sweep of its low, a BOS above it",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles for the Re-accumulation lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 2], y_range=[1.0795, 1.1005], y_dtick=0.0020, y_fmt=".4f", x_title="4H bars",
            x_ticks=(list(range(0, N, 4)), [str(i + 1) for i in range(0, N, 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Re-accumulation", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
