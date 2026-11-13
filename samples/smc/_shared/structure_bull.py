"""The shared structure series mirrored around 1.0865: a downtrend that ends with a sell-side sweep and a bullish
CHOCH/MSS. Same candles, flipped; all levels asserted."""

from smckit import Candle, swings
from structure import CANDLES as BEAR, IDX, LEVELS as BEAR_LEVELS

M = 1.0865


def flip(p):
    return round(2 * M - p, 4)


CANDLES = [Candle(c.t, c.label, flip(c.o), flip(c.l), flip(c.h), flip(c.c)) for c in BEAR]
LEVELS = {k: flip(v) for k, v in BEAR_LEVELS.items()}
NAMES = {"L1": "H", "H1": "LL", "HL1": "LH", "H2": "LL", "HL2": "LH", "H3": "LL", "HL3": "LH", "H4": "sweep",
         "L5": "H", "LH": "HL", "LL": "HH"}
HIGHS, LOWS = swings(CANDLES, k=2)


def first_close(level, start, above):
    return next(c.t for c in CANDLES[start:] if (c.c > level if above else c.c < level))


MSS = first_close(LEVELS["HL3"], IDX["H4"], above=True)
BOS_UP = first_close(LEVELS["L5"], IDX["LH"], above=True)


def validate():
    assert CANDLES[IDX["H4"]].l == LEVELS["H4"] < LEVELS["H3"] < CANDLES[IDX["H4"]].c, "sell-side sweep"
    assert all(c.c <= LEVELS["HL3"] for c in CANDLES[IDX["HL3"]:MSS]) and CANDLES[MSS].c > LEVELS["HL3"]
    assert CANDLES[BOS_UP].c > LEVELS["L5"]
    for c in CANDLES:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h


validate()
