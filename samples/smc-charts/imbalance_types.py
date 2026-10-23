"""
Three types of price imbalance — conceptual small multiples.

Source: content/en/smc/imbalance.mdx -> "Types of Imbalance" (FVG, Volume Imbalance, Liquidity Void).
This is a shape-only illustration: candles are drawn in arbitrary price units and the price axis is hidden.
"""

from plotly.subplots import make_subplots

from chartkit import FONT, Candle, Chart, Reveal, save

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
TITLES = [
    ("Fair Value Gap (FVG)", "3-candle pattern: C1 high and C3 low<br>do not overlap (bullish shown)"),
    ("Volume Imbalance", "Gap between consecutive candle bodies;<br>common at session opens"),
    ("Liquidity Void", "Large single candle with barely any wicks;<br>price returns to fill the body"),
]


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


FVG, VOL, VOID = candles("fvg"), candles("volume"), candles("void")


def validate():
    assert FVG[1].h < FVG[3].l, "FVG: C1 high does not overlap C3 low"
    assert min(c.l for c in FVG[4:]) <= (FVG[1].h + FVG[3].l) / 2, "price later returns to the FVG"
    assert VOL[2].o > VOL[1].c and VOL[2].l < VOL[1].h, "volume imbalance: body gap, wicks overlap"
    big = VOID[1]
    assert (big.h - big.c) <= 0.3 and (big.o - big.l) <= 0.3 and big.body >= 8, "void: big body, tiny wicks"
    assert min(c.l for c in VOID[2:]) < (big.o + big.c) / 2, "price later returns into the void"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.06)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((FVG, VOL, VOID), 1):
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)

    def tag(col, c, name, above):
        ch.label(c.t, (c.h + 0.5) if above else (c.l - 0.5), name, color=t.ink, bold=True, xanchor="center",
                 yanchor="bottom" if above else "top", row=1, col=col)

    # Panel 1 — FVG
    ch.zone(1, 6.4, FVG[1].h, FVG[3].l, row=1, col=1)
    tag(1, FVG[1], "C1", False), tag(1, FVG[2], "C2", False), tag(1, FVG[3], "C3", True)
    ch.label(3.35, FVG[1].h - 0.35, f"<b style='color:{t.zone_text}'>Gap: C1 high ↔ C3 low</b><br>"
             "later revisited by price", size=12.5, yanchor="top", row=1, col=1)
    # Panel 2 — Volume imbalance
    ch.zone(1, 5, VOL[1].c, VOL[2].o, row=1, col=2)
    tag(2, VOL[1], "C1", False), tag(2, VOL[2], "C2", True)
    ch.label(2.45, VOL[1].c - 0.35, f"<b style='color:{t.zone_text}'>Body gap: C1 close ↔ C2 open</b><br>"
             "the wicks still overlap", size=12.5, yanchor="top", row=1, col=2)
    # Panel 3 — Liquidity void
    ch.zone(1, 6.4, VOID[1].o, VOID[1].c, alpha=t.zone_alpha * 0.7, row=1, col=3)
    ch.label(0.75, 113.2, "<b>One-sided candle</b> — almost no wicks", size=12.5, yanchor="bottom", row=1, col=3)
    ch.label(3.4, 102.2, f"<b style='color:{t.zone_text}'>Price returns</b><br>to fill the body", size=12.5,
             yanchor="top", row=1, col=3)

    for col, (title, sub) in enumerate(TITLES, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")

    style = ch._axis_style()
    fig.update_xaxes(range=[-0.7, 6.7], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[97.6, 115.2], showticklabels=False, showgrid=True, gridcolor=style["gridcolor"],
                     dtick=2, zeroline=False, showline=False, fixedrange=True)
    ch.header("Smart Money Concepts · Imbalance", "Three Types of Price Imbalance",
              "Where price moved one-sidedly — and where it tends to return · bullish examples shown",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Imbalance")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units (no price scale) based on the Imbalance guide")
    return fig


def main():
    paths = save(NAME, build, "Three Types of Price Imbalance")
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
