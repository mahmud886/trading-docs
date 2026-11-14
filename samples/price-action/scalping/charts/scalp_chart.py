"""
An M1 scalp at an M5 level in the London/New York overlap: a wick below M5 support, a rejection, a 6-pip stop and a
12-pip target, and what a 1-pip spread does to that R:R.

Candles: data/eurusd_1m_scalp.csv (synthetic). Times are Bangladesh time in US summer.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "m1-scalp-spread"
PIP = 0.0001
SPREAD = 1.0  # pips
C = load(DATA / "eurusd_1m_scalp.csv", Candle, unit_label="minute")
N = len(C)
M5_SUP, M5_HIGH = 1.0850, 1.0865
I_REJECT, I_FILL = 12, 13
ENTRY, STOP, TARGET = 1.0853, 1.0847, 1.0865
START = (19, 5)  # 7:05 PM BD


def bd(i):
    h, m = START[0], START[1] + i
    h, m = h + m // 60, m % 60
    return f"{h - 12}:{m:02d} PM"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    r = C[I_REJECT]
    assert r.l < M5_SUP and r.c > M5_SUP and r.bullish, "rejection: wick below M5 support, close back above"
    assert all(c.l > M5_SUP for c in C[:I_REJECT]), "first touch of the M5 level"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h and STOP < r.l
    assert max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    assert (risk, reward) == (6, 12)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    with ch.group("levels"):
        ch.hline(-0.5, x_end, M5_SUP, color=t.bull_text, dash="dash", width=1.6)
        ch.label(-0.4, M5_SUP - 0.00005, "<b>M5 support 1.0850</b>", size=11, color=t.bull_text, yanchor="top")
        ch.hline(-0.5, x_end, M5_HIGH, color=t.bear_text, dash="dash")
        ch.label(-0.4, M5_HIGH + 0.00005, "<b>M5 swing high 1.0865</b>", size=11, color=t.bear_text,
                 yanchor="bottom")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("reject"):
        ch.callout(I_REJECT, C[I_REJECT].l, 7.0, 1.0844, "M1 rejection: wick to 1.0848,<br>close back above 1.0850",
                   xanchor="center")
    with ch.group("spread"):
        risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
        rr_net = (reward - SPREAD) / (risk + SPREAD)
        ch.label(1.0, 1.0869, f"<b>Before costs</b>: risk {risk:g} · reward {reward:g} · 1 : {rr:.1f}<br>"
                 f"<b>With a {SPREAD:.0f}-pip spread</b>: risk {risk + SPREAD:g} · reward {reward - SPREAD:g} · "
                 f"1 : {rr_net:.1f}", size=12, color=t.ink, yanchor="bottom")
    ch.header("Price Action · Scalping", "Scalping — Small Moves, Where Costs Matter",
              "EUR/USD · 1-minute candles · 7:05 – 7:26 PM BD (London/New York overlap, US summer)",
              key=[("┅", t.bull_text, "M5 support"), ("┅", t.bear_text, "M5 swing high")])
    ch.footnote("Synthetic candles built around the levels in the Scalping lesson")
    ch.caption()
    ticks = list(range(0, N, 3))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0838, 1.0878], y_dtick=0.0005, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "M1 Scalp", OUT)
    print(f"{NAME}: {bd(0)}–{bd(N - 1)} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
