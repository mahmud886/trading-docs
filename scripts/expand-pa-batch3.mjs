import { writeFileSync } from 'fs';
import { join } from 'path';
const C = join(process.cwd(), 'content');
const w = (l,cat,s,f,c) => { writeFileSync(join(C,l,cat,s+'.mdx'), `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-06-10"\n---\n`+c,'utf-8'); console.log(`✅ ${l}/${cat}/${s}`); };

// BATCH 3: Trading Styles (4 topics × 2 langs = 8 files)

w('en','price-action','trend-trading',{title:"Trend Trading with Price Action — Complete Guide",description:"Master trend trading using pure Price Action. Learn trend identification, trend-following entries, riding trends, and when to exit trend trades.",level:"intermediate",order:21},`
## What is Trend Trading?

Trend trading is the strategy of **identifying the dominant market direction** and placing trades that align with it. In Price Action, we identify trends through swing structure (HH/HL for bullish, LH/LL for bearish) and trade pullbacks within the trend.

<Callout type="info" title="The Most Profitable Approach">
Over 70% of profitable trades come from trend-following. Fighting trends is the #1 reason retail traders lose. The trend is not just your friend — it's your entire edge.
</Callout>

---

## Identifying Trends with Structure

### Bullish Trend:
\`\`\`
Higher Highs (HH) + Higher Lows (HL) = UPTREND
   HH3
  /    
HH2   
/  \\  /
    HL2
HH1   
/  \\  /
    HL1
\`\`\`

### Bearish Trend:
\`\`\`
Lower Highs (LH) + Lower Lows (LL) = DOWNTREND
LH1
  \\  /
   LL1
     \\  /
      LH2
        \\  /
         LL2
\`\`\`

---

## Trend Trading Entry Methods

### Method 1: Pullback to Structure
\`\`\`
1. Confirm trend (HH/HL or LH/LL)
2. Wait for pullback (correction against trend)
3. Enter when pullback reaches:
   - Previous structure level (broken resistance = new support)
   - 50-61.8% Fibonacci retracement
   - Order Block / FVG from the impulse
4. Confirmation: Bullish/bearish rejection candle
5. Stop: Below swing low (bull) or above swing high (bear)
6. Target: New swing high/low or next liquidity
\`\`\`

### Method 2: BOS Continuation
\`\`\`
1. Wait for Break of Structure (new HH or LL)
2. This confirms trend is active
3. Enter on pullback AFTER the BOS
4. Target: Next logical structure level
\`\`\`

### Method 3: Trendline Bounce
\`\`\`
1. Draw trendline connecting 2+ swing lows (bull) or highs (bear)
2. Wait for price to return to trendline
3. Enter on rejection candle at trendline
4. Stop: Beyond trendline
5. Target: Previous swing extreme
\`\`\`

---

## When Trends End

### Exit Signals:
| Signal | Meaning |
|--------|---------|
| CHOCH (Change of Character) | First structural break against trend |
| Momentum divergence | Impulses shrinking, corrections growing |
| Volume divergence | New highs on declining volume |
| Failure to make new extreme | Equal high/low forms |
| Break of major trendline | Dynamic support/resistance lost |

### Exit Strategy:
- Close 50% at first sign of weakness
- Trail stop to last swing point
- Close fully on CHOCH confirmation

---

## Trend Trading Rules

1. **Only trade with the D1/H4 trend** — Never counter-trend as beginner
2. **Wait for pullbacks** — Never chase impulse moves
3. **Higher timeframe = stronger trend** — D1 trend overrules H1
4. **Accept corrections** — They are ENTRY opportunities, not exits
5. **Let winners run** — Use trailing stops, don't exit too early
6. **Multiple entries** — Scale in on each valid pullback

---

## Related Topics

- [Trend Analysis](/en/price-action/trend-analysis) — Identifying trends
- [Pullbacks](/en/price-action/pullbacks) — Entry on retracements
- [Continuation](/en/price-action/continuation) — Trend continuation patterns
- [Market Structure](/en/price-action/market-structure) — Structure-based trends
- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — Timeframe alignment
`);

w('bn','price-action','trend-trading',{title:"Price Action দিয়ে Trend Trading — সম্পূর্ণ গাইড",description:"Pure Price Action ব্যবহার করে Trend Trading আয়ত্ত করুন। Trend চিহ্নিতকরণ, Trend-following Entry, Trend Ride করা এবং কখন Trend Trade Exit করবেন শিখুন।",level:"intermediate",order:21},`
## Trend Trading কী?

Trend Trading হলো **Market-এর প্রভাবশালী Direction চিহ্নিত** করে সেই Direction-এ Trade দেওয়ার Strategy। Price Action-এ আমরা Swing Structure (Bullish-এর জন্য HH/HL, Bearish-এর জন্য LH/LL) দিয়ে Trend চিহ্নিত করি এবং Trend-এর মধ্যে Pullback Trade করি।

<Callout type="info" title="সবচেয়ে লাভজনক পদ্ধতি">
৭০% এর বেশি লাভজনক Trade আসে Trend-following থেকে। Trend-এর বিরুদ্ধে লড়াই Retail Trader-দের হারার #১ কারণ। Trend শুধু আপনার বন্ধু নয় — এটি আপনার সম্পূর্ণ Edge।
</Callout>

---

## Structure দিয়ে Trend চিহ্নিতকরণ

### Bullish Trend:
- Higher High (HH) + Higher Low (HL) = UPTREND
- প্রতিটি High আগেরটির চেয়ে উচ্চ
- প্রতিটি Low আগেরটির চেয়ে উচ্চ

### Bearish Trend:
- Lower High (LH) + Lower Low (LL) = DOWNTREND
- প্রতিটি High আগেরটির চেয়ে নিম্ন
- প্রতিটি Low আগেরটির চেয়ে নিম্ন

---

## Trend Trading Entry পদ্ধতি

### পদ্ধতি ১: Structure-এ Pullback
\`\`\`
1. Trend Confirm করুন (HH/HL বা LH/LL)
2. Pullback-এর জন্য অপেক্ষা (Trend-এর বিরুদ্ধে Correction)
3. Pullback পৌঁছালে Enter:
   - পূর্ববর্তী Structure Level (ভাঙা Resistance = নতুন Support)
   - 50-61.8% Fibonacci Retracement
   - Impulse-এর Order Block / FVG
4. Confirmation: Bullish/Bearish Rejection Candle
5. Stop: Swing Low-এর নিচে (Bull) বা Swing High-এর উপরে (Bear)
6. Target: নতুন Swing High/Low বা পরবর্তী Liquidity
\`\`\`

### পদ্ধতি ২: BOS Continuation
\`\`\`
1. Break of Structure-এর জন্য অপেক্ষা (নতুন HH বা LL)
2. এটি Trend Active আছে Confirm করে
3. BOS-এর পর Pullback-এ Enter
4. Target: পরবর্তী Logical Structure Level
\`\`\`

---

## Trend কখন শেষ হয়

### Exit Signal:
| Signal | অর্থ |
|--------|------|
| CHOCH (Change of Character) | Trend-এর বিরুদ্ধে প্রথম Structural Break |
| Momentum Divergence | Impulse সঙ্কুচিত, Correction বাড়ছে |
| Volume Divergence | Volume কমে নতুন High |
| নতুন Extreme করতে ব্যর্থ | Equal High/Low তৈরি |
| Major Trendline Break | Dynamic Support/Resistance হারানো |

---

## Trend Trading নিয়ম

1. **শুধু D1/H4 Trend-এর সাথে Trade** — Beginner হিসেবে কখনো Counter-trend নয়
2. **Pullback-এর জন্য অপেক্ষা** — Impulse Move Chase করবেন না
3. **Higher Timeframe = শক্তিশালী Trend** — D1 Trend H1-কে Override করে
4. **Correction গ্রহণ করুন** — এগুলো ENTRY সুযোগ, Exit নয়
5. **Winner চলতে দিন** — Trailing Stop ব্যবহার করুন, খুব তাড়াতাড়ি Exit করবেন না

---

## সম্পর্কিত বিষয়

- [Trend Analysis](/bn/price-action/trend-analysis) — Trend চিহ্নিতকরণ
- [Pullbacks](/bn/price-action/pullbacks) — Retracement-এ Entry
- [Continuation](/bn/price-action/continuation) — Trend Continuation Pattern
- [Market Structure](/bn/price-action/market-structure) — Structure-based Trend
- [Multi-Timeframe Analysis](/bn/price-action/multi-timeframe-analysis) — Timeframe Alignment
`);

w('en','price-action','range-trading',{title:"Range Trading with Price Action — Complete Guide",description:"Master range-bound market trading. Learn to identify ranges, trade bounces between S/R, anticipate breakouts, and manage range trades effectively.",level:"intermediate",order:20},`
## What is Range Trading?

Range trading is the strategy of trading **between established support and resistance levels** when price is not trending. Markets spend approximately 60-70% of their time in ranges, making this a valuable skill.

<Callout type="info" title="Range Reality">
Most traders focus exclusively on trends, but price ranges MORE than it trends. A skilled range trader can extract consistent profits from sideways markets while trend traders sit idle.
</Callout>

---

## Identifying a Range

### Characteristics:
- Price bouncing between clear support and resistance
- No clear HH/HL or LH/LL pattern
- ADX below 25 (if using indicators)
- Multiple touches on both boundaries (3+ each)
- Candles have mixed direction (no dominant color)

### Range Structure:
\`\`\`
Resistance ─────────────────────── (Sell zone)
     ↕ Trading Range ↕
Support ────────────────────────── (Buy zone)

Rules:
- Buy at support (lower boundary)
- Sell at resistance (upper boundary)
- Stop beyond the boundary
- Target: Opposite boundary (or midpoint for partials)
\`\`\`

---

## Range Trading Strategy

### Buy at Support:
\`\`\`
1. Price approaches range support
2. Wait for bullish rejection candle (pin bar, engulfing)
3. Enter long above the rejection candle
4. Stop: Below support + buffer (5-15 pips)
5. Target 1: Range midpoint (50% of range)
6. Target 2: Range resistance
7. R:R: Typically 1:2 to 1:3
\`\`\`

### Sell at Resistance:
\`\`\`
1. Price approaches range resistance
2. Wait for bearish rejection candle
3. Enter short below the rejection candle
4. Stop: Above resistance + buffer
5. Target 1: Range midpoint
6. Target 2: Range support
\`\`\`

---

## When Ranges Break

### Breakout Signals:
- Compression forming at one boundary (higher lows into resistance)
- Volume increasing on approach to boundary
- Strong impulsive candle closing beyond range
- Pullback holds outside the range (doesn't re-enter)

### Strategy After Range Break:
\`\`\`
1. Range breaks (strong close beyond boundary)
2. Wait for retest of broken boundary
3. Old resistance becomes new support (or vice versa)
4. Enter on the retest with trend
5. Stop: Back inside the range
6. Target: Range width projected from breakout (measured move)
\`\`\`

---

## Range Trading Rules

1. **Only trade clear ranges** — 3+ touches on both boundaries minimum
2. **Trade the bounce, not the break** (until confirmed)
3. **Reduce size inside range** — It WILL break eventually
4. **Set alerts at boundaries** — Don't over-watch
5. **Be ready to flip** — When range breaks, switch to breakout mode
6. **Stop at boundary** — Never hold through a range break

---

## Related Topics

- [Support & Resistance](/en/price-action/support-resistance) — Range boundaries
- [Compression](/en/price-action/compression) — Compression within ranges
- [Breakouts](/en/price-action/breakouts) — Range breakouts
- [Fakeouts](/en/price-action/fakeouts) — False range breaks
- [Confirmation](/en/price-action/confirmation) — Entry confirmation at range edges
`);

w('bn','price-action','range-trading',{title:"Price Action দিয়ে Range Trading — সম্পূর্ণ গাইড",description:"Range-bound Market Trading আয়ত্ত করুন। Range চিহ্নিতকরণ, S/R-এর মধ্যে Bounce Trade, Breakout Anticipate করা এবং কার্যকরভাবে Range Trade Manage করা শিখুন।",level:"intermediate",order:20},`
## Range Trading কী?

Range Trading হলো Price Trending না করলে **প্রতিষ্ঠিত Support ও Resistance Level-এর মধ্যে** Trade করার Strategy। Market তার সময়ের প্রায় ৬০-৭০% Range-এ কাটায়, এটিকে একটি মূল্যবান দক্ষতা করে তোলে।

<Callout type="info" title="Range বাস্তবতা">
বেশিরভাগ Trader শুধু Trend-এ ফোকাস করেন, কিন্তু Price Trend-এর চেয়ে বেশি Range করে। একজন দক্ষ Range Trader Sideways Market-এ ধারাবাহিক Profit করতে পারেন যেখানে Trend Trader বসে থাকেন।
</Callout>

---

## Range চিহ্নিতকরণ

### বৈশিষ্ট্য:
- স্পষ্ট Support ও Resistance-এর মধ্যে Price Bounce করছে
- কোনো স্পষ্ট HH/HL বা LH/LL Pattern নেই
- উভয় Boundary-তে একাধিক Touch (প্রতিটিতে ৩+)
- Candle মিশ্র Direction (কোনো প্রভাবশালী রঙ নেই)

### Range কাঠামো:
\`\`\`
Resistance ─────────────────────── (Sell Zone)
     ↕ Trading Range ↕
Support ────────────────────────── (Buy Zone)

নিয়ম:
- Support-এ (Lower Boundary) Buy
- Resistance-এ (Upper Boundary) Sell
- Boundary-র বাইরে Stop
- Target: বিপরীত Boundary (বা আংশিকের জন্য Midpoint)
\`\`\`

---

## Range Trading Strategy

### Support-এ Buy:
\`\`\`
1. Price Range Support-এ আসে
2. Bullish Rejection Candle-এর জন্য অপেক্ষা (Pin Bar, Engulfing)
3. Rejection Candle-এর উপরে Long Enter
4. Stop: Support-এর নিচে + Buffer (5-15 Pip)
5. Target 1: Range Midpoint (Range-এর 50%)
6. Target 2: Range Resistance
7. R:R: সাধারণত 1:2 থেকে 1:3
\`\`\`

### Resistance-এ Sell:
\`\`\`
1. Price Range Resistance-এ আসে
2. Bearish Rejection Candle-এর জন্য অপেক্ষা
3. Rejection Candle-এর নিচে Short Enter
4. Stop: Resistance-এর উপরে + Buffer
5. Target 1: Range Midpoint
6. Target 2: Range Support
\`\`\`

---

## Range কখন ভাঙে

### Breakout Signal:
- এক Boundary-তে Compression (Resistance-এ Higher Low)
- Boundary Approach-এ Volume বাড়ছে
- Range-এর বাইরে শক্তিশালী Impulsive Candle Close
- Pullback Range-এর বাইরে থাকে (ভিতরে ফেরে না)

### Range Break-এর পর Strategy:
\`\`\`
1. Range Break হয় (Boundary-র বাইরে শক্তিশালী Close)
2. ভাঙা Boundary-র Retest-এর জন্য অপেক্ষা
3. পুরনো Resistance নতুন Support হয় (বা উল্টো)
4. Trend-এর সাথে Retest-এ Enter
5. Stop: Range-এর ভিতরে ফিরে
6. Target: Breakout থেকে Range Width Project (Measured Move)
\`\`\`

---

## Range Trading নিয়ম

1. **শুধু স্পষ্ট Range Trade করুন** — উভয় Boundary-তে ন্যূনতম ৩+ Touch
2. **Bounce Trade করুন, Break নয়** (Confirmed না হওয়া পর্যন্ত)
3. **Range-এ Size কমান** — এটি শেষ পর্যন্ত ভাঙবেই
4. **Boundary-তে Alert সেট করুন** — অতিরিক্ত পর্যবেক্ষণ করবেন না
5. **Flip করতে প্রস্তুত থাকুন** — Range ভাঙলে Breakout Mode-এ Switch
6. **Boundary-তে Stop** — Range Break-এর মধ্য দিয়ে কখনো Hold করবেন না

---

## সম্পর্কিত বিষয়

- [Support ও Resistance](/bn/price-action/support-resistance) — Range Boundary
- [Compression](/bn/price-action/compression) — Range-এর মধ্যে Compression
- [Breakouts](/bn/price-action/breakouts) — Range Breakout
- [Fakeouts](/bn/price-action/fakeouts) — False Range Break
- [Confirmation](/bn/price-action/confirmation) — Range Edge-এ Entry Confirmation
`);

w('en','price-action','swing-trading',{title:"Swing Trading with Price Action — Complete Guide",description:"Master Price Action swing trading on H4/D1 timeframes. Learn swing entry techniques, multi-day trade management, and swing trading position sizing.",level:"intermediate",order:23},`
## What is Swing Trading?

Swing trading captures **multi-day price swings** by holding positions for 2-20+ days. Using Price Action on H4 and D1 charts, swing traders aim for 100-500+ pip moves with minimal screen time — ideal for people with full-time jobs.

<Callout type="info" title="Best Style for Most Traders">
Swing trading offers the best balance of profit potential, time commitment, and psychological ease. You check charts 1-2 times daily, avoid intraday noise, and catch significant market moves.
</Callout>

---

## Swing Trading Framework

### Timeframes:
| Purpose | Timeframe |
|---------|-----------|
| Bias/Direction | Weekly (W1) |
| Setup Identification | Daily (D1) |
| Entry Timing | 4-Hour (H4) |
| Precision Entry | 1-Hour (H1) — optional |

### Process:
\`\`\`
1. W1: Determine overall bias (bull/bear/range)
2. D1: Identify key levels, structure, and setup
3. H4: Wait for entry confirmation at D1 levels
4. Enter with stop beyond structure
5. Target: D1 swing high/low or key level
6. Manage: Check 2× daily (morning + evening)
\`\`\`

---

## Swing Entry Techniques

### 1. D1 Order Block Entry:
\`\`\`
- D1 creates BOS (new high/low)
- Mark the D1 Order Block
- Set alert at OB zone
- When price reaches OB, drop to H4
- Enter on H4 bullish/bearish confirmation
- Stop: Beyond D1 OB
- Target: Next D1 swing point
\`\`\`

### 2. D1 Fibonacci Pullback:
\`\`\`
- D1 trend is clear (HH/HL or LH/LL)
- Price retraces to 50-61.8% of last D1 swing
- H4 shows rejection at the Fib zone
- Enter with stop below 78.6%
- Target: New D1 swing in trend direction
\`\`\`

### 3. D1 S/R Flip Entry:
\`\`\`
- D1 resistance breaks (becomes support)
- Price returns to test old resistance as new support
- H4 shows bullish rejection at the flip zone
- Enter long with stop below the zone
- Target: Next D1 resistance
\`\`\`

---

## Swing Trade Management

### Position Sizing:
\`\`\`
Swing stops are wider (50-150 pips), so position must be smaller:

Account: $10,000
Risk: 1% = $100
Stop: 80 pips
Pip value: $10 per standard lot
Position: $100 ÷ (80 × $10) = 0.125 lots (0.12 or 0.13)
\`\`\`

### Holding Period Rules:
- Minimum hold: 2 days (let the trade develop)
- Maximum hold: Until target hit or thesis invalidated
- Don't exit because of intraday noise
- Only check 2× daily

### Trailing Strategy:
- Move stop to break-even after 1R gained
- Trail behind swing points as they form
- Close 50% at 1:2 R:R, trail rest to major target

---

## Advantages for Part-Time Traders

| Factor | Benefit |
|--------|---------|
| Screen time | 30 min - 1 hour/day |
| Decision speed | Plenty of time to analyze |
| Emotional pressure | Low (not watching every tick) |
| Cost | Fewer trades = lower spread costs |
| Sleep | No need to watch charts at night |
| Compatibility | Works with full-time job |

---

## Related Topics

- [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) — HTF swing approach
- [Trend Trading](/en/price-action/trend-trading) — Trading with trend
- [Pullbacks](/en/price-action/pullbacks) — Swing pullback entries
- [Trade Management](/en/price-action/trade-management) — Managing multi-day trades
- [Risk Management](/en/price-action/risk-management) — Swing position sizing
`);

w('bn','price-action','swing-trading',{title:"Price Action দিয়ে Swing Trading — সম্পূর্ণ গাইড",description:"H4/D1 Timeframe-এ Price Action Swing Trading আয়ত্ত করুন। Swing Entry Technique, Multi-day Trade Management এবং Swing Trading Position Sizing শিখুন।",level:"intermediate",order:23},`
## Swing Trading কী?

Swing Trading ২-২০+ দিন Position ধরে রেখে **Multi-day Price Swing** ক্যাপচার করে। H4 ও D1 Chart-এ Price Action ব্যবহার করে, Swing Trader ন্যূনতম Screen Time-এ ১০০-৫০০+ Pip Move লক্ষ্য করে — Full-time Job থাকা ব্যক্তিদের জন্য আদর্শ।

<Callout type="info" title="বেশিরভাগ Trader-এর জন্য সেরা Style">
Swing Trading Profit Potential, সময় প্রতিশ্রুতি ও মনস্তাত্ত্বিক স্বাচ্ছন্দ্যের সেরা ভারসাম্য দেয়। দিনে ১-২ বার Chart Check, Intraday Noise এড়ানো, এবং উল্লেখযোগ্য Market Move ক্যাপচার।
</Callout>

---

## Swing Trading Framework

### Timeframe:
| উদ্দেশ্য | Timeframe |
|---------|-----------|
| Bias/Direction | Weekly (W1) |
| Setup চিহ্নিতকরণ | Daily (D1) |
| Entry Timing | 4-Hour (H4) |
| Precision Entry | 1-Hour (H1) — ঐচ্ছিক |

### প্রক্রিয়া:
\`\`\`
1. W1: সামগ্রিক Bias নির্ধারণ (Bull/Bear/Range)
2. D1: Key Level, Structure ও Setup চিহ্নিত
3. H4: D1 Level-এ Entry Confirmation অপেক্ষা
4. Structure-এর বাইরে Stop দিয়ে Enter
5. Target: D1 Swing High/Low বা Key Level
6. Manage: দিনে ২× Check (সকাল + সন্ধ্যা)
\`\`\`

---

## Swing Entry Technique

### ১. D1 Order Block Entry:
\`\`\`
- D1 BOS তৈরি করে (নতুন High/Low)
- D1 Order Block Mark করুন
- OB Zone-এ Alert সেট করুন
- Price OB-তে পৌঁছালে H4-এ নামুন
- H4 Bullish/Bearish Confirmation-এ Enter
- Stop: D1 OB-এর বাইরে
- Target: পরবর্তী D1 Swing Point
\`\`\`

### ২. D1 Fibonacci Pullback:
\`\`\`
- D1 Trend স্পষ্ট (HH/HL বা LH/LL)
- Price শেষ D1 Swing-এর 50-61.8% Retrace
- H4 Fib Zone-এ Rejection দেখায়
- 78.6%-এর নিচে Stop দিয়ে Enter
- Target: Trend Direction-এ নতুন D1 Swing
\`\`\`

---

## Swing Trade Management

### Position Sizing:
\`\`\`
Swing Stop চওড়া (50-150 Pip), তাই Position ছোট হতে হবে:

Account: $10,000
Risk: 1% = $100
Stop: 80 Pip
Pip Value: Standard Lot-এ $10
Position: $100 ÷ (80 × $10) = 0.125 Lot (0.12 বা 0.13)
\`\`\`

### Holding Period নিয়ম:
- ন্যূনতম Hold: ২ দিন (Trade Develop হতে দিন)
- সর্বোচ্চ Hold: Target Hit বা Thesis Invalidate পর্যন্ত
- Intraday Noise-এর কারণে Exit করবেন না
- দিনে শুধু ২× Check

### Trailing Strategy:
- ১R Gain-এর পর Stop Break-even-এ সরান
- নতুন Swing Point তৈরি হলে তার পিছনে Trail
- 1:2 R:R-এ ৫০% Close, বাকি Major Target-এ Trail

---

## Part-time Trader-দের জন্য সুবিধা

| বিষয় | সুবিধা |
|--------|--------|
| Screen Time | দিনে ৩০ মিনিট - ১ ঘণ্টা |
| সিদ্ধান্তের গতি | Analysis-এর জন্য যথেষ্ট সময় |
| আবেগের চাপ | কম (প্রতিটি Tick দেখা লাগে না) |
| খরচ | কম Trade = কম Spread Cost |
| ঘুম | রাতে Chart দেখার প্রয়োজন নেই |
| সামঞ্জস্যতা | Full-time Job-এর সাথে কাজ করে |

---

## সম্পর্কিত বিষয়

- [Multi-Timeframe Analysis](/bn/price-action/multi-timeframe-analysis) — HTF Swing পদ্ধতি
- [Trend Trading](/bn/price-action/trend-trading) — Trend-এর সাথে Trading
- [Pullbacks](/bn/price-action/pullbacks) — Swing Pullback Entry
- [Trade Management](/bn/price-action/trade-management) — Multi-day Trade Manage
- [Risk Management](/bn/price-action/risk-management) — Swing Position Sizing
`);

w('en','price-action','scalping',{title:"Price Action Scalping — Complete Guide",description:"Master Price Action scalping on M1-M5 timeframes. Learn micro-structure reading, quick entry techniques, session-based scalping, and scalping risk management.",level:"advanced",order:22},`
## What is Price Action Scalping?

Price Action scalping is taking **rapid trades on M1-M5 timeframes** using pure price structure, candlestick patterns, and micro-level support/resistance — no indicators needed. Scalpers aim for 5-20 pip profits per trade with tight stops.

<Callout type="warning" title="Advanced Skill Required">
Scalping is the HARDEST trading style. It requires fast decisions, excellent execution, low spreads, and strong psychological control. Master swing trading first. Only attempt scalping after 6+ months of profitable higher-timeframe trading.
</Callout>

---

## Scalping Requirements

| Requirement | Detail |
|-------------|--------|
| **Spread** | Must be <1 pip (ECN/Raw account essential) |
| **Platform** | Fast execution, one-click trading |
| **Internet** | Low latency, reliable connection |
| **Sessions** | London/NY overlap only (8:00-11:00 EST) |
| **Pairs** | EUR/USD, GBP/USD (tightest spreads) |
| **Account** | $5,000+ (to handle spread costs) |
| **Focus** | 2-3 hours of undivided attention |

---

## Scalping Strategy

### M5 Structure + M1 Entry:
\`\`\`
1. Determine M5 structure (bullish/bearish/range)
2. Identify M5 key levels (recent swing H/L, OBs)
3. Wait for price to approach M5 key level
4. Drop to M1 for precise entry
5. Enter on M1 rejection candle at M5 level
6. Stop: 5-10 pips (beyond M5 structure)
7. Target: 10-20 pips (next M5 swing point)
8. Duration: 2-15 minutes per trade
\`\`\`

### Session-Open Scalping:
\`\`\`
1. Asian range forms (identify high/low)
2. London/NY opens → breaks Asian range
3. First breakout often retraces (fakeout)
4. Trade the second directional push
5. Target: 1-2× Asian range width
\`\`\`

---

## Scalping Rules

1. **Maximum 3-5 pips stop** for most setups
2. **Risk 0.5-1% per trade** (small but frequent)
3. **Stop after 3 consecutive losses** (reassess)
4. **Only during active sessions** (avoid Asian for major pairs)
5. **Avoid news** (15 minutes before/after high-impact)
6. **Maximum 10 trades/day** (quality over quantity)
7. **Exit all before session end** (no overnight scalp holds)
8. **Daily loss limit: 2-3%** — walk away if hit

---

## Scalping vs. Other Styles

| Factor | Scalping | Day Trading | Swing |
|--------|----------|-------------|-------|
| Holding time | 1-15 min | 30 min - 8 hrs | 2-20 days |
| Trades/day | 5-20 | 2-5 | 0-1 |
| Pip target | 5-20 | 30-80 | 100-500 |
| Stop loss | 3-10 pips | 15-40 pips | 50-150 pips |
| Screen time | 2-4 hrs intense | 3-6 hrs | 30 min |
| Stress | Very high | High | Low |
| Spread impact | Very high | Moderate | Low |
| Best for | Full-time pros | Dedicated traders | Part-timers |

---

## Related Topics

- [Intraday](/en/price-action/intraday) — Full intraday approach
- [Session Analysis](/en/price-action/session-analysis) — Session-based opportunities
- [Entry Models](/en/price-action/entry-models) — Quick entry techniques
- [Risk Management](/en/price-action/risk-management) — Scalp risk control
- [Candlestick Basics](/en/price-action/candlestick-basics) — Reading M1 candles
`);

w('bn','price-action','scalping',{title:"Price Action Scalping — সম্পূর্ণ গাইড",description:"M1-M5 Timeframe-এ Price Action Scalping আয়ত্ত করুন। Micro-structure Reading, Quick Entry Technique, Session-based Scalping এবং Scalping Risk Management শিখুন।",level:"advanced",order:22},`
## Price Action Scalping কী?

Price Action Scalping হলো Pure Price Structure, Candlestick Pattern এবং Micro-level Support/Resistance ব্যবহার করে **M1-M5 Timeframe-এ দ্রুত Trade** নেওয়া — কোনো Indicator প্রয়োজন নেই। Scalper প্রতি Trade-এ ৫-২০ Pip Profit লক্ষ্য করে Tight Stop-সহ।

<Callout type="warning" title="Advanced Skill প্রয়োজন">
Scalping সবচেয়ে কঠিন Trading Style। দ্রুত সিদ্ধান্ত, চমৎকার Execution, কম Spread এবং শক্তিশালী Psychological Control প্রয়োজন। আগে Swing Trading আয়ত্ত করুন। ৬+ মাস Higher-timeframe Profitable Trading-এর পরেই Scalping চেষ্টা করুন।
</Callout>

---

## Scalping প্রয়োজনীয়তা

| প্রয়োজনীয়তা | বিবরণ |
|-------------|--------|
| **Spread** | <1 Pip হতে হবে (ECN/Raw Account অপরিহার্য) |
| **Platform** | দ্রুত Execution, One-click Trading |
| **Internet** | Low Latency, নির্ভরযোগ্য Connection |
| **Session** | শুধু London/NY Overlap (8:00-11:00 EST) |
| **Pair** | EUR/USD, GBP/USD (সবচেয়ে সংকীর্ণ Spread) |
| **Account** | $5,000+ (Spread Cost সামলাতে) |
| **Focus** | ২-৩ ঘণ্টা অবিভক্ত মনোযোগ |

---

## Scalping Strategy

### M5 Structure + M1 Entry:
\`\`\`
1. M5 Structure নির্ধারণ (Bullish/Bearish/Range)
2. M5 Key Level চিহ্নিত (সাম্প্রতিক Swing H/L, OB)
3. Price M5 Key Level-এ আসার অপেক্ষা
4. সুনির্দিষ্ট Entry-র জন্য M1-এ নামুন
5. M5 Level-এ M1 Rejection Candle-এ Enter
6. Stop: 5-10 Pip (M5 Structure-এর বাইরে)
7. Target: 10-20 Pip (পরবর্তী M5 Swing Point)
8. Duration: প্রতি Trade-এ ২-১৫ মিনিট
\`\`\`

### Session-Open Scalping:
\`\`\`
1. Asian Range তৈরি হয় (High/Low চিহ্নিত)
2. London/NY Open → Asian Range Break
3. প্রথম Breakout প্রায়ই Retrace করে (Fakeout)
4. দ্বিতীয় Directional Push Trade করুন
5. Target: Asian Range Width-এর 1-2×
\`\`\`

---

## Scalping নিয়ম

1. বেশিরভাগ Setup-এ **সর্বোচ্চ 3-5 Pip Stop**
2. **প্রতি Trade-এ 0.5-1% Risk** (ছোট কিন্তু ঘন ঘন)
3. **পরপর ৩ Loss-এর পর থামুন** (পুনর্মূল্যায়ন)
4. **শুধু Active Session-এ** (Major Pair-এ Asian এড়িয়ে চলুন)
5. **News এড়িয়ে চলুন** (High-impact-এর আগে/পরে ১৫ মিনিট)
6. **দিনে সর্বোচ্চ ১০ Trade** (Quality over Quantity)
7. **Session শেষের আগে সব Exit** (Overnight Scalp Hold নয়)
8. **দৈনিক Loss Limit: 2-3%** — Hit হলে চলে যান

---

## Scalping vs. অন্যান্য Style

| বিষয় | Scalping | Day Trading | Swing |
|--------|----------|-------------|-------|
| Holding Time | ১-১৫ মিনিট | ৩০ মি - ৮ ঘণ্টা | ২-২০ দিন |
| দৈনিক Trade | ৫-২০ | ২-৫ | ০-১ |
| Pip Target | ৫-২০ | ৩০-৮০ | ১০০-৫০০ |
| Stop Loss | ৩-১০ Pip | ১৫-৪০ Pip | ৫০-১৫০ Pip |
| Screen Time | ২-৪ ঘণ্টা তীব্র | ৩-৬ ঘণ্টা | ৩০ মিনিট |
| Stress | অত্যন্ত বেশি | বেশি | কম |
| Spread প্রভাব | অত্যন্ত বেশি | মধ্যম | কম |
| উপযুক্ত | Full-time Pro | নিবেদিত Trader | Part-timer |

---

## সম্পর্কিত বিষয়

- [Intraday](/bn/price-action/intraday) — সম্পূর্ণ Intraday পদ্ধতি
- [Session Analysis](/bn/price-action/session-analysis) — Session-based সুযোগ
- [Entry Models](/bn/price-action/entry-models) — Quick Entry Technique
- [Risk Management](/bn/price-action/risk-management) — Scalp Risk Control
- [Candlestick Basics](/bn/price-action/candlestick-basics) — M1 Candle পড়া
`);

console.log('\n✅ Price Action Batch 3 Complete: 4 topics × 2 languages = 8 files');
console.log('Topics: trend-trading, range-trading, swing-trading, scalping');

