"""
The same 40 trades (40% winners at 1 : 2, including a 7-loss streak) traded at 1%, 2% and 5% risk per trade,
compounding on the current balance. Shows drawdown depth and recovery.

Data: data/trade_sequence.csv (a synthetic sequence, not real results).
"""

import csv

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "risk-per-trade-equity"
START = 10_000
RR = 2.0
RISKS = [(0.01, "1% per trade"), (0.02, "2% per trade"), (0.05, "5% per trade")]

with (DATA / "trade_sequence.csv").open() as f:
    SEQ = [r["outcome"] for r in csv.DictReader(line for line in f if not line.startswith("#"))]
N = len(SEQ)
DUMMY = [Candle(i, "", 1, 1, 1, 1) for i in range(N + 1)]  # lets the video reveal trade by trade


def curve(risk):
    eq = [START]
    for o in SEQ:
        r = eq[-1] * risk
        eq.append(eq[-1] + (r * RR if o == "W" else -r))
    return eq


def max_dd(eq):
    peak, dd = eq[0], 0.0
    for v in eq:
        peak = max(peak, v)
        dd = max(dd, (peak - v) / peak)
    return dd


def streak():
    best = cur = 0
    for o in SEQ:
        cur = cur + 1 if o == "L" else 0
        best = max(best, cur)
    return best


def validate():
    assert N == 40 and SEQ.count("W") == 16 and streak() == 7, "40 trades, 40% winners, a 7-loss streak"
    finals = [curve(r)[-1] for r, _ in RISKS]
    dds = [max_dd(curve(r)) for r, _ in RISKS]
    assert all(f > START for f in finals[:2]), "positive edge grows the account at 1% and 2%"
    assert dds == sorted(dds) and dds[2] > 0.30, "drawdown grows with risk per trade"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(ch.reveal.visible(DUMMY))
    colors = [t.bull, t.zone, t.bear]
    for (risk, name), col in zip(RISKS, colors):
        eq = curve(risk)[:n]
        ch.fig.add_trace(go.Scatter(x=list(range(len(eq))), y=eq, mode="lines", line=dict(color=col, width=2.6),
                                    showlegend=False, hoverinfo="skip"))
        if n == N + 1:
            ch.label(N + 0.5, eq[-1], f"<b>{name}</b> · max drawdown {max_dd(eq) * 100:.0f}% · "
                     f"end {eq[-1]:,.0f}", size=11, color=col)
    ch.hline(0, N + 0.4, START, color=t.ink3, dash="dot")
    with ch.group("streak"):
        a = next(i for i in range(N) if SEQ[i:i + 7] == ["L"] * 7)
        ch.zone(a + 0.5, a + 7.5, 6_500, 14_300, color=t.bear, alpha=0.08)
        ch.label(a + 4, 14_250, "<b>7 losses in a row</b>", size=11, color=t.bear_text, xanchor="center",
                 yanchor="top")
    ch.header("Price Action · Risk Management", "Risk Per Trade — Same Trades, Different Outcomes",
              "40 synthetic trades · 40% winners at 1 : 2 · risk is a % of the current balance, starting at 10,000 USD",
              key=[("━", t.bull, "1%"), ("━", t.zone, "2%"), ("━", t.bear, "5%")])
    ch.footnote("A synthetic trade sequence to show compounding and drawdown — not real results")
    ch.caption()
    ch.axes(x_range=[-0.5, N + 16], y_range=[6_500, 14_500], y_dtick=1_000, y_fmt=",.0f", x_title="Trade number",
            x_ticks=(list(range(0, N + 1, 5)), [str(i) for i in range(0, N + 1, 5)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Risk Per Trade", OUT)
    for r, name in RISKS:
        eq = curve(r)
        print(name, round(eq[-1]), round(max_dd(eq) * 100, 1))
    print(', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
