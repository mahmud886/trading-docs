"""Rebuild every ICT PD Arrays chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_pd_arrays.py"""

import breaker_vs_mitigation
import eurusd_pd_confluence
import pd_matrix

for module in (pd_matrix, eurusd_pd_confluence, breaker_vs_mitigation):
    module.main()
