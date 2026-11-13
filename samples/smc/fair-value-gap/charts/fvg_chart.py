"""
Bullish FVG — the three-candle gap, the slow retrace into it, the 50% (CE) entry.

Candles: data/eurusd_15m_fvg.csv (synthetic), US summer, BD time.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-bullish-fvg-smc"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36
C = load_candles("eurusd_15m_fvg", DATA)
T1, T2, T3, T_FILL = "13:00", "13:15", "13:30", "17:00"
FVG = (by_time(C, T1).h, by_time(C, T3).l)
CE = round(sum(FVG) / 2, 5)
ENTRY, STOP, TARGET = 1.0878, 1.0866, 1.0950


def validate():
    c1, c2, c3 = (by_time(C, t) for t in (T1, T2, T3))
    assert FVG == (1.0870, 1.0885) and c3.l > c1.h, "gap between candle 1's high and candle 3's low"
    before = [c for c in C if c.t < c2.t]
    assert c2.bullish and c2.body >= 3 * sum(c.body for c in before) / len(before), "candle 2 is displacement"
    assert min(c.l for c in C) == 1.0850
    fill = by_time(C, T_FILL)
    assert fill.l <= ENTRY and all(c.l > ENTRY for c in C if c3.t < c.t < fill.t), "first touch of the CE"
    assert STOP < FVG[0] and max(c.h for c in C) < TARGET


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("candles123"):
        for tm, n in ((T1, "1"), (T2, "2"), (T3, "3")):
            c = by_time(C, tm)
            ch.label(at(tm), c.h + 0.0004 if n != "1" else c.l - 0.0004, f"<b>{n}</b>", size=12, xanchor="center",
                     yanchor="bottom" if n != "1" else "top", color=t.accent)
    with ch.group("fvg"):
        ch.zone(at(T1) - HALF, at(T_FILL) + HALF, *FVG, color=t.bull, alpha=0.20, dash="dash")
        ch.hline(at(T1) - HALF, at(T_FILL) + HALF, CE, color=t.ink3, dash="dot")
        ch.callout(at(T2), 1.0878, at("12:15"), 1.0905, "<b>Bullish FVG</b> 1.0870 – 1.0885:<br>candle 1's high to "
                   "candle 3's low", xanchor="center")
        ch.label(at("13:45"), CE, "CE (50%) 1.0878", size=11, color=t.ink3, yanchor="top")
    with ch.group("position"):
        ch.position(at(T_FILL) - HALF, at("18:45"), entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP,
                    unit_name="pips", fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 15m (synthetic)", price_fmt=".4f")
    with ch.group("retrace"):
        ch.callout(at("16:15"), 1.0884, at("15:15"), 1.0862, "slow retrace: the top of the gap is<br>touched, then "
                   "the CE", xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), 1.0876, at("17:45"), 1.0858, "<b>5 PM BD (NY)</b>: CE reached → buy 1.0878",
                   xanchor="center")
    ch.header("SMC · Fair Value Gap", "The Bullish FVG — Gap, Retrace, Entry at the 50%",
              "EUR/USD · 15-minute · London drop to 1.0850, three-candle rally · Times in BD (UTC+6), US summer",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish FVG")])
    ch.footnote("Synthetic candles built around the levels in the Fair Value Gap lesson")
    ch.caption()
    ch.axes(x_range=[at("11:45"), at("19:00")], y_range=[1.0842, 1.0962], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=60)
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish FVG", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: FVG {FVG} CE {CE} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
