import { writeFileSync } from "fs";
import { join } from "path";

const contentDir = join(process.cwd(), "content");

function writeMdx(lang, category, slug, frontmatter, content) {
  const fm = `---
title: "${frontmatter.title}"
description: "${frontmatter.description}"
level: ${frontmatter.level}
order: ${frontmatter.order}
lastUpdated: "2026-06-10"
---
`;
  writeFileSync(join(contentDir, lang, category, `${slug}.mdx`), fm + content, "utf-8");
  console.log(`✅ ${lang}/${category}/${slug}.mdx`);
}

// ============================================================
// BATCH 3: TECHNICAL ANALYSIS (6 Topics × 2 Languages = 12 Files)
// ============================================================

// ============================
// 1. TECHNICAL INDICATORS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "technical-indicators",
  {
    title: "Technical Indicators — Complete Guide",
    description:
      "Master essential technical indicators: RSI, MACD, Moving Averages, Stochastic, ADX, and Volume indicators. Learn how to use them for trading signals and confirmations.",
    level: "intermediate",
    order: 13,
  },
  `
## What Are Technical Indicators?

Technical indicators are **mathematical calculations** applied to price and/or volume data that help traders identify trends, momentum, volatility, and potential reversal points. They are tools — not crystal balls.

<Callout type="warning" title="Important Reality">
No single indicator is reliable on its own. Professional traders use indicators for CONFIRMATION, not as primary entry signals. Price action and market structure come first; indicators confirm what you already see.
</Callout>

---

## Moving Averages (MA)

### Simple Moving Average (SMA):
The average closing price over N periods.

\`\`\`
SMA(20) = Sum of last 20 closes ÷ 20
\`\`\`

### Exponential Moving Average (EMA):
Gives more weight to recent prices, reacts faster.

### Key Moving Averages:

| MA Period | Use Case | Timeframe |
|-----------|----------|-----------|
| EMA 9/10 | Short-term momentum | M15-H1 |
| EMA 20/21 | Dynamic S/R, trend filter | H1-H4 |
| SMA/EMA 50 | Medium-term trend | H4-D1 |
| SMA/EMA 100 | Intermediate trend | D1 |
| SMA/EMA 200 | Long-term trend (institutional) | D1-W1 |

### Trading Signals:

| Signal | Meaning | Action |
|--------|---------|--------|
| Price above 200 MA | Bullish long-term trend | Look for longs |
| Price below 200 MA | Bearish long-term trend | Look for shorts |
| Golden Cross (50 MA crosses above 200 MA) | Bullish shift | Buy signal |
| Death Cross (50 MA crosses below 200 MA) | Bearish shift | Sell signal |
| Price pulls back to 20 EMA | Dynamic support in uptrend | Buy the dip |
| MAs fanning apart | Strong trend | Stay with trend |
| MAs converging | Trend weakening | Prepare for change |

---

## RSI (Relative Strength Index)

### What It Measures:
Momentum — speed and magnitude of price changes on a 0-100 scale.

### Settings:
- Default period: 14
- Overbought: above 70
- Oversold: below 30

### RSI Trading Strategies:

| Strategy | Condition | Action |
|----------|-----------|--------|
| **Overbought/Oversold** | RSI > 70 or < 30 | Wait for reversal confirmation |
| **Divergence** | Price makes new high, RSI makes lower high | Potential reversal |
| **Centerline Crossover** | RSI crosses above/below 50 | Trend direction shift |
| **Hidden Divergence** | Price pullback, RSI holds trend | Trend continuation |
| **Range Shift** | RSI stays 40-80 (bullish) or 20-60 (bearish) | Confirms trend bias |

### RSI Divergence:
\`\`\`
Bearish Divergence:
- Price: Higher High
- RSI: Lower High
- Signal: Momentum fading, potential drop

Bullish Divergence:
- Price: Lower Low
- RSI: Higher Low
- Signal: Selling pressure fading, potential rise
\`\`\`

<Callout type="info" title="Pro Tip">
In a strong uptrend, RSI can stay overbought (>70) for extended periods. Don't blindly sell because RSI is high — use it in context with market structure. Divergence is more reliable than overbought/oversold levels alone.
</Callout>

---

## MACD (Moving Average Convergence Divergence)

### Components:
- **MACD Line:** EMA(12) - EMA(26)
- **Signal Line:** EMA(9) of MACD Line
- **Histogram:** MACD Line - Signal Line

### MACD Signals:

| Signal | Condition | Meaning |
|--------|-----------|---------|
| Bullish Crossover | MACD crosses above Signal | Momentum shifting bullish |
| Bearish Crossover | MACD crosses below Signal | Momentum shifting bearish |
| Histogram Growing | Bars getting taller | Trend strengthening |
| Histogram Shrinking | Bars getting shorter | Trend weakening |
| Zero Line Cross | MACD crosses above/below zero | Trend direction change |
| Divergence | MACD diverges from price | Potential reversal |

### MACD Best Practices:
- Use on H4/D1 for most reliable signals
- Combine with price action (don't trade MACD alone)
- Histogram direction change = early warning
- Zero line acts as trend filter (above = bullish bias, below = bearish)

---

## Stochastic Oscillator

### What It Measures:
Where current price is relative to its high-low range over N periods.

### Settings:
- Fast Stochastic: %K(14), %D(3)
- Slow Stochastic: Smoothed version (less noise)
- Overbought: above 80
- Oversold: below 20

### Stochastic Signals:

| Signal | Condition | Action |
|--------|-----------|--------|
| Bullish | %K crosses above %D below 20 | Potential buy |
| Bearish | %K crosses below %D above 80 | Potential sell |
| Divergence | Price vs. Stochastic diverge | Reversal warning |
| Double bottom | Stochastic dips twice below 20 | Strong buy setup |

---

## ADX (Average Directional Index)

### What It Measures:
**Trend strength** (not direction) on a 0-100 scale.

### ADX Levels:

| ADX Value | Meaning | Trading Approach |
|-----------|---------|-----------------|
| 0-20 | No trend (ranging) | Range/mean reversion strategies |
| 20-25 | Weak trend emerging | Watch for breakout |
| 25-50 | Strong trend | Trend following strategies |
| 50-75 | Very strong trend | Stay with trend, don't counter |
| 75-100 | Extreme trend (rare) | Trend may exhaust soon |

### ADX + DI Lines:
- **+DI above -DI:** Bullish bias
- **-DI above +DI:** Bearish bias
- **ADX rising:** Trend strengthening
- **ADX falling:** Trend weakening

---

## Volume Indicators

### On-Balance Volume (OBV):
- Cumulative volume (adds on up days, subtracts on down days)
- Rising OBV confirms uptrend
- Falling OBV confirms downtrend
- OBV divergence = potential reversal

### Volume Moving Average:
- Compare current volume to average
- Above average = significant move (likely to continue)
- Below average = weak move (may reverse)

### Volume Profile (Advanced):
- Shows volume at each price level
- High Volume Nodes (HVN) = support/resistance zones
- Low Volume Nodes (LVN) = price moves quickly through
- Point of Control (POC) = highest traded level

---

## Combining Indicators

### The Confluence Approach:
\`\`\`
Strong Buy Signal = Multiple confirmations:
1. Price above 200 EMA (bullish trend) ✅
2. RSI above 50 but below 70 (room to grow) ✅
3. MACD crossing above signal (momentum shift) ✅
4. ADX above 25 (trend present) ✅
5. Volume above average (real participation) ✅
= HIGH PROBABILITY SETUP
\`\`\`

### Avoid Over-Analysis:
- Maximum 2-3 indicators per chart
- All indicators should serve different purposes
- Don't use 3 momentum indicators together (redundant)
- Best combination: Trend + Momentum + Volume

---

## Related Topics

- [Support & Resistance](/en/academy/support-resistance-advanced) — Key price levels
- [Chart Patterns](/en/academy/chart-patterns) — Pattern recognition
- [Fibonacci Trading](/en/academy/fibonacci-trading) — Key retracement levels
- [Bollinger Bands](/en/academy/bollinger-bands-trading) — Volatility indicator
- [Trading Plan](/en/academy/trading-plan) — System development
`,
);

// ============================
// 1. TECHNICAL INDICATORS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "technical-indicators",
  {
    title: "Technical Indicator — সম্পূর্ণ গাইড",
    description:
      "অত্যাবশ্যকীয় Technical Indicator আয়ত্ত করুন: RSI, MACD, Moving Average, Stochastic, ADX এবং Volume Indicator। Trading Signal ও Confirmation-এ এগুলো ব্যবহার শিখুন।",
    level: "intermediate",
    order: 13,
  },
  `
## Technical Indicator কী?

Technical Indicator হলো Price এবং/অথবা Volume Data-তে প্রয়োগ করা **গাণিতিক গণনা** যা Trader-দের Trend, Momentum, Volatility এবং সম্ভাব্য Reversal Point চিহ্নিত করতে সাহায্য করে। এগুলো হাতিয়ার — ভবিষ্যৎ বলার যন্ত্র নয়।

<Callout type="warning" title="গুরুত্বপূর্ণ বাস্তবতা">
কোনো একক Indicator নিজে থেকে নির্ভরযোগ্য নয়। Professional Trader Indicator ব্যবহার করেন CONFIRMATION-এর জন্য, প্রাথমিক Entry Signal হিসেবে নয়। Price Action ও Market Structure আগে আসে; Indicator আপনি যা দেখছেন তা Confirm করে।
</Callout>

---

## Moving Average (MA)

### Simple Moving Average (SMA):
N Period-এর গড় Closing Price।

### Exponential Moving Average (EMA):
সাম্প্রতিক Price-কে বেশি গুরুত্ব দেয়, দ্রুত React করে।

### মূল Moving Average:

| MA Period | ব্যবহার | Timeframe |
|-----------|---------|-----------|
| EMA 9/10 | Short-term Momentum | M15-H1 |
| EMA 20/21 | Dynamic S/R, Trend Filter | H1-H4 |
| SMA/EMA 50 | Medium-term Trend | H4-D1 |
| SMA/EMA 100 | Intermediate Trend | D1 |
| SMA/EMA 200 | Long-term Trend (Institutional) | D1-W1 |

### Trading Signal:

| Signal | অর্থ | Action |
|--------|------|--------|
| Price 200 MA-এর উপরে | Bullish Long-term Trend | Long খুঁজুন |
| Price 200 MA-এর নিচে | Bearish Long-term Trend | Short খুঁজুন |
| Golden Cross (50 MA 200 MA-র উপরে Cross) | Bullish Shift | Buy Signal |
| Death Cross (50 MA 200 MA-র নিচে Cross) | Bearish Shift | Sell Signal |
| Price 20 EMA-তে Pullback | Uptrend-এ Dynamic Support | Dip কিনুন |
| MA ছড়িয়ে যাচ্ছে | শক্তিশালী Trend | Trend-এ থাকুন |
| MA একত্রিত হচ্ছে | Trend দুর্বল হচ্ছে | পরিবর্তনের জন্য প্রস্তুত |

---

## RSI (Relative Strength Index)

### কী পরিমাপ করে:
Momentum — 0-100 Scale-এ Price পরিবর্তনের গতি ও মাত্রা।

### Setting:
- Default Period: 14
- Overbought: 70-এর উপরে
- Oversold: 30-এর নিচে

### RSI Trading Strategy:

| Strategy | শর্ত | Action |
|----------|------|--------|
| **Overbought/Oversold** | RSI > 70 বা < 30 | Reversal Confirmation অপেক্ষা |
| **Divergence** | Price নতুন High করে, RSI Lower High করে | সম্ভাব্য Reversal |
| **Centerline Crossover** | RSI 50-এর উপরে/নিচে Cross | Trend Direction Shift |
| **Hidden Divergence** | Price Pullback, RSI Trend ধরে রাখে | Trend Continuation |

### RSI Divergence:
\`\`\`
Bearish Divergence:
- Price: Higher High
- RSI: Lower High
- Signal: Momentum কমছে, সম্ভাব্য পতন

Bullish Divergence:
- Price: Lower Low
- RSI: Higher Low
- Signal: Selling Pressure কমছে, সম্ভাব্য উত্থান
\`\`\`

<Callout type="info" title="Pro Tip">
শক্তিশালী Uptrend-এ RSI দীর্ঘ সময় Overbought (>70) থাকতে পারে। শুধু RSI বেশি বলে অন্ধভাবে Sell করবেন না — Market Structure-এর Context-এ ব্যবহার করুন। Divergence শুধু Overbought/Oversold Level-এর চেয়ে বেশি নির্ভরযোগ্য।
</Callout>

---

## MACD (Moving Average Convergence Divergence)

### উপাদান:
- **MACD Line:** EMA(12) - EMA(26)
- **Signal Line:** MACD Line-এর EMA(9)
- **Histogram:** MACD Line - Signal Line

### MACD Signal:

| Signal | শর্ত | অর্থ |
|--------|------|------|
| Bullish Crossover | MACD Signal-এর উপরে Cross | Momentum Bullish হচ্ছে |
| Bearish Crossover | MACD Signal-এর নিচে Cross | Momentum Bearish হচ্ছে |
| Histogram বাড়ছে | Bar লম্বা হচ্ছে | Trend শক্তিশালী হচ্ছে |
| Histogram কমছে | Bar ছোট হচ্ছে | Trend দুর্বল হচ্ছে |
| Zero Line Cross | MACD শূন্যের উপরে/নিচে Cross | Trend Direction পরিবর্তন |
| Divergence | MACD Price থেকে Diverge করছে | সম্ভাব্য Reversal |

---

## Stochastic Oscillator

### কী পরিমাপ করে:
N Period-এ High-Low Range-এর তুলনায় বর্তমান Price কোথায়।

### Setting:
- Fast Stochastic: %K(14), %D(3)
- Overbought: 80-এর উপরে
- Oversold: 20-এর নিচে

### Stochastic Signal:

| Signal | শর্ত | Action |
|--------|------|--------|
| Bullish | %K 20-এর নিচে %D-এর উপরে Cross | সম্ভাব্য Buy |
| Bearish | %K 80-এর উপরে %D-এর নিচে Cross | সম্ভাব্য Sell |
| Divergence | Price vs. Stochastic Diverge | Reversal সতর্কতা |

---

## ADX (Average Directional Index)

### কী পরিমাপ করে:
**Trend-এর শক্তি** (Direction নয়) 0-100 Scale-এ।

### ADX Level:

| ADX মান | অর্থ | Trading পদ্ধতি |
|---------|------|----------------|
| 0-20 | Trend নেই (Ranging) | Range/Mean Reversion Strategy |
| 20-25 | দুর্বল Trend উদ্ভব হচ্ছে | Breakout-এর জন্য পর্যবেক্ষণ |
| 25-50 | শক্তিশালী Trend | Trend Following Strategy |
| 50-75 | অত্যন্ত শক্তিশালী Trend | Trend-এ থাকুন, Counter করবেন না |
| 75-100 | চরম Trend (বিরল) | Trend শেষ হতে পারে |

---

## Volume Indicator

### On-Balance Volume (OBV):
- Cumulative Volume (Up Day-তে যোগ, Down Day-তে বিয়োগ)
- OBV বাড়ছে → Uptrend Confirm
- OBV কমছে → Downtrend Confirm
- OBV Divergence = সম্ভাব্য Reversal

### Volume Moving Average:
- বর্তমান Volume-কে Average-এর সাথে তুলনা করুন
- Average-এর উপরে = তাৎপর্যপূর্ণ Move (চলমান থাকার সম্ভাবনা)
- Average-এর নিচে = দুর্বল Move (Reverse হতে পারে)

---

## Indicator সমন্বয়

### Confluence পদ্ধতি:
\`\`\`
শক্তিশালী Buy Signal = একাধিক Confirmation:
1. Price 200 EMA-এর উপরে (Bullish Trend) ✅
2. RSI 50-এর উপরে কিন্তু 70-এর নিচে (বাড়ার সুযোগ) ✅
3. MACD Signal-এর উপরে Cross করছে (Momentum Shift) ✅
4. ADX 25-এর উপরে (Trend আছে) ✅
5. Volume Average-এর উপরে (প্রকৃত অংশগ্রহণ) ✅
= HIGH PROBABILITY SETUP
\`\`\`

### অতিরিক্ত Analysis এড়িয়ে চলুন:
- প্রতি Chart-এ সর্বোচ্চ ২-৩টি Indicator
- সব Indicator ভিন্ন উদ্দেশ্যে ব্যবহার করুন
- ৩টি Momentum Indicator একসাথে ব্যবহার করবেন না (Redundant)
- সেরা সমন্বয়: Trend + Momentum + Volume

---

## সম্পর্কিত বিষয়

- [Support ও Resistance](/bn/academy/support-resistance-advanced) — মূল Price Level
- [Chart Pattern](/bn/academy/chart-patterns) — Pattern Recognition
- [Fibonacci Trading](/bn/academy/fibonacci-trading) — মূল Retracement Level
- [Bollinger Bands](/bn/academy/bollinger-bands-trading) — Volatility Indicator
- [Trading Plan](/bn/academy/trading-plan) — System Development
`,
);

// ============================
// 2. SUPPORT & RESISTANCE ADVANCED — EN
// ============================
writeMdx(
  "en",
  "academy",
  "support-resistance-advanced",
  {
    title: "Advanced Support & Resistance — Complete Guide",
    description:
      "Master advanced support and resistance concepts: dynamic S/R, flip zones, institutional levels, order blocks, and how to identify the strongest levels for trading.",
    level: "intermediate",
    order: 14,
  },
  `
## Advanced Support & Resistance

Support and Resistance (S/R) are the **most important concepts** in technical analysis. Every trading strategy ultimately relies on understanding where price is likely to react. This guide covers advanced concepts beyond basic horizontal lines.

<Callout type="info" title="Core Truth">
Support and Resistance are not exact lines — they are ZONES. Price often overshoots or undershoots by a few pips before reacting. Think in terms of areas, not exact prices.
</Callout>

---

## Types of Support & Resistance

### 1. Static (Horizontal) S/R
- Previous swing highs and lows
- Round numbers (1.1000, 50,000, etc.)
- Historical reaction points
- Multiple touches = stronger level

### 2. Dynamic S/R
- Moving Averages (20, 50, 100, 200 EMA/SMA)
- Trendlines
- Change with time/price
- Act as moving support/resistance

### 3. Institutional Levels
- Round numbers / Psychological levels
- Options expiry levels
- Large order clusters (visible on order book)
- Central bank intervention levels
- Weekly/Monthly open/close

### 4. Fibonacci Levels
- 38.2%, 50%, 61.8% retracements
- 127.2%, 161.8% extensions
- Confluence with horizontal S/R = powerful

---

## The S/R Flip (Polarity)

When support breaks, it becomes resistance. When resistance breaks, it becomes support. This is one of the most reliable patterns in trading.

\`\`\`
S/R Flip Pattern:

1. Price bounces off SUPPORT at 1.1000 (multiple times)
2. Price BREAKS below 1.1000
3. Price returns to 1.1000 from below
4. Old support (1.1000) now acts as RESISTANCE
5. Price rejects and continues lower

Entry: Short at the flip zone (old support = new resistance)
Stop: Above the zone
Target: Next support below
\`\`\`

---

## Identifying Strong vs. Weak Levels

### Strong Levels Have:

| Factor | Why It Matters |
|--------|---------------|
| Multiple touches (3+) | Proven reaction zone |
| Clear rejections (wicks) | Visible buying/selling pressure |
| High timeframe significance | D1/W1 levels > M15 levels |
| Confluence with other tools | Fib + S/R + MA = strong |
| Volume at level | Institutional participation |
| Recent relevance | Fresh levels > old levels |

### Weak Levels Have:
- Only 1 touch
- Small timeframe only
- No clear rejection
- Far from current price
- No confluence

---

## Order Blocks as S/R

### What Are Order Blocks?
The last candle before a strong impulsive move. Represents institutional orders that caused the move.

### Bullish Order Block:
- Last bearish/down candle before a strong bullish impulse
- Marks where institutions placed buy orders
- Future support when price returns

### Bearish Order Block:
- Last bullish/up candle before a strong bearish impulse
- Marks where institutions placed sell orders
- Future resistance when price returns

### Order Block Rules:
1. Must be followed by a strong impulsive move
2. The move must break structure (create new high/low)
3. Use the body of the candle as the zone (not wicks)
4. First touch has highest probability
5. Mitigated (used) OBs lose significance

---

## Trading S/R Levels

### Strategy 1: Bounce Trading

\`\`\`
Setup: Price approaches strong support
Entry: Bullish rejection candle at support zone
Stop Loss: Below the support zone (10-20 pips buffer)
Take Profit: Next resistance above
Risk:Reward: Minimum 1:2
\`\`\`

### Strategy 2: Break and Retest

\`\`\`
Setup: Price breaks through resistance
Wait: For price to pull back to broken resistance
Entry: Bullish confirmation at the flip zone
Stop Loss: Below the flip zone
Take Profit: Measured move or next resistance
\`\`\`

### Strategy 3: Confluence Entry

\`\`\`
Setup: Multiple S/R factors align at same zone
- Horizontal support
- 61.8% Fibonacci level
- 200 EMA
- Order Block

Entry: At the confluence zone with confirmation
Stop Loss: Below entire confluence zone
Confidence: Very high probability
\`\`\`

---

## Dynamic Support & Resistance

### Moving Average as Dynamic S/R:

| MA | Acts As | Best Timeframe |
|----|---------|----------------|
| 20 EMA | Short-term dynamic S/R | M15-H1 (intraday) |
| 50 EMA | Medium-term dynamic S/R | H4-D1 (swing) |
| 200 SMA | Long-term institutional S/R | D1-W1 (position) |

### How to Trade Dynamic S/R:
1. Identify the trend direction
2. Wait for pullback to the relevant MA
3. Look for rejection/confirmation candle at the MA
4. Enter with stop below the MA
5. Target: new swing in trend direction

---

## Common Mistakes with S/R

| Mistake | Why It Fails | Solution |
|---------|-------------|----------|
| Drawing too many levels | Analysis paralysis | Only mark CLEAR levels |
| Using exact prices | S/R are zones, not lines | Use zones (10-30 pip width) |
| Ignoring timeframe | M5 levels break easily | Focus on H4/D1 levels |
| Fighting strong breakouts | Trend overcomes weak levels | Wait for confirmation |
| Not updating levels | Old levels lose relevance | Refresh levels regularly |

---

## Related Topics

- [Technical Indicators](/en/academy/technical-indicators) — Confirm levels with indicators
- [Chart Patterns](/en/academy/chart-patterns) — Patterns form at S/R
- [Fibonacci Trading](/en/academy/fibonacci-trading) — Fib confluence with S/R
- [Trendlines & Channels](/en/academy/trendlines-channels) — Dynamic levels
- [Trading Plan](/en/academy/trading-plan) — Build S/R into your system
`,
);

// ============================
// 2. SUPPORT & RESISTANCE ADVANCED — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "support-resistance-advanced",
  {
    title: "Advanced Support ও Resistance — সম্পূর্ণ গাইড",
    description:
      "Advanced Support ও Resistance Concept আয়ত্ত করুন: Dynamic S/R, Flip Zone, Institutional Level, Order Block এবং Trading-এর জন্য সবচেয়ে শক্তিশালী Level চিহ্নিত করা।",
    level: "intermediate",
    order: 14,
  },
  `
## Advanced Support ও Resistance

Support ও Resistance (S/R) হলো Technical Analysis-এর **সবচেয়ে গুরুত্বপূর্ণ ধারণা**। প্রতিটি Trading Strategy শেষ পর্যন্ত নির্ভর করে Price কোথায় React করতে পারে তা বোঝার উপর। এই গাইড মৌলিক Horizontal Line-এর বাইরের Advanced Concept কভার করে।

<Callout type="info" title="মূল সত্য">
Support ও Resistance সুনির্দিষ্ট Line নয় — এগুলো ZONE। React করার আগে Price প্রায়ই কয়েক Pip Overshoot বা Undershoot করে। সুনির্দিষ্ট Price নয়, Area হিসেবে চিন্তা করুন।
</Callout>

---

## Support ও Resistance-এর প্রকারভেদ

### ১. Static (Horizontal) S/R
- পূর্ববর্তী Swing High ও Low
- Round Number (1.1000, 50,000 ইত্যাদি)
- Historical Reaction Point
- একাধিক Touch = শক্তিশালী Level

### ২. Dynamic S/R
- Moving Average (20, 50, 100, 200 EMA/SMA)
- Trendline
- সময়/Price-এর সাথে পরিবর্তিত হয়
- চলমান Support/Resistance হিসেবে কাজ করে

### ৩. Institutional Level
- Round Number / Psychological Level
- Options Expiry Level
- বড় Order Cluster (Order Book-এ দৃশ্যমান)
- Central Bank Intervention Level
- Weekly/Monthly Open/Close

### ৪. Fibonacci Level
- 38.2%, 50%, 61.8% Retracement
- 127.2%, 161.8% Extension
- Horizontal S/R-এর সাথে Confluence = শক্তিশালী

---

## S/R Flip (Polarity)

Support ভাঙলে তা Resistance হয়ে যায়। Resistance ভাঙলে তা Support হয়ে যায়। Trading-এর সবচেয়ে নির্ভরযোগ্য Pattern-এর একটি।

\`\`\`
S/R Flip Pattern:

1. Price 1.1000-এ SUPPORT থেকে Bounce করে (একাধিকবার)
2. Price 1.1000-এর নিচে BREAK করে
3. Price নিচ থেকে 1.1000-এ ফেরত আসে
4. পুরনো Support (1.1000) এখন RESISTANCE হিসেবে কাজ করে
5. Price Reject হয় এবং নিচে চলতে থাকে

Entry: Flip Zone-এ Short (পুরনো Support = নতুন Resistance)
Stop: Zone-এর উপরে
Target: নিচের পরবর্তী Support
\`\`\`

---

## শক্তিশালী vs. দুর্বল Level চিহ্নিতকরণ

### শক্তিশালী Level-এ থাকে:

| বিষয় | কেন গুরুত্বপূর্ণ |
|--------|----------------|
| একাধিক Touch (৩+) | প্রমাণিত Reaction Zone |
| স্পষ্ট Rejection (Wick) | দৃশ্যমান Buying/Selling Pressure |
| High Timeframe তাৎপর্য | D1/W1 Level > M15 Level |
| অন্যান্য Tool-এর সাথে Confluence | Fib + S/R + MA = শক্তিশালী |
| Level-এ Volume | Institutional অংশগ্রহণ |
| সাম্প্রতিক প্রাসঙ্গিকতা | Fresh Level > পুরনো Level |

---

## S/R হিসেবে Order Block

### Order Block কী?
শক্তিশালী Impulsive Move-এর আগের শেষ Candle। Move ঘটানো Institutional Order-কে প্রতিনিধিত্ব করে।

### Bullish Order Block:
- শক্তিশালী Bullish Impulse-এর আগের শেষ Bearish/Down Candle
- যেখানে Institution Buy Order দিয়েছে তা চিহ্নিত করে
- Price ফিরে এলে ভবিষ্যতে Support

### Bearish Order Block:
- শক্তিশালী Bearish Impulse-এর আগের শেষ Bullish/Up Candle
- যেখানে Institution Sell Order দিয়েছে তা চিহ্নিত করে
- Price ফিরে এলে ভবিষ্যতে Resistance

### Order Block নিয়ম:
1. পরে শক্তিশালী Impulsive Move থাকতে হবে
2. Move-টি Structure Break করতে হবে (নতুন High/Low তৈরি)
3. Zone হিসেবে Candle-এর Body ব্যবহার করুন (Wick নয়)
4. প্রথম Touch-এ সর্বোচ্চ Probability
5. Mitigated (ব্যবহৃত) OB গুরুত্ব হারায়

---

## S/R Level Trade করা

### Strategy ১: Bounce Trading
\`\`\`
Setup: Price শক্তিশালী Support-এ আসছে
Entry: Support Zone-এ Bullish Rejection Candle
Stop Loss: Support Zone-এর নিচে (10-20 Pip Buffer)
Take Profit: উপরের পরবর্তী Resistance
Risk:Reward: ন্যূনতম 1:2
\`\`\`

### Strategy ২: Break and Retest
\`\`\`
Setup: Price Resistance ভেদ করে
অপেক্ষা: Price ভাঙা Resistance-এ Pullback করার
Entry: Flip Zone-এ Bullish Confirmation
Stop Loss: Flip Zone-এর নিচে
Take Profit: Measured Move বা পরবর্তী Resistance
\`\`\`

### Strategy ৩: Confluence Entry
\`\`\`
Setup: একই Zone-এ একাধিক S/R Factor মিলছে
- Horizontal Support
- 61.8% Fibonacci Level
- 200 EMA
- Order Block

Entry: Confirmation-সহ Confluence Zone-এ
Stop Loss: সম্পূর্ণ Confluence Zone-এর নিচে
Confidence: অত্যন্ত উচ্চ Probability
\`\`\`

---

## Dynamic Support ও Resistance

### Dynamic S/R হিসেবে Moving Average:

| MA | যা হিসেবে কাজ করে | সেরা Timeframe |
|----|-------------------|----------------|
| 20 EMA | Short-term Dynamic S/R | M15-H1 (Intraday) |
| 50 EMA | Medium-term Dynamic S/R | H4-D1 (Swing) |
| 200 SMA | Long-term Institutional S/R | D1-W1 (Position) |

---

## S/R-এ সাধারণ ভুল

| ভুল | কেন ব্যর্থ | সমাধান |
|------|-----------|--------|
| অনেক বেশি Level আঁকা | Analysis Paralysis | শুধু স্পষ্ট Level চিহ্নিত করুন |
| সুনির্দিষ্ট Price ব্যবহার | S/R Zone, Line নয় | Zone ব্যবহার করুন (10-30 Pip চওড়া) |
| Timeframe উপেক্ষা | M5 Level সহজে ভাঙে | H4/D1 Level-এ ফোকাস |
| শক্তিশালী Breakout-এর বিরুদ্ধে | Trend দুর্বল Level ভাঙে | Confirmation অপেক্ষা করুন |
| Level Update না করা | পুরনো Level প্রাসঙ্গিকতা হারায় | নিয়মিত Refresh করুন |

---

## সম্পর্কিত বিষয়

- [Technical Indicator](/bn/academy/technical-indicators) — Indicator দিয়ে Level Confirm
- [Chart Pattern](/bn/academy/chart-patterns) — S/R-এ Pattern তৈরি হয়
- [Fibonacci Trading](/bn/academy/fibonacci-trading) — S/R-এর সাথে Fib Confluence
- [Trendline ও Channel](/bn/academy/trendlines-channels) — Dynamic Level
- [Trading Plan](/bn/academy/trading-plan) — System-এ S/R যোগ করুন
`,
);

// ============================
// 3. CHART PATTERNS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "chart-patterns",
  {
    title: "Chart Patterns — Complete Trading Guide",
    description:
      "Master all major chart patterns: Head & Shoulders, Double Top/Bottom, Triangles, Wedges, Flags, and Cup & Handle. Learn entry rules, targets, and pattern trading strategies.",
    level: "beginner",
    order: 15,
  },
  `
## What Are Chart Patterns?

Chart patterns are **recognizable formations** on price charts that signal potential future price movements. They represent the psychology of market participants — fear, greed, accumulation, and distribution — visualized through price.

<Callout type="info" title="Pattern Trading Truth">
Patterns don't predict the future with certainty. They provide probabilistic edges — situations where price is more LIKELY to move in a certain direction. Always combine with risk management.
</Callout>

---

## Pattern Categories

| Category | What They Signal | Examples |
|----------|-----------------|----------|
| **Reversal Patterns** | Trend may change direction | Head & Shoulders, Double Top/Bottom |
| **Continuation Patterns** | Trend will likely resume | Flags, Pennants, Triangles |
| **Bilateral Patterns** | Could break either way | Symmetric Triangle, Rectangle |

---

## Reversal Patterns

### Head & Shoulders (H&S)

The most reliable reversal pattern. Signals bearish reversal at market tops.

\`\`\`
Structure:
    Head
   /    \\
  /      \\    Right
Left      \\  Shoulder
Shoulder   \\/
  \\      /
   \\    /
   Neckline
      |
   BREAK = Entry

Entry: Break below neckline
Stop Loss: Above right shoulder
Target: Distance from head to neckline, projected down
\`\`\`

**Inverse Head & Shoulders** = Bullish reversal at market bottoms (flipped version)

### Double Top

Two peaks at approximately the same level, signaling bearish reversal.

| Component | Description |
|-----------|-------------|
| First Peak | Price hits resistance and pulls back |
| Valley | Pullback between peaks (support/neckline) |
| Second Peak | Price returns to same resistance, fails again |
| Neckline Break | Entry trigger |
| Target | Distance from peaks to neckline, projected down |

### Double Bottom

Two valleys at approximately the same level, signaling bullish reversal.
- Mirror image of Double Top
- Entry on neckline break upward
- More reliable with volume increase on second bottom

### Triple Top / Triple Bottom
- Same concept with three touches
- Even more reliable (more confirmation)
- Longer to form, stronger signal

---

## Continuation Patterns

### Bull Flag

\`\`\`
Strong move up (flagpole)
   |
   |  ╲ ╲ ╲  ← Flag (slight pullback, parallel channel)
   |  ╱ ╱ ╱
   |
   | Breakout above flag = ENTRY
   |
Target: Length of flagpole projected from breakout
\`\`\`

### Bear Flag
- Mirror of bull flag (strong move down + slight pullback up)
- Breakout below flag = short entry

### Pennant
- Like a flag but with converging trendlines (triangle shape)
- Forms after strong impulse move
- Break in trend direction = entry
- Usually resolves quickly (5-20 candles)

### Ascending Triangle
- Flat resistance + rising support (higher lows)
- Bullish bias — usually breaks upward
- Entry: Break above flat resistance with volume
- Target: Height of triangle projected upward

### Descending Triangle
- Flat support + falling resistance (lower highs)
- Bearish bias — usually breaks downward
- Entry: Break below flat support
- Target: Height of triangle projected downward

### Symmetric Triangle
- Converging trendlines (lower highs + higher lows)
- Bilateral — can break either direction
- Trade the breakout direction
- Often resolves in the direction of prior trend

---

## Wedge Patterns

### Rising Wedge (Bearish)
- Both trendlines slope upward, but converge
- Price making higher highs and higher lows, but slowing
- Usually breaks DOWNWARD
- Can appear in uptrends (reversal) or downtrends (continuation)

### Falling Wedge (Bullish)
- Both trendlines slope downward, but converge
- Price making lower highs and lower lows, but slowing
- Usually breaks UPWARD
- Can appear in downtrends (reversal) or uptrends (continuation)

---

## Cup & Handle

A rounded bottom (cup) followed by a small consolidation (handle), signaling bullish continuation.

\`\`\`
     |     |
     |     | Handle
      \\   / ──╲╱──  Breakout = ENTRY
       \\ /
        U   ← Cup (rounded bottom)

Target: Depth of cup projected from breakout
Timeframe: Usually forms over weeks/months (D1 chart)
\`\`\`

---

## Pattern Trading Rules

### Entry Rules:
1. **Wait for confirmation** — Don't enter before the pattern completes
2. **Volume confirmation** — Breakouts should have increased volume
3. **Retest entry** — Often price retests the breakout level (better entry)
4. **Multiple timeframe** — Pattern on H4+ more reliable than M15

### Stop Loss Placement:
| Pattern | Stop Loss Location |
|---------|-------------------|
| Head & Shoulders | Above right shoulder |
| Double Top | Above the peaks |
| Double Bottom | Below the valleys |
| Flag/Pennant | Below the flag (bullish) or above (bearish) |
| Triangle | Beyond the opposite trendline |
| Wedge | Beyond the wedge boundary |

### Target Calculation:
Most patterns use the **measured move technique:**
- Measure the height of the pattern
- Project that distance from the breakout point
- This gives your minimum target

---

## Pattern Failure

<Callout type="warning" title="Important">
Patterns FAIL frequently (30-40% of the time). This is why stop losses are non-negotiable. A failed pattern often leads to a strong move in the OPPOSITE direction (trapped traders exit).
</Callout>

### When Patterns Fail:
- Trade against a strong higher-timeframe trend
- Low volume breakout (no conviction)
- News event overwhelms technical setup
- Pattern is visible to everyone (crowded trade)

---

## Related Topics

- [Support & Resistance](/en/academy/support-resistance-advanced) — Patterns form at key levels
- [Trendlines & Channels](/en/academy/trendlines-channels) — Drawing trend boundaries
- [Technical Indicators](/en/academy/technical-indicators) — Confirm patterns
- [Fibonacci Trading](/en/academy/fibonacci-trading) — Measure retracements
- [Risk Management](/en/academy/risk-management) — Manage pattern trades
`,
);

// ============================
// 3. CHART PATTERNS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "chart-patterns",
  {
    title: "Chart Pattern — সম্পূর্ণ Trading গাইড",
    description:
      "সব প্রধান Chart Pattern আয়ত্ত করুন: Head & Shoulders, Double Top/Bottom, Triangle, Wedge, Flag এবং Cup & Handle। Entry Rule, Target ও Pattern Trading Strategy শিখুন।",
    level: "beginner",
    order: 15,
  },
  `
## Chart Pattern কী?

Chart Pattern হলো Price Chart-এ **চিনতে পারা Formation** যা সম্ভাব্য ভবিষ্যৎ Price Movement-এর Signal দেয়। এগুলো Market Participant-দের Psychology — ভয়, লোভ, Accumulation ও Distribution — Price-এর মাধ্যমে দৃশ্যমান করে।

<Callout type="info" title="Pattern Trading-এর সত্য">
Pattern নিশ্চিতভাবে ভবিষ্যৎ Predict করে না। এগুলো Probabilistic Edge দেয় — এমন পরিস্থিতি যেখানে Price একটি নির্দিষ্ট দিকে যাওয়ার সম্ভাবনা বেশি। সবসময় Risk Management-এর সাথে মিলিয়ে ব্যবহার করুন।
</Callout>

---

## Pattern-এর শ্রেণিবিভাগ

| শ্রেণি | কী Signal দেয় | উদাহরণ |
|--------|---------------|---------|
| **Reversal Pattern** | Trend Direction পরিবর্তন হতে পারে | Head & Shoulders, Double Top/Bottom |
| **Continuation Pattern** | Trend সম্ভবত চলবে | Flag, Pennant, Triangle |
| **Bilateral Pattern** | যেকোনো দিকে Break হতে পারে | Symmetric Triangle, Rectangle |

---

## Reversal Pattern

### Head & Shoulders (H&S)

সবচেয়ে নির্ভরযোগ্য Reversal Pattern। Market Top-এ Bearish Reversal-এর Signal দেয়।

\`\`\`
গঠন:
    Head
   /    \\
  /      \\    Right
Left      \\  Shoulder
Shoulder   \\/
  \\      /
   \\    /
   Neckline
      |
   BREAK = Entry

Entry: Neckline-এর নিচে Break
Stop Loss: Right Shoulder-এর উপরে
Target: Head থেকে Neckline-এর দূরত্ব, নিচে Project
\`\`\`

**Inverse Head & Shoulders** = Market Bottom-এ Bullish Reversal (উল্টো Version)

### Double Top

প্রায় একই Level-এ দুটি Peak, Bearish Reversal-এর Signal।

| উপাদান | বর্ণনা |
|---------|--------|
| প্রথম Peak | Price Resistance Hit করে ও Pull Back |
| Valley | Peak-এর মধ্যে Pullback (Support/Neckline) |
| দ্বিতীয় Peak | Price একই Resistance-এ ফেরে, আবার ব্যর্থ |
| Neckline Break | Entry Trigger |
| Target | Peak থেকে Neckline-এর দূরত্ব, নিচে Project |

### Double Bottom

প্রায় একই Level-এ দুটি Valley, Bullish Reversal-এর Signal।
- Double Top-এর Mirror Image
- Neckline উপরে Break-এ Entry
- দ্বিতীয় Bottom-এ Volume বাড়লে বেশি নির্ভরযোগ্য

---

## Continuation Pattern

### Bull Flag
\`\`\`
শক্তিশালী Move Up (Flagpole)
   |
   |  ╲ ╲ ╲  ← Flag (সামান্য Pullback, Parallel Channel)
   |  ╱ ╱ ╱
   |
   | Flag-এর উপরে Breakout = ENTRY
   |
Target: Breakout থেকে Flagpole-এর দৈর্ঘ্য Project
\`\`\`

### Bear Flag
- Bull Flag-এর Mirror (শক্তিশালী Move Down + সামান্য Pullback Up)
- Flag-এর নিচে Breakout = Short Entry

### Ascending Triangle
- সমতল Resistance + ক্রমবর্ধমান Support (Higher Low)
- Bullish Bias — সাধারণত উপরে Break হয়
- Entry: Volume-সহ সমতল Resistance-এর উপরে Break
- Target: Triangle-এর উচ্চতা উপরে Project

### Descending Triangle
- সমতল Support + ক্রমহ্রাসমান Resistance (Lower High)
- Bearish Bias — সাধারণত নিচে Break হয়
- Entry: সমতল Support-এর নিচে Break
- Target: Triangle-এর উচ্চতা নিচে Project

### Symmetric Triangle
- সংকীর্ণ হওয়া Trendline (Lower High + Higher Low)
- Bilateral — যেকোনো দিকে Break হতে পারে
- Breakout Direction-এ Trade করুন
- প্রায়ই পূর্ববর্তী Trend-এর দিকে Resolve হয়

---

## Wedge Pattern

### Rising Wedge (Bearish)
- উভয় Trendline ঊর্ধ্বমুখী, কিন্তু Converge করছে
- Price Higher High ও Higher Low করছে, কিন্তু ধীর হচ্ছে
- সাধারণত নিচে BREAK হয়

### Falling Wedge (Bullish)
- উভয় Trendline নিম্নমুখী, কিন্তু Converge করছে
- Price Lower High ও Lower Low করছে, কিন্তু ধীর হচ্ছে
- সাধারণত উপরে BREAK হয়

---

## Cup & Handle

একটি Rounded Bottom (Cup) ও তারপর ছোট Consolidation (Handle), Bullish Continuation-এর Signal।

\`\`\`
Target: Breakout থেকে Cup-এর গভীরতা Project
Timeframe: সাধারণত সপ্তাহ/মাসে তৈরি হয় (D1 Chart)
\`\`\`

---

## Pattern Trading নিয়ম

### Entry নিয়ম:
1. **Confirmation অপেক্ষা করুন** — Pattern Complete হওয়ার আগে Enter করবেন না
2. **Volume Confirmation** — Breakout-এ Volume বাড়া উচিত
3. **Retest Entry** — প্রায়ই Price Breakout Level Retest করে (ভালো Entry)
4. **Multiple Timeframe** — H4+ এ Pattern M15-এর চেয়ে বেশি নির্ভরযোগ্য

### Stop Loss Placement:
| Pattern | Stop Loss অবস্থান |
|---------|-------------------|
| Head & Shoulders | Right Shoulder-এর উপরে |
| Double Top | Peak-এর উপরে |
| Double Bottom | Valley-র নিচে |
| Flag/Pennant | Flag-এর নিচে (Bullish) বা উপরে (Bearish) |
| Triangle | বিপরীত Trendline-এর বাইরে |

### Target গণনা:
বেশিরভাগ Pattern **Measured Move Technique** ব্যবহার করে:
- Pattern-এর উচ্চতা পরিমাপ করুন
- Breakout Point থেকে সেই দূরত্ব Project করুন
- এটি আপনার ন্যূনতম Target

---

## Pattern Failure

<Callout type="warning" title="গুরুত্বপূর্ণ">
Pattern ঘন ঘন FAIL করে (৩০-৪০% সময়)। এজন্যই Stop Loss অপরিহার্য। Failed Pattern প্রায়ই বিপরীত দিকে শক্তিশালী Move ঘটায় (Trapped Trader Exit করে)।
</Callout>

### Pattern কখন Fail করে:
- শক্তিশালী Higher-timeframe Trend-এর বিরুদ্ধে Trade
- কম Volume Breakout (Conviction নেই)
- News Event Technical Setup-কে আচ্ছন্ন করে
- Pattern সবার কাছে দৃশ্যমান (Crowded Trade)

---

## সম্পর্কিত বিষয়

- [Support ও Resistance](/bn/academy/support-resistance-advanced) — মূল Level-এ Pattern তৈরি হয়
- [Trendline ও Channel](/bn/academy/trendlines-channels) — Trend Boundary আঁকা
- [Technical Indicator](/bn/academy/technical-indicators) — Pattern Confirm করুন
- [Fibonacci Trading](/bn/academy/fibonacci-trading) — Retracement পরিমাপ
- [Risk Management](/bn/academy/risk-management) — Pattern Trade ম্যানেজ
`,
);

// ============================
// 4. TRENDLINES & CHANNELS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "trendlines-channels",
  {
    title: "Trendlines & Channels — Complete Guide",
    description:
      "Master trendline drawing, channel identification, and trend-based trading strategies. Learn ascending, descending, and parallel channels for precise entries.",
    level: "intermediate",
    order: 16,
  },
  `
## Understanding Trendlines & Channels

Trendlines are the simplest yet most powerful tools in technical analysis. They visualize the direction and angle of price movement, providing clear entry and exit zones.

---

## What is a Trendline?

A trendline is a straight line connecting **two or more price points** that shows the direction of the trend.

### Drawing Rules:
1. **Uptrend line:** Connect two or more swing LOWS (ascending)
2. **Downtrend line:** Connect two or more swing HIGHS (descending)
3. **Minimum 2 touches** to draw, 3+ to validate
4. **Don't force it** — if you have to adjust multiple times, it's not valid
5. **Use bodies or wicks consistently** (wicks preferred for accuracy)

### Trendline Validity:

| Factor | Stronger Trendline | Weaker Trendline |
|--------|-------------------|------------------|
| Touches | 3+ confirmed touches | Only 2 touches |
| Timeframe | D1/W1 | M5/M15 |
| Duration | Weeks/months old | Hours/days old |
| Respect | Clean bounces | Messy, overlapping |
| Angle | 30-45 degrees | Too steep (>60°) or too flat |

---

## Types of Channels

### Ascending Channel (Bullish):
- Higher highs AND higher lows
- Parallel lines containing price
- Buy at lower trendline, sell at upper
- Break below = trend reversal warning

### Descending Channel (Bearish):
- Lower highs AND lower lows
- Sell at upper trendline, buy at lower
- Break above = trend reversal warning

### Horizontal Channel (Range):
- Price bouncing between flat support and resistance
- Buy at support, sell at resistance
- Break above/below = new trend starting

---

## Trading Strategies

### Strategy 1: Trendline Bounce
\`\`\`
Setup: Price pulls back to established uptrend line
Entry: Bullish rejection candle at trendline
Stop: Below trendline (with buffer)
Target: Previous swing high or channel top
R:R: Minimum 1:2
\`\`\`

### Strategy 2: Trendline Break
\`\`\`
Setup: Price breaks through established trendline
Wait: For retest of broken trendline
Entry: Rejection candle at broken trendline (now acts as S/R)
Stop: Beyond the trendline
Target: Measured move equal to previous swing
\`\`\`

### Strategy 3: Channel Trading
\`\`\`
Ascending Channel:
- Buy: At lower channel boundary (support)
- Sell: At upper channel boundary (resistance)
- Stop: Below/above channel line
- Exit: Opposite channel boundary
- Break: Channel break signals new move
\`\`\`

---

## Channel Width and Targets

### Measuring:
\`\`\`
Channel Width = Distance between upper and lower boundaries

When price breaks a channel:
Target = Channel width projected from breakout point

Example:
- Channel width: 150 pips
- Breakout at: 1.0900
- Target: 1.0900 + 150 = 1.1050 (upside break)
- Or: 1.0900 - 150 = 1.0750 (downside break)
\`\`\`

---

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Forcing trendlines | False signals | If it doesn't fit naturally, don't draw it |
| Ignoring timeframe | M5 trendlines break constantly | Focus on H4/D1 trendlines |
| Too steep angles | Unsustainable, will break | Ideal angle: 30-45° |
| Not adjusting | Old lines become irrelevant | Update as new data forms |
| Trading against the channel | Fighting the trend | Trade in channel direction |

---

## Related Topics

- [Support & Resistance](/en/academy/support-resistance-advanced) — Key levels
- [Chart Patterns](/en/academy/chart-patterns) — Patterns within channels
- [Fibonacci Trading](/en/academy/fibonacci-trading) — Fib + trendline confluence
- [Technical Indicators](/en/academy/technical-indicators) — Confirm trend direction
- [Elliott Wave Theory](/en/academy/elliott-wave-theory) — Wave channels
`,
);

// ============================
// 4. TRENDLINES & CHANNELS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "trendlines-channels",
  {
    title: "Trendline ও Channel — সম্পূর্ণ গাইড",
    description:
      "Trendline আঁকা, Channel চিহ্নিতকরণ এবং Trend-based Trading Strategy আয়ত্ত করুন। সুনির্দিষ্ট Entry-র জন্য Ascending, Descending ও Parallel Channel শিখুন।",
    level: "intermediate",
    order: 16,
  },
  `
## Trendline ও Channel বোঝা

Trendline হলো Technical Analysis-এর সবচেয়ে সহজ অথচ সবচেয়ে শক্তিশালী Tool। এগুলো Price Movement-এর দিক ও কোণ দৃশ্যমান করে, স্পষ্ট Entry ও Exit Zone প্রদান করে।

---

## Trendline কী?

Trendline হলো একটি সরল রেখা যা **দুই বা তার বেশি Price Point** সংযুক্ত করে এবং Trend-এর দিক দেখায়।

### আঁকার নিয়ম:
1. **Uptrend Line:** দুই বা তার বেশি Swing LOW সংযুক্ত করুন (ঊর্ধ্বমুখী)
2. **Downtrend Line:** দুই বা তার বেশি Swing HIGH সংযুক্ত করুন (নিম্নমুখী)
3. আঁকতে **ন্যূনতম ২ Touch**, Validate করতে ৩+
4. **জোর করবেন না** — একাধিকবার Adjust করতে হলে এটি Valid নয়
5. **Body বা Wick ধারাবাহিকভাবে ব্যবহার করুন** (নির্ভুলতার জন্য Wick পছন্দনীয়)

### Trendline বৈধতা:

| বিষয় | শক্তিশালী Trendline | দুর্বল Trendline |
|--------|-------------------|-----------------|
| Touch | ৩+ নিশ্চিত Touch | শুধু ২ Touch |
| Timeframe | D1/W1 | M5/M15 |
| সময়কাল | সপ্তাহ/মাস পুরনো | ঘণ্টা/দিন পুরনো |
| সম্মান | পরিষ্কার Bounce | এলোমেলো, Overlapping |
| কোণ | ৩০-৪৫ ডিগ্রি | খুব খাড়া (>৬০°) বা খুব সমতল |

---

## Channel-এর প্রকারভেদ

### Ascending Channel (Bullish):
- Higher High এবং Higher Low
- Price-কে ধারণ করা Parallel Line
- Lower Trendline-এ Buy, Upper-এ Sell
- নিচে Break = Trend Reversal সতর্কতা

### Descending Channel (Bearish):
- Lower High এবং Lower Low
- Upper Trendline-এ Sell, Lower-এ Buy
- উপরে Break = Trend Reversal সতর্কতা

### Horizontal Channel (Range):
- সমতল Support ও Resistance-এর মধ্যে Price Bounce
- Support-এ Buy, Resistance-এ Sell
- উপরে/নিচে Break = নতুন Trend শুরু

---

## Trading Strategy

### Strategy ১: Trendline Bounce
\`\`\`
Setup: Price প্রতিষ্ঠিত Uptrend Line-এ Pull Back
Entry: Trendline-এ Bullish Rejection Candle
Stop: Trendline-এর নিচে (Buffer-সহ)
Target: পূর্ববর্তী Swing High বা Channel Top
R:R: ন্যূনতম 1:2
\`\`\`

### Strategy ২: Trendline Break
\`\`\`
Setup: Price প্রতিষ্ঠিত Trendline ভেদ করে
অপেক্ষা: ভাঙা Trendline-এর Retest
Entry: ভাঙা Trendline-এ Rejection Candle (এখন S/R হিসেবে কাজ করে)
Stop: Trendline-এর বাইরে
Target: পূর্ববর্তী Swing-এর সমান Measured Move
\`\`\`

### Strategy ৩: Channel Trading
\`\`\`
Ascending Channel:
- Buy: Lower Channel Boundary-তে (Support)
- Sell: Upper Channel Boundary-তে (Resistance)
- Stop: Channel Line-এর নিচে/উপরে
- Exit: বিপরীত Channel Boundary
- Break: Channel Break নতুন Move-এর Signal
\`\`\`

---

## Channel Width ও Target

### পরিমাপ:
\`\`\`
Channel Width = Upper ও Lower Boundary-র মধ্যে দূরত্ব

Price Channel Break করলে:
Target = Breakout Point থেকে Channel Width Project

উদাহরণ:
- Channel Width: 150 Pip
- Breakout at: 1.0900
- Target: 1.0900 + 150 = 1.1050 (উপরের দিকে Break)
- অথবা: 1.0900 - 150 = 1.0750 (নিচের দিকে Break)
\`\`\`

---

## সাধারণ ভুল

| ভুল | সমস্যা | সমাধান |
|------|---------|--------|
| Trendline জোর করা | ভুল Signal | স্বাভাবিকভাবে না মিললে আঁকবেন না |
| Timeframe উপেক্ষা | M5 Trendline ক্রমাগত ভাঙে | H4/D1 Trendline-এ ফোকাস |
| খুব খাড়া কোণ | টেকসই নয়, ভাঙবে | আদর্শ কোণ: ৩০-৪৫° |
| Adjust না করা | পুরনো Line অপ্রাসঙ্গিক হয় | নতুন Data-র সাথে Update করুন |
| Channel-এর বিরুদ্ধে Trade | Trend-এর সাথে লড়াই | Channel-এর দিকে Trade করুন |

---

## সম্পর্কিত বিষয়

- [Support ও Resistance](/bn/academy/support-resistance-advanced) — মূল Level
- [Chart Pattern](/bn/academy/chart-patterns) — Channel-এর মধ্যে Pattern
- [Fibonacci Trading](/bn/academy/fibonacci-trading) — Fib + Trendline Confluence
- [Technical Indicator](/bn/academy/technical-indicators) — Trend Direction Confirm
- [Elliott Wave Theory](/bn/academy/elliott-wave-theory) — Wave Channel
`,
);

// ============================
// 5. FIBONACCI TRADING — EN
// ============================
writeMdx(
  "en",
  "academy",
  "fibonacci-trading",
  {
    title: "Fibonacci Trading — Complete Guide",
    description:
      "Master Fibonacci retracement and extension levels for trading. Learn the golden pocket, Fibonacci confluence zones, and how to combine Fib with other tools.",
    level: "intermediate",
    order: 17,
  },
  `
## What is Fibonacci in Trading?

Fibonacci levels are **mathematical ratios** derived from the Fibonacci sequence that identify potential support, resistance, and target levels. These ratios appear throughout nature and financial markets with remarkable frequency.

<Callout type="info" title="Why Fibonacci Works">
Fibonacci works because thousands of traders watch the same levels, creating self-fulfilling prophecies. Institutional algorithms and retail traders alike use Fibonacci — making these levels genuine zones of interest.
</Callout>

---

## Key Fibonacci Ratios

| Ratio | Name | Use |
|-------|------|-----|
| **0.236** (23.6%) | Shallow retracement | Strong trends |
| **0.382** (38.2%) | Common retracement | Trend continuation |
| **0.500** (50%) | Not Fibonacci but commonly used | Psychological midpoint |
| **0.618** (61.8%) | Golden Ratio | Most important level |
| **0.786** (78.6%) | Deep retracement | Last chance for trend |
| **1.272** (127.2%) | First extension | First target beyond swing |
| **1.618** (161.8%) | Golden extension | Primary profit target |
| **2.618** (261.8%) | Extended target | Aggressive targets |

---

## Fibonacci Retracement

### How to Draw:
1. Identify a clear swing move (high to low or low to high)
2. Place Fibonacci tool from **swing start** to **swing end**
3. Key levels automatically appear between the two points
4. Watch for price reactions at these levels

### For an UPTREND (Buy setup):
\`\`\`
Draw from Swing Low → Swing High
Then wait for price to retrace (pull back) to a Fib level:

Swing High ─────── 0% (start of retracement)
                   23.6% (shallow - very strong trend)
                   38.2% (common pullback)
                   50.0% (midpoint)
                   61.8% (Golden Pocket - BEST entry zone)
                   78.6% (deep - trend may be failing)
Swing Low ──────── 100% (full retracement = trend broken)
\`\`\`

### The Golden Pocket (61.8% - 78.6%):
The zone between 61.8% and 78.6% is called the **Golden Pocket** — the highest probability reversal zone in trending markets.

---

## Fibonacci Extension

### How to Use Extensions:
Used to identify **profit targets** beyond the original swing.

### Drawing (3-Point Method):
1. Start: Swing Low (impulse start)
2. End: Swing High (impulse end)
3. Retracement Low: End of pullback
4. Extensions project above the swing high

### Key Extension Targets:

| Level | Usage | Notes |
|-------|-------|-------|
| 127.2% | Conservative target | First target for partial profit |
| 161.8% | Standard target | Primary target |
| 200.0% | Extended target | Strong trend continuation |
| 261.8% | Aggressive target | Only in very strong trends |

---

## Trading with Fibonacci

### Entry Strategy (Golden Pocket Buy):
\`\`\`
1. Identify bullish impulse move (clear swing low → high)
2. Wait for pullback (retracement)
3. Mark the 61.8%-78.6% zone (Golden Pocket)
4. Look for bullish confirmation at Golden Pocket:
   - Bullish engulfing candle
   - Pin bar / hammer
   - Order block at same level
   - RSI divergence
5. Enter long with stop below 78.6% (or below swing low)
6. Target: 127.2% or 161.8% extension

Risk:Reward typically 1:2 to 1:4
\`\`\`

### Fibonacci Confluence:
When multiple Fibonacci levels from DIFFERENT swings align at the same price zone — this creates an extremely strong level.

\`\`\`
Example:
- 61.8% retracement of the daily swing = 1.0850
- 127.2% extension of the H4 swing = 1.0855
- 50% retracement of the weekly swing = 1.0845

Zone 1.0845-1.0855 = TRIPLE FIB CONFLUENCE
→ Very high probability reaction zone
\`\`\`

---

## Fibonacci + Other Tools

### Fib + Support/Resistance:
- S/R level aligning with 61.8% Fib = powerful zone
- Increases probability of reaction significantly

### Fib + Order Block:
- Order Block sitting at Golden Pocket = institutional + mathematical confluence
- Highest probability ICT/SMC setup

### Fib + Moving Average:
- 200 EMA at 50% Fib level = strong dynamic + static confluence
- Price likely to react at this zone

---

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Drawing on every small swing | Only use clear, significant swings (H4+) |
| Entering at first touch without confirmation | Wait for candle confirmation |
| Using Fib alone | Combine with S/R, OB, MA |
| Ignoring trend context | Fib works WITH the trend, not against |
| Too tight stops | Place stop below the full Fib zone |

---

## Related Topics

- [Support & Resistance](/en/academy/support-resistance-advanced) — Combine with Fib
- [Elliott Wave Theory](/en/academy/elliott-wave-theory) — Fib + wave counting
- [Chart Patterns](/en/academy/chart-patterns) — Pattern + Fib targets
- [Technical Indicators](/en/academy/technical-indicators) — Confirm Fib levels
- [Position Sizing](/en/academy/position-sizing) — Size based on Fib stops
`,
);

// ============================
// 5. FIBONACCI TRADING — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "fibonacci-trading",
  {
    title: "Fibonacci Trading — সম্পূর্ণ গাইড",
    description:
      "Trading-এর জন্য Fibonacci Retracement ও Extension Level আয়ত্ত করুন। Golden Pocket, Fibonacci Confluence Zone এবং অন্যান্য Tool-এর সাথে Fib সমন্বয় শিখুন।",
    level: "intermediate",
    order: 17,
  },
  `
## Trading-এ Fibonacci কী?

Fibonacci Level হলো Fibonacci Sequence থেকে প্রাপ্ত **গাণিতিক অনুপাত** যা সম্ভাব্য Support, Resistance ও Target Level চিহ্নিত করে। এই অনুপাতগুলো প্রকৃতি ও Financial Market জুড়ে অসাধারণ ফ্রিকোয়েন্সিতে দেখা যায়।

<Callout type="info" title="Fibonacci কেন কাজ করে">
Fibonacci কাজ করে কারণ হাজার হাজার Trader একই Level পর্যবেক্ষণ করে, Self-fulfilling Prophecy তৈরি করে। Institutional Algorithm ও Retail Trader উভয়েই Fibonacci ব্যবহার করে — এই Level-গুলোকে প্রকৃত Interest Zone করে তোলে।
</Callout>

---

## মূল Fibonacci Ratio

| Ratio | নাম | ব্যবহার |
|-------|------|---------|
| **0.236** (23.6%) | Shallow Retracement | শক্তিশালী Trend |
| **0.382** (38.2%) | সাধারণ Retracement | Trend Continuation |
| **0.500** (50%) | Fibonacci নয় কিন্তু সাধারণ | Psychological Midpoint |
| **0.618** (61.8%) | Golden Ratio | সবচেয়ে গুরুত্বপূর্ণ Level |
| **0.786** (78.6%) | Deep Retracement | Trend-এর শেষ সুযোগ |
| **1.272** (127.2%) | প্রথম Extension | Swing-এর বাইরে প্রথম Target |
| **1.618** (161.8%) | Golden Extension | প্রাথমিক Profit Target |
| **2.618** (261.8%) | Extended Target | আক্রমণাত্মক Target |

---

## Fibonacci Retracement

### কীভাবে আঁকবেন:
1. একটি স্পষ্ট Swing Move চিহ্নিত করুন (High থেকে Low বা Low থেকে High)
2. **Swing Start** থেকে **Swing End**-এ Fibonacci Tool রাখুন
3. দুই Point-এর মধ্যে Key Level স্বয়ংক্রিয়ভাবে দেখা যায়
4. এই Level-গুলোতে Price Reaction পর্যবেক্ষণ করুন

### UPTREND-এ (Buy Setup):
\`\`\`
Swing Low → Swing High থেকে আঁকুন
তারপর Price Fib Level-এ Retrace (Pull Back) করার অপেক্ষা করুন:

Swing High ─────── 0% (Retracement-এর শুরু)
                   23.6% (Shallow - অত্যন্ত শক্তিশালী Trend)
                   38.2% (সাধারণ Pullback)
                   50.0% (Midpoint)
                   61.8% (Golden Pocket - সেরা Entry Zone)
                   78.6% (Deep - Trend ব্যর্থ হতে পারে)
Swing Low ──────── 100% (সম্পূর্ণ Retracement = Trend ভেঙেছে)
\`\`\`

### Golden Pocket (61.8% - 78.6%):
61.8% ও 78.6%-এর মধ্যবর্তী Zone-কে **Golden Pocket** বলা হয় — Trending Market-এ সর্বোচ্চ Probability Reversal Zone।

---

## Fibonacci Extension

### Extension কীভাবে ব্যবহার করবেন:
Original Swing-এর বাইরে **Profit Target** চিহ্নিত করতে ব্যবহৃত।

### মূল Extension Target:

| Level | ব্যবহার | নোট |
|-------|---------|------|
| 127.2% | রক্ষণশীল Target | আংশিক Profit-এর প্রথম Target |
| 161.8% | মানক Target | প্রাথমিক Target |
| 200.0% | বর্ধিত Target | শক্তিশালী Trend Continuation |
| 261.8% | আক্রমণাত্মক Target | শুধু অত্যন্ত শক্তিশালী Trend-এ |

---

## Fibonacci দিয়ে Trading

### Entry Strategy (Golden Pocket Buy):
\`\`\`
1. Bullish Impulse Move চিহ্নিত করুন (স্পষ্ট Swing Low → High)
2. Pullback (Retracement)-এর জন্য অপেক্ষা করুন
3. 61.8%-78.6% Zone (Golden Pocket) চিহ্নিত করুন
4. Golden Pocket-এ Bullish Confirmation খুঁজুন:
   - Bullish Engulfing Candle
   - Pin Bar / Hammer
   - একই Level-এ Order Block
   - RSI Divergence
5. 78.6%-এর নিচে (বা Swing Low-এর নিচে) Stop দিয়ে Long Enter
6. Target: 127.2% বা 161.8% Extension

Risk:Reward সাধারণত 1:2 থেকে 1:4
\`\`\`

### Fibonacci Confluence:
যখন বিভিন্ন Swing-এর একাধিক Fibonacci Level একই Price Zone-এ মেলে — এটি অত্যন্ত শক্তিশালী Level তৈরি করে।

\`\`\`
উদাহরণ:
- Daily Swing-এর 61.8% Retracement = 1.0850
- H4 Swing-এর 127.2% Extension = 1.0855
- Weekly Swing-এর 50% Retracement = 1.0845

Zone 1.0845-1.0855 = TRIPLE FIB CONFLUENCE
→ অত্যন্ত উচ্চ Probability Reaction Zone
\`\`\`

---

## Fibonacci + অন্যান্য Tool

### Fib + Support/Resistance:
- 61.8% Fib-এর সাথে S/R Level মিলছে = শক্তিশালী Zone
- Reaction-এর Probability উল্লেখযোগ্যভাবে বাড়ে

### Fib + Order Block:
- Golden Pocket-এ Order Block = Institutional + Mathematical Confluence
- সর্বোচ্চ Probability ICT/SMC Setup

### Fib + Moving Average:
- 50% Fib Level-এ 200 EMA = শক্তিশালী Dynamic + Static Confluence
- এই Zone-এ Price React করার সম্ভাবনা বেশি

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| প্রতিটি ছোট Swing-এ আঁকা | শুধু স্পষ্ট, তাৎপর্যপূর্ণ Swing ব্যবহার করুন (H4+) |
| Confirmation ছাড়া প্রথম Touch-এ Enter | Candle Confirmation অপেক্ষা করুন |
| শুধু Fib ব্যবহার | S/R, OB, MA-এর সাথে সমন্বয় করুন |
| Trend Context উপেক্ষা | Fib Trend-এর সাথে কাজ করে, বিরুদ্ধে নয় |
| খুব Tight Stop | সম্পূর্ণ Fib Zone-এর নিচে Stop রাখুন |

---

## সম্পর্কিত বিষয়

- [Support ও Resistance](/bn/academy/support-resistance-advanced) — Fib-এর সাথে সমন্বয়
- [Elliott Wave Theory](/bn/academy/elliott-wave-theory) — Fib + Wave Counting
- [Chart Pattern](/bn/academy/chart-patterns) — Pattern + Fib Target
- [Technical Indicator](/bn/academy/technical-indicators) — Fib Level Confirm
- [Position Sizing](/bn/academy/position-sizing) — Fib Stop-এর ভিত্তিতে Size
`,
);

// ============================
// 6. ELLIOTT WAVE THEORY — EN
// ============================
writeMdx(
  "en",
  "academy",
  "elliott-wave-theory",
  {
    title: "Elliott Wave Theory — Complete Guide",
    description:
      "Understand Elliott Wave Theory for market analysis. Learn impulse waves, corrective waves, wave counting rules, and how to apply wave analysis to your trading.",
    level: "intermediate",
    order: 18,
  },
  `
## What is Elliott Wave Theory?

Elliott Wave Theory proposes that financial markets move in **predictable wave patterns** driven by collective investor psychology. Developed by Ralph Nelson Elliott in the 1930s, it identifies recurring fractal patterns in market prices.

<Callout type="info" title="Core Principle">
Markets move in waves of 5 (impulse/trending) and 3 (corrective/counter-trend). This pattern repeats at every timeframe — from monthly charts down to minute charts — creating a fractal structure.
</Callout>

---

## The Basic Wave Structure

### Complete Market Cycle: 5 + 3 = 8 Waves

\`\`\`
IMPULSE PHASE (5 waves with the trend):

      5
     / 
    /   
   3     
  / \\   
 /   4  
1     \\ 
 \\   /
  \\ /
   2

Waves 1, 3, 5 = Motive (with trend)
Waves 2, 4 = Corrective (counter-trend)

CORRECTIVE PHASE (3 waves against the trend):

A
 \\
  \\   C
   B /
    \\/

Waves A, C = With correction
Wave B = Counter-correction
\`\`\`

---

## Impulse Wave Rules (Must Be Followed)

### Three Absolute Rules:
1. **Wave 2 cannot retrace more than 100% of Wave 1** (it cannot go below the start of Wave 1)
2. **Wave 3 cannot be the shortest** of waves 1, 3, and 5 (usually the longest and strongest)
3. **Wave 4 cannot overlap Wave 1** territory (in most cases)

### Wave Characteristics:

| Wave | Typical Character | Fibonacci Relation |
|------|------------------|-------------------|
| **Wave 1** | Initial move, often doubted | Establishes base measurement |
| **Wave 2** | Sharp retracement, fearful | Retraces 50-78.6% of Wave 1 |
| **Wave 3** | Strongest, most extended | 161.8%-261.8% of Wave 1 |
| **Wave 4** | Complex, sideways consolidation | Retraces 23.6-50% of Wave 3 |
| **Wave 5** | Final push, divergence common | 61.8-100% of Wave 1 (or 161.8%) |

---

## Corrective Wave Patterns

### Types of Corrections:

| Pattern | Structure | Description |
|---------|-----------|-------------|
| **Zigzag** | A-B-C (5-3-5) | Sharp, impulsive correction |
| **Flat** | A-B-C (3-3-5) | Sideways correction |
| **Triangle** | A-B-C-D-E (3-3-3-3-3) | Converging sideways |
| **Complex** | W-X-Y or W-X-Y-X-Z | Multiple corrections combined |

### Zigzag Correction:
- Wave A: 5 sub-waves
- Wave B: 3 sub-waves (shallow retracement of A)
- Wave C: 5 sub-waves (often equals Wave A in length)

### Flat Correction:
- Wave A: 3 sub-waves
- Wave B: 3 sub-waves (retraces most of A)
- Wave C: 5 sub-waves (often ends near Wave A endpoint)

---

## Wave Trading Guidelines

### Best Trading Opportunities:

| Wave | Why It's Tradeable | Entry Method |
|------|-------------------|--------------|
| **Wave 3** | Longest, strongest | Enter at end of Wave 2 correction |
| **Wave 5** | Final impulse push | Enter at end of Wave 4 correction |
| **Wave C** | Impulsive correction | Enter at end of Wave B |

### Wave 3 Entry Strategy:
\`\`\`
1. Identify completed Wave 1 (initial impulse)
2. Wait for Wave 2 correction (typically 50-78.6% retracement)
3. Look for reversal signals at Golden Pocket (61.8-78.6%)
4. Enter long with stop below Wave 2 low
5. Target: 161.8% extension of Wave 1
6. This is the BEST wave to trade (longest and strongest)
\`\`\`

---

## Elliott Wave + Fibonacci

| Wave | Fibonacci Application |
|------|----------------------|
| Wave 2 end | 50-78.6% retracement of Wave 1 |
| Wave 3 target | 161.8%-261.8% extension of Wave 1 |
| Wave 4 end | 23.6-50% retracement of Wave 3 |
| Wave 5 target | 61.8-100% of Wave 1 (from Wave 4) |
| Wave A target | 38.2-61.8% of the entire impulse |
| Wave C target | 100-161.8% of Wave A |

---

## Practical Wave Counting Tips

1. **Start on higher timeframes** — Count waves on Weekly/Daily first
2. **Look for obvious patterns** — If you can't see it clearly, move on
3. **Wave 3 is unmistakable** — It's the big, powerful move
4. **Alternation** — If Wave 2 is sharp, Wave 4 will be flat (and vice versa)
5. **Volume confirms** — Volume highest in Wave 3, decreasing in Wave 5
6. **Divergence** — RSI divergence common at Wave 5 completion
7. **Don't force counts** — Multiple valid counts often exist

<Callout type="warning" title="Honest Warning">
Elliott Wave is subjective. Two analysts can look at the same chart and produce different valid wave counts. Use it as a framework for understanding market structure, not as a precise prediction tool. Always combine with risk management.
</Callout>

---

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Forcing wave counts | If it's not clear, it's not tradeable |
| Ignoring the rules | Three rules are absolute — never break them |
| Trading every wave | Focus on Wave 3 and C (most reliable) |
| No stop loss | Always have stops regardless of wave count |
| Over-analysis | Keep it simple — obvious waves only |
| Wrong timeframe | Start high (W1/D1), then drill down |

---

## Related Topics

- [Fibonacci Trading](/en/academy/fibonacci-trading) — Essential for wave targets
- [Chart Patterns](/en/academy/chart-patterns) — Patterns within waves
- [Trendlines & Channels](/en/academy/trendlines-channels) — Wave channels
- [Technical Indicators](/en/academy/technical-indicators) — Confirm wave counts
- [Support & Resistance](/en/academy/support-resistance-advanced) — Wave-level S/R
`,
);

// ============================
// 6. ELLIOTT WAVE THEORY — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "elliott-wave-theory",
  {
    title: "Elliott Wave Theory — সম্পূর্ণ গাইড",
    description:
      "Market Analysis-এর জন্য Elliott Wave Theory বুঝুন। Impulse Wave, Corrective Wave, Wave Counting Rule এবং আপনার Trading-এ Wave Analysis প্রয়োগ শিখুন।",
    level: "intermediate",
    order: 18,
  },
  `
## Elliott Wave Theory কী?

Elliott Wave Theory প্রস্তাব করে যে Financial Market সম্মিলিত Investor Psychology দ্বারা চালিত **পূর্বানুমানযোগ্য Wave Pattern**-এ চলে। ১৯৩০-এর দশকে Ralph Nelson Elliott এটি তৈরি করেন, Market Price-এ Recurring Fractal Pattern চিহ্নিত করে।

<Callout type="info" title="মূল নীতি">
Market ৫টি Wave-এ (Impulse/Trending) ও ৩টি Wave-এ (Corrective/Counter-trend) চলে। এই Pattern প্রতিটি Timeframe-এ পুনরাবৃত্তি হয় — Monthly Chart থেকে Minute Chart পর্যন্ত — একটি Fractal Structure তৈরি করে।
</Callout>

---

## মৌলিক Wave কাঠামো

### সম্পূর্ণ Market Cycle: ৫ + ৩ = ৮ Wave

\`\`\`
IMPULSE PHASE (Trend-এর সাথে ৫ Wave):

Wave 1, 3, 5 = Motive (Trend-এর সাথে)
Wave 2, 4 = Corrective (Counter-trend)

CORRECTIVE PHASE (Trend-এর বিরুদ্ধে ৩ Wave):

Wave A, C = Correction-এর সাথে
Wave B = Counter-correction
\`\`\`

---

## Impulse Wave-এর নিয়ম (অবশ্যই মানতে হবে)

### তিনটি পরম নিয়ম:
1. **Wave 2 কখনো Wave 1-এর 100% এর বেশি Retrace করতে পারবে না** (Wave 1-এর শুরুর নিচে যেতে পারে না)
2. **Wave 3 কখনো সবচেয়ে ছোট হতে পারবে না** Wave 1, 3 ও 5-এর মধ্যে (সাধারণত সবচেয়ে লম্বা ও শক্তিশালী)
3. **Wave 4 কখনো Wave 1-এর Territory-তে Overlap করতে পারবে না** (বেশিরভাগ ক্ষেত্রে)

### Wave-এর বৈশিষ্ট্য:

| Wave | সাধারণ চরিত্র | Fibonacci সম্পর্ক |
|------|--------------|-------------------|
| **Wave 1** | প্রাথমিক Move, প্রায়ই সন্দেহের মুখে | ভিত্তি পরিমাপ স্থাপন |
| **Wave 2** | তীব্র Retracement, ভয়পূর্ণ | Wave 1-এর 50-78.6% Retrace |
| **Wave 3** | সবচেয়ে শক্তিশালী, সবচেয়ে বিস্তৃত | Wave 1-এর 161.8%-261.8% |
| **Wave 4** | জটিল, পাশে Consolidation | Wave 3-এর 23.6-50% Retrace |
| **Wave 5** | চূড়ান্ত Push, Divergence সাধারণ | Wave 1-এর 61.8-100% (বা 161.8%) |

---

## Corrective Wave Pattern

### Correction-এর ধরন:

| Pattern | গঠন | বর্ণনা |
|---------|------|--------|
| **Zigzag** | A-B-C (5-3-5) | তীব্র, Impulsive Correction |
| **Flat** | A-B-C (3-3-5) | পাশে Correction |
| **Triangle** | A-B-C-D-E (3-3-3-3-3) | সংকীর্ণ হওয়া পাশে |
| **Complex** | W-X-Y বা W-X-Y-X-Z | একাধিক Correction একত্রিত |

---

## Wave Trading Guideline

### সেরা Trading সুযোগ:

| Wave | কেন Tradeable | Entry পদ্ধতি |
|------|--------------|--------------|
| **Wave 3** | সবচেয়ে লম্বা, শক্তিশালী | Wave 2 Correction শেষে Enter |
| **Wave 5** | চূড়ান্ত Impulse Push | Wave 4 Correction শেষে Enter |
| **Wave C** | Impulsive Correction | Wave B শেষে Enter |

### Wave 3 Entry Strategy:
\`\`\`
1. সম্পন্ন Wave 1 চিহ্নিত করুন (প্রাথমিক Impulse)
2. Wave 2 Correction-এর জন্য অপেক্ষা (সাধারণত 50-78.6% Retracement)
3. Golden Pocket-এ (61.8-78.6%) Reversal Signal খুঁজুন
4. Wave 2 Low-এর নিচে Stop দিয়ে Long Enter
5. Target: Wave 1-এর 161.8% Extension
6. এটি Trade করার সেরা Wave (সবচেয়ে লম্বা ও শক্তিশালী)
\`\`\`

---

## Elliott Wave + Fibonacci

| Wave | Fibonacci প্রয়োগ |
|------|-------------------|
| Wave 2 শেষ | Wave 1-এর 50-78.6% Retracement |
| Wave 3 Target | Wave 1-এর 161.8%-261.8% Extension |
| Wave 4 শেষ | Wave 3-এর 23.6-50% Retracement |
| Wave 5 Target | Wave 1-এর 61.8-100% (Wave 4 থেকে) |
| Wave A Target | সম্পূর্ণ Impulse-এর 38.2-61.8% |
| Wave C Target | Wave A-র 100-161.8% |

---

## ব্যবহারিক Wave Counting টিপ

1. **Higher Timeframe দিয়ে শুরু** — Weekly/Daily-তে আগে Wave Count করুন
2. **সুস্পষ্ট Pattern খুঁজুন** — স্পষ্ট দেখা না গেলে এগিয়ে যান
3. **Wave 3 ভুল হওয়ার সুযোগ নেই** — এটি বড়, শক্তিশালী Move
4. **Alternation** — Wave 2 তীব্র হলে Wave 4 সমতল হবে (ও উল্টো)
5. **Volume Confirm করে** — Wave 3-এ Volume সর্বোচ্চ, Wave 5-এ কম
6. **Divergence** — Wave 5 Complete হওয়ায় RSI Divergence সাধারণ
7. **Count জোর করবেন না** — একাধিক Valid Count থাকতে পারে

<Callout type="warning" title="সৎ সতর্কতা">
Elliott Wave Subjective। দুজন Analyst একই Chart দেখে ভিন্ন Valid Wave Count করতে পারেন। Market Structure বোঝার Framework হিসেবে ব্যবহার করুন, সুনির্দিষ্ট Prediction Tool হিসেবে নয়। সবসময় Risk Management-এর সাথে সমন্বয় করুন।
</Callout>

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| Wave Count জোর করা | স্পষ্ট না হলে Tradeable নয় |
| নিয়ম উপেক্ষা | তিনটি নিয়ম পরম — কখনো ভাঙবেন না |
| প্রতিটি Wave Trade করা | Wave 3 ও C-তে ফোকাস (সবচেয়ে নির্ভরযোগ্য) |
| Stop Loss নেই | Wave Count নির্বিশেষে সবসময় Stop রাখুন |
| অতিরিক্ত Analysis | সহজ রাখুন — শুধু সুস্পষ্ট Wave |
| ভুল Timeframe | উপর থেকে শুরু (W1/D1), তারপর নিচে Drill Down |

---

## সম্পর্কিত বিষয়

- [Fibonacci Trading](/bn/academy/fibonacci-trading) — Wave Target-এর জন্য অপরিহার্য
- [Chart Pattern](/bn/academy/chart-patterns) — Wave-এর মধ্যে Pattern
- [Trendline ও Channel](/bn/academy/trendlines-channels) — Wave Channel
- [Technical Indicator](/bn/academy/technical-indicators) — Wave Count Confirm
- [Support ও Resistance](/bn/academy/support-resistance-advanced) — Wave-level S/R
`,
);

console.log("\n✅ Academy Batch 3 Complete: 6 topics × 2 languages = 12 files");
console.log(
  "Topics: technical-indicators, support-resistance-advanced, chart-patterns, trendlines-channels, fibonacci-trading, elliott-wave-theory",
);
