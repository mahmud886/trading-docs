"""
Time-series momentum across four synthetic assets (equity, bond, gold, FX). Rule: each day take the sign of the trailing 60-day
return (long if positive, short if negative), hold for one day, no costs. Top: cumulative result of the rule per asset.
Bottom: final result of the rule versus buy-and-hold. In this synthetic sample the rule helps where a slow trend was built in
(equity, gold) and does nothing useful where moves were closer to random (bond, FX).

Data: data/momentum_assets.csv (synthetic).
"""

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import base_fig, line, load_series, panel_title, returns, shown_n

NAME = "cross-asset-momentum"
D = load_series(DATA / "momentum_assets.csv")
ASSETS = [("equity", "Equity index"), ("bond", "Bond index"), ("gold", "Gold"), ("fx", "FX pair")]
LB = 60
N = len(D["equity"])


def momentum_curve(px):
    """Cumulative % result of: position on day t+1 = sign of the return over the previous LB days (known at close of day t)."""
    r = returns(px)                                    # r[i] = return into day i+1
    cum, curve = 1.0, [None] * LB
    for t in range(LB, N - 1):
        pos = 1 if px[t] > px[t - LB] else -1
        cum *= 1 + pos * r[t]
        curve.append(100 * (cum - 1))
    return curve + [curve[-1]] if len(curve) == N - 1 else curve


CURVES = {k: momentum_curve(D[k]) for k, _ in ASSETS}
FINAL = {k: CURVES[k][-1] for k, _ in ASSETS}
HOLD = {k: 100 * (D[k][-1] / D[k][LB] - 1) for k, _ in ASSETS}


def validate():
    assert all(len(c) == N for c in CURVES.values())
    assert FINAL["equity"] > 10 and FINAL["gold"] > 10, "trend assets: the rule makes a gain"
    assert FINAL["bond"] < 5 and FINAL["fx"] < 5, "near-random assets: no useful gain"


validate()
COL = {"equity": "accent", "bond": "ink3", "gold": "zone", "fx": "bear"}


def build(t, reveal: Reveal | None = None):
    fig = base_fig(2, [0.56, 0.44], 0.1)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, barmode="group", bargap=0.3)
    xs = list(range(N))
    k = shown_n(ch, N)
    for a, name in ASSETS:
        line(ch, t, xs, CURVES[a], name, getattr(t, COL[a]), 1, k=k)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    with ch.group("labels"):
        for a, name in ASSETS:
            ch.label(N - 0.5, FINAL[a], f"{name} {FINAL[a]:+.0f}%", size=11, color=getattr(t, COL[a]) if a != "bond" else t.ink2,
                     yanchor="middle", row=1, col=1)
    with ch.group("bars"):
        names = [n for _, n in ASSETS]
        fig.add_trace(go.Bar(x=names, y=[FINAL[a] for a, _ in ASSETS], marker_color=t.accent, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{FINAL[a]:+.0f}%" for a, _ in ASSETS], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=2, col=1)
        fig.add_trace(go.Bar(x=names, y=[HOLD[a] for a, _ in ASSETS], marker_color=t.ink3, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{HOLD[a]:+.0f}%" for a, _ in ASSETS], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=True, tickvals=list(range(LB, N, 40)), range=[LB - 3, N + 50], tickfont=dict(size=11, color=t.ink2),
                     title=dict(text="Trading day", font=dict(size=12, color=t.ink3)), **xa, row=1, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="%")
    fig.update_yaxes(zeroline=True, zerolinecolor=t.ink3, row=2, col=1)
    panel_title(ch, t, 1, f"Cumulative result of the {LB}-day momentum rule (long if the past {LB} days rose, short if they fell)")
    panel_title(ch, t, 2, "Final result: momentum rule (coloured) vs buy-and-hold (grey)")
    ch.header("Intermarket Analysis · Cross-Asset Momentum", "Time-Series Momentum Across Four Assets",
              f"Synthetic daily data · {LB}-day lookback, one-day hold, no costs · gains only where trends persisted",
              key=[("▬", t.accent, "Equity"), ("▬", t.zone, "Gold"), ("▬", t.ink3, "Bond"), ("▬", t.bear, "FX")])
    ch.footnote("Synthetic data with trends built into equity and gold; real results depend on the market, the period and costs")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Cross-Asset Momentum", OUT)
    print(NAME, "rule", {k: round(v, 1) for k, v in FINAL.items()}, "hold", {k: round(v, 1) for k, v in HOLD.items()},
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
