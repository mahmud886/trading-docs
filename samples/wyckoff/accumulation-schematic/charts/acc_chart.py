"""
Wyckoff accumulation, schematic #1 (with a spring) on synthetic daily candles with volume: PS, SC, AR, ST, phase B,
Spring, Test, SOS and LPS, with the phases A–E marked and a planned long at the LPS.

Candles: data/acc1_daily.csv (synthetic, with volume).
"""

from _paths import DATA, OUT
from chartkit import Reveal, levels, save
from volkit import load_ohlcv, price_volume

NAME = "wyckoff-accumulation-1"
C, V = load_ohlcv(DATA / "acc1_daily.csv", "day")
N = len(C)
PS, SC, AR, ST, SPRING, TEST, SOS, LPS = 3, 10, 11, 14, 24, 26, 29, 31
SUP, RES = C[SC].l, C[AR].h
PHASES = [("A", 0, 15), ("B", 15, 24), ("C", 24, 27), ("D", 27, 32), ("E", 32, N)]
ENTRY, STOP = 26.2, 24.4
TARGET = round(RES + (RES - SUP), 1)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[SC].l == min(c.l for c in C[:SPRING]), "SC is the lowest low before the spring"
    assert V[SC] == max(V) and V[AR] > V[ST], "SC is the volume climax; the secondary test has less volume"
    assert C[ST].l > SUP and V[ST] < V[SC], "ST holds above the SC low on less volume"
    s = C[SPRING]
    assert s.l < SUP and s.c > SUP, "spring: dips below support, closes back above"
    assert C[TEST].l > s.l and V[TEST] < 0.5 * sum(V[15:24]) / 9, "test: higher low on very low volume"
    assert C[SOS].c > RES and V[SOS] > 1.5 * sum(V[15:24]) / 9, "SOS: close above resistance on rising volume"
    assert C[LPS].l > RES - 1.5 and V[LPS] < 0.5 * V[SOS] and C[LPS].l <= ENTRY <= C[LPS].h, "LPS: quiet pullback near the creek"
    assert STOP < C[LPS].l and max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    fig, ch = price_volume(t, reveal, C, V, x_range=(-1, N + 5), price_range=(17.5, 33.5), price_fmt=".0f",
                           vol_max=4400, vol_dtick=1000, name="Synthetic daily")
    with ch.group("phases"):
        for k, (name, a, b) in enumerate(PHASES):
            ch.zone(a - 0.5, b - 0.5, 17.5, 33.5, color=t.zone, alpha=0.05 if k % 2 == 0 else 0.0, border=False,
                    row=1, col=1)
            ch.label((a + b - 1) / 2, 33.2, f"<b>Phase {name}</b>", size=12, color=t.ink2, xanchor="center",
                     yanchor="top", row=1, col=1)
    with ch.group("range"):
        ch.hline(SC, N + 4, SUP, color=t.bull_text, dash="dash", row=1, col=1)
        ch.hline(AR, N + 4, RES, color=t.bear_text, dash="dash", row=1, col=1)
        ch.label(-0.6, RES + 0.3, f"resistance (AR) {RES:.1f}", size=10, color=t.bear_text, xanchor="left",
                 yanchor="bottom", row=1, col=1)
        ch.label(N + 4, SUP - 0.3, f"support (SC) {SUP:.1f}", size=10, color=t.bull_text, xanchor="right",
                 yanchor="top", row=1, col=1)
    tags = {"ps": (PS, "PS", "above"), "sc": (SC, "SC", "below"), "ar": (AR, "AR", "above"), "st": (ST, "ST", "below"),
            "spring": (SPRING, "Spring", "below"), "test": (TEST, "Test", "below"), "sos": (SOS, "SOS", "above"),
            "lps": (LPS, "LPS", "below")}
    for key, (i, name, side) in tags.items():
        with ch.group(key):
            y = C[i].h + 0.35 if side == "above" else C[i].l - 0.35
            ch.label(i, y, f"<b>{name}</b>", size=13, color=t.ink, xanchor="center",
                     yanchor="bottom" if side == "above" else "top", row=1, col=1)
    with ch.group("trade"):
        risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
        for y, col, txt in ((TARGET, t.bull_text, f"TP {TARGET:.1f} · +{reward:.1f} · 1 : {rr:.1f}"),
                            (ENTRY, t.ink, f"Buy {ENTRY:.1f} (LPS)"), (STOP, t.bear_text, f"SL {STOP:.1f} · −{risk:.1f}")):
            ch.hline(LPS - 0.4, N + 4, y, color=col, dash="solid", width=1.5, row=1, col=1)
            ch.label(N + 4, y, f"<b>{txt}</b>", size=11, color=col, xanchor="right", yanchor="bottom", row=1, col=1)
    ch.header("Wyckoff · Accumulation", "Accumulation Schematic #1 — With a Spring",
              "Synthetic daily candles and volume · PS, SC, AR, ST, Spring, Test, SOS and LPS across phases A – E",
              key=[("▮", t.bull, "Up candle / volume"), ("▮", t.bear, "Down candle / volume")])
    ch.footnote("Synthetic, idealised data; real accumulations rarely show every event, and some have no spring")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Wyckoff Accumulation 1", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
    print(f"{NAME}: SUP {SUP} RES {RES} target {TARGET} risk {risk:.1f} reward {reward:.1f} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
