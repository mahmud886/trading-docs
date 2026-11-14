"""
The cycle from compression to expansion: a tight 50-pip range with small candles, a burst of large candles that
leaves an FVG, a pullback into the FVG (post-expansion entry), and a measured-move target.

Candles: data/eurusd_1h_expansion.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "compression-to-expansion"
PIP = 0.0001
C = load(DATA / "eurusd_1h_expansion.csv", Candle)
N = len(C)
RANGE_END, EXP = 12, (12, 13, 14)
I_FILL = 17
RANGE = (min(c.l for c in C[:RANGE_END]), max(c.h for c in C[:RANGE_END]))
FVG = (C[RANGE_END - 1].h, C[RANGE_END + 1].l)
ENTRY, STOP = 1.1062, 1.1044
TARGET = round(1.1050 + 0.0050, 4)


def avg_range(cs):
    return sum(c.h - c.l for c in cs) / len(cs) / PIP


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert RANGE[0] >= 1.1000 and RANGE[1] <= 1.1050, RANGE
    assert all(C[i].bullish and C[i].c > RANGE[1] for i in EXP), "expansion candles close above the range"
    assert avg_range(C[EXP[0]:EXP[-1] + 1]) > 1.5 * avg_range(C[:RANGE_END]), "expansion candles are larger"
    assert FVG[0] < FVG[1], "the expansion leaves an FVG"
    p = C[I_FILL]
    assert FVG[0] <= p.l <= ENTRY <= p.h and ENTRY <= FVG[1], "pullback fills inside the FVG"
    assert STOP < FVG[0] and max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("range"):
        ch.zone(-0.5, RANGE_END - 0.5, 1.1000, 1.1050, color=t.zone, alpha=0.16)
        ch.label(-0.4, 1.0997, f"<b>Compression</b> 1.1000 – 1.1050 · avg candle {avg_range(C[:RANGE_END]):.0f} pips",
                 size=11, color=t.zone_text, yanchor="top")
    with ch.group("exp"):
        ch.callout(13, C[13].h, 9.0, 1.1098, f"<b>Expansion</b>: large candles, "
                   f"avg {avg_range(C[EXP[0]:EXP[-1] + 1]):.0f} pips", xanchor="center")
        ch.zone(RANGE_END - 1 - 0.4, x_end, *FVG, color=t.bull, alpha=0.26, dash="dot")
        ch.label(14.6, FVG[0] + 0.0002, f"FVG {FVG[0]:.4f} – {FVG[1]:.4f}", size=10,
                 color=t.bull_text, xanchor="center", yanchor="bottom")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(I_FILL - 0.2, TARGET + 0.0002, "1.1050 + 50-pip range", size=10, color=t.bull_text, yanchor="bottom")
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_FILL, C[I_FILL].l, 13.5, 1.1025, "Pullback into the FVG → buy 1.1062", xanchor="center")
    ch.header("Price Action · Expansion", "Expansion — After the Squeeze",
              "EUR/USD · 1-hour candles · a quiet range, a burst of large candles, a pullback into the gap",
              key=[("■", t.zone, "Compression"), ("■", t.bull, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the Expansion lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0985, 1.1110], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Compression to Expansion", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: range {RANGE} FVG {FVG} avg {avg_range(C[:RANGE_END]):.1f}/{avg_range(C[12:15]):.1f} "
          f"risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
