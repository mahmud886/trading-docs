"""Explainer video: the Wyckoff cycle, phase by phase. Reuses cycle_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import cycle_chart as d

animkit.run(
    "wyckoff-cycle-explainer", d.build, ("md1", "acc", "mu", "dist", "md2"),
    "<b>The Wyckoff cycle</b> — trends are separated by ranges",
    [("Markdown: supply is in control and price falls with rising volume", 10, ["md1"]),
     ("Accumulation: a range. Heavy volume but little progress — supply is being absorbed", 32, ["acc"]),
     ("Markup: demand is in control; price rallies on rising volume", 46, ["mu"]),
     ("Distribution: a second range. Heavy volume again — demand is met by supply", 68, ["dist"]),
     ("Markdown again: supply takes over. The cycle repeats", d.N, ["md2"])],
    "A cycle is a model. Ask which phase you're in — then what evidence would say you're wrong",
    OUT)
