"""
Confluence on EUR/USD H4: an old resistance band (1.0850 – 1.0860), the 61.8% retracement of the new impulse and the
1.0850 round number all land in one zone; the pullback is bought there. A fourth "factor" that only repeats the same
information is shown and not counted.

Candles: data/eurusd_h4_confluence.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "confluence-zone"
PIP = 0.0001
C = load(DATA / "eurusd_h4_confluence.csv", Candle, unit_label="4H candle")
N = len(C)
OLD_RES = (1.0850, 1.0860)
ZONE = (1.0845, 1.0860)
ROUND = 1.0850
I_LOW, I_HIGH, I_FILL = 9, 16, 22
SW_LOW, SW_HIGH = C[I_LOW].l, C[I_HIGH].h
FIB = {r: round(SW_HIGH - r * (SW_HIGH - SW_LOW), 4) for r in (0.5, 0.618, 0.786)}
ENTRY, STOP, TARGET = 1.0858, 1.0828, 1.0955


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    touches = [i for i in range(I_LOW) if C[i].h >= OLD_RES[1]]
    assert len(touches) == 2 and all(c.h <= OLD_RES[1] for c in C[:I_LOW]), "old resistance, two touches"
    assert SW_LOW == min(c.l for c in C) and SW_HIGH == max(c.h for c in C), "impulse swing"
    assert ZONE[0] <= FIB[0.618] <= ZONE[1] and ZONE[0] <= ROUND <= ZONE[1], "factors overlap"
    assert max(OLD_RES[0], ZONE[0]) < min(OLD_RES[1], ZONE[1]), "old resistance overlaps the zone"
    assert all(c.l > ENTRY for c in C[I_HIGH:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "first pullback fill"
    assert C[I_FILL].l >= ZONE[0] and STOP < ZONE[0] and STOP > FIB[0.786], "stop below the zone"
    assert max(c.h for c in C[I_FILL:]) < TARGET < SW_HIGH, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    with ch.group("res"):
        ch.zone(-0.5, 11.5, *OLD_RES, color=t.bear, alpha=0.22)
        ch.label(-0.4, OLD_RES[1] + 0.0003, "<b>① Old resistance</b> 1.0850 – 1.0860 (two touches)", size=11,
                 color=t.bear_text, yanchor="bottom")
    with ch.group("fib"):
        for r, y in FIB.items():
            strong = r == 0.618
            ch.hline(I_HIGH, x_end, y, color=t.accent if strong else t.ink3, dash="dot", width=1.6 if strong else 1)
            ch.label(I_HIGH + 0.4, y, f"{'<b>② ' if strong else ''}{r * 100:.1f}%{'</b>' if strong else ''} {y:.4f}",
                     size=10 if not strong else 11, color=t.accent if strong else t.ink3, xanchor="left",
                     yanchor="bottom" if r != 0.786 else "top")
        ch.label(I_LOW, SW_LOW - 0.0003, f"swing low {SW_LOW:.4f}", size=10, color=t.ink3, xanchor="center",
                 yanchor="top")
        ch.label(I_HIGH, SW_HIGH + 0.0003, f"swing high {SW_HIGH:.4f}", size=10, color=t.ink3, xanchor="center",
                 yanchor="bottom")
    with ch.group("round"):
        ch.hline(11.5, x_end, ROUND, color=t.ink2, dash="dash")
        ch.label(12.6, ROUND - 0.0003, "<b>③ Round number</b> 1.0850", size=11, color=t.ink2, yanchor="top")
    with ch.group("zone"):
        ch.zone(11.5, x_end, *ZONE, color=t.bull, alpha=0.26)
        ch.label(17.2, 1.0838, "<b>Confluence zone</b> 1.0845 – 1.0860<br>3 independent factors",
                 size=11, color=t.bull_text, yanchor="top")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD H4 (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("notcounted"):
        ch.label(0.0, 1.0950, "<b>Not counted:</b> H4 RSI oversold at the zone —<br>it measures the same pullback "
                 "the chart already shows", size=11, color=t.ink3, yanchor="top")
    ch.header("Price Action · Confluence", "Confluence — Independent Reasons at One Price",
              "EUR/USD · 4-hour candles · old resistance, 61.8% retracement and 1.0850 overlap; the pullback is bought there",
              key=[("■", t.bear, "Old resistance"), ("┅", t.accent, "Fibonacci"), ("■", t.bull, "Confluence zone")])
    ch.footnote("Synthetic candles built around the levels in the Confluence lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0765, 1.0985], y_dtick=0.0020, y_fmt=".4f",
            x_title="4-hour candles", x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Confluence", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: fib {FIB} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
