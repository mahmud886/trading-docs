"""
Liquidity map + liquidity cycle — EUR/USD, 1-hour, two days.

Source: content/en/ict/liquidity.mdx -> "Real Example: EUR/USD" (equal lows 1.0850, sweep to 1.0845,
displacement up toward BSL at 1.0950). Candles in data/eurusd_1h_liquidity_cycle.csv are synthetic.

Outputs: liquidity-map-eurusd (the chart before London open) and liquidity-cycle-eurusd (the full cycle).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, load_candles, save

PIP = 0.0001
HOUR = timedelta(hours=1)
HALF = HOUR * 0.36

# --- Levels quoted from the lesson ---
SSL, SWEEP_LOW, BSL = 1.0850, 1.0845, 1.0950

# --- Levels defined by the synthetic candles ---
EQH = [("09:00", 0), ("15:00", 0)]
EQL = [("20:00", 0), ("01:00", 1), ("09:00", 1)]
ASIAN = (at("06:00", 1), at("12:00", 1))
MSS_LEVEL = 1.0874  # last lower high (04:00 day 2) before the sweep
FVG_LOW, FVG_HIGH = 1.0862, 1.0884
T_SWEEP, T_DISP, T_RUN = ("13:00", 1), ("14:00", 1), ("20:00", 1)
EQUAL_TOLERANCE = 2 * PIP

CANDLES = load_candles("eurusd_1h_liquidity_cycle", DATA)
I_SWEEP = CANDLES.index(by_time(CANDLES, *T_SWEEP))


def validate(candles):
    highs = [by_time(candles, *k).h for k in EQH]
    lows = [by_time(candles, *k).l for k in EQL]
    assert max(highs) == BSL and max(highs) - min(highs) <= EQUAL_TOLERANCE, "relative equal highs at 1.0950"
    assert min(lows) == SSL and max(lows) - min(lows) <= EQUAL_TOLERANCE, "three relative equal lows at 1.0850"
    sweep, disp, run = by_time(candles, *T_SWEEP), by_time(candles, *T_DISP), by_time(candles, *T_RUN)
    before = candles[:candles.index(sweep)]
    assert min(c.l for c in before) == SSL and max(c.h for c in before) == BSL, "pools untouched before the sweep"
    assert sweep.l == SWEEP_LOW and sweep.c > SSL, "sweep: wick below the lows, close back inside"
    asian = [c for c in candles if ASIAN[0] <= c.t <= ASIAN[1]]
    assert min(c.l for c in asian) == SSL, "Asian range low sits on the equal lows"
    lh = [c for c in candles if at("01:00", 1) < c.t < sweep.t]
    assert max(c.h for c in lh) == MSS_LEVEL, "last lower high before the sweep"
    avg = sum(c.body for c in before) / len(before)
    assert disp.bullish and disp.c > MSS_LEVEL and disp.body >= 2 * avg, "displacement closes above the lower high"
    assert (sweep.h, candles[candles.index(disp) + 1].l) == (FVG_LOW, FVG_HIGH), "FVG left by the displacement"
    assert run.h > BSL and max(c.h for c in candles) == run.h, "price runs the buy-side liquidity"
    return {"disp_body": disp.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, title="The Liquidity Cycle — Build, Sweep, Shift, Deliver",
          y_top=1.0978):
    ch = Chart(t, reveal)
    x_end = at("22:30", 1)

    with ch.group("pools"):
        ch.zone(at(EQH[0][0], EQH[0][1]) - HALF, x_end, BSL, BSL + 6 * PIP, color=t.bull, alpha=0.10, border=False)
        ch.hline(at(EQH[0][0]) - HALF, x_end, BSL, color=t.bull_text, width=1.4, dash="dot")
        ch.zone(at(*EQL[0]) - HALF, x_end, SSL - 6 * PIP, SSL, color=t.bear, alpha=0.10, border=False)
        ch.hline(at(*EQL[0]) - HALF, x_end, SSL, color=t.bear_text, width=1.4, dash="dot")
        for tm, d in EQH:
            ch.label(at(tm, d), by_time(CANDLES, tm, d).h + 1.2 * PIP, "EQH", size=11, bold=True, color=t.ink2,
                     xanchor="center", yanchor="bottom")
        for tm, d in EQL:
            ch.label(at(tm, d), by_time(CANDLES, tm, d).l - 1.2 * PIP, "EQL", size=11, bold=True, color=t.ink2,
                     xanchor="center", yanchor="top")
        ch.label(at("10:30"), BSL + 7.5 * PIP,
                 f"<b style='color:{t.bull_text}'>Buy-side liquidity (BSL)</b> · equal highs 1.0950 / 1.0949 — "
                 "buy stops rest above", yanchor="bottom")
        ch.label(at("16:00"), SSL - 7.5 * PIP,
                 f"<b style='color:{t.bear_text}'>Sell-side liquidity (SSL)</b> · three equal lows ≈ 1.0850 — "
                 "sell stops rest below", yanchor="top")
    with ch.group("asian"):
        ch.zone(ASIAN[0] - HALF, ASIAN[1] + HALF, SSL, 1.0870, color=t.ink3, alpha=0.08, dash="dot")
        ch.label(ASIAN[0] - HALF, 1.0870 + 1 * PIP, "Asian range", size=11, color=t.ink3, yanchor="bottom")
    with ch.group("question"):
        ch.label(at("22:00", 1), 1.0905,
                 "<b>Two pools, one question:</b><br>which side does price take first?<br>"
                 f"<span style='color:{t.ink3}'>Read the draw on liquidity — HTF bias,<br>premium/discount, "
                 "session timing.</span>", xanchor="right", align="left", size=14, bgcolor=t.surface, bordercolor=t.axis,
                 borderwidth=1, borderpad=10)
    with ch.group("fvg"):
        ch.zone(at(*T_SWEEP) - HALF, at("18:00", 1), FVG_LOW, FVG_HIGH)
        ch.label(at("16:30", 1), FVG_LOW + 1.5 * PIP, "FVG", size=11, bold=True, color=t.zone_text, xanchor="center")
    ch.candles(CANDLES, "EUR/USD 1H (synthetic)", price_fmt=".4f", time_fmt="%H:%M BD")

    with ch.group("steps"):
        ch.step(at("19:30"), 1.0912, 1, "<b>Build</b>: equal highs and equal lows<br>collect stops on both sides",
                color=t.ink2)
    with ch.group("sweep"):
        ch.callout(at(*T_SWEEP), SWEEP_LOW, at("16:00", 1), 1.0838,
                   f"<span style='color:{t.accent}'>②</span> <b>Sweep</b>: London open wicks to 1.0845, "
                   "closes back above 1.0850", xanchor="center", yanchor="middle")
    with ch.group("mss"):
        ch.hline(at("09:30", 1), at(*T_DISP), MSS_LEVEL, color=t.ink2, dash="dash")
        ch.callout(at(*T_DISP) - HALF, 1.0889, at("07:00", 1), 1.0898,
                   f"<span style='color:{t.accent}'>③</span> <b>Shift</b>: {STATS['disp_body']:.0f}-pip displacement"
                   " closes<br>above the 1.0874 lower high → MSS", xanchor="right", align="right")
    with ch.group("draw"):
        ch.callout(at(*T_RUN), 1.0953, at("14:30", 1), 1.0966,
                   f"<span style='color:{t.accent}'>④</span> <b>Deliver</b>: price runs the BSL above 1.0950",
                   xanchor="right", align="right")

    ch.fig.add_shape(type="line", x0=at("00:00", 1), x1=at("00:00", 1), yref="paper", y0=0, y1=1,
                     line=dict(color=t.axis, width=1.2, dash="dot"))
    ch.label(at("00:00", 1), 1.0972, "Day 1  ", size=12, color=t.ink3, xanchor="right")
    ch.label(at("00:00", 1), 1.0972, "  Day 2", size=12, color=t.ink3)

    key = [("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "BSL"), ("■", t.bear, "SSL")]
    if ch.reveal.alpha("fvg"):
        key.append(("■", t.zone, "FVG"))
    ch.header("ICT · Liquidity", title, "EUR/USD · 1-hour · two sessions · Times in Bangladesh time (BD, UTC+6)",
              key=key)
    ch.footnote("Synthetic candles built around the levels in the ICT Liquidity lesson")
    ch.caption()
    ch.axes(x_range=[at("05:15"), at("22:45", 1)], y_range=[1.0832, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=180)
    return ch.fig


MAP = Reveal(candles=I_SWEEP, groups={"pools": 1, "asian": 1, "question": 1})


def build_map(t):
    return build(t, MAP, title="Liquidity Map — Where the Stops Rest")


def build_cycle(t):
    return build(t, Reveal(groups={g: 1 for g in ("pools", "asian", "fvg", "steps", "sweep", "mss", "draw")}))


def main():
    for name, fn, title in (("liquidity-map-eurusd", build_map, "Liquidity Map — EUR/USD"),
                            ("liquidity-cycle-eurusd", build_cycle, "Liquidity Cycle — EUR/USD")):
        paths = save(name, fn, title, OUT)
        print(f"{name}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
