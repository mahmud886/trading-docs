"""
Single prints on a synthetic EUR/USD TPO day: the lower balance (A-E) is followed by one fast period (F) that leaves
single prints at 1.0860-1.0866, then an upper balance (G-M). The next day price returns into the zone, tests it and holds.

Day 1: thirteen 30-minute periods defined here. Day 2: data/eurusd_1h_day2.csv (hourly candles).
"""

from plotly.subplots import make_subplots

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load
from tpokit import LETTERS, draw_tpo, period_candles, profile_stats, tpo_rows

NAME = "single-prints"
TICK = 0.0002
P = [(1.0856, 1.0850), (1.0858, 1.0852), (1.0858, 1.0850), (1.0856, 1.0850), (1.0858, 1.0852), (1.0868, 1.0858),
     (1.0872, 1.0868), (1.0874, 1.0868), (1.0874, 1.0870), (1.0874, 1.0870), (1.0874, 1.0870), (1.0872, 1.0868),
     (1.0874, 1.0870)]
D2 = load(DATA / "eurusd_1h_day2.csv", Candle, unit_label="hour")
N, N2 = len(P), len(D2)
PC = period_candles(P)
ROWS = tpo_rows(P, TICK)
POC, VAL, VAH, CNT = profile_stats(ROWS)
SINGLES = sorted(p for p, c in CNT.items() if c == 1)
Z_LO, Z_HI = SINGLES[0] - TICK / 2, SINGLES[-1] + TICK / 2
HI, LO = max(h for h, _ in P), min(l for _, l in P)


def validate():
    for c in D2:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert SINGLES == [1.086, 1.0862, 1.0864, 1.0866], SINGLES
    assert all(CNT[p] == 1 for p in SINGLES) and CNT[1.0858] >= 2 and CNT[1.0868] >= 2, "singles between two real bodies"
    assert ROWS[1.0860] == [5], "the zone was made by period F alone"
    assert min(c.l for c in D2) < Z_HI and min(c.l for c in D2) > Z_LO, "day 2 tests the zone without filling it"
    assert D2[-1].c > Z_HI + 0.0004 and min(c.c for c in D2[6:]) >= Z_HI - 0.0005, "and then holds and rises"


validate()
LOW2 = min(c.l for c in D2)


def build(t, reveal: Reveal | None = None):
    fig = make_subplots(rows=1, cols=2, column_widths=[0.5, 0.5], horizontal_spacing=0.05, shared_yaxes=True)
    ch = Chart(t, reveal, fig=fig)
    fig.update_layout(hovermode=False)
    # candles count: day 1 periods first (0..13), then day 2 hours (13..25)
    shown = ch.reveal.candles
    k1 = N if shown is None else min(int(shown), N)
    k2 = N2 if shown is None else max(int(shown) - N, 0)
    draw_tpo(fig, t, ROWS, k1, TICK, poc=POC, val=VAL, vah=VAH, size=12, row=1, col=1,
             row_colors={round(p, 6): t.bear_text for p in SINGLES})
    with ch.group("zone"):
        ch.zone(-0.7, 8.2, Z_LO, Z_HI, color=t.bear, alpha=0.12, border=False, row=1, col=1)
        ch.label(8.4, (Z_LO + Z_HI) / 2, f"<b>Single prints</b> {SINGLES[0]:.4f}–{SINGLES[-1]:.4f}<br>one period (F) moved through<br>"
                 "quickly; no other period traded here", size=11, color=t.bear_text, yanchor="middle", row=1, col=1)
    from dataclasses import replace
    base = ch.reveal
    ch.reveal = replace(base, candles=None if shown is None else k2)
    ch.candles(D2, "EUR/USD 1H next day (synthetic)", price_fmt=".4f", x=list(range(N2)), row=1, col=2)
    ch.reveal = base
    with ch.group("zone2"):
        ch.zone(-0.5, N2 - 0.5, Z_LO, Z_HI, color=t.bear, alpha=0.10, dash="dot", row=1, col=2)
        ch.label(N2 - 0.6, Z_LO - 0.00006, f"zone tested to {LOW2:.4f}, not filled to {Z_LO:.4f}", size=11, color=t.bear_text,
                 xanchor="right", yanchor="top", row=1, col=2)
    with ch.group("titles"):
        ch.label(0, HI + 0.0004, "<b>Day 1 · TPO profile</b>", size=13, color=t.ink, yanchor="bottom", row=1, col=1)
        ch.label(0, HI + 0.0004, "<b>Day 2 · hourly candles</b>", size=13, color=t.ink, yanchor="bottom", row=1, col=2)
    xa = dict(showgrid=False, zeroline=False, showline=False, showticklabels=False, rangeslider_visible=False)
    fig.update_xaxes(range=[-1, 17], **xa, row=1, col=1)
    fig.update_xaxes(range=[-1, N2], **xa, row=1, col=2)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, tickformat=".4f", tickfont=dict(size=11, color=t.ink2), dtick=TICK,
                     range=[LO - 0.0004, HI + 0.0009], row=1, col=1)
    fig.update_yaxes(showgrid=True, gridcolor=t.grid, showticklabels=False, row=1, col=2)
    ch.header("Auction Market Theory · Single Prints", "A Fast Move Leaves a Gap in the Profile",
              "Synthetic EUR/USD · day 1 profile with a single-print zone, day 2 returns into it",
              key=[("▮", t.bear_text, "Single prints (one letter per row)")])
    ch.footnote("Synthetic data; a single-print zone is a reference — price may fill it, hold it, or ignore it")
    ch.caption()
    return fig


def main():
    paths = save(NAME, build, "Single Prints", OUT)
    print(NAME, f"singles {SINGLES} POC {POC} VA {VAL}-{VAH} low2 {LOW2} counts {dict(sorted(CNT.items()))}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
