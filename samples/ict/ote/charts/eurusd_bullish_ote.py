"""
Bullish OTE — EUR/USD, 15-minute, NY AM: a retracement into 62–79 % of the expansion leg, at a bullish order block.

Source: content/en/ict/ote.mdx -> "Example 1: EUR/USD Bullish OTE" (expansion 1.0820 → 1.0880, OTE 1.0843–1.0833,
sweet spot 1.0838, retrace to 1.0836 into a 15m bullish OB at 6:15 PM BD, buy 1.0836, stop 1.0818, target BSL 1.0920).
Candles in data/eurusd_15m_bullish_ote.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save
from fib import ladder, retrace

NAME = "eurusd-bullish-ote"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
SWING_LOW, SWING_HIGH = 1.0820, 1.0880
OTE_TOP, OTE_BOTTOM, SWEET = 1.0843, 1.0833, 1.0838
ENTRY, STOP, TARGET = 1.0836, 1.0818, 1.0920
T_ENTRY = "18:15"  # "Setup at 6:15 PM"

# --- Defined by the synthetic candles ---
T_LOW, T_OB, T_DISP, T_HIGH = "16:00", "16:45", "17:00", "17:30"
LOWER_HIGH = 1.0842

CANDLES = load_candles("eurusd_15m_bullish_ote", DATA)


def validate(candles):
    low, ob, disp, high, fill = (by_time(candles, tm) for tm in (T_LOW, T_OB, T_DISP, T_HIGH, T_ENTRY))
    assert low.l == SWING_LOW == min(c.l for c in candles) and high.h == SWING_HIGH, "expansion 1.0820 → 1.0880"
    for pct, quoted in ((0.62, OTE_TOP), (0.79, OTE_BOTTOM), (0.705, SWEET)):
        assert round(retrace(SWING_LOW, SWING_HIGH, pct), 4) == quoted, f"{pct:.1%} level matches the lesson"
    before = [c for c in candles if c.t < disp.t]
    avg = sum(c.body for c in before) / len(before)
    assert disp.bullish and disp.body >= 2 * avg and disp.c > LOWER_HIGH, "displacement + MSS above 1.0842"
    assert not ob.bullish and ob.l <= ENTRY <= ob.h, "entry inside the bullish OB (last down-candle)"
    assert all(c.l > OTE_TOP for c in candles if high.t < c.t < fill.t), "first entry into the OTE zone"
    assert fill.l == ENTRY and OTE_BOTTOM <= ENTRY <= OTE_TOP and fill.c > ENTRY, "retrace to 1.0836, reacts"
    assert STOP < SWING_LOW
    return {"disp_body": disp.body / PIP, "avg_body": avg / PIP, "ob_low": ob.l, "ob_high": ob.h}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0928):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("15:25"), at(T_ENTRY) - HALF, at("19:45")
    x_label = at("20:28")

    with ch.group("fib"):
        ladder(ch, SWING_LOW, SWING_HIGH, at(T_LOW), x_label, ".4f", zone_x0=at(T_HIGH))
    with ch.group("ob"):
        ch.zone(at(T_OB) - HALF, box_x0, STATS["ob_low"], STATS["ob_high"], color=t.bull, alpha=0.16, dash="dash")
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("levels"):
        ch.hline(x0, box_x0, TARGET, color=t.bull_text, width=1.4)
        ch.label(x0, TARGET + 0.6 * PIP, f"<b style='color:{t.bull_text}'>BSL 1.0920</b> · the target",
                 yanchor="bottom", xshift=6)
        ch.label(at(T_LOW), SWING_LOW - 0.8 * PIP, "swing low 1.0820", size=11, bold=True, xanchor="center",
                 yanchor="top")
        ch.label(at(T_HIGH), SWING_HIGH + 0.8 * PIP, "swing high 1.0880", size=11, bold=True, xanchor="center",
                 yanchor="bottom")
    with ch.group("expansion"):
        ch.callout(at(T_DISP), 1.0850, at("16:05"), 1.0866,
                   f"<span style='color:{t.accent}'>①</span> <b>Expansion</b>: {STATS['disp_body']:.0f}-pip "
                   f"displacement (avg {STATS['avg_body']:.0f})<br>closes above the 1.0842 lower high → MSS",
                   xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_ENTRY), ENTRY - 0.1 * PIP, at("17:15"), 1.0822,
                   f"<span style='color:{t.accent}'>②</span> <b>6:15 PM BD</b>: retrace to 1.0836 — inside the "
                   f"OTE and the<br><b style='color:{t.bull_text}'>bullish OB {STATS['ob_low']:.4f} – "
                   f"{STATS['ob_high']:.4f}</b> → buy", xanchor="center", yanchor="top")
    with ch.group("projection"):
        ch.projection(at("19:00") + HALF, 1.0874, at("19:35"), TARGET - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("18:40"), 1.0898, xanchor="right",
                      align="right")

    ch.header("ICT · Optimal Trade Entry", "Bullish OTE — Buy the 62–79 % Retracement at an Order Block",
              "EUR/USD · 15-minute · NY AM kill zone (5–8 PM BD) · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.accent, "OTE 62–79 %"),
                   ("■", t.bull, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT OTE lesson")
    ch.caption()
    ch.axes(x_range=[at("15:20"), at("20:32")], y_range=[1.0810, y_top], y_dtick=0.0010, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Bullish OTE", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
