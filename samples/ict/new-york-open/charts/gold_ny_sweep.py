"""
NY sweep of the London high — Gold (XAU/USD), 5-minute, NY AM.

Source: content/en/ict/new-york-open.mdx -> "Example 2: NY Sweep — Gold" (London high 2,048 / low 2,030; 6:30 PM BD
sweep to 2,050 and MSS; sell 2,046 at the bearish OB, stop 2,052, target SSL 2,015).
Candles in data/xauusd_5m_ny_sweep.csv are synthetic (US summer time).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-ny-sweep"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36
LONDON_HIGH, LONDON_LOW, SWEEP_HIGH = 2048.0, 2030.0, 2050.0
ENTRY, STOP, TARGET = 2046.0, 2052.0, 2015.0
T_SWEEP, T_MSS, T_FILL, HIGHER_LOW = "18:30", "18:35", "18:50", 2043.0

CANDLES = load_candles("xauusd_5m_ny_sweep", DATA)


def validate(candles):
    sweep, mss, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_MSS, T_FILL))
    assert max(c.h for c in candles if c.t < sweep.t) == LONDON_HIGH and sweep.h == SWEEP_HIGH
    assert sweep.bullish and sweep.l == ENTRY, "bearish OB = the up-close sweep candle; entry at its low edge"
    assert by_time(candles, "18:05").l == HIGHER_LOW
    before = [c for c in candles if c.t < mss.t]
    avg = sum(c.body for c in before) / len(before)
    assert not mss.bullish and mss.c < HIGHER_LOW and mss.body >= 2 * avg, "5m MSS"
    assert fill.h >= ENTRY and all(c.h < ENTRY for c in candles if mss.t < c.t < fill.t)
    assert STOP > SWEEP_HIGH
    return {"mss_body": mss.body, "avg_body": avg, "ob": (sweep.l, sweep.h)}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("19:40")
    ch.zone(at(T_SWEEP) - HALF, box_x0, *STATS["ob"], color=t.bear, alpha=0.14, dash="dash")
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=False)
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")
    ch.hline(at("17:25"), at(T_SWEEP) + HALF, LONDON_HIGH, color=t.bull_text, width=1.4)
    ch.label(at("17:25"), LONDON_HIGH + 0.4, f"<b style='color:{t.bull_text}'>London high 2,048</b>", size=12,
             yanchor="bottom")
    ch.hline(at("17:25"), box_x0, LONDON_LOW, color=t.bear_text, width=1.4)
    ch.label(at("17:25"), LONDON_LOW + 0.4, f"<b style='color:{t.bear_text}'>London low 2,030</b>", size=12,
             yanchor="bottom")
    ch.hline(at("18:05"), at(T_MSS) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
    ch.callout(at(T_SWEEP), SWEEP_HIGH, at("17:55"), 2052.5,
               f"<span style='color:{t.accent}'>①</span> <b>6:30 PM BD</b>: NY runs above the London high to 2,050",
               xanchor="center")
    ch.callout(at(T_MSS), 2040.5, at("17:55"), 2035.0,
               f"<span style='color:{t.accent}'>②</span> <b>MSS</b>: {STATS['mss_body']:.1f}-pt displacement "
               f"(avg {STATS['avg_body']:.1f}) closes below 2,043", xanchor="center", yanchor="top")
    ch.callout(at(T_FILL), ENTRY + 0.2, at("19:20"), 2049.5,
               f"<span style='color:{t.accent}'>③</span> retrace to the <b style='color:{t.bear_text}'>bearish OB"
               "</b> → sell 2,046", xanchor="center")
    ch.projection(at("19:05") + HALF, 2028.0, at("19:32"), TARGET + 1.0,
                  "Hypothetical path<br>— a scenario, not a result", at("19:00"), 2022, xanchor="right",
                  align="right")
    ch.header("ICT · New York Open", "NY Reversal — Sweep of the London High",
              "Gold (XAU/USD) · 5-minute · NY AM kill zone (5–8 PM BD, US summer time)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT New York Open lesson")
    ch.axes(x_range=[at("17:20"), at("19:45")], y_range=[2011, 2056], y_dtick=5, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "NY Sweep — Gold", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
