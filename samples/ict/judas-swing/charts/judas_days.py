"""
The Judas swing on a bullish day and on a bearish day — conceptual small multiples in arbitrary units.

Source: content/en/ict/judas-swing.mdx -> "How the Judas Swing Works".
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "judas-swing-days"
RANGE = (99.1, 101.0)
ASIA = [(100.0, 100.6, 99.4, 100.3), (100.3, 100.9, 99.8, 99.9), (99.9, 100.4, 99.1, 100.2), (100.2, 101.0, 100.0,
                                                                                             100.6),
        (100.6, 100.8, 99.6, 99.8), (99.8, 100.5, 99.5, 100.4)]
PANELS = {
    "bull": ASIA + [(100.4, 100.5, 98.9, 99.1), (99.1, 99.3, 97.9, 98.9), (98.9, 101.2, 98.8, 101.0),
                    (101.0, 102.6, 100.6, 102.4), (102.4, 104.0, 102.0, 103.8)],
    "bear": ASIA + [(100.4, 101.5, 100.3, 101.3), (101.3, 102.1, 100.9, 101.2), (101.2, 101.3, 98.8, 99.0),
                    (99.0, 99.4, 97.4, 97.6), (97.6, 98.0, 96.0, 96.2)],
}


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


BULL, BEAR = candles("bull"), candles("bear")


def validate():
    for data in (BULL, BEAR):
        assert (min(c.l for c in data[:6]), max(c.h for c in data[:6])) == RANGE, "Asian range"
    assert min(c.l for c in BULL[6:8]) < RANGE[0] and BULL[-1].c > RANGE[1], "bullish day: false move down first"
    assert max(c.h for c in BEAR[6:8]) > RANGE[1] and BEAR[-1].c < RANGE[0], "bearish day: false move up first"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, horizontal_spacing=0.07)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((BULL, BEAR), 1):
        ch.zone(-0.4, 5.4, *RANGE, color=t.ink3, alpha=0.10, dash="dot", row=1, col=col)
        ch.label(-0.4, RANGE[1] + 0.15, "Asian range", size=12, yanchor="bottom", row=1, col=col)
        ch.fig.add_vline(x=5.5, line=dict(color=t.accent, width=1.2, dash="dot"), row=1, col=col)
        ch.label(5.6, 104.6, "<b>session opens</b>", size=12, color=t.accent, row=1, col=col)
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)
    ch.callout(7, 97.9, 4.5, 96.6, "<b>① Judas swing down</b><br>takes the sell stops below the range", row=1,
               col=1, axref="x", ayref="y", xanchor="center", yanchor="top")
    ch.callout(9, 102.5, 7.2, 104.2, "<b>② True move up</b> → buy-side liquidity", row=1, col=1, axref="x",
               ayref="y", xanchor="center")
    ch.callout(7, 102.1, 4.5, 103.6, "<b>① Judas swing up</b><br>takes the buy stops above the range", row=1,
               col=2, axref="x2", ayref="y2", xanchor="center")
    ch.callout(9, 97.4, 7.2, 95.6, "<b>② True move down</b> → sell-side liquidity", row=1, col=2, axref="x2",
               ayref="y2", xanchor="center", yanchor="top")
    for col, (title, sub) in enumerate((("Bullish day", "The first move is down — it's the trap"),
                                        ("Bearish day", "The first move is up — it's the trap")), 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    fig.update_xaxes(range=[-0.8, 11.0], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[95.0, 105.2], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("ICT · Judas Swing", "The Judas Swing — the First Move Is the Trap",
              "Know the bias before the session · then expect the open to move against it first",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")], offset=62)
    ch.footnote("Conceptual shapes in arbitrary units based on the ICT Judas Swing lesson")
    return fig


def main():
    paths = save(NAME, build, "Judas Swing Days", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
