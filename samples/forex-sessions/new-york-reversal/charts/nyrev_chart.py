"""
A New York reversal on GBP/USD 15m (BD time, US/UK summer): London rallies from 1.2700, US data at 6:30 PM BD
sweeps London's high and closes back below, a close under London's last higher low (CHOCH) follows, and the
retest is sold toward London's earlier higher low.

Candles: data/gbpusd_15m_nyrev.csv (synthetic), 15-minute candles from 1:00 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "newyork-reversal"
PIP = 0.0001
C = load(DATA / "gbpusd_15m_nyrev.csv", Candle, unit_label="15m candle")
N = len(C)
I_NY, I_DATA, I_CHOCH, I_FILL, I_LCLOSE = 20, 22, 23, 25, 36
LONDON_HIGH = max(c.h for c in C[:I_DATA])
I_HL = 19
HL = min(C[I_HL].l, C[I_HL + 1].l)
LONDON_HL = C[6].l
ENTRY, STOP, TARGET = 1.2757, 1.2781, 1.2714


def bd(i):
    return clock(13 + 0.25 * i)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_NY) == "6:00 PM" and bd(I_DATA) == "6:30 PM" and bd(I_LCLOSE) == "10:00 PM"
    assert C[-1].c > C[0].o and LONDON_HIGH - C[0].o > 60 * PIP, "London rallied"
    d = C[I_DATA]
    assert d.h > LONDON_HIGH and d.c < LONDON_HIGH, "data candle sweeps London's high, closes back below"
    assert all(c.c >= HL for c in C[I_HL:I_CHOCH]) and C[I_CHOCH].c < HL, "CHOCH below London's last higher low"
    assert all(c.h < ENTRY for c in C[I_CHOCH + 1:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "retest"
    assert STOP > d.h and TARGET > LONDON_HL and min(c.l for c in C[I_FILL:]) > TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    with ch.group("london"):
        ch.zone(-0.5, I_NY - 0.5, 1.2690, 1.2795, color=t.accent, alpha=0.05, border=False)
        ch.label((I_NY - 1) / 2, 1.2793, "<b>London</b> · rally from 1.2700", size=11, color=t.ink2, xanchor="center",
                 yanchor="top")
        ch.hline(10, x_end, LONDON_HIGH, color=t.bear_text, dash="dash")
        ch.label(10, LONDON_HIGH + 0.0002, f"London high {LONDON_HIGH:.4f}", size=10, color=t.bear_text,
                 yanchor="bottom")
        ch.hline(4, I_FILL - 0.6, LONDON_HL, color=t.ink3, dash="dot")
        ch.label(7.0, LONDON_HL - 0.0002, f"London higher low {LONDON_HL:.4f}", size=10, color=t.ink3,
                 yanchor="top")
    with ch.group("ny"):
        ch.zone(I_NY - 0.5, x_end, 1.2690, 1.2795, color=t.bear, alpha=0.05, border=False)
        ch.label((I_NY + x_end) / 2, 1.2793, "<b>New York</b> from 6:00 PM BD", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
    with ch.group("sweep"):
        ch.callout(I_DATA, C[I_DATA].h, 16.0, 1.2786, "① 6:30 PM data: sweeps London's high<br>to 1.2779, closes back below",
                   xanchor="center")
    with ch.group("choch"):
        ch.hline(I_HL, I_CHOCH + 0.4, HL, color=t.ink3, dash="dash")
        ch.callout(I_CHOCH, C[I_CHOCH].l, 18.0, 1.2738, "② 6:45 PM: close below<br>London's last higher low 1.2758",
                   xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "GBP/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].h, 29.0, 1.2770, "③ 7:15 PM: retest → sell 1.2757", xanchor="center")
    ch.header("Forex Sessions · New York Reversal", "New York Reversal — London's High Swept, Then Turned",
              "GBP/USD · 15-minute candles · 1:00 – 11:00 PM Bangladesh time (US/UK summer)",
              key=[("■", t.accent, "London"), ("■", t.bear, "New York")])
    ch.footnote("Synthetic candles built around the levels in the New York Reversal lesson")
    ch.caption()
    ticks = list(range(0, N, 8))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2690, 1.2795], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "New York Reversal", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: London high {LONDON_HIGH} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
