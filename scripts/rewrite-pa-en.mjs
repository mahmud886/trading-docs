import { writeFileSync } from 'fs';
import { join } from 'path';
const dir = 'content/en/price-action';
const files = {
  'entry-models.mdx': {
    title: 'Entry Models — Complete Guide',
    desc: 'Master precise trade entry techniques. Learn limit orders, market orders, OB entries, FVG entries, and confirmation-based entry models.',
    level: 'intermediate', order: 15,
    content: `
## What are Entry Models?
Entry models are **systematic approaches** for entering trades with precision. A good entry model gives you a tight stop loss, optimal risk-to-reward, and high probability. The entry is the final step AFTER identifying bias, structure, and setup.
<Callout type="info" title="Entry is the Easy Part">
If your bias (HTF direction) and setup (key level + confluence) are correct, the entry becomes mechanical. The entry model is simply the last confirmation before pulling the trigger.
</Callout>
---
## Types of Entry Models
### 1. Aggressive Entry (Market Order)
Enter immediately when conditions are met. No waiting for additional confirmation.
- **Pros**: Never miss a trade, fastest execution
- **Cons**: Higher risk, may enter prematurely
- **Best for**: Experienced traders with proven systems
### 2. Conservative Entry (Limit Order)
Place a limit order at a predetermined level and wait for price to come to you.
- **Pros**: Best price, tightest stop, best R:R
- **Cons**: May miss trades if price doesn't retrace
- **Best for**: Patient traders, swing traders
### 3. Confirmation Entry (Signal-Based)
Wait for a specific candlestick signal at the key level before entering.
- **Pros**: Higher win rate, clear invalidation
- **Cons**: Slightly worse entry price, slightly lower R:R
- **Best for**: Beginners and intermediate traders
---
## The 5 Essential Entry Models
### Model 1: Order Block Entry ⭐
1. Identify HTF bias (uptrend = look for buys)
2. Wait for BOS on MTF
3. Mark the order block (last bearish candle before the BOS)
4. Set limit order at the OB level
5. Stop below the OB, target next structural level
### Model 2: FVG (Fair Value Gap) Entry
1. After a displacement move, identify the FVG
2. Wait for price to retrace into the FVG
3. Enter at the 50% of the FVG (consequent encroachment)
4. Stop beyond the FVG, target the displacement high/low
### Model 3: Breaker Block Entry
1. After a failed OB (price breaks through it)
2. The old OB becomes a breaker block
3. Wait for price to return and test the breaker
4. Enter on rejection from the breaker
5. Stop beyond the breaker, target opposing liquidity
### Model 4: S/R Flip Entry
1. Price breaks a key S/R level with momentum
2. Wait for pullback to retest the broken level
3. Look for rejection candle at the retest
4. Enter on the rejection
5. Stop beyond the retest, target next level
### Model 5: Fibonacci OTE Entry
1. After an impulse move, draw Fibonacci retracement
2. Wait for price to pull back to 61.8-78.6% zone
3. Look for LTF confirmation (CHOCH, OB, or FVG)
4. Enter with stop below the 100% level
5. Target the -27% or -62% extension
---
## Real Trading Examples
### Example 1: EUR/USD Order Block Entry
- **Daily**: Uptrend bias
- **4H**: Bullish BOS above 1.0920
- **OB identified**: Last bearish candle at 1.0895-1.0905
- **Entry**: Limit buy at 1.0900 | **Stop**: 1.0885 | **Target**: 1.0975
- **R:R**: 5.0:1 | **Result**: +75 pips ✅
### Example 2: Gold FVG Entry
- **4H**: Bullish displacement from $2,380 to $2,415
- **FVG**: Gap between $2,392-$2,398
- **CE (50%)**: $2,395
- **Entry**: Buy at $2,395 | **Stop**: $2,380 | **Target**: $2,430
- **R:R**: 2.3:1 | **Result**: +$35 ✅
### Example 3: NAS100 OTE Entry (BD Time)
- **Session**: NY Open 7:30 PM BD
- **Impulse**: 18,200 → 18,350 (+150 points)
- **61.8% retrace**: 18,257
- **15M OB at**: 18,260
- **Entry**: 18,262 | **Stop**: 18,235 | **Target**: 18,380
- **Result**: +118 points, 4.4R ✅
---
## Common Mistakes
<Callout type="warning" title="Entry Errors">
**❌ Entering without a plan** — Know your entry, stop, and target BEFORE the trade.
**❌ Moving entry after placing limit** — Trust your analysis. Don't second-guess.
**❌ Skipping confirmation** — For confirmation entries, WAIT for the signal. Don't anticipate.
**❌ Too many entry models** — Master ONE entry model first. Add more only after consistency.
</Callout>
---
## Summary
| Model | Entry Type | Best For |
|-------|-----------|----------|
| **Order Block** | Limit at OB | SMC traders |
| **FVG** | Limit at CE | ICT traders |
| **Breaker** | Limit at breaker | Counter-OB setups |
| **S/R Flip** | Confirmation at retest | PA traders |
| **Fib OTE** | Limit at 62-79% | Swing traders |
---
## Related Topics
- [Exit Models](/en/price-action/exit-models) — When to close trades
- [Pullbacks](/en/price-action/pullbacks) — Pullback entry setups
- [Confirmation](/en/price-action/confirmation) — Entry confirmation signals
- [Risk Management](/en/price-action/risk-management) — Protecting capital
`
  },
  'exit-models.mdx': {
    title: 'Exit Models — Complete Guide',
    desc: 'Master trade exit strategies. Learn take profit methods, trailing stops, partial closes, and when to exit early.',
    level: 'intermediate', order: 16,
    content: `
## What are Exit Models?
Exit models define **when and how to close a trade**. While entries get the most attention, exits determine your actual profit. A perfect entry with a bad exit can turn a winner into a loser.
<Callout type="info" title="Exit > Entry">
You can have a mediocre entry and still be profitable with excellent exits. But the best entry in the world is worthless if you don't know when to take profit or cut losses.
</Callout>
---
## Take Profit Methods
### 1. Fixed Target (Structural Level)
Exit at the next major S/R level or swing point.
- **Pros**: Predictable, clear target
- **Cons**: May leave money on the table
- **Best for**: Beginners
### 2. Risk Multiple Target
Set target as a multiple of your risk (2R, 3R, 5R).
- **Pros**: Ensures positive expectancy
- **Cons**: May not align with structure
- **Best for**: Systematic traders
### 3. Opposing Liquidity Target
Target the liquidity pool (equal highs/lows) on the opposing side.
- **Pros**: High probability target (institutions gather liquidity)
- **Cons**: Requires good structure reading
- **Best for**: SMC/ICT traders
### 4. Trailing Stop
Move your stop to lock in profits as price moves in your favor.
- After 1R profit → Move stop to breakeven
- After 2R → Trail stop behind each new swing point
- **Best for**: Trend trades, swing trades
### 5. Partial Close
Close part of your position at different targets:
- 50% at 1R, 50% trailing
- 33% at 1R, 33% at 2R, 34% trailing
- **Best for**: Maximizing both secured profit and upside
---
## Stop Loss Placement
### Where to Place Stops:
- Beyond the nearest structural swing point
- Beyond the order block / FVG used for entry
- Beyond the invalidation level (where your thesis is wrong)
- NEVER in the middle of a zone — always beyond it
### Stop Loss Rules:
1. **Define before entry** — Know your stop BEFORE entering
2. **Never widen** — If originally 30 pips, don't move to 50 pips
3. **Can tighten / trail** — Moving stop to reduce risk is smart
4. **Include spread buffer** — Add 2-5 pips for spread on forex
---
## Real Trading Examples
### Example 1: EUR/USD Partial Close
- **Entry**: Buy at 1.0880 | **Stop**: 1.0855 (25 pip risk)
- **TP1** (50% close): 1.0930 = +50 pips (2R) → Close 50%
- **Trail remaining**: Move stop to 1.0910
- **TP2** (remaining 50%): 1.0970 = +90 pips (3.6R)
- **Average result**: 2.8R ✅
### Example 2: Gold Structural Exit
- **Entry**: Buy at $2,395 | **Stop**: $2,380
- **Target**: $2,445 (previous swing high / equal highs)
- **Result**: Price hit $2,448 (swept the equal highs)
- **Exit at structure**: $2,443 | **Profit**: +$48, 3.2R ✅
---
## Common Mistakes
<Callout type="warning" title="Exit Errors">
**❌ Moving TP further** — Don't get greedy. If your original target hits, take it.
**❌ No stop loss** — NEVER trade without a stop. One bad trade can destroy your account.
**❌ Emotional exits** — Closing too early out of fear or too late out of greed.
**❌ Same size every trade** — Use partials to secure profit while letting winners run.
</Callout>
---
## Summary
| Method | Best For | Pros |
|--------|----------|------|
| **Fixed target** | Beginners | Simple, predictable |
| **Risk multiple** | Systematic | Ensures positive R:R |
| **Liquidity target** | SMC/ICT | High probability |
| **Trailing stop** | Trend traders | Maximizes trends |
| **Partial close** | All levels | Balance of safety & upside |
---
## Related Topics
- [Entry Models](/en/price-action/entry-models) — Precise entry techniques
- [Risk Management](/en/price-action/risk-management) — Capital protection
- [Trade Management](/en/price-action/trade-management) — Managing open positions
`
  },
  'confirmation.mdx': {
    title: 'Confirmation — Complete Guide',
    desc: 'Master trade confirmation techniques. Learn candlestick confirmation, structure confirmation, and multi-factor validation.',
    level: 'intermediate', order: 12,
    content: `
## What is Confirmation?
Confirmation is evidence that validates your trade idea before you enter. It's the difference between GUESSING and TRADING with an edge. Confirmation reduces false signals and increases your win rate.
<Callout type="info" title="Patience Pays">
The most profitable traders wait for confirmation. They may miss some trades, but the trades they take are higher probability. Quality over quantity is the key to consistent profitability.
</Callout>
---
## Types of Confirmation
### 1. Candlestick Confirmation
A specific candle pattern at your key level:
- **Rejection candle** (hammer, pin bar) — Shows buying/selling pressure
- **Engulfing candle** — Shows momentum shift
- **Inside bar breakout** — Shows compression then expansion
### 2. Structure Confirmation (CHOCH / BOS)
- **BOS**: Confirms trend continuation
- **CHOCH**: Confirms potential reversal
- Wait for candle body close beyond the structural level
### 3. Timeframe Confirmation
Multiple timeframes agreeing:
- HTF bias is bullish + MTF setup is bullish + LTF trigger is bullish = HIGH confirmation
- Any timeframe conflicting = LOWER confidence
### 4. Session/Time Confirmation
The setup occurs during a high-volume session:
- London (1:00 PM BD) or NY (7:30 PM BD) = High confirmation
- Asian session for EUR pairs = Low confirmation
---
## The Confirmation Checklist ⭐
Before every trade, run through this checklist:
| # | Check | ✅/❌ |
|---|-------|------|
| 1 | HTF trend aligned? | |
| 2 | Key level identified? | |
| 3 | Candlestick signal at level? | |
| 4 | LTF structure confirming? | |
| 5 | Active session with volume? | |
| 6 | Risk:reward minimum 2:1? | |
| 7 | No conflicting signals? | |
**Minimum 5/7 checks = Trade. Below 5/7 = Skip.**
---
## Real Trading Examples
### Example 1: EUR/USD Full Confirmation
- ✅ Daily uptrend (HTF aligned)
- ✅ Price at 4H demand zone 1.0880 (key level)
- ✅ Bullish engulfing at 1.0882 (candle signal)
- ✅ 15M CHOCH bullish (LTF structure)
- ✅ London session (1:30 PM BD)
- ✅ R:R = 3.2:1
- ✅ No conflicting signals
- **Score: 7/7 → HIGH CONFIDENCE ENTRY**
- **Result**: +65 pips ✅
### Example 2: NAS100 Missing Confirmation (BD Time)
- ✅ 4H bullish structure
- ✅ Price at 1H demand zone 18,280
- ❌ No candle signal yet (still approaching)
- ❌ 5M structure still bearish
- ⚠️ Asian session (2:30 AM BD) — low volume
- ✅ R:R = 2.5:1
- ❌ Conflicting 1H signal
- **Score: 3/7 → SKIP THIS TRADE**
---
## Common Mistakes
<Callout type="warning" title="Confirmation Errors">
**❌ Entering without any confirmation** — Even the best level needs at least a candle signal.
**❌ Waiting for too much confirmation** — 7/7 rarely happens. 5/7 is enough.
**❌ Changing the rules** — Don't lower your confirmation standard because you "want" the trade.
**❌ Confirmation bias** — Don't look for reasons to take the trade. Be objective.
</Callout>
---
## Summary
| Type | What to Look For |
|------|------------------|
| **Candle** | Rejection/engulfing at key level |
| **Structure** | BOS/CHOCH on LTF |
| **Timeframe** | HTF + MTF + LTF agreement |
| **Session** | London or NY session active |
| **Score** | 5/7+ on checklist = trade |
---
## Related Topics
- [Candlestick Psychology](/en/price-action/candlestick-psychology) — Reading candle signals
- [Entry Models](/en/price-action/entry-models) — After confirmation, how to enter
- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — Cross-timeframe confirmation
`
  },
  'confluence.mdx': {
    title: 'Confluence — Complete Guide',
    desc: 'Master confluence trading. Learn to stack multiple factors for high-probability setups.',
    level: 'intermediate', order: 13,
    content: `
## What is Confluence?
Confluence is when **multiple independent factors align** at the same price level, dramatically increasing the probability of a trade. Think of it as stacking evidence — the more reasons price should react at a level, the more likely it will.
<Callout type="info" title="The Power of Stacking">
A single factor (S/R level) might give you 50% probability. But when you add Fibonacci alignment, a session level, HTF trend, and a candle signal — probability jumps to 70-80%. Confluence is the closest thing to a "sure bet" in trading.
</Callout>
---
## Confluence Factors
### Price Level Factors
1. **Horizontal S/R** — Previous swing highs/lows
2. **Order Blocks** — Institutional order zones
3. **FVG (Fair Value Gap)** — Imbalance zones
4. **Supply/Demand Zones** — Accumulation/distribution
5. **Round Numbers** — Psychological levels (1.0900, $2,400)
### Fibonacci Factors
6. **Fibonacci Retracement** — 50%, 61.8%, 78.6% levels
7. **Fibonacci Extension** — 1.272, 1.618 targets
### Structural Factors
8. **HTF Trend Direction** — Daily/Weekly bias
9. **BOS/CHOCH on MTF** — Structure confirmation
10. **Premium/Discount** — Price in the right zone
### Timing Factors
11. **Kill Zone** — London (1:00 PM BD), NY (7:30 PM BD)
12. **Session Levels** — PDH, PDL, Asian range
### Signal Factors
13. **Candlestick Signal** — Rejection, engulfing at the level
14. **LTF Structure Shift** — CHOCH on entry timeframe
---
## Confluence Scoring System
| Factors Aligned | Confidence | Action |
|----------------|------------|--------|
| **1-2 factors** | Low (40%) | ❌ Skip |
| **3-4 factors** | Medium (55%) | ⚠️ Watch, maybe trade small |
| **5-6 factors** | High (70%) | ✅ Standard position |
| **7+ factors** | Very High (80%+) | ⭐ Full conviction trade |
---
## Real Trading Examples
### Example 1: EUR/USD 7-Factor Confluence
1. ✅ Daily uptrend (HTF bias)
2. ✅ 4H demand zone at 1.0880 (S/R)
3. ✅ 61.8% Fibonacci retracement at 1.0878 (Fib)
4. ✅ 4H order block at 1.0875-1.0885 (OB)
5. ✅ Previous resistance → now support at 1.0880 (S/R flip)
6. ✅ London session (1:30 PM BD) (Kill zone)
7. ✅ 15M bullish engulfing at 1.0882 (Candle signal)
- **Entry**: 1.0883 | **Stop**: 1.0860 | **Target**: 1.0950
- **R:R**: 2.9:1 | **Result**: +67 pips ✅
### Example 2: Gold 5-Factor Confluence
1. ✅ Weekly uptrend, Daily pullback (HTF)
2. ✅ $2,380 demand zone (Supply/Demand)
3. ✅ 50% Fibonacci at $2,382 (Fib)
4. ✅ Round number $2,380 (Psychological)
5. ✅ Bullish hammer at $2,381 (Candle)
- **Entry**: $2,383 | **Stop**: $2,368 | **Target**: $2,430
- **R:R**: 3.1:1 | **Result**: +$47 ✅
---
## Common Mistakes
<Callout type="warning" title="Confluence Errors">
**❌ Counting the same factor twice** — "S/R at 1.0900" and "demand at 1.0900" is ONE factor if they're the same zone.
**❌ Forcing confluence** — Don't stretch to find factors. If they're not obvious, they're not there.
**❌ Ignoring HTF as a factor** — HTF alignment is the MOST important confluence factor.
**❌ Trading with only 1-2 factors** — That's gambling, not trading. Wait for 3+ factors minimum.
</Callout>
---
## Summary
| Concept | Details |
|---------|---------|
| **Definition** | Multiple factors aligning at one level |
| **Minimum** | 3 factors for a trade |
| **High probability** | 5+ factors |
| **Most important** | HTF trend alignment |
| **Result** | Higher win rate, better R:R |
---
## Related Topics
- [Support & Resistance](/en/price-action/support-resistance) — Key confluence factor
- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — Timeframe confluence
- [Confirmation](/en/price-action/confirmation) — Confirming confluence setups
- [Entry Models](/en/price-action/entry-models) — Entering at confluence
`
  },
  'risk-management.mdx': {
    title: 'Risk Management — Complete Guide',
    desc: 'Master risk management for trading. Learn position sizing, risk per trade, drawdown management, and the math of profitable trading.',
    level: 'beginner', order: 17,
    content: `
## What is Risk Management?
Risk management is the process of **protecting your trading capital** by controlling how much you risk on each trade. It's the MOST important factor in long-term trading success — more important than entry techniques or analysis skills.
<Callout type="info" title="The #1 Rule of Trading">
**Risk management is not optional — it's the foundation.** A trader with average analysis but excellent risk management will always outperform a trader with excellent analysis but poor risk management. Protect your capital FIRST; profits will follow.
</Callout>
---
## The 1-2% Rule
**Never risk more than 1-2% of your total account on a single trade.**
| Account Size | 1% Risk | 2% Risk |
|-------------|---------|---------|
| $1,000 | $10 | $20 |
| $5,000 | $50 | $100 |
| $10,000 | $100 | $200 |
| $25,000 | $250 | $500 |
| $100,000 | $1,000 | $2,000 |
### Why 1-2%?
- **10 losing trades at 2%** = 18.3% drawdown (recoverable)
- **10 losing trades at 5%** = 40.1% drawdown (difficult)
- **10 losing trades at 10%** = 65.1% drawdown (almost impossible)
---
## Position Sizing Formula
\`\`\`
Position Size = (Account × Risk%) / (Stop Loss in pips × Pip Value)
Example:
Account: $10,000
Risk: 1% = $100
Stop Loss: 30 pips
Pip Value (EUR/USD): $10/pip per standard lot
Lot Size = $100 / (30 × $10) = $100 / $300 = 0.33 lots
\`\`\`
### Quick Reference for Forex:
| Stop (pips) | 1% Risk on $10K | Lot Size |
|-------------|----------------|----------|
| 15 pips | $100 | 0.67 lots |
| 25 pips | $100 | 0.40 lots |
| 30 pips | $100 | 0.33 lots |
| 50 pips | $100 | 0.20 lots |
| 100 pips | $100 | 0.10 lots |
---
## Risk-to-Reward Ratio
**Never take a trade with R:R below 1:2.**
| Win Rate | Minimum R:R for Profit |
|----------|----------------------|
| 30% | 3.5:1 |
| 40% | 2.0:1 |
| 50% | 1.5:1 |
| 60% | 1.0:1 |
### Example: 2R System with 45% Win Rate
- 100 trades: 45 winners, 55 losers
- Winners: 45 × 2R = 90R
- Losers: 55 × 1R = 55R
- **Net profit: 35R** (at 1% risk = 35% return) ✅
---
## Drawdown Management
### Maximum Drawdown Rules:
- **Daily max loss**: 3% (stop trading for the day)
- **Weekly max loss**: 5% (reduce position sizes)
- **Monthly max loss**: 10% (take a break, review strategy)
### Recovery Math:
| Drawdown | Gain Needed to Recover |
|----------|----------------------|
| 10% | 11.1% |
| 20% | 25.0% |
| 30% | 42.9% |
| 50% | 100.0% |
| 75% | 300.0% |
<Callout type="warning" title="Prevention > Recovery">
It's MUCH easier to prevent drawdowns than to recover from them. A 50% loss requires a 100% gain just to break even. This is why the 1-2% rule is non-negotiable.
</Callout>
---
## Real Trading Examples
### Example 1: Proper Risk Management
- **Account**: $10,000
- **Risk per trade**: 1% = $100
- **EUR/USD trade**: Stop = 25 pips → Lot size = 0.40
- **Result**: +50 pips = $200 profit (2R)
- **New balance**: $10,200 ✅
### Example 2: Poor Risk Management
- **Account**: $10,000
- **Risk per trade**: 10% = $1,000
- **Same trade but -25 pips** = -$1,000 loss
- **3 losing trades**: $10,000 → $7,000 (30% drawdown!)
- **Need 42.9% gain to recover** ❌
---
## Common Mistakes
<Callout type="warning" title="Risk Management Errors">
**❌ Risking 5-10% per trade** — This guarantees eventual account destruction.
**❌ No stop loss** — "I'll close manually" always leads to massive losses.
**❌ Martingale (doubling down)** — Doubling your risk after a loss is a fast path to zero.
**❌ Revenge trading** — After a loss, trading more to "make it back" leads to bigger losses.
**❌ Moving stop loss further** — If your analysis was wrong, accept the loss.
</Callout>
---
## Summary
| Rule | Details |
|------|---------|
| **Risk per trade** | 1-2% maximum |
| **R:R minimum** | 2:1 or higher |
| **Daily max loss** | 3% (then stop) |
| **Position sizing** | Calculate BEFORE entry |
| **Stop loss** | Required on EVERY trade |
| **Recovery** | Prevention is 10x easier |
---
## Related Topics
- [Trade Management](/en/price-action/trade-management) — Managing open trades
- [Exit Models](/en/price-action/exit-models) — Taking profits and stopping out
- [Entry Models](/en/price-action/entry-models) — Precision entries for tight stops
`
  },
  'session-analysis.mdx': {
    title: 'Session Analysis — Complete Guide',
    desc: 'Master trading session analysis. Learn London, New York, Asian sessions, kill zones, and session-based trading strategies with BD time.',
    level: 'intermediate', order: 18,
    content: `
## What is Session Analysis?
Session analysis studies **how price behaves during different trading sessions**. Each session has unique characteristics in volatility, volume, and typical price action patterns. Understanding sessions is crucial for timing your trades.
<Callout type="info" title="Trade the Right Hours">
Not all market hours are equal. 80% of significant moves happen during London and New York sessions. Trading during the right session for your pairs can dramatically improve your results.
</Callout>
---
## The Three Major Sessions (BD Time)
| Session | BD Time (UTC+6) | Characteristics |
|---------|-----------------|-----------------|
| **Asian/Tokyo** | 2:00 AM - 10:00 AM | Low volatility, ranging |
| **London** | 1:00 PM - 10:00 PM | Highest volatility for EUR/GBP |
| **New York** | 7:30 PM - 4:00 AM | Highest for USD, Gold, Indices |
| **London-NY Overlap** | 7:30 PM - 10:00 PM | **Maximum volume and movement** |
### Kill Zones (BD Time):
- **London Kill Zone**: 1:00 PM - 4:00 PM BD
- **New York Kill Zone**: 7:30 PM - 11:00 PM BD
- **Asian Kill Zone**: 2:00 AM - 5:00 AM BD
---
## Session Trading Strategies
### Strategy 1: Asian Range Breakout
1. Mark the Asian session high and low (2:00 AM - 10:00 AM BD)
2. Wait for London open (1:00 PM BD)
3. Trade the breakout of the Asian range
4. Direction: WITH the HTF trend preference
### Strategy 2: London Session Manipulation
1. London often creates a **false move** in the first 30-60 minutes (Judas Swing)
2. This sweeps Asian session liquidity
3. The REAL move comes after the sweep (usually by 2:00-3:00 PM BD)
4. Enter after the reversal from the sweep
### Strategy 3: NY Continuation
1. If London established a clear direction
2. NY often continues that direction during the overlap (7:30-10:00 PM BD)
3. Look for pullback entries during early NY
4. Target: NY session high/low or beyond
---
## Session-Specific Pair Selection
| Pair | Best Session | BD Time |
|------|-------------|---------|
| EUR/USD | London / NY overlap | 1:00 PM - midnight |
| GBP/USD | London | 1:00 PM - 10:00 PM |
| USD/JPY | Asian + NY | 2:00 AM + 7:30 PM |
| XAU/USD (Gold) | NY | 7:30 PM - 2:00 AM |
| NAS100 | NY | 7:30 PM - 4:00 AM |
| AUD/USD | Asian | 2:00 AM - 10:00 AM |
---
## Real Trading Examples
### Example 1: Asian Range → London Breakout
- **Asian Range** (2:00-10:00 AM BD): EUR/USD 1.0880-1.0910
- **London Open** (1:00 PM BD): Price breaks above 1.0910 with momentum
- **Entry**: 1.0915 (breakout confirmed)
- **Stop**: 1.0895 | **Target**: 1.0960
- **Result**: +45 pips by 4:00 PM BD ✅
### Example 2: London Judas Swing
- **London Open** (1:00 PM BD): GBP/USD drops 30 pips (sweeps Asian low)
- **Reversal**: At 1:45 PM BD, aggressive bullish engulfing
- **Entry**: Buy at 1.2640 | **Stop**: 1.2610 | **Target**: 1.2720
- **Result**: +80 pips by NY session ✅
### Example 3: NY Kill Zone Gold Trade
- **Time**: 8:00 PM BD (NY KZ active)
- **Setup**: Gold at $2,400 demand after London established bullish direction
- **Entry**: $2,402 | **Stop**: $2,388 | **Target**: $2,435
- **Result**: +$33, 2.4R ✅
---
## Common Mistakes
<Callout type="warning" title="Session Errors">
**❌ Trading EUR during Asian session** — Low volume = random noise, not real moves.
**❌ Ignoring the Judas Swing** — The first 30 minutes of London often fakes. Don't enter on the first move.
**❌ Trading through all sessions** — Pick 1-2 sessions and master them. Don't trade 24 hours.
**❌ Not adjusting for BD time** — Always convert UTC to BD time (UTC+6). Missing a kill zone = missing the move.
</Callout>
---
## Summary
| Session | BD Time | Best Pairs | Strategy |
|---------|---------|------------|----------|
| **Asian** | 2:00 AM-10:00 AM | JPY, AUD | Range marking |
| **London** | 1:00 PM-10:00 PM | EUR, GBP | Breakout / Judas |
| **New York** | 7:30 PM-4:00 AM | USD, Gold, NAS | Continuation |
| **Overlap** | 7:30 PM-10:00 PM | All majors | Maximum volume |
---
## Related Topics
- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — Combining sessions with TF analysis
- [Breakouts](/en/price-action/breakouts) — Session breakout strategies
- [Fakeouts](/en/price-action/fakeouts) — Session-based fakeouts
- [ICT Kill Zones](/en/ict/kill-zones) — ICT session concepts
`
  },
  'reversal-concepts.mdx': {
    title: 'Reversal Concepts — Complete Guide',
    desc: 'Master trend reversal identification. Learn reversal patterns, CHOCH, exhaustion signals, and high-probability reversal entries.',
    level: 'advanced', order: 19,
    content: `
## What are Reversal Concepts?
Reversal concepts help you identify when a trend is ending and a new one is beginning. Catching reversals can be extremely profitable but also risky — you're trading AGAINST the current momentum.
<Callout type="warning" title="Counter-Trend Warning">
Reversals are the hardest trades to execute correctly. Most "reversals" are actually just pullbacks in a strong trend. Only trade reversals when you have STRONG evidence (3+ reversal signals converging at a key level).
</Callout>
---
## Reversal Indicators
### 1. CHOCH (Change of Character)
The most reliable reversal signal. Price breaks the first key structural level against the trend.
- **Bearish CHOCH**: Uptrend breaks below the most recent HL
- **Bullish CHOCH**: Downtrend breaks above the most recent LH
### 2. Divergence
Price makes a new extreme but the move lacks conviction:
- Uptrend: New HH but impulse candles are smaller
- Downtrend: New LL but selling candles are weaker
### 3. Exhaustion Candles
Climactic candles at extremes:
- **Blow-off top**: Huge bullish candle with long upper wick at resistance
- **Selling climax**: Huge bearish candle with long lower wick at support
### 4. Liquidity Sweep + Reversal
Price sweeps beyond a key level (taking liquidity) then reverses aggressively. This is the institutional reversal signature.
### 5. Volume Climax
Massive volume spike at a key level often signals exhaustion and potential reversal.
---
## Reversal Patterns
### Double Top / Bottom
Price tests the same level twice and fails → reversal
```
Double Top:
    ╱╲      ╱╲
   ╱  ╲    ╱  ╲
  ╱    ╲  ╱    ╲
 ╱      ╲╱      ╲
         Neckline  ╲ Break = Sell
```
### Head and Shoulders
Three peaks: left shoulder, head (higher), right shoulder (lower)
### Rounding Top / Bottom
Gradual change in momentum forming a rounded shape
### Quasimodo Pattern (QM)
Modern reversal pattern combining CHOCH with structure:
1. HH forms (head)
2. Price breaks below the HL (CHOCH)
3. New low forms (right shoulder low)
4. Price returns to the left shoulder level
5. Enter SHORT at the left shoulder level
---
## Real Trading Examples
### Example 1: EUR/USD CHOCH Reversal
- **Context**: EUR/USD uptrend for 2 weeks
- **Signal**: 4H breaks below HL at 1.0880 (first HL break in weeks)
- **Confirmation**: 1H creates LH at 1.0905
- **Entry**: Sell at 1.0900 retest | **Stop**: 1.0925 | **Target**: 1.0820
- **R:R**: 3.2:1 | **Result**: +75 pips ✅
### Example 2: Gold Liquidity Sweep Reversal
- **Context**: Gold rally to $2,480 (all-time high area)
- **Sweep**: Price spikes to $2,490 (above equal highs at $2,485)
- **Reversal**: Massive bearish engulfing closes at $2,468
- **Entry**: Sell at $2,470 | **Stop**: $2,495 | **Target**: $2,420
- **R:R**: 2.0:1 | **Result**: +$50 ✅
### Example 3: NAS100 Double Top (BD Time)
- **Session**: NY session (9:00 PM BD)
- **First top**: 18,450 at 8:00 PM BD
- **Second top**: 18,445 at 9:30 PM BD (slightly lower = weakness)
- **Neckline break**: Below 18,380 at 10:00 PM BD
- **Entry**: Sell at 18,375 | **Stop**: 18,410 | **Target**: 18,300
- **Result**: +75 points, 2.1R ✅
---
## Common Mistakes
<Callout type="warning" title="Reversal Errors">
**❌ Catching every "top" and "bottom"** — Most attempts fail. Wait for CLEAR evidence.
**❌ No CHOCH confirmation** — Without a structural break, it's likely a pullback, not a reversal.
**❌ Ignoring the HTF trend** — Daily uptrends don't reverse on a 15M signal. Reversals need HTF confirmation.
**❌ Averaging down** — Adding to a losing reversal trade is the fastest way to blow your account.
</Callout>
---
## Summary
| Signal | Reliability |
|--------|-------------|
| **CHOCH** | ⭐⭐⭐⭐⭐ Highest |
| **Liquidity sweep + reversal** | ⭐⭐⭐⭐ Very high |
| **Double top/bottom** | ⭐⭐⭐ Medium-high |
| **Divergence** | ⭐⭐ Medium |
| **Exhaustion candle alone** | ⭐ Low (needs confirmation) |
---
## Related Topics
- [Market Structure](/en/price-action/market-structure) — CHOCH and structural shifts
- [Fakeouts](/en/price-action/fakeouts) — Liquidity sweep reversals
- [Trend Analysis](/en/price-action/trend-analysis) — When trends end
- [Swing Highs & Lows](/en/price-action/swing-high-low) — SFP reversals
`
  },
  'liquidity.mdx': {
    title: 'Liquidity — Complete Guide',
    desc: 'Understand liquidity in trading. Learn buy-side/sell-side liquidity, liquidity pools, stop hunts, and how institutions use liquidity.',
    level: 'intermediate', order: 10,
    content: `
## What is Liquidity?
In trading, liquidity refers to **clusters of pending orders** (mostly stop losses and breakout orders) sitting at specific price levels. Institutional traders need liquidity to fill their large orders. They engineer price moves toward these clusters to collect the orders they need.
<Callout type="info" title="Follow the Liquidity">
The market doesn't move randomly — it moves toward LIQUIDITY. Understanding where liquidity sits and how institutions target it gives you a massive edge. Price goes where the orders are.
</Callout>
---
## Types of Liquidity
### Buy-Side Liquidity (BSL)
Orders sitting **ABOVE** price:
- **Buy stops** from short sellers (stop losses)
- **Buy limit orders** from breakout traders
- Found above: swing highs, equal highs, resistance levels
### Sell-Side Liquidity (SSL)
Orders sitting **BELOW** price:
- **Sell stops** from long buyers (stop losses)
- **Sell limit orders** from breakdown traders
- Found below: swing lows, equal lows, support levels
```
BSL (Buy-Side Liquidity):
═══ Equal Highs ═══════  ← Buy stops above here
  ╱╲    ╱╲    ╱╲
 ╱  ╲  ╱  ╲  ╱  ╲
╱    ╲╱    ╲╱    ╲
  ╲╱    ╲╱    ╲╱
═══ Equal Lows ════════  ← Sell stops below here
SSL (Sell-Side Liquidity)
```
---
## Where Liquidity Pools Form
### 1. Equal Highs / Equal Lows
When price creates similar swing points, stops cluster just beyond them.
### 2. Obvious Support / Resistance
Retail traders place stops just beyond well-known S/R levels.
### 3. Trendline Points
Stops placed just beyond trendlines create liquidity.
### 4. Previous Session Highs / Lows
PDH, PDL, PWH, PWL — retail stops cluster beyond these.
### 5. Round Numbers
$2,400, 150.00, 1.1000 — stops cluster around these psychological levels.
---
## How Institutions Use Liquidity
### The Liquidity Cycle:
1. **Accumulation** — Institutions quietly build positions in a range
2. **Manipulation** — Price spikes to collect liquidity (stop hunt)
3. **Distribution** — Institutions reverse and take the real move, distributing to late retail traders
```
AMD Cycle:
           M (Manipulation)
          ╱╲ Stop hunt spike
  ═══════╱══╲═══════════ Resistance
  A     ╱    ╲
  ╱╲   ╱      ╲ D (Distribution)
 ╱  ╲ ╱        ╲
╱ A  ╲╱         ╲
Accumulation       ╲
                    ╲ Real move down
```
---
## Real Trading Examples
### Example 1: EUR/USD Equal Lows Sweep
- **Setup**: EUR/USD creates equal lows at 1.0850, 1.0852, 1.0849
- **Sweep**: Price drops to 1.0838 (below all equal lows)
- **Reversal**: Aggressive bullish candle closes at 1.0858
- **Entry**: Buy at 1.0860 | **Stop**: 1.0835 | **Target**: 1.0920
- **R:R**: 2.4:1 | **Result**: +60 pips ✅
### Example 2: Gold BSL Targeting
- **Setup**: Gold has equal highs at $2,450, $2,452
- **Anticipation**: Price will likely run above to collect buy stops
- **Strategy**: Wait for the sweep, then look for reversal to sell
- **Sweep**: Price hits $2,458, then bearish engulfing
- **Entry**: Sell at $2,452 | **Stop**: $2,465 | **Target**: $2,410
- **R:R**: 3.2:1 | **Result**: +$42 ✅
### Example 3: NAS100 Liquidity Grab (BD Time)
- **Asian Session** (2:00 AM BD): NAS100 creates low at 18,200
- **London** (1:30 PM BD): Price drops below 18,200 to 18,180 (SSL sweep)
- **Reversal**: 15M CHOCH bullish at 18,215
- **Entry**: 18,220 | **Stop**: 18,175 | **Target**: 18,350
- **Result**: +130 points, 2.9R ✅
---
## Common Mistakes
<Callout type="warning" title="Liquidity Errors">
**❌ Placing stops at obvious levels** — If YOU can see the level, institutions can too. Place stops beyond the liquidity zone, not at it.
**❌ Not identifying liquidity pools** — Before taking a trade, ask: "Where is the liquidity?" Price WILL target it.
**❌ Fighting the sweep** — When price sweeps liquidity, don't fight it. Wait for the reversal, then trade the real move.
**❌ Ignoring equal highs/lows** — These are the most obvious liquidity pools and are targeted regularly.
</Callout>
---
## Summary
| Concept | Details |
|---------|---------|
| **BSL** | Buy stops above highs (targeted for sells) |
| **SSL** | Sell stops below lows (targeted for buys) |
| **Equal H/L** | Strongest liquidity pools |
| **AMD Cycle** | Accumulation → Manipulation → Distribution |
| **Rule** | Price moves toward liquidity, then reverses |
---
## Related Topics
- [Fakeouts](/en/price-action/fakeouts) — Liquidity sweeps create fakeouts
- [Support & Resistance](/en/price-action/support-resistance) — Liquidity at S/R levels
- [Market Structure](/en/price-action/market-structure) — Structural liquidity
- [SMC Liquidity Concepts](/en/smc/liquidity-concepts) — Advanced liquidity theory
`
  },
  'range-trading.mdx': { title: 'Range Trading — Complete Guide', desc: 'Master range-bound market trading. Learn range identification, boundary trading, and breakout anticipation.', level: 'intermediate', order: 20,
    content: `## What is Range Trading?\n\nRange trading is a strategy used when price moves **sideways between defined support and resistance** without establishing a trend. Instead of fighting the chop, range traders profit by buying at support and selling at resistance.\n\n<Callout type="info" title="Markets Range 70% of the Time">\nContrary to popular belief, markets spend MORE time in ranges than in trends. Learning to trade ranges gives you opportunities that trend-only traders miss entirely.\n</Callout>\n\n---\n\n## Identifying a Range\n\n### Characteristics:\n1. **Equal/similar highs** — Price can't break above a ceiling\n2. **Equal/similar lows** — Price can't break below a floor\n3. **Two or more bounces** off both boundaries\n4. **Decreasing volume** — Lower conviction as the range develops\n\n### Range Types:\n- **Tight Range** (20-50 pips): Often before news or breakouts\n- **Normal Range** (50-150 pips): Standard consolidation\n- **Wide Range** (150+ pips): Multi-day/week consolidation\n\n---\n\n## Range Trading Strategies\n\n### Strategy 1: Fade the Boundaries\n1. Identify clear range boundaries (2+ touches each)\n2. At support: Buy with stop below range + buffer\n3. At resistance: Sell with stop above range + buffer\n4. Target: Opposite boundary or midpoint\n\n### Strategy 2: Midpoint Reversion\n1. Calculate the range midpoint\n2. When price is above midpoint near resistance → Sell bias\n3. When price is below midpoint near support → Buy bias\n\n### Strategy 3: Anticipate the Breakout\n1. Track which liquidity has been collected (above or below)\n2. If SSL is swept: Expect breakout to the UPSIDE\n3. If BSL is swept: Expect breakout to the DOWNSIDE\n\n---\n\n## Real Trading Examples\n\n### Example 1: EUR/USD Range Fade\n- **Range**: 1.0880 - 1.0930 (50 pips, 3 days)\n- **At support**: Bullish hammer at 1.0882\n- **Entry**: Buy 1.0885 | **Stop**: 1.0868 | **Target**: 1.0925\n- **R:R**: 2.4:1 | **Result**: +40 pips ✅\n\n### Example 2: Gold Range Breakout\n- **Range**: $2,380-$2,420 (1 week)\n- **SSL swept**: Price dipped to $2,372 then reversed\n- **Expectation**: Upside breakout (SSL collected, BSL still untouched)\n- **Result**: Price broke $2,420 next day, reached $2,460 ✅\n\n---\n\n## Common Mistakes\n\n<Callout type="warning" title="Range Trading Errors">\n\n**❌ Trading the middle** — Only trade at range EDGES, never the middle.\n\n**❌ Trading breakout too early** — Wait for confirmation. Many range breaks fail.\n\n**❌ Forgetting the trend resumes** — Ranges end. Always be ready for the breakout.\n\n</Callout>\n\n---\n\n## Summary\n\n| Aspect | Details |\n|--------|--------|\n| **Range** | S/R boundaries with 2+ touches |\n| **Entry** | At boundaries with rejection signal |\n| **Target** | Opposite boundary or midpoint |\n| **Breakout** | After liquidity sweep on one side |\n\n---\n\n## Related Topics\n\n- [Support & Resistance](/en/price-action/support-resistance) — Range boundaries\n- [Breakouts](/en/price-action/breakouts) — When ranges end\n- [Liquidity](/en/price-action/liquidity) — Liquidity within ranges\n- [Fakeouts](/en/price-action/fakeouts) — False range breaks`
  }
};
// Write remaining simpler topic files
const simpleFiles = {
  'continuation.mdx': { title: 'Continuation Patterns — Complete Guide', desc: 'Master continuation patterns. Learn flags, pennants, wedges, and how to trade trend continuation.', level: 'intermediate', order: 21, topic: 'continuation patterns', keyPoints: ['Flags (bullish and bearish)', 'Pennants', 'Wedges', 'Ascending/descending triangles', 'Cup and handle'], examples: ['EUR/USD bull flag after 80-pip impulse → continuation +55 pips', 'Gold ascending triangle $2,380-$2,410 → breakout to $2,445', 'NAS100 pennant at 18,300 during NY session → continuation +100 points'] },
  'compression.mdx': { title: 'Compression — Complete Guide', desc: 'Master price compression concepts. Learn how tightening ranges precede explosive moves.', level: 'advanced', order: 22, topic: 'price compression', keyPoints: ['Narrowing ranges indicate building pressure', 'Bollinger Band squeeze', 'Inside bars as compression signals', 'Compression before news events', 'Trading the expansion after compression'], examples: ['EUR/USD 1H inside bars × 5 before NFP → explosive 80-pip move', 'Gold $2,395-$2,405 tight range → expansion to $2,440', 'NAS100 compression 18,280-18,300 before FOMC → 200-point move'] },
  'expansion.mdx': { title: 'Expansion — Complete Guide', desc: 'Master price expansion. Learn displacement candles, impulse moves, and trading aggressive directional moves.', level: 'advanced', order: 23, topic: 'price expansion', keyPoints: ['Displacement candles show institutional aggression', 'Expansion creates FVGs and imbalances', 'Expansion follows compression', 'Look for entries on pullback after expansion', 'Never chase expansion — wait for retrace'], examples: ['EUR/USD 60-pip displacement candle at London open → FVG entry on pullback +40 pips', 'Gold $30 expansion candle from $2,380 → retrace to FVG at $2,395 → +$25', 'NAS100 150-point NY open expansion → pullback entry +80 points'] },
  'momentum.mdx': { title: 'Momentum — Complete Guide', desc: 'Master momentum analysis. Learn momentum shifts, candle body analysis, and how to measure trend strength.', level: 'intermediate', order: 24, topic: 'momentum analysis', keyPoints: ['Momentum = speed and direction of price movement', 'Candle body size indicates momentum strength', 'Decreasing candle bodies = losing momentum', 'Momentum divergence warns of reversals', 'Trade WITH momentum, not against it'], examples: ['EUR/USD candle bodies shrinking from 30→20→10 pips → reversal warning → sell at next LH', 'Gold $15 impulse candle vs $5 pullback candles = strong bullish momentum → buy pullback', 'NAS100 momentum shift at 9:30 PM BD → candles flip from bearish to bullish displacement'] },
  'volume.mdx': { title: 'Volume — Complete Guide', desc: 'Master volume analysis. Learn volume confirmation, volume divergence, and how volume reveals institutional activity.', level: 'intermediate', order: 25, topic: 'volume analysis', keyPoints: ['Volume confirms price moves', 'High volume breakout = real; Low volume = fake', 'Volume divergence signals reversals', 'Tick volume proxies actual volume in forex', 'Volume climax marks exhaustion'], examples: ['EUR/USD breakout with 3x average volume → real breakout → +50 pips', 'Gold volume spike at $2,450 → exhaustion → reversal -$30', 'NAS100 volume dry-up in Asian session → range → London volume spike → breakout'] },
  'scalping.mdx': { title: 'Scalping — Complete Guide', desc: 'Master scalping strategies. Learn 1M/5M entries, quick profit targets, and session-based scalping techniques.', level: 'advanced', order: 26, topic: 'scalping', keyPoints: ['Scalping = quick trades lasting seconds to minutes', '5M/1M timeframe with 1H/15M structure', 'Tight stops (5-15 pips for forex)', 'Quick targets (10-30 pips or 1-2R)', 'Best during London/NY kill zones', 'Spread-sensitive — use tight-spread pairs'], examples: ['EUR/USD 5M OB entry during London KZ (2:00 PM BD) → +15 pips in 20 minutes', 'Gold 1M entry at $2,400 S/R flip → +$5 scalp in 5 minutes', 'NAS100 5M entry at PDL during NY open (7:35 PM BD) → +30 points in 10 minutes'] },
  'swing-trading.mdx': { title: 'Swing Trading — Complete Guide', desc: 'Master swing trading. Learn multi-day setups, 4H/Daily analysis, and swing position management.', level: 'intermediate', order: 27, topic: 'swing trading', keyPoints: ['Swing trades held for days to weeks', 'Daily/4H analysis, 4H/1H entry', 'Wider stops (50-150 pips for forex)', 'Larger targets (100-400 pips)', 'Less screen time required', 'Best for part-time traders'], examples: ['EUR/USD Daily demand entry → held 5 days → +180 pips (3R)', 'Gold Weekly pullback to $2,350 → held 8 days → +$80 (2.5R)', 'GBP/USD 4H OB entry → held 3 days → +120 pips'] },
  'intraday.mdx': { title: 'Intraday Trading — Complete Guide', desc: 'Master intraday (day trading) techniques. Learn session-based setups, intraday structure, and same-day entries/exits.', level: 'intermediate', order: 28, topic: 'intraday trading', keyPoints: ['All trades opened and closed within one day', '4H/1H analysis, 15M/5M entry', 'Focus on London and NY sessions', 'Moderate stops (20-50 pips)', 'Moderate targets (40-100 pips)', 'Session-specific strategies'], examples: ['EUR/USD London open (1:00 PM BD) → Judas swing → entry at 1:45 PM → closed by 6:00 PM +55 pips', 'Gold NY session (8:00 PM BD) → OB entry at $2,405 → TP $2,430 by midnight +$25', 'NAS100 Asian range break at London → entry 18,300 at 1:30 PM BD → TP 18,400 by 7:00 PM'] },
  'trade-management.mdx': { title: 'Trade Management — Complete Guide', desc: 'Master active trade management. Learn trailing stops, position scaling, breakeven strategies, and emotion management.', level: 'intermediate', order: 29, topic: 'trade management', keyPoints: ['Move to breakeven after 1R profit', 'Trail stop behind swing points', 'Partial close: 50% at TP1, remainder trailing', 'Never move stop further from entry', 'Set-and-forget vs active management', 'Emotional detachment during live trades'], examples: ['EUR/USD: Entry 1.0880, moved BE at 1.0905 (1R), partial at 1.0930 (2R), trail closed at 1.0960 = 2.6R avg', 'Gold: Entry $2,395, BE at $2,410, 50% closed at $2,425, trail stopped at $2,440 = 2.3R avg', 'Rule: If uncertain, set TP and SL then close the chart'] },
  'trend-trading.mdx': { title: 'Trend Trading — Complete Guide', desc: 'Master trend trading strategies. Learn to ride trends, add to winners, and exit at trend exhaustion.', level: 'intermediate', order: 30, topic: 'trend trading', keyPoints: ['Trade WITH the dominant trend always', 'Enter at pullbacks to key levels within the trend', 'Add to winning positions at new pullbacks', 'Exit when trend shows exhaustion signals', 'Never counter-trend trade as a beginner'], examples: ['EUR/USD uptrend: 3 entries at each HL → 1.0880, 1.0920, 1.0960 → all hit 2R+', 'Gold uptrend: Re-entered at each 4H OB → $2,380, $2,410, $2,440 → +$90 total', 'NAS100: Rode NY uptrend with trail stop → 18,250 to 18,450 = +200 points'] },
  'news-impact.mdx': { title: 'News Impact on Price Action — Complete Guide', desc: 'Master trading around news events. Learn how NFP, CPI, FOMC affect price action and when to trade or stay out.', level: 'intermediate', order: 31, topic: 'news impact on price action', keyPoints: ['High-impact news creates volatile spikes', 'Pre-news: Market consolidates (compression)', 'During news: Unpredictable whipsaw (stay out)', 'Post-news: Wait for dust to settle, then trade the direction', '15-30 minutes after news = optimal entry time', 'Always check economic calendar (forexfactory.com)'], examples: ['NFP +300K (strong USD): Wait 15 min, sell EUR/USD at 8:00 PM BD → +45 pips', 'CPI hot: Gold drops $20, bounces $30, then drops $50 — wait for 2nd move → sell at $2,410 → +$35', 'FOMC: NAS100 whipsaws ±200 points → wait 30 min → enter the direction → +120 points'] },
  'advanced-price-action.mdx': { title: 'Advanced Price Action — Complete Guide', desc: 'Advanced PA techniques. Learn institutional order flow reading, multi-asset correlation, and professional-level PA analysis.', level: 'advanced', order: 32, topic: 'advanced price action', keyPoints: ['Combining PA with SMC/ICT concepts for elite-level analysis', 'Multi-asset correlation: DXY, bonds, SPX relationship', 'Order flow reading through candle clusters', 'Market manipulation pattern recognition', 'Professional trade planning with PA confluence', 'Wyckoff integration with modern PA'], examples: ['DXY bearish → EUR/USD bullish PA at OB → high-confluence long → +80 pips', 'Bond yields falling + Gold bullish structure + $2,380 OB = Triple confluence → +$50', 'Wyckoff spring at EUR/USD 1.0850 = institutional accumulation → 150-pip rally'] }
};
for (const [filename, data] of Object.entries(files)) {
  const path = join(dir, filename);
  const md = `---
title: "${data.title}"
description: "${data.desc}"
level: ${data.level}
order: ${data.order}
lastUpdated: "2026-05-11"
---
${data.content}
`;
  writeFileSync(path, md);
  console.log(`✅ Wrote ${filename}`);
}
// Write simpler files with generated structure
for (const [filename, data] of Object.entries(simpleFiles)) {
  const path = join(dir, filename);
  const keyPointsList = data.keyPoints.map((p, i) => `${i + 1}. **${p.split(' — ')[0]}** — ${p.includes('—') ? p.split('—')[1].trim() : 'Essential aspect of ' + data.topic}`).join('\n');
  const examplesList = data.examples.map((e, i) => `### Example ${i + 1}: ${e.split('→')[0].trim()}\n- **Setup**: ${e.split('→')[0].trim()}\n- **Result**: ${e.split('→').slice(1).join('→').trim()}`).join('\n\n');
  const md = `---
title: "${data.title}"
description: "${data.desc}"
level: ${data.level}
order: ${data.order}
lastUpdated: "2026-05-11"
---
## What is ${data.title.replace(' — Complete Guide', '')}?
${data.title.replace(' — Complete Guide', '')} is a key concept in Price Action trading that focuses on understanding **${data.topic}**. Mastering this gives you an edge in reading market behavior and executing precise trades.
<Callout type="info" title="Key Concept">
Understanding ${data.topic} is essential for any serious trader. This concept builds on foundational Price Action knowledge and helps you make better trading decisions in real market conditions.
</Callout>
---
## Key Concepts
${keyPointsList}
---
## How to Apply
### Step-by-Step Analysis:
1. **Start with HTF** — Identify the overall context (trend, range, key levels)
2. **Identify the setup** — Look for ${data.topic} patterns on your analysis timeframe
3. **Wait for confirmation** — Use candlestick signals and LTF structure confirmation
4. **Execute with precision** — Enter with tight stop and clear target
5. **Manage the trade** — Follow your exit rules and risk management
---
## Real Trading Examples
${examplesList}
---
## Session Timing (BD Time)
| Session | BD Time | ${data.topic} Relevance |
|---------|---------|------------------------|
| **Asian** | 2:00 AM - 10:00 AM | Low volatility — setups form but don't trigger |
| **London** | 1:00 PM - 10:00 PM | Best for EUR/GBP ${data.topic} setups |
| **New York** | 7:30 PM - 4:00 AM | Best for USD/Gold/Indices |
| **Overlap** | 7:30 PM - 10:00 PM | Maximum volume — strongest signals |
---
## Common Mistakes
<Callout type="warning" title="Avoid These Errors">
**❌ Trading without HTF context** — ${data.topic} setups must align with the bigger picture.
**❌ Ignoring confirmation** — Wait for the candle signal or LTF structure shift before entering.
**❌ Poor risk management** — Even the best ${data.topic} setup can fail. Use 1-2% risk maximum.
**❌ Overcomplicating** — Keep your ${data.topic} analysis simple and clean.
**❌ Not journaling** — Record every ${data.topic} trade with screenshots for continuous improvement.
</Callout>
---
## Summary
| Aspect | Details |
|--------|---------|
| **Concept** | ${data.topic} |
| **Level** | ${data.level} |
| **Best TF** | ${data.level === 'advanced' ? '15M-1H for entries, 4H-Daily for context' : '4H for analysis, 15M for entry'} |
| **Key Rule** | Always confirm with structure and candle signals |
| **Risk** | 1-2% per trade maximum |
---
## Related Topics
- [Market Structure](/en/price-action/market-structure) — Foundation for all PA concepts
- [Trend Analysis](/en/price-action/trend-analysis) — Trend context
- [Confirmation](/en/price-action/confirmation) — Entry validation
- [Risk Management](/en/price-action/risk-management) — Capital protection
`;
  writeFileSync(path, md);
  console.log(`✅ Wrote ${filename}`);
}
console.log('\n✅ All English price-action files rewritten!');
