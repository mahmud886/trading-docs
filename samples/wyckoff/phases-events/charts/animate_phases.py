"""Explainer video: walking through phases A–E with the key question of each. Reuses phases_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import phases_chart as d

G = ("phA", "phB", "phC", "phD", "phE", "range", "sc", "ar", "st", "test", "sos", "lps", "trade")
animkit.run(
    "wyckoff-phases-explainer", d.build, G,
    "<b>Phases and events</b> — find the phase first, then look for the events",
    [("Phase A — is the decline stopping? SC on the highest volume, AR sets the top, ST holds a higher low", d.ST + 1, ["phA", "range", "sc", "ar", "st"], 4),
     ("Phase B — is supply drying up? Price builds the range; volume fades on the tests of the low", d.TEST, ["phB"], 4),
     ("Phase C — does a test hold? Here there is no spring: the test is a higher low on very low volume", d.TEST + 1, ["phC", "test"], 5),
     ("Phase D — is demand taking over? SOS closes above resistance on heavy volume; LPS is a quiet pullback", d.LPS + 1, ["phD", "sos", "lps"], 4),
     ("Plan at the LPS: buy 46.0, stop 44.2, target 52.2 (planned 1 : 3.4)", d.LPS + 2, ["trade"], 4),
     ("Phase E — is the trend running? Price leaves the range and the pullbacks stay shallow", d.N, ["phE"], 4)],
    "Phase first, events second, evidence third, a plan with a stop last",
    OUT)
