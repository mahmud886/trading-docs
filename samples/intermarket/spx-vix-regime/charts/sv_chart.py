"""
SPX and a VIX-like index over 260 synthetic days. Days are bucketed by the previous day's volatility index (below 15, 15-20,
above 20 - common rules of thumb, not standards), and each bucket's realised daily volatility of the stock index is measured.
The volatility index and the stock index also move against each other on a daily basis.

Data: data/spx_vix.csv (synthetic).
"""

import statistics

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import base_fig, corr, line, load_series, panel_title, rebased, returns, shown_n

NAME = "spx-vix-regime"
D = load_series(DATA / "spx_vix.csv")
SPX, VIX = D["spx"], D["vix"]
N = len(SPX)
R = returns(SPX)                                        # R[i] = return into day i+1
DV = [VIX[i] - VIX[i - 1] for i in range(1, N)]
BUCKETS = [("VIX below 15", lambda v: v < 15), ("VIX 15–20", lambda v: 15 <= v <= 20), ("VIX above 20", lambda v: v > 20)]
STATS = []
for name, f in BUCKETS:
    rets = [100 * R[i] for i in range(1, N - 1) if f(VIX[i])]          # previous day's VIX decides the bucket
    STATS.append((name, len(rets), statistics.pstdev(rets), statistics.mean(rets)))
CORR = corr(R, DV)


def validate():
    assert all(n >= 12 for _, n, _, _ in STATS), "every bucket has at least 12 days"
    sds = [s for _, _, s, _ in STATS]
    assert sds[0] < sds[1] < sds[2], "realised volatility rises with the volatility index"
    assert sds[2] > 1.8 * sds[0], "the top bucket is much more volatile"
    assert CORR < -0.5, "stocks and the volatility index move against each other day by day"
    assert min(VIX) < 14 and max(VIX) > 22


validate()


def build(t, reveal: Reveal | None = None):
    fig = base_fig(3, [0.32, 0.26, 0.42], 0.09)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    xs = list(range(N))
    k = shown_n(ch, N)
    line(ch, t, xs, rebased(SPX), "SPX", t.accent, 1, k=k)
    line(ch, t, xs, VIX, "VIX-like", t.zone, 2, k=k)
    with ch.group("levels"):
        for lvl in (15, 20):
            ch.hline(-1, N, lvl, color=t.ink3, dash="dash", row=2, col=1)
            ch.label(N + 1, lvl, str(lvl), size=11, color=t.ink2, yanchor="middle", row=2, col=1)
    with ch.group("bars"):
        names = [n for n, _, _, _ in STATS]
        fig.add_trace(go.Bar(x=names, y=[s for _, _, s, _ in STATS], marker_color=[t.zone, t.accent, t.bear], opacity=0.85 * ch._alpha,
                             showlegend=False, hoverinfo="skip", text=[f"{s:.2f}%<br>({n} days)" for _, n, s, _ in STATS],
                             textposition="outside", textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=3, col=1)
    with ch.group("corr"):
        ch.label(N * 0.5, max(VIX) + 1.5, f"daily SPX return vs daily change in the VIX-like index: correlation {CORR:.2f}", size=12,
                 color=t.ink2, xanchor="center", yanchor="bottom", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=False, range=[-1, N + 10], **xa, row=1, col=1)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(0, N, 40)), range=[-1, N + 10], tickfont=dict(size=11, color=t.ink2), **xa, row=2, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), **xa, row=3, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[8, max(VIX) + 6], row=2, col=1)
    fig.update_yaxes(range=[0, max(s for _, _, s, _ in STATS) * 1.35], ticksuffix="%", row=3, col=1)
    panel_title(ch, t, 1, "Stock index, rebased to 100")
    panel_title(ch, t, 2, "Volatility index (VIX-like)")
    panel_title(ch, t, 3, "Realised daily volatility of the stock index, by the previous day's volatility index")
    ch.header("Intermarket Analysis · SPX and VIX", "Volatility Regimes: What a High VIX Means for Daily Moves",
              "Synthetic daily data · the volatility index is not a forecast of direction, but it sizes the typical daily move",
              key=[("▬", t.accent, "Stock index"), ("▬", t.zone, "Volatility index")])
    ch.footnote("Synthetic data; real VIX bands (15 / 20) are rules of thumb and the relationship varies across periods")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "SPX VIX Regime", OUT)
    print(NAME, [(n, c, round(s, 2), round(m, 2)) for n, c, s, m in STATS], f"corr {CORR:.2f} vix {min(VIX):.1f}-{max(VIX):.1f}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
