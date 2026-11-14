"""
Absorption and exhaustion on a synthetic 5-minute session: a decline reaches a support at 1.0850 where heavy volume and
strongly negative delta fail to push price lower (absorption), price rallies on steadily fading delta and volume, and a
final spike on low volume reverses (exhaustion).

Candles: data/eurusd_5m_abs.csv (synthetic, with volume and per-bar delta).
"""

import csv

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "absorption-exhaustion"
SUPPORT = 1.0850


def load():
    with (DATA / "eurusd_5m_abs.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    cs = [Candle(int(r["i"]), f"5m {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close"))) for r in rows]
    return cs, [int(r["volume"]) for r in rows], [int(r["delta"]) for r in rows]


C, V, D = load()
N = len(C)
ABS = (12, 15)          # absorption bars: 12, 13, 14
RALLY = (15, 30)
EXH = 30
AVG_V = sum(V[:12]) / 12


def bd(i):
    h, m = divmod(9 * 60 + 30 + 5 * i, 60)
    return f"{h}:{m:02d}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(C[i].l >= SUPPORT - 1e-9 for i in range(*ABS)) and min(c.l for c in C[:12]) > SUPPORT
    assert all(V[i] > 1.8 * AVG_V for i in range(*ABS)) and sum(D[12:15]) < -2500, "heavy volume and heavy negative delta"
    assert C[14].c > C[12].c and C[RALLY[1] - 1].c - C[14].c > 0.0014, "price holds, then rallies"
    r = D[RALLY[0]:RALLY[1]]
    assert all(a >= b for a, b in zip(r, r[1:])), "delta fades through the rally"
    assert V[EXH] < 0.5 * AVG_V and C[EXH].h == max(c.h for c in C) and C[EXH].c < C[EXH].h - 0.0003, "low-volume spike high"
    assert C[-1].c < C[EXH].c - 0.0010 and sum(D[31:]) < -3000, "reversal on negative delta"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=3, cols=1, shared_xaxes=True, vertical_spacing=0.045, row_heights=[0.5, 0.2, 0.3])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    k = len(shown)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    fig.add_trace(go.Bar(x=list(range(k)), y=V[:k], marker_color=[t.bull if c.c >= c.o else t.bear for c in shown], opacity=0.8,
                         showlegend=False, hoverinfo="skip"), row=2, col=1)
    fig.add_trace(go.Bar(x=list(range(k)), y=D[:k], marker_color=[t.bull if d >= 0 else t.bear for d in D[:k]], opacity=0.85,
                         showlegend=False, hoverinfo="skip"), row=3, col=1)
    for row_key, txt in ((2, "Volume"), (3, "Delta per bar")):
        dom = fig.layout[f"yaxis{row_key}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom",
                           showarrow=False, font=dict(family=FONT, size=12, color=t.ink2), text=f"<b>{txt}</b>")
    with ch.group("support"):
        ch.hline(0, N, SUPPORT, color=t.bull_text, dash="dash", row=1, col=1)
        ch.label(0.2, SUPPORT - 0.00004, "support 1.0850", size=11, color=t.bull_text, yanchor="top", row=1, col=1)
    with ch.group("abs"):
        ch.zone(ABS[0] - 0.5, ABS[1] - 0.5, 1.0847, 1.0864, color=t.bull, alpha=0.10, row=1, col=1)
        ch.label(13, 1.08665, f"<b>Absorption</b><br>volume {V[12]:,} / {V[13]:,} / {V[14]:,} (≈ 2.4× average)<br>"
                 f"delta {sum(D[12:15]):,} — yet the low holds", size=11, color=t.bull_text, xanchor="center", yanchor="bottom",
                 align="center", row=1, col=1)
    with ch.group("rally"):
        ch.label(22, 1.0881, f"rally: delta fades from +{D[15]} to +{D[29]}<br>and volume from {V[15]:,} to {V[29]:,}", size=11,
                 color=t.ink2, xanchor="center", yanchor="bottom", align="center", row=1, col=1)
    with ch.group("exh"):
        ch.label(EXH, C[EXH].h + 0.0002, f"<b>Exhaustion</b><br>new high on {V[EXH]:,} volume<br>(≈ 0.5× average, delta +{D[EXH]})",
                 size=11, color=t.bear_text, xanchor="center", yanchor="bottom", align="center", row=1, col=1)
        ch.label(37, 1.0868, f"price falls on delta of {sum(D[31:]):,}", size=11, color=t.bear_text, xanchor="center",
                 yanchor="bottom", row=1, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False, range=[-1, N + 0.5])
    fig.update_xaxes(showticklabels=False, **xa)
    ticks = list(range(0, N, 6))
    fig.update_xaxes(showticklabels=True, tickvals=ticks, ticktext=[bd(i) for i in ticks], tickfont=dict(size=11, color=t.ink2),
                     row=3, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(tickformat=".4f", range=[1.0845, 1.0890], row=1, col=1)
    fig.update_yaxes(range=[0, 4000], dtick=1000, row=2, col=1)
    fig.update_yaxes(range=[-1400, 800], row=3, col=1)
    ch.header("Order Flow · Absorption and Exhaustion", "Effort That Goes Nowhere — and Moves That Run Out of Fuel",
              "Synthetic EUR/USD 5-minute session · absorption at support, a rally on fading delta, and an exhaustion spike",
              key=[("▮", t.bull, "Up bar / positive delta"), ("▮", t.bear, "Down bar / negative delta")])
    ch.footnote("Synthetic data; absorption and exhaustion are interpretations after the fact — confirm with price and use a stop")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Absorption and Exhaustion", OUT)
    print(NAME, f"avgV {AVG_V:.0f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
