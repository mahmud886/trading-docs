"""
A London opening-range breakout on GBP/USD 15m (BD time, US/UK summer): the 1:00 – 1:30 PM range, a close above it,
a retest of the broken high, and a long with a 2R target.

Candles: data/gbpusd_15m_london.csv (synthetic), 15-minute candles from 12:00 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "london-opening-range"
PIP = 0.0001
C = load(DATA / "gbpusd_15m_london.csv", Candle, unit_label="15m candle")
N = len(C)
I_OPEN = 4
OR = (I_OPEN, I_OPEN + 2)                     # 1:00 – 1:30 PM
OR_H = max(c.h for c in C[slice(*OR)])
OR_L = min(c.l for c in C[slice(*OR)])
I_BREAK, I_FILL = 7, 10
ENTRY, STOP = 1.2748, 1.2733
TARGET = round(ENTRY + 2 * (ENTRY - STOP), 4)


def bd(i):
    return clock(12 + 0.25 * i)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_OPEN) == "1:00 PM" and bd(I_BREAK) == "1:45 PM"
    assert round((OR_H - OR_L) / PIP) == 20
    assert all(c.c <= OR_H for c in C[:I_BREAK]) and C[I_BREAK].c > OR_H, "first close above the opening range"
    assert all(c.l > ENTRY for c in C[I_BREAK + 1:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "retest fill"
    assert OR_L < STOP < OR_H and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("london"):
        ch.zone(I_OPEN - 0.5, x_end, 1.2715, 1.2790, color=t.accent, alpha=0.05, border=False)
        ch.label(I_OPEN - 0.3, 1.2788, "<b>London open</b> 1:00 PM BD (8:00 AM London)", size=11, color=t.ink2,
                 yanchor="top")
    with ch.group("or"):
        ch.zone(OR[0] - 0.4, x_end, OR_L, OR_H, color=t.zone, alpha=0.14, dash="dot")
        ch.label(x_end, OR_L - 0.0001, f"<b>Opening range</b> 1:00 – 1:30 PM · {OR_L:.4f} – {OR_H:.4f}", size=11,
                 color=t.zone_text, xanchor="right", yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "GBP/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].h, 4.5, 1.2772, "1:45 PM: first close<br>above the range", xanchor="center")
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 13.0, 1.2722, "2:30 PM: retest of 1.2745 → buy 1.2748", xanchor="center")
    ch.header("Forex Sessions · London", "London — the Opening Range and Its Breakout",
              "GBP/USD · 15-minute candles · 12:00 – 6:00 PM Bangladesh time (US/UK summer) · target 2R",
              key=[("■", t.zone, "Opening range"), ("■", t.accent, "London")])
    ch.footnote("Synthetic candles built around the levels in the London Session lesson")
    ch.caption()
    ticks = list(range(0, N, 4))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2715, 1.2790], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "London Opening Range", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OR {OR_L}-{OR_H} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
