"""
A gallery of single candles (and one two-candle pattern), each built to its textbook rule and checked:
anatomy of a bullish candle, bearish, doji, marubozu, spinning top, hammer, shooting star, bullish engulfing.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "candlestick-gallery"
# (x, name, o, h, l, c)
SPEC = [
    (0, "Bullish", 1.0820, 1.0862, 1.0810, 1.0852),
    (2.4, "Bearish", 1.0852, 1.0860, 1.0812, 1.0822),
    (4.8, "Doji", 1.0836, 1.0856, 1.0816, 1.0837),
    (7.2, "Marubozu", 1.0812, 1.0863, 1.0811, 1.0862),
    (9.6, "Spinning top", 1.0834, 1.0856, 1.0814, 1.0840),
    (12.0, "Hammer", 1.0846, 1.0852, 1.0812, 1.0850),
    (14.4, "Shooting star", 1.0824, 1.0860, 1.0818, 1.0820),
    (16.8, "", 1.0840, 1.0844, 1.0828, 1.0832),
    (17.8, "Bullish engulfing", 1.0830, 1.0858, 1.0826, 1.0854),
]
C = [Candle(i, name or "Bearish (before engulfing)", o, h, l, c) for i, (_, name, o, h, l, c) in enumerate(SPEC)]
X = [x for x, *_ in SPEC]
PIP = 0.0001


def body(c):
    return abs(c.c - c.o)


def upper(c):
    return c.h - max(c.o, c.c)


def lower(c):
    return min(c.o, c.c) - c.l


def rng(c):
    return c.h - c.l


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    bull, bear, doji, maru, spin, ham, star, prev, eng = C
    assert bull.bullish and not bear.bullish
    assert body(doji) <= 0.1 * rng(doji), "doji: open ≈ close"
    assert body(maru) >= 0.95 * rng(maru), "marubozu: almost no wicks"
    assert body(spin) <= 0.35 * rng(spin) and upper(spin) > body(spin) and lower(spin) > body(spin), "spinning top"
    assert lower(ham) >= 2 * body(ham) and upper(ham) <= body(ham), "hammer: lower wick ≥ 2× body"
    assert upper(star) >= 2 * body(star) and lower(star) <= body(star), "shooting star: upper wick ≥ 2× body"
    assert not prev.bullish and eng.bullish and eng.o <= prev.c and eng.c >= prev.o, "engulfing body"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    ch.candles(C, "Candles", price_fmt=".4f", x=X, text=[c.label for c in C])
    b = C[0]
    with ch.group("anatomy"):
        for y, text, ax in ((b.h, "High 1.0862", 1.1), (b.c, "Close 1.0852", 1.1), (b.o, "Open 1.0820", 1.1),
                            (b.l, "Low 1.0810", 1.1)):
            ch.callout(-0.1, y, -0.9, y, text, xanchor="right")
        ch.label(0.4, (b.o + b.c) / 2, "body", size=11, color=t.ink3)
        ch.label(0.4, (b.c + b.h) / 2, "upper wick", size=11, color=t.ink3)
        ch.label(0.4, (b.l + b.o) / 2, "lower wick", size=11, color=t.ink3)
    notes = {
        1: "close < open",
        2: "open ≈ close<br>indecision",
        3: "almost no wicks<br>one side in control",
        4: "small body,<br>wicks both sides",
        5: "lower wick ≥ 2× body<br>lower prices rejected",
        6: "upper wick ≥ 2× body<br>higher prices rejected",
        8: "body covers the<br>previous body",
    }
    for i, c in enumerate(C):
        if not SPEC[i][1]:
            continue
        with ch.group(f"c{i}"):
            ch.label(X[i] - (0.5 if i == 8 else 0), 1.0800, f"<b>{SPEC[i][1]}</b>", size=12, color=t.ink,
                     xanchor="center", yanchor="top")
            if i in notes:
                ch.label(X[i] - (0.5 if i == 8 else 0), 1.0795, notes[i], size=10, color=t.ink3, xanchor="center",
                         yanchor="top", align="center")
    ch.header("Price Action · Candlestick Basics", "Candlestick Basics — Read the Body and the Wicks",
              "Each candle is built to its textbook rule · body = open to close · wicks = high and low",
              key=[("▮", t.bull, "Close above open"), ("▮", t.bear, "Close below open")])
    ch.footnote("Illustrative candles, not real prices")
    ch.caption()
    ch.axes(x_range=[-3.4, 19.4], y_range=[1.0786, 1.0870], y_dtick=0.0010, y_fmt=".4f", x_title="",
            x_ticks=([], []))
    return ch.fig


def main():
    paths = save(NAME, build, "Candlestick Gallery", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
