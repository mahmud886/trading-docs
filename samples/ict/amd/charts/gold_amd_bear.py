"""
A bearish AMD day — Gold, 15-minute, US summer time.

Source: content/en/ict/amd.mdx -> "Example 2: Gold Bearish AMD Day" (Asian range 2,035–2,042, London spikes to 2,046,
bearish MSS, sell 2,041 in the bearish FVG, stop 2,047, target 2,018).
Candles in data/gold_15m_amd_bear.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "gold-amd-bear"
HALF = timedelta(minutes=15) * 0.36
ASIA_LOW, ASIA_HIGH, SWEEP_HIGH = 2035.0, 2042.0, 2046.0
ENTRY, STOP, TARGET = 2041.0, 2047.0, 2018.0
T_HIGH, T_MSS, T_FILL, HIGHER_LOW = "12:15", "12:45", "13:30", 2043.0

CANDLES = load_candles("gold_15m_amd_bear", DATA)


def validate(candles):
    asia = [c for c in candles if c.t < at("12:00")]
    assert (min(c.l for c in asia), max(c.h for c in asia)) == (ASIA_LOW, ASIA_HIGH)
    high, mss, fill = (by_time(candles, tm) for tm in (T_HIGH, T_MSS, T_FILL))
    assert high.h == SWEEP_HIGH == max(c.h for c in candles), "London spike is the high of the day"
    assert min(c.l for c in candles if high.t <= c.t < mss.t) == HIGHER_LOW
    before = [c for c in candles if c.t < mss.t]
    avg = sum(c.body for c in before) / len(before)
    assert not mss.bullish and mss.c < HIGHER_LOW and mss.body >= 2 * avg, "bearish MSS with displacement"
    i = candles.index(mss)
    fvg = (candles[i + 1].h, candles[i - 1].l)
    assert fvg[0] < ENTRY < fvg[1], "entry inside the bearish FVG"
    assert fill.h == ENTRY and all(c.h < ENTRY for c in candles if mss.t < c.t < fill.t)
    assert STOP > SWEEP_HIGH and min(c.l for c in candles) > TARGET
    return {"mss_body": mss.body, "avg_body": avg, "fvg": fvg}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None, *, y_bottom=2014.0):
    ch = Chart(t, reveal)
    for i, (a, b, name, sess, group) in enumerate((("09:00", "12:00", "① Accumulation", "Asian range", "asia"),
                                                  ("12:00", "13:00", "② Manipulation", "London open", "manip"),
                                                  ("13:00", "15:15", "③ Distribution", "the real move", "dist"))):
        with ch.group(group) as shown:
            if shown:
                ch.fig.add_vrect(x0=at(a) - HALF, x1=at(b) - HALF, fillcolor=(t.ink3, t.bull, t.bear)[i],
                                 opacity=0.06 * ch.reveal.alpha(group), line_width=0, layer="below")
            ch.label(at(a) - HALF, 2032.6 if i == 0 else 2051.2, f"<b>{name}</b><br>{sess}", size=12, yanchor="top", xshift=4,
                     color=(t.ink2, t.bull_text, t.bear_text)[i])
    with ch.group("asia"):
        ch.zone(at("09:00") - HALF, at("12:00") - HALF, ASIA_LOW, ASIA_HIGH, color=t.ink3, alpha=0.10, dash="dot")
        ch.label(at("09:00") - HALF, ASIA_LOW - 0.5, "Asian range 2,035 – 2,042", size=12, yanchor="top")
    with ch.group("position"):
        box_x0, box_x1 = at(T_FILL) - HALF, at("15:15")
        ch.zone(at(T_MSS) - HALF, box_x0, *STATS["fvg"], color=t.bear, alpha=0.16, dash="dash")
        ch.position(box_x0, box_x1, entry=ENTRY, stop=STOP, targets=[TARGET], unit=1.0, unit_name="pts",
                    fmt=",.0f", long=False)
    ch.candles(CANDLES, "XAU/USD 15m (synthetic)", price_fmt=",.1f")
    with ch.group("manip"):
        ch.hline(at("09:30"), at(T_HIGH) + HALF, ASIA_HIGH, color=t.bull_text, width=1.2)
        ch.callout(at(T_HIGH), SWEEP_HIGH, at("10:30"), 2047.5,
                   "<b>12:15 PM BD</b>: London spikes above the<br>Asian high to 2,046 — buy stops taken",
                   xanchor="center")
    with ch.group("mss"):
        ch.hline(at("12:15"), at(T_MSS) + HALF, HIGHER_LOW, color=t.ink2, dash="dash")
        ch.callout(at(T_MSS), 2037.0, at("10:45"), 2029.5,
                   f"<b>12:45 PM BD · MSS</b>: {STATS['mss_body']:.1f}-point bearish displacement<br>(avg "
                   f"{STATS['avg_body']:.1f}) closes below 2,043 and leaves an FVG", xanchor="center")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY + 0.1, at("14:30"), 2044.5,
                   f"Back into the <b style='color:{t.bear_text}'>bearish FVG</b> → sell 2,041", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("14:45") + HALF, 2026.0, at("15:05"), TARGET + 1.5,
                      "Hypothetical path<br>— a scenario,<br>not a result", at("13:40"), 2021.0, xanchor="center")
    ch.header("ICT · AMD", "AMD — a Bearish Day: Range, False Rally, Real Drop",
              "XAU/USD · 15-minute · daily bias bearish · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "Bearish FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT AMD lesson")
    ch.caption()
    ch.axes(x_range=[at("08:45"), at("15:30")], y_range=[y_bottom, 2052.0], y_dtick=4, y_fmt=",.0f",
            x_dtick_min=60)
    return ch.fig


def main():
    paths = save(NAME, build, "Bearish AMD Day", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
    print(f"{NAME}: risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
