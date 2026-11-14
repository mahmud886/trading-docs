"""
A US CPI release on EUR/USD 5m (Bangladesh time, US summer): a quiet range, a 6:30 PM news candle that spikes both
ways, a 30-minute wait, then a close below the news-candle low and a short on its retest.

Candles: data/eurusd_5m_news.csv (synthetic), 5-minute candles from 6:00 PM BD.
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, levels, save
from sdkit import load

NAME = "news-candle-aftermath"
PIP = 0.0001
C = load(DATA / "eurusd_5m_news.csv", Candle, unit_label="5m candle")
N = len(C)
I_NEWS, I_WAIT_END, I_BREAK, I_FILL = 6, 12, 12, 14
NEWS = C[I_NEWS]
PRE_H = max(c.h for c in C[:I_NEWS])
PRE_L = min(c.l for c in C[:I_NEWS])
ENTRY, STOP, TARGET = 1.0856, 1.0866, 1.0826


def bd(i):
    m = 18 * 60 + 5 * i
    h, mm = divmod(m, 60)
    return f"{h - 12}:{mm:02d} PM"


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    assert bd(I_NEWS) == "6:30 PM" and bd(I_WAIT_END) == "7:00 PM", "8:30 AM New York = 6:30 PM BD (summer)"
    assert round((PRE_H - PRE_L) / PIP) <= 10, "quiet before the release"
    assert NEWS.h - PRE_H >= 25 * PIP and PRE_L - NEWS.l >= 15 * PIP, "news candle spikes both ways"
    assert all(NEWS.l < c.l and c.h < NEWS.h for c in C[I_NEWS + 1:I_WAIT_END]), "settles inside the news candle"
    assert C[I_BREAK].c < NEWS.l, "first close outside the news candle"
    assert all(c.h < ENTRY for c in C[I_BREAK + 1:I_FILL]) and C[I_FILL].h >= ENTRY and C[I_FILL].h < STOP, "retest"
    assert min(c.l for c in C) > TARGET, "target not reached — the plan, not a result"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    x_end = N + 2.5
    with ch.group("pre"):
        ch.zone(-0.5, I_NEWS - 0.5, PRE_L, PRE_H, color=t.zone, alpha=0.18)
        ch.label(-0.4, PRE_H + 0.0002, f"Pre-release range · {(PRE_H - PRE_L) / PIP:.0f} pips", size=11,
                 color=t.ink2, yanchor="bottom")
    with ch.group("news"):
        ch.zone(I_NEWS - 0.5, I_WAIT_END - 0.5, 1.0822, 1.0920, color=t.accent, alpha=0.07)
        ch.label((I_NEWS + I_WAIT_END - 1) / 2, 1.0918, "<b>Wait 30 minutes</b><br>6:30 – 7:00 PM BD", size=11,
                 color=t.ink2, xanchor="center", yanchor="top")
        for y, name in ((NEWS.h, "news-candle high"), (NEWS.l, "news-candle low")):
            ch.hline(I_NEWS, x_end, y, color=t.ink2, dash="dash")
            ch.label(x_end if y == NEWS.h else I_NEWS + 1.6, y, f"{name} {y:.4f}", size=10, color=t.ink2,
                     xanchor="right" if y == NEWS.h else "left", yanchor="bottom" if y == NEWS.h else "top")
        ch.callout(I_NEWS, NEWS.h, 2.5, 1.0905, "<b>US CPI, 6:30 PM BD</b><br>+32 pips, then −54 pips<br>"
                   "in one 5-minute candle", xanchor="center")
    with ch.group("position"):
        ch.position(I_FILL - 0.4, x_end, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(C, "EUR/USD 5m (synthetic)", price_fmt=".4f", x=list(range(N)), text=[bd(i) for i in range(N)])
    with ch.group("break"):
        ch.callout(I_BREAK, C[I_BREAK].l, 9.0, 1.0836, "① 7:00 PM: first close<br>below the news-candle low",
                   xanchor="center")
    with ch.group("entry"):
        ch.callout(I_FILL, C[I_FILL].h, 16.0, 1.0880, "② Retest → sell 1.0856", xanchor="center")
    ch.header("Price Action · News Impact", "News Impact — Don't Trade the Spike, Trade What It Leaves",
              "EUR/USD · 5-minute candles · 6:00 – 7:55 PM Bangladesh time (US summer) · US CPI at 8:30 AM New York",
              key=[("■", t.accent, "Wait window"), ("┅", t.ink2, "News-candle levels")])
    ch.footnote("Synthetic candles built around the levels in the News Impact lesson")
    ch.caption()
    ticks = list(range(0, N, 3))
    ch.axes(x_range=[-0.8, x_end + 0.3], y_range=[1.0820, 1.0922], y_dtick=0.0010, y_fmt=".4f",
            x_title="Bangladesh time", x_ticks=(ticks, [bd(i) for i in ticks]))
    return ch.fig


def main():
    paths = save(NAME, build, "News Impact", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
