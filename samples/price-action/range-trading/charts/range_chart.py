"""
Range trading: a 60-pip GBP/USD range (1.2700 – 1.2760) with two touches of each edge; a rejection at support
is bought with two targets, the range midpoint and the top.

Candles: data/gbpusd_1h_range.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "range-trading-support-buy"
PIP = 0.0001
C = load(DATA / "gbpusd_1h_range.csv", Candle)
N = len(C)
RES, SUP = 1.2760, 1.2700
MID = (RES + SUP) / 2
TOPS, BOTS = (2, 10), (6, 14)
I_REJECT, I_FILL = 19, 20
ENTRY, STOP = 1.2708, 1.2690
TARGETS = [round(MID, 4), 1.2752]


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(C[i].h >= RES - 0.0002 for i in TOPS) and all(C[i].l <= SUP + 0.0002 for i in BOTS), "2+ touches each"
    assert all(SUP <= c.c <= RES for c in C) and max(c.h for c in C) <= RES, "closes stay inside the range"
    r = C[I_REJECT]
    assert r.l < SUP and r.c > SUP and r.bullish, "rejection at support: wick below, close back inside"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h and STOP < r.l
    assert max(c.h for c in C[I_FILL:]) < TARGETS[0], "targets not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("range"):
        ch.zone(-0.5, x_end, SUP, RES, color=t.zone, alpha=0.08)
        ch.hline(-0.5, x_end, RES, color=t.bear_text, dash="dash", width=1.6)
        ch.hline(-0.5, x_end, SUP, color=t.bull_text, dash="dash", width=1.6)
        ch.hline(-0.5, x_end, MID, color=t.ink3, dash="dot")
        ch.label(-0.4, RES + 0.0002, "<b>Resistance 1.2760</b>", size=11, color=t.bear_text, yanchor="bottom")
        ch.label(-0.4, SUP - 0.0002, "<b>Support 1.2700</b>", size=11, color=t.bull_text, yanchor="top")
        for i in TOPS:
            ch.label(i, C[i].h + 0.0002, "touch", size=10, color=t.bear_text, xanchor="center", yanchor="bottom")
        for i in BOTS:
            ch.label(i, C[i].l - 0.0002, "touch", size=10, color=t.bull_text, xanchor="center", yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=TARGETS, unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("reject"):
        ch.callout(I_REJECT, C[I_REJECT].l, 15.0, 1.2684, "Wick below support, close back inside", xanchor="center")
    ch.header("Price Action · Range Trading", "Range Trading — Buy the Floor, Sell the Ceiling",
              "GBP/USD · 1-hour candles · a 60-pip range; a rejection at support with two targets",
              key=[("┅", t.bear_text, "Resistance"), ("┅", t.bull_text, "Support"), ("┅", t.ink3, "Midpoint")])
    ch.footnote("Synthetic candles built around the levels in the Range Trading lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2675, 1.2775], y_dtick=0.0010, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Range Trading", OUT)
    risk, out = levels(ENTRY, STOP, TARGETS, PIP)
    print(f"{NAME}: risk {risk:g} targets {[(tp, rw, round(rr, 2)) for tp, rw, rr in out]} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
