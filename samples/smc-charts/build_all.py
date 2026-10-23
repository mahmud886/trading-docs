"""Rebuild every chart (light + dark PNGs and a themed HTML preview each): python build_all.py"""

import bearish_order_block_nas100
import bullish_order_block_eurusd
import fair_value_gap_eurusd
import imbalance_types
import inverse_fvg_gbpusd

for module in (bullish_order_block_eurusd, bearish_order_block_nas100, fair_value_gap_eurusd, inverse_fvg_gbpusd,
               imbalance_types):
    module.main()
