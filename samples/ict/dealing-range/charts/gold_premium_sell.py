"""
Selling in premium — Gold (XAU/USD), 5-minute, NY AM: sweep, MSS and FVG entry inside the premium half of the daily
range, with targets at equilibrium and at the range low.

Source: content/en/ict/dealing-range.mdx -> "Example 2: Gold (XAU/USD) — Selling in Premium" (daily range 2,000–2,080,
BSL swept at 2,072, 5m bearish MSS, FVG 2,062–2,068, sell 2,065 at 6:30 PM BD, stop 2,075, TP1 2,040, TP2 2,000).
The original quotes risk/reward in 0.1-dollar pips (100 / 250 / 650); this chart uses dollars (10 / 25 / 65).
Candles in data/xauusd_5m_premium_sell.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-premium-sell"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
DR_LOW, EQ, DR_HIGH = 2000.0, 2040.0, 2080.0
SWEEP_HIGH, FVG_LOW, FVG_HIGH = 2072.0, 2062.0, 2068.0
ENTRY, STOP, TP1, TP2 = 2065.0, 2075.0, 2040.0, 2000.0
T_ENTRY = "18:30"  # "6:30 PM BD"

# --- Defined by the synthetic candles ---
BSL, HIGHER_LOW = 2070.0, 2064.5
T_SWEEP, T_C2, T_C3 = "18:05", "18:10", "18:15"

CANDLES = load_candles("xauusd_5m_premium_sell", DATA)


def validate(candles):
    sweep, c2, c3, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_C2, T_C3, T_ENTRY))
    before = [c for c in candles if c.t < sweep.t]
    assert max(c.h for c in before) == BSL and sweep.h == SWEEP_HIGH and sweep.c < BSL, "sweep of the 2,070 highs"
    assert min(c.l for c in before if c.t > at("17:50")) == HIGHER_LOW, "higher low 2,064.5"
    avg = sum(c.body for c in before) / len(before)
    assert not c2.bullish and c2.c < HIGHER_LOW and c2.body >= 2 * avg, "MSS with displacement"
    assert (sweep.l, c3.h) == (FVG_HIGH, FVG_LOW) and (FVG_LOW + FVG_HIGH) / 2 == ENTRY, "FVG and CE entry"
    assert fill.h >= ENTRY and all(c.h < ENTRY for c in candles if c3.t < c.t < fill.t), "first CE touch"
    assert EQ < ENTRY < DR_HIGH, "entry is in the premium half"
    assert STOP > SWEEP_HIGH and (TP1, TP2) == (EQ, DR_LOW)
    return {"c2_body": c2.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("17:25"), at(T_ENTRY) - HALF, at("19:25")

    ch.zone(x0, box_x0, EQ, DR_HIGH, color=t.bear, alpha=0.06, border=False)
    ch.hline(x0, box_x1, DR_HIGH, color=t.bull_text, width=1.4)
    ch.label(x0, DR_HIGH + 0.5, f"<b style='color:{t.bull_text}'>Daily range high 2,080</b>", yanchor="bottom",
             xshift=6)
    ch.label(box_x0, EQ + 3.0, f"<b style='color:{t.bear_text}'>PREMIUM</b> · the sell half", size=12,
             xanchor="right", yanchor="bottom", xshift=-6)
    ch.hline(x0, box_x0, EQ, color=t.ink, width=1.4, dash="dash")
    ch.label(x0, EQ + 0.5, "<b>Equilibrium 2,040</b> · 50 % of the daily range", yanchor="bottom", xshift=6)
    ch.hline(x0, box_x0, DR_LOW, color=t.bear_text, width=1.4)
    ch.label(x0, DR_LOW + 0.5, f"<b style='color:{t.bear_text}'>Daily range low 2,000</b> · SSL",
             yanchor="bottom", xshift=6)
    ch.zone(at(T_SWEEP) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TP1, TP2], unit=PT, unit_name="pts", fmt=",.0f",
                long=False)
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")

    ch.hline(at("17:50"), at(T_SWEEP) + HALF, BSL, color=t.bull_text, width=1.2)
    ch.hline(at("17:55"), at(T_C2) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
    ch.callout(at(T_SWEEP), SWEEP_HIGH, at("17:42"), 2076.5,
               f"<span style='color:{t.accent}'>①</span> <b>Sweep</b>: NY AM takes the BSL above the 2,070 highs — "
               "wick to 2,072", xanchor="center")
    ch.callout(at(T_C2), 2061.0, at("17:45"), 2051.5,
               f"<span style='color:{t.accent}'>②</span> <b>5m MSS</b>: {STATS['c2_body']:.0f}-pt displacement "
               f"(avg {STATS['avg_body']:.1f})<br>closes below the 2,064.5 higher low · FVG 2,062 – 2,068",
               xanchor="center", yanchor="top")
    ch.callout(at(T_ENTRY), 2065.4, at("19:00"), 2069.5,
               f"<span style='color:{t.accent}'>③</span> <b>6:30 PM BD</b>: first touch of the CE → sell 2,065",
               xanchor="center")
    ch.projection(at("18:45") + HALF, 2046.0, at("19:15"), TP1 + 1.0, "Hypothetical path<br>— a scenario, not a "
                  "result", at("18:52"), 2056)

    ch.header("ICT · Dealing Range", "Selling in Premium — Targets at Equilibrium and the Range Low",
              "Gold (XAU/USD) · 5-minute · NY AM kill zone (5–8 PM BD) · inside the daily range 2,000 – 2,080",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Dealing Range lesson")
    ch.caption()
    ch.axes(x_range=[at("17:20"), at("19:35")], y_range=[1993, 2086], y_dtick=10, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Gold Premium Sell", OUT)
    risk, targets = levels(ENTRY, STOP, [TP1, TP2], PT)
    print(f"{NAME}: risk {risk:g} · " + " · ".join(f"TP {tp:,.0f} +{rw:g} 1:{rr:.2f}" for tp, rw, rr in targets)
          + f" → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
