"""
Two demand zones scored with the same 10-point card. The low-scoring zone (B) fails;
the high-scoring zone (A) holds and gives the trade.

Candles: data/eurusd_1h_scoring.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import demand_zone, is_base, load

NAME = "zone-strength-scoring"
PIP = 0.0001
C = load(DATA / "eurusd_1h_scoring.csv", Candle)
N = len(C)
A_BASE, A_LEG = (2,), (3, 4)
B_BASE, B_LEG = (7, 8, 9, 10), (11,)
PA, DA = demand_zone([C[i] for i in A_BASE])
PB, DB = demand_zone([C[i] for i in B_BASE])
SWING_LOW, SWING_HIGH = C[2].l, max(c.h for c in C[:14])
EQ = (SWING_LOW + SWING_HIGH) / 2
B_TOUCH, B_BREAK, A_FILL = 15, 18, 21
ENTRY, STOP, TARGET = PA, 1.0822, 1.0900

# factor: (zone A points, zone B points, what decided it)
CARD = [
    ("Leg-out", 2, 0, "A: displacement + FVG · B: slow, no FVG"),
    ("Time in base", 2, 1, "A: 1 candle · B: 4 candles"),
    ("Freshness", 2, 1, "A: first touch · B: second touch"),
    ("Broke structure", 2, 2, "both leg-outs made a new high"),
    ("Location", 2, 0, "A: discount · B: premium"),
]
SCORE_A, SCORE_B = sum(a for _, a, _, _ in CARD), sum(b for _, _, b, _ in CARD)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(is_base(C[i]) for i in A_BASE + B_BASE)
    assert (PA, DA) == (1.0838, 1.0830) and (PB, DB) == (1.0889, 1.0879)
    assert C[A_LEG[0] - 1].h < C[A_LEG[-1]].l, "zone A's leg-out leaves an FVG"
    assert C[A_LEG[-1]].c > C[0].h and C[13].h > C[6].h, "both leg-outs break structure"
    assert DA < PA < EQ < DB, "A in discount, B in premium of the 1.0830 – 1.0910 leg"
    assert DB < C[B_TOUCH].l <= PB and all(c.c >= DB for c in C[B_BASE[0]:B_BREAK]) and C[B_BREAK].c < DB, "B: touch, then fails"
    assert all(c.l > PA for c in C[A_LEG[-1] + 1:A_FILL]) and DA < C[A_FILL].l <= PA, "A: first touch holds"
    assert max(c.h for c in C[A_FILL:]) < TARGET, "target not reached — the plan, not a result"
    assert (SCORE_A, SCORE_B) == (10, 4)


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 6.0
    with ch.group("zA"):
        ch.zone(A_BASE[0] - 0.4, x_end, DA, PA, color=t.bull, alpha=0.26)
        ch.label(A_BASE[0] - 0.4, DA - 0.0002, "<b>Zone A</b> 1.0830 – 1.0838", size=11, color=t.bull_text,
                 yanchor="top")
    with ch.group("zB"):
        ch.zone(B_BASE[0] - 0.4, B_BREAK + 0.5, DB, PB, color=t.zone, alpha=0.22)
        ch.label(B_BASE[0] - 0.4, PB + 0.0002, "<b>Zone B</b> 1.0879 – 1.0889", size=11, color=t.zone_text,
                 yanchor="bottom")
    with ch.group("card"):
        rows = "<br>".join(f"{name}: <b>{a}</b> · <b>{b}</b>" for name, a, b, _ in CARD)
        ch.label(N + 0.5, 1.0925, f"<b>Score card (0–2 each)</b><br>factor: A · B<br>{rows}<br>"
                 f"<b>Total: A {SCORE_A}/10 · B {SCORE_B}/10</b>", size=12, color=t.ink, yanchor="top")
    with ch.group("position"):
        ch.position(A_FILL - 0.4, N + 0.3, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("bfail"):
        ch.callout(B_BREAK, C[B_BREAK].c, 13.0, 1.0858, "B (4/10) gives a small bounce,<br>then closes below its distal",
                   xanchor="center")
    with ch.group("position"):
        ch.callout(A_FILL, C[A_FILL].l, 16.0, 1.0820, "A (10/10), first touch → buy 1.0838", xanchor="center")
    ch.header("SMC · Zone Strength Scoring", "Zone Strength Scoring — Grade Before You Trade",
              "EUR/USD · 1-hour candles · two demand zones, one score card",
              key=[("■", t.bull, "Zone A"), ("■", t.zone, "Zone B")])
    ch.footnote("Synthetic candles built around the levels in the Zone Strength Scoring lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0810, 1.0930], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Zone Strength Scoring", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: A {PA}/{DA} B {PB}/{DB} EQ {EQ:.5f} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
