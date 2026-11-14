"""
The three pillars on one clean chart: structure (HH/HL), a key level (old resistance becomes support),
and a candle signal (bullish engulfing at the level) — the lesson's first-trade example.

Candles: data/eurusd_4h_intro.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "price-action-three-pillars"
PIP = 0.0001
C = load(DATA / "eurusd_4h_intro.csv", Candle, unit_label="4H candle")
N = len(C)
I_H1, I_HL1, I_BREAK, I_HH, I_ENG, I_FILL = 4, 7, 11, 14, 20, 21
LEVEL = C[I_H1].h
ENTRY, STOP, TARGET = 1.0885, 1.0850, C[I_HH].h


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert LEVEL == 1.0880 and all(c.h <= LEVEL for c in C[:I_BREAK]) and C[I_BREAK].c > LEVEL, "resistance, then break"
    assert C[I_HL1].l == min(c.l for c in C[I_H1:I_BREAK]) and C[I_HL1].l > C[0].l, "higher low"
    assert C[I_HH].h == max(c.h for c in C), "higher high"
    e, p = C[I_ENG], C[I_ENG - 1]
    assert e.bullish and not p.bullish and e.o <= p.c and e.c >= p.o, "bullish engulfing"
    assert all(c.l > LEVEL for c in C[I_BREAK + 1:18]) and LEVEL - 0.0010 < min(c.l for c in C[18:]) , "retest holds"
    assert e.l > C[I_HL1].l, "the retest low is a higher low"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h
    assert max(c.h for c in C[I_FILL:]) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("structure"):
        for i, name, up in ((I_H1, "H 1.0880", True), (I_HL1, "HL 1.0830", False), (I_HH, "HH 1.0960", True),
                            (I_ENG, "HL 1.0876", False)):
            c = C[i]
            ch.label(i, c.h + 0.0004 if up else c.l - 0.0004, f"<b>{name}</b>", size=11,
                     color=t.bull_text if up else t.bear_text, xanchor="center",
                     yanchor="bottom" if up else "top")
    with ch.group("level"):
        ch.zone(I_H1 - 0.4, x_end, LEVEL - 0.0006, LEVEL, color=t.zone, alpha=0.20)
        ch.label(5.6, LEVEL + 0.0004, "<b>Key level 1.0874 – 1.0880</b>: resistance twice …", size=11,
                 color=t.zone_text, yanchor="bottom")
        ch.label(16.5, LEVEL - 0.0010, "… then support after the break", size=11, color=t.zone_text,
                 xanchor="center", yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("signal"):
        ch.callout(I_ENG, C[I_ENG].l, 17.0, 1.0832, "Bullish engulfing at the level", xanchor="center")
    ch.header("Price Action · Introduction", "Price Action — Three Pillars on One Chart",
              "EUR/USD · 4-hour candles · structure + key level + candle signal, no indicators",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Key level")])
    ch.footnote("Synthetic candles built around the levels in the Introduction lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0785, 1.0985], y_dtick=0.0020, y_fmt=".4f",
            x_title="4-hour candles", x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Price Action Three Pillars", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
