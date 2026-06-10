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
// BATCH 5: SPECIALIZED TOPICS (5 Topics × 2 Languages = 10 Files)
// ============================================================

// ============================
// 1. OPTIONS TRADING BASICS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "options-trading-basics",
  {
    title: "Options Trading Basics — Complete Guide",
    description:
      "Learn options trading fundamentals: calls, puts, strike prices, expiration, premium, Greeks, and basic options strategies for beginners.",
    level: "intermediate",
    order: 24,
  },
  `
## What Are Options?

An option is a **contract giving you the RIGHT (but not obligation)** to buy or sell an asset at a specific price within a specific time period. You pay a premium for this right.

<Callout type="info" title="Key Advantage">
Options offer unique benefits no other instrument provides: defined maximum risk, leveraged exposure, ability to profit from time decay, and strategies that profit in ANY market direction (up, down, or sideways).
</Callout>

---

## Call vs. Put Options

| | Call Option | Put Option |
|--|-------------|------------|
| **Right** | Buy asset at strike price | Sell asset at strike price |
| **Buyer Profits** | When price goes UP | When price goes DOWN |
| **Seller Profits** | When price stays below strike | When price stays above strike |
| **Max Loss (Buyer)** | Premium paid | Premium paid |
| **Max Loss (Seller)** | Unlimited (calls) / Large (puts) | Strike price - premium |

---

## Key Options Terminology

| Term | Definition |
|------|-----------|
| **Strike Price** | Price at which option can be exercised |
| **Premium** | Price paid to buy the option contract |
| **Expiration** | Date when option contract expires |
| **In-the-Money (ITM)** | Option has intrinsic value |
| **At-the-Money (ATM)** | Strike ≈ current price |
| **Out-of-the-Money (OTM)** | Option has no intrinsic value |
| **Intrinsic Value** | Difference between strike and market price |
| **Time Value** | Premium - Intrinsic value (decays over time) |
| **Exercise** | Using your right to buy/sell |
| **Assignment** | Being obligated to fulfill the contract |

---

## How Options Pricing Works

### Option Premium = Intrinsic Value + Time Value

\`\`\`
Example:
Stock Price: $150
Call Strike: $145
Premium: $8

Intrinsic Value: $150 - $145 = $5 (in-the-money)
Time Value: $8 - $5 = $3 (time until expiry)
\`\`\`

### What Affects Premium:

| Factor | Calls | Puts |
|--------|-------|------|
| Stock price rises | Premium ↑ | Premium ↓ |
| Stock price falls | Premium ↓ | Premium ↑ |
| More time to expiry | Premium ↑ | Premium ↑ |
| Higher volatility | Premium ↑ | Premium ↑ |
| Higher interest rates | Premium ↑ | Premium ↓ |

---

## The Greeks (Brief Overview)

| Greek | Measures | Practical Meaning |
|-------|----------|-------------------|
| **Delta** | Price sensitivity | How much option moves per $1 stock move |
| **Gamma** | Delta change rate | How fast delta changes |
| **Theta** | Time decay | How much value lost per day |
| **Vega** | Volatility sensitivity | Impact of volatility change |
| **Rho** | Interest rate sensitivity | Impact of rate changes |

### Delta Guide:
- ATM Call: ~0.50 delta (moves $0.50 per $1 stock move)
- Deep ITM Call: ~0.90-1.00 delta (moves almost like stock)
- OTM Call: ~0.10-0.30 delta (small movement)

---

## Basic Options Strategies

### 1. Long Call (Bullish)
- Buy a call option
- Profit: Unlimited upside potential
- Risk: Limited to premium paid
- Best when: Expecting strong upward move

### 2. Long Put (Bearish)
- Buy a put option
- Profit: Large downside potential (to zero)
- Risk: Limited to premium paid
- Best when: Expecting strong downward move

### 3. Covered Call (Income)
- Own stock + sell call against it
- Profit: Premium received + stock appreciation to strike
- Risk: Stock decline (offset by premium)
- Best when: Neutral to slightly bullish

### 4. Protective Put (Insurance)
- Own stock + buy put for protection
- Profit: Unlimited upside, protected downside
- Risk: Premium cost reduces returns
- Best when: Want downside protection

---

## Options vs. Stock/Forex Trading

| Factor | Options | Stock/Forex |
|--------|---------|-------------|
| Risk | Defined (buyers) | Can be large |
| Leverage | Built-in | Margin required |
| Time | Works for/against you | Neutral |
| Complexity | Higher | Lower |
| Profit Ways | Up, down, sideways | Up or down only |
| Capital | Lower | Higher |

---

## Getting Started with Options

### Steps:
1. Learn terminology and basics thoroughly
2. Understand risk/reward profiles
3. Paper trade for 2-3 months minimum
4. Start with simple strategies (long calls/puts, covered calls)
5. Small position sizes (1-2 contracts max)
6. Avoid selling naked options as beginner
7. Focus on liquid options (high volume, tight spreads)

---

## Related Topics

- [Stock Market Basics](/en/academy/stock-market-basics) — Underlying asset knowledge
- [Risk Management](/en/academy/risk-management) — Options risk management
- [Volatility Analysis](/en/academy/volatility-analysis) — Vega and volatility
- [Technical Indicators](/en/academy/technical-indicators) — Time entries
- [Trading Plan](/en/academy/trading-plan) — Options in your plan
`,
);

// ============================
// 1. OPTIONS TRADING BASICS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "options-trading-basics",
  {
    title: "Options Trading Basics — সম্পূর্ণ গাইড",
    description:
      "Options Trading-এর Fundamental শিখুন: Call, Put, Strike Price, Expiration, Premium, Greek এবং Beginner-দের জন্য মৌলিক Options Strategy।",
    level: "intermediate",
    order: 24,
  },
  `
## Options কী?

Option হলো একটি **Contract যা আপনাকে একটি নির্দিষ্ট সময়ের মধ্যে নির্দিষ্ট Price-এ কোনো Asset কেনা বা বেচার অধিকার (বাধ্যবাধকতা নয়)** দেয়। এই অধিকারের জন্য আপনি Premium প্রদান করেন।

<Callout type="info" title="মূল সুবিধা">
Options অন্য কোনো Instrument-এ পাওয়া যায় না এমন অনন্য সুবিধা দেয়: সংজ্ঞায়িত Maximum Risk, Leveraged Exposure, Time Decay থেকে Profit করার ক্ষমতা, এবং যেকোনো Market Direction-এ (Up, Down বা Sideways) Profit করার Strategy।
</Callout>

---

## Call vs. Put Option

| | Call Option | Put Option |
|--|-------------|------------|
| **অধিকার** | Strike Price-এ Asset কেনা | Strike Price-এ Asset বেচা |
| **Buyer Profit করে** | Price বাড়লে | Price কমলে |
| **Seller Profit করে** | Price Strike-এর নিচে থাকলে | Price Strike-এর উপরে থাকলে |
| **Max Loss (Buyer)** | প্রদত্ত Premium | প্রদত্ত Premium |
| **Max Loss (Seller)** | সীমাহীন (Call) / বড় (Put) | Strike Price - Premium |

---

## মূল Options Terminology

| Term | সংজ্ঞা |
|------|--------|
| **Strike Price** | যে Price-এ Option Exercise করা যায় |
| **Premium** | Option Contract কিনতে প্রদত্ত মূল্য |
| **Expiration** | Option Contract-এর মেয়াদ শেষের তারিখ |
| **In-the-Money (ITM)** | Option-এর Intrinsic Value আছে |
| **At-the-Money (ATM)** | Strike ≈ বর্তমান Price |
| **Out-of-the-Money (OTM)** | Option-এর কোনো Intrinsic Value নেই |
| **Intrinsic Value** | Strike ও Market Price-এর পার্থক্য |
| **Time Value** | Premium - Intrinsic Value (সময়ের সাথে ক্ষয় হয়) |

---

## Options Pricing কীভাবে কাজ করে

### Option Premium = Intrinsic Value + Time Value

\`\`\`
উদাহরণ:
Stock Price: $150
Call Strike: $145
Premium: $8

Intrinsic Value: $150 - $145 = $5 (In-the-money)
Time Value: $8 - $5 = $3 (Expiry পর্যন্ত সময়)
\`\`\`

### কী Premium-কে প্রভাবিত করে:

| বিষয় | Call | Put |
|--------|------|-----|
| Stock Price বাড়ে | Premium ↑ | Premium ↓ |
| Stock Price কমে | Premium ↓ | Premium ↑ |
| Expiry-তে বেশি সময় | Premium ↑ | Premium ↑ |
| বেশি Volatility | Premium ↑ | Premium ↑ |

---

## Greek (সংক্ষিপ্ত পরিচিতি)

| Greek | পরিমাপ করে | ব্যবহারিক অর্থ |
|-------|-----------|----------------|
| **Delta** | Price সংবেদনশীলতা | Stock $1 Move-এ Option কতটা Move করে |
| **Gamma** | Delta পরিবর্তনের হার | Delta কত দ্রুত পরিবর্তন হয় |
| **Theta** | Time Decay | দিনে কত Value হারায় |
| **Vega** | Volatility সংবেদনশীলতা | Volatility পরিবর্তনের প্রভাব |

---

## মৌলিক Options Strategy

### ১. Long Call (Bullish)
- একটি Call Option কিনুন
- Profit: সীমাহীন Upside সম্ভাবনা
- Risk: প্রদত্ত Premium-এ সীমাবদ্ধ
- সেরা যখন: শক্তিশালী ঊর্ধ্বমুখী Move প্রত্যাশা

### ২. Long Put (Bearish)
- একটি Put Option কিনুন
- Profit: বড় Downside সম্ভাবনা (শূন্য পর্যন্ত)
- Risk: প্রদত্ত Premium-এ সীমাবদ্ধ
- সেরা যখন: শক্তিশালী নিম্নমুখী Move প্রত্যাশা

### ৩. Covered Call (Income)
- Stock Own করুন + এর বিরুদ্ধে Call Sell করুন
- Profit: প্রাপ্ত Premium + Strike পর্যন্ত Stock Appreciation
- Risk: Stock পতন (Premium দ্বারা Offset)
- সেরা যখন: Neutral থেকে সামান্য Bullish

### ৪. Protective Put (Insurance)
- Stock Own করুন + সুরক্ষায় Put কিনুন
- Profit: সীমাহীন Upside, সুরক্ষিত Downside
- Risk: Premium খরচ Return কমায়
- সেরা যখন: Downside Protection চান

---

## Options vs. Stock/Forex Trading

| বিষয় | Options | Stock/Forex |
|--------|---------|-------------|
| Risk | সংজ্ঞায়িত (Buyer) | বড় হতে পারে |
| Leverage | Built-in | Margin প্রয়োজন |
| সময় | আপনার পক্ষে/বিপক্ষে কাজ করে | Neutral |
| জটিলতা | বেশি | কম |
| Profit-এর উপায় | Up, Down, Sideways | শুধু Up বা Down |
| Capital | কম | বেশি |

---

## Options শুরু করুন

### ধাপ:
1. Terminology ও Basics পুঙ্খানুপুঙ্খভাবে শিখুন
2. Risk/Reward Profile বুঝুন
3. ন্যূনতম ২-৩ মাস Paper Trade করুন
4. সহজ Strategy দিয়ে শুরু করুন (Long Call/Put, Covered Call)
5. ছোট Position Size (সর্বোচ্চ ১-২ Contract)
6. Beginner হিসেবে Naked Option Sell করা এড়িয়ে চলুন
7. Liquid Option-এ ফোকাস করুন (High Volume, Tight Spread)

---

## সম্পর্কিত বিষয়

- [Stock Market Basics](/bn/academy/stock-market-basics) — Underlying Asset জ্ঞান
- [Risk Management](/bn/academy/risk-management) — Options Risk Management
- [Volatility Analysis](/bn/academy/volatility-analysis) — Vega ও Volatility
- [Technical Indicator](/bn/academy/technical-indicators) — Entry Timing
- [Trading Plan](/bn/academy/trading-plan) — Plan-এ Options
`,
);

// ============================
// 2. HARMONIC PATTERNS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "harmonic-patterns",
  {
    title: "Harmonic Patterns Trading — Complete Guide",
    description:
      "Master harmonic pattern trading: Gartley, Butterfly, Bat, Crab, and Cypher patterns. Learn precise Fibonacci ratios, entry rules, and pattern identification.",
    level: "intermediate",
    order: 25,
  },
  `
## What Are Harmonic Patterns?

Harmonic patterns are **advanced chart patterns** defined by precise Fibonacci ratios between price swings. They identify potential reversal zones (PRZ) with mathematical precision, offering high-probability trading setups.

<Callout type="info" title="Key Advantage">
Harmonic patterns provide exact entry levels, stop losses, and targets based on Fibonacci mathematics — removing subjectivity from pattern trading.
</Callout>

---

## Pattern Structure: XABCD

All harmonic patterns consist of 5 points (X, A, B, C, D) forming specific Fibonacci relationships:

\`\`\`
    B
   / \\
  /   \\    D (PRZ - Entry point)
 /     \\  /
X       \\/
 \\      C
  \\    /
   \\  /
    A
\`\`\`

---

## Major Harmonic Patterns

### 1. Gartley Pattern (Most Common)

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | 61.8% retracement of XA |
| BC | 38.2%-88.6% retracement of AB |
| CD | 127.2%-161.8% extension of BC |
| XD | 78.6% retracement of XA |

**Entry:** At point D (78.6% of XA)
**Stop:** Beyond X
**Target 1:** 38.2% of AD
**Target 2:** 61.8% of AD

### 2. Butterfly Pattern

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | 78.6% retracement of XA |
| BC | 38.2%-88.6% retracement of AB |
| CD | 161.8%-261.8% extension of BC |
| XD | 127.2%-161.8% extension of XA |

**Entry:** At point D (127.2% extension of XA)
**Stop:** Beyond 161.8% of XA

### 3. Bat Pattern

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | 38.2%-50% retracement of XA |
| BC | 38.2%-88.6% retracement of AB |
| CD | 161.8%-261.8% extension of BC |
| XD | 88.6% retracement of XA |

**Entry:** At point D (88.6% of XA)
**Stop:** Beyond X

### 4. Crab Pattern

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | 38.2%-61.8% retracement of XA |
| BC | 38.2%-88.6% retracement of AB |
| CD | 224%-361.8% extension of BC |
| XD | 161.8% extension of XA |

**Entry:** At point D (161.8% extension of XA)
**Stop:** Beyond 224% of XA

---

## Trading Rules

### Entry:
1. Identify the XABCD structure
2. Verify Fibonacci ratios for each leg
3. Wait for price to reach Point D (PRZ)
4. Look for reversal candlestick confirmation
5. Enter with stop beyond the pattern

### Stop Loss:
- Gartley: Beyond point X
- Butterfly: Beyond 161.8% XA extension
- Bat: Beyond point X
- Crab: Beyond 200% XA extension

### Targets:
- Target 1: 38.2% retracement of AD
- Target 2: 61.8% retracement of AD
- Target 3: Point A level (full retracement)

---

## Pattern Identification Tips

1. **Use indicators** — Harmonic pattern scanners help identify formations
2. **Verify ratios** — All legs must match within 2-5% tolerance
3. **Confluence** — Pattern at key S/R or with other signals = higher probability
4. **Timeframe** — H4 and D1 patterns more reliable than lower timeframes
5. **Patience** — Wait for D point, don't anticipate

<Callout type="warning" title="Reality Check">
Harmonic patterns have a ~60-70% success rate when properly identified. Always use stop losses — failed patterns can move aggressively against you.
</Callout>

---

## Related Topics

- [Fibonacci Trading](/en/academy/fibonacci-trading) — Foundation for harmonics
- [Chart Patterns](/en/academy/chart-patterns) — Other pattern types
- [Support & Resistance](/en/academy/support-resistance-advanced) — PRZ confluence
- [Technical Indicators](/en/academy/technical-indicators) — Confirm patterns
- [Risk Management](/en/academy/risk-management) — Pattern trade risk
`,
);

// ============================
// 2. HARMONIC PATTERNS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "harmonic-patterns",
  {
    title: "Harmonic Pattern Trading — সম্পূর্ণ গাইড",
    description:
      "Harmonic Pattern Trading আয়ত্ত করুন: Gartley, Butterfly, Bat, Crab এবং Cypher Pattern। সুনির্দিষ্ট Fibonacci Ratio, Entry Rule ও Pattern চিহ্নিতকরণ শিখুন।",
    level: "intermediate",
    order: 25,
  },
  `
## Harmonic Pattern কী?

Harmonic Pattern হলো **Advanced Chart Pattern** যা Price Swing-এর মধ্যে সুনির্দিষ্ট Fibonacci Ratio দ্বারা সংজ্ঞায়িত। এগুলো গাণিতিক নির্ভুলতায় সম্ভাব্য Reversal Zone (PRZ) চিহ্নিত করে, High-probability Trading Setup প্রদান করে।

<Callout type="info" title="মূল সুবিধা">
Harmonic Pattern Fibonacci Mathematics-এর ভিত্তিতে সুনির্দিষ্ট Entry Level, Stop Loss ও Target দেয় — Pattern Trading থেকে Subjectivity দূর করে।
</Callout>

---

## Pattern কাঠামো: XABCD

সব Harmonic Pattern ৫টি Point (X, A, B, C, D) নিয়ে গঠিত যা নির্দিষ্ট Fibonacci সম্পর্ক তৈরি করে।

---

## প্রধান Harmonic Pattern

### ১. Gartley Pattern (সবচেয়ে সাধারণ)

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | XA-এর 61.8% Retracement |
| BC | AB-এর 38.2%-88.6% Retracement |
| CD | BC-এর 127.2%-161.8% Extension |
| XD | XA-এর 78.6% Retracement |

**Entry:** Point D-তে (XA-এর 78.6%)
**Stop:** X-এর বাইরে
**Target 1:** AD-এর 38.2%
**Target 2:** AD-এর 61.8%

### ২. Butterfly Pattern

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | XA-এর 78.6% Retracement |
| BC | AB-এর 38.2%-88.6% Retracement |
| CD | BC-এর 161.8%-261.8% Extension |
| XD | XA-এর 127.2%-161.8% Extension |

**Entry:** Point D-তে (XA-এর 127.2% Extension)
**Stop:** XA-এর 161.8%-এর বাইরে

### ৩. Bat Pattern

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | XA-এর 38.2%-50% Retracement |
| BC | AB-এর 38.2%-88.6% Retracement |
| CD | BC-এর 161.8%-261.8% Extension |
| XD | XA-এর 88.6% Retracement |

**Entry:** Point D-তে (XA-এর 88.6%)
**Stop:** X-এর বাইরে

### ৪. Crab Pattern

| Leg | Fibonacci Ratio |
|-----|----------------|
| AB | XA-এর 38.2%-61.8% Retracement |
| BC | AB-এর 38.2%-88.6% Retracement |
| CD | BC-এর 224%-361.8% Extension |
| XD | XA-এর 161.8% Extension |

**Entry:** Point D-তে (XA-এর 161.8% Extension)
**Stop:** XA-এর 224%-এর বাইরে

---

## Trading নিয়ম

### Entry:
1. XABCD কাঠামো চিহ্নিত করুন
2. প্রতিটি Leg-এর Fibonacci Ratio যাচাই করুন
3. Price Point D (PRZ)-তে পৌঁছানোর অপেক্ষা করুন
4. Reversal Candlestick Confirmation খুঁজুন
5. Pattern-এর বাইরে Stop দিয়ে Enter করুন

### Target:
- Target 1: AD-এর 38.2% Retracement
- Target 2: AD-এর 61.8% Retracement
- Target 3: Point A Level (সম্পূর্ণ Retracement)

---

## Pattern চিহ্নিতকরণ টিপ

1. **Indicator ব্যবহার করুন** — Harmonic Pattern Scanner Formation চিহ্নিত করতে সাহায্য করে
2. **Ratio যাচাই করুন** — সব Leg ২-৫% Tolerance-এর মধ্যে মিলতে হবে
3. **Confluence** — মূল S/R-এ বা অন্য Signal-সহ Pattern = বেশি Probability
4. **Timeframe** — H4 ও D1 Pattern Lower Timeframe-এর চেয়ে বেশি নির্ভরযোগ্য
5. **ধৈর্য** — D Point-এর জন্য অপেক্ষা করুন, Anticipate করবেন না

<Callout type="warning" title="বাস্তবতা যাচাই">
সঠিকভাবে চিহ্নিত হলে Harmonic Pattern-এর ~৬০-৭০% Success Rate। সবসময় Stop Loss ব্যবহার করুন — Failed Pattern আক্রমণাত্মকভাবে বিপরীতে যেতে পারে।
</Callout>

---

## সম্পর্কিত বিষয়

- [Fibonacci Trading](/bn/academy/fibonacci-trading) — Harmonic-এর ভিত্তি
- [Chart Pattern](/bn/academy/chart-patterns) — অন্যান্য Pattern Type
- [Support ও Resistance](/bn/academy/support-resistance-advanced) — PRZ Confluence
- [Technical Indicator](/bn/academy/technical-indicators) — Pattern Confirm
- [Risk Management](/bn/academy/risk-management) — Pattern Trade Risk
`,
);

// ============================
// 3. BOLLINGER BANDS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "bollinger-bands-trading",
  {
    title: "Bollinger Bands Trading — Complete Guide",
    description:
      "Master Bollinger Bands for trading: band squeeze breakouts, mean reversion, walking the bands, and combining Bollinger Bands with other indicators.",
    level: "intermediate",
    order: 26,
  },
  `
## What Are Bollinger Bands?

Bollinger Bands are a **volatility indicator** consisting of three lines: a middle band (SMA) and two outer bands that expand and contract based on price volatility. Created by John Bollinger, they adapt to market conditions automatically.

---

## Components

| Component | Calculation | Purpose |
|-----------|------------|---------|
| **Middle Band** | 20-period SMA | Trend direction and mean |
| **Upper Band** | SMA + (2 × Standard Deviation) | Overbought/resistance area |
| **Lower Band** | SMA - (2 × Standard Deviation) | Oversold/support area |
| **Band Width** | (Upper - Lower) ÷ Middle | Volatility measurement |

### Key Properties:
- ~95% of price action stays within the bands (2 SD)
- Bands expand during high volatility
- Bands contract during low volatility (squeeze)
- Price touching bands is NOT automatically a signal

---

## Trading Strategies

### Strategy 1: Bollinger Band Squeeze (Breakout)

When bands squeeze tight (low volatility), a big move is coming:

\`\`\`
Setup:
1. Identify BB squeeze (narrowest bands in 50+ periods)
2. Wait for price to break above upper band OR below lower band
3. Confirm with volume increase
4. Enter in breakout direction

Entry: Close above upper band (long) or below lower band (short)
Stop: Middle band (SMA 20)
Target: 1.5-2× the band width
\`\`\`

### Strategy 2: Mean Reversion (Band Bounce)

\`\`\`
In RANGING markets:
- Price touches upper band → potential sell (mean reversion to middle)
- Price touches lower band → potential buy (mean reversion to middle)
- Target: Middle band (20 SMA)
- Stop: Beyond the band

WARNING: Don't use in trending markets (price can "walk the bands")
\`\`\`

### Strategy 3: Walking the Bands (Trend)

In strong trends, price consistently touches/exceeds one band:
- Strong uptrend: Price walks along upper band (don't sell!)
- Strong downtrend: Price walks along lower band (don't buy!)
- Trade pullbacks to middle band in trend direction

### Strategy 4: Double Bollinger Bands

Use two sets: Standard (2 SD) + Inner (1 SD):
\`\`\`
- Price between upper 1SD and 2SD = Strong bullish trend
- Price between lower 1SD and 2SD = Strong bearish trend
- Price between +1SD and -1SD = Neutral/ranging
- Crossing from neutral to trend zone = entry signal
\`\`\`

---

## BB + RSI Combination

| BB Signal | RSI Confirmation | Action |
|-----------|-----------------|--------|
| Touch upper band | RSI > 70 + divergence | Sell signal |
| Touch lower band | RSI < 30 + divergence | Buy signal |
| Squeeze breakout up | RSI crossing above 50 | Confirmed long |
| Squeeze breakout down | RSI crossing below 50 | Confirmed short |
| Walking upper band | RSI 60-80 range | Stay long, trend is strong |

---

## Common Mistakes

| Mistake | Reality |
|---------|---------|
| Selling every upper band touch | In trends, price walks the band |
| Buying every lower band touch | In downtrends, price stays at lower band |
| Ignoring squeeze context | Squeeze direction depends on prior trend |
| Using wrong settings | Default 20,2 works for most cases |
| Trading BB alone | Always combine with trend/momentum |

---

## Related Topics

- [Volatility Analysis](/en/academy/volatility-analysis) — Volatility context
- [Technical Indicators](/en/academy/technical-indicators) — Combine with BB
- [Support & Resistance](/en/academy/support-resistance-advanced) — BB as dynamic S/R
- [Chart Patterns](/en/academy/chart-patterns) — Patterns within BB
- [Trading Plan](/en/academy/trading-plan) — BB rules in your plan
`,
);

// ============================
// 3. BOLLINGER BANDS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "bollinger-bands-trading",
  {
    title: "Bollinger Bands Trading — সম্পূর্ণ গাইড",
    description:
      "Trading-এর জন্য Bollinger Bands আয়ত্ত করুন: Band Squeeze Breakout, Mean Reversion, Walking the Bands এবং অন্যান্য Indicator-এর সাথে Bollinger Bands সমন্বয়।",
    level: "intermediate",
    order: 26,
  },
  `
## Bollinger Bands কী?

Bollinger Bands হলো একটি **Volatility Indicator** যা তিনটি Line নিয়ে গঠিত: একটি Middle Band (SMA) এবং দুটি Outer Band যা Price Volatility-র ভিত্তিতে Expand ও Contract করে। John Bollinger এটি তৈরি করেন, এটি স্বয়ংক্রিয়ভাবে Market Condition-এর সাথে খাপ খায়।

---

## উপাদান

| উপাদান | গণনা | উদ্দেশ্য |
|---------|------|----------|
| **Middle Band** | 20-period SMA | Trend Direction ও Mean |
| **Upper Band** | SMA + (2 × Standard Deviation) | Overbought/Resistance এলাকা |
| **Lower Band** | SMA - (2 × Standard Deviation) | Oversold/Support এলাকা |
| **Band Width** | (Upper - Lower) ÷ Middle | Volatility পরিমাপ |

### মূল বৈশিষ্ট্য:
- ~৯৫% Price Action Band-এর মধ্যে থাকে (2 SD)
- High Volatility-তে Band Expand করে
- Low Volatility-তে Band Contract করে (Squeeze)
- Price Band স্পর্শ করা স্বয়ংক্রিয়ভাবে Signal নয়

---

## Trading Strategy

### Strategy ১: Bollinger Band Squeeze (Breakout)

Band সংকীর্ণ হলে (Low Volatility), বড় Move আসছে:

\`\`\`
Setup:
1. BB Squeeze চিহ্নিত করুন (৫০+ Period-এ সংকীর্ণতম Band)
2. Price Upper Band-এর উপরে বা Lower Band-এর নিচে Break করার অপেক্ষা
3. Volume বৃদ্ধি দিয়ে Confirm করুন
4. Breakout Direction-এ Enter করুন

Entry: Upper Band-এর উপরে Close (Long) বা Lower Band-এর নিচে (Short)
Stop: Middle Band (SMA 20)
Target: Band Width-এর 1.5-2×
\`\`\`

### Strategy ২: Mean Reversion (Band Bounce)

\`\`\`
RANGING Market-এ:
- Price Upper Band স্পর্শ করে → সম্ভাব্য Sell (Middle-তে Mean Reversion)
- Price Lower Band স্পর্শ করে → সম্ভাব্য Buy (Middle-তে Mean Reversion)
- Target: Middle Band (20 SMA)
- Stop: Band-এর বাইরে

সতর্কতা: Trending Market-এ ব্যবহার করবেন না (Price "Walk the Bands" করতে পারে)
\`\`\`

### Strategy ৩: Walking the Bands (Trend)

শক্তিশালী Trend-এ Price ধারাবাহিকভাবে একটি Band স্পর্শ/অতিক্রম করে:
- শক্তিশালী Uptrend: Price Upper Band ধরে চলে (Sell করবেন না!)
- শক্তিশালী Downtrend: Price Lower Band ধরে চলে (Buy করবেন না!)
- Trend Direction-এ Middle Band-এ Pullback Trade করুন

---

## BB + RSI সমন্বয়

| BB Signal | RSI Confirmation | Action |
|-----------|-----------------|--------|
| Upper Band স্পর্শ | RSI > 70 + Divergence | Sell Signal |
| Lower Band স্পর্শ | RSI < 30 + Divergence | Buy Signal |
| Squeeze Breakout উপরে | RSI 50-এর উপরে Cross | Confirmed Long |
| Squeeze Breakout নিচে | RSI 50-এর নিচে Cross | Confirmed Short |
| Upper Band-এ Walk | RSI 60-80 Range | Long-এ থাকুন, Trend শক্তিশালী |

---

## সাধারণ ভুল

| ভুল | বাস্তবতা |
|------|---------|
| প্রতিটি Upper Band Touch-এ Sell | Trend-এ Price Band ধরে চলে |
| প্রতিটি Lower Band Touch-এ Buy | Downtrend-এ Price Lower Band-এ থাকে |
| Squeeze Context উপেক্ষা | Squeeze Direction পূর্ববর্তী Trend-এর উপর নির্ভর করে |
| ভুল Setting | Default 20,2 বেশিরভাগ ক্ষেত্রে কাজ করে |
| শুধু BB দিয়ে Trade | সবসময় Trend/Momentum-এর সাথে সমন্বয় করুন |

---

## সম্পর্কিত বিষয়

- [Volatility Analysis](/bn/academy/volatility-analysis) — Volatility Context
- [Technical Indicator](/bn/academy/technical-indicators) — BB-এর সাথে সমন্বয়
- [Support ও Resistance](/bn/academy/support-resistance-advanced) — Dynamic S/R হিসেবে BB
- [Chart Pattern](/bn/academy/chart-patterns) — BB-এর মধ্যে Pattern
- [Trading Plan](/bn/academy/trading-plan) — Plan-এ BB নিয়ম
`,
);

// ============================
// 4. BACKTESTING & FORWARD TESTING — EN
// ============================
writeMdx(
  "en",
  "academy",
  "backtesting-forward-testing",
  {
    title: "Backtesting & Forward Testing — Complete Guide",
    description:
      "Learn how to backtest and forward test trading strategies. Understand the proper methodology for validating strategies before risking real capital.",
    level: "intermediate",
    order: 27,
  },
  `
## Why Test Your Strategy?

Testing separates professional traders from gamblers. Before risking real money, you must **prove your strategy works** through historical data (backtesting) and real-time simulation (forward testing/demo).

<Callout type="warning" title="The Hard Truth">
A strategy that hasn't been tested on at least 100+ historical trades has NO proven edge. Trading it live is gambling, not trading. Put in the work before you put in the money.
</Callout>

---

## Backtesting

### What is Backtesting?
Testing your strategy against **historical price data** to see how it would have performed in the past.

### Manual Backtesting Process:

\`\`\`
Step 1: Define exact rules (entry, exit, SL, TP)
Step 2: Select timeframe and market
Step 3: Scroll back to starting point
Step 4: Move forward candle-by-candle
Step 5: When setup appears, record the trade
Step 6: Note entry, SL, TP, and result
Step 7: Continue for 100+ trades minimum
Step 8: Calculate statistics (win rate, avg R, expectancy)
\`\`\`

### What to Record:

| Field | Purpose |
|-------|---------|
| Trade # | Sequential tracking |
| Date | Time-based analysis |
| Pair | Market performance |
| Direction | Long/short bias |
| Entry | Entry price |
| Stop Loss | Risk calculation |
| Take Profit | Target calculation |
| Result (R) | Performance in R-multiples |
| Notes | Pattern observations |

### Minimum Sample Size:
- **50 trades:** Preliminary assessment
- **100 trades:** Reasonable confidence
- **200+ trades:** Statistical significance
- **500+ trades:** High confidence

---

## Backtesting Metrics to Calculate

\`\`\`
After 100+ backtest trades, calculate:

Win Rate: Wins ÷ Total trades
Average Win (R): Sum of wins ÷ Number of wins
Average Loss (R): Sum of losses ÷ Number of losses
Profit Factor: Gross profit ÷ Gross loss
Expectancy: (WR × Avg Win) - (LR × Avg Loss)
Max Consecutive Losses: Longest losing streak
Max Drawdown: Largest peak-to-trough decline
Recovery Factor: Total profit ÷ Max drawdown

MINIMUM VIABLE STRATEGY:
✅ Win rate > 40% with R:R > 1.5
✅ Positive expectancy
✅ Profit factor > 1.3
✅ Max drawdown < 20%
✅ Can survive max consecutive losses psychologically
\`\`\`

---

## Forward Testing (Demo Trading)

### What is Forward Testing?
Trading your strategy on a **demo account in real-time** market conditions to validate backtest results.

### Why Forward Test After Backtesting?

| Backtesting | Forward Testing |
|-------------|-----------------|
| Hindsight bias possible | Real-time decisions |
| Perfect entries (you see what happens) | Must make decisions without future knowledge |
| No emotional component | Tests emotional execution |
| No slippage/spread issues | Real execution conditions |
| Past market conditions | Current market conditions |

### Forward Testing Rules:
1. **Minimum duration:** 3-6 months
2. **Minimum trades:** 50-100
3. **Treat it as real** — same emotions, same discipline
4. **Track all metrics** — compare to backtest results
5. **Don't change rules** — test the exact same strategy

---

## Backtesting Pitfalls

| Pitfall | Description | Solution |
|---------|-------------|----------|
| **Curve Fitting** | Over-optimizing for past data | Keep rules simple, test on multiple markets |
| **Hindsight Bias** | Knowing future candles influences decisions | Cover future candles, move forward |
| **Survivorship Bias** | Only testing on pairs that exist today | Include delisted assets |
| **Small Sample** | Not enough trades for significance | Minimum 100 trades |
| **Ignoring Costs** | Not including spread/commission | Always include realistic costs |
| **Cherry Picking** | Only counting favorable setups | Record EVERY setup, win or lose |

---

## The Complete Validation Process

\`\`\`
Phase 1: BACKTEST (2-4 weeks)
├── Define exact rules
├── Test on 100+ historical trades
├── Calculate all metrics
├── Pass? → Continue. Fail? → Modify and retest.

Phase 2: FORWARD TEST / DEMO (3-6 months)
├── Trade demo with real-time data
├── Track 50-100 trades
├── Compare to backtest results
├── Pass? → Continue. Fail? → Back to Phase 1.

Phase 3: SMALL LIVE (3-6 months)
├── Trade smallest possible real size
├── Focus on execution, not profit
├── Confirm psychology handles it
├── Pass? → Scale up. Fail? → Back to Phase 2.

Phase 4: FULL LIVE
├── Trade normal position sizes
├── Continuous tracking and improvement
├── Quarterly strategy reviews
└── Adapt as markets evolve
\`\`\`

---

## Related Topics

- [Trading Plan](/en/academy/trading-plan) — Document your tested strategy
- [Performance Tracking](/en/academy/performance-tracking) — Track live results
- [Risk Management](/en/academy/risk-management) — Validate risk rules
- [Trading Psychology](/en/academy/trading-psychology) — Demo to live transition
- [Journaling](/en/academy/journaling) — Record test results
`,
);

// ============================
// 4. BACKTESTING & FORWARD TESTING — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "backtesting-forward-testing",
  {
    title: "Backtesting ও Forward Testing — সম্পূর্ণ গাইড",
    description:
      "Trading Strategy কীভাবে Backtest ও Forward Test করবেন শিখুন। Real Capital Risk করার আগে Strategy Validate করার সঠিক পদ্ধতি বুঝুন।",
    level: "intermediate",
    order: 27,
  },
  `
## কেন Strategy Test করবেন?

Testing Professional Trader-কে Gambler থেকে আলাদা করে। Real Money Risk করার আগে আপনাকে **প্রমাণ করতে হবে যে Strategy কাজ করে** — Historical Data (Backtesting) ও Real-time Simulation (Forward Testing/Demo)-এর মাধ্যমে।

<Callout type="warning" title="কঠিন সত্য">
কমপক্ষে ১০০+ Historical Trade-এ Test না করা Strategy-র কোনো প্রমাণিত Edge নেই। এটি Live Trade করা Gambling, Trading নয়। টাকা দেওয়ার আগে পরিশ্রম করুন।
</Callout>

---

## Backtesting

### Backtesting কী?
**Historical Price Data**-এর বিপরীতে আপনার Strategy Test করা — এটি অতীতে কেমন Perform করত তা দেখতে।

### Manual Backtesting Process:
\`\`\`
ধাপ ১: সুনির্দিষ্ট Rule সংজ্ঞায়িত (Entry, Exit, SL, TP)
ধাপ ২: Timeframe ও Market নির্বাচন
ধাপ ৩: শুরুর Point-এ পিছনে Scroll করুন
ধাপ ৪: Candle-by-candle সামনে এগিয়ে যান
ধাপ ৫: Setup দেখা গেলে Trade Record করুন
ধাপ ৬: Entry, SL, TP ও Result নোট করুন
ধাপ ৭: ন্যূনতম ১০০+ Trade পর্যন্ত চালিয়ে যান
ধাপ ৮: Statistics গণনা (Win Rate, গড় R, Expectancy)
\`\`\`

### ন্যূনতম Sample Size:
- **৫০ Trade:** প্রাথমিক মূল্যায়ন
- **১০০ Trade:** যুক্তিসঙ্গত আত্মবিশ্বাস
- **২০০+ Trade:** Statistical Significance
- **৫০০+ Trade:** উচ্চ আত্মবিশ্বাস

---

## Backtesting Metric গণনা

\`\`\`
১০০+ Backtest Trade-এর পর গণনা করুন:

Win Rate: Win ÷ মোট Trade
গড় Win (R): Win-এর যোগফল ÷ Win সংখ্যা
গড় Loss (R): Loss-এর যোগফল ÷ Loss সংখ্যা
Profit Factor: Gross Profit ÷ Gross Loss
Expectancy: (WR × গড় Win) - (LR × গড় Loss)
সর্বোচ্চ পরপর Loss: দীর্ঘতম Losing Streak
Max Drawdown: বৃহত্তম Peak-to-trough পতন

ন্যূনতম কার্যকর STRATEGY:
✅ Win Rate > 40% with R:R > 1.5
✅ Positive Expectancy
✅ Profit Factor > 1.3
✅ Max Drawdown < 20%
✅ সর্বোচ্চ পরপর Loss মানসিকভাবে সহ্য করা যায়
\`\`\`

---

## Forward Testing (Demo Trading)

### Forward Testing কী?
Backtest Result Validate করতে **Real-time Market Condition-এ Demo Account-এ** Strategy Trade করা।

### Backtesting-এর পর কেন Forward Test?

| Backtesting | Forward Testing |
|-------------|-----------------|
| Hindsight Bias সম্ভব | Real-time সিদ্ধান্ত |
| Perfect Entry (কী হয় দেখেন) | ভবিষ্যৎ জ্ঞান ছাড়া সিদ্ধান্ত |
| কোনো Emotional উপাদান নেই | Emotional Execution Test করে |
| Slippage/Spread সমস্যা নেই | বাস্তব Execution Condition |
| অতীত Market Condition | বর্তমান Market Condition |

### Forward Testing নিয়ম:
1. **ন্যূনতম সময়কাল:** ৩-৬ মাস
2. **ন্যূনতম Trade:** ৫০-১০০
3. **Real হিসেবে Treat করুন** — একই আবেগ, একই শৃঙ্খলা
4. **সব Metric Track করুন** — Backtest Result-এর সাথে তুলনা
5. **Rule পরিবর্তন করবেন না** — ঠিক একই Strategy Test করুন

---

## Backtesting ফাঁদ

| ফাঁদ | বর্ণনা | সমাধান |
|------|---------|--------|
| **Curve Fitting** | অতীত Data-র জন্য অতিরিক্ত Optimize | Rule সহজ রাখুন, একাধিক Market-এ Test |
| **Hindsight Bias** | ভবিষ্যৎ Candle জানা সিদ্ধান্ত প্রভাবিত করে | ভবিষ্যৎ Candle ঢাকুন, সামনে এগিয়ে যান |
| **ছোট Sample** | Significance-এর জন্য পর্যাপ্ত Trade নেই | ন্যূনতম ১০০ Trade |
| **Cost উপেক্ষা** | Spread/Commission অন্তর্ভুক্ত নয় | সবসময় বাস্তবসম্মত খরচ অন্তর্ভুক্ত করুন |
| **Cherry Picking** | শুধু অনুকূল Setup গণনা | প্রতিটি Setup Record করুন, Win বা Lose |

---

## সম্পূর্ণ Validation Process

\`\`\`
Phase 1: BACKTEST (২-৪ সপ্তাহ)
├── সুনির্দিষ্ট Rule সংজ্ঞায়িত
├── ১০০+ Historical Trade-এ Test
├── সব Metric গণনা
├── Pass? → চালিয়ে যান। Fail? → Modify ও Retest।

Phase 2: FORWARD TEST / DEMO (৩-৬ মাস)
├── Real-time Data-তে Demo Trade
├── ৫০-১০০ Trade Track করুন
├── Backtest Result-এর সাথে তুলনা
├── Pass? → চালিয়ে যান। Fail? → Phase 1-এ ফিরুন।

Phase 3: ছোট LIVE (৩-৬ মাস)
├── সম্ভাব্য সবচেয়ে ছোট Real Size-এ Trade
├── Execution-এ ফোকাস, Profit নয়
├── Psychology সামলাতে পারছে Confirm
├── Pass? → Scale Up। Fail? → Phase 2-এ ফিরুন।

Phase 4: পূর্ণ LIVE
├── স্বাভাবিক Position Size-এ Trade
├── ক্রমাগত Tracking ও উন্নতি
├── Quarterly Strategy Review
└── Market বিবর্তনের সাথে Adapt
\`\`\`

---

## সম্পর্কিত বিষয়

- [Trading Plan](/bn/academy/trading-plan) — Test করা Strategy Document করুন
- [Performance Tracking](/bn/academy/performance-tracking) — Live Result Track
- [Risk Management](/bn/academy/risk-management) — Risk Rule Validate
- [Trading Psychology](/bn/academy/trading-psychology) — Demo থেকে Live Transition
- [Journaling](/bn/academy/journaling) — Test Result Record
`,
);

// ============================
// 5. ECONOMIC INDICATORS — EN
// ============================
writeMdx(
  "en",
  "academy",
  "economic-indicators-macro",
  {
    title: "Economic Indicators & Macro Trading — Complete Guide",
    description:
      "Master economic indicators for trading: NFP, CPI, GDP, interest rates, and central bank decisions. Learn how macro events move markets and how to trade them.",
    level: "intermediate",
    order: 28,
  },
  `
## Why Economic Indicators Matter

Economic indicators are **data releases that measure economic health**. They drive major market moves because they influence central bank policy, investor sentiment, and capital flows. Understanding macro fundamentals helps you avoid being on the wrong side of large moves.

---

## High-Impact Indicators

### Tier 1 (Market-Moving):

| Indicator | Country | Frequency | Impact |
|-----------|---------|-----------|--------|
| **Non-Farm Payrolls (NFP)** | US | Monthly (1st Friday) | Very High |
| **CPI (Inflation)** | All | Monthly | Very High |
| **Interest Rate Decision** | All | 6-8x/year | Extreme |
| **GDP** | All | Quarterly | High |
| **PCE (Core)** | US | Monthly | High |
| **Retail Sales** | All | Monthly | High |

### How to Read Indicators:

| Scenario | Market Reaction |
|----------|----------------|
| Actual > Forecast (beat) | Currency strengthens (usually) |
| Actual < Forecast (miss) | Currency weakens (usually) |
| In-line with forecast | Minimal reaction |
| Huge beat/miss | Volatile spike, then continuation |

---

## Non-Farm Payrolls (NFP)

The most important monthly economic release.

### What It Is:
Number of jobs added/lost in the US economy (excluding farm workers). Released first Friday of every month at 8:30 AM ET.

### Trading NFP:

| NFP Result | Expected Impact |
|-----------|-----------------|
| Strong (>expected) | USD strengthens, stocks may rise |
| Weak (<expected) | USD weakens, rate cut expectations rise |
| Very strong | Hawkish Fed expectations = yields up |
| Very weak | Dovish Fed expectations = yields down |

<Callout type="warning" title="NFP Trading Caution">
NFP creates extreme volatility (50-100+ pip moves in seconds). Many traders avoid trading during the first 15-30 minutes. Spreads widen 3-10× during the release. Consider trading the aftermath rather than the initial spike.
</Callout>

---

## Inflation (CPI)

### What It Measures:
Change in consumer prices over time. Higher CPI = higher inflation = tighter monetary policy (rate hikes).

### CPI Impact on Markets:

| CPI Scenario | Central Bank Response | Market Impact |
|-------------|---------------------|--------------|
| CPI rising above target | Rate hikes likely | Currency ↑, Stocks ↓, Bonds ↓ |
| CPI at target (~2%) | Hold rates | Neutral |
| CPI falling below target | Rate cuts possible | Currency ↓, Stocks ↑, Bonds ↑ |

---

## Interest Rates

### Why Rates Are King:
Interest rates are the **single most powerful driver** of currency and bond markets.

| Rate Change | USD Impact | Stock Impact | Gold Impact |
|-------------|-----------|-------------|-------------|
| Rate hike | USD ↑ | Stocks ↓ (usually) | Gold ↓ |
| Rate cut | USD ↓ | Stocks ↑ (usually) | Gold ↑ |
| Hawkish hold | USD ↑ | Neutral to ↓ | Gold ↓ |
| Dovish hold | USD ↓ | Neutral to ↑ | Gold ↑ |

### Major Central Banks:

| Bank | Currency | Meeting Frequency |
|------|----------|-------------------|
| Federal Reserve (Fed) | USD | 8x/year |
| European Central Bank (ECB) | EUR | 8x/year |
| Bank of England (BoE) | GBP | 8x/year |
| Bank of Japan (BoJ) | JPY | 8x/year |
| Reserve Bank of Australia (RBA) | AUD | 11x/year |

---

## Trading Around News Events

### Pre-News:
- Reduce position size or close positions
- Widen stops (or use no-trade zone)
- Set alerts for key levels post-news
- Know the consensus forecast

### During News (First 15 minutes):
- Extreme volatility and whipsaws common
- Spread widens significantly
- Slippage likely on market orders
- Professional approach: WAIT, don't react

### Post-News (15-60 minutes after):
- Initial spike often retraces partially
- Real direction usually emerges after 15-30 min
- Trade the continuation move, not the spike
- Use limit orders at key levels

---

## Economic Calendar Tools

| Tool | Features |
|------|----------|
| **Forex Factory** | Industry standard, filter by impact |
| **Investing.com** | Comprehensive, forecasts |
| **TradingView** | Integrated with charts |
| **Myfxbook** | Clean interface |
| **DailyFX** | Analysis included |

---

## Related Topics

- [Forex Basics](/en/academy/forex-basics) — How currencies respond to data
- [Volatility Analysis](/en/academy/volatility-analysis) — News volatility
- [Risk Management](/en/academy/risk-management) — Pre-news position management
- [Trading Plan](/en/academy/trading-plan) — News rules in your plan
- [Economic Calendar Guide](/en/academy/economic-calendar-guide) — Detailed calendar usage
`,
);

// ============================
// 5. ECONOMIC INDICATORS — BN
// ============================
writeMdx(
  "bn",
  "academy",
  "economic-indicators-macro",
  {
    title: "Economic Indicator ও Macro Trading — সম্পূর্ণ গাইড",
    description:
      "Trading-এর জন্য Economic Indicator আয়ত্ত করুন: NFP, CPI, GDP, Interest Rate এবং Central Bank সিদ্ধান্ত। Macro Event কীভাবে Market চালায় ও কীভাবে Trade করবেন শিখুন।",
    level: "intermediate",
    order: 28,
  },
  `
## কেন Economic Indicator গুরুত্বপূর্ণ

Economic Indicator হলো **অর্থনৈতিক স্বাস্থ্য পরিমাপকারী Data Release**। এগুলো বড় Market Move চালায় কারণ Central Bank Policy, Investor Sentiment ও Capital Flow-কে প্রভাবিত করে। Macro Fundamental বোঝা আপনাকে বড় Move-এর ভুল দিকে থাকা এড়াতে সাহায্য করে।

---

## High-Impact Indicator

### Tier 1 (Market-Moving):

| Indicator | দেশ | ফ্রিকোয়েন্সি | প্রভাব |
|-----------|------|------------|--------|
| **Non-Farm Payrolls (NFP)** | US | মাসিক (১ম শুক্রবার) | অত্যন্ত বেশি |
| **CPI (Inflation)** | সব | মাসিক | অত্যন্ত বেশি |
| **Interest Rate Decision** | সব | বছরে ৬-৮ বার | চরম |
| **GDP** | সব | ত্রৈমাসিক | বেশি |
| **Retail Sales** | সব | মাসিক | বেশি |

### Indicator কীভাবে পড়বেন:

| দৃশ্য | Market Reaction |
|--------|----------------|
| Actual > Forecast (Beat) | Currency শক্তিশালী হয় (সাধারণত) |
| Actual < Forecast (Miss) | Currency দুর্বল হয় (সাধারণত) |
| Forecast-এর সাথে মিল | ন্যূনতম Reaction |
| বিশাল Beat/Miss | Volatile Spike, তারপর Continuation |

---

## Non-Farm Payrolls (NFP)

সবচেয়ে গুরুত্বপূর্ণ মাসিক Economic Release।

### এটি কী:
US অর্থনীতিতে যোগ/বাদ হওয়া Job-এর সংখ্যা (Farm Worker বাদে)। প্রতি মাসের প্রথম শুক্রবার সকাল ৮:৩০ AM ET-তে Release হয়।

### NFP Trading:

| NFP Result | প্রত্যাশিত প্রভাব |
|-----------|-------------------|
| শক্তিশালী (>প্রত্যাশিত) | USD শক্তিশালী, Stock বাড়তে পারে |
| দুর্বল (<প্রত্যাশিত) | USD দুর্বল, Rate Cut প্রত্যাশা বাড়ে |
| অত্যন্ত শক্তিশালী | Hawkish Fed প্রত্যাশা = Yield বাড়ে |
| অত্যন্ত দুর্বল | Dovish Fed প্রত্যাশা = Yield কমে |

<Callout type="warning" title="NFP Trading সতর্কতা">
NFP চরম Volatility তৈরি করে (সেকেন্ডে ৫০-১০০+ Pip Move)। অনেক Trader প্রথম ১৫-৩০ মিনিটে Trading এড়িয়ে চলেন। Release-এর সময় Spread ৩-১০ গুণ বাড়ে। Initial Spike-এর বদলে পরবর্তী ফলাফল Trade করুন।
</Callout>

---

## Inflation (CPI)

### কী পরিমাপ করে:
সময়ের সাথে Consumer Price-এর পরিবর্তন। বেশি CPI = বেশি Inflation = কঠোর Monetary Policy (Rate Hike)।

### Market-এ CPI-র প্রভাব:

| CPI দৃশ্য | Central Bank প্রতিক্রিয়া | Market প্রভাব |
|-----------|-------------------------|--------------|
| CPI Target-এর উপরে বাড়ছে | Rate Hike সম্ভব | Currency ↑, Stock ↓, Bond ↓ |
| CPI Target-এ (~2%) | Rate ধরে রাখা | Neutral |
| CPI Target-এর নিচে কমছে | Rate Cut সম্ভব | Currency ↓, Stock ↑, Bond ↑ |

---

## Interest Rate

### কেন Rate সবচেয়ে গুরুত্বপূর্ণ:
Interest Rate হলো Currency ও Bond Market-এর **একক সবচেয়ে শক্তিশালী Driver**।

| Rate পরিবর্তন | USD প্রভাব | Stock প্রভাব | Gold প্রভাব |
|---------------|-----------|-------------|------------|
| Rate Hike | USD ↑ | Stock ↓ (সাধারণত) | Gold ↓ |
| Rate Cut | USD ↓ | Stock ↑ (সাধারণত) | Gold ↑ |
| Hawkish Hold | USD ↑ | Neutral থেকে ↓ | Gold ↓ |
| Dovish Hold | USD ↓ | Neutral থেকে ↑ | Gold ↑ |

### প্রধান Central Bank:

| Bank | Currency | Meeting ফ্রিকোয়েন্সি |
|------|----------|----------------------|
| Federal Reserve (Fed) | USD | বছরে ৮ বার |
| European Central Bank (ECB) | EUR | বছরে ৮ বার |
| Bank of England (BoE) | GBP | বছরে ৮ বার |
| Bank of Japan (BoJ) | JPY | বছরে ৮ বার |
| Reserve Bank of Australia (RBA) | AUD | বছরে ১১ বার |

---

## News Event-এ Trading

### Pre-News:
- Position Size কমান বা Position Close করুন
- Stop চওড়া করুন (বা No-trade Zone ব্যবহার করুন)
- Post-news Key Level-এ Alert সেট করুন
- Consensus Forecast জানুন

### News-এর সময় (প্রথম ১৫ মিনিট):
- চরম Volatility ও Whipsaw সাধারণ
- Spread উল্লেখযোগ্যভাবে বাড়ে
- Market Order-এ Slippage সম্ভব
- Professional পদ্ধতি: অপেক্ষা করুন, React করবেন না

### Post-News (১৫-৬০ মিনিট পর):
- Initial Spike প্রায়ই আংশিক Retrace করে
- ১৫-৩০ মিনিট পর সাধারণত প্রকৃত Direction প্রকাশ পায়
- Spike নয়, Continuation Move Trade করুন
- Key Level-এ Limit Order ব্যবহার করুন

---

## সম্পর্কিত বিষয়

- [Forex Basics](/bn/academy/forex-basics) — Data-তে Currency কীভাবে React করে
- [Volatility Analysis](/bn/academy/volatility-analysis) — News Volatility
- [Risk Management](/bn/academy/risk-management) — Pre-news Position Management
- [Trading Plan](/bn/academy/trading-plan) — Plan-এ News নিয়ম
- [Economic Calendar Guide](/bn/academy/economic-calendar-guide) — বিস্তারিত Calendar ব্যবহার
`,
);

console.log("\n✅ Academy Batch 5 Complete: 5 topics × 2 languages = 10 files");
console.log(
  "Topics: options-trading-basics, harmonic-patterns, bollinger-bands-trading, backtesting-forward-testing, economic-indicators-macro",
);
