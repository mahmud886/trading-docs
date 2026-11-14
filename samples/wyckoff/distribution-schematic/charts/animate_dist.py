"""Explainer video: Wyckoff distribution, event by event. Reuses dist_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import dist_chart as d

G = ("phases", "range", "psy", "bc", "ar", "st", "utad", "sow", "lpsy", "trade")
animkit.run(
    "wyckoff-distribution-explainer", d.build, G,
    "<b>Distribution</b> — from the buying climax to the last point of supply",
    [("A rally, then PSY: the first sign of supply — volume rises as price keeps climbing", d.PSY + 1, ["phases", "psy"], 4),
     ("BC: a wide-spread high on the heaviest volume. AR: the automatic reaction sets the range bottom", d.AR + 1, ["bc", "ar", "range"], 4),
     ("ST: a lower high on less volume — demand is weakening (end of phase A)", d.ST + 1, ["st"], 4),
     ("Phase B: price swings in the range as demand is met by supply", d.UTAD, [], 4),
     ("Phase C — UTAD: a push above the range on heavy volume that closes back inside", d.UTAD + 1, ["utad"], 5),
     ("Phase D — SOW: a close below support on heavy volume; LPSY: a quiet rally back to the broken support", d.LPSY + 1, ["sow", "lpsy"], 4),
     ("Plan: sell the LPSY at 27.4, stop 29.2, target 22.0 — the range width projected down (planned 1 : 3.0)", d.N, ["trade"], 4)],
    "Evidence, then a plan with a stop. A close back above the range on heavy volume would end the story",
    OUT)
