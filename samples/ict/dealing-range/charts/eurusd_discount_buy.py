"""
Buying in discount — EUR/USD, 15-minute, London: sweep, MSS and FVG entry inside the discount half of the weekly range,
with targets at equilibrium and at the range high.

Source: content/en/ict/dealing-range.mdx -> "Example 1: EUR/USD — Buying in Discount" (SSL swept at 1.0765 in early
London, 15m bullish MSS, FVG 1.0785–1.0795, buy 1.0790 at 1:30 PM BD, stop 1.0760, TP1 1.0850, TP2 1.0950).
Candles in data/eurusd_15m_discount_buy.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-discount-buy"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
DR_LOW, EQ, DR_HIGH = 1.0750, 1.0850, 1.0950
SWEEP_LOW, FVG_LOW, FVG_HIGH = 1.0765, 1.0785, 1.0795
ENTRY, STOP, TP1, TP2 = 1.0790, 1.0760, 1.0850, 1.0950

# --- Defined by the synthetic candles ---
SSL, LOWER_HIGH = 1.0770, 1.0784
T_SWEEP, T_C1, T_C2, T_C3, T_FILL = "12:15", "12:30", "12:45", "13:00", "13:30"

CANDLES = load_candles("eurusd_15m_discount_buy", DATA)


def validate(candles):
    sweep, c1, c2, c3, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_C1, T_C2, T_C3, T_FILL))
    before = [c for c in candles if c.t < sweep.t]
    assert min(c.l for c in before) == SSL and sweep.l == SWEEP_LOW and sweep.c > SSL, "sweep of the 1.0770 lows"
    assert max(c.h for c in before if c.t >= at("10:45")) == LOWER_HIGH, "last lower high 1.0784"
    avg = sum(c.body for c in before) / len(before)
    assert c2.bullish and c2.c > LOWER_HIGH and c2.body >= 2 * avg, "MSS with displacement"
    assert (c1.h, c3.l) == (FVG_LOW, FVG_HIGH) and (FVG_LOW + FVG_HIGH) / 2 == ENTRY, "FVG and CE entry"
    assert fill.l <= ENTRY and all(c.l > ENTRY for c in candles if c3.t < c.t < fill.t), "first CE touch"
    assert DR_LOW < ENTRY < EQ, "entry is in the discount half"
    assert STOP < SWEEP_LOW and (TP1, TP2) == (EQ, DR_HIGH)
    return {"c2_body": c2.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0962):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("08:50"), at(T_FILL) - HALF, at("16:15")

    with ch.group("range"):
        ch.zone(x0, box_x0, DR_LOW, EQ, color=t.bull, alpha=0.06, border=False)
        ch.hline(x0, box_x0, DR_HIGH, color=t.bull_text, width=1.4)
        ch.label(x0, DR_HIGH + 0.6 * PIP, f"<b style='color:{t.bull_text}'>Weekly range high 1.0950</b> · BSL",
                 yanchor="bottom", xshift=6)
        ch.hline(x0, box_x0, EQ, color=t.ink, width=1.4, dash="dash")
        ch.label(x0, EQ + 0.6 * PIP, "<b>Equilibrium 1.0850</b> · 50 % of the weekly range", yanchor="bottom",
                 xshift=6)
        ch.label(x0, EQ - 1.0 * PIP, f"<b style='color:{t.bull_text}'>DISCOUNT</b> · the buy half", size=12,
                 yanchor="top", xshift=6)
        ch.hline(x0, box_x1, DR_LOW, color=t.bear_text, width=1.4)
        ch.label(x0, DR_LOW - 0.6 * PIP, f"<b style='color:{t.bear_text}'>Weekly range low 1.0750</b>",
                 yanchor="top", xshift=6)
    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TP1, TP2], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("ssl"):
        ch.hline(at("09:30"), at(T_SWEEP) + HALF, SSL, color=t.bear_text, width=1.2)
        ch.label(at(T_SWEEP) - HALF, SSL - 0.4 * PIP, "Asian / early-London lows ≈ 1.0770 (SSL)", size=12,
                 xanchor="right", yanchor="top")
    with ch.group("sweep"):
        ch.callout(at(T_SWEEP), SWEEP_LOW, at("10:30"), 1.0756,
                   f"<span style='color:{t.accent}'>①</span> <b>12:15 PM BD</b>: sweep to 1.0765, close back above",
                   xanchor="center")
    with ch.group("mss"):
        ch.hline(at("11:00"), at(T_C2) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.callout(at(T_C2), 1.0806, at("11:00"), 1.0826,
                   f"<span style='color:{t.accent}'>②</span> <b>15m MSS</b>: {STATS['c2_body']:.0f}-pip displacement "
                   f"(avg {STATS['avg_body']:.1f})<br>closes above the 1.0784 lower high · FVG 1.0785 – 1.0795",
                   xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("15:05"), 1.0770,
                   f"<span style='color:{t.accent}'>③</span> <b>1:30 PM BD</b>: first touch of the CE → buy 1.0790",
                   xanchor="center")
    with ch.group("projection"):
        ch.projection(at("14:30") + HALF, 1.0830, at("15:30"), TP1 - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("14:45"), 1.0880)

    ch.header("ICT · Dealing Range", "Buying in Discount — Targets at Equilibrium and the Range High",
              "EUR/USD · 15-minute · London kill zone (12–3 PM BD) · inside the weekly range 1.0750 – 1.0950",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Dealing Range lesson")
    ch.caption()
    ch.axes(x_range=[at("08:45"), at("16:30")], y_range=[1.0742, y_top], y_dtick=0.0025, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Discount Buy", OUT)
    risk, targets = levels(ENTRY, STOP, [TP1, TP2], PIP)
    print(f"{NAME}: risk {risk:g} · " + " · ".join(f"TP {tp:.4f} +{rw:g} 1:{rr:.2f}" for tp, rw, rr in targets)
          + f" → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
