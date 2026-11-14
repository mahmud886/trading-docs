"""
The sweep chain on EUR/USD 30m (BD time, US/UK summer): Asia builds a range, London sweeps its low and rallies to a
new high, New York sweeps London's high on the 6:30 PM data and turns back toward the Asian low. Each session's
extreme becomes the next session's target.

Candles: data/eurusd_30m_chain.csv (synthetic), 30-minute candles from 6:00 AM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "sweep-chain"
PIP = 0.0001
C = load(DATA / "eurusd_30m_chain.csv", Candle, unit_label="30m candle")
N = len(C)
I_LON, I_NY = 14, 24
I_S1, I_S2, I_CHOCH, I_FILL = 14, 25, 26, 28
A_H = max(c.h for c in C[:I_LON])
A_L = min(c.l for c in C[:I_LON])
L_H = max(c.h for c in C[I_LON:I_NY])
HL = min(c.l for c in C[21:I_NY + 1])
ENTRY, STOP, TARGET = 1.0887, 1.0911, 1.0845


def bd(i):
    return clock(6 + i / 2)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_LON) == "1:00 PM" and bd(I_NY) == "6:00 PM" and bd(I_S2) == "6:30 PM"
    assert round((A_H - A_L) / PIP) == 20
    s1 = C[I_S1]
    assert s1.l < A_L and C[I_S1 + 1].c > A_L, "London sweeps the Asian low and closes back inside"
    assert L_H == C[20].h > A_H, "London's rally makes a new high"
    s2 = C[I_S2]
    assert s2.h > L_H and s2.c < L_H, "New York sweeps London's high and closes back below"
    assert all(c.c >= HL for c in C[I_NY:I_CHOCH]) and C[I_CHOCH].c < HL, "CHOCH below London's last pullback low"
    assert all(c.h < ENTRY for c in C[I_CHOCH:I_FILL]) and C[I_FILL].l <= ENTRY <= C[I_FILL].h, "retest fill"
    assert STOP > s2.h and min(c.l for c in C[I_FILL:]) > TARGET, "plan, not result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    top, bot = 1.0925, 1.0830
    with ch.group("asia"):
        ch.zone(-0.5, I_LON - 0.5, bot, top, color=t.zone, alpha=0.07, border=False)
        ch.label(6.5, top - 0.0001, "<b>Asia</b> · 6:00 AM – 1:00 PM", size=11, color=t.ink2, xanchor="center",
                 yanchor="top")
        ch.zone(-0.5, x_end, A_L, A_H, color=t.zone, alpha=0.08, dash="dot")
        ch.label(-0.4, A_H + 0.0001, f"Asian high {A_H:.4f}", size=10, color=t.zone_text, yanchor="bottom")
        ch.label(-0.4, A_L - 0.0001, f"Asian low {A_L:.4f}", size=10, color=t.zone_text, yanchor="top")
    with ch.group("london"):
        ch.zone(I_LON - 0.5, I_NY - 0.5, bot, top, color=t.accent, alpha=0.06, border=False)
        ch.label((I_LON + I_NY) / 2 - 0.5, top - 0.0001, "<b>London</b> · from 1:00 PM", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
        ch.hline(20, x_end, L_H, color=t.bear_text, dash="dash")
        ch.label(x_end, L_H + 0.0001, f"London high {L_H:.4f}", size=10, color=t.bear_text, xanchor="right",
                 yanchor="bottom")
    with ch.group("ny"):
        ch.zone(I_NY - 0.5, x_end, bot, top, color=t.bear, alpha=0.06, border=False)
        ch.label((I_NY + x_end) / 2, top - 0.0001, "<b>New York</b> · from 6:00 PM", size=11, color=t.ink2,
                 xanchor="center", yanchor="top")
    with ch.group("s1"):
        ch.callout(I_S1, C[I_S1].l, 8.0, 1.0836, "① London sweeps the Asian low<br>(1.0843), closes back inside",
                   xanchor="center")
    with ch.group("s2"):
        ch.callout(I_S2, C[I_S2].h, 17.0, 1.0916, "② New York sweeps London's high<br>(1.0908) on the 6:30 PM data",
                   xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 30m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].l, 31.0, 1.0846, "③ CHOCH, retest → sell 1.0887", xanchor="center")
    ch.header("Forex Sessions · Liquidity Sweeps", "The Sweep Chain — Each Session's Extreme Is the Next Target",
              "EUR/USD · 30-minute candles · 6:00 AM – 1:00 AM Bangladesh time (US/UK summer)",
              key=[("■", t.zone, "Asia"), ("■", t.accent, "London"), ("■", t.bear, "New York")])
    ch.footnote("Synthetic candles built around the levels in the Session Liquidity Sweeps lesson")
    ch.caption()
    ticks = list(range(0, N, 4))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[bot, top], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Sweep Chain", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: A {A_L}-{A_H} LH {L_H} HL {HL} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
