import type { GlossaryTerm } from "./types";

export const tradingTermsEn: GlossaryTerm[] = [
  // A
  {
    term: "Accumulation",
    definition:
      "A phase where institutional traders quietly build positions before a significant price move. Price consolidates in a range as smart money absorbs available liquidity.",
    category: "SMC",
  },
  {
    term: "AMD (Accumulation, Manipulation, Distribution)",
    definition:
      "ICT concept describing the three phases of institutional price delivery: building positions, triggering stops, then delivering price to the target.",
    category: "ICT",
  },
  {
    term: "Ask Price",
    definition:
      "The lowest price at which a seller is willing to sell an asset. The difference between ask and bid is the spread.",
    category: "Basic",
  },
  {
    term: "ATR (Average True Range)",
    definition:
      "A volatility indicator that measures the average range of price movement over a specified period. Used for stop loss placement and position sizing.",
    category: "Indicator",
  },
  {
    term: "Asian Range",
    definition:
      "The price range formed during the Asian/Tokyo trading session (7:00 PM - 12:00 AM EST). Often used as a reference for London session manipulation.",
    category: "ICT",
  },
  // B
  {
    term: "Bearish",
    definition:
      "A market condition or sentiment indicating prices are expected to fall. Bearish candles close below their open price.",
    category: "Basic",
  },
  {
    term: "Bearish Engulfing",
    definition:
      "A two-candle reversal pattern where a bearish candle completely engulfs the previous bullish candle body, signaling potential downside reversal.",
    category: "Price Action",
  },
  {
    term: "Bid Price",
    definition:
      "The highest price a buyer is willing to pay for an asset. Retail sell orders execute at the bid price.",
    category: "Basic",
  },
  {
    term: "BOS (Break of Structure)",
    definition:
      "When price breaks a significant swing high (in uptrend) or swing low (in downtrend), confirming trend continuation. The most important confirmation signal in SMC.",
    category: "SMC",
  },
  {
    term: "Breaker Block",
    definition:
      "A failed order block that gets violated and then acts as support/resistance from the opposite side. Forms when an order block fails and price returns to mitigate it.",
    category: "SMC",
  },
  {
    term: "Breakout",
    definition:
      "When price moves beyond a defined support, resistance, or consolidation range with momentum. Valid breakouts show displacement and volume.",
    category: "Price Action",
  },
  {
    term: "Bullish",
    definition:
      "A market condition or sentiment indicating prices are expected to rise. Bullish candles close above their open price.",
    category: "Basic",
  },
  {
    term: "Bullish Engulfing",
    definition:
      "A two-candle reversal pattern where a bullish candle completely engulfs the previous bearish candle body, signaling potential upside reversal.",
    category: "Price Action",
  },
  {
    term: "Buy-side Liquidity (BSL)",
    definition:
      "Stop-loss orders sitting above swing highs, equal highs, and resistance levels. Institutions target these pools before reversing price lower.",
    category: "SMC",
  },
  // C
  {
    term: "Candlestick",
    definition:
      "A chart representation showing open, high, low, and close prices for a specific time period. The body shows open-close range, wicks show high-low extremes.",
    category: "Basic",
  },
  {
    term: "CHOCH (Change of Character)",
    definition:
      "The first break of market structure against the prevailing trend, signaling a potential reversal. It's the first lower low in an uptrend or first higher high in a downtrend.",
    category: "SMC",
  },
  {
    term: "Compression",
    definition:
      "Price making higher lows into resistance or lower highs into support, building energy for an explosive move. Indicates orders being absorbed.",
    category: "Price Action",
  },
  {
    term: "Confluence",
    definition:
      "When multiple technical factors (order block, FVG, fib level, liquidity) align at the same price zone, significantly increasing trade probability.",
    category: "Price Action",
  },
  {
    term: "Consolidation",
    definition:
      "A period where price moves sideways within a defined range. Smart money uses consolidation to accumulate or distribute positions.",
    category: "Basic",
  },
  {
    term: "Continuation Pattern",
    definition:
      "A price pattern that suggests the prevailing trend will resume after a brief pause (flags, pennants, wedges).",
    category: "Price Action",
  },
  {
    term: "Correlation",
    definition:
      "The statistical relationship between two trading instruments. DXY and EUR/USD are negatively correlated; ES and NQ are positively correlated.",
    category: "Basic",
  },
  // D
  {
    term: "Daily Bias",
    definition:
      "The expected directional move for the current trading day based on higher timeframe analysis, previous day's close, and institutional order flow.",
    category: "ICT",
  },
  {
    term: "Dealing Range",
    definition:
      "The range between a significant swing high and swing low that contains the current price action. Used for premium/discount analysis.",
    category: "ICT",
  },
  {
    term: "Discount Zone",
    definition:
      "The lower half (below 50%) of a dealing range where price is considered cheap. Institutional buyers look for entries in discount zones.",
    category: "SMC",
  },
  {
    term: "Displacement",
    definition:
      "A strong, impulsive price move with large-bodied candles that creates fair value gaps. Indicates aggressive institutional activity and commitment.",
    category: "SMC",
  },
  {
    term: "Distribution",
    definition:
      "A phase where institutions sell/unload their previously accumulated positions, typically at premium prices before a significant decline.",
    category: "SMC",
  },
  {
    term: "Divergence",
    definition:
      "When price makes new highs/lows but an indicator (RSI, MACD) fails to confirm, suggesting weakening momentum and potential reversal.",
    category: "Indicator",
  },
  {
    term: "Doji",
    definition:
      "A candlestick with nearly equal open and close prices, creating a very small body. Indicates indecision between buyers and sellers.",
    category: "Price Action",
  },
  {
    term: "Drawdown",
    definition:
      "The percentage decline from peak equity to the lowest point before a new high is made. A 10% drawdown means losing 10% from your highest balance.",
    category: "Risk",
  },
  {
    term: "DXY (Dollar Index)",
    definition:
      "An index measuring the US dollar's value against a basket of 6 major currencies. Key reference for forex directional bias.",
    category: "Basic",
  },
  // E
  {
    term: "Elliott Wave",
    definition:
      "A technical analysis theory that identifies recurring fractal wave patterns in price movements (5 impulse waves + 3 corrective waves).",
    category: "Price Action",
  },
  {
    term: "Entry Model",
    definition:
      "A specific set of rules defining when and where to enter a trade. ICT models include Silver Bullet, Unicorn, 2022 Model, etc.",
    category: "ICT",
  },
  {
    term: "Equal Highs (EQH)",
    definition:
      "Two or more swing highs at approximately the same price level. Represent buy-side liquidity pools that institutions will target.",
    category: "SMC",
  },
  {
    term: "Equal Lows (EQL)",
    definition:
      "Two or more swing lows at approximately the same price level. Represent sell-side liquidity pools that institutions will target.",
    category: "SMC",
  },
  {
    term: "Equilibrium",
    definition:
      "The 50% level of any dealing range. Price at equilibrium is at 'fair value' — neither premium nor discount.",
    category: "SMC",
  },
  {
    term: "Expansion",
    definition:
      "A phase where price moves aggressively and directionally after a period of consolidation or manipulation. The distribution/delivery phase.",
    category: "Price Action",
  },
  // F
  {
    term: "Fair Value Gap (FVG)",
    definition:
      "A three-candle imbalance where candle 1's high and candle 3's low don't overlap (bullish) or candle 1's low and candle 3's high don't overlap (bearish). Represents institutional imbalance.",
    category: "SMC",
  },
  {
    term: "Fakeout",
    definition:
      "A false breakout where price briefly penetrates a level to trigger stops before reversing sharply. A key manipulation technique used by institutions.",
    category: "Price Action",
  },
  {
    term: "Fibonacci Retracement",
    definition:
      "Tool drawing horizontal lines at key ratios (23.6%, 38.2%, 50%, 61.8%, 78.6%) between swing high and low. The 61.8-78.6% zone is the OTE.",
    category: "ICT",
  },
  {
    term: "Fill or Kill (FOK)",
    definition: "An order type that must be executed immediately in its entirety or cancelled completely.",
    category: "Basic",
  },
  {
    term: "Flag Pattern",
    definition:
      "A continuation pattern where price consolidates in a channel against the trend before breaking out in the original trend direction.",
    category: "Price Action",
  },
  {
    term: "Forex",
    definition:
      "The foreign exchange market where currencies are traded. The largest financial market with $7.5 trillion daily volume.",
    category: "Basic",
  },
  {
    term: "Fractal",
    definition:
      "A concept where market patterns repeat at every timeframe. The same structure visible on the daily chart appears on the 1-minute chart.",
    category: "Price Action",
  },
  {
    term: "Funding Rate",
    definition:
      "In crypto perpetual futures, the periodic payment between longs and shorts to keep the contract price close to spot price.",
    category: "Basic",
  },
  // G
  {
    term: "Gap",
    definition:
      "A price area where no trading occurred, visible as a space between candles. Weekend gaps in forex and overnight gaps in stocks are common.",
    category: "Basic",
  },
  {
    term: "Golden Cross",
    definition:
      "When the 50-period moving average crosses above the 200-period moving average, traditionally considered a bullish signal.",
    category: "Indicator",
  },
  // H
  {
    term: "Hammer",
    definition:
      "A bullish reversal candlestick with a small body at the top and a long lower wick (at least 2x body). Shows strong rejection of lower prices.",
    category: "Price Action",
  },
  {
    term: "Hanging Man",
    definition:
      "A bearish reversal candlestick identical in shape to a hammer but occurring at the top of an uptrend, signaling potential reversal.",
    category: "Price Action",
  },
  {
    term: "Hedging",
    definition:
      "Opening opposite positions to reduce risk exposure. Example: Long EUR/USD and long DXY to partially hedge dollar exposure.",
    category: "Risk",
  },
  {
    term: "Higher High (HH)",
    definition:
      "A swing high that exceeds the previous swing high, confirming bullish market structure and trend continuation.",
    category: "Price Action",
  },
  {
    term: "Higher Low (HL)",
    definition:
      "A swing low that forms above the previous swing low, showing buyers stepping in at higher prices. Key uptrend confirmation.",
    category: "Price Action",
  },
  {
    term: "HTF (Higher Timeframe)",
    definition:
      "Timeframes above your execution timeframe used for directional bias and key level identification (Daily, Weekly, Monthly).",
    category: "Basic",
  },
  // I
  {
    term: "ICT (Inner Circle Trader)",
    definition:
      "A trading methodology developed by Michael J. Huddleston focused on institutional order flow, time-based models, and market maker algorithms.",
    category: "ICT",
  },
  {
    term: "Imbalance",
    definition:
      "An area where aggressive one-sided trading created inefficient price delivery. FVGs and volume imbalances are types of imbalances that price tends to revisit.",
    category: "SMC",
  },
  {
    term: "Impulsive Move",
    definition:
      "A strong directional price move with large candle bodies and minimal wicks. Indicates institutional commitment and often creates FVGs.",
    category: "Price Action",
  },
  {
    term: "Inducement",
    definition:
      "Minor swing highs/lows that lure retail traders into positions before price reverses. Small liquidity pools that get swept before the real move.",
    category: "SMC",
  },
  {
    term: "Inside Bar",
    definition:
      "A candle whose entire range (high to low) is within the previous candle's range. Indicates consolidation and potential breakout.",
    category: "Price Action",
  },
  {
    term: "Institutional Order Flow",
    definition:
      "The footprint of large players (banks, hedge funds) in the market, identified through displacement, FVGs, order blocks, and liquidity sweeps.",
    category: "SMC",
  },
  {
    term: "Internal Liquidity",
    definition:
      "Liquidity created by minor swing points within a dealing range. Contrasted with external liquidity at the range extremes.",
    category: "SMC",
  },
  {
    term: "Inverse FVG",
    definition:
      "A fair value gap that has been fully traded through and now acts as a potential support/resistance zone from the opposite side.",
    category: "SMC",
  },
  {
    term: "Inverted Hammer",
    definition:
      "A bullish reversal candle with a small body at the bottom and long upper wick. Found at the bottom of downtrends.",
    category: "Price Action",
  },
  // J
  {
    term: "Judas Swing",
    definition:
      "ICT concept: a false move at session open designed to trap traders before the real directional move. Named after Judas's betrayal — the market 'betrays' early entries.",
    category: "ICT",
  },
  // K
  {
    term: "Kill Zone",
    definition:
      "Specific high-probability time windows: London (2:00-5:00 AM EST), NY (7:00-10:00 AM EST), London Close (10:00-12:00 PM EST). When institutions execute their orders.",
    category: "ICT",
  },
  // L
  {
    term: "Leverage",
    definition:
      "Using borrowed capital to increase position size. 1:100 leverage means $1,000 controls $100,000. Amplifies both profits and losses.",
    category: "Basic",
  },
  {
    term: "Limit Order",
    definition:
      "An order to buy below or sell above the current market price. Used for entries at predetermined levels (order blocks, FVGs).",
    category: "Basic",
  },
  {
    term: "Liquidity",
    definition:
      "Clusters of resting orders (stop losses, pending orders) at key price levels. Institutions need liquidity to fill their large positions.",
    category: "SMC",
  },
  {
    term: "Liquidity Grab",
    definition:
      "When price quickly moves to take out stop losses at a key level before reversing. The fuel institutions need for their entries.",
    category: "SMC",
  },
  {
    term: "Liquidity Pool",
    definition:
      "A concentration of stop-loss orders at obvious technical levels (swing highs/lows, round numbers, trendlines).",
    category: "SMC",
  },
  {
    term: "Liquidity Sweep",
    definition:
      "Price taking out a liquidity level (running stops) before reversing. Confirmation comes from displacement after the sweep.",
    category: "SMC",
  },
  {
    term: "Liquidity Void",
    definition:
      "An area on the chart where price moved so quickly that very little trading occurred. Price tends to return to fill these voids.",
    category: "SMC",
  },
  {
    term: "Long Position",
    definition:
      "Buying an asset with the expectation that its price will increase. Profit is made when selling at a higher price.",
    category: "Basic",
  },
  {
    term: "Lot Size",
    definition:
      "Standard lot = 100,000 units, Mini lot = 10,000 units, Micro lot = 1,000 units, Nano lot = 100 units. Determines pip value.",
    category: "Basic",
  },
  {
    term: "Lower High (LH)",
    definition:
      "A swing high that forms below the previous swing high, indicating sellers are gaining control. Key downtrend structure.",
    category: "Price Action",
  },
  {
    term: "Lower Low (LL)",
    definition:
      "A swing low that breaks below the previous swing low, confirming bearish continuation and downtrend structure.",
    category: "Price Action",
  },
  {
    term: "LTF (Lower Timeframe)",
    definition:
      "Timeframes below your analysis timeframe used for precise entries (1m, 5m, 15m). Also called execution timeframes.",
    category: "Basic",
  },
  // M
  {
    term: "Manipulation",
    definition:
      "Institutional price engineering to trigger retail stops and create liquidity before the real move. The 'M' in AMD.",
    category: "SMC",
  },
  {
    term: "Margin",
    definition:
      "The collateral (deposit) required to open and maintain a leveraged position. Margin call occurs when equity falls below maintenance margin.",
    category: "Basic",
  },
  {
    term: "Margin Call",
    definition:
      "A broker notification that account equity has fallen below maintenance requirements. Positions may be forcibly closed if additional funds aren't deposited.",
    category: "Risk",
  },
  {
    term: "Market Maker Model (MMM)",
    definition:
      "ICT concept: the complete cycle of how institutions engineer price — original consolidation, smart money reversal, break of structure, and delivery to the opposing liquidity pool.",
    category: "ICT",
  },
  {
    term: "Market Order",
    definition:
      "An order to buy or sell immediately at the current best available price. Provides certainty of execution but not price.",
    category: "Basic",
  },
  {
    term: "Market Structure",
    definition:
      "The arrangement of swing highs and lows that defines trend direction. Bullish = HH+HL, Bearish = LH+LL, Ranging = equal levels.",
    category: "SMC",
  },
  {
    term: "Market Structure Shift (MSS)",
    definition:
      "A decisive break in market structure with displacement, stronger than CHOCH. Indicates institutional commitment to the new direction.",
    category: "SMC",
  },
  {
    term: "Mitigation",
    definition:
      "When price returns to a level where institutions have resting orders or where previous losses need to be recovered.",
    category: "SMC",
  },
  {
    term: "Mitigation Block",
    definition:
      "A price zone where institutions previously lost money and where they will place orders to break even when price returns.",
    category: "SMC",
  },
  {
    term: "Momentum",
    definition:
      "The rate of acceleration of price movement. Strong momentum = large candles with small wicks. Weakening momentum = smaller candles, larger wicks.",
    category: "Price Action",
  },
  {
    term: "Morning Star",
    definition:
      "A three-candle bullish reversal pattern: large bearish candle, small-bodied candle (indecision), then large bullish candle.",
    category: "Price Action",
  },
  {
    term: "Monthly Profile",
    definition:
      "ICT concept analyzing how price typically behaves within a month — expansion in first week, consolidation mid-month, reversal in final week.",
    category: "ICT",
  },
  // N
  {
    term: "Naked POI (Point of Interest)",
    definition:
      "An unmitigated order block, FVG, or breaker block that price hasn't retested yet. These are high-priority zones for future entries.",
    category: "SMC",
  },
  {
    term: "News Trading",
    definition:
      "Trading around high-impact economic events (NFP, CPI, FOMC). Price often sweeps liquidity in both directions during news releases.",
    category: "Basic",
  },
  {
    term: "New York Session",
    definition:
      "The trading session from 8:00 AM to 5:00 PM EST. Highest volume period for USD pairs and often provides trend continuation or reversal.",
    category: "Basic",
  },
  // O
  {
    term: "Optimal Trade Entry (OTE)",
    definition:
      "ICT's premium entry zone between the 62% and 79% Fibonacci retracement of an expansion leg. The highest probability entry within a retracement.",
    category: "ICT",
  },
  {
    term: "Order Block (OB)",
    definition:
      "The last opposing candle (or group of candles) before a significant displacement move. Represents the zone where institutional orders were placed.",
    category: "SMC",
  },
  {
    term: "Order Flow",
    definition:
      "The analysis of buying and selling pressure through price action, volume, and market microstructure rather than traditional indicators.",
    category: "SMC",
  },
  {
    term: "Overbought",
    definition:
      "A condition where price has risen too quickly and may be due for a correction. RSI above 70 is traditionally considered overbought.",
    category: "Indicator",
  },
  {
    term: "Oversold",
    definition:
      "A condition where price has fallen too quickly and may be due for a bounce. RSI below 30 is traditionally considered oversold.",
    category: "Indicator",
  },
  // P
  {
    term: "PD Array (Premium/Discount Array)",
    definition:
      "ICT reference points used to frame buy and sell opportunities: order blocks, FVGs, breaker blocks, mitigation blocks, and liquidity voids.",
    category: "ICT",
  },
  {
    term: "Pin Bar",
    definition:
      "A candlestick with a very long wick on one side and small body on the other. Shows strong rejection and potential reversal at key levels.",
    category: "Price Action",
  },
  {
    term: "Pip",
    definition:
      "Point In Percentage — the smallest standard price movement. For most forex pairs, 1 pip = 0.0001. For JPY pairs, 1 pip = 0.01.",
    category: "Basic",
  },
  {
    term: "Point of Interest (POI)",
    definition:
      "A specific price zone identified for potential trade entries, typically an order block, FVG, or breaker block combined with other factors.",
    category: "SMC",
  },
  {
    term: "Position Sizing",
    definition:
      "Calculating the correct lot size based on account balance, risk percentage, and stop loss distance. The cornerstone of risk management.",
    category: "Risk",
  },
  {
    term: "Power of 3 (PO3)",
    definition:
      "ICT concept describing the three phases within any session or candle: Accumulation (open), Manipulation (false move), Distribution (real move to close).",
    category: "ICT",
  },
  {
    term: "Premium Zone",
    definition:
      "The upper half (above 50%) of a dealing range where price is expensive. Institutional sellers look for entries in premium zones.",
    category: "SMC",
  },
  {
    term: "Price Action",
    definition:
      "The study of raw price movement without indicators. Analyzing candlestick patterns, market structure, and supply/demand zones.",
    category: "Price Action",
  },
  {
    term: "Pullback",
    definition:
      "A temporary retracement against the trend direction. Healthy pullbacks retrace 38.2-61.8% of the previous impulse leg.",
    category: "Price Action",
  },
  // Q
  {
    term: "Quarterly Shift",
    definition:
      "ICT concept where major market reversals tend to occur at quarterly boundaries (March, June, September, December).",
    category: "ICT",
  },
  // R
  {
    term: "Range",
    definition:
      "A horizontal price channel where price bounces between defined support and resistance levels without establishing a clear trend.",
    category: "Price Action",
  },
  {
    term: "Reaccumulation",
    definition:
      "A consolidation within an uptrend where institutions add to existing long positions before the next expansion leg upward.",
    category: "SMC",
  },
  {
    term: "Redistribution",
    definition:
      "A consolidation within a downtrend where institutions add to existing short positions before the next expansion leg downward.",
    category: "SMC",
  },
  {
    term: "Rejection",
    definition:
      "When price sharply reverses after touching a level, leaving a long wick. Strong rejection at key levels often precedes significant moves.",
    category: "Price Action",
  },
  {
    term: "Resistance",
    definition:
      "A price level where selling pressure historically prevents further upward movement. In SMC, seen as liquidity above that will be swept.",
    category: "Price Action",
  },
  {
    term: "Reversal Pattern",
    definition:
      "Price formations signaling a change in trend direction: head & shoulders, double top/bottom, evening/morning star.",
    category: "Price Action",
  },
  {
    term: "Risk Management",
    definition:
      "The practice of limiting potential losses through position sizing, stop losses, and maximum drawdown rules. Risk 1-2% per trade maximum.",
    category: "Risk",
  },
  {
    term: "Risk-to-Reward Ratio (RRR)",
    definition:
      "The ratio between potential loss (stop loss distance) and potential profit (take profit distance). A 1:3 RRR means risking $100 to make $300.",
    category: "Risk",
  },
  {
    term: "RSI (Relative Strength Index)",
    definition:
      "A momentum oscillator measuring the speed and magnitude of recent price changes on a scale of 0-100. Used for divergence confirmation.",
    category: "Indicator",
  },
  // S
  {
    term: "Scalping",
    definition:
      "A trading style taking many quick trades for small profits (5-20 pips). Requires fast execution, tight spreads, and precise entries.",
    category: "Basic",
  },
  {
    term: "Sell-side Liquidity (SSL)",
    definition:
      "Stop-loss orders resting below swing lows, equal lows, and support levels. Institutions target these pools before reversing price higher.",
    category: "SMC",
  },
  {
    term: "Session",
    definition:
      "A defined period of market activity: Sydney (5:00 PM-2:00 AM EST), Tokyo (7:00 PM-4:00 AM EST), London (3:00 AM-12:00 PM EST), New York (8:00 AM-5:00 PM EST).",
    category: "Basic",
  },
  {
    term: "Shooting Star",
    definition:
      "A bearish reversal candlestick with small body at the bottom and long upper wick. Shows sellers rejected higher prices at the top of a move.",
    category: "Price Action",
  },
  {
    term: "Short Position",
    definition:
      "Selling an asset with the expectation its price will decline. Profit is made by buying back at a lower price.",
    category: "Basic",
  },
  {
    term: "Silver Bullet",
    definition:
      "ICT time-based entry model targeting FVGs created during specific 1-hour windows: 3-4 AM, 10-11 AM, or 2-3 PM EST.",
    category: "ICT",
  },
  {
    term: "Slippage",
    definition:
      "The difference between expected execution price and actual fill price. Common during high volatility and news events.",
    category: "Basic",
  },
  {
    term: "SMC (Smart Money Concepts)",
    definition:
      "A trading methodology reverse-engineering how institutional players (banks, hedge funds) operate in the market through specific footprints they leave.",
    category: "SMC",
  },
  {
    term: "SMT Divergence",
    definition:
      "Smart Money Technique: when correlated pairs fail to make corresponding highs/lows simultaneously, indicating manipulation and potential reversal.",
    category: "ICT",
  },
  {
    term: "Spread",
    definition:
      "The difference between bid and ask price. Your cost of entering a trade. Variable spreads widen during low liquidity and news events.",
    category: "Basic",
  },
  {
    term: "Stop Hunt",
    definition:
      "When price is driven to obvious stop-loss levels to trigger those orders, providing liquidity for institutional entries in the opposite direction.",
    category: "SMC",
  },
  {
    term: "Stop Loss",
    definition:
      "A protective order that automatically closes your position at a predetermined loss level. Essential for capital preservation.",
    category: "Risk",
  },
  {
    term: "Strong High/Low",
    definition:
      "A swing point created with displacement and that hasn't been swept yet. Protected by institutional interest and unlikely to be easily broken.",
    category: "SMC",
  },
  {
    term: "Supply Zone",
    definition:
      "A price area where significant selling occurred previously. When price returns, remaining sell orders may push price down again.",
    category: "Price Action",
  },
  {
    term: "Support",
    definition:
      "A price level where buying pressure historically prevents further decline. In SMC, seen as liquidity below that will be swept.",
    category: "Price Action",
  },
  {
    term: "Swap/Rollover",
    definition:
      "The interest charged or earned for holding a position overnight, based on interest rate differentials between the two currencies.",
    category: "Basic",
  },
  {
    term: "Swing High",
    definition:
      "A price peak with lower highs on both sides (at least one candle lower on each side). Represents a local maximum.",
    category: "Price Action",
  },
  {
    term: "Swing Low",
    definition:
      "A price trough with higher lows on both sides (at least one candle higher on each side). Represents a local minimum.",
    category: "Price Action",
  },
  {
    term: "Swing Trading",
    definition:
      "A style holding trades for days to weeks, targeting larger moves (100-500+ pips in forex). Uses daily/4H charts for analysis.",
    category: "Basic",
  },
  // T
  {
    term: "Take Profit (TP)",
    definition:
      "An order to automatically close a position at a predetermined profit level. Often placed at opposing liquidity pools or FVG targets.",
    category: "Basic",
  },
  {
    term: "Three Drives Pattern",
    definition:
      "A reversal pattern with three pushes to a high/low, each with decreasing momentum. Similar to Elliott Wave with exhaustion.",
    category: "Price Action",
  },
  {
    term: "Timeframe",
    definition:
      "The duration each candle represents. Common timeframes: 1m, 5m, 15m, 1H, 4H, Daily, Weekly. Higher timeframes take priority.",
    category: "Basic",
  },
  {
    term: "Tokyo Session",
    definition:
      "Asian market hours (7:00 PM - 4:00 AM EST / 5:00 AM - 2:00 PM BD). Key for JPY pairs and establishing the Asian range.",
    category: "Basic",
  },
  {
    term: "Trailing Stop",
    definition: "A stop loss that automatically moves with price to lock in profits as the trade moves in your favor.",
    category: "Risk",
  },
  {
    term: "Trend",
    definition:
      "The general direction of price movement. Uptrend = HH+HL, Downtrend = LH+LL. 'The trend is your friend until the bend.'",
    category: "Basic",
  },
  {
    term: "Turtle Soup",
    definition:
      "ICT concept of fading false breakouts at old highs/lows (20-day). When price takes out an old high/low and reverses, trapping breakout traders.",
    category: "ICT",
  },
  {
    term: "Tweezers (Top/Bottom)",
    definition:
      "Two candles with matching highs (top) or lows (bottom) showing rejection at the same level, signaling potential reversal.",
    category: "Price Action",
  },
  // U
  {
    term: "Unicorn Model",
    definition:
      "ICT setup where a breaker block perfectly overlaps with a fair value gap, creating an ultra-high-probability entry zone.",
    category: "ICT",
  },
  {
    term: "Unrealized P&L",
    definition: "The current profit or loss on open positions. Only becomes realized when the position is closed.",
    category: "Basic",
  },
  // V
  {
    term: "Venom Model",
    definition:
      "ICT concept using a specific FVG within a displacement leg as the entry point, named for its precision and effectiveness.",
    category: "ICT",
  },
  {
    term: "Volatility",
    definition:
      "The degree of price movement variation. High volatility = big moves, Low volatility = small moves. Measured by ATR, Bollinger Band width.",
    category: "Basic",
  },
  {
    term: "Volume",
    definition:
      "The number of contracts/shares traded in a period. High volume confirms moves; low volume questions sustainability.",
    category: "Price Action",
  },
  {
    term: "Volume Imbalance",
    definition:
      "A gap between one candle's close and the next candle's open (in the same direction), showing aggressive institutional activity.",
    category: "SMC",
  },
  {
    term: "VWAP (Volume Weighted Average Price)",
    definition:
      "The average price weighted by volume for the day. Institutional benchmark — trades above VWAP are considered bullish.",
    category: "Indicator",
  },
  // W
  {
    term: "Weak High/Low",
    definition:
      "A swing point created without displacement/momentum that is likely to be swept. Has sell-side or buy-side liquidity resting beyond it.",
    category: "SMC",
  },
  {
    term: "Wick",
    definition:
      "The thin lines above and below a candle body showing the high/low extremes reached during that period. Long wicks show rejection.",
    category: "Basic",
  },
  {
    term: "Wyckoff Method",
    definition:
      "A market analysis approach studying accumulation, markup, distribution, and markdown phases. The foundation that SMC concepts are built upon.",
    category: "SMC",
  },
  // X
  {
    term: "XAU/USD",
    definition:
      "The ticker symbol for Gold priced in US Dollars. One of the most traded commodities, moves 200-500+ pips daily.",
    category: "Basic",
  },
  // Y
  {
    term: "Yield",
    definition:
      "The return on an investment expressed as a percentage. Bond yields significantly impact forex markets (higher yields = stronger currency).",
    category: "Basic",
  },
  // Z
  {
    term: "Zone",
    definition:
      "A price area (not just a single line) where significant activity occurred. Order blocks, supply/demand zones, and FVGs are all zones.",
    category: "Price Action",
  },
];
