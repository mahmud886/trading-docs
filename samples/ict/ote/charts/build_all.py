"""Rebuild every ICT OTE chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_ote.py"""

import eurusd_bullish_ote
import gold_bearish_ote
import ote_depth

for module in (eurusd_bullish_ote, gold_bearish_ote, ote_depth):
    module.main()
