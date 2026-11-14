"""
A daily swing trade: resistance at 1.2580 – 1.2600 rejects twice, breaks, and is retested as support; the long is
held for days toward the next daily level, with position size worked out from the wider stop.

Candles: data/gbpusd_d1_swing.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "daily-swing-flip"
PIP = 0.0001
C = load(DATA / "gbpusd_d1_swing.csv", Candle, unit_label="day")
N = len(C)
ZONE = (1.2580, 1.2600)
TOUCHES, I_BREAK, I_RETEST, I_FILL = (3, 9), 14, 20, 21
ENTRY, STOP, TARGET = 1.2615, 1.2555, 1.2800
ACCOUNT, RISK_PCT = 10_000, 0.01


def lots():
    pips = round((ENTRY - STOP) / PIP)
    return pips, ACCOUNT * RISK_PCT / (pips * 10)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(c.h <= ZONE[1] for c in C[:I_BREAK]) and all(C[i].h == ZONE[1] for i in TOUCHES), "resistance"
    assert C[I_BREAK].c > ZONE[1] and all(c.l > ZONE[1] for c in C[I_BREAK + 1:I_RETEST]), "break, then away"
    r = C[I_RETEST]
    assert ZONE[0] <= r.l <= ZONE[1] and r.c > ZONE[1], "retest dips into the zone, closes above"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h and STOP < ZONE[0]
    assert max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("zone"):
        ch.zone(-0.5, I_BREAK - 0.5, *ZONE, color=t.bear, alpha=0.22)
        ch.label(-0.4, ZONE[1] + 0.0010, "<b>Daily resistance</b> 1.2580 – 1.2600", size=11, color=t.bear_text,
                 yanchor="bottom")
    with ch.group("flip"):
        ch.zone(I_BREAK - 0.5, x_end, *ZONE, color=t.bull, alpha=0.22)
        ch.label(I_BREAK + 0.5, ZONE[0] - 0.0012, "broken → support", size=11, color=t.bull_text, yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "GBP/USD daily (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("retest"):
        ch.callout(I_RETEST, C[I_RETEST].l, 15.0, 1.2500, "Daily retest holds the zone;<br>"
                   "4H confirms → buy 1.2615", xanchor="center")
    with ch.group("size"):
        pips, lot = lots()
        ch.label(0.0, 1.2785, f"<b>Position size</b>: 1% of 10,000 USD = 100 USD · stop {pips} pips<br>"
                 f"100 ÷ ({pips} × 10 USD) = <b>{lot:.3f} lots</b> → round down to 0.16", size=12, color=t.ink,
                 yanchor="top")
    ch.header("Price Action · Swing Trading", "Swing Trading — a Daily Flip, Held for Days",
              "GBP/USD · daily candles · resistance breaks, the retest holds, the trade targets the next daily level",
              key=[("■", t.bear, "Resistance"), ("■", t.bull, "Flipped support")])
    ch.footnote("Synthetic candles built around the levels in the Swing Trading lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2420, 1.2830], y_dtick=0.0050, y_fmt=".4f", x_title="Days",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Daily Swing Flip", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} size {lots()} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
