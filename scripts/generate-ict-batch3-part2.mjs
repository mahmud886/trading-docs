import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const C = join(process.cwd(), 'content');

// Ensure directories exist
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

// ============ TOPIC 24: Judas Swing ============
writeEN('24-judas-swing', {
  title: 'Judas Swing',
  description: 'Master the Judas Swing — the betrayal move that traps early traders before the true market direction. Learn to identify and trade this manipulation phase.',
  order: 24,
  level: 'advanced'
}, `# Judas Swing

### Definition

A Judas Swing is a **false breakout that traps early traders before price reverses in the true direction**. Named after Judas who betrayed, this move "betrays" retail traders who enter on what appears to be a valid breakout. It's the MANIPULATION phase of the Market Maker Model — a deliberate stop hunt that creates the liquidity needed for the real institutional move.

- **Bullish Judas Swing:** False move DOWN that sweeps SSL, then reverses UP (the true direction)
- **Bearish Judas Swing:** False move UP that sweeps BSL, then reverses DOWN (the true direction)

**Key Characteristics:**
- Occurs during the open of a major session (especially London)
- Brief duration (15-60 minutes)
- Quick reversal back into prior range
- Creates liquidity for the real move

### Why It Matters

- Judas Swings explain why "opening range breakouts fail" consistently
- They show you WHEN NOT to enter (during the false move)
- They provide HIGH PROBABILITY entries (after the false move reverses)
- Understanding Judas prevents you from being the trapped trader
- Judas Swings occur almost DAILY — a repeatable pattern

### How It Works

**Bullish Judas Swing Process:**
1. **Setup:** Price consolidates (accumulation) before London/NY open
2. **False Move:** Session opens → Price breaks DOWN below range low
3. **Liquidity Sweep:** SSL below the range gets taken out
4. **Reversal:** Price quickly reverses back INTO the range
5. **True Move:** Price breaks UP in the TRUE bullish direction
6. **Distribution:** Price runs to BSL target above

**Bearish Judas Swing Process:**
1. **Setup:** Price consolidates before major session open
2. **False Move:** Session opens → Price breaks UP above range high
3. **Liquidity Sweep:** BSL above the range gets taken out
4. **Reversal:** Price quickly reverses back INTO the range
5. **True Move:** Price breaks DOWN in the TRUE bearish direction
6. **Distribution:** Price runs to SSL target below

**Judas Swing Timing:**
| Session | Typical Judas Time | Duration |
|---------|-------------------|----------|
| London Open | 8:00-8:30 AM London | 15-30 min |
| NY Open | 9:30-10:00 AM NY | 15-45 min |
| Asian Close | 7:00-7:30 AM London | 15-30 min |

### Institutional Logic

**Why Judas Swings occur:**
- Institutions need liquidity for their large orders
- SSL/BSL resting at range extremes = Available liquidity
- The false breakout triggers these stop losses
- Stopped-out traders become the liquidity for Smart Money entries
- This creates optimal fills for the real institutional move

**The Betrayal:**
- Retail trader sees consolidation → Waits for breakout
- Breakout occurs → Retail enters (long or short)
- Retail's stop loss = Smart Money's entry
- Price reverses → Retail gets stopped out
- Smart Money distributes in the opposite direction

### Trading Application

**Identifying Potential Judas Setup:**
1. **Pre-Session:** Identify clear consolidation range (especially Asian range)
2. **Mark Liquidity:** Note equal highs (BSL) and equal lows (SSL)
3. **Session Open:** Watch for immediate breakout in either direction
4. **Assess:** Is the breakout:
   - Weak (small candle bodies, large wicks)?
   - Quick (happens in first 15-30 min)?
   - Rejecting fast (wick back into range)?
   → If YES = Likely Judas Swing

**Trading the Judas:**

**Method 1: Reversal Entry (Aggressive)**
1. Wait for false breakout to occur
2. Watch for reversal candle (engulfing, pin bar) back into range
3. Enter immediately on reversal confirmation
4. Stop Loss: Beyond the Judas swing extreme
5. Target: Opposite side of range (minimum)

**Method 2: Retracement Entry (Conservative)**
1. Wait for false breakout AND reversal
2. Wait for price to break structure in the true direction (BOS)
3. Wait for retracement to FVG/OB/OTE from the Judas move
4. Enter on retracement with confirmation
5. Stop Loss: Below/above the retracement zone
6. Target: Liquidity on the opposite side

**Judas Swing Confirmation:**
- ✅ Occurs at major session open
- ✅ Sweeps obvious liquidity (equal highs/lows)
- ✅ Quick rejection (wick) back into range
- ✅ Creates FVG during the reversal
- ✅ Opposite direction aligns with HTF bias

### Common Mistakes

- ❌ Trading the initial breakout — THIS IS THE TRAP
- ❌ Entering the reversal too early (before confirmation)
- ❌ Not waiting for the Judas to fully develop
- ❌ Trading every session open as Judas — Not all opens have Judas Swings
- ❌ Ignoring HTF context — Judas should lead into HTF trend direction

### Advanced Notes

- **Double Judas:** Sometimes price creates a Judas in BOTH directions before the real move (rare but happens in high volatility)
- **Failed Judas:** If the "false" breakout continues without reversal → It wasn't a Judas, it was the real move
- **Judas + Silver Bullet:** The reversal from Judas often occurs during a Kill Zone (10:00-11:00 AM NY = Silver Bullet)
- **Judas Timeframes:** Works on all timeframes, but most reliable on 5M-15M charts during session opens
- **HTF Judas:** Daily Judas Swings (first hour of the day fakes one direction) are extremely powerful

### Example

**EUR/USD London Open Judas Swing:**

1. **Asian Session:** Price consolidates 1.0840-1.0860 for 6 hours
   - Range High (BSL): 1.0860
   - Range Low (SSL): 1.0840
   - HTF 4H: Bullish bias

2. **8:00 AM London Open:**
   - Price breaks DOWN to 1.0835 (sweeps SSL)
   - Bearish candle but with large lower wick
   - Duration: 15 minutes

3. **8:15 AM Reversal:**
   - Bullish engulfing candle forms
   - Price back at 1.0848 (inside range)
   - FVG created between 1.0843-1.0848
   - → Judas Swing confirmed

4. **8:30 AM True Move:**
   - Price breaks UP through 1.0860 (BOS)
   - Strong displacement upward
   
5. **Entry:**
   - Wait for retracement to FVG at 1.0845
   - Enter LONG at 1.0845
   - Stop Loss: 1.0838 (below Judas low)
   - Target: 1.0920 (BSL above)

6. **Result:**
   - 7 pip risk, 75 pip reward → 1:10.7 R:R
   - Price delivered perfectly to target

The Judas Swing trapped early sellers and provided perfect long entry for the real bullish move.
`);

writeBN('24-judas-swing', {
  title: 'Judas Swing',
  description: 'Judas Swing Master করুন — বিশ্বাসঘাতকতার Move যা প্রকৃত Market Direction এর আগে Early Trader দের Trap করে। এই Manipulation Phase চিহ্নিত ও Trade করা শিখুন।',
  order: 24,
  level: 'advanced'
}, `# Judas Swing

### Definition

Judas Swing হলো **False Breakout যা প্রকৃত Direction এ Price Reverse হওয়ার আগে Early Trader দের Trap করে**। যে Judas বিশ্বাসঘাতকতা করেছিল তার নামানুসারে, এই Move Retail Trader দের "বিশ্বাসঘাতকতা" করে যারা Valid Breakout মনে করে Enter করে। এটি Market Maker Model এর MANIPULATION Phase — একটি ইচ্ছাকৃত Stop Hunt যা Real Institutional Move এর জন্য প্রয়োজনীয় Liquidity তৈরি করে।

- **Bullish Judas Swing:** নিচে False Move যা SSL Sweep করে, তারপর UP Reverse করে (প্রকৃত Direction)
- **Bearish Judas Swing:** উপরে False Move যা BSL Sweep করে, তারপর DOWN Reverse করে (প্রকৃত Direction)

**মূল বৈশিষ্ট্য:**
- Major Session এর Open এ ঘটে (বিশেষ করে London)
- সংক্ষিপ্ত সময়কাল (15-60 মিনিট)
- পূর্ববর্তী Range এ দ্রুত Reversal
- Real Move এর জন্য Liquidity তৈরি করে

### Why It Matters

- Judas Swing ব্যাখ্যা করে কেন "Opening Range Breakout" নিয়মিতভাবে Fail হয়
- তারা দেখায় কখন Enter করবেন না (False Move এর সময়)
- তারা উচ্চ Probability Entry দেয় (False Move Reverse হওয়ার পর)
- Judas বুঝলে আপনি Trapped Trader হবেন না
- Judas Swing প্রায় প্রতিদিন ঘটে — একটি পুনরাবৃত্তিযোগ্য Pattern

### How It Works

**Bullish Judas Swing Process:**
1. **Setup:** London/NY Open আগে Price Consolidate করে (Accumulation)
2. **False Move:** Session Open → Price Range Low এর নিচে DOWN Break করে
3. **Liquidity Sweep:** Range এর নিচের SSL সরিয়ে নেওয়া হয়
4. **Reversal:** Price দ্রুত Range এর ভিতরে ফিরে আসে
5. **True Move:** Price প্রকৃত Bullish Direction এ UP Break করে
6. **Distribution:** Price উপরে BSL Target এ চলে যায়

**Judas Swing Timing:**
| Session | সাধারণ Judas সময় | সময়কাল |
|---------|-------------------|----------|
| London Open | 8:00-8:30 AM London | 15-30 min |
| NY Open | 9:30-10:00 AM NY | 15-45 min |
| Asian Close | 7:00-7:30 AM London | 15-30 min |

### Institutional Logic

**Judas Swing কেন ঘটে:**
- Institution তাদের বড় Order এর জন্য Liquidity প্রয়োজন
- Range Extreme এ SSL/BSL Resting = উপলব্ধ Liquidity
- False Breakout এই Stop Loss Trigger করে
- Stopped-Out Trader Smart Money Entry এর জন্য Liquidity হয়ে যায়
- এটি Real Institutional Move এর জন্য Optimal Fill তৈরি করে

**বিশ্বাসঘাতকতা:**
- Retail Trader Consolidation দেখে → Breakout এর জন্য অপেক্ষা করে
- Breakout ঘটে → Retail Enter করে (Long বা Short)
- Retail এর Stop Loss = Smart Money এর Entry
- Price Reverse হয় → Retail Stop Out হয়
- Smart Money বিপরীত Direction এ Distribute করে

### Trading Application

**সম্ভাব্য Judas Setup চিহ্নিত করা:**
1. **Pre-Session:** স্পষ্ট Consolidation Range চিহ্নিত করুন (বিশেষ করে Asian Range)
2. **Liquidity Mark করুন:** Equal High (BSL) ও Equal Low (SSL) নোট করুন
3. **Session Open:** যেকোনো Direction এ তাৎক্ষণিক Breakout দেখুন
4. **মূল্যায়ন:** Breakout কি:
   - দুর্বল (ছোট Candle Body, বড় Wick)?
   - দ্রুত (প্রথম 15-30 মিনিটে ঘটে)?
   - দ্রুত Reject করছে (Range এ ফিরে Wick)?
   → যদি হ্যাঁ = সম্ভবত Judas Swing

**Judas Trading:**

**পদ্ধতি 1: Reversal Entry (Aggressive)**
1. False Breakout ঘটার জন্য অপেক্ষা করুন
2. Range এ ফিরে Reversal Candle (Engulfing, Pin Bar) দেখুন
3. Reversal Confirmation এ তাৎক্ষণিক Enter করুন
4. Stop Loss: Judas Swing Extreme এর বাইরে
5. Target: Range এর বিপরীত দিক (সর্বনিম্ন)

**পদ্ধতি 2: Retracement Entry (Conservative)**
1. False Breakout এবং Reversal এর জন্য অপেক্ষা করুন
2. প্রকৃত Direction এ Structure Break (BOS) এর জন্য অপেক্ষা করুন
3. Judas Move থেকে FVG/OB/OTE এ Retracement এর জন্য অপেক্ষা করুন
4. Confirmation সহ Retracement এ Enter করুন
5. Stop Loss: Retracement Zone এর নিচে/উপরে
6. Target: বিপরীত দিকে Liquidity

**Judas Swing Confirmation:**
- ✅ Major Session Open এ ঘটে
- ✅ সুস্পষ্ট Liquidity Sweep করে (Equal High/Low)
- ✅ Range এ দ্রুত Rejection (Wick) ফিরে
- ✅ Reversal এর সময় FVG তৈরি করে
- ✅ বিপরীত Direction HTF Bias এর সাথে Align করে

### Common Mistakes

- ❌ প্রাথমিক Breakout Trade করা — এটি TRAP
- ❌ খুব তাড়াতাড়ি Reversal এ Enter করা (Confirmation আগে)
- ❌ Judas সম্পূর্ণ Develop হওয়ার জন্য না অপেক্ষা করা
- ❌ প্রতিটি Session Open Judas হিসেবে Trade করা — সব Open এ Judas Swing নেই
- ❌ HTF Context উপেক্ষা করা — Judas HTF Trend Direction এ Lead করা উচিত

### Advanced Notes

- **Double Judas:** কখনো কখনো Price Real Move এর আগে উভয় Direction এ Judas তৈরি করে (বিরল কিন্তু উচ্চ Volatility এ ঘটে)
- **Failed Judas:** যদি "False" Breakout Reversal ছাড়া Continue করে → এটি Judas ছিল না, Real Move ছিল
- **Judas + Silver Bullet:** Judas থেকে Reversal প্রায়ই Kill Zone এ ঘটে (10:00-11:00 AM NY = Silver Bullet)
- **Judas Timeframe:** সব Timeframe এ কাজ করে, কিন্তু Session Open এ 5M-15M Chart এ সবচেয়ে Reliable
- **HTF Judas:** Daily Judas Swing (দিনের প্রথম ঘন্টা একদিকে Fake করে) অত্যন্ত শক্তিশালী

### Example

**EUR/USD London Open Judas Swing:**

1. **Asian Session:** Price 6 ঘন্টার জন্য 1.0840-1.0860 এ Consolidate করে
   - Range High (BSL): 1.0860
   - Range Low (SSL): 1.0840
   - HTF 4H: Bullish Bias

2. **8:00 AM London Open:**
   - Price 1.0835 এ DOWN Break করে (SSL Sweep)
   - Bearish Candle কিন্তু বড় নিচের Wick সহ
   - সময়কাল: 15 মিনিট

3. **8:15 AM Reversal:**
   - Bullish Engulfing Candle গঠিত
   - Price 1.0848 এ ফিরে (Range এর ভিতরে)
   - 1.0843-1.0848 এর মধ্যে FVG তৈরি
   - → Judas Swing Confirm

4. **8:30 AM True Move:**
   - Price 1.0860 এর মধ্য দিয়ে UP Break করে (BOS)
   - শক্তিশালী Upward Displacement
   
5. **Entry:**
   - 1.0845 এ FVG এ Retracement এর জন্য অপেক্ষা করুন
   - 1.0845 এ LONG Enter করুন
   - Stop Loss: 1.0838 (Judas Low এর নিচে)
   - Target: 1.0920 (উপরে BSL)

6. **ফলাফল:**
   - 7 Pip Risk, 75 Pip Reward → 1:10.7 R:R
   - Price নিখুঁতভাবে Target এ Deliver করেছে

Judas Swing Early Seller দের Trap করেছে এবং Real Bullish Move এর জন্য নিখুঁত Long Entry দিয়েছে।
`);

console.log('✅ Topic 24 (Judas Swing) complete!\n');

// ============ TOPIC 25: Session Liquidity ============
writeEN('25-session-liquidity', {
  title: 'Session Liquidity',
  description: 'Master Session Liquidity — how Asian, London, and NY sessions create distinct liquidity pools. Learn optimal trading times and session-based setups.',
  order: 25,
  level: 'intermediate'
}, `# Session Liquidity

### Definition

Session Liquidity refers to the **accumulation of stop losses and pending orders created during specific trading sessions** (Asian, London, NY) that become targets for institutional traders in subsequent sessions. Each session leaves behind liquidity pools (BSL/SSL) at its highs and lows, which Smart Money systematically targets during higher-volume sessions.

**The Three Major Sessions:**
- **Asian Session (Tokyo):** 12:00 AM - 9:00 AM London time — Accumulation, creates range
- **London Session:** 8:00 AM - 5:00 PM London time — Primary manipulation and distribution
- **NY Session:** 1:30 PM - 10:00 PM London time (8:30 AM - 5:00 PM NY time) — Secondary distribution, overlaps with London

**Key Concept:** The liquidity created in low-volume sessions (Asian) is targeted during high-volume sessions (London/NY).

### Why It Matters

- Session Liquidity explains WHEN price moves happen and WHY
- Asian range liquidity is targeted DAILY by London open moves
- Understanding session liquidity improves entry timing dramatically
- It reveals which liquidity pools will likely be swept next
- Session overlaps (London + NY) create the highest probability moves

### How It Works

**The Session Liquidity Cycle:**

**1. Asian Session (Accumulation Phase):**
- Price consolidates in a tight range (typically 20-40 pips for majors)
- Equal highs form → BSL (Buy-Side Liquidity above Asian high)
- Equal lows form → SSL (Sell-Side Liquidity below Asian low)
- Low volume, institutional accumulation occurring
- Sets up the liquidity pools for London to target

**2. London Open (Manipulation Phase):**
- 8:00 AM London: Session opens with high volume surge
- Price ALMOST ALWAYS targets one side of Asian range first (Judas Swing)
- Sweeps either BSL above or SSL below
- Quick reversal (within 30-60 minutes)
- True move begins in opposite direction

**3. London Session (Distribution Phase):**
- After manipulation, price delivers to the TRUE target
- Major moves occur during London morning (8:00 AM - 12:00 PM London)
- Creates new session highs/lows with new liquidity pools
- These become targets for NY session

**4. NY Session (Secondary Distribution):**
- 1:30 PM London (8:30 AM NY): NY open creates second manipulation opportunity
- Often targets liquidity left by London session
- Silver Bullet hour (10:00-11:00 AM NY) is prime time for setups
- Final distribution into NY close

### Institutional Logic

**Why sessions matter:**
- Volume and liquidity vary dramatically by session
- Institutions can't execute large orders efficiently during low-volume sessions
- They WAIT for high-volume sessions (London/NY) to execute
- Asian session is intentionally allowed to create obvious liquidity setups
- London open ALWAYS interacts with Asian liquidity first

**The Liquidity Hunt:**
- Asian session = Setting the trap (creating liquidity)
- London open = Springing the trap (sweeping liquidity)
- London session = Running to target (distribution)
- NY session = Secondary opportunities (same process)

### Trading Application

**Trading Asian Range Liquidity:**

**Setup:**
1. **Identify Asian Range:** Mark high and low from 12:00 AM - 7:00 AM London
2. **Mark Liquidity:**
   - BSL = Above Asian high
   - SSL = Below Asian low
3. **Check HTF Bias:** Which direction does 4H/Daily favor?
4. **London Open Watch:** 8:00 AM London, price will likely target one side first

**Scenario 1: HTF Bullish**
- Expect London to sweep SSL BELOW Asian low first (Judas)
- Wait for reversal back into/above Asian range
- Enter LONG on retracement to FVG/OB from the Judas move
- Target: BSL above Asian high (minimum)

**Scenario 2: HTF Bearish**
- Expect London to sweep BSL ABOVE Asian high first (Judas)
- Wait for reversal back into/below Asian range
- Enter SHORT on retracement to FVG/OB from the Judas move
- Target: SSL below Asian low (minimum)

**Trading NY Session Liquidity:**
1. Identify London session high/low (formed 8:00 AM - 1:00 PM London)
2. Mark new BSL/SSL at these levels
3. Watch NY open (1:30 PM London / 8:30 AM NY) for liquidity sweep
4. Trade the Silver Bullet setup (10:00-11:00 AM NY) targeting opposite session liquidity

**Session-Based Trading Rules:**
- ❌ DON'T trade during Asian session (unless you're scalping the range)
- ✅ DO trade London open (8:00-9:00 AM) — Judas Swing setups
- ✅ DO trade London morning (9:00 AM-12:00 PM) — Distribution phase
- ✅ DO trade NY open (8:30-9:30 AM NY) — Second manipulation opportunity
- ✅ DO trade Silver Bullet (10:00-11:00 AM NY / 3:00-4:00 PM London) — Premium setups

### Common Mistakes

- ❌ Trading during Asian session expecting big moves — It's accumulation, not distribution
- ❌ Ignoring Asian range liquidity — It's THE most important daily reference
- ❌ Not waiting for London to interact with Asian liquidity before entering
- ❌ Trading against HTF bias during session opens
- ❌ Missing the session overlap (London + NY 1:30-5:00 PM London) — Highest volume period

### Advanced Notes

- **Extended Asian Range:** If Asian range is wider than usual (60+ pips), it may act as the full daily range — less likely to expand significantly
- **Session High/Low as Magnets:** Each session's high/low becomes a magnet for the next session
- **Kill Zone Timing:** ICT's Kill Zones align with session opens (London: 8:00-9:00 AM, NY: 9:30-11:00 AM)
- **Weekend Gap:** Sunday open often seeks to fill Friday's session liquidity first
- **News Events:** Session liquidity is AMPLIFIED during major news releases
- **Interbank Hours:** True institutional activity peaks during 8:00 AM - 12:00 PM London

### Example

**GBP/USD Session Liquidity Trade:**

**Asian Session (12:00 AM - 7:00 AM London):**
- Range: 1.2640 - 1.2660
- BSL: Above 1.2660 (equal highs)
- SSL: Below 1.2640 (equal lows)
- HTF 4H: Bullish bias

**London Open (8:00 AM):**
- Price spikes DOWN to 1.2635 (sweeps SSL) — Judas Swing
- 15-minute move, quick reversal
- Bullish engulfing at 1.2643
- FVG created: 1.2640-1.2645

**London Session (8:30 AM - 11:00 AM):**
- Price breaks above 1.2660 (breaks Asian high)
- BOS confirmed (bullish structure)
- Price retraces to 1.2652 (OTE zone + FVG overlap)

**Entry:**
- BUY at 1.2652 (OTE + FVG)
- Stop Loss: 1.2638 (below Judas low)
- Target: 1.2710 (next BSL from previous day)

**Result:**
- 14 pip risk, 58 pip reward → 1:4.1 R:R
- Session liquidity concept delivered perfect entry and target

The trade capitalized on Asian range SSL sweep (Judas), entered on retracement, targeted the next available BSL above.
`);

writeBN('25-session-liquidity', {
  title: 'Session Liquidity',
  description: 'Session Liquidity Master করুন — কীভাবে Asian, London, ও NY Session স্বতন্ত্র Liquidity Pool তৈরি করে। Optimal Trading Time ও Session-Based Setup শিখুন।',
  order: 25,
  level: 'intermediate'
}, `# Session Liquidity

### Definition

Session Liquidity বলতে বোঝায় **নির্দিষ্ট Trading Session** (Asian, London, NY) এর সময় তৈরি Stop Loss ও Pending Order এর সংগ্রহ যা পরবর্তী Session এ Institutional Trader দের জন্য Target হয়ে যায়। প্রতিটি Session তার High ও Low এ Liquidity Pool (BSL/SSL) রেখে যায়, যা Smart Money উচ্চ-Volume Session এ পদ্ধতিগতভাবে Target করে।

**তিনটি প্রধান Session:**
- **Asian Session (Tokyo):** 12:00 AM - 9:00 AM London সময় — Accumulation, Range তৈরি করে
- **London Session:** 8:00 AM - 5:00 PM London সময় — প্রাথমিক Manipulation ও Distribution
- **NY Session:** 1:30 PM - 10:00 PM London সময় (8:30 AM - 5:00 PM NY সময়) — দ্বিতীয় Distribution, London এর সাথে Overlap করে

**মূল Concept:** কম-Volume Session (Asian) এ তৈরি Liquidity উচ্চ-Volume Session (London/NY) এ Target হয়।

### Why It Matters

- Session Liquidity ব্যাখ্যা করে কখন Price Move হয় এবং কেন
- Asian Range Liquidity প্রতিদিন London Open Move দ্বারা Target হয়
- Session Liquidity বুঝলে Entry Timing নাটকীয়ভাবে উন্নত হয়
- এটি প্রকাশ করে কোন Liquidity Pool পরবর্তী Sweep হবে সম্ভবত
- Session Overlap (London + NY) সর্বোচ্চ Probability Move তৈরি করে

### How It Works

**Session Liquidity Cycle:**

**1. Asian Session (Accumulation Phase):**
- Price একটি সংকীর্ণ Range এ Consolidate করে (Major এর জন্য সাধারণত 20-40 Pip)
- Equal High গঠিত → BSL (Asian High এর উপরে Buy-Side Liquidity)
- Equal Low গঠিত → SSL (Asian Low এর নিচে Sell-Side Liquidity)
- কম Volume, Institutional Accumulation ঘটছে
- London টার্গেট করার জন্য Liquidity Pool সেট আপ করে

**2. London Open (Manipulation Phase):**
- 8:00 AM London: উচ্চ Volume Surge সহ Session Open হয়
- Price প্রায় সবসময় প্রথমে Asian Range এর একদিক Target করে (Judas Swing)
- হয় উপরে BSL বা নিচে SSL Sweep করে
- দ্রুত Reversal (30-60 মিনিটের মধ্যে)
- বিপরীত Direction এ True Move শুরু হয়

**3. London Session (Distribution Phase):**
- Manipulation পরে, Price সত্যিকারের Target এ Deliver করে
- London সকালে Major Move ঘটে (8:00 AM - 12:00 PM London)
- নতুন Liquidity Pool সহ নতুন Session High/Low তৈরি করে
- এগুলো NY Session এর জন্য Target হয়ে যায়

**4. NY Session (Secondary Distribution):**
- 1:30 PM London (8:30 AM NY): NY Open দ্বিতীয় Manipulation সুযোগ তৈরি করে
- প্রায়ই London Session রেখে যাওয়া Liquidity Target করে
- Silver Bullet Hour (10:00-11:00 AM NY) Setup এর জন্য Prime Time
- NY Close এ Final Distribution

### Institutional Logic

**Session কেন গুরুত্বপূর্ণ:**
- Session অনুসারে Volume ও Liquidity নাটকীয়ভাবে পরিবর্তিত হয়
- Institution কম-Volume Session এ বড় Order দক্ষভাবে Execute করতে পারে না
- তারা উচ্চ-Volume Session (London/NY) এ Execute করার জন্য অপেক্ষা করে
- Asian Session ইচ্ছাকৃতভাবে সুস্পষ্ট Liquidity Setup তৈরি করতে দেওয়া হয়
- London Open সবসময় প্রথমে Asian Liquidity এর সাথে Interact করে

**Liquidity Hunt:**
- Asian Session = Trap সেট করা (Liquidity তৈরি)
- London Open = Trap Spring করা (Liquidity Sweep)
- London Session = Target এ চলা (Distribution)
- NY Session = দ্বিতীয় সুযোগ (একই Process)

### Trading Application

**Asian Range Liquidity Trading:**

**Setup:**
1. **Asian Range চিহ্নিত করুন:** 12:00 AM - 7:00 AM London থেকে High ও Low Mark করুন
2. **Liquidity Mark করুন:**
   - BSL = Asian High এর উপরে
   - SSL = Asian Low এর নিচে
3. **HTF Bias চেক করুন:** 4H/Daily কোন Direction পক্ষে?
4. **London Open Watch:** 8:00 AM London, Price সম্ভবত প্রথমে একদিক Target করবে

**Scenario 1: HTF Bullish**
- আশা করুন London প্রথমে Asian Low এর নিচে SSL Sweep করবে (Judas)
- Asian Range এ/উপরে ফিরে Reversal এর জন্য অপেক্ষা করুন
- Judas Move থেকে FVG/OB এ Retracement এ LONG Enter করুন
- Target: Asian High এর উপরে BSL (সর্বনিম্ন)

**Session-Based Trading নিয়ম:**
- ❌ Asian Session এ Trade করবেন না (যদি না আপনি Range Scalp করছেন)
- ✅ London Open Trade করুন (8:00-9:00 AM) — Judas Swing Setup
- ✅ London সকালে Trade করুন (9:00 AM-12:00 PM) — Distribution Phase
- ✅ NY Open Trade করুন (8:30-9:30 AM NY) — দ্বিতীয় Manipulation সুযোগ
- ✅ Silver Bullet Trade করুন (10:00-11:00 AM NY / 3:00-4:00 PM London) — Premium Setup

### Common Mistakes

- ❌ বড় Move আশা করে Asian Session এ Trade করা — এটি Accumulation, Distribution নয়
- ❌ Asian Range Liquidity উপেক্ষা করা — এটি সবচেয়ে গুরুত্বপূর্ণ দৈনিক Reference
- ❌ Enter করার আগে London Asian Liquidity এর সাথে Interact করার জন্য অপেক্ষা না করা
- ❌ Session Open এ HTF Bias এর বিরুদ্ধে Trade করা
- ❌ Session Overlap (London + NY 1:30-5:00 PM London) মিস করা — সর্বোচ্চ Volume Period

### Advanced Notes

- **Extended Asian Range:** যদি Asian Range স্বাভাবিকের চেয়ে প্রশস্ত (60+ Pip), এটি সম্পূর্ণ Daily Range হিসেবে কাজ করতে পারে — উল্লেখযোগ্যভাবে Expand হওয়ার সম্ভাবনা কম
- **Session High/Low Magnet হিসেবে:** প্রতিটি Session এর High/Low পরবর্তী Session এর জন্য Magnet হয়ে যায়
- **Kill Zone Timing:** ICT এর Kill Zone Session Open এর সাথে Align করে (London: 8:00-9:00 AM, NY: 9:30-11:00 AM)
- **Weekend Gap:** Sunday Open প্রায়ই প্রথমে Friday এর Session Liquidity Fill করতে চায়
- **News Event:** Major News Release এর সময় Session Liquidity বৃদ্ধি পায়

### Example

**GBP/USD Session Liquidity Trade:**

**Asian Session (12:00 AM - 7:00 AM London):**
- Range: 1.2640 - 1.2660
- BSL: 1.2660 এর উপরে (Equal High)
- SSL: 1.2640 এর নিচে (Equal Low)
- HTF 4H: Bullish Bias

**London Open (8:00 AM):**
- Price 1.2635 এ নিচে Spike করে (SSL Sweep) — Judas Swing
- 15-মিনিট Move, দ্রুত Reversal
- 1.2643 এ Bullish Engulfing
- FVG তৈরি: 1.2640-1.2645

**London Session (8:30 AM - 11:00 AM):**
- Price 1.2660 এর উপরে Break করে (Asian High Break)
- BOS Confirm (Bullish Structure)
- Price 1.2652 এ Retrace করে (OTE Zone + FVG Overlap)

**Entry:**
- 1.2652 এ BUY (OTE + FVG)
- Stop Loss: 1.2638 (Judas Low এর নিচে)
- Target: 1.2710 (আগের দিন থেকে পরবর্তী BSL)

**ফলাফল:**
- 14 Pip Risk, 58 Pip Reward → 1:4.1 R:R
- Session Liquidity Concept নিখুঁত Entry ও Target Deliver করেছে

Trade Asian Range SSL Sweep (Judas) কাজে লাগিয়েছে, Retracement এ Enter করেছে, উপরে পরবর্তী উপলব্ধ BSL Target করেছে।
`);

console.log('✅ Topic 25 (Session Liquidity) complete!\n');

console.log('\n🎉 Batch 3 Topics 24-25 complete! Topics 26-28 will be in next batch.\n');


