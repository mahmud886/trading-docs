"""
Bullish Order Block — EUR/USD, 15-minute (the approved prototype, ported to the v2 design).

Source: content/en/smc/order-blocks.mdx -> "Real Example — EUR/USD Bullish OB".
Levels are quoted from the guide; candles in data/eurusd_15m_bullish_ob.csv are synthetic.
"""

from chartkit import BAR, Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "bullish-order-block-eurusd"
PIP = 0.0001

# --- Levels quoted from the guide ---
OB_LOW, OB_HIGH = 1.0855, 1.0862
DISPLACEMENT_HIGH = 1.0910
PULLBACK_LOW = 1.0860
ENTRY, STOP, TARGET = 1.0861, 1.0850, 1.0920

# --- Levels defined by the synthetic candles ---
LOWER_HIGH = 1.0896
PRIOR_HIGH = 1.0920

T_PRIOR_HIGH, T_LOWER_HIGH, T_OB, T_DISP, T_RETEST = "10:30", "12:15", "13:30", "13:45", "15:30"
HALF = BAR * 0.36


def validate(candles):
    ob, disp, retest = by_time(candles, T_OB), by_time(candles, T_DISP), by_time(candles, T_RETEST)
    assert not ob.bullish and (ob.l, ob.h) == (OB_LOW, OB_HIGH), "OB = last bearish candle, range from the guide"
    assert disp.bullish and disp.c > LOWER_HIGH, "displacement closes above the last lower high"
    assert max(c.h for c in candles if disp.t < c.t < retest.t) == DISPLACEMENT_HIGH
    assert retest.l == PULLBACK_LOW and OB_LOW <= retest.l <= OB_HIGH, "retest tags the OB"
    assert retest.l <= ENTRY <= retest.h and STOP < OB_LOW and TARGET == PRIOR_HIGH
    before = [c.body for c in candles if c.t < disp.t]
    avg = sum(before) / len(before)
    assert disp.body >= 2 * avg, "displacement rule: body >= 2x average"
    assert OB_HIGH < (OB_LOW + DISPLACEMENT_HIGH) / 2, "bullish OB must sit in discount"
    return {"disp_body": disp.body / PIP, "avg_body": avg / PIP}


CANDLES = load_candles("eurusd_15m_bullish_ob")
STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_RETEST) - HALF, at("17:45")

    with ch.group("ob"):
        ch.zone(at(T_OB) - HALF, box_x0, OB_LOW, OB_HIGH)
        ch.label(at(T_OB) - HALF, (OB_LOW + OB_HIGH) / 2 - 1.2 * PIP,
                 f"<b style='color:{t.zone_text}'>Bullish Order Block 1.0855 – 1.0862</b><br>"
                 "last bearish candle before displacement · in discount",
                 size=12.5, xanchor="right", align="right", xshift=-10)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(box_x1, STOP - 4.4 * PIP, "Invalidation: 15m close below 1.0850", color=t.ink3, size=12,
                 xanchor="right", yanchor="top")
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("structure"):
        ch.hline(at(T_PRIOR_HIGH), box_x0, PRIOR_HIGH)
        ch.label(at("10:45"), PRIOR_HIGH + 1.6 * PIP, "Prior swing high 1.0920 · buy-side liquidity",
                 yanchor="bottom")
        ch.hline(at(T_LOWER_HIGH), at(T_DISP), LOWER_HIGH, color=t.ink2, dash="dash")
        ch.label(at(T_LOWER_HIGH), LOWER_HIGH + 1.0 * PIP, "Last lower high 1.0896", yanchor="bottom", xshift=-6)
        ch.label(at(T_DISP) - HALF, LOWER_HIGH + 1.0 * PIP, "CHOCH", color=t.accent, xanchor="right",
                 yanchor="bottom", bold=True, xshift=-6)
    with ch.group("displacement"):
        ch.callout(at(T_DISP) - HALF, 1.0904, at("13:00"), 1.09085,
                   f"<b>Displacement</b> · {STATS['disp_body']:.0f}-pip body vs {STATS['avg_body']:.1f}-pip average"
                   "<br>closes above 1.0896 → structure shift", xanchor="right", align="right")
    with ch.group("retest"):
        ch.callout(at(T_RETEST), PULLBACK_LOW, at("14:40"), 1.08515,
                   "<b>Retest of the OB (low 1.0860)</b><br>5m bullish engulfing → long entry", yanchor="top")
    with ch.group("projection"):
        ch.projection(at("16:00") + HALF, 1.0881, at("17:30"), TARGET - 2 * PIP,
                      "Hypothetical path to target<br>— a scenario, not a result", at("16:30"), 1.0887,
                      yanchor="top")

    ch.header("Smart Money Concepts · Order Blocks", "Bullish Order Block — Retest Entry After Displacement",
              "EUR/USD · 15-minute · London session · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the Order Blocks guide")
    ch.caption()
    ch.axes(x_range=[at("09:45"), at("18:00")], y_range=[1.08405, 1.09305], y_dtick=0.0010, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish Order Block — EUR/USD")
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
