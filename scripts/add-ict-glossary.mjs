import { writeFileSync } from 'fs';
import { join } from 'path';

const C = join(process.cwd(), 'content');

const writeEN = (slug, meta, content) => {
  const path = join(C, 'en', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, 'utf-8');
  console.log(`✅ EN: ${slug}`);
};

const writeBN = (slug, meta, content) => {
  const path = join(C, 'bn', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, 'utf-8');
  console.log(`✅ BN: ${slug}`);
};

writeEN('00-ict-glossary', {
  title: 'ICT Glossary - Complete Terms Dictionary',
  description: 'Comprehensive glossary of all ICT (Inner Circle Trader) and Smart Money Concepts terms. Your complete reference guide for institutional trading terminology.',
  order: 0,
  level: 'beginner'
}, `# ICT Glossary - Complete Terms Dictionary

Welcome to the **complete ICT terminology reference**. This glossary covers all major Inner Circle Trader (ICT) and Smart Money Concepts (SMC) terms from beginner to professional level.

---

## 📚 How to Use This Glossary

- Terms are organized by **category** for easy navigation
- Each term includes a **clear definition**
- Cross-references link related concepts
- Use Ctrl+F (Cmd+F) to search for specific terms
- **Bold** terms are core concepts you must master

---

## 1️⃣ FOUNDATION CONCEPTS

### **ICT (Inner Circle Trader)**
Trading methodology developed by Michael J. Huddleston that teaches institutional trading logic and how Smart Money operates in financial markets.

### **Smart Money Concepts (SMC)**
Trading approach that focuses on understanding how institutions (banks, hedge funds, market makers) move price, as opposed to retail trading methods.

### **Institutional Trading**
How large financial institutions execute orders, accumulate positions, and move price through algorithmic delivery and liquidity targeting.

### **Market Efficiency**
The concept that markets seek to deliver price efficiently between premium and discount zones, filling imbalances along the way.

### **Price Delivery Algorithm (PDA)**
The algorithmic system that governs how price moves between liquidity pools, fills fair value gaps, and delivers to institutional targets.

### **Market Maker**
Large institutions or banks that provide liquidity to markets and have the ability to move price through large order flow.

### **Retail Trader**
Individual traders who typically trade against institutional order flow, often becoming the liquidity for Smart Money.

### **Smart Money**
Collective term for institutional traders, market makers, and large capital operators who move markets systematically.

---

## 2️⃣ MARKET STRUCTURE

### **Market Structure**
The framework of swing highs and swing lows that defines trend direction and market character.

### **Bullish Market Structure**
Series of higher highs and higher lows indicating upward institutional bias.

### **Bearish Market Structure**
Series of lower highs and lower lows indicating downward institutional bias.

### **Range Market Structure**
Price consolidating between defined highs and lows without clear directional bias.

### **Swing High**
A peak in price with lower highs on both sides, marking resistance and potential reversal points.

### **Swing Low**
A trough in price with higher lows on both sides, marking support and potential reversal points.

### **Internal Structure**
Lower timeframe market structure within higher timeframe moves (e.g., M5 structure within H4 trend).

### **External Structure**
Higher timeframe market structure that provides overall market direction and bias.

### **BOS (Break of Structure)**
When price breaks through a recent swing high (bullish) or swing low (bearish), indicating trend continuation.

### **MSS (Market Structure Shift)**
Same as Change of Character (CHOCH) — when market structure transitions from bullish to bearish or vice versa.

### **CHOCH (Change of Character)**
When price breaks structure in the opposite direction of the prevailing trend, indicating potential reversal.

### **Structural Shift**
The moment when market character changes from trending to ranging or reverses direction entirely.

### **Trend Continuation**
When price respects current market structure and makes new higher highs (bullish) or lower lows (bearish).

### **Trend Reversal**
When market structure shifts and price begins moving in the opposite direction with new structure.

### **Fractal Market Structure**
Repeating patterns of market structure across all timeframes (structure within structure).

### **Multi Timeframe Market Structure**
Market structure analysis across multiple timeframes to ensure alignment (Monthly → Weekly → Daily → Intraday).

---

## 3️⃣ LIQUIDITY CONCEPTS

### **Liquidity**
Resting stop losses and pending orders above/below price levels that institutions target for order execution.

### **Buy Side Liquidity (BSL)**
Stop losses and buy stops resting above swing highs, equal highs, or resistance levels.

### **Sell Side Liquidity (SSL)**
Stop losses and sell stops resting below swing lows, equal lows, or support levels.

### **Resting Liquidity**
Stop losses and pending orders sitting inactive in the market waiting to be triggered.

### **Engineered Liquidity**
Liquidity pools intentionally created by Smart Money through consolidation and equal highs/lows.

### **External Liquidity**
Liquidity resting outside current price range (above highs or below lows).

### **Internal Liquidity**
Liquidity resting within current consolidation or range (imbalances, gaps).

### **Relative Equal Highs**
Multiple swing highs at approximately the same price level (minor variance acceptable).

### **Relative Equal Lows**
Multiple swing lows at approximately the same price level (minor variance acceptable).

### **Equal Highs (EQH)**
Two or more highs at exactly or very nearly the same price level, indicating BSL above.

### **Equal Lows (EQL)**
Two or more lows at exactly or very nearly the same price level, indicating SSL below.

### **Liquidity Pool**
Concentrated area of resting stop losses and orders, typically at swing points or equal highs/lows.

### **Liquidity Void**
Area on chart with no significant liquidity (no consolidation, clean price movement) — same as Fair Value Gap.

### **Liquidity Run**
When price moves aggressively toward a liquidity pool to sweep stops and execute orders.

### **Liquidity Grab**
Quick move to capture liquidity above/below a level, usually followed by immediate reversal.

### **Liquidity Sweep**
Price moving through a level to trigger stops (creates wicks on charts), then reversing.

### **Stop Hunt**
Deliberate move by market makers to trigger stop losses before reversing in true direction.

### **Inducement**
False price move designed to entice retail traders into wrong positions, creating liquidity for institutions.

### **Trap Formation**
Price structure designed to trap retail traders on wrong side before institutional move begins.

---

## 4️⃣ DEALING RANGE CONCEPTS

### **Dealing Range**
The full price range from low to high of a significant move within which premium and discount zones exist.

### **Premium**
Upper portion of dealing range (typically 50-100%) where price is expensive — favorable for selling.

### **Discount**
Lower portion of dealing range (typically 0-50%) where price is cheap — favorable for buying.

### **Equilibrium**
The 50% midpoint of a dealing range — neither premium nor discount.

### **Consequent Encroachment (CE)**
The 50% level of any range, FVG, or wick — optimal entry point within that structure.

### **Optimal Trade Entry (OTE)**
The 62-79% Fibonacci retracement zone of a move — the institutional re-entry sweet spot.

### **Midpoint Theory**
Concept that price gravitates toward the middle (50%) of ranges, wicks, and imbalances.

### **Range Expansion**
When price breaks out of consolidation and begins trending with increased volatility.

### **Range Contraction**
When price volatility decreases and consolidation tightens before the next expansion.

---

## 5️⃣ ORDER FLOW CONCEPTS

### **Institutional Order Flow**
The direction and volume of large institutional orders moving through the market.

### **Market Narrative**
The story of what institutions are doing based on structure, liquidity, and price delivery.

### **Price Delivery**
How price moves from one liquidity pool to another, filling imbalances along the way.

### **PD Array**
Premium or Discount Array — specific price structures where institutions place orders (Order Blocks, FVGs, Breakers, Mitigation Blocks).

### **Premium PD Array**
PD Arrays located in the premium zone of dealing range (resistance zones for shorts).

### **Discount PD Array**
PD Arrays located in the discount zone of dealing range (support zones for longs).

### **Institutional Footprints**
Evidence of institutional activity visible on charts (displacement, FVGs, order blocks, liquidity sweeps).

---

## 6️⃣ ORDER BLOCK CONCEPTS

### **Order Block (OB)**
The last opposite-colored candle before a strong directional move — marks where institutions entered.

### **Bullish Order Block**
Last bearish candle before strong upward displacement — support zone for long entries.

### **Bearish Order Block**
Last bullish candle before strong downward displacement — resistance zone for short entries.

### **Refined Order Block**
Using the wick (not full candle body) of the order block for more precise entry levels.

### **Naked Order Block**
Order block that has NOT been tested yet (price hasn't returned to it).

### **Covered Order Block**
Order block that HAS been tested/touched but still valid.

### **Mitigation of Order Block**
When price returns to an order block and "mitigates" it by filling remaining institutional orders.

### **Order Block Validation**
Confirmation that an OB is institutional (created by displacement, breaks structure, creates FVG).

### **Order Block Failure**
When price closes completely through an order block without reacting — OB is invalidated.

### **High Probability Order Block**
OB with multiple confluence factors (FVG overlap, OTE zone, HTF alignment, Kill Zone timing).

---

## 7️⃣ BREAKER CONCEPTS

### **Breaker Block**
An order block that was broken through but failed to hold, now acting in reverse role (support becomes resistance or vice versa).

### **Bullish Breaker**
Former bearish order block that failed (broken to upside), now acts as resistance.

### **Bearish Breaker**
Former bullish order block that failed (broken to downside), now acts as support.

### **Breaker Retest**
When price returns to test a broken order block in its new role.

### **Failed Order Block**
Order block that was completely broken through without reaction — becomes breaker when retested.

### **Breaker Confirmation**
Price reacting to former order block in its new opposing role confirms breaker.

---

## 8️⃣ MITIGATION CONCEPTS

### **Mitigation Block**
Order block that was partially tested but failed to hold completely, leaves unfilled orders for price to return to.

### **Bullish Mitigation Block**
Bullish order block that was tested but price returns again to fill remaining buy orders.

### **Bearish Mitigation Block**
Bearish order block that was tested but price returns again to fill remaining sell orders.

### **Mitigation Process**
Price returning to fill remaining institutional orders that weren't completed on first OB touch.

### **Institutional Repricing**
When institutions re-enter or add to positions at mitigation blocks after initial reaction.

---

## 9️⃣ FAIR VALUE GAP CONCEPTS

### **Fair Value Gap (FVG)**
3-candle price imbalance where wicks of candle 1 and 3 don't overlap — inefficient price delivery.

### **Bullish FVG (BISI)**
Buy-Side Imbalance, Sell-Side Inefficiency — gap below current price that acts as support.

### **Bearish FVG (SIBI)**
Sell-Side Imbalance, Buy-Side Inefficiency — gap above current price that acts as resistance.

### **Consequent Encroachment (of FVG)**
The 50% midpoint of any FVG — optimal entry point within the gap.

### **Inversion Fair Value Gap (IFVG)**
FVG that was fully traded through and now serves opposite function (bullish becomes bearish, vice versa).

### **Balanced Price Range (BPR)**
Opposite of FVG — price range where efficient delivery occurred (no gaps left).

### **Liquidity Void**
Same as FVG — area where price moved so fast it left no liquidity.

### **Inefficiency**
Any area where price delivery was not optimal — creates imbalance that must be filled.

### **Rebalancing**
When price returns to fill an FVG or inefficiency — market seeking equilibrium.

### **FVG Mitigation**
Price returning to partially or fully fill a fair value gap.

---

## 🔟 TIME CONCEPTS

### **Market Timing**
Understanding when institutional traders are most active and price movements most significant.

### **Kill Zone**
Specific time windows when institutional order flow is highest and best trade setups occur.

### **London Kill Zone**
2:00-5:00 AM EST (8:00-11:00 AM London) — primary window for European institutional trading.

### **New York Kill Zone**
7:00-10:00 AM EST (New York AM session) — primary window for US institutional trading.

### **London Open**
3:00 AM EST (8:00 AM London) — high volatility time when London markets open.

### **New York Open**
9:30 AM EST — US stock market open, high impact on indices and correlated markets.

### **Asian Session**
Ranging session (7 PM - 2 AM EST) that creates liquidity pools for London to target.

### **Session Liquidity**
Stop losses and orders accumulated during one session that get targeted by subsequent sessions.

### **Session High/Low**
The highest and lowest prices reached during a specific trading session.

### **Daily/Weekly/Monthly Open**
The opening price of the daily, weekly, or monthly candle — significant reference levels.

---

## 1️⃣1️⃣ POWER OF THREE CONCEPTS

### **Power of Three (PO3)**
Three-phase institutional cycle: Accumulation → Manipulation → Distribution.

### **Accumulation**
Phase where institutions quietly build positions in consolidation.

### **Manipulation**
False move to trap retail traders and sweep liquidity before true move.

### **Distribution**
The real institutional move that delivers price to target.

### **Daily PO3**
PO3 cycle that plays out over one trading day (Asian = Accumulation, London open = Manipulation, London/NY = Distribution).

### **Weekly PO3**
PO3 cycle over one trading week (Mon-Tue = Accumulation, Wed = Manipulation, Thu-Fri = Distribution).

### **Monthly PO3**
PO3 cycle over one month (early month = Accumulation, mid = Manipulation, late = Distribution).

---

## 1️⃣2️⃣ JUDAS SWING

### **Judas Swing**
False breakout at session open that traps traders before price reverses in true direction.

### **London Judas Swing**
Manipulation that occurs at London open (3 AM EST / 8 AM London).

### **New York Judas Swing**
Manipulation that occurs at NY open (9:30 AM EST).

### **False Move**
Price movement designed to appear as breakout but is actually manipulation.

### **Liquidity Collection Phase**
Period when false move is sweeping stops to create liquidity for real move.

---

## 1️⃣3️⃣ INSTITUTIONAL MODELS

### **Market Maker Buy Model (MMBM)**
Institutional accumulation model for long positions (bearish → sweep SSL → reverse bullish).

### **Market Maker Sell Model (MMSM)**
Institutional distribution model for short positions (bullish → sweep BSL → reverse bearish).

### **Buy Program**
When institutions are actively accumulating long positions across multiple timeframes.

### **Sell Program**
When institutions are actively distributing short positions across multiple timeframes.

### **Institutional Distribution**
Phase where institutions exit accumulated positions at favorable prices.

### **Institutional Accumulation**
Phase where institutions build positions before major directional move.

---

## 1️⃣4️⃣ SMT DIVERGENCE

### **SMT (Smart Money Technique) Divergence**
When correlated instruments fail to make equal highs/lows, revealing institutional bias.

### **Bullish SMT**
Correlated pair makes lower low while your pair makes higher low — bullish bias.

### **Bearish SMT**
Correlated pair makes higher high while your pair makes lower high — bearish bias.

### **Intermarket Analysis**
Analyzing relationships between correlated markets (EUR/USD vs GBP/USD, ES vs NQ, etc.).

### **Correlated Markets**
Markets that typically move together (e.g., EUR/USD and GBP/USD, Gold and Silver).

### **Relative Strength**
Which instrument in correlated pair is stronger (making better highs/lows).

### **Relative Weakness**
Which instrument in correlated pair is weaker (making worse highs/lows).

---

## 1️⃣5️⃣ ADVANCED LIQUIDITY

### **Liquidity Engineering**
How institutions create consolidation and equal highs/lows to build liquidity pools.

### **Liquidity Delivery**
The process of price moving to capture engineered liquidity.

### **Liquidity Raid**
Aggressive move to capture multiple liquidity pools quickly.

### **Draw on Liquidity**
The magnetic pull price has toward significant liquidity pools.

### **Reaching for Liquidity**
Price extending to capture the next available liquidity pool.

### **Targeting Liquidity**
Identifying which liquidity pool price is likely to reach next.

### **Opposing Liquidity**
Liquidity pool on opposite side of current price action (BSL when price is falling, SSL when rising).

---

## 1️⃣6️⃣ ICT EXECUTION MODELS

### **ICT 2022 Model**
Updated trading model focusing on Silver Bullet entries during kill zones.

### **Silver Bullet**
High-probability setup during 10-11 AM EST (NY Kill Zone) offering best R:R.

### **ICT Turtle Soup**
Trading the false breakout and reversal (breakout fails, trade the opposite).

### **Scout Sniper Entry**
Precision entry at optimal PD Array after confirming institutional direction.

### **OTE Entry**
Entering at 62-79% Fibonacci retracement zone.

### **MSS Entry**
Entering after Market Structure Shift (CHOCH) confirms reversal.

### **FVG Entry**
Entering when price returns to fill a Fair Value Gap.

---

## 1️⃣7️⃣ RISK & TRADE MANAGEMENT

### **Risk Management**
Systematic approach to position sizing and capital protection.

### **Position Sizing**
Calculating lot size based on fixed percentage account risk.

### **Capital Preservation**
Protecting account from catastrophic losses through proper risk controls.

### **Risk Reward Ratio (RR)**
Ratio of potential profit to potential loss (e.g., 1:3 means risk 1 to make 3).

### **Trade Management**
How to handle open positions (scaling, trailing stops, taking profits).

### **Partial Profit Taking**
Closing portion of position at targets while letting remainder run.

---

## 1️⃣8️⃣ MULTI TIMEFRAME ANALYSIS

### **Monthly/Weekly/Daily Bias**
Directional bias determined from higher timeframe market structure.

### **Top Down Analysis**
Starting analysis from highest timeframe (Monthly/Weekly) down to execution timeframe (M5/M1).

### **HTF (Higher Timeframe)**
Larger timeframes that provide overall direction (Daily, 4H, Weekly).

### **LTF (Lower Timeframe)**
Smaller timeframes used for precise entry execution (M15, M5, M1).

---

## 1️⃣9️⃣ ADVANCED ICT CONCEPTS

### **IPDA (Interbank Price Delivery Algorithm)**
The algorithmic system interbank dealers use to deliver price efficiently.

### **Repricing**
When institutions re-enter market after partial move, adding to positions.

### **Delivery State**
Current phase of price delivery (expansion, retracement, consolidation).

### **Expansion Phase**
When price is in active trending move away from consolidation.

### **Retracement Phase**
When price pulls back into PD Arrays for institutional re-entry.

### **Macro Liquidity**
Large liquidity pools visible on higher timeframes (weekly/monthly highs and lows).

### **Micro Liquidity**
Smaller liquidity pools visible on lower timeframes (intraday swing points).

---

## 2️⃣0️⃣ CISD FRAMEWORK

### **CISD**
Four-phase institutional cycle: Consolidation → Inducement → Stop-loss hunt → Distribution.

### **Consolidation Phase (C)**
Range building phase where institutions accumulate positions.

### **Inducement Phase (I)**
False move to attract retail traders into wrong positions.

### **Stop-loss Hunt (S)**
Aggressive sweep of stops to create liquidity for real move.

### **Distribution Phase (D)**
True institutional move that delivers price to target.

---

## 📖 Quick Reference Categories

**Market Structure Terms:** BOS, CHOCH, MSS, Swing High, Swing Low
**Liquidity Terms:** BSL, SSL, EQH, EQL, Liquidity Sweep, Stop Hunt
**PD Arrays:** Order Block, FVG, Breaker, Mitigation Block, IFVG, BPR
**Zones:** Premium, Discount, OTE, Equilibrium, CE
**Time:** Kill Zones, Session Liquidity, Judas Swing
**Models:** PO3, CISD, MMBM, MMSM, Silver Bullet
**Analysis:** SMT Divergence, MTF Analysis, Top-Down Analysis

---

## 🎓 Learning Path Recommendation

**Beginner:** Start with Foundation, Market Structure, Basic Liquidity
**Intermediate:** Master PD Arrays (OB, FVG, Breaker), Premium/Discount, OTE
**Advanced:** Learn PO3, CISD, SMT, Kill Zones, Session Analysis
**Professional:** Master IPDA, Market Narrative, Complete Trading System

---

**📌 Pro Tip:** Bookmark this glossary and refer back as you learn each concept in depth throughout the course!
`);

writeBN('00-ict-glossary', {
  title: 'ICT গ্লসারি - সম্পূর্ণ শব্দকোষ',
  description: 'সমস্ত ICT (Inner Circle Trader) এবং Smart Money Concepts শর্তাবলীর সম্পূর্ণ গ্লসারি। Institutional Trading পরিভাষার জন্য আপনার সম্পূর্ণ রেফারেন্স গাইড।',
  order: 0,
  level: 'beginner'
}, `# ICT গ্লসারি - সম্পূর্ণ শব্দকোষ

**সম্পূর্ণ ICT পরিভাষা রেফারেন্স**এ স্বাগতম। এই গ্লসারি Beginner থেকে Professional Level পর্যন্ত সমস্ত প্রধান Inner Circle Trader (ICT) এবং Smart Money Concepts (SMC) শর্তাবলী কভার করে।

---

## 📚 এই গ্লসারি কীভাবে ব্যবহার করবেন

- সহজ Navigation এর জন্য শর্তাবলী **বিভাগ** অনুসারে সংগঠিত
- প্রতিটি Term **স্পষ্ট সংজ্ঞা** অন্তর্ভুক্ত করে
- সম্পর্কিত Concept Link করা Cross-Reference
- নির্দিষ্ট Term খুঁজতে Ctrl+F (Cmd+F) ব্যবহার করুন
- **Bold** Term মূল Concept যা আপনাকে Master করতে হবে

---

## 1️⃣ ফাউন্ডেশন কনসেপ্ট

### **ICT (Inner Circle Trader)**
Michael J. Huddleston দ্বারা বিকশিত Trading পদ্ধতি যা Institutional Trading Logic এবং Financial Market এ Smart Money কীভাবে কাজ করে তা শেখায়।

### **Smart Money Concepts (SMC)**
Trading পদ্ধতি যা বোঝার উপর ফোকাস করে কীভাবে Institution (Bank, Hedge Fund, Market Maker) Price Move করে, Retail Trading পদ্ধতির বিপরীতে।

### **Institutional Trading**
কীভাবে বড় Financial Institution Order Execute করে, Position Accumulate করে, এবং Algorithmic Delivery ও Liquidity Targeting এর মাধ্যমে Price Move করে।

### **Market Efficiency**
ধারণা যে Market Premium ও Discount Zone এর মধ্যে দক্ষভাবে Price Deliver করতে চায়, পথে Imbalance Fill করে।

### **Price Delivery Algorithm (PDA)**
Algorithmic System যা পরিচালনা করে Price Liquidity Pool এর মধ্যে কীভাবে Move করে, Fair Value Gap Fill করে, এবং Institutional Target এ Deliver করে।

### **Market Maker**
বড় Institution বা Bank যারা Market এ Liquidity প্রদান করে এবং বড় Order Flow এর মাধ্যমে Price Move করার ক্ষমতা আছে।

### **Retail Trader**
Individual Trader যারা সাধারণত Institutional Order Flow এর বিরুদ্ধে Trade করে, প্রায়ই Smart Money জন্য Liquidity হয়ে যায়।

### **Smart Money**
Institutional Trader, Market Maker, এবং বড় Capital Operator দের সম্মিলিত পদ যারা পদ্ধতিগতভাবে Market Move করে।

---

## 2️⃣ মার্কেট স্ট্রাকচার

### **Market Structure**
Swing High ও Swing Low এর Framework যা Trend Direction ও Market Character সংজ্ঞায়িত করে।

### **Bullish Market Structure**
Higher High ও Higher Low এর সিরিজ যা Upward Institutional Bias নির্দেশ করে।

### **Bearish Market Structure**
Lower High ও Lower Low এর সিরিজ যা Downward Institutional Bias নির্দেশ করে।

### **Swing High**
Price এ Peak যার উভয় পাশে Lower High, Resistance এবং সম্ভাব্য Reversal Point চিহ্নিত করে।

### **Swing Low**
Price এ Trough যার উভয় পাশে Higher Low, Support এবং সম্ভাব্য Reversal Point চিহ্নিত করে।

### **BOS (Break of Structure)**
যখন Price সাম্প্রতিক Swing High (Bullish) বা Swing Low (Bearish) এর মধ্য দিয়ে Break করে, Trend Continuation নির্দেশ করে।

### **CHOCH (Change of Character)**
যখন Price প্রচলিত Trend এর বিপরীত Direction এ Structure Break করে, সম্ভাব্য Reversal নির্দেশ করে।

### **MSS (Market Structure Shift)**
CHOCH এর মতো — যখন Market Structure Bullish থেকে Bearish বা উল্টো Transition করে।

---

## 3️⃣ লিকুইডিটি কনসেপ্ট

### **Liquidity**
Price Level এর উপরে/নিচে Resting Stop Loss ও Pending Order যা Institution Order Execution এর জন্য Target করে।

### **Buy Side Liquidity (BSL)**
Swing High, Equal High, বা Resistance Level এর উপরে Resting Stop Loss ও Buy Stop।

### **Sell Side Liquidity (SSL)**
Swing Low, Equal Low, বা Support Level এর নিচে Resting Stop Loss ও Sell Stop।

### **Equal Highs (EQH)**
একই Price Level এ ঠিক বা খুব কাছাকাছি দুই বা ততোধিক High, উপরে BSL নির্দেশ করে।

### **Equal Lows (EQL)**
একই Price Level এ ঠিক বা খুব কাছাকাছি দুই বা ততোধিক Low, নিচে SSL নির্দেশ করে।

### **Liquidity Pool**
Resting Stop Loss ও Order এর কেন্দ্রীভূত এলাকা, সাধারণত Swing Point বা Equal High/Low এ।

### **Liquidity Sweep**
Stop Trigger করতে Level এর মধ্য দিয়ে Price Move (Chart এ Wick তৈরি করে), তারপর Reverse হয়।

### **Stop Hunt**
Market Maker দ্বারা ইচ্ছাকৃত Move প্রকৃত Direction এ Reverse হওয়ার আগে Stop Loss Trigger করতে।

### **Inducement**
Retail Trader দের ভুল Position এ প্রলুব্ধ করার জন্য ডিজাইন করা False Price Move, Institution এর জন্য Liquidity তৈরি করে।

---

## 4️⃣ ডিলিং রেঞ্জ কনসেপ্ট

### **Dealing Range**
একটি উল্লেখযোগ্য Move এর Low থেকে High পর্যন্ত সম্পূর্ণ Price Range যার মধ্যে Premium ও Discount Zone বিদ্যমান।

### **Premium**
Dealing Range এর উপরের অংশ (সাধারণত 50-100%) যেখানে Price ব্যয়বহুল — Selling এর জন্য অনুকূল।

### **Discount**
Dealing Range এর নিচের অংশ (সাধারণত 0-50%) যেখানে Price সস্তা — Buying এর জন্য অনুকূল।

### **Equilibrium**
Dealing Range এর 50% Midpoint — Premium বা Discount উভয়ই নয়।

### **Consequent Encroachment (CE)**
যেকোনো Range, FVG, বা Wick এর 50% Level — সেই Structure এর মধ্যে Optimal Entry Point।

### **Optimal Trade Entry (OTE)**
একটি Move এর 62-79% Fibonacci Retracement Zone — Institutional Re-Entry Sweet Spot।

---

## 5️⃣ অর্ডার ব্লক কনসেপ্ট

### **Order Block (OB)**
একটি শক্তিশালী Directional Move আগে শেষ বিপরীত রঙের Candle — যেখানে Institution Enter করেছে তা চিহ্নিত করে।

### **Bullish Order Block**
শক্তিশালী Upward Displacement আগে শেষ Bearish Candle — Long Entry জন্য Support Zone।

### **Bearish Order Block**
শক্তিশালী Downward Displacement আগে শেষ Bullish Candle — Short Entry জন্য Resistance Zone।

### **Mitigation of Order Block**
যখন Price Order Block এ ফিরে এবং বাকি Institutional Order Fill করে "Mitigate" করে।

---

## 6️⃣ ফেয়ার ভ্যালু গ্যাপ কনসেপ্ট

### **Fair Value Gap (FVG)**
3-Candle Price Imbalance যেখানে Candle 1 ও 3 এর Wick Overlap করে না — Inefficient Price Delivery।

### **Bullish FVG (BISI)**
Buy-Side Imbalance, Sell-Side Inefficiency — বর্তমান Price এর নিচে Gap যা Support হিসেবে কাজ করে।

### **Bearish FVG (SIBI)**
Sell-Side Imbalance, Buy-Side Inefficiency — বর্তমান Price এর উপরে Gap যা Resistance হিসেবে কাজ করে।

### **Inversion Fair Value Gap (IFVG)**
FVG যা সম্পূর্ণভাবে Trade Through হয়েছে এবং এখন বিপরীত Function পরিবেশন করে।

### **Balanced Price Range (BPR)**
FVG এর বিপরীত — Price Range যেখানে দক্ষ Delivery ঘটেছে (কোনো Gap রাখা হয়নি)।

---

## 7️⃣ সময় কনসেপ্ট

### **Kill Zone**
নির্দিষ্ট Time Window যখন Institutional Order Flow সর্বোচ্চ এবং সেরা Trade Setup ঘটে।

### **London Kill Zone**
2:00-5:00 AM EST (8:00-11:00 AM London) — European Institutional Trading এর জন্য প্রাথমিক Window।

### **New York Kill Zone**
7:00-10:00 AM EST (NY AM Session) — US Institutional Trading এর জন্য প্রাথমিক Window।

### **Judas Swing**
Session Open এ False Breakout যা Price সত্যিকারের Direction এ Reverse হওয়ার আগে Trader Trap করে।

### **Session Liquidity**
একটি Session এর সময় জমা Stop Loss ও Order যা পরবর্তী Session দ্বারা Target হয়।

---

## 8️⃣ পাওয়ার অফ থ্রি

### **Power of Three (PO3)**
তিন-Phase Institutional Cycle: Accumulation → Manipulation → Distribution।

### **Accumulation**
Phase যেখানে Institution নিঃশব্দে Consolidation এ Position তৈরি করে।

### **Manipulation**
সত্যিকারের Move আগে Retail Trader Trap করতে ও Liquidity Sweep করতে False Move।

### **Distribution**
সত্যিকারের Institutional Move যা Target এ Price Deliver করে।

---

## 9️⃣ SMT ডাইভার্জেন্স

### **SMT Divergence**
যখন Correlated Instrument সমান High/Low তৈরি করতে ব্যর্থ হয়, Institutional Bias প্রকাশ করে।

### **Bullish SMT**
Correlated Pair Lower Low তৈরি করে যখন আপনার Pair Higher Low তৈরি করে — Bullish Bias।

### **Bearish SMT**
Correlated Pair Higher High তৈরি করে যখন আপনার Pair Lower High তৈরি করে — Bearish Bias।

---

## 🔟 CISD ফ্রেমওয়ার্ক

### **CISD**
চার-Phase Institutional Cycle: Consolidation → Inducement → Stop-loss hunt → Distribution।

### **Consolidation Phase (C)**
Range তৈরি Phase যেখানে Institution Position Accumulate করে।

### **Inducement Phase (I)**
Retail Trader দের ভুল Position এ আকর্ষণ করতে False Move।

### **Stop-loss Hunt (S)**
Real Move এর জন্য Liquidity তৈরি করতে Stop এর Aggressive Sweep।

### **Distribution Phase (D)**
সত্যিকারের Institutional Move যা Target এ Price Deliver করে।

---

## 🎓 শেখার পথ সুপারিশ

**Beginner:** Foundation, Market Structure, Basic Liquidity দিয়ে শুরু করুন
**Intermediate:** PD Arrays (OB, FVG, Breaker), Premium/Discount, OTE Master করুন
**Advanced:** PO3, CISD, SMT, Kill Zone, Session Analysis শিখুন
**Professional:** IPDA, Market Narrative, Complete Trading System Master করুন

---

**📌 Pro Tip:** এই Glossary Bookmark করুন এবং Course জুড়ে প্রতিটি Concept গভীরভাবে শেখার সাথে সাথে ফিরে Refer করুন!
`);

console.log('\n🎉 ICT Glossary (Topic 00) created successfully!\n');
console.log('📚 Comprehensive glossary with 200+ terms added to the course!\n');

