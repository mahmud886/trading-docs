"""
New York continuation of the London move — EUR/USD, 15-minute, London into NY AM.

Source: content/en/ict/new-york-open.mdx -> "Example 1: London Continuation — EUR/USD" (London sweeps 1.0850 and rallies
to 1.0890 leaving a 15m bullish FVG; NY retraces to 1.0873 and reaches the CE 1.0875 at 6:15 PM BD; buy 1.0875, stop
1.0862, target BSL 1.0940). Candles in data/eurusd_15m_ny_continuation.csv are synthetic (US summer time).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-ny-continuation"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36
LONDON_LOW, LONDON_HIGH, CE = 1.0850, 1.0890, 1.0875
ENTRY, STOP, TARGET = 1.0875, 1.0862, 1.0940
T_SWEEP, T_C1, T_C2, T_C3, T_HIGH, T_FILL = "12:15", "12:45", "13:00", "13:15", "13:45", "18:15"

CANDLES = load_candles("eurusd_15m_ny_continuation", DATA)


def validate(candles):
    sweep, c1, c2, c3, high, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_C1, T_C2, T_C3, T_HIGH, T_FILL))
    assert sweep.l == LONDON_LOW == min(c.l for c in candles), "London sweep low 1.0850"
    assert high.h == LONDON_HIGH == max(c.h for c in candles if c.t < at("17:00")), "London high 1.0890"
    assert c2.bullish and c1.h < c3.l and (c1.h + c3.l) / 2 == CE, "bullish FVG with CE 1.0875"
    london = [c for c in candles if c3.t < c.t < at("17:00")]
    assert all(c.l > c3.l for c in london), "the FVG is untouched until NY"
    assert fill.l == 1.0873 and fill.l <= ENTRY and all(c.l > ENTRY for c in candles if at("17:00") <= c.t < fill.t)
    assert STOP < c1.h
    return {"fvg": (c1.h, c3.l)}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0948):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("20:15")
    with ch.group("sessions") as shown:
        if shown:
            a = ch.reveal.alpha("sessions")
            ch.fig.add_vrect(x0=at("12:00") - HALF, x1=at("15:00") - HALF, fillcolor=t.accent, opacity=0.05 * a,
                             line_width=0, layer="below")
            ch.fig.add_vrect(x0=at("17:00") - HALF, x1=at("20:00") - HALF, fillcolor=t.zone, opacity=0.06 * a,
                             line_width=0, layer="below")
        ch.label(at("12:00") - HALF, y_top - 0.8 * PIP, "<b>London KZ</b> 12–3 PM BD", size=12, color=t.accent,
                 yanchor="top", xshift=4)
        ch.label(at("17:00") - HALF, y_top - 0.8 * PIP, "<b>NY AM KZ</b> 5–8 PM BD", size=12, color=t.zone_text,
                 yanchor="top", xshift=4)
    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, *STATS["fvg"])
        ch.hline(at(T_C1) - HALF, box_x0, CE, color=t.zone, dash="dash")
        ch.label(at("14:00"), STATS["fvg"][0] - 0.4 * PIP, f"<b style='color:{t.zone_text}'>London's bullish FVG</b>"
                 " 1.0871 – 1.0879 · CE 1.0875", size=12, yanchor="top")
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")
    with ch.group("london"):
        ch.callout(at(T_SWEEP), LONDON_LOW, at("14:00"), 1.0846,
                   f"<span style='color:{t.accent}'>①</span> <b>London</b>: sweeps the Asian low to 1.0850, "
                   "rallies to 1.0890", xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), 1.0873, at("16:45"), 1.0856,
                   f"<span style='color:{t.accent}'>②</span> <b>NY AM, 6:15 PM BD</b>: pullback into London's FVG "
                   "→ buy the CE 1.0875", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("19:15") + HALF, 1.0911, at("20:00"), TARGET - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("19:00"), 1.0925, xanchor="right",
                      align="right")
    ch.header("ICT · New York Open", "NY Continuation — Join London's Move on the Pullback",
              "EUR/USD · 15-minute · London → NY AM · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT New York Open lesson")
    ch.caption()
    ch.axes(x_range=[at("10:45"), at("20:30")], y_range=[1.0840, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=60)
    return ch.fig


def main():
    paths = save(NAME, build, "NY Continuation", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
