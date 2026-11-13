"""
Bearish Turtle Soup — EUR/USD, 15-minute, NY AM: a failed breakout above the previous week high.

Source: content/en/ict/turtle-soup.mdx -> "Example 1: Bearish Turtle Soup — EUR/USD" (PWH 1.0950, spike to 1.0958 at
6:30 PM BD, strong bearish close back below at 1.0945, sell 1.0945, stop 1.0960, target SSL 1.0880).
Candles in data/eurusd_15m_bearish_turtle_soup.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-bearish-turtle-soup"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
PWH, SPIKE_HIGH, SSL = 1.0950, 1.0958, 1.0880
ENTRY, STOP, TARGET = 1.0945, 1.0960, 1.0880
T_BREAKOUT, T_TRAP = "18:30", "18:45"  # "6:30 PM BD"; entry at the close of the next candle

CANDLES = load_candles("eurusd_15m_bearish_turtle_soup", DATA)


def validate(candles):
    brk, trap = by_time(candles, T_BREAKOUT), by_time(candles, T_TRAP)
    before = [c for c in candles if c.t < brk.t]
    assert max(c.h for c in before) < PWH, "PWH untouched before the breakout"
    assert brk.h == SPIKE_HIGH == max(c.h for c in candles) and brk.c > PWH, "breakout candle closes above PWH"
    avg = sum(c.body for c in before) / len(before)
    assert not trap.bullish and trap.c == ENTRY < PWH, "reversal closes back below PWH at the entry price"
    assert trap.body >= 2 * avg and trap.c < brk.o, "aggressive reversal (displacement), within one candle"
    assert STOP > SPIKE_HIGH and TARGET == SSL
    return {"trap_body": trap.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0972):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("15:50"), at(T_TRAP) + HALF, at("20:30")

    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
        ch.label(box_x1, STOP + 2.6 * PIP, "Invalidation: 15m close above 1.0958 (failed-breakout high)", size=12,
                 color=t.ink3, xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("levels"):
        ch.hline(x0, box_x0, PWH, color=t.bull_text, width=1.4)
        ch.label(x0, PWH + 0.6 * PIP, f"<b style='color:{t.bull_text}'>PWH 1.0950</b> · previous week high — "
                 "buy stops and breakout orders above", yanchor="bottom", xshift=6)
        ch.hline(x0, box_x0, SSL, color=t.bear_text, width=1.4)
        ch.label(x0, SSL + 0.6 * PIP, f"<b style='color:{t.bear_text}'>SSL 1.0880</b> · London low — "
                 "sell stops below (the target)", yanchor="bottom", xshift=6)
    with ch.group("breakout"):
        ch.callout(at(T_BREAKOUT), SPIKE_HIGH, at("17:00"), 1.0961,
                   f"<span style='color:{t.accent}'>①</span> <b>6:30 PM BD: breakout to 1.0958</b> — the candle "
                   "closes above PWH;<br>breakout buyers are in, shorts' stops are hit", xanchor="center")
    with ch.group("trap"):
        ch.callout(at(T_TRAP), ENTRY - 0.3 * PIP, at("17:15"), 1.0907,
                   f"<span style='color:{t.accent}'>②</span> <b>The trap</b>: the next candle closes back below at "
                   f"1.0945<br>{STATS['trap_body']:.0f}-pip body (avg {STATS['avg_body']:.1f}) — the breakout failed "
                   "→ sell at the close", xanchor="center", yanchor="top")
    with ch.group("projection"):
        ch.projection(at("19:30") + HALF, 1.0921, at("20:15"), TARGET + 3 * PIP,
                      "Hypothetical path to SSL<br>— a scenario, not a result", at("19:45"), 1.0938)

    ch.header("ICT · Turtle Soup", "Bearish Turtle Soup — Fading a False Breakout",
              "EUR/USD · 15-minute · NY AM kill zone (5–8 PM BD) · Times in Bangladesh time (BD, UTC+6)")
    ch.footnote("Synthetic candles built around the levels in the ICT Turtle Soup lesson")
    ch.caption()
    ch.axes(x_range=[at("15:45"), at("20:45")], y_range=[1.0872, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=30)
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Bearish Turtle Soup", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
