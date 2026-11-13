"""Rebuild every ICT MSS chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_mss.py"""

import bos_choch_mss
import eurusd_bullish_mss
import nas100_bearish_mss

for module in (eurusd_bullish_mss, nas100_bearish_mss, bos_choch_mss):
    module.main()
