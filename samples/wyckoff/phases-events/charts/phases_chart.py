"""
Identifying the phase: Wyckoff accumulation schematic #2 (no spring — the test is a higher low) on synthetic daily
candles with volume. Each phase A–E carries the question to ask there; a planned long sits at the LPS.

Candles: data/acc2_daily.csv (synthetic, with volume).
"""

from _paths import DATA, OUT
from chartkit import Reveal, levels, save
from volkit import load_ohlcv, price_volume

NAME = "wyckoff-phases-events"
C, V = load_ohlcv(DATA / "acc2_daily.csv", "day")
N = len(C)
SC, AR, ST, TEST, SOS, LPS = 9, 10, 13, 24, 27, 29
SUP, RES = C[SC].l, C[AR].h
PHASES = [("A", 0, 14, "Is the decline stopping?"), ("B", 14, 24, "Is supply drying up?"),
          ("C", 24, 25, "Does a test hold?"), ("D", 25, 31, "Is demand taking over?"),
          ("E", 31, N, "Is the trend running?")]
ENTRY, STOP = 46.0, 44.2
TARGET = round(RES + (RES - SUP), 1)
avg_b = sum(V[14:24]) / 10


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert C[SC].l == min(c.l for c in C) and V[SC] == max(V), "SC: the lowest low on the highest volume"
    assert C[ST].l > SUP and V[ST] < V[SC], "ST: a higher low on less volume"
    assert C[TEST].l > C[ST].l and V[TEST] < 0.5 * avg_b, "test: a higher low on very low volume — no spring"
    assert min(c.l for c in C[14:SOS]) > SUP, "support never breaks"
    assert C[SOS].c > RES and V[SOS] > 1.5 * avg_b, "SOS: a close above resistance on heavy volume"
    assert V[LPS] < 0.5 * V[SOS] and C[LPS].l <= ENTRY <= C[LPS].h and STOP < C[LPS].l, "LPS: quiet pullback; entry fills"
    assert max(c.h for c in C) < TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    fig, ch = price_volume(t, reveal, C, V, x_range=(-1, N + 5), price_range=(37, 56), price_fmt=".0f",
                           vol_max=4200, vol_dtick=1000, name="Synthetic daily")
    for k, (name, a, b, q) in enumerate(PHASES):
        with ch.group(f"ph{name}"):
            ch.zone(a - 0.5, b - 0.5, 37, 56, color=t.zone, alpha=0.05 if k % 2 == 0 else 0.0, border=False, row=1, col=1)
            ch.label((a + b - 1) / 2, 55.7, f"<b>Phase {name}</b>", size=12, color=t.ink, xanchor="center",
                     yanchor="top", row=1, col=1)
            ch.label((a + b - 1) / 2, 54.5, q if b - a > 3 else "test?", size=10, color=t.ink2, xanchor="center",
                     yanchor="top", row=1, col=1)
    with ch.group("range"):
        ch.hline(SC, N + 4, SUP, color=t.bull_text, dash="dash", row=1, col=1)
        ch.hline(AR, N + 4, RES, color=t.bear_text, dash="dash", row=1, col=1)
        ch.label(N + 4, SUP - 0.3, f"support (SC) {SUP:.1f}", size=10, color=t.bull_text, xanchor="right", yanchor="top",
                 row=1, col=1)
        ch.label(-0.6, RES + 0.3, f"resistance (AR) {RES:.1f}", size=10, color=t.bear_text, xanchor="left",
                 yanchor="bottom", row=1, col=1)
    tags = {"sc": (SC, "SC", "below"), "ar": (AR, "AR", "above"), "st": (ST, "ST", "below"),
            "test": (TEST, "Higher-low test", "below"), "sos": (SOS, "SOS", "above"), "lps": (LPS, "LPS", "below")}
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
    ch.header("Wyckoff · Phases and Events", "Phases A – E — Ask the Question for the Phase You're In",
              "Synthetic daily candles and volume · accumulation without a spring: the test is a higher low",
              key=[("▮", t.bull, "Up candle / volume"), ("▮", t.bear, "Down candle / volume")])
    ch.footnote("Synthetic, idealised data; identify the phase first — event labels are clues, not requirements")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Wyckoff Phases and Events", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], 1.0)
    print(f"{NAME}: SUP {SUP} RES {RES} target {TARGET} risk {risk:.1f} reward {reward:.1f} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
