"""
Time-series and cross-sectional momentum on eight synthetic assets over 700 days. Each asset has a slow drift cycle plus noise, and
all trends reverse on days 440-480. Rebalanced every 21 days using the trailing 126-day return:
cross-sectional = long the top 3, short the bottom 3 (equal weights); time-series = long each asset with a positive trailing return,
short the rest (1/8 each); benchmark = equal-weight buy-and-hold. No costs.
"""

import math
import random

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save
from imkit import panel_title, shown_n

NAME = "momentum-factors"
NA, N, LB, REB = 8, 700, 126, 21
CRASH = (440, 480)


def make(seed):
    r = random.Random(seed)
    rets = []
    for a in range(NA):
        ph = r.uniform(0, 2 * math.pi)
        amp = r.uniform(0.0015, 0.0030)
        row = []
        for i in range(N):
            drift = amp * math.sin(2 * math.pi * i / 260 + ph) + 0.0002
            if CRASH[0] <= i < CRASH[1]:
                drift = -4.0 * amp * math.sin(2 * math.pi * CRASH[0] / 260 + ph)             # reverse the prevailing trend
            row.append(drift + r.gauss(0, 0.008))
        rets.append(row)
    return rets


def run(rets):
    px = [[1.0] for _ in range(NA)]
    for a in range(NA):
        for i in range(N):
            px[a].append(px[a][-1] * (1 + rets[a][i]))
    cum = {"xs": [1.0], "ts": [1.0], "bh": [1.0]}
    start = LB
    for t0 in range(start, N, REB):
        t1 = min(t0 + REB, N)
        trail = [px[a][t0] / px[a][t0 - LB] - 1 for a in range(NA)]
        order = sorted(range(NA), key=lambda a: trail[a], reverse=True)
        top, bot = order[:3], order[-3:]
        for i in range(t0, t1):
            xs = sum(rets[a][i] for a in top) / 3 - sum(rets[a][i] for a in bot) / 3
            ts = sum((1 if trail[a] > 0 else -1) * rets[a][i] for a in range(NA)) / NA
            bh = sum(rets[a][i] for a in range(NA)) / NA
            for k, v in (("xs", xs), ("ts", ts), ("bh", bh)):
                cum[k].append(cum[k][-1] * (1 + v))
    return {k: [100 * (x - 1) for x in v] for k, v in cum.items()}


def max_dd(c):
    eq = [1 + x / 100 for x in c]
    peak, dd = eq[0], 0.0
    for x in eq:
        peak = max(peak, x)
        dd = max(dd, 1 - x / peak)
    return 100 * dd


SEED = 12
RETS = make(SEED)
CUM = run(RETS)
NX = len(CUM["xs"])
FINAL = {k: v[-1] for k, v in CUM.items()}
DD = {k: max_dd(v) for k, v in CUM.items()}
CR0, CR1 = CRASH[0] - LB, CRASH[1] - LB


def validate():
    assert FINAL["xs"] > 10 and FINAL["ts"] > 10, "both momentum rules gain over the sample"
    assert FINAL["bh"] < FINAL["ts"], "and both beat equal-weight buy-and-hold here"
    assert DD["xs"] > 15 and DD["ts"] > 5, "with drawdowns that are not small"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=False, vertical_spacing=0.13, row_heights=[0.60, 0.40])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, barmode="group", bargap=0.3)
    k = shown_n(ch, NX)
    xs = list(range(NX))
    cols = {"xs": t.accent, "ts": t.zone, "bh": t.ink3}
    names = {"xs": "Cross-sectional (long top 3, short bottom 3)", "ts": "Time-series (sign of own trend)", "bh": "Equal-weight buy-and-hold"}
    for key in ("bh", "ts", "xs"):
        fig.add_trace(go.Scatter(x=xs[:k], y=CUM[key][:k], mode="lines", line=dict(color=cols[key], width=2.6), showlegend=False,
                                 hoverinfo="skip"), row=1, col=1)
    with ch.group("labels"):
        for key in ("xs", "ts", "bh"):
            ch.label(NX + 4, CUM[key][-1], f"{names[key].split(' (')[0]} {CUM[key][-1]:+.0f}%", size=11,
                     color=cols[key] if key != "bh" else t.ink2, yanchor="middle", row=1, col=1)
    with ch.group("bars"):
        labs = ["Cross-sectional", "Time-series", "Buy-and-hold"]
        keys = ["xs", "ts", "bh"]
        fig.add_trace(go.Bar(x=labs, y=[FINAL[k_] for k_ in keys], marker_color=[cols[k_] for k_ in keys], opacity=0.85 * ch._alpha, showlegend=False,
                             hoverinfo="skip", text=[f"{FINAL[k_]:+.0f}% total<br>max drawdown {DD[k_]:.0f}%" for k_ in keys], textposition="outside",
                             textfont=dict(family=FONT, size=12, color=t.ink2), cliponaxis=False), row=2, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    fig.update_xaxes(range=[0, NX + 170], tickfont=dict(size=11, color=t.ink2), title=dict(text="Trading day after the first 126-day lookback", font=dict(size=12, color=t.ink3)),
                     **xa, row=1, col=1)
    fig.update_xaxes(tickfont=dict(size=13, color=t.ink), **xa, row=2, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), ticksuffix="%")
    top = max(FINAL.values())
    fig.update_yaxes(range=[min(0, min(FINAL.values())) - 12, top * 1.5 + 5], row=2, col=1)
    panel_title(ch, t, 1, "Cumulative result: three rules on the same eight synthetic assets (monthly rebalance, 126-day lookback, no costs)")
    panel_title(ch, t, 2, "Total result and maximum drawdown")
    ch.header("Quantitative Trading · Momentum Factors", "Time-Series vs Cross-Sectional Momentum on Eight Assets",
              "Synthetic data · momentum gains where trends persist, with drawdowns along the way",
              key=[("▬", t.accent, "Cross-sectional"), ("▬", t.zone, "Time-series"), ("▬", t.ink3, "Buy-and-hold")])
    ch.footnote("Synthetic data with built-in drift cycles; real momentum premia are smaller, noisier, and sensitive to costs")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Momentum Factors", OUT)
    print(NAME, {k: round(v, 1) for k, v in FINAL.items()}, "dd", {k: round(v, 1) for k, v in DD.items()},
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
