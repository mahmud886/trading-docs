"""
NY AM Silver Bullet — EUR/USD, 5-minute, US summer time.

Source: content/en/ict/silver-bullet.mdx -> "Example 1: NY AM Silver Bullet — EUR/USD Buy" (8:15 PM BD bullish
displacement, FVG 1.0882–1.0890, buy 1.0886 at the CE, stop 1.0875, target 1.0930).
Candles in data/eurusd_5m_ny_am_sb.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-ny-am-silver-bullet"
PIP = 0.0001
HALF = timedelta(minutes=5) * 0.36
FVG_LO, FVG_HI, ENTRY, STOP, TARGET, SWING_LOW = 1.0882, 1.0890, 1.0886, 1.0875, 1.0930, 1.0876
T_DISP, T_FILL = "20:15", "20:40"

CANDLES = load_candles("eurusd_5m_ny_am_sb", DATA)


def validate(candles):
    disp, fill = by_time(candles, T_DISP), by_time(candles, T_FILL)
    i = candles.index(disp)
    assert (candles[i - 1].h, candles[i + 1].l) == (FVG_LO, FVG_HI), "bullish FVG between candles i-1 and i+1"
    assert at("20:00") <= disp.t < at("21:00"), "the FVG forms inside the 8–9 PM BD window"
    before = candles[:i]
    avg = sum(c.body for c in before) / len(before)
    assert disp.bullish and disp.body >= 3 * avg, "displacement"
    assert ENTRY == round((FVG_LO + FVG_HI) / 2, 4)
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if disp.t < c.t < fill.t)
    assert min(c.l for c in candles if c.t <= disp.t and c.t >= at("20:00")) == SWING_LOW > STOP
    assert max(c.h for c in candles) < TARGET
    return {"body": disp.body / PIP, "avg": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("window") as shown:
        if shown:
            ch.fig.add_vrect(x0=at("20:00") - HALF, x1=at("21:00") - HALF, fillcolor=t.accent,
                             opacity=0.07 * ch.reveal.alpha("window"), line_width=0, layer="below")
        ch.label(at("20:00") - HALF, 1.0934, "<b>NY AM Silver Bullet</b><br>8:00 – 9:00 PM BD (US summer)",
                 size=12, color=t.accent, yanchor="top", xshift=4)
    with ch.group("position"):
        box_x0, box_x1 = at(T_FILL) - HALF, at("21:20")
        ch.zone(at("20:10") - HALF, box_x0, FVG_LO, FVG_HI, color=t.bull, alpha=0.18, dash="dash")
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 5m (synthetic)", price_fmt=".4f")
    with ch.group("disp"):
        ch.callout(at(T_DISP), 1.0895, at("19:45"), 1.0912,
                   f"<b>8:15 PM BD · displacement</b>: {STATS['body']:.0f}-pip candle<br>(avg {STATS['avg']:.1f}) "
                   "leaves an FVG 1.0882 – 1.0890", xanchor="center")
    with ch.group("swing"):
        ch.callout(at("20:05"), SWING_LOW, at("19:45"), 1.0868, "swing low 1.0876 → stop 1.0875 below it",
                   xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("20:55"), 1.0870,
                   f"Limit at the <b style='color:{t.bull_text}'>CE 1.0886</b> fills", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("21:05") + HALF, 1.0914, at("21:15"), TARGET - 1 * PIP,
                      "Hypothetical path<br>— a scenario,<br>not a result", at("20:47"), 1.0922, xanchor="center")
    ch.header("ICT · Silver Bullet", "NY AM Silver Bullet — the First FVG in the Window",
              "EUR/USD · 5-minute · daily bias bullish · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Silver Bullet lesson")
    ch.caption()
    ch.axes(x_range=[at("19:25"), at("21:25")], y_range=[1.0862, 1.0938], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "NY AM Silver Bullet", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
