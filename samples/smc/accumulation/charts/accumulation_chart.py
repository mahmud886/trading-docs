"""
Wyckoff/SMC accumulation — selling climax, automatic rally, secondary test, spring (sweep), test, sign of strength,
last point of support, markup. EUR/USD 4H with volume (synthetic).

Series: samples/smc/_shared/wyckoff.py.
"""

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import FONT, Chart, Reveal, levels, save
from wyckoff import EVENTS, RANGE, accumulation

NAME = "wyckoff-accumulation"
PIP = 0.0001
C, VOL = accumulation()
N = len(C)
ENTRY, STOP, TARGET = 1.0818, 1.0788, 1.0960
LABELS = {"PS": "PS", "SC": "SC", "AR": "AR", "ST": "ST", "Spring": "Spring", "Test": "Test", "SOS": "SOS",
          "LPS": "LPS"}


def validate():
    e = EVENTS
    assert C[e["SC"]].l == RANGE[0] and max(c.h for c in C[e["SC"]:e["SOS"] - 1]) == RANGE[1]
    assert C[e["Spring"]].l < RANGE[0] < C[e["Spring"]].c, "spring: below the range, closes back inside"
    assert VOL[e["SC"]] == max(VOL[:e["SOS"]]), "climactic volume at the SC"
    assert VOL[e["Spring"]] < VOL[e["ST"]] < VOL[e["SC"]] and VOL[e["Test"]] < VOL[e["Spring"]], "volume dries up"
    assert C[e["SOS"]].c > RANGE[1] and VOL[e["SOS"]] > VOL[e["Spring"]] * 2, "SOS: break up on rising volume"
    assert C[e["LPS"]].l > RANGE[1] - 0.0010, "LPS holds near the old range top"
    assert C[e["Test"]].l <= ENTRY and STOP < C[e["Spring"]].l and max(c.h for c in C) < TARGET + 0.0001


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.04, row_heights=[0.78, 0.22])
    ch = Chart(t, reveal, top=170, fig=fig)
    fig.update_layout(hovermode=False, showlegend=False)
    shown = reveal.visible(C) if reveal else C
    with ch.group("range"):
        ch.zone(EVENTS["SC"] - 0.4, EVENTS["SOS"] - 0.4, *RANGE, color=t.ink3, alpha=0.08, dash="dot", row=1, col=1)
        ch.label(19.0, RANGE[1] + 0.0004, "<b>trading range</b> 1.0800 – 1.0880", size=11,
                 yanchor="bottom", row=1, col=1)
    with ch.group("events"):
        for k, i in EVENTS.items():
            c = C[i]
            up = k in ("AR", "SOS")
            ch.label(i, (c.h + 0.0005) if up else (c.l - 0.0005), f"<b>{LABELS[k]}</b>", size=11, xanchor="center",
                     yanchor="bottom" if up else "top", color=t.accent, row=1, col=1)
    with ch.group("position"):
        ch.position(EVENTS["Test"] - 0.4, N + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP,
                    unit_name="pips", fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    cols = [t.bull if c.bullish else t.bear for c in shown]
    fig.add_trace(go.Bar(x=list(range(len(shown))), y=VOL[:len(shown)], marker_color=cols, opacity=0.7, width=0.7),
                  row=2, col=1)
    with ch.group("events"):
        for k in ("SC", "Spring", "SOS"):
            i = EVENTS[k]
            ch.label(i, VOL[i] + 15, {"SC": "climax", "Spring": "low volume", "SOS": "rising"}[k], size=10,
                     xanchor="center", yanchor="bottom", color=t.ink2, row=2, col=1)
    fig.add_annotation(xref="paper", yref="paper", x=0, y=0.22, yshift=2, xanchor="left", yanchor="bottom",
                       showarrow=False, font=dict(family=FONT, size=12, color=t.ink2), text="Volume (synthetic)")
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False,
                     range=[-0.8, N + 2], tickvals=list(range(0, N, 6)), ticktext=[str(i + 1) for i in range(0, N, 6)],
                     tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2), zeroline=False)
    fig.update_yaxes(range=[1.0770, 1.0985], tickformat=".4f", row=1, col=1)
    fig.update_yaxes(range=[0, 420], showticklabels=False, row=2, col=1)
    ch.header("SMC · Accumulation", "Wyckoff Accumulation — Climax, Range, Spring, Strength",
              "EUR/USD · 4-hour candles with volume · the spring is a sell-side sweep; volume dries up, then expands",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles and volume for the Accumulation lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Wyckoff Accumulation", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
