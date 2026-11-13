"""
Three weekly templates — conceptual daily candles, arbitrary units.

Source: content/en/ict/weekly-profiles.mdx -> "Weekly Profile Templates".
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "weekly-profile-templates"
PANELS = [
    ("Classic AMD week", "Tuesday's high is the trap",
     [(100.0, 101.0, 99.4, 100.4), (100.4, 102.2, 100.0, 100.2), (100.2, 100.4, 97.2, 97.6),
      (97.6, 98.0, 95.6, 96.0), (96.0, 97.2, 95.8, 96.8)], 1, "high"),
    ("Tuesday-low week", "Tuesday's low is the trap",
     [(100.0, 100.6, 99.0, 99.6), (99.6, 99.8, 97.8, 99.4), (99.4, 101.8, 99.2, 101.6),
      (101.6, 103.6, 101.2, 103.2), (103.2, 103.6, 102.6, 103.0)], 1, "low"),
    ("Wednesday-reversal week", "Mon–Tue trend, Wednesday turns",
     [(100.0, 101.4, 99.8, 101.2), (101.2, 102.8, 101.0, 102.6), (102.6, 103.8, 101.0, 101.2),
      (101.2, 101.4, 99.2, 99.4), (99.4, 99.6, 98.0, 98.4)], 2, "high"),
]
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]


def validate():
    for _, _, ohlc, extreme_day, kind in PANELS:
        if kind == "high":
            assert max(range(5), key=lambda i: ohlc[i][1]) == extreme_day
        else:
            assert min(range(5), key=lambda i: ohlc[i][2]) == extreme_day


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=3, horizontal_spacing=0.05)
    ch = Chart(t, reveal, top=212, right=40, fig=fig)
    fig.update_layout(hovermode=False)
    for col, (title, sub, ohlc, day, kind) in enumerate(PANELS, 1):
        data = [Candle(i, DAYS[i], *v) for i, v in enumerate(ohlc)]
        ch.candles(data, "", price_fmt=".1f", x=list(range(5)), row=1, col=col)
        y = ohlc[day][1] + 0.3 if kind == "high" else ohlc[day][2] - 0.3
        ch.label(day, y, f"<b>week's {kind}</b>", size=12, color=t.accent, xanchor="center",
                 yanchor="bottom" if kind == "high" else "top", row=1, col=col)
        dom = fig.layout[f"xaxis{'' if col == 1 else col}"].domain
        fig.add_annotation(xref="paper", yref="paper", x=dom[0], y=1, yshift=8, xanchor="left", yanchor="bottom",
                           showarrow=False, align="left", font=dict(family=FONT, size=17, color=t.ink),
                           text=f"<b>{title}</b><br><span style='color:{t.ink2};font-size:13px'>{sub}</span>")
    fig.update_xaxes(range=[-0.7, 4.7], tickvals=list(range(5)), ticktext=DAYS, showgrid=False, zeroline=False,
                     showline=True, linecolor=t.axis, rangeslider_visible=False, fixedrange=True,
                     tickfont=dict(size=12, color=t.ink2))
    fig.update_yaxes(range=[94.8, 104.6], showticklabels=False, showgrid=False, zeroline=False, fixedrange=True)
    ch.header("ICT · Weekly Profiles", "Three Weekly Templates — Where the Week's High or Low Forms",
              "Conceptual daily candles · the extreme that forms early is the trap; the rest of the week runs away "
              "from it", key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")], offset=62)
    ch.footnote("Conceptual shapes in arbitrary units based on the ICT Weekly Profiles lesson")
    return fig


def main():
    paths = save(NAME, build, "Weekly Templates", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
