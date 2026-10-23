"""
Bearish Inverse Fair Value Gap (IFVG) — GBP/USD, 1-hour, two sessions.

Source: content/en/academy/ict-smc-course/20-ifvg.mdx -> "GBP/USD — Bearish IFVG Entry".
Levels are quoted from the lesson; candles in data/gbpusd_1h_ifvg.csv are synthetic.
The x-axis is a candle index so the omitted overnight hours (00:00–10:00 BD) leave no empty gap.
"""

import plotly.graph_objects as go

from chartkit import (AXIS, BEAR, BULL, FONT, GRID, INK, INK_2, INK_3, MONO, SURFACE, ZONE, ZONE_TEXT, callout,
                      footnote, header, hline, label, load_candles, new_figure, position, projection,
                      save, zone)

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
    assert retest.h == ENTRY and abs(ENTRY - CE) < 1e-9 and candles[I_RETEST].t.day != candles[I_INVERT].t.day, "next-day CE retest"
    assert STOP > FVG_HIGH and TARGET == candles[I_SSL].l == min(c.l for c in candles[:I_INVERT])
    return {"inv_body": inv.body / PIP}


def main():
    candles = load_candles("gbpusd_1h_ifvg")
    stats = validate(candles)
    fig = new_figure()
    idx = list(range(len(candles)))
    box_x0, box_x1 = I_RETEST - W, 23.0

    zone(fig, I_C1 - W, I_INVERT, FVG_LOW, FVG_HIGH)
    zone(fig, I_INVERT, box_x0, FVG_LOW, FVG_HIGH, color=BEAR, opacity=0.14, dash="dash")
    hline(fig, 15.2, box_x0, CE, color=BEAR, dash="dash")
    risk, targets = position(fig, box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP,
                             unit_name="pips", fmt=".4f", long=False)
    fig.add_trace(go.Candlestick(
        x=idx, open=[c.o for c in candles], high=[c.h for c in candles], low=[c.l for c in candles],
        close=[c.c for c in candles], name="GBP/USD 1H (synthetic)",
        text=[f"Day {c.t.day - 2} · {c.label} BD" for c in candles],
        increasing=dict(line=dict(color=BULL, width=1.6), fillcolor=SURFACE),
        decreasing=dict(line=dict(color=BEAR, width=1.6), fillcolor=BEAR),
        whiskerwidth=0, yhoverformat=".4f", showlegend=False,
    ))

    # Day separator for the omitted overnight hours.
    fig.add_shape(type="line", x0=DAY_BREAK, x1=DAY_BREAK, yref="paper", y0=0, y1=1,
                  line=dict(color=AXIS, width=1.2, dash="dot"))
    label(fig, DAY_BREAK, 1.2712, "Day 1  ", color=INK_3, size=12, xanchor="right")
    label(fig, DAY_BREAK, 1.2712, "  Day 2", color=INK_3, size=12)
    label(fig, DAY_BREAK, 1.2704, "  00:00–10:00 BD omitted", color=INK_3, size=11)

    hline(fig, I_SSL, box_x0, TARGET)
    label(fig, I_SSL + 0.6, TARGET - 1.5 * PIP, "Swing low 1.2580 · sell-side liquidity", yanchor="top")
    label(fig, I_HIGH, RALLY_HIGH + 1.5 * PIP, "High 1.2700", xanchor="center", yanchor="bottom")
    for i, name, y, anchor in ((I_C1, "C1", candles[I_C1].l - 1.5 * PIP, "top"),
                               (I_C2, "C2", candles[I_C2].l - 1.5 * PIP, "top"),
                               (I_C3, "C3", candles[I_C3].h + 1.5 * PIP, "bottom")):
        label(fig, i, y, name, color=INK, bold=True, xanchor="center", yanchor=anchor)

    label(fig, I_TOUCH + 0.75, (FVG_LOW + FVG_HIGH) / 2,
          f"<b style='color:{ZONE_TEXT}'>① Bullish FVG 1.2650 – 1.2660</b><br>support: first touch holds",
          size=12.5)
    label(fig, I_INVERT + 0.5, (FVG_LOW + FVG_HIGH) / 2,
          "<b style='color:#A8383B'>③ Bearish IFVG — now resistance</b><br>CE 1.2655 (dashed)", size=12.5)
    callout(fig, I_INVERT - W, INVERSION_CLOSE, 8.0, 1.2626,
            f"<b>② Inversion: 1H close at 1.2640</b><br>fully below the FVG and the 1.2657 higher low → CHOCH"
            f"<br>{stats['inv_body']:.0f}-pip bearish body — a close, not just a wick",
            yanchor="top", axref="x", ayref="y")
    callout(fig, I_RETEST, ENTRY + 0.3 * PIP, 14.6, 1.2684,
            "<b>④ Next day: retest of the IFVG CE (1.2655)</b><br>sell limit at the CE · rejection follows",
            yanchor="bottom")

    projection(fig, 19.4, 1.2615, 22.3, TARGET + 3 * PIP,
               "Hypothetical path<br>— a scenario, not a result", 20.0, 1.2636)
    label(fig, box_x1, STOP + 7 * PIP, "Invalidation: 1H close back above 1.2660 (IFVG high)", color=INK_2,
          size=12, xanchor="right", yanchor="bottom")

    header(fig, "Inverse FVG — Bullish Gap Fails, Flips to Resistance",
           "GBP/USD · 1-hour · London session, two days · Times in Bangladesh time (BD, UTC+6)", key=False)
    fig.add_annotation(xref="paper", yref="paper", x=1, y=1.06, xanchor="right", yanchor="bottom", showarrow=False,
                       text=(f"<span style='color:{BULL}'>□</span> Bullish candle    "
                             f"<span style='color:{BEAR}'>▮</span> Bearish candle    "
                             f"<span style='color:{ZONE}'>■</span> FVG    "
                             f"<span style='color:{BEAR}'>■</span> Inverted FVG"),
                       font=dict(family=FONT, size=13, color=INK_2))
    footnote(fig, "Synthetic candles built around the levels in the IFVG lesson")

    ticks = [i for i in idx if i % 2 == 0 or i == 14]
    ticks = [i for i in ticks if i != 13]
    fig.update_xaxes(
        range=[-0.8, 23.4], tickvals=ticks, ticktext=[candles[i].label for i in ticks], rangeslider_visible=False,
        showgrid=True, gridcolor=GRID, zeroline=False, showline=True, linecolor=AXIS, ticks="outside",
        tickcolor=AXIS, ticklen=5, tickfont=dict(family=MONO, size=12, color=INK_2),
        title=dict(text="Time (BD, UTC+6) · 1-hour candles", font=dict(size=12, color=INK_3), standoff=10),
    )
    fig.update_yaxes(
        side="right", range=[1.25655, 1.27185], dtick=0.0010, tickformat=".4f", showgrid=True, gridcolor=GRID,
        zeroline=False, showline=True, linecolor=AXIS, ticks="outside", tickcolor=AXIS, ticklen=5,
        tickfont=dict(family=MONO, size=12, color=INK_2), title=dict(text="Price", font=dict(size=12, color=INK_3),
                                                                      standoff=8),
    )
    _, reward, rr = targets[0]
    png, _ = save(fig, NAME)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f}")


if __name__ == "__main__":
    main()
