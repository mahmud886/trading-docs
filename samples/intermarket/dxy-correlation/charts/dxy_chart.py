"""
DXY and the major pairs. Left: the published DXY basket weights (EUR 57.6%, JPY 13.6%, GBP 11.9%, CAD 9.1%, SEK 4.2%,
CHF 3.6%). Right: the correlation of daily returns between each pair and DXY in 120 synthetic days: pairs quoted with the
dollar as the quote currency move against DXY, pairs with the dollar as base currency move with it, and the strength
follows how much of the basket the other currency makes up.

Data: data/dxy_pairs_returns.csv (synthetic).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import corr, load_series

NAME = "dxy-pairs"
WEIGHTS = [("EUR", 57.6), ("JPY", 13.6), ("GBP", 11.9), ("CAD", 9.1), ("SEK", 4.2), ("CHF", 3.6)]
D = load_series(DATA / "dxy_pairs_returns.csv")
PAIRS = ["EURUSD", "GBPUSD", "USDCHF", "USDCAD", "USDJPY", "AUDUSD"]
LABEL = {"EURUSD": "EUR/USD", "GBPUSD": "GBP/USD", "USDCHF": "USD/CHF", "USDCAD": "USD/CAD", "USDJPY": "USD/JPY", "AUDUSD": "AUD/USD"}
CORR = {p: corr(D["dxy"], D[p]) for p in PAIRS}


def validate():
    assert abs(sum(w for _, w in WEIGHTS) - 100.0) < 0.05, "published weights sum to 100"
    assert all(CORR[p] < -0.3 for p in ("EURUSD", "GBPUSD", "AUDUSD")), "dollar-as-quote pairs move against DXY"
    assert all(CORR[p] > 0.25 for p in ("USDCHF", "USDCAD", "USDJPY")), "dollar-as-base pairs move with DXY"
    assert CORR["EURUSD"] < -0.9 and abs(CORR["EURUSD"]) == max(abs(c) for c in CORR.values()), "EUR/USD tracks DXY most closely"
    assert abs(CORR["USDJPY"]) == min(abs(c) for c in CORR.values()), "USD/JPY is the loosest link here"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, column_widths=[0.42, 0.58], horizontal_spacing=0.14)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, bargap=0.35)
    names = [n for n, _ in WEIGHTS][::-1]
    fig.add_trace(go.Bar(orientation="h", y=names, x=[w for _, w in WEIGHTS][::-1], marker_color=t.zone, opacity=0.85,
                         showlegend=False, hoverinfo="skip", text=[f"{w:.1f}%" for _, w in WEIGHTS][::-1], textposition="outside",
                         textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=1, col=1)
    with ch.group("corr"):
        order = sorted(PAIRS, key=lambda p: CORR[p])
        fig.add_trace(go.Bar(orientation="h", y=[LABEL[p] for p in order], x=[CORR[p] for p in order], opacity=0.85 * ch._alpha,
                             marker_color=[t.bear if CORR[p] < 0 else t.bull for p in order], showlegend=False, hoverinfo="skip",
                             text=[f"{CORR[p]:+.2f}" for p in order], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=1, col=2)
    with ch.group("notes"):
        ch.label(0.0, 5.65, "AUD is not in the basket;<br>USD/JPY: yen is also a risk currency", size=11, color=t.ink2, xanchor="left",
                 yanchor="bottom", row=1, col=2)
    fig.update_xaxes(showgrid=False, zeroline=False, showline=False, showticklabels=False, rangeslider_visible=False)
    fig.update_xaxes(range=[0, 72], row=1, col=1)
    fig.update_xaxes(range=[-1.25, 1.25], zeroline=True, zerolinecolor=t.ink3, row=1, col=2)
    fig.update_yaxes(showgrid=False, tickfont=dict(size=13, color=t.ink), showline=False)
    fig.update_yaxes(range=[-0.6, 6.4], row=1, col=2)
    for col, txt in ((1, "DXY basket weights (published)"), (2, "Correlation of daily returns with DXY (synthetic, 120 days)")):
        dom = fig.layout["xaxis" if col == 1 else "xaxis2"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1.0, yshift=14, xanchor="left", yanchor="bottom",
                           showarrow=False, font=dict(family=FONT, size=13, color=t.ink), text=f"<b>{txt}</b>")
    ch.header("Intermarket Analysis · DXY", "The Dollar Index and the Major Pairs",
              "What the index is made of, and how each pair moved with it in a synthetic sample",
              key=[("▮", t.zone, "Basket weight"), ("▮", t.bear, "Moves against DXY"), ("▮", t.bull, "Moves with DXY")])
    ch.footnote("Weights are the published DXY basket; correlations are synthetic — real values change with the window")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "DXY and Major Pairs", OUT)
    print(NAME, {LABEL[p]: round(c, 2) for p, c in CORR.items()}, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
