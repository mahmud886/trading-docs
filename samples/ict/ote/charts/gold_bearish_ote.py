"""
Bearish OTE — Gold (XAU/USD), 5-minute: a retracement into 62–79 % of the drop, at a bearish FVG.

Source: content/en/ict/ote.mdx -> "Example 2: Gold Bearish OTE" (drop 2,048 → 2,020, OTE 2,037–2,042, sweet spot
2,040, bearish FVG 2,038–2,042, sell 2,040, stop 2,049, target 2,005). The lesson gives no session; times are
placeholders. Candles in data/xauusd_5m_bearish_ote.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save
from fib import ladder, retrace

NAME = "gold-bearish-ote"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
SWING_HIGH, SWING_LOW = 2048.0, 2020.0
OTE_LOW, OTE_HIGH, SWEET = 2037.0, 2042.0, 2040.0
FVG_LOW, FVG_HIGH = 2038.0, 2042.0
ENTRY, STOP, TARGET = 2040.0, 2049.0, 2005.0

# --- Defined by the synthetic candles ---
HIGHER_LOW = 2043.0
T_HL, T_HIGH, T_C1, T_C2, T_C3, T_LOW, T_FILL = "18:45", "18:50", "18:55", "19:00", "19:05", "19:15", "19:45"

CANDLES = load_candles("xauusd_5m_bearish_ote", DATA)


def validate(candles):
    hl, high, c1, c2, c3, low, fill = (by_time(candles, tm) for tm in (T_HL, T_HIGH, T_C1, T_C2, T_C3, T_LOW,
                                                                         T_FILL))
    assert high.h == SWING_HIGH == max(c.h for c in candles) and low.l == SWING_LOW, "drop 2,048 → 2,020"
    for pct, quoted in ((0.62, OTE_LOW), (0.79, OTE_HIGH), (0.705, SWEET)):
        assert round(retrace(SWING_HIGH, SWING_LOW, pct)) == quoted, f"{pct:.1%} level matches the lesson"
    before = [c for c in candles if c.t < c2.t]
    avg = sum(c.body for c in before) / len(before)
    assert hl.l == HIGHER_LOW and not c2.bullish and c2.c < HIGHER_LOW and c2.body >= 2 * avg, "MSS + displacement"
    assert (c1.l, c3.h) == (FVG_HIGH, FVG_LOW) and (FVG_LOW + FVG_HIGH) / 2 == ENTRY, "FVG inside the OTE, CE entry"
    assert all(c.h < ENTRY for c in candles if low.t < c.t < fill.t) and fill.h >= ENTRY, "first touch fills"
    assert STOP > SWING_HIGH
    return {"c2_body": c2.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("18:25"), at(T_FILL) - HALF, at("20:15")
    x_label = at("20:38")

    ladder(ch, SWING_HIGH, SWING_LOW, at(T_HIGH), x_label, ",.1f", zone_x0=at(T_LOW))
    ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=False)
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")

    ch.hline(x0, box_x0, TARGET, color=t.bear_text, width=1.4)
    ch.label(x0, TARGET + 0.5, f"<b style='color:{t.bear_text}'>SSL 2,005</b> · the target", yanchor="bottom",
             xshift=6)
    ch.label(at(T_HIGH), SWING_HIGH + 0.5, "swing high 2,048", size=11, bold=True, xanchor="center",
             yanchor="bottom")
    ch.label(at(T_LOW), SWING_LOW - 0.5, "swing low 2,020", size=11, bold=True, xanchor="center", yanchor="top")
    ch.callout(at(T_C2), 2033.5, at("18:53"), 2015.5,
               f"<span style='color:{t.accent}'>①</span> <b>Expansion</b>: {STATS['c2_body']:.1f}-pt displacement "
               f"(avg {STATS['avg_body']:.1f})<br>closes below the 2,043 higher low → MSS · leaves "
               f"<b style='color:{t.zone_text}'>FVG 2,038 – 2,042</b>", xanchor="center", yanchor="top")
    ch.callout(at(T_FILL), 2040.6, at("19:20"), 2045.5,
               f"<span style='color:{t.accent}'>②</span> <b>Retrace into the OTE</b>: the FVG CE (2,040) sits on "
               "the 70.5 % level → sell", xanchor="center")
    ch.projection(at("20:00") + HALF, 2020.0, at("20:10"), TARGET + 1.5,
                  "Hypothetical path<br>— a scenario, not a result", at("19:55"), 2012, xanchor="right", align="right")

    ch.header("ICT · Optimal Trade Entry", "Bearish OTE — Sell the 62–79 % Retracement at an FVG",
              "Gold (XAU/USD) · 5-minute · session not given in the lesson (times are placeholders)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.accent, "OTE 62–79 %"),
                   ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT OTE lesson")
    ch.caption()
    ch.axes(x_range=[at("18:20"), at("20:42")], y_range=[2000, 2053], y_dtick=5, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Gold Bearish OTE", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
