"""Rebuild the ICT Judas Swing charts (video: python animate_judas.py)"""

import eurusd_london_judas
import judas_days

for module in (judas_days, eurusd_london_judas):
    module.main()
