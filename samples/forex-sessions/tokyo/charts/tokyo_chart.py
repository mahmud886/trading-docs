"""
USD/JPY in the Tokyo session (BD time): the 9:55 AM Tokyo fix lands at 6:55 AM BD, a range forms from 7:00 to 9:00 AM
BD, a rejection of the range low is bought, and the trade is closed before London opens if the target isn't hit.

Candles: data/usdjpy_15m_tokyo.csv (synthetic), 15-minute candles from 6:00 AM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load
from sessionkit import clock

NAME = "tokyo-range-usdjpy"
PIP = 0.01
C = load(DATA / "usdjpy_15m_tokyo.csv", Candle, unit_label="15m candle")
N = len(C)
I_FIX = 3
RANGE = (4, 12)                       # 7:00 – 9:00 AM BD
R_HIGH = max(c.h for c in C[slice(*RANGE)])
R_LOW = min(c.l for c in C[slice(*RANGE)])
I_REJECT = 15
ENTRY, STOP, TARGET = C[I_REJECT].c, 157.17, 157.46
EXIT = C[-1].c


def bd(i):
    return clock(6 + 0.25 * i)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_REJECT) == "9:45 AM" and bd(I_FIX) == "6:45 AM" and bd(N - 1) == "12:45 PM", "fix in the 6:45 candle; last candle ends 1:00 PM"
    assert C[I_FIX].h > R_HIGH, "fix spike sits above the later range"
    r = C[I_REJECT]
    assert R_LOW <= r.l <= R_LOW + 2 * PIP and r.bullish and r.c > r.l + 5 * PIP, "rejection of the range low"
    assert all(c.l > R_LOW for c in C[RANGE[1]:]), "range low holds"
    assert STOP < R_LOW and R_HIGH > TARGET > max(c.h for c in C[I_REJECT + 1:]), "target not reached"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 3.5
    with ch.group("fix"):
        ch.callout(I_FIX, C[I_FIX].h, 2.2, 157.56, "<b>6:55 AM BD</b> = 9:55 AM Tokyo fix<br>— a spike, then nothing",
                   xanchor="center")
    with ch.group("range"):
        ch.zone(RANGE[0] - 0.5, x_end, R_LOW, R_HIGH, color=t.zone, alpha=0.10, dash="dot")
        ch.label(RANGE[0] - 0.4, R_HIGH + 0.01, f"<b>Tokyo range</b> {R_LOW:.2f} – {R_HIGH:.2f} "
                 f"({(R_HIGH - R_LOW) / PIP:.0f} pips), set 7:00 – 9:00 AM", size=11, color=t.zone_text,
                 yanchor="bottom")
    with ch.group("position"):
        ch.position(I_REJECT + 0.6, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".2f", long=True)
    ch.candles(C, "USD/JPY 15m (synthetic)", price_fmt=".2f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("reject"):
        ch.callout(I_REJECT, C[I_REJECT].l, 12.0, 157.11, "9:45 AM: range low rejected,<br>close 157.27 → buy",
                   xanchor="center")
    with ch.group("exit"):
        ch.fig.add_vline(x=N - 0.5, line=dict(color=t.ink2, width=1.4, dash="dash"))
        ch.label(N - 0.4, 157.585, f"<b>1:00 PM BD: flat before London</b><br>exit {EXIT:.2f} · "
                 f"+{(EXIT - ENTRY) / PIP:.0f} pips (target not hit)", size=11, color=t.ink, yanchor="top")
    ch.header("Forex Sessions · Tokyo", "Tokyo — Range Trading USD/JPY, Out Before London",
              "USD/JPY · 15-minute candles · 6:00 AM – 1:00 PM Bangladesh time",
              key=[("■", t.zone, "Tokyo range"), ("┅", t.ink2, "London opens")])
    ch.footnote("Synthetic candles built around the levels in the Tokyo Session lesson; the exit is simulated on this path")
    ch.caption()
    ticks = list(range(0, N, 4))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[157.08, 157.60], y_dtick=0.05, y_fmt=".2f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "Tokyo Range", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: range {R_LOW}-{R_HIGH} risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} exit {EXIT} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
