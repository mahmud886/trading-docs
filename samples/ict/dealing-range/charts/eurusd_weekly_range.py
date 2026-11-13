"""
Dealing range map — EUR/USD, daily candles inside the weekly dealing range.

Source: content/en/ict/dealing-range.mdx -> "Example 1: EUR/USD — Buying in Discount" (macro context: weekly range
1.0750–1.0950, equilibrium 1.0850, price 1.0780 in discount) and "Fibonacci Overlay" (25 / 50 / 75 %, OTE 62–79 %).
Candles in data/eurusd_1d_weekly_range.csv are synthetic.
"""

from _paths import DATA, OUT
from chartkit import Chart, Reveal, load_candles, save

NAME = "eurusd-dealing-range-map"
LOW, HIGH = 1.0750, 1.0950
EQ = (LOW + HIGH) / 2
PRICE = 1.0780


def level(pct):
    return LOW + (HIGH - LOW) * pct


CANDLES = load_candles("eurusd_1d_weekly_range", DATA)


def validate(candles):
    assert max(c.h for c in candles) == HIGH and min(c.l for c in candles) == LOW, "range extremes"
    assert abs(EQ - 1.0850) < 1e-9 and candles[-1].c == PRICE < EQ, "price closes in discount"
    i_high = max(range(len(candles)), key=lambda i: candles[i].h)
    i_low = min(range(len(candles)), key=lambda i: candles[i].l)
    assert i_high < i_low, "the high formed first, then the low: a down-leg range"


validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(CANDLES)
    x0, x1 = -0.6, n + 4.2

    ch.zone(x0, x1, EQ, HIGH, color=t.bear, alpha=0.07, border=False)
    ch.zone(x0, x1, LOW, EQ, color=t.bull, alpha=0.07, border=False)
    ch.zone(x0, x1, level(0.62), level(0.79), color=t.bear, alpha=0.12, border=False)
    ch.zone(x0, x1, level(0.21), level(0.38), color=t.bull, alpha=0.12, border=False)
    for pct, dash, width in ((0.0, "solid", 1.4), (0.25, "dot", 1.0), (0.5, "dash", 1.6), (0.75, "dot", 1.0),
                             (1.0, "solid", 1.4)):
        ch.hline(x0, x1, level(pct), color=t.ink if pct == 0.5 else t.ink3, width=width, dash=dash)
    ch.candles(CANDLES, "EUR/USD 1D (synthetic)", price_fmt=".4f", x=list(range(n)),
               text=[f"Day {i + 1}" for i in range(n)])

    lx = n + 4.0
    for y, txt, color in ((HIGH, "<b>100 % · range high 1.0950</b> · BSL", t.bull_text),
                          (level(0.79), "OTE for sells 62–79 %", t.bear_text),
                          (level(0.75), "75 %", t.ink3),
                          (EQ, "<b>50 % · equilibrium 1.0850</b>", t.ink),
                          (level(0.25), "25 %", t.ink3),
                          (level(0.38), "OTE for buys 21–38 %", t.bull_text),
                          (LOW, "<b>0 % · range low 1.0750</b> · SSL", t.bear_text)):
        ch.label(lx, y, txt, size=12, color=color, xanchor="right", yanchor="bottom", yshift=2)
    ch.label(11.5, HIGH - 8 * 0.0001, "<b>PREMIUM</b> · look for sells", size=13, color=t.bear_text, yanchor="top")
    ch.label(0, EQ - 8 * 0.0001, "<b>DISCOUNT</b> · look for buys", size=13, color=t.bull_text, yanchor="top")
    ch.price_tag(PRICE, f"{PRICE:.4f}", t.accent, ink=t.tag_ink)
    ch.callout(n - 1, PRICE - 0.0004, n - 5.5, 1.0758,
               f"<b>Now 1.0780</b> — 35 % of the range: <b style='color:{t.bull_text}'>discount</b>",
               xanchor="center", yanchor="middle")

    ch.header("ICT · Dealing Range", "The Dealing Range — Premium, Discount and Equilibrium",
              "EUR/USD · daily candles · weekly dealing range 1.0750 – 1.0950",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "Premium"),
                   ("■", t.bull, "Discount")])
    ch.footnote("Synthetic candles built around the levels in the ICT Dealing Range lesson")
    ticks = [0, 4, 9, 14, 19]
    ch.axes(x_range=[x0, x1], y_range=[1.0735, 1.0965], y_dtick=0.0025, y_fmt=".4f",
            x_title="Trading days (daily candles)", x_ticks=(ticks, [f"Day {i + 1}" for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Dealing Range", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
