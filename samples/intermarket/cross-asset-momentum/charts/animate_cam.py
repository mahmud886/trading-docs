"""Explainer video: a 60-day momentum rule across four synthetic assets. Reuses cam_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import cam_chart as d

animkit.run(
    "cam-explainer", d.build, ("labels", "bars"),
    "<b>Cross-asset momentum</b> — the same simple rule on four markets",
    [("The rule: long if the past 60 days rose, short if they fell; one-day hold, no costs", 120, [], 0.35),
     ("Equity and gold, built with persistent trends, gain; the bond index and FX pair stay near zero", d.N, ["labels"], 0.35),
     ("Against buy-and-hold: the rule roughly matches it on equity and gold — it is not a free lunch", None, ["bars"])],
    "Momentum is a hypothesis to test per market — with costs, and out of sample",
    OUT)
