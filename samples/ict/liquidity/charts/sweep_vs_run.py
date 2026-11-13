"""
Sweep (raid) vs run (breakout) of buy-side liquidity — conceptual small multiples.

Source: content/en/ict/liquidity.mdx -> "Liquidity Sweep vs. Liquidity Grab" and
content/en/ict/liquidity-sweep.mdx -> "What Invalidates a Sweep". Shape-only illustration in arbitrary units.
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "sweep-vs-run"
LEVEL = 100.0  # equal highs; buy stops rest above

PANELS = {
    "sweep": [(95, 96.5, 94.5, 96), (96, 98, 95.6, 97.6), (97.6, 99.9, 97, 99.2), (99.2, 99.9, 97.8, 98.2),
              (98.2, 99.6, 97.9, 99.3), (99.3, 101.6, 98.9, 99.5), (99.5, 99.7, 95.6, 96.0), (96.0, 97.5, 95.4, 97.1),
              (97.1, 97.3, 93.6, 94.0)],
    "run": [(95, 96.5, 94.5, 96), (96, 98, 95.6, 97.6), (97.6, 99.9, 97, 99.2), (99.2, 99.9, 97.8, 98.2),
            (98.2, 99.6, 97.9, 99.3), (99.3, 101.8, 99.1, 101.4), (101.4, 103.0, 100.9, 102.6),
            (102.6, 102.8, 100.3, 100.8), (100.8, 104.2, 100.6, 103.9)],
}
EQH = (2, 3)  # the two touches that form the equal highs


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


SWEEP, RUN = candles("sweep"), candles("run")


def validate():
    for data in (SWEEP, RUN):
        assert all(data[i].h == 99.9 for i in EQH) and all(c.h < LEVEL for c in data[:5]), "equal highs below level"
    raid, after = SWEEP[5], SWEEP[6]
    assert raid.h > LEVEL and raid.c < LEVEL, "sweep: wick beyond, close back inside"
    assert not after.bullish and after.c < min(c.l for c in SWEEP[3:6]), "displacement back through the range"
    assert RUN[5].c > LEVEL and RUN[6].c > LEVEL, "run: two bodies close beyond"
    assert min(c.l for c in RUN[7:]) > LEVEL, "run: the retest holds above the level"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, horizontal_spacing=0.07)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((SWEEP, RUN), 1):
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)
        ch.hline(1.6, 8.6, LEVEL, color=t.bull_text, width=1.4, row=1, col=col)
        ch.zone(1.6, 8.6, LEVEL, LEVEL + 0.8, color=t.bull, alpha=0.10, border=False, row=1, col=col)
        ch.label(-0.4, LEVEL + 0.25, f"<b style='color:{t.bull_text}'>Equal highs · BSL</b>", size=12, row=1, col=col,
                 yanchor="bottom")
        for i in EQH:
            ch.label(i, LEVEL + 0.9, "EQH", size=10, bold=True, color=t.ink2, xanchor="center", yanchor="bottom",
                     row=1, col=col)

    ch.callout(5, 101.6, 2.6, 103.4, "<b>Wick beyond, close back inside</b><br>stops are triggered, buyers trapped",
               row=1, col=1, axref="x", ayref="y", xanchor="center")
    ch.callout(6, 95.7, 5.0, 94.7, "<b>Displacement back down</b><br>→ wait for MSS, then trade the reversal",
               row=1, col=1, axref="x", ayref="y", xanchor="center", yanchor="top")
    ch.callout(5, 101.4, 2.4, 103.4, "<b>Bodies close beyond and hold</b><br>stops become fuel",
               row=1, col=2, axref="x2", ayref="y2", xanchor="center")
    ch.callout(7, 100.3, 6.2, 97.6, "<b>Retest holds above</b><br>→ don't fade it; trend continues",
               row=1, col=2, axref="x2", ayref="y2", xanchor="center", yanchor="top")

    titles = [("Sweep (raid) — reversal setup", "Price trades beyond the level only to take the stops,<br>"
                                                 "then closes back inside and displaces away"),
              ("Run (breakout) — continuation", "Price closes beyond the level and holds;<br>"
                                               "the triggered stops push it further")]
    for col, (title, sub) in enumerate(titles, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")

    style = ch._axis_style()
    fig.update_xaxes(range=[-0.7, 8.9], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[92.5, 105.5], showticklabels=False, showgrid=True, gridcolor=style["gridcolor"],
                     dtick=1.5, zeroline=False, showline=False, fixedrange=True)
    ch.header("ICT · Liquidity", "Sweep or Run? Read the Close, Not the Wick",
              "The same equal highs, two different outcomes · buy-side example shown",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "BSL")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units (no price scale) based on the ICT Liquidity lessons")
    return fig


def main():
    paths = save(NAME, build, "Sweep vs Run", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
