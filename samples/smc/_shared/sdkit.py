"""Supply/demand helpers shared by the SMC supply & demand lessons."""

import csv


def load(path, Candle, unit_label="hour"):
    with path.open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"{unit_label} {int(r['i']) + 1}", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


def is_base(c, ratio=0.5):
    """A base candle: body no more than half its range."""
    return abs(c.c - c.o) <= ratio * (c.h - c.l)


def is_leg(c, ratio=0.6):
    """A leg (explosive) candle: body at least 60% of its range."""
    return abs(c.c - c.o) >= ratio * (c.h - c.l)


def demand_zone(base):
    """Proximal = highest body of the base, distal = lowest wick."""
    return max(max(c.o, c.c) for c in base), min(c.l for c in base)


def supply_zone(base):
    """Proximal = lowest body of the base, distal = highest wick."""
    return min(min(c.o, c.c) for c in base), max(c.h for c in base)
