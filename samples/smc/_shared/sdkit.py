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


def from_closes(closes, start, *, up=(0.0003, 0.0001), down=(0.0001, 0.0003), override=None, dp=4):
    """Rows (o, h, l, c) from a close path: open = previous close; wicks (upper, lower) depend on the candle's
    direction, so a candle that closes at a turn makes the swing. override: {i: dict(h=..., l=...)}."""
    rows, prev = [], start
    for i, c in enumerate(closes):
        wu, wl = up if c > prev else down
        h, lo = max(prev, c) + wu, min(prev, c) - wl
        o = {"h": h, "l": lo, **(override or {}).get(i, {})}
        rows.append(tuple(round(v, dp) for v in (prev, o["h"], o["l"], c)))
        prev = c
    return rows


def write_rows(path, rows, title, dp=4):
    import csv as _csv
    with path.open("w", newline="\n") as f:
        f.write(f"# {title} (not real prices)\n")
        w = _csv.writer(f, lineterminator="\n")
        w.writerow(["i", "open", "high", "low", "close"])
        for k, r in enumerate(rows):
            w.writerow([k, *(f"{v:.{dp}f}" for v in r)])
