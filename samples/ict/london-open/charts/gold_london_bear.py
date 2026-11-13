"""
Bearish London open — Gold (XAU/USD), 5-minute: the Judas swing above the Asian high, a 5m MSS, and the FVG entry.

Source: content/en/ict/london-open.mdx -> "Example 2: Bearish London Open — Gold" (Asian range 2,032–2,040, 12:45 PM BD
spike to 2,044, 1:00 PM BD 5m bearish MSS, sell 2,039 at the bearish FVG, stop 2,045, target 2,010).
Candles in data/xauusd_5m_london_bear.csv are synthetic (US summer time).
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-london-open-bear"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36
ASIA_LOW, ASIA_HIGH, SWEEP_HIGH = 2032.0, 2040.0, 2044.0
ENTRY, STOP, TARGET = 2039.0, 2045.0, 2010.0
T_SWEEP, T_C1, T_MSS, T_C3, T_FILL = "12:45", "12:55", "13:00", "13:05", "13:15"
HIGHER_LOW = 2036.5

CANDLES = load_candles("xauusd_5m_london_bear", DATA)


def validate(candles):
    asia = [c for c in candles if c.t < at("12:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH)
    sweep, c1, mss, c3, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_C1, T_MSS, T_C3, T_FILL))
    assert sweep.h == SWEEP_HIGH == max(c.h for c in candles), "Judas swing high 2,044"
    assert min(c.l for c in candles if at("12:25") <= c.t < sweep.t) == HIGHER_LOW
    before = [c for c in candles if c.t < mss.t]
    avg = sum(c.body for c in before) / len(before)
    assert not mss.bullish and mss.c < HIGHER_LOW and mss.body >= 2 * avg, "5m bearish MSS"
    assert c1.l > c3.h and (c1.l + c3.h) / 2 == ENTRY, "bearish FVG, entry at its CE"
    assert fill.h >= ENTRY and all(c.h < ENTRY for c in candles if c3.t < c.t < fill.t)
    assert STOP > SWEEP_HIGH
    return {"mss_body": mss.body, "avg_body": avg, "fvg": (c3.h, c1.l)}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=2048):
    ch = Chart(t, reveal)
    box_x0, box_x1 = at(T_FILL) - HALF, at("14:05")
    with ch.group("asia"):
        ch.zone(at("11:30") - HALF, at("12:00") - HALF, ASIA_LOW, ASIA_HIGH, color=t.ink3, alpha=0.10, dash="dot")
        ch.label(at("11:30") - HALF, ASIA_LOW - 0.4, "<b>Asian range</b> 2,032 – 2,040", size=12, yanchor="top")
        ch.hline(at("11:35"), at(T_SWEEP) + HALF, ASIA_HIGH, color=t.bull_text, width=1.2)
    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, *STATS["fvg"])
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                    long=False)
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")
    with ch.group("sweep"):
        ch.callout(at(T_SWEEP), SWEEP_HIGH, at("12:05"), 2045.6,
                   f"<span style='color:{t.accent}'>①</span> <b>12:45 PM BD · Judas swing</b>: above the Asian high "
                   "to 2,044", xanchor="center")
    with ch.group("mss"):
        ch.hline(at("12:25"), at(T_MSS) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
        ch.callout(at(T_MSS), 2036.0, at("12:10"), 2024.0,
                   f"<span style='color:{t.accent}'>②</span> <b>1:00 PM BD</b>: {STATS['mss_body']:.1f}-pt "
                   f"displacement (avg {STATS['avg_body']:.1f})<br>closes below the 2,036.5 higher low → 5m MSS · "
                   f"<b style='color:{t.zone_text}'>FVG 2,037.5 – 2,040.5</b>", xanchor="center", yanchor="top")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY + 0.2, at("13:45"), 2043.0,
                   f"<span style='color:{t.accent}'>③</span> retrace to the FVG CE → sell 2,039", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("13:30") + HALF, 2024.5, at("13:58"), TARGET + 1.0,
                      "Hypothetical path<br>— a scenario, not a result", at("13:25"), 2016, xanchor="right",
                      align="right")
    ch.header("ICT · London Open", "Bearish London Open — Fade the Judas Swing Above Asia",
              "Gold (XAU/USD) · 5-minute · daily bias bearish · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT London Open lesson")
    ch.caption()
    ch.axes(x_range=[at("11:25"), at("14:10")], y_range=[2006, y_top], y_dtick=5, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Bearish London Open", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
