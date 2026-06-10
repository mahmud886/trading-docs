import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const C = join(process.cwd(), 'content');

try {
  mkdirSync(join(C, 'bn', 'academy', 'ict-smc-course'), { recursive: true });
} catch (e) {}

const writeEN = (slug, meta, content) => {
  const path = join(C, 'en', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, 'utf-8');
  console.log(`✅ EN: ${slug}`);
};

const writeBN = (slug, meta, content) => {
  const path = join(C, 'bn', 'academy', 'ict-smc-course', `${slug}.mdx`);
  const frontmatter = `---
title: "${meta.title}"
description: "${meta.description}"
order: ${meta.order}
level: ${meta.level}
lastUpdated: "2026-06-09"
---
`;
  writeFileSync(path, frontmatter + content, 'utf-8');
  console.log(`✅ BN: ${slug}`);
};

// ============ TOPIC 28: Manipulation ============
writeEN('28-manipulation', {
  title: 'Manipulation',
  description: 'Master the Manipulation phase — the institutional stop hunt that creates liquidity before the true move. Learn to identify and trade Judas Swings and false breakouts.',
  order: 28,
  level: 'advanced'
}, `# Manipulation

### Definition

Manipulation is the **second phase of the Power of Three model** where Smart Money creates a false move to sweep liquidity (stop losses) and trap retail traders before the true directional move begins. This deliberate stop hunt  occurs when price breaks out of the accumulation range in the WRONG direction, triggering retail stops that become institutional entries.

Also known as: **Judas Swing, Stop Hunt, Liquidity Raid**.

### Why It Matters

- Manipulation explains why 70-80% of breakouts FAIL
- It's the phase where retail loses and Smart Money wins
- Recognizing manipulation prevents you from being trapped
- It provides THE BEST entry setups when you trade the reversal
- Understanding manipulation is the difference between consistent profit vs consistent loss

### How It Works

**Manipulation Process:**
1. **Setup:** Accumulation range forms with clear BSL/SSL
2. **False Breakout:** Price breaks range in one direction
3. **Liquidity Sweep:** Stop losses get triggered above/below range
4. **Retail Entry:** Breakout traders enter positions
5. **Quick Reversal:** Price rejects back into/through range
6. **Retail Stops:** Breakout traders get stopped out
7. **Smart Money Entry:** Their stops become institutional limit orders
8. **Distribution Begins:** Price moves in TRUE direction

**Manipulation Characteristics:**
- Occurs at session opens (London 8 AM, NY 9:30 AM)
- Brief duration (15-60 minutes typically)
- Weak candles during breakout (large wicks, small bodies)
- Quick rejection back into range
- Creates FVG during the reversal
- Often coincides with news releases

### Institutional Logic

**Why manipulation is necessary:**
- Institutions need LIQUIDITY to fill large orders
- There isn't enough natural liquidity at range extremes
- By sweeping stops, they CREATE the liquidity they need
- Retail stop losses = Institutional entry orders
- This ensures efficient fills at favorable prices
- The pattern is algorithmic and repeats daily

**The Trap Mechanism:**
1. Retail sees consolidation → Waits for breakout confirmation
2. Breakout occurs → Retail enters "with momentum"
3. Price reverses →Retail hits stop loss
4. Stop loss triggers market order → Becomes Smart Money's fill
5. Smart Money now has position → Distributes to target

### Trading Application

**Identifying Manipulation:**

**Pre-Manipulation Checklist:**
- ✅ Clear accumulation range exists
- ✅ Equal highs (BSL) and/or equal lows (SSL) present
- ✅ Major session open approaching (London/NY)
- ✅ HTF bias determined
- ✅ News event may be scheduled

**During Manipulation Watch For:**
1. **Initial Breakout:** Price breaks accumulation range
2. **Weak Candles:** Large wicks, indecision
3. **No Follow-Through:** Next candles don't continue strongly
4. **Reversal Signals:**
   - Engulfing candle opposite direction
   - FVG creation
   - Quick move back into range
5. **Volume:** Often spike then drop

**Trading the Manipulation:**

**Method 1: Immediate Reversal (Aggressive)**
1. Spot the false breakout and reversal candle
2. Enter on engulfing/pin bar close
3. Stop: Beyond manipulation wick
4. Target: Opposite side liquidity

**Method 2: Retracement Entry (Conservative)**
1. Wait for manipulation AND reversal
2. Wait for BOS in true direction
3. Enter on retracement to FVG/OB/OTE from manipulation
4. Stop: Below/above retracement zone
5. Target: Opposite liquidity + extensions

**Optimal Entry Framework:**
- Manipulation sweeps SSL → Enter LONG on retracement
- Manipulation sweeps BSL → Enter SHORT on retracement
- Must align with HTF bias for highest probability

### Common Mistakes

- ❌ Trading THE breakout — You become the liquidity
- ❌ Entering reversal too early (before confirmation)
- ❌ Not waiting for manipulation to fully develop
- ❌ Trading manipulation against HTF bias
- ❌ Expecting manipulation on every range — Sometimes breakouts are real

### Advanced Notes

- **Double Manipulation:** Price may sweep BOTH sides before distribution (higher volatility)
- **Failed Manipulation:** If "manipulation" continues without reversal → It was the real move
- **News-Driven Manipulation:** News releases amplify manipulation effectiveness
- **Time Windows:** Manipulation most reliable during Kill Zones
- **Nested Manipulation:** LTF manipulation can occur within HTF distribution

### Example

**GBP/USD Manipulation Trade:**

**Accumulation (Asian Session):**
- Range: 1.2640 - 1.2660
- BSL above 1.2660, SSL below 1.2640
- HTF: 4H bullish bias

**Manipulation (London Open 8:00 AM):**
- Price spikes DOWN to 1.2635 (sweeps SSL)
- Large lower wick, weak bearish candle
- Duration: 12 minutes only

**Reversal:**
- 8:12 AM: Bullish engulfing forms
- Price back at 1.2648
- FVG created: 1.2640-1.2645

**Distribution Entry:**
- Price breaks 1.2660 (BOS bullish)
- Retracement to 1.2653 (OTE + FVG)
- **ENTRY:** BUY 1.2653
- **STOP:** 1.2638 (below manipulation low)
- **TARGET:** 1.2710 (next BSL)

**Result:**
- 15 pip risk, 57 pip reward → 1:3.8 R:R
- Manipulation provided perfect entry setup

The key: Recognized false breakout, waited for reversal confirmation, entered on retracement.
`);

writeBN('28-manipulation', {
  title: 'Manipulation',
  description: 'Manipulation Phase Master করুন — Institutional Stop Hunt যা True Move এর আগে Liquidity তৈরি করে। Judas Swing ও False Breakout চিহ্নিত ও Trade করা শিখুন।',
  order: 28,
  level: 'advanced'
}, `# Manipulation

### Definition

Manipulation হলো **Power of Three Model এর দ্বিতীয় Phase** যেখানে Smart Money Liquidity (Stop Loss) Sweep করতে এবং True Directional Move শুরুর আগে Retail Trader Trap করতে False Move তৈরি করে। এই ইচ্ছাকৃত Stop Hunt ঘটে যখন Price Accumulation Range থেকে ভুল Direction এ Breakout করে, Retail Stop Trigger করে যা Institutional Entry হয়ে যায়।

অন্যান্য নাম: **Judas Swing, Stop Hunt, Liquidity Raid**।

### Why It Matters

- Manipulation ব্যাখ্যা করে কেন 70-80% Breakout FAIL হয়
- এটি সেই Phase যেখানে Retail হারে এবং Smart Money জেতে
- Manipulation চেনা আপনাকে Trap হওয়া থেকে রক্ষা করে
- Reversal Trade করলে এটি সেরা Entry Setup দেয়
- Manipulation বুঝা Consistent Profit vs Consistent Loss এর মধ্যে পার্থক্য

### How It Works

**Manipulation Process:**
1. **Setup:** স্পষ্ট BSL/SSL সহ Accumulation Range গঠিত
2. **False Breakout:** Price একদিকে Range Break করে
3. **Liquidity Sweep:** Range এর উপরে/নিচে Stop Loss Trigger হয়
4. **Retail Entry:** Breakout Trader Position Enter করে
5. **দ্রুত Reversal:** Price Range এ/Range এর মধ্য দিয়ে ফিরে Reject করে
6. **Retail Stop:** Breakout Trader Stop Out হয়
7. **Smart Money Entry:** তাদের Stop Institutional Limit Order হয়ে যায়
8. **Distribution শুরু:** Price সত্যিকারের Direction এ Move করে

**Manipulation বৈশিষ্ট্য:**
- Session Open এ ঘটে (London 8 AM, NY 9:30 AM)
- সংক্ষিপ্ত সময়কাল (সাধারণত 15-60 মিনিট)
- Breakout এর সময় দুর্বল Candle (বড় Wick, ছোট Body)
- Range এ দ্রুত Rejection ফিরে
- Reversal এর সময় FVG তৈরি করে
- প্রায়ই News Release এর সাথে মিলে যায়

### Institutional Logic

**Manipulation কেন প্রয়োজনীয়:**
- Institution বড় Order Fill করতে LIQUIDITY প্রয়োজন
- Range Extreme এ যথেষ্ট প্রাকৃতিক Liquidity নেই
- Stop Sweep করে, তারা তাদের প্রয়োজনীয় Liquidity তৈরি করে
- Retail Stop Loss = Institutional Entry Order
- এটি অনুকূল দামে দক্ষ Fill নিশ্চিত করে
- Pattern Algorithmic এবং প্রতিদিন পুনরাবৃত্তি হয়

**Trap Mechanism:**
1. Retail Consolidation দেখে → Breakout Confirmation এর জন্য অপেক্ষা করে
2. Breakout ঘটে → Retail "Momentum সহ" Enter করে
3. Price Reverse হয় → Retail Stop Loss Hit করে
4. Stop Loss Market Order Trigger করে → Smart Money এর Fill হয়ে যায়
5. Smart Money এখন Position আছে → Target এ Distribute করে

### Trading Application

**Manipulation চিহ্নিত করা:**

**Pre-Manipulation Checklist:**
- ✅ স্পষ্ট Accumulation Range বিদ্যমান
- ✅ Equal High (BSL) এবং/অথবা Equal Low (SSL) উপস্থিত
- ✅ Major Session Open আসছে (London/NY)
- ✅ HTF Bias নির্ধারিত
- ✅ News Event Schedule থাকতে পারে

**Manipulation এর সময় দেখুন:**
1. **প্রাথমিক Breakout:** Price Accumulation Range Break করে
2. **দুর্বল Candle:** বড় Wick, Indecision
3. **কোনো Follow-Through নেই:** পরের Candle শক্তিশালীভাবে Continue করে না
4. **Reversal Signal:**
   - বিপরীত Direction এ Engulfing Candle
   - FVG তৈরি
   - Range এ দ্রুত Move ফিরে
5. **Volume:** প্রায়ই Spike তারপর Drop

**Manipulation Trading:**

**পদ্ধতি 1: তাৎক্ষণিক Reversal (Aggressive)**
1. False Breakout ও Reversal Candle চিহ্নিত করুন
2. Engulfing/Pin Bar Close এ Enter করুন
3. Stop: Manipulation Wick এর বাইরে
4. Target: বিপরীত দিকের Liquidity

**পদ্ধতি 2: Retracement Entry (Conservative)**
1. Manipulation এবং Reversal এর জন্য অপেক্ষা করুন
2. সত্যিকারের Direction এ BOS এর জন্য অপেক্ষা করুন
3. Manipulation থেকে FVG/OB/OTE এ Retracement এ Enter করুন
4. Stop: Retracement Zone এর নিচে/উপরে
5. Target: বিপরীত Liquidity + Extension

### Common Mistakes

- ❌ Breakout Trade করা — আপনি Liquidity হয়ে যান
- ❌ খুব তাড়াতাড়ি Reversal এ Enter করা (Confirmation আগে)
- ❌ Manipulation সম্পূর্ণ Develop হওয়ার জন্য অপেক্ষা না করা
- ❌ HTF Bias এর বিরুদ্ধে Manipulation Trade করা
- ❌ প্রতিটি Range এ Manipulation আশা করা — কখনো কখনো Breakout Real হয়

### Advanced Notes

- **Double Manipulation:** Distribution এর আগে Price উভয় দিকে Sweep করতে পারে (উচ্চ Volatility)
- **Failed Manipulation:** যদি "Manipulation" Reversal ছাড়া Continue করে → এটি Real Move ছিল
- **News-Driven Manipulation:** News Release Manipulation কার্যকারিতা বৃদ্ধি করে
- **Time Window:** Kill Zone এর সময় Manipulation সবচেয়ে Reliable
- **Nested Manipulation:** HTF Distribution এর মধ্যে LTF Manipulation ঘটতে পারে

### Example

**GBP/USD Manipulation Trade:**

**Accumulation (Asian Session):**
- Range: 1.2640 - 1.2660
- 1.2660 এর উপরে BSL, 1.2640 এর নিচে SSL
- HTF: 4H Bullish Bias

**Manipulation (London Open 8:00 AM):**
- Price 1.2635 এ নিচে Spike করে (SSL Sweep)
- বড় নিচের Wick, দুর্বল Bearish Candle
- সময়কাল: মাত্র 12 মিনিট

**Reversal:**
- 8:12 AM: Bullish Engulfing গঠিত
- Price 1.2648 এ ফিরে
- FVG তৈরি: 1.2640-1.2645

**Distribution Entry:**
- Price 1.2660 Break করে (BOS Bullish)
- 1.2653 এ Retracement (OTE + FVG)
- **ENTRY:** 1.2653 এ BUY
- **STOP:** 1.2638 (Manipulation Low এর নিচে)
- **TARGET:** 1.2710 (পরবর্তী BSL)

**ফলাফল:**
- 15 Pip Risk, 57 Pip Reward → 1:3.8 R:R
- Manipulation নিখুঁত Entry Setup দিয়েছে

মূল: False Breakout চিনেছে, Reversal Confirmation এর জন্য অপেক্ষা করেছে, Retracement এ Enter করেছে।
`);

console.log('✅ Topic 28 (Manipulation) complete!\n');

//... (Continue with topics 29-37 in similar fashion)
writeEN('29-distribution', {
  title: 'Distribution',
  description: 'Master the Distribution phase — the true institutional move that delivers price to target. Learn to ride the real move after accumulation and manipulation.',
  order: 29,
  level: 'advanced'
}, `# Distribution

### Definition

Distribution is the **third and final phase of the Power of Three model** where Smart Money executes the TRUE directional move, delivering price aggressively to their target after accumulating positions and manipulating liquidity. This is the REAL institutional move — maximum displacement, highest momentum, and where properly positioned traders make their profits.

**Key Concept:** Distribution is where Smart Money EXITS their accumulated positions at favorable prices, distributing their orders into market liquidity.

### Why It Matters

- Distribution is where the MONEY is made — this is the trending move
- It's the phase with highest probability and best risk-reward setups
- Understanding distribution timing prevents entering too early or too late
- This is the only phase worth trading for swing/day traders
- Distribution moves are where 80% of daily/weekly range occurs

### How It Works

**Distribution Process:**
1. **Prerequisites:** Accumulation completed, manipulation occurred
2. **Reversal:** Price reverses from manipulation extreme
3. **Structure Break:** BOS/CHOCH confirms new direction
4. **Strong Displacement:** Large candles, FVG creation
5. **Retracement:** Price pulls back to OTE/FVG/OB
6. **Continuation:** Additional displacement toward target
7. **Target Reached:** BSL/SSL opposite from manipulation gets hit
8. **Exhaustion:** Distribution complete, new accumulation may begin

**Distribution Characteristics:**
- Strong momentum candles
- FVG creation during moves
- Clear BOS/CHOCH
- Targets opposing liquidity pools
- Often occurs during Kill Zones (London 8-12, NY 9:30-12)
- Higher volume than accumulation phase

### Institutional Logic

**Why distribution occurs:**
- Smart Money has accumulated positions during Phase 1
- Manipulation (Phase 2) created optimal entry prices
- Now they can safely move price to their profit targets
- Retail trapped traders provide liquidity for the move
- Distribution ensures Smart Money can EXIT at favorable prices

**The Mechanics:**
- Accumulated LONG positions → Distribute (SELL) at higher prices
- Accumulated SHORT positions → Distribute (BUY  BACK) at lower prices
- The aggressive move is their profit-taking, not their entry
- Late retail FOMO provides exit liquidity for institutions

### Trading Application

**Entering Distribution:**

**Primary Entry Method (Conservative):**
1. Confirm accumulation range existed
2. Confirm manipulation occurred (Judas Swing)
3. Wait for BOS in true direction
4. Identify retracement zone (FVG, OB, OTE)
5. Enter on first touch of retracement zone
6. Stop: Beyond retracement zone
7. Target: Opposite liquidity pool

**Entry Checklist:**
- ✅ HTF bias aligns with distribution direction
- ✅ BOS confirmed
- ✅ FVG or OB present for entry
- ✅ During Kill Zone window
- ✅ Risk-reward minimum 1:3

**Managing Distribution Trades:**
- **Initial Target:** SSL/BSL from accumulation range
- **Extended Target:** Next major liquidity level
- **Trail Stop:** As distribution continues, trail below swing lows (longs) or above swing highs (shorts)
- **Partial Exits:** Take partial profits at initial target, let runner continue
- **Re-Entry:** On subsequent retracements within distribution

**Distribution Phases:**
1. **Early Distribution:** Initial structure break — best R:R entries
2. **Mid Distribution:** Continuation after first retracement — still valid
3. **Late Distribution:** Approaching target — lower R:R, be cautious
4. **Exhaustion:** Near/at target — AVOID new entries, prepare for reversal

### Common Mistakes

- ❌ Entering distribution without confirmation (before BOS)
- ❌ Chasing the move without waiting for retracement
- ❌ Entering late distribution (near target)
- ❌ Trading against HTF bias
- ❌ Not taking profits at target — distribution ends!

### Advanced Notes

- **Multiple Distribution Waves:** Strong trends have multiple accumulation → manipulation → distribution cycles
- **Distribution within Distribution:** HTF distribution contains LTF AMD cycles (nested PO3)
- **Failed Distribution:** If price fails to reach target and reverses → New accumulation beginning
- **Kill Zone Distribution:** Most powerful distribution occurs during institutional hours
- **Weekend Gap:** Friday distribution may continue Monday after gap fill

### Example

**EUR/USD Complete Distribution Trade:**

**Phase 1: Accumulation**
- Asian range: 1.0840-1.0860
- 8 hours consolidation

**Phase 2: Manipulation**
- London open: Drop to 1.0835 (SSL sweep)
- Quick reversal back to 1.0848

**Phase 3: Distribution**
- **8:30 AM:** BOS above 1.0860 (accumulation high)
- **Strong displacement:** 1.0860 → 1.0890 in 3 candles
- **FVG created:** 1.0863-1.0868
- **Retracement:** Price returns to 1.0865 (FVG + OTE)

**Entry:**
- **BUY:** 1.0865 (in FVG, OTE zone)
- **Stop:** 1.0858 (below FVG)
- **Initial Target:** 1.0910 (1st BSL)
- **Extended Target:** 1.0940 (major BSL)

**Distribution Continuation:**
- 10:00 AM: Hits 1.0910 (take 50% profit)
- 11:30 AM: Minor retracement to 1.0898
- 12:15 PM: Continues to 1.0935

**Result:**
- Initial: 7 pip risk, 45 pip reward → 1:6.4 R:R
- Runner: Additional 25 pips
- Total: 70 pips from distribution phase

Distribution delivered precisely as expected after proper accumulation and manipulation setup.
`);

writeBN('29-distribution', {
  title: 'Distribution',
  description: 'Distribution Phase Master করুন — প্রকৃত Institutional Move যা Price Target এ Deliver করে। Accumulation ও Manipulation এর পর Real Move Ride করা শিখুন।',
  order: 29,
  level: 'advanced'
}, `# Distribution

### Definition

Distribution হলো **Power of Three Model এর তৃতীয় ও চূড়ান্ত Phase** যেখানে Smart Money সত্যিকারের Directional Move Execute করে, Position Accumulate করে ও Liquidity Manipulate করার পর আক্রমণাত্মকভাবে তাদের Target এ Price Deliver করে। এটি সত্যিকারের INSTITUTIONAL Move — সর্বোচ্চ Displacement, সর্বোচ্চ Momentum, এবং যেখানে সঠিকভাবে Position করা Trader তাদের Profit করে।

**মূল Concept:** Distribution হলো যেখানে Smart Money অনুকূল দামে তাদের Accumulated Position থেকে EXIT করে, Market Liquidity এ তাদের Order Distribute করে।

### Why It Matters

- Distribution হলো যেখানে টাকা তৈরি হয় — এটি Trending Move
- এটি সর্বোচ্চ Probability ও সেরা Risk-Reward Setup এর Phase
- Distribution Timing বুঝলে খুব তাড়াতাড়ি বা দেরিতে Enter করা থেকে রক্ষা পায়
- Swing/Day Trader দের জন্য Trade করার যোগ্য একমাত্র Phase এটি
- Distribution Move হলো যেখানে Daily/Weekly Range এর 80% ঘটে

### How It Works

**Distribution Process:**
1. **পূর্বশর্ত:** Accumulation সম্পন্ন, Manipulation ঘটেছে
2. **Reversal:** Manipulation Extreme থেকে Price Reverse হয়
3. **Structure Break:** BOS/CHOCH নতুন Direction Confirm করে
4. **শক্তিশালী Displacement:** বড় Candle, FVG তৈরি
5. **Retracement:** Price OTE/FVG/OB এ Pull Back করে
6. **Continuation:** Target এর দিকে অতিরিক্ত Displacement
7. **Target পৌঁছানো:** Manipulation এর বিপরীত BSL/SSL Hit হয়
8. **Exhaustion:** Distribution সম্পূর্ণ, নতুন Accumulation শুরু হতে পারে

**Distribution বৈশিষ্ট্য:**
- শক্তিশালী Momentum Candle
- Move এর সময় FVG তৈরি
- স্পষ্ট BOS/CHOCH
- বিপরীত Liquidity Pool Target করে
- প্রায়ই Kill Zone এ ঘটে (London 8-12, NY 9:30-12)
- Accumulation Phase এর চেয়ে বেশি Volume

### Institutional Logic

**Distribution কেন ঘটে:**
- Phase 1 এ Smart Money Position Accumulate করেছে
- Manipulation (Phase 2) Optimal Entry Price তৈরি করেছে
- এখন তারা নিরাপদে তাদের Profit Target এ Price Move করতে পারে
- Trapped Retail Trader Move এর জন্য Liquidity দেয়
- Distribution নিশ্চিত করে Smart Money অনুকূল দামে EXIT করতে পারে

### Trading Application

**Distribution এ Enter করা:**

**প্রাথমিক Entry পদ্ধতি (Conservative):**
1. Accumulation Range ছিল Confirm করুন
2. Manipulation ঘটেছে Confirm করুন (Judas Swing)
3. সত্যিকারের Direction এ BOS এর জন্য অপেক্ষা করুন
4. Retracement Zone চিহ্নিত করুন (FVG, OB, OTE)
5. Retracement Zone এর প্রথম Touch এ Enter করুন
6. Stop: Retracement Zone এর বাইরে
7. Target: বিপরীত Liquidity Pool

**Entry Checklist:**
- ✅ HTF Bias Distribution Direction এর সাথে Align করে
- ✅ BOS Confirm
- ✅ Entry জন্য FVG বা OB উপস্থিত
- ✅ Kill Zone Window এর সময়
- ✅ সর্বনিম্ন Risk-Reward 1:3

**Distribution Trade Manage করা:**
- **প্রাথমিক Target:** Accumulation Range থেকে SSL/BSL
- **Extended Target:** পরবর্তী Major Liquidity Level
- **Trail Stop:** Distribution Continue করার সাথে সাথে, Swing Low (Long) এর নিচে বা Swing High (Short) এর উপরে Trail করুন
- **Partial Exit:** প্রাথমিক Target এ Partial Profit নিন, Runner Continue করতে দিন
- **Re-Entry:** Distribution এর মধ্যে পরবর্তী Retracement এ

### Common Mistakes

- ❌ Confirmation ছাড়া Distribution এ Enter করা (BOS আগে)
- ❌ Retracement এর জন্য অপেক্ষা না করে Move Chase করা
- ❌ Late Distribution এ Enter করা (Target কাছে)
- ❌ HTF Bias এর বিরুদ্ধে Trade করা
- ❌ Target এ Profit না নেওয়া — Distribution শেষ হয়!

### Advanced Notes

- **Multiple Distribution Wave:** শক্তিশালী Trend একাধিক Accumulation → Manipulation → Distribution Cycle আছে
- **Distribution within Distribution:** HTF Distribution LTF AMD Cycle ধারণ করে (Nested PO3)
- **Failed Distribution:** যদি Price Target এ পৌঁছাতে Fail করে ও Reverse হয় → নতুন Accumulation শুরু
- **Kill Zone Distribution:** Institutional ঘন্টার সময় সবচেয়ে শক্তিশালী Distribution ঘটে
- **Weekend Gap:** Friday Distribution Gap Fill এর পর Monday Continue করতে পারে

### Example

**EUR/USD সম্পূর্ণ Distribution Trade:**

**Phase 1: Accumulation**
- Asian Range: 1.0840-1.0860
- 8 ঘন্টা Consolidation

**Phase 2: Manipulation**
- London Open: 1.0835 এ Drop (SSL Sweep)
- 1.0848 এ দ্রুত Reversal ফিরে

**Phase 3: Distribution**
- **8:30 AM:** 1.0860 এর উপরে BOS (Accumulation High)
- **শক্তিশালী Displacement:** 3 Candle এ 1.0860 → 1.0890
- **FVG তৈরি:** 1.0863-1.0868
- **Retracement:** Price 1.0865 এ ফেরে (FVG + OTE)

**Entry:**
- **BUY:** 1.0865 (FVG এ, OTE Zone)
- **Stop:** 1.0858 (FVG এর নিচে)
- **প্রাথমিক Target:** 1.0910 (1st BSL)
- **Extended Target:** 1.0940 (Major BSL)

**Distribution Continuation:**
- 10:00 AM: 1.0910 Hit (50% Profit নিন)
- 11:30 AM: 1.0898 এ Minor Retracement
- 12:15 PM: 1.0935 এ Continue করে

**ফলাফল:**
- প্রাথমিক: 7 Pip Risk, 45 Pip Reward → 1:6.4 R:R
- Runner: অতিরিক্ত 25 Pip
- মোট: Distribution Phase থেকে 70 Pip

সঠিক Accumulation ও Manipulation Setup এর পর Distribution প্রত্যাশিত মতো Deliver করেছে।
`);

console.log('✅ Topic 29 (Distribution) complete!\n');

console.log('\n✨ Topics 28-29 complete! Creating final topics 30-37...\n');

// Topics 30-37 - SMT Divergence through Complete ICT Model
// Condensed content for efficiency while maintaining quality

writeEN('30-smt-divergence', {title: 'SMT Divergence (Smart Money Technique)', description: 'Master SMT Divergence — when correlated pairs diverge, revealing institutional bias. Learn to use correlation analysis for high-probability directional trades.', order: 30, level: 'advanced'
}, `# SMT Divergence (Smart Money Technique)

### Definition
SMT Divergence occurs when **correlated currency pairs or instruments fail to make equal highs/lows simultaneously**, revealing which asset Smart Money is favoring. When EUR/USD makes a higher high but GBP/USD makes a lower high, this divergence signals institutional bias.

### Why It Matters
- SMT identifies which pair is stronger (where Smart Money is positioned)
- Provides directional bias confirmation
- Highest probability when combined with ICT concepts
- Reveals institutional positioning early

### How It Works
**Bullish SMT:** Correlated pair makes lower low, your pair makes higher low (bullish bias for your pair)
**Bearish SMT:** Correlated pair makes higher high, your pair makes lower high (bearish bias for your pair)

Common Correlations: EUR/USD & GBP/USD, AUD/USD & NZD/USD, ES & NQ, Gold & Silver

### Trading Application
1. Monitor correlated pairs on same timeframe
2. Identify divergence at swing points
3. Trade the STRONGER pair in its favor
4. Use ICT setups (FVG, OB, OTE) for entry

### Example
EUR/USD makes higher high at 1.0950, GBP/USD makes lower high at 1.2640 → Bearish SMT for GBP → SHORT GBP/USD on next FVG
`);

writeBN('30-smt-divergence', {title: 'SMT Divergence (Smart Money Technique)', description: 'SMT Divergence Master করুন — যখন Correlated Pair Diverge করে, Institutional Bias প্রকাশ করে। High-Probability Directional Trade এর জন্য Correlation Analysis ব্যবহার শিখুন।', order: 30, level: 'advanced'
}, `# SMT Divergence (Smart Money Technique)

### Definition
SMT Divergence ঘটে যখন **Correlated Currency Pair বা Instrument একসাথে সমান High/Low তৈরি করতে ব্যর্থ হয়**, প্রকাশ করে Smart Money কোন Asset পক্ষে আছে। যখন EUR/USD Higher High তৈরি করে কিন্তু GBP/USD Lower High তৈরি করে, এই Divergence Institutional Bias Signal করে।

### Why It Matters
- SMT চিহ্নিত করে কোন Pair শক্তিশালী (Smart Money কোথায় Position করেছে)
- Directional Bias Confirmation দেয়
- ICT Concept এর সাথে মিলিত হলে সর্বোচ্চ Probability
- Institutional Positioning তাড়াতাড়ি প্রকাশ করে

### How It Works
**Bullish SMT:** Correlated Pair Lower Low তৈরি করে, আপনার Pair Higher Low তৈরি করে (আপনার Pair এর জন্য Bullish Bias)
**Bearish SMT:** Correlated Pair Higher High তৈরি করে, আপনার Pair Lower High তৈরি করে (আপনার Pair এর জন্য Bearish Bias)

সাধারণ Correlation: EUR/USD ও GBP/USD, AUD/USD ও NZD/USD, ES ও NQ, Gold ও Silver

### Trading Application
1. একই Timeframe এ Correlated Pair Monitor করুন
2. Swing Point এ Divergence চিহ্নিত করুন
3. শক্তিশালী Pair তার পক্ষে Trade করুন
4. Entry জন্য ICT Setup (FVG, OB, OTE) ব্যবহার করুন

### Example
EUR/USD 1.0950 এ Higher High তৈরি করে, GBP/USD 1.2640 এ Lower High তৈরি করে → GBP এর জন্য Bearish SMT → পরবর্তী FVG এ GBP/USD SHORT
`);

writeEN('31-daily-bias', {title: 'Daily Bias', description: 'Master Daily Bias determination — the directional bias for the trading day. Learn to set your compass before taking any trades.', order: 31, level: 'advanced'
}, `# Daily Bias

### Definition
Daily Bias is your **directional expectation for the current trading day** based on HTF market structure, liquidity, and price positioning. It's your "compass" that determines whether you look for LONG or SHORT setups throughout the day.

### Why It Matters
- Trading with daily bias dramatically increases win rate
- Prevents trading against the flow
- Filters setups — only trade in bias direction
- Aligns intraday moves with institutional direction

### How to Determine Daily Bias
1. **Check 4H/Daily structure:** Bullish or bearish?
2. **Previous day analysis:** Did price close strong/weak?
3. **Weekly level:** Are we in premium (sell bias) or discount (buy bias)?
4. **Liquidity:** Which side needs to be targeted today?
5. **News events:** High-impact news may shift bias

**Bullish Daily Bias Criteria:**
- 4H/Daily in bullish structure
- Price in discount array (below equilibrium)
- Previous day strong close
- SSL below swept, BSL above remaining

**Bearish Daily Bias Criteria:**
- 4H/Daily in bearish structure
- Price in premium array (above equilibrium)
- Previous day weak close
- BSL above swept, SSL below remaining

### Trading Application
- **Bullish Bias:** ONLY look for LONG setups (FVG, OB, OTE longs)
- **Bearish Bias:**  ONLY look for SHORT setups (FVG, OB, OTE shorts)
- **Neutral/Uncertain:** Stay flat, wait for clarity

Set bias BEFORE London open. Don't change mid-day unless major structure shift occurs.

### Example
Sunday night analysis: 4H bullish, Daily closed strong Friday, price at 1.0840 (discount), BSL at 1.0920 untouched → **Bullish Daily Bias** → Monday: Only trade LONG setups
`);

writeBN('31-daily-bias', {title: 'Daily Bias', description: 'Daily Bias নির্ধারণ Master করুন — Trading Day এর জন্য Directional Bias। কোনো Trade নেওয়ার আগে আপনার Compass সেট করা শিখুন।', order: 31, level: 'advanced'
}, `# Daily Bias

### Definition
Daily Bias হলো HTF Market Structure, Liquidity, ও Price Positioning এর ভিত্তিতে **বর্তমান Trading Day এর জন্য আপনার Directional Expectation**। এটি আপনার "Compass" যা নির্ধারণ করে আপনি সারাদিন LONG নাকি SHORT Setup দেখবেন।

### Why It Matters
- Daily Bias সহ Trade করলে Win Rate নাটকীয়ভাবে বৃদ্ধি পায়
- Flow এর বিরুদ্ধে Trade করা থেকে রক্ষা করে
- Setup Filter করে — শুধু Bias Direction এ Trade করুন
- Intraday Move Institutional Direction এর সাথে Align করে

### Daily Bias কীভাবে নির্ধারণ করবেন
1. **4H/Daily Structure চেক করুন:** Bullish নাকি Bearish?
2. **আগের দিন বিশ্লেষণ:** Price কি শক্তিশালী/দুর্বল Close করেছে?
3. **Weekly Level:** আমরা কি Premium (Sell Bias) নাকি Discount (Buy Bias) এ আছি?
4. **Liquidity:** আজ কোন দিক Target করা প্রয়োজন?
5. **News Event:** High-Impact News Bias পরিবর্তন করতে পারে

**Bullish Daily Bias মানদণ্ড:**
- 4H/Daily Bullish Structure এ
- Price Discount Array এ (Equilibrium এর নিচে)
- আগের দিন শক্তিশালী Close
- নিচে SSL Sweep, উপরে BSL Remaining

**Bearish Daily Bias মানদণ্ড:**
- 4H/Daily Bearish Structure এ
- Price Premium Array এ (Equilibrium এর উপরে)
- আগের দিন দুর্বল Close
- উপরে BSL Sweep, নিচে SSL Remaining

### Trading Application
- **Bullish Bias:** শুধু LONG Setup দেখুন (FVG, OB, OTE Long)
- **Bearish Bias:** শুধু SHORT Setup দেখুন (FVG, OB, OTE Short)
- **Neutral/Uncertain:** Flat থাকুন, Clarity এর জন্য অপেক্ষা করুন

London Open আগে Bias সেট করুন। Major Structure Shift না ঘটলে মাঝ-দিনে পরিবর্তন করবেন না।

### Example
Sunday রাতের বিশ্লেষণ: 4H Bullish, Friday Daily শক্তিশালী Close, Price 1.0840 এ (Discount), 1.0920 এ BSL অস্পৃষ্ট → **Bullish Daily Bias** → Monday: শুধু LONG Setup Trade করুন
`);

writeEN('32-weekly-bias', {title: 'Weekly Bias', description: 'Master Weekly Bias — the higher timeframe directional bias that guides your daily and intraday trading decisions throughout the week.', order: 32, level: 'advanced'
}, `# Weekly Bias

### Definition
Weekly Bias is your **directional expectation for the current trading week** based on monthly/weekly structure, major liquidity levels, and institutional order flow. It's the HTF compass that filters your daily bias and ensures alignment with the broader trend.

### Why It Matters
- Weekly bias provides the macro direction
- Daily bias should align with weekly bias
- Prevents counter-trend trading
- Identifies which weekly high/low will likely be taken

### Determining Weekly Bias
Set on Sunday evening or Monday pre-market:

1. **Monthly/Weekly Chart:** Structure bullish or bearish?
2. **Previous Week:** Strong or weak close?
3. **Key Levels:** Premium/discount relative to weekly range?
4. **Major Liquidity:** Which weekly high/low needs targeting?
5. **Fundamentals:** Any major events this week?

### Trading Application
- **Bullish Weekly:** Look for bullish daily bias Mon-Fri
- **Bearish Weekly:** Look for bearish daily bias Mon-Fri
- **Weekly High/Low:** Expect one to be swept early week, other targeted later

Weekly bias rarely changes mid-week unless major fundamental shift.

### Example
Sunday: Weekly closed strong, in discount, monthly bullish, previous week high at 1.0980 untouched → **Bullish Weekly Bias** → Seek bullish daily bias all week, target 1.0980+
`);

writeBN('32-weekly-bias', {title: 'Weekly Bias', description: 'Weekly Bias Master করুন — Higher Timeframe Directional Bias যা সপ্তাহ জুড়ে আপনার Daily ও Intraday Trading Decision গাইড করে।', order: 32, level: 'advanced'
}, `# Weekly Bias

### Definition
Weekly Bias হলো Monthly/Weekly Structure, Major Liquidity Level, ও Institutional Order Flow এর ভিত্তিতে **বর্তমান Trading Week এর জন্য আপনার Directional Expectation**। এটি HTF Compass যা আপনার Daily Bias Filter করে এবং বৃহত্তর Trend এর সাথে Alignment নিশ্চিত করে।

### Why It Matters
- Weekly Bias Macro Direction দেয়
- Daily Bias Weekly Bias এর সাথে Align হওয়া উচিত
- Counter-Trend Trading থেকে রক্ষা করে
- চিহ্নিত করে কোন Weekly High/Low সম্ভবত নেওয়া হবে

### Weekly Bias নির্ধারণ
Sunday সন্ধ্যা বা Monday Pre-Market এ সেট করুন:

1. **Monthly/Weekly Chart:** Structure Bullish নাকি Bearish?
2. **আগের সপ্তাহ:** শক্তিশালী নাকি দুর্বল Close?
3. **মূল Level:** Weekly Range এর তুলনায় Premium/Discount?
4. **Major Liquidity:** কোন Weekly High/Low Target করা প্রয়োজন?
5. **Fundamental:** এই সপ্তাহে কোনো Major Event আছে?

### Trading Application
- **Bullish Weekly:** Mon-Fri Bullish Daily Bias দেখুন
- **Bearish Weekly:** Mon-Fri Bearish Daily Bias দেখুন
- **Weekly High/Low:** আশা করুন একটি সপ্তাহের প্রথম দিকে Sweep হবে, অন্যটি পরে Target হবে

Major Fundamental Shift না ঘটলে Weekly Bias খুব কমই মাঝ-সপ্তাহে পরিবর্তিত হয়।

### Example
Sunday: Weekly শক্তিশালী Close, Discount এ, Monthly Bullish, আগের সপ্তাহের High 1.0980 এ অস্পৃষ্ট → **Bullish Weekly Bias** → সারা সপ্তাহ Bullish Daily Bias খুঁজুন, 1.0980+ Target করুন
`);

writeEN('33-monthly-bias', {title: 'Monthly Bias', description: 'Master Monthly Bias — the highest timeframe directional bias. Learn to align with institutional positioning for maximum edge.', order: 33, level: 'advanced'
}, `# Monthly Bias

### Definition
Monthly Bias is your **directional expectation for the current month** based on quarterly/monthly market structure and major institutional positioning. This is the highest timeframe bias that cascades down to weekly and daily analysis.

### Why It Matters
- Monthly bias represents institutional positioning
- Provides the "big picture" direction
- All lower timeframe analysis should respect monthly bias
- Highest probability trades align with monthly direction

### Determining Monthly Bias
Set on last Sunday of previous month:

1. **Quarterly/Monthly Structure:** Clear trend direction?
2. **Previous Month:** Closed strong or weak?
3. **Major S/R Levels:** Where is price relative to key monthly levels?
4. **Fundamental Outlook:** Central bank policy, economic outlook
5. **Seasonal Tendencies:** Any historical seasonal bias?

### Trading Application
- Monthly bias filters weekly bias
- Don't fight monthly bias with lower timeframe trades
- Position trading aligns with monthly bias
- Monthly bias can persist for 1-3 months

### Example
End of May: Monthly closed strong, above key resistance, Fed dovish → **Bullish Monthly Bias for June** → Seek bullish weekly/daily setups throughout June
`);

writeBN('33-monthly-bias', {title: 'Monthly Bias', description: 'Monthly Bias Master করুন — সর্বোচ্চ Timeframe Directional Bias। সর্বোচ্চ Edge এর জন্য Institutional Positioning এর সাথে Align করা শিখুন।', order: 33, level: 'advanced'
}, `# Monthly Bias

### Definition
Monthly Bias হলো Quarterly/Monthly Market Structure ও Major Institutional Positioning এর ভিত্তিতে **বর্তমান মাসের জন্য আপনার Directional Expectation**। এটি সর্বোচ্চ Timeframe Bias যা Weekly ও Daily বিশ্লেষণে Cascade Down করে।

### Why It Matters
- Monthly Bias Institutional Positioning প্রতিনিধিত্ব করে
- "Big Picture" Direction দেয়
- সমস্ত নিম্ন Timeframe বিশ্লেষণ Monthly Bias সম্মান করা উচিত
- সর্বোচ্চ Probability Trade Monthly Direction এর সাথে Align করে

### Monthly Bias নির্ধারণ
আগের মাসের শেষ Sunday এ সেট করুন:

1. **Quarterly/Monthly Structure:** স্পষ্ট Trend Direction?
2. **আগের মাস:** শক্তিশালী নাকি দুর্বল Close?
3. **Major S/R Level:** মূল Monthly Level এর তুলনায় Price কোথায়?
4. **Fundamental Outlook:** Central Bank Policy, Economic Outlook
5. **Seasonal Tendency:** কোনো ঐতিহাসিক Seasonal Bias আছে?

### Trading Application
- Monthly Bias Weekly Bias Filter করে
- নিম্ন Timeframe Trade দিয়ে Monthly Bias এর বিরুদ্ধে লড়াই করবেন না
- Position Trading Monthly Bias এর সাথে Align করে
- Monthly Bias 1-3 মাস টিকে থাকতে পারে

### Example
মে এর শেষ: Monthly শক্তিশালী Close, মূল Resistance এর উপরে, Fed Dovish → **June এর জন্য Bullish Monthly Bias** → জুন জুড়ে Bullish Weekly/Daily Setup খুঁজুন
`);

writeEN('34-multi-timeframe-analysis', {title: 'Multi Timeframe Analysis (MTF)', description: 'Master Multi Timeframe Analysis — aligning monthly, weekly, daily, and intraday bias for maximum probability trades.', order: 34, level: 'advanced'
}, `# Multi Timeframe Analysis (MTF)

### Definition
Multi Timeframe Analysis is the **systematic process of analyzing market structure, liquidity, and bias across multiple timeframes** to ensure alignment from monthly down to intraday charts, producing the highest probability trade setups.

### The MTF Framework

**Top-Down Analysis:**
1. **Monthly (HTF):** Determine monthly bias and key levels
2. **Weekly (HTF):** Identify weekly bias within monthly context
3. **Daily (MTF):** Set daily bias aligned with weekly
4. **4H (MTF):** Confirm intraday direction
5. **1H-15M (LTF):** Find precise entry setups (FVG, OB, OTE)
6. **5M-1M (Execution):** Entry timing and management

### Why MTF Matters
- Alignment across timeframes = Highest win rate
- Prevents fighting the trend
- HTF provides direction, LTF provides entry
- Professional traders ALWAYS use MTF analysis

### MTF Trading Rules
1. **Never trade against HTF bias**
2. **HTF structure > LTF patterns**
3. **Entry on LTF, targets from HTF**
4. **Check alignment before EVERY trade**

### Complete MTF Setup Example
- **Monthly:** Bullish structure
- **Weekly:** Bullish, targeting weekly high at 1.1000
- **Daily:** Bullish bias, in discount
- **4H:** Bullish BOS confirmed
- **1H:** Retraced to OTE + FVG at 1.0865
- **15M:** Bullish engulfing in FVG
- **ENTRY:** BUY 1.0865, Stop 1.0858, Target 1.0950

Perfect alignment = High probability trade.
`);

writeBN('34-multi-timeframe-analysis', {title: 'Multi Timeframe Analysis (MTF)', description: 'Multi Timeframe Analysis Master করুন — সর্বোচ্চ Probability Trade এর জন্য Monthly, Weekly, Daily, ও Intraday Bias Align করা।', order: 34, level: 'advanced'
}, `# Multi Timeframe Analysis (MTF)

### Definition
Multi Timeframe Analysis হলো **একাধিক Timeframe জুড়ে Market Structure, Liquidity, ও Bias পদ্ধতিগতভাবে বিশ্লেষণ করার প্রক্রিয়া** যাতে Monthly থেকে Intraday Chart পর্যন্ত Alignment নিশ্চিত করা যায়, সর্বোচ্চ Probability Trade Setup তৈরি করে।

### MTF Framework

**Top-Down বিশ্লেষণ:**
1. **Monthly (HTF):** Monthly Bias ও মূল Level নির্ধারণ করুন
2. **Weekly (HTF):** Monthly Context এর মধ্যে Weekly Bias চিহ্নিত করুন
3. **Daily (MTF):** Weekly এর সাথে Aligned Daily Bias সেট করুন
4. **4H (MTF):** Intraday Direction Confirm করুন
5. **1H-15M (LTF):** সুনির্দিষ্ট Entry Setup খুঁজুন (FVG, OB, OTE)
6. **5M-1M (Execution):** Entry Timing ও Management

### MTF কেন গুরুত্বপূর্ণ
- Timeframe জুড়ে Alignment = সর্বোচ্চ Win Rate
- Trend এর বিরুদ্ধে লড়াই থেকে রক্ষা করে
- HTF Direction দেয়, LTF Entry দেয়
- Professional Trader সবসময় MTF বিশ্লেষণ ব্যবহার করে

### MTF Trading নিয়ম
1. **কখনো HTF Bias এর বিরুদ্ধে Trade করবেন না**
2. **HTF Structure > LTF Pattern**
3. **LTF এ Entry, HTF থেকে Target**
4. **প্রতিটি Trade আগে Alignment চেক করুন**

### সম্পূর্ণ MTF Setup উদাহরণ
- **Monthly:** Bullish Structure
- **Weekly:** Bullish, 1.1000 এ Weekly High Target করছে
- **Daily:** Bullish Bias, Discount এ
- **4H:** Bullish BOS Confirm
- **1H:** 1.0865 এ OTE + FVG এ Retrace
- **15M:** FVG এ Bullish Engulfing
- **ENTRY:** 1.0865 এ BUY, Stop 1.0858, Target 1.0950

নিখুঁত Alignment = উচ্চ Probability Trade।
`);

writeEN('35-risk-management', {title: 'ICT Risk Management', description: 'Master institutional risk management — position sizing, stop placement, and capital preservation. Learn to protect your account like Smart Money.', order: 35, level: 'advanced'
}, `# ICT Risk Management

### Definition
ICT Risk Management is the **systematic approach to position sizing, stop loss placement, and capital allocation** that ensures long-term profitability while protecting against catastrophic losses. Smart Money doesn't risk account on single trades.

### Core Principles

**1. Fixed Percentage Risk**
- Risk 1-2% of account per trade (maximum)
- Professional traders: 0.5-1%
- Aggressive: 2% (not recommended for beginners)
- NEVER risk more than 5% even on "perfect" setups

**2. ICT Stop Loss Placement**
- **FVG Trades:** 1-5 pips below/above FVG
- **OB Trades:** Below/above Order Block
- **OTE Trades:** Beyond 79% retracement
- **Liquidity Sweep:** Beyond manipulation extreme
- ALWAYS use hard stops, never mental stops

**3. Position Sizing Formula**
\`\`\`
Position Size = (Account Risk $) / (Stop Loss in pips × Pip Value)

Example:
$10,000 account, 1% risk ($100), 10 pip stop, $1/pip
= $100 / (10 × $1) = 1.0 lots
\`\`\`

### Risk-Reward Requirements
- Minimum 1:3 RR for all trades
- Ideal 1:5+ RR
- Never take trades below 1:2 RR
- ICT setups regularly provide 1:5 to 1:10 RR

### Trade Management
**Scaling Out:**
- 50% profit at 1:2 RR
- 25% at 1:3 RR
- 25% runner to final target
- Move stop to break even after 1:2

**Trailing Stops:**
- Trail below swing lows (longs) after 1:3 achieved
- Trail above swing highs (shorts) after 1:3 achieved

### Daily/Weekly Limits
- Max daily loss: 2-3% of account
- If hit, STOP trading for the day
- Max weekly loss: 5-6% of account
- Prevents revenge trading and drawdown spirals

### Example
$10,000 account:
- Risk per trade: $100 (1%)
- EUR/USD trade: Entry 1.0865, Stop 1.0858 (7 pips), Target 1.0920 (55 pips)
- RR: 1:7.85
- Position size: $100 / (7 × $1) = 1.43 lots
- Potential profit: $550
- Max loss: $100

This is professional risk management.
`);

writeBN('35-risk-management', {title: 'ICT Risk Management', description: 'Institutional Risk Management Master করুন — Position Sizing, Stop Placement, ও Capital Preservation। Smart Money এর মতো আপনার Account রক্ষা করা শিখুন।', order: 35, level: 'advanced'
}, `# ICT Risk Management

### Definition
ICT Risk Management হলো **Position Sizing, Stop Loss Placement, ও Capital Allocation এর পদ্ধতিগত পদ্ধতি** যা দীর্ঘমেয়াদী Profitability নিশ্চিত করে যখন Catastrophic Loss থেকে রক্ষা করে। Smart Money একক Trade এ Account Risk করে না।

### মূল নীতি

**1. নির্দিষ্ট শতাংশ Risk**
- Trade প্রতি Account এর 1-2% Risk করুন (সর্বোচ্চ)
- Professional Trader: 0.5-1%
- Aggressive: 2% (Beginner দের জন্য সুপারিশ করা হয় না)
- "Perfect" Setup এও কখনো 5% এর বেশি Risk করবেন না

**2. ICT Stop Loss Placement**
- **FVG Trade:** FVG এর নিচে/উপরে 1-5 Pip
- **OB Trade:** Order Block এর নিচে/উপরে
- **OTE Trade:** 79% Retracement এর বাইরে
- **Liquidity Sweep:** Manipulation Extreme এর বাইরে
- সবসময় Hard Stop ব্যবহার করুন, Mental Stop কখনো নয়

**3. Position Sizing সূত্র**
\`\`\`
Position Size = (Account Risk $) / (Stop Loss Pip এ × Pip Value)

উদাহরণ:
$10,000 Account, 1% Risk ($100), 10 Pip Stop, $1/Pip
= $100 / (10 × $1) = 1.0 Lot
\`\`\`

### Risk-Reward প্রয়োজনীয়তা
- সমস্ত Trade এর জন্য সর্বনিম্ন 1:3 RR
- আদর্শ 1:5+ RR
- 1:2 RR এর নিচে কখনো Trade নেবেন না
- ICT Setup নিয়মিত 1:5 থেকে 1:10 RR দেয়

### Trade Management
**Scaling Out:**
- 1:2 RR এ 50% Profit
- 1:3 RR এ 25%
- চূড়ান্ত Target এ 25% Runner
- 1:2 এর পর Stop Break Even এ Move করুন

**Trailing Stop:**
- 1:3 অর্জনের পর Swing Low এর নিচে Trail করুন (Long)
- 1:3 অর্জনের পর Swing High এর উপরে Trail করুন (Short)

### Daily/Weekly সীমা
- সর্বোচ্চ Daily Loss: Account এর 2-3%
- Hit হলে, দিনের জন্য Trade বন্ধ করুন
- সর্বোচ্চ Weekly Loss: Account এর 5-6%
- Revenge Trading ও Drawdown Spiral প্রতিরোধ করে

### Example
$10,000 Account:
- Trade প্রতি Risk: $100 (1%)
- EUR/USD Trade: Entry 1.0865, Stop 1.0858 (7 Pip), Target 1.0920 (55 Pip)
- RR: 1:7.85
- Position Size: $100 / (7 × $1) = 1.43 Lot
- সম্ভাব্য Profit: $550
- সর্বোচ্চ Loss: $100

এটি Professional Risk Management।
`);

writeEN('36-trade-management', {title: 'ICT Trade Management', description: 'Master trade management — scaling out, trailing stops, and maximizing winning trades while protecting profits.', order: 36, level: 'advanced'
}, `# ICT Trade Management

### Definition
Trade Management is the **process of handling open positions from entry to exit**, including scaling out, trailing stops, extending targets, and protecting profits. This is where good traders become great traders — proper management can turn 1:3 trades into 1:10 trades.

### Entry Management
**Partial Entries:**
- Enter 50% position at first retracement
- Add 50% if price re-traces deeper into OTE/FVG
- Allows better average entry price

**Confirmation Entries:**
- Wait for LTF confirmation (5M/1M bullish structure)
- Reduces stopped-out trades
- Slightly worse entry but higher win rate

### Exit Management

**Method 1: Full Scale Out (Conservative)**
- 25% at 1:2 RR → Move stop to BE
- 25% at 1:3 RR → Trail stop
- 25% at 1:5 RR → Trail stop tighter
- 25% runner to final target or trailing stop

**Method 2: Runner Focus (Aggressive)**
- 50% at 1:3 RR → Move stop to BE
- 50% runner with wide trailing stop
- Let winners run to major targets

**Method 3: ICT Laddering:**
- 33% at first target (BSL/SSL from setup)
- 33% at extended target (next major liquidity)
- 33% at extension (1.618, 2.0 Fib extension)

### Trailing Stop Techniques
1. **Swing Structure:** Trail below each higher low (longs)
2. **FVG Trail:** Trail to most recent opposing FVG
3. **Time-Based:** At NY close, tighten stop significantly
4. **Profit Protection:** Once 1:5 achieved, don't let trade go negative

### When to Exit Early
- HTF structure breaks against you
- Major news against your position
- Target approached but can't break through (3 attempts)
- Session close approaching and profit secured

### Common Management Mistakes
- Taking full profit too early (missing runners)
- Not moving stop to BE soon enough
- Letting winning trades become losers
- Over-managing (closing trades on normal retracement)

### Example Management
EUR/USD Long at 1.0865, Stop 1.0858 (7 pips), Initial Target 1.0920 (55 pips), Extended 1.0950 (85 pips)

- **Entry:** Full position at 1.0865
- **+1:2 (14 pips):** Price hits 1.0879 → Take 50% profit, move stop to 1.0865 (BE)
- **+1:3 (21 pips):** Price hits 1.0886 → Take 25% more, trail stop to 1.0875
- **Target:** Price hits 1.0920 → Take remaining 25%, or...
- **Runner:** Let final 25% run to 1.0950 with trailing stop

Result: Guaranteed profit, maximized upside.
`);

writeBN('36-trade-management', {title: 'ICT Trade Management', description: 'Trade Management Master করুন — Scaling Out, Trailing Stop, এবং Profit রক্ষা করার সময় Winning Trade সর্বাধিক করা।', order: 36, level: 'advanced'
}, `# ICT Trade Management

### Definition
Trade Management হলো **Entry থেকে Exit পর্যন্ত Open Position Handle করার প্রক্রিয়া**, Scaling Out, Trailing Stop, Target Extending, ও Profit রক্ষা সহ। এখানেই ভালো Trader মহান Trader হয়ে যায় — সঠিক Management 1:3 Trade কে 1:10 Trade এ পরিণত করতে পারে।

### Entry Management
**Partial Entry:**
- প্রথম Retracement এ 50% Position Enter করুন
- Price OTE/FVG এ আরও গভীরে Re-Trace করলে 50% Add করুন
- ভালো গড় Entry Price দেয়

**Confirmation Entry:**
- LTF Confirmation এর জন্য অপেক্ষা করুন (5M/1M Bullish Structure)
- Stopped-Out Trade হ্রাস করে
- সামান্য খারাপ Entry কিন্তু উচ্চ Win Rate

### Exit Management

**পদ্ধতি 1: Full Scale Out (Conservative)**
- 1:2 RR এ 25% → Stop BE তে Move
- 1:3 RR এ 25% → Stop Trail করুন
- 1:5 RR এ 25% → Stop আরও Tight Trail
- চূড়ান্ত Target বা Trailing Stop এ 25% Runner

**পদ্ধতি 2: Runner Focus (Aggressive)**
- 1:3 RR এ 50% → Stop BE তে Move
- প্রশস্ত Trailing Stop সহ 50% Runner
- Major Target এ Winner Run করতে দিন

**পদ্ধতি 3: ICT Laddering:**
- প্রথম Target এ 33% (Setup থেকে BSL/SSL)
- Extended Target এ 33% (পরবর্তী Major Liquidity)
- Extension এ 33% (1.618, 2.0 Fib Extension)

### Trailing Stop কৌশল
1. **Swing Structure:** প্রতিটি Higher Low এর নিচে Trail (Long)
2. **FVG Trail:** সাম্প্রতিক বিপরীত FVG এ Trail
3. **Time-Based:** NY Close এ, Stop উল্লেখযোগ্যভাবে Tighten করুন
4. **Profit Protection:** 1:5 অর্জিত হলে, Trade Negative যেতে দেবেন না

### কখন তাড়াতাড়ি Exit করবেন
- HTF Structure আপনার বিরুদ্ধে Break করে
- আপনার Position এর বিরুদ্ধে Major News
- Target এর কাছে কিন্তু Break Through করতে পারছে না (3 প্রচেষ্টা)
- Session Close আসছে এবং Profit সুরক্ষিত

### সাধারণ Management ভুল
- পুরো Profit খুব তাড়াতাড়ি নেওয়া (Runner মিস করা)
- যথেষ্ট শীঘ্রই Stop BE তে Move না করা
- Winning Trade Loser হতে দেওয়া
- Over-Manage (স্বাভাবিক Retracement এ Trade Close করা)

### Example Management
1.0865 এ EUR/USD Long, Stop 1.0858 (7 Pip), প্রাথমিক Target 1.0920 (55 Pip), Extended 1.0950 (85 Pip)

- **Entry:** 1.0865 এ সম্পূর্ণ Position
- **+1:2 (14 Pip):** Price 1.0879 Hit → 50% Profit নিন, Stop 1.0865 এ (BE) Move
- **+1:3 (21 Pip):** Price 1.0886 Hit → আরও 25% নিন, Stop 1.0875 এ Trail
- **Target:** Price 1.0920 Hit → বাকি 25% নিন, অথবা...
- **Runner:** Trailing Stop সহ চূড়ান্ত 25% 1.0950 এ Run করতে দিন

ফলাফল: নিশ্চিত Profit, সর্বোচ্চ Upside।
`);

writeEN('37-complete-ict-model', {title: 'Complete ICT Trading Model', description: 'The complete ICT trading system — integrating all concepts into a professional trading framework. Your complete blueprint for consistent profitability.', order: 37, level: 'advanced'
}, `# Complete ICT Trading Model

### Definition
The Complete ICT Trading Model is the **comprehensive integration of all ICT concepts** into a systematic, repeatable trading framework that professional traders use to achieve consistent profitability. This is the culmination of everything you've learned — from market structure to trade management.

### The Complete Framework

**Phase 1: HTF Analysis (Sunday Evening)**
1. Monthly Bias determination
2. Weekly Bias assessment
3. Key liquidity levels identified (monthly/weekly BSL/SSL)
4. Major news events noted for the week

**Phase 2: Daily Preparation (Before London)**
1. Daily Bias set (aligned with weekly)
2. Previous day high/low marked
3. Asian range identified (accumulation)
4. Liquidity pools marked (equal highs/lows)
5. Key premium/discount levels identified

**Phase 3: Session Trading (London/NY)**
1. **Accumulation:** Asian range = setup phase
2. **Manipulation:** London/NY open liquidity sweep (Judas Swing)
3. **Distribution:** True move begins

**Phase 4: Entry Execution (Kill Zones)**
1. Wait for manipulation (false breakout)
2. Confirm reversal (BOS/CHOCH)
3. Identify entry zone (FVG, OB, OTE)
4. Enter on retracement with confirmation
5. Set stop beyond entry zone
6. Set initial target at opposing liquidity

**Phase 5: Trade Management**
1. Move stop to BE at 1:2 RR
2. Scale out 50% at 1:3 RR
3. Trail stop on remaining position
4. Target major liquidity levels
5. Close all positions before major news or session end

### Complete Setup Checklist

**Before Entry:**
- ✅ Monthly bias determined
- ✅ Weekly bias aligned
- ✅ Daily bias set
- ✅ Accumulation range identified
- ✅ Manipulation occurred
- ✅ BOS/CHOCH confirmed
- ✅ FVG or OB present
- ✅ Entry during Kill Zone
- ✅ RR minimum 1:3
- ✅ Risk 1% or less

**If ALL boxes checked = Take the trade**
**If ANY box missing = Wait for better setup**

### Advanced Integration

**Confluence Stacking:**
The MORE concepts that align, the HIGHER the probability:

**5-Star Setup (Highest Probability):**
1. HTF bias aligned (Monthly→Weekly→Daily)
2. Manipulation confirmed (Judas Swing)
3. FVG + Order Block overlap
4. Entry at OTE (62-79%)
5. During Kill Zone timing
6. SMT Divergence confirms direction
7. Major liquidity target clear

When you get 5+ confluences = Max position size (still only 1-2% risk)

### The Professional Trading Day

**Pre-Market (6-8 AM London):**
- Review HTF bias
- Set daily bias
- Mark Asian range and liquidity
- Set alerts for manipulation zones

**London Session (8 AM-12 PM):**
- **8:00-8:30:** Watch for Judas Swing
- **8:30-10:00:** Primary entry window
- **10:00-12:00:** Manage trades, look for continuationentries

**NY Session (1:30-5 PM London / 8:30 AM-12 PM NY):**
- **8:30-10:00 NY:** Second manipulation opportunity
- **10:00-11:00 NY:** Silver Bullet (premium setups)
- **3:00-4:00 PM London:** Final continuation trades

**Post-Session:**
- Journal trades
- Review what worked/didn't work
- Update bias if structure shifted
- Prepare for tomorrow

### Success Metrics

**Professional Trader Stats:**
- Win Rate: 60-70% (with ICT)
- Average RR: 1:4 to 1:6
- Monthly Return: 5-10% (consistent)
- Max Drawdown: < 10%
- Trades per week: 5-10 (quality > quantity)

### Final Notes

ICT trading is NOT about:
- ❌ Trading every day
- ❌ Scalping for small profits
- ❌ Using lagging indicators
- ❌ Guessing direction

ICT trading IS about:
- ✅ Waiting for optimal setups
- ✅ Following institutional footprints
- ✅ Trading with the algorithm
- ✅ Precision entries with wide targets
- ✅ Professional risk and trade management

You now have the complete ICT trading system. The concepts work. The model works. Your job is to:

1. **Practice** on demo until consistent
2. **Journal** every setup (taken and missed)
3. **Review** your trades weekly
4. **Be patient** — quality setups come daily
5. **Trust the process** — the edge is real

Welcome to institutional trading. Trade like Smart Money.
`);

writeBN('37-complete-ict-model', {title: 'Complete ICT Trading Model', description: 'সম্পূর্ণ ICT Trading System — সমস্ত Concept Professional Trading Framework এ একীভূত করা। ধারাবাহিক Profitability এর জন্য আপনার সম্পূর্ণ Blueprint।', order: 37, level: 'advanced'
}, `# Complete ICT Trading Model

### Definition
Complete ICT Trading Model হলো **সমস্ত ICT Concept এর ব্যাপক একীকরণ** একটি পদ্ধতিগত, পুনরাবৃত্তিযোগ্য Trading Framework এ যা Professional Trader ধারাবাহিক Profitability অর্জনের জন্য ব্যবহার করে। এটি আপনার শেখা সবকিছুর চূড়ান্ত পরিণতি — Market Structure থেকে Trade Management পর্যন্ত।

### সম্পূর্ণ Framework

**Phase 1: HTF বিশ্লেষণ (Sunday সন্ধ্যা)**
1. Monthly Bias নির্ধারণ
2. Weekly Bias মূল্যায়ন
3. মূল Liquidity Level চিহ্নিত (Monthly/Weekly BSL/SSL)
4. সপ্তাহের জন্য Major News Event নোট

**Phase 2: Daily প্রস্তুতি (London আগে)**
1. Daily Bias সেট (Weekly এর সাথে Aligned)
2. আগের দিনের High/Low Mark
3. Asian Range চিহ্নিত (Accumulation)
4. Liquidity Pool Mark (Equal High/Low)
5. মূল Premium/Discount Level চিহ্নিত

**Phase 3: Session Trading (London/NY)**
1. **Accumulation:** Asian Range = Setup Phase
2. **Manipulation:** London/NY Open Liquidity Sweep (Judas Swing)
3. **Distribution:** True Move শুরু

**Phase 4: Entry Execution (Kill Zone)**
1. Manipulation এর জন্য অপেক্ষা করুন (False Breakout)
2. Reversal Confirm করুন (BOS/CHOCH)
3. Entry Zone চিহ্নিত করুন (FVG, OB, OTE)
4. Confirmation সহ Retracement এ Enter করুন
5. Entry Zone এর বাইরে Stop সেট করুন
6. বিপরীত Liquidity এ প্রাথমিক Target সেট করুন

**Phase 5: Trade Management**
1. 1:2 RR এ Stop BE তে Move
2. 1:3 RR এ 50% Scale Out
3. বাকি Position এ Stop Trail করুন
4. Major Liquidity Level Target করুন
5. Major News বা Session End আগে সমস্ত Position Close করুন

### সম্পূর্ণ Setup Checklist

**Entry আগে:**
- ✅ Monthly Bias নির্ধারিত
- ✅ Weekly Bias Aligned
- ✅ Daily Bias সেট
- ✅ Accumulation Range চিহ্নিত
- ✅ Manipulation ঘটেছে
- ✅ BOS/CHOCH Confirm
- ✅ FVG বা OB উপস্থিত
- ✅ Kill Zone এ Entry
- ✅ সর্বনিম্ন RR 1:3
- ✅ 1% বা কম Risk

**সমস্ত Box Check থাকলে = Trade নিন**
**কোনো Box অনুপস্থিত থাকলে = ভালো Setup এর জন্য অপেক্ষা করুন**

### Advanced Integration

**Confluence Stacking:**
যত বেশি Concept Align করে, তত বেশি Probability:

**5-Star Setup (সর্বোচ্চ Probability):**
1. HTF Bias Aligned (Monthly→Weekly→Daily)
2. Manipulation Confirm (Judas Swing)
3. FVG + Order Block Overlap
4. OTE এ Entry (62-79%)
5. Kill Zone Timing এর সময়
6. SMT Divergence Direction Confirm করে
7. Major Liquidity Target স্পষ্ট

যখন আপনি 5+ Confluence পান = সর্বোচ্চ Position Size (এখনও শুধু 1-2% Risk)

### Professional Trading Day

**Pre-Market (6-8 AM London):**
- HTF Bias Review করুন
- Daily Bias সেট করুন
- Asian Range ও Liquidity Mark করুন
- Manipulation Zone এর জন্য Alert সেট করুন

**London Session (8 AM-12 PM):**
- **8:00-8:30:** Judas Swing দেখুন
- **8:30-10:00:** প্রাথমিক Entry Window
- **10:00-12:00:** Trade Manage করুন, Continuation Entry দেখুন

**NY Session (1:30-5 PM London / 8:30 AM-12 PM NY):**
- **8:30-10:00 NY:** দ্বিতীয় Manipulation সুযোগ
- **10:00-11:00 NY:** Silver Bullet (Premium Setup)
- **3:00-4:00 PM London:** চূড়ান্ত Continuation Trade

**Post-Session:**
- Trade Journal করুন
- কী কাজ করেছে/করেনি Review করুন
- Structure Shift হলে Bias Update করুন
- আগামীকালের জন্য প্রস্তুত করুন

### সাফল্যের মেট্রিক্স

**Professional Trader Stats:**
- Win Rate: 60-70% (ICT সহ)
- গড় RR: 1:4 থেকে 1:6
- মাসিক Return: 5-10% (ধারাবাহিক)
- সর্বোচ্চ Drawdown: < 10%
- সপ্তাহে Trade: 5-10 (Quality > Quantity)

### চূড়ান্ত নোট

ICT Trading কী নয়:
- ❌ প্রতিদিন Trade করা
- ❌ ছোট Profit এর জন্য Scalping
- ❌ Lagging Indicator ব্যবহার
- ❌ Direction Guess করা

ICT Trading কী:
- ✅ Optimal Setup এর জন্য অপেক্ষা করা
- ✅ Institutional Footprint অনুসরণ
- ✅ Algorithm এর সাথে Trade করা
- ✅ প্রশস্ত Target সহ Precision Entry
- ✅ Professional Risk ও Trade Management

আপনার এখন সম্পূর্ণ ICT Trading System আছে। Concept কাজ করে। Model কাজ করে। আপনার কাজ:

1. **Practice** Demo এ ধারাবাহিক না হওয়া পর্যন্ত
2. **Journal** প্রতিটি Setup (নেওয়া ও মিস করা)
3. **Review** সাপ্তাহিক আপনার Trade
4. **ধৈর্য ধরুন** — Quality Setup প্রতিদিন আসে
5. **Process বিশ্বাস করুন** — Edge সত্যিকারের

Institutional Trading এ স্বাগতম। Smart Money এর মতো Trade করুন।
`);

console.log('✅ Topic 30 (SMT Divergence) complete!');
console.log('✅ Topic 31 (Daily Bias) complete!');
console.log('✅ Topic 32 (Weekly Bias) complete!');
console.log('✅ Topic 33 (Monthly Bias) complete!');
console.log('✅ Topic 34 (Multi Timeframe Analysis) complete!');
console.log('✅ Topic 35 (Risk Management) complete!');
console.log('✅ Topic 36 (Trade Management) complete!');
console.log('✅ Topic 37 (Complete ICT Model) complete!');

console.log('\n🎉🎉🎉 ALL TOPICS 30-37 COMPLETE! 🎉🎉🎉\n');
console.log('📚 Full ICT/SMC Course (Topics 20-37) Generated Successfully!\n');
console.log('📝 Next: Create _meta.json files and update Bangla academy meta.\n');




