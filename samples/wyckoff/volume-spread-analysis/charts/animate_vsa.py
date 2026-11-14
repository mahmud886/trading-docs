"""Explainer video: four VSA signals. Reuses vsa_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import vsa_chart as d

animkit.run(
    "vsa-explainer", d.build, ("stop", "test", "nodem", "nosup", "avg"),
    "<b>Volume spread analysis</b> — read volume, spread and close together",
    [("A decline with rising volume — supply is still in control", d.STOP, ["avg"], 5),
     ("Stopping volume: the heaviest volume of the decline, a wide spread, and a close in the upper half — selling is being absorbed", d.STOP + 1, ["stop"], 5),
     ("A test: a narrow bar on very low volume, with a higher low — little supply left", d.TEST + 1, ["test"], 5),
     ("The rally runs, then a no-demand bar: an up bar with a narrow spread and volume below the two bars before", d.NODEM + 1, ["nodem"], 4),
     ("A pullback ends with a no-supply bar: a down bar with a narrow spread on very low volume", d.NOSUP + 1, ["nosup"], 4),
     ("Price continues higher", d.N, [], 4)],
    "One bar is a clue. Read it against the trend, the neighbours and the level it forms at",
    OUT)
