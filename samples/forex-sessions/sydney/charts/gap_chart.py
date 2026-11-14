"""
The weekly open on AUD/USD 15m (BD time, US summer): Friday's New York close (3:00 AM Saturday BD), the weekend gap
at Monday's 3:00 AM BD open, a sell after the first 30 minutes when price closes back below the open, and how much of
the gap is filled before Tokyo opens.

Candles: data/audusd_15m_weekly_open.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "sydney-weekly-gap"
PIP = 0.0001
C = load(DATA / "audusd_15m_weekly_open.csv", Candle, unit_label="15m candle")
N = len(C)
I_OPEN = 6
FRI_CLOSE, MON_OPEN = C[I_OPEN - 1].c, C[I_OPEN].o
GAP = round((MON_OPEN - FRI_CLOSE) / PIP)
I_SIGNAL = 7
ENTRY, STOP, TARGET = C[I_SIGNAL].c, 0.6681, FRI_CLOSE
I_TOKYO = I_OPEN + 12


def label(i):
    if i < I_OPEN:
        return f"Sat {clock(1.5 + 0.25 * i)}"
    return f"Mon {clock(3 + 0.25 * (i - I_OPEN))}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert label(I_OPEN) == "Mon 3:00 AM" and label(I_TOKYO) == "Mon 6:00 AM"
    assert GAP == 22 and all(c.h < MON_OPEN for c in C[:I_OPEN])
    assert C[I_SIGNAL].c < MON_OPEN and C[I_SIGNAL - 1].c > MON_OPEN, "first 30 min: close back below the open"
    assert STOP > C[I_OPEN].h and min(c.l for c in C[I_OPEN:]) > TARGET, "gap not fully filled — the plan, not a result"


validate()
FILL = round((MON_OPEN - min(c.l for c in C[I_OPEN:])) / PIP)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("weekend"):
        ch.zone(I_OPEN - 0.75, I_OPEN - 0.25, 0.6630, 0.6700, color=t.ink3, alpha=0.18, border=False)
        ch.label(I_OPEN - 0.5, 0.6698, "weekend", size=10, color=t.ink3, xanchor="center", yanchor="top")
        ch.hline(I_OPEN - 1.4, x_end, FRI_CLOSE, color=t.ink2, dash="dash")
        ch.label(-0.4, 0.6639, f"<b>Friday NY close {FRI_CLOSE:.4f}</b><br>(3:00 AM Saturday BD)", size=11,
                 color=t.ink2, yanchor="top")
    with ch.group("gap"):
        ch.zone(I_OPEN - 0.4, I_OPEN + 1.8, FRI_CLOSE, MON_OPEN, color=t.zone, alpha=0.22, dash="dot")
        ch.label(I_OPEN - 0.9, (FRI_CLOSE + MON_OPEN) / 2 + 0.0002, f"<b>Gap +{GAP} pips</b><br>Monday open {MON_OPEN:.4f}",
                 size=11, color=t.zone_text, xanchor="right", yanchor="middle")
    with ch.group("tokyo"):
        ch.zone(I_TOKYO - 0.5, x_end, 0.6630, 0.6700, color=t.zone, alpha=0.06, border=False)
        ch.label(I_TOKYO - 0.3, 0.6698, "<b>Tokyo opens</b> 6:00 AM BD", size=11, color=t.ink2, yanchor="top")
    with ch.group("position"):
        ch.position(I_SIGNAL + 0.6, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "AUD/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[label(i) for i in range(N)])
    with ch.group("signal"):
        ch.callout(I_SIGNAL, C[I_SIGNAL].h, 3.0, 0.6690, "3:30 AM: closes back below<br>the open → sell 0.6669",
                   xanchor="center")
    with ch.group("fill"):
        ch.label(I_TOKYO + 0.2, 0.6640, f"By 6:45 AM: {FILL} of {GAP} pips filled —<br>the full fill to 0.6650 hasn't come",
                 size=11, color=t.ink, yanchor="middle")
    ch.header("Forex Sessions · Sydney", "Sydney — the Weekly Open and Its Gap",
              "AUD/USD · 15-minute candles · Friday's last hour, then Monday from 3:00 AM BD (US summer)",
              key=[("■", t.zone, "Weekend gap"), ("┅", t.ink2, "Friday close")])
    ch.footnote("Synthetic candles built around the levels in the Sydney Session lesson")
    ch.caption()
    ticks = [0, 4, 6, 10, 14, 18]
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[0.6630, 0.6700], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [label(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Sydney Weekly Gap", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: gap {GAP} fill {FILL} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
