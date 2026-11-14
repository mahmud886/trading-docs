"""
Managing a trend trade: sell the first lower high, take half at 2R, trail the stop above each new lower high after
every bearish BOS, and leave when the trailed stop is hit. An illustration of the method, not a record.

Candles: data/eurusd_4h_trend_trade.csv (synthetic).
"""

from _paths import DATA, OUT
from chartkit import Candle, Chart, Reveal, save
from sdkit import load

NAME = "trend-trade-trailing-stop"
PIP = 0.0001
C = load(DATA / "eurusd_4h_trend_trade.csv", Candle, unit_label="4H candle")
N = len(C)
LOWS = {3: "L", 10: "LL", 17: "LL", 24: "LL"}
HIGHS = {0: "H", 6: "LH", 13: "LH", 20: "LH"}
I_ENTRY = 6
ENTRY, STOP0 = 1.0970, 1.0985
RISK = ENTRY - STOP0  # negative for a short
PARTIAL = round(ENTRY + 2 * RISK, 4)  # 2R for a short = entry − 2 × 15 pips
# (from candle, to candle, stop level, why)
STEPS = [(I_ENTRY, 15, 1.0985, "initial stop above the LH"), (15, 22, 1.0950, "trailed above LH 1.0945"),
         (22, 28, 1.0917, "trailed above LH 1.0912")]
I_EXIT = 28


def bos_after(level, start):
    return next(k for k in range(start, N) if C[k].c < level)


def validate():
    for c in C:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h
    hs = [C[i].h for i in HIGHS]
    ls = [C[i].l for i in LOWS]
    assert hs == sorted(hs, reverse=True) and ls == sorted(ls, reverse=True), "lower highs and lower lows"
    assert C[I_ENTRY].l <= ENTRY <= C[I_ENTRY].h
    assert bos_after(C[10].l, 11) == 15 and bos_after(C[17].l, 18) == 22, "stops move after each BOS"
    for a, b, lvl, _ in STEPS:
        assert all(c.h < lvl for c in C[a + 1:b]), f"stop {lvl} not hit early"
    assert C[I_EXIT].h >= STEPS[-1][2] and all(c.h < STEPS[-1][2] for c in C[22:I_EXIT]), "trailed stop hit at exit"
    assert min(c.l for c in C[I_ENTRY:12]) <= PARTIAL, "the 2R partial level was traded"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    ch.candles(C, "EUR/USD 4H (synthetic)", price_fmt=".4f", x=list(range(N)), text=[c.label for c in C])
    with ch.group("structure"):
        for i, name in HIGHS.items():
            ch.label(i, C[i].h + 0.0003, f"<b>{name}</b>", size=11, color=t.bear_text, xanchor="center",
                     yanchor="bottom")
        for i, name in LOWS.items():
            ch.label(i, C[i].l - 0.0003, f"<b>{name}</b>", size=11, color=t.bear_text, xanchor="center", yanchor="top")
    with ch.group("entry"):
        ch.hline(I_ENTRY - 0.4, I_EXIT + 0.4, ENTRY, color=t.ink, width=1.6, dash="solid")
        ch.label(I_ENTRY - 0.5, ENTRY, "<b>Sell 1.0970</b>", size=11, color=t.ink, xanchor="right")
    for k, (a, b, lvl, why) in enumerate(STEPS):
        with ch.group(f"step{k}"):
            ch.hline(a - 0.4 if k == 0 else a, b + (0.4 if k == len(STEPS) - 1 else 0), lvl, color=t.bear,
                     width=2.2, dash="solid")
            ch.label((a + b) / 2, lvl + 0.0002, f"stop {lvl:.4f} — {why}", size=10, color=t.bear_text,
                     xanchor="center", yanchor="bottom")
    with ch.group("partial"):
        ch.hline(I_ENTRY - 0.4, 12, PARTIAL, color=t.bull_text, dash="dash")
        ch.label(I_ENTRY - 0.5, PARTIAL, "half closed at 2R (1.0940)", size=10, color=t.bull_text, xanchor="right")
    with ch.group("exit"):
        r = (ENTRY - STEPS[-1][2]) / -RISK
        ch.callout(I_EXIT, STEPS[-1][2], 23.5, 1.0995, f"Trailed stop hit at 1.0917:<br>"
                   f"the rest closes at +{(ENTRY - STEPS[-1][2]) / PIP:.0f} pips ({r:.1f}R)", xanchor="center")
    ch.header("Price Action · Trend Trading", "Trend Trading — Enter, Trail, Exit",
              "EUR/USD · 4-hour downtrend · sell the first lower high, then trail the stop above each new one",
              key=[("━", t.ink, "Entry"), ("━", t.bear, "Stop (trailed)"), ("┅", t.bull_text, "2R partial")])
    ch.footnote("Synthetic candles illustrating trade management in the Trend Trading lesson — not a trade record")
    ch.caption()
    ch.axes(x_range=[-2.8, N + 0.5], y_range=[1.0850, 1.1015], y_dtick=0.0020, y_fmt=".4f",
            x_title="4-hour candles", x_ticks=(list(range(0, N, 3)), [str(i + 1) for i in range(0, N, 3)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Trend Trade Trailing Stop", OUT)
    print(f"{NAME}: partial {PARTIAL} exit {STEPS[-1][2]} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
