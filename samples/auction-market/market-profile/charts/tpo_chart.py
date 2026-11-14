"""
A Market Profile (TPO) chart for one synthetic EUR/USD session: thirteen 30-minute periods (A-M), each printing its letter
at every price it traded. The row with the most letters is the point of control; the 70% value area is built from it.

Periods (high, low) are defined here and are synthetic.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from tpokit import LETTERS, draw_tpo, period_candles, profile_stats, tpo_rows

NAME = "tpo-profile"
TICK = 0.0002
P = [(1.0866, 1.0858), (1.0870, 1.0860), (1.0864, 1.0858), (1.0862, 1.0858), (1.0864, 1.0858), (1.0862, 1.0856),
     (1.0862, 1.0858), (1.0860, 1.0856), (1.0860, 1.0854), (1.0862, 1.0858), (1.0856, 1.0852), (1.0860, 1.0856),
     (1.0856, 1.0850)]
N = len(P)
PC = period_candles(P)
ROWS = tpo_rows(P, TICK)
POC, VAL, VAH, CNT = profile_stats(ROWS)
HI, LO = max(h for h, _ in P), min(l for _, l in P)
TOTAL = sum(CNT.values())
IB = (max(P[0][0], P[1][0]), min(P[0][1], P[1][1]))


def validate():
    assert N == 13 and all(h > l for h, l in P)
    inside = sum(c for p, c in CNT.items() if VAL <= p <= VAH)
    assert inside / TOTAL >= 0.70 and all(CNT[p] <= CNT[POC] for p in CNT), "VA holds >=70%, POC is the busiest row"
    assert VAL < POC < VAH and LO < VAL and VAH < HI, "value area is inside the day's range"
    assert max(CNT.values()) >= 8 and CNT[HI] <= 2 and CNT[LO] <= 2, "thin tails at the extremes"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    fig = ch.fig
    fig.update_layout(hovermode=False)
    k = len(ch.reveal.visible(PC))
    draw_tpo(fig, t, ROWS, k, TICK, poc=POC, val=VAL, vah=VAH, size=13)
    with ch.group("poc"):
        ch.zone(-0.7, 11.3, POC - TICK / 2, POC + TICK / 2, color=t.accent, alpha=0.16, border=False)
        ch.label(11.6, POC, f"<b>POC</b> {POC:.4f} — {CNT[POC]} letters", size=12, color=t.accent, yanchor="middle")
    with ch.group("va"):
        ch.zone(-0.7, 11.3, VAL - TICK / 2, VAH + TICK / 2, color=t.zone, alpha=0.08, border=False)
        ch.label(11.6, VAH, f"VAH {VAH:.4f}", size=11, color=t.zone_text, xanchor="left", yanchor="middle")
        ch.label(11.6, VAL, f"VAL {VAL:.4f}", size=11, color=t.zone_text, xanchor="left", yanchor="middle")
    with ch.group("shape"):
        ch.label(1.0, HI, f"tail: {CNT[HI]} letter{'s' if CNT[HI] > 1 else ''} at {HI:.4f}", size=11, color=t.bear_text,
                 xanchor="left", yanchor="middle")
        ch.label(1.0, LO, f"tail: {CNT[LO]} letter{'s' if CNT[LO] > 1 else ''} at {LO:.4f}", size=11, color=t.bear_text, xanchor="left", yanchor="middle")
    fig.update_xaxes(showgrid=False, zeroline=False, showline=False, showticklabels=False, range=[-1, 15])
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="left", tickformat=".4f", tickfont=dict(size=11, color=t.ink2),
                     range=[LO - 0.0004, HI + 0.0004], dtick=TICK)
    ch.header("Auction Market Theory · Market Profile", "Reading a TPO Chart",
              f"Synthetic EUR/USD session · {N} half-hour periods (A–{LETTERS[N - 1]}) · each letter = one period at one price",
              key=[("▮", t.accent, "Point of control row"), ("▮", t.ink, "Value area (70%)"), ("▮", t.ink3, "Outside the value area")])
    ch.footnote("Synthetic data; TPO counts time at price, not volume — every period prints one letter per price it touched")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Market Profile TPO", OUT)
    print(NAME, f"POC {POC} VA {VAL}-{VAH} HI {HI} LO {LO} IB {IB} total {TOTAL} counts {dict(sorted(CNT.items()))}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
