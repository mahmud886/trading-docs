"""
The 2022 model — EUR/USD, 5-minute, London kill zone, US summer time.

Source: content/en/ict/2022-mentorship-concepts.mdx -> "Example Application" (Asian low swept at 12:20 PM BD, 5m bullish
MSS at 12:35 PM BD, buy 1.0855 at the FVG CE, stop 1.0840, target 1.0930).
Candles in data/eurusd_5m_2022_model.csv are synthetic.
"""

from datetime import timedelta

from _paths import DATA, OUT
from chartkit import Chart, Reveal, at, by_time, levels, load_candles, save

NAME = "eurusd-2022-model"
PIP = 0.0001
HALF = timedelta(minutes=5) * 0.36
ASIA_LOW, SWEEP, LOWER_HIGH, LEG_HIGH = 1.0848, 1.0842, 1.0855, 1.0876
ENTRY, STOP, TARGET = 1.0855, 1.0840, 1.0930
T_SWEEP, T_MSS, T_FILL = "12:20", "12:35", "12:55"

CANDLES = load_candles("eurusd_5m_2022_model", DATA)
OTE = (LEG_HIGH - 0.79 * (LEG_HIGH - SWEEP), LEG_HIGH - 0.62 * (LEG_HIGH - SWEEP))


def validate(candles):
    sweep, mss, fill = (by_time(candles, tm) for tm in (T_SWEEP, T_MSS, T_FILL))
    assert min(c.l for c in candles if c.t < at("12:00")) == ASIA_LOW
    assert sweep.l == SWEEP == min(c.l for c in candles) < ASIA_LOW
    assert max(c.h for c in candles if at("12:00") <= c.t < mss.t) == LOWER_HIGH
    i = candles.index(mss)
    fvg = (candles[i - 1].h, candles[i + 1].l)
    before = candles[:i]
    avg = sum(c.body for c in before) / len(before)
    assert mss.c > LOWER_HIGH and mss.body >= 3 * avg, "MSS with displacement"
    assert round(sum(fvg) / 2, 5) == ENTRY, "entry at the FVG CE"
    assert max(c.h for c in candles if c.t < fill.t) == LEG_HIGH
    assert OTE[0] <= ENTRY <= OTE[1] + 0.00001, "the CE sits at the top of the OTE zone"
    assert fill.l == ENTRY and all(c.l > ENTRY for c in candles if mss.t < c.t < fill.t)
    assert STOP < SWEEP and max(c.h for c in candles) < TARGET
    return {"fvg": fvg, "body": mss.body / PIP, "avg": avg / PIP}


STATS = validate(CANDLES)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    with ch.group("kz") as shown:
        if shown:
            ch.fig.add_vrect(x0=at("12:00") - HALF, x1=at("13:20"), fillcolor=t.accent,
                             opacity=0.05 * ch.reveal.alpha("kz"), line_width=0, layer="below")
        ch.label(at("12:00") - HALF, 1.0936, "<b>London kill zone</b> from 12 PM BD", size=12, color=t.accent,
                 yanchor="top", xshift=4)
        ch.hline(at("11:45"), at(T_SWEEP) + HALF, ASIA_LOW, color=t.bear_text, width=1.2)
        ch.label(at("11:30") - HALF, ASIA_LOW - 0.5 * PIP, "Asian low 1.0848", size=11, color=t.bear_text,
                 yanchor="top")
    with ch.group("sweep"):
        ch.callout(at(T_SWEEP), SWEEP, at("11:45"), 1.0836, "<b>③ 12:20 PM BD</b> · Judas swing takes the Asian "
                   "low", xanchor="center")
    with ch.group("mss"):
        ch.hline(at("12:00"), at(T_MSS) + HALF, LOWER_HIGH, color=t.ink2, dash="dash")
        ch.callout(at(T_MSS), 1.0866, at("11:55"), 1.0885,
                   f"<b>④ 12:35 PM BD · MSS</b>: {STATS['body']:.0f}-pip displacement<br>above 1.0855, leaves an "
                   "FVG 1.0851 – 1.0859", xanchor="center")
    with ch.group("pd"):
        ch.zone(at("12:30") - HALF, at(T_FILL) - HALF, *STATS["fvg"], color=t.bull, alpha=0.18, dash="dash")
        ch.zone(at("12:45") - HALF, at(T_FILL) - HALF, *OTE, color=t.accent, alpha=0.10, dash="dot")
        ch.label(at("12:45"), OTE[0] - 0.4 * PIP, "OTE 62–79%", size=11, color=t.ink3, yanchor="top")
    with ch.group("position"):
        ch.position(at(T_FILL) - HALF, at("13:25"), entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP,
                    unit_name="pips", fmt=".4f", long=True)
    ch.candles(CANDLES, "EUR/USD 5m (synthetic)", price_fmt=".4f")
    with ch.group("entry"):
        ch.callout(at(T_FILL), ENTRY - 0.1 * PIP, at("13:10"), 1.0834, "<b>⑤–⑥</b> FVG CE 1.0855, at the top of OTE "
                   "→ buy", xanchor="center")
    with ch.group("projection"):
        ch.projection(at("13:15") + HALF, 1.0886, at("13:22"), TARGET - 1 * PIP,
                      "Hypothetical path<br>— a scenario,<br>not a result", at("12:58"), 1.0912, xanchor="center")
    ch.header("ICT · 2022 Mentorship", "The 2022 Model — Sweep, Shift, FVG",
              "EUR/USD · 5-minute · daily bias bullish · Times in Bangladesh time (BD, UTC+6), US summer time",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish FVG")])
    ch.footnote("Synthetic candles built around the levels in the ICT 2022 Mentorship lesson")
    ch.caption()
    ch.axes(x_range=[at("11:25"), at("13:30")], y_range=[1.0828, 1.0940], y_dtick=0.0010, y_fmt=".4f",
            x_dtick_min=15)
    return ch.fig


def main():
    paths = save(NAME, build, "2022 Model", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OTE {OTE[0]:.5f}-{OTE[1]:.5f} · risk {risk:g} · reward {reward:g} · R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
