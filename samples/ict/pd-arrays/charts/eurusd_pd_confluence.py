"""
Stacked PD arrays — EUR/USD, 15-minute, London: a bullish OB, a bullish FVG and the OTE zone overlap at the entry.

Source: content/en/ict/pd-arrays.mdx -> "Real Example: Multi-PD Array Trade" (SSL sweep in London, 15m bullish OB at
1.0852, FVG 1.0848–1.0856, OTE 1.0845–1.0855, buy 1.0852, stop 1.0840, target BSL 1.0920). The OB is drawn so that
1.0852 is its mean threshold (50 % of the body). The lesson's stop (1.0840) sits inside the OTE leg, above its 1.0833
start; the chart shows it as given and the lesson discusses the alternative.
Candles in data/eurusd_15m_pd_confluence.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save
from fib import retrace

NAME = "eurusd-pd-confluence"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
OB_MT, FVG_LOW, FVG_HIGH, OTE_LOW, OTE_HIGH = 1.0852, 1.0848, 1.0856, 1.0845, 1.0855
ENTRY, STOP, TARGET = 1.0852, 1.0840, 1.0920

# --- Defined by the synthetic candles ---
SSL, LOWER_HIGH, LEG_LOW, LEG_HIGH = 1.0838, 1.0868, 1.0833, 1.0892
T_LH, T_SSL, T_SWEEP, T_OB, T_C1, T_C2, T_C3, T_HIGH, T_FILL = (
    "11:15", "11:45", "12:15", "12:45", "13:00", "13:15", "13:30", "13:45", "14:30")

CANDLES = load_candles("eurusd_15m_pd_confluence", DATA)


def validate(candles):
    lh, ssl, sweep, ob, c1, c2, c3, high, fill = (by_time(candles, tm) for tm in (
        T_LH, T_SSL, T_SWEEP, T_OB, T_C1, T_C2, T_C3, T_HIGH, T_FILL))
    assert lh.h == LOWER_HIGH and ssl.l == SSL and sweep.l == LEG_LOW < SSL < sweep.c, "sweep of the 1.0838 low"
    assert not ob.bullish and (ob.o + ob.c) / 2 == OB_MT, "bullish OB: down-close candle, mean threshold 1.0852"
    assert all(c.bullish for c in candles if ob.t < c.t <= c3.t), "OB is the last down-close candle before the move"
    before = [c for c in candles if c.t < c2.t]
    avg = sum(c.body for c in before) / len(before)
    assert c2.body >= 2 * avg and c2.c > LOWER_HIGH, "displacement closes above the 1.0868 lower high (MSS)"
    assert (c1.h, c3.l) == (FVG_LOW, FVG_HIGH), "FVG = C1 high to C3 low"
    assert high.h == LEG_HIGH == max(c.h for c in candles) and LEG_LOW == min(c.l for c in candles)
    assert (round(retrace(LEG_LOW, LEG_HIGH, 0.62), 4), round(retrace(LEG_LOW, LEG_HIGH, 0.79), 4)) == (OTE_HIGH,
                                                                                                         OTE_LOW)
    assert fill.l == ENTRY and all(c.l > FVG_HIGH for c in candles if c3.t < c.t < fill.t), "first return fills"
    assert LEG_LOW < STOP < min(ob.l, FVG_LOW, OTE_LOW), "stop below all three arrays, but above the leg low"
    return {"c2_body": c2.body / PIP, "avg_body": avg / PIP, "ob": (ob.l, ob.h)}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0928):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("10:20"), at(T_FILL) - HALF, at("16:15")
    ob_low, ob_high = STATS["ob"]

    with ch.group("ote"):
        ch.zone(at(T_HIGH), box_x0, OTE_LOW, OTE_HIGH, color=t.accent, alpha=0.12, border=False)
        ch.label(at(T_HIGH) + HALF, OTE_LOW - 2.2 * PIP, "<b>OTE 62–79 %</b> 1.0855 – 1.0845", size=11.5,
                 color=t.accent, yanchor="top")
    with ch.group("ob"):
        ch.zone(at(T_OB) - HALF, box_x0, ob_low, ob_high, color=t.bull, alpha=0.12, dash="dash")
        ch.hline(at(T_OB) - HALF, box_x0, OB_MT, color=t.bull_text, width=1.1, dash="dot")
        ch.label(at(T_OB) - HALF, ob_low - 0.5 * PIP, f"<b style='color:{t.bull_text}'>Bullish OB</b> "
                 f"{ob_low:.4f} – {ob_high:.4f} · 50 % 1.0852", size=11.5, yanchor="top")
    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("levels"):
        ch.hline(x0, box_x0, TARGET, color=t.bull_text, width=1.4)
        ch.label(x0, TARGET + 0.6 * PIP, f"<b style='color:{t.bull_text}'>BSL 1.0920</b> · the target",
                 yanchor="bottom", xshift=6)
        ch.hline(at("11:45"), at(T_SWEEP) + HALF, SSL, color=t.bear_text, width=1.2)
        ch.hline(at(T_LH), at(T_C2) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.callout(at(T_SWEEP), LEG_LOW, at("11:00"), 1.0828,
                   f"<span style='color:{t.accent}'>①</span> <b>12:15 PM BD</b>: SSL below 1.0838 swept to 1.0833",
                   xanchor="center")
    with ch.group("mss"):
        ch.callout(at(T_C2), 1.0864, at("11:30"), 1.0898,
                   f"<span style='color:{t.accent}'>②</span> <b>Displacement</b>: {STATS['c2_body']:.0f} pips "
                   f"(avg {STATS['avg_body']:.0f}) closes above<br>the 1.0868 lower high → MSS · leaves "
                   f"<b style='color:{t.zone_text}'>FVG 1.0848 – 1.0856</b>", xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("15:20"), 1.0831,
                   f"<span style='color:{t.accent}'>③</span> <b>2:30 PM BD</b>: first return reaches 1.0852 —<br>"
                   "OB 50 % · inside the FVG · inside the OTE → buy", xanchor="center", yanchor="top")
    with ch.group("projection"):
        ch.projection(at("15:15") + HALF, 1.0890, at("15:55"), TARGET - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("14:55"), 1.0905, xanchor="right",
                      align="right")

    ch.header("ICT · PD Arrays", "Stacked PD Arrays — OB, FVG and OTE at One Price",
              "EUR/USD · 15-minute · London kill zone (12–3 PM BD) · context: Daily in discount, bullish",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Order Block"),
                   ("■", t.zone, "FVG"), ("■", t.accent, "OTE")])
    ch.footnote("Synthetic candles built around the levels in the ICT PD Arrays lesson")
    ch.caption()
    ch.axes(x_range=[at("10:15"), at("16:30")], y_range=[1.0822, y_top], y_dtick=0.0010, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Stacked PD Arrays", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    alt, [(_, _, rr2)] = levels(ENTRY, LEG_LOW - 3 * PIP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} (stop below leg: risk {alt:g}, 1:{rr2:.2f})"
          f" → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
