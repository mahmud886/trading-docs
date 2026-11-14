"""Explainer video: a currency strength meter building up. Reuses cs_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import cs_chart as d

animkit.run(
    "cs-explainer", d.build, ("labels", "bars", "pair"),
    "<b>Currency strength</b> — which currencies are leading and which are lagging",
    [("Each line is one currency: the average change of the pairs it appears in, positive as base, negative as quote", 30, [], 0.5),
     ("Over 59 days AUD pulls ahead while the yen and the dollar fall behind", d.N, ["labels"], 0.5),
     ("The ranking: AUD +7.7% at the top, JPY −5.3% at the bottom", None, ["bars"]),
     ("Strongest against weakest is AUD/JPY: it moved +7.9% in the period", None, ["pair"])],
    "A strength meter ranks what has already happened — use it to shortlist pairs, then wait for your own setup",
    OUT)
