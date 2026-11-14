"""Explainer video: a delta divergence. Reuses delta_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import delta_chart as d

animkit.run(
    "delta-explainer", d.build, ("div", "weak", "after"),
    "<b>Delta</b> — aggressive buying minus aggressive selling",
    [("First leg up: every bar has positive delta — price and cumulative delta rise together", d.H1 + 1, [], 4),
     ("A pullback on negative delta, then a second leg up", 29, ["weak"], 3),
     ("Price makes a higher high, but the second leg's delta is weak and cumulative delta makes a lower high — a divergence", d.H2 + 1, ["div"], 5),
     ("Price falls on strongly negative delta", d.N, ["after"], 4)],
    "A divergence is a warning, not a signal: wait for price to confirm and place a stop",
    OUT)
