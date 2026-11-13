"""
Bullish Turtle Soup — Gold (XAU/USD), 5-minute, London kill zone: a failed breakdown below equal lows.

Source: content/en/ict/turtle-soup.mdx -> "Example 2: Bullish Turtle Soup — Gold" (equal lows at 2,020, three touches;
drop to 2,015 at 1:00 PM BD; bullish displacement and 5m MSS; buy 2,022, stop 2,013, target 2,055).
Candles in data/xauusd_5m_bullish_turtle_soup.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-bullish-turtle-soup"
PT = 1.0
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
EQL, BREAK_LOW, TARGET = 2020.0, 2015.0, 2055.0
ENTRY, STOP = 2022.0, 2013.0
T_BREAK = "13:00"  # "London KZ (1:00 PM BD)"

# --- Defined by the synthetic candles ---
TOUCHES = ("12:05", "12:25", "12:45")
LOWER_HIGH = 2023.8
T_LH, T_RECLAIM, T_DISP, T_FILL = "12:55", "13:05", "13:10", "13:15"

CANDLES = load_candles("xauusd_5m_bullish_turtle_soup", DATA)


def validate(candles):
    lows = [by_time(candles, tm).l for tm in TOUCHES]
    assert min(lows) == EQL and max(lows) - min(lows) <= 0.5, "three relative equal lows at 2,020"
    brk, reclaim, disp, fill = (by_time(candles, tm) for tm in (T_BREAK, T_RECLAIM, T_DISP, T_FILL))
    before = [c for c in candles if c.t < brk.t]
    assert min(c.l for c in before) == EQL, "equal lows untouched before the breakdown"
    assert brk.l == BREAK_LOW and brk.c < EQL, "breakdown candle trades to 2,015 and closes below 2,020"
    assert reclaim.c > EQL, "reclaim: closes back above 2,020 within one candle"
    assert by_time(candles, T_LH).h == LOWER_HIGH, "last lower high 2,023.8"
    avg = sum(c.body for c in before) / len(before)
    assert disp.bullish and disp.c > LOWER_HIGH and disp.body >= 2 * avg, "5m MSS with displacement"
    assert fill.l <= ENTRY, "retrace fills the buy at 2,022"
    assert STOP < BREAK_LOW
    return {"disp_body": disp.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("11:55"), at(T_FILL) - HALF, at("14:20")

    ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=True)
    ch.label(box_x1, STOP - 1.6, "Invalidation: 5m close below 2,015 (failed-breakdown low)", size=12, color=t.ink3,
             xanchor="right", yanchor="top")
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")

    ch.zone(at(TOUCHES[0]) - HALF, box_x0, EQL - 1.0, EQL, color=t.bear, alpha=0.10, border=False)
    ch.hline(at(TOUCHES[0]) - HALF, box_x0, EQL, color=t.bear_text, width=1.4)
    for tm in TOUCHES:
        ch.label(at(tm), EQL - 1.1, "EQL", size=11, bold=True, xanchor="center", yanchor="top")
    ch.hline(x0, box_x0, TARGET, color=t.bull_text, width=1.4)
    ch.label(x0, TARGET + 0.6, f"<b style='color:{t.bull_text}'>BSL 2,055</b> · prior high — buy stops above "
             "(the target)", yanchor="bottom", xshift=6)
    ch.hline(at(T_LH), at(T_DISP) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")

    ch.callout(at(T_BREAK), BREAK_LOW, at("12:27"), 2013.2,
               f"<span style='color:{t.accent}'>①</span> <b>1:00 PM BD: breakdown to 2,015</b> — closes below the "
               f"<b style='color:{t.bear_text}'>equal lows ≈ 2,020</b>;<br>breakdown sellers are in, longs' stops "
               "are hit", xanchor="center")
    ch.callout(at(T_DISP), 2025.5, at("12:30"), 2035.0,
               f"<span style='color:{t.accent}'>②</span> <b>Reclaim + 5m MSS</b>: back above 2,020 next candle, then "
               f"a {STATS['disp_body']:.0f}-pt displacement<br>(avg {STATS['avg_body']:.1f}) closes above the 2,023.8 "
               "lower high", xanchor="center")
    ch.callout(at(T_FILL), 2021.6, at("13:52"), 2017.2,
               f"<span style='color:{t.accent}'>③</span> <b>1:15 PM BD</b>: retrace → buy 2,022", xanchor="center")
    ch.projection(at("13:30") + HALF, 2033.5, at("14:12"), TARGET - 1.5,
                  "Hypothetical path to BSL<br>— a scenario, not a result", at("13:25"), 2045, xanchor="right",
                  align="right")

    ch.header("ICT · Turtle Soup", "Bullish Turtle Soup — Fading a False Breakdown",
              "Gold (XAU/USD) · 5-minute · London kill zone (12–3 PM BD) · Times in Bangladesh time (BD, UTC+6)")
    ch.footnote("Synthetic candles built around the levels in the ICT Turtle Soup lesson")
    ch.caption()
    ch.axes(x_range=[at("11:50"), at("14:30")], y_range=[2009, 2060], y_dtick=5, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Gold Bullish Turtle Soup", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
