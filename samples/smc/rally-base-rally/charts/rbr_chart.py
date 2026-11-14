"""
Two rally-base-rally demand zones in an uptrend; a long on the first return to the newer one.

Candles: data/eurusd_1h_rbr.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import demand_zone, is_base, is_leg, load

NAME = "rally-base-rally"
PIP = 0.0001
C = load(DATA / "eurusd_1h_rbr.csv", Candle)
N = len(C)
Z1 = {"rally": (0, 1), "base": (2, 3), "leg": 4}
Z2 = {"rally": (8, 9), "base": (10, 11), "leg": 12}
P1, D1 = demand_zone([C[i] for i in Z1["base"]])
P2, D2 = demand_zone([C[i] for i in Z2["base"]])
PRIOR_HIGH = C[5].h
I_FILL = 16
ENTRY, STOP, TARGET = P2, 1.0855, 1.0930


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    for z in (Z1, Z2):
        assert all(C[i].bullish for i in z["rally"]), "rally in"
        assert all(is_base(C[i]) for i in z["base"]), "base"
        assert is_leg(C[z["leg"]]) and C[z["leg"]].bullish, "rally out"
    assert (P1, D1) == (1.0824, 1.0816) and (P2, D2) == (1.0870, 1.0863)
    assert C[Z2["leg"]].c > PRIOR_HIGH, "the second leg-out breaks the prior high"
    assert all(c.l > P1 for c in C[Z1["leg"] + 1:]), "zone 1 stays fresh"
    assert all(c.l > P2 for c in C[Z2["leg"] + 1:I_FILL]) and D2 < C[I_FILL].l <= P2, "first return to zone 2"
    assert STOP < D2 and max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    for g, z, p, d, name in (("z1", Z1, P1, D1, "RBR ① 1.0816 – 1.0824 (fresh)"),
                             ("z2", Z2, P2, D2, "RBR ② 1.0863 – 1.0870")):
        with ch.group(g):
            b0 = z["base"][0]
            ch.zone(b0 - 0.4, x_end, d, p, color=t.bull, alpha=0.22)
            ch.hline(b0 - 0.4, x_end, p, color=t.bull_text, width=1.5, dash="solid")
            ch.hline(b0 - 0.4, x_end, d, color=t.bull_text, dash="dash")
            ch.label(b0 + 2.0, d - 0.0002, f"<b>{name}</b>", size=11, color=t.bull_text, yanchor="top")
    with ch.group("z1"):
        ch.callout(2.5, C[2].h, 2.0, 1.0858, "rally · base · rally", xanchor="center")
    with ch.group("z2"):
        ch.hline(5, Z2["leg"] + 0.4, PRIOR_HIGH, color=t.ink3, dash="dot")
        ch.callout(Z2["leg"] - 0.3, PRIOR_HIGH, 9.0, 1.0905, "Leg-out breaks the 1.0862 high:<br>the trend continues",
                   xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("position"):
        ch.callout(I_FILL, C[I_FILL].l, 13.0, 1.0838, "First return to RBR ② → buy 1.0870", xanchor="center")
    ch.header("SMC · Rally-Base-Rally", "Rally-Base-Rally — Demand Inside an Uptrend",
              "EUR/USD · 1-hour candles · each pause in the trend leaves a demand zone",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "RBR demand")])
    ch.footnote("Synthetic candles built around the levels in the Rally-Base-Rally lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0790, 1.0940], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Rally Base Rally", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: Z1 {P1}/{D1} Z2 {P2}/{D2} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
