"""
Shared design system for the SMC sample charts.

Same tokens and conventions as samples/order-block-chart (the approved prototype):
hollow bullish / filled bearish candles, right-hand price axis, direct labels,
position boxes, and an "educational illustration" footnote on every chart.
"""

from __future__ import annotations

import csv
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path

import plotly.graph_objects as go

HERE = Path(__file__).resolve().parent
DATA_DIR = HERE / "data"
OUT_DIR = HERE / "output"

# --- Design tokens (palette validated for CVD with the dataviz validator) ---
FONT = "Inter, 'Helvetica Neue', Arial, sans-serif"
MONO = "'JetBrains Mono', 'SFMono-Regular', Menlo, monospace"
SURFACE = "#FCFCFB"
INK = "#1A1D21"
INK_2 = "#4B5563"
INK_3 = "#8A93A0"
GRID = "#ECEEF1"
AXIS = "#C9CED6"
BULL = "#0F8A78"
BEAR = "#C8484B"
ZONE = "#3B6FD8"
ZONE_TEXT = "#2F5BB7"
WIDTH, HEIGHT = 1600, 900
BAR = timedelta(minutes=15)

DISCLAIMER = "not historical prices, not a live trade, not financial advice."


@dataclass(frozen=True)
class Candle:
    t: datetime
    label: str
    o: float
    h: float
    l: float
    c: float

    @property
    def bullish(self) -> bool:
        return self.c > self.o

    @property
    def body(self) -> float:
        return abs(self.c - self.o)


def at(hhmm: str, day: int = 0) -> datetime:
    """Map a BD clock time onto a fixed placeholder date (only the time is shown)."""
    h, m = map(int, hhmm.split(":"))
    return datetime(2000, 1, 3 + day, h, m)


def load_candles(name: str) -> list[Candle]:
    """Read data/<name>.csv. Columns: day (optional), time_bd, open, high, low, close."""
    with (DATA_DIR / f"{name}.csv").open(newline="") as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    candles = [
        Candle(at(r["time_bd"], int(r.get("day") or 0)), r["time_bd"],
               *(float(r[k]) for k in ("open", "high", "low", "close")))
        for r in rows
    ]
    for c in candles:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h, f"bad OHLC at {c.label}"
    return candles


def by_time(candles: list[Candle], hhmm: str, day: int = 0) -> Candle:
    return next(c for c in candles if c.t == at(hhmm, day))


def is_engulfing(prev: Candle, cur: Candle) -> bool:
    if cur.bullish and not prev.bullish:
        return cur.o <= prev.c and cur.c >= prev.o
    if not cur.bullish and prev.bullish:
        return cur.o >= prev.c and cur.c <= prev.o
    return False


# --- Drawing helpers -------------------------------------------------------------


def new_figure() -> go.Figure:
    fig = go.Figure()
    fig.update_layout(
        width=WIDTH, height=HEIGHT, paper_bgcolor=SURFACE, plot_bgcolor=SURFACE,
        margin=dict(l=40, r=96, t=118, b=96), font=dict(family=FONT, color=INK_2, size=13),
        hovermode="x", hoverlabel=dict(font=dict(family=MONO, size=12), bgcolor="#FFFFFF"),
        showlegend=False,
    )
    return fig


def add_candles(fig, candles: list[Candle], name: str, *, price_fmt: str, row=None, col=None,
                time_fmt="%H:%M BD") -> None:
    """Bullish hollow, bearish filled — shape encodes direction, not only hue."""
    fig.add_trace(
        go.Candlestick(
            x=[c.t for c in candles], open=[c.o for c in candles], high=[c.h for c in candles],
            low=[c.l for c in candles], close=[c.c for c in candles], name=name,
            increasing=dict(line=dict(color=BULL, width=1.6), fillcolor=SURFACE),
            decreasing=dict(line=dict(color=BEAR, width=1.6), fillcolor=BEAR),
            whiskerwidth=0, xhoverformat=time_fmt, yhoverformat=price_fmt, showlegend=False,
        ),
        row=row, col=col,
    )


def label(fig, x, y, text, *, color=INK_2, size=13, xanchor="left", yanchor="middle", align="left",
          bold=False, **kw):
    fig.add_annotation(
        x=x, y=y, text=f"<b>{text}</b>" if bold else text, showarrow=False, xanchor=xanchor, yanchor=yanchor,
        font=dict(family=FONT, size=size, color=color), align=align, **kw,
    )


def callout(fig, x, y, ax, ay, text, *, xanchor="center", yanchor="middle", align="left", **kw):
    """Text at (ax, ay) with an arrow to (x, y); both in data coordinates."""
    fig.add_annotation(
        x=x, y=y, ax=ax, ay=ay, axref=kw.pop("axref", "x"), ayref=kw.pop("ayref", "y"), text=text,
        showarrow=True, arrowhead=2, arrowsize=1, arrowwidth=1.2, arrowcolor=INK_2, standoff=4,
        xanchor=xanchor, yanchor=yanchor, align=align, font=dict(family=FONT, size=13, color=INK_2), **kw,
    )


def hline(fig, x0, x1, y, *, color=INK_3, width=1.2, dash="dot"):
    fig.add_shape(type="line", x0=x0, x1=x1, y0=y, y1=y, line=dict(color=color, width=width, dash=dash))


def zone(fig, x0, x1, y0, y1, *, color=ZONE, opacity=0.16, border=True, dash="solid"):
    fig.add_shape(type="rect", x0=x0, x1=x1, y0=y0, y1=y1, layer="below", fillcolor=color, opacity=opacity,
                  line=dict(color=color, width=1.2 if border else 0, dash=dash))


def position(fig, x0, x1, *, entry, stop, targets, unit, unit_name, fmt, long: bool):
    """Risk/reward boxes + labelled levels. Returns (risk, [(target, reward, rr), ...])."""
    risk = round(abs(entry - stop) / unit, 1)
    far = max(targets, key=lambda t: abs(t - entry))
    fig.add_shape(type="rect", x0=x0, x1=x1, y0=entry, y1=far, line_width=0, fillcolor=BULL, opacity=0.08,
                  layer="below")
    fig.add_shape(type="rect", x0=x0, x1=x1, y0=stop, y1=entry, line_width=0, fillcolor=BEAR, opacity=0.12,
                  layer="below")
    up, down = ("bottom", "top") if long else ("top", "bottom")
    shift = 2 if long else -2

    out = []
    for i, t in enumerate(targets, 1):
        reward = round(abs(t - entry) / unit, 1)
        rr = reward / risk
        out.append((t, reward, rr))
        name = f"TP{i}" if len(targets) > 1 else "TP"
        hline(fig, x0, x1, t, color=BULL, width=1.6, dash="solid")
        label(fig, x1, t, f"{name} {t:{fmt}} · +{reward:g} {unit_name} · 1 : {rr:.1f}", color=BULL,
              xanchor="right", yanchor=up, bold=True, yshift=shift)
    hline(fig, x0, x1, entry, color=INK, width=1.6, dash="solid")
    label(fig, x1, entry, f"Entry {entry:{fmt}}", color=INK, xanchor="right", yanchor=up, bold=True, yshift=shift)
    hline(fig, x0, x1, stop, color=BEAR, width=1.6, dash="solid")
    label(fig, x1, stop, f"SL {stop:{fmt}} · −{risk:g} {unit_name}", color=BEAR, xanchor="right",
          yanchor=down, bold=True, yshift=-shift)
    return risk, out


def projection(fig, x0, y0, x1, y1, text, tx, ty, **kw):
    """Grey dashed-looking arrow for a hypothetical path — explicitly not an outcome."""
    fig.add_annotation(x=x1, y=y1, ax=x0, ay=y0, xref="x", yref="y", axref="x", ayref="y", showarrow=True,
                       arrowhead=2, arrowsize=1.1, arrowwidth=1.6, arrowcolor=INK_3, text="", standoff=2)
    label(fig, tx, ty, text, color=INK_3, size=12, **kw)


def header(fig, title: str, subtitle: str, *, key: bool = True, zone_name: str = "Zone"):
    fig.add_annotation(xref="paper", yref="paper", x=0, y=1.105, xanchor="left", yanchor="bottom",
                       showarrow=False, text=f"<b>{title}</b>", font=dict(family=FONT, size=26, color=INK))
    fig.add_annotation(xref="paper", yref="paper", x=0, y=1.06, xanchor="left", yanchor="bottom",
                       showarrow=False, text=subtitle, font=dict(family=FONT, size=15, color=INK_2))
    if key:
        fig.add_annotation(xref="paper", yref="paper", x=1, y=1.06, xanchor="right", yanchor="bottom",
                           showarrow=False,
                           text=(f"<span style='color:{BULL}'>□</span> Bullish candle    "
                                 f"<span style='color:{BEAR}'>▮</span> Bearish candle    "
                                 f"<span style='color:{ZONE}'>■</span> {zone_name}"),
                           font=dict(family=FONT, size=13, color=INK_2))


def footnote(fig, source: str):
    fig.add_annotation(xref="paper", yref="paper", x=0, y=-0.115, xanchor="left", yanchor="top",
                       showarrow=False,
                       text=f"<b>Educational illustration.</b> {source} — {DISCLAIMER}",
                       font=dict(family=FONT, size=12, color=INK_3))


def axes(fig, *, x_range, y_range, y_dtick, y_fmt, x_dtick_min=60, x_title="Time (BD, UTC+6)", **xkw):
    fig.update_xaxes(
        type="date", range=x_range, rangeslider_visible=False, tickformat="%H:%M",
        dtick=x_dtick_min * 60 * 1000, showgrid=True, gridcolor=GRID, zeroline=False, showline=True,
        linecolor=AXIS, ticks="outside", tickcolor=AXIS, ticklen=5, tickfont=dict(family=MONO, size=12, color=INK_2),
        title=dict(text=x_title, font=dict(size=12, color=INK_3), standoff=10), **xkw,
    )
    fig.update_yaxes(
        side="right", range=y_range, dtick=y_dtick, tickformat=y_fmt, showgrid=True, gridcolor=GRID,
        zeroline=False, showline=True, linecolor=AXIS, ticks="outside", tickcolor=AXIS, ticklen=5,
        tickfont=dict(family=MONO, size=12, color=INK_2), title=dict(text="Price", font=dict(size=12, color=INK_3),
                                                                      standoff=8),
    )


def save(fig, name: str) -> tuple[Path, Path]:
    OUT_DIR.mkdir(exist_ok=True)
    png, html = OUT_DIR / f"{name}.png", OUT_DIR / f"{name}.html"
    fig.write_image(png, scale=2)
    fig.write_html(
        html, include_plotlyjs="cdn", full_html=True,
        config={"editable": True, "displaylogo": False,
                "toImageButtonOptions": {"format": "png", "filename": name, "scale": 2}},
    )
    return png, html
