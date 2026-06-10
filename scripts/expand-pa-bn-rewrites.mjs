import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l,cat,s,f,c) => { writeFileSync(join(C,l,cat,s+'.mdx'), `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-06-10"\n---\n`+c,'utf-8'); console.log(`✅ ${l}/${cat}/${s}`); };

// ============================================================
// BN REWRITES: 9 topics that already have good EN content
// but need quality Bangla versions
// ============================================================

// 1. PULLBACKS — BN
w('bn','price-action','pullbacks',{title:"Pullback Trading — সম্পূর্ণ গাইড",description:"Pullback Trading আয়ত্ত করুন। সুস্থ Pullback চিহ্নিতকরণ, Fibonacci Retracement Level এবং Optimal Pullback Entry Technique শিখুন।",level:"intermediate",order:11},`
## Pullback কী?

Pullback হলো প্রভাবশালী Trend-এর বিরুদ্ধে একটি **সাময়িক Retracement** যার পর Price মূল Direction-এ চলতে থাকে। Uptrend-এ Pullback হলো একটি Dip। Downtrend-এ Pullback হলো একটি Rally। Pullback **সেরা Entry সুযোগ** দেয় কারণ আপনি Trend-এর সাথে ভালো Price-এ Enter করছেন।

<Callout type="info" title="Buy the Dip, Sell the Rally">
"Buy the dip" বলতে মূলত Pullback Trading বোঝায়। Impulsive Move-এর পর Price Chase করার বদলে, আপনি Key Level-এ Retrace করার অপেক্ষা করেন এবং Discount-এ Enter করেন। এটি Tighter Stop Loss ও ভালো Risk-to-Reward Ratio দেয়।
</Callout>

---

## Pullback কেন ঘটে

1. **Profit-taking** — নিচে কেনা Trader উপরে Profit নিচ্ছে
2. **নতুন Seller** — Counter-trend Trader High-তে Short চেষ্টা করছে
3. **Institutional Reloading** — Smart Money ভালো Price-এ Position যোগ করতে Pullback হতে দেয়
4. **স্বাভাবিক Market Rhythm** — Market Wave-এ চলে (Impulse → Correction → Impulse)

---

## সুস্থ vs. অসুস্থ Pullback

### সুস্থ Pullback ✅ (এটি Trade করুন)
- Impulse Move-এর **38.2% থেকে 61.8%** Retrace করে
- Structure বজায় থাকে (Trend-এর বিরুদ্ধে কোনো BOS নেই)
- Pullback Candle Impulse Candle-এর চেয়ে ছোট
- Pullback-এ Volume কমে
- Slow, corrective movement (impulsive নয়)

### অসুস্থ Pullback ❌ (এটি এড়িয়ে চলুন)
- Impulse-এর **78.6%-এর বেশি** Retrace করে
- Structure ভাঙে (Trend-এর বিরুদ্ধে CHOCH)
- Pullback Candle Impulse Candle-এর চেয়ে বড়
- Pullback-এ Volume বাড়ে
- Fast, impulsive counter-trend movement

\`\`\`
সুস্থ Pullback:              অসুস্থ Pullback:
     HH                           HH
    ╱  ╲                          ╱  ╲
   ╱    ╲ 50% Retrace           ╱    ╲ 88% Retrace
  ╱      ╲╱ ← HL (এখানে কিনুন) ╱      ╲
 ╱      HL                    ╱        ╲╱ ← অনেক গভীর!
╱                             ╱        LL-এর কাছে
                                       (Trend শেষ হতে পারে)
\`\`\`

---

## Pullback Entry পদ্ধতি

### পদ্ধতি ১: Fibonacci Zone Entry
\`\`\`
1. স্পষ্ট Impulse Move চিহ্নিত করুন
2. Swing Low → Swing High-এ Fibonacci আঁকুন
3. Price 50%-61.8% Zone-এ (Golden Pocket) আসার অপেক্ষা
4. Zone-এ Bullish Rejection Candle খুঁজুন
5. Rejection Candle-এর উপরে Enter
6. Stop: 78.6%-এর নিচে বা Swing Low-এর নিচে
7. Target: নতুন Higher High বা 127.2% Extension
\`\`\`

### পদ্ধতি ২: Order Block Pullback
\`\`\`
1. BOS ঘটে (নতুন Swing High তৈরি)
2. BOS-এর আগের শেষ Bearish Candle = Bullish OB
3. Price OB-তে Pull Back করার অপেক্ষা
4. OB-তে Bullish Confirmation-এ Enter
5. Stop: OB-এর নিচে
6. Target: পূর্ববর্তী High-এর উপরে বা পরবর্তী Liquidity
\`\`\`

### পদ্ধতি ৩: Moving Average Pullback
\`\`\`
1. শক্তিশালী Trend চলছে (Price 20/50 EMA-এর উপরে)
2. Price 20 EMA বা 50 EMA-তে Pull Back করে
3. EMA-তে Rejection Candle-এ Enter
4. Stop: EMA-এর নিচে
5. Target: পূর্ববর্তী Swing High
\`\`\`

---

## Pullback Trading নিয়ম

1. **শুধু Confirmed Trend-এ Pullback Trade করুন** — ন্যূনতম ১টি BOS থাকতে হবে
2. **61.8%-এর বেশি Retrace অতিক্রম করবেন না** — এটি Reversal হতে পারে
3. **Pullback-এ Volume কমা দেখুন** — নিশ্চিত করে এটি Correction
4. **Impulse Direction-ই আপনার Bias** — Pullback-কে Counter Trade-এর সুযোগ মনে করবেন না
5. **Multiple Pullback Entry** — একটি Trend-এ প্রতিটি Valid Pullback-এ Enter করতে পারেন

---

## Pullback vs. Reversal — কীভাবে পার্থক্য করবেন

| বিষয় | Pullback (Trade করুন) | Reversal (এড়িয়ে চলুন) |
|--------|---------------------|----------------------|
| গভীরতা | 38.2%-61.8% | 78.6%+ |
| গতি | ধীর, Corrective | দ্রুত, Impulsive |
| Volume | কমছে | বাড়ছে |
| Structure | HH/HL অক্ষত | CHOCH তৈরি হচ্ছে |
| Candle Size | Impulse-এর চেয়ে ছোট | Impulse-এর সমান বা বড় |
| HTF Context | HTF Trend-এর সাথে | HTF Trend-এর বিরুদ্ধে |

---

## সম্পর্কিত বিষয়

- [Continuation](/bn/price-action/continuation) — Pullback-এর পর Continuation
- [Fibonacci Trading](/bn/academy/fibonacci-trading) — Pullback Level
- [Market Structure](/bn/price-action/market-structure) — BOS ও CHOCH
- [Trend Trading](/bn/price-action/trend-trading) — Trend-এ Pullback Entry
- [Entry Models](/bn/price-action/entry-models) — Pullback Entry Timing
`);

// 2. CANDLESTICK PSYCHOLOGY — BN
w('bn','price-action','candlestick-psychology',{title:"Candlestick Psychology — সম্পূর্ণ গাইড",description:"প্রতিটি Candlestick-এর পেছনের Psychology বুঝুন। Candle Shape Buyer/Seller-এর যুদ্ধ, Sentiment Shift ও Institutional Activity সম্পর্কে কী প্রকাশ করে শিখুন।",level:"beginner",order:3},`
## Candlestick Psychology কী?

Candlestick Psychology হলো **প্রতিটি Candle Buyer ও Seller-এর মধ্যে যুদ্ধ সম্পর্কে কী প্রকাশ করে** তার অধ্যয়ন। প্রতিটি Candle একটি গল্প বলে — Body দেখায় কে জিতেছে, Wick দেখায় কে চেষ্টা করে ব্যর্থ হয়েছে, এবং Size দেখায় লড়াইয়ের তীব্রতা।

<Callout type="info" title="Pattern-এর বাইরে">
বেশিরভাগ Trader Candlestick Pattern মুখস্ত করেন। Professional Trader প্রতিটি Candle-এর পেছনের PSYCHOLOGY বোঝেন। একটি Candle কেন এভাবে তৈরি হলো বুঝলে, আপনি Market-কে খোলা বইয়ের মতো পড়তে পারবেন — এমনকি এমন Pattern-ও যা আগে কখনো দেখেননি।
</Callout>

---

## Psychology-র বিশ্লেষণ

### Body — কে যুদ্ধ জিতেছে
- **বড় Bullish Body** → Buyer সম্পূর্ণ Session-এ আধিপত্য করেছে। শক্তিশালী Conviction।
- **বড় Bearish Body** → Seller আধিপত্য করেছে। শক্তিশালী Selling Pressure।
- **ছোট Body (Doji-সদৃশ)** → কোনো পক্ষ জেতেনি। Indecision, ভারসাম্য, সম্ভাব্য Turning Point।

### Upper Wick — Seller-এর Rejection
- **লম্বা Upper Wick** → Buyer Price উপরে ঠেলেছে, কিন্তু Seller REJECT করে নিচে ঠেলে দিয়েছে
- Upper Wick যত লম্বা, ঐ উচ্চ Price-এ **Selling Pressure তত শক্তিশালী**
- Resistance-এ = অত্যন্ত Bearish Signal

### Lower Wick — Buyer-এর Rejection
- **লম্বা Lower Wick** → Seller Price নিচে ঠেলেছে, কিন্তু Buyer REJECT করে উপরে ঠেলে দিয়েছে
- Lower Wick যত লম্বা, ঐ নিম্ন Price-এ **Buying Pressure তত শক্তিশালী**
- Support-এ = অত্যন্ত Bullish Signal

---

## Candle Size-এর Psychology

### বড় Candle (Marubozu-type):
- একটি পক্ষের সম্পূর্ণ Domination
- শক্তিশালী Institutional Involvement
- সাধারণত Direction Continuation-এর Signal
- দিক নির্বিশেষে — যে দিকে বড় Candle, সেই দিক শক্তিশালী

### ছোট Candle:
- Indecision — কোনো পক্ষ নিয়ন্ত্রণে নেই
- বড় Move-এর আগে বিরতি
- Breakout-এর আগে Energy জমা হচ্ছে
- একক ছোট Candle-এ কোনো Signal নেই — Context দেখুন

### Doji:
- Open ও Close প্রায় একই
- সম্পূর্ণ Indecision — Buyer ও Seller সমান
- Key Level-এ (S/R) = সম্ভাব্য Reversal Signal
- Trend-এর মাঝে = বিরতি, সম্ভবত Continuation

---

## Context-এ Candle পড়া

### Rule ১: অবস্থান সবকিছু
\`\`\`
একই Pin Bar:
- Support-এ = Bullish (Buyer Rejection)
- Resistance-এ = Bearish (Seller Rejection)
- মাঝামাঝি = অর্থহীন (Random noise)

Context ছাড়া কোনো Candle-এর অর্থ নেই!
\`\`\`

### Rule ২: Size Relative
- আগের Candle-এর তুলনায় বর্তমান Candle-এর Size পরিমাপ করুন
- বড় Candle → শক্তিশালী Conviction
- ক্রমাগত ছোট হচ্ছে → Momentum হারাচ্ছে
- হঠাৎ বড় → Shift বা Breakout

### Rule ৩: Wick-to-Body Ratio
| Ratio | অর্থ |
|-------|------|
| Body > 70% | শক্তিশালী Directional Candle (Momentum) |
| Wick > 70% | Rejection Candle (Indecision/Reversal) |
| Equal | যুদ্ধ চলছে, পরবর্তী Candle নির্ধারণ করবে |

---

## Institutional Candle পড়া

### Institutional Buying দেখতে কেমন:
- বড় Bullish Body, ছোট/নেই Wick
- পূর্ববর্তী Bearish Candle-কে সম্পূর্ণ Engulf করে
- Support/Demand Zone-এ ঘটে
- Volume বাড়ে

### Institutional Selling দেখতে কেমন:
- বড় Bearish Body, ছোট/নেই Wick
- পূর্ববর্তী Bullish Candle-কে সম্পূর্ণ Engulf করে
- Resistance/Supply Zone-এ ঘটে
- Volume বাড়ে

---

## প্রতিটি প্রধান Candle-এর Psychology

| Candle | Psychology |
|--------|-----------|
| **Hammer** | Seller নিচে ঠেলেছে, Buyer শক্তিশালীভাবে ফিরেছে — Buyer জিতছে |
| **Shooting Star** | Buyer উপরে ঠেলেছে, Seller শক্তিশালীভাবে ফিরেছে — Seller জিতছে |
| **Engulfing** | নতুন পক্ষ সম্পূর্ণ নিয়ন্ত্রণ নিয়েছে — Momentum Shift |
| **Doji** | দুই পক্ষ সমান — সিদ্ধান্তহীনতা, সম্ভাব্য পরিবর্তন |
| **Marubozu** | একটি পক্ষের সম্পূর্ণ Domination — শক্তিশালী Direction |
| **Inside Bar** | Consolidation — Energy জমা হচ্ছে, Breakout আসছে |

---

## সম্পর্কিত বিষয়

- [Candlestick Basics](/bn/price-action/candlestick-basics) — Candle গঠন ও প্রকারভেদ
- [Market Structure](/bn/price-action/market-structure) — Context-এ Candle পড়া
- [Confirmation](/bn/price-action/confirmation) — Candle Confirmation
- [Entry Models](/bn/price-action/entry-models) — Candle-based Entry
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Reversal Candle
`);

// 3. FAKEOUTS — BN
w('bn','price-action','fakeouts',{title:"Fakeout — সম্পূর্ণ গাইড",description:"Fakeout চিহ্নিতকরণ ও Trading আয়ত্ত করুন। False Breakout চেনা, Institutional Trap এবং ব্যর্থ Move থেকে Profit করা শিখুন।",level:"intermediate",order:9},`
## Fakeout কী?

Fakeout (False Breakout) ঘটে যখন Price সাময়িকভাবে Support/Resistance Level-এর বাইরে **ভেদ করে** কিন্তু **দ্রুত ভিতরে ফিরে** আসে, Breakout-এ Enter করা Trader-দের Trap করে। Fakeout Trading-এর সবচেয়ে সাধারণ Trap-এর একটি এবং প্রায়ই **Institution দ্বারা Liquidity সংগ্রহের জন্য Engineered** হয়।

<Callout type="info" title="Fakeout = সুযোগ">
বেশিরভাগ Retail Trader Fakeout-কে ভয় পায়। Smart Trader এগুলো পছন্দ করে। একটি Confirmed Fakeout আপনাকে Tight Stop ও বড় Target-সহ High-probability Reversal Entry দেয়। Fakeout Trade করা শিখলে আপনার সবচেয়ে বড় হতাশা সবচেয়ে বড় Edge-এ পরিণত হয়।
</Callout>

---

## Fakeout কেন ঘটে

### ১. Institutional Liquidity সংগ্রহ
Bank ও Hedge Fund-এর Order Fill করতে বিপুল Liquidity প্রয়োজন। Retail Trader S/R Level-এর ঠিক বাইরে Stop রাখে। Institution Price-কে এই Level ভেদ করায় Stop Trigger করে Liquidity সংগ্রহ করে।

### ২. Weak Breakout Trader Trap
অনভিজ্ঞ Trader প্রতিটি Break-এ Breakout Trade করে। Institution এটি জানে এবং তাদের Trap করার জন্য ব্যবহার করে।

### ৩. Stop Loss Hunting
Clear S/R Level-এর ঠিক বাইরে Stop রাখা — সবচেয়ে সাধারণ Retail ভুল। Institution জানে Stop কোথায় — সেগুলো Target করে।

---

## Fakeout চিহ্নিত করা

### Fakeout-এর বৈশিষ্ট্য:

| বৈশিষ্ট্য | Fakeout | Real Breakout |
|-----------|---------|---------------|
| Candle Close | Level-এর ভিতরে ফেরে | Level-এর বাইরে Close |
| Volume | কম বা স্বাভাবিক | স্বাভাবিকের 2-3× |
| Follow-through | পরবর্তী Candle Reverse | পরবর্তী Candle Continue |
| Wick | Level-এর বাইরে লম্বা Wick | ছোট Wick, বড় Body |
| Speed | দ্রুত Spike ও Reverse | ধারাবাহিক Movement |
| Context | Range/Counter-trend | Trend-এর সাথে |

### Fakeout Pattern:
\`\`\`
Fakeout (Liquidity Sweep):

═══ Resistance ═══╱╲══════════════
   ╱╲   ╱╲   ╱╲╱  ╲ ← Fakeout Spike
  ╱  ╲ ╱  ╲ ╱      ╲
 ╱    ╲╱    ╲╱        ╲ ← Reversal
                        ╲ Strong move opposite

Real Breakout:

═══ Resistance ═══╱════════════════
   ╱╲   ╱╲   ╱╱  ← Close beyond
  ╱  ╲ ╱  ╲ ╱╱     Continue higher
 ╱    ╲╱    ╲╱
\`\`\`

---

## Fakeout Trade করা

### Strategy ১: Sweep + Reversal Entry
\`\`\`
1. Key S/R Level চিহ্নিত (Equal High/Low, Clear S/R)
2. Price Level ভেদ করে (Spike/Wick বাইরে)
3. Candle Level-এর ভিতরে Close করে (Fakeout Confirm)
4. পরবর্তী Candle-এ Reversal Direction-এ Enter
5. Stop: Fakeout Wick-এর বাইরে
6. Target: বিপরীত S/R বা Liquidity Level
7. R:R: সাধারণত 1:3 থেকে 1:5 (Tight Stop)
\`\`\`

### Strategy ২: Fakeout + OB Entry
\`\`\`
1. Fakeout ঘটে (Level ভেদ করে ফিরে আসে)
2. Fakeout Level-এর কাছে Order Block চিহ্নিত
3. Price OB-তে Pullback করার অপেক্ষা
4. OB-তে Confirmation-এ Enter
5. Stop: Fakeout Extreme-এর বাইরে
6. Target: বিপরীত Liquidity Pool
\`\`\`

---

## Fakeout এড়ানোর উপায়

1. **প্রতিটি Break-এ তাৎক্ষণিক Enter করবেন না** — Candle Close অপেক্ষা করুন
2. **Volume Confirm করুন** — Real Breakout-এ Volume 2-3× বাড়ে
3. **Trend Context বিবেচনা করুন** — Counter-trend Break = সম্ভবত Fakeout
4. **Stop Level-এর ঠিক বাইরে রাখবেন না** — Buffer দিন
5. **Retest অপেক্ষা করুন** — Real Breakout Retest ধরে রাখে

---

## Fakeout = Liquidity Sweep

<Callout type="info" title="গুরুত্বপূর্ণ সংযোগ">
Fakeout ও Liquidity Sweep একই জিনিস। "Fakeout" হলো Retail Trader-এর দৃষ্টিভঙ্গি (আমি Trapped হলাম!)। "Liquidity Sweep" হলো Institutional দৃষ্টিভঙ্গি (আমি Order Fill করলাম!)। বোঝার পর, আপনি Victim থেকে Beneficiary হয়ে যান।
</Callout>

---

## সম্পর্কিত বিষয়

- [Liquidity](/bn/price-action/liquidity) — Fakeout-এর Institutional কারণ
- [Breakouts](/bn/price-action/breakouts) — Real vs. False Breakout
- [Support ও Resistance](/bn/price-action/support-resistance) — যে Level Fakeout ঘটে
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Fakeout-এর পর Reversal
- [Entry Models](/bn/price-action/entry-models) — Fakeout Entry Timing
`);

// 4. SWING HIGH LOW — BN
w('bn','price-action','swing-high-low',{title:"Swing High ও Low — সম্পূর্ণ গাইড",description:"Swing High ও Low চিহ্নিতকরণ আয়ত্ত করুন। Fractal Concept, Swing Failure Pattern এবং Structure Analysis-এ Swing Point কীভাবে ব্যবহার করবেন শিখুন।",level:"beginner",order:7},`
## Swing High ও Swing Low কী?

Swing Point হলো **Market Structure-এর Building Block**। Swing High হলো এমন একটি Price Peak যার দুই পাশে নিচু High আছে। Swing Low হলো এমন একটি Price Trough যার দুই পাশে উচ্চু Low আছে। এগুলো চিহ্নিত করে কোথায় Price Direction পরিবর্তন করেছে এবং Trend, Support/Resistance ও Structure Break চিহ্নিতকরণের ভিত্তি।

<Callout type="info" title="সবকিছুর ভিত্তি">
সঠিকভাবে Swing High ও Low চিহ্নিত না করে আপনি Trend নির্ধারণ, Trendline আঁকা, BOS/CHOCH চিহ্নিত বা কোনো Price Action Strategy Trade করতে পারবেন না। এই Concept প্রথমে আয়ত্ত করুন — বাকি সবকিছু এর উপর তৈরি।
</Callout>

---

## Swing Point কীভাবে চিহ্নিত করবেন

### 3-Candle Rule (Standard)
- **Swing High**: যে Candle-এর HIGH তার আগের ও পরের Candle-এর High-এর চেয়ে উচ্চ
- **Swing Low**: যে Candle-এর LOW তার আগের ও পরের Candle-এর Low-এর চেয়ে নিম্ন

\`\`\`
Swing High (3-Candle):
      ┃ ← এই Candle-এর High সর্বোচ্চ
    ┃ ┃ ┃
    ┃ ┃ ┃ ← দুই পাশের Candle-এর High নিচু

Swing Low (3-Candle):
    ┃ ┃ ┃ ← দুই পাশের Candle-এর Low উচ্চু
    ┃ ┃ ┃
      ┃ ← এই Candle-এর Low সর্বনিম্ন
\`\`\`

### 5-Candle Rule (শক্তিশালী Swing)
- দুই পাশে ২টি করে Candle (মোট ৫) — আরো নির্ভরযোগ্য
- Higher Timeframe-এ Significant Swing Point

---

## Swing Point ও Market Structure

### Bullish Structure:
\`\`\`
HH (Higher High) → প্রতিটি Swing High আগেরটির চেয়ে উচ্চ
HL (Higher Low)  → প্রতিটি Swing Low আগেরটির চেয়ে উচ্চ
= UPTREND

      SH3 (HH)
     ╱
    ╱   SH2 (HH)
   ╱   ╱
  SL2(HL)
 ╱    SH1
SL1(HL)
\`\`\`

### Bearish Structure:
\`\`\`
LH (Lower High) → প্রতিটি Swing High আগেরটির চেয়ে নিম্ন
LL (Lower Low)  → প্রতিটি Swing Low আগেরটির চেয়ে নিম্ন
= DOWNTREND
\`\`\`

---

## Swing Point-এর গুরুত্ব

| ব্যবহার | কীভাবে |
|---------|--------|
| **Trend চিহ্নিতকরণ** | HH/HL = Uptrend, LH/LL = Downtrend |
| **BOS চিহ্নিতকরণ** | Swing High/Low-এর বাইরে Break |
| **CHOCH চিহ্নিতকরণ** | Trend-এর বিরুদ্ধে Swing Point Break |
| **Support/Resistance** | পূর্ববর্তী Swing Point = S/R Level |
| **Stop Loss Placement** | Swing Point-এর বাইরে Stop |
| **Target Setting** | পরবর্তী Swing Point = Target |
| **Fibonacci Drawing** | Swing Low → Swing High (বা উল্টো) |

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| প্রতিটি ছোট Wick-কে Swing মনে করা | 3-Candle বা 5-Candle Rule ব্যবহার করুন |
| ভুল Timeframe | আপনার Trading TF-এ Swing চিহ্নিত করুন |
| Subjective চিহ্নিতকরণ | নিয়ম-ভিত্তিক পদ্ধতি ব্যবহার করুন |
| Minor ও Major Swing গুলিয়ে ফেলা | HTF = Major, LTF = Minor |
| Swing Point Update না করা | নতুন Candle-এ নতুন Swing হতে পারে |

---

## সম্পর্কিত বিষয়

- [Market Structure](/bn/price-action/market-structure) — Swing-ভিত্তিক Structure
- [Trend Analysis](/bn/price-action/trend-analysis) — Swing দিয়ে Trend চিহ্নিত
- [Support ও Resistance](/bn/price-action/support-resistance) — Swing = S/R Level
- [Breakouts](/bn/price-action/breakouts) — Swing Break = Breakout
- [Pullbacks](/bn/price-action/pullbacks) — Swing Low-এ Pullback Entry
`);

// 5. MULTI-TIMEFRAME ANALYSIS — BN
w('bn','price-action','multi-timeframe-analysis',{title:"Multi-Timeframe Analysis — সম্পূর্ণ গাইড",description:"Multi-Timeframe Analysis আয়ত্ত করুন। Top-down পদ্ধতি, Timeframe Correlation এবং HTF Bias-এর সাথে LTF Entry কীভাবে Align করবেন শিখুন।",level:"intermediate",order:14},`
## Multi-Timeframe Analysis কী?

Multi-Timeframe Analysis (MTA) হলো একটি সম্পূর্ণ চিত্র পেতে একই Instrument-কে **একাধিক Timeframe-এ** বিশ্লেষণ করার অভ্যাস। Higher Timeframe আপনাকে **Direction** (Bias) দেয়, এবং Lower Timeframe আপনাকে **Entry** (Precision) দেয়।

<Callout type="info" title="Top-Down পদ্ধতি">
Professional Trader কখনো একটি Timeframe থেকে Trade করেন না। তারা সবসময় Direction-এর জন্য সর্বোচ্চ প্রাসঙ্গিক Timeframe থেকে শুরু করেন, তারপর Entry-র জন্য নিচে নামেন। এই একটি অভ্যাসই Profitable Trader-কে Struggling Trader থেকে আলাদা করে।
</Callout>

---

## Three-Timeframe Framework

| ভূমিকা | Timeframe উদাহরণ | উদ্দেশ্য |
|--------|-----------------|----------|
| **HTF (Bias)** | Weekly / Daily | সামগ্রিক Trend Direction |
| **MTF (Structure)** | 4H / 1H | Setup চিহ্নিতকরণ, Key Level |
| **LTF (Entry)** | 15M / 5M | সুনির্দিষ্ট Entry ও Stop Placement |

### সাধারণ Timeframe Combination:

| Trading Style | HTF | MTF | LTF |
|--------------|-----|-----|-----|
| Position | Monthly | Weekly | Daily |
| Swing | Weekly | Daily | H4 |
| Intraday | Daily | H4/H1 | M15/M5 |
| Scalping | H4 | H1 | M5/M1 |

---

## Top-Down Process

### ধাপ ১: HTF Bias (Weekly/Daily)
\`\`\`
প্রশ্ন: সামগ্রিক Direction কী?
- Bullish: HH/HL Structure, Price above key MAs
- Bearish: LH/LL Structure, Price below key MAs
- Ranging: No clear structure

ফলাফল: শুধু এই Direction-এ Trade নিন!
\`\`\`

### ধাপ ২: MTF Setup (H4/H1)
\`\`\`
প্রশ্ন: কোথায় Entry Zone?
- Key Level চিহ্নিত (S/R, OB, FVG)
- Structure Point Mark করুন
- Fibonacci Level আঁকুন
- সম্ভাব্য Entry Zone নির্ধারণ করুন

ফলাফল: Trade-এর জন্য নির্দিষ্ট Zone পেলেন
\`\`\`

### ধাপ ৩: LTF Entry (M15/M5)
\`\`\`
প্রশ্ন: Entry-র Trigger কী?
- MTF Zone-এ Price পৌঁছালে LTF-এ নামুন
- LTF Structure Shift (CHOCH) খুঁজুন
- Confirmation Candle অপেক্ষা করুন
- সুনির্দিষ্ট Entry ও Tight Stop সেট করুন

ফলাফল: Optimal R:R-সহ সুনির্দিষ্ট Entry
\`\`\`

---

## MTA নিয়ম

### মূল নিয়ম:
1. **HTF Bias-এর বিরুদ্ধে কখনো Trade নয়** — D1 Bearish হলে M15-এ Long নেবেন না
2. **প্রতিটি Trade-এ কমপক্ষে ২ TF মিলতে হবে** — Bias + Entry minimum
3. **HTF Level > LTF Level** — D1 S/R M15 S/R-কে Override করে
4. **LTF Confirmation ছাড়া Enter নয়** — HTF Zone-এ পৌঁছালেই কিনবেন না
5. **Conflicting Signal = No Trade** — HTF Bullish কিন্তু MTF Bearish = অপেক্ষা করুন

### Timeframe Conflict সমাধান:
| HTF | MTF | LTF | Decision |
|-----|-----|-----|----------|
| Bullish | Bullish | Bullish | ✅ শক্তিশালী Long |
| Bullish | Pullback | Bullish shift | ✅ Long Entry |
| Bullish | Bearish | - | ⚠️ অপেক্ষা করুন |
| Bearish | Bullish | - | ❌ No Long Trade |

---

## ব্যবহারিক উদাহরণ

### Swing Trade (D1 → H4 → H1):
\`\`\`
1. D1: Bullish Trend (HH/HL), Key Support Level 1.0850 এ
2. H4: Price 1.0850 Zone-এ পৌঁছেছে, Bullish OB আছে
3. H1: Bullish CHOCH দেখা দিয়েছে, Engulfing Candle
4. Entry: 1.0860 (H1 Confirmation পর)
5. Stop: 1.0830 (D1 OB-এর নিচে) — 30 Pip
6. Target: 1.0950 (D1 Swing High) — 90 Pip
7. R:R = 1:3
\`\`\`

---

## সাধারণ MTA ভুল

| ভুল | সমাধান |
|------|--------|
| শুধু LTF দেখে Trade | সবসময় HTF Bias আগে Check |
| অনেক বেশি TF দেখা (৫+) | সর্বোচ্চ ৩টি TF ব্যবহার করুন |
| HTF-এর বিরুদ্ধে LTF Trade | HTF Direction-ই চূড়ান্ত সত্য |
| Confirmation ছাড়া HTF Zone-এ Enter | LTF Shift অপেক্ষা করুন |
| TF Conflict-এ জোর করে Trade | Conflict = No Trade |

---

## সম্পর্কিত বিষয়

- [Market Structure](/bn/price-action/market-structure) — প্রতিটি TF-এ Structure
- [Trend Analysis](/bn/price-action/trend-analysis) — HTF Trend Direction
- [Entry Models](/bn/price-action/entry-models) — LTF Entry Technique
- [Confluence](/bn/price-action/confluence) — Multiple TF Confluence
- [Intraday](/bn/price-action/intraday) — Intraday MTA Application
`);

// 6-9: Remaining BN files (support-resistance, breakouts, market-structure, trend-analysis)
// These already have 92-97 lines - reasonable but let's give them proper quality rewrites

w('bn','price-action','support-resistance',{title:"Support ও Resistance — সম্পূর্ণ গাইড",description:"Support ও Resistance Level আয়ত্ত করুন। Horizontal Level, S/R Flip, Dynamic S/R, Psychological Level এবং Zone-based Trading শিখুন।",level:"beginner",order:5},`
## Support ও Resistance কী?

Support ও Resistance (S/R) হলো **Horizontal Price Level** যেখানে Buying বা Selling Pressure ঐতিহাসিকভাবে এতটা শক্তিশালী যে Price থামাতে ও Reverse করতে পারে। এগুলো সব Technical Analysis-এর সবচেয়ে মৌলিক Concept।

- **Support** = যে Price Level-এ **Buyer** ধারাবাহিকভাবে আসে, Price আরো নিচে যেতে বাধা দেয় (Floor)
- **Resistance** = যে Price Level-এ **Seller** ধারাবাহিকভাবে Defend করে, Price আরো উপরে যেতে বাধা দেয় (Ceiling)

<Callout type="info" title="S/R হলো Zone, Line নয়">
Professional Trader S/R-কে সুনির্দিষ্ট Line নয়, Zone হিসেবে দেখেন। Price সবসময় ঠিক একটি Price-এ React করে না — এটি একটি Area-তে React করে। ১০-৩০ Pip-এর Zone ভাবুন।
</Callout>

---

## S/R Level চিহ্নিতকরণ

### শক্তিশালী Level-এর বৈশিষ্ট্য:
| বৈশিষ্ট্য | কেন গুরুত্বপূর্ণ |
|-----------|----------------|
| একাধিক Touch (৩+) | প্রমাণিত Reaction Zone |
| স্পষ্ট Rejection (Wick) | দৃশ্যমান Buying/Selling Pressure |
| Higher Timeframe-এ দৃশ্যমান | D1/W1 Level > M15 Level |
| সাম্প্রতিক | Fresh Level > পুরনো Level |
| Round Number-এ | 1.1000, 50,000 ইত্যাদি |

### কীভাবে আঁকবেন:
1. D1/H4 Chart-এ Zoom Out করুন
2. যেখানে Price একাধিকবার React করেছে চিহ্নিত করুন
3. Body বা Wick — যেটা বেশি Touch পেয়েছে তা ব্যবহার করুন
4. একটি Area/Zone হিসেবে Mark করুন (Line নয়)
5. শুধু সবচেয়ে স্পষ্ট Level রাখুন (অতিরিক্ত আঁকবেন না)

---

## S/R Flip (Polarity)

**Support ভাঙলে Resistance হয়। Resistance ভাঙলে Support হয়।**

এটি Trading-এর সবচেয়ে নির্ভরযোগ্য Concept-এর একটি:

\`\`\`
S/R Flip:
1. Price Support (1.1000)-এ একাধিকবার Bounce করে
2. Price 1.1000-এর নিচে ভাঙে (Support ভেঙেছে)
3. Price 1.1000-এ ফিরে আসে (Retest)
4. পুরনো Support এখন Resistance হিসেবে কাজ করে
5. Price Reject হয় এবং নিচে চলে

Entry: Flip Zone-এ Short (পুরনো Support = নতুন Resistance)
Stop: Zone-এর উপরে
Target: পরবর্তী Support নিচে
\`\`\`

---

## Dynamic S/R

Static (Horizontal)-এর বিপরীতে, Dynamic S/R সময়ের সাথে চলে:

| ধরন | উদাহরণ | সেরা ব্যবহার |
|------|---------|-------------|
| **Moving Average** | 20, 50, 200 EMA | Trend-এ Dynamic S/R |
| **Trendline** | Swing Low/High সংযোগ | Trend Boundary |
| **Fibonacci** | 61.8%, 78.6% Level | Pullback Zone |

### Moving Average হিসেবে Dynamic S/R:
- 20 EMA: Short-term Trend-এ Intraday S/R
- 50 EMA: Medium-term S/R (H4/D1)
- 200 SMA: Long-term Institutional S/R (D1)

---

## S/R Trading Strategy

### Strategy ১: Bounce Trading
\`\`\`
1. Price শক্তিশালী Support-এ আসে
2. Rejection Candle-এর জন্য অপেক্ষা (Pin Bar, Engulfing)
3. Rejection-এর উপরে Long Enter
4. Stop: Support-এর নিচে (Buffer-সহ)
5. Target: পরবর্তী Resistance বা Midpoint
6. R:R: ন্যূনতম 1:2
\`\`\`

### Strategy ২: Break ও Retest
\`\`\`
1. Price Resistance ভেদ করে (শক্তিশালী Close বাইরে)
2. ভাঙা Resistance-এ Pullback-এর অপেক্ষা
3. পুরনো Resistance (এখন Support)-এ Bullish Confirmation
4. Long Enter
5. Stop: Zone-এর নিচে
6. Target: পরবর্তী Resistance উপরে
\`\`\`

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| অনেক বেশি Level আঁকা | শুধু সবচেয়ে স্পষ্ট ৩-৫টি রাখুন |
| সুনির্দিষ্ট Price ব্যবহার | Zone হিসেবে ভাবুন (১০-৩০ Pip) |
| Lower TF Level-কে বেশি গুরুত্ব | H4/D1 Level-এ ফোকাস করুন |
| শক্তিশালী Breakout-এর বিরুদ্ধে Bounce Trade | Volume ও Momentum Check করুন |
| পুরনো Level Update না করা | নিয়মিত Refresh করুন |

---

## সম্পর্কিত বিষয়

- [Swing High ও Low](/bn/price-action/swing-high-low) — S/R হিসেবে Swing Point
- [Breakouts](/bn/price-action/breakouts) — S/R Break Trading
- [Fakeouts](/bn/price-action/fakeouts) — S/R-এ False Break
- [Confluence](/bn/price-action/confluence) — S/R + অন্যান্য Factor
- [Range Trading](/bn/price-action/range-trading) — S/R-এর মধ্যে Trade
`);

w('bn','price-action','breakouts',{title:"Breakout Trading — সম্পূর্ণ গাইড",description:"Breakout Trading আয়ত্ত করুন। সত্যিকার Breakout চিহ্নিত করা, Fakeout থেকে পার্থক্য করা, Breakout Entry Technique এবং Breakout Trade Manage করা শিখুন।",level:"intermediate",order:8},`
## Breakout কী?

Breakout ঘটে যখন Price একটি প্রতিষ্ঠিত Support বা Resistance Level **শক্তিশালীভাবে ভেদ করে** এবং সেই Direction-এ চলতে থাকে। Breakout নতুন Trend শুরু করে বা বিদ্যমান Trend Accelerate করে।

<Callout type="info" title="Breakout-এর শক্তি">
সবচেয়ে বড় Market Move শুরু হয় Breakout দিয়ে। Compression → Breakout → Expansion — এই Cycle-এ সবচেয়ে বেশি Profit হয়। সঠিকভাবে Breakout Trade করলে ছোট Risk-এ বড় Move ক্যাপচার করা সম্ভব।
</Callout>

---

## Real vs. False Breakout

| বৈশিষ্ট্য | Real Breakout ✅ | False Breakout ❌ |
|-----------|----------------|-----------------|
| Candle Close | Level-এর বাইরে Full Body Close | Level-এর ভিতরে ফেরে (Wick only) |
| Volume | গড়ের ২-৩× বেশি | গড় বা কম |
| Follow-through | পরবর্তী Candle Continue করে | পরবর্তী Candle Reverse করে |
| Candle Size | বড় Body, ছোট Wick | ছোট Body, বড় Wick |
| Context | Trend-এর সাথে | Trend-এর বিরুদ্ধে |
| পূর্ববর্তী | Compression/Consolidation | Random Spike |

---

## Breakout Entry পদ্ধতি

### পদ্ধতি ১: Break ও Close Entry (Aggressive)
\`\`\`
1. Key Level চিহ্নিত (S/R, Range Boundary)
2. Level-এর বাইরে শক্তিশালী Candle Close অপেক্ষা
3. Close-এর সাথে সাথে Enter
4. Stop: Level-এর বিপরীত দিকে (ভিতরে)
5. Target: Measured Move (Range Height)
\`\`\`

### পদ্ধতি ২: Break ও Retest Entry (Conservative)
\`\`\`
1. Breakout ঘটে (Level-এর বাইরে Close)
2. Price ভাঙা Level-এ Pullback/Retest করার অপেক্ষা
3. Retest-এ Level Support/Resistance হিসেবে ধরে রাখে
4. Retest-এ Confirmation Candle-সহ Enter
5. Stop: Level-এর ভিতরে
6. Target: Measured Move বা পরবর্তী Level

সুবিধা: ভালো Entry, Tight Stop, Higher Win Rate
অসুবিধা: কিছু Breakout Retest ছাড়াই চলে যায় (Miss)
\`\`\`

### পদ্ধতি ৩: Compression Breakout
\`\`\`
1. Compression চিহ্নিত (Higher Low into Resistance বা Lower High into Support)
2. যত বেশি Compression, তত শক্তিশালী Breakout হবে
3. Level Break-এ Enter
4. Stop: শেষ Compression Point-এর বাইরে
5. Target: Compression Range-এর ১.৫-৩×
\`\`\`

---

## Breakout Failure সামলানো

Breakout ব্যর্থ হলে (Price ভিতরে ফিরে আসে):
1. Stop Hit হলে — গ্রহণ করুন, এটি Plan-এর অংশ
2. দ্রুত ফিরলে — বিপরীত দিকে Trade বিবেচনা করুন (Fakeout Trade)
3. Trend Context মিলছে কি না Review করুন

---

## Breakout Trading নিয়ম

1. **Candle Close অপেক্ষা করুন** — Wick-এ Enter করবেন না
2. **Volume Confirm করুন** — Real Breakout-এ Volume বাড়ে
3. **Trend-এর সাথে Breakout** — Counter-trend Break প্রায়ই Fail করে
4. **Compression সেরা** — Random Break-এর চেয়ে Compression Break বেশি নির্ভরযোগ্য
5. **Measured Move Target** — Range/Pattern Height থেকে Target গণনা
6. **পরপর Breakout চেষ্টা করবেন না** — একটি Fail হলে, পুনর্মূল্যায়ন করুন

---

## সম্পর্কিত বিষয়

- [Fakeouts](/bn/price-action/fakeouts) — False Breakout চেনা ও Trade
- [Compression](/bn/price-action/compression) — Breakout-এর আগে Compression
- [Expansion](/bn/price-action/expansion) — Breakout-এর পর কী ঘটে
- [Support ও Resistance](/bn/price-action/support-resistance) — যে Level Break হয়
- [Volume](/bn/price-action/volume) — Breakout Validate করে
`);

w('bn','price-action','market-structure',{title:"Market Structure — সম্পূর্ণ গাইড",description:"Market Structure Analysis আয়ত্ত করুন। Swing High/Low, HH/HL/LH/LL Pattern, BOS, CHOCH এবং Trend চিহ্নিতকরণের জন্য Internal vs External Structure শিখুন।",level:"beginner",order:4},`
## Market Structure কী?

Market Structure হলো **Price Action Trading-এর মেরুদণ্ড**। এটি বলতে বোঝায় Price সময়ের সাথে চলার সময় যে Swing High ও Swing Low-এর Pattern তৈরি করে। এই Swing Point বিশ্লেষণ করে আপনি নির্ধারণ করতে পারেন:
- Market **Trending** (Bullish/Bearish) না **Ranging**
- কোথায় **Momentum Shift** ঘটে (CHOCH/BOS)
- আপনার পরবর্তী Trade-এর জন্য **সবচেয়ে কম প্রতিরোধের Direction**

<Callout type="info" title="Structure-ই সবকিছু">
Market Structure না বুঝে আপনি অন্ধভাবে Trade করছেন। Structure বলে কে নিয়ন্ত্রণে — Buyer না Seller — এবং কখন নিয়ন্ত্রণ বদল হয়। SMC, ICT ও Price Action-এর প্রতিটি Strategy প্রথম Filter হিসেবে Structure-র উপর নির্ভর করে।
</Callout>

---

## Bullish Market Structure

\`\`\`
Higher High (HH) ও Higher Low (HL) = UPTREND

        HH3
       ╱
      ╱    HH2
     ╱    ╱
    HL2  ╱
     ╲  ╱    HH1
      ╲╱    ╱
       HL1 ╱
        ╲ ╱
         ╲╱

Buyer নিয়ন্ত্রণে: প্রতিটি Push আগেরটির চেয়ে উচ্চ যায়
প্রতিটি Pullback আগের Low-এর উপরে থাকে
\`\`\`

---

## Bearish Market Structure

\`\`\`
Lower High (LH) ও Lower Low (LL) = DOWNTREND

╲╱
 LH1 ╲
      ╲    LL1
       ╲  ╱
    LH2 ╲╱
         ╲    LL2
          ╲  ╱
       LH3 ╲╱
              ╲ LL3

Seller নিয়ন্ত্রণে: প্রতিটি Push আগেরটির চেয়ে নিচে যায়
প্রতিটি Rally আগের High-এর নিচে থাকে
\`\`\`

---

## Break of Structure (BOS)

BOS ঘটে যখন Price Trend-এর Direction-এ সাম্প্রতিক Swing Point ভাঙে — **Trend Continuation Confirm করে**।

| Trend | BOS Condition | অর্থ |
|-------|-------------|-------|
| Bullish | সাম্প্রতিক Swing High-এর উপরে ভাঙে | নতুন HH = Uptrend অব্যাহত |
| Bearish | সাম্প্রতিক Swing Low-এর নিচে ভাঙে | নতুন LL = Downtrend অব্যাহত |

**BOS-এর পর:** Pullback-এ Entry খুঁজুন (OB, FVG, Fib)

---

## Change of Character (CHOCH)

CHOCH ঘটে যখন Price Trend-এর **বিরুদ্ধে** সাম্প্রতিক Swing Point ভাঙে — **সম্ভাব্য Reversal Signal করে**।

| Trend | CHOCH Condition | অর্থ |
|-------|---------------|-------|
| Bullish → Bearish | সাম্প্রতিক HL-এর নিচে ভাঙে | Uptrend শেষ হতে পারে |
| Bearish → Bullish | সাম্প্রতিক LH-এর উপরে ভাঙে | Downtrend শেষ হতে পারে |

**CHOCH-এর পর:** নতুন Direction-এ Entry খুঁজুন

---

## Internal vs. External Structure

| ধরন | সংজ্ঞা | ব্যবহার |
|------|---------|---------|
| **External** | Major Swing Point (HTF দৃশ্যমান) | Bias ও Direction |
| **Internal** | Minor Swing (LTF, Range-এর ভিতরে) | Entry Timing |

\`\`\`
External Structure: ━━━━ HH ━━━━━━━━━━━━━━━ HH ━━━━
                         ╲      ╱╲    ╱╲  ╱
Internal Structure:       ╲    ╱  ╲  ╱  ╲╱ ← Minor swings
                           ╲  ╱    ╲╱
                    ━━━━ HL ━━━━━━━━━━━ HL ━━━━━━━━

External Bullish (HH/HL) = Overall Bias Long
Internal may be temporarily bearish (pullback) = Entry Zone
\`\`\`

---

## Structure-Based Trading

### কীভাবে Structure ব্যবহার করবেন:
1. **D1/H4-এ External Structure** চিহ্নিত করুন → Bias নির্ধারণ
2. **BOS Confirm** করলে Trend অব্যাহত → Pullback Entry খুঁজুন
3. **CHOCH দেখলে** → সতর্ক হন, নতুন Direction-এ Entry খুঁজুন
4. **Entry-র জন্য Internal Structure** ব্যবহার করুন → LTF-এ CHOCH/BOS
5. **Stop Placement** → শেষ Significant Swing Point-এর বাইরে

---

## সাধারণ ভুল

| ভুল | সমাধান |
|------|--------|
| প্রতিটি ছোট Swing-কে Structure মনে করা | শুধু Clear, Obvious Swing Count করুন |
| BOS ও CHOCH গুলিয়ে ফেলা | BOS = Trend সাথে, CHOCH = Trend বিরুদ্ধে |
| একটি TF-এ Structure দেখা | HTF Structure-ই চূড়ান্ত সত্য |
| CHOCH-এ তাৎক্ষণিক Trade | Confirmation ও Pullback অপেক্ষা |
| Ranging Market-এ Structure খোঁজা | Range-এ Structure কম নির্ভরযোগ্য |

---

## সম্পর্কিত বিষয়

- [Swing High ও Low](/bn/price-action/swing-high-low) — Structure-এর Building Block
- [Trend Analysis](/bn/price-action/trend-analysis) — Structure-ভিত্তিক Trend
- [Reversal Concepts](/bn/price-action/reversal-concepts) — CHOCH ও Reversal
- [Continuation](/bn/price-action/continuation) — BOS ও Continuation
- [Multi-Timeframe Analysis](/bn/price-action/multi-timeframe-analysis) — MTF Structure
`);

w('bn','price-action','trend-analysis',{title:"Trend Analysis — সম্পূর্ণ গাইড",description:"Trend চিহ্নিতকরণ ও Analysis আয়ত্ত করুন। Uptrend, Downtrend, Sideways Market, Trendline, Channel এবং Trend Exhaustion Signal শিখুন।",level:"beginner",order:6},`
## Trend Analysis কী?

Trend Analysis হলো Price Movement-এর **প্রভাবশালী Direction** চিহ্নিত করার প্রক্রিয়া। Trend প্রতিনিধিত্ব করে সবচেয়ে কম প্রতিরোধের পথ — যে Direction-এ Price চলতে থাকার সম্ভাবনা সবচেয়ে বেশি। Trend-এর সাথে Trading হলো একজন Trader-এর সবচেয়ে গুরুত্বপূর্ণ Edge।

<Callout type="info" title="Trend আপনার বন্ধু">
৭০% এর বেশি Profitable Trade আসে Trend-এর সাথে Trading থেকে। Counter-trend Trading-এ অসাধারণ দক্ষতা ও Timing প্রয়োজন। নিয়ম হিসেবে, সবসময় আগে Trend চিহ্নিত করুন এবং এর Direction-এ Trade করুন।
</Callout>

---

## Trend-এর প্রকারভেদ

### Uptrend (Bullish):
- **Higher High (HH)** ও **Higher Low (HL)** তৈরি হচ্ছে
- Buyer নিয়ন্ত্রণে
- Pullback-এ Long Entry খুঁজুন
- Structure: প্রতিটি Push আগেরটির চেয়ে উচ্চ

### Downtrend (Bearish):
- **Lower High (LH)** ও **Lower Low (LL)** তৈরি হচ্ছে
- Seller নিয়ন্ত্রণে
- Rally-তে Short Entry খুঁজুন
- Structure: প্রতিটি Push আগেরটির চেয়ে নিচু

### Sideways/Range:
- কোনো স্পষ্ট HH/HL বা LH/LL নেই
- Support ও Resistance-এর মধ্যে Bounce
- Range Boundary-তে Trade করুন
- Breakout-এর জন্য অপেক্ষা করুন

---

## Trend চিহ্নিতকরণ পদ্ধতি

### পদ্ধতি ১: Structure Analysis (সেরা)
\`\`\`
Swing Point চিহ্নিত করুন:
- HH + HL = Uptrend ✅
- LH + LL = Downtrend ✅
- কোনো Pattern নেই = Range/Sideways

সবচেয়ে নির্ভরযোগ্য পদ্ধতি কারণ এটি Price Action-এর প্রকৃত Structure দেখে।
\`\`\`

### পদ্ধতি ২: Moving Average
\`\`\`
- Price 200 EMA-এর উপরে = Bullish Bias
- Price 200 EMA-এর নিচে = Bearish Bias
- Price 200 EMA-এর কাছে = Neutral/Ranging

দ্রুত Visual Confirmation-এর জন্য ভালো।
\`\`\`

### পদ্ধতি ৩: Trendline
\`\`\`
Uptrend: ২+ Swing Low সংযুক্ত করুন (ঊর্ধ্বমুখী রেখা)
Downtrend: ২+ Swing High সংযুক্ত করুন (নিম্নমুখী রেখা)

Price Trendline-এর উপরে = Bullish
Price Trendline-এর নিচে = Bearish
Trendline Break = সম্ভাব্য Trend পরিবর্তন
\`\`\`

---

## Trend-এর শক্তি মূল্যায়ন

| শক্তিশালী Trend | দুর্বল Trend |
|----------------|------------|
| বড় Impulse Candle | ছোট Impulse Candle |
| ছোট Pullback (38.2%-50%) | গভীর Pullback (61.8%+) |
| দ্রুত BOS | ধীর বা কোনো BOS নেই |
| Impulse > Correction | Impulse ≈ Correction |
| ক্রমবর্ধমান Swing Distance | ক্রমহ্রাসমান Swing Distance |

---

## Trend Exhaustion Signal

Trend শেষ হওয়ার আগে লক্ষণ:

1. **Impulse ছোট হচ্ছে** — প্রতিটি Push কম দূরত্ব Cover করে
2. **Correction বড় হচ্ছে** — Pullback আরো গভীর ও দ্রুত
3. **Equal High/Low** — নতুন Extreme করতে ব্যর্থ
4. **Volume Divergence** — নতুন High/Low কিন্তু Volume কম
5. **Trendline Break** — Dynamic Support/Resistance হারানো
6. **CHOCH** — Trend-এর বিরুদ্ধে প্রথম Structure Break

---

## Trend Trading নিয়ম

1. **Higher Timeframe Trend সবসময় জিতে** — D1 Trend H1-কে Override করে
2. **Trend-এর সাথে Trade করুন** — Counter-trend শুধু অভিজ্ঞদের জন্য
3. **Pullback-এ Enter করুন** — Impulse Chase করবেন না
4. **Trend-এ থাকুন** — Winner তাড়াতাড়ি Close করবেন না
5. **Exhaustion দেখলে সতর্ক হন** — Size কমান বা Exit করুন
6. **CHOCH না দেখা পর্যন্ত Trend Active** — অনুমান করবেন না Trend শেষ

---

## সম্পর্কিত বিষয়

- [Market Structure](/bn/price-action/market-structure) — Structure-ভিত্তিক Trend
- [Swing High ও Low](/bn/price-action/swing-high-low) — Trend-এর Building Block
- [Trend Trading](/bn/price-action/trend-trading) — Trend-এর সাথে Trading
- [Pullbacks](/bn/price-action/pullbacks) — Trend-এ Pullback Entry
- [Reversal Concepts](/bn/price-action/reversal-concepts) — Trend শেষের Signal
`);

console.log('\n✅ Price Action BN Rewrites Complete: 9 topics = 9 files');
console.log('Topics: pullbacks, candlestick-psychology, fakeouts, swing-high-low, multi-timeframe-analysis, support-resistance, breakouts, market-structure, trend-analysis');
console.log('\n🎉 FULL PRICE ACTION SECTION COMPLETE (EN + BN)');

