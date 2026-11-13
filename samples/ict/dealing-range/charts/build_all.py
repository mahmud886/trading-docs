"""Rebuild every ICT Dealing Range chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_dealing_range.py"""

import eurusd_discount_buy
import eurusd_weekly_range
import gold_premium_sell
import nested_ranges_nas100

for module in (eurusd_weekly_range, eurusd_discount_buy, gold_premium_sell, nested_ranges_nas100):
    module.main()
