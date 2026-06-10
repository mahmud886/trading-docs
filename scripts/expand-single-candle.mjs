import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l,cat,s,f,c) => { writeFileSync(join(C,l,'price-action',cat,s+'.mdx'), `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-06-10"\n---\n`+c,'utf-8'); console.log(`✅ ${l}/price-action/${cat}/${s}`); };

// ============================================================
// SINGLE CANDLE PATTERNS (8 patterns × 2 languages = 16 files)
// ============================================================

// 1. HAMMER
w('en','single-candle-patterns','hammer',{title:"Hammer Candlestick Pattern — Complete Guide",description:"Master the Hammer pattern. Learn identification rules, psychology, optimal trading locations, entry/exit strategies, and real-world examples.",level:"beginner",order:1},`
## What is the Hammer?

The Hammer is a **bullish reversal** single-candle pattern that forms at the bottom of a downtrend. It signals that sellers pushed price down significantly during the session, but buyers stepped in strongly and pushed price back up near the open — rejecting lower prices.

---

## Identification Rules

| Component | Requirement |
|-----------|------------|
| **Body** | Small body at the UPPER end of the range |
| **Lower wick** | At least 2× the body length (the longer the better) |
| **Upper wick** | Very small or non-existent |
| **Color** | Bullish (green) preferred, but bearish (red) also valid |
| **Location** | Must appear after a downtrend or at support |

\`\`\`
Hammer:
    ┃ ← Small/no upper wick
   ┏┓ ← Small body (top of range)
   ┗┛
    ┃
    ┃ ← Long lower wick (2x+ body)
    ┃
\`\`\`

---

## Psychology

1. Session opens after a downtrend
2. Sellers push price significantly lower (creating the long lower wick)
3. Buyers step in aggressively and push price all the way back up
4. Session closes near the open (or higher)
5. **Message:** Sellers tried their hardest but FAILED — buyers are returning

---

## How to Trade

### Entry:
- **Conservative:** Enter above the Hammer's high on the next candle
- **Aggressive:** Enter at the close of the Hammer candle

### Stop Loss:
- Below the Hammer's low (the wick) + 5-10 pip buffer
- This is the "if wrong" level — if price goes below, the pattern failed

### Take Profit:
- Next resistance level or swing high
- 1:2 or 1:3 Risk:Reward minimum
- Previous structure high

### Confirmation:
- Next candle closes bullish (above Hammer's close)
- Forms at key support level
- Higher timeframe is bullish
- Volume increase on the Hammer

<Callout type="warning" title="Context is Everything">
A Hammer in the middle of nowhere is meaningless. It MUST form at a significant support level, Order Block, or after a clear downtrend to be valid. Location determines probability.
</Callout>

---

## Hammer vs. Similar Patterns

| Pattern | Location | Signal |
|---------|----------|--------|
| **Hammer** | Bottom of downtrend | Bullish reversal |
| **Hanging Man** | Top of uptrend | Bearish reversal |
| **Pin Bar** | Any (includes both) | Rejection signal |

---

## Related Topics

- [Candlestick Psychology](/en/price-action/candlestick-psychology) — Why wicks form
- [Support & Resistance](/en/price-action/support-resistance) — Where to look for Hammers
- [Confirmation](/en/price-action/confirmation) — Confirming the pattern
`);

w('bn','single-candle-patterns','hammer',{title:"Hammer Candlestick Pattern — সম্পূর্ণ গাইড",description:"Hammer Pattern আয়ত্ত করুন। চিহ্নিতকরণ নিয়ম, Psychology, সেরা Trading Location, Entry/Exit Strategy এবং বাস্তব উদাহরণ শিখুন।",level:"beginner",order:1},`
## Hammer কী?

Hammer হলো একটি **Bullish Reversal** Single-candle Pattern যা Downtrend-এর নিচে তৈরি হয়। এটি Signal দেয় যে Session-এ Seller Price উল্লেখযোগ্যভাবে নিচে ঠেলেছিল, কিন্তু Buyer শক্তিশালীভাবে এসে Price Open-এর কাছে ফিরিয়ে এনেছে — নিচু Price Reject করেছে।

---

## চিহ্নিতকরণ নিয়ম

| উপাদান | প্রয়োজনীয়তা |
|---------|------------|
| **Body** | Range-এর উপরের দিকে ছোট Body |
| **Lower Wick** | Body-র কমপক্ষে ২× দৈর্ঘ্য (যত লম্বা তত ভালো) |
| **Upper Wick** | অত্যন্ত ছোট বা নেই |
| **রঙ** | Bullish (Green) পছন্দনীয়, কিন্তু Bearish (Red)-ও Valid |
| **অবস্থান** | Downtrend-এর পর বা Support-এ হতে হবে |

\`\`\`
Hammer:
    ┃ ← ছোট/নেই Upper Wick
   ┏┓ ← ছোট Body (Range-এর Top)
   ┗┛
    ┃
    ┃ ← লম্বা Lower Wick (Body-র 2x+)
    ┃
\`\`\`

---

## Psychology

1. Downtrend-এর পর Session Open হয়
2. Seller Price উল্লেখযোগ্যভাবে নিচে ঠেলে (লম্বা Lower Wick তৈরি)
3. Buyer আক্রমণাত্মকভাবে এসে Price সম্পূর্ণ উপরে ফিরিয়ে দেয়
4. Session Open-এর কাছে (বা উপরে) Close হয়
5. **বার্তা:** Seller সর্বোচ্চ চেষ্টা করে ব্যর্থ হয়েছে — Buyer ফিরছে

---

## কীভাবে Trade করবেন

### Entry:
- **Conservative:** পরবর্তী Candle-এ Hammer-এর High-এর উপরে Enter
- **Aggressive:** Hammer Candle-এর Close-এ Enter

### Stop Loss:
- Hammer-এর Low-এর (Wick) নিচে + ৫-১০ Pip Buffer
- এটি "ভুল হলে" Level — Price নিচে গেলে Pattern ব্যর্থ

### Take Profit:
- পরবর্তী Resistance Level বা Swing High
- ন্যূনতম 1:2 বা 1:3 Risk:Reward
- পূর্ববর্তী Structure High

### Confirmation:
- পরবর্তী Candle Bullish Close করে (Hammer-এর Close-এর উপরে)
- Key Support Level-এ তৈরি হয়
- Higher Timeframe Bullish
- Hammer-এ Volume বাড়ে

<Callout type="warning" title="Context-ই সবকিছু">
কোনো নির্দিষ্ট জায়গা ছাড়া Hammer অর্থহীন। এটি অবশ্যই একটি তাৎপর্যপূর্ণ Support Level, Order Block বা স্পষ্ট Downtrend-এর পরে তৈরি হতে হবে Valid হতে। অবস্থান Probability নির্ধারণ করে।
</Callout>

---

## সম্পর্কিত বিষয়

- [Candlestick Psychology](/bn/price-action/candlestick-psychology) — Wick কেন তৈরি হয়
- [Support ও Resistance](/bn/price-action/support-resistance) — কোথায় Hammer খুঁজবেন
- [Confirmation](/bn/price-action/confirmation) — Pattern Confirm করা
`);

// 2. SHOOTING STAR
w('en','single-candle-patterns','shooting-star',{title:"Shooting Star Pattern — Complete Guide",description:"Master the Shooting Star bearish reversal pattern. Learn identification, psychology, and precise trading strategies.",level:"beginner",order:2},`
## What is the Shooting Star?

The Shooting Star is a **bearish reversal** pattern that forms at the top of an uptrend. It shows buyers pushed price high but sellers overwhelmed them, pushing price back down to close near the open.

---

## Identification Rules

| Component | Requirement |
|-----------|------------|
| **Body** | Small body at the LOWER end of the range |
| **Upper wick** | At least 2× the body length |
| **Lower wick** | Very small or non-existent |
| **Location** | Must appear after an uptrend or at resistance |

\`\`\`
Shooting Star:
    ┃
    ┃ ← Long upper wick (2x+ body)
    ┃
   ┏┓ ← Small body (bottom of range)
   ┗┛
    ┃ ← Small/no lower wick
\`\`\`

---

## Psychology

1. Uptrend continues, buyers push price to new high
2. Strong selling pressure enters at the high
3. Sellers overwhelm buyers, push price back to open
4. **Message:** Buyers reached exhaustion — sellers are taking control

---

## How to Trade

### Entry:
- Below the Shooting Star's low on next candle confirmation
- Or at close of the Shooting Star (aggressive)

### Stop Loss:
- Above the Shooting Star's high (upper wick tip) + buffer

### Take Profit:
- Next support level or swing low
- Minimum 1:2 R:R

### Best Locations:
- At major resistance levels
- At Order Block (supply zone)
- After extended uptrend (exhaustion)
- At Fibonacci extension levels (127.2%, 161.8%)

---

## Related Topics

- [Hanging Man](/en/price-action/single-candle-patterns/hanging-man) — Similar bearish signal
- [Reversal Concepts](/en/price-action/reversal-concepts) — Context for reversals
- [Candlestick Psychology](/en/price-action/candlestick-psychology) — Reading rejection
`);

w('bn','single-candle-patterns','shooting-star',{title:"Shooting Star Pattern — সম্পূর্ণ গাইড",description:"Shooting Star Bearish Reversal Pattern আয়ত্ত করুন। চিহ্নিতকরণ, Psychology এবং সুনির্দিষ্ট Trading Strategy শিখুন।",level:"beginner",order:2},`
## Shooting Star কী?

Shooting Star হলো একটি **Bearish Reversal** Pattern যা Uptrend-এর শীর্ষে তৈরি হয়। এটি দেখায় Buyer Price উপরে ঠেলেছিল কিন্তু Seller তাদের পরাজিত করে Price Open-এর কাছে ফিরিয়ে এনেছে।

---

## চিহ্নিতকরণ নিয়ম

| উপাদান | প্রয়োজনীয়তা |
|---------|------------|
| **Body** | Range-এর নিচের দিকে ছোট Body |
| **Upper Wick** | Body-র কমপক্ষে ২× দৈর্ঘ্য |
| **Lower Wick** | অত্যন্ত ছোট বা নেই |
| **অবস্থান** | Uptrend-এর পর বা Resistance-এ হতে হবে |

\`\`\`
Shooting Star:
    ┃
    ┃ ← লম্বা Upper Wick (Body-র 2x+)
    ┃
   ┏┓ ← ছোট Body (Range-এর Bottom)
   ┗┛
    ┃ ← ছোট/নেই Lower Wick
\`\`\`

---

## Psychology

1. Uptrend চলে, Buyer Price নতুন High-এ ঠেলে
2. High-তে শক্তিশালী Selling Pressure আসে
3. Seller Buyer-কে পরাজিত করে Price Open-এ ফিরিয়ে দেয়
4. **বার্তা:** Buyer Exhaustion-এ পৌঁছেছে — Seller নিয়ন্ত্রণ নিচ্ছে

---

## কীভাবে Trade করবেন

### Entry:
- পরবর্তী Candle Confirmation-এ Shooting Star-এর Low-এর নিচে
- অথবা Shooting Star-এর Close-এ (Aggressive)

### Stop Loss:
- Shooting Star-এর High-এর (Upper Wick Tip) উপরে + Buffer

### Take Profit:
- পরবর্তী Support Level বা Swing Low
- ন্যূনতম 1:2 R:R

### সেরা অবস্থান:
- Major Resistance Level-এ
- Order Block (Supply Zone)-এ
- বিস্তৃত Uptrend-এর পর (Exhaustion)
- Fibonacci Extension Level-এ (127.2%, 161.8%)

---

## সম্পর্কিত বিষয়

- [Hanging Man](/bn/price-action/single-candle-patterns/hanging-man) — একই ধরনের Bearish Signal
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Reversal-এর Context
- [Candlestick Psychology](/bn/price-action/candlestick-psychology) — Rejection পড়া
`);

// 3. DOJI
w('en','single-candle-patterns','doji',{title:"Doji Candlestick Pattern — Complete Guide",description:"Master the Doji pattern — the ultimate indecision candle. Learn all Doji types, psychology, and when they signal reversals vs. continuation.",level:"beginner",order:3},`
## What is a Doji?

A Doji forms when the open and close are **virtually equal**, creating a candle with almost no body. It represents perfect **indecision** — neither buyers nor sellers could gain control during the session.

---

## Doji Types

| Type | Shape | Meaning |
|------|-------|---------|
| **Standard Doji** | + shape (equal wicks) | Pure indecision |
| **Long-legged Doji** | + with very long wicks | Extreme indecision, battle |
| **Dragonfly Doji** | T shape (long lower wick) | Bullish rejection (like Hammer) |
| **Gravestone Doji** | Inverted T (long upper wick) | Bearish rejection (like Shooting Star) |

\`\`\`
Standard:  Long-legged:  Dragonfly:  Gravestone:
   ┃          ┃             ━            ┃
   ━          ┃             ┃            ┃
   ┃          ━             ┃            ━
              ┃             ┃
              ┃
\`\`\`

---

## Psychology

- Doji = "I don't know" candle — the market is undecided
- After a strong trend, Doji = exhaustion signal (possible reversal)
- In consolidation, Doji = market still deciding (no signal)
- **Context determines meaning** — a Doji alone means nothing

---

## Trading the Doji

### Bullish Signal (at support/after downtrend):
- Dragonfly Doji at support = potential bounce
- Standard Doji after selloff = sellers losing steam
- Confirm with next bullish candle

### Bearish Signal (at resistance/after uptrend):
- Gravestone Doji at resistance = potential reversal down
- Standard Doji after rally = buyers losing steam
- Confirm with next bearish candle

### NOT a Signal:
- Doji in the middle of a range (just noise)
- Doji with no context (no nearby S/R, no trend)
- Multiple Dojis in a row (just consolidation)

<Callout type="info" title="Key Rule">
A Doji is NOT a trade signal by itself. It's a WARNING that momentum may be shifting. Always wait for the NEXT candle to confirm direction before entering.
</Callout>

---

## Related Topics

- [Spinning Top](/en/price-action/single-candle-patterns/spinning-top) — Similar indecision
- [Candlestick Psychology](/en/price-action/candlestick-psychology) — Reading indecision
- [Reversal Concepts](/en/price-action/reversal-concepts) — Doji at turning points
`);

w('bn','single-candle-patterns','doji',{title:"Doji Candlestick Pattern — সম্পূর্ণ গাইড",description:"Doji Pattern আয়ত্ত করুন — চূড়ান্ত Indecision Candle। সব Doji Type, Psychology এবং কখন Reversal vs. Continuation Signal দেয় শিখুন।",level:"beginner",order:3},`
## Doji কী?

Doji তৈরি হয় যখন Open ও Close **প্রায় সমান**, প্রায় কোনো Body ছাড়া Candle তৈরি করে। এটি সম্পূর্ণ **Indecision** প্রতিনিধিত্ব করে — Session-এ Buyer বা Seller কেউ নিয়ন্ত্রণ নিতে পারেনি।

---

## Doji-র ধরন

| ধরন | আকৃতি | অর্থ |
|------|-------|------|
| **Standard Doji** | + আকৃতি (সমান Wick) | বিশুদ্ধ Indecision |
| **Long-legged Doji** | অত্যন্ত লম্বা Wick-সহ + | চরম Indecision, যুদ্ধ |
| **Dragonfly Doji** | T আকৃতি (লম্বা Lower Wick) | Bullish Rejection (Hammer-এর মতো) |
| **Gravestone Doji** | উল্টো T (লম্বা Upper Wick) | Bearish Rejection (Shooting Star-এর মতো) |

---

## Psychology

- Doji = "জানি না" Candle — Market অনিশ্চিত
- শক্তিশালী Trend-এর পর Doji = Exhaustion Signal (সম্ভাব্য Reversal)
- Consolidation-এ Doji = Market এখনো সিদ্ধান্ত নিচ্ছে (কোনো Signal নয়)
- **Context অর্থ নির্ধারণ করে** — একা Doji-র কোনো অর্থ নেই

---

## Doji Trade করা

### Bullish Signal (Support-এ/Downtrend-এর পর):
- Support-এ Dragonfly Doji = সম্ভাব্য Bounce
- Selloff-এর পর Standard Doji = Seller শক্তি হারাচ্ছে
- পরবর্তী Bullish Candle দিয়ে Confirm

### Bearish Signal (Resistance-এ/Uptrend-এর পর):
- Resistance-এ Gravestone Doji = সম্ভাব্য নিম্নমুখী Reversal
- Rally-র পর Standard Doji = Buyer শক্তি হারাচ্ছে
- পরবর্তী Bearish Candle দিয়ে Confirm

### Signal নয়:
- Range-এর মাঝে Doji (শুধু Noise)
- Context ছাড়া Doji (কাছে কোনো S/R নেই, কোনো Trend নেই)
- পরপর একাধিক Doji (শুধু Consolidation)

<Callout type="info" title="মূল নিয়ম">
Doji নিজে কোনো Trade Signal নয়। এটি একটি সতর্কতা যে Momentum Shift হতে পারে। Enter করার আগে সবসময় পরবর্তী CANDLE Direction Confirm করার জন্য অপেক্ষা করুন।
</Callout>

---

## সম্পর্কিত বিষয়

- [Spinning Top](/bn/price-action/single-candle-patterns/spinning-top) — একই ধরনের Indecision
- [Candlestick Psychology](/bn/price-action/candlestick-psychology) — Indecision পড়া
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Turning Point-এ Doji
`);

// 4. PIN BAR
w('en','single-candle-patterns','pin-bar',{title:"Pin Bar Pattern — Complete Guide",description:"Master the Pin Bar — the most traded rejection pattern. Learn bullish and bearish Pin Bars, optimal locations, and professional entry techniques.",level:"beginner",order:4},`
## What is a Pin Bar?

A Pin Bar (Pinocchio Bar) is a **rejection candle** with a long wick on one side and a small body on the opposite side. It shows price was rejected from a level — the "nose" (wick) shows where price tried to go but failed.

---

## Types

### Bullish Pin Bar (at support):
- Long lower wick (rejection of lower prices)
- Small body at top
- Signal: Buyers rejected sellers → price going up

### Bearish Pin Bar (at resistance):
- Long upper wick (rejection of higher prices)
- Small body at bottom
- Signal: Sellers rejected buyers → price going down

---

## Identification Rules

| Rule | Requirement |
|------|------------|
| Wick | Must be 2/3+ of total candle range |
| Body | Small, in opposite third of the range |
| Opposite wick | Very small or none |
| Nose direction | Points AWAY from expected move direction |
| Context | Must be at a key level (S/R, OB, Fib) |

---

## How to Trade

### Conservative Entry:
- Wait for close, enter above/below Pin Bar on next candle
- Stop: Beyond the Pin Bar wick tip
- Higher win rate, slightly lower R:R

### Aggressive Entry (50% retrace):
- Enter at the 50% retrace of the Pin Bar range
- Stop: Beyond the wick tip
- Better R:R (often 1:3 to 1:5)
- Lower win rate (may not fill)

### Pro Tip:
The 50% entry of a Pin Bar at a key level with HTF confluence is one of the HIGHEST R:R setups in Price Action.

---

## Related Topics

- [Hammer](/en/price-action/single-candle-patterns/hammer) — Bullish Pin Bar variant
- [Shooting Star](/en/price-action/single-candle-patterns/shooting-star) — Bearish Pin Bar variant
- [Entry Models](/en/price-action/entry-models) — Pin Bar entry techniques
`);

w('bn','single-candle-patterns','pin-bar',{title:"Pin Bar Pattern — সম্পূর্ণ গাইড",description:"Pin Bar আয়ত্ত করুন — সবচেয়ে বেশি Trade হওয়া Rejection Pattern। Bullish ও Bearish Pin Bar, সেরা Location এবং Professional Entry Technique শিখুন।",level:"beginner",order:4},`
## Pin Bar কী?

Pin Bar (Pinocchio Bar) হলো একটি **Rejection Candle** যার একদিকে লম্বা Wick ও বিপরীত দিকে ছোট Body। এটি দেখায় Price একটি Level থেকে Reject হয়েছে — "Nose" (Wick) দেখায় Price কোথায় যেতে চেয়েছিল কিন্তু ব্যর্থ হয়েছে।

---

## ধরন

### Bullish Pin Bar (Support-এ):
- লম্বা Lower Wick (নিচু Price-এর Rejection)
- উপরে ছোট Body
- Signal: Buyer Seller-কে Reject করেছে → Price উপরে যাবে

### Bearish Pin Bar (Resistance-এ):
- লম্বা Upper Wick (উচ্চু Price-এর Rejection)
- নিচে ছোট Body
- Signal: Seller Buyer-কে Reject করেছে → Price নিচে যাবে

---

## চিহ্নিতকরণ নিয়ম

| নিয়ম | প্রয়োজনীয়তা |
|------|------------|
| Wick | মোট Candle Range-এর 2/3+ হতে হবে |
| Body | ছোট, Range-এর বিপরীত এক-তৃতীয়াংশে |
| বিপরীত Wick | অত্যন্ত ছোট বা নেই |
| Nose-এর দিক | প্রত্যাশিত Move Direction থেকে বিপরীতে Point করে |
| Context | Key Level-এ হতে হবে (S/R, OB, Fib) |

---

## কীভাবে Trade করবেন

### Conservative Entry:
- Close অপেক্ষা করুন, পরবর্তী Candle-এ Pin Bar-এর High/Low-এর উপরে/নিচে Enter
- Stop: Pin Bar Wick Tip-এর বাইরে
- বেশি Win Rate, সামান্য কম R:R

### Aggressive Entry (50% Retrace):
- Pin Bar Range-এর 50% Retrace-এ Enter
- Stop: Wick Tip-এর বাইরে
- ভালো R:R (প্রায়ই 1:3 থেকে 1:5)
- কম Win Rate (Fill নাও হতে পারে)

### Pro Tip:
HTF Confluence-সহ Key Level-এ Pin Bar-এর 50% Entry হলো Price Action-এ সর্বোচ্চ R:R Setup-এর একটি।

---

## সম্পর্কিত বিষয়

- [Hammer](/bn/price-action/single-candle-patterns/hammer) — Bullish Pin Bar Variant
- [Shooting Star](/bn/price-action/single-candle-patterns/shooting-star) — Bearish Pin Bar Variant
- [Entry Models](/bn/price-action/entry-models) — Pin Bar Entry Technique
`);

// 5-8: Remaining single candle patterns (more compact)
w('en','single-candle-patterns','marubozu',{title:"Marubozu Pattern — Complete Guide",description:"Master the Marubozu — the strongest momentum candle. Learn bullish and bearish Marubozu, what they signal, and how to trade continuation.",level:"beginner",order:5},`
## What is a Marubozu?\n\nA Marubozu is a candle with a **full body and no wicks** (or very small wicks). It represents complete dominance by one side — no opposition whatsoever.\n\n---\n\n## Types\n\n### Bullish Marubozu:\n- Large green body, no/tiny wicks\n- Opens at the low, closes at the high\n- **Signal:** Extreme buyer control, continuation likely\n\n### Bearish Marubozu:\n- Large red body, no/tiny wicks\n- Opens at the high, closes at the low\n- **Signal:** Extreme seller control, continuation likely\n\n---\n\n## Psychology\n\n- One side had TOTAL control the entire session\n- No counter-pressure at any point\n- Strongest momentum signal a single candle can give\n- Often marks the beginning of a new trend or acceleration\n\n---\n\n## How to Trade\n\n- **Don't fade it** — Never trade against a Marubozu\n- **Wait for pullback** — Enter on retracement to 50% of the Marubozu\n- **Use as bias** — Marubozu direction = bias for next session\n- **Creates Order Block** — The candle before a Marubozu is often a strong OB\n\n---\n\n## Related Topics\n\n- [Momentum](/en/price-action/momentum) — Marubozu = peak momentum\n- [Expansion](/en/price-action/expansion) — Often appears during expansion\n- [Candlestick Psychology](/en/price-action/candlestick-psychology)\n`);

w('bn','single-candle-patterns','marubozu',{title:"Marubozu Pattern — সম্পূর্ণ গাইড",description:"Marubozu আয়ত্ত করুন — সবচেয়ে শক্তিশালী Momentum Candle। Bullish ও Bearish Marubozu, Signal এবং Continuation Trade করা শিখুন।",level:"beginner",order:5},`
## Marubozu কী?\n\nMarubozu হলো **Full Body ও কোনো Wick ছাড়া** (বা অত্যন্ত ছোট Wick) Candle। এটি একটি পক্ষের সম্পূর্ণ Domination প্রতিনিধিত্ব করে — কোনো বিরোধিতা নেই।\n\n---\n\n## ধরন\n\n### Bullish Marubozu:\n- বড় Green Body, কোনো/ক্ষুদ্র Wick নেই\n- Low-তে Open, High-তে Close\n- **Signal:** চরম Buyer Control, Continuation সম্ভব\n\n### Bearish Marubozu:\n- বড় Red Body, কোনো/ক্ষুদ্র Wick নেই\n- High-তে Open, Low-তে Close\n- **Signal:** চরম Seller Control, Continuation সম্ভব\n\n---\n\n## Psychology\n\n- সম্পূর্ণ Session-এ একটি পক্ষের সম্পূর্ণ নিয়ন্ত্রণ ছিল\n- কোনো সময়ে কোনো Counter-pressure নেই\n- একটি Single Candle যে সবচেয়ে শক্তিশালী Momentum Signal দিতে পারে\n- প্রায়ই নতুন Trend-এর শুরু বা Acceleration চিহ্নিত করে\n\n---\n\n## কীভাবে Trade করবেন\n\n- **এর বিরুদ্ধে যাবেন না** — Marubozu-এর বিরুদ্ধে কখনো Trade নয়\n- **Pullback-এর জন্য অপেক্ষা** — Marubozu-র 50% Retracement-এ Enter\n- **Bias হিসেবে ব্যবহার** — Marubozu Direction = পরবর্তী Session-এর Bias\n- **Order Block তৈরি করে** — Marubozu-র আগের Candle প্রায়ই শক্তিশালী OB\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Momentum](/bn/price-action/momentum) — Marubozu = Peak Momentum\n- [Expansion](/bn/price-action/expansion) — Expansion-এ প্রায়ই দেখা যায়\n- [Candlestick Psychology](/bn/price-action/candlestick-psychology)\n`);

w('en','single-candle-patterns','hanging-man',{title:"Hanging Man Pattern — Complete Guide",description:"Master the Hanging Man — a bearish reversal warning at the top of uptrends. Learn identification and trading strategies.",level:"beginner",order:6},`
## What is the Hanging Man?\n\nThe Hanging Man looks identical to a Hammer but appears at the **top of an uptrend**. Same shape, opposite meaning — it warns of potential bearish reversal.\n\n---\n\n## Identification\n\n| Rule | Requirement |\n|------|------------|\n| Shape | Same as Hammer (small body top, long lower wick) |\n| Location | MUST be at the top of an uptrend |\n| Signal | Bearish warning (buyers losing grip) |\n| Confirmation | Requires bearish candle next to confirm |\n\n---\n\n## Psychology\n\n- During an uptrend, price opens and sells off significantly\n- Buyers recover price back to the open\n- BUT the selloff itself is a warning — sellers are becoming active\n- If next candle confirms bearish, the reversal is likely\n\n---\n\n## Trading Rules\n\n- **Never trade the Hanging Man alone** — must confirm next candle\n- Entry: Below Hanging Man's low after bearish confirmation\n- Stop: Above the Hanging Man's high\n- Target: Next support level\n- Best when combined with resistance, divergence, or exhaustion\n\n---\n\n## Hanging Man vs. Hammer\n\n| Feature | Hammer | Hanging Man |\n|---------|--------|-------------|\n| Shape | Same | Same |\n| Location | Bottom (support) | Top (resistance) |\n| Signal | Bullish | Bearish |\n| Reliability | High | Moderate (needs confirmation) |\n`);

w('bn','single-candle-patterns','hanging-man',{title:"Hanging Man Pattern — সম্পূর্ণ গাইড",description:"Hanging Man আয়ত্ত করুন — Uptrend-এর শীর্ষে Bearish Reversal সতর্কতা। চিহ্নিতকরণ ও Trading Strategy শিখুন।",level:"beginner",order:6},`
## Hanging Man কী?\n\nHanging Man দেখতে Hammer-এর মতোই কিন্তু **Uptrend-এর শীর্ষে** দেখা যায়। একই আকৃতি, বিপরীত অর্থ — এটি সম্ভাব্য Bearish Reversal-এর সতর্কতা দেয়।\n\n---\n\n## চিহ্নিতকরণ\n\n| নিয়ম | প্রয়োজনীয়তা |\n|------|------------|\n| আকৃতি | Hammer-এর মতো (উপরে ছোট Body, লম্বা Lower Wick) |\n| অবস্থান | অবশ্যই Uptrend-এর শীর্ষে |\n| Signal | Bearish সতর্কতা (Buyer দুর্বল হচ্ছে) |\n| Confirmation | Confirm-এ পরবর্তী Bearish Candle প্রয়োজন |\n\n---\n\n## Psychology\n\n- Uptrend-এ Price Open হয়ে উল্লেখযোগ্যভাবে বিক্রি হয়\n- Buyer Price Open-এ ফিরিয়ে আনে\n- কিন্তু Selloff নিজেই সতর্কতা — Seller Active হচ্ছে\n- পরবর্তী Candle Bearish Confirm করলে Reversal সম্ভব\n\n---\n\n## Trading নিয়ম\n\n- **একা Hanging Man Trade করবেন না** — পরবর্তী Candle Confirm করতে হবে\n- Entry: Bearish Confirmation-এর পর Hanging Man-এর Low-এর নিচে\n- Stop: Hanging Man-এর High-এর উপরে\n- Target: পরবর্তী Support Level\n- Resistance, Divergence বা Exhaustion-সহ সমন্বয়ে সেরা\n\n---\n\n## Hanging Man vs. Hammer\n\n| বৈশিষ্ট্য | Hammer | Hanging Man |\n|-----------|--------|-------------|\n| আকৃতি | একই | একই |\n| অবস্থান | নিচে (Support) | উপরে (Resistance) |\n| Signal | Bullish | Bearish |\n| নির্ভরযোগ্যতা | উচ্চ | মধ্যম (Confirmation প্রয়োজন) |\n`);

w('en','single-candle-patterns','inverted-hammer',{title:"Inverted Hammer — Complete Guide",description:"Master the Inverted Hammer bullish reversal signal at the bottom of downtrends.",level:"beginner",order:7},`
## What is the Inverted Hammer?\n\nThe Inverted Hammer appears at the **bottom of a downtrend** and signals potential bullish reversal. It has a long upper wick and small body at the bottom — same shape as Shooting Star but at the opposite location.\n\n---\n\n## Identification\n\n- Long upper wick (2x+ body)\n- Small body at the bottom of range\n- Little/no lower wick\n- Location: After downtrend or at support\n\n---\n\n## Psychology\n\n- In a downtrend, buyers attempt a rally (creating the upper wick)\n- Sellers push back but can't push below the open\n- Shows buying interest is returning\n- Confirmation needed: Next candle must close bullish\n\n---\n\n## Trading\n\n- Entry: Above Inverted Hammer high after bullish confirmation\n- Stop: Below the Inverted Hammer low\n- Target: Next resistance or swing high\n- Stronger at key demand zones and Fibonacci levels\n\n---\n\n## Related Topics\n\n- [Shooting Star](/en/price-action/single-candle-patterns/shooting-star) — Same shape, top of trend\n- [Hammer](/en/price-action/single-candle-patterns/hammer) — More reliable bottom signal\n`);

w('bn','single-candle-patterns','inverted-hammer',{title:"Inverted Hammer — সম্পূর্ণ গাইড",description:"Downtrend-এর নিচে Inverted Hammer Bullish Reversal Signal আয়ত্ত করুন।",level:"beginner",order:7},`
## Inverted Hammer কী?\n\nInverted Hammer **Downtrend-এর নিচে** দেখা যায় এবং সম্ভাব্য Bullish Reversal-এর Signal দেয়। এর লম্বা Upper Wick ও নিচে ছোট Body — Shooting Star-এর মতো আকৃতি কিন্তু বিপরীত অবস্থানে।\n\n---\n\n## চিহ্নিতকরণ\n\n- লম্বা Upper Wick (Body-র 2x+)\n- Range-এর নিচে ছোট Body\n- ছোট/নেই Lower Wick\n- অবস্থান: Downtrend-এর পর বা Support-এ\n\n---\n\n## Psychology\n\n- Downtrend-এ Buyer একটি Rally চেষ্টা করে (Upper Wick তৈরি)\n- Seller ফিরিয়ে দেয় কিন্তু Open-এর নিচে ঠেলতে পারে না\n- দেখায় Buying Interest ফিরছে\n- Confirmation প্রয়োজন: পরবর্তী Candle Bullish Close করতে হবে\n\n---\n\n## Trading\n\n- Entry: Bullish Confirmation-এর পর Inverted Hammer High-এর উপরে\n- Stop: Inverted Hammer Low-এর নিচে\n- Target: পরবর্তী Resistance বা Swing High\n- Key Demand Zone ও Fibonacci Level-এ বেশি শক্তিশালী\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Shooting Star](/bn/price-action/single-candle-patterns/shooting-star) — একই আকৃতি, Trend-এর শীর্ষে\n- [Hammer](/bn/price-action/single-candle-patterns/hammer) — আরো নির্ভরযোগ্য Bottom Signal\n`);

w('en','single-candle-patterns','spinning-top',{title:"Spinning Top — Complete Guide",description:"Master the Spinning Top indecision pattern. Learn when it signals reversal potential and when it's just noise.",level:"beginner",order:8},`
## What is a Spinning Top?\n\nA Spinning Top has a **small body with wicks on both sides** of roughly equal length. Similar to a Doji but with a slightly larger body. It represents indecision with a slight lean.\n\n---\n\n## Identification\n\n- Small real body (any color)\n- Upper and lower wicks roughly equal\n- Body about 1/3 of total range\n- Wicks about 2/3 of total range\n\n---\n\n## Psychology\n\n- Both buyers and sellers were active but neither won decisively\n- The body shows a slight directional lean\n- After a trend = warning of exhaustion\n- In a range = just noise, no signal\n\n---\n\n## Trading Rules\n\n- **Not a standalone signal** — needs context and confirmation\n- At resistance after uptrend + spinning top = potential bearish reversal\n- At support after downtrend + spinning top = potential bullish reversal\n- Confirm with next candle direction\n- Use as additional confluence, not primary signal\n\n---\n\n## Related Topics\n\n- [Doji](/en/price-action/single-candle-patterns/doji) — Similar but even more indecisive\n- [Candlestick Psychology](/en/price-action/candlestick-psychology)\n`);

w('bn','single-candle-patterns','spinning-top',{title:"Spinning Top — সম্পূর্ণ গাইড",description:"Spinning Top Indecision Pattern আয়ত্ত করুন। কখন Reversal Potential Signal দেয় ও কখন শুধু Noise শিখুন।",level:"beginner",order:8},`
## Spinning Top কী?\n\nSpinning Top-এর **ছোট Body ও দুই পাশে প্রায় সমান দৈর্ঘ্যের Wick** থাকে। Doji-র মতো কিন্তু সামান্য বড় Body। এটি সামান্য ঝোঁকসহ Indecision প্রতিনিধিত্ব করে।\n\n---\n\n## চিহ্নিতকরণ\n\n- ছোট Real Body (যেকোনো রঙ)\n- Upper ও Lower Wick প্রায় সমান\n- Body মোট Range-এর প্রায় 1/3\n- Wick মোট Range-এর প্রায় 2/3\n\n---\n\n## Psychology\n\n- Buyer ও Seller উভয় Active ছিল কিন্তু কেউ চূড়ান্তভাবে জেতেনি\n- Body সামান্য Directional ঝোঁক দেখায়\n- Trend-এর পর = Exhaustion-এর সতর্কতা\n- Range-এ = শুধু Noise, কোনো Signal নয়\n\n---\n\n## Trading নিয়ম\n\n- **একক Signal নয়** — Context ও Confirmation প্রয়োজন\n- Uptrend-এর পর Resistance-এ Spinning Top = সম্ভাব্য Bearish Reversal\n- Downtrend-এর পর Support-এ Spinning Top = সম্ভাব্য Bullish Reversal\n- পরবর্তী Candle Direction দিয়ে Confirm করুন\n- Primary Signal নয়, অতিরিক্ত Confluence হিসেবে ব্যবহার করুন\n\n---\n\n## সম্পর্কিত বিষয়\n\n- [Doji](/bn/price-action/single-candle-patterns/doji) — একই কিন্তু আরো বেশি Indecisive\n- [Candlestick Psychology](/bn/price-action/candlestick-psychology)\n`);

console.log('\n✅ Single Candle Patterns Complete: 8 patterns × 2 languages = 16 files');

