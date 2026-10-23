"""
Bullish Fair Value Gap — EUR/USD, 15-minute.

Source: content/en/smc/fair-value-gap.mdx -> "Real example — EUR/USD" (setup, retrace, confirmation)
and "R:R Examples" (stop 1.0860, TP1 1.0920, TP2 1.0950). Candles in data/eurusd_15m_fvg.csv are synthetic.
"""

from chartkit import BAR, Chart, Reveal, at, by_time, is_engulfing, levels, load_candles, save

NAME = "bullish-fvg-eurusd"
PIP = 0.0001

# --- Levels quoted from the guide ---
DROP_LOW, RALLY_HIGH = 1.0850, 1.0920
FVG_LOW, FVG_HIGH = 1.0870, 1.0885
RETRACE_LOW = 1.0878  # "retraces to 1.0878 (the 50% level of the FVG)"
ENTRY, STOP, TP1, TP2 = 1.0878, 1.0860, 1.0920, 1.0950
CE = (FVG_LOW + FVG_HIGH) / 2  # 1.08775

T_PRIOR_HIGH, T_C1, T_C2, T_C3, T_ENGULF = "12:45", "16:00", "16:15", "16:30", "18:30"
HALF = BAR * 0.36


def validate(candles):
    c1, c2, c3 = (by_time(candles, t) for t in (T_C1, T_C2, T_C3))
    engulf = by_time(candles, T_ENGULF)
    prev = candles[candles.index(engulf) - 1]
    assert c1.l == DROP_LOW and c3.h == RALLY_HIGH, "drop to 1.0850, three-candle rally to 1.0920"
    assert (c1.h, c3.l) == (FVG_LOW, FVG_HIGH) and c1.h < c3.l, "FVG = C1 high to C3 low"
    before = [c.body for c in candles if c.t < c2.t]
    avg = sum(before) / len(before)
    assert c2.bullish and c2.body >= 2 * avg, "C2 is the displacement candle"
    assert (engulf.t - c3.t).seconds == 2 * 3600, "retrace comes two hours after the FVG"
    after = [c for c in candles if c3.t < c.t < engulf.t]
    assert all(c.l > RETRACE_LOW for c in after), "first touch of the CE is the engulfing candle"
    assert engulf.l == RETRACE_LOW and abs(RETRACE_LOW - CE) <= 0.5 * PIP + 1e-9, "retrace tags the 50% level"
    assert is_engulfing(prev, engulf) and engulf.bullish, "15m bullish engulfing"
    assert STOP < FVG_LOW and (FVG_LOW - STOP) / PIP <= 10 + 1e-9, "stop 5-10 pips beyond the FVG"
    assert max(c.h for c in candles if c.t < c1.t) == TP2, "TP2 = prior swing high"
    return {"c2_body": c2.body / PIP, "avg_body": avg / PIP}


CANDLES = load_candles("eurusd_15m_fvg")
STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.09625):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_ENGULF) - HALF, at("20:15")

    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
        for x0, x1 in ((at(T_C1) - HALF, at("16:38")), (at("17:58"), box_x0)):
            ch.hline(x0, x1, CE, color=t.zone, width=1.3, dash="dash")
        ch.label(at("16:42"), CE, f"<b style='color:{t.zone_text}'>Bullish FVG 1.0870 – 1.0885</b>"
                 "<br>C1 high → C3 low · CE 1.08775 (dashed)", size=12.5)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TP1, TP2], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(box_x1, (STOP + ENTRY) / 2, "Invalidation: 15m close below 1.0870<br>— FVG fully traded through",
                 size=12, xanchor="right", align="right", xshift=-8)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("prior_high"):
        ch.hline(at(T_PRIOR_HIGH), box_x0, TP2)
        ch.label(at("13:00"), TP2 + 1.4 * PIP, "Prior swing high 1.0950 · buy-side liquidity", yanchor="bottom")
    with ch.group("c_labels"):
        for n, (tm, y, anchor) in enumerate(((T_C1, DROP_LOW - 1.5 * PIP, "top"), (T_C2, 1.0864 - 1.5 * PIP, "top"),
                                             (T_C3, RALLY_HIGH + 1.5 * PIP, "bottom")), 1):
            ch.label(at(tm), y, f"C{n}", color=t.ink, bold=True, xanchor="center", yanchor=anchor)
        ch.label(at(T_C2) + HALF, 1.0906,
                 f"<b>Displacement</b>: 1.0850 → 1.0920 in three candles<br>C2 body {STATS['c2_body']:.0f} pips vs "
                 f"{STATS['avg_body']:.0f}-pip average", xanchor="right", yanchor="bottom", align="right")
    with ch.group("retrace"):
        ch.callout(at(T_ENGULF), RETRACE_LOW, at("17:20"), 1.0858,
                   "<b>Two hours later: retrace to the CE (1.0878)</b><br>15m bullish engulfing confirms the reaction",
                   yanchor="top")
    with ch.group("projection"):
        ch.projection(at("19:00"), 1.0911, at("19:25"), TP2 - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("19:32"), 1.0935)

    ch.header("Smart Money Concepts · Fair Value Gap", "Bullish Fair Value Gap — Retrace to the 50% Level (CE)",
              "EUR/USD · 15-minute · London → New York session · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Fair Value Gap")])
    ch.footnote("Synthetic candles built around the levels in the Fair Value Gap guide")
    ch.caption()
    ch.axes(x_range=[at("12:15"), at("20:30")], y_range=[1.08385, y_top], y_dtick=0.0010, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish Fair Value Gap — EUR/USD")
    risk, targets = levels(ENTRY, STOP, [TP1, TP2], PIP)
    print(f"{NAME}: risk {risk:g} · " + " · ".join(f"TP {tp:.4f} +{rw:g} 1:{rr:.2f}" for tp, rw, rr in targets)
          + f" → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
