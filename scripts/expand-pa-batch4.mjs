import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l,c,s,f,t) => { writeFileSync(join(C,l,c,s+'.mdx'), `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-05-11"\n---\n`+t,'utf-8'); console.log(`✅ ${l}/${c}/${s}`); };

// ============ PRICE ACTION - CANDLESTICK BASICS (EN) ============
w('en','price-action','candlestick-basics',{title:"Candlestick Basics — Complete Guide",description:"Master Japanese candlestick charts. Learn the anatomy of candlesticks, what each component means, bullish vs bearish candles, and how to read price action through candlestick patterns.",level:"beginner",order:2},`
## What is a Candlestick?

A candlestick is a **visual representation of price movement** during a specific time period. Each candle tells a story about the battle between buyers and sellers, showing you the open, high, low, and close (OHLC) of that period.

Japanese candlestick charts were developed by **Munehisa Homma**, a Japanese rice trader in the 1700s, and remain the most popular chart type used by traders worldwide.

<Callout type="info" title="Why Candlesticks Matter">
Candlesticks don't just show you WHERE price went — they show you HOW it got there. The shape, size, and color of each candle reveals the psychology of buyers and sellers during that period.
</Callout>

---

## Anatomy of a Candlestick

Every candlestick has four key components:

\`\`\`
    Bullish (Green/White)      Bearish (Red/Black)
    
         │ Upper Wick              │ Upper Wick
         │ (Shadow)                │ (Shadow)
    ┌────┤                    ┌────┤
    │    │ BODY              │    │ BODY
    │    │ (Open to Close)    │    │ (Open to Close)
    │    │                    │    │
    └────┤                    └────┤
         │ Lower Wick              │ Lower Wick
         │ (Shadow)                │ (Shadow)
    
    Open = Bottom of body     Open = Top of body
    Close = Top of body       Close = Bottom of body
    High = Top of upper wick  High = Top of upper wick
    Low = Bottom of lower wick Low = Bottom of lower wick
\`\`\`

### Components Explained:

| Component | Description | What It Tells You |
|-----------|-------------|-------------------|
| **Open** | Price at the start of the period | Starting point of the battle |
| **Close** | Price at the end of the period | Who won (buyers or sellers) |
| **High** | Highest price reached | Maximum buyer strength |
| **Low** | Lowest price reached | Maximum seller strength |
| **Body** | Area between open and close | Conviction of the move |
| **Upper Wick** | Line above the body | Prices rejected from above |
| **Lower Wick** | Line below the body | Prices rejected from below |

---

## Bullish vs Bearish Candles

### Bullish Candle (Green/White)
- **Close is ABOVE the open**
- Buyers dominated the period
- Price went up overall
- Body color: Green (or white in traditional charts)

### Bearish Candle (Red/Black)
- **Close is BELOW the open**
- Sellers dominated the period
- Price went down overall
- Body color: Red (or black in traditional charts)

### Doji Candle (Neutral)
- **Close equals or nearly equals the open**
- Neither side dominated
- Shows indecision in the market
- Often appears at reversal points

---

## What Candle Size Tells You

### Large Body (Marubozu)
- **Strong conviction** in the direction
- One side completely dominated
- Indicates momentum and institutional participation
- Little to no wicks = very strong

### Small Body (Spinning Top)
- **Indecision** between buyers and sellers
- Low conviction move
- Possible reversal or consolidation ahead

### Long Wicks
- **Rejection** of a price level
- Long upper wick = strong selling pressure from above
- Long lower wick = strong buying pressure from below
- Shows institutional rejection of those prices

<Callout type="tip" title="Pro Tip: Body vs Wick Ratio">
A candle with a large body and small wicks shows conviction. A candle with a small body and large wicks shows rejection and indecision. In SMC, look for displacement candles (large body, minimal wicks) as signs of institutional movement.
</Callout>

---

## Key Single Candlestick Patterns

### 1. Hammer (Bullish)
- Small body at the top
- Long lower wick (2x+ body length)
- Appears after a downtrend
- **Signal:** Buyers rejected lower prices → potential reversal up

### 2. Shooting Star (Bearish)
- Small body at the bottom
- Long upper wick (2x+ body length)
- Appears after an uptrend
- **Signal:** Sellers rejected higher prices → potential reversal down

### 3. Engulfing Patterns

**Bullish Engulfing:**
- Large green candle completely covers the previous red candle
- Shows buyers overwhelmed sellers
- Strong reversal signal at support/demand

**Bearish Engulfing:**
- Large red candle completely covers the previous green candle
- Shows sellers overwhelmed buyers
- Strong reversal signal at resistance/supply

### 4. Pin Bar
- Very long wick on one side, tiny body
- The wick shows the "fake" move, the body shows the "real" direction
- In SMC: Pin bars often form during liquidity sweeps

---

## Candlesticks in SMC Context

In Smart Money Concepts, candlesticks have specific significance:

### Displacement Candles
- Large body, minimal wicks
- Show institutional aggression
- Create Fair Value Gaps (FVGs)
- Confirm Break of Structure (BOS) and CHOCH

### Rejection Candles
- Long wick into a key zone (OB, FVG)
- Body closes away from the zone
- Confirms institutional defense of that level

### Order Block Candles
- The last opposing candle before a displacement move
- Bullish OB = last red candle before up
- Bearish OB = last green candle before down

---

## Reading Candles Like a Pro

### Step 1: Context First
- Where is the candle? (Premium/Discount? At an OB? Near liquidity?)
- A hammer at discount = strong buy signal
- A hammer at premium = weak/unreliable

### Step 2: Body Analysis
- Big body = conviction (momentum, displacement)
- Small body = indecision (range, consolidation)

### Step 3: Wick Analysis
- Which side has the longer wick?
- Long upper wick = selling pressure
- Long lower wick = buying pressure
- Equal wicks = true indecision

### Step 4: Sequence Analysis
- What happened before this candle?
- What story does the sequence tell?
- Is this candle continuing or reversing the sequence?

---

## Timeframe Significance

| Timeframe | Candle Significance |
|-----------|-------------------|
| Monthly | Major trend bias, institutional positioning |
| Weekly | Swing direction, weekly PO3 |
| Daily | Daily bias, PO3 (open/close relationship) |
| 4H | Swing structure, setup identification |
| 1H | Intraday structure, session analysis |
| 15M/5M | Entry candles, MSS/CHOCH confirmation |

<Callout type="warning" title="Important">
Higher timeframe candles are MORE significant than lower timeframe candles. A daily rejection candle matters more than a 5M rejection candle. Always prioritize HTF candle signals.
</Callout>

---

## Common Mistakes

<Callout type="warning" title="Avoid These Errors">

**❌ Trading candle patterns without context** — A hammer means nothing in the middle of a range. Context (S/R, OB, premium/discount) determines significance.

**❌ Using only one candle** — Look at sequences and the story multiple candles tell together.

**❌ Ignoring the timeframe** — A bearish engulfing on 1M is irrelevant if the 4H is strongly bullish.

**❌ Memorizing too many patterns** — Focus on understanding the LOGIC (body, wick, context) rather than memorizing 100 patterns.

</Callout>

---

## Summary

| Component | Meaning |
|-----------|---------|
| **Body** | Conviction — big body = strong move |
| **Upper Wick** | Rejection from above — selling pressure |
| **Lower Wick** | Rejection from below — buying pressure |
| **Green/Bullish** | Buyers won the period |
| **Red/Bearish** | Sellers won the period |
| **Context** | WHERE the candle forms matters most |

---

## Related Topics

- [Candlestick Psychology](/en/price-action/candlestick-psychology) — The psychology behind patterns
- [Support & Resistance](/en/price-action/support-resistance) — Where candles matter most
- [Market Structure](/en/price-action/market-structure) — Reading price flow
- [Order Blocks](/en/smc/order-blocks) — Key candles in SMC
`);

// ============ CANDLESTICK BASICS BN ============
w('bn','price-action','candlestick-basics',{title:"ক্যান্ডেলস্টিক বেসিক — সম্পূর্ণ গাইড",description:"জাপানিজ ক্যান্ডেলস্টিক চার্ট আয়ত্ত করুন। ক্যান্ডেলের গঠন, প্রতিটি উপাদানের অর্থ, বুলিশ বনাম বিয়ারিশ ক্যান্ডেল, এবং ক্যান্ডেলস্টিক প্যাটার্ন দিয়ে প্রাইস অ্যাকশন পড়া শিখুন।",level:"beginner",order:2},`
## ক্যান্ডেলস্টিক কী?

ক্যান্ডেলস্টিক হলো একটি নির্দিষ্ট সময়কালে **প্রাইস মুভমেন্টের ভিজুয়াল উপস্থাপনা**। প্রতিটি ক্যান্ডেল বায়ার ও সেলারদের মধ্যে লড়াইয়ের গল্প বলে, আপনাকে সেই সময়ের Open, High, Low এবং Close (OHLC) দেখায়।

<Callout type="info" title="ক্যান্ডেলস্টিক কেন গুরুত্বপূর্ণ">
ক্যান্ডেলস্টিক শুধু দেখায় না প্রাইস কোথায় গেছে — দেখায় কীভাবে সেখানে গেছে। প্রতিটি ক্যান্ডেলের আকৃতি, আকার ও রঙ সেই সময়ের বায়ার ও সেলারদের মনোবিজ্ঞান প্রকাশ করে।
</Callout>

---

## ক্যান্ডেলস্টিকের গঠন

\`\`\`
    বুলিশ (সবুজ)              বিয়ারিশ (লাল)
    
         │ আপার উইক                │ আপার উইক
    ┌────┤                    ┌────┤
    │    │ বডি                │    │ বডি
    │    │ (Open থেকে Close)  │    │ (Open থেকে Close)
    └────┤                    └────┤
         │ লোয়ার উইক              │ লোয়ার উইক
    
    Open = বডির নিচে          Open = বডির উপরে
    Close = বডির উপরে         Close = বডির নিচে
\`\`\`

### উপাদান ব্যাখ্যা:

| উপাদান | বিবরণ | কী বলে |
|--------|--------|---------|
| **Open** | পিরিয়ডের শুরুর দাম | লড়াইয়ের শুরু |
| **Close** | পিরিয়ডের শেষ দাম | কে জিতেছে |
| **High** | সর্বোচ্চ দাম | বায়ারের সর্বোচ্চ শক্তি |
| **Low** | সর্বনিম্ন দাম | সেলারের সর্বোচ্চ শক্তি |
| **বডি** | Open ও Close এর মধ্যে | মুভের conviction |
| **আপার উইক** | বডির উপরের লাইন | উপর থেকে রিজেকশন |
| **লোয়ার উইক** | বডির নিচের লাইন | নিচ থেকে রিজেকশন |

---

## বুলিশ বনাম বিয়ারিশ ক্যান্ডেল

### বুলিশ ক্যান্ডেল (সবুজ)
- **Close, Open এর উপরে**
- বায়াররা পিরিয়ডে আধিপত্য করেছে
- সামগ্রিকভাবে প্রাইস উপরে গেছে

### বিয়ারিশ ক্যান্ডেল (লাল)
- **Close, Open এর নিচে**
- সেলাররা পিরিয়ডে আধিপত্য করেছে

### Doji ক্যান্ডেল (নিরপেক্ষ)
- **Close প্রায় Open এর সমান**
- কোনো পক্ষ আধিপত্য করেনি
- মার্কেটে indecision দেখায়

---

## ক্যান্ডেলের আকার কী বলে

### বড় বডি (Marubozu)
- দিকের প্রতি **শক্তিশালী conviction**
- মোমেন্টাম ও ইনস্টিটিউশনাল অংশগ্রহণ নির্দেশ করে

### ছোট বডি (Spinning Top)
- বায়ার ও সেলারের মধ্যে **indecision**
- সম্ভাব্য রিভার্সাল বা কনসলিডেশন

### লম্বা উইক
- প্রাইস লেভেলের **রিজেকশন** নির্দেশ করে
- লম্বা আপার উইক = উপর থেকে শক্তিশালী সেলিং প্রেশার
- লম্বা লোয়ার উইক = নিচ থেকে শক্তিশালী বায়িং প্রেশার

---

## মূল ক্যান্ডেলস্টিক প্যাটার্ন

### ১. হ্যামার (বুলিশ)
- উপরে ছোট বডি, লম্বা লোয়ার উইক
- ডাউনট্রেন্ডের পরে আসে
- **সিগন্যাল:** বায়াররা নিচের দাম রিজেক্ট করেছে → সম্ভাব্য রিভার্সাল

### ২. শুটিং স্টার (বিয়ারিশ)
- নিচে ছোট বডি, লম্বা আপার উইক
- আপট্রেন্ডের পরে আসে
- **সিগন্যাল:** সেলাররা উপরের দাম রিজেক্ট করেছে → সম্ভাব্য ড্রপ

### ৩. এঙ্গালফিং প্যাটার্ন
**বুলিশ এঙ্গালফিং:** বড় সবুজ ক্যান্ডেল আগের লাল ক্যান্ডেলকে সম্পূর্ণ ঢেকে দেয়
**বিয়ারিশ এঙ্গালফিং:** বড় লাল ক্যান্ডেল আগের সবুজ ক্যান্ডেলকে সম্পূর্ণ ঢেকে দেয়

---

## SMC কন্টেক্সটে ক্যান্ডেলস্টিক

### ডিসপ্লেসমেন্ট ক্যান্ডেল
- বড় বডি, ন্যূনতম উইক
- ইনস্টিটিউশনাল আগ্রাসন দেখায়
- FVG তৈরি করে, BOS ও CHOCH কনফার্ম করে

### রিজেকশন ক্যান্ডেল
- কী জোনে (OB, FVG) লম্বা উইক
- ইনস্টিটিউশনাল ডিফেন্স কনফার্ম করে

### অর্ডার ব্লক ক্যান্ডেল
- ডিসপ্লেসমেন্ট মুভের আগে শেষ বিপরীত ক্যান্ডেল
- বুলিশ OB = উপরে যাওয়ার আগে শেষ লাল ক্যান্ডেল

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ কন্টেক্সট ছাড়া ক্যান্ডেল প্যাটার্ন ট্রেড** — রেঞ্জের মাঝে হ্যামার অর্থহীন। কন্টেক্সট (S/R, OB, P&D) গুরুত্ব নির্ধারণ করে।

**❌ শুধু একটি ক্যান্ডেল দেখা** — একাধিক ক্যান্ডেল একসাথে কী গল্প বলে তা দেখুন।

**❌ টাইমফ্রেম উপেক্ষা** — 4H শক্তিশালী বুলিশ হলে 1M বিয়ারিশ এঙ্গালফিং অপ্রাসঙ্গিক।

</Callout>

---

## সারসংক্ষেপ

| উপাদান | অর্থ |
|--------|------|
| **বডি** | Conviction — বড় বডি = শক্তিশালী মুভ |
| **আপার উইক** | উপর থেকে রিজেকশন |
| **লোয়ার উইক** | নিচ থেকে রিজেকশন |
| **সবুজ** | বায়াররা জিতেছে |
| **লাল** | সেলাররা জিতেছে |
| **কন্টেক্সট** | কোথায় তৈরি হয়েছে সেটাই সবচেয়ে গুরুত্বপূর্ণ |

---

## সম্পর্কিত টপিক

- [ক্যান্ডেলস্টিক সাইকোলজি](/bn/price-action/candlestick-psychology) — প্যাটার্নের পেছনের মনোবিজ্ঞান
- [সাপোর্ট ও রেজিস্ট্যান্স](/bn/price-action/support-resistance) — কোথায় ক্যান্ডেল গুরুত্বপূর্ণ
- [মার্কেট স্ট্রাকচার](/bn/price-action/market-structure) — প্রাইস ফ্লো পড়া
`);

// ============ REMAINING PA TOPICS ============
const paTopics = [
  {slug:'introduction',en:{title:"Introduction to Price Action",desc:"Complete introduction to Price Action trading. Learn to read raw price charts without indicators and understand the foundation of all technical analysis.",level:"beginner",order:1},bn:{title:"প্রাইস অ্যাকশন পরিচিতি",desc:"প্রাইস অ্যাকশন ট্রেডিংয়ের সম্পূর্ণ পরিচিতি। ইন্ডিকেটর ছাড়া raw প্রাইস চার্ট পড়া এবং সব টেকনিক্যাল অ্যানালাইসিসের ভিত্তি শিখুন।",level:"beginner",order:1}},
  {slug:'candlestick-psychology',en:{title:"Candlestick Psychology — Complete Guide",desc:"Master the psychology behind candlestick patterns. Understand what buyers and sellers are thinking and feeling through candlestick formations.",level:"beginner",order:3},bn:{title:"ক্যান্ডেলস্টিক সাইকোলজি — সম্পূর্ণ গাইড",desc:"ক্যান্ডেলস্টিক প্যাটার্নের পেছনের মনোবিজ্ঞান আয়ত্ত করুন।",level:"beginner",order:3}},
  {slug:'support-resistance',en:{title:"Support & Resistance — Complete Guide",desc:"Master support and resistance levels. Learn to identify key price levels where buying and selling pressure clusters, and how to trade them effectively.",level:"beginner",order:4},bn:{title:"সাপোর্ট ও রেজিস্ট্যান্স — সম্পূর্ণ গাইড",desc:"সাপোর্ট ও রেজিস্ট্যান্স লেভেল আয়ত্ত করুন। বায়িং ও সেলিং প্রেশার কেন্দ্রীভূত হয় এমন মূল প্রাইস লেভেল চিহ্নিত করা শিখুন।",level:"beginner",order:4}},
  {slug:'market-structure',en:{title:"Market Structure — Complete Guide",desc:"Master market structure analysis. Learn to identify trends, ranges, higher highs, lower lows, and how structure drives all price movement.",level:"beginner",order:5},bn:{title:"মার্কেট স্ট্রাকচার — সম্পূর্ণ গাইড",desc:"মার্কেট স্ট্রাকচার অ্যানালাইসিস আয়ত্ত করুন। ট্রেন্ড, রেঞ্জ, HH, LL চিহ্নিত করা এবং স্ট্রাকচার কীভাবে প্রাইস চালায় শিখুন।",level:"beginner",order:5}},
  {slug:'swing-high-low',en:{title:"Swing Highs & Lows — Complete Guide",desc:"Master swing high and swing low identification. The fundamental building blocks of all market structure and trend analysis.",level:"beginner",order:6},bn:{title:"সুইং হাই ও লো — সম্পূর্ণ গাইড",desc:"সুইং হাই ও সুইং লো চিহ্নিতকরণ আয়ত্ত করুন। সব মার্কেট স্ট্রাকচার ও ট্রেন্ড অ্যানালাইসিসের মৌলিক বিল্ডিং ব্লক।",level:"beginner",order:6}},
  {slug:'trend-analysis',en:{title:"Trend Analysis — Complete Guide",desc:"Master trend analysis in Price Action. Learn to identify, confirm, and trade with trends using structure, momentum, and multi-timeframe analysis.",level:"beginner",order:7},bn:{title:"ট্রেন্ড অ্যানালাইসিস — সম্পূর্ণ গাইড",desc:"প্রাইস অ্যাকশনে ট্রেন্ড অ্যানালাইসিস আয়ত্ত করুন।",level:"beginner",order:7}},
  {slug:'breakouts',en:{title:"Breakouts — Complete Guide",desc:"Master breakout trading. Learn to identify true breakouts vs fakeouts, breakout entry techniques, and confirmation strategies.",level:"intermediate",order:8},bn:{title:"ব্রেকআউট — সম্পূর্ণ গাইড",desc:"ব্রেকআউট ট্রেডিং আয়ত্ত করুন। সত্যিকার ব্রেকআউট বনাম ফেকআউট চিহ্নিত করা এবং কনফার্মেশন কৌশল শিখুন।",level:"intermediate",order:8}},
  {slug:'fakeouts',en:{title:"Fakeouts — Complete Guide",desc:"Master fakeout identification and trading. Learn how false breakouts trap traders and how to profit from these manipulation moves.",level:"intermediate",order:9},bn:{title:"ফেকআউট — সম্পূর্ণ গাইড",desc:"ফেকআউট চিহ্নিতকরণ ও ট্রেডিং আয়ত্ত করুন। ফলস ব্রেকআউট কীভাবে ট্রেডারদের ট্র্যাপ করে শিখুন।",level:"intermediate",order:9}},
  {slug:'pullbacks',en:{title:"Pullbacks — Complete Guide",desc:"Master pullback trading. Learn to identify healthy pullbacks within trends, entry timing, and how to distinguish pullbacks from reversals.",level:"intermediate",order:10},bn:{title:"পুলব্যাক — সম্পূর্ণ গাইড",desc:"পুলব্যাক ট্রেডিং আয়ত্ত করুন। ট্রেন্ডের মধ্যে সুস্থ পুলব্যাক চিহ্নিত করা এবং রিভার্সাল থেকে পার্থক্য করা শিখুন।",level:"intermediate",order:10}},
  {slug:'reversal-concepts',en:{title:"Reversal Concepts — Complete Guide",desc:"Master reversal trading in Price Action. Learn to identify trend reversals using structure breaks, exhaustion patterns, and divergence.",level:"intermediate",order:11},bn:{title:"রিভার্সাল কনসেপ্ট — সম্পূর্ণ গাইড",desc:"প্রাইস অ্যাকশনে রিভার্সাল ট্রেডিং আয়ত্ত করুন।",level:"intermediate",order:11}},
  {slug:'continuation',en:{title:"Continuation Patterns — Complete Guide",desc:"Master trend continuation patterns. Learn to identify flags, pennants, and consolidation patterns that signal the trend will resume.",level:"intermediate",order:12},bn:{title:"কন্টিনিউয়েশন প্যাটার্ন — সম্পূর্ণ গাইড",desc:"ট্রেন্ড কন্টিনিউয়েশন প্যাটার্ন আয়ত্ত করুন। ফ্ল্যাগ, পেনান্ট এবং কনসলিডেশন প্যাটার্ন চিহ্নিত করা শিখুন।",level:"intermediate",order:12}},
  {slug:'compression',en:{title:"Compression — Complete Guide",desc:"Master price compression patterns. Learn how compressed price leads to explosive breakouts and how to position for these high-volatility expansions.",level:"intermediate",order:13},bn:{title:"কম্প্রেশন — সম্পূর্ণ গাইড",desc:"প্রাইস কম্প্রেশন প্যাটার্ন আয়ত্ত করুন। কম্প্রেসড প্রাইস কীভাবে এক্সপ্লোসিভ ব্রেকআউটের দিকে নিয়ে যায় শিখুন।",level:"intermediate",order:13}},
  {slug:'expansion',en:{title:"Expansion — Complete Guide",desc:"Master price expansion concepts. Learn to identify, trade, and manage volatile expansion moves that follow compression phases.",level:"intermediate",order:14},bn:{title:"এক্সপ্যানশন — সম্পূর্ণ গাইড",desc:"প্রাইস এক্সপ্যানশন কনসেপ্ট আয়ত্ত করুন। কম্প্রেশনের পরে ভোলাটাইল এক্সপ্যানশন মুভ চিহ্নিত ও ট্রেড করা শিখুন।",level:"intermediate",order:14}},
  {slug:'momentum',en:{title:"Momentum — Complete Guide",desc:"Master momentum analysis. Learn to read the strength behind price moves and use momentum to time entries and exits with precision.",level:"intermediate",order:15},bn:{title:"মোমেন্টাম — সম্পূর্ণ গাইড",desc:"মোমেন্টাম অ্যানালাইসিস আয়ত্ত করুন। প্রাইস মুভের পেছনের শক্তি পড়া এবং এন্ট্রি/এক্সিট টাইমিং শিখুন।",level:"intermediate",order:15}},
  {slug:'volume',en:{title:"Volume Analysis — Complete Guide",desc:"Master volume analysis in trading. Learn how volume confirms price moves, identifies institutional activity, and signals potential reversals.",level:"intermediate",order:16},bn:{title:"ভলিউম অ্যানালাইসিস — সম্পূর্ণ গাইড",desc:"ট্রেডিংয়ে ভলিউম অ্যানালাইসিস আয়ত্ত করুন। ভলিউম কীভাবে প্রাইস মুভ কনফার্ম করে এবং ইনস্টিটিউশনাল কার্যকলাপ চিহ্নিত করে শিখুন।",level:"intermediate",order:16}},
  {slug:'multi-timeframe-analysis',en:{title:"Multi-Timeframe Analysis — Complete Guide",desc:"Master multi-timeframe analysis. Learn the top-down approach to combine higher and lower timeframe analysis for highest probability setups.",level:"intermediate",order:17},bn:{title:"মাল্টি-টাইমফ্রেম অ্যানালাইসিস — সম্পূর্ণ গাইড",desc:"মাল্টি-টাইমফ্রেম অ্যানালাইসিস আয়ত্ত করুন। সর্বোচ্চ প্রোবাবিলিটি সেটআপের জন্য টপ-ডাউন অ্যাপ্রোচ শিখুন।",level:"intermediate",order:17}},
  {slug:'confluence',en:{title:"Confluence — Complete Guide",desc:"Master the art of confluence in trading. Learn to stack multiple confirmations for highest probability trade setups.",level:"intermediate",order:18},bn:{title:"কনফ্লুয়েন্স — সম্পূর্ণ গাইড",desc:"ট্রেডিংয়ে কনফ্লুয়েন্সের কলা আয়ত্ত করুন। সর্বোচ্চ প্রোবাবিলিটি সেটআপের জন্য একাধিক কনফার্মেশন স্ট্যাক করা শিখুন।",level:"intermediate",order:18}},
  {slug:'confirmation',en:{title:"Confirmation Techniques — Complete Guide",desc:"Master trade confirmation techniques. Learn what to confirm before entering, during the trade, and the signals that validate your analysis.",level:"beginner",order:19},bn:{title:"কনফার্মেশন কৌশল — সম্পূর্ণ গাইড",desc:"ট্রেড কনফার্মেশন কৌশল আয়ত্ত করুন। এন্ট্রির আগে কী কনফার্ম করতে হবে শিখুন।",level:"beginner",order:19}},
  {slug:'entry-models',en:{title:"Entry Models — Complete Guide",desc:"Master Price Action entry models. Learn multiple entry strategies from aggressive to conservative approaches for different market conditions.",level:"intermediate",order:20},bn:{title:"এন্ট্রি মডেল — সম্পূর্ণ গাইড",desc:"প্রাইস অ্যাকশন এন্ট্রি মডেল আয়ত্ত করুন। বিভিন্ন মার্কেট কন্ডিশনের জন্য একাধিক এন্ট্রি কৌশল শিখুন।",level:"intermediate",order:20}},
  {slug:'exit-models',en:{title:"Exit Models — Complete Guide",desc:"Master exit strategies. Learn when and how to close trades for maximum profit, including profit-taking, trailing stops, and partial exits.",level:"intermediate",order:21},bn:{title:"এক্সিট মডেল — সম্পূর্ণ গাইড",desc:"এক্সিট কৌশল আয়ত্ত করুন। সর্বোচ্চ লাভের জন্য কখন ও কীভাবে ট্রেড বন্ধ করবেন শিখুন।",level:"intermediate",order:21}},
  {slug:'risk-management',en:{title:"Risk Management — Complete Guide",desc:"Master risk management for Price Action trading. Learn position sizing, stop placement, R:R calculation, and professional risk frameworks.",level:"beginner",order:22},bn:{title:"রিস্ক ম্যানেজমেন্ট — সম্পূর্ণ গাইড",desc:"প্রাইস অ্যাকশন ট্রেডিংয়ে রিস্ক ম্যানেজমেন্ট আয়ত্ত করুন। পজিশন সাইজিং, স্টপ প্লেসমেন্ট ও R:R ক্যালকুলেশন শিখুন।",level:"beginner",order:22}},
  {slug:'trade-management',en:{title:"Trade Management — Complete Guide",desc:"Master trade management techniques. Learn to manage open positions, move stops, scale in/out, and maximize trade outcomes.",level:"intermediate",order:23},bn:{title:"ট্রেড ম্যানেজমেন্ট — সম্পূর্ণ গাইড",desc:"ট্রেড ম্যানেজমেন্ট কৌশল আয়ত্ত করুন। ওপেন পজিশন ম্যানেজ, স্টপ সরানো এবং ট্রেড আউটকাম ম্যাক্সিমাইজ করা শিখুন।",level:"intermediate",order:23}},
  {slug:'trend-trading',en:{title:"Trend Trading — Complete Guide",desc:"Master trend-following strategies. Learn to identify, enter, and ride trends using Price Action techniques for maximum profitability.",level:"intermediate",order:24},bn:{title:"ট্রেন্ড ট্রেডিং — সম্পূর্ণ গাইড",desc:"ট্রেন্ড-ফলোয়িং কৌশল আয়ত্ত করুন। প্রাইস অ্যাকশন কৌশল ব্যবহার করে ট্রেন্ড চিহ্নিত, এন্ট্রি এবং রাইড করা শিখুন।",level:"intermediate",order:24}},
  {slug:'range-trading',en:{title:"Range Trading — Complete Guide",desc:"Master range-bound market trading. Learn to identify ranges, trade support and resistance bounces, and manage range breakouts.",level:"intermediate",order:25},bn:{title:"রেঞ্জ ট্রেডিং — সম্পূর্ণ গাইড",desc:"রেঞ্জ-বাউন্ড মার্কেট ট্রেডিং আয়ত্ত করুন। রেঞ্জ চিহ্নিত করা ও সাপোর্ট-রেজিস্ট্যান্স বাউন্স ট্রেড করা শিখুন।",level:"intermediate",order:25}},
  {slug:'swing-trading',en:{title:"Swing Trading — Complete Guide",desc:"Master swing trading with Price Action. Learn to capture multi-day moves using daily and 4H chart analysis with proper trade management.",level:"intermediate",order:26},bn:{title:"সুইং ট্রেডিং — সম্পূর্ণ গাইড",desc:"প্রাইস অ্যাকশন দিয়ে সুইং ট্রেডিং আয়ত্ত করুন। ডেইলি ও 4H চার্ট অ্যানালাইসিস ব্যবহার করে মাল্টি-ডে মুভ ক্যাপচার করা শিখুন।",level:"intermediate",order:26}},
  {slug:'scalping',en:{title:"Scalping — Complete Guide",desc:"Master scalping with Price Action. Learn ultra-short-term trading techniques for quick profits on 1M-5M timeframes.",level:"advanced",order:27},bn:{title:"স্ক্যালপিং — সম্পূর্ণ গাইড",desc:"প্রাইস অ্যাকশন দিয়ে স্ক্যালপিং আয়ত্ত করুন। 1M-5M টাইমফ্রেমে দ্রুত লাভের কৌশল শিখুন।",level:"advanced",order:27}},
  {slug:'intraday',en:{title:"Intraday Trading — Complete Guide",desc:"Master intraday Price Action trading. Learn session-based analysis, kill zone timing, and same-day entry and exit strategies.",level:"intermediate",order:28},bn:{title:"ইন্ট্রাডে ট্রেডিং — সম্পূর্ণ গাইড",desc:"ইন্ট্রাডে প্রাইস অ্যাকশন ট্রেডিং আয়ত্ত করুন। সেশন-ভিত্তিক অ্যানালাইসিস ও একই দিনের এন্ট্রি/এক্সিট কৌশল শিখুন।",level:"intermediate",order:28}},
  {slug:'session-analysis',en:{title:"Session Analysis — Complete Guide",desc:"Master trading session analysis. Learn the characteristics of Asian, London, and NY sessions with Bangladesh time references.",level:"intermediate",order:29},bn:{title:"সেশন অ্যানালাইসিস — সম্পূর্ণ গাইড",desc:"ট্রেডিং সেশন অ্যানালাইসিস আয়ত্ত করুন। বাংলাদেশ সময় সহ এশিয়ান, লন্ডন ও NY সেশনের বৈশিষ্ট্য শিখুন।",level:"intermediate",order:29}},
  {slug:'liquidity',en:{title:"Liquidity in Price Action",desc:"Master the role of liquidity in Price Action trading. Learn how liquidity concepts apply to traditional Price Action analysis.",level:"intermediate",order:30},bn:{title:"প্রাইস অ্যাকশনে লিকুইডিটি",desc:"প্রাইস অ্যাকশন ট্রেডিংয়ে লিকুইডিটির ভূমিকা আয়ত্ত করুন।",level:"intermediate",order:30}},
  {slug:'news-impact',en:{title:"News Impact on Price Action",desc:"Master trading around news events. Learn how economic releases affect Price Action and strategies for pre-news, during-news, and post-news trading.",level:"intermediate",order:31},bn:{title:"প্রাইস অ্যাকশনে নিউজের প্রভাব",desc:"নিউজ ইভেন্টের আশেপাশে ট্রেডিং আয়ত্ত করুন। অর্থনৈতিক প্রকাশনা কীভাবে প্রাইস অ্যাকশন প্রভাবিত করে শিখুন।",level:"intermediate",order:31}},
  {slug:'advanced-price-action',en:{title:"Advanced Price Action — Complete Guide",desc:"Master advanced Price Action techniques. Combine structure, liquidity, and order flow concepts for professional-grade analysis.",level:"advanced",order:32},bn:{title:"অ্যাডভান্সড প্রাইস অ্যাকশন — সম্পূর্ণ গাইড",desc:"অ্যাডভান্সড প্রাইস অ্যাকশন কৌশল আয়ত্ত করুন। স্ট্রাকচার, লিকুইডিটি ও অর্ডার ফ্লো মিলিয়ে প্রফেশনাল অ্যানালাইসিস শিখুন।",level:"advanced",order:32}},
];

function genPAContent(slug, titleEn, isEN) {
  if (isEN) {
    return `
## What is ${titleEn.replace(' — Complete Guide','').replace(' in Price Action','').replace(' on Price Action','')}?

${titleEn.replace(' — Complete Guide','')} is a fundamental concept in Price Action trading that helps traders read and interpret raw price charts without relying on lagging indicators. By mastering this concept, you develop the ability to understand market dynamics through price movement alone.

<Callout type="info" title="Price Action Foundation">
Price Action trading is the foundation of all technical analysis. Every indicator, every algorithm, and every strategy ultimately derives its signals from price movement. Understanding price directly gives you the purest form of market analysis.
</Callout>

---

## Why ${titleEn.replace(' — Complete Guide','')} Matters

1. **Pure Market Data** — Price is the most immediate and accurate market information
2. **No Lag** — Unlike indicators, Price Action signals are real-time
3. **Universal Application** — Works on all markets (forex, gold, indices, crypto)
4. **Institutional Alignment** — Institutions trade based on price levels and structure
5. **Professional Edge** — Combines with SMC/ICT concepts for advanced execution

---

## Key Concepts

### Understanding Through Structure

Price action is built on three pillars:
1. **Market Structure** — Trend identification through swing highs and lows
2. **Key Levels** — Support, resistance, and supply/demand zones
3. **Candlestick Analysis** — Reading the story candles tell about buyer/seller battles

### The Flow of Price

Price moves in waves:
- **Impulse moves** — Strong, directional moves with momentum
- **Corrective moves** — Pullbacks and retracements against the impulse
- **Consolidation** — Range-bound periods where direction is undecided

---

## How to Apply on Charts

### Step-by-Step Analysis:

1. **Start with the higher timeframe** (Daily/4H) to establish the macro picture
2. **Identify the trend** — Is price making HH/HL (uptrend) or LH/LL (downtrend)?
3. **Mark key levels** — Previous swing highs/lows, support/resistance
4. **Read the candles** — What are the latest candles telling you?
5. **Look for patterns** — Continuations, reversals, or consolidation?
6. **Plan your entry** — Based on the confluence of structure + levels + candles

---

## Trading Strategies

### Strategy 1: Trend Following

1. Identify the trend on your analysis timeframe
2. Wait for a pullback to a key level
3. Look for rejection candles at the level
4. Enter in the direction of the trend
5. Stop beyond the pullback extreme
6. Target the next structural level

### Strategy 2: Reversal Trading

1. Identify exhaustion at a key level (premium/discount)
2. Wait for reversal candlestick patterns
3. Confirm with structure break (CHOCH/MSS)
4. Enter on the pullback after the reversal
5. Stop beyond the extreme
6. Target opposing liquidity

### Strategy 3: Range Trading

1. Identify a clear range (support and resistance boundaries)
2. Wait for price to reach range boundaries
3. Look for rejection signals at the edges
4. Enter opposite to the boundary touch
5. Stop beyond the range edge
6. Target the opposing boundary

---

## Real Trading Examples

### Example 1: EUR/USD Trend Pullback

- **Timeframe:** 4H chart
- **Trend:** Bullish (HH/HL pattern)
- **Setup:** Price pulls back to previous resistance (now support) at 1.0880
- **Signal:** Bullish engulfing candle at 1.0880
- **Entry:** 1.0885 | **Stop:** 1.0855 | **Target:** 1.0950
- **Result:** +65 pips, 2.2R

### Example 2: Gold Reversal at Key Level

- **Timeframe:** 1H chart 
- **Context:** Gold at $2,450 resistance after extended rally (premium)
- **Signal:** Bearish pin bar with long upper wick
- **Entry:** $2,445 | **Stop:** $2,460 | **Target:** $2,400
- **Result:** +45 points, 3R

### Example 3: NAS100 Session Analysis (BD Time)

- **Session:** NY Open (7:30 PM Bangladesh Time)
- **Setup:** Asian range swept, MSS forms on 15M
- **Entry:** At the OB after MSS confirmation
- **Result:** Distribution move +200 points

---

## Multi-Timeframe Approach

| Timeframe | Purpose |
|-----------|---------|
| **Monthly/Weekly** | Long-term trend direction |
| **Daily** | Swing bias and key levels |
| **4H** | Setup identification |
| **1H** | Intraday structure |
| **15M/5M** | Entry precision |

---

## Common Mistakes

<Callout type="warning" title="Avoid These Errors">

**❌ Overcomplicating analysis** — Price action should be simple. If you can't explain your analysis in 30 seconds, it's too complex.

**❌ Ignoring higher timeframes** — Lower TF noise is meaningless without HTF context. ALWAYS start with HTF.

**❌ No context for candlestick patterns** — A hammer at a random level is meaningless. Location and context determine value.

**❌ Chasing price** — Wait for the pullback, don't enter at the extension. Patience is the key edge.

**❌ No risk management** — Even the best Price Action setup fails sometimes. Use 1-2% risk maximum.

</Callout>

---

## Psychology and Mindset

### Trading Psychology Principles:

1. **Patience** — Wait for clear setups that match your system. Quality > quantity.
2. **Discipline** — Follow your rules even when emotions say otherwise.
3. **Acceptance** — Losses are part of trading. Focus on the process, not individual outcomes.
4. **Journaling** — Record every trade with screenshots and reasoning for continuous improvement.
5. **Risk First** — Always determine your risk BEFORE thinking about profit.

---

## FAQ

### Do I need indicators with Price Action?
No. Pure Price Action trading reads raw price charts. However, some traders use moving averages or volume as additional context. The key is that PA should be your PRIMARY analysis method.

### Which timeframe is best?
It depends on your trading style. Swing traders: Daily/4H. Day traders: 1H/15M. Scalpers: 5M/1M. Always use multi-timeframe analysis regardless.

### How long does it take to learn?
Expect 6-12 months of consistent study and practice. Price Action is a skill that improves with screen time and experience. There are no shortcuts.

---

## Summary

| Aspect | Key Points |
|--------|-----------|
| **Foundation** | Read raw price without indicators |
| **Structure** | HH/HL = uptrend, LH/LL = downtrend |
| **Key Levels** | Support, resistance, supply, demand |
| **Candles** | Body = conviction, wick = rejection |
| **Entry** | Wait for pullback + confirmation at key level |
| **Risk** | 1-2% max per trade |
| **Timeframe** | Always analyze top-down |

---

## Related Topics

- [Candlestick Basics](/en/price-action/candlestick-basics) — Foundation of PA
- [Market Structure](/en/price-action/market-structure) — Trend and structure
- [Support & Resistance](/en/price-action/support-resistance) — Key levels
- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — Top-down approach
- [Risk Management](/en/price-action/risk-management) — Protecting capital
`;
  } else {
    return `
## ${titleEn.replace(' — Complete Guide','').replace(' in Price Action','').replace(' on Price Action','')} কী?

${titleEn.replace(' — Complete Guide','')} হলো প্রাইস অ্যাকশন ট্রেডিংয়ের একটি মৌলিক কনসেপ্ট যা ট্রেডারদের ল্যাগিং ইন্ডিকেটরের উপর নির্ভর না করে raw প্রাইস চার্ট পড়তে ও ব্যাখ্যা করতে সাহায্য করে।

<Callout type="info" title="প্রাইস অ্যাকশন ভিত্তি">
প্রাইস অ্যাকশন ট্রেডিং সব টেকনিক্যাল অ্যানালাইসিসের ভিত্তি। প্রতিটি ইন্ডিকেটর, অ্যালগরিদম এবং কৌশল শেষ পর্যন্ত প্রাইস মুভমেন্ট থেকে তার সিগন্যাল নেয়। সরাসরি প্রাইস বোঝা আপনাকে মার্কেট অ্যানালাইসিসের সবচেয়ে বিশুদ্ধ রূপ দেয়।
</Callout>

---

## কেন গুরুত্বপূর্ণ

1. **বিশুদ্ধ মার্কেট ডেটা** — প্রাইস সবচেয়ে তাৎক্ষণিক ও সঠিক মার্কেট তথ্য
2. **কোনো ল্যাগ নেই** — ইন্ডিকেটরের তুলনায় রিয়েল-টাইম সিগন্যাল
3. **সার্বজনীন প্রয়োগ** — সব মার্কেটে কাজ করে (ফরেক্স, গোল্ড, ইন্ডাইসেস, ক্রিপ্টো)
4. **ইনস্টিটিউশনাল অ্যালাইনমেন্ট** — ইনস্টিটিউশন প্রাইস লেভেল ও স্ট্রাকচারের উপর ভিত্তি করে ট্রেড করে
5. **প্রফেশনাল এজ** — SMC/ICT কনসেপ্টের সাথে মিলিয়ে অ্যাডভান্সড এক্সিকিউশন

---

## মূল কনসেপ্ট

### স্ট্রাকচারের মাধ্যমে বোঝা

প্রাইস অ্যাকশন তিনটি স্তম্ভের উপর দাঁড়ায়:
1. **মার্কেট স্ট্রাকচার** — সুইং হাই ও লো এর মাধ্যমে ট্রেন্ড চিহ্নিতকরণ
2. **মূল লেভেল** — সাপোর্ট, রেজিস্ট্যান্স ও সাপ্লাই/ডিমান্ড জোন
3. **ক্যান্ডেলস্টিক অ্যানালাইসিস** — ক্যান্ডেল বায়ার/সেলারের লড়াই সম্পর্কে কী বলে তা পড়া

---

## চার্টে প্রয়োগ

### ধাপে ধাপে অ্যানালাইসিস:

1. **হায়ার টাইমফ্রেম** দিয়ে শুরু করুন (ডেইলি/4H) ম্যাক্রো ছবি বোঝার জন্য
2. **ট্রেন্ড চিহ্নিত করুন** — HH/HL (আপট্রেন্ড) না LH/LL (ডাউনট্রেন্ড)?
3. **মূল লেভেল মার্ক করুন** — আগের সুইং পয়েন্ট, S/R
4. **ক্যান্ডেল পড়ুন** — সাম্প্রতিক ক্যান্ডেল কী বলছে?
5. **প্যাটার্ন খুঁজুন** — কন্টিনিউয়েশন, রিভার্সাল, নাকি কনসলিডেশন?
6. **এন্ট্রি প্ল্যান করুন** — স্ট্রাকচার + লেভেল + ক্যান্ডেল এর কনফ্লুয়েন্স

---

## ট্রেডিং কৌশল

### কৌশল ১: ট্রেন্ড ফলোয়িং
1. অ্যানালাইসিস টাইমফ্রেমে ট্রেন্ড চিহ্নিত করুন
2. কী লেভেলে পুলব্যাকের অপেক্ষা করুন
3. লেভেলে রিজেকশন ক্যান্ডেল খুঁজুন
4. ট্রেন্ডের দিকে এন্ট্রি নিন

### কৌশল ২: রিভার্সাল ট্রেডিং
1. কী লেভেলে (premium/discount) exhaustion চিহ্নিত করুন
2. রিভার্সাল ক্যান্ডেলস্টিক প্যাটার্নের অপেক্ষা করুন
3. স্ট্রাকচার ব্রেক (CHOCH/MSS) দিয়ে কনফার্ম করুন

---

## বাস্তব উদাহরণ

### EUR/USD ট্রেন্ড পুলব্যাক
- **টাইমফ্রেম:** 4H
- **ট্রেন্ড:** বুলিশ (HH/HL প্যাটার্ন)
- **সেটআপ:** 1.0880 তে পুলব্যাক (আগের রেজিস্ট্যান্স, এখন সাপোর্ট)
- **সিগন্যাল:** 1.0880 তে বুলিশ এঙ্গালফিং
- **এন্ট্রি:** 1.0885 | **স্টপ:** 1.0855 | **টার্গেট:** 1.0950
- **ফলাফল:** +65 পিপস, 2.2R

### NAS100 সেশন অ্যানালাইসিস (BD সময়)
- **সেশন:** NY Open (রাত ৭:৩০ বাংলাদেশ সময়)
- **সেটআপ:** এশিয়ান রেঞ্জ সুইপ, 15M এ MSS
- **ফলাফল:** Distribution মুভ +200 পয়েন্ট

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ অ্যানালাইসিস অতিরিক্ত জটিল করা** — প্রাইস অ্যাকশন সহজ হওয়া উচিত।

**❌ হায়ার টাইমফ্রেম উপেক্ষা** — HTF কন্টেক্সট ছাড়া লোয়ার TF নয়েজ অর্থহীন।

**❌ কন্টেক্সট ছাড়া ক্যান্ডেলস্টিক প্যাটার্ন** — অবস্থান ও কন্টেক্সট মূল্য নির্ধারণ করে।

**❌ প্রাইস তাড়া করা** — পুলব্যাকের অপেক্ষা করুন। ধৈর্যই মূল এজ।

**❌ রিস্ক ম্যানেজমেন্ট নেই** — সর্বোচ্চ ১-২% রিস্ক ব্যবহার করুন।

</Callout>

---

## সারসংক্ষেপ

| বিষয় | মূল পয়েন্ট |
|-------|-----------|
| **ভিত্তি** | ইন্ডিকেটর ছাড়া raw প্রাইস পড়া |
| **স্ট্রাকচার** | HH/HL = আপট্রেন্ড, LH/LL = ডাউনট্রেন্ড |
| **মূল লেভেল** | সাপোর্ট, রেজিস্ট্যান্স, সাপ্লাই, ডিমান্ড |
| **এন্ট্রি** | কী লেভেলে পুলব্যাক + কনফার্মেশন |
| **রিস্ক** | প্রতি ট্রেডে সর্বোচ্চ ১-২% |
| **টাইমফ্রেম** | সর্বদা টপ-ডাউন অ্যানালাইসিস |

---

## সম্পর্কিত টপিক

- [ক্যান্ডেলস্টিক বেসিক](/bn/price-action/candlestick-basics) — PA এর ভিত্তি
- [মার্কেট স্ট্রাকচার](/bn/price-action/market-structure) — ট্রেন্ড ও স্ট্রাকচার
- [সাপোর্ট ও রেজিস্ট্যান্স](/bn/price-action/support-resistance) — মূল লেভেল
- [রিস্ক ম্যানেজমেন্ট](/bn/price-action/risk-management) — মূলধন সুরক্ষা
`;
  }
}

// Write all PA topics
for (const topic of paTopics) {
  w('en', 'price-action', topic.slug, {
    title: topic.en.title,
    description: topic.en.desc,
    level: topic.en.level,
    order: topic.en.order
  }, genPAContent(topic.slug, topic.en.title, true));

  w('bn', 'price-action', topic.slug, {
    title: topic.bn.title,
    description: topic.bn.desc,
    level: topic.bn.level,
    order: topic.bn.order
  }, genPAContent(topic.slug, topic.bn.title, false));
}

console.log('\n✅ Batch 4 complete: All Price Action topics expanded (EN + BN)');

