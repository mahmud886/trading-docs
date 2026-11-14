"""
A double-top reversal: two highs near 1.1000, a neckline at 1.0950, a close below it (the structural shift),
a retest from below, and a measured target (neckline − pattern height).

Candles: data/eurusd_4h_double_top.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "double-top-reversal"
PIP = 0.0001
C = load(DATA / "eurusd_4h_double_top.csv", Candle, unit_label="4H candle")
N = len(C)
I_T1, I_NECK, I_T2, I_BREAK, I_RETEST = 5, 8, 11, 14, 16
NECK = C[I_NECK].l
TOP = max(C[I_T1].h, C[I_T2].h)
HEIGHT = TOP - NECK
ENTRY, STOP = 1.0945, 1.0962
TARGET = round(NECK - HEIGHT, 4)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(C[k].c > C[k - 1].c for k in range(1, I_T1 + 1)), "uptrend into the first top"
    assert abs(C[I_T1].h - C[I_T2].h) <= 0.0003 and C[I_T2].h < C[I_T1].h, "second top fails just under the first"
    assert NECK == min(c.l for c in C[I_T1:I_T2 + 1]) == 1.0950, "neckline: the low between the tops"
    assert all(c.c >= NECK for c in C[I_NECK:I_BREAK]) and C[I_BREAK].c < NECK, "first close below the neckline"
    r = C[I_RETEST]
    assert r.h <= NECK + 0.0001 and r.l <= ENTRY <= r.h, "retest from below fills the entry"
    assert STOP > r.h and TARGET == 1.0900
    assert min(c.l for c in C[I_RETEST:]) > TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("tops"):
        for i, name in ((I_T1, "Top 1 · 1.1000"), (I_T2, "Top 2 · 1.0998")):
            ch.label(i, C[i].h + 0.0003, f"<b>{name}</b>", size=11, color=t.bear_text, xanchor="center",
                     yanchor="bottom")
        ch.hline(I_T1, I_T2 + 0.4, TOP, color=t.bear_text, dash="dot")
    with ch.group("neck"):
        ch.hline(I_NECK - 3, x_end, NECK, color=t.ink2, dash="dash", width=1.6)
        ch.label(I_NECK - 3, NECK - 0.0003, "<b>Neckline 1.0950</b>", size=11, color=t.ink2, yanchor="top")
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].c, 10.0, 1.0918, "Close below the neckline:<br>"
                   "the last higher low is broken", xanchor="center")
    with ch.group("position"):
        ch.position(I_RETEST - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
        ch.label(I_RETEST - 0.2, TARGET - 0.0003, "neckline − 50-pip height", size=10, color=t.bull_text,
                 yanchor="top")
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_RETEST, C[I_RETEST].h, 13.5, 1.1008, "Retest from below → sell 1.0945", xanchor="center")
    ch.header("Price Action · Reversal Concepts", "Reversals — the Double Top",
              "EUR/USD · 4-hour candles · two failed highs, a neckline break, a retest, a measured target",
              key=[("┅", t.ink2, "Neckline"), ("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles built around the levels in the Reversal Concepts lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0850, 1.1022], y_dtick=0.0020, y_fmt=".4f",
            x_title="4-hour candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Double Top Reversal", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
