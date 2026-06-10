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
// PRICE ACTION BATCH 1: Foundation (4 Topics × 2 Languages = 8 Files)
// Topics: reversal-concepts, liquidity, continuation, compression
// ============================================================

// ============================
// 1. REVERSAL CONCEPTS — EN
// ============================
writeMdx(
  "en",
  "price-action",
  "reversal-concepts",
  {
    title: "Price Action Reversal Concepts — Complete Guide",
    description:
      "Master reversal trading with Price Action. Identify trend exhaustion, reversal candlestick patterns, structure shifts (CHOCH), and high-probability reversal setups.",
    level: "intermediate",
    order: 14,
  },
  `
## What Are Price Action Reversals?

A reversal occurs when the **prevailing trend changes direction**. Price Action traders identify reversals through exhaustion signals, key level rejections, and structural changes — all without indicators. Reversal trading is higher risk but offers exceptional reward when correctly identified.

<Callout type="warning" title="Reversal vs. Pullback">
The biggest mistake traders make is confusing a pullback with a reversal. A pullback is a temporary pause within the trend — price will continue. A reversal is a genuine change of direction. Always wait for CONFIRMATION before trading reversals.
</Callout>

---

## Signs of Trend Exhaustion

Before a reversal occurs, the trend shows signs of weakening:

### Structural Signs:

| Sign | Description | Significance |
|------|-------------|-------------|
| **Decreasing momentum** | Each impulse move gets smaller | Trend losing power |
| **Equal highs/lows** | Price fails to make new extremes | Buyers/sellers weakening |
| **Increasing wicks** | Long rejection wicks at extremes | Strong opposition |
| **Volume divergence** | Price makes new high/low, volume decreasing | No conviction |
| **Time exhaustion** | Trend has been going too long without correction | Overextended |

### Candlestick Exhaustion Signals:

| Pattern | Location | Meaning |
|---------|----------|---------|
| **Pin Bar / Hammer** | At resistance (bearish) or support (bullish) | Strong rejection |
| **Engulfing** | After extended trend | Momentum shift |
| **Doji / Spinning Top** | At extremes | Indecision, possible turn |
| **Evening/Morning Star** | At swing high/low | Classic reversal |
| **Three inside down/up** | After impulse | Confirmed reversal |

---

## Structural Reversals (CHOCH)

The most reliable reversal signal in Price Action is a **Change of Character (CHOCH)** — when price breaks the most recent structural point against the trend.

### Bearish CHOCH (Uptrend Reversal):
\`\`\`
Uptrend:
HH → HH → HH → HH
HL → HL → HL → HL

Then price breaks below the last HL:
HH → HH → FAIL (lower high forms)
HL → HL → HL BROKEN = CHOCH ✓

This is the FIRST signal the uptrend may be ending.
Entry: Short after CHOCH confirmation
Stop: Above the last HH
Target: Previous swing low or demand zone
\`\`\`

### Bullish CHOCH (Downtrend Reversal):
\`\`\`
Downtrend:
LL → LL → LL → LL
LH → LH → LH → LH

Then price breaks above the last LH:
LL → LL → FAIL (higher low forms)
LH → LH → LH BROKEN = CHOCH ✓

Entry: Long after CHOCH confirmation
Stop: Below the last LL
Target: Previous swing high or supply zone
\`\`\`

---

## Key Level Reversals

Price is most likely to reverse at **significant price levels**:

### Where Reversals Happen:
1. **Major support/resistance** — Daily/Weekly horizontal levels
2. **Order Blocks** — Institutional supply/demand zones
3. **Fibonacci Golden Pocket** — 61.8%-78.6% retracement
4. **Equal Highs/Lows** — Liquidity pools that get swept
5. **Previous day/week high/low** — Institutional reference points
6. **Round numbers** — Psychological levels (1.1000, 50,000)

### High-Probability Reversal Setup:
\`\`\`
Confluence checklist:
□ Price at major S/R level (D1/W1)
□ Trend showing exhaustion signs
□ Liquidity sweep occurred (stop hunt)
□ Reversal candlestick pattern formed
□ Structure shift (CHOCH) on lower timeframe
□ Multiple timeframe alignment

Score: 4+ out of 6 = HIGH probability reversal
\`\`\`

---

## Reversal Entry Models

### Model 1: Sweep + CHOCH Entry
\`\`\`
1. Price sweeps a key high/low (takes liquidity)
2. Immediately reverses with strong candle
3. Lower timeframe shows CHOCH
4. Enter on pullback to the CHOCH level
5. Stop: Beyond the liquidity sweep
6. Target: Opposite liquidity pool

This is the HIGHEST probability reversal entry.
\`\`\`

### Model 2: Double/Triple Top/Bottom
\`\`\`
1. Price tests the same level 2-3 times
2. Each test shows weaker momentum
3. RSI divergence visible (optional confirmation)
4. Structure break on the downside/upside
5. Enter on the break or retest
6. Stop: Above/below the tested level
\`\`\`

### Model 3: Key Level Rejection
\`\`\`
1. Price approaches major weekly/daily level
2. Strong rejection candle forms (pin bar, engulfing)
3. Next candle confirms direction
4. Enter on break of rejection candle
5. Stop: Beyond the wick
6. Target: Next key level in reversal direction
\`\`\`

---

## Reversal vs. Continuation — How to Tell

| Factor | Likely Reversal | Likely Continuation |
|--------|----------------|--------------------| 
| Trend duration | Extended (20+ candles without correction) | Fresh (just started) |
| Location | At major S/R level | In open space |
| Candle type | Rejection wicks, engulfing | Small body continuation |
| Volume | Diverging from price | Confirming price |
| Structure | CHOCH forming | BOS continuing |
| Higher TF | Counter to HTF trend | Aligned with HTF trend |

---

## Common Reversal Mistakes

| Mistake | Why It Fails | Solution |
|---------|-------------|----------|
| Trading every bounce as reversal | Most bounces are pullbacks | Wait for CHOCH confirmation |
| No higher-timeframe context | Counter-trend = low probability | Check HTF direction first |
| Entering too early | Trend hasn't actually reversed | Wait for structure break |
| Stop too tight | Normal pullback hits stop | Place stop beyond structure |
| Ignoring the trend | "It's gone too far" isn't a signal | Trends can extend indefinitely |

<Callout type="info" title="Golden Rule">
Never trade a reversal unless you have AT LEAST 3 confluences and a structural shift. The trend is your friend — only fight it when the evidence is overwhelming.
</Callout>

---

## Related Topics

- [Market Structure](/en/price-action/market-structure) — Understanding BOS and CHOCH
- [Liquidity](/en/price-action/liquidity) — Sweeps before reversals
- [Candlestick Psychology](/en/price-action/candlestick-psychology) — Reversal patterns
- [Support & Resistance](/en/price-action/support-resistance) — Key reversal levels
- [Confluence](/en/price-action/confluence) — Multiple confirmation
`,
);

// ============================
// 1. REVERSAL CONCEPTS — BN
// ============================
writeMdx(
  "bn",
  "price-action",
  "reversal-concepts",
  {
    title: "Price Action Reversal Concept — সম্পূর্ণ গাইড",
    description:
      "Price Action দিয়ে Reversal Trading আয়ত্ত করুন। Trend Exhaustion চিহ্নিতকরণ, Reversal Candlestick Pattern, Structure Shift (CHOCH) এবং High-probability Reversal Setup শিখুন।",
    level: "intermediate",
    order: 14,
  },
  `
## Price Action Reversal কী?

Reversal ঘটে যখন **বিদ্যমান Trend দিক পরিবর্তন করে**। Price Action Trader Exhaustion Signal, Key Level Rejection এবং Structural Change-এর মাধ্যমে Reversal চিহ্নিত করেন — কোনো Indicator ছাড়াই। Reversal Trading বেশি ঝুঁকিপূর্ণ কিন্তু সঠিকভাবে চিহ্নিত হলে অসাধারণ Reward দেয়।

<Callout type="warning" title="Reversal vs. Pullback">
Trader-দের সবচেয়ে বড় ভুল হলো Pullback-কে Reversal-এর সাথে গুলিয়ে ফেলা। Pullback হলো Trend-এর মধ্যে সাময়িক বিরতি — Price চলতে থাকবে। Reversal হলো প্রকৃত দিক পরিবর্তন। Reversal Trade করার আগে সবসময় CONFIRMATION অপেক্ষা করুন।
</Callout>

---

## Trend Exhaustion-এর লক্ষণ

Reversal ঘটার আগে Trend দুর্বল হওয়ার লক্ষণ দেখায়:

### Structural লক্ষণ:

| লক্ষণ | বর্ণনা | তাৎপর্য |
|--------|--------|---------|
| **Decreasing Momentum** | প্রতিটি Impulse Move ছোট হচ্ছে | Trend শক্তি হারাচ্ছে |
| **Equal High/Low** | Price নতুন Extreme করতে ব্যর্থ | Buyer/Seller দুর্বল |
| **বাড়তি Wick** | Extreme-এ লম্বা Rejection Wick | শক্তিশালী বিরোধিতা |
| **Volume Divergence** | Price নতুন High/Low করে, Volume কমছে | Conviction নেই |
| **Time Exhaustion** | Correction ছাড়া Trend অনেকক্ষণ ধরে চলছে | Overextended |

### Candlestick Exhaustion Signal:

| Pattern | অবস্থান | অর্থ |
|---------|---------|------|
| **Pin Bar / Hammer** | Resistance-এ (Bearish) বা Support-এ (Bullish) | শক্তিশালী Rejection |
| **Engulfing** | বিস্তৃত Trend-এর পর | Momentum Shift |
| **Doji / Spinning Top** | Extreme-এ | Indecision, সম্ভাব্য Turn |
| **Evening/Morning Star** | Swing High/Low-এ | Classic Reversal |

---

## Structural Reversal (CHOCH)

Price Action-এ সবচেয়ে নির্ভরযোগ্য Reversal Signal হলো **Change of Character (CHOCH)** — যখন Price Trend-এর বিরুদ্ধে সাম্প্রতিক Structural Point ভাঙে।

### Bearish CHOCH (Uptrend Reversal):
\`\`\`
Uptrend:
HH → HH → HH → HH
HL → HL → HL → HL

তারপর Price শেষ HL-এর নিচে ভাঙে:
HH → HH → FAIL (Lower High তৈরি)
HL → HL → HL BROKEN = CHOCH ✓

এটি Uptrend শেষ হতে পারে এর প্রথম SIGNAL।
Entry: CHOCH Confirmation-এর পর Short
Stop: শেষ HH-এর উপরে
Target: পূর্ববর্তী Swing Low বা Demand Zone
\`\`\`

### Bullish CHOCH (Downtrend Reversal):
\`\`\`
Downtrend:
LL → LL → LL → LL
LH → LH → LH → LH

তারপর Price শেষ LH-এর উপরে ভাঙে:
LL → LL → FAIL (Higher Low তৈরি)
LH → LH → LH BROKEN = CHOCH ✓

Entry: CHOCH Confirmation-এর পর Long
Stop: শেষ LL-এর নিচে
Target: পূর্ববর্তী Swing High বা Supply Zone
\`\`\`

---

## Key Level Reversal

Price **তাৎপর্যপূর্ণ Price Level**-এ Reverse করার সম্ভাবনা সবচেয়ে বেশি:

### যেখানে Reversal ঘটে:
1. **Major Support/Resistance** — Daily/Weekly Horizontal Level
2. **Order Block** — Institutional Supply/Demand Zone
3. **Fibonacci Golden Pocket** — 61.8%-78.6% Retracement
4. **Equal High/Low** — Liquidity Pool যা Sweep হয়
5. **Previous Day/Week High/Low** — Institutional Reference Point
6. **Round Number** — Psychological Level (1.1000, 50,000)

### High-Probability Reversal Setup:
\`\`\`
Confluence Checklist:
□ Price প্রধান S/R Level-এ (D1/W1)
□ Trend Exhaustion-এর লক্ষণ দেখাচ্ছে
□ Liquidity Sweep ঘটেছে (Stop Hunt)
□ Reversal Candlestick Pattern তৈরি হয়েছে
□ Lower Timeframe-এ Structure Shift (CHOCH)
□ Multiple Timeframe Alignment

Score: ৬-এর মধ্যে ৪+ = HIGH Probability Reversal
\`\`\`

---

## Reversal Entry Model

### Model ১: Sweep + CHOCH Entry
\`\`\`
1. Price একটি Key High/Low Sweep করে (Liquidity নেয়)
2. তাৎক্ষণিক শক্তিশালী Candle দিয়ে Reverse
3. Lower Timeframe-এ CHOCH দেখায়
4. CHOCH Level-এ Pullback-এ Enter
5. Stop: Liquidity Sweep-এর বাইরে
6. Target: বিপরীত Liquidity Pool

এটি সর্বোচ্চ Probability Reversal Entry।
\`\`\`

### Model ২: Double/Triple Top/Bottom
\`\`\`
1. Price একই Level ২-৩ বার Test করে
2. প্রতিটি Test দুর্বল Momentum দেখায়
3. RSI Divergence দৃশ্যমান (ঐচ্ছিক Confirmation)
4. নিচে/উপরে Structure Break
5. Break বা Retest-এ Enter
6. Stop: Tested Level-এর উপরে/নিচে
\`\`\`

---

## Reversal vs. Continuation — কীভাবে বুঝবেন

| বিষয় | সম্ভবত Reversal | সম্ভবত Continuation |
|--------|----------------|--------------------| 
| Trend সময়কাল | বিস্তৃত (Correction ছাড়া ২০+ Candle) | নতুন (সবে শুরু) |
| অবস্থান | Major S/R Level-এ | Open Space-এ |
| Candle Type | Rejection Wick, Engulfing | Small Body Continuation |
| Volume | Price থেকে Diverging | Price Confirm করছে |
| Structure | CHOCH তৈরি হচ্ছে | BOS চলছে |
| Higher TF | HTF Trend-এর বিপরীত | HTF Trend-এর সাথে মিল |

---

## সাধারণ Reversal ভুল

| ভুল | কেন ব্যর্থ | সমাধান |
|------|-----------|--------|
| প্রতিটি Bounce-কে Reversal হিসেবে Trade | বেশিরভাগ Bounce Pullback | CHOCH Confirmation অপেক্ষা |
| Higher-timeframe Context নেই | Counter-trend = কম Probability | আগে HTF Direction Check |
| খুব তাড়াতাড়ি Enter | Trend আসলে Reverse হয়নি | Structure Break অপেক্ষা |
| Stop খুব Tight | স্বাভাবিক Pullback Stop Hit করে | Structure-এর বাইরে Stop রাখুন |
| Trend উপেক্ষা | "অনেক দূর গেছে" Signal নয় | Trend অনির্দিষ্টকাল চলতে পারে |

<Callout type="info" title="সোনালী নিয়ম">
কখনো Reversal Trade করবেন না যদি আপনার কাছে কমপক্ষে ৩টি Confluence ও একটি Structural Shift না থাকে। Trend আপনার বন্ধু — শুধুমাত্র তখনই এর বিরুদ্ধে লড়ুন যখন প্রমাণ অপ্রতিরোধ্য।
</Callout>

---

## সম্পর্কিত বিষয়

- [Market Structure](/bn/price-action/market-structure) — BOS ও CHOCH বোঝা
- [Liquidity](/bn/price-action/liquidity) — Reversal-এর আগে Sweep
- [Candlestick Psychology](/bn/price-action/candlestick-psychology) — Reversal Pattern
- [Support ও Resistance](/bn/price-action/support-resistance) — মূল Reversal Level
- [Confluence](/bn/price-action/confluence) — একাধিক Confirmation
`,
);

// ============================
// 2. LIQUIDITY — EN
// ============================
writeMdx(
  "en",
  "price-action",
  "liquidity",
  {
    title: "Liquidity in Price Action — Complete Guide",
    description:
      "Master the concept of liquidity in Price Action trading. Learn how smart money targets liquidity pools, stop hunts, liquidity sweeps, and how to trade with institutional order flow.",
    level: "intermediate",
    order: 15,
  },
  `
## What is Liquidity?

In Price Action trading, liquidity refers to **clusters of pending orders** (stop losses, limit orders) sitting at predictable price levels. Smart money (institutions) targets these pools to fill their large orders. Understanding liquidity is the key to understanding WHY price moves to certain levels before reversing.

<Callout type="info" title="The Secret of Smart Money">
Institutions need liquidity to enter and exit large positions. They can't just buy 500 lots at market — they need someone to sell to them. Stop losses of retail traders provide that liquidity. This is why price often "hunts" obvious levels before moving.
</Callout>

---

## Types of Liquidity

### Buy-Side Liquidity (BSL)
Resting orders **above** swing highs, equal highs, and resistance levels:
- Stop losses of SHORT positions
- Buy stop orders (breakout traders)
- Provides fuel for institutions to SELL into

### Sell-Side Liquidity (SSL)
Resting orders **below** swing lows, equal lows, and support levels:
- Stop losses of LONG positions
- Sell stop orders (breakdown traders)
- Provides fuel for institutions to BUY into

### Visual:
\`\`\`
         BSL (Buy-Side Liquidity)
─────────── Equal Highs / Swing Highs ───────────
         ↑ Stop losses of shorts sit here
         ↑ Buy stops of breakout traders

    PRICE ACTION HAPPENS HERE
    (Fair Value / Trading Range)

         ↓ Stop losses of longs sit here
         ↓ Sell stops of breakdown traders
─────────── Equal Lows / Swing Lows ───────────
         SSL (Sell-Side Liquidity)
\`\`\`

---

## Where Liquidity Pools Form

| Location | Type | Why Retail Places Orders Here |
|----------|------|------------------------------|
| **Swing Highs** | BSL | "Obvious resistance" — shorts place SL above |
| **Swing Lows** | SSL | "Obvious support" — longs place SL below |
| **Equal Highs** | BSL | Double/triple top — massive stops above |
| **Equal Lows** | SSL | Double/triple bottom — massive stops below |
| **Trendline touches** | Both | Traders using trendlines place tight stops |
| **Round numbers** | Both | Psychological levels attract orders |
| **Previous day/week H/L** | Both | Institutional reference points |

---

## Liquidity Sweeps (Stop Hunts)

A liquidity sweep occurs when price **temporarily pierces** a key level to trigger resting orders, then reverses. This is how institutions fill their positions.

### Anatomy of a Sweep:
\`\`\`
1. Equal lows form at 1.1000 (obvious support)
2. Retail traders place buy limits at 1.1000, SL below at 1.0990
3. Thousands of sell stops accumulate below 1.0990
4. Smart money pushes price below 1.0990 (triggers sell stops)
5. Smart money BUYS the sell stops (fills their long position)
6. Price immediately reverses back above 1.1000
7. Retail traders got stopped out; institutions got filled

THIS is the "stop hunt" — it's not manipulation,
it's institutions needing liquidity to fill large orders.
\`\`\`

---

## Trading Liquidity Sweeps

### Setup: Sweep and Reverse
\`\`\`
Entry Criteria:
1. Identify obvious liquidity pool (equal highs/lows, swing points)
2. Wait for price to sweep beyond the level (wick/spike)
3. Look for immediate rejection (strong close back inside)
4. Enter on the reversal with stop beyond the sweep

Long Example:
- Equal lows at 1.1000
- Price drops to 1.0985 (sweeps the liquidity)
- Strong bullish candle closes above 1.1000
- Enter long at 1.1005
- Stop: Below 1.0980 (beyond the sweep)
- Target: Next BSL above (buy-side liquidity)
\`\`\`

### Sweep + Order Block Entry:
\`\`\`
1. Price sweeps liquidity below equal lows
2. Fills into a bullish Order Block just below the sweep
3. Strong rejection candle from the OB
4. Enter long with stop below OB
5. Target: Opposite liquidity (BSL above)

This is the HIGHEST confidence setup in ICT/SMC methodology.
\`\`\`

---

## Liquidity Concepts in Practice

### Internal vs. External Liquidity:

| Type | Definition | Trading Approach |
|------|-----------|-----------------|
| **External** | Above/below major swing points (target) | Where price is GOING |
| **Internal** | Fair Value Gaps, Order Blocks within range | Where price enters FROM |

### The Liquidity Cycle:
\`\`\`
Price seeks liquidity in a predictable cycle:

1. Takes Buy-Side Liquidity (sweeps highs)
2. Reverses toward Sell-Side Liquidity
3. Takes Sell-Side Liquidity (sweeps lows)
4. Reverses toward Buy-Side Liquidity
5. Repeat

Understanding this cycle tells you WHERE price is going next.
\`\`\`

---

## Identifying High-Probability Liquidity Levels

### Strongest Liquidity Pools:
1. **Equal highs/lows** — The more touches, the more stops accumulate
2. **Obvious trendline levels** — Retail traders cluster stops below/above
3. **Previous session high/low** — Institutional reference points
4. **Weekly high/low** — Major liquidity targets
5. **Unswept swing points** — Price will likely return to sweep them

### Weak Liquidity (Avoid):
- Already swept levels (liquidity already taken)
- Insignificant single touches
- Very old levels (orders may have expired)

---

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Trading the initial break as breakout | Wait for sweep + rejection to confirm it's a hunt |
| Not identifying where liquidity sits | Mark equal H/L, swing points on every chart |
| Fighting the sweep direction | The sweep IS the opportunity — trade the reversal |
| Ignoring higher-timeframe liquidity | D1/W1 liquidity overrules M15 liquidity |
| Entering before the sweep completes | Wait for candle close confirmation |

---

## Related Topics

- [Market Structure](/en/price-action/market-structure) — Structure context for sweeps
- [Fakeouts](/en/price-action/fakeouts) — Fakeouts are liquidity sweeps
- [Reversal Concepts](/en/price-action/reversal-concepts) — Reversals after sweeps
- [Support & Resistance](/en/price-action/support-resistance) — Where liquidity sits
- [Entry Models](/en/price-action/entry-models) — Sweep-based entries
`,
);

// ============================
// 2. LIQUIDITY — BN
// ============================
writeMdx(
  "bn",
  "price-action",
  "liquidity",
  {
    title: "Price Action-এ Liquidity — সম্পূর্ণ গাইড",
    description:
      "Price Action Trading-এ Liquidity Concept আয়ত্ত করুন। Smart Money কীভাবে Liquidity Pool Target করে, Stop Hunt, Liquidity Sweep এবং Institutional Order Flow-এর সাথে Trade করা শিখুন।",
    level: "intermediate",
    order: 15,
  },
  `
## Liquidity কী?

Price Action Trading-এ Liquidity বলতে বোঝায় পূর্বানুমানযোগ্য Price Level-এ বসে থাকা **Pending Order-এর Cluster** (Stop Loss, Limit Order)। Smart Money (Institution) তাদের বড় Order Fill করতে এই Pool-গুলো Target করে। Liquidity বোঝা হলো Price কেন নির্দিষ্ট Level-এ যায় এবং তারপর Reverse করে — তা বোঝার চাবিকাঠি।

<Callout type="info" title="Smart Money-র রহস্য">
Institution-দের বড় Position-এ Entry ও Exit করতে Liquidity প্রয়োজন। তারা সহজে Market-এ ৫০০ Lot কিনতে পারে না — তাদের কারো কাছ থেকে কেনা দরকার। Retail Trader-দের Stop Loss সেই Liquidity সরবরাহ করে। এজন্যই Price প্রায়ই সুস্পষ্ট Level "Hunt" করে তারপর Move করে।
</Callout>

---

## Liquidity-র প্রকারভেদ

### Buy-Side Liquidity (BSL)
Swing High, Equal High ও Resistance Level-এর **উপরে** বসে থাকা Order:
- SHORT Position-এর Stop Loss
- Breakout Trader-দের Buy Stop Order
- Institution-দের SELL করার জন্য জ্বালানি সরবরাহ করে

### Sell-Side Liquidity (SSL)
Swing Low, Equal Low ও Support Level-এর **নিচে** বসে থাকা Order:
- LONG Position-এর Stop Loss
- Breakdown Trader-দের Sell Stop Order
- Institution-দের BUY করার জন্য জ্বালানি সরবরাহ করে

### দৃশ্যমান:
\`\`\`
         BSL (Buy-Side Liquidity)
─────────── Equal High / Swing High ───────────
         ↑ Short-দের Stop Loss এখানে বসে
         ↑ Breakout Trader-দের Buy Stop

    PRICE ACTION এখানে ঘটে
    (Fair Value / Trading Range)

         ↓ Long-দের Stop Loss এখানে বসে
         ↓ Breakdown Trader-দের Sell Stop
─────────── Equal Low / Swing Low ───────────
         SSL (Sell-Side Liquidity)
\`\`\`

---

## যেখানে Liquidity Pool তৈরি হয়

| অবস্থান | ধরন | কেন Retail এখানে Order রাখে |
|---------|------|------------------------------|
| **Swing High** | BSL | "সুস্পষ্ট Resistance" — Short-রা উপরে SL রাখে |
| **Swing Low** | SSL | "সুস্পষ্ট Support" — Long-রা নিচে SL রাখে |
| **Equal High** | BSL | Double/Triple Top — বিপুল Stop উপরে |
| **Equal Low** | SSL | Double/Triple Bottom — বিপুল Stop নিচে |
| **Trendline Touch** | উভয় | Trendline ব্যবহারকারীরা Tight Stop রাখে |
| **Round Number** | উভয় | Psychological Level Order আকর্ষণ করে |
| **Previous Day/Week H/L** | উভয় | Institutional Reference Point |

---

## Liquidity Sweep (Stop Hunt)

Liquidity Sweep ঘটে যখন Price সাময়িকভাবে একটি Key Level **ভেদ করে** Resting Order Trigger করে, তারপর Reverse করে। এভাবে Institution তাদের Position Fill করে।

### Sweep-এর বিশ্লেষণ:
\`\`\`
1. 1.1000-এ Equal Low তৈরি হয় (সুস্পষ্ট Support)
2. Retail Trader 1.1000-এ Buy Limit রাখে, SL 1.0990-এর নিচে
3. 1.0990-এর নিচে হাজার হাজার Sell Stop জমা হয়
4. Smart Money Price-কে 1.0990-এর নিচে ঠেলে দেয় (Sell Stop Trigger)
5. Smart Money সেই Sell Stop কিনে নেয় (Long Position Fill)
6. Price তাৎক্ষণিক 1.1000-এর উপরে ফিরে আসে
7. Retail Trader Stop Out হলো; Institution Fill হলো

এটাই "Stop Hunt" — এটি Manipulation নয়,
Institution-দের বড় Order Fill করতে Liquidity প্রয়োজন।
\`\`\`

---

## Liquidity Sweep Trade করা

### Setup: Sweep and Reverse
\`\`\`
Entry Criteria:
1. সুস্পষ্ট Liquidity Pool চিহ্নিত করুন (Equal High/Low, Swing Point)
2. Price Level-এর বাইরে Sweep করার অপেক্ষা করুন (Wick/Spike)
3. তাৎক্ষণিক Rejection খুঁজুন (ভিতরে শক্তিশালী Close)
4. Sweep-এর বাইরে Stop দিয়ে Reversal-এ Enter

Long উদাহরণ:
- 1.1000-এ Equal Low
- Price 1.0985-এ নামে (Liquidity Sweep)
- শক্তিশালী Bullish Candle 1.1000-এর উপরে Close
- 1.1005-এ Long Enter
- Stop: 1.0980-এর নিচে (Sweep-এর বাইরে)
- Target: উপরের পরবর্তী BSL (Buy-side Liquidity)
\`\`\`

---

## Liquidity Cycle

\`\`\`
Price পূর্বানুমানযোগ্য Cycle-এ Liquidity খোঁজে:

1. Buy-Side Liquidity নেয় (High Sweep করে)
2. Sell-Side Liquidity-র দিকে Reverse করে
3. Sell-Side Liquidity নেয় (Low Sweep করে)
4. Buy-Side Liquidity-র দিকে Reverse করে
5. পুনরাবৃত্তি

এই Cycle বোঝা বলে দেয় Price পরবর্তীতে কোথায় যাচ্ছে।
\`\`\`

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| Initial Break-কে Breakout হিসেবে Trade | Sweep + Rejection দিয়ে Confirm করুন যে Hunt |
| Liquidity কোথায় বসে চিহ্নিত না করা | প্রতিটি Chart-এ Equal H/L, Swing Point Mark করুন |
| Sweep Direction-এর বিরুদ্ধে লড়াই | Sweep-ই সুযোগ — Reversal Trade করুন |
| Higher-timeframe Liquidity উপেক্ষা | D1/W1 Liquidity M15 Liquidity-কে Override করে |
| Sweep সম্পন্ন হওয়ার আগে Enter | Candle Close Confirmation অপেক্ষা করুন |

---

## সম্পর্কিত বিষয়

- [Market Structure](/bn/price-action/market-structure) — Sweep-এর জন্য Structure Context
- [Fakeouts](/bn/price-action/fakeouts) — Fakeout হলো Liquidity Sweep
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Sweep-এর পর Reversal
- [Support ও Resistance](/bn/price-action/support-resistance) — যেখানে Liquidity বসে
- [Entry Models](/bn/price-action/entry-models) — Sweep-based Entry
`,
);

// ============================
// 3. CONTINUATION — EN
// ============================
writeMdx(
  "en",
  "price-action",
  "continuation",
  {
    title: "Continuation Patterns in Price Action — Complete Guide",
    description:
      "Master Price Action continuation patterns. Learn flags, pennants, consolidation within trend, BOS confirmation, and how to enter continuation trades with precision.",
    level: "intermediate",
    order: 13,
  },
  `
## What Are Continuation Patterns?

Continuation patterns are **price structures that form within an existing trend** before price continues in the same direction. They represent temporary pauses (rest periods) where the market consolidates before the next impulse move.

<Callout type="info" title="Why Continuations Are Best">
Continuation trades are SAFER than reversal trades because you're trading WITH the trend. The market has already shown its direction — you're simply entering at a better price during a pause.
</Callout>

---

## Why Trends Pause

Trends don't move in straight lines. They pause because:
1. **Profit-taking** — Early traders locking gains
2. **Counter-trend traders** — Entering against the move
3. **Order absorption** — Large orders being filled gradually
4. **Time-based** — Waiting for session/news catalyst
5. **Rebalancing** — Price returning to fair value

---

## Types of Continuation Structures

### 1. Flag (Most Common)
\`\`\`
Strong impulse up (flagpole)
   │
   │  ╲ ╲ ╲  ← Slight downward channel (flag)
   │  ╱ ╱ ╱     3-10 candles, shallow
   │
   │  Breakout above flag = CONTINUATION
   │
   │  Target: Flagpole length from breakout
\`\`\`

**Rules:**
- Flag should retrace 23.6%-50% of the impulse
- Flag duration: shorter than impulse
- Volume decreases during flag, increases on break
- Deeper than 61.8% = likely NOT a flag (reversal risk)

### 2. Pennant
- Converging trendlines after impulse (triangle shape)
- Similar to flag but symmetrical
- Usually resolves in 5-15 candles
- Break in trend direction = continuation

### 3. Inside Bar Continuation
\`\`\`
Strong bullish candle
   │
   [Inside bar] ← Smaller candle within the range of prior
   │
   Break above inside bar high = continuation long
   Stop: Below inside bar low
\`\`\`

### 4. Order Block Pullback (ICT/SMC)
\`\`\`
1. Strong impulse creates BOS (Break of Structure)
2. Price pulls back to the last opposing candle (Order Block)
3. Price reacts from Order Block
4. Continuation in original direction
5. Target: Next liquidity or opposing OB
\`\`\`

---

## BOS as Continuation Confirmation

**Break of Structure (BOS)** confirms the trend is continuing:

### Bullish BOS:
- Price breaks above the most recent swing high
- Confirms higher high → trend intact
- After BOS, look for pullback entry

### Bearish BOS:
- Price breaks below the most recent swing low
- Confirms lower low → trend intact
- After BOS, look for pullback entry

---

## Continuation Entry Strategies

### Strategy 1: Flag Breakout
\`\`\`
1. Identify strong impulse move (clear flagpole)
2. Wait for consolidation (flag/pennant)
3. Enter on breakout of flag boundary
4. Stop: Below flag low (bullish) or above flag high (bearish)
5. Target: Measured move (flagpole distance)
6. R:R: Typically 1:2 to 1:3
\`\`\`

### Strategy 2: BOS + Pullback to OB
\`\`\`
1. BOS occurs (trend continuation confirmed)
2. Mark the Order Block (last opposing candle before BOS)
3. Wait for price to pull back to OB zone
4. Enter with confirmation candle at OB
5. Stop: Below OB (bullish) or above (bearish)
6. Target: Next swing high/low or liquidity
\`\`\`

### Strategy 3: FVG (Fair Value Gap) Retest
\`\`\`
1. Strong impulse creates an FVG (gap between candles)
2. Price returns to fill the FVG
3. Enter at FVG zone with trend
4. Stop: Beyond FVG
5. Target: Next liquidity target
\`\`\`

---

## Continuation vs. Reversal — How to Tell

| Factor | Continuation (Trade It) | Reversal (Avoid/Counter) |
|--------|------------------------|--------------------------|
| Trend age | Fresh trend (few swings) | Extended (many swings) |
| Pullback depth | 23.6%-61.8% | Beyond 78.6% |
| Pullback speed | Slow, corrective | Fast, impulsive |
| Volume | Decreasing in pullback | Increasing in pullback |
| Structure | HH/HL intact | CHOCH forming |
| HTF alignment | Same direction as HTF | Against HTF |

---

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Entering during the impulse (chasing) | Wait for the pause/pullback |
| Flag too deep (actually a reversal) | Max 61.8% retracement for continuation |
| No trend confirmation (BOS) | Only trade continuations after BOS |
| Entering before break confirmation | Wait for candle close beyond structure |
| Ignoring higher timeframe | Continuation must align with HTF trend |

---

## Related Topics

- [Pullbacks](/en/price-action/pullbacks) — Entering on retracements
- [Market Structure](/en/price-action/market-structure) — BOS confirmation
- [Trend Trading](/en/price-action/trend-trading) — Trading with the trend
- [Breakouts](/en/price-action/breakouts) — Flag/pennant breakouts
- [Entry Models](/en/price-action/entry-models) — Precise entry techniques
`,
);

// ============================
// 3. CONTINUATION — BN
// ============================
writeMdx(
  "bn",
  "price-action",
  "continuation",
  {
    title: "Price Action-এ Continuation Pattern — সম্পূর্ণ গাইড",
    description:
      "Price Action Continuation Pattern আয়ত্ত করুন। Flag, Pennant, Trend-এর মধ্যে Consolidation, BOS Confirmation এবং সুনির্দিষ্টভাবে Continuation Trade-এ Entry শিখুন।",
    level: "intermediate",
    order: 13,
  },
  `
## Continuation Pattern কী?

Continuation Pattern হলো **বিদ্যমান Trend-এর মধ্যে তৈরি হওয়া Price Structure** যার পর Price একই দিকে চলতে থাকে। এগুলো সাময়িক বিরতি (বিশ্রামের সময়) প্রতিনিধিত্ব করে যেখানে Market পরবর্তী Impulse Move-এর আগে Consolidate করে।

<Callout type="info" title="কেন Continuation সেরা">
Continuation Trade Reversal Trade-এর চেয়ে নিরাপদ কারণ আপনি Trend-এর সাথে Trade করছেন। Market ইতিমধ্যে তার Direction দেখিয়েছে — আপনি শুধু বিরতির সময় ভালো Price-এ Enter করছেন।
</Callout>

---

## Trend কেন থামে

Trend সরলরেখায় চলে না। থামে কারণ:
1. **Profit-taking** — প্রাথমিক Trader লাভ Lock করছে
2. **Counter-trend Trader** — Move-এর বিরুদ্ধে Enter করছে
3. **Order Absorption** — বড় Order ধীরে ধীরে Fill হচ্ছে
4. **সময়-ভিত্তিক** — Session/News Catalyst-এর অপেক্ষা
5. **Rebalancing** — Price Fair Value-তে ফিরছে

---

## Continuation Structure-এর ধরন

### ১. Flag (সবচেয়ে সাধারণ)
\`\`\`
শক্তিশালী Impulse Up (Flagpole)
   │
   │  ╲ ╲ ╲  ← সামান্য নিম্নমুখী Channel (Flag)
   │  ╱ ╱ ╱     ৩-১০ Candle, Shallow
   │
   │  Flag-এর উপরে Breakout = CONTINUATION
   │
   │  Target: Breakout থেকে Flagpole-এর দৈর্ঘ্য
\`\`\`

**নিয়ম:**
- Flag Impulse-এর 23.6%-50% Retrace করবে
- Flag Duration: Impulse-এর চেয়ে ছোট
- Flag-এ Volume কমে, Break-এ বাড়ে
- 61.8%-এর বেশি = সম্ভবত Flag নয় (Reversal Risk)

### ২. Inside Bar Continuation
\`\`\`
শক্তিশালী Bullish Candle
   │
   [Inside Bar] ← আগের Candle-এর Range-এর ভিতরে ছোট Candle
   │
   Inside Bar High-এর উপরে Break = Continuation Long
   Stop: Inside Bar Low-এর নিচে
\`\`\`

### ৩. Order Block Pullback (ICT/SMC)
\`\`\`
1. শক্তিশালী Impulse BOS (Break of Structure) তৈরি করে
2. Price শেষ Opposing Candle-এ (Order Block) Pull Back
3. Price Order Block থেকে React করে
4. মূল Direction-এ Continuation
5. Target: পরবর্তী Liquidity বা Opposing OB
\`\`\`

---

## Continuation Confirmation হিসেবে BOS

**Break of Structure (BOS)** Trend চলছে তা Confirm করে:

### Bullish BOS:
- Price সাম্প্রতিক Swing High-এর উপরে ভাঙে
- Higher High Confirm করে → Trend অক্ষত
- BOS-এর পর Pullback Entry খুঁজুন

### Bearish BOS:
- Price সাম্প্রতিক Swing Low-এর নিচে ভাঙে
- Lower Low Confirm করে → Trend অক্ষত
- BOS-এর পর Pullback Entry খুঁজুন

---

## Continuation Entry Strategy

### Strategy ১: Flag Breakout
\`\`\`
1. শক্তিশালী Impulse Move চিহ্নিত করুন (স্পষ্ট Flagpole)
2. Consolidation-এর জন্য অপেক্ষা (Flag/Pennant)
3. Flag Boundary-র Breakout-এ Enter
4. Stop: Flag Low-এর নিচে (Bullish) বা Flag High-এর উপরে (Bearish)
5. Target: Measured Move (Flagpole Distance)
6. R:R: সাধারণত 1:2 থেকে 1:3
\`\`\`

### Strategy ২: BOS + OB-তে Pullback
\`\`\`
1. BOS ঘটে (Trend Continuation Confirmed)
2. Order Block চিহ্নিত করুন (BOS-এর আগে শেষ Opposing Candle)
3. Price OB Zone-এ Pull Back করার অপেক্ষা
4. OB-তে Confirmation Candle দিয়ে Enter
5. Stop: OB-এর নিচে (Bullish) বা উপরে (Bearish)
6. Target: পরবর্তী Swing High/Low বা Liquidity
\`\`\`

---

## Continuation vs. Reversal — কীভাবে বুঝবেন

| বিষয় | Continuation (Trade করুন) | Reversal (এড়িয়ে চলুন) |
|--------|------------------------|--------------------------|
| Trend বয়স | নতুন Trend (কম Swing) | বিস্তৃত (অনেক Swing) |
| Pullback গভীরতা | 23.6%-61.8% | 78.6%-এর বেশি |
| Pullback গতি | ধীর, Corrective | দ্রুত, Impulsive |
| Volume | Pullback-এ কমছে | Pullback-এ বাড়ছে |
| Structure | HH/HL অক্ষত | CHOCH তৈরি হচ্ছে |
| HTF Alignment | HTF-এর সাথে একই Direction | HTF-এর বিরুদ্ধে |

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| Impulse-এর সময় Enter (Chase) | বিরতি/Pullback-এর জন্য অপেক্ষা |
| Flag খুব গভীর (আসলে Reversal) | Continuation-এ সর্বোচ্চ 61.8% Retracement |
| Trend Confirmation (BOS) নেই | শুধু BOS-এর পর Continuation Trade |
| Break Confirmation-এর আগে Enter | Structure-এর বাইরে Candle Close অপেক্ষা |
| Higher Timeframe উপেক্ষা | Continuation HTF Trend-এর সাথে মিলতে হবে |

---

## সম্পর্কিত বিষয়

- [Pullbacks](/bn/price-action/pullbacks) — Retracement-এ Entry
- [Market Structure](/bn/price-action/market-structure) — BOS Confirmation
- [Trend Trading](/bn/price-action/trend-trading) — Trend-এর সাথে Trading
- [Breakouts](/bn/price-action/breakouts) — Flag/Pennant Breakout
- [Entry Models](/bn/price-action/entry-models) — সুনির্দিষ্ট Entry Technique
`,
);

// ============================
// 4. COMPRESSION — EN
// ============================
writeMdx(
  "en",
  "price-action",
  "compression",
  {
    title: "Compression in Price Action — Complete Guide",
    description:
      "Master the concept of price compression. Learn how tightening ranges signal explosive moves, identify compression before breakouts, and trade compression setups.",
    level: "intermediate",
    order: 16,
  },
  `
## What is Compression?

Compression occurs when price makes **progressively smaller ranges** — lower highs pushing into support, or higher lows pushing into resistance. It represents building pressure that will eventually release in an explosive directional move.

<Callout type="info" title="Spring Analogy">
Think of compression like pressing a spring. The more you compress it, the more energy builds up. When it finally releases, the move is proportional to the compression duration. Longer compression = bigger breakout.
</Callout>

---

## How Compression Forms

### Bullish Compression (Into Resistance):
\`\`\`
Resistance ─────────────────────────────
              ╱  ╱  ╱  ╱  ╱  ← Higher Lows pushing UP
           ╱  ╱  ╱  ╱  ╱
        ╱  ╱  ╱  ╱
     ╱  ╱  ╱

Buyers getting more aggressive (higher lows)
while sellers hold at resistance.

Eventually: EXPLOSIVE BREAKOUT ABOVE
\`\`\`

### Bearish Compression (Into Support):
\`\`\`
     ╲  ╲  ╲
        ╲  ╲  ╲  ╲
           ╲  ╲  ╲  ╲  ╲
              ╲  ╲  ╲  ╲  ╲  ← Lower Highs pushing DOWN
Support ─────────────────────────────

Sellers getting more aggressive (lower highs)
while buyers hold at support.

Eventually: EXPLOSIVE BREAKDOWN BELOW
\`\`\`

---

## Why Compression is Powerful

| Factor | Impact |
|--------|--------|
| **Energy builds** | Longer compression = stronger breakout |
| **Clear levels** | Support/resistance well-defined |
| **Trapped traders** | Both sides accumulate positions that unwind |
| **Low risk entry** | Tight stops possible at compression end |
| **Measurable targets** | Move proportional to compression range |

---

## Types of Compression

### 1. Ascending Triangle Compression
- Flat resistance + rising support (higher lows)
- Buyers increasingly aggressive
- Break above resistance = explosive move
- Target: Height of triangle from breakout

### 2. Descending Triangle Compression
- Flat support + falling resistance (lower highs)
- Sellers increasingly aggressive
- Break below support = explosive move
- Target: Height of triangle from breakout

### 3. Symmetrical Compression (Pennant/Wedge)
- Both converging → bilateral breakout potential
- Trade the break direction
- Often resolves in prior trend direction

### 4. Internal Compression (Within Range)
- Price compresses within a larger range
- Usually precedes range breakout
- Look for which side is being compressed INTO

---

## Trading Compression

### Entry Strategy:
\`\`\`
1. Identify compression forming (3+ higher lows into resistance
   OR 3+ lower highs into support)
2. Wait for the breakout candle (strong close beyond level)
3. Enter on:
   a) The breakout candle close (aggressive)
   b) Retest of broken level (conservative)
4. Stop: Beyond the last compression point
5. Target: At least 1:1 of compression range (often 2-3×)
\`\`\`

### Anticipating Direction:
- Higher lows into resistance → likely bullish break
- Lower highs into support → likely bearish break
- Which side is absorbing? That side will win

### False Break Warning:
- If breakout candle is weak (small body, long wick) → likely false
- If volume doesn't increase on break → caution
- Wait for strong close + follow-through candle

---

## Compression + Liquidity

Compression often forms **before a liquidity sweep**:
\`\`\`
1. Price compresses into equal lows (support)
2. Liquidity accumulates below equal lows
3. Price finally breaks below (sweeps liquidity)
4. Smart money fills on the sweep
5. EXPLOSIVE reversal back up through compression zone

Pro move: Wait for the sweep, THEN enter the reversal.
\`\`\`

---

## Identifying Quality Compression

### Strong Compression:
- 5+ touches on the flat level
- Clear higher lows (bullish) or lower highs (bearish)
- Duration: 10-50 candles (not too short, not too long)
- Volume declining during compression
- Located at significant HTF level

### Weak Compression (Avoid):
- Only 2-3 points
- Messy, no clear pattern
- Already compressed too long (exhaustion)
- Against higher-timeframe trend

---

## Related Topics

- [Breakouts](/en/price-action/breakouts) — Trading the break after compression
- [Expansion](/en/price-action/expansion) — What happens after compression
- [Support & Resistance](/en/price-action/support-resistance) — The levels that contain compression
- [Liquidity](/en/price-action/liquidity) — Sweeps at compression boundaries
- [Confluence](/en/price-action/confluence) — Multiple compression signals
`,
);

// ============================
// 4. COMPRESSION — BN
// ============================
writeMdx(
  "bn",
  "price-action",
  "compression",
  {
    title: "Price Action-এ Compression — সম্পূর্ণ গাইড",
    description:
      "Price Compression Concept আয়ত্ত করুন। Tightening Range কীভাবে Explosive Move-এর Signal দেয়, Breakout-এর আগে Compression চিহ্নিতকরণ এবং Compression Setup Trade করা শিখুন।",
    level: "intermediate",
    order: 16,
  },
  `
## Compression কী?

Compression ঘটে যখন Price **ক্রমাগত ছোট Range** তৈরি করে — Lower High Support-এর দিকে চাপ দেয়, বা Higher Low Resistance-এর দিকে চাপ দেয়। এটি ক্রমবর্ধমান চাপের প্রতিনিধিত্ব করে যা শেষ পর্যন্ত একটি Explosive Directional Move-এ মুক্ত হবে।

<Callout type="info" title="Spring-এর উপমা">
Compression-কে Spring চাপার মতো ভাবুন। যত বেশি চাপবেন, তত বেশি Energy জমা হয়। অবশেষে মুক্ত হলে, Move Compression-এর সময়কালের সমানুপাতিক হয়। দীর্ঘ Compression = বড় Breakout।
</Callout>

---

## Compression কীভাবে তৈরি হয়

### Bullish Compression (Resistance-এ):
\`\`\`
Resistance ─────────────────────────────
              ╱  ╱  ╱  ╱  ╱  ← Higher Low উপরে চাপ দিচ্ছে
           ╱  ╱  ╱  ╱  ╱
        ╱  ╱  ╱  ╱

Buyer আরো Aggressive হচ্ছে (Higher Low)
যেখানে Seller Resistance-এ ধরে আছে।

অবশেষে: উপরে EXPLOSIVE BREAKOUT
\`\`\`

### Bearish Compression (Support-এ):
\`\`\`
     ╲  ╲  ╲
        ╲  ╲  ╲  ╲
           ╲  ╲  ╲  ╲  ╲
              ╲  ╲  ╲  ╲  ╲  ← Lower High নিচে চাপ দিচ্ছে
Support ─────────────────────────────

Seller আরো Aggressive হচ্ছে (Lower High)
যেখানে Buyer Support-এ ধরে আছে।

অবশেষে: নিচে EXPLOSIVE BREAKDOWN
\`\`\`

---

## Compression কেন শক্তিশালী

| বিষয় | প্রভাব |
|--------|--------|
| **Energy জমা হয়** | দীর্ঘ Compression = শক্তিশালী Breakout |
| **স্পষ্ট Level** | Support/Resistance সুনির্ধারিত |
| **Trapped Trader** | উভয় পক্ষ Position জমা করে যা Unwind হয় |
| **কম Risk Entry** | Compression শেষে Tight Stop সম্ভব |
| **পরিমাপযোগ্য Target** | Move Compression Range-এর সমানুপাতিক |

---

## Compression-এর ধরন

### ১. Ascending Triangle Compression
- সমতল Resistance + ক্রমবর্ধমান Support (Higher Low)
- Buyer ক্রমাগত Aggressive
- Resistance-এর উপরে Break = Explosive Move
- Target: Breakout থেকে Triangle-এর উচ্চতা

### ২. Descending Triangle Compression
- সমতল Support + ক্রমহ্রাসমান Resistance (Lower High)
- Seller ক্রমাগত Aggressive
- Support-এর নিচে Break = Explosive Move

### ৩. Symmetrical Compression
- উভয় দিক Converge → Bilateral Breakout সম্ভব
- Break Direction-এ Trade করুন
- প্রায়ই পূর্ববর্তী Trend-এর দিকে Resolve হয়

---

## Compression Trade করা

### Entry Strategy:
\`\`\`
1. Compression তৈরি হচ্ছে চিহ্নিত করুন (Resistance-এ ৩+ Higher Low
   অথবা Support-এ ৩+ Lower High)
2. Breakout Candle-এর জন্য অপেক্ষা (Level-এর বাইরে শক্তিশালী Close)
3. Enter করুন:
   a) Breakout Candle Close-এ (Aggressive)
   b) ভাঙা Level-এর Retest-এ (Conservative)
4. Stop: শেষ Compression Point-এর বাইরে
5. Target: Compression Range-এর কমপক্ষে 1:1 (প্রায়ই 2-3×)
\`\`\`

### Direction Anticipate করা:
- Resistance-এ Higher Low → সম্ভবত Bullish Break
- Support-এ Lower High → সম্ভবত Bearish Break
- কোন দিক Absorb করছে? সেই দিক জিতবে

---

## Compression + Liquidity

Compression প্রায়ই **Liquidity Sweep-এর আগে** তৈরি হয়:
\`\`\`
1. Price Equal Low-তে (Support) Compress করে
2. Equal Low-এর নিচে Liquidity জমা হয়
3. Price অবশেষে নিচে ভাঙে (Liquidity Sweep)
4. Smart Money Sweep-এ Fill হয়
5. Compression Zone দিয়ে উপরে EXPLOSIVE Reversal

Pro Move: Sweep-এর জন্য অপেক্ষা করুন, তারপর Reversal-এ Enter।
\`\`\`

---

## মানসম্মত Compression চিহ্নিতকরণ

### শক্তিশালী Compression:
- সমতল Level-এ ৫+ Touch
- স্পষ্ট Higher Low (Bullish) বা Lower High (Bearish)
- Duration: ১০-৫০ Candle (খুব ছোট না, খুব লম্বা না)
- Compression-এ Volume কমছে
- তাৎপর্যপূর্ণ HTF Level-এ অবস্থিত

### দুর্বল Compression (এড়িয়ে চলুন):
- শুধু ২-৩ Point
- এলোমেলো, স্পষ্ট Pattern নেই
- ইতিমধ্যে অনেক দীন ধরে Compress (Exhaustion)
- Higher-timeframe Trend-এর বিরুদ্ধে

---

## সম্পর্কিত বিষয়

- [Breakouts](/bn/price-action/breakouts) — Compression-এর পর Break Trade
- [Expansion](/bn/price-action/expansion) — Compression-এর পর কী ঘটে
- [Support ও Resistance](/bn/price-action/support-resistance) — Compression ধারণকারী Level
- [Liquidity](/bn/price-action/liquidity) — Compression Boundary-তে Sweep
- [Confluence](/bn/price-action/confluence) — একাধিক Compression Signal
`,
);

console.log("\n✅ Price Action Batch 1 Complete: 4 topics × 2 languages = 8 files");
console.log("Topics: reversal-concepts, liquidity, continuation, compression");
