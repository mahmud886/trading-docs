"""Load the shared structure series and its key levels (all asserted)."""

import csv
from pathlib import Path

from smckit import Candle, swings

CSV = Path(__file__).with_name("eurusd_1h_structure.csv")


def load():
    with CSV.open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"hour {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


CANDLES = load()
HIGHS, LOWS = swings(CANDLES, k=2)
LEVELS = {"L1": 1.0800, "H1": 1.0850, "HL1": 1.0822, "H2": 1.0890, "HL2": 1.0862, "H3": 1.0925, "HL3": 1.0900,
          "H4": 1.0930, "L5": 1.0868, "LH": 1.0905, "LL": 1.0850}
IDX = {"L1": 2, "H1": 6, "HL1": 9, "H2": 14, "HL2": 17, "H3": 22, "HL3": 25, "H4": 27, "L5": 33, "LH": 36, "LL": 41}


def first_close_beyond(level, start, above=True):
    for c in CANDLES[start:]:
        if (c.c > level) if above else (c.c < level):
            return c.t
    raise AssertionError(f"no close beyond {level}")


BOS1 = first_close_beyond(LEVELS["H1"], IDX["HL1"])
BOS2 = first_close_beyond(LEVELS["H2"], IDX["HL2"])
BOS3 = first_close_beyond(LEVELS["H3"], IDX["HL3"]) if any(c.c > LEVELS["H3"] for c in CANDLES[25:28]) else None
CHOCH = first_close_beyond(LEVELS["HL3"], IDX["H4"], above=False)
BOS_DN = first_close_beyond(LEVELS["L5"], IDX["LH"], above=False)


def validate():
    c = CANDLES
    for name, i in IDX.items():
        p = LEVELS[name]
        if name.startswith("H") and not name.startswith("HL") or name == "LH":
            assert c[i].h == p, (name, c[i].h)
        else:
            assert c[i].l == p, (name, c[i].l)
    assert IDX["H1"] < BOS1 < IDX["H2"] and IDX["H2"] < BOS2 < IDX["H3"]
    assert IDX["H4"] < CHOCH < IDX["L5"] and IDX["LH"] < BOS_DN <= IDX["LL"]
    assert c[IDX["H4"]].c < LEVELS["H3"], "the 1.0930 high is a sweep: it closes back under 1.0925"


validate()
