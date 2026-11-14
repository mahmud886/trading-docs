"""
One synthetic EUR/USD day in hourly candles (BD time, US/UK summer): quiet Asia, London's move, the London–New York
overlap, and the quiet late New York hours, with the average hourly range of each block computed from the candles.
A continuation long is taken when the overlap pulls back into London's move and holds.

Candles: data/eurusd_1h_day.csv (synthetic), hourly from 6:00 AM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "overlap-day-ranges"
PIP = 0.0001
C = load(DATA / "eurusd_1h_day.csv", Candle, unit_label="hour")
N = len(C)
BLOCKS = [("Asia", 0, 7), ("London", 7, 12), ("London–NY overlap", 12, 16), ("After London closes", 16, N)]
I_FILL = 12
ENTRY, STOP, TARGET = 1.0871, 1.0860, 1.0910
LONDON_HIGH = max(c.h for c in C[7:12])


def bd(i):
    return clock(6 + i)


def avg_range(a, b):
    return sum(c.h - c.l for c in C[a:b]) / (b - a) / PIP


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(7) == "1:00 PM" and bd(12) == "6:00 PM" and bd(16) == "10:00 PM"
    r = {name: avg_range(a, b) for name, a, b in BLOCKS}
    assert r["London–NY overlap"] == max(r.values()) and r["Asia"] < r["London"], r
    assert C[I_FILL - 1].l > ENTRY and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "first pullback fill in the overlap"
    assert C[I_FILL].c > ENTRY and C[I_FILL + 1].c > LONDON_HIGH, "holds, then continues above London's high"
    assert max(c.h for c in C) < TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    tints = {"Asia": t.zone, "London": t.accent, "London–NY overlap": t.bear, "After London closes": t.ink3}
    for name, a, b in BLOCKS:
        with ch.group(name):
            ch.zone(a - 0.5, b - 0.5 if b < N else x_end, 1.0835, 1.0925, color=tints[name], alpha=0.07, border=False)
            ch.label((a + b - 1) / 2, 1.0923, f"<b>{name}</b><br>avg hourly range {avg_range(a, b):.0f} pips",
                     size=11, color=t.ink2, xanchor="center", yanchor="top", align="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 9.0, 1.0842, "6:00 PM: overlap pulls back into<br>London's move, holds → buy 1.0871",
                   xanchor="center")
    ch.header("Forex Sessions · Overlaps", "Overlaps — Where Two Sessions Trade at Once",
              "EUR/USD · hourly candles · one day from 6:00 AM Bangladesh time (US/UK summer)",
              key=[("■", t.accent, "London"), ("■", t.bear, "London–NY overlap")])
    ch.footnote("Synthetic candles; ranges are computed from this one illustrative day, not market statistics")
    ch.caption()
    ticks = list(range(0, N, 3))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0835, 1.0925], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Session Overlaps", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(NAME, {n: round(avg_range(a, b), 1) for n, a, b in BLOCKS}, f"risk {risk:g} reward {reward:g} 1:{rr:.2f}",
          ', '.join(p.name for p in paths))


if __name__ == "__main__":
    main()
