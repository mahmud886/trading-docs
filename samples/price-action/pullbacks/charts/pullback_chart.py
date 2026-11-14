"""
A healthy pullback: a 120-pip impulse (1.0800 → 1.0920) retraces to 61.8% (1.0846), right at old resistance
(1.0850), and the long is planned from the confluence.

Candles: data/eurusd_4h_pullback.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "fib-pullback-confluence"
PIP = 0.0001
C = load(DATA / "eurusd_4h_pullback.csv", Candle, unit_label="4H candle")
N = len(C)
I_LOW, I_HIGH, I_PB, I_OLD = 4, 11, 16, 1
LOW, HIGH = C[I_LOW].l, C[I_HIGH].h
FIBS = [0.382, 0.5, 0.618, 0.786]
OLD_RES = C[I_OLD].h
ENTRY, STOP, TARGET = 1.0852, 1.0825, 1.0940


def fib(r):
    return round(HIGH - (HIGH - LOW) * r, 5)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert (LOW, HIGH) == (1.0800, 1.0920) and LOW == min(c.l for c in C) and HIGH == max(c.h for c in C)
    assert all(c.h < OLD_RES for c in C[I_OLD + 1:6]) and OLD_RES == 1.0850, "old resistance before the impulse"
    pb = C[I_PB]
    assert pb.l == min(c.l for c in C[I_HIGH:]) and abs(pb.l - fib(0.618)) <= 0.0001, "pullback ends at 61.8%"
    assert abs(pb.l - OLD_RES) <= 0.0005, "confluence with old resistance"
    assert pb.l > fib(0.786) > STOP, "healthy: above 78.6%, stop below it"
    assert pb.l <= ENTRY <= pb.h and max(c.h for c in C[I_PB:]) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("fib"):
        for r in FIBS:
            y = fib(r)
            ch.hline(-0.5, x_end, y, color=t.zone if r in (0.5, 0.618) else t.ink3, dash="dot",
                     width=1.6 if r == 0.618 else 1.0)
            ch.label(-0.6, y, f"{r * 100:.1f}%  {y:.4f}", size=10,
                     color=t.zone_text if r in (0.5, 0.618) else t.ink3, xanchor="right")
        ch.hline(I_LOW, x_end, HIGH, color=t.ink3, dash="solid", width=0.8)
        ch.hline(I_LOW, x_end, LOW, color=t.ink3, dash="solid", width=0.8)
        ch.label(I_HIGH, HIGH + 0.0003, "<b>Impulse high 1.0920</b>", size=11, color=t.ink2, xanchor="center",
                 yanchor="bottom")
        ch.label(I_LOW, LOW - 0.0003, "<b>Impulse low 1.0800</b>", size=11, color=t.ink2, xanchor="center",
                 yanchor="top")
    with ch.group("old"):
        ch.zone(I_OLD - 0.4, x_end, 1.0846, OLD_RES, color=t.bear, alpha=0.18)
        ch.label(I_OLD + 0.6, OLD_RES + 0.0003, "old resistance 1.0850", size=10, color=t.bear_text, yanchor="bottom")
    with ch.group("position"):
        ch.position(I_PB - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_PB, C[I_PB].l, 12.5, 1.0812, "Pullback ends at 61.8% (1.0846),<br>"
                   "on old resistance → buy 1.0852", xanchor="center")
    ch.header("Price Action · Pullbacks", "Pullbacks — Fibonacci Meets a Level",
              "EUR/USD · 4-hour candles · a 120-pip impulse retraces to 61.8%, where old resistance sits",
              key=[("┅", t.zone, "50% / 61.8%"), ("┅", t.ink3, "38.2% / 78.6%"), ("■", t.bear, "Old resistance")])
    ch.footnote("Synthetic candles built around the levels in the Pullbacks lesson")
    ch.caption()
    ch.axes(x_range=[-3.2, x_end + 0.3], y_range=[1.0788, 1.0952], y_dtick=0.0020, y_fmt=".4f",
            x_title="4-hour candles", x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Fibonacci Pullback", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: fibs {[fib(r) for r in FIBS]} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
