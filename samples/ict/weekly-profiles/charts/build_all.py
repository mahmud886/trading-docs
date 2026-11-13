"""Rebuild the ICT Weekly Profiles charts (video: python animate_week.py)"""

import eurusd_week
import weekly_templates

for module in (weekly_templates, eurusd_week):
    module.main()
