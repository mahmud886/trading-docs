"""Rebuild the ICT AMD charts (video: python animate_amd.py)"""

import gold_amd_bear
import nas_weekly_amd

for module in (nas_weekly_amd, gold_amd_bear):
    module.main()
