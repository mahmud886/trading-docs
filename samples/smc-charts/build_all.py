"""Rebuild every chart in this folder: python build_all.py"""

import bearish_order_block_nas100
import fair_value_gap_eurusd
import imbalance_types
import inverse_fvg_gbpusd

for module in (bearish_order_block_nas100, fair_value_gap_eurusd, inverse_fvg_gbpusd, imbalance_types):
    module.main()
