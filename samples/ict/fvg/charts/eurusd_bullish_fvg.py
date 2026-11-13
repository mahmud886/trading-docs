"""
Bullish FVG (BISI) — EUR/USD, 15-minute, London kill zone.

Source: content/en/ict/fvg.mdx -> "Example 1: EUR/USD — Bullish FVG Entry" (displacement up from 1.0880, FVG
1.0885–1.0895 formed at 2:30 PM BD, CE 1.0890, buy 1.0890, stop 1.0882, target BSL 1.0950).
Candles in data/eurusd_15m_bullish_fvg.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-bullish-fvg"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
ORIGIN, FVG_LOW, FVG_HIGH, CE, BSL = 1.0880, 1.0885, 1.0895, 1.0890, 1.0950
ENTRY, STOP, TARGET = 1.0890, 1.0882, 1.0950
T_C1, T_C2, T_C3, T_FILL = "14:00", "14:15", "14:30", "15:15"  # C3 closes the gap at 2:30 PM BD

CANDLES = load_candles("eurusd_15m_bullish_fvg", DATA)


def validate(candles):
    c1, c2, c3, fill = (by_time(candles, tm) for tm in (T_C1, T_C2, T_C3, T_FILL))
    assert c1.l == ORIGIN and (c1.h, c3.l) == (FVG_LOW, FVG_HIGH), "FVG = C1 high to C3 low, from 1.0880"
    before = [c for c in candles if c.t < c2.t]
    avg = sum(c.body for c in before) / len(before)
    assert c2.bullish and c2.body >= 2 * avg, "C2 is a displacement candle"
    assert abs((FVG_LOW + FVG_HIGH) / 2 - CE) < 1e-9 and ENTRY == CE, "entry at the CE"
    assert fill.l <= CE and all(c.l > CE for c in candles if c3.t < c.t < fill.t), "first CE touch fills"
    assert fill.c > CE, "the CE holds on a closing basis"
    assert STOP < FVG_LOW
    return {"c2_body": c2.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0958):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("11:50"), at(T_FILL) - HALF, at("17:00")

    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
        ch.hline(at(T_C1) - HALF, box_x0, CE, color=t.zone, width=1.3, dash="dash")
        ch.label(at("14:22"), FVG_LOW - 0.4 * PIP, f"<b style='color:{t.zone_text}'>BISI · bullish FVG 1.0885 – "
                 "1.0895</b><br>C1 high → C3 low · CE 1.0890 (dashed)", size=12.5, yanchor="top")
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(box_x1, STOP - 2.6 * PIP, "Invalidation: 15m body close below 1.0885 (FVG low)", size=12,
                 color=t.ink3, xanchor="right", yanchor="top")
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("levels"):
        ch.hline(x0, box_x0, BSL, color=t.bull_text, width=1.4)
        ch.label(x0, BSL + 0.6 * PIP, f"<b style='color:{t.bull_text}'>BSL 1.0950</b> · the draw (Daily bullish, "
                 "price in discount)", yanchor="bottom", xshift=6)
    with ch.group("c_labels"):
        for n, (tm, y, anchor) in enumerate(((T_C1, ORIGIN - 0.8 * PIP, "top"), (T_C2, 1.0883 - 0.8 * PIP, "top"),
                                             (T_C3, 1.0910 + 0.8 * PIP, "bottom")), 1):
            ch.label(at(tm), y, f"C{n}", color=t.ink, bold=True, xanchor="center", yanchor=anchor)
        ch.callout(at(T_C2), 1.0900, at("13:00"), 1.0915,
                   f"<span style='color:{t.accent}'>①</span> <b>Displacement</b> from 1.0880: "
                   f"{STATS['c2_body']:.0f}-pip C2 (avg {STATS['avg_body']:.1f})<br>2:30 PM BD: C3 closes — "
                   "the gap is confirmed", xanchor="center")
    with ch.group("retrace"):
        ch.callout(at(T_FILL), CE - 0.1 * PIP, at("16:05"), 1.0872,
                   f"<span style='color:{t.accent}'>②</span> <b>First retrace to the CE</b><br>limit buy 1.0890 fills; "
                   "candle closes back above", xanchor="center", yanchor="top")
    with ch.group("projection"):
        ch.projection(at("16:00") + HALF, 1.0920, at("16:45"), TARGET - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("15:40"), 1.0932, xanchor="right",
                      align="right")

    ch.header("ICT · Fair Value Gap", "Bullish FVG (BISI) — Limit Entry at the CE",
              "EUR/USD · 15-minute · London kill zone (12–3 PM BD) · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Fair Value Gap lesson")
    ch.caption()
    ch.axes(x_range=[at("11:45"), at("17:10")], y_range=[1.0862, y_top], y_dtick=0.0010, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Bullish FVG", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
