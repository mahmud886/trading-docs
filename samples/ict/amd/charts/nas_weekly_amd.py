"""
Weekly AMD — NAS100 daily candles, conceptual week.

Source: content/en/ict/amd.mdx -> "Example 3: NAS100 Weekly AMD" (Monday range 17,800–17,900, Tuesday spike to
17,950, Wednesday breaks below 17,800, Thursday reaches 17,600, Friday consolidates near 17,650).
Candles are synthetic.
"""

from _paths import OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "nas100-weekly-amd"
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
OHLC = [(17850, 17900, 17800, 17870), (17870, 17950, 17830, 17845), (17845, 17860, 17720, 17735),
        (17735, 17750, 17590, 17610), (17610, 17680, 17600, 17650)]
CANDLES = [Candle(i, d, *v) for i, (d, v) in enumerate(zip(DAYS, OHLC))]
WEEK_OPEN = OHLC[0][0]


def validate():
    mon, tue, wed, thu, fri = CANDLES
    assert (mon.l, mon.h) == (17800, 17900)
    assert tue.h == 17950 == max(c.h for c in CANDLES) and tue.c < mon.h, "Tuesday: spike above Monday, close back in"
    assert wed.c < mon.l and thu.l == min(c.l for c in CANDLES), "Wed-Thu: distribution down"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    ch.zone(-0.4, 4.4, 17800, 17900, color=t.ink3, alpha=0.08, dash="dot")
    ch.label(-0.4, 17908, "Monday's range 17,800 – 17,900 (<b>A</b>)", size=12, yanchor="bottom")
    ch.hline(-0.4, 4.4, WEEK_OPEN, color=t.ink3, dash="dash")
    ch.label(4.45, WEEK_OPEN, "week open", size=11)
    ch.candles(CANDLES, "NAS100 daily (synthetic)", price_fmt=",.0f", x=list(range(5)))
    ch.callout(1, 17950, 1.9, 17985, "<b>M</b> · Tuesday spikes to 17,950<br>takes the buy stops above Monday, "
               "closes back inside", xanchor="left")
    ch.callout(3, 17590, 1.6, 17575, "<b>D</b> · Wednesday–Thursday<br>the real move down to 17,600",
               xanchor="right")
    ch.callout(4, 17680, 4.0, 17760, "Friday: range,<br>profit-taking", xanchor="center")
    ch.header("ICT · AMD", "Weekly AMD — the Week's High Forms Early, Then the Real Move",
              "NAS100 · daily candles · one example week · the weekday pattern is a tendency, not a schedule",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles built around the levels in the ICT AMD lesson")
    ch.axes(x_range=[-0.7, 5.0], y_range=[17550, 18010], y_dtick=50, y_fmt=",.0f", x_title="",
            x_ticks=(list(range(5)), DAYS))
    return ch.fig


def main():
    paths = save(NAME, build, "Weekly AMD", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
