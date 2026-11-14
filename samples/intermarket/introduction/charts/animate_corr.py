"""Explainer video: a strong inverse link that breaks down. Reuses corr_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import corr_chart as d

animkit.run(
    "intermarket-explainer", d.build, ("labels", "regime"),
    "<b>Intermarket analysis</b> — markets are linked, but the link changes",
    [("Two series, rebased to 100: the dollar index and EUR/USD", 30, ["labels"], 2),
     ("For 90 days EUR/USD moves against the dollar: the correlation of daily returns is -0.85", 90, ["regime"], 1.2),
     ("Then the link almost disappears: correlation of returns about -0.04 over the rest of the sample", d.N, [], 1.2),
     ("The rolling 20-day correlation shows the change — from about -0.9 to about zero", None, [])],
    "Measure correlations on your own window, and treat them as one input — never as a rule",
    OUT)
