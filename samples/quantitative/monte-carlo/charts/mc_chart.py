"""
Monte Carlo (bootstrap) on a 100-trade backtest. The trade list is one synthetic sample from a 45% / +1.5R / -1R system. We resample it with
replacement 4,000 times (100 trades each, random order) and record each path's final result and its maximum drawdown in R. Top: 40 of the
paths and the median. Bottom: distributions of the final result and the maximum drawdown, with 5th / 50th / 95th percentiles, and the share
of paths that end below zero or draw down more than 15R.
"""

import random
import statistics

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import panel_title, shown_n

NAME = "monte-carlo-drawdown"
N_TR, N_SIM = 100, 4000
rng = random.Random(27)
TRADES = [1.5 if rng.random() < 0.45 else -1.0 for _ in range(N_TR)]          # the "backtest"
EXP = statistics.mean(TRADES)


def path(order):
    c, out, peak, dd = 0.0, [0.0], 0.0, 0.0
    for r in order:
        c += r
        out.append(c)
        peak = max(peak, c)
        dd = max(dd, peak - c)
    return out, dd


mc = random.Random(5)
PATHS, FINAL, DD = [], [], []
for _ in range(N_SIM):
    p, dd = path([mc.choice(TRADES) for _ in range(N_TR)])
    PATHS.append(p); FINAL.append(p[-1]); DD.append(dd)


def pct(v, q):
    s = sorted(v)
    return s[min(len(s) - 1, int(q * len(s)))]


F5, F50, F95 = pct(FINAL, 0.05), pct(FINAL, 0.5), pct(FINAL, 0.95)
D5, D50, D95 = pct(DD, 0.05), pct(DD, 0.5), pct(DD, 0.95)
P_NEG = sum(1 for f in FINAL if f < 0) / N_SIM
P_DD15 = sum(1 for d in DD if d > 15) / N_SIM
HIST_DD = path(TRADES)[1]


def peak(v, size):
    c = {}
    for x in v:
        c[int(x // size)] = c.get(int(x // size), 0) + 1
    return max(c.values())


PK_F, PK_D = peak(FINAL, 2), peak(DD, 1)


def validate():
    assert 0.05 < EXP < 0.30, "the backtest sample has a modestly positive expectancy"
    assert F5 < 0 < F95 and P_NEG > 0.05, "a positive-expectancy system still ends negative on a meaningful share of paths"
    assert D95 > 1.5 * HIST_DD or D95 > 15, "the 95th-percentile drawdown is well beyond the single historical one"
    assert D5 < D50 < D95 and F5 < F50 < F95


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=2, specs=[[dict(colspan=2), None], [{}, {}]], vertical_spacing=0.17, horizontal_spacing=0.09,
                        row_heights=[0.5, 0.5])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, bargap=0.04)
    k = shown_n(ch, N_TR + 1)
    xs = list(range(N_TR + 1))
    for p in PATHS[:40]:
        fig.add_trace(go.Scatter(x=xs[:k], y=p[:k], mode="lines", line=dict(color=t.ink3, width=1), opacity=0.7, showlegend=False, hoverinfo="skip"), row=1, col=1)
    with ch.group("median"):
        med = [statistics.median(p[i] for p in PATHS) for i in xs]
        fig.add_trace(go.Scatter(x=xs, y=med, mode="lines", line=dict(color=t.accent, width=3), opacity=ch._alpha, showlegend=False, hoverinfo="skip"), row=1, col=1)
        fig.add_hline(y=0, line=dict(color=t.ink3, width=1), row=1, col=1)
        ch.label(N_TR + 1, med[-1], f"median +{F50:.0f}R", size=11, color=t.accent, yanchor="middle", row=1, col=1)
    with ch.group("hist"):
        fig.add_trace(go.Histogram(x=FINAL, xbins=dict(size=2), marker_color=t.ink3, opacity=0.85 * ch._alpha, showlegend=False, hoverinfo="skip"), row=2, col=1)
        fig.add_trace(go.Histogram(x=DD, xbins=dict(size=1), marker_color=t.bear, opacity=0.85 * ch._alpha, showlegend=False, hoverinfo="skip"), row=2, col=2)
    with ch.group("pcts"):
        top = 3.2 * 4000 / 40
        for v, name, col in ((F5, "5th", t.bear_text), (F50, "50th", t.accent), (F95, "95th", t.bull_text)):
            fig.add_vline(x=v, line=dict(color=col, width=2, dash="dash"), row=2, col=1)
        for v, name, col in ((D5, "5th", t.ink2), (D50, "50th", t.accent), (D95, "95th", t.bear_text)):
            fig.add_vline(x=v, line=dict(color=col, width=2, dash="dash"), row=2, col=2)
        dom = fig.layout["yaxis2"].domain
        for xr, txt in (("x2 domain", f"<b>Final result</b>: 5th {F5:+.0f}R · median {F50:+.0f}R · 95th {F95:+.0f}R — {P_NEG:.0%} of paths end below zero"),
                        ("x3 domain", f"<b>Maximum drawdown</b>: 5th {D5:.0f}R · median {D50:.0f}R · 95th {D95:.0f}R — {P_DD15:.0%} exceed 15R")):
            fig.add_annotation(xref=xr, yref="paper", x=0, y=dom[1], yshift=8, xanchor="left", yanchor="bottom", showarrow=False,
                               font=dict(family=FONT, size=11, color=t.ink), text=txt, opacity=ch._alpha)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[0, N_TR + 14], tickfont=dict(size=11, color=t.ink2), title=dict(text="Trade number", font=dict(size=12, color=t.ink3)), **xa, row=1, col=1)
    fig.update_xaxes(tickfont=dict(size=11, color=t.ink2), ticksuffix="R", title=dict(text="Final result after 100 trades", font=dict(size=12, color=t.ink3)), **xa, row=2, col=1)
    fig.update_xaxes(tickfont=dict(size=11, color=t.ink2), ticksuffix="R", title=dict(text="Maximum drawdown", font=dict(size=12, color=t.ink3)), **xa, row=2, col=2)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(ticksuffix="R", row=1, col=1)
    fig.update_yaxes(showticklabels=False, range=[0, PK_F * 1.1], row=2, col=1)
    fig.update_yaxes(showticklabels=False, range=[0, PK_D * 1.1], row=2, col=2)
    panel_title(ch, t, 1, "40 of 4,000 resampled 100-trade paths (cumulative R) and the median")
    ch.header("Quantitative Trading · Monte Carlo", "Monte Carlo: How Bad Can a Run of Trades Get?",
              f"Bootstrap of a 100-trade backtest (expectancy {EXP:+.2f}R) · same trades, 4,000 random orders and draws",
              key=[("▬", t.ink3, "One resampled path"), ("▬", t.accent, "Median"), ("▮", t.bear, "Drawdown distribution")])
    ch.footnote("Resampling reflects only the trades in the sample; it can't show losses worse than any seen, or a change in the edge")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Monte Carlo Drawdown", OUT)
    print(NAME, f"backtest exp {EXP:.3f} wins {sum(1 for x in TRADES if x > 0)} histDD {HIST_DD:.1f} final 5/50/95 {F5:.0f}/{F50:.0f}/{F95:.0f} P(neg) {P_NEG:.3f} "
          f"dd 5/50/95 {D5:.0f}/{D50:.0f}/{D95:.0f} P(dd>15) {P_DD15:.3f}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
