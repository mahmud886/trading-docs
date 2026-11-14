"""
Inside one candle: a single synthetic 5-minute futures candle and the volume that traded at each price, split into
sellers hitting the bid (left) and buyers lifting the ask (right). The candle's colour says where price went; the ladder
shows how the volume got there — and its delta.

Data: nine price levels, hand-built (synthetic); contracts.
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "inside-one-candle"
TICK = 0.0001
PRICES = [round(1.0850 + k * TICK, 4) for k in range(9)]
BID = [120, 210, 260, 310, 280, 190, 150, 90, 40]       # sold at the bid (aggressive sellers)
ASK = [30, 90, 210, 380, 520, 480, 360, 260, 170]       # bought at the ask (aggressive buyers)
CANDLE = Candle(0, "5-minute candle", 1.0852, 1.0858, 1.0850, 1.0857)
TOTAL = [b + a for b, a in zip(BID, ASK)]
POC = PRICES[TOTAL.index(max(TOTAL))]
DELTA = sum(ASK) - sum(BID)


def validate():
    c = CANDLE
    assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h and c.bullish
    assert PRICES[0] == c.l and PRICES[-1] == c.h
    assert POC == 1.0854 and max(TOTAL) == 800 and sum(TOTAL) == 4150 and DELTA == 850
    assert sum(ASK) > sum(BID) and c.c > c.o, "net aggressive buying and a rising candle agree"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, column_widths=[0.2, 0.8], horizontal_spacing=0.03, shared_yaxes=True)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, bargap=0.12, barmode="overlay")
    with ch.group("candle"):
        ch.candles([CANDLE], "5-minute candle", price_fmt=".4f", x=[0], row=1, col=1)
        ch.label(0, 1.08585, "open 1.0852 · close 1.0857", size=11, color=t.ink2, xanchor="center", yanchor="bottom",
                 row=1, col=1)
    with ch.group("ladder"):
        fig.add_trace(go.Bar(orientation="h", y=PRICES, x=[-b for b in BID], marker_color=t.bear, opacity=0.85 * ch._alpha,
                             text=[str(b) for b in BID], textposition="outside", textfont=dict(color=t.bear_text, size=12, family=FONT),
                             width=TICK * 0.8, showlegend=False, hoverinfo="skip"), row=1, col=2)
        fig.add_trace(go.Bar(orientation="h", y=PRICES, x=ASK, marker_color=t.bull, opacity=0.85 * ch._alpha,
                             text=[str(a) for a in ASK], textposition="outside", textfont=dict(color=t.bull_text, size=12, family=FONT),
                             width=TICK * 0.8, showlegend=False, hoverinfo="skip"), row=1, col=2)
        ch.label(-330, 1.08595, "<b>Sellers hit the bid</b><br>(aggressive sellers)", size=12, color=t.bear_text,
                 xanchor="center", yanchor="bottom", align="center", row=1, col=2)
        ch.label(330, 1.08595, "<b>Buyers lift the ask</b><br>(aggressive buyers)", size=12, color=t.bull_text,
                 xanchor="center", yanchor="bottom", align="center", row=1, col=2)
    with ch.group("poc"):
        ch.zone(-640, 640, POC - TICK * 0.5, POC + TICK * 0.5, color=t.ink, alpha=0.05, row=1, col=2)
        ch.label(690, POC, f"<b>POC</b> {POC:.4f}<br>{max(TOTAL)} contracts", size=11, color=t.ink, xanchor="right",
                 yanchor="middle", align="right", row=1, col=2)
    with ch.group("delta"):
        ch.label(690, 1.08502, f"<b>Total {sum(TOTAL):,}</b> · bought {sum(ASK):,} · sold {sum(BID):,}<br>"
                 f"<b>Delta = {sum(ASK):,} − {sum(BID):,} = +{DELTA}</b>", size=12, color=t.ink, xanchor="right",
                 yanchor="bottom", align="right", row=1, col=2)
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False,
                     rangeslider_visible=False)
    fig.update_xaxes(range=[-0.8, 0.8], row=1, col=1)
    fig.update_xaxes(range=[-700, 700], row=1, col=2)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, range=[1.08485, 1.08615], tickvals=PRICES, tickformat=".4f",
                     tickfont=dict(size=11, color=t.ink2), row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, row=1, col=2)
    ch.header("Order Flow · Introduction", "Inside One Candle — Who Traded at Which Price",
              "A synthetic 5-minute futures candle · volume at each price, split into sellers hitting the bid and buyers lifting the ask",
              key=[("▮", t.bull, "Bought at the ask"), ("▮", t.bear, "Sold at the bid")])
    ch.footnote("Synthetic data in contracts; real order-flow data needs a feed with trade-by-trade bid/ask classification")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Inside One Candle", OUT)
    print(NAME, "POC", POC, "delta", DELTA, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
