"""
Support and resistance as zones: a resistance zone drawn from bodies to wicks, tested four times,
then broken; price retests it from above (the S/R flip) and the long is planned from the retest.

Candles: data/eurusd_4h_flip.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "support-resistance-flip"
PIP = 0.0001
C = load(DATA / "eurusd_4h_flip.csv", Candle, unit_label="4H candle")
N = len(C)
RES = (1.0893, 1.0900)
SUP = (1.0838, 1.0845)
TESTS, SUP_TOUCHES = (2, 8, 14, 17), (5, 11)
I_BREAK, I_RETEST, I_FILL = 18, 22, 23
ENTRY, STOP, TARGET = 1.0905, 1.0878, 1.0960


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    for i in TESTS:
        assert C[i].h >= RES[0] - 0.0002 and max(C[i].o, C[i].c) <= RES[0], f"test {i}: reaches the zone, body below"
    assert all(max(c.o, c.c) <= RES[0] for c in C[:I_BREAK]), "no body above the zone before the break"
    assert C[17].h > RES[1], "one wick pokes above: draw from bodies, not that wick"
    for i in SUP_TOUCHES:
        assert SUP[0] <= C[i].l <= SUP[1]
    assert C[I_BREAK].c > RES[1], "break: close above the zone"
    r = C[I_RETEST]
    assert RES[0] <= r.l <= RES[1] and r.c > RES[1], "retest: dips into the zone, closes above"
    assert all(c.l > RES[1] for c in C[I_BREAK + 1:I_RETEST]) and C[I_FILL].l <= ENTRY
    assert STOP < min(RES[0], r.l) and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("res"):
        ch.zone(-0.5, I_BREAK + 0.5, *RES, color=t.bear, alpha=0.24)
        ch.label(-0.4, 1.0912, "<b>Resistance</b> 1.0893 – 1.0900 (bodies → wicks)", size=11,
                 color=t.bear_text, yanchor="bottom")
        for k, i in enumerate(TESTS, 1):
            ch.label(i, C[i].h + 0.0003, f"test {k}", size=10, color=t.bear_text, xanchor="center", yanchor="bottom")
    with ch.group("sup"):
        ch.zone(-0.5, I_BREAK + 0.5, *SUP, color=t.bull, alpha=0.22)
        ch.label(-0.4, SUP[0] - 0.0003, "<b>Support</b> 1.0838 – 1.0845", size=11, color=t.bull_text, yanchor="top")
    with ch.group("wick"):
        ch.callout(17, C[17].h, 13.5, 1.0925, "A wick to 1.0901 pokes out:<br>the bodies define the zone",
                   xanchor="center")
    with ch.group("flip"):
        ch.zone(I_BREAK - 0.5, x_end, *RES, color=t.bull, alpha=0.24)
        ch.callout(I_BREAK, C[I_BREAK].c, 15.5, 1.0940, "Break: a close above 1.0900", xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_RETEST, C[I_RETEST].l, 19.0, 1.0862, "Retest from above holds:<br>old resistance = new support",
                   xanchor="center")
    ch.header("Price Action · Support & Resistance", "Support & Resistance — Zones, and the Flip",
              "EUR/USD · 4-hour candles · a resistance zone tested four times, broken, then retested as support",
              key=[("■", t.bear, "Resistance"), ("■", t.bull, "Support")])
    ch.footnote("Synthetic candles built around the levels in the Support & Resistance lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0828, 1.0972], y_dtick=0.0020, y_fmt=".4f",
            x_title="4-hour candles", x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Support Resistance Flip", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
