"""
Bullish Unicorn — EUR/USD, 15-minute.

Source: content/en/ict/unicorn-model.mdx -> "Example 1: Bullish Unicorn — EUR/USD" (bearish OB 1.0870–1.0880 broken
upward with displacement, FVG 1.0875–1.0885, rally to 1.0930, buy 1.0880, stop 1.0868, target 1.0960).
Candles in data/eurusd_15m_unicorn.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-bullish-unicorn"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36
LOW1, LOW2, ENTRY, STOP, TARGET, SWING_HIGH = 1.0862, 1.0855, 1.0880, 1.0868, 1.0960, 1.0930
T_OB, T_DISP, T_FILL = "11:15", "12:30", "14:30"

CANDLES = load_candles("eurusd_15m_unicorn", DATA)


def validate(candles):
    ob, disp, fill = (by_time(candles, tm) for tm in (T_OB, T_DISP, T_FILL))
    after_ob = [c for c in candles if c.t > ob.t]
    assert ob.bullish and not after_ob[0].bullish, "bearish OB = last up-close candle before the drop"
    assert (ob.o, ob.c) == (1.0870, 1.0880)
    assert min(c.l for c in candles if c.t < ob.t) == LOW1 and min(c.l for c in candles) == LOW2 < LOW1
    i = candles.index(disp)
    fvg = (candles[i - 1].h, candles[i + 1].l)
    assert fvg == (1.0875, 1.0885) and disp.c > ob.h, "displacement breaks above the OB, leaving an FVG"
    overlap = (max(ob.o, fvg[0]), min(ob.c, fvg[1]))
    assert overlap == (1.0875, 1.0880) and overlap[0] <= ENTRY <= overlap[1]
    assert max(c.h for c in candles) == SWING_HIGH
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if disp.t < c.t < fill.t)
    assert STOP < ob.o
    return {"ob": (ob.o, ob.c), "fvg": fvg, "overlap": overlap, "disp": disp.body / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = at(T_FILL) - HALF
    with ch.group("ob"):
        ch.zone(at(T_OB) - HALF, x_end, *STATS["ob"], color=t.bear, alpha=0.12, dash="dash")
        ch.label(at(T_OB) - HALF, STATS["ob"][1] + 0.6 * PIP, "bearish OB 1.0870 – 1.0880", size=11,
                 color=t.bear_text, yanchor="bottom")
    with ch.group("sweep"):
        ch.hline(at("10:45"), at("12:00") + HALF, LOW1, color=t.ink3, width=1.2)
        ch.callout(at("12:00"), LOW2, at("10:45"), 1.0850, "sell-side swept: 1.0855 under the 1.0862 low",
                   xanchor="center")
    with ch.group("breaker"):
        ch.zone(at(T_OB) - HALF, x_end, *STATS["ob"], color=t.bull, alpha=0.14, dash="solid")
        ch.zone(at("12:15") - HALF, x_end, *STATS["fvg"], color=t.bull, alpha=0.10, dash="dot")
        ch.callout(at(T_DISP), 1.0890, at("11:15"), 1.0912,
                   f"<b>12:30</b> · {STATS['disp']:.0f}-pip displacement breaks above the OB<br>→ it becomes a "
                   f"<b style='color:{t.bull_text}'>bullish breaker</b>, and leaves an FVG 1.0875 – 1.0885",
                   xanchor="center")
    with ch.group("unicorn"):
        ch.zone(at(T_OB) - HALF, x_end, *STATS["overlap"], color=t.accent, alpha=0.35, dash="solid")
        ch.callout(at("13:45"), 1.08775, at("13:30"), 1.0866, f"<b style='color:{t.accent}'>Unicorn</b>: breaker ∩ "
                   "FVG = 1.0875 – 1.0880", xanchor="center")
    with ch.group("position"):
        ch.position(x_end, at("15:30"), entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")
    with ch.group("projection"):
        ch.projection(at("15:00") + HALF, 1.0912, at("15:20"), TARGET - 1.5 * PIP,
                      "Hypothetical path<br>— a scenario,<br>not a result", at("14:00"), 1.0948, xanchor="center")
    ch.header("ICT · Unicorn Model", "The Bullish Unicorn — Where a Breaker and an FVG Overlap",
              "EUR/USD · 15-minute · daily bias bullish · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.accent, "Overlap")])
    ch.footnote("Synthetic candles built around the levels in the ICT Unicorn Model lesson")
    ch.caption()
    ch.axes(x_range=[at("09:45"), at("15:40")], y_range=[1.0842, 1.0972], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=60)
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish Unicorn", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
