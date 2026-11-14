"""
One Asian session, three London outcomes (EUR/USD hourly, BD time, US/UK summer): A — London sweeps the Asian low and
reverses up; B — London breaks the Asian high and holds above it; C — the range holds. The Asian range is identical
in all three panels; the rules decide which trade (if any) each outcome allows.

Candles: data/eurusd_1h_asian_{a,b,c}.csv (synthetic), hourly from 6:00 AM BD.
"""

from dataclasses import replace

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load
from sessionkit import clock

NAME = "asian-range-three-outcomes"
PANELS = {k: load(DATA / f"eurusd_1h_asian_{k}.csv", Candle, unit_label="hour") for k in "abc"}
N_ASIA = 7                                        # 6:00 AM – 12:59 PM BD
N = len(PANELS["a"])
GAP = 14
A_H = max(c.h for c in PANELS["a"][:N_ASIA])
A_L = min(c.l for c in PANELS["a"][:N_ASIA])
TITLES = {"a": "A · Sweep and reverse", "b": "B · Break and hold", "c": "C · Range holds"}
NOTES = {
    "a": "Drops below 1.0852, the next hour<br>closes back inside, then up through<br>the Asian high → the reversal setup",
    "b": "Closes above 1.0872, retest holds<br>from above → a breakout, not a sweep<br>→ trade with the break",
    "c": "Neither side closes outside<br>→ no Asian-range trade today",
}


def validate():
    for C in PANELS.values():
        for c in C:
            assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
        assert [c.c for c in C[:N_ASIA]] == [c.c for c in PANELS["a"][:N_ASIA]], "same Asian session"
    assert round((A_H - A_L) * 1e4) == 20
    L = {k: C[N_ASIA:] for k, C in PANELS.items()}
    a = L["a"]
    assert a[0].l < A_L and a[0].c < A_L and a[1].c > A_L and max(c.c for c in a) > A_H, "A: sweep, back, through"
    b = L["b"]
    assert b[0].c > A_H and all(c.l >= A_H - 0.0002 for c in b[1:]) and min(c.c for c in b) > A_H, "B: break holds"
    assert all(A_L <= c.c <= A_H for c in L["c"]), "C: no close outside"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    base = ch.reveal
    n = None if base.candles is None else base.candles
    for p, (k, C) in enumerate(PANELS.items()):
        x0 = p * GAP
        xs = [x0 + i for i in range(N)]
        with ch.group("range"):
            ch.zone(x0 - 0.5, x0 + N - 0.5, A_L, A_H, color=t.zone, alpha=0.10, dash="dot")
            ch.fig.add_vline(x=x0 + N_ASIA - 0.5, line=dict(color=t.ink3, width=1, dash="dot"))
        ch.label(x0 + (N - 1) / 2, 1.0912, f"<b>{TITLES[k]}</b>", size=14, color=t.ink, xanchor="center",
                 yanchor="top")
        if n is None:
            shown = None
        else:
            london = 0 if n <= N_ASIA else min(max(n - N_ASIA - p * (N - N_ASIA), 0), N - N_ASIA)
            shown = min(n, N_ASIA) + london
        ch.reveal = replace(base, candles=shown)
        ch.candles(C, f"EUR/USD 1H {k.upper()} (synthetic)", price_fmt=".4f", x=xs,
                   text=[clock(6 + i) for i in range(N)])
        ch.reveal = base
        with ch.group(f"note_{k}"):
            ch.label(x0 + (N - 1) / 2, 1.0835, NOTES[k], size=11, color=t.ink2, xanchor="center", yanchor="top",
                     align="center", bgcolor=t.surface)
    with ch.group("range"):
        ch.label(-0.4, A_H + 0.0001, f"Asian high {A_H:.4f}", size=10, color=t.zone_text, yanchor="bottom")
        ch.label(-0.4, A_L - 0.0001, f"Asian low {A_L:.4f}", size=10, color=t.zone_text, yanchor="top")
    ch.header("Forex Sessions · Asian Range", "Asian Range — One Range, Three London Outcomes",
              "EUR/USD · hourly candles · 6:00 AM – 6:00 PM Bangladesh time (US/UK summer) · dotted line = London open",
              key=[("■", t.zone, "Asian range 6:00 AM – 12:59 PM BD")])
    ch.footnote("Synthetic candles: the same Asian session with three possible London sessions")
    ch.caption()
    ticks = [p * GAP + i for p in range(3) for i in (0, N_ASIA, N - 1)]
    ch.axes(x_range=[-0.9, 2 * GAP + N - 0.1], y_range=[1.0815, 1.0915], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [clock(6 + (x % GAP)) for x in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Asian Range Outcomes", OUT)
    print(NAME, A_L, A_H, ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
