"""
Three types of price imbalance — conceptual small multiples.

Source: content/en/smc/imbalance.mdx -> "Types of Imbalance" (FVG, Volume Imbalance, Liquidity Void).
This is a shape-only illustration: candles are drawn in arbitrary price units and the price axis is hidden.
"""

from plotly.subplots import make_subplots
import plotly.graph_objects as go

from chartkit import (AXIS, BEAR, BULL, FONT, GRID, HEIGHT, INK, INK_2, SURFACE, WIDTH, ZONE,
                      ZONE_TEXT, Candle, footnote, header, save)

NAME = "imbalance-types"

# (open, high, low, close) in arbitrary units — a shape, not a market.
PANELS = {
    "fvg": [(100, 101.6, 99.2, 100.8), (100.8, 103, 100.2, 102.5), (102.5, 109.8, 102.2, 109.4),
            (109.4, 111.6, 106, 110.8), (110.8, 111.4, 108.2, 108.8), (108.8, 109.2, 104.4, 105.4),
            (105.4, 108.6, 105, 108.2)],
    "volume": [(100, 101.6, 99.4, 101.2), (101.2, 104, 100.8, 103.4), (104.4, 107, 103.2, 106.6),
               (106.6, 108.2, 105.8, 107.6), (107.6, 107.9, 104.6, 105), (105, 106.8, 103.8, 106.2),
               (106.2, 108.4, 105.9, 108)],
    "void": [(100, 101.2, 99.4, 100.6), (100.6, 111.2, 100.4, 111), (111, 112, 109.2, 109.6),
             (109.6, 110.2, 105.6, 106), (106, 106.6, 102.6, 103.2), (103.2, 106.4, 102.8, 106),
             (106, 108.6, 105.6, 108.2)],
}


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


def validate(fvg, vol, void):
    assert fvg[1].h < fvg[3].l, "FVG: C1 high does not overlap C3 low"
    assert vol[2].o > vol[1].c and vol[2].l < vol[1].h, "volume imbalance: body gap, wicks overlap"
    big = void[1]
    assert (big.h - big.c) <= 0.3 and (big.o - big.l) <= 0.3 and big.body >= 8, "void: big body, tiny wicks"
    assert min(c.l for c in void[2:]) < (big.o + big.c) / 2, "price later returns into the void"
    assert min(c.l for c in fvg[4:]) <= (fvg[1].h + fvg[3].l) / 2, "price later returns to the FVG"


def main():
    fvg, vol, void = candles("fvg"), candles("volume"), candles("void")
    validate(fvg, vol, void)

    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.06)
    fig.update_layout(
        width=WIDTH, height=HEIGHT, paper_bgcolor=SURFACE, plot_bgcolor=SURFACE, showlegend=False,
        margin=dict(l=40, r=40, t=200, b=96), font=dict(family=FONT, color=INK_2, size=13), hovermode=False,
    )
    for col, data in enumerate((fvg, vol, void), 1):
        fig.add_trace(go.Candlestick(
            x=[c.t for c in data], open=[c.o for c in data], high=[c.h for c in data], low=[c.l for c in data],
            close=[c.c for c in data], whiskerwidth=0, hoverinfo="skip",
            increasing=dict(line=dict(color=BULL, width=1.8), fillcolor=SURFACE),
            decreasing=dict(line=dict(color=BEAR, width=1.8), fillcolor=BEAR),
        ), row=1, col=col)

    def rect(col, x0, x1, y0, y1, opacity=0.18):
        fig.add_shape(type="rect", x0=x0, x1=x1, y0=y0, y1=y1, row=1, col=col, layer="below", fillcolor=ZONE,
                      opacity=opacity, line=dict(color=ZONE, width=1.2))

    def text(col, x, y, s, **kw):
        kw.setdefault("xanchor", "left")
        kw.setdefault("align", "left")
        fig.add_annotation(x=x, y=y, text=s, showarrow=False, row=1, col=col,
                           font=dict(family=FONT, size=kw.pop("size", 13), color=kw.pop("color", INK_2)), **kw)

    def tag(col, c, name, above):
        text(col, c.t, (c.h + 0.5) if above else (c.l - 0.5), f"<b>{name}</b>", color=INK, xanchor="center",
             yanchor="bottom" if above else "top")

    # Panel 1 — FVG
    rect(1, 1, 6.4, fvg[1].h, fvg[3].l)
    tag(1, fvg[1], "C1", False), tag(1, fvg[2], "C2", False), tag(1, fvg[3], "C3", True)
    text(1, 3.35, fvg[1].h - 0.35, f"<b style='color:{ZONE_TEXT}'>Gap: C1 high ↔ C3 low</b><br>"
         "later revisited by price", size=12.5, yanchor="top")
    # Panel 2 — Volume imbalance
    rect(2, 1, 5, vol[1].c, vol[2].o)
    tag(2, vol[1], "C1", False), tag(2, vol[2], "C2", True)
    text(2, 2.45, vol[1].c - 0.35, f"<b style='color:{ZONE_TEXT}'>Body gap: C1 close ↔ C2 open</b><br>"
         "the wicks still overlap", size=12.5, yanchor="top")
    # Panel 3 — Liquidity void
    rect(3, 1, 6.4, void[1].o, void[1].c, opacity=0.12)
    text(3, 0.75, 113.2, "<b>One-sided candle</b> — almost no wicks", size=12.5, yanchor="bottom")
    text(3, 3.4, 102.2, f"<b style='color:{ZONE_TEXT}'>Price returns</b><br>to fill the body", size=12.5,
         yanchor="top")

    titles = [
        ("Fair Value Gap (FVG)", "3-candle pattern: C1 high and C3 low<br>do not overlap (bullish shown)"),
        ("Volume Imbalance", "Gap between consecutive candle bodies;<br>common at session opens"),
        ("Liquidity Void", "Large single candle with barely any wicks;<br>price returns to fill the body"),
    ]
    for col, (t, sub) in enumerate(titles, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1.01, xanchor="left", yanchor="bottom",
                           showarrow=False, text=f"<b>{t}</b><br><span style='color:{INK_2};font-size:13px'>"
                                                 f"{sub}</span>",
                           align="left", font=dict(family=FONT, size=17, color=INK))

    fig.update_xaxes(range=[-0.7, 6.7], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=AXIS, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[97.6, 115.2], showticklabels=False, showgrid=True, gridcolor=GRID, dtick=2,
                     zeroline=False, showline=False, fixedrange=True)

    header(fig, "Three Types of Price Imbalance",
           "Where price moved one-sidedly — and where it tends to return · bullish examples shown",
           zone_name="Imbalance")
    fig.layout.annotations[-3].y = 1.205
    fig.layout.annotations[-2].y = 1.145
    fig.layout.annotations[-1].y = 1.145
    footnote(fig,
              "Conceptual shapes in arbitrary units (no price scale) based on the Imbalance guide")
    save(fig, NAME)
    print(f"{NAME}: written")


if __name__ == "__main__":
    main()
