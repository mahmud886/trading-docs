"""
The PD array matrix — ICT's ordering of premium and discount arrays inside a dealing range. Schematic, no price data.

Source: content/en/ict/pd-arrays.mdx -> "The Complete PD Array List". The original presents the list as "most to least
significant"; ICT's matrix is an ordering by where each array usually sits, from the range extreme toward equilibrium,
so the chart shows it that way.
"""

from _paths import OUT
from chartkit import FONT, Chart, Reveal, save

NAME = "pd-array-matrix"
PREMIUM = ["Old high / BSL", "Rejection block", "Bearish order block", "Bearish FVG (SIBI)", "Liquidity void",
           "Bearish breaker", "Bearish mitigation block"]
DISCOUNT = list(reversed(["Old low / SSL", "Rejection block", "Bullish order block", "Bullish FVG (BISI)",
                          "Liquidity void", "Bullish breaker", "Bullish mitigation block"]))
ROW = 1.0


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal, right=40)
    n = len(PREMIUM)
    eq = 0.0
    ch.zone(0, 10, eq + 0.25, eq + 0.25 + n * ROW, color=t.bear, alpha=0.07, border=False)
    ch.zone(0, 10, eq - 0.25 - n * ROW, eq - 0.25, color=t.bull, alpha=0.07, border=False)
    ch.hline(0, 10, eq, color=t.ink, width=1.8, dash="dash")
    ch.label(5, eq, "<b>EQUILIBRIUM · 50 %</b> — no array, no edge", size=14, color=t.ink, xanchor="center",
             bgcolor=t.surface, borderpad=6)
    for i, name in enumerate(PREMIUM):
        y = eq + 0.25 + (n - i - 0.5) * ROW
        ch.label(1.2, y, f"<b>{name}</b>", size=14, color=t.bear_text)
        ch.label(0.5, y, f"{i + 1}", size=13, color=t.ink3, xanchor="center", font="'JetBrains Mono', monospace")
    for i, name in enumerate(DISCOUNT):
        y = eq - 0.25 - (i + 0.5) * ROW
        ch.label(1.2, y, f"<b>{name}</b>", size=14, color=t.bull_text)
        ch.label(0.5, y, f"{n - i}", size=13, color=t.ink3, xanchor="center", font="'JetBrains Mono', monospace")
    ch.label(9.8, eq + 0.25 + n * ROW - 0.4, "<b>PREMIUM</b> · arrays to sell from", size=15, color=t.bear_text,
             xanchor="right", yanchor="top")
    ch.label(9.8, eq - 0.25 - n * ROW + 0.4, "<b>DISCOUNT</b> · arrays to buy from", size=15, color=t.bull_text,
             xanchor="right", yanchor="bottom")
    notes = [(eq + 3.4, "Further from equilibrium = deeper into premium.<br>Price usually meets the arrays nearest "
                        "to it first."),
             (eq - 3.4, "Use an array only in its own half of the range:<br>discount arrays for buys, premium arrays "
                        "for sells.")]
    for y, txt in notes:
        ch.label(5.6, y, txt, size=13, color=t.ink2)
    ch.fig.update_xaxes(range=[0, 10], visible=False)
    ch.fig.update_yaxes(range=[-n * ROW - 0.6, n * ROW + 0.6], visible=False)
    ch.fig.update_layout(hovermode=False)
    ch.header("ICT · PD Arrays", "The PD Array Matrix", "Where each array usually sits inside a dealing range · "
              "ordered from the range extreme toward equilibrium", key=[("■", t.bear, "Premium"),
                                                                        ("■", t.bull, "Discount")])
    ch.footnote("Schematic of ICT's PD array matrix (no price data)")
    ch.fig.add_annotation(xref="paper", yref="paper", x=0, y=0, yshift=-30, showarrow=False, xanchor="left",
                          yanchor="top", font=dict(family=FONT, size=12, color=t.ink3),
                          text="The order is positional, not a ranking of reliability.")
    return ch.fig


def main():
    paths = save(NAME, build, "PD Array Matrix", OUT)
    print(f"{NAME}: {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
