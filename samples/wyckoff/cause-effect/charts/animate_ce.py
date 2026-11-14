"""Explainer video: two ranges and their measured moves. Reuses ce_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import ce_chart as d

G = ("small_range", "small_obj", "large_range", "large_obj", "titles")
animkit.run(
    "cause-effect-explainer", d.build, G,
    "<b>Cause and effect</b> — a move is prepared by the range before it",
    [("A short, narrow range: about 3 points high and 10 bars wide — a small cause", d.RS, ["titles", "small_range"], 4),
     ("The breakout runs to the 1× measured move — the range height projected up from its high", len(d.SM), ["small_obj"], 5),
     ("A long, wide range: about 6 points high and 28 bars wide — a much larger cause", len(d.SM) + d.GAP + d.RL, ["large_range"], 3),
     ("Its breakout goes well past the 1× measured move — in this illustration the bigger cause gave the bigger effect", d.N, ["large_obj"], 4)],
    "A measured move is a first objective, not a promise. Plan with a stop and scale out near targets",
    OUT)
