"""Explainer video: a balanced and an imbalanced day building side by side. Reuses bi_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import bi_chart as d

animkit.run(
    "bi-explainer", d.build, ("titles", "bal", "imb"),
    "<b>Balanced vs imbalanced</b> — two ways a day can build its profile",
    [("Two days, the same 30-minute periods A to M — the first few periods look alike", 3, ["titles"], 10),
     ("The balanced day keeps coming back to the same prices; the imbalanced day moves up every period", 8, [], 8),
     ("By period M the balanced day has a clear point of control, 1.0860, with 11 letters", d.N, ["bal"], 6),
     ("The imbalanced day has no row with more than 3 letters and covers 28 pips against 20", None, ["imb"])],
    "Know which state you are in before choosing a plan: fade the edges in balance, follow the break in imbalance",
    OUT)
