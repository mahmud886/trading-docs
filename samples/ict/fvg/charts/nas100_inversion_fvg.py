"""
Inversion FVG — NAS100, 5-minute: a bearish FVG is closed through and then acts as support.

Source: content/en/ict/fvg.mdx -> "Example 3: NAS100 — Inversion FVG" (bearish FVG 17,820–17,850 fully filled,
price returns and the zone acts as support, buy at the top, 17,850). The lesson gives no stop or target, so none
are drawn; the invalidation shown follows the inversion rule (a close back through the zone).
Candles in data/nas100_5m_inversion_fvg.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, load_candles, save

NAME = "nas100-inversion-fvg"
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
FVG_LOW, FVG_HIGH, ENTRY = 17820.0, 17850.0, 17850.0
T_C1, T_C2, T_C3, T_INVERT, T_RETEST = "17:05", "17:10", "17:15", "17:40", "18:00"

CANDLES = load_candles("nas100_5m_inversion_fvg", DATA)


def validate(candles):
    c1, c2, c3, inv, retest = (by_time(candles, tm) for tm in (T_C1, T_C2, T_C3, T_INVERT, T_RETEST))
    assert (c1.l, c3.h) == (FVG_HIGH, FVG_LOW) and not c2.bullish, "bearish FVG = C1 low to C3 high"
    assert all(c.c <= FVG_HIGH for c in candles if c3.t < c.t < inv.t), "no close above the gap before inversion"
    assert inv.bullish and inv.c > FVG_HIGH, "inversion: a body close above the whole gap"
    between = [c for c in candles if inv.t < c.t < retest.t]
    assert all(c.l > FVG_HIGH for c in between), "first return to the zone is the retest"
    assert retest.l <= ENTRY and retest.c > FVG_HIGH, "retest tags the top and closes back above"


validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = at("18:30")

    ch.zone(at(T_C1) - HALF, at(T_INVERT), FVG_LOW, FVG_HIGH)
    ch.zone(at(T_INVERT), x_end, FVG_LOW, FVG_HIGH, color=t.bull, alpha=t.reward_alpha + 0.04, dash="dash")
    ch.hline(at(T_RETEST) - HALF, x_end, ENTRY, color=t.ink, width=1.6, dash="solid")
    ch.price_tag(ENTRY, "17,850", t.ink, ink=t.surface)
    ch.label(x_end, ENTRY + 2, "Entry: buy at the top of the old gap", color=t.ink, bold=True, xanchor="right",
             yanchor="bottom")
    ch.label(at(T_INVERT) + HALF, FVG_LOW - 3, "Invalidation: 5m close back below 17,820 (zone lost)", size=12,
             color=t.ink3, yanchor="top")
    ch.candles(CANDLES, "NAS100 5m (synthetic)", price_fmt=",.0f")

    ch.step(at("17:12"), 17872, 1, f"<b style='color:{t.zone_text}'>Bearish FVG 17,820 – 17,850</b><br>"
            "left by the sell-off", size=12.5)
    ch.callout(at(T_INVERT), 17864, at("17:30"), 17902,
               f"<span style='color:{t.accent}'>②</span> <b>Inversion</b>: a candle body closes above 17,850 — "
               "the gap is fully filled and closed through", xanchor="center")
    ch.callout(at(T_RETEST), 17849, at("18:12"), 17803,
               f"<span style='color:{t.accent}'>③</span> <b>Retest holds</b>: price returns to the top of the "
               f"old gap<br>and closes back above — <b style='color:{t.bull_text}'>now support</b>", xanchor="center",
               yanchor="top")

    ch.header("ICT · Fair Value Gap", "Inversion FVG — Old Resistance Becomes Support",
              "NAS100 · 5-minute · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG"),
                   ("■", t.bull, "Inverted FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Fair Value Gap lesson")
    ch.caption()
    ch.axes(x_range=[at("16:55"), at("18:35")], y_range=[17780, 17910], y_dtick=10, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "NAS100 Inversion FVG", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
