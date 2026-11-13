"""
The session liquidity chain on a bullish day (BD time, US summer):
London takes the Asian low, then the Asian high; NY buys the London OB, takes the London high and draws to the PDH.

Candles: data/eurusd_1h_session_chain.csv (synthetic).
"""

import csv

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save

NAME = "session-liquidity-chain"
PIP = 0.0001
Y0, Y1 = 1.0950, 1.1072
PDH = 1.1050


def load():
    with (DATA / "eurusd_1h_session_chain.csv").open() as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    return [Candle(int(r["i"]), f"{r['time_bd']} BD", *(float(r[k]) for k in ("open", "high", "low", "close")))
            for r in rows]


C = load()
N = len(C)
ASH, ASL = max(c.h for c in C[:6]), min(c.l for c in C[:6])
I_SSL, I_OB, I_DISP, I_LH, I_FILL, I_TAKE_LH = 7, 7, 8, 9, 12, 14
LON_H = C[I_LH].h
OB = (C[I_OB].c, C[I_OB].o)
ENTRY, STOP, TARGET = 1.0980, 1.0962, PDH
SESSIONS = [("asia", 0, 6, "Asian session", "6 AM – 12 PM", "ink3"),
            ("london", 6, 10, "London", "12 – 4 PM", "zone"),
            ("ny", 11, N, "New York", "5 – 11 PM", "accent")]


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert (ASH, ASL) == (1.1012, 1.0992)
    assert C[I_SSL].l < ASL and min(c.l for c in C) == C[I_SSL].l, "London takes the Asian low: the day's low"
    assert not C[I_OB].bullish and C[I_DISP].bullish and C[I_DISP].h > ASH, "OB, then displacement through ASH"
    assert LON_H == max(c.h for c in C[:I_TAKE_LH]) and C[I_TAKE_LH].h > LON_H, "NY takes the London high"
    assert all(c.l > ENTRY for c in C[I_DISP + 1:I_FILL]) and C[I_FILL].l <= ENTRY and C[I_FILL].l > C[I_SSL].l
    assert OB[0] <= ENTRY <= OB[1] and STOP < C[I_SSL].l
    assert max(c.h for c in C) < TARGET, "PDH not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 1.5
    for g, a, b, name, when, col in SESSIONS:
        with ch.group(g):
            ch.zone(a - 0.5, b - 0.5, Y0, Y1, color=getattr(t, col), alpha=0.08)
            ch.label((a + b - 1) / 2, Y1 - 0.0002, f"<b>{name}</b><br>{when}", size=11, color=t.ink2,
                     xanchor="center", yanchor="top", align="center")
    with ch.group("asia"):
        for y, name in ((ASH, "ASH 1.1012"), (ASL, "ASL 1.0992")):
            ch.hline(0, 9.5, y, color=t.ink3, dash="dash")
            ch.label(-0.4, y + (0.0002 if y == ASH else -0.0002), name, size=10, color=t.ink3,
                     yanchor="bottom" if y == ASH else "top")
    with ch.group("pdh"):
        ch.hline(-0.5, x_end, PDH, color=t.bull_text, dash="dash", width=1.5)
        ch.label(-0.4, PDH + 0.0002, "<b>PDH 1.1050</b> — the day's draw on liquidity", size=11,
                 color=t.bull_text, yanchor="bottom")
    with ch.group("position"):
        ch.zone(I_OB - 0.4, I_FILL + 0.5, *OB, color=t.bull, alpha=0.25)
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("london"):
        ch.callout(I_SSL, C[I_SSL].l, 3.0, 1.0962, "<b>①</b> London takes the Asian low", xanchor="center")
        ch.callout(I_DISP, ASH, 4.5, 1.1036, "<b>②</b> …then the Asian high,<br>leaving the London high 1.1030",
                   xanchor="center")
    with ch.group("lh"):
        ch.hline(I_LH, I_TAKE_LH + 0.4, LON_H, color=t.ink2, dash="dot")
    with ch.group("ny"):
        ch.callout(I_FILL, C[I_FILL].l, 9.5, 1.0958, "<b>③</b> NY returns to the London OB → buy 1.0980",
                   xanchor="center")
        ch.callout(I_TAKE_LH, LON_H, 12.0, 1.1058, "<b>④</b> NY takes the London high", xanchor="center")
    ch.header("SMC · Session Liquidity", "Session Liquidity — Each Session Targets the Last",
              "EUR/USD · 1-hour candles · Bangladesh time, US summer · bullish day",
              key=[("■", t.zone, "London"), ("■", t.accent, "New York"), ("■", t.bull, "OB")])
    ch.footnote("Synthetic candles built around the levels in the Session Liquidity lesson")
    ch.caption()
    ticks = list(range(0, N, 2))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[Y0, Y1], y_dtick=0.0020, y_fmt=".4f", x_title="Bangladesh time",
            x_ticks=(ticks, [_ampm(C[i].label) for i in ticks]))
    return ch.fig


def _ampm(label):
    h = int(label[:2])
    return f"{h % 12 or 12} {'AM' if h < 12 else 'PM'}"


def main():
    paths = save(NAME, build, "Session Liquidity Chain", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OB {OB} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
