"""
Delta on a synthetic 5-minute session: price makes a higher high on the second leg up, but the delta of that leg is
much weaker and cumulative delta makes a lower high — a divergence — before price falls on heavy negative delta.

Candles: data/eurusd_5m_delta.csv (synthetic, with per-bar delta in contracts).
"""

import csv

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "delta-divergence"


def load():
    with (DATA / "eurusd_5m_delta.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    cs = [Candle(int(r["i"]), f"5m {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close"))) for r in rows]
    return cs, [int(r["delta"]) for r in rows]


C, D = load()
N = len(C)
CVD = [sum(D[:i + 1]) for i in range(N)]
H1 = max(range(0, 14), key=lambda i: C[i].h)
H2 = max(range(20, 32), key=lambda i: C[i].h)


def bd(i):
    h, m = divmod(9 * 60 + 30 + 5 * i, 60)
    return f"{h}:{m:02d}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[H2].h > C[H1].h, "price makes a higher high"
    assert CVD[H2] < CVD[H1], "…while cumulative delta makes a lower high"
    assert sum(D[20:30]) < 0.3 * sum(D[:12]), "the second leg's delta is much weaker"
    assert CVD[-1] < CVD[H1] * 0.4 and C[-1].c < C[H1].c - 0.0010, "price falls afterwards on negative delta"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=3, cols=1, shared_xaxes=True, vertical_spacing=0.045, row_heights=[0.52, 0.2, 0.28])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    k = len(shown)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    fig.add_trace(go.Bar(x=list(range(k)), y=D[:k], marker_color=[t.bull if d >= 0 else t.bear for d in D[:k]], opacity=0.85,
                         showlegend=False, hoverinfo="skip"), row=2, col=1)
    fig.add_trace(go.Scatter(x=list(range(k)), y=CVD[:k], mode="lines", fill="tozeroy", line=dict(color=t.accent, width=2.4),
                             fillcolor="rgba(0,168,92,0.14)", showlegend=False, hoverinfo="skip"), row=3, col=1)
    for row_key, txt in ((2, "Delta per bar"), (3, "Cumulative delta")):
        dom = fig.layout[f"yaxis{row_key}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom",
                           showarrow=False, font=dict(family=FONT, size=12, color=t.ink2), text=f"<b>{txt}</b>")
    with ch.group("div"):
        fig.add_shape(type="line", x0=H1, y0=C[H1].h, x1=H2, y1=C[H2].h, line=dict(color=t.bear_text, width=2.4, dash="dot"),
                      row=1, col=1, opacity=ch._alpha)
        fig.add_shape(type="line", x0=H1, y0=CVD[H1], x1=H2, y1=CVD[H2], line=dict(color=t.bear_text, width=2.4, dash="dot"),
                      row=3, col=1, opacity=ch._alpha)
        ch.label((H1 + H2) / 2, C[H2].h + 0.0004, "<b>Higher high</b> in price…", size=12, color=t.bear_text,
                 xanchor="center", yanchor="bottom", row=1, col=1)
        ch.label((H1 + H2) / 2 + 2, CVD[H1] + 650, f"…but a <b>lower high</b> in cumulative delta ({CVD[H1]:,} → {CVD[H2]:,})",
                 size=12, color=t.bear_text, xanchor="center", yanchor="bottom", row=3, col=1)
    with ch.group("weak"):
        ch.label(25, max(D[20:30]) + 220, f"second leg: only +{sum(D[20:30])} in 10 bars<br>(first leg: +{sum(D[:12]):,} in 12)", size=11,
                 color=t.ink2, xanchor="center", yanchor="bottom", align="center", row=2, col=1)
    with ch.group("after"):
        ch.label(35, min(D[30:]) - 80, f"price falls on delta of {sum(D[30:]):,}", size=11, color=t.bear_text,
                 xanchor="center", yanchor="top", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False, range=[-1, N + 0.5])
    fig.update_xaxes(showticklabels=False, **xa)
    ticks = list(range(0, N, 6))
    fig.update_xaxes(showticklabels=True, tickvals=ticks, ticktext=[bd(i) for i in ticks], tickfont=dict(size=11, color=t.ink2),
                     row=3, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(tickformat=".4f", range=[1.0842, 1.0888], row=1, col=1)
    fig.update_yaxes(range=[-750, 700], row=2, col=1)
    fig.update_yaxes(range=[0, 5200], row=3, col=1)
    ch.header("Order Flow · Delta Analysis", "Delta — Price Makes a New High, the Buying Doesn't",
              "Synthetic EUR/USD 5-minute session · price, delta per bar and cumulative delta (contracts)",
              key=[("▮", t.bull, "Positive delta"), ("▮", t.bear, "Negative delta"), ("━", t.accent, "Cumulative delta")])
    ch.footnote("Synthetic data; divergences are clues, and many fail — confirm with price action and a stop")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Delta Divergence", OUT)
    print(NAME, f"H1 {H1} H2 {H2} CVD {CVD[H1]}→{CVD[H2]} final {CVD[-1]}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
