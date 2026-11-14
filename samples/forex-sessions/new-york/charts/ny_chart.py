"""
Gold in the New York session (BD time, US summer): US data at 6:30 PM BD drives a displacement that leaves a fair
value gap, the pullback into the gap is bought before the 7:30 PM stock-market open, and the trade targets the
previous day's high. London closes at 10:00 PM BD.

Candles: data/xauusd_15m_newyork.csv (synthetic), 15-minute candles from 6:00 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "newyork-data-fvg"
C = load(DATA / "xauusd_15m_newyork.csv", Candle, unit_label="15m candle")
N = len(C)
I_DATA, I_FILL, I_STOCKS, I_LCLOSE = 2, 5, 6, 16
FVG = (C[I_DATA - 1].h, C[I_DATA + 1].l)
ENTRY, STOP, TARGET = 2410.0, 2400.0, 2438.0


def bd(i):
    return clock(18 + 0.25 * i)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_DATA) == "6:30 PM" and bd(I_STOCKS) == "7:30 PM" and bd(I_LCLOSE) == "10:00 PM"
    d = C[I_DATA]
    assert d.bullish and d.c - d.o >= 10 and FVG[0] < FVG[1], "data candle displaces and leaves an FVG"
    assert all(c.l > ENTRY for c in C[I_DATA + 1:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h
    assert FVG[0] <= ENTRY <= FVG[1] and all(c.l > FVG[0] for c in C[I_DATA + 2:]), "FVG holds"
    assert STOP < d.l and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("events"):
        for i, text in ((I_DATA, "<b>6:30 PM</b> US data"), (I_STOCKS, "<b>7:30 PM</b> US stocks open"),
                        (I_LCLOSE, "<b>10:00 PM</b> London closes")):
            ch.fig.add_vline(x=i - 0.5, line=dict(color=t.ink3, width=1, dash="dot"))
            ch.label(i - 0.4, 2441.5, text, size=11, color=t.ink2, yanchor="top")
    with ch.group("fvg"):
        ch.zone(I_DATA - 1 + 0.6, x_end, *FVG, color=t.zone, alpha=0.24, dash="dot")
        ch.label(x_end, FVG[0] - 0.4, f"<b>FVG</b> {FVG[0]:,.1f} – {FVG[1]:,.1f}", size=11, color=t.zone_text,
                 xanchor="right", yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=1.0, unit_name="USD",
                    fmt=",.1f", long=True)
    ch.candles(C, "XAU/USD 15m (synthetic)", price_fmt=",.1f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("data"):
        ch.callout(I_DATA, C[I_DATA].h, 0.6, 2428.0, "Data candle: +11 USD,<br>leaves a gap", xanchor="center")
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 8.5, 2403.0, "7:15 PM: pullback into the FVG → buy 2,410",
                   xanchor="center")
    ch.header("Forex Sessions · New York", "New York — US Data, a Gap, and the Pullback",
              "XAU/USD · 15-minute candles · 6:00 – 11:00 PM Bangladesh time (US summer) · target: previous day's high",
              key=[("■", t.zone, "Fair value gap"), ("┅", t.ink3, "Scheduled times")])
    ch.footnote("Synthetic candles built around the levels in the New York Session lesson")
    ch.caption()
    ticks = list(range(0, N, 4))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[2396.0, 2443.0], y_dtick=5.0, y_fmt=",.0f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "New York Data FVG", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
    print(f"{NAME}: FVG {FVG} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
