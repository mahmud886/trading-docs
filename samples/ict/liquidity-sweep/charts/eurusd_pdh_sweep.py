"""
Anatomy of a buy-side sweep → sell — EUR/USD, 5-minute, NY AM.

Source: content/en/ict/liquidity-sweep.mdx -> "Example 1: PDH Sweep — EUR/USD Sell" (PDH 1.0920, spike to 1.0928,
5m bearish MSS at 1.0918, FVG 1.0915–1.0920, sell 1.0918 at the FVG CE at 5:45 PM BD, stop 1.0930, target PDL 1.0870).
Candles in data/eurusd_5m_pdh_sweep.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-pdh-sweep"
PIP = 0.0001
HALF = timedelta(minutes=5) * 0.36

# --- Levels quoted from the lesson ---
PDH, RAID_HIGH, PDL = 1.0920, 1.0928, 1.0870
HIGHER_LOW = 1.0918  # "5M bearish MSS at 1.0918": the pullback low the displacement closes under
FVG_LOW, FVG_HIGH = 1.0915, 1.0920
ENTRY, STOP, TARGET = 1.0918, 1.0930, 1.0870
T_ENTRY = "17:45"  # "BD Time: 5:45 PM"

T_HIGH, T_HL, T_C1, T_DISP, T_C3 = "17:15", "17:20", "17:30", "17:35", "17:40"

CANDLES = load_candles("eurusd_5m_pdh_sweep", DATA)


def validate(candles):
    c1, disp, c3, fill = (by_time(candles, t) for t in (T_C1, T_DISP, T_C3, T_ENTRY))
    before = [c for c in candles if c.t < at("17:25")]
    assert max(c.h for c in before) == PDH, "PDH tagged but not exceeded before the raid"
    assert max(c.h for c in candles) == c1.h == RAID_HIGH, "raid high 1.0928"
    pullback = [c for c in candles if by_time(candles, T_HIGH).t < c.t < c1.t]
    assert min(c.l for c in pullback) == HIGHER_LOW, "higher low 1.0918 after the 1.0920 high"
    avg = sum(c.body for c in before) / len(before)
    assert not disp.bullish and disp.c < PDH and disp.c < HIGHER_LOW, "close back below PDH and the higher low (MSS)"
    assert disp.body >= 2 * avg, "displacement rule"
    assert (c1.l, c3.h) == (FVG_HIGH, FVG_LOW), "bearish FVG = C1 low to C3 high"
    assert abs((FVG_LOW + FVG_HIGH) / 2 - ENTRY) <= 0.5 * PIP + 1e-9, "entry at the FVG CE"
    assert fill.h == ENTRY and c3.h < ENTRY, "first retest of the CE fills at 5:45 PM"
    assert STOP > RAID_HIGH and TARGET == PDL
    return {"disp_body": disp.body / PIP, "avg_body": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=1.0942):
    ch = Chart(t, reveal)
    x0, box_x0, box_x1 = at("16:25"), at(T_ENTRY) - HALF, at("18:45")

    with ch.group("fvg"):
        ch.zone(at(T_C1) - HALF, box_x0, FVG_LOW, FVG_HIGH)
        ch.callout(at(T_ENTRY), ENTRY + 0.2 * PIP, at("18:13"), 1.0925,
                   f"<span style='color:{t.accent}'>③</span> <b>Bearish FVG 1.0915 – 1.0920</b><br>"
                   "5:45 PM BD: retest of its CE → sell 1.0918", xanchor="center")
    with ch.group("position"):
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
        ch.label(box_x1, STOP + 2.8 * PIP, "Invalidation: 5m close above 1.0928 (raid high)", size=12,
                 color=t.ink3, xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "EUR/USD 5m (synthetic)", price_fmt=".4f")

    with ch.group("levels"):
        ch.hline(x0, at(T_DISP) + HALF, PDH, color=t.bull_text, width=1.4)
        ch.label(x0, PDH + 0.6 * PIP, f"<b style='color:{t.bull_text}'>PDH 1.0920</b> · previous day high — "
                 "buy stops above (BSL)", yanchor="bottom", xshift=6)
        ch.hline(x0, box_x0, PDL, color=t.bear_text, width=1.4)
        ch.label(box_x0, PDL + 0.6 * PIP, f"<b style='color:{t.bear_text}'>PDL 1.0870</b> · sell-side liquidity "
                 "(the target)", yanchor="bottom", xanchor="right", xshift=-6)
    with ch.group("raid"):
        ch.callout(at(T_C1), RAID_HIGH, at("16:58"), 1.0933,
                   f"<span style='color:{t.accent}'>①</span> <b>Raid</b>: NY AM runs the buy stops above PDH to 1.0928",
                   xanchor="center")
    with ch.group("mss"):
        ch.hline(at(T_HL), at(T_DISP) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
        ch.callout(at(T_DISP), 1.0910, at("16:50"), 1.0886,
                   f"<span style='color:{t.accent}'>②</span> <b>Close back inside + 5m MSS</b><br>"
                   f"{STATS['disp_body']:.0f}-pip displacement (avg {STATS['avg_body']:.0f}) closes below PDH<br>"
                   "and the 1.0918 higher low · on 15m this is one wick", xanchor="center", yanchor="top")
    with ch.group("projection"):
        ch.projection(at("18:00") + HALF, 1.0892, at("18:35"), TARGET + 2.5 * PIP,
                      "Hypothetical path to PDL<br>— a scenario, not a result", at("18:12"), 1.0903)

    ch.header("ICT · Liquidity Sweep", "Anatomy of a Sweep — Raid, Reject, Shift, Enter",
              "EUR/USD · 5-minute · NY AM kill zone (5–8 PM BD) · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Liquidity Sweep lesson")
    ch.caption()
    ch.axes(x_range=[at("16:20"), at("18:50")], y_range=[1.0862, y_top], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "EUR/USD PDH Sweep", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
