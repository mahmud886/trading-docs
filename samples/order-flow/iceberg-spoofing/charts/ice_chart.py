"""
Resting-liquidity heatmap on a synthetic 1-minute session: a large bid wall that is pulled as price approaches
(consistent with spoofing, or just a cancelled order) and a small displayed bid that keeps refilling while 640 contracts
trade into it (consistent with an iceberg).

Data: data/eurusd_1m_ice.csv (candles), data/liquidity_grid.csv (resting size and executed volume per price per minute).
"""

import csv

import plotly.graph_objects as go

from _paths import DATA, OUT
from chartkit import FONT, Candle, Chart, Reveal, save

NAME = "iceberg-spoofing"
ICE_PX, SPOOF_PX = 1.0852, 1.0856


def load():
    with (DATA / "eurusd_1m_ice.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    cs = [Candle(int(r["i"]), f"1m {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close"))) for r in rows]
    with (DATA / "liquidity_grid.csv").open() as f:
        g = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return cs, g


C, G = load()
N = len(C)
LEVELS = sorted({float(r["price"]) for r in G})
SIZE = {(int(r["i"]), float(r["price"])): int(r["size"]) for r in G}
EXEC = {int(r["i"]): int(r["executed"]) for r in G if int(r["executed"])}
SPOOF = [i for i in range(N) if SIZE[(i, SPOOF_PX)] >= 100]
ICE = sorted(EXEC)
EXEC_TOTAL = sum(EXEC.values())


def bd(i):
    h, m = divmod(9 * 60 + 30 + i, 60)
    return f"{h}:{m:02d}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    # the wall rests for 8 bars, is far larger than the quiet book, and is pulled before price trades at it
    assert len(SPOOF) == 8 and SPOOF == list(range(SPOOF[0], SPOOF[-1] + 1))
    quiet = max(SIZE[(i, p)] for i in range(N) for p in LEVELS if not (p == SPOOF_PX and i in SPOOF) and not (p == ICE_PX and i in EXEC))
    assert quiet < 30 and SIZE[(SPOOF[0], SPOOF_PX)] > 3 * quiet
    assert all(C[i].l > SPOOF_PX for i in SPOOF), "price never trades at the wall while it rests"
    pull = SPOOF[-1] + 1
    assert SIZE[(pull, SPOOF_PX)] < 30 and C[pull].c - SPOOF_PX <= 0.00015, "wall pulled with price one to two ticks away"
    assert C[pull + 3].c < SPOOF_PX - 0.0001 or C[pull + 4].l < SPOOF_PX, "price then falls through where the wall was"
    # the iceberg: displayed size small and constant, executed volume much larger, low holds, then a bounce
    shown = [SIZE[(i, ICE_PX)] for i in ICE]
    assert max(shown) < 60 and EXEC_TOTAL > 10 * max(shown) and all(C[i].l >= ICE_PX - 1e-9 for i in ICE)
    assert all(EXEC[i] > SIZE[(i, ICE_PX)] for i in ICE), "each minute trades more than the displayed size"
    assert C[-1].c - C[ICE[-1]].c > 0.0006, "price bounces"
    assert max(c.h for c in C[ICE[-1] + 1:]) < 1.0864, "planned target 1.0864 is not reached in the data"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    fig = ch.fig
    fig.update_layout(hovermode=False)
    k = len(ch.reveal.visible(C))
    z = [[SIZE[(i, p)] if i < k else None for i in range(N)] for p in LEVELS]
    fig.add_trace(go.Heatmap(x=list(range(N)), y=LEVELS, z=z, zmin=0, zmax=100, xgap=1, ygap=1, zsmooth=False, showscale=False,
                             colorscale=[[0, t.surface], [0.3, t.surface], [1, t.accent]], hoverinfo="skip"))
    ch.candles(C, "EUR/USD 1m (synthetic)", price_fmt=".4f", x=list(range(N)))
    with ch.group("spoof"):
        ch.label((SPOOF[0] + SPOOF[-1]) / 2, SPOOF_PX - 0.00012, f"<b>Large bid wall</b> (size 100) rests for {len(SPOOF)} minutes",
                 size=11, color=t.zone_text, xanchor="center", yanchor="top")
        ch.callout(SPOOF[-1] + 1, SPOOF_PX, SPOOF[-1] + 5, SPOOF_PX + 0.00032, "Pulled while price is still 3 ticks above —<br>then price falls through 1.0856")
    with ch.group("ice"):
        ch.hline(ICE[0] - 0.5, ICE[-1] + 0.5, ICE_PX, color=t.bull_text, dash="dash")
        ch.label((ICE[0] + ICE[-1]) / 2, ICE_PX - 0.00005, f"<b>Iceberg bid</b> — shows ~{min(SIZE[(i, ICE_PX)] for i in ICE)}–"
                 f"{max(SIZE[(i, ICE_PX)] for i in ICE)}, refills each minute<br>{EXEC_TOTAL} contracts sold into it; the low holds",
                 size=11, color=t.bull_text, xanchor="center", yanchor="top", align="center")
    xa = dict(showgrid=False, zeroline=False, showline=True, linecolor=t.axis, rangeslider_visible=False, range=[-1, N])
    ticks = list(range(0, N, 5))
    fig.update_xaxes(tickvals=ticks, ticktext=[bd(i) for i in ticks], tickfont=dict(size=11, color=t.ink2), **xa)
    fig.update_yaxes(showgrid=False, side="right", tickfont=dict(size=11, color=t.ink2), tickformat=".4f", range=[1.08485, 1.08655],
                     dtick=0.0001)
    ch.header("Order Flow · Iceberg Orders and Spoofing", "What the Book Shows — and What Actually Trades",
              "Synthetic EUR/USD 1-minute session · brighter cells = more resting size at that price",
              key=[("▮", t.accent, "Resting size (bright = large)"), ("▮", t.bull, "Up bar"), ("▮", t.bear, "Down bar")])
    ch.footnote("Synthetic data; a vanished wall or a refilling bid is only consistent with these ideas — it is not proof of anyone's intent")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Iceberg and Spoofing", OUT)
    print(NAME, EXEC_TOTAL, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
