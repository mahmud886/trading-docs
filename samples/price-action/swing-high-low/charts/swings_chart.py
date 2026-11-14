"""
Minor swings (3-candle rule) vs major swings (5-candle rule) on the same candles, then a swing failure pattern
at the major swing high: a wick above it that closes back below.

Candles: data/eurusd_1h_swings.csv (synthetic).
"""

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from smckit import swings

NAME = "swing-points-sfp"
PIP = 0.0001
C = load(DATA / "eurusd_1h_swings.csv", Candle)
N = len(C)
I_SFP = 31
BASE = C[:I_SFP]  # swings are found on the candles before the failure
MIN_H, MIN_L = swings(BASE, 1)
MAJ_H, MAJ_L = swings(BASE, 2)
KEY_H = max(MAJ_H, key=lambda s: s[1])
ENTRY, STOP, TARGET = 1.0940, 1.0965, 1.0880


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert len(MAJ_H) < len(MIN_H) and len(MAJ_L) < len(MIN_L), "the 5-candle rule keeps fewer swings"
    assert set(MAJ_H) <= set(MIN_H) and set(MAJ_L) <= set(MIN_L), "every major swing is also a minor one"
    assert KEY_H[1] == 1.0950, KEY_H
    s = C[I_SFP]
    assert s.h > KEY_H[1] and s.c < KEY_H[1], "SFP: trades above the swing high, closes back below"
    assert all(c.h < KEY_H[1] for c in C[KEY_H[0] + 1:I_SFP]), "the swing high was untouched until the SFP"
    assert C[I_SFP + 1].h >= ENTRY >= C[I_SFP + 1].l and STOP > s.h
    assert min(c.l for c in C[I_SFP:]) > TARGET, "target not reached — the plan, not a result"


validate()


def marks(ch, t, pts, up, size, name, color):
    off = 0.00035 if up else -0.00035
    ch.fig.add_trace(go.Scatter(x=[i for i, _ in pts], y=[p + off for _, p in pts], mode="markers", name=name,
                                marker=dict(symbol="triangle-down" if up else "triangle-up", size=size, color=color),
                                showlegend=False, hoverinfo="skip"))


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    if ch.reveal.alpha("minor") > 0.3:
        marks(ch, t, MIN_H, True, 8, "minor high", t.ink3)
        marks(ch, t, MIN_L, False, 8, "minor low", t.ink3)
    if ch.reveal.alpha("major") > 0.3:
        marks(ch, t, MAJ_H, True, 15, "major high", t.bear)
        marks(ch, t, MAJ_L, False, 15, "major low", t.bull)
    with ch.group("major"):
        ch.hline(KEY_H[0], N - 0.5, KEY_H[1], color=t.bear_text, dash="dash")
        ch.label(KEY_H[0] - 0.4, KEY_H[1] + 0.0009, "<b>Major swing high 1.0950</b><br>buy stops rest above",
                 size=11, color=t.bear_text, xanchor="center", yanchor="bottom", align="center")
    with ch.group("position"):
        ch.position(I_SFP + 0.6, N + 2.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    with ch.group("sfp"):
        ch.callout(I_SFP, C[I_SFP].h, 25.5, 1.0972, "<b>Swing failure</b>: wick to 1.0958,<br>close back at 1.0942",
                   xanchor="center")
    ch.header("Price Action · Swing Highs & Lows", "Swing Points — Minor, Major, and the Failure",
              "EUR/USD · 1-hour candles · small markers: 3-candle swings · large markers: 5-candle swings",
              key=[("▼", t.ink3, "3-candle swing"), ("▼", t.bear, "5-candle high"), ("▲", t.bull, "5-candle low")])
    ch.footnote("Synthetic candles built around the levels in the Swing Highs & Lows lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 2.8], y_range=[1.0870, 1.0985], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Swing Points and SFP", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: minor {len(MIN_H)}/{len(MIN_L)} major {MAJ_H} {MAJ_L} · R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
