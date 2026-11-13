"""
SMC in one chart — structure, BOS, liquidity sweep, CHOCH, order block, FVG, premium/discount (EUR/USD 1H).

Candles: samples/smc/_shared/eurusd_1h_structure.csv (synthetic).
"""

from _paths import OUT
from chartkit import Chart, Reveal, levels, save
from smckit import fvgs
from structure import BOS1, BOS2, BOS_DN, CANDLES, CHOCH, IDX, LEVELS

NAME = "smc-overview"
PIP = 0.0001
OB = (CANDLES[27].o, CANDLES[27].c)
FVG = next((lo, hi) for i, lo, hi, kind in fvgs(CANDLES) if i == CHOCH and kind == "bear")
RANGE = (LEVELS["L5"], LEVELS["H4"])
EQ = sum(RANGE) / 2
ENTRY, STOP, TARGET = LEVELS["LH"], 1.0932, LEVELS["LL"]


def validate():
    c = CANDLES
    assert c[27].bullish and not c[28].bullish, "bearish OB = last up-close candle before the drop"
    assert FVG[0] <= ENTRY <= FVG[1], "the lower high retraces into the FVG"
    assert ENTRY > EQ, "the lower high is in premium"
    assert STOP > LEVELS["H4"]


validate()


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    n = len(CANDLES)
    lab = {"L1": "L", "H1": "HH", "HL1": "HL", "H2": "HH", "HL2": "HL", "H3": "HH", "HL3": "HL", "L5": "L",
           "LH": "LH", "LL": "LL"}
    with ch.group("structure"):
        for name, text in lab.items():
            i, p = IDX[name], LEVELS[name]
            hi = name.startswith("H") and not name.startswith("HL") or name == "LH"
            x, xa = (i - 0.6, "right") if name == "LL" else (i, "center")
            ch.label(x, p + (0.0004 if hi else -0.0004) * (0 if name == "LL" else 1), f"<b>{text}</b>", size=11,
                     xanchor=xa,
                     yanchor="middle" if name == "LL" else "bottom" if hi else "top", color=t.bull_text if text in ("HH", "HL") else t.bear_text
                     if text in ("LH", "LL") else t.ink2)
    with ch.group("bos"):
        for lvl, i0, i1 in ((LEVELS["H1"], IDX["H1"], BOS1), (LEVELS["H2"], IDX["H2"], BOS2)):
            ch.hline(i0, i1 + 0.4, lvl, color=t.bull_text, dash="dash")
            ch.label(i1 + 0.5, lvl, "BOS", size=11, color=t.bull_text, yanchor="bottom")
    with ch.group("sweep"):
        ch.hline(IDX["H3"], IDX["H4"] + 0.4, LEVELS["H3"], color=t.ink3, width=1.2)
        ch.callout(IDX["H4"], LEVELS["H4"], 23.0, 1.0952, "<b>Liquidity sweep</b>: 1.0930 takes the<br>stops above "
                   "1.0925, closes back below", xanchor="center")
    with ch.group("choch"):
        ch.hline(IDX["HL3"], CHOCH + 0.4, LEVELS["HL3"], color=t.bear_text, dash="dash")
        ch.callout(CHOCH, CANDLES[CHOCH].c, 33.5, 1.0838, "<b>CHOCH</b>: first close below the<br>last higher low "
                   "(1.0900)", xanchor="center")
    with ch.group("pd"):
        ch.zone(IDX["H4"] - 0.4, n - 0.5, EQ, RANGE[1], color=t.bear, alpha=0.05, border=False)
        ch.zone(IDX["H4"] - 0.4, n - 0.5, RANGE[0], EQ, color=t.bull, alpha=0.05, border=False)
        ch.hline(IDX["H4"] - 0.4, n - 0.5, EQ, color=t.ink3, dash="dot")
        ch.label(n - 0.5, EQ, "50%", size=10, color=t.ink3, xanchor="right", yanchor="bottom")
    with ch.group("pdarrays"):
        ch.zone(26.6, IDX["LH"] + 0.5, *OB, color=t.bear, alpha=0.25)
        ch.zone(CHOCH - 0.4, IDX["LH"] + 0.5, *FVG, color=t.bear, alpha=0.12, dash="dash")
        ch.label(IDX["LH"] + 0.6, OB[1] + 0.0001, "order block", size=10, color=t.bear_text, yanchor="bottom")
        ch.label(IDX["LH"] + 0.6, FVG[0], "FVG", size=10, color=t.bear_text, yanchor="top")
    with ch.group("position"):
        ch.position(IDX["LH"] - 0.4, n + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP, unit_name="pips",
                    fmt=".4f", long=False)
    ch.candles(CANDLES, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=list(range(n)),
               text=[c.label for c in CANDLES])
    ch.header("SMC · Introduction", "SMC in One Chart — Structure, Liquidity, CHOCH, Entry Zones",
              "EUR/USD · 1-hour candles · an uptrend ends with a sweep and a change of character",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bear, "OB / FVG")])
    ch.footnote("Synthetic candles (shared SMC structure series) labelled with the core SMC concepts")
    ch.caption()
    ch.axes(x_range=[-0.8, n + 2], y_range=[1.0788, 1.0962], y_dtick=0.0020, y_fmt=".4f", x_title="Hours",
            x_ticks=(list(range(0, n, 6)), [str(i + 1) for i in range(0, n, 6)]))
    return ch.fig


def main():
    paths = save(NAME, build, "SMC in One Chart", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: OB {OB} FVG {FVG} EQ {EQ:.5f} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
