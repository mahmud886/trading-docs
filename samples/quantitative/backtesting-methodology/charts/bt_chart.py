"""
Overfitting in one picture. Prices are a pure random walk (no edge by construction), 1,000 daily bars. 180 moving-average crossover rules
(fast 3-20 x slow 25-100, long when fast > slow, else short, no costs) are all tested on the first 500 bars (in-sample). The rule with
the best in-sample result is then followed on the next 500 bars (out-of-sample). Top: that rule's equity curve, in-sample then
out-of-sample. Bottom: in-sample and out-of-sample results for all 180 rules, with the chosen rule marked.
"""

import random
import statistics

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import panel_title, shown_n

NAME = "backtest-overfitting"
N, SPLIT = 1000, 500
FAST = list(range(3, 21))                 # 18 values
SLOW = list(range(25, 101, 8))[:10]        # 10 values -> 180 rules
SEED = 4


def make(seed):
    r = random.Random(seed)
    rets, px = [], [100.0]
    for _ in range(N):
        x = r.gauss(0, 0.01)
        rets.append(x)
        px.append(px[-1] * (1 + x))
    return rets, px


def sma(px, n, i):
    return sum(px[i - n + 1:i + 1]) / n


def run(rets, px, f, s, lo, hi):
    cum, curve = 1.0, []
    for i in range(lo, hi):
        if i >= s:
            pos = 1 if sma(px, f, i) > sma(px, s, i) else -1
        else:
            pos = 0
        cum *= 1 + pos * rets[i]                       # rets[i] is the return from px[i] to px[i + 1]
        curve.append(100 * (cum - 1))
    return curve


RETS, PX = make(SEED)
RULES = [(f, s) for f in FAST for s in SLOW if f < s]
IS = {r: run(RETS, PX, *r, 0, SPLIT)[-1] for r in RULES}
OOS = {r: run(RETS, PX, *r, SPLIT, N)[-1] for r in RULES}
BEST = max(RULES, key=lambda r: IS[r])
EQ_IS = run(RETS, PX, *BEST, 0, SPLIT)
EQ_OOS_RAW = run(RETS, PX, *BEST, SPLIT, N)
EQ_OOS = [(1 + EQ_IS[-1] / 100) * (1 + x / 100) * 100 - 100 for x in EQ_OOS_RAW]


def validate():
    assert len(RULES) == 180, len(RULES)
    assert IS[BEST] > 25, "the best in-sample rule looks impressive"
    assert OOS[BEST] < 0.25 * IS[BEST], "but it does not carry that forward"
    assert abs(statistics.mean(IS.values())) < 15 and abs(statistics.mean(OOS.values())) < 15, "the average rule has no edge"
    assert max(IS.values()) > statistics.mean(IS.values()) + 15, "the best rule is far from the average — selection effect"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.14, row_heights=[0.52, 0.48])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    k = shown_n(ch, N)
    xs = list(range(N))
    curve = EQ_IS + EQ_OOS
    fig.add_trace(go.Scatter(x=xs[:min(k, SPLIT)], y=EQ_IS[:min(k, SPLIT)], mode="lines", line=dict(color=t.accent, width=2.6), showlegend=False,
                             hoverinfo="skip"), row=1, col=1)
    if k > SPLIT:
        fig.add_trace(go.Scatter(x=xs[SPLIT - 1:k], y=curve[SPLIT - 1:k], mode="lines", line=dict(color=t.bear, width=2.6), showlegend=False,
                                 hoverinfo="skip"), row=1, col=1)
    fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
    with ch.group("split"):
        fig.add_vline(x=SPLIT, line=dict(color=t.ink3, width=1.5, dash="dash"), row=1, col=1)
        ch.label(SPLIT / 2, max(curve) + 22, f"<b>In-sample</b>: best of {len(RULES)} rules<br>{IS[BEST]:+.0f}% (fast {BEST[0]}, slow {BEST[1]})", size=12, color=t.accent,
                 xanchor="center", yanchor="top", align="center", row=1, col=1)
        ch.label(SPLIT + SPLIT / 2, max(curve) + 22, f"<b>Out-of-sample</b>: same rule<br>{OOS[BEST]:+.0f}% over the next {N - SPLIT} bars", size=12, color=t.bear_text,
                 xanchor="center", yanchor="top", align="center", row=1, col=1)
    with ch.group("scatter"):
        fig.add_trace(go.Scatter(x=[IS[r] for r in RULES], y=[OOS[r] for r in RULES], mode="markers", marker=dict(color=t.ink3, size=6, opacity=0.8),
                                 showlegend=False, hoverinfo="skip"), row=2, col=1)
        fig.add_trace(go.Scatter(x=[IS[BEST]], y=[OOS[BEST]], mode="markers", marker=dict(color=t.bear, size=13, line=dict(color=t.surface, width=2)),
                                 showlegend=False, hoverinfo="skip"), row=2, col=1)
        ch.label(IS[BEST] - 1, OOS[BEST] - 3, "the chosen rule", size=12, color=t.bear_text, xanchor="right", yanchor="top", row=2, col=1)
        fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=2, col=1)
        fig.add_vline(x=0, line=dict(color=t.ink3, width=1), row=2, col=1)
        ch.label(min(IS.values()), max(OOS.values()), f"average rule: {statistics.mean(IS.values()):+.0f}% in-sample, {statistics.mean(OOS.values()):+.0f}% out-of-sample",
                 size=11, color=t.ink2, xanchor="left", yanchor="top", row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[0, N], tickfont=dict(size=11, color=t.ink2), title=dict(text="Trading day", font=dict(size=12, color=t.ink3)), **xa, row=1, col=1)
    fig.update_xaxes(tickfont=dict(size=11, color=t.ink2), ticksuffix="%", title=dict(text="Result in-sample (first 500 bars)", font=dict(size=12, color=t.ink3)), **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="%")
    fig.update_yaxes(range=[-8, max(curve) + 24], row=1, col=1)
    fig.update_yaxes(title=dict(text="Out-of-sample", font=dict(size=11, color=t.ink3)), row=2, col=1)
    panel_title(ch, t, 1, "Equity curve of the rule that looked best in-sample (no edge exists in this data)")
    panel_title(ch, t, 2, f"All {len(RULES)} rules: in-sample result (x) against out-of-sample result (y)")
    ch.header("Quantitative Trading · Backtesting", "Test Enough Rules and One Will Look Great — By Luck",
              "Pure random-walk prices · 180 moving-average rules · pick the best in-sample, follow it out-of-sample",
              key=[("▬", t.accent, "In-sample"), ("▬", t.bear, "Out-of-sample")])
    ch.footnote("Synthetic random walk with no edge by construction; the best in-sample rule is selected only because it was the best of many")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Backtest Overfitting", OUT)
    print(NAME, f"rules {len(RULES)} best {BEST} IS {IS[BEST]:.1f} OOS {OOS[BEST]:.1f} meanIS {statistics.mean(IS.values()):.1f} meanOOS {statistics.mean(OOS.values()):.1f} "
          f"maxOOS {max(OOS.values()):.1f} minOOS {min(OOS.values()):.1f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
