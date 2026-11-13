"""
ICT in one chart — the core concepts labelled on one London session (EUR/USD 15m, US winter time).

Candles: data/eurusd_15m_ict_overview.csv (synthetic; the same session as the Judas Swing lesson).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, load_candles, save

NAME = "ict-overview"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36
CANDLES = load_candles("eurusd_15m_ict_overview", DATA)
ASIA_LOW, ASIA_HIGH, SWEEP_LOW = 1.0880, 1.0900, 1.0868
T_OB, T_MSS = "14:30", "14:45"


def validate(candles):
    asia = [c for c in candles if c.t < at("13:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH)
    assert min(c.l for c in candles) == SWEEP_LOW
    ob, mss = by_time(candles, T_OB), by_time(candles, T_MSS)
    i = candles.index(mss)
    fvg = (candles[i - 1].h, candles[i + 1].l)
    assert fvg[0] < fvg[1] and not ob.bullish
    eq = (ASIA_HIGH + SWEEP_LOW) / 2
    assert ob.c < eq, "the OB sits in discount"
    return {"ob": (ob.c, ob.o), "fvg": fvg, "eq": eq}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = at("16:45") + HALF
    with ch.group("liq"):
        ch.hline(at("10:00") - HALF, x_end, ASIA_HIGH, color=t.bull_text, width=1.3)
        ch.label(at("10:00") - HALF, ASIA_HIGH + 0.4 * PIP, "<b>① Buy-side liquidity</b> — stops above the high",
                 size=11, color=t.bull_text, yanchor="bottom")
        ch.hline(at("10:00") - HALF, at("14:15") + HALF, ASIA_LOW, color=t.bear_text, width=1.3)
        ch.label(at("10:00") - HALF, ASIA_LOW - 0.4 * PIP, "<b>① Sell-side liquidity</b> — stops below the low",
                 size=11, color=t.bear_text, yanchor="top")
    with ch.group("time") as shown:
        if shown:
            ch.fig.add_vrect(x0=at("13:00") - HALF, x1=at("16:00") - HALF, fillcolor=t.accent,
                             opacity=0.06 * ch.reveal.alpha("time"), line_width=0, layer="below")
        ch.label(at("13:00") - HALF, 1.0918, "<b>② Time</b>: London kill zone (1 – 4 PM BD, winter)", size=11,
                 color=t.accent, yanchor="top", xshift=4)
    with ch.group("pd"):
        ch.hline(at("14:15"), x_end, STATS["eq"], color=t.ink3, dash="dash")
        ch.label(x_end, STATS["eq"], "<b>⑥</b> 50% line", size=11, color=t.ink3,
                 xanchor="right", yanchor="top")
    with ch.group("arrays"):
        ch.zone(at(T_OB) - HALF, at("16:00"), *STATS["ob"], color=t.bull, alpha=0.22)
        ch.zone(at("14:30") - HALF, at("16:00"), *STATS["fvg"], color=t.bull, alpha=0.10, dash="dash")
        ch.callout(at("15:45"), 1.0876, at("16:15"), 1.0861, "<b>⑤ PD arrays</b>: order block + FVG<br>— where to "
                   "enter, in discount", xanchor="center")
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")
    with ch.group("sweep"):
        ch.callout(at("14:15"), SWEEP_LOW, at("12:30"), 1.0862, "<b>③ Sweep</b> (Judas swing): sell-side taken",
                   xanchor="center")
    with ch.group("mss"):
        ch.callout(at(T_MSS), 1.0893, at("12:45"), 1.0910, "<b>④ MSS with displacement</b>: the reversal "
                   "is confirmed", xanchor="center")
    with ch.group("target"):
        ch.callout(at("16:45"), 1.0911, at("15:45"), 1.0918, "<b>⑦ Target</b>: the next liquidity",
                   xanchor="right")
    ch.header("ICT · Introduction", "ICT in One Chart — Liquidity, Time, Structure, PD Arrays",
              "EUR/USD · 15-minute · one London session · Times in Bangladesh time (BD, UTC+6), US winter time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "PD array")])
    ch.footnote("Synthetic candles (the Judas Swing lesson's session) labelled with the core ICT concepts")
    ch.caption()
    ch.axes(x_range=[at("09:45"), at("17:15")], y_range=[1.0852, 1.0922], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=60)
    return ch.fig


def main():
    paths = save(NAME, build, "ICT in One Chart", OUT)
    print(f"{NAME}: {STATS} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
