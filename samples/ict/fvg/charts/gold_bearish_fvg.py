"""
Bearish FVG (SIBI) after an MSS — Gold (XAU/USD), 5-minute, NY AM.

Source: content/en/ict/fvg.mdx -> "Example 2: Gold (XAU/USD) — Bearish FVG" (rally to 2,045 in premium, MSS,
FVG 2,038–2,042, CE 2,040, sell 2,040 at 8:00 PM BD, stop 2,043, target SSL 2,015).
The original quotes the risk as "30 pips" and reward as "250 pips" (0.1-dollar pips); this chart uses dollars.
Candles in data/xauusd_5m_bearish_fvg.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-bearish-fvg"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
RALLY_HIGH, FVG_LOW, FVG_HIGH, CE = 2045.0, 2038.0, 2042.0, 2040.0
ENTRY, STOP, TARGET = 2040.0, 2043.0, 2015.0
T_ENTRY = "20:00"  # "8:00 PM BD"

# --- Defined by the synthetic candles ---
HIGHER_LOW = 2037.5
T_HL, T_HIGH, T_C1, T_C2, T_C3 = "19:05", "19:15", "19:20", "19:25", "19:30"

CANDLES = load_candles("xauusd_5m_bearish_fvg", DATA)


def validate(candles):
    hl, high, c1, c2, c3, fill = (by_time(candles, tm) for tm in (T_HL, T_HIGH, T_C1, T_C2, T_C3, T_ENTRY))
    assert high.h == RALLY_HIGH == max(c.h for c in candles), "rally high 2,045"
    assert hl.l == HIGHER_LOW and all(c.l > HIGHER_LOW for c in candles if hl.t < c.t < c2.t), "HL 2,037.5"
    before = [c for c in candles if c.t < c2.t]
    avg = sum(c.body for c in before) / len(before)
    assert not c2.bullish and c2.c < HIGHER_LOW and c2.body >= 2 * avg, "MSS: displacement closes below the HL"
    assert (c1.l, c3.h) == (FVG_HIGH, FVG_LOW), "SIBI = C1 low to C3 high"
    assert (FVG_LOW + FVG_HIGH) / 2 == CE == ENTRY, "entry at the CE"
    assert fill.h >= CE and all(c.h < CE for c in candles if c3.t < c.t < fill.t), "first CE touch at 8:00 PM BD"
    assert STOP > FVG_HIGH
    return {"c2_body": c2.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("18:45"), at(T_ENTRY) - HALF, at("20:45")

    ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    ch.hline(at(T_C1) - HALF, box_x0, CE, color=t.zone, width=1.3, dash="dash")
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=False)
    ch.label(box_x1, STOP + 1.6, "Invalidation: 5m body close above 2,042 (FVG high)", size=12, color=t.ink3,
             xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")

    ch.label(at(T_HIGH), RALLY_HIGH + 0.4, "rally into premium · 2,045", size=12, xanchor="center", yanchor="bottom")
    ch.hline(at(T_HL), at(T_C2) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
    ch.hline(x0, box_x0, TARGET, color=t.bear_text, width=1.4)
    ch.label(x0, TARGET + 0.5, f"<b style='color:{t.bear_text}'>SSL 2,015</b> · the target", yanchor="bottom",
             xshift=6)
    ch.callout(at(T_C2), 2037.0, at("19:00"), 2027.0,
               f"<span style='color:{t.accent}'>①</span> <b>MSS</b>: {STATS['c2_body']:.1f}-pt displacement "
               f"(avg {STATS['avg_body']:.1f})<br>closes below the 2,037.5 higher low",
               xanchor="center", yanchor="top")
    ch.label(at("19:33"), FVG_HIGH + 0.4, f"<b style='color:{t.zone_text}'>SIBI · bearish FVG 2,038 – 2,042</b>"
             " · CE 2,040", size=12.5, yanchor="bottom")
    ch.callout(at(T_ENTRY), 2040.4, at("20:22"), 2047.0,
               f"<span style='color:{t.accent}'>②</span> <b>8:00 PM BD</b>: first touch of the CE → sell 2,040",
               xanchor="center")
    ch.projection(at("20:15") + HALF, 2026.0, at("20:38"), TARGET + 1.0,
                  "Hypothetical path<br>— a scenario, not a result", at("20:12"), 2021, xanchor="right",
                  align="right")

    ch.header("ICT · Fair Value Gap", "Bearish FVG (SIBI) — Sell the CE After an MSS",
              "Gold (XAU/USD) · 5-minute · NY AM kill zone (5–8 PM BD) · context: 4H bearish, price in premium",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Fair Value Gap lesson")
    ch.caption()
    ch.axes(x_range=[at("18:40"), at("20:55")], y_range=[2011, 2050], y_dtick=5, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Gold Bearish FVG", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
