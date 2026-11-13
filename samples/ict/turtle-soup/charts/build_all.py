"""Rebuild every ICT Turtle Soup chart (light + dark PNG, themed HTML): python build_all.py
The explainer video is separate (slower): python animate_turtle_soup.py"""

import eurusd_bearish_turtle_soup
import gold_bullish_turtle_soup

for module in (eurusd_bearish_turtle_soup, gold_bullish_turtle_soup):
    module.main()
