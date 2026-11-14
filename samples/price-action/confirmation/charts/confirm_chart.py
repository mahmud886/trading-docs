"""
Stacking confirmation at an H4 demand zone (EUR/USD, 15m): the zone is reached, a hammer closes back above it,
structure breaks above the last lower high (CHOCH), and the long is taken on the retest.

Candles: data/eurusd_15m_confirmation.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "confirmation-stack"
PIP = 0.0001
C = load(DATA / "eurusd_15m_confirmation.csv", Candle, unit_label="15m candle")
N = len(C)
ZONE = (1.0840, 1.0850)
I_TOUCH, I_HAMMER, I_LH, I_CHOCH, I_FILL = 8, 9, 6, 12, 14
LH = C[I_LH].h
ENTRY, STOP, TARGET = 1.0862, 1.0836, 1.0915


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(c.l > ZONE[1] for c in C[:I_TOUCH]) and C[I_TOUCH].l <= ZONE[1], "first touch of the zone"
    h = C[I_HAMMER]
    body = abs(h.c - h.o)
    assert h.bullish and min(h.o, h.c) - h.l >= 3 * body and h.h - max(h.o, h.c) <= body, "hammer"
    assert ZONE[0] <= h.l <= ZONE[1] and h.c > ZONE[1], "hammer wicks into the zone, closes above"
    assert C[I_LH].h > C[I_LH - 1].h and C[I_LH].h > C[I_LH + 1].h and C[I_LH].h < C[3].h, "last lower high"
    assert all(c.c <= LH for c in C[I_LH:I_CHOCH]) and C[I_CHOCH].c > LH, "CHOCH closes above the lower high"
    assert C[I_FILL].l <= ENTRY <= C[I_FILL].h and all(c.l > ENTRY for c in C[I_CHOCH:I_FILL]), "retest fills"
    assert STOP < h.l and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("zone"):
        ch.zone(-0.5, x_end, *ZONE, color=t.bull, alpha=0.22)
        ch.label(-0.4, ZONE[0] - 0.0002, "<b>H4 demand zone</b> 1.0840 – 1.0850", size=11, color=t.bull_text,
                 yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("touch"):
        ch.callout(I_TOUCH, C[I_TOUCH].l, 5.0, 1.0838, "① Zone reached — not a signal yet", xanchor="center")
    with ch.group("hammer"):
        ch.callout(I_HAMMER, C[I_HAMMER].l, 11.5, 1.0836, "② Hammer <b>closes</b> back above the zone", xanchor="center")
    with ch.group("choch"):
        ch.hline(I_LH, I_CHOCH + 0.4, LH, color=t.ink3, dash="dash")
        ch.label(I_LH, LH + 0.0002, f"last lower high {LH:.4f}", size=10, color=t.ink3, yanchor="bottom")
        ch.callout(I_CHOCH, C[I_CHOCH].h, 9.0, 1.0892, "③ CHOCH: close above 1.0869", xanchor="center")
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 17.0, 1.0855, "④ Retest → buy 1.0862", xanchor="center")
    ch.header("Price Action · Confirmation", "Confirmation — Evidence Added One Close at a Time",
              "EUR/USD · 15-minute candles · H4 demand zone, daily trend up · zone, candle, structure, then entry",
              key=[("■", t.bull, "H4 demand"), ("┅", t.ink3, "Last lower high")])
    ch.footnote("Synthetic candles built around the levels in the Confirmation lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0826, 1.0925], y_dtick=0.0010, y_fmt=".4f",
            x_title="15-minute candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Confirmation", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
