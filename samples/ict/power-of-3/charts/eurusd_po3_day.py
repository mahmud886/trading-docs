"""
A bullish Power of 3 day — EUR/USD, 30-minute, US summer time.

Source: content/en/ict/power-of-3.mdx -> "Example 1: EUR/USD Bullish PO3" (Asian range 1.0850–1.0870, London sweeps
the Asian low to 1.0838, bullish CHOCH, buy 1.0845 at the OB, stop 1.0830, target 1.0920).
Candles in data/eurusd_30m_po3_day.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-po3-day"
PIP = 0.0001
HALF = timedelta(minutes=30) * 0.36
ASIA_LOW, ASIA_HIGH, SWEEP_LOW = 1.0850, 1.0870, 1.0838
ENTRY, STOP, TARGET = 1.0845, 1.0830, 1.0920
T_LOW, T_OB, T_MSS, T_FILL, LOWER_HIGH = "12:30", "13:00", "13:30", "14:30", 1.0856

CANDLES = load_candles("eurusd_30m_po3_day", DATA)


def validate(candles):
    asia = [c for c in candles if c.t < at("12:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH)
    low, ob, mss, fill = (by_time(candles, tm) for tm in (T_LOW, T_OB, T_MSS, T_FILL))
    assert low.l == SWEEP_LOW == min(c.l for c in candles), "London sweep is the low of the day"
    assert not ob.bullish and ob.c <= ENTRY <= ob.o, "OB = last down-close candle; entry in its body"
    assert max(c.h for c in candles if at("12:00") <= c.t < mss.t) == LOWER_HIGH
    before = [c for c in candles if c.t < mss.t]
    avg = sum(c.body for c in before) / len(before)
    assert mss.c > LOWER_HIGH and mss.body >= 2 * avg, "CHOCH with displacement"
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if mss.t < c.t < fill.t)
    assert STOP < SWEEP_LOW and max(c.h for c in candles) < TARGET
    return {"mss_body": mss.body / PIP, "avg_body": avg / PIP, "ob": (ob.c, ob.o)}


STATS = validate(CANDLES)
PHASES = (("06:00", "12:00", "① Accumulation", "Asian range"), ("12:00", "15:00", "② Manipulation",
                                                                    "London kill zone"),
          ("17:00", "20:00", "③ Distribution", "NY AM kill zone"))


def build(t, reveal: Reveal | None = None, *, y_top=1.0932):
    ch = Chart(t, reveal)
    for i, (a, b, name, sess) in enumerate(PHASES):
        group = ("asia", "manip", "dist")[i]
        with ch.group(group) as shown:
            if shown:
                ch.fig.add_vrect(x0=at(a) - HALF, x1=at(b) - HALF, fillcolor=(t.ink3, t.bear, t.bull)[i],
                                 opacity=0.06 * ch.reveal.alpha(group), line_width=0, layer="below")
            ch.label(at(a) - HALF, y_top - (5 if i == 0 else 0.8) * PIP, f"<b>{name}</b><br>{sess}", size=12, yanchor="top", xshift=4,
                     color=(t.ink2, t.bear_text, t.bull_text)[i])
    with ch.group("asia"):
        ch.zone(at("06:00") - HALF, at("12:00") - HALF, ASIA_LOW, ASIA_HIGH, color=t.ink3, alpha=0.10, dash="dot")
        ch.label(at("06:00") - HALF, ASIA_LOW - 0.6 * PIP, "Asian range 1.0850 – 1.0870 · 6 AM – 12 PM BD",
                 size=12, yanchor="top")
    with ch.group("position"):
        box_x0, box_x1 = at(T_FILL) - HALF, at("21:00")
        ch.zone(at(T_OB) - HALF, box_x0, *STATS["ob"], color=t.bull, alpha=0.18, dash="dash")
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 30m (synthetic)", price_fmt=".4f")
    with ch.group("manip"):
        ch.hline(at("07:30"), at(T_LOW) + HALF, ASIA_LOW, color=t.bear_text, width=1.2)
        ch.callout(at(T_LOW), SWEEP_LOW, at("09:30"), 1.0836,
                   "<b>12:30 PM BD</b>: London takes the Asian low<br>to 1.0838 — the false move (Judas swing)",
                   xanchor="center")
    with ch.group("mss"):
        ch.hline(at("12:00"), at(T_MSS) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.callout(at(T_MSS), 1.0866, at("11:00"), 1.0884,
                   f"<b>1:30 PM BD · CHOCH</b>: {STATS['mss_body']:.0f}-pip displacement<br>(avg "
                   f"{STATS['avg_body']:.1f}) closes above 1.0856", xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("16:00"), 1.0834,
                   f"Back into the <b style='color:{t.bull_text}'>bullish OB</b> → buy 1.0845", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("19:30") + HALF, 1.0910, at("20:30"), TARGET - 1 * PIP,
                      "Hypothetical path<br>— a scenario,<br>not a result", at("19:55"), 1.0893)
    ch.header("ICT · Power of 3", "Power of 3 — Accumulation, Manipulation, Distribution in One Day",
              "EUR/USD · 30-minute · daily bias bullish · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT Power of 3 lesson")
    ch.caption()
    ch.axes(x_range=[at("05:30"), at("21:15")], y_range=[1.0822, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=120)
    return ch.fig


def main():
    paths = save(NAME, build, "Power of 3 Day", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
