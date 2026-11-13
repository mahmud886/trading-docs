"""
Bearish Market Structure Shift — NAS100, 5-minute, NY AM kill zone.

Source: content/en/ict/mss.mdx -> "Example 2: NAS100 Bearish MSS" (5m uptrend, HL 17,880, BSL taken at 17,950,
displacement below 17,880, FVG 17,870–17,890, sell 17,880, stop 17,955, target 17,750).
Candles in data/nas100_5m_bearish_mss.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "nas100-bearish-mss"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
HIGHER_LOW, SWEEP_HIGH = 17880.0, 17950.0
FVG_LOW, FVG_HIGH = 17870.0, 17890.0
ENTRY, STOP, TARGET = 17880.0, 17955.0, 17750.0

# --- Defined by the synthetic candles ---
BSL = 17940.0  # the last higher high, taken by the sweep
T_HH, T_HL, T_SWEEP, T_C1, T_MSS, T_C3, T_FILL = "17:35", "17:45", "18:05", "18:10", "18:15", "18:20", "18:25"

CANDLES = load_candles("nas100_5m_bearish_mss", DATA)


def validate(candles):
    hh, hl, sweep, c1, mss, c3, fill = (by_time(candles, tm) for tm in (T_HH, T_HL, T_SWEEP, T_C1, T_MSS, T_C3,
                                                                          T_FILL))
    assert hh.h == BSL and hl.l == HIGHER_LOW, "uptrend: HH 17,940, then HL 17,880"
    leg = [c for c in candles if hl.t < c.t < sweep.t]
    assert all(c.l > HIGHER_LOW for c in leg) and max(c.h for c in leg) < BSL, "the leg up from the HL"
    assert sweep.h == SWEEP_HIGH > BSL > sweep.c, "sweep above the last HH, closes back below it"
    before = [c for c in candles if c.t < c1.t]
    avg = sum(c.body for c in before) / len(before)
    assert not mss.bullish and mss.c < HIGHER_LOW and mss.body >= 2 * avg, "MSS: displacement closes below the HL"
    assert (c1.l, c3.h) == (FVG_HIGH, FVG_LOW), "bearish FVG left by the displacement"
    assert (FVG_LOW + FVG_HIGH) / 2 == ENTRY, "entry at the FVG CE"
    assert fill.h >= ENTRY and all(c.h < ENTRY for c in candles if c3.t <= c.t < fill.t), "first CE touch fills"
    assert STOP > SWEEP_HIGH
    return {"mss_body": mss.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("16:55"), at(T_FILL) - HALF, at("19:10")

    ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=False)
    ch.label(box_x1, STOP + 8, "Invalidation: 5m close above 17,950 (sweep high)", size=12, color=t.ink3,
             xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "NAS100 5m (synthetic)", price_fmt=",.0f")

    ch.label(at(T_HH), BSL + 3, "HH", size=11, bold=True, xanchor="center", yanchor="bottom")
    ch.label(at(T_HL), HIGHER_LOW - 3, "HL", size=11, bold=True, xanchor="center", yanchor="top")
    ch.hline(at(T_HH), at(T_SWEEP) + HALF, BSL, color=t.bull_text, width=1.4)
    ch.hline(at(T_HL), at(T_MSS) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
    ch.hline(x0, box_x0, TARGET, color=t.bear_text, width=1.4)
    ch.label(x0, TARGET + 3, f"<b style='color:{t.bear_text}'>Target 17,750</b> · sell-side liquidity below",
             yanchor="bottom", xshift=6)

    ch.callout(at(T_SWEEP), SWEEP_HIGH, at("17:15"), 17962,
               f"<span style='color:{t.accent}'>①</span> <b>Sweep</b>: NY AM takes the "
               f"<b style='color:{t.bull_text}'>BSL above the 17,940 HH</b> — wick to 17,950",
               xanchor="center")
    ch.callout(at(T_MSS), 17862, at("17:20"), 17808,
               f"<span style='color:{t.accent}'>②</span> <b>MSS</b>: {STATS['mss_body']:.0f}-pt displacement "
               f"(avg {STATS['avg_body']:.0f})<br>closes below the 17,880 higher low · leaves an FVG",
               xanchor="center")
    ch.callout(at(T_FILL), 17881, at("18:52"), 17915,
               f"<span style='color:{t.accent}'>③</span> <b>FVG 17,870 – 17,890</b>: first touch of the CE<br>"
               "→ sell 17,880", xanchor="center")
    ch.projection(at("18:40") + HALF, 17812, at("19:02"), TARGET + 8, "Hypothetical path<br>— a scenario, "
                  "not a result", at("18:50"), 17842)

    ch.header("ICT · Market Structure Shift", "Bearish MSS — Sweep, Shift, Enter the FVG",
              "NAS100 · 5-minute · NY AM kill zone (5–8 PM BD) · context: Daily in premium",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Market Structure Shift lesson")
    ch.caption()
    ch.axes(x_range=[at("16:50"), at("19:20")], y_range=[17730, 17985], y_dtick=25, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "NAS100 Bearish MSS", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
