"""
One demand zone, three touches: each reaction is smaller, the lows step down toward the distal line,
and the fourth push closes through it.

Candles: data/gbpusd_1h_touches.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import demand_zone, is_base, is_leg, load

NAME = "fresh-vs-tested-zone"
PIP = 0.0001
C = load(DATA / "gbpusd_1h_touches.csv", Candle)
N = len(C)
BASE, LEG = (3, 4), 5
PROX, DIST = demand_zone([C[i] for i in BASE])
TOUCHES = (10, 15, 18)
I_BREAK = 21


def reactions():
    ends = list(TOUCHES[1:]) + [I_BREAK - 1]
    out = []
    for t, end in zip(TOUCHES, ends):
        hi = max(range(t, end), key=lambda k: C[k].h)
        out.append((t, hi, round((C[hi].h - PROX) / PIP)))
    return out


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(is_base(C[i]) for i in BASE) and is_leg(C[LEG]) and C[LEG].bullish
    assert (PROX, DIST) == (1.2614, 1.2600)
    assert all(c.l > PROX for c in C[LEG + 1:TOUCHES[0]]), "the first touch is the first return"
    for t in TOUCHES:
        assert DIST < C[t].l <= PROX, f"touch {t} inside the zone"
    lows = [C[t].l for t in TOUCHES]
    assert lows == sorted(lows, reverse=True), "each touch goes deeper"
    r = [p for _, _, p in reactions()]
    assert r == sorted(r, reverse=True) and r == [45, 22, 10], r
    assert all(c.c >= DIST for c in C[:I_BREAK]) and C[I_BREAK].c < DIST, "first close below distal"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 0.5
    with ch.group("zone"):
        ch.zone(BASE[0] - 0.4, I_BREAK + 0.5, DIST, PROX, color=t.bull, alpha=0.24)
        ch.hline(BASE[0] - 0.4, I_BREAK + 0.5, PROX, color=t.bull_text, width=1.6, dash="solid")
        ch.hline(BASE[0] - 0.4, x_end, DIST, color=t.bull_text, dash="dash")
        ch.label(BASE[0] - 0.4, DIST - 0.0002, "<b>Demand</b> (drop-base-rally) 1.2600 – 1.2614", size=11,
                 color=t.bull_text, yanchor="top")
    ch.candles(C, "GBP/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    names = ("① Fresh: first touch", "② Second touch", "③ Third touch")
    for k, ((tch, hi, pips), name) in enumerate(zip(reactions(), names), 1):
        with ch.group(f"t{k}"):
            lx, ly = ((hi, C[hi].h + 0.0003), (16.0, 1.2650), (19.2, 1.2642))[k - 1]
            ch.label(lx, ly, f"<b>{name}</b><br>reaction +{pips} pips", size=11, color=t.ink,
                     xanchor="center", yanchor="bottom", align="center")
            ch.hline(tch - 0.4, tch + 0.4, C[tch].l, color=t.bear_text, width=2, dash="solid")
    with ch.group("ssl"):
        ch.callout(TOUCHES[2], C[TOUCHES[2]].l, 14.5, 1.2576, "Lows step down: 1.2611 → 1.2608 → 1.2604<br>"
                   "— sell stops pile up just below the zone", xanchor="center")
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].c, 22.6, 1.2640, "④ Close below the distal line:<br>the zone is finished",
                   xanchor="center")
    ch.header("SMC · Fresh vs Tested Zones", "Fresh vs Tested — Each Touch Uses Up the Zone",
              "GBP/USD · 1-hour candles · reactions measured from the proximal line, 1.2614",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Demand zone")])
    ch.footnote("Synthetic candles built around the levels in the Fresh vs Tested Zones lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.2555, 1.2690], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Fresh vs Tested Zone", OUT)
    print(f"{NAME}: zone {PROX}–{DIST} reactions {reactions()} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
