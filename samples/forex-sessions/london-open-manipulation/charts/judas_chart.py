"""
A bullish London-open "Judas swing" on EUR/USD 5m (BD time, US/UK summer), with a bullish daily bias: London's first
move drops through the Asian low, closes back inside, breaks the last lower high (CHOCH), and the retest is bought
with the previous day's high as target.

Candles: data/eurusd_5m_judas.csv (synthetic), 5-minute candles from 12:30 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "london-judas-swing"
PIP = 0.0001
C = load(DATA / "eurusd_5m_judas.csv", Candle, unit_label="5m candle")
N = len(C)
ASIA = (1.0852, 1.0872)
PDH = 1.0895
I_OPEN, I_SWEEP, I_BACK, I_LH, I_CHOCH, I_FILL = 6, 10, 11, 8, 13, 15
LH = C[I_LH].h
ENTRY, STOP, TARGET = 1.0857, 1.0841, PDH


def bd(i):
    return clock(12.5 + i / 12)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_OPEN) == "1:00 PM" and bd(I_CHOCH) == "1:35 PM"
    assert all(ASIA[0] <= c.l and c.h <= ASIA[1] for c in C[:I_OPEN]), "inside the Asian range before the open"
    low = min(c.l for c in C)
    assert C[I_SWEEP].l == low < ASIA[0] and C[I_BACK].c > ASIA[0], "drop through the Asian low, then back inside"
    assert C[I_LH].h > C[I_LH - 1].h and C[I_LH].h > C[I_LH + 1].h, "last lower high"
    assert all(c.c <= LH for c in C[I_LH:I_CHOCH]) and C[I_CHOCH].c > LH, "CHOCH: first close above it"
    assert all(c.l > ENTRY for c in C[I_CHOCH + 1:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "retest fill"
    assert STOP < low and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    with ch.group("asia"):
        ch.zone(-0.5, x_end, *ASIA, color=t.zone, alpha=0.10, dash="dot")
        ch.label(-0.4, ASIA[1] + 0.0001, "<b>Asian range</b> 1.0852 – 1.0872 (6:00 AM – 12:00 PM BD)", size=11,
                 color=t.zone_text, yanchor="bottom")
        ch.hline(-0.5, x_end, PDH, color=t.ink2, dash="dash")
        ch.label(-0.4, PDH + 0.0001, "<b>Previous day's high</b> 1.0895 · daily bias: bullish", size=11, color=t.ink2,
                 yanchor="bottom")
    with ch.group("open"):
        ch.fig.add_vline(x=I_OPEN - 0.5, line=dict(color=t.ink3, width=1, dash="dot"))
        ch.label(I_OPEN - 0.4, 1.0902, "<b>1:00 PM</b> London opens", size=11, color=t.ink2, yanchor="bottom")
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].l, 4.0, 1.0838, "① 1:20 PM: drop to 1.0843 — below the Asian low", xanchor="center")
    with ch.group("choch"):
        ch.hline(I_LH, I_CHOCH + 0.4, LH, color=t.ink3, dash="dash")
        ch.callout(I_CHOCH, C[I_CHOCH].h, 11.0, 1.0868, "② 1:35 PM: close above the<br>lower high 1.0856 (CHOCH)",
                   xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 19.0, 1.0846, "③ 1:45 PM: retest → buy 1.0857", xanchor="center")
    ch.header("Forex Sessions · London Open Manipulation", "The Judas Swing — London's First Move Fails",
              "EUR/USD · 5-minute candles · 12:30 – 3:00 PM Bangladesh time (US/UK summer) · bullish daily bias",
              key=[("■", t.zone, "Asian range"), ("┅", t.ink2, "Previous day's high")])
    ch.footnote("Synthetic candles built around the levels in the London Open Manipulation lesson")
    ch.caption()
    ticks = list(range(0, N, 6))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0834, 1.0905], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "London Judas Swing", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
