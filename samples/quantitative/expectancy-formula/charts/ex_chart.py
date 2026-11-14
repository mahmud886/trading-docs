"""
Expectancy = win rate x average win - loss rate x average loss (per trade, in R). Top: expectancy against win rate for four
reward-to-risk ratios, with the break-even win rate 1 / (1 + RR) marked. Bottom: a 40-trade sample (synthetic) with its average R and
an approximate 95% interval (mean +/- 1.96 standard errors) that straddles zero - a positive average that does not yet prove an edge.
"""

import math
import random
import statistics

import plotly.graph_objects as go

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import panel_title
from plotly.subplots import make_subplots

NAME = "expectancy-formula"
RRS = [1.0, 1.5, 2.0, 3.0]
rng = random.Random(22)
N_TR = 40
# 40 trades: target 2R, stop -1R, a few partial results; win probability 0.42
TRADES = []
for _ in range(N_TR):
    u = rng.random()
    TRADES.append(2.0 if u < 0.42 else (-1.0 if u < 0.92 else rng.choice([-0.5, 0.5, 0.0])))
MEAN = statistics.mean(TRADES)
SD = statistics.stdev(TRADES)
SE = SD / math.sqrt(N_TR)
LO, HI = MEAN - 1.96 * SE, MEAN + 1.96 * SE
WINS = [x for x in TRADES if x > 0]
LOSSES = [x for x in TRADES if x < 0]
WR = len(WINS) / N_TR
AVG_W = statistics.mean(WINS)
AVG_L = -statistics.mean(LOSSES)
EXP_FORMULA = WR * AVG_W - (len(LOSSES) / N_TR) * AVG_L


def validate():
    for rr in RRS:
        be = 1 / (1 + rr)
        assert abs(be * rr - (1 - be) * 1) < 1e-12, "expectancy is zero at the break-even win rate"
    assert abs(EXP_FORMULA - MEAN) < 0.35, "the formula using only wins and losses is close to the mean of all trades"
    assert MEAN > 0.05 and LO < 0 < HI, "positive average, but the interval includes zero"
    assert 0.30 < WR < 0.55


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.13, row_heights=[0.50, 0.50])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    wr = [i / 100 for i in range(10, 81)]
    cols = [t.ink3, t.zone, t.accent, t.bull]
    for rr, c in zip(RRS, cols):
        y = [w * rr - (1 - w) for w in wr]
        fig.add_trace(go.Scatter(x=[w * 100 for w in wr], y=y, mode="lines", line=dict(color=c, width=2.4), showlegend=False,
                                 hoverinfo="skip"), row=1, col=1)
        be = 100 / (1 + rr)
        fig.add_trace(go.Scatter(x=[be], y=[0], mode="markers", marker=dict(color=c, size=9, line=dict(color=t.surface, width=1.5)),
                                 showlegend=False, hoverinfo="skip"), row=1, col=1)
        ch.label(81, rr * 0.80 - 0.20, f"1:{rr:g}", size=12, color=c if c != t.ink3 else t.ink2, yanchor="middle", row=1, col=1)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    with ch.group("be"):
        for rr in RRS:
            be = 100 / (1 + rr)
            ch.label(be, -0.28, f"{be:.0f}%" if be % 1 == 0 else f"{be:.1f}%", size=11, color=t.ink2, xanchor="center", yanchor="top", row=1, col=1)
        ch.label(11, 2.1, "break-even win rate = 1 / (1 + RR)", size=11, color=t.ink2, yanchor="bottom", row=1, col=1)
    with ch.group("sample"):
        fig.add_trace(go.Bar(x=list(range(1, N_TR + 1)), y=TRADES, marker_color=[t.bull if x > 0 else (t.bear if x < 0 else t.ink3) for x in TRADES],
                             opacity=0.85 * ch._alpha, showlegend=False, hoverinfo="skip"), row=2, col=1)
        ch.hline(0.5, N_TR + 0.5, MEAN, color=t.accent, dash="dash", width=2, row=2, col=1)
        ch.zone(0.5, N_TR + 0.5, LO, HI, color=t.accent, alpha=0.12, border=False, row=2, col=1)
        ch.label(N_TR + 1, MEAN, f"average {MEAN:+.2f}R", size=11, color=t.accent, yanchor="middle", row=2, col=1)
    with ch.group("ci"):
        ch.label(N_TR / 2, 3.35, f"{N_TR} trades: win rate {WR:.0%}, average win {AVG_W:.2f}R, average loss {AVG_L:.2f}R → expectancy {MEAN:+.2f}R<br>"
                 f"approx. 95% interval {LO:+.2f}R to {HI:+.2f}R — includes zero", size=12, color=t.ink, xanchor="center", yanchor="top",
                 align="center", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[8, 86], ticksuffix="%", tickvals=[10, 20, 30, 40, 50, 60, 70, 80], tickfont=dict(size=11, color=t.ink2),
                     title=dict(text="Win rate", font=dict(size=12, color=t.ink3)), **xa, row=1, col=1)
    fig.update_xaxes(range=[0, N_TR + 7], tickfont=dict(size=11, color=t.ink2), title=dict(text="Trade number", font=dict(size=12, color=t.ink3)),
                     **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="R")
    fig.update_yaxes(range=[-1.6, 2.4], row=1, col=1)
    fig.update_yaxes(range=[-1.4, 3.4], row=2, col=1)
    panel_title(ch, t, 1, "Expectancy per trade vs win rate, for reward-to-risk 1:1, 1:1.5, 1:2 and 1:3")
    panel_title(ch, t, 2, "A synthetic 40-trade sample: result of each trade in R")
    ch.header("Quantitative Trading · Expectancy", "Expectancy: Win Rate, Reward-to-Risk — and Uncertainty",
              "Break-even win rates, and why a positive average over 40 trades is not yet proof",
              key=[("▬", t.ink3, "1:1"), ("▬", t.zone, "1:1.5"), ("▬", t.accent, "1:2"), ("▬", t.bull, "1:3")])
    ch.footnote("Synthetic trades; expectancy ignores costs here — subtract spread and commission before judging a real system")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Expectancy Formula", OUT)
    print(NAME, f"wr {WR:.2f} avgW {AVG_W:.2f} avgL {AVG_L:.2f} mean {MEAN:.3f} formula {EXP_FORMULA:.3f} sd {SD:.2f} se {SE:.2f} "
          f"CI {LO:.2f}..{HI:.2f} wins {len(WINS)} losses {len(LOSSES)}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
