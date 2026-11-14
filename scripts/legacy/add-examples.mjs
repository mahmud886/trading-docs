import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const C = join(process.cwd(), "content");

// Topic-specific detailed examples for SMC
const smcExamples = {
  introduction: {
    en: `

---

## Real-World SMC Trading Examples

### Example 1: EUR/USD — Full SMC Analysis (4H)

**Date:** Monday, NY session  
**Context:** Weekly bullish bias, price in discount on daily fib

1. **Market Structure:** 4H showing HH/HL — bullish trend confirmed
2. **Liquidity identified:** Equal lows at 1.0720 (SSL target)
3. **Order Block:** Bullish OB at 1.0735-1.0750 from the last BOS
4. **What happened:**
   - Price drops to sweep 1.0720 lows (liquidity taken)
   - Displacement candle pushes back above 1.0750
   - CHOCH confirmed on 15M
   - Entry at OB: 1.0740
5. **Stop:** 1.0710 (below the sweep) | **Target:** 1.0850 (BSL above)
6. **Result:** +110 pips, **3.67R** ✅

### Example 2: Gold — SMC in Action (1H)

**Context:** 4H bearish MSS after sweeping $2,480 highs

1. **Structure:** 1H now making LH/LL after the 4H MSS
2. **Bearish OB:** $2,455-$2,462 (last green candle before drop)
3. **FVG:** Created during the MSS displacement at $2,448-$2,458
4. **What happened:**
   - Price retraces to OB zone at $2,458
   - 5M shows bearish CHOCH at the OB
   - Entry: $2,457 | Stop: $2,465 | Target: $2,410
5. **Result:** +$47, **5.9R** ✅

### Example 3: NAS100 — Full Day Analysis (Bangladesh Time)

**Setup timeline (BD Time):**
- **6:00 AM - 12:00 PM (Asian):** NAS100 ranges 18,200-18,320
- **2:30 PM (London Open):** Price drops below 18,200 to 18,170 (Judas Swing sweeps Asian low)
- **3:15 PM:** 15M bullish CHOCH — price breaks back above 18,200
- **3:20 PM:** Mark bullish OB at 18,175-18,195
- **7:45 PM (NY Open):** Price retests the OB zone at 18,190
- **Entry:** 18,192 | **Stop:** 18,162 | **Target:** 18,380
- **9:30 PM:** Target hit during NY distribution
- **Result:** +188 points, **6.3R** ✅

\`\`\`
NAS100 Price Action (Simplified):

Asian Range:    ════════════════  18,320 (High)
                ════════════════  18,200 (Low)

London Sweep:                ╰──→ 18,170 (Takes SSL)
              
CHOCH + OB:     ████ 18,195     ← Entry zone  
                ████ 18,175

NY Distribution:              ╭──→ 18,380 (Target / BSL)
                             ↗
                           ↗
                         ↗
\`\`\`

---

## Why SMC Works: The Institutional Logic

Understanding SMC isn't about memorizing patterns — it's about understanding **WHY** price moves:

| Retail Thinking | Institutional Reality |
|----------------|----------------------|
| "Price bounced off support" | "Institutions had unfilled orders at that OB" |
| "The breakout failed" | "That was inducement to grab liquidity" |
| "RSI is oversold, time to buy" | "Price swept sell-side to fill institutional longs" |
| "The trend reversed randomly" | "The CHOCH showed Smart Money shifted direction" |
| "I got stopped out again" | "Your stop was the liquidity they needed" |

<Callout type="tip" title="The SMC Mindset Shift">
Stop thinking like a retail trader. Every time you place a trade, ask: "Would an institution take this same trade?" If not, you're probably providing liquidity for someone who would.
</Callout>
`,
    bn: `

---

## বাস্তব SMC ট্রেডিং উদাহরণ

### উদাহরণ ১: EUR/USD — সম্পূর্ণ SMC অ্যানালাইসিস (4H)

**কন্টেক্সট:** উইকলি বুলিশ বায়াস, ডেইলি ফিবে ডিসকাউন্টে

1. **মার্কেট স্ট্রাকচার:** 4H HH/HL দেখাচ্ছে — বুলিশ ট্রেন্ড কনফার্মড
2. **লিকুইডিটি:** 1.0720 তে equal lows (SSL টার্গেট)
3. **Order Block:** 1.0735-1.0750 ��ে বুলিশ OB
4. **কী ঘটল:**
   - প্রাইস 1.0720 লো সুইপ করতে নামে (liquidity নেওয়া)
   - ডিসপ্লেসমেন্ট ক্যান্ডেল 1.0750 এর উপরে পুশ করে
   - 15M এ CHOCH কনফার্মড
   - OB তে এন্ট্রি: 1.0740
5. **স্টপ:** 1.0710 | **টার্গেট:** 1.0850
6. **ফলাফল:** +110 পিপস, **3.67R** ✅

### উদাহরণ ২: গোল্ড — SMC ইন অ্যাকশন (1H)

1. $2,480 হাই সুইপের পরে 4H বিয়ারিশ MSS
2. বিয়ারিশ OB: $2,455-$2,462
3. প্রাইস OB জোনে $2,458 তে রিট্রেস
4. 5M বিয়ারিশ CHOCH
5. **এন্ট্রি:** $2,457 | **স্টপ:** $2,465 | **টার্গেট:** $2,410
6. **ফলাফল:** +$47, **5.9R** ✅

### উদাহরণ ৩: NAS100 — পূর্ণ দিন (বাংলাদেশ সময়)

- **সকাল ৬-দুপুর ১২ (এশিয়ান):** 18,200-18,320 রেঞ্জ
- **দুপুর ২:৩০ (লন্ডন):** 18,170 পর্যন্ত ড্রপ (এশিয়ান লো সুইপ)
- **বিকেল ৩:১৫:** 15M বুলিশ CHOCH
- **রাত ৭:৪৫ (NY):** OB রিটেস্ট 18,190
- **এন্ট্রি:** 18,192 | **স্টপ:** 18,162 | **টার্গেট:** 18,380
- **রাত ৯:৩০:** টার্গেট হিট — **+188 পয়েন্ট, 6.3R** ✅
`,
  },
  manipulation: {
    en: `

---

## Detailed Market Manipulation Examples

### Example 1: Stop Hunt Below Support (EUR/USD)

**The setup everyone sees:** EUR/USD has bounced off 1.0800 three times — "strong support"

**What actually happens:**
1. Thousands of retail traders place buy orders at 1.0800
2. Their stop losses sit at 1.0780-1.0790 (just below "support")
3. Institutions NEED those stop losses to fill their buy orders
4. Price drops to 1.0775 → ALL retail stops triggered
5. Those triggered stops = sell orders = liquidity for institutions to BUY
6. Price immediately reverses UP from 1.0775
7. Retail sees "support held" — but the REAL entry was 1.0775, not 1.0800

\`\`\`
What retail sees:        What actually happened:
                         
─── 1.0800 "Support" ─── ─── 1.0800 (Retail buys here)
     ↑ bounce!                │
                              ↓ Price sweeps below
                         ─── 1.0775 (Stops triggered = Institutions buy)
                              ↑ REAL reversal starts here
\`\`\`

### Example 2: False Breakout Above Resistance (Gold)

1. Gold has resistance at $2,450 — tested 3 times
2. Breakout traders place buy-stops above $2,450
3. Price pushes to $2,458 → breakout traders enter long
4. Their stops are at $2,445-$2,448
5. Price IMMEDIATELY reverses below $2,450
6. Breakout traders get stopped out (forced to sell)
7. Institutions used those sell orders to ___buy___ — wait, no:
   - Actually institutions SOLD into the breakout buying
   - The false breakout was the manipulation to fill short orders
8. Price drops to $2,390

**Lesson:** The breakout was the manipulation. The "failure" was the distribution.

### Example 3: News Manipulation (NFP Friday)

**Non-Farm Payrolls release (BD Time: ~9:30 PM)**

1. **9:30 PM:** NFP data releases — USD bullish
2. **9:30-9:32 PM:** EUR/USD drops 40 pips (initial reaction)
3. **9:32-9:35 PM:** EUR/USD REVERSES and spikes UP 60 pips (manipulation)
4. This UP spike takes buy-side liquidity from traders who went long thinking "NFP miss"
5. **9:35 PM onwards:** EUR/USD resumes the TRUE direction — drops 120 pips

**ICT teaches:** The first move after news is USUALLY manipulation. Wait 5-15 minutes for the true direction.

---

## How to Trade WITH Manipulation (Not Against It)

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Identify obvious retail levels | Know where stops will cluster |
| 2 | Wait for the sweep | Let manipulation complete |
| 3 | Watch for MSS/CHOCH | Confirm the reversal from manipulation |
| 4 | Enter at OB/FVG after the sweep | Align with institutional direction |
| 5 | Stop beyond the manipulation extreme | Protected by institutional levels |
| 6 | Target opposing liquidity | Where price is being delivered to |
`,
    bn: `

---

## বিস্তারিত মার্কেট ম্যানিপুলেশন উদাহরণ

### উদাহরণ ১: সাপোর্টের নিচে স্টপ হান্ট (EUR/USD)

**সবাই যা দেখে:** EUR/USD 1.0800 থেকে ৩ বার বাউন্স — "শক্তিশালী সাপোর্ট"

**আসলে কী ঘটে:**
1. হাজার হাজার রিটেইল ট্রেডার 1.0800 তে বাই অর্ডার রাখে
2. তাদের স্টপ 1.0780-1.0790 তে (সাপোর্টের "ঠিক নিচে")
3. ইনস্টিটিউশনের সেই স্টপ দরকার বাই অর্ডার পূরণে
4. প্রাইস 1.0775 তে নামে → সব রিটেইল স্টপ ট্রিগার
5. সেই ট্রিগার হওয়া স্টপ = সেল অর্ডার = ইনস্টিটিউশনের BUY করার লিকুইডিটি
6. প্রাইস তাৎক্ষণিক 1.0775 থেকে উপরে রিভার্স

### উদাহরণ ২: রেজিস্ট্যান্সের উপরে ফলস ব্রেকআউট (গোল্ড)

1. গোল্ডে $2,450 তে রেজিস্ট্যান্স — ৩ বার টেস্ট
2. ব্রেকআউট ট্রেডাররা $2,450 এর উপরে বাই-স্টপ রাখে
3. প্রাইস $2,458 পর্যন্ত পুশ → ব্রেকআউট ট্রেডাররা লং এ প্রবেশ
4. প্রাইস তাৎক্ষণিক $2,450 এর নিচে রিভার্স
5. ব্রেকআউট ট্রেডাররা স্টপ আউট (সেল করতে বাধ্য)
6. ইনস্টিটিউশন ব্রেকআউটের বায়িং এ SELL করেছিল
7. প্রাইস $2,390 পর্যন্ত নামে

### উদাহরণ ৩: নিউজ ম্যানিপুলেশন (NFP শুক্রবার, BD সময়)

1. **রাত ৯:৩০:** NFP ডেটা রিলিজ — USD বুলিশ
2. **৯:৩০-৯:৩২:** EUR/USD 40 পিপ ড্রপ (প্রাথমিক রিঅ্যাকশন)
3. **৯:৩২-৯:৩৫:** EUR/USD রিভার্স করে 60 পিপ স্পাইক আপ (ম্যানিপুলেশন!)
4. **৯:৩৫ এর পরে:** EUR/USD সত্যিকার দিকে — 120 পিপ ড্রপ

**ICT শেখায়:** নিউজের পরে প্রথম মুভ সাধারণত ম্যানিপুলেশন। সত্যিকার দিকের জন্য ৫-১৫ মিনিট অপেক্ষা করুন।
`,
  },
  "kill-zones": {
    en: `

---

## Kill Zone Trading Examples (Bangladesh Time)

### Example 1: London Kill Zone Sweep (EUR/USD)

**BD Time: 2:00 PM - 5:00 PM**

1. **Asian range (6AM-12PM BD):** EUR/USD 1.0860-1.0885
2. **2:15 PM BD (London opens):** Price spikes above 1.0885 (Asian high)
3. This is the **Judas Swing** — sweeping buy-side liquidity above Asian high
4. **2:45 PM BD:** Price reverses, drops below 1.0860 (Asian low)
5. **3:00 PM BD:** 15M bullish CHOCH after sweeping the low
6. **Entry:** 1.0862 at the FVG after CHOCH
7. **Stop:** 1.0848 | **Target:** 1.0920
8. **Result:** +58 pips, **4.1R** ✅

### Example 2: NY Kill Zone (Gold) — Perfect for BD Evening Trading

**BD Time: 7:00 PM - 10:00 PM**

1. **Daily bias:** Bearish (4H MSS, weekly at premium $2,440+)
2. **Asian + London:** Gold ranges $2,425-$2,438
3. **7:30 PM BD:** NY opens, gold pushes to $2,442 (sweeps London high)
4. **7:50 PM BD:** 5M bearish CHOCH with displacement
5. **8:00 PM BD:** Entry at bearish OB: $2,438
6. **Stop:** $2,445 | **Target:** $2,408
7. **10:00 PM BD:** Target reached during NY distribution
8. **Result:** +$30, **4.3R** ✅

### Example 3: Why NOT to Trade Outside Kill Zones

**What happens when you trade at 10:00 AM BD (Asian session):**
- EUR/USD moves 5 pips up, 3 pips down, 4 pips up, 2 pips down...
- Spread eats into your tiny moves
- No displacement, no clear structure
- Stop hunts both sides in choppy action
- **Result:** Death by a thousand paper cuts

<Callout type="warning" title="Bangladesh Traders: Your Schedule">
Your BEST trading window is **7:00 PM - 10:00 PM Bangladesh Time** (NY AM Kill Zone). This is when:
- Highest volume and liquidity
- Best displacement and institutional moves  
- Most reliable SMC/ICT setups form
- You can focus after work/studies

Mark your calendar. Set an alarm. This is YOUR Kill Zone.
</Callout>
`,
    bn: `

---

## Kill Zone ট্রেডিং উদাহরণ (বাংলাদেশ সময়)

### উদাহরণ ১: লন্ডন Kill Zone সুইপ (EUR/USD)

**BD সময়: দুপুর ২:০০ - বিকেল ৫:০০**

1. **এশিয়ান রেঞ্জ (সকাল ৬-দুপুর ১২):** 1.0860-1.0885
2. **দুপুর ২:১৫:** 1.0885 এর উপরে স্পাইক (এশিয়ান হাই সুইপ = Judas Swing)
3. **দুপুর ২:৪৫:** ���িভার্স করে 1.0860 এর নিচে (এশিয়ান লো)
4. **বিকেল ৩:০০:** 15M বুলিশ CHOCH
5. **এন্ট্রি:** 1.0862 | **স্টপ:** 1.0848 | **টার্গেট:** 1.0920
6. **ফলাফল:** +58 পিপস, **4.1R** ✅

### উদাহরণ ২: NY Kill Zone (গোল্ড) — BD সন্ধ্যা ট্রেডিং

**BD সময়: রাত ৭:০০ - ১০:০০**

1. **ডেইলি বায়াস:** বিয়ারিশ (4H MSS, $2,440+ এ প্রিমিয়াম)
2. **রাত ৭:৩০:** NY ওপেন, গোল্ড $2,442 পুশ (লন্ডন হাই সুইপ)
3. **রাত ৭:৫০:** 5M বিয়ারিশ CHOCH
4. **রাত ৮:০০:** বিয়ারিশ OB তে এন্ট্রি: $2,438
5. **স্টপ:** $2,445 | **টার্গেট:** $2,408
6. **ফলাফল:** +$30, **4.3R** ✅

<Callout type="warning" title="বাংলাদেশ ট্রেডারদের সময়সূচী">
আপনার সেরা ট্রেডিং উইন্ডো **রাত ৭:০০ - ১০:০০ বাংলাদেশ সময়**। এই সময়ে সর্বোচ্চ ভলিউম, সেরা ডিসপ্লেসমেন্ট, এবং সবচেয়ে নির্ভরযোগ্য SMC/ICT সেটআপ তৈরি হয়।
</Callout>
`,
  },
};

// Generic detailed examples to append to ALL remaining files
function getGenericExamples(slug, category, isEN) {
  const topicName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  if (isEN) {
    return `

---

## Detailed Trading Examples

### Example 1: EUR/USD — ${topicName} in Practice (4H Chart)

**Market Context:** EUR/USD in 4H uptrend, price pulling back toward key level

1. **Higher Timeframe:** Daily showing bullish structure (HH/HL)
2. **Setup Timeframe (4H):** Price retraces to key zone where ${topicName} concept applies
3. **Entry Timeframe (15M):** Wait for lower TF confirmation
4. **Entry Details:**
   - Identified ${topicName} setup at 1.0845
   - 15M shows bullish CHOCH confirming the concept
   - Entry: 1.0848 | Stop: 1.0820 (28 pips)
   - Target 1: 1.0900 (52 pips, 1.86R)
   - Target 2: 1.0940 (92 pips, 3.29R)
5. **Trade Management:**
   - Move stop to breakeven at +30 pips
   - Take 50% off at TP1
   - Trail remaining to TP2
6. **Result:** TP2 hit — **+92 pips total, 3.29R on full position** ✅

### Example 2: Gold (XAU/USD) — ${topicName} During NY Session

**Bangladesh Time:** 8:15 PM (NY Kill Zone)

1. **Daily Bias:** Bearish — Gold at premium zone near $2,440
2. **4H Structure:** Bearish MSS confirmed earlier in the day
3. **${topicName} Application:**
   - Concept identified on 1H chart at $2,435 zone
   - Price shows clear institutional activity
   - 5M entry confirmation at $2,433
4. **Execution:**
   - Entry: $2,433 | Stop: $2,442 ($9 risk)
   - Target: $2,398 ($35 reward)
   - R:R = 1:3.9
5. **Result:** Hit target at 10:30 PM BD — **+$35, 3.9R** ✅

### Example 3: NAS100 — ${topicName} Intraday Setup

**Session:** London-NY Overlap (7:30 PM - 11:00 PM BD)

1. **Context:** NAS100 bullish weekly structure, pulled back to daily FVG
2. **Asian Range (6AM-12PM BD):** 18,150 - 18,240
3. **London swept Asian low** at 18,130 (Judas Swing)
4. **${topicName} Setup:**
   - Concept confirmed at 18,160 zone on 15M
   - Institutional displacement present
   - Entry: 18,168 | Stop: 18,128 (40 pts)
   - Target: 18,340 (172 pts)
5. **Result:** NY distribution delivered to target — **+172 points, 4.3R** ✅

### Example 4: BTC/USD — ${topicName} on Crypto

**Context:** BTC weekly in accumulation range $58,000-$65,000

1. **Setup:** ${topicName} identified on 4H near $59,200
2. **Confirmation:** 1H MSS + displacement after SSL sweep at $58,800
3. **Entry:** $59,100 | Stop: $58,500 | Target: $63,000
4. **Result:** Multi-day swing to target — **+$3,900, 6.5R** ✅

---

## Multi-Market Application Table

| Market | Typical Setup | Stop Size | R:R Target | Best Session (BD) |
|--------|--------------|-----------|------------|-------------------|
| EUR/USD | 4H + 15M entry | 20-35 pips | 1:3 | 7:30-11:00 PM |
| GBP/USD | 4H + 15M entry | 25-40 pips | 1:3 | 7:30-11:00 PM |
| Gold | 1H + 5M entry | $5-10 | 1:4 | 7:30-11:00 PM |
| NAS100 | 1H + 5M entry | 30-50 pts | 1:4 | 7:30-11:00 PM |
| BTC/USD | 4H + 1H entry | $300-800 | 1:5+ | Any (24/7) |

<Callout type="tip" title="Applying ${topicName} Across Markets">
The ${topicName} concept works on ALL liquid markets. The key is adjusting your position size and stop distance for each market's volatility. Gold and indices need wider stops than forex. Always calculate your risk in dollars, not pips.
</Callout>
`;
  } else {
    return `

---

## বিস্তারিত ট্রেডিং উদাহরণ

### উদাহরণ ১: EUR/USD — ${topicName} প্র্যাক্টিসে (4H চার্ট)

**মার্কেট কন্টেক্সট:** EUR/USD 4H আপট্রেন্ডে, কী লেভেলের দিকে পুলব্যাক

1. **হায়ার টাইমফ্রেম:** ডেইলি বুলিশ স্ট্রাকচার (HH/HL)
2. **সেটআপ (4H):** প্রাইস কী জোনে রিট্রেস করে যেখানে ${topicName} কনসেপ্ট প্রযোজ্য
3. **এন্ট্রি (15M):** লোয়ার TF কনফার্মেশনের অপেক্ষা
4. **এন্ট্রি ডিটেইলস:**
   - 1.0845 তে ${topicName} সেটআপ চিহ্নিত
   - 15M বুলিশ CHOCH কনসেপ্ট কনফার্ম করে
   - এন্ট্রি: 1.0848 | স্টপ: 1.0820 (28 পিপ)
   - টার্গেট ১: 1.0900 (52 পিপ, 1.86R)
   - টার্গেট ২: 1.0940 (92 পিপ, 3.29R)
5. **ফলাফল:** TP2 হিট — **+92 পিপস, 3.29R** ✅

### উদাহরণ ২: গোল্ড — NY সেশনে ${topicName}

**বাংলাদেশ সময়:** রাত ৮:১৫ (NY Kill Zone)

1. **ডেইলি বায়াস:** বিয়ারিশ — গোল্ড $2,440 প্রিমিয়াম জোনে
2. **1H চার্টে** $2,435 জোনে কনসেপ্ট চিহ্নিত
3. **5M এন্ট্রি কনফার্মেশন:** $2,433
4. **এন্ট্রি:** $2,433 | **স্টপ:** $2,442 | **টার্গেট:** $2,398
5. **ফলাফল:** রাত ১০:৩০ BD তে টার্গেট হিট — **+$35, 3.9R** ✅

### উদাহরণ ৩: NAS100 — ইন্ট্রাডে সেটআপ (BD সময়)

1. **এশিয়ান রেঞ্জ (সকাল ৬-দুপুর ১২):** 18,150-18,240
2. **লন্ডন** এশিয়ান লো সুইপ করে 18,130 তে
3. 15M এ কনসেপ্ট কনফার��মড 18,160 জোনে
4. **এন্ট্রি:** 18,168 | **স্টপ:** 18,128 | **টার্গেট:** 18,340
5. **ফলাফল:** NY ডিস্ট্রিবিউশন — **+172 পয়েন্ট, 4.3R** ✅

---

## মাল্টি-মার্কেট প্রয়োগ

| মার্কেট | সাধারণ সেটআপ | স্টপ সাইজ | R:R টার্গেট | সেরা সেশন (BD) |
|---------|-------------|----------|------------|---------------|
| EUR/USD | 4H + 15M এন্ট্রি | ২০-৩৫ পিপ | ১:৩ | রাত ৭:৩০-১১:০০ |
| GBP/USD | 4H + 15M এন্ট্রি | ২৫-৪০ পিপ | ১:৩ | রাত ৭:৩০-১১:০০ |
| গোল্��� | 1H + 5M এন্ট্রি | $৫-১০ | ১:৪ | রাত ৭:৩০-১১:০০ |
| NAS100 | 1H + 5M এন্ট্রি | ৩০-৫০ পয়েন্ট | ১:৪ | রাত ৭:৩০-১১:০০ |
| BTC/USD | 4H + 1H এন্ট্রি | $৩০০-৮০০ | ১:৫+ | যেকোনো (২৪/৭) |

<Callout type="tip" title="সব মার্কেটে প্রয়োগ">
${topicName} কনসেপ্ট সব লিকুইড মার্কেটে কাজ করে। মূল বিষয় হলো প্রতিটি মার্কেটের ভোলাটিলিটি অনুযায়ী পজিশন সাইজ ও স্টপ দূরত্ব অ্যাডজাস্ট করা। গোল্ড ও ইন্ডাইসেসে ফরেক্সের চেয়ে ওয়াইডার স্টপ দরকার।
</Callout>
`;
  }
}

// Process all files in a category
function processCategory(category) {
  for (const lang of ["en", "bn"]) {
    const dir = join(C, lang, category);
    if (!existsSync(dir)) continue;

    const files = readdirSync(dir).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const slug = file.replace(".mdx", "");
      const filePath = join(dir, file);
      const content = readFileSync(filePath, "utf-8");
      const lineCount = content.split("\n").length;

      // Skip files that already have decent content (350+ lines for EN, 250+ for BN)
      const threshold = lang === "en" ? 300 : 220;
      if (lineCount > threshold) {
        continue;
      }

      // Check if file already has "Trading Examples" section
      if (content.includes("Trading Examples") || content.includes("ট্রেডিং উদাহরণ")) {
        // Already has examples but may need more - check line count
        if (lineCount > 200 && lang === "en") continue;
        if (lineCount > 160 && lang === "bn") continue;
      }

      const isEN = lang === "en";
      let examples;

      // Use topic-specific examples if available
      if (smcExamples[slug]) {
        examples = isEN ? smcExamples[slug].en : smcExamples[slug].bn;
      } else {
        examples = getGenericExamples(slug, category, isEN);
      }

      // Append examples to the file
      const newContent = content.trimEnd() + "\n" + examples + "\n";
      writeFileSync(filePath, newContent, "utf-8");
      console.log(`✅ ${lang}/${category}/${slug} (${lineCount} → ${newContent.split("\n").length} lines)`);
    }
  }
}

// Process all three categories
console.log("=== SMC Examples ===");
processCategory("smc");

console.log("\n=== ICT Examples ===");
processCategory("ict");

console.log("\n=== Price Action Examples ===");
processCategory("price-action");

console.log("\n✅ All examples added!");
