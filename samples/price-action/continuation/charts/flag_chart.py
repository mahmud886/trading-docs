"""
A bull flag: an 80-pip flagpole, a small down-sloping channel that retraces about a third of it,
a close above the channel, and a measured-move target (breakout + flagpole height).

Candles: data/gbpusd_1h_flag.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "bull-flag-continuation"
PIP = 0.0001
C = load(DATA / "gbpusd_1h_flag.csv", Candle)
N = len(C)
I_POLE0, I_TOP, I_FLAG_END, I_BREAK = 0, 6, 13, 14
POLE = (C[I_POLE0].l, C[I_TOP].h)
HIGH_PTS = (I_TOP, 9)  # the flag's upper line runs through these highs
SLOPE = (C[HIGH_PTS[1]].h - C[HIGH_PTS[0]].h) / (HIGH_PTS[1] - HIGH_PTS[0])


def upper(x):
    return C[I_TOP].h + SLOPE * (x - I_TOP)


OFFSET = max(upper(k) - C[k].l for k in range(I_TOP, I_FLAG_END + 1))


def lower(x):
    return upper(x) - OFFSET


FLAG_LOW = min(c.l for c in C[I_TOP:I_FLAG_END + 1])
ENTRY = C[I_BREAK].c
STOP = round(FLAG_LOW - 0.0005, 4)
TARGET = round(ENTRY + (POLE[1] - POLE[0]), 4)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert POLE == (1.2600, 1.2680) and all(C[k].bullish for k in range(I_POLE0, I_TOP + 1)), "flagpole"
    assert SLOPE < 0, "the flag slopes against the trend"
    assert all(C[k].h <= upper(k) + 0.0001 for k in range(I_TOP, I_FLAG_END + 1)), "flag highs under the line"
    depth = (POLE[1] - FLAG_LOW) / (POLE[1] - POLE[0])
    assert 0.236 <= depth <= 0.5, depth
    assert C[I_BREAK].c > upper(I_BREAK) and C[I_BREAK].bullish, "breakout: a close above the flag"
    assert max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("pole"):
        ch.fig.add_shape(type="line", x0=I_POLE0 - 0.6, y0=POLE[0], x1=I_POLE0 - 0.6, y1=POLE[1],
                         line=dict(color=t.bull_text, width=3), opacity=ch.reveal.alpha("pole"))
        ch.label(I_POLE0 - 0.9, (POLE[0] + POLE[1]) / 2, "<b>Flagpole</b><br>80 pips", size=11, color=t.bull_text,
                 xanchor="right", align="right")
    with ch.group("flag"):
        for f in (upper, lower):
            ch.fig.add_shape(type="line", x0=I_TOP, y0=f(I_TOP), x1=I_BREAK + 0.5, y1=f(I_BREAK + 0.5),
                             line=dict(color=t.zone, width=1.6), opacity=ch.reveal.alpha("flag"))
        depth = (POLE[1] - FLAG_LOW) / (POLE[1] - POLE[0]) * 100
        ch.label((I_TOP + I_FLAG_END) / 2, lower((I_TOP + I_FLAG_END) / 2) - 0.0006,
                 f"<b>Flag</b>: retraces {depth:.0f}% of the pole", size=11, color=t.zone_text, xanchor="center",
                 yanchor="top")
    with ch.group("position"):
        ch.position(I_BREAK + 0.6, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(I_BREAK + 0.8, TARGET + 0.0003, "entry + 80-pip flagpole", size=10, color=t.bull_text,
                 yanchor="bottom")
    ch.candles(C, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].c, 9.5, 1.2715, "Close above the flag → buy 1.2674", xanchor="center")
    ch.header("Price Action · Continuation", "Continuation — the Bull Flag",
              "GBP/USD · 1-hour candles · a fast pole, a shallow down-sloping pause, a break in the trend's direction",
              key=[("━", t.bull_text, "Flagpole"), ("━", t.zone, "Flag channel")])
    ch.footnote("Synthetic candles built around the levels in the Continuation lesson")
    ch.caption()
    ch.axes(x_range=[-3.0, x_end + 0.3], y_range=[1.2585, 1.2770], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bull Flag", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: entry {ENTRY} stop {STOP} target {TARGET} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
