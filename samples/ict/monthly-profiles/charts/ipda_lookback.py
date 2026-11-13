"""
IPDA look-back ranges — 20, 40 and 60 trading days on daily candles.

Source: content/en/ict/monthly-profiles.mdx -> "Monthly IPDA Mapping". Candles are a synthetic random walk (fixed seed).
"""

import random

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "ipda-lookback-ranges"
N = 64


def make_candles():
    rnd = random.Random(11)
    price, out = 1.0850, []
    drift = [-0.0011] * 22 + [0.0018] * 15 + [-0.0016] * 13 + [0.0007] * 14
    for i in range(N):
        o = price
        c = round(o + drift[i] + rnd.uniform(-0.0014, 0.0014), 4)
        h = round(max(o, c) + rnd.uniform(0.0003, 0.0018), 4)
        l = round(min(o, c) - rnd.uniform(0.0003, 0.0018), 4)
        out.append(Candle(i, f"day {i - N + 1}", o, h, l, c))
        price = c
    return out


CANDLES = make_candles()
LOOKBACKS = {}
for days in (20, 40, 60):
    window = CANDLES[N - days:]
    LOOKBACKS[days] = (N - days, min(c.l for c in window), max(c.h for c in window))
LAST = CANDLES[-1].c


def validate():
    (_, l20, h20), (_, l40, h40), (_, l60, h60) = (LOOKBACKS[d] for d in (20, 40, 60))
    assert l60 < l40 <= l20 < LAST < h20 < h40 <= h60, "the ranges nest; a longer look-back adds extremes"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    colors = {20: t.accent, 40: t.ink2, 60: t.ink3}
    for i, days in enumerate((60, 40, 20)):
        start, lo, hi = LOOKBACKS[days]
        with ch.group(f"r{days}"):
            ch.zone(start - 0.5, N + 2.5, lo, hi, color=colors[days], alpha=0.05 + 0.02 * i, dash="dot")
            for lvl, kind in ((hi, "high"), (lo, "low")):
                same = [d for d in (20, 40, 60) if LOOKBACKS[d][1 if kind == "low" else 2] == lvl]
                if days == same[0]:
                    ch.label(N + 2.6, lvl, f"<b>{'/'.join(f'{d}d' for d in same)} {kind}</b> {lvl:.4f}", size=11,
                             color=colors[days])
            ch.label(start - 0.4, hi + 0.0004, f"← {days} trading days", size=11, color=colors[days],
                     yanchor="bottom")
    ch.candles(CANDLES, "EUR/USD daily (synthetic)", price_fmt=".4f", x=list(range(N)),
               text=[c.label for c in CANDLES])
    ch.fig.add_vline(x=N - 0.5, line=dict(color=t.accent, width=1.2, dash="dot"))
    ch.label(N - 0.4, CANDLES[-1].h + 0.0030, "<b>today</b>", size=12, color=t.accent)
    ch.header("ICT · Monthly Profiles", "IPDA Look-Back — the 20, 40 and 60-Day Ranges",
              "Daily candles · the highs and lows of the last 20, 40 and 60 trading days are the nearest targets "
              "for the coming weeks", key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles (random walk) to illustrate the ICT Monthly Profiles lesson")
    ch.caption()
    lo = min(c.l for c in CANDLES) - 0.0020
    hi = max(c.h for c in CANDLES) + 0.0030
    ch.axes(x_range=[-1, N + 9], y_range=[lo, hi], y_dtick=0.0050, y_fmt=".4f", x_title="Trading days",
            x_ticks=([N - 60, N - 40, N - 20, N - 1], ["−60", "−40", "−20", "today"]))
    return ch.fig


def main():
    paths = save(NAME, build, "IPDA Look-Back", OUT)
    for d, (_, lo, hi) in LOOKBACKS.items():
        print(f"{d}d: {lo:.4f} – {hi:.4f}")
    print(f"{NAME}: last {LAST:.4f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
