"""
Inside a hammer: twelve 5-minute candles show the fight that one 1-hour candle summarises.
Sellers push 40 pips down into support, buyers absorb it, and the hour closes above its open.

Candles: data/eurusd_5m_inside_hammer.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "inside-a-hammer"
PIP = 0.0001
M5 = load(DATA / "eurusd_5m_inside_hammer.csv", Candle, unit_label="5m candle")
N = len(M5)
H1 = Candle(N, "the 1H candle", M5[0].o, max(c.h for c in M5), min(c.l for c in M5), M5[-1].c)
X_H1 = N + 2.2
SUPPORT = (1.0820, 1.0830)
I_LOW = min(range(N), key=lambda k: M5[k].l)


def validate():
    for c in M5 + [H1]:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    body = abs(H1.c - H1.o)
    lower, upper = min(H1.o, H1.c) - H1.l, H1.h - max(H1.o, H1.c)
    assert H1.bullish and lower >= 2 * body and upper <= body, "the hour is a hammer"
    assert SUPPORT[0] <= H1.l <= SUPPORT[1], "its low is inside support"
    assert all(not M5[i].bullish for i in range(I_LOW)) and all(M5[i].bullish for i in range(I_LOW + 1, N)), \
        "sellers first, then buyers"
    assert round((H1.o - H1.l) / PIP) == 40 and round((H1.c - H1.l) / PIP) == 44


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("support"):
        ch.zone(-0.5, X_H1 + 1.0, *SUPPORT, color=t.zone, alpha=0.22)
        ch.label(-0.4, SUPPORT[0] - 0.0002, "<b>Support</b> 1.0820 – 1.0830", size=11, color=t.zone_text,
                 yanchor="top")
        ch.hline(-0.5, X_H1 + 1.0, H1.o, color=t.ink3, dash="dot")
        ch.label(6.0, H1.o - 0.0001, "hour's open 1.0862", size=10, color=t.ink3, xanchor="center",
                 yanchor="top")
    ch.candles(M5, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in M5])
    with ch.group("sellers"):
        ch.callout(2.5, 1.0844, 4.6, 1.0884, "<b>① Sellers</b> push 40 pips down<br>from the open", xanchor="center")
    with ch.group("absorb"):
        ch.callout(I_LOW, M5[I_LOW].l, I_LOW + 2.2, 1.0812, "<b>② At support</b> the selling stops:<br>"
                   "buyers absorb it at 1.0822", xanchor="left")
    with ch.group("buyers"):
        ch.callout(9.0, 1.0858, 7.6, 1.0884, "<b>③ Buyers</b> take it back<br>and close above the open",
                   xanchor="center")
    with ch.group("h1"):
        if ch.reveal.alpha("h1") > 0.3:
            ch.candles([H1], "the 1H candle", price_fmt=".4f", x=[X_H1], text=["the 1H candle"])
        ch.label(X_H1, H1.h + 0.0004, "<b>= one 1H candle</b><br>a hammer", size=12, color=t.ink, xanchor="center",
                 yanchor="bottom", align="center")
        ch.label(X_H1 + 0.6, (H1.l + H1.o) / 2, "lower wick 40 pips<br>= the rejected selling", size=10,
                 color=t.ink3)
    ch.header("Price Action · Candlestick Psychology", "Candlestick Psychology — the Fight Inside a Hammer",
              "EUR/USD · twelve 5-minute candles = one 1-hour candle at support",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Support")])
    ch.footnote("Synthetic candles built to illustrate the Candlestick Psychology lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, X_H1 + 3.2], y_range=[1.0805, 1.0895], y_dtick=0.0010, y_fmt=".4f",
            x_title="5-minute candles in one hour", x_ticks=(list(range(0, N, 2)) + [X_H1],
                                                             [f":{5 * i:02d}" for i in range(0, N, 2)] + ["1H"]))
    return ch.fig


def main():
    paths = save(NAME, build, "Inside a Hammer", OUT)
    print(f"{NAME}: 1H {H1.o} {H1.h} {H1.l} {H1.c} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
