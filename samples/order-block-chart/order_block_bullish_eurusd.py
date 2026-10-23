"""
Sample chart prototype: Bullish Order Block — retest entry after displacement.

Source section: content/en/smc/order-blocks.mdx -> "Real Example — EUR/USD Bullish OB".
Every trading level below is quoted from that section. The candles in
data/eurusd_15m_synthetic.csv are SYNTHETIC and were built around those levels;
they are not historical EUR/USD quotes.

Outputs (written to ./output):
    bullish-order-block-eurusd.png   3200 x 1800 px (1600 x 900 @ 2x)
    bullish-order-block-eurusd.html  interactive, editable Plotly preview

Usage:
    python order_block_bullish_eurusd.py
"""

from __future__ import annotations

import csv
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path

import plotly.graph_objects as go

HERE = Path(__file__).resolve().parent
DATA_FILE = HERE / "data" / "eurusd_15m_synthetic.csv"
OUT_DIR = HERE / "output"
OUT_NAME = "bullish-order-block-eurusd"

PIP = 0.0001
BAR = timedelta(minutes=15)

# --- Levels quoted from the Order Blocks guide (do not change without updating the doc) ---
OB_LOW, OB_HIGH = 1.0855, 1.0862  # last bearish candle before displacement
DISPLACEMENT_HIGH = 1.0910  # "massive green candle explodes to 1.0910"
PULLBACK_LOW = 1.0860  # "price pulls back to 1.0860 (inside the OB)"
ENTRY, STOP, TARGET = 1.0861, 1.0850, 1.0920

# --- Levels defined by the synthetic candles (illustrative structure) ---
LOWER_HIGH = 1.0896  # last lower high of the sell-off; broken by displacement -> CHOCH
PRIOR_HIGH = 1.0920  # prior swing high = buy-side liquidity = the guide's target

# --- Times (BD, UTC+6) ---
T_PRIOR_HIGH = "10:30"
T_LOWER_HIGH = "12:15"
T_OB = "13:30"
T_DISPLACEMENT = "13:45"
T_RETEST = "15:30"
T_PROJECTION_END = "17:45"

# --- Design tokens (palette validated for CVD with the dataviz validator) ---
FONT = "Inter, 'Helvetica Neue', Arial, sans-serif"
MONO = "'JetBrains Mono', 'SFMono-Regular', Menlo, monospace"
SURFACE = "#FCFCFB"
INK = "#1A1D21"
INK_2 = "#4B5563"
INK_3 = "#8A93A0"
GRID = "#ECEEF1"
BULL = "#0F8A78"
BEAR = "#C8484B"
ZONE = "#3B6FD8"


@dataclass(frozen=True)
class Candle:
    t: datetime
    label: str
    o: float
    h: float
    l: float
    c: float


def at(hhmm: str) -> datetime:
    """Map a BD clock time onto a fixed placeholder date (only the time is shown)."""
    h, m = map(int, hhmm.split(":"))
    return datetime(2000, 1, 3, h, m)


def load_candles(path: Path) -> list[Candle]:
    with path.open(newline="") as f:
        rows = csv.DictReader(line for line in f if not line.startswith("#"))
        return [
            Candle(at(r["time_bd"]), r["time_bd"], *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows
        ]


def validate(candles: list[Candle]) -> dict[str, float]:
    """Fail loudly if the chart would contradict the levels or rules in the guide."""
    by_time = {c.label: c for c in candles}
    for c in candles:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h, f"bad OHLC at {c.label}"

    ob, disp, retest = by_time[T_OB], by_time[T_DISPLACEMENT], by_time[T_RETEST]
    assert ob.c < ob.o, "OB candle must be bearish"
    assert (ob.l, ob.h) == (OB_LOW, OB_HIGH), "OB candle range must equal the guide's OB zone"
    assert disp.c > disp.o and disp.c > LOWER_HIGH, "displacement must close above the last lower high"
    assert max(c.h for c in candles if c.t > disp.t and c.t < retest.t) == DISPLACEMENT_HIGH
    assert retest.l == PULLBACK_LOW and OB_LOW <= retest.l <= OB_HIGH, "retest must tag the OB"
    assert retest.l <= ENTRY <= retest.h, "entry must be inside the retest candle range"
    assert STOP < OB_LOW and TARGET == PRIOR_HIGH

    bodies = [abs(c.c - c.o) for c in candles if c.t < disp.t]
    avg_body = sum(bodies) / len(bodies)
    disp_body = abs(disp.c - disp.o)
    assert disp_body >= 2 * avg_body, "guide's displacement rule: body >= 2x average"

    risk = round((ENTRY - STOP) / PIP, 1)
    reward = round((TARGET - ENTRY) / PIP, 1)
    dealing_eq = (OB_LOW + DISPLACEMENT_HIGH) / 2
    assert OB_HIGH < dealing_eq, "bullish OB must sit in discount"
    return {
        "risk_pips": risk,
        "reward_pips": reward,
        "rr": reward / risk,
        "disp_body_pips": round(disp_body / PIP, 1),
        "avg_body_pips": round(avg_body / PIP, 1),
        "dealing_eq": dealing_eq,
    }


def label(fig, x, y, text, *, color=INK_2, size=13, xanchor="left", yanchor="middle", align="left", bold=False,
          **kw):
    fig.add_annotation(
        x=x, y=y, text=f"<b>{text}</b>" if bold else text, showarrow=False, xanchor=xanchor, yanchor=yanchor,
        font=dict(family=FONT, size=size, color=color), align=align, **kw,
    )


def build_figure(candles: list[Candle], stats: dict[str, float]) -> go.Figure:
    fig = go.Figure()
    half = BAR * 0.36
    box_x0, box_x1 = at(T_RETEST) - half, at(T_PROJECTION_END)

    # Candles: bullish hollow, bearish filled — shape encodes direction, not only hue.
    fig.add_trace(
        go.Candlestick(
            x=[c.t for c in candles], open=[c.o for c in candles], high=[c.h for c in candles],
            low=[c.l for c in candles], close=[c.c for c in candles], name="EUR/USD 15m (synthetic)",
            increasing=dict(line=dict(color=BULL, width=1.6), fillcolor=SURFACE),
            decreasing=dict(line=dict(color=BEAR, width=1.6), fillcolor=BEAR),
            whiskerwidth=0, xhoverformat="%H:%M BD", yhoverformat=".4f", showlegend=False,
        )
    )

    # Position: risk and reward boxes, drawn first so candles sit on top.
    fig.add_shape(type="rect", x0=box_x0, x1=box_x1, y0=ENTRY, y1=TARGET, line_width=0,
                  fillcolor=BULL, opacity=0.08, layer="below")
    fig.add_shape(type="rect", x0=box_x0, x1=box_x1, y0=STOP, y1=ENTRY, line_width=0,
                  fillcolor=BEAR, opacity=0.12, layer="below")

    # Bullish Order Block zone: from the OB candle to the retest.
    fig.add_shape(type="rect", x0=at(T_OB) - half, x1=box_x0, y0=OB_LOW, y1=OB_HIGH,
                  line=dict(color=ZONE, width=1.2), fillcolor=ZONE, opacity=0.16, layer="below")

    # Prior swing high / buy-side liquidity, which is also the guide's target.
    fig.add_shape(type="line", x0=at(T_PRIOR_HIGH), x1=box_x0, y0=PRIOR_HIGH, y1=PRIOR_HIGH,
                  line=dict(color=INK_3, width=1.2, dash="dot"))
    # Last lower high, broken by the displacement candle.
    fig.add_shape(type="line", x0=at(T_LOWER_HIGH), x1=at(T_DISPLACEMENT), y0=LOWER_HIGH, y1=LOWER_HIGH,
                  line=dict(color=INK_2, width=1.2, dash="dash"))

    # Trade levels across the position box.
    for y, color, dash in ((TARGET, BULL, "solid"), (ENTRY, INK, "solid"), (STOP, BEAR, "solid")):
        fig.add_shape(type="line", x0=box_x0, x1=box_x1, y0=y, y1=y, line=dict(color=color, width=1.6, dash=dash))

    # Hypothetical continuation (scenario, not an outcome).
    fig.add_annotation(
        x=at("17:30"), y=TARGET - 2 * PIP, ax=at("16:00") + half, ay=1.0881, xref="x", yref="y", axref="x", ayref="y",
        showarrow=True, arrowhead=2, arrowsize=1.1, arrowwidth=1.6, arrowcolor=INK_3, text="", standoff=2,
    )
    fig.add_shape(type="line", x0=at("16:00") + half, y0=1.0881, x1=at("17:30"), y1=TARGET - 2 * PIP,
                  line=dict(color=SURFACE, width=0))  # keeps the arrow in the autorange
    label(fig, at("16:30"), 1.0887, "Hypothetical path to target<br>— a scenario, not a result", color=INK_3,
          size=12, yanchor="top")

    # --- Direct labels ---------------------------------------------------------
    label(fig, at("10:45"), PRIOR_HIGH + 1.6 * PIP,
          "Prior swing high 1.0920 · buy-side liquidity", color=INK_2, size=13, yanchor="bottom")
    label(fig, at(T_LOWER_HIGH), LOWER_HIGH + 1.0 * PIP, "Last lower high 1.0896", size=13, yanchor="bottom",
          xshift=-6)
    label(fig, at(T_DISPLACEMENT) - half, LOWER_HIGH + 1.0 * PIP, "CHOCH", color=INK, size=13, xanchor="right",
          yanchor="bottom", bold=True, xshift=-6)
    fig.add_annotation(  # displacement
        x=at(T_DISPLACEMENT) - half, y=1.0904, ax=at("13:00"), ay=1.09085, axref="x", ayref="y",
        text=(f"<b>Displacement</b> · {stats['disp_body_pips']:.0f}-pip body vs "
              f"{stats['avg_body_pips']:.1f}-pip average<br>closes above 1.0896 → structure shift"),
        showarrow=True, arrowhead=2, arrowsize=1, arrowwidth=1.2, arrowcolor=INK_2, standoff=4,
        xanchor="right", align="right", font=dict(family=FONT, size=13, color=INK_2),
    )
    label(fig, at(T_OB) - half, (OB_LOW + OB_HIGH) / 2 - 1.2 * PIP,
          "<b style='color:#2F5BB7'>Bullish Order Block 1.0855 – 1.0862</b><br>"
          "last bearish candle before displacement · in discount",
          size=12.5, xanchor="right", align="right", xshift=-10)
    fig.add_annotation(  # retest + confirmation
        x=at(T_RETEST), y=PULLBACK_LOW, ax=at("14:40"), ay=1.08515, axref="x", ayref="y",
        text="<b>Retest of the OB (low 1.0860)</b><br>5m bullish engulfing → long entry",
        showarrow=True, arrowhead=2, arrowsize=1, arrowwidth=1.2, arrowcolor=INK_2, standoff=3,
        xanchor="center", yanchor="top", align="left", font=dict(family=FONT, size=13, color=INK_2),
    )

    # Position labels at the right edge of the box.
    r = stats
    label(fig, box_x1, TARGET, f"TP 1.0920 · +{r['reward_pips']:.0f} pips", color=BULL, size=13,
          xanchor="right", yanchor="bottom", bold=True, yshift=2)
    label(fig, box_x1, ENTRY, "Entry 1.0861", color=INK, size=13, xanchor="right", yanchor="bottom", bold=True,
          yshift=2)
    label(fig, box_x1, STOP, f"SL 1.0850 · −{r['risk_pips']:.0f} pips", color=BEAR, size=13,
          xanchor="right", yanchor="top", bold=True, yshift=-2)
    label(fig, box_x1, STOP - 4.2 * PIP, "Invalidation: 15m close below 1.0850", color=INK_3, size=12,
          xanchor="right", yanchor="top")
    fig.add_annotation(
        x=at("17:05"), y=1.0869, text=f"<b>R:R  1 : {r['rr']:.1f}</b>", showarrow=False,
        font=dict(family=FONT, size=15, color=INK), bgcolor="#FFFFFF", bordercolor=BULL, borderwidth=1.2,
        borderpad=6,
    )

    # --- Title block, key, footnote (paper coordinates) -----------------------
    fig.add_annotation(xref="paper", yref="paper", x=0, y=1.105, xanchor="left", yanchor="bottom",
                       showarrow=False, text="<b>Bullish Order Block — Retest Entry After Displacement</b>",
                       font=dict(family=FONT, size=26, color=INK))
    fig.add_annotation(xref="paper", yref="paper", x=0, y=1.06, xanchor="left", yanchor="bottom",
                       showarrow=False,
                       text="EUR/USD · 15-minute · London session · Times in Bangladesh time (BD, UTC+6)",
                       font=dict(family=FONT, size=15, color=INK_2))
    fig.add_annotation(xref="paper", yref="paper", x=1, y=1.06, xanchor="right", yanchor="bottom",
                       showarrow=False,
                       text=(f"<span style='color:{BULL}'>□</span> Bullish candle    "
                             f"<span style='color:{BEAR}'>▮</span> Bearish candle    "
                             f"<span style='color:{ZONE}'>■</span> Order Block"),
                       font=dict(family=FONT, size=13, color=INK_2))
    fig.add_annotation(xref="paper", yref="paper", x=0, y=-0.115, xanchor="left", yanchor="top",
                       showarrow=False,
                       text=("<b>Educational illustration.</b> Synthetic candles built around the levels in the "
                             "Order Blocks guide — not historical EUR/USD prices, not a live trade, "
                             "not financial advice."),
                       font=dict(family=FONT, size=12, color=INK_3))

    fig.update_layout(
        width=1600, height=900, paper_bgcolor=SURFACE, plot_bgcolor=SURFACE,
        margin=dict(l=40, r=96, t=118, b=96), font=dict(family=FONT, color=INK_2, size=13),
        hovermode="x", hoverlabel=dict(font=dict(family=MONO, size=12), bgcolor="#FFFFFF"),
        xaxis=dict(
            type="date", range=[at("09:45"), at("18:00")], rangeslider_visible=False,
            tickformat="%H:%M", dtick=60 * 60 * 1000, showgrid=True, gridcolor=GRID, zeroline=False,
            showline=True, linecolor="#C9CED6", ticks="outside", tickcolor="#C9CED6", ticklen=5,
            tickfont=dict(family=MONO, size=12, color=INK_2),
            title=dict(text="Time (BD, UTC+6)", font=dict(size=12, color=INK_3), standoff=10),
        ),
        yaxis=dict(
            side="right", range=[1.08405, 1.09305], dtick=0.0010, tickformat=".4f", showgrid=True,
            gridcolor=GRID, zeroline=False, showline=True, linecolor="#C9CED6", ticks="outside",
            tickcolor="#C9CED6", ticklen=5, tickfont=dict(family=MONO, size=12, color=INK_2),
            title=dict(text="Price", font=dict(size=12, color=INK_3), standoff=8),
        ),
    )
    return fig


def main() -> None:
    candles = load_candles(DATA_FILE)
    stats = validate(candles)
    fig = build_figure(candles, stats)

    OUT_DIR.mkdir(exist_ok=True)
    png, html = OUT_DIR / f"{OUT_NAME}.png", OUT_DIR / f"{OUT_NAME}.html"
    fig.write_image(png, scale=2)
    fig.write_html(
        html, include_plotlyjs="cdn", full_html=True,
        config={"editable": True, "displaylogo": False,
                "toImageButtonOptions": {"format": "png", "filename": OUT_NAME, "scale": 2}},
    )
    print(f"risk {stats['risk_pips']:.0f} pips · reward {stats['reward_pips']:.0f} pips · "
          f"R:R 1:{stats['rr']:.2f} · EQ {stats['dealing_eq']:.5f}")
    print(f"wrote {png.relative_to(HERE)}\nwrote {html.relative_to(HERE)}")


if __name__ == "__main__":
    main()
