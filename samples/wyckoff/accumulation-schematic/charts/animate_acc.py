"""Explainer video: Wyckoff accumulation schematic #1, event by event. Reuses acc_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import acc_chart as d
import animkit

G = ("phases", "range", "ps", "sc", "ar", "st", "spring", "test", "sos", "lps", "trade")
animkit.run(
    "wyckoff-accumulation-explainer", d.build, G,
    "<b>Accumulation, schematic #1</b> — from the selling climax to the last point of support",
    [("A decline, then PS: the first sign of support — volume rises but the fall continues", d.PS + 1, ["phases", "ps"], 4),
     ("SC: a wide-spread, heavy-volume low — selling climax. AR: the automatic rally sets the range top", d.AR + 1, ["sc", "ar", "range"], 4),
     ("ST: a secondary test of the low on less volume — support is holding (end of phase A)", d.ST + 1, ["st"], 4),
     ("Phase B: price builds the range, up and down, as supply is absorbed", d.SPRING, [], 4),
     ("Phase C — Spring: a dip below support that closes back inside, then a Test on very low volume", d.TEST + 1, ["spring", "test"], 5),
     ("Phase D — SOS: a close above resistance on heavy volume; LPS: a quiet pullback that holds", d.LPS + 1, ["sos", "lps"], 4),
     ("Plan: buy the LPS at 26.2, stop 24.4, target 32.4 — the range width projected up (planned 1 : 3.4)", d.N, ["trade"], 4)],
    "Evidence, then a plan with a stop. If support breaks on heavy volume, the story is over",
    OUT)
