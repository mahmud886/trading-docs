import type { GlossaryTerm } from "./types";

export const ictTermsEn: GlossaryTerm[] = [
  // Foundation
  {
    term: "ICT (Inner Circle Trader)",
    definition:
      "Trading methodology developed by Michael J. Huddleston that teaches institutional trading logic and how Smart Money operates in financial markets.",
    category: "Foundation",
  },
  {
    term: "Smart Money Concepts (SMC)",
    definition:
      "Trading approach that focuses on understanding how institutions (banks, hedge funds, market makers) move price, as opposed to retail trading methods.",
    category: "Foundation",
  },
  {
    term: "Institutional Trading",
    definition:
      "How large financial institutions execute orders, accumulate positions, and move price through algorithmic delivery and liquidity targeting.",
    category: "Foundation",
  },
  {
    term: "Market Efficiency",
    definition:
      "The concept that markets seek to deliver price efficiently between premium and discount zones, filling imbalances along the way.",
    category: "Foundation",
  },
  {
    term: "Price Delivery Algorithm (PDA)",
    definition:
      "The algorithmic system that governs how price moves between liquidity pools, fills fair value gaps, and delivers to institutional targets.",
    category: "Foundation",
  },
  {
    term: "Market Maker Model",
    definition:
      "How market makers (banks, institutions) engineer price to accumulate liquidity, manipulate retail traders, and deliver price to targets.",
    category: "Foundation",
  },
  {
    term: "How Institutions Move Price",
    definition:
      "Institutions move price by targeting liquidity pools, engineering false moves, and using algorithmic order execution across multiple timeframes.",
    category: "Foundation",
  },
  {
    term: "Retail vs Smart Money",
    definition:
      "Retail traders react to price; Smart Money engineers price. Retail provides liquidity that institutions use to fill their large orders.",
    category: "Foundation",
  },
  {
    term: "Understanding Liquidity",
    definition:
      "The foundational concept that all price movement is driven by the need to access resting orders (stop losses, pending orders) at key levels.",
    category: "Foundation",
  },

  // Market Structure
  {
    term: "Market Structure",
    definition: "The framework of swing highs and swing lows that defines trend direction and market character.",
    category: "Market Structure",
  },
  {
    term: "Bullish Market Structure",
    definition: "Series of higher highs and higher lows indicating upward institutional bias.",
    category: "Market Structure",
  },
  {
    term: "Bearish Market Structure",
    definition: "Series of lower highs and lower lows indicating downward institutional bias.",
    category: "Market Structure",
  },
  {
    term: "Range Market Structure",
    definition:
      "Price consolidating between defined highs and lows without clear directional bias — accumulation or distribution zone.",
    category: "Market Structure",
  },
  {
    term: "Swing High",
    definition: "A peak in price with lower highs on both sides, marking resistance and potential reversal points.",
    category: "Market Structure",
  },
  {
    term: "Swing Low",
    definition: "A trough in price with higher lows on both sides, marking support and potential reversal points.",
    category: "Market Structure",
  },
  {
    term: "Internal Structure",
    definition: "Lower timeframe market structure within higher timeframe moves (e.g., M5 structure within H4 trend).",
    category: "Market Structure",
  },
  {
    term: "External Structure",
    definition: "Higher timeframe market structure that provides overall market direction and bias.",
    category: "Market Structure",
  },
  {
    term: "BOS (Break of Structure)",
    definition:
      "When price breaks through a recent swing high (bullish) or swing low (bearish), indicating trend continuation.",
    category: "Market Structure",
  },
  {
    term: "MSS (Market Structure Shift)",
    definition:
      "Same as Change of Character (CHOCH) — when market structure transitions from bullish to bearish or vice versa.",
    category: "Market Structure",
  },
  {
    term: "CHOCH (Change of Character)",
    definition:
      "When price breaks structure in the opposite direction of the prevailing trend, indicating potential reversal.",
    category: "Market Structure",
  },
  {
    term: "Structural Shift",
    definition: "The moment when market character changes from trending to ranging or reverses direction entirely.",
    category: "Market Structure",
  },
  {
    term: "Trend Continuation",
    definition:
      "When price respects current market structure and makes new higher highs (bullish) or lower lows (bearish).",
    category: "Market Structure",
  },
  {
    term: "Trend Reversal",
    definition: "When market structure shifts and price begins moving in the opposite direction with new structure.",
    category: "Market Structure",
  },
  {
    term: "Fractal Market Structure",
    definition: "Repeating patterns of market structure across all timeframes (structure within structure).",
    category: "Market Structure",
  },
  {
    term: "Multi Timeframe Market Structure",
    definition:
      "Market structure analysis across multiple timeframes to ensure alignment (Monthly → Weekly → Daily → Intraday).",
    category: "Market Structure",
  },

  // Liquidity
  {
    term: "Liquidity",
    definition:
      "Resting stop losses and pending orders above/below price levels that institutions target for order execution.",
    category: "Liquidity",
  },
  {
    term: "Buy Side Liquidity (BSL)",
    definition: "Stop losses and buy stops resting above swing highs, equal highs, or resistance levels.",
    category: "Liquidity",
  },
  {
    term: "Sell Side Liquidity (SSL)",
    definition: "Stop losses and sell stops resting below swing lows, equal lows, or support levels.",
    category: "Liquidity",
  },
  {
    term: "Resting Liquidity",
    definition: "Stop losses and pending orders sitting inactive in the market waiting to be triggered.",
    category: "Liquidity",
  },
  {
    term: "Engineered Liquidity",
    definition: "Liquidity pools intentionally created by Smart Money through consolidation and equal highs/lows.",
    category: "Liquidity",
  },
  {
    term: "External Liquidity",
    definition: "Liquidity resting outside current price range (above highs or below lows).",
    category: "Liquidity",
  },
  {
    term: "Internal Liquidity",
    definition: "Liquidity resting within current consolidation or range (imbalances, gaps).",
    category: "Liquidity",
  },
  {
    term: "Relative Equal Highs",
    definition:
      "Multiple swing highs at approximately the same price level (minor variance acceptable), indicating BSL above.",
    category: "Liquidity",
  },
  {
    term: "Relative Equal Lows",
    definition:
      "Multiple swing lows at approximately the same price level (minor variance acceptable), indicating SSL below.",
    category: "Liquidity",
  },
  {
    term: "Equal Highs (EQH)",
    definition: "Two or more highs at exactly or very nearly the same price level, indicating BSL above.",
    category: "Liquidity",
  },
  {
    term: "Equal Lows (EQL)",
    definition: "Two or more lows at exactly or very nearly the same price level, indicating SSL below.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Pool",
    definition: "Concentrated area of resting stop losses and orders, typically at swing points or equal highs/lows.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Void",
    definition:
      "Area on chart with no significant liquidity (no consolidation, clean price movement) — same as Fair Value Gap.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Run",
    definition: "When price moves aggressively toward a liquidity pool to sweep stops and execute orders.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Grab",
    definition: "Quick move to capture liquidity above/below a level, usually followed by immediate reversal.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Sweep",
    definition: "Price moving through a level to trigger stops (creates wicks on charts), then reversing.",
    category: "Liquidity",
  },
  {
    term: "Stop Hunt",
    definition: "Deliberate move by market makers to trigger stop losses before reversing in true direction.",
    category: "Liquidity",
  },
  {
    term: "Inducement",
    definition:
      "False price move designed to entice retail traders into wrong positions, creating liquidity for institutions.",
    category: "Liquidity",
  },
  {
    term: "Trap Formation",
    definition: "Price structure designed to trap retail traders on wrong side before institutional move begins.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Engineering",
    definition: "How institutions create consolidation and equal highs/lows to build liquidity pools.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Delivery",
    definition: "The process of price moving to capture engineered liquidity.",
    category: "Liquidity",
  },
  {
    term: "Liquidity Raid",
    definition: "Aggressive move to capture multiple liquidity pools quickly.",
    category: "Liquidity",
  },
  {
    term: "Draw on Liquidity",
    definition: "The magnetic pull price has toward significant liquidity pools.",
    category: "Liquidity",
  },
  {
    term: "Reaching for Liquidity",
    definition: "Price extending to capture the next available liquidity pool beyond current structure.",
    category: "Liquidity",
  },
  {
    term: "Targeting Liquidity",
    definition: "Identifying which liquidity pool price is likely to reach next based on institutional bias.",
    category: "Liquidity",
  },
  {
    term: "Opposing Liquidity",
    definition: "Liquidity pool on opposite side of current price action (BSL when price is falling, SSL when rising).",
    category: "Liquidity",
  },

  // Dealing Range
  {
    term: "Dealing Range",
    definition:
      "The full price range from low to high of a significant move within which premium and discount zones exist.",
    category: "Dealing Range",
  },
  {
    term: "Premium",
    definition: "Upper portion of dealing range (typically 50-100%) where price is expensive — favorable for selling.",
    category: "Dealing Range",
  },
  {
    term: "Discount",
    definition: "Lower portion of dealing range (typically 0-50%) where price is cheap — favorable for buying.",
    category: "Dealing Range",
  },
  {
    term: "Equilibrium",
    definition: "The 50% midpoint of a dealing range — neither premium nor discount.",
    category: "Dealing Range",
  },
  {
    term: "Consequent Encroachment (CE)",
    definition: "The 50% level of any range, FVG, or wick — optimal entry point within that structure.",
    category: "Dealing Range",
  },
  {
    term: "Optimal Trade Entry (OTE)",
    definition: "The 62-79% Fibonacci retracement zone of a move — the institutional re-entry sweet spot.",
    category: "Dealing Range",
  },
  {
    term: "Midpoint Theory",
    definition:
      "Concept that price gravitates toward the middle (50%) of ranges, wicks, and imbalances as the market seeks equilibrium.",
    category: "Dealing Range",
  },
  {
    term: "Range Expansion",
    definition: "When price breaks out of consolidation and begins trending with increased volatility.",
    category: "Dealing Range",
  },
  {
    term: "Range Contraction",
    definition: "When price volatility decreases and consolidation tightens before the next expansion.",
    category: "Dealing Range",
  },

  // PD Arrays (Order Blocks, FVG, Breakers, Mitigation, Order Flow)
  {
    term: "Institutional Order Flow",
    definition: "The direction and volume of large institutional orders moving through the market.",
    category: "PD Arrays",
  },
  {
    term: "Market Narrative",
    definition:
      "The story of what institutions are doing based on structure, liquidity, and price delivery — the 'why' behind price movement.",
    category: "PD Arrays",
  },
  {
    term: "Price Delivery",
    definition: "How price moves from one liquidity pool to another, filling imbalances along the way.",
    category: "PD Arrays",
  },
  {
    term: "PD Array",
    definition:
      "Premium or Discount Array — specific price structures where institutions place orders (Order Blocks, FVGs, Breakers, Mitigation Blocks).",
    category: "PD Arrays",
  },
  {
    term: "Premium PD Array",
    definition: "PD Arrays located in the premium zone of dealing range — resistance zones for short entries.",
    category: "PD Arrays",
  },
  {
    term: "Discount PD Array",
    definition: "PD Arrays located in the discount zone of dealing range — support zones for long entries.",
    category: "PD Arrays",
  },
  {
    term: "Institutional Footprints",
    definition:
      "Evidence of institutional activity visible on charts (displacement, FVGs, order blocks, liquidity sweeps).",
    category: "PD Arrays",
  },
  {
    term: "Order Block (OB)",
    definition: "The last opposite-colored candle before a strong directional move — marks where institutions entered.",
    category: "PD Arrays",
  },
  {
    term: "Bullish Order Block",
    definition: "Last bearish candle before strong upward displacement — support zone for long entries.",
    category: "PD Arrays",
  },
  {
    term: "Bearish Order Block",
    definition: "Last bullish candle before strong downward displacement — resistance zone for short entries.",
    category: "PD Arrays",
  },
  {
    term: "Refined Order Block",
    definition: "Using the wick (not full candle body) of the order block for more precise entry levels.",
    category: "PD Arrays",
  },
  {
    term: "Naked Order Block",
    definition: "Order block that has NOT been tested yet (price hasn't returned to it).",
    category: "PD Arrays",
  },
  {
    term: "Covered Order Block",
    definition: "Order block that HAS been tested/touched but still valid — price returned and respected it.",
    category: "PD Arrays",
  },
  {
    term: "Mitigation of Order Block",
    definition: "When price returns to an order block and 'mitigates' it by filling remaining institutional orders.",
    category: "PD Arrays",
  },
  {
    term: "Order Block Validation",
    definition: "Confirmation that an OB is institutional (created by displacement, breaks structure, creates FVG).",
    category: "PD Arrays",
  },
  {
    term: "Order Block Failure",
    definition: "When price closes completely through an order block without reacting — OB is invalidated.",
    category: "PD Arrays",
  },
  {
    term: "High Probability Order Block",
    definition: "Multiple confluence factor সহ OB (FVG overlap, OTE zone, HTF alignment, Kill Zone timing)।",
    category: "PD Arrays",
  },
  {
    term: "Breaker Block",
    definition: "যে order block ভেঙে গিয়ে fail হয়েছে, এখন বিপরীত ভূমিকায় কাজ করছে।",
    category: "PD Arrays",
  },
  {
    term: "Bullish Breaker",
    definition: "Failed bearish order block (upside এ broken) — retest এ support হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Bearish Breaker",
    definition: "Failed bullish order block (downside এ broken) — retest এ resistance হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Breaker Retest",
    definition: "Price broken order block এ নতুন role এ test করতে return করে — key entry opportunity।",
    category: "PD Arrays",
  },
  {
    term: "Failed Order Block",
    definition: "সম্পূর্ণ broken order block — opposite side থেকে retest হলে breaker হয়।",
    category: "PD Arrays",
  },
  {
    term: "Breaker Confirmation",
    definition: "Price former order block এ নতুন opposing role এ react করলে breaker valid confirm হয়।",
    category: "PD Arrays",
  },
  {
    term: "Mitigation Block",
    definition:
      "আংশিকভাবে test হওয়া order block যা সম্পূর্ণ hold করতে ব্যর্থ, price ফিরে আসার জন্য unfilled order রেখে যায়।",
    category: "PD Arrays",
  },
  {
    term: "Bullish Mitigation Block",
    definition: "Test হওয়া bullish order block যেখানে price আবার remaining buy order fill করতে return করে।",
    category: "PD Arrays",
  },
  {
    term: "Bearish Mitigation Block",
    definition: "Test হওয়া bearish order block যেখানে price আবার remaining sell order fill করতে return করে।",
    category: "PD Arrays",
  },
  {
    term: "Mitigation Process",
    definition: "First OB touch এ complete না হওয়া remaining institutional order fill করতে price return করা।",
    category: "PD Arrays",
  },
  {
    term: "Institutional Repricing",
    definition: "Initial reaction এর পর mitigation block এ institution re-enter বা position add করে।",
    category: "PD Arrays",
  },
  {
    term: "Fair Value Gap (FVG)",
    definition: "3-candle price imbalance যেখানে candle 1 ও 3 এর wick overlap করে না — inefficient price delivery।",
    category: "PD Arrays",
  },
  {
    term: "Bullish FVG (BISI)",
    definition: "Buy-Side Imbalance, Sell-Side Inefficiency — বর্তমান price এর নিচে gap যা support হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Bearish FVG (SIBI)",
    definition: "Sell-Side Imbalance, Buy-Side Inefficiency — বর্তমান price এর উপরে gap যা resistance হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Consequent Encroachment (FVG)",
    definition: "যেকোনো FVG এর 50% midpoint — gap এর মধ্যে optimal entry point।",
    category: "PD Arrays",
  },
  {
    term: "Inversion Fair Value Gap (IFVG)",
    definition: "FVG যা সম্পূর্ণ trade through হয়েছে এবং এখন বিপরীত function serve করে।",
    category: "PD Arrays",
  },
  {
    term: "Balanced Price Range (BPR)",
    definition: "FVG এর বিপরীত — price range যেখানে efficient delivery ঘটেছে (কোনো gap নেই)।",
    category: "PD Arrays",
  },
  {
    term: "Inefficiency",
    definition: "যেকোনো area যেখানে price delivery optimal ছিল না — imbalance তৈরি করে যা fill হতে হবে।",
    category: "PD Arrays",
  },
  {
    term: "Rebalancing",
    definition: "Price FVG বা inefficiency fill করতে return করলে — market equilibrium seek করে।",
    category: "PD Arrays",
  },
  {
    term: "FVG Mitigation",
    definition: "Price fair value gap আংশিক বা সম্পূর্ণ fill করতে return করা।",
    category: "PD Arrays",
  },
  {
    term: "Rejection Block",
    definition: "Long wick সহ candle যা একটি level এ strong rejection দেখায় — wick body ভবিষ্যত support/resistance।",
    category: "PD Arrays",
  },
  {
    term: "Volume Imbalance",
    definition:
      "একটি candle এর close ও পরের candle এর open এর মধ্যে gap (একই direction) — aggressive institutional activity।",
    category: "PD Arrays",
  },
  {
    term: "Opening Gap",
    definition: "Previous session close ও current session open এর মধ্যে gap — price fill করতে magnet হিসেবে কাজ করে।",
    category: "PD Arrays",
  },

  // Time & Sessions
  {
    term: "Market Timing",
    definition: "Understanding when institutional traders are most active and price movements most significant.",
    category: "Time & Sessions",
  },
  {
    term: "Time and Price Theory",
    definition:
      "ICT concept that time is more important than price — specific time windows create specific price behaviors algorithmically.",
    category: "Time & Sessions",
  },
  {
    term: "Kill Zone (কিল জোন)",
    definition: "নির্দিষ্ট time window যখন institutional order flow সর্বোচ্চ এবং best trade setup ঘটে।",
    category: "Time & Sessions",
  },
  {
    term: "London Kill Zone",
    definition: "2:00-5:00 AM EST (8:00-11:00 AM London) — primary window for European institutional trading.",
    category: "Time & Sessions",
  },
  {
    term: "New York Kill Zone",
    definition: "7:00-10:00 AM EST (New York AM session) — primary window for US institutional trading.",
    category: "Time & Sessions",
  },
  {
    term: "London Open",
    definition: "3:00 AM EST (8:00 AM London) — high volatility time when London markets open.",
    category: "Time & Sessions",
  },
  {
    term: "New York Open",
    definition: "9:30 AM EST — US stock market open, high impact on indices and correlated markets.",
    category: "Time & Sessions",
  },
  {
    term: "Asian Session",
    definition: "Ranging session (7 PM - 2 AM EST) that creates liquidity pools for London to target.",
    category: "Time & Sessions",
  },
  {
    term: "Session Liquidity",
    definition: "Stop losses and orders accumulated during one session that get targeted by subsequent sessions.",
    category: "Time & Sessions",
  },
  {
    term: "Session High",
    definition: "The highest price reached during a specific trading session — acts as BSL target for next session.",
    category: "Time & Sessions",
  },
  {
    term: "Session Low",
    definition: "The lowest price reached during a specific trading session — acts as SSL target for next session.",
    category: "Time & Sessions",
  },
  {
    term: "Daily Open",
    definition:
      "The opening price of the daily candle (5 PM EST for forex) — significant reference level for intraday bias.",
    category: "Time & Sessions",
  },
  {
    term: "Weekly Open",
    definition: "The opening price of the weekly candle (Sunday 5 PM EST) — key reference for weekly directional bias.",
    category: "Time & Sessions",
  },
  {
    term: "Monthly Open",
    definition: "The opening price of the monthly candle — institutional reference level for monthly narrative.",
    category: "Time & Sessions",
  },
  {
    term: "Judas Swing (জুডাস সুইং)",
    definition: "False breakout at session open that traps traders before price reverses in true direction.",
    category: "Time & Sessions",
  },
  {
    term: "London Judas Swing",
    definition: "Manipulation that occurs at London open (3 AM EST / 8 AM London) — false expansion before true move.",
    category: "Time & Sessions",
  },
  {
    term: "New York Judas Swing",
    definition: "Manipulation that occurs at NY open (9:30 AM EST) — initial fake move before real direction.",
    category: "Time & Sessions",
  },
  {
    term: "False Move",
    definition: "Price movement designed to appear as breakout but is actually manipulation to collect liquidity.",
    category: "Time & Sessions",
  },
  {
    term: "Liquidity Collection Phase",
    definition: "Period when false move is sweeping stops to create liquidity for the real institutional move.",
    category: "Time & Sessions",
  },

  // Models (PO3, MMM, CISD, Execution)
  {
    term: "Power of Three (PO3)",
    definition: "Three-phase institutional cycle: Accumulation → Manipulation → Distribution.",
    category: "Models",
  },
  {
    term: "Accumulation",
    definition: "Phase where institutions quietly build positions in consolidation.",
    category: "Models",
  },
  {
    term: "Manipulation",
    definition: "False move to trap retail traders and sweep liquidity before true move.",
    category: "Models",
  },
  {
    term: "Distribution",
    definition: "The real institutional move that delivers price to target.",
    category: "Models",
  },
  {
    term: "Daily PO3",
    definition:
      "PO3 cycle that plays out over one trading day (Asian = Accumulation, London open = Manipulation, London/NY = Distribution).",
    category: "Models",
  },
  {
    term: "Weekly PO3",
    definition: "PO3 cycle over one trading week (Mon-Tue = Accumulation, Wed = Manipulation, Thu-Fri = Distribution).",
    category: "Models",
  },
  {
    term: "Monthly PO3",
    definition:
      "PO3 cycle over one month (first week = Accumulation, mid-month = Manipulation, final weeks = Distribution).",
    category: "Models",
  },
  {
    term: "Market Maker Buy Model (MMBM)",
    definition: "Institutional accumulation model for long positions (bearish → sweep SSL → reverse bullish).",
    category: "Models",
  },
  {
    term: "Market Maker Sell Model (MMSM)",
    definition: "Institutional distribution model for short positions (bullish → sweep BSL → reverse bearish).",
    category: "Models",
  },
  {
    term: "Buy Program",
    definition: "When institutions are actively accumulating long positions across multiple timeframes.",
    category: "Models",
  },
  {
    term: "Sell Program",
    definition: "When institutions are actively distributing short positions across multiple timeframes.",
    category: "Models",
  },
  {
    term: "Institutional Distribution",
    definition: "Phase where institutions exit accumulated positions at favorable prices — the delivery phase.",
    category: "Models",
  },
  {
    term: "Institutional Accumulation",
    definition: "Phase where institutions build positions before major directional move — hidden within consolidation.",
    category: "Models",
  },
  {
    term: "ICT 2022 Model",
    definition: "Updated trading model focusing on Silver Bullet entries during kill zones with FVG-based execution.",
    category: "Models",
  },
  {
    term: "ICT 2023 Model",
    definition:
      "Refined execution model emphasizing algorithmic price delivery, time-based entries, and narrative confluence.",
    category: "Models",
  },
  {
    term: "ICT Unicorn Model",
    definition:
      "Setup where a breaker block perfectly overlaps with a fair value gap, creating an ultra-high-probability entry zone.",
    category: "Models",
  },
  {
    term: "ICT Silver Bullet",
    definition: "High-probability setup during specific 1-hour windows (3-4 AM, 10-11 AM, 2-3 PM EST) targeting FVGs.",
    category: "Models",
  },
  {
    term: "ICT Turtle Soup",
    definition:
      "Trading the false breakout and reversal at old highs/lows — when price takes out a level and reverses.",
    category: "Models",
  },
  {
    term: "ICT Venom Model",
    definition:
      "Using a specific FVG within a displacement leg as precision entry point — named for its deadly accuracy.",
    category: "Models",
  },
  {
    term: "ICT Scout Sniper Entry",
    definition: "Precision entry at optimal PD Array after confirming institutional direction on LTF.",
    category: "Models",
  },
  {
    term: "ICT OTE Entry",
    definition: "Entering at 62-79% Fibonacci retracement zone after displacement confirms institutional direction.",
    category: "Models",
  },
  {
    term: "ICT MSS Entry",
    definition: "Entering after Market Structure Shift (CHOCH) confirms reversal on lower timeframe.",
    category: "Models",
  },
  {
    term: "ICT FVG Entry",
    definition: "Entering when price returns to fill a Fair Value Gap in alignment with higher timeframe bias.",
    category: "Models",
  },
  {
    term: "CISD",
    definition: "Four-phase institutional cycle: Consolidation → Inducement → Stop-loss hunt → Distribution.",
    category: "Models",
  },
  {
    term: "Consolidation Phase (C)",
    definition: "Range building phase where institutions accumulate positions.",
    category: "Models",
  },
  {
    term: "Inducement Phase (I)",
    definition: "False move to attract retail traders into wrong positions.",
    category: "Models",
  },
  {
    term: "Stop-loss Hunt (S)",
    definition: "Aggressive sweep of stops to create liquidity for real move.",
    category: "Models",
  },
  {
    term: "Distribution Phase (D)",
    definition: "True institutional move that delivers price to target.",
    category: "Models",
  },

  // SMT & Analysis
  {
    term: "SMT Divergence",
    definition: "When correlated instruments fail to make equal highs/lows, revealing institutional bias.",
    category: "SMT & Analysis",
  },
  {
    term: "Bullish SMT",
    definition: "Correlated pair makes lower low while your pair makes higher low — bullish bias.",
    category: "SMT & Analysis",
  },
  {
    term: "Bearish SMT",
    definition: "Correlated pair makes higher high while your pair makes lower high — bearish bias.",
    category: "SMT & Analysis",
  },
  {
    term: "Intermarket Analysis",
    definition: "Analyzing relationships between correlated markets (EUR/USD vs GBP/USD, ES vs NQ, etc.).",
    category: "SMT & Analysis",
  },
  {
    term: "Correlated Markets",
    definition: "Markets that typically move together (e.g., EUR/USD and GBP/USD, Gold and Silver).",
    category: "SMT & Analysis",
  },
  {
    term: "Relative Strength",
    definition: "Which instrument in a correlated pair is stronger — making better highs/lows relative to the other.",
    category: "SMT & Analysis",
  },
  {
    term: "Relative Weakness",
    definition: "Which instrument in a correlated pair is weaker — making worse highs/lows relative to the other.",
    category: "SMT & Analysis",
  },
  {
    term: "Monthly/Weekly/Daily Bias",
    definition: "Directional bias determined from higher timeframe market structure.",
    category: "SMT & Analysis",
  },
  {
    term: "H4 Narrative",
    definition: "The 4-hour timeframe story of institutional order flow — bridges HTF bias and LTF execution.",
    category: "SMT & Analysis",
  },
  {
    term: "H1 Confirmation",
    definition: "1-hour timeframe structure confirming the institutional narrative before dropping to execution TF.",
    category: "SMT & Analysis",
  },
  {
    term: "M15 Entry Model",
    definition: "15-minute timeframe entry framework — identifies precise entry setups within the confirmed narrative.",
    category: "SMT & Analysis",
  },
  {
    term: "M5 Execution",
    definition: "5-minute timeframe execution — the final trigger for trade entry with tight stop loss placement.",
    category: "SMT & Analysis",
  },
  {
    term: "Top Down Analysis",
    definition: "Starting analysis from highest timeframe (Monthly/Weekly) down to execution timeframe (M5/M1).",
    category: "SMT & Analysis",
  },
  {
    term: "HTF (Higher Timeframe)",
    definition: "Larger timeframes that provide overall direction (Daily, 4H, Weekly).",
    category: "SMT & Analysis",
  },
  {
    term: "LTF (Lower Timeframe)",
    definition: "Smaller timeframes used for precise entry execution (M15, M5, M1).",
    category: "SMT & Analysis",
  },
  {
    term: "IPDA (Interbank Price Delivery Algorithm)",
    definition:
      "The algorithmic system interbank dealers use to deliver price efficiently across 20/40/60 day look-back periods.",
    category: "SMT & Analysis",
  },
  {
    term: "Repricing",
    definition: "When institutions re-enter market after partial move, adding to positions at key PD Arrays.",
    category: "SMT & Analysis",
  },
  {
    term: "Institutional Sponsorship",
    definition:
      "Evidence that institutional capital is backing a directional move — confirmed by displacement and structure breaks.",
    category: "SMT & Analysis",
  },
  {
    term: "Delivery State",
    definition: "Current phase of price delivery (expansion, retracement, consolidation).",
    category: "SMT & Analysis",
  },
  {
    term: "Expansion Phase",
    definition: "When price is in active trending move away from consolidation.",
    category: "SMT & Analysis",
  },
  {
    term: "Retracement Phase",
    definition: "When price pulls back into PD Arrays for institutional re-entry.",
    category: "SMT & Analysis",
  },
  {
    term: "Consolidation Phase",
    definition: "When price is range-bound, building liquidity pools for the next expansion.",
    category: "SMT & Analysis",
  },
  {
    term: "Accumulation Cycle",
    definition: "The full cycle of institutional position building across multiple timeframes before markup.",
    category: "SMT & Analysis",
  },
  {
    term: "Distribution Cycle",
    definition: "The full cycle of institutional position unloading across multiple timeframes before markdown.",
    category: "SMT & Analysis",
  },
  {
    term: "Macro Liquidity",
    definition: "Large liquidity pools visible on higher timeframes (weekly/monthly highs and lows).",
    category: "SMT & Analysis",
  },
  {
    term: "Micro Liquidity",
    definition: "Smaller liquidity pools visible on lower timeframes (intraday swing points).",
    category: "SMT & Analysis",
  },
  {
    term: "Algorithmic Price Delivery",
    definition:
      "The concept that price is delivered by algorithms following specific rules for liquidity, imbalance, and time.",
    category: "SMT & Analysis",
  },

  // Risk Management
  {
    term: "Risk Management",
    definition:
      "Systematic approach to position sizing and capital protection — the most critical skill for long-term survival.",
    category: "Risk",
  },
  {
    term: "Position Sizing",
    definition: "Calculating lot size based on fixed percentage account risk (typically 1-2% per trade).",
    category: "Risk",
  },
  {
    term: "Capital Preservation",
    definition:
      "Protecting account from catastrophic losses through proper risk controls — survival first, profits second.",
    category: "Risk",
  },
  {
    term: "Drawdown Control",
    definition:
      "Rules to limit maximum equity decline — typically 5-10% max drawdown before stopping trading to reassess.",
    category: "Risk",
  },
  {
    term: "Daily Loss Limit",
    definition: "Maximum amount willing to lose in a single day (e.g., 2-3% of account) — stop trading when hit.",
    category: "Risk",
  },
  {
    term: "Weekly Loss Limit",
    definition:
      "Maximum amount willing to lose in a single week (e.g., 5% of account) — forces rest and review when hit.",
    category: "Risk",
  },
  {
    term: "Risk Reward Ratio (RR)",
    definition:
      "Ratio of potential profit to potential loss (e.g., 1:3 means risk 1 to make 3). Minimum 1:2 recommended.",
    category: "Risk",
  },
  {
    term: "Trade Management",
    definition:
      "How to handle open positions (scaling, trailing stops, taking profits) — the art of maximizing winners.",
    category: "Risk",
  },
  {
    term: "Scaling In",
    definition: "Adding to a winning position at subsequent PD Arrays while maintaining original risk parameters.",
    category: "Risk",
  },
  {
    term: "Partial Profit Taking",
    definition: "Closing portion of position at targets while letting remainder run — locks in profit, reduces stress.",
    category: "Risk",
  },

  // Professional ICT Mastery
  {
    term: "Daily Narrative",
    definition:
      "Building the story of what institutions are doing today based on HTF bias, session context, and key levels.",
    category: "Professional",
  },
  {
    term: "Weekly Narrative",
    definition:
      "The institutional story unfolding over the week — which liquidity pools are targets, what phase of PO3 we're in.",
    category: "Professional",
  },
  {
    term: "Monthly Narrative",
    definition: "The broader institutional agenda for the month — major liquidity targets and directional bias.",
    category: "Professional",
  },
  {
    term: "Quarterly Theory",
    definition:
      "ICT concept that major market reversals and expansions align with quarterly boundaries (March, June, September, December).",
    category: "Professional",
  },
  {
    term: "Annual Range Theory",
    definition:
      "The concept that each year's high and low are typically set during specific quarters with predictable expansion patterns.",
    category: "Professional",
  },
  {
    term: "Dealing Desk Logic",
    definition:
      "Understanding how institutional dealing desks execute orders — pairing retail flow against institutional positions.",
    category: "Professional",
  },
  {
    term: "Smart Money Narrative",
    definition:
      "The complete institutional story across all timeframes — combining bias, liquidity, time, and PD arrays into one thesis.",
    category: "Professional",
  },
  {
    term: "Market Maker Logic",
    definition:
      "The algorithmic rules market makers follow: engineer liquidity, manipulate price, deliver to institutional targets.",
    category: "Professional",
  },
  {
    term: "Institutional Bias Building",
    definition:
      "The process of building directional conviction through multi-timeframe analysis, SMT, and narrative alignment.",
    category: "Professional",
  },
  {
    term: "Precision Entry Framework",
    definition:
      "Complete system for executing trades with minimal risk: HTF bias → LTF confirmation → Kill Zone timing → PD Array entry.",
    category: "Professional",
  },
  {
    term: "High Probability Trade Framework",
    definition:
      "Framework combining multiple confluence factors: HTF structure + liquidity target + time + PD Array + SMT alignment.",
    category: "Professional",
  },
  {
    term: "Complete ICT Trading Plan",
    definition:
      "Full trading plan covering bias determination, entry models, risk rules, trade management, and journaling.",
    category: "Professional",
  },
  {
    term: "Professional Trade Journaling",
    definition:
      "Systematic recording of trades including screenshots, narrative, entry/exit logic, and psychological state for review.",
    category: "Professional",
  },
  {
    term: "Full ICT Trading System",
    definition:
      "Integration of all ICT concepts into a cohesive personal system — from analysis to execution to management to review.",
    category: "Professional",
  },
];
