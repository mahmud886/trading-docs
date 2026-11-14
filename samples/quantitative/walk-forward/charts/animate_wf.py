"""Explainer video: walk-forward optimisation against picking the best rule on all the data. Reuses wf_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import wf_chart as d

animkit.run(
    "wf-explainer", d.build, ("full", "params"),
    "<b>Walk-forward</b> — optimise on the past, trade the future, repeat",
    [("Each step optimises 35 moving-average rules on the previous 250 bars, then trades the best one for the next 60", 380, [], 0.25),
     ("Chained together, only out-of-sample bars count: the result rises to about +50% by day 1,050", 800, [], 0.15),
     ("Then it gives most of it back and finishes at +16% — buy-and-hold ends at -17%", len(d.C_WF), [], 0.15),
     ("Picking the single best rule on the whole sample shows +48% — but that choice needed data from the future", None, ["full"]),
     ("The optimiser's choice jumps around: slow length from 30 to 120, changing in 10 of 18 steps", None, ["params"])],
    "Judge a method by its walk-forward results — and by how stable its parameters are",
    OUT)
