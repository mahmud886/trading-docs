"""Helpers for charts with a volume panel: CSV with a volume column, and a two-row price/volume figure."""

import csv

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from chartkit import FONT, Candle, Chart, Reveal


def write_ohlcv(path, rows, volumes, title, dp=4):
    """rows: (o, h, l, c) tuples from sdkit.from_closes; volumes: same length."""
    assert len(rows) == len(volumes), (len(rows), len(volumes))
    with path.open("w", newline="\n") as f:
        f.write(f"# {title} (not real prices)\n")
        w = csv.writer(f, lineterminator="\n")
        w.writerow(["i", "open", "high", "low", "close", "volume"])
        for k, (r, v) in enumerate(zip(rows, volumes)):
            w.writerow([k, *(f"{x:.{dp}f}" for x in r), v])


def load_ohlcv(path, unit_label="bar"):
    with path.open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    candles = [Candle(int(r["i"]), f"{unit_label} {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
               for r in rows]
    return candles, [int(r["volume"]) for r in rows]


def price_volume(t, reveal, C, V, *, x_range, price_range, price_fmt, vol_max, vol_dtick, name, x_ticks=None,
                 top=150, text=None, vol_label="Volume"):
    """Return (fig, ch). Draw price-panel marks with row=1, col=1."""
    n = len(C)
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.06, row_heights=[0.70, 0.30])
    ch = Chart(t, reveal, top=top, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    ch.candles(C, name, price_fmt=price_fmt, x=list(range(n)), text=text, row=1, col=1)
    fig.add_trace(go.Bar(x=list(range(len(shown))), y=V[:len(shown)],
                         marker_color=[t.bull if c.c >= c.o else t.bear for c in shown], opacity=0.8,
                         showlegend=False, hoverinfo="skip"), row=2, col=1)
    dom = fig.layout["yaxis2"].domain
    fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom",
                       showarrow=False, font=dict(family=FONT, size=12, color=t.ink2), text=f"<b>{vol_label}</b>")
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False,
              range=list(x_range))
    fig.update_xaxes(showticklabels=False, **xa)
    if x_ticks:
        fig.update_xaxes(showticklabels=True, tickvals=x_ticks[0], ticktext=x_ticks[1],
                         tickfont=dict(size=11, color=t.ink2), row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=list(price_range), tickformat=price_fmt, row=1, col=1)
    fig.update_yaxes(range=[0, vol_max], dtick=vol_dtick, row=2, col=1)
    return fig, ch
