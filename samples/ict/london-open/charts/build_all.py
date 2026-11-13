"""Rebuild the ICT London Open charts (video: python animate_london_open.py)"""

import eurusd_london_bull
import gold_london_bear

for module in (eurusd_london_bull, gold_london_bear):
    module.main()
