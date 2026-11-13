"""
One trading day in Bangladesh time (US summer) with the SMC kill zones shaded:
Asian range → London sweeps the Asian low → NY AM continues to the previous day's high → London close takes profit.

Candles: data/eurusd_1h_session_day.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save

NAME = "smc-kill-zones-day"
Y0, Y1 = 1.0832, 1.0922
PDH = 1.0900


def load():
    with (DATA / "eurusd_1h_session_day.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"{r['time_bd']} BD", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
# (group, first candle, last candle + 1, name, BD time, colour key)
SESSIONS = [
    ("asia", 0, 6, "Asian range", "6 AM – 12 PM", "ink3"),
    ("london", 6, 9, "London KZ", "12 – 3 PM", "zone"),
    ("ny", 11, 14, "NY AM KZ", "5 – 8 PM", "accent"),
    ("lclose", 14, 16, "London close", "8 – 10 PM", "bear"),
]
ASIA_H = max(c.h for c in C[0:6])
ASIA_L = min(c.l for c in C[0:6])
I_SWEEP, I_DISP, I_PDH = 6, 7, 13


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert (ASIA_H, ASIA_L) == (1.0870, 1.0850)
    s = C[I_SWEEP]
    assert s.l < ASIA_L and min(c.l for c in C) == s.l, "London takes the Asian low, the day's low"
    d = C[I_DISP]
    assert d.bullish and d.c > max(c.h for c in C[3:7]), "displacement closes above the recent highs"
    assert C[I_PDH].h > PDH and all(c.h < PDH for c in C[:I_PDH]), "NY takes the previous day's high"
    assert all(c.h < C[I_PDH].h for c in C[I_PDH + 1:]), "London close: the high holds"
    assert max(c.h for c in C[16:]) - min(c.l for c in C[16:]) < 0.0015, "after London close: small range"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    for g, a, b, name, when, col in SESSIONS:
        with ch.group(g):
            ch.zone(a - 0.5, b - 0.5, Y0, Y1, color=getattr(t, col), alpha=0.10)
            ch.label((a + b - 1) / 2, Y1 - 0.0002, f"<b>{name}</b><br>{when}", size=11, color=t.ink2,
                     xanchor="center", yanchor="top", align="center")
    with ch.group("asia"):
        ch.hline(0, 9.5, ASIA_H, color=t.ink3, dash="dash")
        ch.hline(0, 9.5, ASIA_L, color=t.ink3, dash="dash")
        ch.label(-0.4, ASIA_L - 0.0002, "Asian low 1.0850", size=10, color=t.ink3, yanchor="top")
        ch.label(-0.4, ASIA_H + 0.0002, "Asian high 1.0870", size=10, color=t.ink3, yanchor="bottom")
    with ch.group("pdh"):
        ch.hline(0, N - 0.5, PDH, color=t.bull_text, dash="dash")
        ch.label(N - 0.5, PDH + 0.0002, "Previous day's high 1.0900 (BSL)", size=10, color=t.bull_text,
                 xanchor="right", yanchor="bottom")
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("london"):
        ch.callout(I_SWEEP, C[I_SWEEP].l, 9.5, 1.0838, "<b>①</b> London sweeps the Asian low (1.0842),<br>"
                   "then displaces up — the day's direction", xanchor="left")
    with ch.group("ny"):
        ch.callout(I_PDH, C[I_PDH].h, 16.0, 1.0911, "<b>②</b> NY AM continues to the<br>previous day's high",
                   xanchor="left")
    with ch.group("lclose"):
        ch.callout(14.5, 1.0884, 18.5, 1.0868, "<b>③</b> London close: profit-taking pullback;<br>"
                   "after it, a narrow range", xanchor="center")
    ch.header("SMC · Kill Zones", "Kill Zones — One Day in Bangladesh Time",
              "EUR/USD · 1-hour candles · US summer time (add one hour in US winter)",
              key=[("■", t.zone, "London KZ"), ("■", t.accent, "NY AM KZ"), ("■", t.bear, "London close")])
    ch.footnote("Synthetic candles for a typical day; not every day follows this pattern")
    ch.caption()
    ticks = list(range(0, N, 2))
    ch.axes(x_range=[-0.8, N - 0.2], y_range=[Y0, Y1], y_dtick=0.0010, y_fmt=".4f", x_title="Bangladesh time",
            x_ticks=(ticks, [_ampm(C[i].label) for i in ticks]))
    return ch.fig


def _ampm(label):
    h = int(label[:2])
    return f"{h % 12 or 12} {'AM' if h < 12 else 'PM'}"


def main():
    paths = save(NAME, build, "SMC Kill Zones Day", OUT)
    print(f"{NAME}: Asia {ASIA_L}–{ASIA_H} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
