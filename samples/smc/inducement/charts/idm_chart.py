"""
Bullish inducement — a minor low above the real order block is taken first, then price reverses from the OB.

Candles: data/eurusd_1h_inducement.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "bullish-inducement"
PIP = 0.0001


def load():
    with (DATA / "eurusd_1h_inducement.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"hour {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
I_OB, I_HH, I_IDM, I_IH, I_TAKE, I_FILL, I_CHOCH = 1, 5, 9, 10, 12, 13, 15
OB = (C[I_OB].l, C[I_OB].o)
IDM, IH = C[I_IDM].l, C[I_IH].h
ENTRY, STOP, TARGET = 1.0855, 1.0842, 1.0950


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert not C[I_OB].bullish and C[I_OB + 1].bullish and C[I_OB + 1].c > C[0].h, "OB + displacement"
    assert IDM == 1.0870 and IDM > OB[1], "the inducement low sits above the OB"
    assert C[I_TAKE].l < IDM and all(c.l >= IDM for c in C[I_IDM + 1:I_TAKE])
    assert OB[0] <= ENTRY <= OB[1] and C[I_FILL].l <= ENTRY and C[I_FILL].l >= OB[0], "reaches the OB, holds"
    assert C[I_CHOCH].c > IH and all(c.c <= IH for c in C[I_IH:I_CHOCH])
    assert STOP < OB[0] and max(c.h for c in C) < TARGET


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(C)
    with ch.group("ob"):
        ch.zone(I_OB - 0.4, I_FILL + 0.5, *OB, color=t.bull, alpha=0.25)
        ch.label(I_OB - 0.4, OB[0] - 0.0002, "<b>real bullish OB</b> 1.0850 – 1.0856", size=11, color=t.bull_text,
                 yanchor="top")
    with ch.group("idm"):
        ch.hline(I_IDM, I_TAKE + 0.4, IDM, color=t.bear_text, dash="dash")
        ch.label(I_IDM - 0.4, IDM - 0.0002, "<b>IDM</b> 1.0870 — minor low", size=11, color=t.bear_text,
                 yanchor="top", xanchor="right")
    with ch.group("take"):
        ch.callout(I_TAKE, C[I_TAKE].l, -0.5, 1.0952, "<b>① Inducement taken</b>: the break of 1.0870 looks<br>"
                   "bearish — breakdown sellers join, longs are stopped", xanchor="left")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, n + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(n)), text=[c.label for c in C])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 15.5, 1.0845, "<b>②</b> Price reaches the real OB → buy 1.0855",
                   xanchor="center")
    with ch.group("choch"):
        ch.hline(I_IH, I_CHOCH + 0.4, IH, color=t.bull_text, dash="dot")
        ch.callout(I_CHOCH, C[I_CHOCH].c, 12.0, 1.0918, "<b>③</b> CHOCH above 1.0893 confirms", xanchor="center")
    ch.header("SMC · Inducement", "Inducement — the Obvious Low Before the Real Zone",
              "EUR/USD · 1-hour candles · a minor low above the order block is taken first, then price turns",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Order block")])
    ch.footnote("Synthetic candles built around the levels in the Inducement lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 2], y_range=[1.0832, 1.0958], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, n, 3)), [str(i + 1) for i in range(0, n, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish Inducement", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OB {OB} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
