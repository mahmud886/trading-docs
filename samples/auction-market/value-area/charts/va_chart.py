"""
Value-area migration over five synthetic EUR/USD days. Each day is thirteen 30-minute TPO periods; its POC and 70% value
area are computed with the standard outward-from-POC rule. Value moves higher (no overlap), overlaps, then moves lower.

Periods are generated here from a centre path (synthetic).
"""

import math

import plotly.graph_objects as go

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save
from tpokit import profile_stats, tpo_rows

NAME = "value-area-migration"
TICK = 0.0002
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
CENTRES = [1.0850, 1.0856, 1.0870, 1.0872, 1.0856]
PHASE = [0.3, 1.1, 2.0, 0.7, 1.6]


def make_day(c, ph):
    out = []
    for k in range(13):
        mid = c + 0.00035 * math.sin(0.8 * k + ph)
        half = 0.0004 + 0.0001 * ((k * 3 + int(ph * 10)) % 3)
        hi = round(round((mid + half) / TICK) * TICK, 4)
        lo = round(round((mid - half) / TICK) * TICK, 4)
        out.append((hi, lo))
    return out


PERIODS = [make_day(c, p) for c, p in zip(CENTRES, PHASE)]
STATS = [profile_stats(tpo_rows(p, TICK)) for p in PERIODS]          # (poc, val, vah, counts)
RANGES = [(max(h for h, _ in p), min(l for _, l in p)) for p in PERIODS]
DC = [Candle(i, DAYS[i], s[0], r[0], r[1], s[0]) for i, (s, r) in enumerate(zip(STATS, RANGES))]
N = len(DAYS)
POC, VAL, VAH = [s[0] for s in STATS], [s[1] for s in STATS], [s[2] for s in STATS]


def validate():
    for i, (poc, val, vah, cnt) in enumerate(STATS):
        tot = sum(cnt.values())
        assert val <= poc <= vah and sum(c for p, c in cnt.items() if val <= p <= vah) / tot >= 0.70, DAYS[i]
        assert RANGES[i][1] <= val and vah <= RANGES[i][0]
    assert VAL[1] < VAH[0] and VAH[1] > VAH[0] and POC[1] > POC[0], "Tue: value overlaps Mon and is higher"
    assert VAL[2] > VAH[1], "Wed: value completely above Tue (higher, no overlap)"
    assert POC[3] >= POC[2] - 0.0002 and VAL[3] < VAH[2], "Thu: value overlaps Wed"
    assert VAH[4] < VAL[3] and POC[4] < POC[3] - 0.0010, "Fri: value completely below Thu (lower)"


validate()
LABELS = {
    1: ("Overlapping,<br>higher", "ink2"),
    2: ("Higher, no overlap<br>(accepted higher)", "bull_text"),
    3: ("Overlapping,<br>about the same", "ink2"),
    4: ("Lower, no overlap<br>(accepted lower)", "bear_text"),
}


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    fig = ch.fig
    fig.update_layout(hovermode=False)
    k = len(ch.reveal.visible(DC))
    for i in range(k):
        lo, hi = RANGES[i]
        fig.add_trace(go.Scatter(x=[i, i], y=[lo, hi], mode="lines", line=dict(color=t.ink3, width=2), showlegend=False,
                                 hoverinfo="skip"))
        ch.zone(i - 0.28, i + 0.28, VAL[i] - TICK / 2, VAH[i] + TICK / 2, color=t.zone, alpha=0.22)
        ch.hline(i - 0.34, i + 0.34, POC[i], color=t.accent, dash="solid", width=3)
        ch.label(i + 0.38, VAH[i], f"VAH {VAH[i]:.4f}", size=10, color=t.zone_text, yanchor="middle")
        ch.label(i + 0.38, VAL[i], f"VAL {VAL[i]:.4f}", size=10, color=t.zone_text, yanchor="middle")
        ch.label(i - 0.38, POC[i], f"POC {POC[i]:.4f}", size=10, color=t.accent, xanchor="right", yanchor="middle")
    with ch.group("path"):
        fig.add_trace(go.Scatter(x=list(range(N)), y=POC, mode="lines", line=dict(color=t.accent, width=1.2, dash="dot"),
                                 opacity=ch._alpha, showlegend=False, hoverinfo="skip"))
    with ch.group("read"):
        for i, (txt, col) in LABELS.items():
            ch.label(i, RANGES[i][0] + 0.00045, txt, size=11, color=getattr(t, col), xanchor="center", yanchor="bottom", align="center")
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, range=[-0.9, N - 0.1], tickvals=list(range(N)),
                     ticktext=DAYS, tickfont=dict(size=12, color=t.ink2))
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickformat=".4f", tickfont=dict(size=11, color=t.ink2),
                     range=[1.0834, 1.0893], dtick=0.0010)
    ch.header("Auction Market Theory · Value Area", "Value-Area Migration — Where Is Value Moving?",
              "Synthetic EUR/USD · five days, each a 13-period TPO profile · box = 70% value area, bar = POC, line = day range",
              key=[("■", t.zone, "Value area (70%)"), ("▬", t.accent, "Point of control")])
    ch.footnote("Synthetic data; migration describes where trading was accepted, it does not say who traded or what comes next")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Value Area Migration", OUT)
    print(NAME, [(d, f"{l:.4f}-{h:.4f} poc {p:.4f}") for d, l, h, p in zip(DAYS, VAL, VAH, POC)], RANGES,
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
