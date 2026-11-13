"""Rebuild the ICT New York Open charts (video: python animate_ny_open.py)"""

import eurusd_ny_continuation
import gold_ny_sweep

for module in (eurusd_ny_continuation, gold_ny_sweep):
    module.main()
