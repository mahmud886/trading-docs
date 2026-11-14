"""Explainer video: the Composite Man's imagined inventory over a cycle. Reuses cm_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import cm_chart as d

animkit.run(
    "composite-man-explainer", d.build, ("md1", "acc", "mu", "dist", "md2"),
    "<b>The Composite Man</b> — imagine one large participant behind the whole cycle",
    [("Markdown: nothing held yet. The imagined participant waits as supply pushes price down", 10, ["md1"], 4),
     ("Accumulation: price goes nowhere, but the inventory fills from 0% to 100% — buying absorbed into the range", 32, ["acc"], 4),
     ("Markup: the position is full, so price moves easily on little new buying", 46, ["mu"], 4),
     ("Distribution: price stalls near the high while the inventory is sold back out", 68, ["dist"], 4),
     ("Markdown: the position is gone, and supply takes over", d.N, ["md2"], 4)],
    "The inventory can't be seen. It's a way to ask what the volume and the price are consistent with",
    OUT)
