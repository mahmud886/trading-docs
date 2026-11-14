"""Order-flow helpers: volume profile from candles, value area, and VWAP with standard-deviation bands."""

import math


def volume_profile(candles, volumes, tick):
    """Spread each candle's volume evenly over the price ticks between its low and high. Returns {price: volume}."""
    prof = {}
    for c, v in zip(candles, volumes):
        lo, hi = round(c.l / tick), round(c.h / tick)
        n = hi - lo + 1
        for k in range(lo, hi + 1):
            p = round(k * tick, 8)
            prof[p] = prof.get(p, 0.0) + v / n
    return prof


def value_area(profile, pct=0.70):
    """(poc, val, vah): the price of maximum volume and the contiguous area around it holding `pct` of the volume."""
    prices = sorted(profile)
    total = sum(profile.values())
    poc = max(prices, key=lambda p: profile[p])
    i = j = prices.index(poc)
    got = profile[poc]
    while got < pct * total and (i > 0 or j < len(prices) - 1):
        up = profile[prices[j + 1]] if j < len(prices) - 1 else -1
        dn = profile[prices[i - 1]] if i > 0 else -1
        if up >= dn:
            j += 1
            got += profile[prices[j]]
        else:
            i -= 1
            got += profile[prices[i]]
    return poc, prices[i], prices[j]


def vwap_bands(candles, volumes, k=1.0):
    """Cumulative VWAP using typical price, with ±k volume-weighted standard deviation bands."""
    cum_v = cum_pv = cum_p2v = 0.0
    out = []
    for c, v in zip(candles, volumes):
        tp = (c.h + c.l + c.c) / 3
        cum_v += v
        cum_pv += tp * v
        cum_p2v += tp * tp * v
        vw = cum_pv / cum_v
        sd = math.sqrt(max(cum_p2v / cum_v - vw * vw, 0.0))
        out.append((vw, vw + k * sd, vw - k * sd))
    return out
