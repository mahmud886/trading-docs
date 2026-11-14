"""
One Initial Balance (the first hour, four 15-minute candles), three outcomes on EUR/USD: A - price closes above the IB high
and holds it (an extension); B - price closes above, then back inside, and falls through the IB low (a failed break);
C - price stays inside the IB. The IB is identical in all three panels.

Candles: data/eurusd_15m_ib_{a,b,c}.csv (synthetic), 15-minute bars from 9:30 (exchange time).
"""

from dataclasses import replace

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "initial-balance-outcomes"
PANELS = {k: load(DATA / f"eurusd_15m_ib_{k}.csv", Candle, unit_label="15m") for k in "abc"}
N_IB = 4
N = len(PANELS["a"])
GAP = 15
IBH = max(c.h for c in PANELS["a"][:N_IB])
IBL = min(c.l for c in PANELS["a"][:N_IB])
WIDTH = IBH - IBL
EXT_UP, EXT_DN = IBH + WIDTH, IBL - WIDTH
TITLES = {"a": "A · Break and hold", "b": "B · Failed break", "c": "C · Stays inside"}
NOTES = {
    "a": "Closes above the IB high and the<br>retest holds → an extension up;<br>the planned 2× target is not reached",
    "b": "Closes above, then back inside, then<br>below the IB low → the break failed;<br>the 1× target is not reached",
    "c": "No close outside the IB<br>→ a balanced day so far",
}


def bd(i):
    h, m = divmod(9 * 60 + 30 + 15 * i, 60)
    return f"{h}:{m:02d}"


def validate():
    for C in PANELS.values():
        for c in C:
            assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
        assert [c.c for c in C[:N_IB]] == [c.c for c in PANELS["a"][:N_IB]], "same Initial Balance"
    assert round(WIDTH * 1e4) == 10
    a, b, c = (PANELS[k][N_IB:] for k in "abc")
    assert a[0].c > IBH and all(x.l >= IBH - 0.0002 for x in a[1:]) and min(x.c for x in a) > IBH, "A: break holds"
    assert max(x.h for x in a) < IBH + 2 * WIDTH, "A: the 2x extension target is not reached"
    assert b[0].c > IBH and b[1].c < IBH and b[-1].c < IBL and max(x.c for x in b[3:]) < IBL + 0.0002, "B: failed break"
    assert min(x.l for x in b) > EXT_DN, "B: the 1x downside target is not reached"
    assert all(IBL <= x.c <= IBH for x in c), "C: no close outside"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    base = ch.reveal
    n = None if base.candles is None else base.candles
    for p, (k, C) in enumerate(PANELS.items()):
        x0 = p * GAP
        xs = [x0 + i for i in range(N)]
        with ch.group("ib"):
            ch.zone(x0 - 0.5, x0 + N - 0.5, IBL, IBH, color=t.zone, alpha=0.10, dash="dot")
            ch.fig.add_vline(x=x0 + N_IB - 0.5, line=dict(color=t.ink3, width=1, dash="dot"))
        ch.label(x0 + (N - 1) / 2, 1.0887, f"<b>{TITLES[k]}</b>", size=14, color=t.ink, xanchor="center", yanchor="top")
        if n is None:
            shown = None
        else:
            after = 0 if n <= N_IB else min(max(n - N_IB - p * (N - N_IB), 0), N - N_IB)
            shown = min(n, N_IB) + after
        ch.reveal = replace(base, candles=shown)
        ch.candles(C, f"EUR/USD 15m {k.upper()} (synthetic)", price_fmt=".4f", x=xs)
        ch.reveal = base
        with ch.group(f"note_{k}"):
            ch.label(x0 + (N - 1) / 2, 1.0843, NOTES[k], size=11, color=t.ink2, xanchor="center", yanchor="top", align="center",
                     bgcolor=t.surface)
    with ch.group("ib"):
        ch.label(-0.4, IBH + 0.00008, f"IB high {IBH:.4f}", size=10, color=t.zone_text, yanchor="bottom")
        ch.label(-0.4, IBL - 0.00008, f"IB low {IBL:.4f}", size=10, color=t.zone_text, yanchor="top")
    with ch.group("ext"):
        for p in range(3):
            x0 = p * GAP
            ch.hline(x0 + N_IB - 0.5, x0 + N - 0.5, EXT_UP, color=t.bull_text, dash="dash", width=1)
            ch.hline(x0 + N_IB - 0.5, x0 + N - 0.5, EXT_DN, color=t.bear_text, dash="dash", width=1)
        ch.label(N_IB - 0.3, EXT_UP + 0.00008, f"1× IB above {EXT_UP:.4f}", size=10, color=t.bull_text, yanchor="bottom")
        ch.label(N_IB - 0.3, EXT_DN - 0.00008, f"1× IB below {EXT_DN:.4f}", size=10, color=t.bear_text, yanchor="top")
    ch.header("Auction Market Theory · Initial Balance", "Initial Balance — One Range, Three Outcomes",
              "EUR/USD · 15-minute candles from 9:30 (exchange time) · dotted line = end of the first hour",
              key=[("■", t.zone, "Initial Balance (first hour, 10 pips)")])
    ch.footnote("Synthetic candles: the same first hour with three possible continuations")
    ch.caption()
    ticks = [p * GAP + i for p in range(3) for i in (0, N_IB, N - 1)]
    ch.axes(x_range=[-0.9, 2 * GAP + N - 0.1], y_range=[1.0832, 1.0892], y_dtick=0.0010, y_fmt=".4f", x_title="Exchange time",
            x_ticks=(ticks, [bd(x % GAP) for x in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Initial Balance Outcomes", OUT)
    print(NAME, IBL, IBH, EXT_DN, EXT_UP, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
