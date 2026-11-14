"""Explainer video: the best of many backtested rules fails out-of-sample. Reuses bt_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import bt_chart as d

animkit.run(
    "bt-explainer", d.build, ("split", "scatter"),
    "<b>Backtesting</b> — what happens when you pick the best of many rules",
    [("Random-walk prices: no edge exists. 180 moving-average rules are tested on the first 500 bars", 500, [], 0.3),
     ("The best one, fast 3 / slow 25, shows +50% in-sample — it looks like a discovery", 500, ["split"], 1),
     ("On the next 500 bars the same rule makes +6%: the in-sample result was mostly selection", d.N, [], 0.3),
     ("Across all 180 rules the average is +5% in-sample and -3% out-of-sample — and the chosen rule is just the best draw", None, ["scatter"])],
    "Test on data the rules were not built on — and count how many rules you tried",
    OUT)
