"""
Building a daily bias — EUR/USD daily candles, three weeks.

Source: content/en/ict/daily-bias.mdx -> "Example 1: Bullish Bias Day on EUR/USD" (weekly in discount making a higher
low; previous daily candle opened 1.0870, dipped to 1.0845, closed 1.0895; draw = buy-side liquidity at the previous
week's high, 1.0950; today is Wednesday). Candles are synthetic.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "eurusd-daily-bias"
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
OHLC = [
    (1.0960, 1.1000, 1.0945, 1.0985), (1.0985, 1.0990, 1.0920, 1.0930), (1.0930, 1.0940, 1.0870, 1.0880),
    (1.0880, 1.0895, 1.0840, 1.0850), (1.0850, 1.0865, 1.0815, 1.0825),
    (1.0825, 1.0840, 1.0800, 1.0832), (1.0832, 1.0880, 1.0826, 1.0874), (1.0874, 1.0925, 1.0868, 1.0918),
    (1.0918, 1.0950, 1.0905, 1.0935), (1.0935, 1.0942, 1.0880, 1.0888),
    (1.0888, 1.0895, 1.0860, 1.0870), (1.0870, 1.0899, 1.0845, 1.0895),
]
CANDLES = [Candle(i, DAYS[i % 5], *v) for i, v in enumerate(OHLC)]
TICKS = [f"{DAYS[i % 5]}<br><span style='font-size:10px'>wk {i // 5 + 1}</span>" for i in range(13)]
HIGH, LOW, DRAW, TODAY = 1.1000, 1.0800, 1.0950, 12
EQ = (HIGH + LOW) / 2


def validate():
    assert max(c.h for c in CANDLES) == HIGH == CANDLES[0].h and min(c.l for c in CANDLES) == LOW
    y = CANDLES[-1]
    assert (y.o, y.l, y.c) == (1.0870, 1.0845, 1.0895) and y.bullish, "yesterday: bullish PO3 candle"
    assert y.o - y.l > 0.00249 and y.h - y.c < 0.00051, "long lower wick, close near the high"
    assert y.l > LOW, "higher low"
    assert max(c.h for c in CANDLES[5:10]) == DRAW and all(c.h < DRAW for c in CANDLES[10:]), "untouched draw"
    assert y.c < EQ, "still in discount"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("range"):
        ch.zone(-0.5, 12.6, LOW, EQ, color=t.bull, alpha=0.05, border=False)
        ch.zone(-0.5, 12.6, EQ, HIGH, color=t.bear, alpha=0.05, border=False)
        ch.hline(-0.5, 12.6, EQ, color=t.ink3, dash="dash")
        ch.label(-0.45, EQ + 0.0004, "Equilibrium 50% · 1.0900", size=12, yanchor="bottom")
        ch.label(-0.45, HIGH - 0.0004, "<b>Premium</b> — sell zone", size=12, color=t.bear_text, yanchor="top")
        ch.label(-0.45, LOW + 0.0004, "<b>Discount</b> — buy zone", size=12, color=t.bull_text, yanchor="bottom")
    for x in (4.5, 9.5):
        ch.fig.add_vline(x=x, line=dict(color=t.axis, width=1, dash="dot"))
    ch.candles(CANDLES, "EUR/USD daily (synthetic)", price_fmt=".4f", x=list(range(12)))
    with ch.group("hl"):
        ch.callout(11, 1.0845, 9.3, 1.0818, "<b>① Structure</b>: higher low at 1.0845<br>above the 1.0800 low, in "
                   "discount", xanchor="center")
    with ch.group("po3"):
        ch.callout(11, 1.0897, 11.0, 1.0985, "<b>② Yesterday</b>: opened 1.0870, dipped to 1.0845,<br>closed "
                   "1.0895 — a bullish PO3 candle", xanchor="right")
    with ch.group("draw"):
        ch.hline(8, 12.6, DRAW, color=t.bull_text, width=1.4)
        ch.callout(8, DRAW, 6.4, 1.0972, "<b>③ Draw</b>: last week's high 1.0950<br>— buy-side liquidity, untouched",
                   xanchor="center")
    with ch.group("today"):
        ch.fig.add_vrect(x0=11.6, x1=12.6, fillcolor=t.accent, opacity=0.08 * ch.reveal.alpha("today"),
                         line_width=0, layer="below")
        ch.label(12.0, 1.0812, f"<b style='color:{t.accent}'>④ Today</b><br>Wednesday<br><b>Bias: bullish</b><br>"
                 "buys only", size=12, xanchor="center", align="center", yanchor="bottom")
        ch.projection(12.0, 1.0897, 12.0, DRAW - 0.0004, "", 12.0, DRAW)
    ch.header("ICT · Daily Bias", "Daily Bias — Four Questions Before the Session",
              "EUR/USD · daily candles · structure → yesterday's candle → draw on liquidity → today's plan",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles built around the levels in the ICT Daily Bias lesson")
    ch.caption()
    ch.axes(x_range=[-0.7, 12.8], y_range=[1.0785, 1.1010], y_dtick=0.0025, y_fmt=".4f", x_title="",
            x_ticks=(list(range(13)), TICKS))
    return ch.fig


def main():
    paths = save(NAME, build, "Daily Bias", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
