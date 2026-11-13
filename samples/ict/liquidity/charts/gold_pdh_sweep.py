"""
Buy-side liquidity sweep → bearish trade — Gold (XAU/USD), 5-minute, NY AM.

Source: content/en/ict/liquidity.mdx -> "Example: Gold Liquidity Sweep Trade" (PDH 2,050, sweep to 2,052,
5m bearish MSS, sell 2,048 at the bearish OB at 7:45 PM BD, stop 2,053, target SSL 2,020).
Candles in data/xauusd_5m_pdh_sweep.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-pdh-sweep"
PT = 1.0
BAR = timedelta(minutes=5)
HALF = BAR * 0.36

# --- Levels quoted from the lesson ---
PDH, SWEEP_HIGH, SSL = 2050.0, 2052.0, 2020.0
ENTRY, STOP, TARGET = 2048.0, 2053.0, 2020.0
T_ENTRY = "19:45"  # "BD Time: 7:45 PM"

# --- Levels defined by the synthetic candles ---
HIGHER_LOW = 2045.5
T_HL, T_SWEEP, T_DISP = "19:10", "19:25", "19:30"

CANDLES = load_candles("xauusd_5m_pdh_sweep", DATA)


def validate(candles):
    sweep, disp, fill = by_time(candles, T_SWEEP), by_time(candles, T_DISP), by_time(candles, T_ENTRY)
    before = [c for c in candles if c.t < sweep.t]
    assert max(c.h for c in before) <= PDH, "PDH untouched (at most tagged) before the sweep"
    assert sweep.h == SWEEP_HIGH and sweep.c < PDH, "sweep: trades above PDH, closes back below"
    assert sweep.bullish and not disp.bullish, "bearish OB = last up-candle before the displacement"
    hl = by_time(candles, T_HL)
    assert hl.l == HIGHER_LOW and all(c.l > HIGHER_LOW for c in candles if hl.t < c.t < disp.t)
    avg = sum(c.body for c in before) / len(before)
    assert disp.c < HIGHER_LOW and disp.body >= 2 * avg, "5m MSS: displacement closes below the higher low"
    assert sweep.o == ENTRY, "entry at the OB's proximal edge (its open)"
    assert fill.h >= ENTRY and all(c.h < ENTRY for c in candles if disp.t < c.t < fill.t), "first retest fills"
    assert STOP > SWEEP_HIGH and TARGET == SSL
    return {"disp_body": disp.body, "avg_body": avg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x0, x_end = at("18:25"), at("20:55")
    box_x0 = at(T_ENTRY) - HALF
    sweep = by_time(CANDLES, T_SWEEP)

    ch.zone(at(T_SWEEP) - HALF, box_x0, sweep.l, sweep.h)
    ch.label(at(T_SWEEP) - HALF, sweep.h + 1.4,
             f"<b style='color:{t.zone_text}'>Bearish OB 2,047.5 – 2,052</b> · last up-candle", size=12,
             xanchor="right", yanchor="bottom")
    ch.position(box_x0, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PT, unit_name="pts", fmt=",.0f",
                long=False)
    ch.label(x_end, STOP + 2.2, "Invalidation: 5m close above 2,052 (sweep high)", size=12, color=t.ink3,
             xanchor="right", yanchor="bottom")
    ch.candles(CANDLES, "XAU/USD 5m (synthetic)", price_fmt=",.1f")

    ch.hline(x0, at(T_SWEEP) + HALF, PDH, color=t.bull_text, width=1.4)
    ch.label(x0, PDH + 0.6, f"<b style='color:{t.bull_text}'>PDH 2,050</b> · previous day high — buy stops above",
             yanchor="bottom", xshift=6)
    ch.hline(x0, box_x0, SSL, color=t.bear_text, width=1.4)
    ch.label(x0, SSL + 0.6, f"<b style='color:{t.bear_text}'>SSL 2,020</b> · earlier session low — sell stops below"
             " (target)", yanchor="bottom", xshift=6)

    ch.step(at("18:28"), 2056.5, 1, "<b>Sweep</b>: NY AM runs above PDH to 2,052, closes back below 2,050",
            color=t.ink2)
    ch.hline(at(T_HL), at(T_DISP), HIGHER_LOW, color=t.ink2, dash="dash")
    ch.label(at(T_HL) + HALF, HIGHER_LOW - 0.6, "higher low 2,045.5", size=12, yanchor="top")
    ch.callout(at(T_DISP), 2044.0, at("19:20"), 2037.5,
               f"<span style='color:{t.accent}'>②</span> <b>5m MSS</b>: {STATS['disp_body']:.1f}-pt displacement "
               f"(avg {STATS['avg_body']:.1f})<br>closes below the 2,045.5 higher low", xanchor="center", yanchor="top")
    ch.callout(at(T_ENTRY) + HALF, ENTRY + 0.2, at("20:17"), 2044.2,
               f"<span style='color:{t.accent}'>③</span> <b>Retest of the OB</b> at 7:45 PM BD<br>"
               "sell 2,048 · stop above the sweep", xanchor="center")
    ch.projection(at("20:00") + HALF, 2034.5, at("20:40"), TARGET + 1.5,
                  "Hypothetical path to SSL<br>— a scenario, not a result", at("20:22"), 2031, yanchor="middle")

    ch.header("ICT · Liquidity", "Buy-Side Liquidity Sweep — Sell After the Raid",
              "Gold (XAU/USD) · 5-minute · NY AM kill zone · Times in Bangladesh time (BD, UTC+6)",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.zone, "Order Block")])
    ch.footnote("Synthetic candles built around the levels in the ICT Liquidity lesson")
    ch.caption()
    ch.axes(x_range=[at("18:20"), at("21:00")], y_range=[2015, 2059], y_dtick=5, y_fmt=",.0f", x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "Gold PDH Sweep — XAU/USD", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PT)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
