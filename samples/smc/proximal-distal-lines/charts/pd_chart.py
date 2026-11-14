"""
Proximal and distal lines of a demand zone, and three entries inside it (proximal, 50%, deep),
all with the same stop below the distal line and the same target.

Candles: data/eurusd_15m_pd.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import demand_zone, is_base, is_leg, load

NAME = "proximal-distal-lines"
PIP = 0.0001
C = load(DATA / "eurusd_15m_pd.csv", Candle, unit_label="candle")
N = len(C)
BASE, LEG = (2, 3), 4
PROX, DIST = demand_zone([C[i] for i in BASE])
WICK_PROX = max(C[i].h for i in BASE)
MID = round((PROX + DIST) / 2, 5)
I_FILL = 9
STOP, TARGET = 1.0876, 1.0955
ENTRIES = {"A": (PROX, "Proximal"), "B": (MID, "50% of the zone"), "C": (1.0885, "Deep, near distal")}


def rr(e):
    risk, [(_, reward, r)] = levels(e, STOP, [TARGET], PIP)
    return risk, reward, r


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(is_base(C[i]) for i in BASE) and is_leg(C[LEG]) and C[LEG].bullish
    assert (PROX, DIST, WICK_PROX, MID) == (1.0898, 1.0882, 1.0903, 1.0890)
    assert all(c.l > PROX for c in C[LEG + 1:I_FILL]), "first return"
    low = C[I_FILL].l
    assert low <= ENTRIES["A"][0] and low <= ENTRIES["B"][0] and low > ENTRIES["C"][0], "A, B fill; C misses"
    assert min(c.l for c in C[I_FILL:]) > ENTRIES["C"][0] and STOP < DIST
    assert max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"
    rs = [rr(e)[2] for e, _ in ENTRIES.values()]
    assert rs == sorted(rs), "deeper entry, higher R:R"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 6.0
    with ch.group("zone"):
        ch.zone(BASE[0] - 0.4, x_end, DIST, PROX, color=t.bull, alpha=0.22)
        ch.hline(BASE[0] - 0.4, x_end, PROX, color=t.bull_text, width=1.8, dash="solid")
        ch.hline(BASE[0] - 0.4, x_end, DIST, color=t.bull_text, width=1.5, dash="dash")
        ch.label(-0.6, PROX, "<b>Proximal 1.0898</b><br>highest base body", size=11, color=t.bull_text,
                 xanchor="right")
        ch.label(-0.6, DIST, "<b>Distal 1.0882</b><br>lowest base wick", size=11, color=t.bull_text,
                 xanchor="right")
    with ch.group("alt"):
        ch.hline(BASE[0] - 0.4, I_FILL + 0.5, WICK_PROX, color=t.ink3, dash="dot")
        ch.callout(BASE[0], WICK_PROX, 1.0, 1.0930, "Wick-to-wick version:<br>proximal at the 1.0903 wick",
                   xanchor="center")
    with ch.group("levels"):
        ch.hline(I_FILL - 0.4, x_end, STOP, color=t.bear_text, width=1.5)
        ch.label(x_end, STOP - 0.0001, "Stop 1.0876 (all three)", size=11, color=t.bear_text, xanchor="right",
                 yanchor="top")
        ch.hline(-0.5, x_end, TARGET, color=t.bull_text, width=1.5)
        ch.label(x_end, TARGET + 0.0001, "Target 1.0955 (all three)", size=11, color=t.bull_text, xanchor="right",
                 yanchor="bottom")
    ch.candles(C, "EUR/USD 15m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    ys = {"A": 1.0898, "B": 1.0890, "C": 1.0885}
    for k, (e, name) in ENTRIES.items():
        risk, reward, r = rr(e)
        filled = C[I_FILL].l <= e
        with ch.group(k):
            ch.hline(I_FILL - 0.4, x_end, e, color=t.ink2 if filled else t.ink3, dash="dot")
            ch.label(N - 0.3, ys[k] + 0.00004, f"<b>{k}</b> {name} {e:.4f} · 1 : {r:.1f} · "
                     f"{'<b>filled</b>' if filled else 'not filled'}", size=11, color=t.ink if filled else t.ink3,
                     yanchor="bottom")
    with ch.group("turn"):
        ch.callout(I_FILL, C[I_FILL].l, 6.5, 1.0866, "The return turns at 1.0888:<br>A and B fill, C misses",
                   xanchor="center")
    ch.header("SMC · Proximal & Distal Lines", "Proximal & Distal — Where to Enter in a Zone",
              "EUR/USD · 15-minute candles · one demand zone, three entries, same stop and target",
              key=[("━", t.bull_text, "Proximal"), ("┅", t.bull_text, "Distal"), ("■", t.bull, "Demand zone")])
    ch.footnote("Synthetic candles built around the levels in the Proximal & Distal Lines lesson")
    ch.caption()
    ch.axes(x_range=[-2.8, x_end + 0.3], y_range=[1.0860, 1.0965], y_dtick=0.0010, y_fmt=".4f",
            x_title="15-minute candles", x_ticks=(list(range(0, N, 2)), [str(i + 1) for i in range(0, N, 2)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Proximal and Distal Lines", OUT)
    for k, (e, name) in ENTRIES.items():
        print(k, name, e, rr(e))
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
