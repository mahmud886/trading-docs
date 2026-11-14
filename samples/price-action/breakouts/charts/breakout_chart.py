"""
A range breakout with a retest: USD/JPY ranges 149.50 – 150.50, closes above it, retests the top from above,
and the long targets the range height projected from the breakout (151.50).

Candles: data/usdjpy_1h_breakout.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "range-breakout-retest"
PIP = 0.01
C = load(DATA / "usdjpy_1h_breakout.csv", Candle)
N = len(C)
I_BREAK, I_RETEST = 20, 24
RANGE = (min(c.l for c in C[:I_BREAK]), max(c.h for c in C[:I_BREAK]))
HEIGHT = RANGE[1] - RANGE[0]
ENTRY, STOP = 150.55, 150.30
TARGET = round(RANGE[1] + HEIGHT, 2)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert RANGE == (149.50, 150.50) and TARGET == 151.50, RANGE
    tops = [k for k in range(I_BREAK) if C[k].h >= RANGE[1] - 0.03]
    bots = [k for k in range(I_BREAK) if C[k].l <= RANGE[0] + 0.05]
    assert len(tops) >= 2 and len(bots) >= 2, (tops, bots)
    assert all(RANGE[0] <= c.c <= RANGE[1] for c in C[:I_BREAK]), "closes inside the range"
    b = C[I_BREAK]
    assert b.c > RANGE[1] and abs(b.c - b.o) >= 0.6 * (b.h - b.l), "breakout: a strong close above"
    r = C[I_RETEST]
    assert r.l <= RANGE[1] and r.c > RANGE[1] and all(c.l > RANGE[1] for c in C[I_BREAK + 1:I_RETEST]), "retest holds"
    assert r.l <= ENTRY <= r.h and STOP < RANGE[1] and max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("range"):
        ch.zone(-0.5, I_BREAK - 0.5, *RANGE, color=t.zone, alpha=0.14)
        ch.hline(-0.5, x_end, RANGE[1], color=t.bear_text, dash="dash")
        ch.hline(-0.5, I_BREAK - 0.5, RANGE[0], color=t.bull_text, dash="dash")
        ch.label(-0.4, RANGE[1] + 0.03, "<b>Range top 150.50</b>", size=11, color=t.bear_text, yanchor="bottom")
        ch.label(-0.4, RANGE[0] - 0.03, "<b>Range bottom 149.50</b> · height 100 pips", size=11, color=t.bull_text,
                 yanchor="top")
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].c, 16.0, 151.05, "Breakout: a large candle<br>closes above 150.50",
                   xanchor="center")
    with ch.group("position"):
        ch.position(I_RETEST - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".2f", long=True)
        ch.label(I_RETEST + 0.2, TARGET + 0.03, "range top + 100-pip height", size=10, color=t.bull_text,
                 yanchor="bottom")
    ch.candles(C, "USD/JPY 1H (synthetic)", price_fmt=".2f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_RETEST, C[I_RETEST].l, 20.5, 149.95, "Retest: dips to 150.48,<br>closes back above → buy 150.55",
                   xanchor="center")
    ch.header("Price Action · Breakouts", "Breakouts — Close, Retest, Measured Target",
              "USD/JPY · 1-hour candles · a 100-pip range, a close above it, and a retest of the top",
              key=[("■", t.zone, "Range"), ("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles built around the levels in the Breakouts lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[149.35, 151.70], y_dtick=0.25, y_fmt=".2f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Range Breakout Retest", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: range {RANGE} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
