"""
VWAP on a synthetic 5-minute session: an opening drive on heavy volume pulls price well above VWAP, a quiet pullback
returns to it, the first candle that touches VWAP and closes above it is the planned entry, and price continues.
VWAP and its ±1σ bands are computed from the candles (typical price × volume).

Candles: data/eurusd_5m_vwap.csv (synthetic, with volume).
"""

from _paths import DATA, OUT
from chartkit import Chart, Reveal, levels, save
from ofkit import vwap_bands
from volkit import load_ohlcv

NAME = "vwap-pullback"
PIP = 0.0001
C, V = load_ohlcv(DATA / "eurusd_5m_vwap.csv", "5m")
N = len(C)
BANDS = vwap_bands(C, V)
I_ENTRY = next(i for i in range(12, N) if C[i].l <= BANDS[i][0] + 0.00015 and C[i].c > BANDS[i][0] and C[i].bullish)
ENTRY = C[I_ENTRY].c
STOP = round(BANDS[I_ENTRY][0] - 0.0007, 4)
TARGET = 1.0892


def bd(i):
    h, m = divmod(9 * 60 + 30 + 5 * i, 60)
    return f"{h}:{m:02d}"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(C[i].c > BANDS[i][0] for i in range(6, N)), "price holds above VWAP after the first half hour"
    assert max(c.h - BANDS[i][0] for i, c in enumerate(C[:12])) > 0.0009, "the opening drive stretches well above VWAP"
    assert 20 <= I_ENTRY <= 28 and C[I_ENTRY].l <= BANDS[I_ENTRY][0] + 0.00015, "the entry candle touches VWAP"
    assert STOP < BANDS[I_ENTRY][2] + 1e-4 and max(c.h for c in C) < TARGET, "plan, not result"
    assert sum(V[:12]) > 1.8 * sum(V[12:20]), "the drive on heavy volume, the pullback on light volume"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3
    n = len(ch.reveal.visible(C))
    xs = list(range(n))
    with ch.group("vwap"):
        import plotly.graph_objects as go
        ch.fig.add_trace(go.Scatter(x=xs + xs[::-1], y=[b[1] for b in BANDS[:n]] + [b[2] for b in BANDS[:n]][::-1],
                                    fill="toself", fillcolor="rgba(56,189,248,0.12)", line=dict(width=0), mode="lines",
                                    showlegend=False, hoverinfo="skip", opacity=ch._alpha))
        ch.fig.add_trace(go.Scatter(x=xs, y=[b[0] for b in BANDS[:n]], mode="lines", line=dict(color=t.accent, width=2.6),
                                    showlegend=False, hoverinfo="skip", opacity=ch._alpha))
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("labels"):
        ch.label(14, BANDS[14][2] - 0.00025, "<b>VWAP</b> ± 1σ (builds through the session)", size=12, color=t.accent,
                 xanchor="center", yanchor="top")
        ch.callout(5, C[5].h, 3.5, 1.0891, "Opening drive on heavy volume<br>stretches price above VWAP", xanchor="center")
    with ch.group("entry"):
        ch.callout(I_ENTRY, C[I_ENTRY].l, I_ENTRY - 6, 1.0842, f"Quiet pullback touches VWAP;<br>the candle closes back above → buy {ENTRY:.4f}",
                   xanchor="center")
    with ch.group("position"):
        ch.position(I_ENTRY + 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips", fmt=".4f",
                    long=True)
    ch.header("Order Flow · VWAP", "VWAP — the Session's Volume-Weighted Average",
              "Synthetic EUR/USD 5-minute session (exchange time) · VWAP and ±1σ computed from price and volume",
              key=[("━", t.accent, "VWAP"), ("■", t.zone, "±1σ band")])
    ch.footnote("Synthetic candles and volume; VWAP resets each session and uses the volume of one venue")
    ch.caption()
    ticks = list(range(0, N, 6))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0838, 1.0898], y_dtick=0.0010, y_fmt=".4f",
            x_title="Session time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "VWAP Pullback", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(NAME, f"entry idx {I_ENTRY} {ENTRY} vwap {BANDS[I_ENTRY][0]:.4f} stop {STOP} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
