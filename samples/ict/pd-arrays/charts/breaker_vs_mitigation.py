"""
Breaker block vs mitigation block — conceptual small multiples (bearish case), arbitrary units.

Source: content/en/ict/pd-arrays.mdx -> "Breaker Blocks" and "Mitigation Blocks". The difference shown follows ICT:
a breaker forms after price takes the prior high (liquidity) and then breaks down; a mitigation block forms when price
fails to make a new high and then breaks down.
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "breaker-vs-mitigation"
PRIOR_HIGH, PRIOR_LOW = 106.0, 101.0
BASE = [(100.0, 103.0, 99.6, 102.8), (102.8, 106.0, 102.5, 105.4), (105.4, 105.6, 101.2, 101.6),
        (101.6, 102.0, 101.0, 101.8)]
PANELS = {
    "breaker": BASE + [(101.8, 104.6, 101.6, 104.4), (104.4, 107.0, 104.2, 104.8), (104.8, 105.0, 99.6, 99.9),
                       (99.9, 103.4, 99.7, 103.2), (103.2, 103.5, 98.2, 98.5)],
    "mitigation": BASE + [(101.8, 104.6, 101.6, 104.4), (104.4, 105.2, 104.0, 104.8), (104.8, 105.0, 99.6, 99.9),
                          (99.9, 103.4, 99.7, 103.2), (103.2, 103.5, 98.2, 98.5)],
}
ZONE = (101.8, 104.4)  # the up-close candle before the break (body)


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


BRK, MIT = candles("breaker"), candles("mitigation")


def validate():
    assert BRK[5].h > PRIOR_HIGH and MIT[5].h < PRIOR_HIGH, "breaker takes the prior high; mitigation fails to"
    for data in (BRK, MIT):
        assert data[6].c < PRIOR_LOW, "both break the prior low"
        assert ZONE[0] <= data[7].h <= ZONE[1], "retest into the zone"
        assert data[8].c < data[6].c, "rejection from the zone"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, horizontal_spacing=0.07)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((BRK, MIT), 1):
        ch.zone(4, 9.0, ZONE[0], ZONE[1], color=t.bear, alpha=0.16, dash="dash", row=1, col=col)
        ch.hline(1, 9.0, PRIOR_HIGH, color=t.bull_text, row=1, col=col)
        ch.hline(3, 9.0, PRIOR_LOW, color=t.ink2, dash="dash", row=1, col=col)
        ch.label(1, PRIOR_HIGH + 0.2, "prior high", size=11, xanchor="center", yanchor="bottom", row=1, col=col)
        ch.label(3, PRIOR_LOW - 0.2, "prior low", size=11, xanchor="center", yanchor="top", row=1, col=col)
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)
    ch.callout(5, 107.0, 3.0, 108.2, "<b>① Takes the prior high</b> (liquidity)", row=1, col=1, axref="x",
               ayref="y", xanchor="center")
    ch.callout(5, 105.2, 3.0, 108.2, "<b>① Fails to reach the prior high</b>", row=1, col=2, axref="x2",
               ayref="y2", xanchor="center")
    for col, (ax, ay) in enumerate(((2.2, 97.2), (2.2, 97.2)), 1):
        ch.callout(6, 99.7, ax, ay, "<b>② Breaks the prior low</b> with displacement", row=1, col=col,
                   axref=f"x{'' if col == 1 else col}", ayref=f"y{'' if col == 1 else col}", xanchor="center",
                   yanchor="top")
        ch.callout(7, 103.3, 8.0, 106.3, "<b>③ Retest → sell</b>", row=1, col=col,
                   axref=f"x{'' if col == 1 else col}", ayref=f"y{'' if col == 1 else col}", xanchor="center")
    titles = [("Bearish breaker block", "An up-close candle whose move took the prior high,<br>then failed — "
                                         "trapped buyers above"),
              ("Bearish mitigation block", "An up-close candle whose move failed to take the<br>prior high, then "
                                            "broke down — a weaker high")]
    for col, (title, sub) in enumerate(titles, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    fig.update_xaxes(range=[-0.6, 9.4], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[96.0, 109.4], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("ICT · PD Arrays", "Breaker or Mitigation Block?",
              "Same break of the prior low · the difference is whether the prior high was taken first",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "Sell zone")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units based on the ICT PD Arrays lesson")
    return fig


def main():
    paths = save(NAME, build, "Breaker vs Mitigation", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
