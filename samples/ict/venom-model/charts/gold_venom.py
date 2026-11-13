"""
Bullish Venom entry — Gold, 5-minute, US summer time.

Source: content/en/ict/venom-model.mdx -> "Example 1: Bullish Venom — Gold" (equal lows at 2,020 swept to 2,016 in the
London kill zone, displacement to 2,032 leaves an FVG 2,022–2,028, first touch of the CE 2,025 = entry, stop 2,015,
target 2,060). Candles in data/gold_5m_venom.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-bullish-venom"
HALF = timedelta(minutes=5) * 0.36
EQL, SWEEP, FVG, ENTRY, STOP, TARGET = 2020.0, 2016.0, (2022.0, 2028.0), 2025.0, 2015.0, 2060.0
T_SWEEP, T_DISP, T_FILL = "13:15", "13:20", "13:40"

CANDLES = load_candles("gold_5m_venom", DATA)


def validate(candles):
    sweep, disp, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_DISP, T_FILL))
    lows = [c for c in candles if c.t < sweep.t and c.l == EQL]
    assert len(lows) == 2 and all(c.l >= EQL for c in candles if c.t < sweep.t), "equal lows at 2,020"
    assert sweep.l == SWEEP == min(c.l for c in candles)
    i = candles.index(disp)
    assert (candles[i - 1].h, candles[i + 1].l) == FVG and disp.bullish, "displacement leaves the FVG"
    before = candles[:i]
    avg = sum(c.body for c in before) / len(before)
    assert disp.body >= 4 * avg
    assert ENTRY == sum(FVG) / 2 and fill.l == ENTRY
    assert all(c.l > ENTRY for c in candles if disp.t < c.t < fill.t), "the fill is the first touch of the CE"
    assert STOP < SWEEP and max(c.h for c in candles) < TARGET
    return {"disp": disp.body, "avg": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_top=2064.0):
    ch = Chart(t, reveal)
    with ch.group("eql"):
        ch.hline(at("12:35") - HALF, at(T_SWEEP) + HALF, EQL, color=t.bear_text, width=1.4)
        ch.label(at("12:35") - HALF, EQL - 0.5, "equal lows 2,020 — sell-side liquidity", size=12,
                 color=t.bear_text, yanchor="top")
    with ch.group("sweep"):
        ch.callout(at(T_SWEEP), SWEEP, at("12:45"), 2013.5, "<b>1:15 PM BD</b> · London sweeps to 2,016",
                   xanchor="center")
    with ch.group("fvg"):
        ch.zone(at("13:15") - HALF, at(T_FILL) - HALF, *FVG, color=t.bull, alpha=0.18, dash="dash")
        ch.callout(at(T_DISP), 2032.0, at("12:50"), 2036.5,
                   f"<b>1:20 PM BD</b> · {STATS['disp']:.1f}-point displacement (avg {STATS['avg']:.1f})<br>"
                   "leaves an FVG 2,022 – 2,028", xanchor="center")
    with ch.group("position"):
        ch.position(at(T_FILL) - HALF, at("14:15"), entry=ENTRY, stop=STOP, targets=[TARGET], unit=1.0,
                    unit_name="pts", fmt=",.0f", long=True)
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1, at("13:55"), 2019.0,
                   f"<b>first touch</b> of the <b style='color:{t.bull_text}'>CE 2,025</b> → buy", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("14:00") + HALF, 2041.5, at("14:10"), TARGET - 2.0,
                      "Hypothetical path<br>— a scenario, not a result", at("13:35"), 2052.0, xanchor="center")
    ch.header("ICT · Venom Model", "The Venom Entry — First Touch After the Sweep",
              "XAU/USD · 5-minute · London kill zone · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT Venom Model lesson")
    ch.caption()
    ch.axes(x_range=[at("12:25"), at("14:20")], y_range=[2010.0, y_top], y_dtick=10, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish Venom", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
