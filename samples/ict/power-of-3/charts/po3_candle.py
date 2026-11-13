"""
How a Power of 3 day prints as one daily candle — bullish and bearish, conceptual, arbitrary units.

Source: content/en/ict/power-of-3.mdx -> "PO3 on the Daily Candle".
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "po3-daily-candle"
ASIA = [(100.0, 100.5, 99.6, 100.2), (100.2, 100.6, 99.8, 99.9), (99.9, 100.4, 99.6, 100.3), (100.3, 100.6, 99.9,
                                                                                             100.1)]
PANELS = {
    "bull": ASIA + [(100.1, 100.2, 98.6, 98.9), (98.9, 99.2, 98.0, 98.4), (98.4, 100.4, 98.3, 100.2),
                    (100.2, 101.8, 100.0, 101.6), (101.6, 103.2, 101.3, 102.9), (102.9, 103.6, 102.4, 103.3)],
    "bear": ASIA + [(100.1, 101.6, 100.0, 101.3), (101.3, 102.0, 100.8, 101.6), (101.6, 101.7, 99.8, 100.0),
                    (100.0, 100.2, 98.4, 98.6), (98.6, 98.9, 97.0, 97.3), (97.3, 97.8, 96.6, 96.9)],
}
DAILY_X = 11.5


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


def daily(data):
    return Candle(DAILY_X, "D", data[0].o, max(c.h for c in data), min(c.l for c in data), data[-1].c)


BULL, BEAR = candles("bull"), candles("bear")
D_BULL, D_BEAR = daily(BULL), daily(BEAR)


def validate():
    lo = min(range(len(BULL)), key=lambda i: BULL[i].l)
    hi = max(range(len(BULL)), key=lambda i: BULL[i].h)
    assert lo < hi and D_BULL.bullish and D_BULL.o - D_BULL.l > 1, "bullish day: low first, opens above its low"
    lo = min(range(len(BEAR)), key=lambda i: BEAR[i].l)
    hi = max(range(len(BEAR)), key=lambda i: BEAR[i].h)
    assert hi < lo and not D_BEAR.bullish and D_BEAR.h - D_BEAR.o > 1, "bearish day: high first"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, horizontal_spacing=0.07)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, (data, d) in enumerate(((BULL, D_BULL), (BEAR, D_BEAR)), 1):
        ch.zone(-0.4, 3.4, 99.6, 100.6, color=t.ink3, alpha=0.10, dash="dot", row=1, col=col)
        ch.label(-0.4, 100.75, "<b>A</b> · range", size=12, yanchor="bottom", row=1, col=col)
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)
        ch.fig.add_vline(x=10.2, line=dict(color=t.ink3, width=1, dash="dot"), row=1, col=col)
        ch.candles([d], "", price_fmt=".1f", x=[DAILY_X], row=1, col=col)
        ch.label(DAILY_X, 95.9, "<b>daily candle</b>", size=12, xanchor="center", row=1, col=col)
        ch.label(DAILY_X + 0.6, d.o, f"open {d.o:.1f}", size=11, row=1, col=col)
    ch.callout(5, 98.0, 3.0, 96.8, "<b>M</b> · false drop<br>low of day forms <b>first</b>", row=1, col=1,
               axref="x", ayref="y", xanchor="center", yanchor="top")
    ch.callout(8, 103.2, 5.0, 104.2, "<b>D</b> · true move up<br>closes near the high", row=1, col=1, axref="x",
               ayref="y", xanchor="center")
    ch.callout(5, 102.0, 3.0, 103.4, "<b>M</b> · false rally<br>high of day forms <b>first</b>", row=1, col=2,
               axref="x2", ayref="y2", xanchor="center")
    ch.callout(9, 96.6, 5.2, 96.0, "<b>D</b> · true move down<br>closes near the low", row=1, col=2, axref="x2",
               ayref="y2", xanchor="center")
    for col, (title, sub) in enumerate((("Bullish day", "Open → low → high → close near the high"),
                                        ("Bearish day", "Open → high → low → close near the low")), 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    fig.update_xaxes(range=[-0.8, 13.6], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[95.4, 105.0], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("ICT · Power of 3", "Power of 3 — How the Day Prints as One Candle",
              "A = accumulation · M = manipulation · D = distribution · intraday candles on the left, the daily "
              "candle they make on the right", key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units based on the ICT Power of 3 lesson")
    return fig


def main():
    paths = save(NAME, build, "Power of 3 Daily Candle", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
