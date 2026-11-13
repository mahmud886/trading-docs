"""
Put/call ratio as a contrarian gauge — synthetic index closes and a synthetic equity put/call ratio.

Source: content/en/ict/put-call-ratio.mdx (rewritten). The ratio is built to rise when price falls, plus noise, so the
chart shows both a working extreme and a failed one. Not real data.
"""

import random

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "put-call-ratio"
N = 120
HIGH_T, LOW_T = 1.00, 0.45


def make():
    rnd = random.Random(7)
    drift = [0.25] * 25 + [-0.9] * 15 + [0.55] * 25 + [-0.6] * 10 + [-0.9] * 15 + [0.5] * 30
    price, prices = 100.0, []
    for d in drift:
        price += d + rnd.uniform(-0.7, 0.7)
        prices.append(round(price, 2))
    ratio = []
    for i, p in enumerate(prices):
        back = prices[max(0, i - 5)]
        r = 0.70 - 0.07 * (p - back) + rnd.uniform(-0.06, 0.06)
        ratio.append(round(min(max(r, 0.4), 1.3), 3))
    return prices, ratio


PRICES, RATIO = make()
HIGHS = [i for i, r in enumerate(RATIO) if r >= HIGH_T]
LOWS = [i for i, r in enumerate(RATIO) if r <= LOW_T]


def validate():
    assert HIGHS and LOWS, "the sample has both extremes"
    after = [PRICES[min(i + 10, N - 1)] - PRICES[i] for i in HIGHS]
    assert any(d > 0 for d in after) and any(d < 0 for d in after), "some fear extremes worked, some didn't"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.10, row_heights=[0.55, 0.45])
    ch = Chart(t, reveal, top=170, left=60, fig=fig)
    fig.update_layout(hovermode=False, showlegend=False)
    xs = list(range(N))
    fig.add_trace(go.Scatter(x=xs, y=PRICES, mode="lines", line=dict(color=t.ink, width=2.2)), row=1, col=1)
    with ch.group("ratio") as shown:
        if shown:
            a = ch.reveal.alpha("ratio")
            fig.add_trace(go.Scatter(x=xs, y=RATIO, mode="lines", line=dict(color=t.accent, width=1.8), opacity=a),
                          row=2, col=1)
    with ch.group("bands") as shown:
        if shown:
            a = ch.reveal.alpha("bands")
            for y, c, label in ((HIGH_T, t.bear, "≥ 1.00: fear"), (LOW_T, t.bull, "≤ 0.45: complacency")):
                fig.add_hline(y=y, line=dict(color=c, width=1.2, dash="dot"), opacity=a, row=2, col=1)
                fig.add_annotation(x=2, y=y, text=label, showarrow=False, xanchor="left",
                                   yanchor="bottom" if y > 0.8 else "top", font=dict(size=11, color=c),
                                   opacity=a, row=2, col=1)
    with ch.group("marks") as shown:
        if shown:
            a = ch.reveal.alpha("marks")
            fig.add_trace(go.Scatter(x=HIGHS, y=[PRICES[i] for i in HIGHS], mode="markers",
                                     marker=dict(size=9, color=t.bear, symbol="triangle-up"), opacity=a),
                          row=1, col=1)
            fig.add_trace(go.Scatter(x=LOWS, y=[PRICES[i] for i in LOWS], mode="markers",
                                     marker=dict(size=9, color=t.bull, symbol="triangle-down"), opacity=a),
                          row=1, col=1)
    for row, (title, sub) in enumerate((("Index (synthetic)", "▲ fear extreme · ▼ complacency extreme"),
                                        ("Equity put/call ratio (synthetic)", "rises when traders buy protection")),
                                       1):
        dom = fig.layout[f"yaxis{'' if row == 1 else row}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=6, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=15, color=t.ink),
                           text=f"<b>{title}</b>  <span style='color:{t.ink2};font-size:12px'>{sub}</span>")
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False,
                     fixedrange=True)
    fig.update_xaxes(showticklabels=True, tickfont=dict(size=11, color=t.ink2), title=dict(
        text="trading days", font=dict(size=12, color=t.ink3)), row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, zeroline=False, side="right", fixedrange=True,
                     tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[0.35, 1.35], row=2, col=1)
    ch.header("Options · Put/Call Ratio", "Put/Call Ratio — Fear and Complacency at the Extremes",
              "Synthetic data · extremes often come near turning points, but not always: some extremes keep going",
              key=[("▲", t.bear, "Fear"), ("▼", t.bull, "Complacency")])
    ch.footnote("Synthetic index and ratio built to illustrate the Put/Call Ratio lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Put/Call Ratio", OUT)
    print(f"{NAME}: highs {HIGHS} lows {LOWS} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
