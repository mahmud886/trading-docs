"""
Expiry pinning — a synthetic ETF on hourly candles: Thursday, expiry Friday, and the following Monday.

Source: content/en/ict/options-expiry-pinning.mdx (rewritten). Candles and open interest are made up.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "expiry-pinning"
STRIKES = {445.0: "puts 38k", 450.0: "calls 52k · puts 47k", 455.0: "calls 41k"}
PIN = 450.0
OHLC = [
    # Thursday
    (447.2, 448.6, 446.8, 448.3), (448.3, 449.9, 447.9, 449.6), (449.6, 451.4, 449.2, 451.0),
    (451.0, 451.8, 449.9, 450.3), (450.3, 450.9, 448.7, 449.0), (449.0, 450.2, 448.4, 449.9),
    (449.9, 451.2, 449.5, 450.8),
    # Friday (expiry)
    (450.8, 452.1, 450.4, 451.6), (451.6, 451.9, 450.0, 450.4), (450.4, 450.8, 449.1, 449.5),
    (449.5, 450.6, 449.2, 450.4), (450.4, 450.9, 449.7, 449.9), (449.9, 450.4, 449.6, 450.2),
    (450.2, 450.4, 449.8, 450.1),
    # Monday
    (450.6, 452.4, 450.4, 452.1), (452.1, 454.0, 451.8, 453.7), (453.7, 455.6, 453.2, 455.2),
    (455.2, 456.3, 454.6, 455.9),
]
CANDLES = [Candle(i, ["Thu", "Fri", "Mon"][0 if i < 7 else 1 if i < 14 else 2], *v) for i, v in enumerate(OHLC)]


def validate():
    fri = CANDLES[7:14]
    assert abs(fri[-1].c - PIN) < 0.25, "Friday closes near the big strike"
    ranges = [c.h - c.l for c in fri]
    assert ranges[-1] < ranges[0] / 2, "the range narrows into the close"
    assert CANDLES[-1].c - PIN > 4, "after expiry, price moves away"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(CANDLES)
    with ch.group("strikes"):
        for k, label in STRIKES.items():
            ch.hline(-0.5, n - 0.5, k, color=t.accent if k == PIN else t.ink3, width=1.6 if k == PIN else 1.0)
            ch.label(-0.45, k + 0.15, f"<b>{k:g}</b> · {label}", size=11,
                     color=t.accent if k == PIN else t.ink3, yanchor="bottom")
    for x in (6.5, 13.5):
        ch.fig.add_vline(x=x, line=dict(color=t.axis, width=1, dash="dot"))
    ch.candles(CANDLES, "ETF 1H (synthetic)", price_fmt=".2f", x=list(range(n)), text=[c.label for c in CANDLES])
    with ch.group("pin"):
        ch.callout(13, 450.1, 10.0, 446.3, "<b>Friday</b>: ranges shrink and price<br>closes at 450.10 — the pin",
                   xanchor="center")
    with ch.group("release"):
        ch.callout(16, 455.4, 13.0, 456.8, "<b>Monday</b>: the expired options are gone —<br>price is free to move",
                   xanchor="right")
    ch.header("Options · Expiry Pinning", "Expiry Pinning — Price Sticks to the Big Strike, Then Lets Go",
              "Synthetic ETF · hourly candles · Thursday, expiry Friday, Monday · made-up open interest",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles and open interest built to illustrate the Expiry Pinning lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n - 0.2], y_range=[444.0, 457.5], y_dtick=1, y_fmt=".0f", x_title="",
            x_ticks=([3, 10, 15.5], ["Thursday", "Friday (expiry)", "Monday"]))
    return ch.fig


def main():
    paths = save(NAME, build, "Expiry Pinning", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
