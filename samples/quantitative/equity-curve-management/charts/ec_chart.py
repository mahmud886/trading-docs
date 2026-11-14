"""
Equity-curve filter on a synthetic system whose edge fades and returns. 300 trades: win rate 50% (trades 1-100), 33% (101-200, negative expectancy),
50% again (201-300); wins +1.5R, losses -1R. Rule: take the next trade only when the equity curve of ALL signals (the virtual curve) is above its
20-trade moving average; otherwise skip it (it still updates the virtual curve). Top: virtual curve with its average and the periods when the rule
was out. Bottom: cumulative R with the rule against always trading.
"""

import random
import statistics

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import panel_title, shown_n

NAME = "equity-curve-filter"
N, MA = 300, 20
SEG = [(0, 100, 0.50), (100, 200, 0.33), (200, 300, 0.50)]


def make(seed):
    r = random.Random(seed)
    out = []
    for a, b, p in SEG:
        out += [1.5 if r.random() < p else -1.0 for _ in range(b - a)]
    return out


def simulate(trades):
    virt, real, on, flags = [0.0], [0.0], [], []
    for i, r in enumerate(trades):
        if i >= MA:
            ma = statistics.mean(virt[-MA:])
            take = virt[-1] > ma
        else:
            take = True
        flags.append(take)
        virt.append(virt[-1] + r)
        real.append(real[-1] + (r if take else 0.0))
    return virt, real, flags


def max_dd(c):
    peak, dd = c[0], 0.0
    for x in c:
        peak = max(peak, x)
        dd = max(dd, peak - x)
    return dd


SEED = 3
TR = make(SEED)
VIRT, REAL, FLAGS = simulate(TR)
MAVG = [None] * MA + [statistics.mean(VIRT[i - MA + 1:i + 1]) for i in range(MA, N + 1)]
DD_V, DD_R = max_dd(VIRT), max_dd(REAL)
TAKEN = sum(FLAGS)
_ST = []
for sd in range(1, 1001):
    v, r, _ = simulate(make(sd))
    _ST.append((r[-1] - v[-1], max_dd(v) - max_dd(r)))
P_LOWER_DD = sum(1 for _, d in _ST if d > 0) / 1000
P_HIGHER_FINAL = sum(1 for f, _ in _ST if f > 0) / 1000
MEAN_DD_CUT = statistics.mean(d for _, d in _ST)
MEAN_FINAL_DIFF = statistics.mean(f for f, _ in _ST)


def validate():
    assert DD_R < DD_V, "the filter reduces the maximum drawdown"
    assert TAKEN < N * 0.85 and TAKEN > N * 0.4, "it skips a meaningful share of trades but not most of them"
    seg2 = FLAGS[100:200]
    assert sum(seg2) / 100 < sum(FLAGS[0:100]) / 100, "it trades less during the weak stretch"
    assert P_LOWER_DD > 0.8, "across 1,000 random sequences the filter usually lowers the maximum drawdown"
    assert VIRT[200] < VIRT[100] - 5, "the weak stretch loses at least 5R if you always trade"


validate()
OFF = []                                                           # runs of skipped trades
s = None
for i, f in enumerate(FLAGS):
    if not f and s is None:
        s = i
    if f and s is not None:
        OFF.append((s, i)); s = None
if s is not None:
    OFF.append((s, N))


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.13, row_heights=[0.46, 0.54])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    k = shown_n(ch, N + 1)
    xs = list(range(N + 1))
    ylo, yhi = min(VIRT + REAL) - 4, max(VIRT + REAL) + 4
    with ch.group("off"):
        for a, b in OFF:
            ch.zone(a - 0.5, b - 0.5, ylo, yhi, color=t.bear, alpha=0.10, border=False, row=1, col=1)
    fig.add_trace(go.Scatter(x=xs[:k], y=VIRT[:k], mode="lines", line=dict(color=t.ink, width=2), showlegend=False, hoverinfo="skip"), row=1, col=1)
    with ch.group("ma"):
        fig.add_trace(go.Scatter(x=xs, y=MAVG, mode="lines", line=dict(color=t.zone, width=2, dash="dash"), opacity=ch._alpha, showlegend=False,
                                 hoverinfo="skip", connectgaps=False), row=1, col=1)
    with ch.group("weak"):
        ch.label(150, yhi - 1, "<b>Edge fades</b> (win rate 33%)", size=12, color=t.bear_text, xanchor="center", yanchor="top", row=1, col=1)
        ch.label(50, yhi - 1, "win rate 50%", size=12, color=t.ink2, xanchor="center", yanchor="top", row=1, col=1)
        ch.label(250, yhi - 1, "win rate 50%", size=12, color=t.ink2, xanchor="center", yanchor="top", row=1, col=1)
    fig.add_trace(go.Scatter(x=xs[:k], y=VIRT[:k], mode="lines", line=dict(color=t.ink3, width=2.2), showlegend=False, hoverinfo="skip"), row=2, col=1)
    fig.add_trace(go.Scatter(x=xs[:k], y=REAL[:k], mode="lines", line=dict(color=t.accent, width=2.8), showlegend=False, hoverinfo="skip"), row=2, col=1)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=2, col=1)
    with ch.group("result"):
        ch.label(N + 3, VIRT[-1], f"always trade: {VIRT[-1]:+.0f}R<br>max drawdown {DD_V:.0f}R", size=11, color=t.ink2, yanchor="middle", row=2, col=1)
        ch.label(N + 3, REAL[-1], f"with filter: {REAL[-1]:+.0f}R<br>max drawdown {DD_R:.0f}R, {TAKEN} of {N} trades", size=11, color=t.accent, yanchor="middle", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[0, N + 70], tickfont=dict(size=11, color=t.ink2), title=dict(text="Trade number", font=dict(size=12, color=t.ink3)), **xa)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="R")
    fig.update_yaxes(range=[ylo, yhi], row=1, col=1)
    panel_title(ch, t, 1, f"Equity curve of all signals and its {MA}-trade average; shaded = the filter skips the next trade")
    panel_title(ch, t, 2, "Cumulative R: with the filter vs always trading")
    ch.header("Quantitative Trading · Equity Curve Management", "An Equity-Curve Filter: Smaller Drawdown, Fewer Trades",
              f"Synthetic system with a fading edge · trade only while the equity curve is above its {MA}-trade average",
              key=[("▬", t.ink3, "Always trade"), ("▬", t.accent, "With filter"), ("▮", t.bear, "Filter says skip")])
    ch.footnote("Synthetic trades; an equity-curve filter reacts after losses and can also skip recoveries — results vary by sequence and parameters")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Equity Curve Filter", OUT)
    print(NAME, f"virtual {VIRT[-1]:.1f} dd {DD_V:.1f}; filtered {REAL[-1]:.1f} dd {DD_R:.1f}; taken {TAKEN}; "
          f"1000 seeds: lower DD {P_LOWER_DD:.0%}, higher final {P_HIGHER_FINAL:.0%}, mean DD cut {MEAN_DD_CUT:.1f}R, mean final diff {MEAN_FINAL_DIFF:.1f}R; taken by third {[sum(FLAGS[a:b]) for a, b, _ in SEG]}; virt at 100/200 {VIRT[100]:.1f}/{VIRT[200]:.1f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
