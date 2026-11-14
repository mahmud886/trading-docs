"""
A balanced day and an imbalanced (trend) day as TPO profiles on synthetic EUR/USD: the balanced day piles letters around a
POC and rotates inside a range; the trend day moves up every period, leaving a long, thin profile with no real POC.
"""

from plotly.subplots import make_subplots

from _paths import OUT
from chartkit import Chart, Reveal, save
from tpokit import LETTERS, draw_tpo, period_candles, profile_stats, tpo_rows

NAME = "balanced-vs-imbalanced"
TICK = 0.0002
BAL = [(1.0866, 1.0858), (1.0870, 1.0860), (1.0864, 1.0858), (1.0862, 1.0858), (1.0864, 1.0858), (1.0862, 1.0856),
       (1.0862, 1.0858), (1.0860, 1.0856), (1.0860, 1.0854), (1.0862, 1.0858), (1.0856, 1.0852), (1.0860, 1.0856),
       (1.0856, 1.0850)]
TRD = [(round(1.0852 + 0.0002 * k + 0.0004, 4), round(1.0852 + 0.0002 * k, 4)) for k in range(13)]
N = 13
B_ROWS, T_ROWS = tpo_rows(BAL, TICK), tpo_rows(TRD, TICK)
B_STATS, T_STATS = profile_stats(B_ROWS), profile_stats(T_ROWS)
B_POC, B_VAL, B_VAH, B_CNT = B_STATS
T_POC, T_VAL, T_VAH, T_CNT = T_STATS
B_RANGE = (max(h for h, _ in BAL), min(l for _, l in BAL))
T_RANGE = (max(h for h, _ in TRD), min(l for _, l in TRD))
PC = period_candles(BAL)


def validate():
    assert all(h > l for h, l in BAL + TRD)
    assert max(B_CNT.values()) >= 9 and B_VAL < B_POC < B_VAH, "balanced: a clear POC"
    assert all(TRD[i][0] > TRD[i - 1][0] and TRD[i][1] > TRD[i - 1][1] for i in range(1, N)), "trend: each period higher"
    assert max(T_CNT.values()) <= 3, "trend: no row holds more than three letters"
    assert not all(BAL[i][1] >= BAL[i - 1][1] for i in range(1, N)), "balanced: periods do not climb"
    assert T_RANGE[0] - T_RANGE[1] > B_RANGE[0] - B_RANGE[1] + 0.0006, "trend range is wider"
    assert TRD[-1][1] > TRD[0][0], "trend: the last period is entirely above the first"


validate()


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, column_widths=[0.5, 0.5], horizontal_spacing=0.06, shared_yaxes=True)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    k = len(ch.reveal.visible(PC))
    draw_tpo(fig, t, B_ROWS, k, TICK, poc=B_POC, val=B_VAL, vah=B_VAH, size=12, row=1, col=1)
    draw_tpo(fig, t, T_ROWS, k, TICK, poc=None, val=0, vah=0, size=12, row=1, col=2)
    with ch.group("titles"):
        ch.label(0, T_RANGE[0] + 0.0008, "<b>Balanced day</b> · rotation", size=14, color=t.ink, yanchor="bottom", row=1, col=1)
        ch.label(0, T_RANGE[0] + 0.0008, "<b>Imbalanced day</b> · one direction", size=14, color=t.ink, yanchor="bottom", row=1, col=2)
    with ch.group("bal"):
        ch.zone(-0.7, 11.3, B_VAL - TICK / 2, B_VAH + TICK / 2, color=t.zone, alpha=0.08, border=False, row=1, col=1)
        ch.label(8.0, B_VAH + 0.00035, f"POC {B_POC:.4f} · {B_CNT[B_POC]} letters<br>value area {B_VAL:.4f}–{B_VAH:.4f}", size=11,
                 color=t.zone_text, yanchor="bottom", row=1, col=1)
        ch.label(3.4, B_RANGE[1] - 0.0003, "price rotates: many periods share the same prices", size=11, color=t.ink2,
                 xanchor="center", yanchor="top", row=1, col=1)
    with ch.group("imb"):
        ch.label(3.6, T_RANGE[1] + 0.0010, f"each period higher than the last:<br>no row has more than {max(T_CNT.values())} letters<br>"
                 f"range {round((T_RANGE[0] - T_RANGE[1]) * 1e4)} pips (balanced day: {round((B_RANGE[0] - B_RANGE[1]) * 1e4)})",
                 size=11, color=t.bull_text, yanchor="middle", row=1, col=2)
    xa = dict(showgrid=False, zeroline=False, showline=False, showticklabels=False, rangeslider_visible=False)
    fig.update_xaxes(range=[-1, 12.5], **xa, row=1, col=1)
    fig.update_xaxes(range=[-1, 12.5], **xa, row=1, col=2)
    lo, hi = min(B_RANGE[1], T_RANGE[1]) - 0.0004, T_RANGE[0] + 0.0012
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, tickformat=".4f", tickfont=dict(size=11, color=t.ink2), dtick=TICK,
                     range=[lo, hi], row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, row=1, col=2)
    ch.header("Auction Market Theory · Balanced vs Imbalanced", "Rotation vs Direction — Two Profiles",
              f"Synthetic EUR/USD · two days of {N} half-hour periods (A–{LETTERS[N - 1]}) · same period length, different shape",
              key=[("▮", t.accent, "Point of control row"), ("▮", t.ink, "Value area"), ("▮", t.ink3, "Outside value area")])
    ch.footnote("Synthetic data; a day's shape is known only afterwards — during the day you read the state from the evidence so far")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Balanced vs Imbalanced", OUT)
    print(NAME, f"bal POC {B_POC} VA {B_VAL}-{B_VAH} range {B_RANGE} max {max(B_CNT.values())}; trend range {T_RANGE} "
          f"max {max(T_CNT.values())}", ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
