"""
Bullish market structure shift — a sell-side sweep, displacement through the last lower high, an FVG retrace entry.

Candles: samples/smc/_shared/structure_bull.py (the shared synthetic series, mirrored), hours 15–42.
"""

from _paths import OUT
from chartkit import Chart, Reveal, levels, save
from smckit import fvgs
from structure import IDX
from structure_bull import BOS_UP, CANDLES, LEVELS, MSS

NAME = "bullish-mss"
PIP = 0.0001
X0 = 14
C = CANDLES[X0:]
FVG = next((lo, hi) for i, lo, hi, k in fvgs(CANDLES) if i == MSS and k == "bull")
LEG = CANDLES[MSS:MSS + 3]
ENTRY, STOP, TARGET = LEVELS["LH"], 1.0798, LEVELS["LL"]


def validate():
    assert all(c.bullish for c in LEG), "three bullish displacement candles"
    assert FVG[0] <= ENTRY <= FVG[1], "the higher low retraces into the FVG"
    assert STOP < LEVELS["H4"] and max(c.h for c in CANDLES) >= TARGET


validate()
DISP = round(sum(c.body for c in LEG) / PIP)


def build(t, reveal: Reveal | None = None):
    ch = Chart(t, reveal)
    xs = list(range(X0, len(CANDLES)))
    with ch.group("trend"):
        for name, text in (("H2", "LL"), ("HL2", "LH"), ("H3", "LL"), ("HL3", "LH")):
            i, p = IDX[name], LEVELS[name]
            up = text == "LH"
            ch.label(i, p + (0.0004 if up else -0.0004), f"<b>{text}</b>", size=11, xanchor="center",
                     yanchor="bottom" if up else "top", color=t.bear_text)
    with ch.group("sweep"):
        ch.hline(IDX["H3"], IDX["H4"] + 0.4, LEVELS["H3"], color=t.ink3, width=1.2)
        ch.callout(IDX["H4"], LEVELS["H4"], 23.0, 1.0784, "<b>① Sweep</b>: 1.0800 takes the stops under<br>1.0805, "
                   "closes back above", xanchor="center")
    with ch.group("mss"):
        ch.hline(IDX["HL3"], MSS + 0.4, LEVELS["HL3"], color=t.bull_text, dash="dash")
        ch.callout(MSS + 1, CANDLES[MSS + 1].c, 24.0, 1.0868, f"<b>② MSS</b>: three strong candles ({DISP} pips)<br>"
                   "close above the 1.0830 lower high", xanchor="center")
    with ch.group("fvg"):
        ch.zone(MSS - 0.4, IDX["LH"] + 0.5, *FVG, color=t.bull, alpha=0.2, dash="dash")
    with ch.group("position"):
        ch.position(IDX["LH"] - 0.4, len(CANDLES) + 1.5, entry=ENTRY, stop=STOP, targets=[TARGET], unit=PIP,
                    unit_name="pips", fmt=".4f", long=True)
    ch.candles(C, "EUR/USD 1H (synthetic)", price_fmt=".4f", x=xs, text=[c.label for c in C])
    with ch.group("entry"):
        ch.callout(IDX["LH"], ENTRY, 33.5, 1.0790, "<b>③</b> Higher low retraces into the FVG<br>→ buy 1.0825",
                   xanchor="center")
    with ch.group("bos"):
        ch.hline(IDX["L5"], BOS_UP + 0.4, LEVELS["L5"], color=t.bull_text, dash="dot")
        ch.label(BOS_UP + 0.5, LEVELS["L5"], "BOS", size=11, color=t.bull_text, yanchor="top")
    ch.header("SMC · Market Structure Shift", "Market Structure Shift — Sweep, Displacement, Retrace",
              "EUR/USD · 1-hour candles · a downtrend ends: the shift is the break <b>with displacement</b>",
              key=[("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle"), ("■", t.bull, "Bullish FVG")])
    ch.footnote("Synthetic candles (shared SMC structure series, mirrored) for the MSS lesson")
    ch.caption()
    ch.axes(x_range=[X0 - 0.8, len(CANDLES) + 2], y_range=[1.0772, 1.0902], y_dtick=0.0020, y_fmt=".4f",
            x_title="Hours", x_ticks=(list(range(X0, len(CANDLES), 4)),
                                      [str(i + 1) for i in range(X0, len(CANDLES), 4)]))
    return ch.fig


def main():
    paths = save(NAME, build, "Bullish MSS", OUT)
    risk, [(_, reward, rr)] = levels(ENTRY, STOP, [TARGET], PIP)
    print(f"{NAME}: FVG {FVG} disp {DISP} · risk {risk:g} reward {reward:g} R:R 1:{rr:.2f} → "
          f"{', '.join(p.name for p in paths)}")


if __name__ == "__main__":
    main()
