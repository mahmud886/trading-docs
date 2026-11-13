"""Rebuild the ICT Kill Zones charts: python build_all.py (video: python animate_kill_zones.py)"""

import eurusd_london_kz
import kill_zone_clock

for module in (kill_zone_clock, eurusd_london_kz):
    module.main()
