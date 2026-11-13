"""
Bullish London open — EUR/USD, 5-minute: the Judas swing below the Asian low, a 5m MSS, and the order-block entry.

Source: content/en/ict/london-open.mdx -> "Example 1: Bullish London Open — EUR/USD" (Asian range 1.0860–1.0878, 12:20 PM
BD drop to 1.0854, 12:35 PM BD 5m MSS, buy 1.0862 at the bullish OB, stop 1.0850, target 1.0920).
Candles in data/eurusd_5m_london_bull.csv are synthetic (US summer time).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-london-open-bull"
PIP = 0.0001
HALF = timedelta(minutes=5) * 0.36
ASIA_LOW, ASIA_HIGH, SWEEP_LOW = 1.0860, 1.0878, 1.0854
ENTRY, STOP, TARGET = 1.0862, 1.0850, 1.0920
T_SWEEP, T_OB, T_MSS, T_FILL = "12:20", "12:25", "12:35", "12:55"
LOWER_HIGH = 1.0868

CANDLES = load_candles("eurusd_5m_london_bull", DATA)


def validate(candles):
    asia = [c for c in candles if c.t < at("12:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH)
    sweep, ob, mss, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_OB, T_MSS, T_FILL))
    assert sweep.l == SWEEP_LOW == min(c.l for c in candles), "Judas swing low 1.0854"
    assert not ob.bullish and ob.c <= ENTRY <= ob.o, "OB: last down-close candle; entry in its body"
    assert all(c.bullish for c in candles if ob.t < c.t <= mss.t)
    assert max(c.h for c in candles if at("12:00") <= c.t < sweep.t) == LOWER_HIGH
    before = [c for c in candles if c.t < mss.t]
    avg = sum(c.body for c in before) / len(before)
    assert mss.c > LOWER_HIGH and mss.body >= 2 * avg, "5m MSS with displacement"
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if mss.t < c.t < fill.t)
    assert STOP < SWEEP_LOW
    return {"mss_body": mss.body / PIP, "avg_body": avg / PIP, "ob": (ob.c, ob.o)}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("13:50")
    ch.fig.add_vrect(x0=at("12:00") - HALF, x1=at("13:55"), fillcolor=t.accent, opacity=0.05, line_width=0,
                     layer="below")
    ch.zone(at("11:00") - HALF, at("12:00") - HALF, ASIA_LOW, ASIA_HIGH, color=t.ink3, alpha=0.10, dash="dot")
    ch.label(at("11:00") - HALF, ASIA_HIGH + 0.5 * PIP, "<b>Asian range</b> 1.0860 – 1.0878", size=12,
             yanchor="bottom")
    ch.label(at("12:00"), 1.0926, "<b>London kill zone</b> from 12 PM BD", size=12, color=t.accent, yanchor="top")
    ch.zone(at(T_OB) - HALF, box_x0, *STATS["ob"], color=t.bull, alpha=0.18, dash="dash")
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips", fmt=".4f",
                long=True)
    ch.candles(CANDLES, "EUR/USD 5m (synthetic)", price_fmt=".4f")
    ch.hline(at("11:25"), at(T_SWEEP) + HALF, ASIA_LOW, color=t.bear_text, width=1.2)
    ch.hline(at("12:00"), at(T_MSS) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
    ch.callout(at(T_SWEEP), SWEEP_LOW, at("11:35"), 1.0846,
               f"<span style='color:{t.accent}'>①</span> <b>12:20 PM BD · Judas swing</b>: below the Asian low to "
               "1.0854", xanchor="center")
    ch.callout(at(T_MSS), 1.0874, at("11:40"), 1.0900,
               f"<span style='color:{t.accent}'>②</span> <b>12:35 PM BD</b>: {STATS['mss_body']:.0f}-pip "
               f"displacement (avg {STATS['avg_body']:.1f})<br>closes above the 1.0868 lower high → 5m MSS",
               xanchor="center")
    ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("13:25"), 1.0843,
               f"<span style='color:{t.accent}'>③</span> back into the <b style='color:{t.bull_text}'>bullish OB"
               "</b> → buy 1.0862", xanchor="center")
    ch.projection(at("13:15") + HALF, 1.0897, at("13:42"), TARGET - 1.5 * PIP,
                  "Hypothetical path<br>— a scenario, not a result", at("13:10"), 1.0908, xanchor="right",
                  align="right")
    ch.header("ICT · London Open", "Bullish London Open — Fade the Judas Swing Below Asia",
              "EUR/USD · 5-minute · daily bias bullish · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT London Open lesson")
    ch.caption()
    ch.axes(x_range=[at("10:55"), at("14:00")], y_range=[1.0840, 1.0930], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish London Open", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
