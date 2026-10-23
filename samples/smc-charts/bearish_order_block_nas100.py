"""
Bearish Order Block — NAS100, 15-minute.

Source: content/en/smc/order-blocks.mdx -> "Example 2: NAS100 — Bearish OB".
Levels are quoted from the guide; candles in data/nas100_15m_bearish_ob.csv are synthetic.
"""

from chartkit import BAR, Chart, Reveal, at, by_time, is_engulfing, levels, load_candles, save

NAME = "bearish-order-block-nas100"
PT = 1.0

# --- Levels quoted from the guide ---
OB_LOW, OB_HIGH = 18380.0, 18420.0
CRASH_LOW = 18250.0
RETRACE_HIGH = 18400.0
ENTRY, STOP, TARGET = 18395.0, 18430.0, 18280.0

# --- Levels defined by the synthetic candles ---
HIGHER_LOW = 18288.0  # last higher low of the NY-open rally; broken by the crash -> CHOCH

T_HL, T_OB, T_DISP, T_BREAK = "19:00", "20:15", "20:30", "20:45"
T_RETRACE, T_ENGULF, T_FILL = "22:00", "22:15", "22:30"
HALF = BAR * 0.36


def validate(candles):
    ob, disp, brk = by_time(candles, T_OB), by_time(candles, T_DISP), by_time(candles, T_BREAK)
    retrace, engulf, fill = by_time(candles, T_RETRACE), by_time(candles, T_ENGULF), by_time(candles, T_FILL)
    assert ob.bullish and (ob.l, ob.h) == (OB_LOW, OB_HIGH), "OB = last bullish candle, range from the guide"
    assert not disp.bullish and not brk.bullish
    before = [c.body for c in candles if c.t < disp.t]
    avg = sum(before) / len(before)
    assert disp.body >= 2 * avg, "displacement rule: body >= 2x average"
    assert brk.c < HIGHER_LOW and brk.l == CRASH_LOW, "crash closes below the higher low and prints 18,250"
    assert retrace.h == RETRACE_HIGH and OB_LOW <= retrace.h <= OB_HIGH, "retrace tags the OB at 18,400"
    assert is_engulfing(retrace, engulf) and not engulf.bullish, "15m bearish engulfing"
    assert fill.l <= ENTRY <= fill.h and fill.t > engulf.t, "entry filled after confirmation"
    assert STOP > OB_HIGH and TARGET > CRASH_LOW
    assert OB_LOW > (CRASH_LOW + OB_HIGH) / 2, "bearish OB must sit in premium"
    return {"disp_body": disp.body, "avg_body": avg}


CANDLES = load_candles("nas100_15m_bearish_ob")
STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("23:59")

    with ch.group("ob"):
        ch.zone(at(T_OB) - HALF, box_x0, OB_LOW, OB_HIGH)
        ch.label(at(T_OB) - HALF, (OB_LOW + OB_HIGH) / 2,
                 f"<b style='color:{t.zone_text}'>Bearish Order Block 18,380 – 18,420</b><br>"
                 "last bullish candle before displacement · in premium",
                 size=12.5, xanchor="right", align="right", xshift=-10)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts",
                    fmt=",.0f", long=False)
        ch.label(box_x1, STOP + 14, "Invalidation: 15m close above 18,430", color=t.ink3, size=12,
                 xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "NAS100 15m (synthetic)", price_fmt=",.0f")

    with ch.group("structure"):
        ch.hline(at(T_HL), at(T_BREAK), HIGHER_LOW, color=t.ink2, dash="dash")
        ch.label(at(T_HL), HIGHER_LOW - 3, "Last higher low 18,288", yanchor="top", xshift=-6)
        ch.label(at(T_BREAK) - HALF, HIGHER_LOW - 4, "CHOCH", color=t.accent, bold=True, xanchor="right",
                 yanchor="top", xshift=-6)
        ch.hline(at(T_BREAK), box_x0, CRASH_LOW)
        ch.label(at("21:00"), CRASH_LOW - 4, "Crash low 18,250 · sell-side liquidity", yanchor="top")
    with ch.group("displacement"):
        ch.callout(at(T_DISP), 18418, at("18:30"), 18452,
                   f"<b>Displacement</b> · {STATS['disp_body']:.0f}-pt body vs {STATS['avg_body']:.0f}-pt average"
                   "<br>next candle closes below 18,288 → structure shift", xanchor="left")
    with ch.group("retest"):
        ch.callout(at(T_ENGULF), 18399, at("21:15"), 18452,
                   "<b>Retrace to 18,400 + 15m bearish engulfing</b><br>sell limit 18,395 fills on the retest",
                   yanchor="bottom")
    with ch.group("projection"):
        ch.projection(at("23:00") + HALF, 18305, at("23:45"), TARGET + 4,
                      "Hypothetical path<br>— a scenario, not a result", at("23:10"), 18345)

    ch.header("Smart Money Concepts · Order Blocks", "Bearish Order Block — Premium Retest After Displacement",
              "NAS100 · 15-minute · New York session · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the Order Blocks guide (Example 2)")
    ch.caption()
    ch.axes(x_range=[at("18:15"), at("23:59") + BAR], y_range=[18225, 18480], y_dtick=25, y_fmt=",.0f")
    return ch.fig


def main():
    paths = save(NAME, build, "Bearish Order Block — NAS100")
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
