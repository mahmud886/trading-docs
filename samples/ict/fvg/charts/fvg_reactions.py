"""
How price can react to a bullish FVG — respected at the CE, weakened through the CE, invalidated by a body close.
Conceptual small multiples in arbitrary units.

Source: content/en/ict/fvg.mdx -> "Consequent Encroachment" and "Invalidation Rules".
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "fvg-reactions"
BASE = [(100.0, 101.2, 99.6, 101.0), (101.0, 102.0, 100.6, 101.6), (101.6, 106.0, 101.4, 105.7),
        (105.7, 106.8, 104.0, 106.2), (106.2, 106.5, 105.0, 105.3)]
FVG_LOW, FVG_HIGH = 102.0, 104.0
CE = (FVG_LOW + FVG_HIGH) / 2
PANELS = {
    "respected": BASE + [(105.3, 105.5, 103.1, 104.0), (104.0, 106.2, 103.8, 106.0), (106.0, 107.6, 105.8, 107.4)],
    "weakened": BASE + [(105.3, 105.4, 102.4, 102.6), (102.6, 104.6, 102.3, 104.4), (104.4, 106.4, 104.2, 106.2)],
    "invalid": BASE + [(105.3, 105.4, 102.6, 102.9), (102.9, 103.1, 100.6, 100.9), (100.9, 101.4, 99.6, 99.9)],
}


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


RESP, WEAK, INV = candles("respected"), candles("weakened"), candles("invalid")


def validate():
    assert BASE[1][1] == FVG_LOW and BASE[3][2] == FVG_HIGH, "FVG = C1 high to C3 low"
    assert FVG_LOW < RESP[5].l < FVG_HIGH and RESP[5].c >= CE and RESP[5].l > CE - 0.5, "respected: holds the CE"
    assert FVG_LOW < WEAK[5].c < CE and WEAK[7].c > FVG_HIGH, "weakened: body closes below the CE, gap low holds"
    assert INV[6].c < FVG_LOW, "invalid: a body closes below the whole gap"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.05)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((RESP, WEAK, INV), 1):
        ch.zone(1, 7.6, FVG_LOW, FVG_HIGH, row=1, col=col)
        ch.hline(1, 7.6, CE, color=t.zone, width=1.3, dash="dash", row=1, col=col)
        ch.label(7.65, CE, "CE", size=11, bold=True, color=t.zone_text, row=1, col=col)
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)
        for i, name, y, anchor in ((1, "C1", 100.4, "top"), (2, "C2", 101.2, "top"), (3, "C3", 107.0, "bottom")):
            ch.label(i, y, name, size=11, bold=True, color=t.ink, xanchor="center", yanchor=anchor, row=1, col=col)

    ch.callout(5, 103.1, 4.6, 99.2, "<b>Wick to the CE, close above it</b><br>buyers defend the gap", row=1, col=1,
               axref="x", ayref="y", xanchor="center", yanchor="top")
    ch.callout(5, 102.5, 4.6, 99.2, "<b>Body closes below the CE</b><br>but the gap's low holds → weakened",
               row=1, col=2, axref="x2", ayref="y2", xanchor="center", yanchor="top")
    ch.callout(6, 100.8, 3.4, 98.6, "<b>Body closes below the whole gap</b><br>→ invalid; it may now act as<br>"
               "resistance (inversion)", row=1, col=3, axref="x3", ayref="y3", xanchor="center", yanchor="top")

    titles = [("Respected", "Price returns, defends the CE<br>and leaves"),
              ("Weakened", "Price trades through the CE but<br>doesn't close below the gap"),
              ("Invalid", "A candle body closes beyond<br>the far edge of the gap")]
    for col, (title, sub) in enumerate(titles, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")

    fig.update_xaxes(range=[-0.6, 8.3], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[97.0, 108.4], showticklabels=False, showgrid=True, gridcolor=t.grid, dtick=1,
                     zeroline=False, showline=False, fixedrange=True)
    ch.header("ICT · Fair Value Gap", "Three Ways Price Treats an FVG",
              "Same bullish gap, three reactions · the CE and the far edge are the lines that matter",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units (no price scale) based on the ICT Fair Value Gap lesson")
    return fig


def main():
    paths = save(NAME, build, "FVG Reactions", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
