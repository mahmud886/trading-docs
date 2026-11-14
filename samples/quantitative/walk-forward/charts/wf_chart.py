"""
Walk-forward analysis on 1,400 synthetic daily bars (a weak, drifting trend plus noise). Rules: 35 moving-average crossovers (fast 5-25 x slow
30-120, long if fast > slow else short, no costs). Walk-forward: optimise on the previous 250 bars, trade the chosen rule for the next 60 bars,
step forward 60 bars, repeat (19 windows). Compared with picking the single best rule on the whole sample (which uses information from the future)
and with buy-and-hold. Bottom: the slow-average length the optimiser chose in each window.
"""

import math
import random
import statistics

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import panel_title, shown_n

NAME = "walk-forward"
N, IS_LEN, OOS_LEN = 1400, 250, 60
FAST = [5, 10, 15, 20, 25]
SLOW = [30, 45, 60, 75, 90, 105, 120]
RULES = [(f, s) for f in FAST for s in SLOW]
SEED = 8


def make(seed):
    r = random.Random(seed)
    rets, px = [], [100.0]
    for i in range(N):
        drift = 0.0004 * math.sin(2 * math.pi * i / 400) + 0.00015
        x = drift + r.gauss(0, 0.01)
        rets.append(x)
        px.append(px[-1] * (1 + x))
    return rets, px


def pos_at(px, f, s, i):
    if i < s:
        return 0
    return 1 if sum(px[i - f + 1:i + 1]) / f > sum(px[i - s + 1:i + 1]) / s else -1


def stream(rets, px, rule, lo, hi):
    return [pos_at(px, *rule, i) * rets[i] for i in range(lo, hi)]


def total(rs):
    c = 1.0
    for x in rs:
        c *= 1 + x
    return 100 * (c - 1)


def curve(rs):
    c, out = 1.0, []
    for x in rs:
        c *= 1 + x
        out.append(100 * (c - 1))
    return out


def max_dd(c):
    eq = [1 + x / 100 for x in c]
    peak, dd = eq[0], 0.0
    for x in eq:
        peak = max(peak, x)
        dd = max(dd, 1 - x / peak)
    return 100 * dd


RETS, PX = make(SEED)
CACHE = {r: stream(RETS, PX, r, 0, N) for r in RULES}                 # return of each rule on every bar
WINDOWS, WF = [], []
t0 = IS_LEN
while t0 + OOS_LEN <= N:
    best = max(RULES, key=lambda r: total(CACHE[r][t0 - IS_LEN:t0]))
    WINDOWS.append((t0, best))
    WF += CACHE[best][t0:t0 + OOS_LEN]
    t0 += OOS_LEN
START = IS_LEN
BEST_FULL = max(RULES, key=lambda r: total(CACHE[r][START:]))
FULL = CACHE[BEST_FULL][START:START + len(WF)]
BH = RETS[START:START + len(WF)]
C_WF, C_FULL, C_BH = curve(WF), curve(FULL), curve(BH)
SLOWS = [b[1] for _, b in WINDOWS]
FASTS = [b[0] for _, b in WINDOWS]
CHANGES = sum(1 for a, b in zip(WINDOWS, WINDOWS[1:]) if a[1] != b[1])


def validate():
    assert len(WINDOWS) == 19, len(WINDOWS)
    assert C_FULL[-1] > C_WF[-1] + 20, "choosing the best rule on the whole sample looks much better than walk-forward"
    assert CHANGES >= 8, "the chosen parameters keep changing between windows"
    assert statistics.pstdev(SLOWS) > 20, "and the chosen slow length is spread widely"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.14, row_heights=[0.62, 0.38])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    n = len(C_WF)
    k = shown_n(ch, n)
    xs = list(range(START, START + n))
    fig.add_trace(go.Scatter(x=xs[:k], y=C_BH[:k], mode="lines", line=dict(color=t.ink3, width=2), showlegend=False, hoverinfo="skip"), row=1, col=1)
    with ch.group("full"):
        fig.add_trace(go.Scatter(x=xs, y=C_FULL, mode="lines", line=dict(color=t.bear, width=2.4, dash="dash"), opacity=ch._alpha, showlegend=False, hoverinfo="skip"), row=1, col=1)
        ch.label(START + n + 6, C_FULL[-1], f"best rule on the whole sample:<br>{C_FULL[-1]:+.0f}% (uses the future)", size=11, color=t.bear_text, yanchor="middle", row=1, col=1)
    fig.add_trace(go.Scatter(x=xs[:k], y=C_WF[:k], mode="lines", line=dict(color=t.accent, width=3), showlegend=False, hoverinfo="skip"), row=1, col=1)
    ch.label(START + n + 6, C_WF[-1], f"walk-forward (out-of-sample):<br>{C_WF[-1]:+.0f}%", size=11, color=t.accent, yanchor="middle", row=1, col=1)
    ch.label(START + n + 6, C_BH[-1], f"buy-and-hold: {C_BH[-1]:+.0f}%", size=11, color=t.ink2, yanchor="middle", row=1, col=1)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    with ch.group("params"):
        wx = [w[0] for w in WINDOWS]
        fig.add_trace(go.Scatter(x=wx, y=SLOWS, mode="lines+markers", line=dict(color=t.zone, width=2, shape="hv"), marker=dict(size=8, color=t.zone),
                                 opacity=ch._alpha, showlegend=False, hoverinfo="skip"), row=2, col=1)
        ch.label(wx[0], max(SLOW) + 12, f"slow length chosen in each window: it changed {CHANGES} times in {len(WINDOWS) - 1} steps (range {min(SLOWS)}–{max(SLOWS)})",
                 size=11, color=t.ink2, yanchor="top", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[START - 5, START + n + 320], tickfont=dict(size=11, color=t.ink2), title=dict(text="Trading day", font=dict(size=12, color=t.ink3)), **xa)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(ticksuffix="%", row=1, col=1)
    fig.update_yaxes(range=[min(SLOW) - 10, max(SLOW) + 20], tickvals=SLOW, row=2, col=1)
    panel_title(ch, t, 1, "Cumulative result: walk-forward vs best-on-all-data vs buy-and-hold (days 250 to 1,390)")
    panel_title(ch, t, 2, "Parameter stability: slow moving-average length picked by each 250-bar optimisation")
    ch.header("Quantitative Trading · Walk-Forward", "Walk-Forward: The Honest Version of an Optimisation",
              "Synthetic prices · optimise on 250 bars, trade the next 60, step forward, repeat · 19 windows",
              key=[("▬", t.accent, "Walk-forward"), ("┄", t.bear, "Best on whole sample"), ("▬", t.ink3, "Buy-and-hold")])
    ch.footnote("Synthetic data with a weak drift; walk-forward results are the only ones here that were never fitted to the bars they trade")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Walk Forward", OUT)
    print(NAME, f"windows {len(WINDOWS)} WF {C_WF[-1]:.1f} dd {max_dd(C_WF):.0f} | full-sample best {BEST_FULL} {C_FULL[-1]:.1f} dd {max_dd(C_FULL):.0f} | BH {C_BH[-1]:.1f} dd {max_dd(C_BH):.0f} | "
          f"changes {CHANGES} slows {SLOWS} fasts {FASTS}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
