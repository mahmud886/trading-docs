"""Rebuild every ICT FVG chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_fvg.py"""

import eurusd_bullish_fvg
import fvg_reactions
import gold_bearish_fvg
import nas100_inversion_fvg

for module in (eurusd_bullish_fvg, gold_bearish_fvg, nas100_inversion_fvg, fvg_reactions):
    module.main()
