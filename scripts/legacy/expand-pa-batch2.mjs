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
// PRICE ACTION BATCH 2: Market Dynamics (4 Topics × 2 Langs = 8 Files)
// Topics: expansion, momentum, volume, confluence
// ============================================================

// 1. EXPANSION — EN
writeMdx(
  "en",
  "price-action",
  "expansion",
  {
    title: "Expansion in Price Action — Complete Guide",
    description:
      "Master price expansion concepts. Learn how to identify, trade, and manage explosive price moves that follow compression and consolidation phases.",
    level: "intermediate",
    order: 17,
  },
  `
## What is Expansion?

Expansion is the **explosive directional move** that follows a period of compression or consolidation. It's when price rapidly moves away from a range, creating large impulsive candles with strong momentum. Expansion phases are where the majority of trading profits are made.

<Callout type="info" title="The Expansion Edge">
Professional traders spend most of their time WAITING during compression and PROFITING during expansion. Understanding the compression-to-expansion cycle is the key to consistent profitability.
</Callout>

---

## The Market Cycle

\`\`\`
Market moves in a predictable cycle:

COMPRESSION → EXPANSION → RETRACEMENT → COMPRESSION → EXPANSION...

1. Compression: Range tightens, energy builds (WAIT)
2. Expansion: Breakout occurs, momentum explodes (TRADE)
3. Retracement: Profit-taking, pullback forms (WAIT/RE-ENTER)
4. Compression: New range forms at higher/lower level (WAIT)
5. Repeat
\`\`\`

---

## Characteristics of Expansion

| Feature | Description |
|---------|-------------|
| **Large candle bodies** | Full-bodied candles with small wicks |
| **Increased volume** | Volume spikes confirm real expansion |
| **Directional momentum** | Price moves one way without significant pullbacks |
| **Structure breaks** | BOS (Break of Structure) occurs |
| **Time velocity** | Covers large distance in short time |
| **Creates FVGs** | Fair Value Gaps form (imbalance) |

---

## Types of Expansion

### 1. Breakout Expansion
- Follows compression/consolidation
- Price explodes through key S/R level
- Usually the most powerful type
- Volume confirmation critical

### 2. News-Driven Expansion
- Triggered by economic data or events
- Often creates large wicks before direction
- Can be unpredictable in first 5-15 minutes
- Trade the continuation after initial volatility

### 3. Session-Open Expansion
- London open, NY open typically expand
- Asian range provides compression
- Institutional orders trigger the move
- Most reliable daily expansion

### 4. Liquidity-Sweep Expansion
- Price sweeps a key level, then expands opposite direction
- Stop hunt triggers institutional entry
- Creates fastest, most impulsive moves
- Highest R:R setups

---

## Trading Expansion

### Entry Methods:

**Method 1: Catch the Break (Aggressive)**
\`\`\`
1. Identify compression/consolidation
2. Enter on the first strong candle close beyond the range
3. Stop: Inside the compression range
4. Target: 1.5-3× compression range width
\`\`\`

**Method 2: Ride the Wave (Moderate)**
\`\`\`
1. Expansion starts — you see the impulsive move
2. Wait for first pullback (mini retracement)
3. Enter on pullback to 20 EMA or recent FVG
4. Stop: Below pullback low
5. Target: Next liquidity level or S/R
\`\`\`

**Method 3: Post-Expansion Entry (Conservative)**
\`\`\`
1. Expansion completes (momentum slows)
2. Wait for retracement to Order Block/FVG
3. Enter on the retracement with trend
4. Stop: Beyond the OB/FVG
5. Target: New expansion in same direction
\`\`\`

---

## Measuring Expansion Targets

### Measured Move:
\`\`\`
Target = Compression Range Height projected from breakout

Example:
- Compression range: 1.1000 to 1.1050 (50 pips)
- Breakout above 1.1050
- Minimum target: 1.1050 + 50 = 1.1100
- Extended target: 1.1050 + 100 = 1.1150 (2× range)
\`\`\`

### Fibonacci Extension:
- 127.2% extension of prior impulse
- 161.8% extension for strong trends
- 200% for very strong momentum

---

## When NOT to Enter Expansion

| Warning Sign | Why Avoid |
|-------------|-----------|
| Expansion already extended (5+ candles) | Late entry, likely to retrace |
| Against higher timeframe | Counter-trend expansion = risky |
| No prior compression | Random spike, not structured |
| Low volume break | Likely to fail |
| At major resistance/support | Expansion may stop there |

---

## Expansion Risk Management

- **Never chase** — If you missed the initial break, wait for pullback
- **Trail your stop** — Move to break-even after 1R gained
- **Take partials** — Close 50% at 1:1 R:R, trail the rest
- **Respect targets** — Don't hold through major S/R levels
- **Size down** during expansion — Volatility means wider stops

---

## Related Topics

- [Compression](/en/price-action/compression) — What comes before expansion
- [Breakouts](/en/price-action/breakouts) — Breaking compression boundaries
- [Momentum](/en/price-action/momentum) — Measuring expansion strength
- [Session Analysis](/en/price-action/session-analysis) — Session-based expansion
- [Trade Management](/en/price-action/trade-management) — Managing expansion trades
`,
);

// 1. EXPANSION — BN
writeMdx(
  "bn",
  "price-action",
  "expansion",
  {
    title: "Price Action-এ Expansion — সম্পূর্ণ গাইড",
    description:
      "Price Expansion Concept আয়ত্ত করুন। Compression ও Consolidation Phase-এর পর আসা Explosive Price Move চিহ্নিত, Trade ও Manage করা শিখুন।",
    level: "intermediate",
    order: 17,
  },
  `
## Expansion কী?

Expansion হলো Compression বা Consolidation-এর পরে আসা **Explosive Directional Move**। এটি হলো যখন Price দ্রুত একটি Range থেকে দূরে সরে যায়, শক্তিশালী Momentum-সহ বড় Impulsive Candle তৈরি করে। Expansion Phase-এ Trading Profit-এর সিংহভাগ অর্জিত হয়।

<Callout type="info" title="Expansion Edge">
Professional Trader তাদের বেশিরভাগ সময় Compression-এ অপেক্ষা করে এবং Expansion-এ PROFIT করে কাটান। Compression-to-Expansion Cycle বোঝা ধারাবাহিক Profitability-র চাবিকাঠি।
</Callout>

---

## Market Cycle

\`\`\`
Market পূর্বানুমানযোগ্য Cycle-এ চলে:

COMPRESSION → EXPANSION → RETRACEMENT → COMPRESSION → EXPANSION...

1. Compression: Range সংকীর্ণ, Energy জমা (অপেক্ষা)
2. Expansion: Breakout ঘটে, Momentum বিস্ফোরিত (TRADE)
3. Retracement: Profit-taking, Pullback তৈরি (অপেক্ষা/RE-ENTER)
4. Compression: Higher/Lower Level-এ নতুন Range (অপেক্ষা)
5. পুনরাবৃত্তি
\`\`\`

---

## Expansion-এর বৈশিষ্ট্য

| বৈশিষ্ট্য | বর্ণনা |
|-----------|--------|
| **বড় Candle Body** | Full-bodied Candle, ছোট Wick |
| **বর্ধিত Volume** | Volume Spike প্রকৃত Expansion Confirm করে |
| **Directional Momentum** | Price একদিকে যায়, উল্লেখযোগ্য Pullback ছাড়া |
| **Structure Break** | BOS (Break of Structure) ঘটে |
| **Time Velocity** | কম সময়ে বড় দূরত্ব Cover করে |
| **FVG তৈরি** | Fair Value Gap তৈরি হয় (Imbalance) |

---

## Expansion-এর ধরন

### ১. Breakout Expansion
- Compression/Consolidation-এর পর
- Price মূল S/R Level ভেদ করে বিস্ফোরিত হয়
- সাধারণত সবচেয়ে শক্তিশালী ধরন
- Volume Confirmation অত্যন্ত জরুরি

### ২. News-Driven Expansion
- Economic Data বা Event দ্বারা ট্রিগার
- Direction-এর আগে প্রায়ই বড় Wick তৈরি করে
- প্রথম ৫-১৫ মিনিটে অপূর্বানুমেয় হতে পারে
- Initial Volatility-র পর Continuation Trade করুন

### ৩. Session-Open Expansion
- London Open, NY Open সাধারণত Expand করে
- Asian Range Compression প্রদান করে
- Institutional Order Move Trigger করে
- সবচেয়ে নির্ভরযোগ্য দৈনিক Expansion

### ৪. Liquidity-Sweep Expansion
- Price Key Level Sweep করে, তারপর বিপরীত দিকে Expand
- Stop Hunt Institutional Entry Trigger করে
- সবচেয়ে দ্রুত, সবচেয়ে Impulsive Move তৈরি করে
- সর্বোচ্চ R:R Setup

---

## Expansion Trade করা

### Entry পদ্ধতি:

**পদ্ধতি ১: Break ধরুন (Aggressive)**
\`\`\`
1. Compression/Consolidation চিহ্নিত করুন
2. Range-এর বাইরে প্রথম শক্তিশালী Candle Close-এ Enter
3. Stop: Compression Range-এর ভিতরে
4. Target: Compression Range Width-এর 1.5-3×
\`\`\`

**পদ্ধতি ২: Wave Ride করুন (Moderate)**
\`\`\`
1. Expansion শুরু — Impulsive Move দেখছেন
2. প্রথম Pullback-এর জন্য অপেক্ষা (Mini Retracement)
3. 20 EMA বা সাম্প্রতিক FVG-তে Pullback-এ Enter
4. Stop: Pullback Low-এর নিচে
5. Target: পরবর্তী Liquidity Level বা S/R
\`\`\`

**পদ্ধতি ৩: Post-Expansion Entry (Conservative)**
\`\`\`
1. Expansion সম্পন্ন (Momentum ধীর)
2. Order Block/FVG-তে Retracement-এর জন্য অপেক্ষা
3. Trend-এর সাথে Retracement-এ Enter
4. Stop: OB/FVG-এর বাইরে
5. Target: একই Direction-এ নতুন Expansion
\`\`\`

---

## Expansion Target পরিমাপ

### Measured Move:
\`\`\`
Target = Breakout থেকে Compression Range Height Project

উদাহরণ:
- Compression Range: 1.1000 থেকে 1.1050 (50 Pip)
- 1.1050-এর উপরে Breakout
- ন্যূনতম Target: 1.1050 + 50 = 1.1100
- Extended Target: 1.1050 + 100 = 1.1150 (2× Range)
\`\`\`

---

## কখন Expansion-এ Enter করবেন না

| সতর্কতা | কেন এড়াবেন |
|---------|------------|
| Expansion ইতিমধ্যে বিস্তৃত (৫+ Candle) | দেরি Entry, সম্ভবত Retrace করবে |
| Higher Timeframe-এর বিরুদ্ধে | Counter-trend Expansion = ঝুঁকিপূর্ণ |
| পূর্ববর্তী Compression নেই | Random Spike, কাঠামোবদ্ধ নয় |
| কম Volume Break | সম্ভবত ব্যর্থ হবে |
| Major Resistance/Support-এ | Expansion সেখানে থামতে পারে |

---

## সম্পর্কিত বিষয়

- [Compression](/bn/price-action/compression) — Expansion-এর আগে যা আসে
- [Breakouts](/bn/price-action/breakouts) — Compression Boundary ভাঙা
- [Momentum](/bn/price-action/momentum) — Expansion শক্তি পরিমাপ
- [Session Analysis](/bn/price-action/session-analysis) — Session-based Expansion
- [Trade Management](/bn/price-action/trade-management) — Expansion Trade Manage
`,
);

// 2. MOMENTUM — EN
writeMdx(
  "en",
  "price-action",
  "momentum",
  {
    title: "Momentum in Price Action — Complete Guide",
    description:
      "Master momentum reading in Price Action. Learn to assess candle momentum, impulse vs correction, momentum shifts, and how momentum determines trade direction.",
    level: "intermediate",
    order: 18,
  },
  `
## What is Momentum?

Momentum is the **speed and strength** of price movement in a given direction. In Price Action, we read momentum directly from candle characteristics — size, close position, wick ratio, and sequence — without needing indicators like RSI or MACD.

<Callout type="info" title="Momentum is King">
The side with more momentum wins. If buyers are creating large bullish candles and sellers are creating small bearish candles, buyers have momentum. ALWAYS trade in the direction of momentum.
</Callout>

---

## Reading Momentum from Candles

### Strong Momentum Indicators:

| Feature | Bullish Momentum | Bearish Momentum |
|---------|-----------------|-----------------|
| Candle body | Large green body | Large red body |
| Close position | Close near high | Close near low |
| Upper wick | Small or none | Large (rejection) |
| Lower wick | Large (rejection) | Small or none |
| Consecutive | Multiple green in row | Multiple red in row |
| Body-to-wick ratio | Body > 70% of range | Body > 70% of range |

### Weak Momentum Indicators:
- Small candle bodies (indecision)
- Long wicks on both sides (battle)
- Alternating colors (no direction)
- Doji or spinning top candles
- Decreasing candle sizes

---

## Impulse vs. Correction

### Impulse (Strong Momentum):
- Large candles with full bodies
- Moves quickly in one direction
- Creates structure breaks (BOS)
- Creates Fair Value Gaps (FVG)
- Usually 1-3 candles cover large distance

### Correction (Weak Momentum):
- Smaller candles, often mixed colors
- Moves slowly, sideways or slightly against trend
- Does NOT create structure breaks
- Often fills previous FVGs
- Takes many candles to cover small distance

### The Key Insight:
\`\`\`
IF impulse is bullish and correction is bearish:
→ Bullish trend is healthy → LOOK FOR LONG entries

IF impulse is bearish and correction is bullish:
→ Bearish trend is healthy → LOOK FOR SHORT entries

IF impulse and correction are EQUAL in strength:
→ Trend is weakening → PREPARE for reversal
\`\`\`

---

## Momentum Shifts

### How to Identify a Momentum Shift:

1. **Impulses getting shorter** — Each push in trend direction covers less ground
2. **Corrections getting stronger** — Counter-trend moves becoming impulsive
3. **Equal impulse/correction** — Neither side has advantage
4. **First impulsive counter-trend candle** — Strong candle against prevailing trend
5. **CHOCH confirmation** — Structure break against trend

### Trading the Shift:
\`\`\`
1. Trend has been bullish (strong green impulses, weak red corrections)
2. Notice green impulses shrinking, red corrections growing
3. First large red engulfing candle appears (momentum shift signal)
4. Structure breaks (CHOCH) — confirms the shift
5. Now look for SHORT entries on pullbacks
\`\`\`

---

## Momentum-Based Trading Rules

1. **Only trade with momentum** — Never fight the strong side
2. **Impulse = direction** — Trade in the impulse direction
3. **Wait for correction** — Don't enter during impulse (late entry)
4. **Enter at end of correction** — Best R:R
5. **Exit when momentum shifts** — Don't hold when momentum reverses

---

## Momentum and Timeframes

| Timeframe | Momentum Tells You |
|-----------|-------------------|
| Weekly | Overall bias (bull/bear market) |
| Daily | Current directional control |
| H4 | Swing-level momentum |
| H1 | Intraday momentum |
| M15 | Entry-level momentum |

### Multi-Timeframe Momentum Rule:
- Trade in direction of H4/D1 momentum (bias)
- Enter when M15/H1 momentum aligns with bias
- Avoid when lower TF momentum opposes higher TF

---

## Related Topics

- [Market Structure](/en/price-action/market-structure) — Momentum creates structure
- [Expansion](/en/price-action/expansion) — Peak momentum = expansion
- [Compression](/en/price-action/compression) — Low momentum = compression
- [Reversal Concepts](/en/price-action/reversal-concepts) — Momentum shift = reversal
- [Trend Analysis](/en/price-action/trend-analysis) — Momentum defines trend health
`,
);

// 2. MOMENTUM — BN
writeMdx(
  "bn",
  "price-action",
  "momentum",
  {
    title: "Price Action-এ Momentum — সম্পূর্ণ গাইড",
    description:
      "Price Action-এ Momentum Reading আয়ত্ত করুন। Candle Momentum মূল্যায়ন, Impulse vs Correction, Momentum Shift এবং Momentum কীভাবে Trade Direction নির্ধারণ করে শিখুন।",
    level: "intermediate",
    order: 18,
  },
  `
## Momentum কী?

Momentum হলো একটি নির্দিষ্ট Direction-এ Price Movement-এর **গতি ও শক্তি**। Price Action-এ আমরা সরাসরি Candle-এর বৈশিষ্ট্য — Size, Close Position, Wick Ratio এবং Sequence — থেকে Momentum পড়ি, RSI বা MACD-এর মতো Indicator ছাড়াই।

<Callout type="info" title="Momentum-ই রাজা">
যে পক্ষের বেশি Momentum সে জেতে। Buyer বড় Bullish Candle তৈরি করছে এবং Seller ছোট Bearish Candle তৈরি করছে মানে Buyer-এর Momentum আছে। সবসময় Momentum-এর Direction-এ Trade করুন।
</Callout>

---

## Candle থেকে Momentum পড়া

### শক্তিশালী Momentum-এর সূচক:

| বৈশিষ্ট্য | Bullish Momentum | Bearish Momentum |
|-----------|-----------------|-----------------|
| Candle Body | বড় Green Body | বড় Red Body |
| Close অবস্থান | High-এর কাছে Close | Low-এর কাছে Close |
| Upper Wick | ছোট বা নেই | বড় (Rejection) |
| Lower Wick | বড় (Rejection) | ছোট বা নেই |
| পরপর | পরপর কয়েকটি Green | পরপর কয়েকটি Red |
| Body-to-Wick Ratio | Body > Range-এর ৭০% | Body > Range-এর ৭০% |

### দুর্বল Momentum-এর সূচক:
- ছোট Candle Body (Indecision)
- উভয় দিকে লম্বা Wick (যুদ্ধ)
- পর্যায়ক্রমে রঙ বদল (Direction নেই)
- Doji বা Spinning Top Candle
- ক্রমহ্রাসমান Candle Size

---

## Impulse vs. Correction

### Impulse (শক্তিশালী Momentum):
- Full Body-র বড় Candle
- একদিকে দ্রুত Move
- Structure Break (BOS) তৈরি করে
- Fair Value Gap (FVG) তৈরি করে
- সাধারণত ১-৩ Candle-এ বড় দূরত্ব Cover

### Correction (দুর্বল Momentum):
- ছোট Candle, প্রায়ই মিশ্র রঙ
- ধীরে চলে, পাশে বা Trend-এর সামান্য বিরুদ্ধে
- Structure Break তৈরি করে না
- পূর্ববর্তী FVG Fill করে
- ছোট দূরত্ব Cover করতে অনেক Candle লাগে

### মূল অন্তর্দৃষ্টি:
\`\`\`
যদি Impulse Bullish এবং Correction Bearish হয়:
→ Bullish Trend সুস্থ → LONG Entry খুঁজুন

যদি Impulse Bearish এবং Correction Bullish হয়:
→ Bearish Trend সুস্থ → SHORT Entry খুঁজুন

যদি Impulse ও Correction শক্তিতে সমান:
→ Trend দুর্বল হচ্ছে → Reversal-এর জন্য প্রস্তুত হন
\`\`\`

---

## Momentum Shift

### Momentum Shift কীভাবে চিহ্নিত করবেন:

1. **Impulse ছোট হচ্ছে** — Trend Direction-এ প্রতিটি Push কম দূরত্ব Cover
2. **Correction শক্তিশালী হচ্ছে** — Counter-trend Move Impulsive হচ্ছে
3. **Impulse/Correction সমান** — কোনো পক্ষের সুবিধা নেই
4. **প্রথম Impulsive Counter-trend Candle** — Trend-এর বিরুদ্ধে শক্তিশালী Candle
5. **CHOCH Confirmation** — Trend-এর বিরুদ্ধে Structure Break

### Shift Trade করা:
\`\`\`
1. Trend Bullish ছিল (শক্তিশালী Green Impulse, দুর্বল Red Correction)
2. লক্ষ্য করুন Green Impulse সঙ্কুচিত, Red Correction বাড়ছে
3. প্রথম বড় Red Engulfing Candle দেখা দেয় (Momentum Shift Signal)
4. Structure Break (CHOCH) — Shift Confirm করে
5. এখন Pullback-এ SHORT Entry খুঁজুন
\`\`\`

---

## Momentum-based Trading নিয়ম

1. **শুধু Momentum-এর সাথে Trade করুন** — শক্তিশালী পক্ষের বিরুদ্ধে কখনো নয়
2. **Impulse = Direction** — Impulse Direction-এ Trade করুন
3. **Correction-এর জন্য অপেক্ষা** — Impulse চলাকালীন Enter করবেন না (Late Entry)
4. **Correction শেষে Enter করুন** — সেরা R:R
5. **Momentum Shift হলে Exit করুন** — Momentum Reverse হলে ধরে রাখবেন না

---

## Momentum ও Timeframe

| Timeframe | Momentum কী বলে |
|-----------|-----------------|
| Weekly | সামগ্রিক Bias (Bull/Bear Market) |
| Daily | বর্তমান Directional Control |
| H4 | Swing-level Momentum |
| H1 | Intraday Momentum |
| M15 | Entry-level Momentum |

### Multi-Timeframe Momentum নিয়ম:
- H4/D1 Momentum-এর Direction-এ Trade করুন (Bias)
- M15/H1 Momentum Bias-এর সাথে মিললে Enter করুন
- Lower TF Momentum যখন Higher TF-কে Oppose করে তখন এড়িয়ে চলুন

---

## সম্পর্কিত বিষয়

- [Market Structure](/bn/price-action/market-structure) — Momentum Structure তৈরি করে
- [Expansion](/bn/price-action/expansion) — Peak Momentum = Expansion
- [Compression](/bn/price-action/compression) — Low Momentum = Compression
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Momentum Shift = Reversal
- [Trend Analysis](/bn/price-action/trend-analysis) — Momentum Trend Health সংজ্ঞায়িত করে
`,
);

// 3. VOLUME — EN
writeMdx(
  "en",
  "price-action",
  "volume",
  {
    title: "Volume Analysis in Price Action — Complete Guide",
    description:
      "Master volume analysis for Price Action trading. Learn how volume confirms breakouts, reveals institutional activity, validates patterns, and improves trade confidence.",
    level: "intermediate",
    order: 19,
  },
  `
## Why Volume Matters in Price Action

Volume represents the **number of contracts/shares traded** during a period. It tells you the conviction behind a price move. A breakout with high volume is likely real; a breakout with low volume is likely to fail.

<Callout type="info" title="Volume = Conviction">
Price shows you WHAT happened. Volume shows you HOW COMMITTED participants were. High volume = strong hands (institutions) are involved. Low volume = weak hands (retail) are moving price.
</Callout>

---

## Volume Principles

### Core Rules:

| Principle | Meaning |
|-----------|---------|
| **Volume confirms direction** | Strong moves should have increasing volume |
| **Volume precedes price** | Volume often increases before the move |
| **Volume validates breakouts** | Real breakouts have high volume |
| **Volume divergence warns** | Price making new highs + declining volume = weakness |
| **Low volume = consolidation** | Market resting, preparing for next move |
| **Climactic volume = exhaustion** | Extreme volume spike can signal reversal |

---

## Volume and Price Action Signals

### Breakout Confirmation:
\`\`\`
VALID BREAKOUT:
- Price breaks key level ✓
- Volume 2-3× average ✓
- Full candle body beyond level ✓
- Follow-through next candle ✓
→ HIGH PROBABILITY CONTINUATION

INVALID BREAKOUT (Fakeout):
- Price breaks key level ✓
- Volume below average ✗
- Long wick back inside ✗
- No follow-through ✗
→ LIKELY TO FAIL — Potential reversal trade
\`\`\`

### Trend Confirmation:
| Scenario | Volume Behavior | Meaning |
|----------|----------------|---------|
| Uptrend + rising volume | Strong bull control | Stay long |
| Uptrend + falling volume | Bulls losing conviction | Caution |
| Downtrend + rising volume | Strong bear control | Stay short |
| Downtrend + falling volume | Bears losing conviction | Caution |

---

## Volume at Key Levels

### Support/Resistance:
- **High volume rejection** at S/R = Level is strong, expect bounce
- **Low volume approach** to S/R = Level likely to break
- **High volume break** through S/R = Genuine breakout
- **Climactic volume** at S/R = Possible exhaustion/reversal

### Liquidity Sweeps:
- **Volume spike** on the sweep candle confirms institutional activity
- **Volume returns to normal** after sweep = hunt is complete
- Trade the reversal after high-volume sweep

---

## Volume Patterns

### Accumulation (Smart Money Buying):
\`\`\`
1. Price in range/downtrend
2. Volume increases on DOWN moves (looks bearish)
3. But price doesn't make new lows (absorption)
4. Eventually: explosive upside breakout

Interpretation: Institutions buying into selling pressure
Action: Prepare for bullish breakout
\`\`\`

### Distribution (Smart Money Selling):
\`\`\`
1. Price in range/uptrend
2. Volume increases on UP moves (looks bullish)
3. But price doesn't make new highs (distribution)
4. Eventually: explosive downside breakdown

Interpretation: Institutions selling into buying pressure
Action: Prepare for bearish breakdown
\`\`\`

---

## Volume Divergence

### Bearish Volume Divergence:
- Price: Making higher highs
- Volume: Making lower highs
- Meaning: Trend losing conviction → potential reversal

### Bullish Volume Divergence:
- Price: Making lower lows
- Volume: Making lower lows (selling drying up)
- Meaning: Selling exhausted → potential reversal up

---

## Volume Limitations in Forex

<Callout type="warning" title="Forex Volume Note">
In Forex, true volume isn't available (decentralized market). What brokers show is tick volume (number of price changes). While not perfect, tick volume correlates ~90% with actual volume and is still useful for confirmation.
</Callout>

### Where True Volume is Available:
- Stocks (exchange-reported)
- Futures (exchange-reported)
- Crypto (exchange-reported)
- Forex: Tick volume only (still useful)

---

## Related Topics

- [Breakouts](/en/price-action/breakouts) — Volume confirms breakouts
- [Momentum](/en/price-action/momentum) — Volume + momentum alignment
- [Liquidity](/en/price-action/liquidity) — Volume at sweep levels
- [Reversal Concepts](/en/price-action/reversal-concepts) — Volume divergence at tops/bottoms
- [Confirmation](/en/price-action/confirmation) — Volume as confirmation tool
`,
);

// 3. VOLUME — BN
writeMdx(
  "bn",
  "price-action",
  "volume",
  {
    title: "Price Action-এ Volume Analysis — সম্পূর্ণ গাইড",
    description:
      "Price Action Trading-এ Volume Analysis আয়ত্ত করুন। Volume কীভাবে Breakout Confirm করে, Institutional Activity প্রকাশ করে, Pattern Validate করে ও Trade Confidence বাড়ায় শিখুন।",
    level: "intermediate",
    order: 19,
  },
  `
## Price Action-এ Volume কেন গুরুত্বপূর্ণ

Volume প্রতিনিধিত্ব করে একটি Period-এ **কতগুলো Contract/Share Trade হয়েছে**। এটি আপনাকে বলে Price Move-এর পেছনে Conviction কতটা। High Volume-সহ Breakout সম্ভবত সত্যিকার; Low Volume-সহ Breakout সম্ভবত ব্যর্থ হবে।

<Callout type="info" title="Volume = Conviction">
Price দেখায় কী ঘটেছে। Volume দেখায় অংশগ্রহণকারীরা কতটা COMMITTED ছিল। High Volume = Strong Hand (Institution) জড়িত। Low Volume = Weak Hand (Retail) Price সরাচ্ছে।
</Callout>

---

## Volume নীতিমালা

### মূল নিয়ম:

| নীতি | অর্থ |
|------|------|
| **Volume Direction Confirm করে** | শক্তিশালী Move-এ Volume বাড়া উচিত |
| **Volume Price-এর আগে আসে** | Move-এর আগে প্রায়ই Volume বাড়ে |
| **Volume Breakout Validate করে** | সত্যিকার Breakout-এ High Volume থাকে |
| **Volume Divergence সতর্ক করে** | Price নতুন High + Volume কমছে = দুর্বলতা |
| **Low Volume = Consolidation** | Market বিশ্রাম নিচ্ছে, পরবর্তী Move-এর প্রস্তুতি |
| **Climactic Volume = Exhaustion** | চরম Volume Spike Reversal-এর Signal হতে পারে |

---

## Volume ও Price Action Signal

### Breakout Confirmation:
\`\`\`
VALID BREAKOUT:
- Price Key Level ভাঙে ✓
- Volume Average-এর 2-3× ✓
- Level-এর বাইরে Full Candle Body ✓
- পরবর্তী Candle-এ Follow-through ✓
→ HIGH PROBABILITY CONTINUATION

INVALID BREAKOUT (Fakeout):
- Price Key Level ভাঙে ✓
- Volume Average-এর নিচে ✗
- ভিতরে ফিরে লম্বা Wick ✗
- Follow-through নেই ✗
→ সম্ভবত ব্যর্থ — সম্ভাব্য Reversal Trade
\`\`\`

### Trend Confirmation:
| দৃশ্য | Volume আচরণ | অর্থ |
|--------|-------------|------|
| Uptrend + Volume বাড়ছে | শক্তিশালী Bull Control | Long-এ থাকুন |
| Uptrend + Volume কমছে | Bull Conviction হারাচ্ছে | সতর্কতা |
| Downtrend + Volume বাড়ছে | শক্তিশালী Bear Control | Short-এ থাকুন |
| Downtrend + Volume কমছে | Bear Conviction হারাচ্ছে | সতর্কতা |

---

## Key Level-এ Volume

### Support/Resistance:
- S/R-এ **High Volume Rejection** = Level শক্তিশালী, Bounce আশা করুন
- S/R-তে **Low Volume Approach** = Level সম্ভবত ভাঙবে
- S/R দিয়ে **High Volume Break** = প্রকৃত Breakout
- S/R-এ **Climactic Volume** = সম্ভাব্য Exhaustion/Reversal

### Liquidity Sweep:
- Sweep Candle-এ **Volume Spike** Institutional Activity Confirm করে
- Sweep-এর পর **Volume স্বাভাবিক হয়** = Hunt সম্পন্ন
- High-volume Sweep-এর পর Reversal Trade করুন

---

## Volume Pattern

### Accumulation (Smart Money কিনছে):
\`\`\`
1. Price Range/Downtrend-এ
2. DOWN Move-এ Volume বাড়ে (Bearish মনে হয়)
3. কিন্তু Price নতুন Low করে না (Absorption)
4. অবশেষে: Upside-এ Explosive Breakout

ব্যাখ্যা: Institution Selling Pressure-এ কিনছে
Action: Bullish Breakout-এর জন্য প্রস্তুত
\`\`\`

### Distribution (Smart Money বিক্রি করছে):
\`\`\`
1. Price Range/Uptrend-এ
2. UP Move-এ Volume বাড়ে (Bullish মনে হয়)
3. কিন্তু Price নতুন High করে না (Distribution)
4. অবশেষে: Downside-এ Explosive Breakdown

ব্যাখ্যা: Institution Buying Pressure-এ বিক্রি করছে
Action: Bearish Breakdown-এর জন্য প্রস্তুত
\`\`\`

---

## Volume Divergence

### Bearish Volume Divergence:
- Price: Higher High করছে
- Volume: Lower High করছে
- অর্থ: Trend Conviction হারাচ্ছে → সম্ভাব্য Reversal

### Bullish Volume Divergence:
- Price: Lower Low করছে
- Volume: Lower Low করছে (Selling শুকিয়ে যাচ্ছে)
- অর্থ: Selling Exhausted → সম্ভাব্য Reversal Up

---

## Forex-এ Volume-এর সীমাবদ্ধতা

<Callout type="warning" title="Forex Volume নোট">
Forex-এ প্রকৃত Volume পাওয়া যায় না (Decentralized Market)। Broker যা দেখায় তা Tick Volume (Price Change-এর সংখ্যা)। পুরোপুরি না হলেও Tick Volume প্রকৃত Volume-এর সাথে ~৯০% Correlate করে এবং Confirmation-এর জন্য এখনো উপকারী।
</Callout>

---

## সম্পর্কিত বিষয়

- [Breakouts](/bn/price-action/breakouts) — Volume Breakout Confirm করে
- [Momentum](/bn/price-action/momentum) — Volume + Momentum Alignment
- [Liquidity](/bn/price-action/liquidity) — Sweep Level-এ Volume
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Top/Bottom-এ Volume Divergence
- [Confirmation](/bn/price-action/confirmation) — Confirmation Tool হিসেবে Volume
`,
);

// 4. CONFLUENCE — EN
writeMdx(
  "en",
  "price-action",
  "confluence",
  {
    title: "Confluence Trading — Complete Guide",
    description:
      "Master confluence trading in Price Action. Learn to stack multiple factors for high-probability setups — combining S/R, Fibonacci, Order Blocks, and structure alignment.",
    level: "intermediate",
    order: 30,
  },
  `
## What is Confluence?

Confluence occurs when **multiple independent trading factors align at the same price zone**, creating a high-probability trade setup. Each individual factor has moderate probability; combined, they create setups with exceptional win rates.

<Callout type="info" title="Confluence = Confidence">
A single support level gives you ~50% confidence. Add a Fibonacci 61.8% at the same zone = ~65%. Add an Order Block = ~75%. Add a higher timeframe trend alignment = ~85%. This is the power of confluence.
</Callout>

---

## Confluence Factors

### Structural Factors:
| Factor | What to Look For |
|--------|-----------------|
| **Support/Resistance** | Horizontal level with 3+ touches |
| **Trendline** | Dynamic level with 3+ touches |
| **Previous day/week H/L** | Institutional reference points |
| **Round numbers** | 1.1000, 50,000, etc. |
| **Equal highs/lows** | Liquidity levels |

### Fibonacci Factors:
| Factor | What to Look For |
|--------|-----------------|
| **61.8% retracement** | Golden ratio level |
| **78.6% retracement** | Deep pullback zone |
| **50% level** | Midpoint equilibrium |
| **127.2% extension** | First target beyond swing |
| **Golden Pocket (61.8-78.6%)** | Highest probability zone |

### Institutional Factors:
| Factor | What to Look For |
|--------|-----------------|
| **Order Block** | Last opposing candle before impulse |
| **Fair Value Gap (FVG)** | Imbalance zone (gap in candles) |
| **Liquidity void** | Price must return to fill |
| **Breaker Block** | Mitigated OB that flips |
| **Institutional candle** | Large body, small wicks |

### Timeframe Factors:
| Factor | What to Look For |
|--------|-----------------|
| **HTF trend direction** | D1/W1 bias |
| **HTF key level** | D1 S/R at same zone |
| **HTF Order Block** | D1/W1 OB at entry |
| **LTF entry confirmation** | M15 structure shift at zone |

---

## Building a Confluence Setup

### The Stacking Method:
\`\`\`
MINIMUM for a trade: 3 confluences
IDEAL for a trade: 4-5 confluences
MAXIMUM confidence: 6+ confluences

Example HIGH-PROBABILITY Long Setup:

Zone: 1.0850-1.0860
├── ✅ D1 Support level (3 previous bounces)
├── ✅ H4 61.8% Fibonacci retracement
├── ✅ H4 Bullish Order Block
├── ✅ D1 trend is bullish (HH/HL)
├── ✅ M15 showing CHOCH (shift bullish)
└── ✅ Liquidity swept below the zone

Confidence: 6/6 = HIGHEST PROBABILITY
Entry: At zone with bullish M15 candle
Stop: Below the Order Block
Target: Previous H4 swing high
R:R: Typically 1:3 to 1:5
\`\`\`

---

## Confluence Grading System

| Score | Confluences | Action |
|-------|-------------|--------|
| 1-2 | Low confidence | NO TRADE |
| 3 | Moderate | Trade with reduced size |
| 4-5 | High confidence | Standard position size |
| 6+ | Maximum confidence | Can consider slightly larger size |

---

## Common Confluence Combinations

### Best Setups:
1. **OB + FVG + Fibonacci** — Triple institutional + mathematical
2. **S/R + Trendline + Moving Average** — Triple dynamic + static
3. **Equal highs sweep + OB + HTF level** — Liquidity + institutional
4. **CHOCH + OB pullback + HTF trend** — Structure + institutional + direction

### Weakest Setups (Avoid):
- Only one indicator signal
- Against higher timeframe trend
- No structural confirmation
- Only lower timeframe factors

---

## Practical Application

### Daily Confluence Routine:
\`\`\`
1. Mark D1/W1 key levels (S/R, OBs, liquidity)
2. Draw Fibonacci on recent D1/H4 swings
3. Identify where multiple factors OVERLAP
4. These overlap zones = your watch zones
5. Drop to M15/H1 for entry timing at these zones
6. Only enter when LTF confirmation appears at confluence
\`\`\`

---

## Related Topics

- [Support & Resistance](/en/price-action/support-resistance) — Key confluence factor
- [Fibonacci Trading](/en/academy/fibonacci-trading) — Fib levels as confluence
- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — Timeframe alignment
- [Confirmation](/en/price-action/confirmation) — Entry confirmation at confluence
- [Entry Models](/en/price-action/entry-models) — Executing at confluence zones
`,
);

// 4. CONFLUENCE — BN
writeMdx(
  "bn",
  "price-action",
  "confluence",
  {
    title: "Confluence Trading — সম্পূর্ণ গাইড",
    description:
      "Price Action-এ Confluence Trading আয়ত্ত করুন। High-probability Setup-এর জন্য একাধিক Factor Stack করা শিখুন — S/R, Fibonacci, Order Block ও Structure Alignment সমন্বয়।",
    level: "intermediate",
    order: 30,
  },
  `
## Confluence কী?

Confluence ঘটে যখন **একাধিক স্বাধীন Trading Factor একই Price Zone-এ মিলিত হয়**, একটি High-probability Trade Setup তৈরি করে। প্রতিটি Individual Factor-এর মধ্যম Probability থাকে; একত্রিত হলে, অসাধারণ Win Rate-সহ Setup তৈরি হয়।

<Callout type="info" title="Confluence = Confidence">
একটি Single Support Level আপনাকে ~৫০% Confidence দেয়। একই Zone-এ Fibonacci 61.8% যোগ করুন = ~৬৫%। Order Block যোগ করুন = ~৭৫%। Higher Timeframe Trend Alignment যোগ করুন = ~৮৫%। এটাই Confluence-এর শক্তি।
</Callout>

---

## Confluence Factor

### Structural Factor:
| Factor | কী খুঁজবেন |
|--------|------------|
| **Support/Resistance** | ৩+ Touch-সহ Horizontal Level |
| **Trendline** | ৩+ Touch-সহ Dynamic Level |
| **Previous Day/Week H/L** | Institutional Reference Point |
| **Round Number** | 1.1000, 50,000 ইত্যাদি |
| **Equal High/Low** | Liquidity Level |

### Fibonacci Factor:
| Factor | কী খুঁজবেন |
|--------|------------|
| **61.8% Retracement** | Golden Ratio Level |
| **78.6% Retracement** | Deep Pullback Zone |
| **50% Level** | Midpoint Equilibrium |
| **Golden Pocket (61.8-78.6%)** | সর্বোচ্চ Probability Zone |

### Institutional Factor:
| Factor | কী খুঁজবেন |
|--------|------------|
| **Order Block** | Impulse-এর আগে শেষ Opposing Candle |
| **Fair Value Gap (FVG)** | Imbalance Zone (Candle-এ Gap) |
| **Breaker Block** | Flip হওয়া Mitigated OB |

### Timeframe Factor:
| Factor | কী খুঁজবেন |
|--------|------------|
| **HTF Trend Direction** | D1/W1 Bias |
| **HTF Key Level** | একই Zone-এ D1 S/R |
| **HTF Order Block** | Entry-তে D1/W1 OB |
| **LTF Entry Confirmation** | Zone-এ M15 Structure Shift |

---

## Confluence Setup তৈরি করা

### Stacking পদ্ধতি:
\`\`\`
Trade-এর জন্য ন্যূনতম: ৩ Confluence
Trade-এর জন্য আদর্শ: ৪-৫ Confluence
সর্বোচ্চ Confidence: ৬+ Confluence

উদাহরণ HIGH-PROBABILITY Long Setup:

Zone: 1.0850-1.0860
├── ✅ D1 Support Level (৩ পূর্ববর্তী Bounce)
├── ✅ H4 61.8% Fibonacci Retracement
├── ✅ H4 Bullish Order Block
├── ✅ D1 Trend Bullish (HH/HL)
├── ✅ M15 CHOCH দেখাচ্ছে (Bullish Shift)
└── ✅ Zone-এর নিচে Liquidity Swept

Confidence: ৬/৬ = সর্বোচ্চ PROBABILITY
Entry: Bullish M15 Candle-সহ Zone-এ
Stop: Order Block-এর নিচে
Target: পূর্ববর্তী H4 Swing High
R:R: সাধারণত 1:3 থেকে 1:5
\`\`\`

---

## Confluence Grading System

| Score | Confluence | Action |
|-------|-----------|--------|
| ১-২ | কম Confidence | TRADE নয় |
| ৩ | মধ্যম | কম Size-এ Trade |
| ৪-৫ | উচ্চ Confidence | মানক Position Size |
| ৬+ | সর্বোচ্চ Confidence | সামান্য বড় Size বিবেচনা করতে পারেন |

---

## সেরা Confluence Combination

1. **OB + FVG + Fibonacci** — Triple Institutional + Mathematical
2. **S/R + Trendline + Moving Average** — Triple Dynamic + Static
3. **Equal High Sweep + OB + HTF Level** — Liquidity + Institutional
4. **CHOCH + OB Pullback + HTF Trend** — Structure + Institutional + Direction

---

## ব্যবহারিক প্রয়োগ

### দৈনিক Confluence Routine:
\`\`\`
1. D1/W1 Key Level Mark করুন (S/R, OB, Liquidity)
2. সাম্প্রতিক D1/H4 Swing-এ Fibonacci আঁকুন
3. চিহ্নিত করুন কোথায় একাধিক Factor OVERLAP করে
4. এই Overlap Zone = আপনার Watch Zone
5. এই Zone-এ Entry Timing-এর জন্য M15/H1-এ নামুন
6. Confluence-এ LTF Confirmation দেখালেই Enter করুন
\`\`\`

---

## সম্পর্কিত বিষয়

- [Support ও Resistance](/bn/price-action/support-resistance) — মূল Confluence Factor
- [Fibonacci Trading](/bn/academy/fibonacci-trading) — Confluence হিসেবে Fib Level
- [Multi-Timeframe Analysis](/bn/price-action/multi-timeframe-analysis) — Timeframe Alignment
- [Confirmation](/bn/price-action/confirmation) — Confluence-এ Entry Confirmation
- [Entry Models](/bn/price-action/entry-models) — Confluence Zone-এ Execute
`,
);

console.log("\n✅ Price Action Batch 2 Complete: 4 topics × 2 languages = 8 files");
console.log("Topics: expansion, momentum, volume, confluence");
