"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";

interface GlossaryTerm {
  term: string;
  definition: string;
  category?: string;
}

const glossaryTermsEn: GlossaryTerm[] = [
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

const glossaryTermsBn: GlossaryTerm[] = [
  {
    term: "Accumulation (অ্যাকুমুলেশন)",
    definition:
      "একটি ফেজ যেখানে ইনস্টিটিউশনাল ট্রেডাররা বড় প্রাইস মুভের আগে নীরবে পজিশন তৈরি করে। প্রাইস একটি রেঞ্জে কনসলিডেট করে যখন স্মার্ট মানি লিকুইডিটি শোষণ করে।",
    category: "SMC",
  },
  {
    term: "AMD (অ্যাকুমুলেশন, ম্যানিপুলেশন, ডিস্ট্রিবিউশন)",
    definition: "ICT কনসেপ্ট যা তিনটি ফেজ বর্ণনা করে: পজিশন তৈরি, স্টপ ট্রিগার, তারপর টার্গেটে প্রাইস ডেলিভারি।",
    category: "ICT",
  },
  {
    term: "Ask Price (আস্ক প্রাইস)",
    definition: "একটি সম্পদ বিক্রয়ের জন্য বিক্রেতার সর্বনিম্ন গ্রহণযোগ্য মূল্য। Ask ও Bid-এর পার্থক্যই হলো Spread।",
    category: "Basic",
  },
  {
    term: "ATR (এভারেজ ট্রু রেঞ্জ)",
    definition:
      "একটি ভোলাটিলিটি ইন্ডিকেটর যা নির্দিষ্ট পিরিয়ডে প্রাইস মুভমেন্টের গড় রেঞ্জ পরিমাপ করে। Stop loss ও position sizing-এ ব্যবহৃত হয়।",
    category: "Indicator",
  },
  {
    term: "Asian Range (এশিয়ান রেঞ্জ)",
    definition:
      "এশিয়ান/টোকিও সেশনে গঠিত প্রাইস রেঞ্জ। লন্ডন সেশন ম্যানিপুলেশনের রেফারেন্স হিসেবে ব্যবহৃত হয়। BD সময়: সকাল ৫:০০ - দুপুর ২:০০।",
    category: "ICT",
  },
  {
    term: "Bearish (বিয়ারিশ)",
    definition:
      "মার্কেটের এমন অবস্থা যা প্রাইস পতনের ইঙ্গিত দেয়। বিয়ারিশ ক্যান্ডেল তাদের ওপেন প্রাইসের নিচে ক্লোজ হয়।",
    category: "Basic",
  },
  {
    term: "Bearish Engulfing (বিয়ারিশ এনগালফিং)",
    definition:
      "একটি দুই-ক্যান্ডেল রিভার্সাল প্যাটার্ন যেখানে বিয়ারিশ ক্যান্ডেল আগের বুলিশ ক্যান্ডেলকে পুরোপুরি গ্রাস করে।",
    category: "Price Action",
  },
  {
    term: "Bid Price (বিড প্রাইস)",
    definition:
      "একটি সম্পদ ক্রয়ের জন্য ক্রেতার সর্বোচ্চ প্রস্তাবিত মূল্য। রিটেইল সেল অর্ডার বিড প্রাইসে এক্সিকিউট হয়।",
    category: "Basic",
  },
  {
    term: "BOS (ব্রেক অফ স্ট্রাকচার)",
    definition:
      "যখন প্রাইস একটি সুইং হাই (আপট্রেন্ডে) বা সুইং লো (ডাউনট্রেন্ডে) ভেঙে দেয়, ট্রেন্ড কন্টিনিউয়েশন কনফার্ম করে। SMC-তে সবচেয়ে গুরুত্বপূর্ণ কনফার্মেশন সিগন্যাল।",
    category: "SMC",
  },
  {
    term: "Breaker Block (ব্রেকার ব্লক)",
    definition: "একটি ব্যর্থ অর্ডার ব্লক যা ভায়োলেট হওয়ার পর বিপরীত দিক থেকে সাপোর্ট/রেজিস্ট্যান্স হিসেবে কাজ করে।",
    category: "SMC",
  },
  {
    term: "Breakout (ব্রেকআউট)",
    definition:
      "যখন প্রাইস সাপোর্ট, রেজিস্ট্যান্স বা কনসলিডেশন রেঞ্জ মোমেন্টাম সহ অতিক্রম করে। ভ্যালিড ব্রেকআউটে displacement ও volume থাকে।",
    category: "Price Action",
  },
  {
    term: "Bullish (বুলিশ)",
    definition:
      "মার্কেটের এমন অবস্থা যা প্রাইস বৃদ্ধির ইঙ্গিত দেয়। বুলিশ ক্যান্ডেল তাদের ওপেন প্রাইসের উপরে ক্লোজ হয়।",
    category: "Basic",
  },
  {
    term: "Bullish Engulfing (বুলিশ এনগালফিং)",
    definition:
      "একটি দুই-ক্যান্ডেল রিভার্সাল প্যাটার্ন যেখানে বুলিশ ক্যান্ডেল আগের বিয়ারিশ ক্যান্ডেলকে পুরোপুরি গ্রাস করে, আপসাইড রিভার্সাল ইঙ্গিত করে।",
    category: "Price Action",
  },
  {
    term: "Buy-side Liquidity / BSL (বাই-সাইড লিকুইডিটি)",
    definition:
      "সুইং হাই, ইকুয়াল হাই এবং রেজিস্ট্যান্স লেভেলের উপরে থাকা স্টপ-লস অর্ডার। ইনস্টিটিউশনরা প্রাইস নামানোর আগে এগুলো টার্গেট করে।",
    category: "SMC",
  },
  {
    term: "Candlestick (ক্যান্ডেলস্টিক)",
    definition:
      "চার্টে প্রতিটি সময়কালের Open, High, Low, Close দেখানো চার্ট উপস্থাপন। বডি open-close রেঞ্জ দেখায়, উইক high-low দেখায়।",
    category: "Basic",
  },
  {
    term: "CHOCH (চেঞ্জ অফ ক্যারেক্টার)",
    definition:
      "বিদ্যমান ট্রেন্ডের বিপরীতে প্রথম মার্কেট স্ট্রাকচার ব্রেক। আপট্রেন্ডে প্রথম lower low বা ডাউনট্রেন্ডে প্রথম higher high। সম্ভাব্য রিভার্সালের প্রথম চিহ্ন।",
    category: "SMC",
  },
  {
    term: "Compression (কম্প্রেশন)",
    definition:
      "রেজিস্ট্যান্সে higher low বা সাপোর্টে lower high তৈরি করা, একটি বিস্ফোরক মুভের জন্য শক্তি জমা করা। অর্ডার শোষিত হওয়ার ইঙ্গিত।",
    category: "Price Action",
  },
  {
    term: "Confluence (কনফ্লুয়েন্স)",
    definition:
      "যখন একাধিক টেকনিক্যাল ফ্যাক্টর (অর্ডার ব্লক, FVG, ফিব লেভেল, লিকুইডিটি) একই প্রাইস জোনে মিলে যায়, ট্রেড সম্ভাবনা উল্লেখযোগ্যভাবে বৃদ্ধি করে।",
    category: "Price Action",
  },
  {
    term: "Consolidation (কনসলিডেশন)",
    definition:
      "প্রাইস একটি নির্দিষ্ট রেঞ্জের মধ্যে সাইডওয়েজ মুভ করার পিরিয়ড। স্মার্ট মানি কনসলিডেশন ব্যবহার করে পজিশন accumulate বা distribute করতে।",
    category: "Basic",
  },
  {
    term: "Daily Bias (ডেইলি বায়াস)",
    definition:
      "হায়ার টাইমফ্রেম অ্যানালাইসিস, আগের দিনের ক্লোজ এবং ইনস্টিটিউশনাল অর্ডার ফ্লোর উপর ভিত্তি করে আজকের প্রত্যাশিত দিক।",
    category: "ICT",
  },
  {
    term: "Dealing Range (ডিলিং রেঞ্জ)",
    definition:
      "একটি গুরুত্বপূর্ণ সুইং হাই ও সুইং লো-এর মধ্যবর্তী রেঞ্জ যা বর্তমান প্রাইস অ্যাকশন ধারণ করে। Premium/discount অ্যানালাইসিসে ব্যবহৃত।",
    category: "ICT",
  },
  {
    term: "Discount Zone (ডিসকাউন্ট জোন)",
    definition:
      "ডিলিং রেঞ্জের নিচের অর্ধেক (৫০%-এর নিচে) যেখানে প্রাইস সস্তা বলে বিবেচিত। ইনস্টিটিউশনাল বায়াররা ডিসকাউন্ট জোনে এন্ট্রি খোঁজে।",
    category: "SMC",
  },
  {
    term: "Displacement (ডিসপ্লেসমেন্ট)",
    definition:
      "বড় বডি ক্যান্ডেল সহ শক্তিশালী ইমপালসিভ প্রাইস মুভ যা FVG তৈরি করে। আক্রমণাত্মক ইনস্টিটিউশনাল কার্যকলাপ ও প্রতিশ্রুতি ইঙ্গিত করে।",
    category: "SMC",
  },
  {
    term: "Distribution (ডিস্ট্রিবিউশন)",
    definition: "যে ফেজে ইনস্টিটিউশনরা তাদের আগে accumulate করা পজিশন বিক্রি/আনলোড করে, সাধারণত প্রিমিয়াম প্রাইসে।",
    category: "SMC",
  },
  {
    term: "Drawdown (ড্রডাউন)",
    definition:
      "সর্বোচ্চ ইকুইটি থেকে সর্বনিম্ন পয়েন্ট পর্যন্ত শতাংশ পতন। ১০% ড্রডাউন মানে সর্বোচ্চ ব্যালেন্স থেকে ১০% হারানো।",
    category: "Risk",
  },
  {
    term: "Equal Highs / EQH (ইকুয়াল হাই)",
    definition:
      "দুই বা ততোধিক সুইং হাই প্রায় একই প্রাইসে। Buy-side liquidity pool হিসেবে কাজ করে যা ইনস্টিটিউশনরা টার্গেট করবে।",
    category: "SMC",
  },
  {
    term: "Equal Lows / EQL (ইকুয়াল লো)",
    definition:
      "দুই বা ততোধিক সুইং লো প্রায় একই প্রাইসে। Sell-side liquidity pool হিসেবে কাজ করে যা ইনস্টিটিউশনরা টার্গেট করবে।",
    category: "SMC",
  },
  {
    term: "Equilibrium (ইকুইলিব্রিয়াম)",
    definition:
      "যেকোনো ডিলিং রেঞ্জের ৫০% লেভেল। এই লেভেলে প্রাইস 'ফেয়ার ভ্যালু'-তে আছে — প্রিমিয়ামও না, ডিসকাউন্টও না।",
    category: "SMC",
  },
  {
    term: "Expansion (এক্সপ্যানশন)",
    definition:
      "কনসলিডেশন বা ম্যানিপুলেশনের পর প্রাইস আক্রমণাত্মকভাবে ও দিকনির্দেশনামূলকভাবে মুভ করার ফেজ। Distribution/delivery ফেজ।",
    category: "Price Action",
  },
  {
    term: "Fair Value Gap / FVG (ফেয়ার ভ্যালু গ্যাপ)",
    definition:
      "তিন-ক্যান্ডেল ইমব্যালেন্স যেখানে ক্যান্ডেল ১-এর হাই ও ক্যান্ডেল ৩-এর লো ওভারল্যাপ করে না (বুলিশ)। ইনস্টিটিউশনাল ইমব্যালেন্স প্রতিনিধিত্ব করে এবং প্রাইস প্রায়ই ফিরে আসে।",
    category: "SMC",
  },
  {
    term: "Fakeout (ফেকআউট)",
    definition:
      "একটি ফলস ব্রেকআউট যেখানে প্রাইস সংক্ষিপ্তভাবে একটি লেভেল অতিক্রম করে স্টপ ট্রিগার করার পর তীব্রভাবে রিভার্স করে। ইনস্টিটিউশনদের মূল ম্যানিপুলেশন টেকনিক।",
    category: "Price Action",
  },
  {
    term: "Fibonacci Retracement (ফিবোনাচ্চি রিট্রেসমেন্ট)",
    definition:
      "সুইং হাই ও লো-এর মাঝে মূল অনুপাতে (২৩.৬%, ৩৮.২%, ৫০%, ৬১.৮%, ৭৮.৬%) অনুভূমিক রেখা আঁকার টুল। ৬১.৮-৭৮.৬% জোনই OTE।",
    category: "ICT",
  },
  {
    term: "Forex (ফরেক্স)",
    definition:
      "বৈদেশিক মুদ্রা বিনিময় বাজার। দৈনিক $৭.৫ ট্রিলিয়ন ভলিউম সহ বিশ্বের বৃহত্তম আর্থিক বাজার। ২৪/৫ চালু থাকে।",
    category: "Basic",
  },
  {
    term: "Gap (গ্যাপ)",
    definition: "যেখানে কোনো ট্রেডিং হয়নি এমন প্রাইস এরিয়া। ফরেক্সে উইকেন্ড গ্যাপ ও স্টকে ওভারনাইট গ্যাপ সাধারণ।",
    category: "Basic",
  },
  {
    term: "Hammer (হ্যামার)",
    definition:
      "একটি বুলিশ রিভার্সাল ক্যান্ডেল — উপরে ছোট বডি, নিচে লম্বা উইক (বডির কমপক্ষে ২ গুণ)। নিম্ন প্রাইসের শক্তিশালী প্রত্যাখ্যান দেখায়।",
    category: "Price Action",
  },
  {
    term: "Higher High / HH (হায়ার হাই)",
    definition: "আগের সুইং হাই-এর উপরে নতুন সুইং হাই, বুলিশ মার্কেট স্ট্রাকচার ও ট্রেন্ড কন্টিনিউয়েশন কনফার্ম করে।",
    category: "Price Action",
  },
  {
    term: "Higher Low / HL (হায়ার লো)",
    definition:
      "আগের সুইং লো-এর উপরে নতুন সুইং লো, দেখায় যে বায়াররা উচ্চ প্রাইসে ঢুকছে। আপট্রেন্ড কনফার্মেশনের মূল চিহ্ন।",
    category: "Price Action",
  },
  {
    term: "ICT (আইসিটি / ইনার সার্কেল ট্রেডার)",
    definition:
      "Michael J. Huddleston-এর তৈরি ট্রেডিং মেথডলজি যা ইনস্টিটিউশনাল অর্ডার ফ্লো, টাইম-বেসড মডেল ও মার্কেট মেকার অ্যালগরিদমের উপর ফোকাস করে।",
    category: "ICT",
  },
  {
    term: "Imbalance (ইমব্যালেন্স)",
    definition:
      "যে এরিয়ায় আক্রমণাত্মক একতরফা ট্রেডিং অদক্ষ প্রাইস ডেলিভারি তৈরি করেছে। FVG ও volume imbalance হলো ইমব্যালেন্সের ধরন যেখানে প্রাইস ফিরে আসে।",
    category: "SMC",
  },
  {
    term: "Inducement (ইনডিউসমেন্ট)",
    definition:
      "ছোট সুইং হাই/লো যা রিটেইল ট্রেডারদের পজিশনে প্রলুব্ধ করে রিভার্সের আগে। আসল মুভের আগে সুইপ হওয়া ছোট লিকুইডিটি পুল।",
    category: "SMC",
  },
  {
    term: "Institutional Order Flow (ইনস্টিটিউশনাল অর্ডার ফ্লো)",
    definition:
      "মার্কেটে বড় প্লেয়ারদের (ব্যাংক, হেজ ফান্ড) ফুটপ্রিন্ট, displacement, FVG, order block ও liquidity sweep দ্বারা চিহ্নিত।",
    category: "SMC",
  },
  {
    term: "Internal Liquidity (ইন্টার্নাল লিকুইডিটি)",
    definition:
      "ডিলিং রেঞ্জের মধ্যে ছোট সুইং পয়েন্ট দ্বারা তৈরি লিকুইডিটি। রেঞ্জ এক্সট্রিমের external liquidity থেকে পৃথক।",
    category: "SMC",
  },
  {
    term: "Judas Swing (জুডাস সুইং)",
    definition:
      "ICT কনসেপ্ট: সেশন ওপেনে একটি ফলস মুভ যা ট্রেডারদের ফাঁদে ফেলে আসল মুভের আগে। মার্কেট আর্লি এন্ট্রিগুলোকে 'বিশ্বাসঘাতকতা' করে।",
    category: "ICT",
  },
  {
    term: "Kill Zone (কিল জোন)",
    definition:
      "নির্দিষ্ট হাই-প্রবাবিলিটি টাইম উইন্ডো: London (BD সময় ৮:০০-১১:০০ AM), NY (BD সময় ৫:০০-৮:০০ PM)। যখন ইনস্টিটিউশনরা তাদের অর্ডার এক্সিকিউট করে।",
    category: "ICT",
  },
  {
    term: "Leverage (লিভারেজ)",
    definition:
      "ধার করা মূলধন ব্যবহার করে পজিশন সাইজ বড় করা। ১:১০০ লিভারেজ মানে $১,০০০ দিয়ে $১০০,০০০ কন্ট্রোল করা। লাভ ও ক্ষতি উভয়ই বহুগুণ বাড়ায়।",
    category: "Basic",
  },
  {
    term: "Limit Order (লিমিট অর্ডার)",
    definition:
      "বর্তমান মার্কেট প্রাইসের নিচে কিনতে বা উপরে বিক্রি করতে অর্ডার। পূর্বনির্ধারিত লেভেলে (order block, FVG) এন্ট্রির জন্য ব্যবহৃত।",
    category: "Basic",
  },
  {
    term: "Liquidity (লিকুইডিটি)",
    definition:
      "মূল প্রাইস লেভেলে বিশ্রামরত অর্ডারের (স্টপ লস, পেন্ডিং অর্ডার) ক্লাস্টার। ইনস্টিটিউশনদের বড় পজিশন পূরণে লিকুইডিটি প্রয়োজন।",
    category: "SMC",
  },
  {
    term: "Liquidity Grab (লিকুইডিটি গ্র্যাব)",
    definition:
      "যখন প্রাইস দ্রুত একটি কী লেভেলে স্টপ লস নিয়ে নেয় রিভার্সের আগে। ইনস্টিটিউশনদের এন্ট্রির জন্য প্রয়োজনীয় জ্বালানি।",
    category: "SMC",
  },
  {
    term: "Liquidity Pool (লিকুইডিটি পুল)",
    definition: "সুস্পষ্ট টেকনিক্যাল লেভেলে (সুইং হাই/লো, রাউন্ড নম্বর, ট্রেন্ডলাইন) স্টপ-লস অর্ডারের ঘনত্ব।",
    category: "SMC",
  },
  {
    term: "Liquidity Sweep (লিকুইডিটি সুইপ)",
    definition: "প্রাইস একটি লিকুইডিটি লেভেল নিয়ে (স্টপ রান করে) রিভার্স করে। সুইপের পর displacement আসলে কনফার্মেশন।",
    category: "SMC",
  },
  {
    term: "Lot Size (লট সাইজ)",
    definition:
      "Standard lot = ১,০০,০০০ ইউনিট, Mini = ১০,০০০, Micro = ১,০০০, Nano = ১০০ ইউনিট। পিপ ভ্যালু নির্ধারণ করে।",
    category: "Basic",
  },
  {
    term: "Lower High / LH (লোয়ার হাই)",
    definition:
      "আগের সুইং হাই-এর নিচে নতুন সুইং হাই, সেলাররা কন্ট্রোল নিচ্ছে বোঝায়। ডাউনট্রেন্ড স্ট্রাকচারের মূল চিহ্ন।",
    category: "Price Action",
  },
  {
    term: "Lower Low / LL (লোয়ার লো)",
    definition: "আগের সুইং লো-এর নিচে নতুন সুইং লো, বিয়ারিশ কন্টিনিউয়েশন ও ডাউনট্রেন্ড স্ট্রাকচার কনফার্ম করে।",
    category: "Price Action",
  },
  {
    term: "Manipulation (ম্যানিপুলেশন)",
    definition:
      "রিটেইল স্টপ ট্রিগার ও আসল মুভের আগে লিকুইডিটি তৈরি করতে ইনস্টিটিউশনাল প্রাইস ইঞ্জিনিয়ারিং। AMD-তে 'M'।",
    category: "SMC",
  },
  {
    term: "Margin (মার্জিন)",
    definition:
      "লিভারেজড পজিশন খুলতে ও বজায় রাখতে প্রয়োজনীয় জামানত। ইকুইটি maintenance margin-এর নিচে পড়লে Margin Call হয়।",
    category: "Basic",
  },
  {
    term: "Margin Call",
    definition:
      "A broker notification that account equity has fallen below maintenance requirements. Positions may be forcibly closed if additional funds aren't deposited.",
    category: "Risk",
  },
  {
    term: "Market Maker Model / MMM (মার্কেট মেকার মডেল)",
    definition:
      "ICT কনসেপ্ট: ইনস্টিটিউশনরা কিভাবে প্রাইস ইঞ্জিনিয়ার করে — original consolidation, smart money reversal, BOS, ও বিপরীত liquidity pool-এ delivery।",
    category: "ICT",
  },
  {
    term: "Market Structure (মার্কেট স্ট্রাকচার)",
    definition:
      "সুইং হাই ও লো-এর বিন্যাস যা ট্রেন্ড দিক নির্ধারণ করে। Bullish = HH+HL, Bearish = LH+LL, Ranging = সমান লেভেল।",
    category: "SMC",
  },
  {
    term: "MSS (মার্কেট স্ট্রাকচার শিফট)",
    definition:
      "Displacement সহ মার্কেট স্ট্রাকচারের নির্ণায়ক ভাঙন, CHOCH-এর চেয়ে শক্তিশালী। নতুন দিকে ইনস্টিটিউশনাল প্রতিশ্রুতি ইঙ্গিত করে।",
    category: "SMC",
  },
  {
    term: "Mitigation Block (মিটিগেশন ব্লক)",
    definition: "যে প্রাইস জোনে ইনস্টিটিউশনরা আগে লস করেছে এবং প্রাইস ফিরলে ব্রেক-ইভেনে অর্ডার রাখবে।",
    category: "SMC",
  },
  {
    term: "Momentum (মোমেন্টাম)",
    definition:
      "প্রাইস মুভমেন্টের গতি ও ত্বরণ। শক্তিশালী মোমেন্টাম = বড় ক্যান্ডেল ছোট উইক। দুর্বল মোমেন্টাম = ছোট ক্যান্ডেল বড় উইক।",
    category: "Price Action",
  },
  {
    term: "Naked POI (নেকেড পয়েন্ট অফ ইন্টারেস্ট)",
    definition:
      "এমন unmitigated order block, FVG বা breaker block যেখানে প্রাইস এখনো রিটেস্ট করেনি। ভবিষ্যত এন্ট্রির হাই-প্রায়োরিটি জোন।",
    category: "SMC",
  },
  {
    term: "OTE (অপটিমাল ট্রেড এন্ট্রি)",
    definition:
      "ICT-এর প্রিমিয়াম এন্ট্রি জোন — expansion leg-এর ৬২% থেকে ৭৯% Fibonacci retracement-এর মধ্যে। রিট্রেসমেন্টে সর্বোচ্চ সম্ভাবনার এন্ট্রি।",
    category: "ICT",
  },
  {
    term: "Order Block / OB (অর্ডার ব্লক)",
    definition:
      "একটি গুরুত্বপূর্ণ displacement move-এর আগে শেষ বিপরীত ক্যান্ডেল (বা ক্যান্ডেল গ্রুপ)। ইনস্টিটিউশনাল অর্ডার প্লেসমেন্ট জোন প্রতিনিধিত্ব করে।",
    category: "SMC",
  },
  {
    term: "PD Array (পিডি অ্যারে)",
    definition:
      "Premium/Discount Array — ইনস্টিটিউশনাল রেফারেন্স পয়েন্ট: order block, FVG, breaker block, mitigation block, ও liquidity void।",
    category: "ICT",
  },
  {
    term: "Pip (পিপ)",
    definition:
      "Point In Percentage — সবচেয়ে ছোট স্ট্যান্ডার্ড প্রাইস মুভমেন্ট। বেশিরভাগ ফরেক্স পেয়ারে ১ pip = ০.০০০১। JPY পেয়ারে ১ pip = ০.০১।",
    category: "Basic",
  },
  {
    term: "Position Sizing (পজিশন সাইজিং)",
    definition:
      "অ্যাকাউন্ট ব্যালেন্স, রিস্ক শতাংশ ও স্টপ লস দূরত্বের উপর ভিত্তি করে সঠিক লট সাইজ ক্যালকুলেট করা। রিস্ক ম্যানেজমেন্টের ভিত্তি।",
    category: "Risk",
  },
  {
    term: "Power of 3 / PO3 (পাওয়ার অফ ৩)",
    definition:
      "ICT কনসেপ্ট: যেকোনো সেশন বা ক্যান্ডেলের তিনটি ফেজ — Accumulation (open), Manipulation (false move), Distribution (real move to close)।",
    category: "ICT",
  },
  {
    term: "Premium Zone (প্রিমিয়াম জোন)",
    definition:
      "ডিলিং রেঞ্জের উপরের অর্ধেক (৫০%-এর উপরে) যেখানে প্রাইস দামি। ইনস্টিটিউশনাল সেলাররা প্রিমিয়াম জোনে এন্ট্রি খোঁজে।",
    category: "SMC",
  },
  {
    term: "Price Action (প্রাইস অ্যাকশন)",
    definition:
      "ইন্ডিকেটর ছাড়া কাঁচা প্রাইস মুভমেন্ট পড়া। ক্যান্ডেলস্টিক প্যাটার্ন, মার্কেট স্ট্রাকচার ও সাপ্লাই/ডিমান্ড জোন অ্যানালাইসিস করা।",
    category: "Price Action",
  },
  {
    term: "Pullback (পুলব্যাক)",
    definition:
      "ট্রেন্ড দিকের বিপরীতে সাময়িক রিট্রেসমেন্ট। স্বাস্থ্যকর পুলব্যাক আগের impulse leg-এর ৩৮.২-৬১.৮% রিট্রেস করে।",
    category: "Price Action",
  },
  {
    term: "Range (রেঞ্জ)",
    definition:
      "একটি অনুভূমিক প্রাইস চ্যানেল যেখানে প্রাইস সাপোর্ট ও রেজিস্ট্যান্সের মাঝে বাউন্স করে স্পষ্ট ট্রেন্ড ছাড়া।",
    category: "Price Action",
  },
  {
    term: "Resistance (রেজিস্ট্যান্স)",
    definition:
      "যে প্রাইস লেভেলে বিক্রয়ের চাপ ঐতিহাসিকভাবে আরও উর্ধ্বমুখী মুভমেন্ট ঠেকায়। SMC-তে, এর উপরের লিকুইডিটি সুইপ হবে।",
    category: "Price Action",
  },
  {
    term: "Risk Management (রিস্ক ম্যানেজমেন্ট)",
    definition:
      "পজিশন সাইজিং, স্টপ লস ও সর্বোচ্চ ড্রডাউন নিয়মের মাধ্যমে সম্ভাব্য ক্ষতি সীমিত করার অনুশীলন। প্রতি ট্রেডে সর্বোচ্চ ১-২% রিস্ক।",
    category: "Risk",
  },
  {
    term: "Risk-to-Reward / RRR (রিস্ক-টু-রিওয়ার্ড)",
    definition:
      "সম্ভাব্য লস (স্টপ দূরত্ব) ও সম্ভাব্য লাভের (টেক প্রফিট দূরত্ব) অনুপাত। ১:৩ RRR মানে $১০০ রিস্কে $৩০০ লাভের সুযোগ।",
    category: "Risk",
  },
  {
    term: "Scalping (স্ক্যাল্পিং)",
    definition:
      "ছোট লাভের (৫-২০ পিপ) জন্য অনেক দ্রুত ট্রেড নেওয়া। দ্রুত execution, টাইট স্প্রেড ও precise entry প্রয়োজন।",
    category: "Basic",
  },
  {
    term: "Sell-side Liquidity / SSL (সেল-সাইড লিকুইডিটি)",
    definition:
      "সুইং লো, ইকুয়াল লো ও সাপোর্ট লেভেলের নিচে থাকা স্টপ-লস অর্ডার। ইনস্টিটিউশনরা প্রাইস বাড়ানোর আগে এগুলো টার্গেট করে।",
    category: "SMC",
  },
  {
    term: "Session (সেশন)",
    definition:
      "নির্দিষ্ট মার্কেট কার্যকলাপ সময়: Sydney, Tokyo (BD: সকাল ৫:০০-দুপুর ২:০০), London (BD: সকাল ৮:০০-সন্ধ্যা ৫:০০), New York (BD: সন্ধ্যা ৬:০০-রাত ৩:০০)।",
    category: "Basic",
  },
  {
    term: "Silver Bullet (সিলভার বুলেট)",
    definition:
      "ICT টাইম-বেসড এন্ট্রি মডেল — নির্দিষ্ট ১-ঘণ্টা উইন্ডোতে তৈরি FVG টার্গেট করে: ৩-৪ AM, ১০-১১ AM, বা ২-৩ PM EST।",
    category: "ICT",
  },
  {
    term: "SMC (স্মার্ট মানি কনসেপ্ট)",
    definition:
      "একটি ট্রেডিং মেথডলজি যা ইনস্টিটিউশনাল প্লেয়ারদের (ব্যাংক, হেজ ফান্ড) মার্কেটে কিভাবে কাজ করে তা রিভার্স-ইঞ্জিনিয়ার করে।",
    category: "SMC",
  },
  {
    term: "SMT Divergence (এসএমটি ডাইভার্জেন্স)",
    definition:
      "Smart Money Technique: যখন correlated pair একই সাথে corresponding highs/lows তৈরি করতে ব্যর্থ হয়, manipulation ও সম্ভাব্য রিভার্সাল ইঙ্গিত করে।",
    category: "ICT",
  },
  {
    term: "Spread (স্প্রেড)",
    definition: "Bid ও Ask প্রাইসের পার্থক্য। ট্রেডে প্রবেশের খরচ। Variable spread লো লিকুইডিটি ও নিউজ ইভেন্টে বাড়ে।",
    category: "Basic",
  },
  {
    term: "Stop Hunt (স্টপ হান্ট)",
    definition:
      "যখন প্রাইস সুস্পষ্ট স্টপ-লস লেভেলে চালিত হয় ঐ অর্ডার ট্রিগার করতে, বিপরীত দিকে ইনস্টিটিউশনাল এন্ট্রির জন্য লিকুইডিটি প্রদান করে।",
    category: "SMC",
  },
  {
    term: "Stop Loss (স্টপ লস)",
    definition:
      "পূর্বনির্ধারিত লস লেভেলে স্বয়ংক্রিয়ভাবে পজিশন বন্ধ করার প্রতিরক্ষামূলক অর্ডার। মূলধন সংরক্ষণের জন্য অপরিহার্য।",
    category: "Risk",
  },
  {
    term: "Support (সাপোর্ট)",
    definition: "যে প্রাইস লেভেলে ক্রয়ের চাপ ঐতিহাসিকভাবে আরও পতন ঠেকায়। SMC-তে, এর নিচের লিকুইডিটি সুইপ হবে।",
    category: "Price Action",
  },
  {
    term: "Swing High (সুইং হাই)",
    definition: "উভয় পাশে নিম্ন হাই সহ একটি প্রাইস শিখর — স্থানীয় সর্বোচ্চ পয়েন্ট।",
    category: "Price Action",
  },
  {
    term: "Swing Low (সুইং লো)",
    definition: "উভয় পাশে উচ্চ লো সহ একটি প্রাইস গর্ত — স্থানীয় সর্বনিম্ন পয়েন্ট।",
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
    term: "Take Profit / TP (টেক প্রফিট)",
    definition:
      "পূর্বনির্ধারিত লাভের লেভেলে স্বয়ংক্রিয়ভাবে পজিশন বন্ধ করার অর্ডার। প্রায়ই বিপরীত liquidity pool বা FVG টার্গেটে রাখা হয়।",
    category: "Basic",
  },
  {
    term: "Three Drives Pattern",
    definition:
      "A reversal pattern with three pushes to a high/low, each with decreasing momentum. Similar to Elliott Wave with exhaustion.",
    category: "Price Action",
  },
  {
    term: "Timeframe (টাইমফ্রেম)",
    definition:
      "প্রতিটি ক্যান্ডেল যে সময়কাল দেখায়: 1m, 5m, 15m, 1H, 4H, Daily, Weekly। হায়ার টাইমফ্রেম প্রাধান্য পায়।",
    category: "Basic",
  },
  {
    term: "Tokyo Session",
    definition:
      "এশিয়ান মার্কেট ঘণ্টা (৭:০০ PM - ৪:০০ AM EST / ৫:০০ AM - ২:০০ PM BD)। JPY পেয়ারের জন্য মূল এবং এশিয়ান রেঞ্জ প্রতিষ্ঠায় গুরুত্বপূর্ণ।",
    category: "Basic",
  },
  {
    term: "Trailing Stop",
    definition: "A stop loss that automatically moves with price to lock in profits as the trade moves in your favor.",
    category: "Risk",
  },
  {
    term: "Trend (ট্রেন্ড)",
    definition:
      "প্রাইস মুভমেন্টের সাধারণ দিক। Uptrend = HH+HL, Downtrend = LH+LL। 'বাঁক না আসা পর্যন্ত ট্রেন্ড আপনার বন্ধু।'",
    category: "Basic",
  },
  {
    term: "Turtle Soup (টার্টল সুপ)",
    definition:
      "ICT কনসেপ্ট — পুরনো highs/lows-এ ফলস ব্রেকআউট ফেড করা। প্রাইস একটি পুরনো high/low নিয়ে রিভার্স করলে breakout traders ফাঁদে পড়ে।",
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
      "ICT সেটআপ যেখানে একটি breaker block একটি fair value gap-এর সাথে পারফেক্টলি ওভারল্যাপ করে, অতি-উচ্চ সম্ভাবনার এন্ট্রি জোন তৈরি করে।",
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
      "ICT কনসেপ্ট — displacement leg-এর মধ্যে একটি নির্দিষ্ট FVG এন্ট্রি পয়েন্ট হিসেবে ব্যবহার, এর precision ও effectiveness-এর জন্য নামকরণ।",
    category: "ICT",
  },
  {
    term: "Volatility (ভোলাটিলিটি)",
    definition:
      "প্রাইস মুভমেন্টের তারতম্যের মাত্রা। হাই ভোলাটিলিটি = বড় মুভ, লো ভোলাটিলিটি = ছোট মুভ। ATR দ্বারা পরিমাপ।",
    category: "Basic",
  },
  {
    term: "Volume (ভলিউম)",
    definition:
      "একটি পিরিয়ডে ট্রেড হওয়া contracts/shares সংখ্যা। হাই ভলিউম মুভ কনফার্ম করে; লো ভলিউম sustainability প্রশ্ন করে।",
    category: "Price Action",
  },
  {
    term: "Volume Imbalance (ভলিউম ইমব্যালেন্স)",
    definition:
      "একটি ক্যান্ডেলের close ও পরবর্তী ক্যান্ডেলের open-এর মাঝে গ্যাপ (একই দিকে), আক্রমণাত্মক ইনস্টিটিউশনাল activity দেখায়।",
    category: "SMC",
  },
  {
    term: "Weak High/Low (উইক হাই/লো)",
    definition:
      "Displacement/momentum ছাড়া তৈরি সুইং পয়েন্ট যা সুইপ হওয়ার সম্ভাবনা বেশি। এর বাইরে sell-side বা buy-side liquidity বিশ্রামরত।",
    category: "SMC",
  },
  {
    term: "Wyckoff Method (ওয়াইকফ মেথড)",
    definition:
      "Accumulation, markup, distribution ও markdown ফেজ বিশ্লেষণের মার্কেট অ্যানালাইসিস পদ্ধতি। SMC কনসেপ্টের মূল ভিত্তি।",
    category: "SMC",
  },
  {
    term: "XAU/USD (গোল্ড)",
    definition:
      "US Dollar-এ Gold-এর টিকার সিম্বল। সবচেয়ে বেশি ট্রেড হওয়া কমোডিটিগুলোর একটি, দৈনিক ২০০-৫০০+ পিপ মুভ করে।",
    category: "Basic",
  },
  {
    term: "Zone (জোন)",
    definition:
      "যে প্রাইস এরিয়ায় (শুধু একটি লাইন নয়) গুরুত্বপূর্ণ কার্যকলাপ হয়েছে। Order block, supply/demand zone, ও FVG সবই zone।",
    category: "Price Action",
  },
];

const categories = ["All", "Basic", "SMC", "ICT", "Price Action", "Risk", "Indicator"];
const categoriesBn: Record<string, string> = {
  All: "সব",
  Basic: "বেসিক",
  SMC: "SMC",
  ICT: "ICT",
  "Price Action": "প্রাইস অ্যাকশন",
  Risk: "রিস্ক",
  Indicator: "ইন্ডিকেটর",
};

const categoryColors: Record<string, string> = {
  Basic: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  SMC: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  ICT: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Price Action": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Risk: "bg-red-500/10 text-red-400 border-red-500/20",
  Indicator: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const terms = lang === "bn" ? glossaryTermsBn : glossaryTermsEn;

  const filtered = useMemo(() => {
    return terms.filter((t) => {
      const matchesSearch =
        search === "" ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [terms, search, activeCategory]);

  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filtered.forEach((t) => {
      const letter = t.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(t);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10">
          <BookOpen className="h-5 w-5 text-accent-green" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">{lang === "bn" ? "ট্রেডিং শব্দকোষ" : "Trading Glossary"}</h1>
      </div>
      <p className="text-muted-foreground mb-6">
        {lang === "bn"
          ? `সম্পূর্ণ A-Z ট্রেডিং পরিভাষা — ${terms.length}টি শব্দ`
          : `Complete A-Z trading terminology — ${terms.length} terms`}
      </p>

      <div className="relative mb-4">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === "bn" ? "শব্দ খুঁজুন..." : "Search terms..."}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/30"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-accent-green/10 text-accent-green border-accent-green/30"
                : "bg-card text-muted-foreground border-border hover:border-accent-green/20 hover:text-foreground"
            }`}
          >
            {lang === "bn" ? categoriesBn[cat] : cat}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {lang === "bn" ? `${filtered.length}টি ফলাফল দেখাচ্ছে` : `Showing ${filtered.length} results`}
      </p>

      {grouped.map(([letter, items]) => (
        <div key={letter} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green font-bold text-lg">
              {letter}
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item.term}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent-green/30 hover:shadow-lg hover:shadow-accent-green/5"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-accent-green transition-colors">
                    {item.term}
                  </h3>
                  {item.category && (
                    <span
                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${categoryColors[item.category] || "bg-muted text-muted-foreground border-border"}`}
                    >
                      {item.category}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-muted-foreground">
            {lang === "bn" ? "কোনো শব্দ পাওয়া যায়নি।" : "No terms found."}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "bn" ? "অন্য সার্চ টার্ম চেষ্টা করুন" : "Try a different search term"}
          </p>
        </div>
      )}
    </div>
  );
}
