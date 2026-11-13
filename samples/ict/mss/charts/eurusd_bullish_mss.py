"""
Bullish Market Structure Shift — EUR/USD, 15-minute, London kill zone.

Source: content/en/ict/mss.mdx -> "Example 1: EUR/USD Bullish MSS" (15m downtrend, LH 1.0875, SSL taken at 1.0845,
displacement above 1.0875, FVG 1.0868–1.0878, buy 1.0873 at the CE, stop 1.0842, target 1.0930).
The original lesson states R:R 1:5.5; with these levels it is 57 ÷ 31 = 1 : 1.8, which is what the chart shows.
Candles in data/eurusd_15m_bullish_mss.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-bullish-mss"
PIP = 0.0001
HALF = timedelta(minutes=15) * 0.36

# --- Levels quoted from the lesson ---
LOWER_HIGH, SWEEP_LOW = 1.0875, 1.0845
FVG_LOW, FVG_HIGH = 1.0868, 1.0878
ENTRY, STOP, TARGET = 1.0873, 1.0842, 1.0930

# --- Defined by the synthetic candles ---
SSL = 1.0850  # the last lower low, taken by the sweep
T_LL, T_LH, T_SWEEP, T_C1, T_MSS, T_C3, T_FILL = "10:00", "11:00", "12:15", "12:30", "12:45", "13:00", "13:30"

CANDLES = load_candles("eurusd_15m_bullish_mss", DATA)


def validate(candles):
    ll, lh, sweep, c1, mss, c3, fill = (by_time(candles, tm) for tm in (T_LL, T_LH, T_SWEEP, T_C1, T_MSS, T_C3,
                                                                          T_FILL))
    highs = [c.h for c in candles if c.t <= lh.t]
    assert ll.l == SSL and lh.h == LOWER_HIGH and max(highs) > LOWER_HIGH, "lower high below the earlier highs"
    leg = [c for c in candles if lh.t < c.t < sweep.t]
    assert all(c.h < LOWER_HIGH for c in leg) and min(c.l for c in leg) > SSL, "the leg down from the LH"
    assert sweep.l == SWEEP_LOW < SSL < sweep.c, "sweep below the last LL, closes back above it"
    before = [c for c in candles if c.t < c1.t]
    avg = sum(c.body for c in before) / len(before)
    assert mss.bullish and mss.c > LOWER_HIGH and mss.body >= 2 * avg, "MSS: displacement closes above the LH"
    assert (c1.h, c3.l) == (FVG_LOW, FVG_HIGH), "FVG left by the displacement"
    assert abs((FVG_LOW + FVG_HIGH) / 2 - ENTRY) < 1e-9, "entry at the FVG CE"
    assert fill.l <= ENTRY and all(c.l > ENTRY for c in candles if c3.t < c.t < fill.t), "first CE touch fills"
    assert STOP < SWEEP_LOW
    return {"mss_body": mss.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0937):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("08:20"), at(T_FILL) - HALF, at("15:00")

    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
        ch.label(box_x1, STOP - 2.6 * PIP, "Invalidation: 15m close below 1.0845 (sweep low)", size=12,
                 color=t.ink3, xanchor="right", yanchor="top")
    ch.candles(CANDLES, "EUR/USD 15m (synthetic)", price_fmt=".4f")

    with ch.group("structure"):
        for tm, y, txt, anchor in (("08:30", 1.0902, "LH", "bottom"), (T_LL, SSL, "LL", "top"),
                                   (T_LH, LOWER_HIGH, "LH", "bottom")):
            ch.label(at(tm), y + (0.8 if anchor == "bottom" else -0.8) * PIP, txt, size=11, bold=True,
                     xanchor="center", yanchor=anchor)
        ch.hline(at(T_LL), at(T_SWEEP) + HALF, SSL, color=t.bear_text, width=1.4)
        ch.label(at("10:10"), SSL - 1.2 * PIP, f"<b style='color:{t.bear_text}'>SSL 1.0850</b> · last lower low",
                 size=12, yanchor="top")
        ch.hline(at(T_LH), at(T_MSS) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.label(at(T_LH), LOWER_HIGH + 2.4 * PIP, "the lower high that started the leg down", size=12,
                 xanchor="left", yanchor="bottom", xshift=10)
        ch.hline(x0, box_x0, TARGET, color=t.bull_text, width=1.4)
        ch.label(x0, TARGET + 0.6 * PIP, f"<b style='color:{t.bull_text}'>Target 1.0930</b> · buy-side liquidity "
                 "above (HTF)", yanchor="bottom", xshift=6)
    with ch.group("sweep"):
        ch.callout(at(T_SWEEP), SWEEP_LOW, at("10:40"), 1.0840,
                   f"<span style='color:{t.accent}'>①</span> <b>Sweep</b>: London kill zone takes the SSL — "
                   "wick to 1.0845", xanchor="center")
    with ch.group("mss"):
        ch.callout(at(T_MSS), 1.0884, at("11:10"), 1.0906,
                   f"<span style='color:{t.accent}'>②</span> <b>MSS</b>: {STATS['mss_body']:.0f}-pip displacement "
                   f"(avg {STATS['avg_body']:.1f})<br>closes above the 1.0875 lower high · leaves an FVG",
                   xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), 1.0872, at("14:20"), 1.0857,
                   f"<span style='color:{t.accent}'>③</span> <b>FVG 1.0868 – 1.0878</b>: first touch of the CE<br>"
                   "1:30 PM BD → buy 1.0873", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("14:15") + HALF, 1.0906, at("14:45"), TARGET - 2 * PIP,
                      "Hypothetical path<br>— a scenario, not a result", at("13:50"), 1.0915, xanchor="right",
                      align="right")

    ch.header("ICT · Market Structure Shift", "Bullish MSS — Sweep, Shift, Enter the FVG",
              "EUR/USD · 15-minute · London kill zone (12–3 PM BD) · context: 4H bearish, Daily in discount",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Market Structure Shift lesson")
    ch.caption()
    ch.axes(x_range=[at("08:15"), at("15:15")], y_range=[1.0826, y_top], y_dtick=0.0010, y_fmt=".4f")
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD Bullish MSS", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
