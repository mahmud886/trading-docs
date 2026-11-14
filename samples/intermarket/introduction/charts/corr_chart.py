"""
Correlation is not constant. 140 synthetic days of the dollar index and EUR/USD (both rebased to 100): for the first 90 days
EUR/USD moves against the dollar; afterwards the link almost disappears. The bottom panel is the 20-day rolling correlation of
daily returns.

Data: data/dxy_eurusd_daily.csv (synthetic).
"""

import math

from _paths import DATA, OUT
from chartkit import Chart, Reveal, save
from imkit import base_fig, corr, line, load_series, panel_title, rebased, returns, rolling_corr, shown_n

NAME = "intermarket-correlation"
D = load_series(DATA / "dxy_eurusd_daily.csv")
DXY, EUR = D["dxy"], D["eurusd"]
N, SPLIT, W = len(DXY), 90, 20
RD, RE = returns(DXY), returns(EUR)
ROLL = [None] + rolling_corr(RD, RE, W)                      # aligned to price index (day i uses returns up to day i)
_all = rebased(DXY) + rebased(EUR)
YLO, YHI = math.floor(min(_all)) - 1, math.ceil(max(_all)) + 2
C1, C2 = corr(RD[:SPLIT - 1], RE[:SPLIT - 1]), corr(RD[SPLIT:], RE[SPLIT:])


def validate():
    assert C1 < -0.80, f"first regime strongly negative ({C1:.2f})"
    assert abs(C2) < 0.30, f"second regime weak ({C2:.2f})"
    early = [c for c in ROLL[W:SPLIT] if c is not None]
    late = [c for c in ROLL[SPLIT + W:] if c is not None]
    assert max(early) < -0.60 and max(abs(c) for c in late) < 0.65 and min(late) > -0.65, "rolling correlation changes regime"
    assert max(late) > min(early) + 0.5, "the change is visible in the rolling line"


validate()


def build(t, reveal: Reveal | None = None):
    fig = base_fig(2, [0.62, 0.38])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    xs = list(range(N))
    k = shown_n(ch, N)
    line(ch, t, xs, rebased(DXY), "DXY", t.accent, 1, k=k)
    line(ch, t, xs, rebased(EUR), "EUR/USD", t.ink, 1, dash="dot", k=k)
    line(ch, t, xs, ROLL, "20-day correlation", t.zone, 2, k=k)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=2, col=1)
    with ch.group("labels"):
        ch.label(N - 0.5, rebased(DXY)[-1], "DXY", size=12, color=t.accent, yanchor="middle", row=1, col=1)
        ch.label(N - 0.5, rebased(EUR)[-1], "EUR/USD", size=12, color=t.ink, yanchor="middle", row=1, col=1)
    with ch.group("regime"):
        ch.zone(-0.5, SPLIT - 0.5, YLO, YHI, color=t.zone, alpha=0.06, border=False, row=1, col=1)
        ch.label(SPLIT / 2, YHI - 0.5, f"<b>Inverse regime</b><br>correlation of returns {C1:.2f}", size=12, color=t.zone_text,
                 xanchor="center", yanchor="top", align="center", row=1, col=1)
        ch.label(SPLIT + (N - SPLIT) / 2, YHI - 0.5, f"<b>Link breaks down</b><br>correlation {C2:+.2f}", size=12, color=t.bear_text,
                 xanchor="center", yanchor="top", align="center", row=1, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False, range=[-1, N + 12])
    fig.update_xaxes(showticklabels=False, **xa)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(0, N, 20)), tickfont=dict(size=11, color=t.ink2),
                     title=dict(text="Trading day", font=dict(size=12, color=t.ink3)), row=2, col=1, **xa)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[YLO, YHI], row=1, col=1)
    fig.update_yaxes(range=[-1.05, 1.05], tickvals=[-1, -0.5, 0, 0.5, 1], row=2, col=1)
    panel_title(ch, t, 1, "DXY and EUR/USD, rebased to 100")
    panel_title(ch, t, 2, f"Rolling {W}-day correlation of daily returns")
    ch.header("Intermarket Analysis · Introduction", "Correlation Is Not a Constant",
              "Synthetic daily data · a strong inverse link for 90 days, then almost none",
              key=[("▬", t.accent, "DXY"), ("┄", t.ink, "EUR/USD"), ("▬", t.zone, "20-day correlation")])
    ch.footnote("Synthetic data; real correlations also change over time — measure them on the window you trade")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Intermarket Correlation", OUT)
    print(NAME, f"corr1 {C1:.3f} corr2 {C2:.3f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
