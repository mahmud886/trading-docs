"""
BOS vs a weak break vs MSS — conceptual small multiples (bearish turn shown in panels 2 and 3).

Source: content/en/ict/mss.mdx -> "MSS vs BOS vs CHOCH" and "Key Difference: Displacement".
Shape-only illustration in arbitrary units.
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "bos-weak-break-mss"
TREND = [(100.0, 101.6, 99.6, 101.3), (101.3, 103.0, 101.0, 102.8), (102.8, 103.0, 101.6, 101.9),
         (101.9, 102.1, 100.8, 101.1), (101.1, 102.6, 101.0, 102.4)]
HH, HL = 103.0, 100.8
PANELS = {
    "bos": TREND + [(102.4, 104.4, 102.2, 104.1), (104.1, 104.8, 103.6, 104.5)],
    "weak": TREND + [(102.4, 102.5, 101.3, 101.5), (101.5, 101.7, 100.6, 100.7), (100.7, 102.2, 100.4, 102.0),
                     (102.0, 103.8, 101.8, 103.6)],
    "mss": TREND + [(102.4, 103.6, 102.2, 102.6), (102.6, 102.8, 99.4, 99.6), (99.6, 100.1, 98.8, 99.0)],
}


def candles(name):
    return [Candle(i, str(i), *ohlc) for i, ohlc in enumerate(PANELS[name])]


BOS, WEAK, MSS = candles("bos"), candles("weak"), candles("mss")
AVG = sum(c.body for c in BOS[:5]) / 5


def validate():
    assert max(c.h for c in BOS[:5]) == HH and BOS[3].l == HL, "uptrend: HH then HL"
    assert BOS[5].c > HH, "BOS: close above the HH (with the trend)"
    assert WEAK[6].c < HL and max(WEAK[5].body, WEAK[6].body) < 2 * AVG, "weak break: drifts below, no displacement"
    assert WEAK[8].c > HH, "weak break: the uptrend resumes"
    assert MSS[5].h > HH > MSS[5].c, "MSS: sweep above the HH first"
    assert MSS[6].c < HL and MSS[6].body >= 2 * AVG, "MSS: displacement closes below the HL"
    assert MSS[7].h < MSS[5].l, "MSS: leaves an FVG"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.05)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, data in enumerate((BOS, WEAK, MSS), 1):
        ch.candles(data, "", price_fmt=".1f", x=[c.t for c in data], row=1, col=col)
        ch.hline(1, 8.6, HH, color=t.bull_text, width=1.2, row=1, col=col)
        ch.hline(3, 8.6, HL, color=t.ink2, width=1.2, dash="dash", row=1, col=col)
        ch.label(1, HH + 0.15, "HH", size=11, bold=True, xanchor="center", yanchor="bottom", row=1, col=col)
        ch.label(3, HL - 0.15, "HL", size=11, bold=True, xanchor="center", yanchor="top", row=1, col=col)

    ch.callout(5, 104.1, 3.2, 105.3, "<b>Close above the HH</b><br>structure continues up", row=1, col=1,
               axref="x", ayref="y", xanchor="center")
    ch.callout(6, 100.65, 4.0, 98.6, "<b>Slow drift, close just below the HL</b><br>small body, no FVG — at most a<br>"
               "CHOCH warning; the trend resumes", row=1, col=2, axref="x2", ayref="y2", xanchor="center",
               yanchor="top")
    ch.zone(5, 8.6, MSS[7].h, MSS[5].l, row=1, col=3)
    ch.callout(5, 103.6, 2.6, 105.3, "<b>① Sweep above the HH</b><br>closes back below", row=1, col=3,
               axref="x3", ayref="y3", xanchor="center")
    ch.callout(6, 99.5, 3.6, 98.4, f"<b>② Displacement closes below the HL</b><br>body {MSS[6].body:.1f} vs avg "
               f"{AVG:.1f}, leaves an FVG → <b>MSS</b>", row=1, col=3, axref="x3", ayref="y3", xanchor="center",
               yanchor="top")

    titles = [("BOS — continuation", "A close beyond the last swing<br>in the direction of the trend"),
              ("Weak break — not an MSS", "A close through the last swing against<br>the trend, but without displacement"),
              ("MSS — confirmed shift", "Liquidity taken first, then a displacement<br>that closes through the last swing")]
    for col, (title, sub) in enumerate(titles, 1):
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")

    fig.update_xaxes(range=[-0.6, 8.8], showticklabels=False, showgrid=False, zeroline=False, showline=True,
                     linecolor=t.axis, rangeslider_visible=False, fixedrange=True)
    fig.update_yaxes(range=[97.6, 106.2], showticklabels=False, showgrid=True, gridcolor=t.grid, dtick=1,
                     zeroline=False, showline=False, fixedrange=True)
    ch.header("ICT · Market Structure Shift", "BOS, a Weak Break, or an MSS?",
              "Same uptrend, three outcomes · what makes the difference is liquidity first and displacement",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")],
              offset=62)
    ch.footnote("Conceptual shapes in arbitrary units (no price scale) based on the ICT Market Structure Shift lesson")
    return fig


def main():
    paths = save(NAME, build, "BOS vs Weak Break vs MSS", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
