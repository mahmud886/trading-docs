"""
The Composite Man as a thinking tool: one imagined large participant's inventory (share of a planned position held)
drawn under the synthetic Wyckoff cycle. The inventory is a MODEL — it is not observable — and the lesson is what
observable evidence (volume, effort versus result) would be consistent with it.

Candles: data/cycle_daily.csv (synthetic, idealised cycle with volume).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from volkit import load_ohlcv

NAME = "composite-man-inventory"
C, V = load_ohlcv(DATA / "cycle_daily.csv", "day")
N = len(C)
PHASES = [("md1", "Markdown", 0, 10), ("acc", "Accumulate", 10, 32), ("mu", "Markup", 32, 46),
          ("dist", "Distribute", 46, 68), ("md2", "Markdown", 68, N)]


def inventory():
    """Hypothetical share of the planned position held: builds through the range, sells through the second range."""
    inv = []
    for i in range(N):
        if i < 10:
            v = 0.0
        elif i < 32:
            v = 100 * ((i - 10) / 22) ** 1.2
        elif i < 46:
            v = 100.0
        elif i < 68:
            v = 100 * (1 - ((i - 46) / 22) ** 1.2)
        else:
            v = 0.0
        inv.append(round(v, 1))
    return inv


INV = inventory()


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert INV[9] == 0 and INV[31] > 90 and INV[40] == 100 and INV[67] < 10 and INV[-1] == 0
    assert max(c.c for c in C[10:32]) - min(c.c for c in C[10:32]) < 8, "price goes nowhere while the inventory builds"
    assert C[45].c - C[32].c > 10, "price moves while the inventory is full"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.06, row_heights=[0.66, 0.34])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    ch.candles(C, "Synthetic daily cycle", price_fmt=".0f", x=list(range(N)), row=1, col=1)
    k = len(shown)
    fig.add_trace(go.Scatter(x=list(range(k)), y=INV[:k], mode="lines", fill="tozeroy", line=dict(color=t.accent, width=2.4),
                             fillcolor="rgba(0,168,92,0.18)", showlegend=False, hoverinfo="skip"), row=2, col=1)
    dom = fig.layout["yaxis2"].domain
    fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom",
                       showarrow=False, font=dict(family=FONT, size=12, color=t.ink2),
                       text="<b>Imagined inventory</b> — share of the planned position held (a model, not observable)")
    tints = {"md1": t.bear, "acc": t.bull, "mu": t.bull, "dist": t.bear, "md2": t.bear}
    for key, name, a, b in PHASES:
        with ch.group(key):
            ch.zone(a - 0.5, b - 0.5, 33, 62, color=tints[key], alpha=0.07 if key in ("acc", "dist") else 0.03,
                    border=False, row=1, col=1)
            ch.label((a + b - 1) / 2, 61.2, f"<b>{name}</b>", size=12, color=t.ink, xanchor="center", yanchor="top",
                     row=1, col=1)
    with ch.group("acc"):
        ch.label(21, 34.2, "price goes nowhere while the<br>inventory builds", size=11, color=t.bull_text,
                 xanchor="center", yanchor="bottom", align="center", row=1, col=1)
        ch.label(27, 55, "0% → 100%", size=12, color=t.accent, xanchor="center", yanchor="middle", row=2, col=1)
    with ch.group("mu"):
        ch.label(39, 44, "price moves on little<br>new buying", size=11, color=t.bull_text, xanchor="center",
                 yanchor="top", align="center", row=1, col=1)
    with ch.group("dist"):
        ch.label(57, 52.0, "price stalls while the<br>inventory is sold", size=11, color=t.bear_text, xanchor="center",
                 yanchor="top", align="center", row=1, col=1)
        ch.label(60, 60, "100% → 0%", size=12, color=t.accent, xanchor="center", yanchor="middle", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False,
              rangeslider_visible=False, range=[-1, N + 0.5])
    fig.update_xaxes(**xa)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[33, 62], tickformat=".0f", row=1, col=1)
    fig.update_yaxes(range=[0, 118], tickvals=[0, 50, 100], ticktext=["0%", "50%", "100%"], row=2, col=1)
    ch.header("Wyckoff · Composite Man", "The Composite Man — a Model of One Big Participant",
              "An imagined inventory under the synthetic Wyckoff cycle: it builds in the first range and is sold in the second",
              key=[("━", t.accent, "Imagined inventory (model)")])
    ch.footnote("A thinking tool: the inventory line is hypothetical; only price and volume can be observed")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Composite Man", OUT)
    print(NAME, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
