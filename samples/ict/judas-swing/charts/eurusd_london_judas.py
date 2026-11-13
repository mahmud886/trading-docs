"""
London Judas swing — EUR/USD, 15-minute, US winter time.

Source: content/en/ict/judas-swing.mdx -> "Example 1: EUR/USD London Judas" (bullish bias, Asian range 1.0880–1.0900,
London opens 2:00 PM BD and drops to 1.0868, 2:45 PM BD bullish CHOCH, buy 1.0875 at the OB, stop 1.0862, target
1.0930). Those times match US winter time, when the London kill zone is 1–4 PM BD.
Candles in data/eurusd_15m_london_judas.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-london-judas"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36
ASIA_LOW, ASIA_HIGH, JUDAS_LOW = 1.0880, 1.0900, 1.0868
ENTRY, STOP, TARGET = 1.0875, 1.0862, 1.0930
T_DROP, T_LOW, T_OB, T_MSS, T_FILL, LOWER_HIGH = "14:00", "14:15", "14:30", "14:45", "15:45", 1.0889

CANDLES = load_candles("eurusd_15m_london_judas", DATA)


def validate(candles):
    asia = [c for c in candles if c.t < at("13:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH)
    drop, low, ob, mss, fill = (by_time(candles, tm) for tm in (T_DROP, T_LOW, T_OB, T_MSS, T_FILL))
    assert not drop.bullish and low.l == JUDAS_LOW == min(c.l for c in candles), "2 PM drop below the Asian low"
    assert not ob.bullish and ob.c <= ENTRY <= ob.o, "OB = last down-close candle; entry in its body"
    assert max(c.h for c in candles if at("13:15") <= c.t < drop.t) == LOWER_HIGH
    before = [c for c in candles if c.t < mss.t]
    avg = sum(c.body for c in before) / len(before)
    assert mss.c > LOWER_HIGH and mss.body >= 2 * avg, "2:45 PM CHOCH with displacement"
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if mss.t < c.t < fill.t)
    assert STOP < JUDAS_LOW
    return {"mss_body": mss.body / PIP, "avg_body": avg / PIP, "ob": (ob.c, ob.o)}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0938):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("17:45")
    with ch.group("asia") as shown:
        if shown:
            ch.fig.add_vrect(x0=at("13:00") - HALF, x1=at("16:00") - HALF, fillcolor=t.accent,
                             opacity=0.05 * ch.reveal.alpha("asia"), line_width=0, layer="below")
        ch.zone(at("10:00") - HALF, at("13:00") - HALF, ASIA_LOW, ASIA_HIGH, color=t.ink3, alpha=0.10, dash="dot")
        ch.label(at("10:00") - HALF, ASIA_HIGH + 0.5 * PIP, "<b>Asian range</b> 1.0880 – 1.0900 · until 1 PM BD "
                 "(winter)", size=12, yanchor="bottom")
        ch.label(at("13:00") - HALF, y_top - 0.8 * PIP, "<b>London kill zone</b> 1–4 PM BD (US winter)", size=12,
                 color=t.accent, yanchor="top", xshift=4)
    with ch.group("position"):
        ch.zone(at(T_OB) - HALF, box_x0, *STATS["ob"], color=t.bull, alpha=0.18, dash="dash")
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")
    with ch.group("judas"):
        ch.hline(at("11:15"), at(T_LOW) + HALF, ASIA_LOW, color=t.bear_text, width=1.2)
        ch.callout(at(T_LOW), JUDAS_LOW, at("12:15"), 1.0860,
                   f"<span style='color:{t.accent}'>①</span> <b>2:00 PM BD · Judas swing</b>: London drops through "
                   "the Asian low to 1.0868<br>— sellers join the breakdown, longs' stops are hit", xanchor="center")
    with ch.group("mss"):
        ch.hline(at("13:15"), at(T_MSS) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.callout(at(T_MSS), 1.0890, at("12:15"), 1.0912,
                   f"<span style='color:{t.accent}'>②</span> <b>2:45 PM BD · CHOCH</b>: {STATS['mss_body']:.0f}-pip "
                   f"displacement (avg {STATS['avg_body']:.1f})<br>closes above the 1.0889 lower high — the true move "
                   "starts", xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("16:50"), 1.0858,
                   f"<span style='color:{t.accent}'>③</span> back to the <b style='color:{t.bull_text}'>bullish OB"
                   "</b> → buy 1.0875", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("16:45") + HALF, 1.0912, at("17:30"), TARGET - 1.5 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("16:30"), 1.0922, xanchor="right",
                      align="right")
    ch.header("ICT · Judas Swing", "The Judas Swing — London's False Move Down on a Bullish Day",
              "EUR/USD · 15-minute · daily bias bullish · Times in Bangladesh time (BD, UTC+6), US winter time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT Judas Swing lesson")
    ch.caption()
    ch.axes(x_range=[at("09:45"), at("18:00")], y_range=[1.0852, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=60)
    return ch.fig


def main():
    paths = save(NAME, build, "London Judas Swing", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
