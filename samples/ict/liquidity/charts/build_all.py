"""Rebuild every ICT Liquidity chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_liquidity.py"""

import gold_pdh_sweep
import liquidity_cycle_eurusd
import sweep_vs_run

for module in (liquidity_cycle_eurusd, gold_pdh_sweep, sweep_vs_run):
    module.main()
