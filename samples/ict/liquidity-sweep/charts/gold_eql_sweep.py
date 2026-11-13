"""
Sell-side sweep of equal lows → buy — Gold (XAU/USD), 15-minute, London kill zone.

Source: content/en/ict/liquidity-sweep.mdx -> "Example 2: Equal Lows Sweep — Gold Buy" (three touches at 2,025,
drop to 2,022 in the London kill zone, 15m bullish MSS, bullish OB at 2,027, buy 2,027 at 1:30 PM BD, stop 2,020,
target BSL 2,060). Candles in data/xauusd_15m_eql_sweep.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-eql-sweep"
PT = 1.0
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
EQL, SWEEP_LOW, BSL = 2025.0, 2022.0, 2060.0
ENTRY, STOP, TARGET = 2027.0, 2020.0, 2060.0
T_ENTRY = "13:30"  # "BD Time: 1:30 PM"

# --- Defined by the synthetic candles ---
TOUCHES = ("08:30", "09:30", "10:30")
LOWER_HIGH = 2031.0
T_LH, T_SWEEP, T_DISP = "11:00", "12:15", "12:30"

CANDLES = load_candles("xauusd_15m_eql_sweep", DATA)


def validate(candles):
    lows = [by_time(candles, tm).l for tm in TOUCHES]
    assert min(lows) == EQL and max(lows) - min(lows) <= 0.5, "three relative equal lows at 2,025"
    sweep, disp, fill = by_time(candles, T_SWEEP), by_time(candles, T_DISP), by_time(candles, T_ENTRY)
    before = [c for c in candles if c.t < sweep.t]
    assert min(c.l for c in before) == EQL, "equal lows untouched before the sweep"
    assert sweep.l == SWEEP_LOW and sweep.c > EQL and not sweep.bullish, "sweep: wick to 2,022, close back above"
    assert sweep.o == ENTRY, "bullish OB = the sweep candle; entry at its open (proximal edge)"
    lh = [c for c in candles if by_time(candles, T_LH).t <= c.t < sweep.t]
    assert max(c.h for c in lh) == LOWER_HIGH, "last lower high 2,031"
    avg = sum(c.body for c in before) / len(before)
    assert disp.bullish and disp.c > LOWER_HIGH and disp.body >= 2 * avg, "15m MSS with displacement"
    assert fill.l <= ENTRY and all(c.l > ENTRY for c in candles if disp.t < c.t < fill.t), "first retest fills"
    assert STOP < SWEEP_LOW and TARGET == BSL
    return {"disp_body": disp.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("07:50"), at(T_ENTRY) - HALF, at("15:15")
    sweep = by_time(CANDLES, T_SWEEP)

    ch.zone(at(T_SWEEP) - HALF, box_x0, sweep.l, sweep.h)
    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=True)
    ch.label(box_x1, STOP - 2.6, "Invalidation: 15m close below 2,022 (sweep low)", size=12, color=t.ink3,
             xanchor="right", yanchor="top")
    ch.candles(CANDLES, "XAU/USD 15m (synthetic)", price_fmt=",.1f")

    ch.zone(at(TOUCHES[0]) - HALF, box_x0, EQL - 1.0, EQL, color=t.bear, alpha=0.10, border=False)
    ch.hline(at(TOUCHES[0]) - HALF, box_x0, EQL, color=t.bear_text, width=1.4)
    for tm in TOUCHES:
        ch.label(at(tm), EQL - 1.1, "EQL", size=11, bold=True, xanchor="center", yanchor="top")
    ch.hline(x0, box_x0, BSL, color=t.bull_text, width=1.4)
    ch.label(x0, BSL + 0.6, f"<b style='color:{t.bull_text}'>BSL 2,060</b> · prior high — buy stops above "
             "(the target)", yanchor="bottom", xshift=6)
    ch.hline(at(T_LH), at(T_DISP) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")

    ch.callout(at(T_SWEEP), SWEEP_LOW, at("09:55"), 2019.6,
               f"<span style='color:{t.accent}'>①</span> <b>London kill zone</b>: price sweeps the equal lows to "
               f"2,022<br>(three <b style='color:{t.bear_text}'>equal lows ≈ 2,025</b>, sell stops below) "
               "and closes back above", xanchor="center")
    ch.callout(at(T_DISP), 2033.0, at("10:45"), 2041.5,
               f"<span style='color:{t.accent}'>②</span> <b>15m MSS</b>: {STATS['disp_body']:.0f}-pt displacement "
               f"(avg {STATS['avg_body']:.1f})<br>closes above the 2,031 lower high", xanchor="center")
    ch.callout(at(T_ENTRY), 2026.8, at("14:25"), 2023.4,
               f"<span style='color:{t.accent}'>③</span> <b>1:30 PM BD</b>: retrace into the bullish OB<br>"
               "(sweep candle 2,022 – 2,027.5) → buy 2,027", xanchor="center")
    ch.projection(at("14:15") + HALF, 2039.0, at("15:00"), TARGET - 2.0,
                  "Hypothetical path to BSL<br>— a scenario, not a result", at("14:00"), 2049, xanchor="right",
                  align="right")

    ch.header("ICT · Liquidity Sweep", "Equal Lows Sweep — Buy After the Raid",
              "Gold (XAU/USD) · 15-minute · London kill zone (12–3 PM BD) · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT Liquidity Sweep lesson")
    ch.caption()
    ch.axes(x_range=[at("07:45"), at("15:30")], y_range=[2016, 2064], y_dtick=5, y_fmt=",.0f")
    return ch.fig


def main():
    paths = save(NAME, build, "Gold Equal-Lows Sweep", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
