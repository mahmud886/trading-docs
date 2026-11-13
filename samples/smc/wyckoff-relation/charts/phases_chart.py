"""
Wyckoff accumulation phases A–E with the matching SMC terms (EUR/USD 4H, synthetic; shared Wyckoff series).
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from wyckoff import EVENTS, RANGE, accumulation

NAME = "wyckoff-smc-phases"
C, VOL = accumulation()
N = len(C)
PHASES = [("A", 4.5, 17.5, "Stopping the decline", "Markdown exhausted"),
          ("B", 17.5, 28.5, "Building the cause", "Range: internal liquidity, OBs"),
          ("C", 28.5, 34.5, "Spring + test", "Sell-side sweep"),
          ("D", 34.5, 41.5, "SOS + LPS", "BOS + OB retest"),
          ("E", 41.5, N - 0.5, "Markup", "Expansion")]
PAIRS = {"SC": "SC", "AR": "AR", "Spring": "Spring = SSL sweep", "SOS": "SOS = BOS", "LPS": "LPS = OB retest"}


def validate():
    assert PHASES[2][1] < EVENTS["Spring"] < PHASES[2][2] and PHASES[3][1] < EVENTS["SOS"] < PHASES[3][2]
    assert C[EVENTS["SOS"]].c > RANGE[1] and C[EVENTS["Spring"]].l < RANGE[0]


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    colors = [t.bear, t.ink3, t.accent, t.bull, t.bull]
    for k, (name, a, b, wy, smc) in enumerate(PHASES):
        with ch.group(f"p{name}") as shown:
            if shown:
                ch.fig.add_vrect(x0=a, x1=b, fillcolor=colors[k], opacity=0.07 * ch.reveal.alpha(f"p{name}"),
                                 line_width=0, layer="below")
            ch.label((a + b) / 2, 1.0985, f"<b>Phase {name}</b><br>{wy}<br><span style='color:{t.accent}'>{smc}"
                     "</span>", size=11, xanchor="center", yanchor="top", align="center")
            for ev, text in PAIRS.items():
                i = EVENTS[ev]
                if a < i < b:
                    up = ev in ("AR", "SOS")
                    ch.label(i, (C[i].h + 0.0005) if up else (C[i].l - 0.0005), f"<b>{text}</b>", size=11,
                             xanchor="center", yanchor="bottom" if up else "top", color=t.accent)
    ch.zone(EVENTS["SC"] - 0.4, EVENTS["SOS"] - 0.4, *RANGE, color=t.ink3, alpha=0.06, dash="dot")
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    ch.header("SMC · Wyckoff Relation", "Wyckoff's Phases in SMC Terms",
              "EUR/USD · 4-hour candles · each phase: Wyckoff's name, then the SMC name in green",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")])
    ch.footnote("Synthetic candles (shared Wyckoff series) for the Wyckoff Relation lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 0.5], y_range=[1.0770, 1.0995], y_dtick=0.0050, y_fmt=".4f", x_title="4H bars",
            x_ticks=(list(range(0, N, 6)), [str(i + 1) for i in range(0, N, 6)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Wyckoff Phases", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
