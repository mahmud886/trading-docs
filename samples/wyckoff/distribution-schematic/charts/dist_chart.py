"""
Wyckoff distribution with an upthrust after distribution (UTAD) on synthetic daily candles with volume: PSY, BC, AR,
ST, phase B, UTAD, SOW and LPSY across phases A–E, with a planned short at the LPSY.

Candles: data/dist1_daily.csv (synthetic, with volume).
"""

from _paths import DATA, OUT
from chartkit import Reveal, levels, save
from volkit import load_ohlcv, price_volume

NAME = "wyckoff-distribution-1"
C, V = load_ohlcv(DATA / "dist1_daily.csv", "day")
N = len(C)
PSY, BC, AR, ST, UTAD, SOW, LPSY = 9, 11, 12, 15, 28, 33, 34
RES, SUP = C[BC].h, C[AR].l
PHASES = [("A", 0, 16), ("B", 16, 28), ("C", 28, 29), ("D", 29, 35), ("E", 35, N)]
ENTRY, STOP = 27.4, 29.2
TARGET = round(SUP - (RES - SUP), 1)
avg_b = sum(V[16:28]) / 12


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[BC].h == max(c.h for c in C[:UTAD]) and V[BC] == max(V), "BC: the high of the rally on the highest volume"
    assert C[AR].l == min(c.l for c in C[BC + 1:SOW]), "AR sets the range bottom"
    assert C[ST].h < RES and V[ST] < V[BC], "ST: a lower high on less volume"
    u = C[UTAD]
    assert u.h > RES and u.c < RES and V[UTAD] > 1.5 * avg_b, "UTAD: above the range on rising volume, closes back inside"
    s = C[SOW]
    assert s.c < SUP and V[SOW] > 1.5 * avg_b, "SOW: a close below support on heavy volume"
    l = C[LPSY]
    assert SUP - 0.3 <= l.h <= SUP + 0.5 and l.c < SUP and V[LPSY] < 0.5 * V[SOW], "LPSY: a quiet rally back to the broken support"
    assert l.l <= ENTRY <= l.h and STOP > l.h, "entry fills at the LPSY"
    assert min(c.l for c in C[LPSY + 1:]) > TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    fig, ch = price_volume(t, reveal, C, V, x_range=(-1, N + 5), price_range=(17.5, 38.5), price_fmt=".0f",
                           vol_max=4400, vol_dtick=1000, name="Synthetic daily")
    with ch.group("phases"):
        for k, (name, a, b) in enumerate(PHASES):
            ch.zone(a - 0.5, b - 0.5, 17.5, 38.5, color=t.zone, alpha=0.05 if k % 2 == 0 else 0.0, border=False,
                    row=1, col=1)
            ch.label((a + b - 1) / 2, 38.3, f"<b>Phase {name}</b>", size=12, color=t.ink2, xanchor="center",
                     yanchor="top", row=1, col=1)
    with ch.group("range"):
        ch.hline(BC, N + 4, RES, color=t.bear_text, dash="dash", row=1, col=1)
        ch.hline(AR, N + 4, SUP, color=t.bull_text, dash="dash", row=1, col=1)
        ch.label(-0.6, SUP - 0.3, f"support (AR) {SUP:.1f}", size=10, color=t.bull_text, xanchor="left", yanchor="top",
                 row=1, col=1)
        ch.label(-0.6, RES + 0.3, f"resistance (BC) {RES:.1f}", size=10, color=t.bear_text, xanchor="left",
                 yanchor="bottom", row=1, col=1)
    tags = {"psy": (PSY, "PSY", "above"), "bc": (BC, "BC", "above"), "ar": (AR, "AR", "below"), "st": (ST, "ST", "above"),
            "utad": (UTAD, "UTAD", "above"), "sow": (SOW, "SOW", "below"), "lpsy": (LPSY, "LPSY", "above")}
    for key, (i, name, side) in tags.items():
        with ch.group(key):
            y = C[i].h + 0.35 if side == "above" else C[i].l - 0.35
            ch.label(i, y, f"<b>{name}</b>", size=13, color=t.ink, xanchor="center",
                     yanchor="bottom" if side == "above" else "top", row=1, col=1)
    with ch.group("trade"):
        risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0, )
        for y, col, txt in ((STOP, t.bear_text, f"SL {STOP:.1f} · −{risk:.1f}"), (ENTRY, t.ink, f"Sell {ENTRY:.1f} (LPSY)"),
                            (TARGET, t.bull_text, f"TP {TARGET:.1f} · +{reward:.1f} · 1 : {rr:.1f}")):
            ch.hline(LPSY - 0.4, N + 4, y, color=col, dash="solid", width=1.5, row=1, col=1)
            ch.label(N + 4, y, f"<b>{txt}</b>", size=11, color=col, xanchor="right",
                     yanchor="top" if y == TARGET else "bottom", row=1, col=1)
    ch.header("Wyckoff · Distribution", "Distribution Schematic — With an Upthrust After Distribution",
              "Synthetic daily candles and volume · PSY, BC, AR, ST, UTAD, SOW and LPSY across phases A – E",
              key=[("▮", t.bull, "Up candle / volume"), ("▮", t.bear, "Down candle / volume")])
    ch.footnote("Synthetic, idealised data; real distributions rarely show every event, and many have no upthrust")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Wyckoff Distribution 1", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
    print(f"{NAME}: RES {RES} SUP {SUP} target {TARGET} risk {risk:.1f} reward {reward:.1f} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
