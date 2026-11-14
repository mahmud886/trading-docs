"""Explainer video: five days of value-area migration. Reuses va_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import va_chart as d

animkit.run(
    "va-explainer", d.build, ("path", "read"),
    "<b>Value-area migration</b> — comparing today's value with yesterday's",
    [("Monday: value area 1.0848 – 1.0856, point of control 1.0850", 1, [], 8),
     ("Tuesday: value 1.0852 – 1.0862 overlaps Monday's but sits higher", 2, [], 8),
     ("Wednesday: value 1.0864 – 1.0874 is entirely above Tuesday's — price has accepted higher", 3, [], 8),
     ("Thursday: value 1.0870 – 1.0878 overlaps Wednesday's — the move pauses", 4, [], 8),
     ("Friday: value 1.0852 – 1.0860 is entirely below Thursday's — price has accepted lower", d.N, [], 8),
     ("The POC path and what each day says about where value moved", None, ["path", "read"])],
    "Migration describes where trading was accepted; it does not predict the next day",
    OUT)
