import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l,cat,s,f,c) => { writeFileSync(join(C,l,'price-action',cat,s+'.mdx'), `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-06-10"\n---\n`+c,'utf-8'); console.log(`✅ ${l}/price-action/${cat}/${s}`); };

// ============================================================
// MULTI CANDLE PATTERNS (9 patterns × 2 languages = 18 files)
// ============================================================

// 1. ENGULFING
w('en','multi-candle-patterns','engulfing',{title:"Engulfing Pattern — Complete Guide",description:"Master the Engulfing pattern — the most powerful 2-candle reversal signal. Learn bullish and bearish Engulfing, psychology, and professional trading techniques.",level:"beginner",order:1},`
## What is an Engulfing Pattern?

An Engulfing pattern is a **2-candle reversal pattern** where the second candle completely covers (engulfs) the body of the first candle. It signals a decisive shift in control from one side to the other.

---

## Types

### Bullish Engulfing (at support):
\`\`\`
  ┏┓         
  ┃┃ Red    ┏━━━┓
  ┃┃        ┃   ┃ Green (engulfs red)
  ┗┛        ┃   ┃
            ┗━━━┛

Candle 2 (green) body COMPLETELY covers Candle 1 (red) body
Signal: Sellers exhausted, buyers taking control
\`\`\`

### Bearish Engulfing (at resistance):
\`\`\`
            ┏━━━┓
  ┏┓        ┃   ┃ Red (engulfs green)
  ┃┃ Green  ┃   ┃
  ┃┃        ┗━━━┛
  ┗┛         
  
Candle 2 (red) body COMPLETELY covers Candle 1 (green) body
Signal: Buyers exhausted, sellers taking control
\`\`\`

---

## Identification Rules

| Rule | Requirement |
|------|------------|
| Candle 1 | Smaller candle in the current trend direction |
| Candle 2 | Larger candle in OPPOSITE direction |
| Engulfing | C2 body must fully cover C1 body |
| Location | At key S/R level, Order Block, or after extended trend |
| Volume | Ideally higher on Candle 2 |

---

## Psychology

1. First candle continues the existing trend (normal)
2. Second candle opens in trend direction but REVERSES
3. Second candle closes beyond the first candle's open
4. **Message:** New side has completely overwhelmed the previous — momentum has shifted decisively

---

## How to Trade

### Entry Options:
- **Standard:** Enter at the close of the engulfing candle
- **Conservative:** Enter above/below engulfing on next candle confirmation
- **Aggressive:** Enter at 50% of engulfing candle (retest)

### Stop Loss:
- Beyond the engulfing candle's extreme (wick)
- Or beyond the nearest structural level

### Take Profit:
- Next key S/R level
- Previous swing high/low
- 1:2 or 1:3 minimum R:R

---

## Quality Grades

| Factor | High Quality | Low Quality |
|--------|-------------|-------------|
| Location | At key S/R, OB, Fib | Random location |
| Size | C2 significantly larger than C1 | C2 barely covers C1 |
| Wick | C2 has small wicks (full conviction) | C2 has large opposing wick |
| Volume | Increasing on C2 | Decreasing |
| HTF alignment | With higher TF trend | Against HTF trend |

<Callout type="info" title="The Strongest Signal">
A Bullish Engulfing at a D1 Order Block with M15 structural shift and Fibonacci confluence is one of the highest-probability setups in Price Action trading.
</Callout>

---

## Related Topics

- [Reversal Concepts](/en/price-action/reversal-concepts) — Context for engulfing
- [Candlestick Psychology](/en/price-action/candlestick-psychology) — Shift dynamics
- [Confirmation](/en/price-action/confirmation) — Confirming engulfing patterns
`);

w('bn','multi-candle-patterns','engulfing',{title:"Engulfing Pattern — সম্পূর্ণ গাইড",description:"Engulfing Pattern আয়ত্ত করুন — সবচেয়ে শক্তিশালী 2-candle Reversal Signal। Bullish ও Bearish Engulfing, Psychology এবং Professional Trading Technique শিখুন।",level:"beginner",order:1},`
## Engulfing Pattern কী?

Engulfing Pattern হলো একটি **2-candle Reversal Pattern** যেখানে দ্বিতীয় Candle প্রথম Candle-এর Body সম্পূর্ণ ঢেকে ফেলে (Engulf করে)। এটি একটি পক্ষ থেকে অন্য পক্ষে নিয়ন্ত্রণের সিদ্ধান্তমূলক Shift Signal করে।

---

## ধরন

### Bullish Engulfing (Support-এ):
\`\`\`
  ┏┓         
  ┃┃ Red    ┏━━━┓
  ┃┃        ┃   ┃ Green (Red-কে Engulf করে)
  ┗┛        ┃   ┃
            ┗━━━┛

Candle 2 (Green) Body সম্পূর্ণ Candle 1 (Red) Body Cover করে
Signal: Seller Exhausted, Buyer নিয়ন্ত্রণ নিচ্ছে
\`\`\`

### Bearish Engulfing (Resistance-এ):
\`\`\`
            ┏━━━┓
  ┏┓        ┃   ┃ Red (Green-কে Engulf করে)
  ┃┃ Green  ┃   ┃
  ┃┃        ┗━━━┛
  ┗┛         
  
Candle 2 (Red) Body সম্পূর্ণ Candle 1 (Green) Body Cover করে
Signal: Buyer Exhausted, Seller নিয়ন্ত্রণ নিচ্ছে
\`\`\`

---

## চিহ্নিতকরণ নিয়ম

| নিয়ম | প্রয়োজনীয়তা |
|------|------------|
| Candle 1 | বর্তমান Trend Direction-এ ছোট Candle |
| Candle 2 | বিপরীত Direction-এ বড় Candle |
| Engulfing | C2 Body অবশ্যই C1 Body সম্পূর্ণ Cover করবে |
| অবস্থান | Key S/R Level, OB বা বিস্তৃত Trend-এর পর |
| Volume | আদর্শভাবে Candle 2-এ বেশি |

---

## Psychology

1. প্রথম Candle বিদ্যমান Trend Continue করে (স্বাভাবিক)
2. দ্বিতীয় Candle Trend Direction-এ Open হয় কিন্তু REVERSE করে
3. দ্বিতীয় Candle প্রথম Candle-এর Open-এর বাইরে Close করে
4. **বার্তা:** নতুন পক্ষ পূর্ববর্তীকে সম্পূর্ণ পরাজিত করেছে — Momentum সিদ্ধান্তমূলকভাবে Shift হয়েছে

---

## কীভাবে Trade করবেন

### Entry:
- **Standard:** Engulfing Candle-এর Close-এ Enter
- **Conservative:** পরবর্তী Candle Confirmation-এ Engulfing-এর High/Low-এর উপরে/নিচে
- **Aggressive:** Engulfing Candle-এর 50%-এ (Retest)

### Stop Loss:
- Engulfing Candle-এর Extreme-এর (Wick) বাইরে
- অথবা নিকটতম Structural Level-এর বাইরে

### Take Profit:
- পরবর্তী Key S/R Level
- পূর্ববর্তী Swing High/Low
- ন্যূনতম 1:2 বা 1:3 R:R

---

## মান গ্রেড

| বিষয় | উচ্চ মান | নিম্ন মান |
|--------|---------|---------|
| অবস্থান | Key S/R, OB, Fib-এ | Random অবস্থান |
| Size | C2 C1-এর চেয়ে উল্লেখযোগ্যভাবে বড় | C2 সবে C1 Cover করে |
| Wick | C2-এর ছোট Wick (পূর্ণ Conviction) | C2-এর বড় Opposing Wick |
| Volume | C2-এ বাড়ছে | কমছে |
| HTF Alignment | Higher TF Trend-এর সাথে | HTF Trend-এর বিরুদ্ধে |

---

## সম্পর্কিত বিষয়

- [Reversal Concepts](/bn/price-action/reversal-concepts) — Engulfing-এর Context
- [Candlestick Psychology](/bn/price-action/candlestick-psychology) — Shift Dynamics
- [Confirmation](/bn/price-action/confirmation) — Engulfing Pattern Confirm করা
`);

// 2. MORNING STAR
w('en','multi-candle-patterns','morning-star',{title:"Morning Star Pattern — Complete Guide",description:"Master the Morning Star 3-candle bullish reversal pattern. Learn identification, psychology, and entry techniques.",level:"beginner",order:2},`
## What is the Morning Star?\n\nThe Morning Star is a **3-candle bullish reversal** pattern that forms at the bottom of a downtrend. It signals the transition from selling pressure to buying pressure across three distinct phases.\n\n---\n\n## Structure\n\n\`\`\`\nCandle 1: Large bearish (trend continuation)\nCandle 2: Small body/doji (indecision - the "star")\nCandle 3: Large bullish (reversal confirmation)\n\n   ┏┓\n   ┃┃ C1 (big red)     ┏━━┓\n   ┃┃             ┏┓   ┃  ┃ C3 (big green)\n   ┗┛           C2┗┛   ┃  ┃\n                        ┗━━┛\n\`\`\`\n\n---\n\n## Rules\n\n| Candle | Requirement |\n|--------|------------|\n| C1 | Large bearish candle (confirms existing downtrend) |\n| C2 | Small body (doji, spinning top) — gaps down preferred |\n| C3 | Large bullish candle that closes into or above C1's body |\n| Location | At support, demand zone, or after clear downtrend |\n\n---\n\n## Psychology\n\n1. **C1:** Sellers still in control, pushing price down aggressively\n2. **C2:** Selling pressure exhausted — indecision, neither side wins\n3. **C3:** Buyers take over aggressively, erasing much of C1's loss\n4. Three-phase transition: Control → Indecision → New control\n\n---\n\n## Trading\n\n- Entry: Above C3's high (confirmed) or at C3 close (moderate)\n- Stop: Below C2's low (the star)\n- Target: Next resistance or 1:2 R:R minimum\n- Stronger when C3 closes above C1's midpoint\n\n---\n\n## Related Topics\n\n- [Evening Star](/en/price-action/multi-candle-patterns/evening-star) — Bearish version\n- [Reversal Concepts](/en/price-action/reversal-concepts)\n`);

w('bn','multi-candle-patterns','morning-star',{title:"Morning Star Pattern — সম্পূর্ণ গাইড",description:"Morning Star 3-candle Bullish Reversal Pattern আয়ত্ত করুন। চিহ্নিতকরণ, Psychology ও Entry Technique শিখুন।",level:"beginner",order:2},`
## Morning Star কী?\n\nMorning Star হলো একটি **3-candle Bullish Reversal** Pattern যা Downtrend-এর নিচে তৈরি হয়। এটি তিনটি স্বতন্ত্র Phase-এ Selling Pressure থেকে Buying Pressure-এ Transition Signal করে।\n\n---\n\n## কাঠামো\n\n\`\`\`\nCandle 1: বড় Bearish (Trend Continuation)\nCandle 2: ছোট Body/Doji (Indecision - "Star")\nCandle 3: বড় Bullish (Reversal Confirmation)\n\`\`\`\n\n---\n\n## নিয়ম\n\n| Candle | প্রয়োজনীয়তা |\n|--------|------------|\n| C1 | বড় Bearish Candle (বিদ্যমান Downtrend Confirm) |\n| C2 | ছোট Body (Doji, Spinning Top) — Gap Down পছন্দনীয় |\n| C3 | বড় Bullish Candle যা C1-এর Body-র ভিতরে বা উপরে Close করে |\n| অবস্থান | Support, Demand Zone বা স্পষ্ট Downtrend-এর পর |\n\n---\n\n## Psychology\n\n1. **C1:** Seller এখনো নিয়ন্ত্রণে, আক্রমণাত্মকভাবে Price নিচে ঠেলছে\n2. **C2:** Selling Pressure শেষ — Indecision, কোনো পক্ষ জেতেনি\n3. **C3:** Buyer আক্রমণাত্মকভাবে নিয়ন্ত্রণ নেয়, C1-এর Loss-এর বেশিরভাগ মুছে দেয়\n4. তিন-পর্যায়ের Transition: নিয়ন্ত্রণ → Indecision → নতুন নিয়ন্ত্রণ\n\n---\n\n## Trading\n\n- Entry: C3-এর High-এর উপরে (Confirmed) বা C3 Close-এ (Moderate)\n- Stop: C2-এর Low-এর নিচে (Star)\n- Target: পরবর্তী Resistance বা ন্যূনতম 1:2 R:R\n- C3 যদি C1-এর Midpoint-এর উপরে Close করে তবে শক্তিশালী\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Evening Star](/bn/price-action/multi-candle-patterns/evening-star) — Bearish Version\n- [Reversal Concepts](/bn/price-action/reversal-concepts)\n`);

// 3. EVENING STAR
w('en','multi-candle-patterns','evening-star',{title:"Evening Star Pattern — Complete Guide",description:"Master the Evening Star 3-candle bearish reversal pattern at the top of uptrends.",level:"beginner",order:3},`
## What is the Evening Star?\n\nThe Evening Star is a **3-candle bearish reversal** pattern — the opposite of Morning Star. It forms at the top of uptrends and signals buyers losing control to sellers.\n\n---\n\n## Structure\n\n\`\`\`\nCandle 1: Large bullish (trend continuation)\nCandle 2: Small body/doji (indecision - the "star")\nCandle 3: Large bearish (reversal confirmation)\n\n                 ┏┓ C2 (star)\n   ┏━━┓        ┗┛\n   ┃  ┃ C1          ┏┓\n   ┃  ┃             ┃┃ C3 (big red)\n   ┗━━┛             ┃┃\n                    ┗┛\n\`\`\`\n\n---\n\n## Rules\n\n| Candle | Requirement |\n|--------|------------|\n| C1 | Large bullish candle |\n| C2 | Small body or doji — gaps up preferred |\n| C3 | Large bearish candle closing into or below C1's body |\n| Location | At resistance, supply zone, or after extended uptrend |\n\n---\n\n## Trading\n\n- Entry: Below C3's low or at C3 close\n- Stop: Above C2's high (the star)\n- Target: Next support level\n- Stronger when C3 closes below C1's midpoint\n\n---\n\n## Related Topics\n\n- [Morning Star](/en/price-action/multi-candle-patterns/morning-star) — Bullish version\n- [Reversal Concepts](/en/price-action/reversal-concepts)\n`);

w('bn','multi-candle-patterns','evening-star',{title:"Evening Star Pattern — সম্পূর্ণ গাইড",description:"Uptrend-এর শীর্ষে Evening Star 3-candle Bearish Reversal Pattern আয়ত্ত করুন।",level:"beginner",order:3},`
## Evening Star কী?\n\nEvening Star হলো একটি **3-candle Bearish Reversal** Pattern — Morning Star-এর বিপরীত। Uptrend-এর শীর্ষে তৈরি হয় এবং Buyer-এর কাছ থেকে Seller-এ নিয়ন্ত্রণ হারানো Signal করে।\n\n---\n\n## কাঠামো\n\n\`\`\`\nCandle 1: বড় Bullish (Trend Continuation)\nCandle 2: ছোট Body/Doji (Indecision - "Star")\nCandle 3: বড় Bearish (Reversal Confirmation)\n\`\`\`\n\n---\n\n## নিয়ম\n\n| Candle | প্রয়োজনীয়তা |\n|--------|------------|\n| C1 | বড় Bullish Candle |\n| C2 | ছোট Body বা Doji — Gap Up পছন্দনীয় |\n| C3 | বড় Bearish Candle যা C1-এর Body-র ভিতরে বা নিচে Close করে |\n| অবস্থান | Resistance, Supply Zone বা বিস্তৃত Uptrend-এর পর |\n\n---\n\n## Trading\n\n- Entry: C3-এর Low-এর নিচে বা C3 Close-এ\n- Stop: C2-এর High-এর উপরে (Star)\n- Target: পরবর্তী Support Level\n- C3 যদি C1-এর Midpoint-এর নিচে Close করে তবে শক্তিশালী\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Morning Star](/bn/price-action/multi-candle-patterns/morning-star) — Bullish Version\n- [Reversal Concepts](/bn/price-action/reversal-concepts)\n`);

// 4. HARAMI
w('en','multi-candle-patterns','harami',{title:"Harami Pattern — Complete Guide",description:"Master the Harami (Inside Bar) reversal pattern. Learn bullish and bearish Harami identification and trading strategies.",level:"beginner",order:4},`
## What is a Harami?\n\nHarami (Japanese for "pregnant") is a **2-candle pattern** where the second candle's body is completely contained within the first candle's body. It signals potential reversal or consolidation.\n\n---\n\n## Types\n\n### Bullish Harami (after downtrend):\n- C1: Large bearish candle\n- C2: Small bullish candle contained within C1's body\n- Signal: Selling momentum weakening\n\n### Bearish Harami (after uptrend):\n- C1: Large bullish candle\n- C2: Small bearish candle contained within C1's body\n- Signal: Buying momentum weakening\n\n---\n\n## Psychology\n\n- C1 shows strong directional momentum\n- C2 shows that momentum has STALLED\n- The containment means the counter-side is building strength\n- Not as strong as Engulfing — requires more confirmation\n\n---\n\n## Trading\n\n- Entry: Break above C1 high (bullish) or below C1 low (bearish)\n- Stop: Opposite end of C1\n- Stronger with volume confirmation and key level\n- Often used as an Inside Bar setup in Price Action\n- Wait for the breakout direction\n\n<Callout type="info" title="Harami = Inside Bar">\nIn Western Price Action terminology, a Harami is the same as an Inside Bar. Many traders prefer the Inside Bar approach — trading the breakout of the mother candle's range.\n</Callout>\n\n---\n\n## Related Topics\n\n- [Engulfing](/en/price-action/multi-candle-patterns/engulfing) — Opposite (outer candle dominates)\n- [Continuation](/en/price-action/continuation) — Inside bars as continuation\n`);

w('bn','multi-candle-patterns','harami',{title:"Harami Pattern — সম্পূর্ণ গাইড",description:"Harami (Inside Bar) Reversal Pattern আয়ত্ত করুন। Bullish ও Bearish Harami চিহ্নিতকরণ ও Trading Strategy শিখুন।",level:"beginner",order:4},`
## Harami কী?\n\nHarami (জাপানি ভাষায় "গর্ভবতী") হলো একটি **2-candle Pattern** যেখানে দ্বিতীয় Candle-এর Body প্রথম Candle-এর Body-র মধ্যে সম্পূর্ণ ধারণ করা থাকে। এটি সম্ভাব্য Reversal বা Consolidation Signal করে।\n\n---\n\n## ধরন\n\n### Bullish Harami (Downtrend-এর পর):\n- C1: বড় Bearish Candle\n- C2: C1-এর Body-র ভিতরে ছোট Bullish Candle\n- Signal: Selling Momentum দুর্বল হচ্ছে\n\n### Bearish Harami (Uptrend-এর পর):\n- C1: বড় Bullish Candle\n- C2: C1-এর Body-র ভিতরে ছোট Bearish Candle\n- Signal: Buying Momentum দুর্বল হচ্ছে\n\n---\n\n## Psychology\n\n- C1 শক্তিশালী Directional Momentum দেখায়\n- C2 দেখায় Momentum STALL করেছে\n- Containment মানে Counter-side শক্তি জমা করছে\n- Engulfing-এর মতো শক্তিশালী নয় — বেশি Confirmation প্রয়োজন\n\n---\n\n## Trading\n\n- Entry: C1 High-এর উপরে Break (Bullish) বা C1 Low-এর নিচে (Bearish)\n- Stop: C1-এর বিপরীত প্রান্ত\n- Volume Confirmation ও Key Level-সহ শক্তিশালী\n- Price Action-এ Inside Bar Setup হিসেবে ব্যবহৃত\n- Breakout Direction-এর জন্য অপেক্ষা করুন\n\n<Callout type="info" title="Harami = Inside Bar">\nWestern Price Action Terminology-তে Harami Inside Bar-এর সমান। অনেক Trader Inside Bar পদ্ধতি পছন্দ করেন — Mother Candle-এর Range-এর Breakout Trade করা।\n</Callout>\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Engulfing](/bn/price-action/multi-candle-patterns/engulfing) — বিপরীত (Outer Candle Dominate)\n- [Continuation](/bn/price-action/continuation) — Continuation হিসেবে Inside Bar\n`);

// 5. THREE WHITE SOLDIERS
w('en','multi-candle-patterns','three-white-soldiers',{title:"Three White Soldiers — Complete Guide",description:"Master the Three White Soldiers strong bullish continuation/reversal pattern.",level:"beginner",order:5},`
## What is Three White Soldiers?\n\nThree White Soldiers is a **3-candle bullish pattern** consisting of three consecutive large bullish candles, each opening within the previous candle's body and closing at or near its high. It signals strong buyer conviction.\n\n---\n\n## Identification\n\n| Rule | Requirement |\n|------|------------|\n| 3 consecutive bullish candles | Each with large bodies |\n| Progressive closing | Each closes higher than the previous |\n| Opening | Each opens within previous body |\n| Wicks | Small upper wicks (full conviction) |\n| Location | After downtrend or at support (reversal) |\n\n---\n\n## Psychology\n\n- Three consecutive sessions of buyer domination\n- No significant selling at any point\n- Each session builds on the previous with no weakness\n- Very strong momentum signal — trend change or continuation\n\n---\n\n## Trading\n\n- Used as confirmation of trend change (not entry signal)\n- Enter on pullback after the pattern completes\n- Stop: Below the first soldier's low\n- Caution: If candles are too large, price may be overextended\n- Best when appearing after a consolidation/base\n\n---\n\n## Related Topics\n\n- [Three Black Crows](/en/price-action/multi-candle-patterns/three-black-crows) — Bearish opposite\n- [Momentum](/en/price-action/momentum) — Strong momentum signal\n`);

w('bn','multi-candle-patterns','three-white-soldiers',{title:"Three White Soldiers — সম্পূর্ণ গাইড",description:"Three White Soldiers শক্তিশালী Bullish Continuation/Reversal Pattern আয়ত্ত করুন।",level:"beginner",order:5},`
## Three White Soldiers কী?\n\nThree White Soldiers হলো একটি **3-candle Bullish Pattern** যা তিনটি পরপর বড় Bullish Candle নিয়ে গঠিত, প্রতিটি আগের Candle-এর Body-র ভিতরে Open করে এবং High-এ বা তার কাছে Close করে। এটি শক্তিশালী Buyer Conviction Signal করে।\n\n---\n\n## চিহ্নিতকরণ\n\n| নিয়ম | প্রয়োজনীয়তা |\n|------|------------|\n| ৩ পরপর Bullish Candle | প্রতিটি বড় Body-সহ |\n| Progressive Closing | প্রতিটি আগেরটির চেয়ে উপরে Close |\n| Opening | প্রতিটি আগের Body-র ভিতরে Open |\n| Wick | ছোট Upper Wick (পূর্ণ Conviction) |\n| অবস্থান | Downtrend-এর পর বা Support-এ (Reversal) |\n\n---\n\n## Trading\n\n- Trend Change-এর Confirmation হিসেবে ব্যবহৃত (Entry Signal নয়)\n- Pattern Complete হওয়ার পর Pullback-এ Enter\n- Stop: প্রথম Soldier-এর Low-এর নিচে\n- সতর্কতা: Candle অত্যন্ত বড় হলে Price Overextended হতে পারে\n- Consolidation/Base-এর পর দেখা দিলে সেরা\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Three Black Crows](/bn/price-action/multi-candle-patterns/three-black-crows) — Bearish বিপরীত\n- [Momentum](/bn/price-action/momentum) — শক্তিশালী Momentum Signal\n`);

// 6. THREE BLACK CROWS
w('en','multi-candle-patterns','three-black-crows',{title:"Three Black Crows — Complete Guide",description:"Master the Three Black Crows strong bearish reversal pattern.",level:"beginner",order:6},`
## What is Three Black Crows?\n\nThree Black Crows is the **bearish opposite** of Three White Soldiers — three consecutive large bearish candles, each opening within the previous body and closing at or near its low. Signals strong selling pressure.\n\n---\n\n## Identification\n\n- 3 consecutive large bearish candles\n- Each opens within previous body\n- Each closes lower than previous\n- Small/no lower wicks (full selling conviction)\n- Best at resistance or after extended uptrend\n\n---\n\n## Psychology\n\n- Three consecutive sessions of seller domination\n- No meaningful buying at any point\n- Aggressive distribution or panic selling\n- Strong bearish momentum signal\n\n---\n\n## Trading\n\n- Confirms bearish reversal or continuation\n- Enter on pullback/retest after pattern\n- Stop: Above first crow's high\n- Target: Next support level\n- Caution: May be overextended — wait for retest\n\n---\n\n## Related Topics\n\n- [Three White Soldiers](/en/price-action/multi-candle-patterns/three-white-soldiers) — Bullish opposite\n- [Reversal Concepts](/en/price-action/reversal-concepts)\n`);

w('bn','multi-candle-patterns','three-black-crows',{title:"Three Black Crows — সম্পূর্ণ গাইড",description:"Three Black Crows শক্তিশালী Bearish Reversal Pattern আয়ত্ত করুন।",level:"beginner",order:6},`
## Three Black Crows কী?\n\nThree Black Crows হলো Three White Soldiers-এর **Bearish বিপরীত** — তিনটি পরপর বড় Bearish Candle, প্রতিটি আগের Body-র ভিতরে Open করে এবং Low-তে বা তার কাছে Close করে। শক্তিশালী Selling Pressure Signal করে।\n\n---\n\n## চিহ্নিতকরণ\n\n- ৩ পরপর বড় Bearish Candle\n- প্রতিটি আগের Body-র ভিতরে Open\n- প্রতিটি আগেরটির চেয়ে নিচে Close\n- ছোট/নেই Lower Wick (পূর্ণ Selling Conviction)\n- Resistance-এ বা বিস্তৃত Uptrend-এর পর সেরা\n\n---\n\n## Trading\n\n- Bearish Reversal বা Continuation Confirm করে\n- Pattern-এর পর Pullback/Retest-এ Enter\n- Stop: প্রথম Crow-এর High-এর উপরে\n- Target: পরবর্তী Support Level\n- সতর্কতা: Overextended হতে পারে — Retest অপেক্ষা করুন\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Three White Soldiers](/bn/price-action/multi-candle-patterns/three-white-soldiers) — Bullish বিপরীত\n- [Reversal Concepts](/bn/price-action/reversal-concepts)\n`);

// 7. TWEEZER TOPS/BOTTOMS
w('en','multi-candle-patterns','tweezer-tops-bottoms',{title:"Tweezer Tops & Bottoms — Complete Guide",description:"Master Tweezer patterns — double rejection signals at the same price level indicating strong reversal potential.",level:"beginner",order:7},`
## What are Tweezers?\n\nTweezer patterns are **2-candle patterns** where both candles test the same high (Tweezer Top) or same low (Tweezer Bottom) but fail — creating a double rejection at the same price level.\n\n---\n\n## Tweezer Bottom (Bullish)\n\n- Two candles with matching lows (same support level)\n- Both wicks reject the same low\n- Signal: Double rejection = strong support, buyers stepping in\n- Best at key support levels\n\n## Tweezer Top (Bearish)\n\n- Two candles with matching highs (same resistance level)\n- Both wicks reject the same high\n- Signal: Double rejection = strong resistance, sellers defending\n- Best at key resistance levels\n\n---\n\n## Psychology\n\n- Price tested the same level TWICE and failed both times\n- This creates a very strong rejection signal\n- Think of it as the market saying "NOT going past here"\n- Two failures = much stronger than one\n\n---\n\n## Trading\n\n- Entry: After second candle closes (direction confirmed)\n- Stop: Beyond the tweezer level (the matching H/L)\n- Target: Next opposing level\n- Stronger when combined with other confluences (S/R, OB, Fib)\n- The tighter the matching level, the more precise the pattern\n\n---\n\n## Related Topics\n\n- [Support & Resistance](/en/price-action/support-resistance) — Where tweezers form\n- [Reversal Concepts](/en/price-action/reversal-concepts)\n`);

w('bn','multi-candle-patterns','tweezer-tops-bottoms',{title:"Tweezer Top ও Bottom — সম্পূর্ণ গাইড",description:"Tweezer Pattern আয়ত্ত করুন — একই Price Level-এ Double Rejection Signal যা শক্তিশালী Reversal Potential নির্দেশ করে।",level:"beginner",order:7},`
## Tweezer কী?\n\nTweezer Pattern হলো **2-candle Pattern** যেখানে দুটি Candle একই High (Tweezer Top) বা একই Low (Tweezer Bottom) Test করে কিন্তু ব্যর্থ হয় — একই Price Level-এ Double Rejection তৈরি করে।\n\n---\n\n## Tweezer Bottom (Bullish)\n\n- দুটি Candle-এর মিলে যাওয়া Low (একই Support Level)\n- উভয় Wick একই Low Reject করে\n- Signal: Double Rejection = শক্তিশালী Support, Buyer আসছে\n- Key Support Level-এ সেরা\n\n## Tweezer Top (Bearish)\n\n- দুটি Candle-এর মিলে যাওয়া High (একই Resistance Level)\n- উভয় Wick একই High Reject করে\n- Signal: Double Rejection = শক্তিশালী Resistance, Seller Defend করছে\n- Key Resistance Level-এ সেরা\n\n---\n\n## Psychology\n\n- Price একই Level দুবার Test করে দুবার ব্যর্থ হয়েছে\n- এটি অত্যন্ত শক্তিশালী Rejection Signal তৈরি করে\n- Market বলছে "এখান দিয়ে যাবে না"\n- দুটি ব্যর্থতা = একটির চেয়ে অনেক শক্তিশালী\n\n---\n\n## Trading\n\n- Entry: দ্বিতীয় Candle Close-এর পর (Direction Confirmed)\n- Stop: Tweezer Level-এর বাইরে (মিলে যাওয়া H/L)\n- Target: পরবর্তী Opposing Level\n- অন্যান্য Confluence-সহ (S/R, OB, Fib) শক্তিশালী\n- Matching Level যত Tight, Pattern তত সুনির্দিষ্ট\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Support ও Resistance](/bn/price-action/support-resistance) — যেখানে Tweezer তৈরি হয়\n- [Reversal Concepts](/bn/price-action/reversal-concepts)\n`);

// 8. PIERCING LINE
w('en','multi-candle-patterns','piercing-line',{title:"Piercing Line Pattern — Complete Guide",description:"Master the Piercing Line bullish reversal pattern — a 2-candle signal at the bottom of downtrends.",level:"beginner",order:8},`
## What is the Piercing Line?\n\nThe Piercing Line is a **2-candle bullish reversal** pattern. The first candle is bearish (continuing the downtrend), and the second candle opens below C1's low but closes above the midpoint of C1's body — "piercing" into it.\n\n---\n\n## Rules\n\n- C1: Large bearish candle\n- C2: Opens below C1's low (gap down)\n- C2: Closes above the 50% midpoint of C1's body\n- C2: Must NOT close above C1's open (that would be Engulfing)\n- Location: At support or after downtrend\n\n---\n\n## Psychology\n\n- Sellers continue pushing (C1)\n- C2 opens even lower (sellers still in control)\n- Then buyers aggressively reverse, closing deep into C1\n- Shows strong buying counter-attack despite bearish start\n\n---\n\n## Trading\n\n- Entry: Above C2's high on next confirmation candle\n- Stop: Below C2's low\n- Target: Next resistance\n- Weaker than Engulfing (doesn't fully cover C1)\n- Best with additional confluence\n\n---\n\n## Related Topics\n\n- [Dark Cloud Cover](/en/price-action/multi-candle-patterns/dark-cloud-cover) — Bearish opposite\n- [Engulfing](/en/price-action/multi-candle-patterns/engulfing) — Stronger version\n`);

w('bn','multi-candle-patterns','piercing-line',{title:"Piercing Line Pattern — সম্পূর্ণ গাইড",description:"Piercing Line Bullish Reversal Pattern আয়ত্ত করুন — Downtrend-এর নিচে 2-candle Signal।",level:"beginner",order:8},`
## Piercing Line কী?\n\nPiercing Line হলো একটি **2-candle Bullish Reversal** Pattern। প্রথম Candle Bearish (Downtrend Continue), এবং দ্বিতীয় Candle C1-এর Low-এর নিচে Open করে কিন্তু C1-এর Body-র Midpoint-এর উপরে Close করে — এতে "Pierce" করে।\n\n---\n\n## নিয়ম\n\n- C1: বড় Bearish Candle\n- C2: C1-এর Low-এর নিচে Open (Gap Down)\n- C2: C1-এর Body-র 50% Midpoint-এর উপরে Close\n- C2: C1-এর Open-এর উপরে Close করবে না (তাহলে Engulfing হতো)\n- অবস্থান: Support-এ বা Downtrend-এর পর\n\n---\n\n## Psychology\n\n- Seller চালিয়ে যাচ্ছে (C1)\n- C2 আরো নিচে Open করে (Seller এখনো নিয়ন্ত্রণে)\n- তারপর Buyer আক্রমণাত্মকভাবে Reverse করে, C1-এর গভীরে Close করে\n- Bearish শুরু সত্ত্বেও শক্তিশালী Buying Counter-attack দেখায়\n\n---\n\n## Trading\n\n- Entry: পরবর্তী Confirmation Candle-এ C2-এর High-এর উপরে\n- Stop: C2-এর Low-এর নিচে\n- Target: পরবর্তী Resistance\n- Engulfing-এর চেয়ে দুর্বল (C1 সম্পূর্ণ Cover করে না)\n- অতিরিক্ত Confluence-সহ সেরা\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Dark Cloud Cover](/bn/price-action/multi-candle-patterns/dark-cloud-cover) — Bearish বিপরীত\n- [Engulfing](/bn/price-action/multi-candle-patterns/engulfing) — শক্তিশালী Version\n`);

// 9. DARK CLOUD COVER
w('en','multi-candle-patterns','dark-cloud-cover',{title:"Dark Cloud Cover — Complete Guide",description:"Master the Dark Cloud Cover bearish reversal pattern — the opposite of Piercing Line.",level:"beginner",order:9},`
## What is Dark Cloud Cover?\n\nDark Cloud Cover is a **2-candle bearish reversal** — the opposite of Piercing Line. The first candle is bullish, and the second opens above C1's high but closes below the midpoint of C1's body.\n\n---\n\n## Rules\n\n- C1: Large bullish candle\n- C2: Opens above C1's high (gap up)\n- C2: Closes below the 50% midpoint of C1's body\n- C2: Must NOT close below C1's open (that would be Engulfing)\n- Location: At resistance or after uptrend\n\n---\n\n## Psychology\n\n- Buyers continue pushing higher (C1)\n- C2 opens even higher (bulls still confident)\n- Then sellers take over aggressively, pushing deep into C1\n- The "dark cloud" is covering the previous bullish optimism\n\n---\n\n## Trading\n\n- Entry: Below C2's low on next confirmation candle\n- Stop: Above C2's high\n- Target: Next support\n- Weaker than Bearish Engulfing\n- Needs additional confluence for reliability\n\n---\n\n## Related Topics\n\n- [Piercing Line](/en/price-action/multi-candle-patterns/piercing-line) — Bullish opposite\n- [Engulfing](/en/price-action/multi-candle-patterns/engulfing) — Stronger bearish signal\n`);

w('bn','multi-candle-patterns','dark-cloud-cover',{title:"Dark Cloud Cover — সম্পূর্ণ গাইড",description:"Dark Cloud Cover Bearish Reversal Pattern আয়ত্ত করুন — Piercing Line-এর বিপরীত।",level:"beginner",order:9},`
## Dark Cloud Cover কী?\n\nDark Cloud Cover হলো একটি **2-candle Bearish Reversal** — Piercing Line-এর বিপরীত। প্রথম Candle Bullish, এবং দ্বিতীয় C1-এর High-এর উপরে Open করে কিন্তু C1-এর Body-র Midpoint-এর নিচে Close করে।\n\n---\n\n## নিয়ম\n\n- C1: বড় Bullish Candle\n- C2: C1-এর High-এর উপরে Open (Gap Up)\n- C2: C1-এর Body-র 50% Midpoint-এর নিচে Close\n- C2: C1-এর Open-এর নিচে Close করবে না (তাহলে Engulfing হতো)\n- অবস্থান: Resistance-এ বা Uptrend-এর পর\n\n---\n\n## Psychology\n\n- Buyer উপরে ঠেলতে থাকে (C1)\n- C2 আরো উপরে Open করে (Bull এখনো আত্মবিশ্বাসী)\n- তারপর Seller আক্রমণাত্মকভাবে নিয়ন্ত্রণ নেয়, C1-এর গভীরে ঠেলে\n- "Dark Cloud" পূর্ববর্তী Bullish আশাবাদ ঢেকে দিচ্ছে\n\n---\n\n## Trading\n\n- Entry: পরবর্তী Confirmation Candle-এ C2-এর Low-এর নিচে\n- Stop: C2-এর High-এর উপরে\n- Target: পরবর্তী Support\n- Bearish Engulfing-এর চেয়ে দুর্বল\n- নির্ভরযোগ্যতার জন্য অতিরিক্ত Confluence প্রয়োজন\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Piercing Line](/bn/price-action/multi-candle-patterns/piercing-line) — Bullish বিপরীত\n- [Engulfing](/bn/price-action/multi-candle-patterns/engulfing) — শক্তিশালী Bearish Signal\n`);

console.log('\n✅ Multi Candle Patterns Complete: 9 patterns × 2 languages = 18 files');
console.log('\n🎉 ALL CANDLE PATTERNS DONE: 17 patterns × 2 languages = 34 files total');

