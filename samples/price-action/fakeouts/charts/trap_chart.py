"""
A multi-candle fakeout (trap): two closes above range resistance draw in breakout buyers, then one large candle
closes back inside and engulfs both. The short is planned on the retrace to the old level.

Candles: data/eurusd_1h_trap.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "fakeout-trap"
PIP = 0.0001
C = load(DATA / "eurusd_1h_trap.csv", Candle)
N = len(C)
I_B1, I_B2, I_TRAP, I_FILL = 18, 19, 20, 22
RES = max(c.h for c in C[:I_B1])
SUP = min(c.l for c in C[:I_B1])
ENTRY, STOP, TARGET = 1.0938, 1.0968, 1.0870


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert (RES, SUP) == (1.0931, 1.0875), (RES, SUP)
    assert all(SUP <= c.c <= RES for c in C[:I_B1]), "range"
    assert C[I_B1].c > RES and C[I_B2].c > RES, "two closes above resistance: the trap"
    t = C[I_TRAP]
    assert not t.bullish and t.c < RES and t.o >= max(C[I_B1].c, C[I_B2].c) and t.c < C[I_B1].o, \
        "one candle closes back inside and engulfs both breakout bodies"
    assert C[I_FILL].h >= ENTRY and all(c.h < STOP for c in C[I_B2:]) and STOP > C[I_B2].h
    assert min(c.l for c in C[I_TRAP:]) > TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("range"):
        ch.zone(-0.5, I_B1 - 0.5, SUP, RES, color=t.zone, alpha=0.12)
        ch.hline(-0.5, x_end, RES, color=t.bear_text, dash="dash")
        ch.label(-0.4, RES + 0.0003, "<b>Resistance 1.0931</b> (range top)", size=11, color=t.bear_text,
                 yanchor="bottom")
        ch.hline(-0.5, x_end, SUP, color=t.bull_text, dash="dash")
        ch.label(-0.4, SUP - 0.0003, "<b>Support 1.0875</b> (range bottom)", size=11, color=t.bull_text,
                 yanchor="top")
    with ch.group("trap"):
        ch.callout(I_B2, C[I_B2].h, 14.0, 1.0972, "<b>①</b> Two closes above 1.0931:<br>breakout buyers join",
                   xanchor="center")
    with ch.group("engulf"):
        ch.callout(I_TRAP, C[I_TRAP].c, 15.0, 1.0855, "<b>②</b> One candle closes back inside<br>"
                   "and engulfs both: they're trapped", xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_FILL, C[I_FILL].h, 24.5, 1.0972, "<b>③</b> Retrace to the old level → sell 1.0938",
                   xanchor="center")
    ch.header("Price Action · Fakeouts", "Fakeouts — the Two-Candle Trap",
              "EUR/USD · 1-hour candles · closes above resistance that fail, and the trade against them",
              key=[("■", t.zone, "Range"), ("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles built around the levels in the Fakeouts lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0848, 1.0985], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Fakeout Trap", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: R {RES} S {SUP} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
