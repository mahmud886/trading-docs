"""
London kill zone setup — EUR/USD, 15-minute: Asian range, London sweep of the Asian low, MSS, order-block entry.

Source: content/en/ict/ict-kill-zones.mdx -> "Example 1: London KZ — EUR/USD" (Asian range 1.0870–1.0885, 12:15 PM BD
sweep to 1.0867, 12:30 PM BD bullish MSS, buy 1.0872 at the bullish OB, SL 1.0864, TP 1.0910).
Candles in data/eurusd_15m_london_kz.csv are synthetic (US summer time).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-london-kz"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
ASIA_LOW, ASIA_HIGH, SWEEP_LOW = 1.0870, 1.0885, 1.0867
ENTRY, STOP, TARGET = 1.0872, 1.0864, 1.0910
T_SWEEP, T_MSS = "12:15", "12:30"

# --- Defined by the synthetic candles ---
LOWER_HIGH, T_LH, T_FILL = 1.0879, "11:15", "13:30"

CANDLES = load_candles("eurusd_15m_london_kz", DATA)


def validate(candles):
    asia = [c for c in candles if c.t < at("12:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH), "Asian range 1.0870–1.0885"
    sweep, mss, fill = by_time(candles, T_SWEEP), by_time(candles, T_MSS), by_time(candles, T_FILL)
    assert sweep.l == SWEEP_LOW and sweep.c > ASIA_LOW, "12:15 sweep of the Asian low, close back inside"
    assert not sweep.bullish and sweep.c <= ENTRY <= sweep.o, "bullish OB = the sweep candle; entry in its body"
    lh = [c for c in candles if at("11:00") <= c.t < sweep.t]
    assert max(c.h for c in lh) == LOWER_HIGH == by_time(candles, T_LH).h
    avg = sum(c.body for c in candles if c.t < mss.t) / len([c for c in candles if c.t < mss.t])
    assert mss.bullish and mss.c > LOWER_HIGH and mss.body >= 2 * avg, "12:30 MSS with displacement"
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if mss.t < c.t < fill.t), "first return fills"
    assert STOP < SWEEP_LOW
    return {"mss_body": mss.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0918):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("16:00")
    sweep = by_time(CANDLES, T_SWEEP)

    with ch.group("zones") as shown:
        if shown:
            ch.fig.add_vrect(x0=at("12:00") - HALF, x1=at("15:00") - HALF, fillcolor=t.accent,
                             opacity=0.06 * ch.reveal.alpha("zones"), line_width=0, layer="below")
        ch.label(at("12:00") - HALF, y_top - 1.2 * PIP, "<b>London kill zone</b> · 12–3 PM BD", size=12,
                 color=t.accent, yanchor="top", xshift=4)
        ch.zone(at("06:00") - HALF, at("12:00") - HALF, ASIA_LOW, ASIA_HIGH, color=t.ink3, alpha=0.10, dash="dot")
        ch.label(at("06:00") - HALF, ASIA_HIGH + 0.6 * PIP, "<b>Asian range</b> 1.0870 – 1.0885 · 6 AM – 12 PM BD",
                 size=12, yanchor="bottom")
    with ch.group("position"):
        ch.zone(at(T_SWEEP) - HALF, box_x0, sweep.c, sweep.o, color=t.bull, alpha=0.16, dash="dash")
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("sweep"):
        ch.callout(at(T_SWEEP), SWEEP_LOW, at("10:00"), 1.0860,
                   f"<span style='color:{t.accent}'>①</span> <b>12:15 PM BD</b>: London takes the Asian low → 1.0867",
                   xanchor="center")
    with ch.group("mss"):
        ch.hline(at(T_LH), at(T_MSS) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.callout(at(T_MSS), 1.0886, at("10:15"), 1.0900,
                   f"<span style='color:{t.accent}'>②</span> <b>12:30 PM BD</b>: {STATS['mss_body']:.0f}-pip "
                   f"displacement (avg {STATS['avg_body']:.1f})<br>closes above the 1.0879 lower high → MSS",
                   xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("14:10"), 1.0858,
                   f"<span style='color:{t.accent}'>③</span> <b>1:30 PM BD</b>: back into the "
                   f"<b style='color:{t.bull_text}'>bullish OB</b><br>(the sweep candle) → buy 1.0872", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("14:30") + HALF, 1.0899, at("15:40"), TARGET - 1.5 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("14:15"), 1.0905, xanchor="right",
                      align="right")

    ch.header("ICT · Kill Zones", "London Kill Zone — Sweep the Asian Range, Then Reverse",
              "EUR/USD · 15-minute · US summer time · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.accent, "Kill zone"),
                   ("■", t.bull, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT Kill Zones lesson")
    ch.caption()
    ch.axes(x_range=[at("05:45"), at("16:15")], y_range=[1.0856, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=120)
    return ch.fig


def main():
    paths = save(NAME, build, "London Kill Zone — EUR/USD", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
