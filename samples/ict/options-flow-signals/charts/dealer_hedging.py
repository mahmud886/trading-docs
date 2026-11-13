"""
How dealer delta-hedging affects price — short gamma vs long gamma, conceptual paths in arbitrary units.

Source: content/en/ict/options-flow-signals.mdx -> "How Dealer Hedging Works" (corrected: dealers who are short calls
are short gamma, so their hedging adds to moves rather than pinning price).
"""

import math

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "dealer-hedging-gamma"
STRIKE = 100.0
XS = [i * 0.25 for i in range(41)]
SHORT_GAMMA = [STRIKE - 1.2 + 0.05 * x ** 2 + 0.25 * math.sin(2.1 * x) for x in XS]
LONG_GAMMA = [STRIKE + 1.6 * math.exp(-0.18 * x) * math.sin(1.7 * x + 0.6) for x in XS]


def validate():
    assert SHORT_GAMMA[-1] - SHORT_GAMMA[0] > 4, "short gamma: the move extends"
    assert abs(LONG_GAMMA[-1] - STRIKE) < 0.5, "long gamma: price settles near the strike"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, horizontal_spacing=0.07)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    panels = (("short", SHORT_GAMMA, "Dealers short gamma", "Clients bought the options · hedging chases price",
               [(4, "dealer buys more ↑"), (8.5, "and more ↑")]),
              ("long", LONG_GAMMA, "Dealers long gamma", "Clients sold the options · hedging leans against price",
               [(0.9, "dealer sells ↓"), (2.7, "dealer buys ↑")]))
    for col, (group, ys, title, sub, notes) in enumerate(panels, 1):
        with ch.group(group) as shown:
            a = ch.reveal.alpha(group)
            if shown:
                ch.hline(-0.3, 10.3, STRIKE, color=t.accent, width=1.4, row=1, col=col)
                fig.add_trace(go.Scatter(x=XS, y=ys, mode="lines", line=dict(color=t.ink, width=2.6), opacity=a,
                                         hoverinfo="skip"), row=1, col=col)
            ch.label(0, STRIKE + 0.15, "big strike", size=11, color=t.accent, yanchor="bottom", row=1, col=col)
            for x, text in notes:
                y = ys[XS.index(x)] if x in XS else ys[int(x / 0.25)]
                low = group == "long" and "buys" in text
                ch.label(x, y - 0.4 if low else y + 0.5, text, size=12,
                         color=t.bull_text if "↑" in text else t.bear_text, xanchor="center",
                         yanchor="top" if low else "bottom", row=1, col=col)
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    ch.label(9.6, SHORT_GAMMA[-1], "<b>moves extend</b>", size=12, xanchor="right", yanchor="bottom", row=1, col=1)
    ch.label(9.6, STRIKE - 0.4, "<b>price pins near the strike</b>", size=12, xanchor="right", yanchor="top", row=1,
             col=2)
    fig.update_xaxes(range=[-0.3, 10.3], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, fixedrange=True, title=dict(text="time →", font=dict(size=12, color=t.ink3)))
    fig.update_yaxes(range=[97.5, 105.0], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("Options Flow", "Dealer Hedging — When It Pushes Price and When It Pins It",
              "Conceptual paths · who is short the options decides whether hedging adds to moves or fades them",
              key=[], offset=62)
    ch.footnote("Conceptual paths in arbitrary units based on the Options Flow lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Dealer Hedging", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
