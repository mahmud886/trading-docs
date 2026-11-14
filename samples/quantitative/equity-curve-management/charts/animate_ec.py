"""Explainer video: an equity-curve filter on a system whose edge fades. Reuses ec_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import ec_chart as d

animkit.run(
    "ec-explainer", d.build, ("off", "ma", "weak", "result"),
    "<b>Equity-curve management</b> — trade less when the system is struggling",
    [("A system that wins 50% of its trades at +1.5R / -1R: trades 1 to 100", 100, ["ma"], 0.4),
     ("Trades 101 to 200: the edge fades to a 33% win rate — an always-trade account loses about 18R", 200, ["weak", "off"], 0.35),
     ("The filter skips trades while the equity curve is below its 20-trade average", 200, [], 1),
     ("The edge returns in trades 201 to 300 and the filter resumes trading", d.N, [], 0.35),
     ("Result: +19R with a 16R drawdown against +12R and 24R — but over 1,000 random sequences the final result was better only half the time", None, ["result"])],
    "An equity-curve filter mostly trims drawdowns; it does not create an edge, and it can skip recoveries",
    OUT)
