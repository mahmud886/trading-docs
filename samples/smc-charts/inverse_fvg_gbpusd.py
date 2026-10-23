"""
Bearish Inverse Fair Value Gap (IFVG) — GBP/USD, 1-hour, two sessions.

Source: content/en/academy/ict-smc-course/20-ifvg.mdx -> "GBP/USD — Bearish IFVG Entry".
Levels are quoted from the lesson; candles in data/gbpusd_1h_ifvg.csv are synthetic.
The x-axis is a candle index so the omitted overnight hours (00:00–10:00 BD) leave no empty gap.
"""

from chartkit import Chart, Reveal, levels, load_candles, save

NAME = "bearish-ifvg-gbpusd"
PIP = 0.0001
W = 0.36  # half candle width in index units

# --- Levels quoted from the lesson ---
FVG_LOW, FVG_HIGH = 1.2650, 1.2660
RALLY_HIGH = 1.2700
INVERSION_CLOSE = 1.2640
ENTRY, STOP, TARGET = 1.2655, 1.2665, 1.2580
CE = (FVG_LOW + FVG_HIGH) / 2

# --- Candle indexes (see CSV: 0–13 = day 1 10:00–23:00, 14–19 = day 2 10:00–15:00) ---
I_SSL, I_C1, I_C2, I_C3, I_TOUCH, I_HIGH, I_INVERT, I_RETEST = 1, 3, 4, 5, 6, 8, 11, 17
DAY_BREAK = 13.5


def validate(candles):
    c1, c2, c3 = candles[I_C1], candles[I_C2], candles[I_C3]
    touch, inv, retest = candles[I_TOUCH], candles[I_INVERT], candles[I_RETEST]
    assert (c1.h, c3.l) == (FVG_LOW, FVG_HIGH) and c2.bullish, "bullish FVG = C1 high to C3 low"
    assert FVG_LOW <= touch.l <= FVG_HIGH and touch.c > FVG_HIGH, "first touch holds as support"
    assert max(c.h for c in candles[:I_INVERT]) == RALLY_HIGH, "rally to 1.2700"
    assert all(c.c >= FVG_LOW for c in candles[I_C3:I_INVERT]), "no earlier close through the FVG"
    assert inv.c == INVERSION_CLOSE and inv.c < FVG_LOW and inv.c < touch.l, "close below FVG and higher low"
    assert all(c.h < FVG_LOW for c in candles[I_INVERT + 1:I_RETEST]), "IFVG untouched until the retest"
    assert retest.h == ENTRY and abs(ENTRY - CE) < 1e-9 and retest.t.day != inv.t.day, "next-day CE retest"
    assert STOP > FVG_HIGH and TARGET == candles[I_SSL].l == min(c.l for c in candles[:I_INVERT])
    return {"inv_body": inv.body / PIP}


CANDLES = load_candles("gbpusd_1h_ifvg")
STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    idx = list(range(len(CANDLES)))
    box_x0, box_x1 = I_RETEST - W, 23.0

    with ch.group("fvg"):
        ch.zone(I_C1 - W, I_INVERT, FVG_LOW, FVG_HIGH)
        ch.step(I_TOUCH + 0.75, (FVG_LOW + FVG_HIGH) / 2, 1,
                f"<b style='color:{t.zone_text}'>Bullish FVG 1.2650 – 1.2660</b><br>support: first touch holds",
                size=12.5)
    with ch.group("ifvg"):
        ch.zone(I_INVERT, box_x0, FVG_LOW, FVG_HIGH, color=t.bear, alpha=t.risk_alpha + 0.04, dash="dash")
        ch.hline(15.2, box_x0, CE, color=t.bear, dash="dash")
        ch.step(I_INVERT + 0.5, (FVG_LOW + FVG_HIGH) / 2, 3,
                f"<b style='color:{t.bear_text}'>Bearish IFVG — now resistance</b><br>CE 1.2655 (dashed)",
                size=12.5)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
        ch.label(box_x1, STOP + 7 * PIP, "Invalidation: 1H close back above 1.2660 (IFVG high)", color=t.ink3,
                 size=12, xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=idx,
               text=[f"Day {c.t.day - 2} · {c.label} BD" for c in CANDLES])

    ch.fig.add_shape(type="line", x0=DAY_BREAK, x1=DAY_BREAK, yref="paper", y0=0, y1=1,
                     line=dict(color=t.axis, width=1.2, dash="dot"))
    ch.label(DAY_BREAK, 1.2712, "Day 1  ", color=t.ink3, size=12, xanchor="right")
    ch.label(DAY_BREAK, 1.2712, "  Day 2", color=t.ink3, size=12)
    ch.label(DAY_BREAK, 1.2704, "  00:00–10:00 BD omitted", color=t.ink3, size=11)

    with ch.group("structure"):
        ch.hline(I_SSL, box_x0, TARGET)
        ch.label(I_SSL + 0.6, TARGET - 1.5 * PIP, "Swing low 1.2580 · sell-side liquidity", yanchor="top")
        ch.label(I_HIGH, RALLY_HIGH + 1.5 * PIP, "High 1.2700", xanchor="center", yanchor="bottom")
        for i, name, y, anchor in ((I_C1, "C1", CANDLES[I_C1].l - 1.5 * PIP, "top"),
                                   (I_C2, "C2", CANDLES[I_C2].l - 1.5 * PIP, "top"),
                                   (I_C3, "C3", CANDLES[I_C3].h + 1.5 * PIP, "bottom")):
            ch.label(i, y, name, color=t.ink, bold=True, xanchor="center", yanchor=anchor)
    with ch.group("inversion"):
        ch.callout(I_INVERT - W, INVERSION_CLOSE, 8.0, 1.2626,
                   f"<span style='color:{t.accent}'>②</span> <b>Inversion: 1H close at 1.2640</b><br>"
                   "fully below the FVG and the 1.2657 higher low → CHOCH"
                   f"<br>{STATS['inv_body']:.0f}-pip bearish body — a close, not just a wick", yanchor="top")
    with ch.group("retest"):
        ch.callout(I_RETEST, ENTRY + 0.3 * PIP, 14.6, 1.2684,
                   f"<span style='color:{t.accent}'>④</span> <b>Next day: retest of the IFVG CE (1.2655)</b>"
                   "<br>sell limit at the CE · rejection follows", yanchor="bottom")
    with ch.group("projection"):
        ch.projection(19.4, 1.2615, 22.3, TARGET + 3 * PIP, "Hypothetical path<br>— a scenario, not a result",
                      20.0, 1.2636)

    ch.header("ICT · Inverse Fair Value Gap", "Inverse FVG — Bullish Gap Fails, Flips to Resistance",
              "GBP/USD · 1-hour · London session, two days · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG"),
                   ("■", t.bear, "Inverted FVG")])
    ch.footnote("Synthetic candles built around the levels in the IFVG lesson")
    ch.caption()
    ticks = [i for i in idx if i in (0, 2, 4, 6, 8, 10, 12, 14, 16, 18)]
    ch.axes(x_range=[-0.8, 23.4], y_range=[1.25655, 1.27185], y_dtick=0.0010, y_fmt=".4f",
            x_title="Time (BD, UTC+6) · 1-hour candles", x_ticks=(ticks, [CANDLES[i].label for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Inverse FVG — GBP/USD")
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
