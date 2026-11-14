"""
Volume spread analysis on synthetic daily candles: stopping volume after a decline, a quiet test, a no-demand bar in the
rally and a no-supply bar in the pullback. Each signal is labelled with its measured volume, spread and close position.

Candles: data/vsa_daily.csv (synthetic, with volume).
"""

from _paths import DATA, OUT
from chartkit import Reveal, save
from volkit import load_ohlcv, price_volume

NAME = "vsa-signals"
C, V = load_ohlcv(DATA / "vsa_daily.csv", "day")
N = len(C)
STOP, TEST, NODEM, NOSUP = 7, 9, 15, 18
AVG_V = sum(V[:20]) / 20
AVG_S = sum(c.h - c.l for c in C[:20]) / 20
spread = lambda i: C[i].h - C[i].l
closepos = lambda i: (C[i].c - C[i].l) / (C[i].h - C[i].l)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[STOP].c < C[0].c - 8, "stopping volume comes after a decline"
    assert V[STOP] >= 2 * AVG_V and spread(STOP) > 1.5 * AVG_S and closepos(STOP) >= 0.5, "stopping volume"
    assert V[TEST] < 0.5 * AVG_V and spread(TEST) < 0.6 * AVG_S and C[TEST].l > C[STOP].l, "test: quiet, narrow, higher low"
    assert C[NODEM].c > C[NODEM].o and spread(NODEM) < 0.6 * AVG_S and V[NODEM] < min(V[NODEM - 1], V[NODEM - 2]), "no demand"
    assert C[NOSUP].c < C[NOSUP].o and spread(NOSUP) < 0.6 * AVG_S and V[NOSUP] < min(V[NOSUP - 1], V[NOSUP - 2]), "no supply"


validate()


def build(t, reveal: Reveal | None = None):
    fig, ch = price_volume(t, reveal, C, V, x_range=(-1, N + 0.5), price_range=(86.5, 111), price_fmt=".0f",
                           vol_max=4200, vol_dtick=1000, name="Synthetic daily")
    notes = {
        "stop": (STOP, "<b>Stopping volume</b><br>volume {v:.1f}× avg · wide spread<br>closes in the upper {u:.0f}% of the bar",
                 "below", t.bull_text),
        "test": (TEST, "<b>Test</b><br>volume {v:.1f}× avg · narrow spread<br>higher low than the climax", "below", t.bull_text),
        "nodem": (NODEM, "<b>No demand</b><br>up bar · narrow spread<br>volume {v:.1f}× avg, below both prior bars",
                  "above", t.bear_text),
        "nosup": (NOSUP, "<b>No supply</b><br>down bar · narrow spread<br>volume {v:.1f}× avg, below both prior bars",
                  "below", t.bull_text),
    }
    for key, (i, text, side, col) in notes.items():
        with ch.group(key):
            msg = text.format(v=V[i] / AVG_V, u=(1 - closepos(i)) * 100 if key == "stop" else 0)
            if key == "stop":
                msg = text.format(v=V[i] / AVG_V, u=closepos(i) * 100)
            y = C[i].h + 0.9 if side == "above" else C[i].l - 0.9
            ch.label(i, y, msg, size=11, color=col, xanchor="center", yanchor="bottom" if side == "above" else "top",
                     align="center", row=1, col=1)
    with ch.group("avg"):
        ch.label(N - 0.4, 109.5, f"20-bar average: volume {AVG_V:,.0f} · spread {AVG_S:.1f}", size=11, color=t.ink3,
                 xanchor="right", yanchor="top", row=1, col=1)
    ch.header("Wyckoff · Volume Spread Analysis", "Volume, Spread and Close — Reading One Bar Against Its Neighbours",
              "Synthetic daily candles and volume · stopping volume, a test, a no-demand bar and a no-supply bar",
              key=[("▮", t.bull, "Up candle / volume"), ("▮", t.bear, "Down candle / volume")])
    ch.footnote("Synthetic data; VSA signals are clues to be read in context, and tick volume in forex is a weaker input")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "VSA Signals", OUT)
    print(NAME, f"avgV {AVG_V:.0f} avgS {AVG_S:.2f}", [round(V[i] / AVG_V, 2) for i in (STOP, TEST, NODEM, NOSUP)],
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
