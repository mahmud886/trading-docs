"""
Yield-curve dynamics on 200 synthetic days: the 2-year yield rises faster than the 10-year, the curve (10y minus 2y) inverts,
and later the 2-year falls faster than the 10-year, so the curve steepens again from the front end. The bottom panel shows
the 10-year real yield, approximated as the 10-year nominal yield minus the 10-year breakeven inflation rate.

Data: data/yields_daily.csv (synthetic, percent).
"""

import math

from _paths import DATA, OUT
from chartkit import Chart, Reveal, save
from imkit import base_fig, line, load_series, panel_title, shown_n

NAME = "yield-curve-dynamics"
D = load_series(DATA / "yields_daily.csv")
Y2, Y10, BE = D["y2"], D["y10"], D["be10"]
N = len(Y2)
SPREAD = [b - a for a, b in zip(Y2, Y10)]
REAL = [b - c for b, c in zip(Y10, BE)]
INV = [i for i, s in enumerate(SPREAD) if s < 0]
I0, I1 = INV[0], INV[-1]
TROUGH = min(range(N), key=lambda i: SPREAD[i])


def validate():
    assert len(INV) >= 20 and INV == list(range(I0, I1 + 1)), "one continuous inversion lasting at least 20 days"
    assert SPREAD[TROUGH] < -0.20, "a clear inversion"
    assert SPREAD[0] > 0.5 and SPREAD[-1] > 0.4, "positive at the start and end"
    assert max(Y2[:I1 + 1]) > max(Y10[:I0]), "the front end rose faster"
    assert Y2[-1] < Y2[TROUGH] - 0.5, "then the 2-year fell back"
    assert min(REAL) > 0.5 and max(REAL) < 4.0 and REAL[-1] > REAL[0] + 0.8, "real yield rises by about a point"


validate()


def build(t, reveal: Reveal | None = None):
    fig = base_fig(3, [0.38, 0.32, 0.30], 0.075)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    xs = list(range(N))
    k = shown_n(ch, N)
    line(ch, t, xs, Y2, "2-year", t.bear, 1, k=k)
    line(ch, t, xs, Y10, "10-year", t.accent, 1, k=k)
    line(ch, t, xs, SPREAD, "10y - 2y", t.zone, 2, k=k)
    line(ch, t, xs, REAL, "10y real yield", t.ink, 3, k=k)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=2, col=1)
    with ch.group("labels"):
        ch.label(N - 0.5, Y2[-1], "2-year", size=12, color=t.bear_text, yanchor="middle", row=1, col=1)
        ch.label(N - 0.5, Y10[-1], "10-year", size=12, color=t.accent, yanchor="middle", row=1, col=1)
    with ch.group("inversion"):
        ch.zone(I0 - 0.5, I1 + 0.5, -1.0, 1.4, color=t.bear, alpha=0.10, border=False, row=2, col=1)
        ch.label((I0 + I1) / 2, SPREAD[TROUGH] - 0.12, f"<b>Inverted</b>: {len(INV)} days, deepest {SPREAD[TROUGH]:+.2f} points",
                 size=12, color=t.bear_text, xanchor="center", yanchor="top", row=2, col=1)
    with ch.group("steepen"):
        ch.label(N - 3, SPREAD[-1] + 0.12, f"curve steeper again: {SPREAD[-1]:+.2f}<br>(front end fell, back end barely moved)",
                 size=11, color=t.zone_text, xanchor="right", yanchor="bottom", align="right", row=2, col=1)
    with ch.group("real"):
        ch.label(N - 3, REAL[-1] + 0.25, "real yield = 10-year nominal minus<br>10-year breakeven inflation", size=11,
                 color=t.ink2, xanchor="right", yanchor="bottom", align="right", row=3, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False, range=[-1, N + 18])
    fig.update_xaxes(showticklabels=False, **xa)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(0, N, 25)), tickfont=dict(size=11, color=t.ink2),
                     title=dict(text="Trading day", font=dict(size=12, color=t.ink3)), row=3, col=1, **xa)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="%")
    fig.update_yaxes(ticksuffix=" pt", range=[-1.0, 1.4], row=2, col=1)
    ymin, ymax = min(Y2 + Y10), max(Y2 + Y10)
    fig.update_yaxes(range=[math.floor(ymin) - 0.2, math.ceil(ymax) + 0.2], row=1, col=1)
    fig.update_yaxes(range=[0, 4], row=3, col=1)
    panel_title(ch, t, 1, "2-year and 10-year Treasury-style yields")
    panel_title(ch, t, 2, "Curve slope: 10-year minus 2-year")
    panel_title(ch, t, 3, "10-year real yield")
    ch.header("Intermarket Analysis · Yield Curve", "Yield Curve: Slope and Real Yields",
              "Synthetic daily data · the 2-year rises faster than the 10-year, the curve inverts, then steepens from the front end",
              key=[("▬", t.bear, "2-year"), ("▬", t.accent, "10-year"), ("▬", t.zone, "10y − 2y"), ("▬", t.ink, "Real yield")])
    ch.footnote("Synthetic data; an inverted curve describes market pricing of rates, it does not by itself time a trade")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Yield Curve Dynamics", OUT)
    print(NAME, f"spread start {SPREAD[0]:.2f} trough {SPREAD[TROUGH]:.2f}@{TROUGH} end {SPREAD[-1]:.2f}; inverted {I0}-{I1} "
          f"({len(INV)}d); y2 peak {max(Y2):.2f} end {Y2[-1]:.2f}; y10 peak {max(Y10):.2f} end {Y10[-1]:.2f}; "
          f"real {REAL[0]:.2f}->{REAL[-1]:.2f} range {min(REAL):.2f}-{max(REAL):.2f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
