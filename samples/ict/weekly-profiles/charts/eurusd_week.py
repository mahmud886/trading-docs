"""
A Tuesday-low week — EUR/USD, 4-hour candles.

Source: content/en/ict/weekly-profiles.mdx -> "Real Example: EUR/USD Week" (Monday opens 1.0900 and ranges
1.0890–1.0915; Tuesday drops to 1.0870; 4H bullish MSS around 1.0880; Wednesday rallies to 1.0960; Thursday retraces to
1.0930; Friday closes 1.0945). Candles are synthetic.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "eurusd-weekly-profile"
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
OHLC = [
    (1.0900, 1.0908, 1.0893, 1.0904), (1.0904, 1.0915, 1.0900, 1.0911), (1.0911, 1.0913, 1.0896, 1.0899),
    (1.0899, 1.0906, 1.0890, 1.0902), (1.0902, 1.0910, 1.0897, 1.0907), (1.0907, 1.0911, 1.0898, 1.0901),
    (1.0901, 1.0904, 1.0886, 1.0889), (1.0889, 1.0892, 1.0870, 1.0874), (1.0874, 1.0880, 1.0871, 1.0876),
    (1.0876, 1.0893, 1.0875, 1.0890), (1.0890, 1.0896, 1.0884, 1.0893), (1.0893, 1.0899, 1.0887, 1.0896),
    (1.0896, 1.0910, 1.0892, 1.0907), (1.0907, 1.0925, 1.0904, 1.0922), (1.0922, 1.0935, 1.0917, 1.0931),
    (1.0931, 1.0950, 1.0928, 1.0946), (1.0946, 1.0960, 1.0941, 1.0955), (1.0955, 1.0958, 1.0946, 1.0950),
    (1.0950, 1.0954, 1.0940, 1.0943), (1.0943, 1.0947, 1.0933, 1.0936), (1.0936, 1.0942, 1.0930, 1.0939),
    (1.0939, 1.0948, 1.0935, 1.0944), (1.0944, 1.0950, 1.0938, 1.0941), (1.0941, 1.0946, 1.0936, 1.0942),
    (1.0942, 1.0949, 1.0938, 1.0946), (1.0946, 1.0952, 1.0941, 1.0944), (1.0944, 1.0950, 1.0939, 1.0948),
    (1.0948, 1.0953, 1.0942, 1.0945),
]
CANDLES = [Candle(i, f"{DAYS[min(i // 6, 4)]} {i % 6 * 4:02d}h", *v) for i, v in enumerate(OHLC)]
MON_LOW, MON_HIGH, WEEK_LOW, SWING, DRAW, THU_LOW = 1.0890, 1.0915, 1.0870, 1.0880, 1.0960, 1.0930
I_LOW, I_MSS = 7, 9


def validate():
    mon = CANDLES[:6]
    assert (min(c.l for c in mon), max(c.h for c in mon), mon[0].o) == (MON_LOW, MON_HIGH, 1.0900)
    assert CANDLES[I_LOW].l == WEEK_LOW == min(c.l for c in CANDLES), "Tuesday makes the week's low"
    assert CANDLES[I_LOW + 1].h == SWING and CANDLES[I_MSS].c > SWING and CANDLES[I_MSS].bullish, "4H MSS"
    assert max(c.h for c in CANDLES) == DRAW == max(c.h for c in CANDLES[12:18]), "Wednesday reaches the draw"
    assert min(c.l for c in CANDLES[18:24]) == THU_LOW and CANDLES[-1].c == 1.0945


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(CANDLES)
    for x in (5.5, 11.5, 17.5, 23.5):
        ch.fig.add_vline(x=x, line=dict(color=t.axis, width=1, dash="dot"))
    with ch.group("draw"):
        ch.hline(-0.5, n - 0.5, DRAW, color=t.bull_text, width=1.4)
        ch.label(-0.4, DRAW + 0.0002, "<b>Draw</b>: last week's high 1.0960 (buy-side liquidity)", size=12,
                 color=t.bull_text, yanchor="bottom")
    with ch.group("mon"):
        ch.zone(-0.4, 5.4, MON_LOW, MON_HIGH, color=t.ink3, alpha=0.10, dash="dot")
        ch.hline(5.4, 11.4, MON_LOW, color=t.ink3, dash="dot")
        ch.label(-0.4, MON_LOW - 0.0002, "<b>Mon</b> · range 1.0890 – 1.0915", size=12, yanchor="top")
    ch.candles(CANDLES, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(n)),
               text=[c.label for c in CANDLES])
    with ch.group("tue"):
        ch.callout(I_LOW, WEEK_LOW, 3.0, 1.0866, "<b>Tue</b> · drops to 1.0870 below Monday's low<br>— the week's "
                   "low, the Judas swing", xanchor="center")
    with ch.group("mss"):
        ch.hline(I_LOW + 1, I_MSS + 0.4, SWING, color=t.ink2, dash="dash")
        ch.callout(I_MSS, 1.0893, 7.0, 1.0935, "<b>Tue PM</b> · 4H MSS:<br>closes above 1.0880", xanchor="center")
    with ch.group("wed"):
        ch.callout(16, DRAW, 12.5, 1.0968, "<b>Wed</b> · expansion to 1.0960 — the draw is reached", xanchor="right")
    with ch.group("thu"):
        ch.callout(20, THU_LOW, 20.5, 1.0905, "<b>Thu</b> · retraces to 1.0930, holds", xanchor="center")
        ch.callout(27, 1.0953, 25.5, 1.0972, "<b>Fri</b> · closes 1.0945", xanchor="center")
    ch.header("ICT · Weekly Profiles", "A Tuesday-Low Week — Range, Judas Swing, Expansion",
              "EUR/USD · 4-hour candles · one example week · the weekday pattern is a tendency, not a schedule",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles built around the levels in the ICT Weekly Profiles lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, n - 0.2], y_range=[1.0858, 1.0978], y_dtick=0.0010, y_fmt=".4f", x_title="",
            x_ticks=([2.5, 8.5, 14.5, 20.5, 25.5], DAYS))
    return ch.fig


def main():
    paths = save(NAME, build, "Weekly Profile", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
