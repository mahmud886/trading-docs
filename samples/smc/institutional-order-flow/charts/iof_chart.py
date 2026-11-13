"""
Institutional order flow — bullish while each pullback's order block holds and a new BOS follows; it flips when one fails.

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic).
"""

from _paths import OUT
from chartkit import Chart, Reveal, save
from structure import BOS1, BOS2, CANDLES, CHOCH, IDX

NAME = "order-flow-obs"
N = len(CANDLES)


def ob_before(i):
    """Last down-close candle at or before index i (the bullish OB of the next leg)."""
    j = i
    while CANDLES[j].bullish:
        j -= 1
    return j


OBS = [ob_before(IDX[k]) for k in ("HL1", "HL2", "HL3")]
ZONES = [(CANDLES[j].l, CANDLES[j].o) for j in OBS]
BREAKS = [BOS1, BOS2, None]


def validate():
    for j, z, nxt in zip(OBS[:2], ZONES[:2], (BOS1, BOS2)):
        assert all(c.c >= z[0] for c in CANDLES[j:nxt + 1]), "OB held until the next BOS"
    assert CANDLES[CHOCH].c < ZONES[2][0], "the third OB fails: order flow flips"


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    for k, (j, z, b) in enumerate(zip(OBS, ZONES, BREAKS), 1):
        with ch.group(f"ob{k}"):
            end = b if b is not None else CHOCH
            ch.zone(j - 0.4, end + 0.4, *z, color=t.bull if b is not None else t.bear, alpha=0.28)
            text = f"<b>OB {k}</b> holds → BOS" if b is not None else "<b>OB 3</b> fails → order flow flips"
            ch.label(j - 0.4, z[0] - 0.0003, text, size=11, color=t.bull_text if b is not None else t.bear_text,
                     yanchor="top")
    ch.candles(CANDLES, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(N)),
               text=[c.label for c in CANDLES])
    with ch.group("flip"):
        ch.callout(CHOCH, CANDLES[CHOCH].c, 35.5, 1.0935, "<b>Bearish order flow</b> from here:<br>bullish zones no "
                   "longer hold", xanchor="center")
    ch.header("SMC · Institutional Order Flow", "Order Flow — Bullish While the Zones Hold, Bearish Once One Fails",
              "EUR/USD · 1-hour candles · each pullback respects the last bullish OB until the third one breaks",
              key=[("■", t.bull, "OB that held"), ("■", t.bear, "OB that failed")])
    ch.footnote("Synthetic candles (shared SMC structure series) for the Institutional Order Flow lesson")
    ch.caption()
    ch.axes(x_range=[-0.8, N + 0.5], y_range=[1.0788, 1.0962], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, N, 6)), [str(i + 1) for i in range(0, N, 6)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Order Flow", OUT)
    print(f"{NAME}: OBs {OBS} zones {ZONES} → {', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
