"""
A supply zone (rally-base-drop) and a demand zone (drop-base-rally), with proximal and distal lines,
and a long on the first return to demand, targeting the supply zone.

Candles: data/eurusd_1h_sd.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import demand_zone, is_base, is_leg, load, supply_zone

NAME = "supply-demand-zones"
PIP = 0.0001
C = load(DATA / "eurusd_1h_sd.csv", Candle)
N = len(C)
SUP_BASE, DEM_BASE = (3, 4), (9, 10)
SUP_LEG, DEM_LEG = 5, 11
SUP = supply_zone([C[i] for i in SUP_BASE])   # (proximal, distal)
DEM = demand_zone([C[i] for i in DEM_BASE])
I_FILL = 18
ENTRY, STOP = DEM[0], DEM[1] - 0.0005
TARGET = SUP[0]


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(is_base(C[i]) for i in SUP_BASE + DEM_BASE), "base candles"
    assert is_leg(C[SUP_LEG]) and not C[SUP_LEG].bullish and is_leg(C[DEM_LEG]) and C[DEM_LEG].bullish, "leg-out"
    assert all(C[i].bullish for i in (1, 2)) and all(not C[i].bullish for i in (6, 7, 8)), "rally in / drop in"
    assert SUP == (1.0963, 1.0975) and DEM == (1.0891, 1.0880)
    assert all(c.l > ENTRY for c in C[DEM_LEG + 1:I_FILL]) and C[I_FILL].l <= ENTRY and C[I_FILL].l > DEM[1], "first return"
    assert all(c.h < SUP[0] for c in C[SUP_LEG + 1:]), "supply zone not reached again"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    with ch.group("supply"):
        ch.zone(SUP_BASE[0] - 0.4, x_end, SUP[0], SUP[1], color=t.bear, alpha=0.20)
        ch.hline(SUP_BASE[0] - 0.4, x_end, SUP[0], color=t.bear_text, width=1.6, dash="solid")
        ch.hline(SUP_BASE[0] - 0.4, x_end, SUP[1], color=t.bear_text, dash="dash")
        ch.label(6.0, SUP[1] + 0.0002, "<b>Supply</b> (rally-base-drop) · distal 1.0975 — proximal 1.0963",
                 size=11, color=t.bear_text, yanchor="bottom")
    with ch.group("demand"):
        ch.zone(DEM_BASE[0] - 0.4, x_end, DEM[1], DEM[0], color=t.bull, alpha=0.22)
        ch.hline(DEM_BASE[0] - 0.4, x_end, DEM[0], color=t.bull_text, width=1.6, dash="solid")
        ch.hline(DEM_BASE[0] - 0.4, x_end, DEM[1], color=t.bull_text, dash="dash")
        ch.label(DEM_BASE[0] - 0.4, DEM[1] - 0.0002, "<b>Demand</b> (drop-base-rally) · proximal 1.0891 — distal 1.0880",
                 size=11, color=t.bull_text, yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("supply"):
        ch.callout(3.5, SUP[1], 0.5, 1.0988, "base: small candles, then a fast drop", xanchor="left")
    with ch.group("demand"):
        ch.callout(9.5, DEM[1], 4.5, 1.0866, "base: small candles, then a fast rally", xanchor="center")
    with ch.group("position"):
        ch.callout(I_FILL, C[I_FILL].l, 14.0, 1.0866, "First return → buy at the proximal line", xanchor="center")
    ch.header("SMC · Supply & Demand Zones", "Supply & Demand — the Base Before the Move",
              "EUR/USD · 1-hour candles · zones drawn from the base candles, with proximal and distal lines",
              key=[("■", t.bear, "Supply zone"), ("■", t.bull, "Demand zone"), ("━", t.ink2, "Proximal (solid)"),
                   ("┅", t.ink2, "Distal (dashed)")])
    ch.footnote("Synthetic candles built around the levels in the Supply & Demand Zones lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0858, 1.0995], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Supply and Demand Zones", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: supply {SUP} demand {DEM} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
