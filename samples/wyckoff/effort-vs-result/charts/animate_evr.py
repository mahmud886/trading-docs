"""Explainer video: effort versus result. Reuses evr_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import evr_chart as d

animkit.run(
    "effort-vs-result-explainer", d.build, ("fit", "easy", "absorb", "after"),
    "<b>Effort vs result</b> — does the volume match what the bar achieved?",
    [("Most bars follow a pattern: more volume, wider spread. Each bar is a dot on the right", d.EASY, ["fit"], 5),
     ("An easy move: a wide spread on little volume — price moves with little resistance", d.EASY + 1, ["easy"], 5),
     ("The rally continues with normal volume for each bar", d.ABSORB, [], 5),
     ("Effort without result: the heaviest volume of all, almost no progress — someone is taking the other side", d.ABSORB + 1, ["absorb"], 5),
     ("Afterwards price turns down — the mismatch was a warning, not a certainty", d.N, ["after"], 5)],
    "Mismatches are clues. Confirm with the next bars and the level before acting",
    OUT)
