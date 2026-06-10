"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen, Filter } from "lucide-react";
import { usePathname } from "next/navigation";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const ictTermsEn: GlossaryTerm[] = [
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

const ictTermsBn: GlossaryTerm[] = [
  // Foundation
  {
    term: "ICT (Inner Circle Trader)",
    definition:
      "Michael J. Huddleston দ্বারা বিকশিত Trading পদ্ধতি যা Institutional Trading Logic এবং Financial Market এ Smart Money কীভাবে কাজ করে তা শেখায়।",
    category: "Foundation",
  },
  {
    term: "Smart Money Concepts (SMC)",
    definition:
      "Trading পদ্ধতি যা বোঝার উপর ফোকাস করে কীভাবে Institution (Bank, Hedge Fund, Market Maker) Price Move করে।",
    category: "Foundation",
  },
  {
    term: "Institutional Trading",
    definition:
      "বড় আর্থিক প্রতিষ্ঠান কিভাবে অর্ডার এক্সিকিউট করে, পজিশন সংগ্রহ করে এবং algorithmic delivery ও liquidity targeting এর মাধ্যমে প্রাইস মুভ করে।",
    category: "Foundation",
  },
  {
    term: "Market Efficiency",
    definition: "মার্কেট premium ও discount zone এর মধ্যে দক্ষভাবে প্রাইস ডেলিভার করতে চায়, পথে imbalance পূরণ করে।",
    category: "Foundation",
  },
  {
    term: "Price Delivery Algorithm (PDA)",
    definition:
      "যে algorithmic system নিয়ন্ত্রণ করে কিভাবে price liquidity pool এর মধ্যে move করে, FVG পূরণ করে এবং institutional target এ ডেলিভার করে।",
    category: "Foundation",
  },
  {
    term: "Market Maker Model",
    definition:
      "কিভাবে market maker (bank, institution) price engineer করে — liquidity accumulate, retail trader দের manipulate, এবং target এ price deliver করে।",
    category: "Foundation",
  },
  {
    term: "How Institutions Move Price",
    definition:
      "Institution liquidity pool target করে, false move engineer করে, এবং multiple timeframe জুড়ে algorithmic order execution ব্যবহার করে price move করে।",
    category: "Foundation",
  },
  {
    term: "Retail vs Smart Money",
    definition:
      "Retail trader price এ react করে; Smart Money price engineer করে। Retail সেই liquidity provide করে যা institution তাদের বড় order fill করতে ব্যবহার করে।",
    category: "Foundation",
  },
  {
    term: "Understanding Liquidity",
    definition:
      "মূল concept যে সকল price movement resting order (stop loss, pending order) access করার প্রয়োজনে driven।",
    category: "Foundation",
  },

  // Market Structure
  {
    term: "Market Structure",
    definition: "Swing high ও swing low এর framework যা trend direction ও market character নির্ধারণ করে।",
    category: "Market Structure",
  },
  {
    term: "Bullish Market Structure",
    definition: "Higher high ও higher low এর সিরিজ যা upward institutional bias ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "Bearish Market Structure",
    definition: "Lower high ও lower low এর সিরিজ যা downward institutional bias ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "Range Market Structure",
    definition:
      "Price নির্দিষ্ট high ও low এর মধ্যে consolidate করে clear directional bias ছাড়া — accumulation বা distribution zone।",
    category: "Market Structure",
  },
  {
    term: "Swing High",
    definition: "Price এর একটি শিখর যার উভয় পাশে lower high আছে, resistance ও সম্ভাব্য reversal point চিহ্নিত করে।",
    category: "Market Structure",
  },
  {
    term: "Swing Low",
    definition: "Price এর একটি গর্ত যার উভয় পাশে higher low আছে, support ও সম্ভাব্য reversal point চিহ্নিত করে।",
    category: "Market Structure",
  },
  {
    term: "Internal Structure",
    definition:
      "Higher timeframe move এর মধ্যে lower timeframe market structure (যেমন H4 trend এর মধ্যে M5 structure)।",
    category: "Market Structure",
  },
  {
    term: "External Structure",
    definition: "Higher timeframe market structure যা সামগ্রিক market direction ও bias প্রদান করে।",
    category: "Market Structure",
  },
  {
    term: "BOS (Break of Structure)",
    definition:
      "যখন price একটি সাম্প্রতিক swing high (bullish) বা swing low (bearish) ভেঙে যায়, trend continuation ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "MSS (Market Structure Shift)",
    definition:
      "Change of Character (CHOCH) এর সমান — যখন market structure bullish থেকে bearish বা তার বিপরীতে transition হয়।",
    category: "Market Structure",
  },
  {
    term: "CHOCH (Change of Character)",
    definition: "যখন price বিদ্যমান trend এর বিপরীত direction এ structure break করে, সম্ভাব্য reversal ইঙ্গিত করে।",
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
      "যখন price বর্তমান market structure সম্মান করে এবং নতুন higher high (bullish) বা lower low (bearish) তৈরি করে।",
    category: "Market Structure",
  },
  {
    term: "Trend Reversal",
    definition: "যখন market structure shift হয় এবং price নতুন structure সহ বিপরীত direction এ move শুরু করে।",
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
    term: "Liquidity (লিকুইডিটি)",
    definition:
      "Price level এর উপরে/নিচে resting stop loss ও pending order যা institution order execution এর জন্য target করে।",
    category: "Liquidity",
  },
  {
    term: "Buy Side Liquidity (BSL)",
    definition: "Swing high, equal high বা resistance level এর উপরে থাকা stop loss ও buy stop।",
    category: "Liquidity",
  },
  {
    term: "Sell Side Liquidity (SSL)",
    definition: "Swing low, equal low বা support level এর নিচে থাকা stop loss ও sell stop।",
    category: "Liquidity",
  },
  {
    term: "Resting Liquidity",
    definition: "Market এ inactive ভাবে trigger হওয়ার অপেক্ষায় থাকা stop loss ও pending order।",
    category: "Liquidity",
  },
  {
    term: "Engineered Liquidity",
    definition: "Smart Money দ্বারা consolidation ও equal high/low এর মাধ্যমে ইচ্ছাকৃতভাবে তৈরি liquidity pool।",
    category: "Liquidity",
  },
  {
    term: "External Liquidity",
    definition: "বর্তমান price range এর বাইরে resting liquidity (high এর উপরে বা low এর নিচে)।",
    category: "Liquidity",
  },
  {
    term: "Internal Liquidity",
    definition: "বর্তমান consolidation বা range এর মধ্যে resting liquidity (imbalance, gap)।",
    category: "Liquidity",
  },
  {
    term: "Relative Equal Highs",
    definition: "প্রায় একই price level এ multiple swing high (minor variance acceptable), উপরে BSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Relative Equal Lows",
    definition: "প্রায় একই price level এ multiple swing low (minor variance acceptable), নিচে SSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Equal Highs (EQH)",
    definition: "দুই বা ততোধিক high ঠিক একই বা প্রায় একই price level এ, উপরে BSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Equal Lows (EQL)",
    definition: "দুই বা ততোধিক low ঠিক একই বা প্রায় একই price level এ, নিচে SSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Pool",
    definition: "Resting stop loss ও order এর ঘনীভূত এলাকা, সাধারণত swing point বা equal high/low তে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Void",
    definition: "Chart এ কোনো significant liquidity নেই এমন area — FVG এর সমান।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Run",
    definition: "যখন price aggressively একটি liquidity pool এর দিকে move করে stop sweep ও order execute করতে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Grab",
    definition: "একটি level এর উপরে/নিচে liquidity capture করার দ্রুত move, সাধারণত তাৎক্ষণিক reversal অনুসরণ করে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Sweep",
    definition: "Stop trigger করতে price একটি level অতিক্রম করে (chart এ wick তৈরি করে), তারপর reverse করে।",
    category: "Liquidity",
  },
  {
    term: "Stop Hunt",
    definition: "সত্যিকার direction এ reverse করার আগে stop loss trigger করতে market maker দের ইচ্ছাকৃত move।",
    category: "Liquidity",
  },
  {
    term: "Inducement",
    definition:
      "Retail trader দের ভুল position এ প্রলুব্ধ করতে ডিজাইন করা false price move, institution এর জন্য liquidity তৈরি করে।",
    category: "Liquidity",
  },
  {
    term: "Trap Formation",
    definition: "Institutional move শুরু হওয়ার আগে retail trader দের ভুল পাশে trap করতে ডিজাইন করা price structure।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Engineering",
    definition: "Institution কিভাবে consolidation ও equal high/low তৈরি করে liquidity pool build করে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Delivery",
    definition: "Engineered liquidity capture করতে price move করার প্রক্রিয়া।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Raid",
    definition: "দ্রুত একাধিক liquidity pool capture করার aggressive move।",
    category: "Liquidity",
  },
  {
    term: "Draw on Liquidity",
    definition: "Significant liquidity pool এর দিকে price এর magnetic pull।",
    category: "Liquidity",
  },
  {
    term: "Reaching for Liquidity",
    definition: "বর্তমান structure এর বাইরে পরবর্তী available liquidity pool capture করতে price extend করা।",
    category: "Liquidity",
  },
  {
    term: "Targeting Liquidity",
    definition: "Institutional bias এর উপর ভিত্তি করে price পরবর্তী কোন liquidity pool reach করবে তা identify করা।",
    category: "Liquidity",
  },
  {
    term: "Opposing Liquidity",
    definition: "বর্তমান price action এর opposite side এ liquidity pool (price fall করলে BSL, rise করলে SSL)।",
    category: "Liquidity",
  },

  // Dealing Range
  {
    term: "Dealing Range",
    definition:
      "একটি significant move এর low থেকে high পর্যন্ত full price range যার মধ্যে premium ও discount zone বিদ্যমান।",
    category: "Dealing Range",
  },
  {
    term: "Premium",
    definition: "Dealing range এর upper portion (সাধারণত 50-100%) যেখানে price ব্যয়বহুল — selling এর জন্য অনুকূল।",
    category: "Dealing Range",
  },
  {
    term: "Discount",
    definition: "Dealing range এর lower portion (সাধারণত 0-50%) যেখানে price সস্তা — buying এর জন্য অনুকূল।",
    category: "Dealing Range",
  },
  {
    term: "Equilibrium",
    definition: "Dealing range এর 50% midpoint — premium ও discount কোনটিই নয়।",
    category: "Dealing Range",
  },
  {
    term: "Consequent Encroachment (CE)",
    definition: "যেকোনো range, FVG বা wick এর 50% level — সেই structure এর মধ্যে optimal entry point।",
    category: "Dealing Range",
  },
  {
    term: "Optimal Trade Entry (OTE)",
    definition: "একটি move এর 62-79% Fibonacci retracement zone — institutional re-entry sweet spot।",
    category: "Dealing Range",
  },
  {
    term: "Midpoint Theory",
    definition: "Range, wick ও imbalance এর মাঝখানে (50%) price আকৃষ্ট হয় — market equilibrium seek করে।",
    category: "Dealing Range",
  },
  {
    term: "Range Expansion",
    definition: "যখন price consolidation থেকে breakout করে এবং বাড়তি volatility সহ trending শুরু করে।",
    category: "Dealing Range",
  },
  {
    term: "Range Contraction",
    definition: "যখন price volatility কমে ও consolidation tight হয় পরবর্তী expansion এর আগে।",
    category: "Dealing Range",
  },

  // PD Arrays
  {
    term: "Institutional Order Flow",
    definition: "Market এ বড় institutional order এর direction ও volume।",
    category: "PD Arrays",
  },
  {
    term: "Market Narrative",
    definition: "Structure, liquidity ও price delivery এর উপর ভিত্তি করে institution কী করছে তার গল্প।",
    category: "PD Arrays",
  },
  {
    term: "Price Delivery",
    definition: "কিভাবে price এক liquidity pool থেকে অন্যটিতে move করে, পথে imbalance fill করে।",
    category: "PD Arrays",
  },
  {
    term: "PD Array",
    definition:
      "Premium বা Discount Array — নির্দিষ্ট price structure যেখানে institution order place করে (Order Block, FVG, Breaker, Mitigation Block)।",
    category: "PD Arrays",
  },
  {
    term: "Premium PD Array",
    definition: "Dealing range এর premium zone এ অবস্থিত PD Array — short entry এর resistance zone।",
    category: "PD Arrays",
  },
  {
    term: "Discount PD Array",
    definition: "Dealing range এর discount zone এ অবস্থিত PD Array — long entry এর support zone।",
    category: "PD Arrays",
  },
  {
    term: "Institutional Footprints",
    definition: "Chart এ দৃশ্যমান institutional activity এর প্রমাণ (displacement, FVG, order block, liquidity sweep)।",
    category: "PD Arrays",
  },
  {
    term: "Order Block (OB)",
    definition: "Strong directional move এর আগে শেষ বিপরীত-রঙের candle — যেখানে institution enter করেছে চিহ্নিত করে।",
    category: "PD Arrays",
  },
  {
    term: "Bullish Order Block",
    definition: "Strong upward displacement এর আগে শেষ bearish candle — long entry এর support zone।",
    category: "PD Arrays",
  },
  {
    term: "Bearish Order Block",
    definition: "Strong downward displacement এর আগে শেষ bullish candle — short entry এর resistance zone।",
    category: "PD Arrays",
  },
  {
    term: "Refined Order Block",
    definition: "Order block এর wick (full candle body নয়) ব্যবহার করে আরো precise entry level।",
    category: "PD Arrays",
  },
  {
    term: "Naked Order Block",
    definition: "Order block যা এখনো test হয়নি (price ফিরে আসেনি)।",
    category: "PD Arrays",
  },
  {
    term: "Covered Order Block",
    definition: "Order block যা test/touch হয়েছে কিন্তু এখনো valid — price return করে respect করেছে।",
    category: "PD Arrays",
  },
  {
    term: "Mitigation of Order Block",
    definition: "When price returns to an order block and 'mitigates' it by filling remaining institutional orders.",
    category: "PD Arrays",
  },
  {
    term: "Order Block Validation",
    definition: "OB institutional কিনা তার confirmation (displacement দ্বারা তৈরি, structure break, FVG create করে)।",
    category: "PD Arrays",
  },
  {
    term: "Order Block Failure",
    definition: "যখন price কোনো reaction ছাড়াই order block সম্পূর্ণ অতিক্রম করে — OB invalidate হয়।",
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
    definition: "কখন institutional trader সবচেয়ে active এবং price movement সবচেয়ে significant তা বোঝা।",
    category: "Time & Sessions",
  },
  {
    term: "Time and Price Theory",
    definition:
      "ICT concept যে time price এর চেয়ে বেশি গুরুত্বপূর্ণ — নির্দিষ্ট time window algorithmically নির্দিষ্ট price behavior তৈরি করে।",
    category: "Time & Sessions",
  },
  {
    term: "Kill Zone (কিল জোন)",
    definition: "নির্দিষ্ট time window যখন institutional order flow সর্বোচ্চ এবং best trade setup ঘটে।",
    category: "Time & Sessions",
  },
  {
    term: "London Kill Zone",
    definition: "2:00-5:00 AM EST (8:00-11:00 AM London) — European institutional trading এর primary window।",
    category: "Time & Sessions",
  },
  {
    term: "New York Kill Zone",
    definition: "7:00-10:00 AM EST (New York AM session) — US institutional trading এর primary window।",
    category: "Time & Sessions",
  },
  {
    term: "London Open",
    definition: "3:00 AM EST (8:00 AM London) — London market open হলে high volatility time।",
    category: "Time & Sessions",
  },
  {
    term: "New York Open",
    definition: "9:30 AM EST — US stock market open, index ও correlated market এ high impact।",
    category: "Time & Sessions",
  },
  {
    term: "Asian Session",
    definition: "Ranging session (7 PM - 2 AM EST) যা London target করার জন্য liquidity pool তৈরি করে।",
    category: "Time & Sessions",
  },
  {
    term: "Session Liquidity",
    definition: "একটি session এ accumulated stop loss ও order যা পরবর্তী session দ্বারা target হয়।",
    category: "Time & Sessions",
  },
  {
    term: "Session High",
    definition: "একটি নির্দিষ্ট trading session এ সর্বোচ্চ price — পরবর্তী session এর BSL target।",
    category: "Time & Sessions",
  },
  {
    term: "Session Low",
    definition: "একটি নির্দিষ্ট trading session এ সর্বনিম্ন price — পরবর্তী session এর SSL target।",
    category: "Time & Sessions",
  },
  {
    term: "Daily Open",
    definition: "Daily candle এর opening price (forex এ 5 PM EST) — intraday bias এর significant reference level।",
    category: "Time & Sessions",
  },
  {
    term: "Weekly Open",
    definition: "Weekly candle এর opening price (Sunday 5 PM EST) — weekly directional bias এর key reference।",
    category: "Time & Sessions",
  },
  {
    term: "Monthly Open",
    definition: "Monthly candle এর opening price — monthly narrative এর institutional reference level।",
    category: "Time & Sessions",
  },
  {
    term: "Judas Swing (জুডাস সুইং)",
    definition: "Session open এ false breakout যা trader দের trap করে price সত্যিকার direction এ reverse করার আগে।",
    category: "Time & Sessions",
  },
  {
    term: "London Judas Swing",
    definition: "London open (3 AM EST / 8 AM London) এ ঘটা manipulation — true move এর আগে false expansion।",
    category: "Time & Sessions",
  },
  {
    term: "New York Judas Swing",
    definition: "NY open (9:30 AM EST) এ ঘটা manipulation — real direction এর আগে initial fake move।",
    category: "Time & Sessions",
  },
  {
    term: "False Move",
    definition: "Breakout হিসেবে দেখা price movement কিন্তু আসলে liquidity collect করার manipulation।",
    category: "Time & Sessions",
  },
  {
    term: "Liquidity Collection Phase",
    definition: "যে period এ false move stop sweep করে real institutional move এর জন্য liquidity তৈরি করে।",
    category: "Time & Sessions",
  },

  // Models
  {
    term: "Power of Three (PO3)",
    definition: "তিন-পর্যায় institutional cycle: Accumulation → Manipulation → Distribution।",
    category: "Models",
  },
  {
    term: "Accumulation (অ্যাকুমুলেশন)",
    definition: "যে phase এ institution নীরবে consolidation এ position তৈরি করে।",
    category: "Models",
  },
  {
    term: "Manipulation (ম্যানিপুলেশন)",
    definition: "Retail trader দের trap ও true move এর আগে liquidity sweep করার false move।",
    category: "Models",
  },
  {
    term: "Distribution (ডিস্ট্রিবিউশন)",
    definition: "আসল institutional move যা target এ price deliver করে।",
    category: "Models",
  },
  {
    term: "Daily PO3",
    definition:
      "একটি trading day এ PO3 cycle (Asian = Accumulation, London open = Manipulation, London/NY = Distribution)।",
    category: "Models",
  },
  {
    term: "Weekly PO3",
    definition: "এক trading week এ PO3 cycle (Mon-Tue = Accumulation, Wed = Manipulation, Thu-Fri = Distribution)।",
    category: "Models",
  },
  {
    term: "Monthly PO3",
    definition:
      "এক month এ PO3 cycle (প্রথম সপ্তাহ = Accumulation, মাঝামাঝি = Manipulation, শেষ সপ্তাহ = Distribution)।",
    category: "Models",
  },
  {
    term: "Market Maker Buy Model (MMBM)",
    definition: "Long position এর institutional accumulation model (bearish → SSL sweep → bullish reverse)।",
    category: "Models",
  },
  {
    term: "Market Maker Sell Model (MMSM)",
    definition: "Short position এর institutional distribution model (bullish → BSL sweep → bearish reverse)।",
    category: "Models",
  },
  {
    term: "Buy Program",
    definition: "যখন institution actively multiple timeframe জুড়ে long position accumulate করছে।",
    category: "Models",
  },
  {
    term: "Sell Program",
    definition: "যখন institution actively multiple timeframe জুড়ে short position distribute করছে।",
    category: "Models",
  },
  {
    term: "Institutional Distribution",
    definition: "যে phase এ institution favorable price এ accumulated position exit করে — delivery phase।",
    category: "Models",
  },
  {
    term: "Institutional Accumulation",
    definition: "Major directional move এর আগে institution position build করার phase — consolidation এর মধ্যে hidden।",
    category: "Models",
  },
  {
    term: "ICT 2022 Model",
    definition: "Kill zone এ Silver Bullet entry ও FVG-based execution focus করা updated trading model।",
    category: "Models",
  },
  {
    term: "ICT 2023 Model",
    definition:
      "Algorithmic price delivery, time-based entry ও narrative confluence emphasize করা refined execution model।",
    category: "Models",
  },
  {
    term: "ICT Unicorn Model",
    definition:
      "Setup where a breaker block perfectly overlaps with a fair value gap, creating an ultra-high-probability entry zone।",
    category: "Models",
  },
  {
    term: "ICT Silver Bullet (সিলভার বুলেট)",
    definition: "নির্দিষ্ট 1-hour window এ (3-4 AM, 10-11 AM, 2-3 PM EST) FVG target করা high-probability setup।",
    category: "Models",
  },
  {
    term: "ICT Turtle Soup",
    definition: "False breakout ও reversal trade — পুরনো high/low নিলে breakout fail হলে opposite trade।",
    category: "Models",
  },
  {
    term: "ICT Venom Model",
    definition: "Displacement leg এর মধ্যে নির্দিষ্ট FVG precision entry point হিসেবে ব্যবহার।",
    category: "Models",
  },
  {
    term: "ICT Scout Sniper Entry",
    definition: "Institutional direction confirm করার পর optimal PD Array তে precision entry।",
    category: "Models",
  },
  {
    term: "ICT OTE Entry",
    definition: "Displacement institutional direction confirm করার পর 62-79% Fibonacci retracement zone এ entry।",
    category: "Models",
  },
  {
    term: "ICT MSS Entry",
    definition: "Lower timeframe এ Market Structure Shift (CHOCH) reversal confirm করার পর entry।",
    category: "Models",
  },
  {
    term: "ICT FVG Entry",
    definition: "Higher timeframe bias alignment এ price Fair Value Gap fill করতে return করলে entry।",
    category: "Models",
  },
  {
    term: "CISD",
    definition: "চার-পর্যায় institutional cycle: Consolidation → Inducement → Stop-loss hunt → Distribution।",
    category: "Models",
  },
  {
    term: "Consolidation Phase (C)",
    definition: "Range building phase যেখানে institution position accumulate করে।",
    category: "Models",
  },
  {
    term: "Inducement Phase (I)",
    definition: "Retail trader দের ভুল position এ attract করার false move।",
    category: "Models",
  },
  {
    term: "Stop-loss Hunt (S)",
    definition: "Real move এর জন্য liquidity তৈরি করতে aggressive stop sweep।",
    category: "Models",
  },
  {
    term: "Distribution Phase (D)",
    definition: "Target এ price deliver করা true institutional move।",
    category: "Models",
  },

  // SMT & Analysis
  {
    term: "SMT Divergence",
    definition: "যখন correlated instrument সমান high/low তৈরি করতে ব্যর্থ হয়, institutional bias প্রকাশ করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Bullish SMT",
    definition: "Correlated pair lower low তৈরি করে যখন আপনার pair higher low তৈরি করে — bullish bias।",
    category: "SMT & Analysis",
  },
  {
    term: "Bearish SMT",
    definition: "Correlated pair higher high তৈরি করে যখন আপনার pair lower high তৈরি করে — bearish bias।",
    category: "SMT & Analysis",
  },
  {
    term: "Intermarket Analysis",
    definition: "Correlated market এর relationship analyze করা (EUR/USD vs GBP/USD, ES vs NQ ইত্যাদি)।",
    category: "SMT & Analysis",
  },
  {
    term: "Correlated Markets",
    definition: "যে market সাধারণত একসাথে move করে (যেমন EUR/USD ও GBP/USD, Gold ও Silver)।",
    category: "SMT & Analysis",
  },
  {
    term: "Relative Strength",
    definition: "Correlated pair এ কোন instrument stronger — অন্যটির তুলনায় better high/low তৈরি করছে।",
    category: "SMT & Analysis",
  },
  {
    term: "Relative Weakness",
    definition: "Correlated pair এ কোন instrument weaker — অন্যটির তুলনায় worse high/low তৈরি করছে।",
    category: "SMT & Analysis",
  },
  {
    term: "Monthly/Weekly/Daily Bias",
    definition: "Higher timeframe market structure থেকে নির্ধারিত directional bias।",
    category: "SMT & Analysis",
  },
  {
    term: "H4 Narrative",
    definition: "The 4-hour timeframe story of institutional order flow — bridges HTF bias and LTF execution।",
    category: "SMT & Analysis",
  },
  {
    term: "H1 Confirmation",
    definition: "Execution TF তে drop করার আগে institutional narrative confirm করা 1-hour timeframe structure।",
    category: "SMT & Analysis",
  },
  {
    term: "M15 Entry Model",
    definition: "15-minute timeframe entry framework — confirmed narrative এর মধ্যে precise entry setup identify করে।",
    category: "SMT & Analysis",
  },
  {
    term: "M5 Execution",
    definition: "5-minute timeframe execution — tight stop loss placement সহ trade entry এর final trigger।",
    category: "SMT & Analysis",
  },
  {
    term: "Top Down Analysis",
    definition: "সর্বোচ্চ timeframe (Monthly/Weekly) থেকে execution timeframe (M5/M1) পর্যন্ত analysis শুরু করা।",
    category: "SMT & Analysis",
  },
  {
    term: "HTF (Higher Timeframe)",
    definition: "বড় timeframe যা সামগ্রিক direction provide করে (Daily, 4H, Weekly)।",
    category: "SMT & Analysis",
  },
  {
    term: "LTF (Lower Timeframe)",
    definition: "ছোট timeframe যা precise entry execution এ ব্যবহৃত (M15, M5, M1)।",
    category: "SMT & Analysis",
  },
  {
    term: "IPDA (Interbank Price Delivery Algorithm)",
    definition:
      "Interbank dealer দের 20/40/60 day look-back period জুড়ে price efficiently deliver করার algorithmic system।",
    category: "SMT & Analysis",
  },
  {
    term: "Repricing",
    definition: "Partial move এর পর key PD Array তে institution market এ re-enter করে position add করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Institutional Sponsorship",
    definition:
      "Institutional capital directional move back করছে তার evidence — displacement ও structure break দ্বারা confirmed।",
    category: "SMT & Analysis",
  },
  {
    term: "Delivery State",
    definition: "Price delivery এর বর্তমান phase (expansion, retracement, consolidation)।",
    category: "SMT & Analysis",
  },
  {
    term: "Expansion Phase",
    definition: "যখন price consolidation থেকে দূরে active trending move এ।",
    category: "SMT & Analysis",
  },
  {
    term: "Retracement Phase",
    definition: "যখন price institutional re-entry এর জন্য PD Array তে pull back করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Consolidation Phase",
    definition: "যখন price range-bound, পরবর্তী expansion এর জন্য liquidity pool build করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Accumulation Cycle",
    definition: "Markup এর আগে multiple timeframe জুড়ে institutional position building এর full cycle।",
    category: "SMT & Analysis",
  },
  {
    term: "Distribution Cycle",
    definition: "Markdown এর আগে multiple timeframe জুড়ে institutional position unloading এর full cycle।",
    category: "SMT & Analysis",
  },
  {
    term: "Macro Liquidity",
    definition: "Higher timeframe এ visible বড় liquidity pool (weekly/monthly high ও low)।",
    category: "SMT & Analysis",
  },
  {
    term: "Micro Liquidity",
    definition: "Lower timeframe এ visible ছোট liquidity pool (intraday swing point)।",
    category: "SMT & Analysis",
  },
  {
    term: "Algorithmic Price Delivery",
    definition:
      "The concept that price is delivered by algorithms following specific rules for liquidity, imbalance, and time।",
    category: "SMT & Analysis",
  },

  // Risk
  {
    term: "Risk Management (রিস্ক ম্যানেজমেন্ট)",
    definition:
      "Position sizing ও capital protection এর systematic approach — long-term survival এর সবচেয়ে critical skill।",
    category: "Risk",
  },
  {
    term: "Position Sizing (পজিশন সাইজিং)",
    definition: "Fixed percentage account risk (সাধারণত প্রতি trade এ 1-2%) এর উপর ভিত্তি করে lot size calculate করা।",
    category: "Risk",
  },
  {
    term: "Capital Preservation",
    definition:
      "Proper risk control এর মাধ্যমে catastrophic loss থেকে account রক্ষা করা — survival first, profit second।",
    category: "Risk",
  },
  {
    term: "Drawdown Control",
    definition: "Maximum equity decline সীমিত করার rule — সাধারণত 5-10% max drawdown এ trading stop করে reassess।",
    category: "Risk",
  },
  {
    term: "Daily Loss Limit",
    definition: "একটি single day এ maximum loss limit (যেমন account এর 2-3%) — hit হলে trading stop।",
    category: "Risk",
  },
  {
    term: "Weekly Loss Limit",
    definition: "একটি single week এ maximum loss limit (যেমন account এর 5%) — hit হলে rest ও review force করে।",
    category: "Risk",
  },
  {
    term: "Risk Reward Ratio (RR)",
    definition: "সম্ভাব্য profit ও সম্ভাব্য loss এর ratio (যেমন 1:3 মানে 1 risk করে 3 earn)। Minimum 1:2 recommended।",
    category: "Risk",
  },
  {
    term: "Trade Management",
    definition: "Open position handle করা (scaling, trailing stop, profit taking) — winner maximize করার art।",
    category: "Risk",
  },
  {
    term: "Scaling In",
    definition: "Original risk parameter maintain করে subsequent PD Array তে winning position এ add করা।",
    category: "Risk",
  },
  {
    term: "Partial Profit Taking",
    definition: "Target এ position এর একটি অংশ close করে বাকিটা run করতে দেওয়া — profit lock, stress reduce।",
    category: "Risk",
  },

  // Professional
  {
    term: "Daily Narrative",
    definition: "HTF bias, session context ও key level এর উপর ভিত্তি করে আজ institution কী করছে তার গল্প build করা।",
    category: "Professional",
  },
  {
    term: "Weekly Narrative",
    definition: "সপ্তাহ জুড়ে institutional story — কোন liquidity pool target, PO3 এর কোন phase এ আছি।",
    category: "Professional",
  },
  {
    term: "Monthly Narrative",
    definition: "মাসের broader institutional agenda — major liquidity target ও directional bias।",
    category: "Professional",
  },
  {
    term: "Quarterly Theory",
    definition:
      "ICT concept যে major market reversal ও expansion quarterly boundary (March, June, September, December) এ align হয়।",
    category: "Professional",
  },
  {
    term: "Annual Range Theory",
    definition: "প্রতি বছরের high ও low নির্দিষ্ট quarter এ set হয় predictable expansion pattern সহ।",
    category: "Professional",
  },
  {
    term: "Dealing Desk Logic",
    definition:
      "Institutional dealing desk কিভাবে order execute করে — retail flow institutional position এর against pair করে।",
    category: "Professional",
  },
  {
    term: "Smart Money Narrative",
    definition:
      "সকল timeframe জুড়ে complete institutional story — bias, liquidity, time ও PD array একটি thesis এ combine।",
    category: "Professional",
  },
  {
    term: "Market Maker Logic",
    definition:
      "Market maker দের algorithmic rule: liquidity engineer, price manipulate, institutional target এ deliver।",
    category: "Professional",
  },
  {
    term: "Institutional Bias Building",
    definition:
      "Multi-timeframe analysis, SMT ও narrative alignment এর মাধ্যমে directional conviction build করার process।",
    category: "Professional",
  },
  {
    term: "Precision Entry Framework",
    definition:
      "Minimal risk এ trade execute করার complete system: HTF bias → LTF confirmation → Kill Zone timing → PD Array entry।",
    category: "Professional",
  },
  {
    term: "High Probability Trade Framework",
    definition:
      "Framework combining multiple confluence factors: HTF structure + liquidity target + time + PD Array + SMT alignment।",
    category: "Professional",
  },
  {
    term: "Complete ICT Trading Plan",
    definition:
      "Bias determination, entry model, risk rule, trade management ও journaling cover করা full trading plan।",
    category: "Professional",
  },
  {
    term: "Professional Trade Journaling",
    definition:
      "Screenshot, narrative, entry/exit logic ও psychological state সহ trade systematic recording — review এর জন্য।",
    category: "Professional",
  },
  {
    term: "Full ICT Trading System",
    definition:
      "সকল ICT concept এক cohesive personal system এ integration — analysis থেকে execution থেকে management থেকে review।",
    category: "Professional",
  },
];

const categories = [
  "All",
  "Foundation",
  "Market Structure",
  "Liquidity",
  "Dealing Range",
  "PD Arrays",
  "Time & Sessions",
  "Models",
  "SMT & Analysis",
  "Risk",
  "Professional",
];

const categoriesBn: Record<string, string> = {
  All: "সব",
  Foundation: "ফাউন্ডেশন",
  "Market Structure": "মার্কেট স্ট্রাকচার",
  Liquidity: "লিকুইডিটি",
  "Dealing Range": "ডিলিং রেঞ্জ",
  "PD Arrays": "PD অ্যারে",
  "Time & Sessions": "টাইম ও সেশন",
  Models: "মডেল",
  "SMT & Analysis": "SMT ও অ্যানালাইসিস",
  Risk: "রিস্ক",
  Professional: "প্রফেশনাল",
};

const categoryColors: Record<string, string> = {
  Foundation: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Market Structure": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Liquidity: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Dealing Range": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "PD Arrays": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Time & Sessions": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Models: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "SMT & Analysis": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Risk: "bg-red-500/10 text-red-400 border-red-500/20",
  Professional: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const categoryIcons: Record<string, string> = {
  Foundation: "🏛️",
  "Market Structure": "📐",
  Liquidity: "💧",
  "Dealing Range": "📊",
  "PD Arrays": "🧱",
  "Time & Sessions": "⏰",
  Models: "🎯",
  "SMT & Analysis": "🔍",
  Risk: "🛡️",
  Professional: "👑",
};

export function ICTGlossaryCards() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const pathname = usePathname();
  const lang = pathname?.split("/")[1] || "en";
  const terms = lang === "bn" ? ictTermsBn : ictTermsEn;

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
    <div className="mt-8">
      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: lang === "bn" ? "মোট শব্দ" : "Total Terms", value: terms.length, icon: "📚" },
          { label: lang === "bn" ? "বিভাগ" : "Categories", value: categories.length - 1, icon: "📂" },
          { label: lang === "bn" ? "ফিল্টার ফলাফল" : "Filtered", value: filtered.length, icon: "🔎" },
          { label: lang === "bn" ? "অক্ষর গ্রুপ" : "Letter Groups", value: grouped.length, icon: "🔤" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-3 text-center">
            <div className="text-lg">{stat.icon}</div>
            <div className="text-xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === "bn" ? "শব্দ বা সংজ্ঞা খুঁজুন..." : "Search terms or definitions..."}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground outline-none placeholder:text-muted-foreground focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/30 transition-all"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-accent-green/10 text-accent-green border-accent-green/30 shadow-sm shadow-accent-green/10"
                : "bg-card text-muted-foreground border-border hover:border-accent-green/20 hover:text-foreground"
            }`}
          >
            {cat !== "All" && <span className="mr-1.5">{categoryIcons[cat]}</span>}
            {lang === "bn" ? categoriesBn[cat] : cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-4 flex items-center gap-2">
        <Filter size={14} className="text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          {lang === "bn"
            ? `${filtered.length}টি ফলাফল দেখাচ্ছে`
            : `Showing ${filtered.length} of ${terms.length} terms`}
        </p>
      </div>

      {/* Terms grouped by letter */}
      {grouped.map(([letter, items]) => (
        <div key={letter} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green font-bold text-lg">
              {letter}
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">
              {items.length} {lang === "bn" ? "টি" : items.length === 1 ? "term" : "terms"}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item.term}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent-green/30 hover:shadow-lg hover:shadow-accent-green/5"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-accent-green transition-colors text-sm">
                    {item.term}
                  </h3>
                  {item.category && (
                    <span
                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                        categoryColors[item.category] || "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {categoryIcons[item.category]} {item.category}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-16 text-center rounded-xl border border-border bg-card">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-lg text-muted-foreground">
            {lang === "bn" ? "কোনো শব্দ পাওয়া যায়নি।" : "No terms found."}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "bn" ? "অন্য সার্চ টার্ম বা বিভাগ চেষ্টা করুন" : "Try a different search term or category"}
          </p>
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {lang === "bn" ? "📖 দ্রুত রেফারেন্স" : "📖 Quick Reference"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">
              {lang === "bn" ? "মার্কেট স্ট্রাকচার:" : "Market Structure:"}
            </span>
            <span className="text-muted-foreground ml-1">BOS, CHOCH, MSS, Swing High, Swing Low</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "লিকুইডিটি:" : "Liquidity:"}</span>
            <span className="text-muted-foreground ml-1">BSL, SSL, EQH, EQL, Sweep, Stop Hunt</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "PD অ্যারে:" : "PD Arrays:"}</span>
            <span className="text-muted-foreground ml-1">OB, FVG, Breaker, Mitigation, IFVG, BPR</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "জোন:" : "Zones:"}</span>
            <span className="text-muted-foreground ml-1">Premium, Discount, OTE, Equilibrium, CE</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "টাইম:" : "Time:"}</span>
            <span className="text-muted-foreground ml-1">Kill Zones, Session Liquidity, Judas Swing</span>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <span className="font-medium text-foreground">{lang === "bn" ? "মডেল:" : "Models:"}</span>
            <span className="text-muted-foreground ml-1">PO3, CISD, MMBM, MMSM, Silver Bullet</span>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {lang === "bn" ? "🎓 লার্নিং পাথ" : "🎓 Learning Path"}
        </h3>
        <div className="space-y-3">
          {[
            {
              level: lang === "bn" ? "বিগিনার" : "Beginner",
              desc:
                lang === "bn"
                  ? "Foundation, Market Structure, Basic Liquidity দিয়ে শুরু করুন"
                  : "Start with Foundation, Market Structure, Basic Liquidity",
              color: "bg-green-500/10 text-green-400 border-green-500/20",
            },
            {
              level: lang === "bn" ? "ইন্টারমিডিয়েট" : "Intermediate",
              desc:
                lang === "bn"
                  ? "PD Arrays (OB, FVG, Breaker), Premium/Discount, OTE মাস্টার করুন"
                  : "Master PD Arrays (OB, FVG, Breaker), Premium/Discount, OTE",
              color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
            },
            {
              level: lang === "bn" ? "অ্যাডভান্সড" : "Advanced",
              desc:
                lang === "bn"
                  ? "PO3, CISD, SMT, Kill Zones, Session Analysis শিখুন"
                  : "Learn PO3, CISD, SMT, Kill Zones, Session Analysis",
              color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
            },
            {
              level: lang === "bn" ? "প্রফেশনাল" : "Professional",
              desc:
                lang === "bn"
                  ? "IPDA, Market Narrative, Complete Trading System মাস্টার করুন"
                  : "Master IPDA, Market Narrative, Complete Trading System",
              color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
            },
          ].map((path) => (
            <div key={path.level} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className={`shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold ${path.color}`}>
                {path.level}
              </span>
              <span className="text-sm text-muted-foreground">{path.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
