"""
One London open on EUR/USD 5m (BD time, US/UK summer) seen through three decisions: A chases the first spike, B sells
the break of the Asian low, C waits for a close back inside plus a CHOCH. A and B are simulated stop-outs on this
single path; C is shown as a plan (the target is not reached in the data).

Candles: data/eurusd_5m_psych.csv (synthetic), 5-minute candles from 12:45 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "london-three-decisions"
PIP = 0.0001
C = load(DATA / "eurusd_5m_psych.csv", Candle, unit_label="5m candle")
N = len(C)
ASIA = (1.0852, 1.0872)
I_OPEN, I_CHOCH, I_FILL = 3, 9, 11
A_ENTRY, A_STOP = C[I_OPEN].c, 1.0864
B_ENTRY, B_STOP = 1.0848, 1.0861
C_ENTRY, C_STOP, C_TARGET = 1.0856, 1.0841, 1.0892


def bd(i):
    return clock(12.75 + i / 12)


def first_hit(start, stop, long):
    return next(i for i in range(start, N) if (C[i].l <= stop if long else C[i].h >= stop))


I_A = first_hit(I_OPEN + 1, A_STOP, True)
I_B = first_hit(8, B_STOP, False)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_OPEN) == "1:00 PM" and bd(I_FILL) == "1:40 PM"
    assert C[I_OPEN].c > ASIA[1] and C[I_OPEN].bullish, "first move: up through the Asian high"
    assert I_A < 7 and C[7].c < ASIA[0], "A is stopped before price breaks the Asian low"
    assert C[8].l == min(c.l for c in C) < ASIA[0], "the break sweeps the Asian low"
    assert B_ENTRY >= C[8].l and C[7].l <= B_ENTRY <= C[7].h or C[8].l <= B_ENTRY <= C[8].h, "B sells the break"
    assert I_B > 8, "B is stopped after the reversal"
    assert C[I_CHOCH].c > max(C[8].h, ASIA[0]) and C[I_CHOCH].c > ASIA[0], "close back inside, above the last lower high"
    assert C[I_FILL].l <= C_ENTRY <= C[I_FILL].h and C[I_CHOCH + 1].c > C_ENTRY, "retest fill after the CHOCH"
    assert C_STOP < C[8].l and min(c.l for c in C[I_FILL:]) > C_STOP, "C is not stopped"
    assert max(c.h for c in C) < C_TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 4.5
    with ch.group("asia"):
        ch.zone(-0.5, x_end, *ASIA, color=t.zone, alpha=0.10, dash="dot")
        ch.label(-0.4, ASIA[1] + 0.0001, "<b>Asian range</b> 1.0852 – 1.0872", size=11, color=t.zone_text,
                 yanchor="bottom")
        ch.fig.add_vline(x=I_OPEN - 0.5, line=dict(color=t.ink3, width=1, dash="dot"))
        ch.label(I_OPEN - 0.4, 1.0902, "<b>1:00 PM</b> London opens", size=11, color=t.ink2, yanchor="top")
    with ch.group("A"):
        ch.hline(I_OPEN, I_A + 0.4, A_ENTRY, color=t.bear_text, dash="dot")
        ch.hline(I_OPEN, I_A + 0.4, A_STOP, color=t.bear_text, dash="solid", width=1.4)
        ch.callout(I_A, A_STOP, 5.5, 1.0896, "<b>A · FOMO long</b> 1.0876 (first spike)<br>stopped at 1.0864 → −1R<br>(simulated)",
                   xanchor="center")
    with ch.group("B"):
        ch.hline(7, I_B + 0.4, B_ENTRY, color=t.bear_text, dash="dot")
        ch.hline(7, I_B + 0.4, B_STOP, color=t.bear_text, dash="solid", width=1.4)
        ch.callout(I_B, B_STOP, 5.0, 1.0832, "<b>B · panic short</b> 1.0848 (break of the low)<br>stopped at 1.0861 → −1R<br>(simulated)",
                   xanchor="center")
    with ch.group("C"):
        ch.position(I_FILL - 0.4, x_end, entry=C_ENTRY, stop=C_STOP, targets=[C_TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("Cnote"):
        ch.callout(I_FILL, C[I_FILL].l, 17.5, 1.0832, "<b>C · the plan</b>: close back inside (1:30 PM), then the retest at 1:40 PM<br>"
                   "buy 1.0856 · stop 1.0841 · target 1.0892 (planned 1 : 2.4)", xanchor="center")
    ch.header("Forex Sessions · Psychology", "One London Open, Three Decisions",
              "EUR/USD · 5-minute candles · 12:45 – 2:15 PM Bangladesh time (US/UK summer)",
              key=[("■", t.zone, "Asian range"), ("━", t.bear_text, "Stopped out (A, B)")])
    ch.footnote("Synthetic candles; A and B are simulated on this single path to illustrate decisions, not a track record")
    ch.caption()
    ticks = list(range(0, N, 3))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0822, 1.0905], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "London Three Decisions", OUT)
    risk, [(_, reward, rr)] = levels(C_ENTRY, C_STOP, [C_TARGET], PIP)
    print(f"{NAME}: A stop idx {I_A} B stop idx {I_B} C risk {risk:g} reward {reward:g} 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
