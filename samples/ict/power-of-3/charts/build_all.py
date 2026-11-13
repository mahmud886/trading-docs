"""Rebuild the ICT Power of 3 charts (video: python animate_po3.py)"""

import eurusd_po3_day
import po3_candle

for module in (po3_candle, eurusd_po3_day):
    module.main()
