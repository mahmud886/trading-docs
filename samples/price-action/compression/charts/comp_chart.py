"""
Compression into resistance (an ascending triangle): flat highs at 1.0950, higher lows 1.0900 → 1.0915 → 1.0928 →
1.0938, swings getting smaller; a close above, a retest, and a target of the triangle's height.

Candles: data/eurusd_1h_compression.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "compression-ascending-triangle"
PIP = 0.0001
C = load(DATA / "eurusd_1h_compression.csv", Candle)
N = len(C)
HIGHS, LOWS = (2, 8, 12, 16), (5, 10, 14, 17)
I_BREAK, I_RETEST = 18, 21
RES = 1.0950
HEIGHT = RES - C[LOWS[0]].l
ENTRY, STOP = 1.0953, 1.0935
TARGET = round(RES + HEIGHT, 4)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(RES - 0.0002 <= C[i].h <= RES for i in HIGHS) and all(c.h <= RES for c in C[:I_BREAK]), "flat top"
    lows = [C[i].l for i in LOWS]
    assert lows == sorted(lows) and len(set(lows)) == 4, "rising lows"
    swings = [RES - l for l in lows]
    assert swings == sorted(swings, reverse=True), "each swing is smaller: compression"
    assert C[I_BREAK].c > RES, "close above resistance"
    r = C[I_RETEST]
    assert RES <= r.l <= ENTRY <= r.h and all(c.l > RES for c in C[I_BREAK + 1:I_RETEST]), "retest holds"
    assert STOP < lows[-1] and TARGET == 1.1000 and max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("tri"):
        ch.hline(HIGHS[0] - 0.5, I_BREAK + 0.5, RES, color=t.bear_text, dash="dash", width=1.6)
        ch.label(HIGHS[0] - 0.5, RES + 0.0003, "<b>Resistance 1.0950</b> — flat highs", size=11, color=t.bear_text,
                 yanchor="bottom")
        a, b = LOWS[0], LOWS[-1]
        ch.fig.add_shape(type="line", x0=a, y0=C[a].l, x1=b + 0.5,
                         y1=C[a].l + (C[b].l - C[a].l) * (b + 0.5 - a) / (b - a),
                         line=dict(color=t.bull_text, width=1.6), opacity=ch.reveal.alpha("tri"))
        for i in LOWS:
            ch.label(i, C[i].l - 0.0003, f"{C[i].l:.4f}", size=10, color=t.bull_text, xanchor="center", yanchor="top")
        ch.label(10.5, 1.0892, "<b>Higher lows</b>: each swing smaller — 50 → 35 → 22 → 12 pips", size=11,
                 color=t.bull_text, xanchor="center", yanchor="top")
    with ch.group("position"):
        ch.position(I_RETEST - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(I_RETEST - 0.2, TARGET + 0.0003, "1.0950 + 50-pip height", size=10, color=t.bull_text,
                 yanchor="bottom")
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].c, 14.5, 1.0985, "Close above 1.0950,<br>then a retest → buy 1.0953",
                   xanchor="center")
    ch.header("Price Action · Compression", "Compression — Squeezing Into Resistance",
              "EUR/USD · 1-hour candles · flat highs, rising lows, smaller swings, then a break",
              key=[("┅", t.bear_text, "Resistance"), ("━", t.bull_text, "Rising lows")])
    ch.footnote("Synthetic candles built around the levels in the Compression lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0880, 1.1012], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Compression Triangle", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: lows {[C[i].l for i in LOWS]} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
