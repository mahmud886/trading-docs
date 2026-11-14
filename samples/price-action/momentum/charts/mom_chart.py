"""
Reading momentum from candle bodies: price on top, each candle's body (close − open, in pips) below.
Three bullish impulses with shrinking bodies, then a bearish impulse with larger bodies: the momentum shift.

Candles: data/gbpusd_1h_momentum.csv (synthetic).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "momentum-bodies-shift"
PIP = 0.0001
C = load(DATA / "gbpusd_1h_momentum.csv", Candle)
N = len(C)
LEGS = [("Impulse 1", 0, 4), ("Impulse 2", 8, 11), ("Impulse 3", 14, 17), ("Shift", 17, 20)]
I_FILL = 21
ENTRY, STOP, TARGET = 1.2672, 1.2690, 1.2630


def bodies(a, b):
    return [abs(c.c - c.o) / PIP for c in C[a:b]]


def avg(a, b):
    v = bodies(a, b)
    return sum(v) / len(v)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    ups = [avg(a, b) for name, a, b in LEGS[:3]]
    assert ups == sorted(ups, reverse=True) and all(C[k].bullish for _, a, b in LEGS[:3] for k in range(a, b)), ups
    assert all(not C[k].bullish for k in range(17, 20)) and avg(17, 20) > ups[-1] * 2, "bearish impulse outweighs"
    top = max(c.h for c in C)
    assert C[16].h == top, "the last weak push makes the high"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h and STOP > C[I_FILL].h and min(c.l for c in C[I_FILL:]) > TARGET


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.06, row_heights=[0.7, 0.3])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    ch.candles(C, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    fig.add_trace(go.Bar(x=list(range(len(shown))), y=[(c.c - c.o) / PIP for c in shown],
                         marker_color=[t.bull if c.c >= c.o else t.bear for c in shown], showlegend=False,
                         hoverinfo="skip"), row=2, col=1)
    dom = fig.layout["yaxis2"].domain
    fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom",
                       showarrow=False, font=dict(family=FONT, size=12, color=t.ink2),
                       text="<b>Candle body</b> (close − open, pips)")
    for k, (name, a, b) in enumerate(LEGS):
        with ch.group(f"leg{k}"):
            color = t.bear_text if name == "Shift" else t.bull_text
            y = max(c.h for c in C[a:b]) + 0.0004 if name != "Shift" else min(c.l for c in C[a:b]) - 0.0004
            ch.label((a + b - 1) / 2, y, f"<b>{name}</b><br>avg body {avg(a, b):.0f} pips", size=11, color=color,
                     xanchor="center", yanchor="bottom" if name != "Shift" else "top", align="center", row=1, col=1)
    with ch.group("trade"):
        risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
        for y, colr, txt in ((STOP, t.bear_text, f"SL {STOP:.4f} · −{risk:g}"), (ENTRY, t.ink, f"Sell {ENTRY:.4f}"),
                             (TARGET, t.bull_text, f"TP {TARGET:.4f} · +{reward:g} · 1 : {rr:.1f}")):
            ch.hline(I_FILL - 0.4, N + 1.5, y, color=colr, width=1.6, dash="solid", row=1, col=1)
            ch.label(N + 1.5, y, f"<b>{txt}</b>", size=11, color=colr, xanchor="right", yanchor="bottom", row=1, col=1)
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False,
                     rangeslider_visible=False, range=[-0.8, N + 1.8])
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[1.2585, 1.2745], tickformat=".4f", row=1, col=1)
    fig.update_yaxes(range=[-28, 28], dtick=10, zeroline=True, zerolinecolor=t.axis, row=2, col=1)
    ch.header("Price Action · Momentum", "Momentum — Read It in the Bodies",
              "GBP/USD · 1-hour candles · each push up is weaker, then the selling candles are larger: momentum shifts",
              key=[("▮", t.bull, "Bullish body"), ("▮", t.bear, "Bearish body")])
    ch.footnote("Synthetic candles built around the levels in the Momentum lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Momentum Bodies", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: legs {[round(avg(a, b), 1) for _, a, b in LEGS]} risk {risk:g} reward {reward:g} "
          f"R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
