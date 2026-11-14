"""
A volume profile on a synthetic 5-minute session: two balance areas (high-volume nodes) joined by a fast move that
leaves a low-volume node between them. The profile is built from the candles (each candle's volume spread evenly over
its ticks); POC, value area (70%), HVNs and the LVN are computed from it.

Candles: data/eurusd_5m_profile.csv (synthetic, with volume).
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Chart, Reveal, save
from ofkit import value_area, volume_profile
from volkit import load_ohlcv

NAME = "volume-profile-session"
TICK = 0.0001
C, V = load_ohlcv(DATA / "eurusd_5m_profile.csv", "5m")
N = len(C)
PROF = volume_profile(C, V, TICK)
POC, VAL, VAH = value_area(PROF)
PRICES = sorted(PROF)
TOTAL = sum(PROF.values())
mid = (min(PRICES) + max(PRICES)) / 2
HVN1 = max((p for p in PRICES if p < mid), key=lambda p: PROF[p])
HVN2 = max((p for p in PRICES if p >= mid), key=lambda p: PROF[p])
LVN = min((p for p in PRICES if HVN1 < p < HVN2), key=lambda p: PROF[p])


def bd(i):
    h, m = divmod(10 * 60 + 5 * i, 60)
    return f"{h}:{m:02d}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    inside = sum(PROF[p] for p in PRICES if VAL <= p <= VAH)
    assert inside / TOTAL >= 0.70, "the value area holds at least 70% of the volume"
    assert abs(sum(PROF.values()) - sum(V)) < 1e-6
    assert HVN1 < LVN < HVN2 and PROF[LVN] < 0.4 * PROF[POC], "a low-volume node between two high-volume nodes"
    assert PROF[HVN1] > 0.6 * PROF[POC] and PROF[HVN2] > 0.6 * PROF[POC], "both nodes are real peaks"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, column_widths=[0.76, 0.24], horizontal_spacing=0.02, shared_yaxes=True)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False, bargap=0.05)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    with ch.group("profile"):
        cols = [t.zone if VAL <= p <= VAH else t.ink3 for p in PRICES]
        fig.add_trace(go.Bar(orientation="h", y=PRICES, x=[PROF[p] for p in PRICES], marker_color=cols,
                             opacity=0.8 * ch._alpha, width=TICK * 0.9, showlegend=False, hoverinfo="skip"), row=1, col=2)
    with ch.group("va"):
        ch.zone(-0.5, N - 0.5, VAL - TICK / 2, VAH + TICK / 2, color=t.zone, alpha=0.08, border=False, row=1, col=1)
        ch.hline(-0.5, N - 0.5, POC, color=t.ink, dash="dash", width=1.4, row=1, col=1)
        ch.label(0, POC + 0.00008, f"<b>POC</b> {POC:.4f}", size=11, color=t.ink, yanchor="bottom", row=1, col=1)
        ch.label(0, VAH + 0.00008, f"VAH {VAH:.4f}", size=10, color=t.zone_text, yanchor="bottom", row=1, col=1)
        ch.label(N - 0.6, VAL - 0.00008, f"VAL {VAL:.4f}", size=10, color=t.zone_text, xanchor="right", yanchor="top",
                 row=1, col=1)
    with ch.group("nodes"):
        for p, name, col in ((HVN1, "HVN", t.bull_text), (HVN2, "HVN", t.bull_text), (LVN, "LVN", t.bear_text)):
            ch.label(max(PROF.values()) * 1.48, p, f"<b>{name}</b> {p:.4f}", size=11, color=col, xanchor="right",
                     yanchor="middle", row=1, col=2)
        ch.hline(-0.5, N - 0.5, LVN, color=t.bear_text, dash="dot", row=1, col=1)
        ch.label(N - 0.6, LVN, "low-volume node: price moved through quickly", size=11, color=t.bear_text, xanchor="right",
                 yanchor="top", row=1, col=1)
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False)
    ticks = list(range(0, N, 6))
    fig.update_xaxes(range=[-1, N + 0.5], tickvals=ticks, ticktext=[bd(i) for i in ticks],
                     tickfont=dict(size=11, color=t.ink2), **xa, row=1, col=1)
    fig.update_xaxes(showticklabels=False, range=[0, max(PROF.values()) * 1.5], **xa, row=1, col=2)
    lo, hi = min(PRICES) - 0.0003, max(PRICES) + 0.0003
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, range=[lo, hi], tickformat=".4f",
                     tickfont=dict(size=11, color=t.ink2), row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, row=1, col=2)
    ch.header("Order Flow · Volume Profile", "Volume Profile — Where Trading Was Accepted",
              "Synthetic EUR/USD 5-minute session (exchange time) · volume by price: two high-volume nodes and a low-volume node between them",
              key=[("▮", t.zone, "Value area (70%)"), ("▮", t.ink3, "Outside the value area")])
    ch.footnote("Synthetic data; the profile is built by spreading each candle's volume evenly over its ticks")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Volume Profile", OUT)
    print(NAME, f"POC {POC} VAL {VAL} VAH {VAH} HVN {HVN1},{HVN2} LVN {LVN} ({PROF[LVN]:.0f} vs POC {PROF[POC]:.0f})",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
