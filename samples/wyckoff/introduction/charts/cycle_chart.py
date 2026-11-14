"""
The Wyckoff market cycle on one synthetic daily chart: markdown, accumulation (a range where heavy volume produces
little progress), markup, distribution (a second range) and markdown again. The phases and the volume behaviour are
idealised: real markets are messier.

Candles: data/cycle_daily.csv (synthetic, with volume).
"""

from _paths import DATA, OUT
from chartkit import Reveal, save
from volkit import load_ohlcv, price_volume

NAME = "wyckoff-cycle"
C, V = load_ohlcv(DATA / "cycle_daily.csv", "day")
N = len(C)
PHASES = [("md1", "Markdown", 0, 10), ("acc", "Accumulation", 10, 32), ("mu", "Markup", 32, 46),
          ("dist", "Distribution", 46, 68), ("md2", "Markdown", 68, N)]
A_LO, A_HI = min(c.l for c in C[10:32]), max(c.h for c in C[10:32])
D_LO, D_HI = min(c.l for c in C[46:68]), max(c.h for c in C[46:68])
avg = lambda a, b: sum(V[a:b]) / (b - a)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert all(c.c > A_HI - 0.3 for c in C[34:46]) and C[45].c > A_HI + 10, "markup leaves the accumulation range"
    assert C[-1].c < D_LO - 8, "markdown leaves the distribution range"
    assert A_HI - A_LO < 8 and D_HI - D_LO < 8, "ranges are narrow compared with the trends"
    assert avg(10, 32) > avg(32, 46) and avg(46, 68) > avg(68, N) and avg(10, 32) > avg(0, 10), "ranges carry the heavy volume"


validate()


def build(t, reveal: Reveal | None = None):
    fig, ch = price_volume(t, reveal, C, V, x_range=(-1, N + 0.5), price_range=(33, 62), price_fmt=".0f",
                           vol_max=4200, vol_dtick=1000, name="Synthetic daily cycle")
    tints = {"md1": t.bear, "acc": t.bull, "mu": t.bull, "dist": t.bear, "md2": t.bear}
    for key, name, a, b in PHASES:
        with ch.group(key):
            ch.zone(a - 0.5, b - 0.5, 33, 62, color=tints[key], alpha=0.08 if key in ("acc", "dist") else 0.04,
                    border=False, row=1, col=1)
            ch.label((a + b - 1) / 2, 61.2, f"<b>{name}</b>", size=12, color=t.ink, xanchor="center",
                     yanchor="top", row=1, col=1)
    with ch.group("acc"):
        ch.hline(10, 32, A_HI, color=t.bull_text, dash="dash", row=1, col=1)
        ch.hline(10, 32, A_LO, color=t.bull_text, dash="dash", row=1, col=1)
        ch.label(21, A_LO - 0.8, "heavy volume, little progress:<br>supply is being absorbed", size=11,
                 color=t.bull_text, xanchor="center", yanchor="top", align="center", row=1, col=1)
    with ch.group("mu"):
        ch.label(39, 44.0, "demand in control:<br>rallies on rising volume", size=11, color=t.bull_text,
                 xanchor="center", yanchor="top", align="center", row=1, col=1)
    with ch.group("dist"):
        ch.hline(46, 68, D_HI, color=t.bear_text, dash="dash", row=1, col=1)
        ch.hline(46, 68, D_LO, color=t.bear_text, dash="dash", row=1, col=1)
        ch.label(57, D_LO - 0.8, "heavy volume, little progress:<br>demand is being met by supply", size=11,
                 color=t.bear_text, xanchor="center", yanchor="top", align="center", row=1, col=1)
    with ch.group("md2"):
        ch.label(74, 53, "supply in control", size=11, color=t.bear_text, xanchor="center", yanchor="middle",
                 row=1, col=1)
    ch.header("Wyckoff · Introduction", "The Wyckoff Cycle — Ranges Between the Trends",
              "Synthetic daily candles and volume · an idealised cycle: markdown, accumulation, markup, distribution, markdown",
              key=[("▮", t.bull, "Up candle / volume"), ("▮", t.bear, "Down candle / volume")])
    ch.footnote("Synthetic, idealised data for the Wyckoff Introduction lesson; real cycles are rarely this tidy")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Wyckoff Cycle", OUT)
    print(NAME, f"accumulation {A_LO}-{A_HI} distribution {D_LO}-{D_HI}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
