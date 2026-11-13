"""Shared synthetic Wyckoff accumulation series (EUR/USD 4H) with volume, plus its mirror for distribution.

Events (index → price): PS 5 (1.0855), SC 10 (1.0800), AR 13 (1.0880), ST 17 (1.0812), Spring 30 (1.0792),
Test 33 (1.0814), SOS 37 (break above 1.0880), LPS 40 (1.0872), markup to 1.0960.
"""

from smckit import Candle, from_pivots

PIVOTS = [(0, 1.0960), (5, 1.0855), (7, 1.0880), (10, 1.0800), (13, 1.0880), (17, 1.0812), (21, 1.0866),
          (24, 1.0818), (27, 1.0870), (30, 1.0792), (31, 1.0828), (33, 1.0814), (37, 1.0898), (40, 1.0872),
          (46, 1.0960)]
EVENTS = {"PS": 5, "SC": 10, "AR": 13, "ST": 17, "Spring": 30, "Test": 33, "SOS": 37, "LPS": 40}
RANGE = (1.0800, 1.0880)
VOLUME_HINT = {5: 230, 9: 260, 10: 340, 11: 220, 13: 190, 17: 150, 24: 120, 30: 95, 33: 70, 35: 180, 36: 230,
               37: 280, 40: 110}


def _clamp(candles):
    """Make each pivot the strict local extreme within ±3 candles, keeping OHLC consistent."""
    out = list(candles)
    pivot_idx = {i for i, _ in PIVOTS}
    for k, (i, p) in enumerate(PIVOTS):
        before = PIVOTS[k - 1][1] if k else p
        after = PIVOTS[k + 1][1] if k + 1 < len(PIVOTS) else p
        low = p <= min(before, after)
        for j in range(max(0, i - 3), min(len(out), i + 4)):
            c = out[j]
            if j == i:
                if low:
                    out[j] = Candle(c.t, c.label, max(c.o, p), max(c.h, p), p, max(c.c, p))
                else:
                    out[j] = Candle(c.t, c.label, min(c.o, p), p, min(c.l, p), min(c.c, p))
                continue
            if j in pivot_idx:
                continue
            if low and c.l <= p:
                lo = round(p + 0.0003, 4)
                out[j] = Candle(c.t, c.label, max(c.o, lo), max(c.h, lo), lo, max(c.c, lo))
            elif not low and c.h >= p:
                hi = round(p - 0.0003, 4)
                out[j] = Candle(c.t, c.label, min(c.o, hi), hi, min(c.l, hi), min(c.c, hi))
    return out


def accumulation():
    candles = _clamp(from_pivots(PIVOTS, seed=21, wick=0.0006, noise=0.0004))
    # the spring closes back inside the range
    s, n = candles[30], candles[31]
    candles[30] = Candle(s.t, s.label, s.o, max(s.h, 1.0808), s.l, 1.0808)
    candles[31] = Candle(n.t, n.label, 1.0808, max(n.h, 1.0808), min(n.l, 1.0808), n.c)
    vol = [VOLUME_HINT.get(i, 140 if i < 10 else 110 if i < 37 else 160) for i in range(len(candles))]
    return candles, vol


def distribution():
    """The accumulation series mirrored around 1.0880: a Wyckoff distribution with a UTAD."""
    m = 1.0880
    f = lambda p: round(2 * m - p, 4)  # noqa: E731
    candles, vol = accumulation()
    return [Candle(c.t, c.label, f(c.o), f(c.l), f(c.h), f(c.c)) for c in candles], vol
