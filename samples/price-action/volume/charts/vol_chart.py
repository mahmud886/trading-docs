"""
Volume as confirmation: two breaks of the same resistance. The first, on below-average tick volume, fails;
the second, on about 2.5× average volume, holds, and the quiet retest is bought.

Candles: data/eurusd_1h_volume.csv (synthetic, with a tick-volume column).
"""

import csv

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, levels, save

NAME = "volume-breakout-confirmation"
PIP = 0.0001


def load():
    with (DATA / "eurusd_1h_volume.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    cs = [Candle(int(r["i"]), f"hour {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
          for r in rows]
    return cs, [int(r["volume"]) for r in rows]


C, V = load()
N = len(C)
I_FAKE, I_BREAK, I_RETEST = 10, 18, 20
RES, SUP = 1.0940, 1.0900
AVG = sum(V[:I_FAKE]) / I_FAKE
ENTRY, STOP, TARGET = 1.0947, 1.0928, 1.0985


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(c.h <= RES and c.l >= SUP for c in C[:I_FAKE]), "range before the first break"
    f = C[I_FAKE]
    assert f.c > RES and V[I_FAKE] < AVG, "first break: close above on below-average volume"
    assert C[I_FAKE + 1].c < RES, "…and it fails: the next close is back inside"
    b = C[I_BREAK]
    assert b.c > RES and V[I_BREAK] > 2.2 * AVG, "second break: close above on heavy volume"
    r = C[I_RETEST]
    assert r.l > RES - 0.0001 and r.l <= ENTRY <= r.h and V[I_RETEST] < AVG, "quiet retest holds"
    assert STOP < RES and max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, vertical_spacing=0.06, row_heights=[0.68, 0.32])
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    shown = ch.reveal.visible(C)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), row=1, col=1)
    fig.add_trace(go.Bar(x=list(range(len(shown))), y=V[:len(shown)],
                         marker_color=[t.bull if c.c >= c.o else t.bear for c in shown], opacity=0.8,
                         showlegend=False, hoverinfo="skip"), row=2, col=1)
    ch.hline(-0.5, N + 1.5, AVG, color=t.ink3, dash="dot", row=2, col=1)
    ch.label(N + 1.5, AVG, f"average {AVG:,.0f}", size=10, color=t.ink3, xanchor="right", yanchor="bottom",
             row=2, col=1)
    dom = fig.layout["yaxis2"].domain
    fig.add_annotation(xref="paper", yref="paper", x=0, y=dom[1], yshift=4, xanchor="left", yanchor="bottom",
                       showarrow=False, font=dict(family=FONT, size=12, color=t.ink2), text="<b>Tick volume</b>")
    with ch.group("range"):
        ch.hline(-0.5, N + 1.5, RES, color=t.bear_text, dash="dash", row=1, col=1)
        ch.label(-0.4, RES + 0.0003, "<b>Resistance 1.0940</b>", size=11, color=t.bear_text, yanchor="bottom",
                 row=1, col=1)
        ch.hline(-0.5, I_BREAK, SUP, color=t.bull_text, dash="dash", row=1, col=1)
    with ch.group("fake"):
        ch.label(I_FAKE, C[I_FAKE].h + 0.0004, f"<b>Break 1</b><br>volume {V[I_FAKE]:,} — below average<br>fails",
                 size=11, color=t.bear_text, xanchor="center", yanchor="bottom", align="center", row=1, col=1)
    with ch.group("real"):
        ch.label(I_BREAK - 2.5, C[I_BREAK].h + 0.0004,
                 f"<b>Break 2</b><br>volume {V[I_BREAK]:,} — {V[I_BREAK] / AVG:.1f}× average<br>holds",
                 size=11, color=t.bull_text, xanchor="center", yanchor="bottom", align="center", row=1, col=1)
    with ch.group("trade"):
        risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
        for y, colr, txt in ((TARGET, t.bull_text, f"TP {TARGET:.4f} · +{reward:g} · 1 : {rr:.1f}"),
                             (ENTRY, t.ink, f"Buy {ENTRY:.4f} (quiet retest)"),
                             (STOP, t.bear_text, f"SL {STOP:.4f} · −{risk:g}")):
            ch.hline(I_RETEST - 0.4, N + 1.5, y, color=colr, width=1.6, dash="solid", row=1, col=1)
            ch.label(N + 1.5, y, f"<b>{txt}</b>", size=11, color=colr, xanchor="right", yanchor="bottom", row=1, col=1)
    fig.update_xaxes(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, showticklabels=False,
                     rangeslider_visible=False, range=[-0.8, N + 1.8])
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="right", tickfont=dict(size=11, color=t.ink2))
    fig.update_yaxes(range=[1.0890, 1.0995], tickformat=".4f", row=1, col=1)
    fig.update_yaxes(range=[0, 3600], dtick=1000, row=2, col=1)
    ch.header("Price Action · Volume", "Volume — Which Breakout Has Fuel",
              "EUR/USD · 1-hour candles with tick volume · the same level broken twice, with very different volume",
              key=[("▮", t.bull, "Up candle / volume"), ("▮", t.bear, "Down candle / volume")])
    ch.footnote("Synthetic candles and tick volume built for the Volume lesson")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Volume Breakout", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: avg {AVG:.0f} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
