"""
Three kinds of imbalance — fair value gap, volume imbalance, liquidity void (conceptual candles, arbitrary units).

Source: content/en/smc/imbalance.mdx -> "Types of Imbalance".
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "imbalance-types"
PANELS = {
    "fvg": ("Fair value gap", "Candle 1's high and candle 3's low don't meet",
            [(100.0, 100.8, 99.6, 100.6), (100.6, 103.4, 100.5, 103.2), (103.2, 104.0, 101.8, 103.6),
             (103.6, 104.2, 102.6, 103.0)]),
    "vi": ("Volume imbalance", "Bodies don't meet; wicks do",
           [(100.0, 101.0, 99.6, 100.8), (101.2, 102.6, 100.6, 102.4), (102.4, 103.0, 101.6, 102.0),
            (102.0, 102.8, 101.2, 102.6)]),
    "void": ("Liquidity void", "One-sided run: several large candles, little overlap",
             [(104.0, 104.2, 103.0, 103.1), (103.1, 103.2, 101.2, 101.3), (101.3, 101.4, 99.4, 99.5),
              (99.5, 99.7, 98.2, 98.4), (98.4, 99.6, 98.2, 99.2)]),
}


def validate():
    a, _, c, _ = (Candle(i, "", *v) for i, v in enumerate(PANELS["fvg"][2]))
    assert c.l > a.h, "FVG: candle 3's low above candle 1's high"
    v1, v2 = (Candle(i, "", *v) for i, v in enumerate(PANELS["vi"][2][:2]))
    assert v2.o > v1.c and v2.l < v1.h, "volume imbalance: body gap, wicks overlap"
    vs = [Candle(i, "", *v) for i, v in enumerate(PANELS["void"][2][:4])]
    assert all(b.h - a.l < 0.3 for a, b in zip(vs, vs[1:])), "void: almost no overlap between candles"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.05)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, (group, (title, sub, ohlc)) in enumerate(PANELS.items(), 1):
        data = [Candle(i, str(i), *v) for i, v in enumerate(ohlc)]
        with ch.group(group):
            if group == "fvg":
                ch.zone(-0.4, 3.4, data[0].h, data[2].l, color=t.accent, alpha=0.25, dash="dash", row=1, col=col)
                ch.label(3.45, (data[0].h + data[2].l) / 2, "gap", size=12, color=t.accent, row=1, col=col)
            elif group == "vi":
                ch.zone(-0.4, 2.4, data[0].c, data[1].o, color=t.accent, alpha=0.35, row=1, col=col)
                ch.label(2.45, (data[0].c + data[1].o) / 2, "body gap", size=12, color=t.accent, row=1, col=col)
            else:
                ch.zone(0.6, 3.4, 99.5, 103.1, color=t.accent, alpha=0.12, dash="dot", row=1, col=col)
                ch.label(3.45, 101.3, "void", size=12, color=t.accent, row=1, col=col)
        ch.candles(data, "", price_fmt=".1f", x=list(range(len(data))), row=1, col=col)
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    fig.update_xaxes(range=[-0.8, 4.6], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[97.6, 104.8], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("SMC · Imbalance", "Three Kinds of Imbalance — Where Price Moved One Way, Fast",
              "Conceptual candles · the shaded area is the inefficiency price often revisits",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")], offset=62)
    ch.footnote("Conceptual shapes in arbitrary units based on the Imbalance lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Imbalance Types", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
