"""
Auction Market Theory in one session: balance (price rotates and builds volume), imbalance (a one-directional drive that
leaves little volume at each price), and a new balance higher up. The profile on the right is built from the candles.

Candles: data/eurusd_5m_amt.csv (synthetic, with volume).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import Chart, Reveal, save
from ofkit import value_area, volume_profile
from volkit import load_ohlcv

NAME = "auction-phases"
TICK = 0.0001
C, V = load_ohlcv(DATA / "eurusd_5m_amt.csv", "5m")
N = len(C)
B1, D, B2 = (0, 20), (20, 27), (27, N)
PROF = volume_profile(C, V, TICK)
POC, VAL, VAH = value_area(PROF)
PRICES = sorted(PROF)


def bd(i):
    h, m = divmod(10 * 60 + 5 * i, 60)
    return f"{h}:{m:02d}"


def rng(a, b):
    return min(c.l for c in C[a:b]), max(c.h for c in C[a:b])


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    (l1, h1), (l2, h2) = rng(*B1), rng(*B2)
    assert h1 - l1 < 0.0014 and h2 - l2 < 0.0014 and l2 > h1 + 0.0010, "two compact balance areas, the second well above the first"
    dl = [C[i].l for i in range(*D)]
    assert all(b > a for a, b in zip(dl, dl[1:])) and C[D[1] - 1].c - C[D[0]].o > 0.0012, "drive: each low above the last"
    thin = [PROF[p] for p in PRICES if h1 + 0.0001 <= p <= l2 - 0.0001]
    assert thin and max(thin) < 0.5 * max(PROF[p] for p in PRICES if p <= h1), "little volume between the two areas"
    b1 = sum(v for c, v in zip(C[:B1[1]], V) )
    assert sum(V[B2[0]:]) > sum(V[B1[0]:B1[1]]) and POC > h1, "the busiest price is in the new balance"


validate()
LO1, HI1 = rng(*B1)
LO2, HI2 = rng(*B2)


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, column_widths=[0.76, 0.24], horizontal_spacing=0.02, shared_yaxes=True)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, bargap=0.05)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    with ch.group("b1"):
        ch.zone(B1[0] - 0.5, B1[1] - 0.5, LO1 - 0.00004, HI1 + 0.00004, color=t.zone, alpha=0.10, row=1, col=1)
        ch.label(9.5, LO1 - 0.00012, f"<b>Balance</b> {LO1:.4f}–{HI1:.4f}<br>price rotates, volume builds", size=11,
                 color=t.zone_text, xanchor="center", yanchor="top", align="center", row=1, col=1)
    with ch.group("drive"):
        ch.label(D[0] - 0.5, C[D[1] - 1].c + 0.0003, f"<b>Imbalance</b>: {D[1] - D[0]} bars, each low higher<br>"
                 f"+{(C[D[1] - 1].c - C[D[0]].o) * 1e4:.0f} pips with little volume per price", size=11, color=t.bull_text,
                 xanchor="right", yanchor="bottom", align="right", row=1, col=1)
    with ch.group("b2"):
        ch.zone(B2[0] - 0.5, B2[1] - 0.5, LO2 - 0.00004, HI2 + 0.00004, color=t.zone, alpha=0.10, row=1, col=1)
        ch.label(B2[0] + (N - B2[0]) / 2, HI2 + 0.00012, f"<b>New balance</b> {LO2:.4f}–{HI2:.4f}", size=11, color=t.zone_text,
                 xanchor="center", yanchor="bottom", row=1, col=1)
    with ch.group("profile"):
        fig.add_trace(go.Bar(orientation="h", y=PRICES, x=[PROF[p] for p in PRICES],
                             marker_color=[t.zone if VAL <= p <= VAH else t.ink3 for p in PRICES],
                             opacity=0.8 * ch._alpha, width=TICK * 0.9, showlegend=False, hoverinfo="skip"), row=1, col=2)
        ch.label(max(PROF.values()) * 1.45, (HI1 + LO2) / 2, "thin: price<br>moved fast", size=11, color=t.bear_text,
                 xanchor="right", yanchor="middle", align="right", row=1, col=2)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    ticks = list(range(0, N, 6))
    fig.update_xaxes(range=[-1, N + 0.5], tickvals=ticks, ticktext=[bd(i) for i in ticks], tickfont=dict(size=11, color=t.ink2),
                     **xa, row=1, col=1)
    fig.update_xaxes(showticklabels=False, range=[0, max(PROF.values()) * 1.5], **xa, row=1, col=2)
    lo, hi = min(PRICES) - 0.0004, max(PRICES) + 0.0006
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, range=[lo, hi], tickformat=".4f", tickfont=dict(size=11, color=t.ink2),
                     row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, row=1, col=2)
    ch.header("Auction Market Theory · Introduction", "Balance, Imbalance, New Balance",
              "Synthetic EUR/USD 5-minute session · price searches for the level where both sides will trade",
              key=[("▮", t.zone, "Balance / value area (70%)"), ("▮", t.ink3, "Volume outside the value area")])
    ch.footnote("Synthetic data; the profile is built by spreading each candle's volume over its ticks")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Auction Market Phases", OUT)
    print(NAME, f"B1 {LO1}-{HI1} drive {C[D[0]].o}->{C[D[1]-1].c} B2 {LO2}-{HI2} POC {POC} VA {VAL}-{VAH}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
