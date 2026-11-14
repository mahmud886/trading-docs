"""Explainer video: gold against the dollar and real yields, then decoupling. Reuses gdb_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import gdb_chart as d

animkit.run(
    "gdb-explainer", d.build, ("labels", "bars"),
    "<b>Gold, the dollar and bonds</b> — a tendency, not a law",
    [("Gold, the dollar index and the 10-year real yield over 160 synthetic days", 40, ["labels"], 0.6),
     ("For 100 days gold tends to fall when the dollar or the real yield rises", 100, [], 0.5),
     ("Then gold decouples: it rises while real yields do not fall", d.N, [], 0.5),
     ("Correlations of daily changes: strongly negative in the first period, near zero in the second", None, ["bars"])],
    "Treat the gold–dollar–yield link as a tendency, and re-measure it before leaning on it",
    OUT)
