"""
The law of large numbers for a trading edge. A strategy wins 45% of trades for +1.5R and loses 55% for -1R: expectancy
0.45 x 1.5 - 0.55 x 1 = +0.125R per trade. Top: 30 simulated paths of 200 trades each (cumulative R). Bottom: the exact probability
that the cumulative result is positive after n trades, with a 5,000-path simulation alongside as a check.
"""

import math
import random

import plotly.graph_objects as go

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import base_fig, line, panel_title, shown_n

NAME = "quant-law-of-large-numbers"
P, WIN, LOSS = 0.45, 1.5, 1.0
EXPECT = P * WIN - (1 - P) * LOSS
N_TRADES = 200
CHECK = [10, 20, 50, 100, 200, 500]
rng = random.Random(7)


def path(n):
    out, c = [], 0.0
    for _ in range(n):
        c += WIN if rng.random() < P else -LOSS
        out.append(c)
    return out


PATHS = [path(N_TRADES) for _ in range(30)]


def exact_positive(n):
    """P(cumulative R > 0 after n trades): need wins k with 1.5k - (n-k) > 0."""
    kmin = math.floor(n * LOSS / (WIN + LOSS)) + 1
    return sum(math.comb(n, k) * P ** k * (1 - P) ** (n - k) for k in range(kmin, n + 1))


SIMS = {n: sum(1 for _ in range(5000) if sum(WIN if rng.random() < P else -LOSS for _ in range(n)) > 0) / 5000 for n in CHECK}
EXACT = {n: exact_positive(n) for n in CHECK}


def validate():
    assert abs(EXPECT - 0.125) < 1e-9
    for n in CHECK:
        assert abs(SIMS[n] - EXACT[n]) < 0.03, (n, SIMS[n], EXACT[n])
    assert EXACT[10] < 0.60 and EXACT[500] > 0.97, "few trades: close to a coin flip; many trades: the edge shows"
    assert all(EXACT[a] <= EXACT[b] + 0.04 for a, b in zip(CHECK, CHECK[1:])), "broadly rising with n"
    assert sum(1 for p in PATHS if min(p) < -5) >= 5, "several paths spend time well below zero on the way"
    assert max(p[-1] for p in PATHS) > EXPECT * N_TRADES, "paths spread widely around the expected result"


validate()


def build(t, reveal: Reveal | None = None):
    fig = base_fig(2, [0.58, 0.42], 0.11)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    xs = list(range(1, N_TRADES + 1))
    k = shown_n(ch, N_TRADES)
    for i, p in enumerate(PATHS):
        line(ch, t, xs, p, f"path {i}", t.ink3, 1, width=1.1, k=k)
    mean_line = [EXPECT * x for x in xs]
    with ch.group("mean"):
        fig.add_trace(go.Scatter(x=xs, y=mean_line, mode="lines", line=dict(color=t.accent, width=3), opacity=ch._alpha, showlegend=False,
                                 hoverinfo="skip"), row=1, col=1)
        ch.label(N_TRADES + 2, mean_line[-1], f"expected: +{EXPECT:.3f}R per trade<br>(+{mean_line[-1]:.0f}R after {N_TRADES})", size=11,
                 color=t.accent, yanchor="middle", row=1, col=1)
        fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    with ch.group("bars"):
        names = [str(n) for n in CHECK]
        fig.add_trace(go.Bar(x=names, y=[100 * EXACT[n] for n in CHECK], marker_color=t.accent, opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{100 * EXACT[n]:.0f}%" for n in CHECK], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(showticklabels=True, tickvals=[1, 50, 100, 150, 200], range=[0, N_TRADES + 40], tickfont=dict(size=11, color=t.ink2),
                     title=dict(text="Trade number", font=dict(size=12, color=t.ink3)), **xa, row=1, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), title=dict(text="Number of trades", font=dict(size=12, color=t.ink3)), **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(ticksuffix="R", row=1, col=1)
    fig.update_yaxes(range=[0, 118], ticksuffix="%", tickvals=[0, 25, 50, 75, 100], row=2, col=1)
    panel_title(ch, t, 1, "30 simulated paths of the same strategy: 45% win rate, +1.5R wins, −1R losses")
    panel_title(ch, t, 2, "Probability that the cumulative result is positive after n trades (exact)")
    ch.header("Quantitative Trading · Introduction", "Why a Small Edge Needs a Large Sample",
              f"Synthetic simulation · expectancy +{EXPECT:.3f}R per trade · the edge shows only over many trades",
              key=[("▬", t.ink3, "One simulated path"), ("▬", t.accent, "Expected path")])
    ch.footnote("Simulation of independent trades with fixed probabilities; real trading adds costs, changing conditions and dependence")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Quant Law Of Large Numbers", OUT)
    print(NAME, f"expect {EXPECT:.3f}", {n: f"{100 * EXACT[n]:.1f}% (sim {100 * SIMS[n]:.1f}%)" for n in CHECK},
          f"ends min {min(p[-1] for p in PATHS):.1f} max {max(p[-1] for p in PATHS):.1f} below-5 {sum(1 for p in PATHS if min(p) < -5)} neg {sum(1 for p in PATHS if p[-1] < 0)}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
