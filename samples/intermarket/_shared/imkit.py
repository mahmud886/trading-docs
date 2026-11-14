"""Intermarket helpers: deterministic synthetic daily series, returns, correlation, and a line-chart panel builder."""

import csv
import math
import random
import statistics

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from chartkit import FONT, Chart, Reveal


def gauss(seed, n, sd=1.0):
    r = random.Random(seed)
    return [r.gauss(0, sd) for _ in range(n)]


def prices_from_returns(start, rets):
    out, p = [], start
    for r in rets:
        p *= 1 + r
        out.append(p)
    return out


def returns(prices):
    return [prices[i] / prices[i - 1] - 1 for i in range(1, len(prices))]


def corr(a, b):
    return statistics.correlation(a, b)


def rolling_corr(a, b, w):
    """Correlation of the last w values at each point (None until w values exist)."""
    return [None if i + 1 < w else corr(a[i + 1 - w:i + 1], b[i + 1 - w:i + 1]) for i in range(len(a))]


def write_series(path, cols, title, dp=4):
    names = list(cols)
    n = len(cols[names[0]])
    assert all(len(v) == n for v in cols.values())
    with path.open("w", newline="\n") as f:
        f.write(f"# {title} (synthetic, not real prices)\n")
        w = csv.writer(f, lineterminator="\n")
        w.writerow(["day", *names])
        for i in range(n):
            w.writerow([i, *(f"{cols[k][i]:.{dp}f}" for k in names)])


def load_series(path):
    with path.open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return {k: [float(r[k]) for r in rows] for k in rows[0] if k != "day"}


def shown_n(ch, n):
    """How many points are visible (the reveal's candle count, or all)."""
    c = ch.reveal.candles
    return n if c is None else max(0, min(n, int(c)))


def rebased(prices):
    return [100 * p / prices[0] for p in prices]


def base_fig(rows, heights, vspace=0.08):
    return make_subplots(rows=rows, cols=1, shared_xaxes=True, vertical_spacing=vspace, row_heights=heights)


def line(ch, t, xs, ys, name, color, row, col=1, width=2.2, dash=None, k=None):
    k = len(xs) if k is None else k
    ch.fig.add_trace(go.Scatter(x=xs[:k], y=ys[:k], mode="lines", name=name, line=dict(color=color, width=width, dash=dash),
                                showlegend=False, hoverinfo="skip", connectgaps=False), row=row, col=col)


def panel_title(ch, t, row, text):
    dom = ch.fig.layout[f"yaxis{row}" if row > 1 else "yaxis"].domain
    ch.fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom", showarrow=False,
                          font=dict(family=FONT, size=12, color=t.ink2), text=f"<b>{text}</b>")
