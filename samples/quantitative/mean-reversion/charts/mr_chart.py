"""
Z-score mean reversion on two synthetic 400-bar series: one mean-reverting (Ornstein-Uhlenbeck) and one random walk.
Rule (identical on both): z = (price - 40-bar mean) / 40-bar standard deviation. Enter short at z > +2 or long at z < -2; exit at z crossing 0,
or at a stop when |z| reaches 3.5 against the position (checked on bar closes); no costs. Top: the mean-reverting series with its
bands and trades. Bottom: cumulative result of the rule on each series, in points.
"""

import math
import random
import statistics

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import Chart, Reveal, save
from imkit import panel_title, shown_n

NAME = "mean-reversion-zscore"
N, W = 400, 40
ENTRY, STOP = 2.0, 3.5


def make_ou(seed, theta=0.12, sd=1.0):
    r = random.Random(seed)
    x, out = 0.0, []
    for _ in range(N):
        x += -theta * x + r.gauss(0, sd)
        out.append(100 + x)
    return out


def make_rw(seed, sd=1.0):
    r = random.Random(seed)
    x, out = 0.0, []
    for _ in range(N):
        x += r.gauss(0, sd)
        out.append(100 + x)
    return out


def zscores(px):
    z = [None] * (W - 1)
    for i in range(W - 1, N):
        win = px[i - W + 1:i + 1]
        sd = statistics.pstdev(win)
        z.append((px[i] - statistics.mean(win)) / sd if sd > 0 else 0.0)
    return z


def backtest(px):
    z = zscores(px)
    pos, entry, trades, curve, cum = 0, 0.0, [], [], 0.0
    for i in range(W, N):
        if pos == 0:
            if z[i] > ENTRY:
                pos, entry = -1, px[i]; trades.append([i, None, -1, 0.0])
            elif z[i] < -ENTRY:
                pos, entry = 1, px[i]; trades.append([i, None, 1, 0.0])
        else:
            hit_exit = (pos == 1 and z[i] >= 0) or (pos == -1 and z[i] <= 0)
            hit_stop = (pos == 1 and z[i] <= -STOP) or (pos == -1 and z[i] >= STOP)
            if hit_exit or hit_stop:
                pnl = pos * (px[i] - entry)
                trades[-1][1], trades[-1][3] = i, pnl
                cum += pnl; pos = 0
        curve.append(cum)
    return z, [t for t in trades if t[1] is not None], [None] * W + curve


SEED_OU, SEED_RW = 11, 11
OU, RW = make_ou(SEED_OU), make_rw(SEED_RW)
Z_OU, T_OU, C_OU = backtest(OU)
Z_RW, T_RW, C_RW = backtest(RW)


def validate():
    assert len(T_OU) >= 10 and len(T_RW) >= 6, "a handful of trades on each series"
    assert C_OU[-1] > 25 and sum(1 for t in T_OU if t[3] > 0) / len(T_OU) > 0.8, "the rule works on the mean-reverting series"
    assert C_RW[-1] < 0 and min(t[3] for t in T_RW) < -15, "on the random walk a large loser outweighs the small winners"
    assert sum(1 for t in T_RW if t[3] > 0) / len(T_RW) > 0.5, "even though most random-walk trades win"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.13, row_heights=[0.58, 0.42])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    k = shown_n(ch, N)
    xs = list(range(N))
    fig.add_trace(go.Scatter(x=xs[:k], y=OU[:k], mode="lines", line=dict(color=t.ink, width=1.8), showlegend=False, hoverinfo="skip"), row=1, col=1)
    mean = [None] * (W - 1) + [statistics.mean(OU[i - W + 1:i + 1]) for i in range(W - 1, N)]
    up = [None] * (W - 1) + [m + ENTRY * statistics.pstdev(OU[i - W + 1:i + 1]) for i, m in zip(range(W - 1, N), mean[W - 1:])]
    dn = [None] * (W - 1) + [m - ENTRY * statistics.pstdev(OU[i - W + 1:i + 1]) for i, m in zip(range(W - 1, N), mean[W - 1:])]
    with ch.group("bands"):
        for ys, c, d in ((mean, t.ink3, "dash"), (up, t.bear, "dot"), (dn, t.bull, "dot")):
            fig.add_trace(go.Scatter(x=xs, y=ys, mode="lines", line=dict(color=c, width=1.4, dash=d), opacity=ch._alpha, showlegend=False,
                                     hoverinfo="skip", connectgaps=False), row=1, col=1)
    with ch.group("trades"):
        for a, b, pos, pnl in T_OU:
            fig.add_trace(go.Scatter(x=[a, b], y=[OU[a], OU[b]], mode="lines+markers", line=dict(color=t.bull if pnl > 0 else t.bear, width=2.4),
                                     marker=dict(size=7, color=t.bull if pnl > 0 else t.bear, symbol=["triangle-up" if pos == 1 else "triangle-down", "circle"]),
                                     opacity=ch._alpha, showlegend=False, hoverinfo="skip"), row=1, col=1)
    with ch.group("result"):
        fig.add_trace(go.Scatter(x=xs, y=C_OU, mode="lines", line=dict(color=t.accent, width=2.6), opacity=ch._alpha, showlegend=False, hoverinfo="skip",
                                 connectgaps=False), row=2, col=1)
        fig.add_trace(go.Scatter(x=xs, y=C_RW, mode="lines", line=dict(color=t.bear, width=2.6), opacity=ch._alpha, showlegend=False, hoverinfo="skip",
                                 connectgaps=False), row=2, col=1)
        fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=2, col=1)
        wins = sum(1 for t_ in T_OU if t_[3] > 0)
        ch.label(N + 3, C_OU[-1], f"mean-reverting: {C_OU[-1]:+.0f} pts<br>{len(T_OU)} trades, {wins} winners", size=11, color=t.accent, yanchor="middle", row=2, col=1)
        wr = sum(1 for t_ in T_RW if t_[3] > 0)
        ch.label(N + 3, C_RW[-1], f"random walk: {C_RW[-1]:+.0f} pts<br>{len(T_RW)} trades, {wr} winners", size=11, color=t.bear_text, yanchor="middle", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[0, N + 80], tickfont=dict(size=11, color=t.ink2), title=dict(text="Bar", font=dict(size=12, color=t.ink3)), **xa)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    panel_title(ch, t, 1, f"Mean-reverting series with the {W}-bar mean and ±{ENTRY:g} standard-deviation bands; ▲ long, ▼ short, ● exit")
    panel_title(ch, t, 2, "Cumulative result of the same z-score rule (points, no costs)")
    ch.header("Quantitative Trading · Mean Reversion", "Z-Score Mean Reversion: Works Only If the Series Reverts",
              "Synthetic series · same rule on a mean-reverting series and on a random walk",
              key=[("▬", t.accent, "Mean-reverting series"), ("▬", t.bear, "Random walk")])
    ch.footnote("Synthetic data; a real market does not announce whether it is mean-reverting, and the property can change")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Mean Reversion Z-Score", OUT)
    print(NAME, f"OU trades {len(T_OU)} wins {sum(1 for x in T_OU if x[3] > 0)} total {C_OU[-1]:.1f} worst {min(x[3] for x in T_OU):.1f}; RW trades {len(T_RW)} "
          f"wins {sum(1 for x in T_RW if x[3] > 0)} total {C_RW[-1]:.1f} worst {min(x[3] for x in T_RW):.1f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
