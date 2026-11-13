"""Rebuild every ICT Liquidity Sweep chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_sweep.py"""

import eurusd_pdh_sweep
import gold_eql_sweep

for module in (eurusd_pdh_sweep, gold_eql_sweep):
    module.main()
