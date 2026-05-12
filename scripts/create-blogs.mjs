import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l,s,t) => { writeFileSync(join(C,l,'blog',s+'.mdx'), t, 'utf-8'); console.log(`✅ ${l}/blog/${s}`); };

// ============ BLOG 2: UNDERSTANDING ORDER BLOCKS ============
w('en','understanding-order-blocks',`---
title: "Understanding Order Blocks in SMC"
description: "A deep dive into how institutional order blocks form and how to identify high-probability entry zones using Smart Money Concepts."
date: "2026-04-28"
author: "Trading Docs"
category: "SMC"
tags: ["smc", "order-blocks", "institutional", "entry-zones"]
readingTime: 12
featured: true
---

## Why Order Blocks Changed My Trading

When I first started trading, I used traditional support and resistance. It worked sometimes, but my entries were imprecise and my stops kept getting hit. Then I discovered **Order Blocks** — and everything changed.

Order Blocks gave me **specific, well-defined zones** for entries instead of vague "areas." My stops became tighter, my R:R improved, and most importantly, I understood WHY price reacted at certain levels.

<Callout type="info" title="What You'll Learn">
In this article, I'll break down Order Blocks from scratch — what they are, why they form, how to identify them, and how to build a complete trading strategy around them.
</Callout>

---

## What is an Order Block?

An Order Block (OB) is the **last opposing candle before a significant price move** (displacement). It represents the zone where institutional traders placed their orders to initiate that move.

Think of it this way:
- Before a big bullish move, institutions need to BUY. The last red candle before that move = where they bought = **Bullish Order Block**
- Before a big bearish move, institutions need to SELL. The last green candle before that move = where they sold = **Bearish Order Block**

\`\`\`
Bullish Order Block:

         ↑ Strong bullish move (displacement)
         │
         │
    ████ │  ← This red candle = Bullish OB
    ████ │     (Institutions bought here)
         │
    Previous candles
\`\`\`

---

## Why Do Order Blocks Work?

The logic is rooted in **how institutions trade**:

1. **Large orders can't fill at once** — A bank wanting to buy $500 million of EUR/USD can't do it in one click without massive slippage
2. **Initial orders create the OB** — They place their first orders, creating the Order Block candle
3. **Price moves away** — Their initial buying pushes price up
4. **Unfilled orders remain** — Not all their orders got filled at the OB price
5. **Price returns** — Eventually, price pulls back to the OB zone where remaining orders wait
6. **Orders fill, price bounces** — The remaining institutional orders get filled, pushing price again

This is why price "respects" Order Blocks — it's not magic, it's **unfilled institutional orders**.

---

## How to Identify Valid Order Blocks

### Step 1: Look for Displacement

Displacement = **strong, impulsive candles** with big bodies and small wicks. This shows institutional aggression. Without displacement, there's no valid OB.

### Step 2: Find the Last Opposing Candle

Look at the candle(s) immediately before the displacement:
- Before bullish displacement → Last **bearish (red)** candle = Bullish OB
- Before bearish displacement → Last **bullish (green)** candle = Bearish OB

### Step 3: Check for FVG (Fair Value Gap)

The best Order Blocks are accompanied by an FVG — a 3-candle gap where the wicks don't overlap. This confirms true displacement:

\`\`\`
    Candle 3 low ────────
                         │ ← FVG (gap between wick 1 high and wick 3 low)
    Candle 1 high ───────
\`\`\`

### Step 4: Premium/Discount Context

An OB is only valid if it's in the correct zone:
- **Bullish OB** should be in **discount** (below 50% EQ) = BUY zone
- **Bearish OB** should be in **premium** (above 50% EQ) = SELL zone

---

## OB Trading Strategy: Step by Step

### The Complete Setup:

1. **Identify the trend** on 4H/Daily (HH/HL or LH/LL)
2. **Wait for BOS** (Break of Structure confirming trend)
3. **Mark the Order Block** that caused the BOS
4. **Check it's in P&D alignment** (discount for bullish, premium for bearish)
5. **Wait for price to retrace** to the OB zone
6. **Enter on a lower TF confirmation** (5M/15M CHOCH into the OB)
7. **Stop loss:** Beyond the OB zone (include a small buffer)
8. **Target:** Next liquidity pool or opposing POI

### Entry Refinement:

Instead of placing a limit order at the OB blindly, refine your entry:
1. Mark the OB zone on 4H/1H
2. When price approaches the OB, drop to 15M or 5M
3. Wait for a **lower TF CHOCH/MSS** confirming reaction at the OB
4. Enter at the lower TF OB after the CHOCH
5. This gives a MUCH tighter stop loss and better R:R

---

## Real Trade Examples

### Trade 1: EUR/USD Bullish OB (4H)

**Context:** 4H uptrend, price creating HH/HL
1. BOS occurs — price breaks above previous HH
2. The last red candle before BOS at 1.0835-1.0850 = **Bullish OB**
3. This OB is in discount (below EQ) ✓
4. Price retraces to OB zone
5. 15M shows bullish CHOCH at the OB zone
6. **Entry:** 1.0842 | **Stop:** 1.0822 (20 pips) | **Target:** 1.0920 (78 pips)
7. **Result:** Hit TP → **+78 pips, 3.9R**

### Trade 2: Gold Bearish OB (1H)

**Context:** 1H downtrend after BSL sweep at $2,450
1. Bearish MSS confirms shift
2. Last green candle before MSS at $2,438-$2,445 = **Bearish OB**
3. OB is in premium ✓
4. Price retraces to $2,440 (middle of OB)
5. 5M bearish CHOCH at the OB
6. **Entry:** $2,441 | **Stop:** $2,448 | **Target:** $2,405
7. **Result:** Hit TP → **+36 points, 5.1R**

---

## Order Block Invalidation Rules

An OB is **invalidated** when:
1. Price closes THROUGH the OB with a candle body (not just a wick)
2. The OB has been tested multiple times (1st touch = strongest)
3. Price approaches without any displacement/aggression

When an OB is invalidated:
- It may become a **Breaker Block** (flips to the opposite direction)
- Don't try to trade an invalidated OB in the original direction
- Look for new OBs formed by the invalidation move

---

## Common OB Mistakes

<Callout type="warning" title="Avoid These">

**❌ Every red candle before a green one is NOT an OB** — You need DISPLACEMENT (strong momentum). No displacement = no OB.

**❌ Trading OBs against the trend** — A bullish OB in a daily downtrend is low probability. Always align with HTF direction.

**❌ Trading the 3rd or 4th touch of an OB** — First touch is strongest. Each subsequent touch weakens it.

**❌ Entering blindly at the OB** — Use lower TF confirmation for better entries and tighter stops.

**❌ OB in the wrong zone** — Bullish OB in premium = bad. Bearish OB in discount = bad. Check P&D.

</Callout>

---

## Key Takeaways

| Aspect | Summary |
|--------|---------|
| **What** | Last opposing candle before displacement |
| **Why** | Unfilled institutional orders waiting |
| **Bullish OB** | Last red candle before strong up-move |
| **Bearish OB** | Last green candle before strong down-move |
| **Validation** | Displacement + FVG + P&D alignment |
| **Entry** | Wait for retest + lower TF CHOCH confirmation |
| **Invalidation** | Body close through the OB zone |

For a complete deep-dive, check the full [Order Blocks lesson](/en/smc/order-blocks) in our SMC curriculum.

Happy trading! 📊
`);

w('bn','understanding-order-blocks',`---
title: "SMC তে অর্ডার ব্লক বোঝা"
description: "ইনস্টিটিউশনাল অর্ডার ব্লক কীভাবে তৈরি হয় এবং Smart Money Concepts ব্যবহার করে হাই-প্রোবাবিলিটি এন্ট্রি জোন কীভাবে চিহ্নিত করবেন তার গভীর বিশ্লেষণ।"
date: "2026-04-28"
author: "Trading Docs"
category: "SMC"
tags: ["smc", "order-blocks", "institutional", "entry-zones"]
readingTime: 12
featured: true
---

## কেন অর্ডার ব্লক আমার ট্রেডিং বদলে দিয়েছে

যখন প্রথম ট্রেডিং শুরু করি, traditional সাপোর্ট-রেজিস্ট্যান্স ব্যবহার করতাম। কখনো কাজ করতো, কিন্তু এন্ট্রি অনির্দিষ্ট ছিল এবং স্টপ বারবার হিট হতো। তারপর **Order Block** আবিষ্কার করলাম — এবং সবকিছু বদলে গেল।

Order Block আমাকে অস্পষ্ট "এলাকা" এর বদলে **নির্দিষ্ট, সুনির্ধারিত জোন** দিয়েছে। স্টপ টাইট হয়েছে, R:R উন্নত হয়েছে, এবং সবচেয়ে গুরুত্বপূর্ণ — আমি বুঝেছি কেন প্রাইস নির্দিষ্ট লেভেলে রিঅ্যাক্ট করে।

---

## অর্ডার ব্লক কী?

অর্ডার ব্লক (OB) হলো **একটি গুরুত্বপূর্ণ প্রাইস মুভ (ডিসপ্লেসমেন্ট) এর আগে শেষ বিপরীত ক্যান্ডেল**। এটি সেই জোন যেখানে ইনস্টিটিউশনাল ট্রেডাররা মুভ শুরু করতে অর্ডার রেখেছিল।

- বড় বুলিশ মুভের আগে শেষ **লাল ক্যান্ডেল** = যেখানে তারা কিনেছে = **বুলিশ Order Block**
- বড় বিয়ারিশ মুভের আগে শেষ **সবুজ ক্যান্ডেল** = যেখানে তারা বিক্রি করেছে = **বিয়ারিশ Order Block**

---

## অর্ডার ব্লক কেন কাজ করে?

লজিক **ইনস্টিটিউশন কীভাবে ট্রেড করে** তার উপর ভিত্তি করে:

1. **বড় অর্ডার একবারে পূরণ হয় না** — ব্যাংক $500 মিলিয়ন EUR/USD কিনতে চাইলে একক্লিকে পারে না
2. **প্রাথমিক অর্ডার OB তৈরি করে** — তারা প্রথম অর্ডার রাখে
3. **প্রাইস সরে যায়** — তাদের কেনাকাটা প্রাইস উপরে ঠেলে দেয়
4. **অপূর্ণ অর্ডার থাকে** — সব অর্ডার OB দামে পূরণ হয়নি
5. **প্রাইস ফিরে আসে** — যেখানে বাকি অর্ডার অপেক্ষা করছে
6. **অর্ডার পূরণ হয়, প্রাইস বাউন্স** — বাকি ইনস্টিটিউশনাল অর্ডার পূরণ হয়

এজন্য প্রাইস Order Block "রেসপেক্ট" করে — এটা ম্যাজিক নয়, **অপূর্ণ ইনস্টিটিউশনাল অর্ডার**।

---

## ভ্যালিড অর্ডার ব্লক চিহ্নিতকরণ

### ধাপ ১: ডিসপ্লেসমেন্ট খুঁজুন
ডিসপ্লেসমেন্ট = বড় বডি, ছোট উইকের **শক্তিশালী, ইম্পালসিভ ক্যান্ডেল**। ডিসপ্লেসমেন্ট না থাকলে ভ্যালিড OB নেই।

### ধাপ ২: শেষ বিপরীত ক্যান্ডেল খুঁজুন
বুলিশ ডিসপ্লেসমেন্টের আগে → শেষ **লাল** ক্যান্ডেল = বুলিশ OB
বিয়ারিশ ডিসপ্লেসমেন্টের আগে → শেষ **সবুজ** ক্যান্ডেল = বিয়ারিশ OB

### ধাপ ৩: FVG চেক করুন
সেরা Order Block এর সাথে FVG থাকে — ৩-ক্যান্ডেল গ্যাপ যেখানে উইক ওভারল্যাপ করে না।

### ধাপ ৪: Premium/Discount কন্টেক্সট
- **বুলিশ OB** → **ডিসকাউন্টে** (50% EQ এর নিচে) থাকতে হবে
- **বিয়ারিশ OB** → **প্রিমিয়ামে** (50% EQ এর উপরে) থাকতে হবে

---

## OB ট্রেডিং কৌশল

1. 4H/Daily তে **ট্রেন্ড চিহ্নিত** করুন
2. **BOS** (Break of Structure) এর অপেক্ষা করুন
3. BOS সৃষ্টিকারী **Order Block মার্ক** করুন
4. **P&D অ্যালাইনমেন্ট** চেক করুন
5. প্রাইস OB জোনে **রিট্রেস** করার অপেক্ষা করুন
6. **লোয়ার TF কনফার্মেশন** (5M/15M CHOCH) দিয়ে এন্ট্রি
7. **স্টপ:** OB জোনের বাইরে | **টার্গেট:** পরবর্তী লিকুইডিটি পুল

---

## বাস্তব ট্রেড উদাহরণ

### ট্রেড ১: EUR/USD বুলিশ OB (4H)

1. 4H আপট্রেন্ড, BOS ঘটে
2. 1.0835-1.0850 তে শেষ লাল ক্যান্ডেল = **বুলিশ OB**
3. ডিসকাউন্টে ✓
4. প্রাইস OB তে রিট্রেস, 15M বুলিশ CHOCH
5. **এন্ট্রি:** 1.0842 | **স্টপ:** 1.0822 | **টার্গেট:** 1.0920
6. **ফলাফল: +78 পিপস, 3.9R**

### ট্রেড ২: গোল্ড বিয়ারিশ OB (1H)

1. $2,450 তে BSL সুইপের পরে 1H ডাউনট্রেন্ড
2. $2,438-$2,445 তে শেষ সবুজ ক্যান্ডেল = **বিয়ারিশ OB**
3. প্রিমিয়ামে ✓
4. **এন্ট্রি:** $2,441 | **স্টপ:** $2,448 | **টার্গেট:** $2,405
5. **ফলাফল: +36 পয়েন্ট, 5.1R**

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ প্রতিটি লাল ক্যান্ডেল OB নয়** — DISPLACEMENT দরকার। ডিসপ্লেসমেন্ট নেই = OB নেই।

**❌ ট্রেন্ডের বিরুদ্ধে OB ট্রেড** — ডেইলি ডাউনট্রেন্ডে বুলিশ OB লো প্রোবাবিলিটি।

**❌ ৩য় বা ৪র্থ টাচে OB ট্রেড** — প্রথম টাচ সবচেয়ে শক্তিশালী।

**❌ OB তে অন্ধভাবে এন্ট্রি** — ভালো এন্ট্রি ও টাইট স্টপের জন্য লোয়ার TF কনফার্মেশন ব্যবহার করুন।

</Callout>

---

বিস্তারিতের জন্য আমাদের SMC পাঠ্যক্রমে সম্পূর্ণ [অর্ডার ব্লক পাঠ](/bn/smc/order-blocks) দেখুন।
`);

// ============ BLOG 3: ICT KILL ZONES ============
w('en','ict-kill-zones-explained',`---
title: "ICT Kill Zones Explained — The Best Times to Trade"
description: "Master the key trading sessions and time-based setups used in the ICT methodology. Complete guide with Bangladesh time conversions."
date: "2026-04-25"
author: "Trading Docs"
category: "ICT"
tags: ["ict", "kill-zones", "sessions", "time-based"]
readingTime: 10
featured: false
---

## What Are ICT Kill Zones?

Kill Zones are **specific time windows** during the trading day when institutional activity is at its peak and the highest-probability setups form. ICT (Inner Circle Trader) methodology emphasizes that WHEN you trade is just as important as WHERE you trade.

Not all hours are created equal. During Kill Zones, the market-making algorithm is most active, creating the liquidity sweeps, displacement moves, and setups that ICT traders look for.

<Callout type="tip" title="The 80/20 Rule of Trading Time">
Roughly 80% of significant daily moves happen during Kill Zones, which represent only about 20% of the total trading day. By focusing on Kill Zones, you dramatically improve your odds.
</Callout>

---

## The Four Kill Zones

### 1. Asian Kill Zone
- **New York Time:** 8:00 PM - 12:00 AM
- **Bangladesh Time:** 6:00 AM - 12:00 PM (noon)
- **Purpose:** Accumulation — price builds a range
- **Strategy:** Mark the range (high and low), don't trade actively
- **Best For:** Setting up the next day's analysis

### 2. London Kill Zone
- **New York Time:** 2:00 AM - 5:00 AM
- **Bangladesh Time:** 12:00 PM (noon) - 5:00 PM
- **Purpose:** Manipulation — the Judas Swing happens here
- **Strategy:** Watch for the false breakout of the Asian range
- **Best For:** Catching the manipulation move

### 3. New York AM Kill Zone (MOST IMPORTANT)
- **New York Time:** 7:00 AM - 10:00 AM
- **Bangladesh Time:** 7:00 PM - 10:00 PM
- **Purpose:** Distribution — the TRUE daily move
- **Strategy:** Enter after London manipulation confirms with MSS
- **Best For:** The highest-probability setups of the day

### 4. New York PM Kill Zone
- **New York Time:** 1:30 PM - 4:00 PM
- **Bangladesh Time:** 11:30 PM - 4:00 AM
- **Purpose:** Continuation or reversal of the morning move
- **Strategy:** Look for exhaustion or continuation patterns
- **Best For:** Managing existing trades, secondary setups

---

## Kill Zone Summary for Bangladesh Traders

| Kill Zone | BD Time | Priority | What to Do |
|-----------|---------|----------|------------|
| **Asian** | 6:00 AM - 12:00 PM | Low | Mark the range, analyze |
| **London** | 12:00 PM - 5:00 PM | Medium | Watch for Judas Swing |
| **NY AM** | 7:00 PM - 10:00 PM | **HIGHEST** | Take your main trades |
| **NY PM** | 11:30 PM - 4:00 AM | Low-Medium | Manage trades, secondary |

<Callout type="info" title="For Bangladesh Traders">
The **NY AM Kill Zone (7:00-10:00 PM BD time)** is perfect for Bangladeshi traders — it falls in the evening when you can focus fully after work or studies. This is when the best setups form!
</Callout>

---

## How Kill Zones Fit into Power of 3

Kill Zones map directly to the Power of 3 (AMD) cycle:

1. **Asian Session** = **Accumulation** — Range forms, liquidity builds on both sides
2. **London Kill Zone** = **Manipulation** — Judas Swing sweeps one side of the Asian range
3. **NY Kill Zone** = **Distribution** — True move delivers price to the daily target

Understanding this connection transforms Kill Zones from "just time windows" into a **complete trading framework**.

---

## The NY AM Kill Zone Strategy

Since the NY AM session is the most important, here's a complete strategy:

### Pre-Session (6:30 PM BD):
1. Review your Daily/4H analysis
2. Determine your daily bias (bullish or bearish)
3. Mark the Asian range high and low
4. Note if London already swept one side

### During Kill Zone (7:00-10:00 PM BD):
1. Wait for the first 15-30 minutes to see the initial direction
2. If the initial move goes AGAINST your bias → this is likely manipulation
3. Watch for MSS/CHOCH confirming the reversal from manipulation
4. Enter at the OB or FVG created during the MSS
5. Stop: Beyond the manipulation extreme
6. Target: The opposing liquidity pool

### Post-Session (After 10:00 PM BD):
1. If your trade is active, manage it (trail stop to breakeven after 1R)
2. Don't enter new trades after the Kill Zone ends
3. Review the session and journal your observations

---

## Real Examples with BD Time

### Example: EUR/USD Bullish Day

- **6:00 AM - 12:00 PM BD (Asian):** EUR/USD ranges between 1.0880-1.0900
- **2:00 PM BD (London opens):** Price drops below 1.0880 to 1.0868 (Judas Swing — takes Asian low)
- **7:30 PM BD (NY opens):** MSS forms on 15M after the sweep. Bullish CHOCH confirmed.
- **7:45 PM BD:** Entry at 1.0872 (OB from the CHOCH)
- **Stop:** 1.0860 (12 pips below manipulation low)
- **Target:** 1.0930 (BSL above Asian high and previous day high)
- **9:30 PM BD:** Target hit — **+58 pips, 4.8R**

---

## Kill Zone Rules

<Callout type="warning" title="Critical Rules">

**Rule 1:** Only trade during Kill Zones. Random hour = random results.

**Rule 2:** NY AM (7-10 PM BD) is your PRIMARY Kill Zone. Focus 80% of effort here.

**Rule 3:** If the setup doesn't form within the Kill Zone window — DON'T TRADE. Wait for tomorrow.

**Rule 4:** Maximum 1-2 trades per Kill Zone. Quality over quantity.

**Rule 5:** ALWAYS determine your bias BEFORE the Kill Zone opens.

</Callout>

---

## Key Takeaways

- Kill Zones are specific time windows with peak institutional activity
- NY AM Kill Zone (7-10 PM BD time) is the most important
- Kill Zones map to Power of 3: Asian = Accumulation, London = Manipulation, NY = Distribution
- Focus your trading on Kill Zones to dramatically improve results

Full lesson: [ICT Kill Zones](/en/ict/ict-kill-zones)
`);

w('bn','ict-kill-zones-explained',`---
title: "ICT Kill Zones ব্যাখ্যা — ট্রেডের সেরা সময়"
description: "ICT মেথডলজিতে ব্যবহৃত মূল ট্রেডিং সেশন ও সময়-ভিত্তিক সেটআপ আয়ত্ত করুন। বাংলাদেশ সময় সহ সম্পূর্ণ গাইড।"
date: "2026-04-25"
author: "Trading Docs"
category: "ICT"
tags: ["ict", "kill-zones", "sessions", "time-based"]
readingTime: 10
featured: false
---

## ICT Kill Zones কী?

Kill Zones হলো ট্রেডিং দিনের **নির্দিষ্ট সময় উইন্ডো** যখন ইনস্টিটিউশনাল কার্যকলাপ সর্বোচ্চ থাকে এবং সর্বোচ্চ প্রোবাবিলিটি সেটআপ তৈরি হয়। ICT মেথডলজি জোর দেয় যে **কখন** ট্রেড করেন তা **কোথায়** ট্রেড করেন তার মতোই গুরুত্বপূর্ণ।

<Callout type="tip" title="ট্রেডিং সময়ের ৮০/২০ নিয়ম">
দৈনিক গুরুত্বপূর্ণ মুভের প্রায় ৮০% Kill Zone এ ঘটে, যা মোট ট্রেডিং দিনের প্রায় ২০%। Kill Zone এ ফোকাস করলে সম্ভাবনা নাটকীয়ভাবে বাড়ে।
</Callout>

---

## বাংলাদেশ ট্রেডারদের জন্য Kill Zone সারণী

| Kill Zone | BD সময় | অগ্রাধিকার | কী করবেন |
|-----------|---------|---------|---------|
| **এশিয়ান** | সকাল ৬:০০ - দুপুর ১২:০০ | কম | রেঞ্জ মার্ক, অ্যানালাইসিস |
| **লন্ডন** | দুপুর ১২:০০ - বিকেল ৫:০০ | মাঝারি | Judas Swing দেখুন |
| **NY AM** | রাত ৭:০০ - ১০:০০ | **সর্বোচ্চ** | মূল ট্রেড নিন |
| **NY PM** | রাত ১১:৩০ - ভোর ৪:০০ | কম-মাঝারি | ট্রেড ম্যানেজ |

<Callout type="info" title="বাংলাদেশ ট্রেডারদের জন্য সুখবর">
**NY AM Kill Zone (রাত ৭:০০-১০:০০ BD)** বাংলাদেশী ট্রেডারদের জন্য পারফেক্ট — এটি সন্ধ্যায় পড়ে যখন আপনি কাজ বা পড়াশোনার পর পূর্ণ মনোযোগ দিতে পারেন। এই সময়েই সেরা সেটআপ তৈরি হয়!
</Callout>

---

## Kill Zones কীভাবে Power of 3 এর সাথে মিলে

Kill Zones সরাসরি Power of 3 (AMD) সাইকেলে ম্যাপ করে:

1. **এশিয়ান সেশন** = **Accumulation** — রেঞ্জ তৈরি, দুই দিকে লিকুইডিটি জমা
2. **লন্ডন Kill Zone** = **Manipulation** — Judas Swing এশিয়ান রেঞ্জের এক দিক সুইপ করে
3. **NY Kill Zone** = **Distribution** — সত্যিকার মুভ প্রাইসকে দৈনিক টার্গেটে ডেলিভার করে

---

## NY AM Kill Zone কৌশল (বিস্তারিত)

### সেশনের আগে (সন্ধ্যা ৬:৩০ BD):
1. Daily/4H অ্যানালাইসিস রিভিউ করুন
2. ডেইলি বায়াস নির্ধারণ করুন (বুলিশ বা বিয়ারিশ)
3. এশিয়ান রেঞ্জ হাই ও লো মার্ক করুন

### Kill Zone চলাকালে (রাত ৭:০০-১০:০০ BD):
1. প্রথম ১৫-৩০ মিনিট প্রাথমিক দিক দেখুন
2. প্রাথমিক মুভ বায়াসের **বিরুদ্ধে** গেলে → সম্ভবত ম্যানিপুলেশন
3. ম্যানিপুলেশন থেকে রিভার্সাল কনফার্ম করে MSS/CHOCH দেখুন
4. MSS এর সময় তৈরি OB বা FVG তে এন্ট্রি
5. স্টপ: ম্যানিপুলেশন এক্সট্রিমের বাইরে | টার্গেট: বিপরীত লিকুইডিটি পুল

---

## বাস্তব উদাহরণ (BD সময়)

### EUR/USD বুলিশ দিন

- **সকাল ৬-দুপুর ১২ (এশিয়ান):** EUR/USD 1.0880-1.0900 রেঞ্জ
- **দুপুর ২:০০ (লন্ডন ওপেন):** 1.0868 পর্যন্ত ড্রপ (Judas Swing — এশিয়ান লো নিয়েছে)
- **রাত ৭:৩০ (NY ওপেন):** 15M এ MSS, বুলিশ CHOCH কনফার্মড
- **রাত ৭:৪৫:** এন্ট্রি 1.0872 (CHOCH থেকে OB)
- **স্টপ:** 1.0860 | **টার্গেট:** 1.0930
- **রাত ৯:৩০:** টার্গেট হিট — **+58 পিপস, 4.8R**

---

## Kill Zone নিয়ম

<Callout type="warning" title="গুরুত্বপূর্ণ নিয়ম">

**নিয়ম ১:** শুধু Kill Zone এ ট্রেড করুন। এলোমেলো সময় = এলোমেলো ফলাফল।

**নিয়ম ২:** NY AM (রাত ৭-১০ BD) আপনার প্রাথমিক Kill Zone। ৮০% প্রচেষ্টা এখানে।

**নিয়ম ৩:** Kill Zone উইন্ডোতে সেটআপ না হলে — ট্রেড করবেন না। আগামীকালের জন্য অপেক্ষা।

**নিয়ম ৪:** প্রতি Kill Zone এ সর্বোচ্চ ১-২টি ট্রেড। Quality > quantity।

</Callout>

---

সম্পূর্ণ পাঠ: [ICT Kill Zones](/bn/ict/ict-kill-zones)
`);

// ============ BLOG 4: RISK MANAGEMENT ============
w('en','risk-management-essentials',`---
title: "Risk Management Essentials for Traders"
description: "The complete guide to position sizing, stop loss placement, and protecting your trading capital. The #1 skill every trader needs."
date: "2026-04-20"
author: "Trading Docs"
category: "Academy"
tags: ["risk-management", "position-sizing", "stop-loss", "beginner"]
readingTime: 7
featured: false
---

## Risk Management is the Only Edge That Matters

I've seen traders with amazing strategies blow their accounts. I've also seen traders with mediocre strategies consistently grow their accounts. The difference? **Risk management.**

The uncomfortable truth is: **no strategy works 100% of the time.** Even the best ICT/SMC setups fail 30-40% of the time. Risk management is what allows you to survive those losses and still be profitable overall.

<Callout type="info" title="The Math of Survival">
If you risk 1% per trade, even 20 consecutive losses only costs you 18% of your account. You can recover. If you risk 10% per trade, just 7 consecutive losses wipes out 50% of your account. Recovery becomes nearly impossible.
</Callout>

---

## The 3 Rules You Must Follow

### Rule 1: Never Risk More Than 1-2% Per Trade

This is non-negotiable. Calculate your position size so that if your stop loss is hit, you lose maximum 1-2% of your account.

**Formula:**
\`\`\`
Position Size = (Account × Risk %) ÷ (Stop Loss pips × Pip Value)

Example: $5,000 account, 1% risk, 25-pip stop
= ($5,000 × 0.01) ÷ (25 × $10) = $50 ÷ $250 = 0.20 lots
\`\`\`

### Rule 2: Always Use a Stop Loss

No exceptions. Ever. A trade without a stop loss is not a trade — it's a gamble.

Place your stop loss based on **structure**, not emotions:
- Beyond the Order Block zone
- Beyond the swing high/low
- Beyond the liquidity sweep point

### Rule 3: Minimum 1:2 Risk-Reward Ratio

Your profit target should be at least 2x your stop loss. This means even winning only 40% of trades makes you profitable:

| Win Rate | R:R | Profitable? |
|----------|-----|-------------|
| 40% | 1:1 | ❌ No (losing money) |
| 40% | 1:2 | ✅ Yes (net positive) |
| 40% | 1:3 | ✅ Very profitable |
| 50% | 1:2 | ✅ Excellent |

---

## The Position Sizing Calculator You Need

Here's a quick reference for different account sizes (1% risk, standard USD pairs):

| Account | Stop Loss | Risk $ | Position Size |
|---------|-----------|--------|---------------|
| $1,000 | 20 pips | $10 | 0.05 lots |
| $5,000 | 25 pips | $50 | 0.20 lots |
| $10,000 | 30 pips | $100 | 0.33 lots |
| $25,000 | 20 pips | $250 | 1.25 lots |

<Callout type="warning" title="Adjust for Gold and Indices">
Gold (XAU/USD) and indices (NAS100) have different pip values. Gold: ~$1 per pip per 0.01 lot. NAS100: varies by broker. Always calculate based on YOUR broker's contract specifications.
</Callout>

---

## When to Reduce Risk

Reduce your position size (to 0.5% or less) when:
- You've hit your daily drawdown limit (3-5%)
- You're on a losing streak (3+ consecutive losses)
- Trading during high-impact news
- Trying a new strategy or market
- Emotionally compromised (angry, stressed, tired)

---

## The Account Recovery Problem

This is why over-risking is so dangerous:

| Loss | Recovery Needed |
|------|----------------|
| -10% | +11% to recover |
| -20% | +25% to recover |
| -30% | +43% to recover |
| -50% | +100% to recover |
| -75% | +300% to recover |

At 50% drawdown, you need to DOUBLE your remaining account to get back to where you started. At 1% risk per trade, this scenario is virtually impossible.

---

## My Risk Management Checklist

Before every trade, I verify:

- [ ] Position size calculated for 1% risk maximum
- [ ] Stop loss placed at a structural level (not arbitrary)
- [ ] R:R is at least 1:2 (preferably 1:3+)
- [ ] Not correlated with other open trades
- [ ] Total open risk doesn't exceed 3-5%
- [ ] Not trading right before high-impact news
- [ ] Emotionally stable — not revenge trading

If ANY box is unchecked, I don't take the trade. **No exceptions.**

---

## Key Takeaways

| Rule | Details |
|------|---------|
| **Risk Per Trade** | Maximum 1-2% |
| **Stop Loss** | Always present, structure-based |
| **R:R** | Minimum 1:2, target 1:3+ |
| **Daily Drawdown** | Stop at 3-5% |
| **Position Sizing** | Calculate EVERY time |
| **Correlation** | Max 2-3 uncorrelated positions |

Full lesson: [Risk Management](/en/academy/risk-management)
`);

w('bn','risk-management-essentials',`---
title: "ট্রেডারদের জন্য রিস্ক ম্যানেজমেন্ট অপরিহার্য"
description: "পজিশন সাইজিং, স্টপ লস প্লেসমেন্ট এবং ট্রেডিং ক্যাপিটাল রক্ষার সম্পূর্ণ গাইড। প্রতিটি ট্রেডারের #১ দক্ষতা।"
date: "2026-04-20"
author: "Trading Docs"
category: "একাডেমি"
tags: ["risk-management", "position-sizing", "stop-loss", "beginner"]
readingTime: 7
featured: false
---

## রিস্ক ম্যানেজমেন্টই একমাত্র এজ যা গুরুত্বপূর্ণ

আমি আশ্চর্যজনক কৌশল থাকা ট্রেডারদের অ্যাকাউন্ট উড়াতে দেখেছি। মাঝারি কৌশল থাকা ট্রেডারদেরও ধারাবাহিকভাবে অ্যাকাউন্ট বাড়াতে দেখেছি। পার্থক্য? **রিস্ক ম্যানেজমেন্ট।**

অস্বস্তিকর সত্য: **কোনো কৌশলই ১০০% কাজ করে না।** সেরা ICT/SMC সেটআপও ৩০-৪০% ব্যর্থ হয়। রিস্ক ম্যানেজমেন্ট সেই লস টিকে থেকেও সামগ্রিকভাবে লাভজনক হতে দেয়।

<Callout type="info" title="টিকে থাকার গণিত">
প্রতি ট্রেডে ১% রিস্কে, ২০টি ধারাবাহিক লসেও অ্যাকাউন্টের মাত্র ১৮% যায়। রিকভারি সম্ভব। প্রতি ট্রেডে ১০% রিস্কে, মাত্র ৭টি লসে ৫০% উড়ে যায়। রিকভারি প্রায় অসম্ভব।
</Callout>

---

## ৩টি অবশ্যপালনীয় নিয়ম

### নিয়ম ১: প্রতি ট্রেডে ১-২% এর বেশি রিস্ক নয়

\`\`\`
পজিশন সাইজ = (অ্যাকাউন্ট × রিস্ক%) ÷ (স্টপ পিপ × পিপ ভ্যালু)

উদাহরণ: $5,000 অ্যাকাউন্ট, ১% রিস্ক, ২৫ পিপ স্টপ
= ($5,000 × 0.01) ÷ (25 × $10) = 0.20 লট
\`\`\`

### নিয়ম ২: সর্বদা স্টপ লস ব্যবহার করুন
কোনো ব্যতিক্রম নেই। স্টপ লস ছাড়া ট্রেড = জুয়া।

### নিয়ম ৩: ন্যূনতম ১:২ রিস্ক-রিওয়ার্ড

| উইন রেট | R:R | লাভজনক? |
|---------|-----|---------|
| ৪০% | ১:১ | ❌ না |
| ৪০% | ১:২ | ✅ হ্যাঁ |
| ৪০% | ১:৩ | ✅ খুবই লাভজনক |

---

## অ্যাকাউন্ট রিকভারি সমস্যা

| লস | রিকভারিতে প্রয়োজন |
|-----|-------------------|
| -১০% | +১১% |
| -২০% | +২৫% |
| -৫০% | +১০০% |
| -৭৫% | +৩০০% |

৫০% ড্রডাউনে, শুরুতে ফিরতে বাকি অ্যাকাউন্ট **দ্বিগুণ** করতে হবে। ১% রিস্কে এই পরিস্থিতি কার্যত অসম্ভব।

---

## আমার রিস্ক ম্যানেজমেন্ট চেকলিস্ট

- [ ] ১% সর্বোচ্চ রিস্কে পজিশন সাইজ ক্যালকুলেট
- [ ] স্ট্রাকচারাল লেভেলে স্টপ লস
- [ ] ন্যূনতম ১:২ R:R
- [ ] অন্য ওপেন ট্রেডের সাথে কোরিলেটেড নয়
- [ ] মোট ওপেন রিস্ক ৩-৫% এর বেশি নয়
- [ ] আবেগতভাবে স্থিতিশীল — রিভেঞ্জ ট্রেডিং না

কোনো বক্স আনচেকড থাকলে, ট্রেড নেওয়া হবে না। **কোনো ব্যতিক্রম নেই।**

---

সম্পূর্ণ পাঠ: [রিস্ক ম্যানেজমেন্ট](/bn/academy/risk-management)
`);

// ============ BLOG 5: TOP 5 MISTAKES (NEW) ============
w('en','top-5-beginner-mistakes',`---
title: "Top 5 Mistakes Every Beginner Trader Makes (And How to Fix Them)"
description: "Avoid the most common trading mistakes that destroy beginner accounts. Learn the solutions that professional traders use."
date: "2026-05-05"
author: "Trading Docs"
category: "Academy"
tags: ["beginner", "mistakes", "psychology", "risk-management"]
readingTime: 6
featured: true
---

## Why Most Beginners Fail

Statistics show that **70-80% of retail traders lose money**. But it's not because trading is impossible — it's because beginners make the same predictable mistakes over and over. Here are the top 5 and how to fix them.

---

## Mistake #1: No Risk Management

**The Problem:** Trading without a stop loss, risking too much per trade (5-10% or more), and using excessive leverage.

**The Result:** One bad trade wipes out weeks or months of profits. Eventually, the account blows.

**The Fix:**
- Risk maximum 1-2% per trade — ALWAYS
- Always use a stop loss placed at a structural level
- Use 1:2 minimum R:R for every trade
- Calculate position size BEFORE entering

---

## Mistake #2: Over-Trading

**The Problem:** Taking 5-10+ trades per day, trading every "signal" seen, trading 24/7 out of boredom or FOMO.

**The Result:** High transaction costs (spread/commission), poor quality setups, emotional exhaustion, and inconsistent results.

**The Fix:**
- Limit to 1-2 high-quality trades per day maximum
- Only trade during Kill Zones (London and NY sessions)
- If no setup forms → DON'T TRADE. Best trade is sometimes no trade.
- Quality over quantity, always

---

## Mistake #3: No Trading Plan

**The Problem:** Random entries based on "feelings," no defined strategy, changing methods after every loss, no criteria for what makes a valid setup.

**The Result:** Random results, inability to improve (because there's nothing systematic to improve), emotional decision-making.

**The Fix:**
- Write a trading plan with specific entry/exit rules
- Define exactly what your setup looks like (e.g., "4H BOS + OB in discount + 15M CHOCH")
- Follow the plan for at least 30 trades before modifying
- Journal every trade against the plan

---

## Mistake #4: Revenge Trading

**The Problem:** After a loss, immediately entering another trade to "make it back." Trading larger size to recover faster. Making emotional decisions.

**The Result:** Bigger losses, emotional spiral, account destruction. One loss turns into three or four.

**The Fix:**
- After a loss, take a 15-30 minute break minimum
- After 2 consecutive losses, stop trading for the day
- After hitting daily drawdown limit (3%), close the platform
- Understand that losses are NORMAL — even the best traders lose 40% of trades

---

## Mistake #5: Skipping the Demo Phase

**The Problem:** Going straight to live trading with real money, no practice period, impatience to "start making money."

**The Result:** Expensive lessons that could have been free on demo. Developing bad habits with real money on the line.

**The Fix:**
- Trade demo for minimum 3 months
- Only go live after 3 consecutive profitable months on demo
- Start live with the smallest possible account ($100-$500)
- Treat demo like real money — same risk management, same emotions

<Callout type="tip" title="The Demo Challenge">
If you can't make money on demo consistently, you won't make money with real money. Demo removes the emotional pressure so you can focus on skill development. Use it!
</Callout>

---

## The Path to Fixing These Mistakes

| Week | Focus |
|------|-------|
| 1-4 | Study risk management + write trading plan |
| 5-8 | Demo trade following your plan strictly |
| 9-12 | Refine plan based on journal review |
| 13+ | If 3 months profitable → smallest live account |

---

## Key Takeaway

Every profitable trader was once a losing beginner. The difference is that they **identified their mistakes and fixed them systematically**. You can do the same.

Start with risk management. Write a plan. Practice on demo. Journal everything. The results will follow.
`);

w('bn','top-5-beginner-mistakes',`---
title: "প্রতিটি বিগিনার ট্রেডারের শীর্ষ ৫ ভুল (এবং সমাধান)"
description: "বিগিনার অ্যাকাউন্ট ধ্বংসকারী সবচেয়ে সাধারণ ট্রেডিং ভুল এড়িয়ে চলুন। প্রফেশনাল ট্রেডারদের সমাধান শিখুন।"
date: "2026-05-05"
author: "Trading Docs"
category: "একাডেমি"
tags: ["beginner", "mistakes", "psychology", "risk-management"]
readingTime: 6
featured: true
---

## কেন বেশিরভাগ বিগিনার ব্যর্থ হয়

পরিসংখ্যান দেখায় **৭০-৮০% রিটেইল ট্রেডার লস করে**। কিন্তু ট্রেডিং অসম্ভব বলে না — বিগিনাররা একই অনুমানযোগ্য ভুল বারবার করে বলে।

---

## ভুল #১: রিস্ক ম্যানেজমেন্ট নেই

**সমস্যা:** স্টপ লস ছাড়া ট্রেড, ৫-১০%+ রিস্ক, অতিরিক্ত লিভারেজ।

**ফলাফল:** একটি খারাপ ট্রেড সপ্তাহ বা মাসের লাভ মুছে দেয়।

**সমাধান:**
- প্রতি ট্রেডে সর্বোচ্চ ১-২% রিস্ক — সর্বদা
- সর্বদা স্ট্রাকচারাল লেভেলে স্টপ লস ব্যবহার
- প্রতিটি ট্রেডে ন্যূনতম ১:২ R:R

---

## ভুল #২: ওভার-ট্রেডিং

**সমস্যা:** দিনে ৫-১০+ ট্রেড, প্রতিটি "সিগন্যাল" ট্রেড করা, বোরডম বা FOMO থেকে ২৪/৭ ট্রেড।

**সমাধান:**
- দিনে সর্বোচ্চ ১-২টি হাই-কোয়ালিটি ট্রেড
- শুধু Kill Zone এ ট্রেড (লন্ডন ও NY সেশন)
- সেটআপ না হলে → ট্রেড করবেন না

---

## ভুল #৩: ট্রেডিং প্ল্যান নেই

**সমস্যা:** "অনুভূতি" ভিত্তিক এলোমেলো এন্ট্রি, কোনো নির্ধারিত কৌশল নেই।

**সমাধান:**
- নির্দিষ্ট এন্ট্রি/এক্সিট নিয়ম সহ ট্রেডিং প্ল্যান লিখুন
- আপনার সেটআপ কেমন দেখায় সুনির্দিষ্টভাবে সংজ্ঞায়িত করুন
- পরিবর্তনের আগে কমপক্ষে ৩০টি ট্রেড প্ল্যান অনুসরণ করুন

---

## ভুল #৪: রিভেঞ্জ ট্রেডিং

**সমস্যা:** লসের পর তাৎক্ষণিক আরেকটি ট্রেড "ফিরে পেতে"। দ্রুত রিকভারির জন্য বড় সাইজ।

**সমাধান:**
- লসের পর ন্যূনতম ১৫-৩০ মিনিট বিরতি
- ২টি ধারাবাহিক লসের পর দিনের জন্য ট্রেডিং বন্ধ
- ডেইলি ড্রডাউন লিমিটে (৩%) প্ল্যাটফর্ম বন্ধ করুন

---

## ভুল #৫: ডেমো ফেজ স্কিপ করা

**সমস্যা:** সরাসরি লাইভ ট্রেডিং, কোনো প্র্যাক্টিস পিরিয়ড নেই।

**সমাধান:**
- ন্যূনতম ৩ মাস ডেমো ট্রেড
- ৩ মাস ধারাবাহিক লাভের পরেই লাইভে যান
- সবচেয়ে ছোট অ্যাকাউন্ট ($100-$500) দিয়ে শুরু

<Callout type="tip" title="ডেমো চ্যালেঞ্জ">
ডেমোতে ধারাবাহিকভাবে টাকা কামাতে না পারলে, রিয়েল মানিতেও পারবেন না। ডেমো আবেগের চাপ সরিয়ে দক্ষতা বিকাশে ফোকাস করতে দেয়।
</Callout>

---

## মূল বার্তা

প্রতিটি লাভজনক ট্রেডার একসময় লসকারী বিগিনার ছিল। পার্থক্য হলো তারা **ভুল চিহ্নিত করে সিস্টেমেটিকভাবে ঠিক করেছে**। আপনিও পারবেন।

রিস্ক ম্যানেজমেন্ট দিয়ে শুরু করুন। প্ল্যান লিখুন। ডেমোতে প্র্যাক্টিস করুন। সব জার্নাল করুন। ফলাফল আসবে।
`);

// ============ BLOG 6: GOLD TRADING (NEW) ============
w('en','how-to-trade-gold-xauusd',`---
title: "How to Trade Gold (XAU/USD) — A Complete Beginner's Guide"
description: "Everything you need to know about trading Gold (XAU/USD). Market fundamentals, best sessions, strategies, risk management, and common mistakes."
date: "2026-05-08"
author: "Trading Docs"
category: "Academy"
tags: ["gold", "xauusd", "commodities", "beginner"]
readingTime: 9
featured: true
---

## Why Trade Gold?

Gold (XAU/USD) is one of the **most popular instruments** among retail and institutional traders. Here's why:

1. **High Volatility** — Gold can move $20-50+ per day, creating excellent trading opportunities
2. **Safe Haven** — During market uncertainty, gold tends to rise (great for diversification)
3. **24/5 Market** — Trade gold nearly around the clock
4. **Strong Trends** — Gold creates powerful trends that last weeks or months
5. **Responds to SMC/ICT** — Order Blocks, FVGs, and liquidity sweeps work exceptionally well on gold

---

## Gold Market Basics

### What Moves Gold?

| Factor | Effect on Gold |
|--------|---------------|
| **USD Strength** | USD up → Gold down (inverse correlation) |
| **Interest Rates** | Rates up → Gold down (higher opportunity cost) |
| **Inflation** | Inflation up → Gold up (inflation hedge) |
| **Geopolitical Risk** | Crisis → Gold up (safe haven) |
| **Central Bank Buying** | CB buying → Gold up (demand) |

### Key Levels to Know (2026):
- All-Time High: ~$2,800+
- Major psychological levels: $2,000, $2,100, $2,200, $2,300, $2,400, $2,500
- Daily range: Typically $15-40

---

## Best Sessions for Gold (Bangladesh Time)

| Session | BD Time | Gold Activity |
|---------|---------|--------------|
| **Asian** | 3:00 AM - 12:00 PM | Low — Gold tends to range |
| **London** | 2:00 PM - 5:00 PM | Medium-High — Good moves start |
| **London-NY Overlap** | 7:30 PM - 11:00 PM | **HIGHEST** — Best gold setups |
| **NY PM** | 11:00 PM - 4:00 AM | Medium — Continuation trades |

<Callout type="tip" title="Best Gold Trading Time for BD Traders">
**7:30 PM - 11:00 PM Bangladesh Time** is the prime window for gold trading. This London-NY overlap has the highest liquidity and most significant moves.
</Callout>

---

## Gold vs Forex: Key Differences

| Aspect | Forex (EUR/USD) | Gold (XAU/USD) |
|--------|----------------|----------------|
| Daily Range | 50-100 pips | $15-40 (150-400 pips) |
| Spread | 0.6-1.5 pips | 15-35 pips ($0.15-0.35) |
| Volatility | Moderate | High |
| Stop Size | 15-30 pips typical | $3-8 (30-80 pips) typical |
| Position Size | 0.01 per $10/pip | 0.01 = ~$0.10/pip |
| Risk Management | Standard | Wider stops needed |

### Important for Position Sizing:
When trading gold, remember that moves are in **dollars per ounce**, not pips:
- Gold moves from $2,400 to $2,410 = $10 move
- With 0.10 lots: $10 × 10 = **$100 profit/loss**
- With 1.0 lots: $10 × 100 = **$1,000 profit/loss**

---

## Gold Trading Strategy Using SMC

### Step 1: Daily Bias
Determine if gold is bullish or bearish today using Daily/4H structure and USD correlation.

### Step 2: Mark Key Levels
- Previous day high/low (PDH/PDL)
- Session highs/lows
- Order Blocks
- Equal highs/lows (liquidity targets)

### Step 3: Wait for Kill Zone
Best setups form during London or NY sessions (2PM-11PM BD).

### Step 4: Execute
- Wait for liquidity sweep + MSS/CHOCH
- Enter at OB/FVG
- Stop: Beyond the swept liquidity + buffer ($2-3)
- Target: Next liquidity pool or key level

### Real Example:
1. **Gold Daily:** Uptrend, bullish bias
2. **Asian range:** $2,398-$2,408
3. **London sweeps $2,398** (takes Asian low)
4. **NY MSS on 15M** — bullish CHOCH with displacement
5. **Entry:** $2,400 (OB) | **Stop:** $2,394 | **Target:** $2,425
6. **Result:** +$25 move, **4.1R**

---

## Risk Management for Gold

<Callout type="warning" title="Gold-Specific Risk Rules">

Gold is more volatile than forex — adjust your risk accordingly:

- **Reduce lot size** compared to forex (gold moves are bigger)
- **Wider stops** — minimum $3-5 from entry ($5-8 for swing trades)
- **Don't over-leverage** — 0.01-0.05 lots for accounts under $5,000
- **Watch USD news** — NFP, CPI, FOMC speeches cause massive gold moves
- **Be careful around round numbers** — $2,400, $2,500 etc. have heavy liquidity

</Callout>

---

## Key Takeaways

Gold is an incredible trading instrument when approached with proper risk management and a solid strategy. Focus on the London-NY overlap (7:30-11PM BD time), use SMC concepts, and always respect gold's higher volatility.

Full lesson: [Gold Trading](/en/academy/gold-trading)
`);

w('bn','how-to-trade-gold-xauusd',`---
title: "গোল্ড (XAU/USD) কীভাবে ট্রেড করবেন — সম্পূর্ণ বিগিনার গাইড"
description: "গোল্ড (XAU/USD) ট্রেডিং সম্পর্কে আপনার যা জানা দরকার সবকিছু। মার্কেট ফান্ডামেন্টাল, সেরা সেশন, কৌশল এবং রিস্ক ম্যানেজমেন্ট।"
date: "2026-05-08"
author: "Trading Docs"
category: "একাডেমি"
tags: ["gold", "xauusd", "commodities", "beginner"]
readingTime: 9
featured: true
---

## কেন গোল্ড ট্রেড করবেন?

গোল্ড (XAU/USD) রিটেইল ও ইনস্টিটিউশনাল ট্রেডারদের মধ্যে **সবচেয়ে জনপ্রিয় ইন্সট্রুমেন্টগুলোর** একটি:

1. **উচ্চ ভোলাটিলিটি** — গোল্ড দিনে $20-50+ মুভ করতে পারে
2. **সেফ হেভেন** — মার্কেট অনিশ্চয়তায় গোল্ড ওঠে
3. **শক্তিশালী ট্রেন্ড** — সপ্তাহ বা মাস ধরে চলা শক্তিশালী ট্রেন্ড তৈরি করে
4. **SMC/ICT রেসপন্স** — Order Block, FVG এবং liquidity sweep গোল্ডে অসাধারণ কাজ করে

---

## গোল্ডের সেরা সেশন (বাংলাদেশ সময়)

| সেশন | BD সময় | গোল্ড কার্যকলাপ |
|------|---------|----------------|
| **এশিয়ান** | সকাল ৩:০০ - দুপুর ১২:০০ | কম — গোল্ড রেঞ্জ করে |
| **লন্ডন** | দুপুর ২:০০ - বিকেল ৫:০০ | মাঝারি-উচ্চ |
| **লন্ডন-NY ওভারল্যাপ** | রাত ৭:৩০ - ১১:০০ | **সর্বোচ্চ — সেরা সেটআপ** |

<Callout type="tip" title="BD ট্রেডারদের জন্য সেরা সময়">
**রাত ৭:৩০ - ১১:০০ বাংলাদেশ সময়** গোল্ড ট্রেডিংয়ের প্রাইম উইন্ডো।
</Callout>

---

## কী গোল্ড মুভ করে?

| ফ্যাক্টর | গোল্ডে প্রভাব |
|---------|--------------|
| **USD শক্তিশালী** | USD ↑ → Gold ↓ |
| **সুদের হার** | হার ↑ → Gold ↓ |
| **মুদ্রাস্ফীতি** | মুদ্রাস্ফীতি ↑ → Gold ↑ |
| **ভূরাজনৈতিক ঝুঁকি** | সংকট → Gold ↑ |

---

## গোল্ড বনাম ফরেক্স: মূল পার্থক্য

| বিষয় | ফরেক্স (EUR/USD) | গোল্ড (XAU/USD) |
|-------|-----------------|----------------|
| দৈনিক রেঞ্জ | ৫০-১০০ পিপ | $15-40 |
| স্প্রেড | 0.6-1.5 পিপ | 15-35 পিপ |
| ভোলাটিলিটি | মাঝারি | উচ্চ |
| স্টপ সাইজ | ১৫-৩০ পিপ | $3-8 |

---

## SMC ব্যবহার করে গোল্ড ট্রেডিং কৌশল

1. **ডেইলি বায়াস** — Daily/4H স্ট্রাকচার ও USD কোরিলেশন ব্যবহার করে
2. **মূল লেভেল মার্ক** — PDH/PDL, সেশন হাই/লো, OB, equal highs/lows
3. **Kill Zone এর অপেক্ষা** — সেরা সেটআপ লন্ডন/NY তে (দুপুর ২-রাত ১১ BD)
4. **এক্সিকিউট** — Liquidity sweep + MSS/CHOCH → OB/FVG তে এন্ট্রি

### বাস্তব উদাহরণ:
1. গোল্ড ডেইলি আপট্রেন্ড, বুলিশ বায়াস
2. এশিয়ান রেঞ্জ: $2,398-$2,408
3. লন্ডন $2,398 সুইপ করে (এশিয়ান লো নেয়)
4. NY তে 15M বুলিশ CHOCH
5. **এন্ট্রি:** $2,400 | **স্টপ:** $2,394 | **টার্গেট:** $2,425
6. **ফলাফল:** +$25, **4.1R**

---

## গোল্ড রিস্ক ম্যানেজমেন্ট

<Callout type="warning" title="গোল্ড-নির্দিষ্ট রিস্ক নিয়ম">

- ফরেক্সের তুলনায় **লট সাইজ কমান** (গোল্ডের মুভ বড়)
- **ওয়াইডার স্টপ** — এন্ট্রি থেকে ন্যূনতম $3-5
- **ওভার-লিভারেজ করবেন না** — $5,000 এর নিচে অ্যাকাউন্টে 0.01-0.05 লট
- **USD নিউজ দেখুন** — NFP, CPI, FOMC গোল্ডে বিশাল মুভ করে
- **রাউন্ড নম্বরে সতর্ক** — $2,400, $2,500 ইত্যাদিতে ভারী লিকুইডিটি

</Callout>

---

সম্পূর্ণ পাঠ: [গোল্ড ট্রেডিং](/bn/academy/gold-trading)
`);

console.log('\n✅ All blog posts created (6 EN + 6 BN = 12 files)');

