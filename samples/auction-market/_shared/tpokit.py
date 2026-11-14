"""TPO (Market Profile) helpers: letters per price from 30-minute period ranges, POC, value area, and a plotly drawer."""

import string

import plotly.graph_objects as go

from chartkit import FONT, Candle
from ofkit import value_area

LETTERS = string.ascii_uppercase


def period_candles(periods):
    """periods: [(high, low)] -> Candle objects (for Reveal.visible) with letters as labels."""
    return [Candle(i, LETTERS[i], (h + l) / 2, h, l, (h + l) / 2) for i, (h, l) in enumerate(periods)]


def tpo_rows(periods, tick):
    """{price: [period index, ...]} - each period prints its letter at every tick its range covers."""
    rows = {}
    for i, (h, l) in enumerate(periods):
        for k in range(round(l / tick), round(h / tick) + 1):
            rows.setdefault(round(k * tick, 8), []).append(i)
    return rows


def profile_stats(rows):
    """(poc, val, vah, counts) with the standard 70% value area built outward from the POC row."""
    counts = {p: len(v) for p, v in rows.items()}
    poc, val, vah = value_area(counts)
    return poc, val, vah, counts


def draw_tpo(fig, t, rows, n_periods, tick, *, poc, val, vah, colors=None, size=12, row=None, col=None, alpha=1.0,
             first_period=0, last_period=None):
    """Plot letters (periods < n_periods only). POC row accent, value-area rows ink, others muted."""
    last_period = n_periods if last_period is None else last_period
    kw = dict(row=row, col=col) if row else {}
    for p in sorted(rows):
        idx = [i for i in rows[p] if first_period <= i < min(n_periods, last_period)]
        if not idx:
            continue
        base = t.accent if p == poc else (t.ink if val <= p <= vah else t.ink3)
        cols = [(colors or {}).get(i, base) for i in idx]
        fig.add_trace(go.Scatter(x=list(range(len(idx))), y=[p] * len(idx), mode="text", text=[LETTERS[i] for i in idx],
                                 textfont=dict(family=FONT, size=size, color=cols), opacity=alpha, showlegend=False,
                                 hoverinfo="skip"), **kw)
