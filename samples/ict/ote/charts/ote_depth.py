"""
Retracement depth — too shallow, OTE, too deep. Conceptual small multiples in arbitrary units (bullish leg 100 → 110).

Source: content/en/ict/ote.mdx -> "Key Fibonacci Levels", "OTE Rules" and "Common Mistakes" (50 % is not OTE;
a close beyond 100 % invalidates).
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save
from fib import LEVELS, retrace

NAME = "ote-depth"
LOW, HIGH = 100.0, 110.0
LEG = [(100.6, 101.0, 100.0, 100.8), (100.8, 104.5, 100.6, 104.2), (104.2, 108.0, 104.0, 107.6),
       (107.6, 110.0, 107.3, 109.6)]
PANELS = {
    "shallow": LEG + [(109.6, 109.8, 107.4, 107.7), (107.7, 108.0, 106.0, 107.5), (107.5, 110.6, 107.3, 110.4),
                      (110.4, 112.2, 110.2, 112.0)],
    "ote": LEG + [(109.6, 109.8, 106.8, 107.0), (107.0, 107.2, 104.4, 104.6), (104.6, 104.8, 102.8, 104.0),
                  (104.0, 107.0, 103.8, 106.8), (106.8, 110.8, 106.6, 110.5)],
    "deep": LEG + [(109.6, 109.8, 106.8, 107.0), (107.0, 107.2, 103.6, 103.8), (103.8, 104.0, 101.0, 101.3),
                   (101.3, 101.5, 99.2, 99.4)],
}


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


SHALLOW, OTE, DEEP = candles("shallow"), candles("ote"), candles("deep")


def validate():
    assert min(c.l for c in SHALLOW[4:]) > retrace(LOW, HIGH, 0.5), "shallow: never reaches 50 %"
    low = min(c.l for c in OTE[4:])
    assert retrace(LOW, HIGH, 0.79) <= low <= retrace(LOW, HIGH, 0.62) and OTE[-1].c > HIGH, "OTE: reacts, new high"
    assert DEEP[-1].c < LOW, "deep: closes below 100 % — structure broken"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.05)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((SHALLOW, OTE, DEEP), 1):
        ch.zone(0, 8.4, retrace(LOW, HIGH, 0.62), retrace(LOW, HIGH, 0.79), color=t.accent, alpha=0.12,
                border=False, row=1, col=col)
        for pct in LEVELS:
            ote = 0.62 <= pct <= 0.79
            ch.hline(0, 8.4, retrace(LOW, HIGH, pct), color=t.accent if ote else t.ink3,
                     dash="dot" if pct in (0.0, 1.0) else "dash", row=1, col=col)
            ch.label(8.45, retrace(LOW, HIGH, pct), f"{pct * 100:g} %", size=10.5, color=t.accent if ote else t.ink3,
                     row=1, col=col)
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)

    ch.callout(5, 106.0, 4.0, 96.6, "<b>Turns at ~40 %</b> (above 50 %)<br>no OTE entry — don't chase;<br>"
               "wait for the next setup", row=1, col=1, axref="x", ayref="y", xanchor="center", yanchor="top")
    ch.callout(6, 102.8, 4.0, 96.6, "<b>Reacts inside 62–79 %</b><br>the OTE entry, with an OB or FVG<br>"
               "there as the exact level", row=1, col=2, axref="x2", ayref="y2", xanchor="center", yanchor="top")
    ch.callout(7, 99.3, 4.0, 96.6, "<b>Closes below 100 %</b><br>the swing low is broken —<br>the setup is invalid",
               row=1, col=3, axref="x3", ayref="y3", xanchor="center", yanchor="top")

    titles = [("Too shallow", "Price continues before reaching<br>the zone — no trade"),
              ("OTE", "Price retraces 62–79 % of the leg,<br>reacts, and continues"),
              ("Too deep", "Price retraces through the zone<br>and closes beyond the leg's start")]
    for col, (title, sub) in enumerate(titles, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")

    fig.update_xaxes(range=[-0.6, 9.4], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[93.0, 113.0], showticklabels=False, showgrid=False, zeroline=False, showline=False,
                     fixedrange=True)
    ch.header("ICT · Optimal Trade Entry", "How Deep Is the Retracement?",
              "The same bullish leg (100 → 110), three retracements · the OTE is 62–79 % of the leg",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.accent, "OTE 62–79 %")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units based on the ICT OTE lesson")
    return fig


def main():
    paths = save(NAME, build, "OTE Retracement Depth", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
