"""
The full narrative on one GBP/USD 1H chart: a dealing range (1.2600 – 1.2720) with its 50% line, equal highs above
as the draw on liquidity, equal lows in discount swept, a displacement that leaves an FVG, and a long on the retrace
into that FVG, still in discount, targeting the liquidity above the equal highs.

Candles: data/gbpusd_1h_narrative.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "advanced-narrative"
PIP = 0.0001
C = load(DATA / "gbpusd_1h_narrative.csv", Candle, unit_label="hour")
N = len(C)
I_LOW, I_HIGH = 2, 10
R_LOW, R_HIGH = C[I_LOW].l, C[I_HIGH].h
EQ = round((R_LOW + R_HIGH) / 2, 4)
EQH, EQL = (10, 14), (18, 21)
I_SWEEP, I_DISP = 23, (24, 25)
FVG = (C[I_SWEEP].h, C[I_SWEEP + 2].l)
I_FILL = 27
ENTRY, STOP, TARGET = 1.2652, 1.2612, 1.2725


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert R_LOW == min(c.l for c in C) and R_HIGH == max(c.h for c in C), "dealing range"
    assert C[EQH[0]].h == C[EQH[1]].h == R_HIGH, "equal highs"
    lo = C[EQL[0]].l
    assert C[EQL[1]].l == lo < EQ and all(c.l > lo for c in C[EQL[0] + 1:EQL[1]]), "equal lows in discount"
    assert all(c.l > lo for c in C[EQL[1] + 1:I_SWEEP]), "untouched until the sweep"
    s = C[I_SWEEP]
    assert s.l < lo and s.c > lo and s.bullish, "sweep: wick below the equal lows, close back above"
    assert all(C[k].bullish for k in I_DISP) and FVG[0] < FVG[1], "displacement leaves an FVG"
    assert all(c.l > ENTRY for c in C[I_DISP[1]:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h
    assert FVG[0] <= ENTRY <= FVG[1] and ENTRY < EQ, "entry inside the FVG and in discount"
    assert STOP < s.l and max(c.h for c in C[I_FILL:]) < TARGET and TARGET > R_HIGH, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    with ch.group("range"):
        ch.zone(I_LOW, x_end, EQ, R_HIGH, color=t.bear, alpha=0.07)
        ch.zone(I_LOW, x_end, R_LOW, EQ, color=t.bull, alpha=0.07)
        ch.hline(I_LOW, x_end, EQ, color=t.ink2, dash="dash", width=1.4)
        ch.label(x_end, EQ + 0.0002, f"<b>50%</b> {EQ:.4f}", size=11, color=t.ink2, xanchor="right", yanchor="bottom")
        ch.label(I_LOW + 0.3, R_HIGH - 0.0004, "<b>Premium</b> (above 50%)", size=11, color=t.bear_text, yanchor="top")
        ch.label(11.0, R_LOW + 0.0004, "<b>Discount</b> (below 50%)", size=11, color=t.bull_text, yanchor="bottom")
        ch.label(I_LOW, R_LOW - 0.0003, f"range low {R_LOW:.4f}", size=10, color=t.ink3, xanchor="center", yanchor="top")
    with ch.group("eqh"):
        ch.hline(EQH[0] - 0.3, x_end, R_HIGH, color=t.bear_text, dash="dot", width=1.6)
        ch.label((EQH[0] + EQH[1]) / 2, R_HIGH + 0.0003, "<b>① Equal highs 1.2720</b> — draw on liquidity",
                 size=11, color=t.bear_text, xanchor="center", yanchor="bottom")
    with ch.group("eql"):
        ch.hline(EQL[0] - 0.3, I_SWEEP + 0.4, C[EQL[0]].l, color=t.bull_text, dash="dot", width=1.6)
        ch.label(EQL[0] - 0.5, C[EQL[0]].l - 0.0003, "② Equal lows 1.2625", size=11, color=t.bull_text,
                 xanchor="right", yanchor="top")
    with ch.group("fvg"):
        ch.zone(I_SWEEP + 0.6, x_end, *FVG, color=t.zone, alpha=0.30, dash="dot")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("sweep"):
        ch.callout(I_SWEEP, C[I_SWEEP].l, 19.0, 1.2603, "③ Sweep: wick to 1.2616,<br>close back above", xanchor="center")
    with ch.group("fvg"):
        ch.callout(24.5, 1.2664, 20.5, 1.2690, "④ Displacement leaves<br>an FVG 1.2643 – 1.2660", xanchor="center")
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 27.5, 1.2630, "⑤ Retrace into the FVG,<br>in discount → buy 1.2652",
                   xanchor="center")
    ch.header("Price Action · Advanced", "Advanced Price Action — One Chart, the Whole Narrative",
              "GBP/USD · 1-hour candles · range, liquidity on both sides, sweep, displacement, entry in discount",
              key=[("■", t.bear, "Premium"), ("■", t.bull, "Discount"), ("■", t.zone, "FVG")])
    ch.footnote("Synthetic candles built around the levels in the Advanced Price Action lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2585, 1.2745], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Advanced Price Action", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: EQ {EQ} FVG {FVG} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
