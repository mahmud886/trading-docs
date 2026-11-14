"""
Three snapshots of a synthetic futures order book (contracts at each price): a resting ask wall at 1.0955, buyers
eating into it, and the wall consumed so price moves through. Bids (green) are drawn to the left, asks (red) to the
right. The point: a wall matters only if it holds when it is traded into.

Data: hand-built snapshots (synthetic).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "dom-wall-three-snapshots"
TICK = 0.0001
LEVELS = [round(1.0947 + k * TICK, 4) for k in range(15)]          # 1.0947 .. 1.0961
SNAPS = [
    dict(key="s1", time="10:00:00", bids={1.0952: 220, 1.0951: 380, 1.0950: 850, 1.0949: 290, 1.0948: 160},
         asks={1.0953: 180, 1.0954: 320, 1.0955: 450, 1.0956: 140, 1.0957: 90, 1.0958: 60}),
    dict(key="s2", time="10:00:20", bids={1.0954: 210, 1.0953: 260, 1.0952: 380, 1.0951: 420, 1.0950: 850},
         asks={1.0955: 130, 1.0956: 150, 1.0957: 110, 1.0958: 70}),
    dict(key="s3", time="10:00:35", bids={1.0956: 240, 1.0955: 300, 1.0954: 380, 1.0953: 260, 1.0952: 200},
         asks={1.0957: 190, 1.0958: 150, 1.0959: 90, 1.0960: 60}),
]
WALL = 1.0955
EXECUTED_AT_WALL = 450 - SNAPS[1]["asks"][WALL]


def validate():
    for s in SNAPS:
        assert max(s["bids"]) < min(s["asks"]), "best bid below best ask"
        assert all(p in LEVELS for p in list(s["bids"]) + list(s["asks"]))
    assert SNAPS[0]["asks"][WALL] == 450 == max(SNAPS[0]["asks"].values()), "the wall is the largest resting ask"
    assert EXECUTED_AT_WALL == 320 and min(SNAPS[2]["asks"]) > WALL, "wall eaten, price moves through"
    assert max(SNAPS[2]["bids"]) == 1.0956 > max(SNAPS[0]["bids"]) + 3 * TICK


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, shared_yaxes=True, horizontal_spacing=0.03)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, bargap=0.15, barmode="overlay")
    notes = {
        "s1": ("<b>A wall rests above</b><br>450 asks at 1.0955 —<br>the biggest size on the book", t.ink),
        "s2": (f"<b>Buyers trade into it</b><br>{EXECUTED_AT_WALL} contracts executed at the wall;<br>130 are left, and price stalls", t.bear_text),
        "s3": ("<b>The wall is consumed</b><br>all 450 executed — the next asks are<br>thin, so price moves through", t.bull_text),
    }
    for col, s in enumerate(SNAPS, start=1):
        with ch.group(s["key"]):
            bp, ap = sorted(s["bids"]), sorted(s["asks"])
            fig.add_trace(go.Bar(orientation="h", y=bp, x=[-s["bids"][p] for p in bp], marker_color=t.bull,
                                 opacity=0.85 * ch._alpha, width=TICK * 0.75, text=[str(s["bids"][p]) for p in bp],
                                 textposition="outside", textfont=dict(color=t.bull_text, size=12, family=FONT),
                                 showlegend=False, hoverinfo="skip"), row=1, col=col)
            fig.add_trace(go.Bar(orientation="h", y=ap, x=[s["asks"][p] for p in ap], marker_color=t.bear,
                                 opacity=0.85 * ch._alpha, width=TICK * 0.75, text=[str(s["asks"][p]) for p in ap],
                                 textposition="outside", textfont=dict(color=t.bear_text, size=12, family=FONT),
                                 showlegend=False, hoverinfo="skip"), row=1, col=col)
            ch.label(0, 1.09615, f"<b>{s['time']}</b>", size=13, color=t.ink, xanchor="center", yanchor="bottom",
                     row=1, col=col)
            text, colr = notes[s["key"]]
            ch.label(0, 1.09462, text, size=11, color=colr, xanchor="center", yanchor="top", align="center",
                     row=1, col=col)
            ch.label(-1050, max(bp), "bid", size=11, color=t.ink3, xanchor="left", yanchor="middle", row=1, col=col)
    xa = dict(range=[-1100, 1100], showgrid=False, zeroline=True, zerolinecolor=t.axis, showticklabels=False,
              showline=True, linecolor=t.axis)
    for col in (1, 2, 3):
        fig.update_xaxes(**xa, row=1, col=col)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, range=[1.0941, 1.09645], tickvals=LEVELS, tickformat=".4f",
                     tickfont=dict(size=11, color=t.ink2), row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, row=1, col=2)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, side="right", row=1, col=3)
    ch.header("Order Flow · DOM and Level 2", "A Wall Matters Only If It Holds When It's Traded Into",
              "Three snapshots of a synthetic order book · bids (green, left) and asks (red, right) in contracts per price",
              key=[("▮", t.bull, "Resting bids"), ("▮", t.bear, "Resting asks")])
    ch.footnote("Synthetic snapshots; real books change many times a second and show only one venue's resting orders")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "DOM Wall", OUT)
    print(NAME, "executed at wall", EXECUTED_AT_WALL, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
