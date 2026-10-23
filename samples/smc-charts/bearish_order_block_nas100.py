"""
Bearish Order Block — NAS100, 15-minute.

Source: content/en/smc/order-blocks.mdx -> "Example 2: NAS100 — Bearish OB".
Levels are quoted from the guide; candles in data/nas100_15m_bearish_ob.csv are synthetic.
"""

from chartkit import (BAR, INK, INK_2, INK_3, ZONE_TEXT, add_candles, at, axes, by_time, callout, footnote, header,
                      hline, is_engulfing, label, load_candles, new_figure, position, projection, save, zone)

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


def main():
    candles = load_candles("nas100_15m_bearish_ob")
    stats = validate(candles)
    fig = new_figure()
    half = BAR * 0.36
    box_x0, box_x1 = at(T_FILL) - half, at("23:59")

    zone(fig, at(T_OB) - half, box_x0, OB_LOW, OB_HIGH)
    risk, targets = position(fig, box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT,
                             unit_name="pts", fmt=",.0f", long=False)
    add_candles(fig, candles, "NAS100 15m (synthetic)", price_fmt=",.0f")

    hline(fig, at(T_HL), at(T_BREAK), HIGHER_LOW, color=INK_2, dash="dash")
    label(fig, at(T_HL), HIGHER_LOW - 3, "Last higher low 18,288", yanchor="top", xshift=-6)
    label(fig, at(T_BREAK) - half, HIGHER_LOW - 4, "CHOCH", color=INK, bold=True, xanchor="right", yanchor="top",
          xshift=-6)
    hline(fig, at(T_BREAK), box_x0, CRASH_LOW, color=INK_3)
    label(fig, at("21:00"), CRASH_LOW - 4, "Crash low 18,250 · sell-side liquidity", color=INK_2, yanchor="top")

    label(fig, at(T_OB) - half, (OB_LOW + OB_HIGH) / 2,
          f"<b style='color:{ZONE_TEXT}'>Bearish Order Block 18,380 – 18,420</b><br>"
          "last bullish candle before displacement · in premium",
          size=12.5, xanchor="right", align="right", xshift=-10)
    callout(fig, at(T_DISP), 18418, at("18:30"), 18452,
            f"<b>Displacement</b> · {stats['disp_body']:.0f}-pt body vs {stats['avg_body']:.0f}-pt average"
            "<br>next candle closes below 18,288 → structure shift",
            xanchor="left")
    callout(fig, at(T_ENGULF), 18399, at("21:15"), 18452,
            "<b>Retrace to 18,400 + 15m bearish engulfing</b><br>sell limit 18,395 fills on the retest",
            xanchor="center", yanchor="bottom")

    projection(fig, at("23:00") + half, 18305, at("23:45"), TARGET + 4,
               "Hypothetical path<br>— a scenario, not a result", at("23:10"), 18336, yanchor="middle")
    _, reward, rr = targets[0]
    label(fig, box_x1, STOP + 14, "Invalidation: 15m close above 18,430", color=INK_3, size=12,
          xanchor="right", yanchor="bottom")
    label(fig, at("23:30"), 18370, f"<b>R:R  1 : {rr:.1f}</b>", color=INK, size=15, xanchor="center",
          bgcolor="#FFFFFF", bordercolor="#0F8A78", borderwidth=1.2, borderpad=6)

    header(fig, "Bearish Order Block — Premium Retest After Displacement",
           "NAS100 · 15-minute · New York session · Times in Bangladesh time (BD, UTC+6)", zone_name="Order Block")
    footnote(fig, "Synthetic candles built around the levels in the Order Blocks guide (Example 2)")
    axes(fig, x_range=[at("18:15"), at("23:59") + BAR], y_range=[18225, 18480], y_dtick=25, y_fmt=",.0f")

    png, _ = save(fig, NAME)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {png.name}")


if __name__ == "__main__":
    main()
