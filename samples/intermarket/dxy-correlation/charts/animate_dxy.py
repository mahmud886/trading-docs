"""Explainer video: DXY basket weights, then the pair correlations. Reuses dxy_chart.build()."""

from _paths import OUT  # noqa: F401  (sets up sys.path)
import animkit
import dxy_chart as d

animkit.run(
    "dxy-explainer", d.build, ("corr", "notes"),
    "<b>The dollar index</b> — what it is made of and how pairs follow it",
    [("DXY is a basket of six currencies; the euro alone is 57.6% of it", None, []),
     ("So EUR/USD, the pair with the euro on one side, tends to be the closest mirror of DXY", None, ["corr"]),
     ("Pairs with the dollar as base currency move with DXY; those with it as quote currency move against it", None, []),
     ("AUD is not in the basket and the yen is also a risk currency — those links are looser", None, ["notes"])],
    "Know the basket: the more of DXY a currency makes up, the more its pair mirrors the index",
    OUT)
