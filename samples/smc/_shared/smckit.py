"""Shared helpers for the SMC lessons: build synthetic candles from swing pivots, and find swings."""

import random
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "smc-charts"))

from chartkit import Candle  # noqa: E402


def from_pivots(pivots, *, seed=1, wick=0.00025, noise=0.00012, dp=4, labels=None):
    """pivots: [(index, price), ...] sorted by index. Closes move linearly between pivots; each pivot candle's high
    (for a peak) or low (for a trough) equals the pivot price exactly, and no other candle exceeds it locally."""
    rnd = random.Random(seed)
    n = pivots[-1][0] + 1
    closes = []
    for (i0, p0), (i1, p1) in zip(pivots, pivots[1:]):
        for i in range(i0, i1):
            closes.append(p0 + (p1 - p0) * (i - i0) / (i1 - i0))
    closes.append(pivots[-1][1])
    piv = dict(pivots)
    out, prev = [], closes[0]
    for i, c in enumerate(closes):
        o = prev
        c = c + (rnd.uniform(-noise, noise) if i not in piv else 0)
        h = max(o, c) + rnd.uniform(0.2, 1.0) * wick
        lo = min(o, c) - rnd.uniform(0.2, 1.0) * wick
        if i in piv:
            k = pivots.index((i, piv[i]))
            before = pivots[k - 1][1] if k else piv[i]
            after = pivots[k + 1][1] if k + 1 < len(pivots) else piv[i]
            peak = piv[i] >= max(before, after)
            if peak:
                h = piv[i]
                c = min(c, h - wick * 0.6)
                o = min(o, h - wick * 0.3)
            else:
                lo = piv[i]
                c = max(c, lo + wick * 0.6)
                o = max(o, lo + wick * 0.3)
        r = lambda v: round(v, dp)  # noqa: E731
        o, c = r(o), r(c)
        h, lo = r(max(h, o, c)), r(min(lo, o, c))
        out.append(Candle(i, labels[i] if labels else str(i), o, h, lo, c))
        prev = c
    # keep pivots as the local extremes
    for i, p in pivots:
        for j in range(max(0, i - 2), min(n, i + 3)):
            if j == i:
                continue
            cj = out[j]
            if p >= max(x[1] for x in pivots if abs(x[0] - i) <= 3) and cj.h >= p:
                out[j] = Candle(cj.t, cj.label, cj.o, round(p - wick * 0.4, dp), cj.l, cj.c)
                out[j] = _fix(out[j], dp)
            elif p <= min(x[1] for x in pivots if abs(x[0] - i) <= 3) and cj.l <= p:
                out[j] = Candle(cj.t, cj.label, cj.o, cj.h, round(p + wick * 0.4, dp), cj.c)
                out[j] = _fix(out[j], dp)
    return out


def _fix(c, dp):
    o, cl = c.o, c.c
    h = max(c.h, o, cl)
    lo = min(c.l, o, cl)
    if h < max(o, cl):
        h = max(o, cl)
    return Candle(c.t, c.label, o, round(h, dp), round(lo, dp), cl)


def swings(candles, k=2):
    """Fractal swing highs/lows with k candles each side: returns ([(i, high)], [(i, low)])."""
    hs, ls = [], []
    for i in range(k, len(candles) - k):
        win = candles[i - k:i + k + 1]
        if candles[i].h == max(c.h for c in win):
            hs.append((i, candles[i].h))
        if candles[i].l == min(c.l for c in win):
            ls.append((i, candles[i].l))
    return hs, ls


def fvgs(candles):
    """Three-candle gaps: [(i, low, high, 'bull'|'bear')] where i is the middle candle."""
    out = []
    for i in range(1, len(candles) - 1):
        a, b = candles[i - 1], candles[i + 1]
        if b.l > a.h:
            out.append((i, a.h, b.l, "bull"))
        if b.h < a.l:
            out.append((i, b.h, a.l, "bear"))
    return out
