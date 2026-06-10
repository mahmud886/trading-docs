import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Created: ${filePath}`);
}

// ============================================================
// PHASE 2: Order Flow & Volume Profile
// ============================================================
const orderFlowMeta = {
  "introduction": "Introduction to Order Flow",
  "dom-level2": "DOM & Level 2 Data",
  "volume-profile": "Volume Profile (POC, VAH, VAL)",
  "vwap": "VWAP — Institutional Anchor",
  "delta-analysis": "Delta & Cumulative Delta",
  "footprint-charts": "Footprint Charts & Clusters",
  "absorption-exhaustion": "Absorption & Exhaustion",
  "iceberg-spoofing": "Iceberg Orders & Spoofing"
};

const orderFlowContent = [
  {
    slug: "introduction",
    title: "Introduction to Order Flow Trading",
    description: "Understand order flow — the study of real-time buy and sell orders that reveals institutional activity invisible on regular charts. The foundation of professional trading.",
    level: "beginner",
    order: 1,
    content: `## What is Order Flow?

Order Flow is the study of **actual buy and sell orders** entering the market in real-time. While price charts show you WHERE price went, order flow shows you WHY and HOW it got there.

<Callout type="info" title="The Institutional Edge">
Every candle on your chart is the result of thousands of individual orders being matched. Order flow lets you see INSIDE each candle — revealing whether institutions are buying, selling, or absorbing pressure.
</Callout>

---

## Why Order Flow Matters

### Price Charts vs Order Flow

| Aspect | Price Charts | Order Flow |
|--------|-------------|------------|
| Shows | Where price went | Why price moved |
| Timing | After the fact | Real-time |
| Depth | Surface level | Institutional intent |
| Edge | Pattern recognition | Supply/demand imbalance |
| Used by | Retail traders | Institutional desks |

### The Order Matching Process

Every trade requires two parties:
1. **Aggressive buyer** (market order to buy) matched with **passive seller** (limit order to sell)
2. **Aggressive seller** (market order to sell) matched with **passive buyer** (limit order to buy)

\`\`\`
Market Buy Order → Matched with Limit Sell (at Ask) → Price stays/rises
Market Sell Order → Matched with Limit Buy (at Bid) → Price stays/falls
\`\`\`

---

## Key Order Flow Concepts

### 1. Aggressive vs Passive Orders

- **Aggressive orders** (market orders): Take liquidity, cross the spread
- **Passive orders** (limit orders): Provide liquidity, sit in the order book
- **Institutions primarily use limit orders** — they provide liquidity and avoid slippage

### 2. The Order Book (DOM)

The Depth of Market shows all pending limit orders at each price level:
- **Bid side**: Limit buy orders (support)
- **Ask side**: Limit sell orders (resistance)
- **Imbalances**: When one side is significantly heavier

### 3. Volume at Price

Unlike time-based volume (volume per candle), Volume at Price shows:
- How much volume traded at each price level
- Where the most activity occurred (Point of Control)
- Where price found acceptance vs rejection

---

## Order Flow Tools Overview

| Tool | What It Shows | Best For |
|------|--------------|----------|
| **DOM/Level 2** | Live order book depth | Scalping, reading intent |
| **Volume Profile** | Volume distribution by price | Finding S/R, value areas |
| **Footprint Charts** | Bid/ask volume per candle | Seeing inside candles |
| **Delta** | Buy vs sell pressure | Confirming moves |
| **VWAP** | Volume-weighted average | Institutional benchmark |

---

## Who Uses Order Flow?

- **Market makers** — Manage inventory and hedge risk
- **Prop firm traders** — Edge in execution and timing
- **Hedge funds** — Confirm directional bias before large entries
- **HFT firms** — Exploit microsecond imbalances
- **Institutional desks** — Execute large orders without market impact

---

## Getting Started

To begin reading order flow effectively:

1. Start with **Volume Profile** — understand where volume clusters
2. Add **VWAP** — institutional benchmark price
3. Learn **Delta** — buy/sell pressure imbalances
4. Graduate to **Footprint charts** — see inside each candle
5. Finally **DOM reading** — real-time order book analysis

<Callout type="warning" title="Important">
Order flow is NOT a replacement for market structure and price action — it's a CONFIRMATION tool. Always combine with HTF bias (ICT/SMC concepts) before using order flow for precision entries.
</Callout>
`
  },
  {
    slug: "dom-level2",
    title: "DOM & Level 2 Data Reading — Complete Guide",
    description: "Master Depth of Market (DOM) and Level 2 data reading. Learn to identify institutional orders, spoofing, absorption, and real-time supply/demand imbalances used by professional traders.",
    level: "intermediate",
    order: 2,
    content: `## What is DOM (Depth of Market)?

The Depth of Market (DOM), also known as Level 2, the Order Book, or the Ladder, shows all **pending limit orders** at each price level in real-time. It's the closest you can get to seeing institutional intent before price moves.

<Callout type="info" title="Level 1 vs Level 2">
**Level 1** = Best bid/ask price only. **Level 2** = Full order book depth showing ALL pending orders at every price level. Professional traders need Level 2 for edge.
</Callout>

---

## DOM Structure

\`\`\`
PRICE    |  BID (Buy Limits)  |  ASK (Sell Limits)
---------|--------------------|-----------------
1.0955   |                    |  450 contracts
1.0954   |                    |  320 contracts
1.0953   |                    |  180 contracts  ← Best Ask
1.0952   |  220 contracts     |                 ← Best Bid
1.0951   |  380 contracts     |
1.0950   |  850 contracts     |                 ← Large support
1.0949   |  290 contracts     |
\`\`\`

---

## Reading the DOM

### Key Observations

1. **Thick levels**: Large order clusters = potential support/resistance
2. **Thin levels**: Few orders = price can move through quickly
3. **Refreshing orders**: Orders that keep appearing = institutional algo
4. **Pulling orders**: Orders disappearing before being hit = spoofing

### Bid/Ask Imbalance

- **More bids than asks** = bullish pressure building
- **More asks than bids** = bearish pressure building
- **Sudden disappearance** of one side = imminent move

---

## DOM Trading Patterns

### 1. Absorption

When a large limit order "absorbs" aggressive orders without price moving:

\`\`\`
Scenario: 500-lot limit buy at 1.0950
- Market sellers hit it: 100 lots... 200 lots... 300 lots...
- Price STAYS at 1.0950 (the limit order absorbs selling)
- Eventually sellers exhaust → price bounces UP

Interpretation: Strong institutional buyer at that level
\`\`\`

### 2. Iceberg Orders

Large orders hidden as small visible quantities:

\`\`\`
Visible: 10 lots at 1.0950
Reality: 500 lots total, showing only 10 at a time
Sign: The same level keeps "refreshing" after being hit
\`\`\`

### 3. Spoofing / Layering

Fake orders placed to manipulate perception:

\`\`\`
Spoofer places 1000 lots on bid side (looks like strong support)
Retail/algos see this and buy
Spoofer cancels bids AND sells into the buying
Price drops — spoofer profits
\`\`\`

<Callout type="warning" title="Spoofing is Illegal">
Spoofing is illegal in regulated markets (fined by SEC/CFTC). However, it still occurs in crypto and less regulated venues. Learn to identify it to avoid being trapped.
</Callout>

### 4. Stacking

Multiple limit orders placed in sequence to create a "wall":

\`\`\`
1.0960: 200 lots
1.0959: 200 lots
1.0958: 200 lots
1.0957: 200 lots  ← "Stacked" sell wall

This creates resistance. If price breaks through = strong signal.
\`\`\`

---

## DOM Trading Rules

### For Scalping
1. Identify levels with unusual order size (3x+ average)
2. Watch if aggressive orders can break through
3. If absorbed → fade the aggressor
4. If broken → join the breakout

### For Confirmation
1. Have your SMC/ICT bias first (HTF direction)
2. Drop to DOM at your entry level
3. Confirm institutional presence (absorption, iceberg, stacking)
4. Enter with confidence when DOM confirms

---

## DOM Limitations

- **Only shows LIMIT orders** — market orders are invisible until executed
- **Orders can be cancelled** — what you see may not execute
- **Crypto DOM is fragmented** — multiple exchanges = incomplete picture
- **Speed required** — DOM changes in milliseconds
- **Not suitable for swing trading** — short-term tool only

---

## Recommended Platforms for DOM

| Platform | Best For | Cost |
|----------|----------|------|
| Sierra Chart | Futures DOM | $26/month |
| Bookmap | Visual DOM heatmap | $39/month |
| Jigsaw Trading | DOM analysis | $37/month |
| Quantower | Multi-asset DOM | Free/Premium |
| ATAS | Futures + Crypto | $69/month |
`
  },
  {
    slug: "volume-profile",
    title: "Volume Profile — POC, VAH, VAL, HVN, LVN Complete Guide",
    description: "Master Volume Profile analysis. Learn Point of Control (POC), Value Area High/Low, High/Low Volume Nodes, and how institutions use volume distribution for entries and exits.",
    level: "intermediate",
    order: 3,
    content: `## What is Volume Profile?

Volume Profile is a charting tool that shows the **distribution of volume at each price level** over a specified time period. Unlike traditional volume bars (which show volume per time), Volume Profile shows volume per PRICE — revealing where the most trading activity occurred.

<Callout type="info" title="Why Institutions Use Volume Profile">
Institutions don't care about time-based volume. They care about WHERE they filled orders and where they still have unfilled orders. Volume Profile shows exactly this.
</Callout>

---

## Key Volume Profile Components

### Point of Control (POC)
- The price level with the **highest traded volume**
- Represents "fair value" — where most agreement between buyers and sellers occurred
- **Acts as a magnet** — price tends to return to POC
- Institutional benchmark for mean reversion trades

### Value Area (VA) — 70% Rule
- The range containing **70% of total volume** (one standard deviation)
- **Value Area High (VAH)**: Upper boundary of the value area
- **Value Area Low (VAL)**: Lower boundary of the value area
- Price within VA = "accepted" by market participants

### High Volume Nodes (HVN)
- Price levels with **above-average volume**
- Represent areas of **high acceptance/agreement**
- Price tends to **consolidate** at HVNs
- Act as support/resistance

### Low Volume Nodes (LVN)
- Price levels with **below-average volume**
- Represent areas of **rejection/disagreement**
- Price tends to **move quickly through** LVNs
- Act as breakout/breakdown zones

---

## Volume Profile Structure

\`\`\`
Price    Volume Distribution
─────    ──────────────────────────
1.1000   ████                         ← LVN (rejection)
1.0980   ████████████                 ← HVN (acceptance)
1.0960   ████████████████████████████ ← POC (fair value)
1.0940   ███████████████              ← HVN
1.0920   █████                        ← LVN (rejection)
1.0900   ██████████                   ← VAL boundary
\`\`\`

---

## Volume Profile Types

### 1. Session Volume Profile
- Shows volume for a single trading session (daily)
- Best for: Intraday analysis, identifying daily POC

### 2. Composite Volume Profile
- Aggregates volume across multiple sessions
- Best for: Identifying major S/R, swing trade levels

### 3. Visible Range Volume Profile (VRVP)
- Shows volume for whatever's visible on your chart
- Best for: Quick analysis of current price context

### 4. Fixed Range Volume Profile
- Custom-defined range (you pick start and end)
- Best for: Analyzing specific moves or consolidations

---

## Trading with Volume Profile

### Strategy 1: POC Magnet
- Price deviates from POC → expect mean reversion
- Enter when price returns toward POC from extreme
- Stop loss beyond the LVN boundary

### Strategy 2: Value Area Rotation
- Price above VAH → bullish continuation likely
- Price below VAL → bearish continuation likely
- Price re-entering VA from outside → fade the extreme

### Strategy 3: LVN Breakout
- When price approaches an LVN, expect fast movement
- LVN + SMC confluence (FVG, OB) = high probability
- Use LVN as your "speed zone" — don't enter in LVN, enter BEFORE

### Strategy 4: Naked POC
- A POC from a previous session that hasn't been retested
- Acts as a magnetic level — price will likely visit it
- Combine with daily bias for direction

---

## Volume Profile + ICT/SMC Confluence

| VP Level | SMC Equivalent | Confluence Signal |
|----------|---------------|-------------------|
| POC | Equilibrium | Mean reversion target |
| VAH | Premium zone | Look for shorts |
| VAL | Discount zone | Look for longs |
| HVN | Order Block zone | Strong S/R |
| LVN | FVG / Imbalance | Fast price delivery |
| Naked POC | Liquidity target | Draw on liquidity |

---

## Practical Application

### Daily Workflow
1. Mark yesterday's POC, VAH, VAL on your chart
2. Identify any naked (untested) POCs from past sessions
3. Note where LVNs align with ICT levels (OBs, FVGs)
4. If price opens outside VA → watch for rotation trade
5. If price opens inside VA → wait for breakout of VA edges

<Callout type="warning" title="Common Mistake">
Don't use Volume Profile in isolation. A POC without directional bias is just a level. Always combine with HTF market structure and ICT/SMC concepts for direction FIRST, then use VP for precision.
</Callout>
`
  },
  {
    slug: "vwap",
    title: "VWAP — Volume Weighted Average Price (Institutional Anchor)",
    description: "Master VWAP — the single most important institutional benchmark. Learn how banks use VWAP for execution, how to identify institutional positioning, and VWAP trading strategies.",
    level: "intermediate",
    order: 4,
    content: `## What is VWAP?

VWAP (Volume Weighted Average Price) is the **average price weighted by volume** — it shows the true average price at which a security has traded throughout the session. It's the #1 benchmark used by institutional traders to evaluate execution quality.

<Callout type="info" title="The Institutional Benchmark">
When a portfolio manager tells their execution desk to buy 1 million shares, the desk's performance is measured against VWAP. If they bought below VWAP = good execution. Above VWAP = poor execution. This is why price gravitates toward VWAP.
</Callout>

---

## VWAP Formula

\`\`\`
VWAP = Σ (Price × Volume) / Σ (Volume)

For each period:
Typical Price = (High + Low + Close) / 3
Cumulative TP×V = Running total of (Typical Price × Volume)
Cumulative Volume = Running total of Volume
VWAP = Cumulative TP×V / Cumulative Volume
\`\`\`

---

## Why VWAP Matters

### For Institutions
- **Execution benchmark**: Buy below VWAP, sell above VWAP
- **Algorithm anchor**: TWAP and VWAP algos use it as target
- **Performance measurement**: Trading desks evaluated against VWAP
- **Order flow magnet**: Large orders cluster around VWAP

### For Retail Traders
- **Institutional presence indicator**: Where big money is active
- **Dynamic support/resistance**: Intraday S/R level
- **Trend filter**: Above VWAP = bullish intraday, below = bearish
- **Mean reversion target**: Price deviates → returns to VWAP

---

## VWAP Trading Strategies

### Strategy 1: VWAP as Trend Filter
- **Price > VWAP**: Only look for longs (institutions buying)
- **Price < VWAP**: Only look for shorts (institutions selling)
- **Price at VWAP**: Wait — no clear institutional direction

### Strategy 2: VWAP Bounce
1. Price pulls back to VWAP during trend
2. Confluence with OB/FVG at VWAP level
3. Enter at VWAP with stop below recent swing
4. Target: Previous high/VWAP standard deviation band

### Strategy 3: VWAP Cross
- Price crosses ABOVE VWAP with displacement = bullish shift
- Price crosses BELOW VWAP with displacement = bearish shift
- Best when aligned with HTF bias (kill zone timing)

### Strategy 4: Anchored VWAP
- Anchor VWAP to specific event (earnings, FOMC, swing high/low)
- Shows average cost basis of all traders since that event
- If price > anchored VWAP from swing low = longs in profit

---

## VWAP Standard Deviation Bands

\`\`\`
+2 SD  ─────────────────  Extremely overbought (institutional selling zone)
+1 SD  ─────────────────  Moderately overbought
VWAP   ═════════════════  Fair value (institutional benchmark)
-1 SD  ─────────────────  Moderately oversold
-2 SD  ─────────────────  Extremely oversold (institutional buying zone)
\`\`\`

- **±1 SD**: Normal deviation, expect rotation
- **±2 SD**: Extreme deviation, high probability reversal
- **±3 SD**: Rare — only during high-impact news

---

## VWAP + ICT/SMC Integration

| Scenario | Interpretation | Action |
|----------|---------------|--------|
| Price above VWAP + Bullish OB below | Strong bullish confirmation | Buy at OB near VWAP |
| Price below VWAP + Bearish OB above | Strong bearish confirmation | Sell at OB near VWAP |
| FVG forms at VWAP | Institutional commitment | High-probability trade |
| Liquidity sweep + VWAP reclaim | False breakout confirmed | Counter-trend entry |

---

## Types of VWAP

### Session VWAP (Standard)
- Resets daily — most common for intraday
- Shows TODAY's institutional average

### Weekly VWAP
- Resets weekly — for swing traders
- Shows weekly institutional positioning

### Monthly VWAP
- Resets monthly — for position traders
- Major institutional reference level

### Anchored VWAP
- Starts from any point YOU choose
- Most flexible — anchor to key events

---

## VWAP Limitations

- Resets each session (standard VWAP) — no overnight context
- Less useful in low-volume markets (crypto weekends)
- Lags during high volatility (like all averages)
- Best for intraday — less useful on weekly/monthly charts
- Requires volume data — doesn't work on forex spot (use futures)

<Callout type="warning" title="Forex VWAP Note">
Spot forex has no centralized volume. For accurate VWAP on forex, use futures data (6E for EUR/USD, 6B for GBP/USD) or broker-level tick volume as a proxy.
</Callout>
`
  },
  {
    slug: "delta-analysis",
    title: "Delta & Cumulative Delta Analysis — Complete Guide",
    description: "Master Delta analysis — the difference between buying and selling volume. Learn cumulative delta divergence, delta absorption, and how to confirm institutional direction.",
    level: "advanced",
    order: 5,
    content: `## What is Delta?

Delta measures the **difference between aggressive buying volume and aggressive selling volume** at each price level or within each candle. It reveals WHO is more aggressive — buyers or sellers — regardless of what the price candle shows.

<Callout type="info" title="Delta = Truth Behind the Candle">
A green bullish candle can have NEGATIVE delta (more selling). This means sellers were aggressive but buyers absorbed them via limit orders. This is a powerful signal that most traders miss.
</Callout>

---

## Delta Formula

\`\`\`
Delta = Volume at Ask (aggressive buys) - Volume at Bid (aggressive sells)

Positive Delta (+) = More aggressive buying
Negative Delta (-) = More aggressive selling
Zero Delta (≈0) = Balanced / indecision
\`\`\`

---

## Types of Delta

### 1. Candle Delta (Per-Bar)
- Net buying/selling for each individual candle
- Quick snapshot of who dominated that candle

### 2. Cumulative Delta (Running Total)
- Running sum of all delta values over time
- Shows overall institutional pressure direction
- Like an "internal trend line" of buying/selling

### 3. Delta at Price (Footprint)
- Delta broken down by each price level within a candle
- Most granular view — shows exact levels of imbalance

---

## Reading Delta Signals

### Bullish Signals

| Signal | Description | Meaning |
|--------|-------------|---------|
| Rising price + Rising cumulative delta | Trend confirmation | Genuine buying pressure |
| Falling price + Rising cumulative delta | **Divergence** | Sellers exhausting, reversal coming |
| Large positive delta on pullback candle | Absorption | Institutions buying the dip |

### Bearish Signals

| Signal | Description | Meaning |
|--------|-------------|---------|
| Falling price + Falling cumulative delta | Trend confirmation | Genuine selling pressure |
| Rising price + Falling cumulative delta | **Divergence** | Buyers exhausting, reversal coming |
| Large negative delta on rally candle | Absorption | Institutions selling the rally |

---

## Cumulative Delta Divergence

The most powerful delta signal — when price and cumulative delta disagree:

\`\`\`
BULLISH DIVERGENCE:
Price: Making lower lows ↓↓↓
Cum. Delta: Making higher lows ↑↑↑
= Sellers hitting bids but being ABSORBED by institutional limit buys
= Reversal likely — institutions accumulating

BEARISH DIVERGENCE:
Price: Making higher highs ↑↑↑
Cum. Delta: Making lower highs ↓↓↓
= Buyers lifting offers but being ABSORBED by institutional limit sells
= Reversal likely — institutions distributing
\`\`\`

---

## Delta + ICT/SMC Integration

### At Order Blocks
- Bullish OB + Positive delta spike at that level = CONFIRMED institutional buying
- Bearish OB + Negative delta spike = CONFIRMED institutional selling
- OB with neutral delta = Weak OB, lower probability

### At Liquidity Sweeps
- Sweep of lows + Immediate positive delta shift = Smart money buying
- Sweep of highs + Immediate negative delta shift = Smart money selling
- Delta confirms the "intent" behind the sweep

### At FVG Fill
- FVG fills with opposing delta = Just technical fill, original bias intact
- FVG fills with confirming delta = Potential reversal of original move

---

## Practical Delta Trading Rules

### Entry Confirmation
1. Identify your setup (OB, FVG, sweep) using ICT/SMC
2. Drop to LTF and watch delta
3. Wait for delta to CONFIRM your direction:
   - For longs: Positive delta shift / absorption of sellers
   - For shorts: Negative delta shift / absorption of buyers
4. Enter with delta confirmation, stop below structure

### Exit/Invalidation
- If delta diverges AGAINST your position = early warning
- If cumulative delta makes new extreme against you = exit early
- Don't fight sustained delta pressure

---

## Delta Absorption Patterns

### Buying Absorption (Bullish)
\`\`\`
Multiple red candles with POSITIVE delta
= Sellers aggressive but being absorbed by limit buyers
= Invisible institutional accumulation
= Spring-like energy building for move UP
\`\`\`

### Selling Absorption (Bearish)
\`\`\`
Multiple green candles with NEGATIVE delta
= Buyers aggressive but being absorbed by limit sellers
= Invisible institutional distribution
= Energy building for move DOWN
\`\`\`

---

## Tools for Delta Analysis

| Platform | Delta Features | Best For |
|----------|---------------|----------|
| Sierra Chart | Full delta, cum delta, footprint | Professional futures |
| ATAS | Advanced delta profiles | Crypto + Futures |
| Bookmap | Visual delta heatmap | Real-time scalping |
| VolSys | Delta dashboard | Quick analysis |
| TradingView | Basic delta indicators | Beginner friendly |
`
  },
  {
    slug: "footprint-charts",
    title: "Footprint Charts & Cluster Analysis — Complete Guide",
    description: "Master footprint charts — see inside every candle with bid/ask volume, delta, and imbalances. Learn cluster analysis used by institutional traders for precision entries.",
    level: "advanced",
    order: 6,
    content: `## What are Footprint Charts?

Footprint charts (also called cluster charts or bid/ask charts) show the **exact volume traded at each price level within each candle**, separated by buying volume (at ask) and selling volume (at bid). They let you see INSIDE every candle.

<Callout type="info" title="X-Ray Vision for Candles">
A regular candle shows Open, High, Low, Close. A footprint candle shows you the exact buying and selling battle at EVERY price tick within that candle. It's like having X-ray vision.
</Callout>

---

## Footprint Chart Structure

\`\`\`
         Bid × Ask
         (Sells)  (Buys)
─────────────────────────
1.0960:  45  ×  120   ← Buying imbalance (institutional buying)
1.0959:  80  ×  85    ← Balanced
1.0958:  90  ×  92    ← Balanced
1.0957:  150 ×  40    ← Selling imbalance (institutional selling)
1.0956:  60  ×  55    ← Balanced
─────────────────────────
Delta: +62 (net buying)
\`\`\`

---

## Key Footprint Patterns

### 1. Imbalance (Stacked Imbalances)

When one side has 200-400%+ more volume than the other at consecutive prices:

\`\`\`
1.0960:  20  ×  180  ← 9:1 buy imbalance
1.0959:  25  ×  200  ← 8:1 buy imbalance
1.0958:  30  ×  150  ← 5:1 buy imbalance
= STACKED BUY IMBALANCE = Strong institutional buying
= This area becomes future support
\`\`\`

### 2. Exhaustion

High volume at extreme prices with diminishing delta:

\`\`\`
At the TOP of a move:
1.0980:  10  ×  5    ← Volume dying
1.0979:  15  ×  12   ← Losing momentum
1.0978:  20  ×  40   ← Last aggressive buyers
1.0977:  80  ×  200  ← Peak buying (exhaustion)
= Buyers used all energy at 1.0977 = likely reversal
\`\`\`

### 3. Absorption

Large passive orders absorbing aggressive orders:

\`\`\`
1.0950:  500  ×  50   ← 500 aggressive sells hitting...
1.0950:  500  ×  50   ...but price NOT dropping!
= Someone is absorbing 500 lots of selling
= Large institutional limit buy at 1.0950
= Bullish signal
\`\`\`

### 4. Unfinished Auction

When a price level has volume on only one side:

\`\`\`
1.0940:  0  ×  45    ← Only buyers, no sellers = unfinished business
= Price likely returns to complete the auction at this level
\`\`\`

---

## Footprint Trading Strategies

### Strategy 1: Stacked Imbalance Entry
1. Identify stacked imbalances (3+ consecutive levels with 3:1+ ratio)
2. Mark the zone as institutional interest
3. Wait for price to retrace to that zone
4. Enter at the imbalance zone with stop below

### Strategy 2: Exhaustion Reversal
1. At a key level (OB, FVG, VP POC), watch for exhaustion
2. High volume + diminishing delta at the extreme
3. This signals the aggressor is running out of orders
4. Counter-trade with stop beyond the exhaustion wick

### Strategy 3: Absorption Confirmation
1. At your entry level (ICT/SMC setup), watch footprint
2. If you see absorption (high volume, no price movement)
3. The absorbing side = smart money
4. Enter in direction of the absorber

---

## Footprint + ICT/SMC Integration

### At Order Blocks
- Look for stacked imbalances within the OB candle
- The imbalance zone = EXACT institutional entry price
- Refine your OB entry to the specific imbalance level

### At FVG
- FVG forms with stacked imbalances = STRONG FVG
- FVG forms without imbalances = Weaker, may fill completely
- Use footprint to grade FVG quality

### At Liquidity Sweeps
- After a sweep, look for absorption in footprint
- Absorption at the sweep level = smart money present
- No absorption = just a stop hunt, continuation likely

---

## Reading Speed

Footprint reading requires practice:

| Skill Level | Focus | Timeframe |
|-------------|-------|-----------|
| Beginner | Identify imbalances only | 5M-15M |
| Intermediate | Imbalances + absorption | 1M-5M |
| Advanced | All patterns in real-time | 1M and below |
| Expert | Combine with DOM flow | Tick charts |

---

## Recommended Setup

### Chart Configuration
- Timeframe: 5M or 15M for swing, 1M for scalping
- Filter: Show imbalances at 200%+ ratio
- Color: Highlight stacked imbalances (3+ consecutive)
- Delta: Show per-bar delta below footprint

### Platform Requirements
- Sierra Chart (best for futures)
- ATAS (best for crypto)
- Quantower (multi-asset)
- Exocharts (crypto-focused)
`
  },
  {
    slug: "absorption-exhaustion",
    title: "Absorption & Exhaustion Patterns — Complete Guide",
    description: "Master absorption and exhaustion patterns in order flow. Learn how to identify when institutions are absorbing aggressive orders and when momentum is exhausting for precision reversals.",
    level: "advanced",
    order: 7,
    content: `## Absorption vs Exhaustion

These are the two most powerful order flow patterns that reveal institutional activity:

- **Absorption**: When a large passive order "absorbs" aggressive orders without price moving — hidden institutional strength
- **Exhaustion**: When aggressive orders are depleting without creating further movement — the aggressor is running out of ammunition

<Callout type="info" title="The Key Difference">
Absorption = Strong hands absorbing weak hands. Price HELD because institutions WANT to defend that level.
Exhaustion = Aggressive traders running out of energy. Price STALLS because no one is left to push it further.
Both signal reversals, but for different reasons.
</Callout>

---

## Absorption Patterns

### What Absorption Looks Like

\`\`\`
Time    Price    Bid Volume    Ask Volume    Delta    Price Change
────    ─────    ──────────    ──────────    ─────    ────────────
10:01   1.0950   500           50            -450     0
10:02   1.0950   480           40            -440     0
10:03   1.0950   450           35            -415     0
10:04   1.0950   300           30            -270     0 ← Selling slowing
10:05   1.0951   50            200           +150     +1 ← BREAKOUT

Large negative delta (heavy selling) BUT price doesn't drop.
= Massive institutional limit buy ABSORBING all selling pressure.
= When sellers exhaust → explosive move UP.
\`\`\`

### Absorption Rules

1. **High volume** at a price level
2. **Negative/positive delta** (one side aggressive)
3. **Price DOES NOT MOVE** in the direction of aggression
4. **Duration**: Minimum 3-5 prints of absorption
5. **Resolution**: When the aggressor stops → price moves AWAY from them

### Types of Absorption

| Type | Description | Signal |
|------|-------------|--------|
| Bid absorption | Large limit buys absorbing market sells | Bullish |
| Ask absorption | Large limit sells absorbing market buys | Bearish |
| Double absorption | Both sides absorbing at different levels | Range-bound |

---

## Exhaustion Patterns

### What Exhaustion Looks Like

\`\`\`
Time    Price    Volume    Delta    Candle
────    ─────    ──────    ─────    ──────
10:01   1.0950   800       +600     Large green
10:02   1.0960   600       +400     Medium green
10:03   1.0965   300       +150     Small green ← Volume declining
10:04   1.0967   100       +30      Doji ← Almost no energy left
10:05   1.0965   400       -300     Red ← Reversal begins

Volume and delta DECLINING as price pushes higher.
= Buyers are exhausting — no fresh demand entering.
= Reversal imminent.
\`\`\`

### Exhaustion Rules

1. **Declining volume** on each push in the trend direction
2. **Declining delta** magnitude with each candle
3. **Price making new highs/lows** but with less conviction
4. **Wicks appearing** at extremes (failed attempts)
5. **Resolution**: Aggressive counter-move when exhaustion completes

### Exhaustion at Key Levels

Most powerful when exhaustion occurs at:
- Volume Profile VAH/VAL boundaries
- Order Block zones
- Liquidity pool locations (EQH/EQL)
- VWAP standard deviation bands

---

## Trading Absorption

### Entry Strategy
1. **Identify key level** (OB, demand zone, VP POC)
2. **Watch for absorption** — high delta against the level, price holds
3. **Wait for resolution** — aggressor exhausts, price starts moving away
4. **Enter** on first displacement candle after absorption
5. **Stop loss** below the absorption zone

### Example: Bullish Absorption Trade
\`\`\`
Setup: Price at daily bullish OB (1.0950)
Footprint shows: 500+ lots hitting bid, price holding 1.0950
Duration: 5 minutes of absorption
Resolution: Green engulfing candle breaks above 1.0960
Entry: 1.0962 (above resolution candle)
Stop: 1.0945 (below absorption zone)
Target: Next liquidity pool (EQH at 1.1020)
\`\`\`

---

## Trading Exhaustion

### Entry Strategy
1. **Identify extended move** — price far from VWAP/POC
2. **Watch for declining delta** — momentum fading
3. **Confirm with volume** — each candle has less volume
4. **Wait for reversal candle** — first aggressive candle against trend
5. **Enter** on the reversal with stop beyond the exhaustion extreme

---

## Absorption + Exhaustion Combined

The most powerful setup:

\`\`\`
1. Price rallies with DECLINING delta (exhaustion of buyers)
2. Price reaches key resistance (OB, EQH)
3. At resistance: HIGH volume but price stops (absorption by sellers)
4. Result: DOUBLE confirmation of reversal
5. Enter short when first displacement candle breaks structure
\`\`\`

---

## Common Mistakes

- Confusing LOW VOLUME with absorption (absorption requires HIGH volume)
- Trading exhaustion too early (wait for actual reversal candle)
- Not combining with structure (absorption at random levels is meaningless)
- Over-trading absorption in ranging markets
`
  },
  {
    slug: "iceberg-spoofing",
    title: "Iceberg Orders & Spoofing Detection — Complete Guide",
    description: "Learn to identify hidden institutional iceberg orders and detect illegal spoofing/layering. Understand dark pool activity and how large players conceal their true order sizes.",
    level: "expert",
    order: 8,
    content: `## What are Iceberg Orders?

An iceberg order is a large institutional order that is **broken into smaller visible portions**. Only a small "tip" is visible in the order book, while the majority remains hidden — like an iceberg where 90% is underwater.

<Callout type="info" title="Why Institutions Use Icebergs">
If a fund needs to buy 10,000 lots, showing all 10,000 in the order book would:
1. Alert other participants to their intent
2. Cause front-running (others buy ahead of them)
3. Move the market against them before filling

Solution: Show only 50 lots at a time, refill automatically when hit.
</Callout>

---

## Identifying Iceberg Orders

### Signs of an Iceberg

1. **Constant refreshing** at the same price level
2. **Volume transacted >> Visible order size** at that price
3. **Price doesn't move** despite heavy hitting
4. **Same size reappearing** repeatedly (algorithmic pattern)

### Example

\`\`\`
Order Book shows: 50 lots bid at 1.0950
Market sellers hit it: 50 lots filled
Immediately: 50 lots REAPPEARS at 1.0950
Market sellers hit again: 50 lots filled
Again: 50 lots REAPPEARS at 1.0950
...this happens 20 times...

Total filled: 1,000 lots (20 × 50)
Total visible at any time: only 50 lots
= ICEBERG ORDER — institution accumulating 1,000+ lots
\`\`\`

---

## Types of Hidden Orders

### Standard Iceberg
- Fixed clip size (e.g., always shows 50)
- Easy to detect (repetitive pattern)
- Used by: Traditional institutions, pension funds

### Randomized Iceberg
- Varying clip sizes (47, 53, 49, 51...)
- Harder to detect (looks more natural)
- Used by: Sophisticated algos, HFT firms

### Dark Pool Orders
- Completely invisible — executed on alternative venues
- Show up only in trade prints (Time & Sales)
- Large block trades between institutions
- Used by: Major banks, hedge funds

### Reserve Orders
- Similar to icebergs but broker-specific
- Some show partial, some show nothing
- Platform-dependent visibility

---

## What is Spoofing?

Spoofing is the **illegal practice** of placing large orders with the intent to **cancel them before execution** to manipulate other traders' perception of supply and demand.

### How Spoofing Works

\`\`\`
Step 1: Spoofer wants to BUY at lower price
Step 2: Places HUGE sell orders above (1000 lots on ask)
Step 3: Market sees "massive resistance" → sells
Step 4: Price drops due to retail/algo selling
Step 5: Spoofer CANCELS sell orders
Step 6: Spoofer BUYS at lower price
Step 7: Removes fake orders → price recovers → profit
\`\`\`

### Spoofing Characteristics

- Orders **placed and cancelled within seconds**
- Sizes are **disproportionately large** (10-100x normal)
- They appear during **low liquidity** periods for maximum impact
- Often combined with **layering** (multiple levels of fake orders)

---

## Layering

A more sophisticated form of spoofing:

\`\`\`
LAYERED SELL WALL (to push price down):
1.0960: 500 lots ← Fake
1.0959: 400 lots ← Fake
1.0958: 300 lots ← Fake
1.0957: 200 lots ← Fake

Creates appearance of overwhelming supply.
All cancelled once price moves to desired buy level.
\`\`\`

---

## How to Detect Spoofing

### Red Flags
1. **Large orders that never get hit** — they disappear when price approaches
2. **Rapid placement/cancellation** — millisecond lifetimes
3. **Price returns to normal** after the "wall" disappears
4. **Order-to-trade ratio** extremely high (many orders, few fills)
5. **Always on one side** — spoofer only fake-shows supply OR demand

### Protection Strategies
- **Don't react to DOM alone** — wait for actual transactions
- **Watch Time & Sales** — actual fills tell the truth
- **Ignore size on DOM in crypto** — extremely common spoofing venue
- **Focus on delta/footprint** — shows what actually TRADED, not what's sitting

---

## Dark Pools & Block Trading

### What are Dark Pools?
- Private exchanges where large orders are executed anonymously
- No pre-trade transparency (orders invisible until filled)
- ~40% of US equity volume trades on dark pools

### How They Affect Price
- Large buy on dark pool → eventually shows in tape → delayed bullish signal
- Dark pool prints at VWAP → institutional accumulation signal
- Block trades above/below market → institutional positioning

### Reading Dark Pool Activity
- Watch for "prints" in Time & Sales that don't match visible order book
- Large individual prints (500+ lots) at or near VWAP = institutional
- Repeated same-size prints at same level = algo-driven institutional filling

---

## Practical Application

### For Intraday Trading
1. **Identify icebergs** at your key levels → confirms institutional interest
2. **Ignore spoofed walls** → don't let fake orders scare you out of positions
3. **Watch actual fills** (Time & Sales) over pending orders (DOM)
4. **Large delta without price movement** = iceberg absorption

### For Swing Trading
1. **Dark pool prints** near your levels = institutions agree with your analysis
2. **Unusual block activity** = someone positioning for a move
3. **Iceberg detection** at weekly OBs = institutional commitment to that level

<Callout type="warning" title="Legal Note">
Spoofing is illegal under Dodd-Frank Act (US), MAR (EU), and similar regulations. However, it still occurs, especially in crypto markets. Learn to detect it to PROTECT yourself, not to replicate it.
</Callout>
`
  }
];

// Write Order Flow files
createFile(
  path.join(contentDir, 'en', 'order-flow', '_meta.json'),
  JSON.stringify(orderFlowMeta, null, 2) + '\n'
);

for (const item of orderFlowContent) {
  const frontmatter = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

${item.content}
`;
  createFile(
    path.join(contentDir, 'en', 'order-flow', `${item.slug}.mdx`),
    frontmatter
  );
}

// ============================================================
// PHASE 3: Intermarket & Correlation Analysis
// ============================================================
const intermarketMeta = {
  "introduction": "Introduction to Intermarket Analysis",
  "dxy-correlation": "DXY ↔ Majors Correlation",
  "yield-curve": "Yield Curve Dynamics",
  "gold-dollar-bonds": "Gold ↔ Dollar ↔ Bonds Trinity",
  "risk-on-risk-off": "Risk-On / Risk-Off Framework",
  "cross-asset-momentum": "Cross-Asset Momentum Signals",
  "spx-vix-regime": "SPX ↔ VIX Regime Detection",
  "currency-strength": "Currency Strength Methodology"
};

const intermarketContent = [
  { slug: "introduction", title: "Introduction to Intermarket Analysis", description: "Understand how markets are interconnected. No institutional fund trades a single instrument in isolation — learn the correlations that drive professional portfolio decisions.", level: "beginner", order: 1 },
  { slug: "dxy-correlation", title: "DXY ↔ Major Pairs Correlation Models", description: "Master the relationship between the US Dollar Index and major currency pairs. Learn how DXY movements predict EUR/USD, GBP/USD, and commodity currencies with institutional precision.", level: "intermediate", order: 2 },
  { slug: "yield-curve", title: "Yield Curve Dynamics — 2s10s Spread & Real Yields", description: "Understand yield curve analysis used by macro funds. Learn 2-year vs 10-year spread dynamics, real yields, and how bond markets predict currency and equity movements.", level: "intermediate", order: 3 },
  { slug: "gold-dollar-bonds", title: "Gold ↔ Dollar ↔ Bonds Trinity", description: "Master the three-way relationship between gold, US dollar, and treasury bonds. Learn how institutions use this trinity for hedging, rotation, and directional signals.", level: "intermediate", order: 4 },
  { slug: "risk-on-risk-off", title: "Risk-On / Risk-Off Framework", description: "Learn the institutional risk regime framework. Understand which assets flow into risk-on vs risk-off environments and how to position your portfolio accordingly.", level: "intermediate", order: 5 },
  { slug: "cross-asset-momentum", title: "Cross-Asset Momentum Signals", description: "Identify momentum signals across asset classes. Learn how equity momentum, bond momentum, and commodity momentum create leading signals for forex markets.", level: "advanced", order: 6 },
  { slug: "spx-vix-regime", title: "SPX ↔ VIX Relationship for Regime Detection", description: "Master the SPX-VIX inverse correlation and regime detection. Learn how volatility regimes determine institutional behavior and optimal trading strategies.", level: "advanced", order: 7 },
  { slug: "currency-strength", title: "Currency Strength Meter Methodology", description: "Build and use a currency strength meter to identify the strongest and weakest currencies. Learn institutional pairing methodology for maximum edge in forex trading.", level: "intermediate", order: 8 }
];

createFile(
  path.join(contentDir, 'en', 'intermarket', '_meta.json'),
  JSON.stringify(intermarketMeta, null, 2) + '\n'
);

for (const item of intermarketContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].trim()}

${item.description}

<Callout type="info" title="Institutional Perspective">
No hedge fund or institutional desk trades a single instrument in isolation. Understanding intermarket correlations is what separates professional macro traders from retail speculators.
</Callout>

---

## Key Concepts

This topic covers the essential frameworks that institutional traders use for cross-market analysis and correlation-based trading decisions.

---

## Why This Matters

Understanding intermarket relationships gives you:
- **Early warning signals** before moves happen in your primary market
- **Confirmation** of your directional bias from correlated assets
- **Risk management** through correlation-aware position sizing
- **Edge** that most retail traders completely ignore

---

## Practical Application

### For Forex Traders
- Check DXY direction before trading any USD pair
- Monitor yield differentials for carry trade opportunities
- Watch VIX for risk sentiment shifts

### For Index Traders
- Bond yields lead equity moves by 1-3 days
- VIX term structure predicts volatility expansion
- Sector rotation signals come from intermarket flows

### For Commodity Traders
- Real yields drive gold inversely
- USD strength pressures all commodities
- Chinese data leads base metals

<Callout type="warning" title="Correlation ≠ Causation">
Correlations change over time and can break during crisis periods. Always use correlations as ONE input in your analysis, never as the sole decision factor. Regularly update your correlation matrices.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'intermarket', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 4: Quantitative Trading
// ============================================================
const quantMeta = {
  "introduction": "Introduction to Quantitative Trading",
  "expectancy-formula": "Expectancy & Edge Calculation",
  "kelly-criterion": "Kelly Criterion & Fractional Kelly",
  "mean-reversion": "Mean Reversion Models",
  "momentum-factors": "Momentum Factor Strategies",
  "backtesting-methodology": "Statistical Backtesting Methodology",
  "monte-carlo": "Monte Carlo Simulations",
  "equity-curve-management": "Equity Curve Management",
  "walk-forward": "Walk-Forward Optimization"
};

const quantContent = [
  { slug: "introduction", title: "Introduction to Quantitative Trading", description: "Understand quantitative approaches to trading. Learn how systematic traders use mathematics, statistics, and probability to build consistent edges in the markets.", level: "beginner", order: 1 },
  { slug: "expectancy-formula", title: "Expectancy Formula & Edge Calculation", description: "Master the expectancy formula — the mathematical foundation of every profitable trading system. Calculate your true edge: (Win% × Avg Win) - (Loss% × Avg Loss).", level: "intermediate", order: 2 },
  { slug: "kelly-criterion", title: "Kelly Criterion & Fractional Kelly Position Sizing", description: "Learn optimal position sizing using Kelly Criterion. Understand full Kelly, fractional Kelly, and why most institutional traders use 25-50% Kelly for capital preservation.", level: "intermediate", order: 3 },
  { slug: "mean-reversion", title: "Mean Reversion Models", description: "Master mean reversion strategies used by quantitative funds. Learn z-score analysis, Bollinger Band reversion, pairs trading, and statistical arbitrage approaches.", level: "advanced", order: 4 },
  { slug: "momentum-factors", title: "Momentum Factor Strategies", description: "Understand momentum as a quantitative factor. Learn time-series momentum, cross-sectional momentum, and how trend-following CTAs generate returns.", level: "advanced", order: 5 },
  { slug: "backtesting-methodology", title: "Statistical Backtesting Methodology", description: "Learn rigorous backtesting methodology. Avoid survivorship bias, look-ahead bias, overfitting, and understand statistical significance testing for trading strategies.", level: "intermediate", order: 6 },
  { slug: "monte-carlo", title: "Monte Carlo Simulations for Drawdown Expectancy", description: "Master Monte Carlo analysis for trading. Simulate thousands of possible equity curves to understand drawdown probability, ruin risk, and confidence intervals.", level: "advanced", order: 7 },
  { slug: "equity-curve-management", title: "Equity Curve Management", description: "Learn to manage your strategy based on equity curve behavior. Understand when to increase/decrease size, when to pause, and equity curve trading rules.", level: "advanced", order: 8 },
  { slug: "walk-forward", title: "Walk-Forward Optimization", description: "Master walk-forward analysis — the gold standard for strategy validation. Learn in-sample/out-of-sample testing, parameter stability, and avoiding curve-fitting.", level: "expert", order: 9 }
];

createFile(
  path.join(contentDir, 'en', 'quantitative', '_meta.json'),
  JSON.stringify(quantMeta, null, 2) + '\n'
);

for (const item of quantContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('&')[0].trim()}

${item.description}

<Callout type="info" title="Quantitative Edge">
The difference between gambling and trading is QUANTIFICATION. If you cannot express your edge as a number, you don't have an edge — you have a hope. Quantitative methods turn intuition into measurable, repeatable processes.
</Callout>

---

## Core Principles

Quantitative trading is built on these foundations:
- **Everything is probability** — no certainty, only statistical edges
- **Large sample sizes** — individual trades are meaningless, systems matter
- **Mathematical expectancy** — positive expected value over time
- **Risk of ruin** — survival first, profits second
- **Process over outcome** — judge decisions, not results

---

## Practical Framework

### Step 1: Define Your Edge
- What is your win rate?
- What is your average win vs average loss?
- What is your expectancy per trade?

### Step 2: Size Appropriately
- Use Kelly Criterion or fixed fractional sizing
- Never risk more than your edge justifies
- Account for correlation between positions

### Step 3: Validate Statistically
- Minimum 100+ trade sample for significance
- Out-of-sample testing required
- Walk-forward validation for robustness

### Step 4: Monitor & Adapt
- Track equity curve vs expected behavior
- Reduce size during drawdowns beyond 1 SD
- Pause if strategy degrades beyond 2 SD

<Callout type="warning" title="Overfitting Warning">
The #1 killer of quantitative strategies is overfitting — finding patterns in historical noise that don't persist forward. Always use out-of-sample data and walk-forward testing. If a strategy looks "too good" in backtest, it probably IS too good to be true.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'quantitative', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 5: Wyckoff Method
// ============================================================
const wyckoffMeta = {
  "introduction": "Introduction to Wyckoff Method",
  "composite-man": "Composite Man Theory",
  "accumulation-schematic": "Wyckoff Accumulation Schematics",
  "distribution-schematic": "Wyckoff Distribution Schematics",
  "phases-events": "Wyckoff Phases & Events",
  "volume-spread-analysis": "Volume Spread Analysis (VSA)",
  "effort-vs-result": "Effort vs Result Principle",
  "cause-effect": "Cause and Effect (P&F Charts)"
};

const wyckoffContent = [
  { slug: "introduction", title: "Introduction to Wyckoff Method", description: "Master the Wyckoff Method — the original institutional framework from the 1930s. Understand how the 'Composite Man' (smart money) accumulates and distributes positions.", level: "beginner", order: 1 },
  { slug: "composite-man", title: "Composite Man Theory — The Original Smart Money", description: "Understand the Composite Man — Wyckoff's concept of the combined institutional operators who engineer market movements. Learn to read the market through their eyes.", level: "intermediate", order: 2 },
  { slug: "accumulation-schematic", title: "Wyckoff Accumulation Schematics #1 & #2", description: "Master Wyckoff accumulation patterns. Learn Schematic #1 (with spring) and Schematic #2 (without spring), including PS, SC, AR, ST, Spring, SOS, LPS, and BU phases.", level: "intermediate", order: 3 },
  { slug: "distribution-schematic", title: "Wyckoff Distribution Schematics #1 & #2", description: "Master Wyckoff distribution patterns. Learn Schematic #1 (with UTAD) and Schematic #2 (without UTAD), including PSY, BC, AR, ST, UT, UTAD, SOW, and LPSY phases.", level: "intermediate", order: 4 },
  { slug: "phases-events", title: "Wyckoff Phases & Events Complete Breakdown", description: "Deep dive into all Wyckoff phases: PS, SC, AR, ST, Spring, Test, SOS, LPS, BU, PSY, BC, UT, UTAD, SOW, LPSY — with identification rules and trading strategies.", level: "advanced", order: 5 },
  { slug: "volume-spread-analysis", title: "Volume Spread Analysis (VSA) — Complete Guide", description: "Master Volume Spread Analysis — the modern evolution of Wyckoff's principles. Learn to read effort (volume) vs result (spread) to identify institutional activity.", level: "advanced", order: 6 },
  { slug: "effort-vs-result", title: "Effort vs Result Principle", description: "Understand the Effort vs Result principle — when volume (effort) doesn't match price movement (result), institutions are operating. Learn to identify divergences.", level: "advanced", order: 7 },
  { slug: "cause-effect", title: "Cause and Effect — Point & Figure Charts", description: "Master Wyckoff's Cause and Effect principle using Point & Figure charts. Learn to measure the 'cause' (accumulation/distribution range) to project the 'effect' (price target).", level: "expert", order: 8 }
];

createFile(
  path.join(contentDir, 'en', 'wyckoff', '_meta.json'),
  JSON.stringify(wyckoffMeta, null, 2) + '\n'
);

for (const item of wyckoffContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('#')[0].trim()}

${item.description}

<Callout type="info" title="The Foundation of Smart Money">
Richard Wyckoff developed his method in the 1930s by studying how JP Morgan, Jesse Livermore, and other "composite operators" manipulated markets. Modern SMC and ICT concepts are DIRECTLY derived from Wyckoff principles. Understanding Wyckoff is understanding the ROOT of institutional trading.
</Callout>

---

## Wyckoff's Three Laws

### 1. Law of Supply and Demand
- Price rises when demand > supply
- Price falls when supply > demand
- Balance = range (accumulation or distribution)

### 2. Law of Cause and Effect
- Every move (effect) requires preparation (cause)
- The size of the cause determines the size of the effect
- Accumulation range → Markup. Distribution range → Markdown.

### 3. Law of Effort vs Result
- Volume (effort) should confirm price movement (result)
- Divergence between effort and result = institutional manipulation
- High volume + no movement = absorption (smart money at work)

---

## Practical Application

### Identifying Institutional Phase
1. Is the market in accumulation, markup, distribution, or markdown?
2. Where are we within the current phase?
3. What event comes next in the sequence?

### Entry Strategy
- Buy during accumulation (at Spring or LPS)
- Sell during distribution (at UTAD or LPSY)
- Confirm with volume analysis (VSA principles)
- Align with higher timeframe phase

### Risk Management
- Stop loss below Spring (for longs) or above UTAD (for shorts)
- Position size based on phase confidence
- Scale in during confirmation events (SOS, SOW)

<Callout type="warning" title="Pattern Recognition Warning">
Wyckoff schematics are IDEALIZED templates. Real markets rarely follow them perfectly. Look for the PRINCIPLE behind each event, not the exact visual pattern. Phase identification is more important than event labeling.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'wyckoff', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 6: Auction Market Theory
// ============================================================
const auctionMeta = {
  "introduction": "Introduction to Auction Market Theory",
  "market-profile": "Market Profile (TPO Charts)",
  "initial-balance": "Initial Balance (IB)",
  "value-area": "Value Area Migration",
  "excess-poor-highs-lows": "Excess & Poor Highs/Lows",
  "single-prints": "Single Print Concepts",
  "balanced-imbalanced": "Balanced vs Imbalanced Markets"
};

const auctionContent = [
  { slug: "introduction", title: "Introduction to Auction Market Theory", description: "Understand Auction Market Theory (AMT) — the framework that explains HOW and WHY price moves. Learn how markets facilitate trade between buyers and sellers through price discovery.", level: "beginner", order: 1 },
  { slug: "market-profile", title: "Market Profile — TPO Charts Complete Guide", description: "Master Market Profile (Time Price Opportunity) charts. Learn to read TPO distributions, identify balance/imbalance, and understand institutional price acceptance.", level: "intermediate", order: 2 },
  { slug: "initial-balance", title: "Initial Balance — Breakout & Failure Strategies", description: "Master the Initial Balance (IB) concept — the range formed in the first hour of trading. Learn IB breakouts, failures, and how institutions use the IB as a reference.", level: "intermediate", order: 3 },
  { slug: "value-area", title: "Value Area Migration — Tracking Institutional Flow", description: "Learn to track Value Area migration between sessions. Understand how shifting value areas reveal institutional accumulation, distribution, and directional intent.", level: "intermediate", order: 4 },
  { slug: "excess-poor-highs-lows", title: "Excess & Poor Highs/Lows — Auction Completeness", description: "Identify excess (completed auctions) vs poor highs/lows (incomplete auctions). Learn why poor extremes are revisited and how to trade them with institutional logic.", level: "advanced", order: 5 },
  { slug: "single-prints", title: "Single Print Concepts — Price Rejection Zones", description: "Master single print analysis — areas where price moved so fast that only one TPO printed. Learn why single prints act as support/resistance and future targets.", level: "advanced", order: 6 },
  { slug: "balanced-imbalanced", title: "Balanced vs Imbalanced Markets", description: "Distinguish between balanced markets (range-bound, mean-reverting) and imbalanced markets (trending, directional). Learn the optimal strategy for each market state.", level: "advanced", order: 7 }
];

createFile(
  path.join(contentDir, 'en', 'auction-market', '_meta.json'),
  JSON.stringify(auctionMeta, null, 2) + '\n'
);

for (const item of auctionContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('(')[0].trim()}

${item.description}

<Callout type="info" title="The Auction Process">
Markets exist for ONE purpose: to facilitate trade. Price moves UP to find sellers, DOWN to find buyers. When it finds enough of both at a price = fair value (balance). When it can't find enough = price moves until it does (imbalance). This is the entire basis of Auction Market Theory.
</Callout>

---

## Core AMT Principles

### Price Discovery
- Markets constantly "auction" to find prices where both buyers and sellers agree
- Price moves in one direction until it finds opposing interest
- The auction process creates predictable patterns

### Balance (Rotation)
- When buyers and sellers are evenly matched
- Price rotates within a range
- Volume builds at "fair value" (POC)
- Strategy: Mean reversion, fade extremes

### Imbalance (Trend)
- When one side dominates
- Price moves directionally to find the opposing side
- Low volume at intermediate levels (single prints)
- Strategy: Follow the imbalance, buy pullbacks in trend

---

## Practical Framework

### Step 1: Identify Market State
- **Balanced**: Price rotating, building volume in a range
- **Imbalanced**: Price moving directionally with conviction
- **Transitioning**: One state shifting to the other

### Step 2: Apply Correct Strategy
- Balance → Fade extremes, target POC
- Imbalance → Trade with direction, enter on pullbacks
- Transition → Look for breakout/breakdown confirmation

### Step 3: Use AMT Reference Levels
- Previous session POC, VAH, VAL
- Initial Balance high/low
- Single print zones
- Excess tails (completed auctions)

---

## AMT + ICT/SMC Integration

| AMT Concept | ICT/SMC Equivalent |
|-------------|-------------------|
| Value Area High | Premium zone |
| Value Area Low | Discount zone |
| POC | Equilibrium |
| Single Prints | FVG / Imbalance |
| Excess | Liquidity sweep |
| Poor High/Low | Resting liquidity |
| IB Breakout | Session expansion |

<Callout type="warning" title="Complementary Frameworks">
AMT tells you WHERE the market is in its auction process. ICT/SMC tells you WHO is driving it and WHEN they'll act. Combining both creates a complete institutional framework — understanding both the mechanism (AMT) and the operator (Smart Money).
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'auction-market', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 7: Macro & Fundamental (Academy expansion)
// ============================================================
const macroContent = [
  { slug: "central-bank-analysis", title: "Central Bank Policy Analysis — Hawkish/Dovish Scoring", description: "Learn to analyze central bank communications like institutional macro traders. Build a hawkish/dovish scoring system for Fed, ECB, BOE, and BOJ policy decisions.", level: "intermediate", order: 50 },
  { slug: "cot-report", title: "COT Report Reading — CFTC Commitment of Traders", description: "Master COT report analysis. Learn to read CFTC positioning data, identify institutional sentiment extremes, and use COT as a contrarian indicator for forex and commodities.", level: "intermediate", order: 51 },
  { slug: "institutional-positioning", title: "Institutional Positioning Data — TFF & DCOT Reports", description: "Understand institutional positioning through TFF (Traders in Financial Futures) and disaggregated COT reports. Learn how asset managers, leveraged funds, and dealers position.", level: "advanced", order: 52 },
  { slug: "sentiment-analysis", title: "Sentiment Analysis — Retail Positioning as Contrarian Signal", description: "Learn to use retail sentiment data as a contrarian indicator. When retail is extremely long, smart money is short. Master sentiment-based institutional trading.", level: "intermediate", order: 53 },
  { slug: "carry-trade", title: "Carry Trade Mechanics — Interest Rate Differentials", description: "Master carry trade strategies used by institutional FX desks. Learn how interest rate differentials drive currency flows, carry trade unwinding risks, and positioning.", level: "intermediate", order: 54 },
  { slug: "seasonal-patterns", title: "Seasonal Patterns & Calendar Tendencies", description: "Learn seasonal patterns in forex, commodities, and equities. Understand January effect, sell-in-May, quarter-end flows, and how institutions position for seasonal moves.", level: "intermediate", order: 55 },
  { slug: "interest-rate-differentials", title: "Interest Rate Differential Models for Forex", description: "Master interest rate differential analysis for currency trading. Learn how rate expectations drive forex flows, forward curves, and the carry-to-risk ratio framework.", level: "advanced", order: 56 },
  { slug: "gdp-inflation-cycles", title: "GDP & Inflation Cycle Mapping", description: "Map economic cycles for trading decisions. Learn to identify where we are in the business cycle (expansion, peak, contraction, trough) and position accordingly.", level: "advanced", order: 57 }
];

for (const item of macroContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('(')[0].trim()}

${item.description}

<Callout type="info" title="Macro Overlay">
Technical analysis tells you WHEN to enter. Macro analysis tells you WHICH DIRECTION has the highest probability. Institutional traders combine both — using macro for bias and technicals for timing.
</Callout>

---

## Why Macro Matters for Technical Traders

- Central bank policy drives multi-month trends
- Positioning extremes create reversal conditions
- Economic cycles determine which strategies work best
- Seasonal patterns provide statistical edge
- Rate differentials drive currency flows 24/7

---

## Practical Integration

### With ICT/SMC Trading
1. Use macro for **weekly/monthly bias** direction
2. Use ICT/SMC for **daily/intraday execution**
3. Increase position size when macro AND technical align
4. Reduce size when they conflict

### Key Data Sources
- Central bank statements & minutes
- CFTC COT reports (weekly)
- Retail sentiment indices (IG, Myfxbook)
- Economic calendar (NFP, CPI, FOMC)
- Yield curves & rate expectations

<Callout type="warning" title="Don't Over-Complicate">
You don't need a PhD in economics. Focus on: 1) Which central banks are hawkish/dovish? 2) Where is positioning extreme? 3) What's the rate direction? These three questions cover 80% of institutional macro edge.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'academy', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 8: Execution & Market Microstructure (Academy)
// ============================================================
const executionContent = [
  { slug: "slippage-management", title: "Slippage Management — Complete Guide", description: "Master slippage management techniques used by institutional desks. Learn how to minimize execution costs, manage slippage during volatility, and optimize order types.", level: "intermediate", order: 60 },
  { slug: "spread-dynamics", title: "Spread Dynamics During Market Events", description: "Understand how spreads widen during news events, rollover, and low liquidity. Learn institutional approaches to trading around spread expansion.", level: "intermediate", order: 61 },
  { slug: "liquidity-providers", title: "Liquidity Provider Behavior & Market Making", description: "Understand how liquidity providers and market makers operate. Learn their hedging strategies, risk management, and how their behavior creates tradeable patterns.", level: "advanced", order: 62 },
  { slug: "ecn-vs-market-maker", title: "ECN vs Market Maker Brokers — What You Need to Know", description: "Understand the difference between ECN/STP and Market Maker broker models. Learn how your broker type affects execution, pricing, and potential conflicts of interest.", level: "beginner", order: 63 },
  { slug: "smart-order-routing", title: "Smart Order Routing — Institutional Execution", description: "Learn how smart order routing (SOR) works for institutional traders. Understand how large orders are routed across venues for best execution.", level: "advanced", order: 64 },
  { slug: "twap-execution", title: "TWAP Execution Algorithms", description: "Master Time-Weighted Average Price (TWAP) execution. Learn how institutions use TWAP algorithms to execute large orders with minimal market impact.", level: "expert", order: 65 },
  { slug: "vwap-execution", title: "VWAP Execution Algorithms — Institutional Order Filling", description: "Master VWAP execution algorithms used by institutional desks. Learn how funds benchmark execution against VWAP and strategies for VWAP-based order filling.", level: "expert", order: 66 },
  { slug: "partial-fills-scaling", title: "Partial Fills & Precision Scaling Strategies", description: "Learn institutional scaling techniques — how to build and exit positions in parts. Master DCA, pyramid scaling, and institutional block-filling methodologies.", level: "advanced", order: 67 }
];

for (const item of executionContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('(')[0].trim()}

${item.description}

<Callout type="info" title="Execution is Edge">
Most retail traders focus exclusively on ENTRY signals. Institutions know that HOW you execute is as important as WHAT you trade. A 10-pip improvement in execution across 200 trades/year = significant P&L difference.
</Callout>

---

## Why Execution Matters

| Factor | Retail Approach | Institutional Approach |
|--------|----------------|----------------------|
| Entry | Market order | Limit order at specific level |
| Sizing | Full position at once | Scaled entry in 2-4 parts |
| Slippage | Accepted as cost | Minimized via algorithms |
| Timing | When signal fires | Optimized for liquidity |
| Exit | Single take-profit | Scaled exit at multiple targets |

---

## Core Principles

### 1. Minimize Market Impact
- Large orders move price — scale to reduce footprint
- Use limit orders where possible
- Trade during high-liquidity windows (kill zones)

### 2. Optimize for Spread
- Trade major pairs during London/NY overlap (tightest spreads)
- Avoid execution during news release (spreads 5-50x normal)
- Account for spread in your risk calculations

### 3. Execution Consistency
- Same execution process every trade
- Pre-plan entry type, size, and timing
- Remove emotion from execution

---

## Practical Tips

- Always use limit orders at your ICT/SMC levels (not market orders)
- Set alerts at 80% of level, manually execute at level
- Never chase price — missed entries are part of trading
- Scale into positions: 50% at entry, 25% at confirmation, 25% at pullback
- Scale out: 50% at 1R, 25% at 2R, trail 25% to structure

<Callout type="warning" title="Execution Cost Reality">
If your average trade is 30 pips of profit but you lose 3 pips to slippage + spread each trade, that's 10% of your profits going to execution costs. Institutional traders obsess over reducing these costs — you should too.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'academy', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 9: Supply & Demand (SMC expansion)
// ============================================================
const supplyDemandContent = [
  { slug: "supply-demand-zones", title: "Supply & Demand Zones — Institutional Complete Guide", description: "Master institutional supply and demand zones. Learn the difference between retail S&R and institutional supply/demand, zone identification rules, and trading strategies.", level: "intermediate", order: 30 },
  { slug: "fresh-vs-tested", title: "Fresh vs Tested Zones — Zone Validity", description: "Learn to distinguish between fresh (untested) and tested supply/demand zones. Understand why fresh zones have higher probability and how to grade zone quality.", level: "intermediate", order: 31 },
  { slug: "rally-base-rally", title: "Rally-Base-Rally & Drop-Base-Drop Patterns", description: "Master continuation supply/demand patterns. Learn RBR (Rally-Base-Rally) for demand zones and DBD (Drop-Base-Drop) for supply zones used in institutional trading.", level: "intermediate", order: 32 },
  { slug: "zone-strength-scoring", title: "Zone Strength Scoring Methodology", description: "Build a zone strength scoring system. Learn to evaluate supply/demand zones using departure speed, time at level, freshness, and volume criteria.", level: "advanced", order: 33 },
  { slug: "proximal-distal-lines", title: "Proximal vs Distal Lines — Precision Zone Trading", description: "Master proximal and distal line concepts for supply/demand zones. Learn which boundary to use for entries, stops, and targets for maximum precision.", level: "advanced", order: 34 }
];

for (const item of supplyDemandContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('(')[0].trim()}

${item.description}

<Callout type="info" title="Supply & Demand in SMC Context">
Supply and demand zones are the FOUNDATION that Order Blocks are built upon. Understanding institutional S&D gives you a deeper understanding of WHY order blocks work and how to identify the strongest ones.
</Callout>

---

## Key Principles

### Institutional Supply Zone
- Area where institutional SELLING overwhelmed buying
- Price fell aggressively FROM this zone
- Unfilled sell orders remain = price returns to fill them
- Acts as resistance with institutional backing

### Institutional Demand Zone
- Area where institutional BUYING overwhelmed selling
- Price rose aggressively FROM this zone
- Unfilled buy orders remain = price returns to fill them
- Acts as support with institutional backing

---

## Zone Quality Criteria

| Criteria | Strong Zone | Weak Zone |
|----------|-------------|-----------|
| Departure speed | Fast (displacement) | Slow (grinding) |
| Time at level | Brief (1-3 candles) | Extended (many candles) |
| Freshness | Never tested | Tested multiple times |
| Volume | Low volume in zone | High volume |
| Return speed | Slow approach | Fast V-shape |

---

## Practical Application

### Identifying Zones
1. Find a strong impulsive move (displacement)
2. Mark the base/consolidation BEFORE the move
3. Zone = the consolidation area before displacement
4. Proximal line = nearest edge to current price
5. Distal line = far edge of the zone

### Trading Zones
1. Wait for price to return to the zone
2. Look for rejection/confirmation at the zone
3. Enter with stop beyond the distal line
4. Target = next opposing zone or liquidity level

### Combining with ICT/SMC
- S&D zone + Order Block inside = high probability
- S&D zone + FVG at zone boundary = precision entry
- S&D zone + Liquidity sweep before entry = A+ setup

<Callout type="warning" title="Zone Invalidation">
A zone is INVALIDATED when price closes through the distal line with displacement. Tested zones lose strength with each touch. After 3 tests, consider the zone consumed. Always use fresh zones for highest probability.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'smc', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 10: Options Flow (ICT expansion)
// ============================================================
const optionsContent = [
  { slug: "options-flow-signals", title: "Options Flow as Directional Signal", description: "Learn how hedge funds use options flow data for directional trading. Understand how large options trades reveal institutional positioning and expected moves.", level: "advanced", order: 30 },
  { slug: "max-pain-theory", title: "Max Pain Theory — Options Expiry Price Magnet", description: "Master max pain theory — the price at which most options expire worthless. Learn how market makers hedge gamma exposure and why price gravitates toward max pain.", level: "advanced", order: 31 },
  { slug: "gamma-exposure", title: "Gamma Exposure (GEX) — Institutional Support & Resistance", description: "Master Gamma Exposure analysis. Learn how dealer hedging creates support/resistance levels, and how gamma flips from positive to negative regime.", level: "expert", order: 32 },
  { slug: "put-call-ratio", title: "Put/Call Ratio as Sentiment Indicator", description: "Use the Put/Call ratio as a sentiment and contrarian indicator. Learn how extreme readings predict reversals and how institutions read options sentiment.", level: "intermediate", order: 33 },
  { slug: "options-expiry-pinning", title: "Options Expiry Pinning Effect", description: "Understand options expiry pinning — how price tends to gravitate toward strikes with highest open interest near expiration. Learn to trade around monthly/weekly OpEx.", level: "advanced", order: 34 }
];

for (const item of optionsContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('(')[0].trim()}

${item.description}

<Callout type="info" title="Options as Institutional Intelligence">
The options market is where institutions EXPRESS their views on future price direction. A single $10M options trade tells you more about institutional expectations than a week of price action. Options flow is institutional intent made visible.
</Callout>

---

## Why Options Flow Matters for Spot/Futures Traders

- Large options trades reveal institutional EXPECTATIONS
- Dealer hedging of options creates real support/resistance
- Options expiry dates create predictable price behavior
- Unusual options activity often LEADS spot price moves by 1-3 days
- Put/Call extremes are reliable contrarian indicators

---

## Key Concepts

### Options Market Structure
- **Buyers** (hedge funds, speculators): Pay premium for directional bets
- **Sellers/Dealers** (market makers): Collect premium, hedge with spot/futures
- **Dealer hedging** is what creates the price impact on your charts

### How Dealer Hedging Works
1. Fund buys 10,000 call options at strike 1.1000
2. Dealer sells those calls and must hedge
3. Dealer buys spot/futures to be delta-neutral
4. This buying PUSHES price toward 1.1000
5. Near expiry, gamma increases → hedging intensifies → pinning

---

## Practical Application

### For Daily Trading
- Check max pain level for current week/month expiry
- Note strikes with highest open interest = magnetic levels
- Watch for unusual options activity (10x+ normal volume)
- Use GEX flip level as key support/resistance

### Integration with ICT/SMC
- Max pain level aligns with ICT equilibrium = strong magnet
- GEX support/resistance often aligns with Order Blocks
- Options expiry week = higher manipulation probability
- Monthly OpEx Friday = major liquidity event

<Callout type="warning" title="Availability Note">
Options flow data is primarily available for equities and indices (SPX, QQQ, individual stocks). For forex, the relevant data comes from FX options markets (25-delta risk reversals, option barriers). Crypto options (Deribit) are growing but less liquid.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'ict', `${item.slug}.mdx`),
    content
  );
}

// ============================================================
// PHASE 11: Crypto Institutional (Academy expansion)
// ============================================================
const cryptoContent = [
  { slug: "funding-rate-trading", title: "Funding Rate Trading — Perpetual Futures Edge", description: "Master funding rate trading strategies. Learn how to profit from funding rate imbalances, identify crowded trades, and use funding as a contrarian sentiment indicator.", level: "intermediate", order: 70 },
  { slug: "liquidation-heatmaps", title: "Liquidation Heatmaps & Cascades", description: "Master liquidation analysis for crypto trading. Learn to read liquidation heatmaps, predict cascade events, and position for liquidation-driven moves.", level: "intermediate", order: 71 },
  { slug: "on-chain-analysis", title: "On-Chain Analysis — Whale Wallets & Exchange Flows", description: "Master on-chain analysis for institutional crypto trading. Track whale wallets, exchange inflows/outflows, and on-chain metrics that predict major moves.", level: "advanced", order: 72 },
  { slug: "basis-trading", title: "Basis Trading & Cash-and-Carry Arbitrage", description: "Learn basis trading strategies used by crypto funds. Understand futures premium, cash-and-carry arbitrage, and funding rate arbitrage for market-neutral returns.", level: "advanced", order: 73 },
  { slug: "dex-liquidity-pools", title: "DEX Liquidity Pool Dynamics", description: "Understand DEX liquidity pools and their impact on price. Learn impermanent loss, concentrated liquidity, and how large LP positions create support/resistance.", level: "advanced", order: 74 },
  { slug: "mev-order-flow", title: "MEV & On-Chain Order Flow", description: "Understand Maximal Extractable Value (MEV) and on-chain order flow. Learn how searchers, builders, and validators extract value and how it affects your trades.", level: "expert", order: 75 }
];

for (const item of cryptoContent) {
  const content = `---
title: "${item.title}"
description: "${item.description}"
level: ${item.level}
order: ${item.order}
lastUpdated: "2026-06-10"
---

## ${item.title.split('—')[0].split('(')[0].trim()}

${item.description}

<Callout type="info" title="Crypto Institutional Edge">
Crypto markets have unique data advantages over traditional markets: on-chain data is PUBLIC, liquidation levels are VISIBLE, and funding rates reveal POSITIONING. Smart crypto traders exploit this transparency that doesn't exist in forex or equities.
</Callout>

---

## Why This Matters

Crypto-specific institutional concepts provide edges unavailable in traditional markets:
- **Funding rates** reveal real-time positioning sentiment
- **Liquidation data** shows exactly where forced selling/buying will occur
- **On-chain flows** track institutional wallets in real-time
- **DEX data** reveals large position entries/exits

---

## Key Principles

### Crypto Market Structure Differences
| Factor | Traditional Markets | Crypto Markets |
|--------|-------------------|----------------|
| Data transparency | Limited | On-chain = fully public |
| Liquidation visibility | Hidden | Heatmaps available |
| Funding/carry cost | Fixed swap rates | Variable funding rates |
| Market hours | Session-based | 24/7/365 |
| Leverage available | 2-50x | Up to 125x |
| Manipulation ease | Heavily regulated | Less regulated |

---

## Practical Application

### For Directional Trading
- Use funding rate extremes as contrarian signals
- Target liquidation clusters as price magnets
- Monitor whale wallet movements for early positioning signals
- Watch exchange inflows for selling pressure alerts

### For Market-Neutral Strategies
- Basis trading for consistent yield
- Funding rate arbitrage (long spot, short perp)
- Cross-exchange arbitrage opportunities

### Integration with ICT/SMC
- Liquidation clusters = liquidity pools (same concept, visible data)
- Funding rate extreme = retail overleveraged = sweep incoming
- Whale accumulation on-chain = smart money buying at OBs

<Callout type="warning" title="Crypto Risk Warning">
Crypto markets operate 24/7 with extreme leverage available. Liquidation cascades can move price 10-20% in minutes. ALWAYS use conservative position sizing in crypto and account for the higher volatility in your risk management.
</Callout>
`;
  createFile(
    path.join(contentDir, 'en', 'academy', `${item.slug}.mdx`),
    content
  );
}

console.log('\n✅ All Phase 2-11 content files created!');
console.log('Total new MDX files: ~72 (English)');

