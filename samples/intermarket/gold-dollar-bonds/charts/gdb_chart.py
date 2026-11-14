"""
Gold, the dollar index and the 10-year real yield on 160 synthetic days. In the first 100 days gold moves against both the
dollar and the real yield (and the dollar moves with the real yield); afterwards gold decouples and drifts up regardless.
Bars compare correlations of daily changes in the two regimes.

Data: data/gold_dxy_ry.csv (synthetic).
"""

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import base_fig, corr, line, load_series, panel_title, rebased, returns, shown_n

NAME = "gold-dollar-bonds"
D = load_series(DATA / "gold_dxy_ry.csv")
GOLD, DXY, RY = D["gold"], D["dxy"], D["ry"]
N, SPLIT = len(GOLD), 100
RG, RD = returns(GOLD), returns(DXY)
DR = [RY[i] - RY[i - 1] for i in range(1, N)]
PAIRS = [("Gold vs DXY", RG, RD), ("Gold vs real yield", RG, DR), ("DXY vs real yield", RD, DR)]
C1 = [corr(a[:SPLIT - 1], b[:SPLIT - 1]) for _, a, b in PAIRS]
C2 = [corr(a[SPLIT:], b[SPLIT:]) for _, a, b in PAIRS]


def validate():
    assert C1[0] < -0.40 and C1[1] < -0.40, "regime 1: gold moves against the dollar and the real yield"
    assert C1[2] > 0.30, "the dollar moves with the real yield"
    assert abs(C2[0]) < 0.25 and abs(C2[1]) < 0.25, "regime 2: gold decouples"
    assert GOLD[-1] > GOLD[SPLIT] * 1.05 and RY[-1] > RY[SPLIT] - 0.05, "gold rises while real yields do not fall"


validate()


def build(t, reveal: Reveal | None = None):
    fig = base_fig(3, [0.34, 0.26, 0.40], 0.09)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, barmode="group", bargap=0.35)
    xs = list(range(N))
    k = shown_n(ch, N)
    line(ch, t, xs, rebased(GOLD), "Gold", t.zone, 1, k=k)
    line(ch, t, xs, rebased(DXY), "DXY", t.accent, 1, k=k)
    line(ch, t, xs, RY, "10y real yield", t.ink, 2, k=k)
    with ch.group("labels"):
        ch.label(N - 0.5, rebased(GOLD)[-1], "Gold", size=12, color=t.zone_text, yanchor="middle", row=1, col=1)
        ch.label(N - 0.5, rebased(DXY)[-1], "DXY", size=12, color=t.accent, yanchor="middle", row=1, col=1)
        ch.zone(SPLIT - 0.5, N - 0.5, min(RY) - 0.2, max(RY) + 0.2, color=t.bear, alpha=0.07, border=False, row=2, col=1)
        ch.label(SPLIT + 2, max(RY) + 0.15, "gold decouples", size=12, color=t.bear_text, yanchor="top", row=2, col=1)
    with ch.group("bars"):
        names = [n for n, _, _ in PAIRS]
        fig.add_trace(go.Bar(x=names, y=C1, name="Days 1–99", marker_color=t.accent, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{c:+.2f}" for c in C1], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=3, col=1)
        fig.add_trace(go.Bar(x=names, y=C2, name="Days 101–159", marker_color=t.ink3, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{c:+.2f}" for c in C2], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=3, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=False, range=[-1, N + 14], **xa, row=1, col=1)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(0, N, 20)), range=[-1, N + 14], tickfont=dict(size=11, color=t.ink2), **xa, row=2, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), **xa, row=3, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(ticksuffix="%", row=2, col=1)
    fig.update_yaxes(range=[-0.95, 0.95], tickvals=[-0.5, 0, 0.5], zeroline=True, zerolinecolor=t.ink3, row=3, col=1)
    panel_title(ch, t, 1, "Gold and DXY, rebased to 100")
    panel_title(ch, t, 2, "10-year real yield")
    panel_title(ch, t, 3, "Correlation of daily changes: coloured = days 1–99, grey = days 101–159")
    ch.header("Intermarket Analysis · Gold, Dollar, Bonds", "Gold, the Dollar and Real Yields — and When the Link Breaks",
              "Synthetic daily data · gold moves against the dollar and real yields for 100 days, then decouples",
              key=[("▬", t.zone, "Gold"), ("▬", t.accent, "DXY"), ("▬", t.ink, "Real yield")])
    ch.footnote("Synthetic data; real gold has also decoupled from real yields at times — treat the link as a tendency")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Gold Dollar Bonds", OUT)
    print(NAME, [f"{n} {a:+.2f}/{b:+.2f}" for (n, _, _), a, b in zip(PAIRS, C1, C2)], f"gold {GOLD[0]:.0f}->{GOLD[SPLIT]:.0f}->{GOLD[-1]:.0f}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
