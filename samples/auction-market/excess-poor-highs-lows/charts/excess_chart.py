"""
Excess versus poor extremes on one synthetic EUR/USD TPO day (13 half-hour periods). The high is an excess: period B
pokes up to 1.0872 and is rejected, leaving a tail of single prints. The low is poor: four periods pile up at 1.0850 with a
flat bottom and no tail. The POC and 70% value area are computed from the letters.
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from tpokit import LETTERS, draw_tpo, period_candles, profile_stats, tpo_rows

NAME = "excess-poor-extremes"
TICK = 0.0002
P = [(1.0864, 1.0858), (1.0872, 1.0862), (1.0866, 1.0860), (1.0864, 1.0858), (1.0864, 1.0858), (1.0862, 1.0856),
     (1.0862, 1.0856), (1.0860, 1.0854), (1.0858, 1.0852), (1.0856, 1.0850), (1.0858, 1.0850), (1.0856, 1.0850),
     (1.0858, 1.0850)]
N = len(P)
PC = period_candles(P)
ROWS = tpo_rows(P, TICK)
POC, VAL, VAH, CNT = profile_stats(ROWS)
HI, LO = max(h for h, _ in P), min(l for _, l in P)
TAIL = sorted(p for p in CNT if p >= HI - 4 * TICK - 1e-9 and CNT[p] == 1)       # single prints at the top
LOW_STACK = (CNT[LO], CNT[round(LO + TICK, 4)])


def validate():
    inside = sum(c for p, c in CNT.items() if VAL <= p <= VAH)
    assert inside / sum(CNT.values()) >= 0.70
    assert len(TAIL) >= 3 and TAIL == sorted(TAIL) and TAIL[-1] == HI, "excess high: at least 3 single prints at the top"
    assert all(CNT[p] == 1 for p in TAIL) and CNT[round(TAIL[0] - TICK, 4)] >= 2, "the tail sits on top of a real body"
    assert LOW_STACK[0] >= 4 and LOW_STACK[1] >= 4, "poor low: four or more letters stacked at the low"
    assert all(CNT[p] > 1 for p in CNT if p <= LO + 2 * TICK + 1e-9), "poor low has no single-print tail"
    assert VAL < POC < VAH < TAIL[0], "value sits below the excess tail"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    fig = ch.fig
    fig.update_layout(hovermode=False)
    k = len(ch.reveal.visible(PC))
    rc = {round(p, 6): t.bear_text for p in TAIL}
    rc.update({round(p, 6): t.zone_text for p in (LO, round(LO + TICK, 4))})
    draw_tpo(fig, t, ROWS, k, TICK, poc=POC, val=VAL, vah=VAH, size=13, row_colors=rc)
    with ch.group("excess"):
        ch.zone(-0.7, 6.2, TAIL[0] - TICK / 2, TAIL[-1] + TICK / 2, color=t.bear, alpha=0.12, border=False)
        ch.label(6.5, (TAIL[0] + TAIL[-1]) / 2, f"<b>Excess high</b>: {len(TAIL)} single prints, {TAIL[0]:.4f}–{TAIL[-1]:.4f}<br>"
                 "period B pushed up and was rejected quickly", size=12, color=t.bear_text, yanchor="middle")
    with ch.group("poor"):
        ch.zone(-0.7, 6.2, LO - TICK / 2, LO + 1.5 * TICK, color=t.zone, alpha=0.12, border=False)
        ch.label(6.5, LO + TICK / 2, f"<b>Poor low</b>: {LOW_STACK[0]} letters at {LO:.4f}, {LOW_STACK[1]} at {LO + TICK:.4f}<br>"
                 "a flat bottom with no tail — price never clearly rejected it", size=12, color=t.zone_text, yanchor="middle")
    with ch.group("va"):
        ch.label(9.8, POC, f"POC {POC:.4f}", size=11, color=t.accent, yanchor="middle")
    fig.update_xaxes(showgrid=False, zeroline=False, showline=False, showticklabels=False, range=[-1, 17])
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, side="left", tickformat=".4f", tickfont=dict(size=11, color=t.ink2),
                     range=[LO - 0.0004, HI + 0.0004], dtick=TICK)
    ch.header("Auction Market Theory · Excess and Poor Extremes", "A Finished Auction vs an Unfinished One",
              f"Synthetic EUR/USD TPO day · {N} half-hour periods (A–{LETTERS[N - 1]}) · tail = single prints, stack = repeated letters",
              key=[("▮", t.bear_text, "Excess tail (single prints)"), ("▮", t.zone_text, "Poor low (stacked letters)")])
    ch.footnote("Synthetic data; whether a poor extreme is revisited or an excess holds is not guaranteed — plan with a stop")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Excess and Poor Extremes", OUT)
    print(NAME, f"POC {POC} VA {VAL}-{VAH} HI {HI} tail {TAIL} LO {LO} stack {LOW_STACK} counts {dict(sorted(CNT.items()))}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
