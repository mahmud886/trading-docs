"""
Kelly criterion for an even-money bet won 55% of the time (b = 1): optimal fraction f* = (b p - q) / b = 0.10. Top: expected log growth per
bet against the fraction staked, with quarter, half, full and double Kelly marked (double Kelly has about zero growth). Bottom: the same
400 simulated bets sized at those fractions, on a log scale, with final multiple and maximum drawdown.
"""

import math
import random

import plotly.graph_objects as go

from _paths import OUT
from chartkit import Chart, Reveal, save
from imkit import panel_title, shown_n
from plotly.subplots import make_subplots

NAME = "kelly-criterion"
P, B = 0.55, 1.0
Q = 1 - P
FSTAR = (B * P - Q) / B
FRACS = [("¼ Kelly", 0.25), ("½ Kelly", 0.5), ("Full Kelly", 1.0), ("2× Kelly", 2.0)]
N = 400
rng = random.Random(2)
OUTCOMES = [rng.random() < P for _ in range(N)]


def growth(f):
    return P * math.log(1 + B * f) + Q * math.log(1 - f)


def curve(mult):
    f, w, out = FSTAR * mult, 1.0, [1.0]
    for win in OUTCOMES:
        w *= (1 + B * f) if win else (1 - f)
        out.append(w)
    return out


CURVES = {name: curve(m) for name, m in FRACS}


def max_dd(c):
    peak, dd = c[0], 0.0
    for x in c:
        peak = max(peak, x)
        dd = max(dd, 1 - x / peak)
    return dd


STATS = {name: (CURVES[name][-1], max_dd(CURVES[name])) for name, _ in FRACS}


def validate():
    assert abs(FSTAR - 0.10) < 1e-12
    grid = [i / 1000 for i in range(1, 400)]
    assert abs(max(grid, key=growth) - FSTAR) < 0.002, "growth peaks at the Kelly fraction"
    assert abs(growth(2 * FSTAR)) < 0.0005, "double Kelly: growth is about zero"
    assert growth(FSTAR) > growth(FSTAR / 2) > growth(FSTAR / 4) > 0
    assert growth(0.5 * FSTAR) > 0.74 * growth(FSTAR), "half Kelly keeps about three-quarters of the growth"
    dds = [STATS[n][1] for n, _ in FRACS]
    assert dds == sorted(dds), "bigger fraction, bigger drawdown"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.13, row_heights=[0.46, 0.54])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    fs = [i / 200 for i in range(1, 41)]                           # 0.005 .. 0.200
    fig.add_trace(go.Scatter(x=[100 * f for f in fs], y=[100 * growth(f) for f in fs], mode="lines", line=dict(color=t.accent, width=3),
                             showlegend=False, hoverinfo="skip"), row=1, col=1)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    cols = {"¼ Kelly": t.zone, "½ Kelly": t.bull, "Full Kelly": t.accent, "2× Kelly": t.bear}
    for name, m in FRACS:
        f = FSTAR * m
        fig.add_trace(go.Scatter(x=[100 * f], y=[100 * growth(f)], mode="markers", marker=dict(color=cols[name], size=11,
                                 line=dict(color=t.surface, width=2)), showlegend=False, hoverinfo="skip"), row=1, col=1)
        ch.label(100 * f, 100 * growth(f) + 0.035, f"{name}<br>{100 * f:.1f}% stake", size=11, color=cols[name] if name != "¼ Kelly" else t.zone_text,
                 xanchor="center", yanchor="bottom", align="center", row=1, col=1)
    k = shown_n(ch, N)
    xs = list(range(N + 1))
    with ch.group("sim"):
        for name, _ in FRACS:
            fig.add_trace(go.Scatter(x=xs, y=CURVES[name], mode="lines", line=dict(color=cols[name], width=2.2), opacity=ch._alpha,
                                     showlegend=False, hoverinfo="skip"), row=2, col=1)
            fin, dd = STATS[name]
            ch.label(N + 6, math.log10(fin), f"{name}: ×{fin:.1f}, max drawdown {dd:.0%}", size=11, color=cols[name] if name != "¼ Kelly" else t.zone_text,
                     yanchor="middle", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[0, 21], ticksuffix="%", tickfont=dict(size=11, color=t.ink2), title=dict(text="Fraction of capital staked per bet", font=dict(size=12, color=t.ink3)),
                     **xa, row=1, col=1)
    fig.update_xaxes(range=[0, N + 150], tickfont=dict(size=11, color=t.ink2), title=dict(text="Bet number", font=dict(size=12, color=t.ink3)), **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(ticksuffix="%", range=[-0.12, 0.6], row=1, col=1)
    fig.update_yaxes(type="log", range=[math.log10(0.05), math.log10(40)], tickvals=[0.1, 1, 10], ticktext=["0.1×", "1×", "10×"], row=2, col=1)
    panel_title(ch, t, 1, "Expected log growth per bet, % (even-money bets, 55% win probability)")
    panel_title(ch, t, 2, f"Wealth multiple (log scale) over the same {N} simulated bets at four stake sizes")
    ch.header("Quantitative Trading · Kelly Criterion", "Kelly: The Growth-Optimal Stake — and Why Traders Use a Fraction",
              f"Even-money bets won 55% of the time → full Kelly f* = {100 * FSTAR:.0f}% · over-betting costs growth, and drawdowns grow with the stake",
              key=[("●", t.zone, "¼ Kelly"), ("●", t.bull, "½ Kelly"), ("●", t.accent, "Full Kelly"), ("●", t.bear, "2× Kelly")])
    ch.footnote("Simulation with known probabilities; real win rates are estimated with error, which is a main reason to bet a fraction of Kelly")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Kelly Criterion", OUT)
    print(NAME, f"f* {FSTAR:.3f} g* {100 * growth(FSTAR):.3f}% half {100 * growth(FSTAR / 2):.3f}% quarter {100 * growth(FSTAR / 4):.3f}% double {100 * growth(2 * FSTAR):.4f}%",
          {n: (round(a, 2), f"{d:.0%}") for n, (a, d) in STATS.items()}, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
