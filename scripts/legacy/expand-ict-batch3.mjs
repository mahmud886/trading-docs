import { writeFileSync } from "fs";
import { join } from "path";
const C = join(process.cwd(), "content");
const w = (l, c, s, f, t) => {
  writeFileSync(
    join(C, l, c, s + ".mdx"),
    `---\ntitle: "${f.title}"\ndescription: "${f.description}"\nlevel: ${f.level}\norder: ${f.order}\nlastUpdated: "2026-05-11"\n---\n` +
      t,
    "utf-8",
  );
  console.log(`✅ ${l}/${c}/${s}`);
};

// ============ ICT - POWER OF 3 (EN) ============
w(
  "en",
  "ict",
  "power-of-3",
  {
    title: "Power of 3 (AMD) — Complete Guide",
    description:
      "Master ICT Power of 3: Accumulation, Manipulation, Distribution. Learn the three-phase institutional cycle that drives every market move and how to trade each phase.",
    level: "intermediate",
    order: 8,
  },
  `
## What is Power of 3?

Power of 3 (PO3) is one of ICT's most important concepts. It describes the **three-phase cycle** that institutions use to move price:

1. **Accumulation** — Institutions quietly build positions in a range
2. **Manipulation** — A false move traps retail traders (Judas Swing)
3. **Distribution** — The real move delivers price to the target

Every significant price move follows this 3-phase pattern, whether on a daily candle, a trading session, or a weekly swing.

<Callout type="info" title="The Universal Pattern">
PO3 applies to every timeframe: a single daily candle, a session, a weekly range, or a monthly swing all follow Accumulation → Manipulation → Distribution.
</Callout>

---

## The Three Phases Explained

### Phase 1: Accumulation

- Price consolidates in a **tight range**
- Low volatility, choppy price action
- Institutions are building their positions
- Typically occurs during Asian session (for daily PO3)
- **What to do:** Identify the range, mark the highs and lows

### Phase 2: Manipulation (Judas Swing)

- Price **breaks out of the range in the WRONG direction**
- This false breakout sweeps liquidity (stop hunts)
- Retail traders enter in the wrong direction
- Their stops become fuel for the real move
- **What to do:** DON'T trade the initial breakout — wait!

### Phase 3: Distribution

- Price reverses and moves aggressively in the **TRUE direction**
- This is the institutional move — the real delivery
- Price targets the opposing liquidity pool
- Maximum displacement and momentum
- **What to do:** Enter during distribution, ride the move

\`\`\`
    Daily PO3 Example (Bullish Day):
    
    Asian Session     London/NY Session
    (Accumulation)    (Manipulation → Distribution)
    
    ══════════╮
              │ ↓ False drop (Manipulation)
              ╰───╮
                  │
                  ╰───→ ↑↑↑ True move UP (Distribution)
                        ↑↑↑
                        ↑↑↑↑↑ → Targets BSL
\`\`\`

---

## PO3 on the Daily Candle

The daily candle perfectly illustrates PO3:

### Bullish Day:
1. **Open** = Start of accumulation
2. Price drops first (manipulation — takes the daily low)
3. Price reverses and rallies (distribution)
4. **Close** = Near the high

### Bearish Day:
1. **Open** = Start of accumulation
2. Price rises first (manipulation — takes the daily high)
3. Price reverses and drops (distribution)
4. **Close** = Near the low

<Callout type="tip" title="Key Insight">
On a bullish day, the LOW forms FIRST, then the HIGH. On a bearish day, the HIGH forms FIRST, then the LOW. This is the Judas Swing principle within PO3.
</Callout>

---

## PO3 on Sessions (Bangladesh Time)

### Bullish PO3 Daily Template:

| Phase | Session | Bangladesh Time | Action |
|-------|---------|----------------|--------|
| Accumulation | Asian | 12:00 AM - 9:00 AM | Range forms |
| Manipulation | London Open | 2:00 PM - 5:00 PM | False drop below Asian low |
| Distribution | NY Session | 7:30 PM - 12:00 AM | True rally to daily high |

### Bearish PO3 Daily Template:

| Phase | Session | Bangladesh Time | Action |
|-------|---------|----------------|--------|
| Accumulation | Asian | 12:00 AM - 9:00 AM | Range forms |
| Manipulation | London Open | 2:00 PM - 5:00 PM | False rally above Asian high |
| Distribution | NY Session | 7:30 PM - 12:00 AM | True drop to daily low |

---

## How to Trade PO3

### Step 1: Establish Daily Bias

Before the day begins, determine if it's a bullish or bearish day using:
- Higher timeframe structure (Daily/Weekly trend)
- Previous day's close and structure
- Key levels and liquidity targets
- Economic calendar events

### Step 2: Mark the Asian Range

During the Asian session (12:00 AM - 9:00 AM BD time):
- Mark the Asian session high and low
- This range = Accumulation phase
- Both sides of this range have liquidity

### Step 3: Identify the Manipulation

During London or early NY:
- Wait for price to break ONE side of the Asian range
- If your bias is bullish → expect price to break the Asian LOW first (manipulation)
- If your bias is bearish → expect price to break the Asian HIGH first

### Step 4: Enter During Distribution

After the manipulation completes:
- Look for MSS/CHOCH confirming the reversal from manipulation
- Enter at the OB or FVG created during the reversal
- Target the opposing side of the range and beyond

---

## Real Trading Examples

### Example 1: EUR/USD Bullish PO3

1. **Daily bias:** Bullish (Daily in uptrend, price at discount)
2. **Asian range** (12AM-9AM BD): 1.0850 - 1.0870
3. **Manipulation:** London opens, pushes below 1.0850 to 1.0838 (sweeps Asian low SSL)
4. **MSS:** 15M bullish CHOCH after the sweep
5. **Entry:** 1.0845 at bullish OB after MSS
6. **Stop:** 1.0830 (below the manipulation low)
7. **Distribution:** Price rallies through Asian high to 1.0920
8. **Result: +75 pips, 5R trade**

### Example 2: Gold Bearish PO3

1. **Daily bias:** Bearish (4H bearish MSS, weekly at premium)
2. **Asian range:** $2,395 - $2,410
3. **Manipulation:** London pushes above $2,410 to $2,418 (sweeps Asian high BSL)
4. **MSS:** 15M bearish CHOCH
5. **Entry:** $2,412 (bearish OB)
6. **Stop:** $2,422 | **Target:** $2,370
7. **Result: +42 points, 4.2R**

### Example 3: NAS100 PO3 (Full Session)

1. **Bias:** Bullish (HTF discount, daily bullish order flow)
2. **Asian range** (12AM-9AM BD): 18,200 - 18,280
3. **London manipulation:** Drops to 18,170 (below Asian low)
4. **NY distribution:** Rallies from OB at 18,180 to 18,450
5. **Entry:** 18,190 | **Stop:** 18,160 | **Target:** 18,400
6. **Result: +210 points, 7R**

---

## Common Mistakes

<Callout type="warning" title="Avoid These PO3 Errors">

**❌ Trading the manipulation as a breakout** — The initial break of the Asian range is usually manipulation, not the real move. Wait for the reversal.

**❌ No daily bias** — Without knowing if the day is bullish or bearish, you can't determine which side will be manipulated.

**❌ Entering too early** — Wait for the full manipulation + MSS confirmation. Don't anticipate.

**❌ Wrong session timing** — PO3 works best during London and NY Kill Zones. Don't trade it during quiet hours.

**❌ Ignoring the Asian range** — The Asian range is the accumulation. Always mark it before London opens.

</Callout>

---

## PO3 on Higher Timeframes

PO3 also applies to weekly and monthly candles:

### Weekly PO3:
- **Monday/Tuesday:** Accumulation (range)
- **Wednesday:** Manipulation (mid-week reversal)
- **Thursday/Friday:** Distribution (true weekly move)

### Monthly PO3:
- **Week 1:** Accumulation
- **Week 2:** Manipulation (false direction)
- **Weeks 3-4:** Distribution (true monthly delivery)

---

## FAQ

### How do I know which direction the manipulation will go?
Determine your daily bias first. If bullish, the manipulation goes DOWN (sells first). If bearish, manipulation goes UP (buys first). HTF analysis is key.

### Does PO3 work every day?
Not perfectly every day, but the concept applies to most trending days. Range/consolidation days may not show clear PO3 structure.

### Can I use PO3 on 1-minute charts?
PO3 works on all timeframes but is most reliable on 15M+ charts where institutional footprints are clearer.

---

## Summary

| Phase | Session (BD Time) | Action | What To Do |
|-------|------------------|--------|------------|
| **Accumulation** | Asian (12AM-9AM) | Range forms | Mark the range |
| **Manipulation** | London (2PM-5PM) | False breakout | Don't trade it! |
| **Distribution** | NY (7:30PM-12AM) | Real move | Enter with MSS/OB |

---

## Related Topics

- [AMD](/en/ict/amd) — Same concept, different name
- [Judas Swing](/en/ict/judas-swing) — The manipulation phase
- [Kill Zones](/en/ict/ict-kill-zones) — When to trade PO3
- [Daily Bias](/en/ict/daily-bias) — How to determine direction
- [Silver Bullet](/en/ict/silver-bullet) — Entry model within PO3
`,
);

// ============ ICT - POWER OF 3 (BN) ============
w(
  "bn",
  "ict",
  "power-of-3",
  {
    title: "Power of 3 (AMD) — সম্পূর্ণ গাইড",
    description:
      "ICT Power of 3 আয়ত্ত করুন: Accumulation, Manipulation, Distribution। প্রতিটি মার্কেট মুভ চালিত তিন-ফেজ ইনস্টিটিউশনাল সাইকেল এবং প্রতিটি ফেজে ট্রেড করা শিখুন।",
    level: "intermediate",
    order: 8,
  },
  `
## Power of 3 কী?

Power of 3 (PO3) হলো ICT এর সবচেয়ে গুরুত্বপূর্ণ কনসেপ্টগুলোর একটি। এটি **তিন-ফেজ সাইকেল** বর্ণনা করে যা ইনস্টিটিউশন প্রাইস মুভ করতে ব্যবহার করে:

1. **Accumulation** — ইনস্টিটিউশন রেঞ্জে নীরবে পজিশন তৈরি করে
2. **Manipulation** — ফলস মুভ রিটেইল ট্রেডারদের ট্র্যাপ করে (Judas Swing)
3. **Distribution** — আসল মুভ প্রাইসকে টার্গেটে ডেলিভার করে

প্রতিটি গুরুত্বপূর্ণ প্রাইস মুভ এই ৩-ফেজ প্যাটার্ন অনুসরণ করে।

<Callout type="info" title="সার্বজনীন প্যাটার্ন">
PO3 প্রতিটি টাইমফ্রেমে প্রযোজ্য: একটি ডেইলি ক্যান্ডেল, একটি সেশন, সাপ্তাহিক রেঞ্জ বা মাসিক সুইং সবই Accumulation → Manipulation → Distribution অনুসরণ করে।
</Callout>

---

## তিনটি ফেজ

### ফেজ ১: Accumulation
- প্রাইস **সরু রেঞ্জে** কনসলিডেট করে
- কম ভোলাটিলিটি, চপি প্রাইস অ্যাকশন  
- এশিয়ান সেশনে ঘটে (ডেইলি PO3 এর জন্য)
- **কী করবেন:** রেঞ্জ চিহ্নিত করুন, হাই ও লো মার্ক করুন

### ফেজ ২: Manipulation (Judas Swing)
- প্রাইস **ভুল দিকে রেঞ্জের বাইরে ব্রেক** করে
- এই ফলস ব্রেকআউট লিকুইডিটি সুইপ করে
- রিটেইল ভুল দিকে এন্ট্রি নেয়
- **কী করবেন:** প্রাথমিক ব্রেকআউট ট্রেড করবেন না — অপেক্ষা করুন!

### ফেজ ৩: Distribution
- প্রাইস রিভার্স করে **সত্যিকার দিকে** আগ্রাসীভাবে চলে
- এটি ইনস্টিটিউশনাল মুভ — আসল ডেলিভারি
- **কী করবেন:** Distribution এর সময় এন্ট্রি নিন

---

## সেশনে PO3 (বাংলাদেশ সময়)

### বুলিশ PO3 টেমপ্লেট:

| ফেজ | সেশন | বাংলাদেশ সময় | অ্যাকশন |
|------|-------|-------------|---------|
| Accumulation | এশিয়ান | রাত ১২:০০ - সকাল ৯:০০ | রেঞ্জ তৈরি |
| Manipulation | লন্ডন ওপেন | দুপুর ২:০০ - বিকেল ৫:০০ | এশিয়ান লো এর নিচে ফলস ড্রপ |
| Distribution | NY সেশন | রাত ৭:৩০ - ১২:০০ | ডেইলি হাই এর দিকে সত্যিকার র‍্যালি |

### বিয়ারিশ PO3 টেমপ্লেট:

| ফেজ | সেশন | বাংলাদেশ সময় | অ্যাকশন |
|------|-------|-------------|---------|
| Accumulation | এশিয়ান | রাত ১২:০০ - সকাল ৯:০০ | রেঞ্জ তৈরি |
| Manipulation | লন্ডন ওপেন | দুপুর ২:০০ - বিকেল ৫:০০ | এশিয়ান হাই এর উপরে ফলস র‍্যালি |
| Distribution | NY সেশন | রাত ৭:৩০ - ১২:০০ | ডেইলি লো এর দিকে সত্যিকার ড্রপ |

---

## PO3 ট্রেড করার পদ্ধতি

### ধাপ ১: ডেইলি বায়াস নির্ধারণ
- হায়ার টাইমফ্রেম স্ট্রাকচার (Daily/Weekly ট্রেন্ড)
- আগের দিনের ক্লোজ ও স্ট্রাকচার
- মূল লেভেল ও লিকুইডিটি টার্গেট

### ধাপ ২: এশিয়ান রেঞ্জ মার্ক
- এশিয়ান সেশনে (রাত ১২:০০ - সকাল ৯:০০ BD) হাই ও লো মার্ক
- এই রেঞ্জ = Accumulation ফেজ

### ধাপ ৩: Manipulation চিহ্নিত
- লন্ডনে এশিয়ান রেঞ্জের এক দিক ব্রেক হওয়ার অপেক্ষা
- বুলিশ বায়াস → এশিয়ান লো প্রথমে ব্রেক হবে
- বিয়ারিশ বায়াস → এশিয়ান হাই প্রথমে ব্রেক হবে

### ধাপ ৪: Distribution এ এন্ট্রি
- ম্যানিপুলেশন থেকে রিভার্সাল কনফার্ম করে MSS/CHOCH খুঁজুন
- OB বা FVG তে এন্ট্রি নিন
- রেঞ্জের বিপরীত দিক ও তার পরে টার্গেট করুন

---

## বাস্তব উদাহরণ

### EUR/USD বুলিশ PO3
1. **বায়াস:** বুলিশ (ডেইলি আপট্রেন্ড, ডিসকাউন্টে)
2. **এশিয়ান রেঞ্জ** (১২AM-৯AM BD): 1.0850 - 1.0870
3. **Manipulation:** লন্ডন 1.0850 এর নিচে 1.0838 পর্যন্ত পুশ (SSL সুইপ)
4. **MSS:** 15M বুলিশ CHOCH
5. **এন্ট্রি:** 1.0845 | **স্টপ:** 1.0830 | **টার্গেট:** 1.0920
6. **ফলাফল: +75 পিপস, 5R ট্রেড**

### গোল্ড বিয়ারিশ PO3
1. **বায়াস:** বিয়ারিশ (4H বিয়ারিশ MSS, প্রিমিয়ামে)
2. **এশিয়ান রেঞ্জ:** $2,395 - $2,410
3. **Manipulation:** লন্ডন $2,418 পর্যন্ত পুশ (BSL সুইপ)
4. **MSS:** 15M বিয়ারিশ CHOCH
5. **এন্ট্রি:** $2,412 | **স্টপ:** $2,422 | **টার্গেট:** $2,370
6. **ফলাফল: +42 পয়েন্ট, 4.2R**

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ ম্যানিপুলেশনকে ব্রেকআউট মনে করে ট্রেড** — এশিয়ান রেঞ্জের প্রাথমিক ব্রেক সাধারণত ম্যানিপুলেশন।

**❌ ডেইলি বায়াস ছাড়া ট্রেড** — কোন দিক ম্যানিপুলেট হবে জানতে বায়াস দরকার।

**❌ খুব তাড়াতাড়ি এন্ট্রি** — সম্পূর্ণ ম্যানিপুলেশন + MSS কনফার্মেশনের অপেক্ষা করুন।

**❌ এশিয়ান রেঞ্জ উপেক্ষা** — লন্ডন ওপেনের আগে সর্বদা মার্ক করুন।

</Callout>

---

## উচ্চ টাইমফ্রেমে PO3

### সাপ্তাহিক PO3:
- **সোম/মঙ্গল:** Accumulation (রেঞ্জ)
- **বুধবার:** Manipulation (মিড-উইক রিভার্সাল)
- **বৃহঃ/শুক্র:** Distribution (সত্যিকার সাপ্তাহিক মুভ)

---

## সারসংক্ষেপ

| ফেজ | BD সময় | অ্যাকশন | কী করবেন |
|------|--------|---------|----------|
| **Accumulation** | রাত ১২-সকাল ৯ | রেঞ্জ তৈরি | রেঞ্জ মার্ক |
| **Manipulation** | দুপুর ২-বিকেল ৫ | ফলস ব্রেকআউট | ট্রেড করবেন না! |
| **Distribution** | রাত ৭:৩০-১২ | আসল মুভ | MSS/OB তে এন্ট্রি |

---

## সম্পর্কিত টপিক

- [AMD](/bn/ict/amd) — একই কনসেপ্ট, ভিন্ন নাম
- [Judas Swing](/bn/ict/judas-swing) — ম্যানিপুলেশন ফেজ
- [Kill Zones](/bn/ict/ict-kill-zones) — PO3 কখন ট্রেড করবেন
- [Daily Bias](/bn/ict/daily-bias) — দিক নির্ধারণ
`,
);

// ============ ICT - JUDAS SWING (EN) ============
w(
  "en",
  "ict",
  "judas-swing",
  {
    title: "Judas Swing — Complete Guide",
    description:
      "Master the ICT Judas Swing concept. Learn how to identify the false initial move that traps retail traders before the real institutional move begins.",
    level: "intermediate",
    order: 9,
  },
  `
## What is a Judas Swing?

The Judas Swing is the **false initial move** at the start of a trading session that goes in the opposite direction of the true daily move. Named after the biblical betrayal, this move "betrays" traders who follow it, trapping them on the wrong side.

It's the **Manipulation phase** of Power of 3 — the deceptive move that sweeps liquidity before the real institutional move begins.

<Callout type="info" title="The Betrayal Move">
Just as Judas betrayed with a kiss (appearing friendly), the Judas Swing appears to be a genuine breakout but is actually a trap. The initial direction is a lie — the true move comes after.
</Callout>

---

## How the Judas Swing Works

### On a Bullish Day:

1. **Session opens** (London or NY)
2. Price initially **drops** (Judas Swing DOWN)
3. This move sweeps sell-side liquidity below the Asian range
4. Retail traders see "bearish momentum" and sell
5. Price **reverses aggressively upward** (true move)
6. Retail shorts get stopped out, fueling the rally
7. Price targets buy-side liquidity above

### On a Bearish Day:

1. **Session opens**
2. Price initially **rallies** (Judas Swing UP)
3. This sweeps buy-side liquidity above the Asian range
4. Retail traders buy the "bullish breakout"
5. Price **reverses aggressively downward** (true move)
6. Retail longs get stopped out, fueling the drop
7. Price targets sell-side liquidity below

---

## Identifying the Judas Swing

### Key Characteristics:

| Feature | Description |
|---------|-------------|
| **Timing** | First 30-90 minutes of London or NY session |
| **Direction** | Opposite to the true daily move |
| **Target** | Takes out Asian range high OR low |
| **Structure** | Creates a false BOS then reverses |
| **Confirmation** | MSS/CHOCH after the sweep |

### Bangladesh Time Schedule:

| Session | Judas Swing Window (BD Time) |
|---------|---------------------------|
| **London Judas** | 2:00 PM - 4:00 PM |
| **NY Judas** | 7:30 PM - 9:30 PM |

---

## Trading the Judas Swing

### Step-by-Step:

1. **Determine daily bias** (bullish or bearish) using HTF analysis
2. **Mark the Asian range** (12AM - 9AM BD time)
3. **Wait for London/NY open** — watch for the initial move
4. If bias is bullish → expect a **down move first** (Judas Swing)
5. Let the Judas Swing **sweep the Asian low** (take SSL)
6. Wait for **MSS/CHOCH** confirming the reversal
7. Enter at the **OB or FVG** created during the reversal
8. Stop: Below the Judas Swing low
9. Target: Asian high and beyond (BSL above)

---

## Real Trading Examples

### Example 1: EUR/USD London Judas

1. **Bias:** Bullish (Daily demand at current levels)
2. **Asian range** (12AM-9AM BD): 1.0880 - 1.0900
3. **London opens** (2:00 PM BD): Price immediately drops
4. **Judas Swing:** Drops below 1.0880 to 1.0868 (sweeps Asian low)
5. **MSS:** At 2:45 PM BD, 5M shows bullish CHOCH with displacement
6. **Entry:** 1.0875 (OB from the CHOCH)
7. **Stop:** 1.0862 (below Judas low)
8. **Target:** 1.0930 (BSL above previous highs)
9. **Result: +55 pips, 4.2R**

### Example 2: Gold NY Judas

1. **Bias:** Bearish (4H at premium, weekly supply above)
2. **Heading into NY:** Price ranging around $2,400
3. **NY opens** (7:30 PM BD): Gold pushes up to $2,412
4. **Judas Swing UP** sweeps the intraday highs
5. **MSS:** 15M bearish CHOCH at 8:15 PM BD
6. **Entry:** $2,408 | **Stop:** $2,415 | **Target:** $2,375
7. **Result: +33 points, 4.7R**

---

## Common Mistakes

<Callout type="warning" title="Avoid These Errors">

**❌ Chasing the Judas move** — The initial breakout is the TRAP. Don't enter in the Judas direction.

**❌ No daily bias** — Without bias, every breakout looks real. Determine direction BEFORE the session.

**❌ Trading during Asian session** — The Judas Swing occurs during London/NY, not Asian. Asian = accumulation.

**❌ Entering before MSS** — Wait for structural confirmation after the sweep. Don't guess the reversal.

</Callout>

---

## Summary

| Concept | Key Points |
|---------|-----------|
| **Definition** | False initial session move, opposite to the true direction |
| **On Bullish Days** | Price drops first (sweeps lows), then rallies |
| **On Bearish Days** | Price rallies first (sweeps highs), then drops |
| **Timing** | First 30-90 min of London or NY |
| **Key** | Determine bias BEFORE the session |
| **Entry** | After MSS/CHOCH confirms the reversal |

---

## Related Topics

- [Power of 3](/en/ict/power-of-3) — Judas Swing is the Manipulation phase
- [AMD](/en/ict/amd) — Same cycle, different name
- [ICT Kill Zones](/en/ict/ict-kill-zones) — When Judas Swings occur
- [Liquidity Sweep](/en/ict/liquidity-sweep) — What the Judas Swing creates
`,
);

// ============ JUDAS SWING BN ============
w(
  "bn",
  "ict",
  "judas-swing",
  {
    title: "Judas Swing — সম্পূর্ণ গাইড",
    description:
      "ICT Judas Swing কনসেপ্ট আয়ত্ত করুন। আসল ইনস্টিটিউশনাল মুভের আগে রিটেইল ট্রেডারদের ট্র্যাপ করা ফলস মুভ চিহ্নিত করা শিখুন।",
    level: "intermediate",
    order: 9,
  },
  `
## Judas Swing কী?

Judas Swing হলো ট্রেডিং সেশনের শুরুতে **ফলস প্রাথমিক মুভ** যা দিনের সত্যিকার মুভের বিপরীত দিকে যায়। বাইবেলের বিশ্বাসঘাতকতার নামে নামকরণ, এই মুভ অনুসরণকারী ট্রেডারদের "বিশ্বাসঘাতকতা" করে।

এটি Power of 3 এর **Manipulation ফেজ** — আসল ইনস্টিটিউশনাল মুভের আগে লিকুইডিটি সুইপ করার প্রতারণামূলক মুভ।

<Callout type="info" title="বিশ্বাসঘাতকতার মুভ">
Judas Swing একটি আসল ব্রেকআউটের মতো দেখায় কিন্তু আসলে একটি ট্র্যাপ। প্রাথমিক দিক মিথ্যা — সত্যিকার মুভ পরে আসে।
</Callout>

---

## Judas Swing কীভাবে কাজ করে

### বুলিশ দিনে:
1. সেশন ওপেন হয় (লন্ডন বা NY)
2. প্রাইস প্রথমে **নামে** (Judas Swing নিচে)
3. এশিয়ান রেঞ্জের নিচে SSL সুইপ করে
4. রিটেইল "বিয়ারিশ মোমেন্টাম" দেখে সেল করে
5. প্রাইস **আগ্রাসীভাবে উপরে রিভার্স** করে
6. রিটেইল শর্ট স্টপ আউট হয়ে র‍্যালির জ্বালানি হয়

### বিয়ারিশ দিনে:
1. সেশন ওপেন হয়
2. প্রাইস প্রথমে **ওঠে** (Judas Swing উপরে)
3. এশিয়ান রেঞ্জের উপরে BSL সুইপ করে
4. রিটেইল "বুলিশ ব্রেকআউট" দেখে বাই করে
5. প্রাইস **আগ্রাসীভাবে নিচে রিভার্স** করে

---

## বাংলাদেশ সময়ে Judas Swing

| সেশন | Judas Swing উইন্ডো (BD সময়) |
|------|---------------------------|
| **লন্ডন Judas** | দুপুর ২:০০ - ৪:০০ |
| **NY Judas** | রাত ৭:৩০ - ৯:৩০ |

---

## ট্রেডিং পদ্ধতি

1. HTF অ্যানালাইসিস দিয়ে **ডেইলি বায়াস** নির্ধারণ করুন
2. **এশিয়ান রেঞ্জ** মার্ক করুন (রাত ১২ - সকাল ৯ BD)
3. লন্ডন/NY ওপেনে প্রাথমিক মুভ দেখুন
4. বুলিশ বায়াস → প্রথমে **নিচে নামবে** (Judas Swing)
5. Judas Swing **এশিয়ান লো সুইপ** করার অপেক্ষা
6. **MSS/CHOCH** কনফার্মেশনের অপেক্ষা
7. রিভার্সালের সময় তৈরি **OB বা FVG** তে এন্ট্রি
8. স্টপ: Judas Swing লো এর নিচে | টার্গেট: উপরে BSL

---

## বাস্তব উদাহরণ

### EUR/USD লন্ডন Judas

1. **বায়াস:** বুলিশ
2. **এশিয়ান রেঞ্জ** (12AM-9AM BD): 1.0880 - 1.0900
3. **লন্ডন** (2:00 PM BD): প্রাইস নামে
4. **Judas Swing:** 1.0868 পর্যন্ত নামে (এশিয়ান লো সুইপ)
5. **MSS:** বিকেল ২:৪৫ এ 5M বুলিশ CHOCH
6. **এন্ট্রি:** 1.0875 | **স্টপ:** 1.0862 | **টার্গেট:** 1.0930
7. **ফলাফল: +55 পিপস, 4.2R**

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ Judas মুভ তাড়া করা** — প্রাথমিক ব্রেকআউট ট্র্যাপ। Judas দিকে এন্ট্রি নেবেন না।

**❌ ডেইলি বায়াস ছাড়া** — বায়াস ছাড়া প্রতিটি ব্রেকআউট আসল মনে হবে।

**❌ MSS এর আগে এন্ট্রি** — সুইপের পরে স্ট্রাকচারাল কনফার্মেশনের অপেক্ষা করুন।

</Callout>

---

## সারসংক্ষেপ

| কনসেপ্ট | মূল পয়েন্ট |
|---------|-----------|
| **সংজ্ঞা** | সত্যিকার দিকের বিপরীতে ফলস সেশন মুভ |
| **বুলিশ দিনে** | প্রথমে নামে (লো সুইপ), তারপর র‍্যালি |
| **বিয়ারিশ দিনে** | প্রথমে ওঠে (হাই সুইপ), তারপর ড্রপ |
| **টাইমিং** | লন্ডন/NY এর প্রথম ৩০-৯০ মিনিট |
| **এন্ট্রি** | MSS/CHOCH রিভার্সাল কনফার্মের পরে |

---

## সম্পর্কিত টপিক

- [Power of 3](/bn/ict/power-of-3) — Judas Swing হলো Manipulation ফেজ
- [ICT Kill Zones](/bn/ict/ict-kill-zones) — Judas Swing কখন ঘটে
- [Liquidity Sweep](/bn/ict/liquidity-sweep) — Judas Swing যা তৈরি করে
`,
);

// ============ REMAINING ICT TOPICS ============
const ictTopics = [
  {
    slug: "introduction",
    en: {
      title: "Introduction to ICT Methodology",
      desc: "Complete introduction to ICT (Inner Circle Trader) methodology. Learn the foundation of institutional trading concepts and how ICT approaches the markets.",
      level: "beginner",
      order: 1,
    },
    bn: {
      title: "ICT মেথডলজি পরিচিতি",
      desc: "ICT মেথডলজির সম্পূর্ণ পরিচিতি। ইনস্টিটিউশনাল ট্রেডিং কনসেপ্টের ভিত্তি এবং ICT কীভাবে মার্কেট দেখে শিখুন।",
      level: "beginner",
      order: 1,
    },
  },
  {
    slug: "amd",
    en: {
      title: "AMD (Accumulation, Manipulation, Distribution)",
      desc: "Master AMD cycle - the institutional 3-phase market pattern. Learn to identify each phase and position yourself with smart money.",
      level: "intermediate",
      order: 2,
    },
    bn: {
      title: "AMD (Accumulation, Manipulation, Distribution)",
      desc: "AMD সাইকেল আয়ত্ত করুন — ইনস্টিটিউশনাল ৩-ফেজ মার্কেট প্যাটার্ন।",
      level: "intermediate",
      order: 2,
    },
  },
  {
    slug: "liquidity",
    en: {
      title: "ICT Liquidity Concepts",
      desc: "Master ICT's approach to liquidity. Learn buy-side and sell-side liquidity identification, liquidity pools, and how institutions use liquidity for entries.",
      level: "beginner",
      order: 3,
    },
    bn: {
      title: "ICT লিকুইডিটি কনসেপ্ট",
      desc: "ICT এর লিকুইডিটি অ্যাপ্রোচ আয়ত্ত করুন। BSL, SSL চিহ্নিতকরণ এবং ইনস্টিটিউশন কীভাবে লিকুইডিটি ব্যবহার করে শিখুন।",
      level: "beginner",
      order: 3,
    },
  },
  {
    slug: "liquidity-sweep",
    en: {
      title: "ICT Liquidity Sweep",
      desc: "Master liquidity sweeps in ICT methodology. Learn to identify and trade sweeps of key liquidity levels with institutional precision.",
      level: "intermediate",
      order: 4,
    },
    bn: {
      title: "ICT লিকুইডিটি সুইপ",
      desc: "ICT মেথডলজিতে liquidity sweep আয়ত্ত করুন। মূল লিকুইডিটি লেভেলের সুইপ চিহ্নিত ও ট্রেড করা শিখুন।",
      level: "intermediate",
      order: 4,
    },
  },
  {
    slug: "mss",
    en: {
      title: "ICT Market Structure Shift (MSS)",
      desc: "Master MSS in ICT methodology. The definitive guide to identifying institutional structure shifts and timing your entries perfectly.",
      level: "intermediate",
      order: 5,
    },
    bn: {
      title: "ICT Market Structure Shift (MSS)",
      desc: "ICT মেথডলজিতে MSS আয়ত্ত করুন। ইনস্টিটিউশনাল স্ট্রাকচার শিফট চিহ্নিত করা এবং এন্ট্রি টাইমিং শিখুন।",
      level: "intermediate",
      order: 5,
    },
  },
  {
    slug: "fvg",
    en: {
      title: "ICT Fair Value Gap (FVG)",
      desc: "Master FVG in ICT methodology. Learn ICT's specific approach to Fair Value Gaps including consequent encroachment and trading the gap.",
      level: "intermediate",
      order: 6,
    },
    bn: {
      title: "ICT Fair Value Gap (FVG)",
      desc: "ICT মেথডলজিতে FVG আয়ত্ত করুন। ICT এর নির্দিষ্ট FVG অ্যাপ্রোচ শিখুন।",
      level: "intermediate",
      order: 6,
    },
  },
  {
    slug: "ote",
    en: {
      title: "Optimal Trade Entry (OTE)",
      desc: "Master ICT OTE - the sweet spot for entries. Learn to use Fibonacci retracement with ICT concepts for optimal entry positioning at the 62-79% zone.",
      level: "intermediate",
      order: 7,
    },
    bn: {
      title: "Optimal Trade Entry (OTE)",
      desc: "ICT OTE আয়ত্ত করুন — এন্ট্রির সুইট স্পট। ফিবোনাচি রিট্রেসমেন্ট ও ICT কনসেপ্ট মিলিয়ে অপটিমাল এন্ট্রি শিখুন।",
      level: "intermediate",
      order: 7,
    },
  },
  {
    slug: "ict-kill-zones",
    en: {
      title: "ICT Kill Zones — Complete Guide",
      desc: "Master ICT Kill Zones with Bangladesh time. Learn the specific time windows when institutional activity peaks and the highest-probability setups form.",
      level: "beginner",
      order: 10,
    },
    bn: {
      title: "ICT Kill Zones — সম্পূর্ণ গাইড",
      desc: "বাংলাদেশ সময় সহ ICT Kill Zone আয়ত্ত করুন। কোন সময়ে ইনস্টিটিউশনাল কার্যকলাপ সর্বোচ্চ হয় শিখুন।",
      level: "beginner",
      order: 10,
    },
  },
  {
    slug: "pd-arrays",
    en: {
      title: "PD Arrays — Complete Guide",
      desc: "Master ICT PD Arrays (Premium/Discount Arrays). Learn all institutional reference points and how to rank them for trade entries.",
      level: "advanced",
      order: 11,
    },
    bn: {
      title: "PD Arrays — সম্পূর্ণ গাইড",
      desc: "ICT PD Arrays আয়ত্ত করুন। সব ইনস্টিটিউশনাল রেফারেন্স পয়েন্ট এবং ট্রেড এন্ট্রির জন্য র‍্যাঙ্কিং শিখুন।",
      level: "advanced",
      order: 11,
    },
  },
  {
    slug: "daily-bias",
    en: {
      title: "Daily Bias — Complete Guide",
      desc: "Master ICT Daily Bias determination. Learn to identify if today is a bullish or bearish day BEFORE the market opens using institutional logic.",
      level: "intermediate",
      order: 12,
    },
    bn: {
      title: "Daily Bias — সম্পূর্ণ গাইড",
      desc: "ICT Daily Bias নির্ধারণ আয়ত্ত করুন। মার্কেট ওপেনের আগেই আজ বুলিশ না বিয়ারিশ দিন তা চিহ্নিত করা শিখুন।",
      level: "intermediate",
      order: 12,
    },
  },
  {
    slug: "silver-bullet",
    en: {
      title: "Silver Bullet — Complete Guide",
      desc: "Master ICT Silver Bullet entry model. Learn the specific time-based entry windows that offer the highest probability setups within Kill Zones.",
      level: "advanced",
      order: 13,
    },
    bn: {
      title: "Silver Bullet — সম্পূর্ণ গাইড",
      desc: "ICT Silver Bullet এন্ট্রি মডেল আয়ত্ত করুন। Kill Zone এর মধ্যে সর্বোচ্চ প্রোবাবিলিটি সেটআপের সময়-ভিত্তিক এন্ট্রি উইন্ডো শিখুন।",
      level: "advanced",
      order: 13,
    },
  },
  {
    slug: "turtle-soup",
    en: {
      title: "Turtle Soup — Complete Guide",
      desc: "Master ICT Turtle Soup pattern. Learn how to trade false breakouts of key highs and lows using the classic Turtle Soup reversal pattern.",
      level: "intermediate",
      order: 14,
    },
    bn: {
      title: "Turtle Soup — সম্পূর্ণ গাইড",
      desc: "ICT Turtle Soup প্যাটার্ন আয়ত্ত করুন। কী হাই ও লো এর ফলস ব্রেকআউট ট্রেড করা শিখুন।",
      level: "intermediate",
      order: 14,
    },
  },
  {
    slug: "market-maker-models",
    en: {
      title: "Market Maker Models — Complete Guide",
      desc: "Master ICT Market Maker Models. Learn how market makers manipulate price through buy and sell models to capture liquidity.",
      level: "advanced",
      order: 15,
    },
    bn: {
      title: "Market Maker Models — সম্পূর্ণ গাইড",
      desc: "ICT Market Maker Models আয়ত্ত করুন। মার্কেট মেকাররা কীভাবে লিকুইডিটি ক্যাপচারের জন্য প্রাইস ম্যানিপুলেট করে শিখুন।",
      level: "advanced",
      order: 15,
    },
  },
  {
    slug: "unicorn-model",
    en: {
      title: "Unicorn Model — Complete Guide",
      desc: "Master the ICT Unicorn Model. An advanced entry model combining Breaker Block + FVG + OB for the highest probability entries in the market.",
      level: "advanced",
      order: 16,
    },
    bn: {
      title: "Unicorn Model — সম্পূর্ণ গাইড",
      desc: "ICT Unicorn Model আয়ত্ত করুন। Breaker Block + FVG + OB মিলিয়ে সর্বোচ্চ প্রোবাবিলিটি এন্ট্রি মডেল শিখুন।",
      level: "advanced",
      order: 16,
    },
  },
  {
    slug: "venom-model",
    en: {
      title: "Venom Model — Complete Guide",
      desc: "Master the ICT Venom Model. An advanced execution concept for precision entries using liquidity engineering and manipulation patterns.",
      level: "advanced",
      order: 17,
    },
    bn: {
      title: "Venom Model — সম্পূর্ণ গাইড",
      desc: "ICT Venom Model আয়ত্ত করুন। লিকুইডিটি ইঞ্জিনিয়ারিং ও ম্যানিপুলেশন প্যাটার্ন ব্যবহার করে প্রিসিশন এন্ট্রি শিখুন।",
      level: "advanced",
      order: 17,
    },
  },
  {
    slug: "london-open",
    en: {
      title: "London Open — Complete Guide",
      desc: "Master ICT London Open trading. Learn the most volatile market open with institutional manipulation patterns and high-probability setups.",
      level: "intermediate",
      order: 18,
    },
    bn: {
      title: "London Open — সম্পূর্ণ গাইড",
      desc: "ICT London Open ট্রেডিং আয়ত্ত করুন। সবচেয়ে ভোলাটাইল মার্কেট ওপেনের ম্যানিপুলেশন প্যাটার্ন ও সেটআপ শিখুন।",
      level: "intermediate",
      order: 18,
    },
  },
  {
    slug: "new-york-open",
    en: {
      title: "New York Open — Complete Guide",
      desc: "Master ICT New York Open trading. Learn NY session dynamics, reversal patterns, and how to trade the most liquid session in forex.",
      level: "intermediate",
      order: 19,
    },
    bn: {
      title: "New York Open — সম্পূর্ণ গাইড",
      desc: "ICT New York Open ট্রেডিং আয়ত্ত করুন। NY সেশন ডায়নামিক্স, রিভার্সাল প্যাটার্ন শিখুন।",
      level: "intermediate",
      order: 19,
    },
  },
  {
    slug: "dealing-range",
    en: {
      title: "Dealing Range — Complete Guide",
      desc: "Master ICT Dealing Range concept. Learn to identify the institutional dealing range and how price delivers within defined boundaries.",
      level: "advanced",
      order: 20,
    },
    bn: {
      title: "Dealing Range — সম্পূর্ণ গাইড",
      desc: "ICT Dealing Range কনসেপ্ট আয়ত্ত করুন। ইনস্টিটিউশনাল ডিলিং রেঞ্জ চিহ্নিত করা শিখুন।",
      level: "advanced",
      order: 20,
    },
  },
  {
    slug: "time-and-price-theory",
    en: {
      title: "Time & Price Theory — Complete Guide",
      desc: "Master ICT Time and Price Theory. Understand how time and price intersect and why certain times produce predictable price behavior.",
      level: "advanced",
      order: 21,
    },
    bn: {
      title: "Time ও Price Theory — সম্পূর্ণ গাইড",
      desc: "ICT Time ও Price Theory আয়ত্ত করুন। কীভাবে সময় ও প্রাইস মিলিত হয় এবং নির্দিষ্ট সময়ে কেন অনুমানযোগ্য আচরণ হয় শিখুন।",
      level: "advanced",
      order: 21,
    },
  },
  {
    slug: "weekly-profiles",
    en: {
      title: "Weekly Profiles — Complete Guide",
      desc: "Master ICT Weekly Profiles. Learn how each day of the week has a specific role in institutional price delivery and weekly range formation.",
      level: "intermediate",
      order: 22,
    },
    bn: {
      title: "Weekly Profiles — সম্পূর্ণ গাইড",
      desc: "ICT Weekly Profiles আয়ত্ত করুন। সপ্তাহের প্রতিটি দিনের ইনস্টিটিউশনাল প্রাইস ডেলিভারিতে নির্দিষ্ট ভূমিকা শিখুন।",
      level: "intermediate",
      order: 22,
    },
  },
  {
    slug: "monthly-profiles",
    en: {
      title: "Monthly Profiles — Complete Guide",
      desc: "Master ICT Monthly Profiles. Learn how institutional price delivery follows a monthly cycle and how to position for monthly ranges.",
      level: "advanced",
      order: 23,
    },
    bn: {
      title: "Monthly Profiles — সম্পূর্ণ গাইড",
      desc: "ICT Monthly Profiles আয়ত্ত করুন। ইনস্টিটিউশনাল প্রাইস ডেলিভারি মাসিক সাইকেল কীভাবে অনুসরণ করে শিখুন।",
      level: "advanced",
      order: 23,
    },
  },
  {
    slug: "2022-mentorship-concepts",
    en: {
      title: "2022 Mentorship Concepts — Complete Guide",
      desc: "Master ICT's 2022 Mentorship concepts. Updated ICT framework with refined models including algorithmic theory and new execution models.",
      level: "advanced",
      order: 24,
    },
    bn: {
      title: "2022 Mentorship Concepts — সম্পূর্ণ গাইড",
      desc: "ICT এর 2022 Mentorship কনসেপ্ট আয়ত্ত করুন। অ্যালগরিদমিক থিওরি ও নতুন এক্সিকিউশন মডেল সহ আপডেটেড ফ্রেমওয়ার্ক শিখুন।",
      level: "advanced",
      order: 24,
    },
  },
  {
    slug: "advanced-ict-models",
    en: {
      title: "Advanced ICT Models — Complete Guide",
      desc: "Master advanced ICT trading models. Combine multiple concepts into sophisticated execution frameworks for professional-level trading.",
      level: "advanced",
      order: 25,
    },
    bn: {
      title: "Advanced ICT Models — সম্পূর্ণ গাইড",
      desc: "অ্যাডভান্সড ICT ট্রেডিং মডেল আয়ত্ত করুন। প্রফেশনাল-লেভেল ট্রেডিংয়ের জন্য একাধিক কনসেপ্ট মিলিয়ে সফিস্টিকেটেড ফ্রেমওয়ার্ক শিখুন।",
      level: "advanced",
      order: 25,
    },
  },
  {
    slug: "algorithmic-delivery-concepts",
    en: {
      title: "Algorithmic Delivery — Complete Guide",
      desc: "Master ICT's Algorithmic Delivery theory. Understand how the market-making algorithm delivers price to specific levels using time-based protocols.",
      level: "advanced",
      order: 26,
    },
    bn: {
      title: "Algorithmic Delivery — সম্পূর্ণ গাইড",
      desc: "ICT এর Algorithmic Delivery থিওরি আয়ত্ত করুন। মার্কেট-মেকিং অ্যালগরিদম কীভাবে সময়-ভিত্তিক প্রোটোকল ব্যবহার করে প্রাইস ডেলিভার করে শিখুন।",
      level: "advanced",
      order: 26,
    },
  },
];

function genICTContent(slug, titleEn, isEN) {
  if (isEN) {
    return `
## What is ${titleEn.replace(" — Complete Guide", "")}?

${titleEn.replace(" — Complete Guide", "")} is a core concept in ICT (Inner Circle Trader) methodology. ICT methodology focuses on understanding how the interbank market and market-making algorithms operate, enabling traders to align with institutional order flow rather than trading against it.

<Callout type="info" title="ICT Methodology">
This concept is part of ICT's comprehensive trading framework. Each concept works synergistically with others — mastering them individually and understanding their interconnections is essential for developing a complete ICT trading methodology.
</Callout>

---

## Why ${titleEn.replace(" — Complete Guide", "")} Matters

Understanding this concept provides several critical advantages:

1. **Algorithmic Understanding** — Reveals how the market-making algorithm operates
2. **Precision Entries** — Enables institutional-grade entry timing
3. **Time-Based Trading** — Aligns trades with specific high-probability time windows
4. **Liquidity Logic** — Shows where and why liquidity is targeted
5. **Professional Edge** — Combines with PO3, OTE, and other ICT concepts for systematic trading

---

## Core Principles

### Principle 1: Price Delivers to Liquidity
The market-making algorithm's primary function is to deliver price to areas of resting liquidity. Every move has a liquidity objective.

### Principle 2: Time is the Framework
ICT emphasizes that time determines WHEN price will move. Kill Zones, session opens, and specific hours create predictable behavior.

### Principle 3: Manipulation Precedes Distribution
Before any significant move, there's a manipulation phase that traps retail traders and creates the counter-party liquidity needed for the institutional move.

---

## How to Apply on Charts

### Step-by-Step Process:

1. **Establish HTF bias** — What does the Daily/4H structure suggest?
2. **Identify liquidity targets** — Where are the obvious stops (BSL/SSL)?
3. **Apply time context** — Is it a Kill Zone? Which session?
4. **Look for PO3** — Has accumulation and manipulation occurred?
5. **Confirm with structure** — MSS/CHOCH + displacement present?
6. **Find the entry** — OB, FVG, or OTE zone within the PO3 framework

---

## Trading Strategy

### Entry Framework:
1. Daily/4H bias determined
2. Wait for Kill Zone timing (Bangladesh Time reference)
3. Identify the Judas Swing / manipulation phase
4. Confirm with MSS on entry timeframe (5M/15M)
5. Enter at OB/FVG with proper risk management
6. Target opposing liquidity pool

### Bangladesh Time Kill Zones:
| Kill Zone | Time (BD) | Best For |
|-----------|-----------|----------|
| London Open | 2:00 PM - 5:00 PM | Manipulation/reversal |
| NY AM | 7:30 PM - 10:00 PM | Major moves/distribution |
| NY Lunch | 10:00 PM - 11:30 PM | Avoid (low probability) |
| NY PM | 11:30 PM - 1:00 AM | Continuation/closing |

---

## Real Trading Examples

### Example 1: Forex (EUR/USD)
- **HTF Bias:** Bullish (Weekly discount, Daily BOS)
- **Kill Zone:** London Open (2:30 PM BD)
- **Setup:** Judas Swing takes Asian low, MSS confirms
- **Entry:** At 15M bullish OB after displacement
- **R:R:** 1:3+ typical outcome
- **Key:** Patience to wait for proper Kill Zone timing

### Example 2: Gold (XAU/USD)
- **HTF Bias:** Bearish (4H premium, approaching BSL)
- **Kill Zone:** NY AM (8:00 PM BD)
- **Setup:** BSL sweep above previous high
- **Entry:** At 5M bearish FVG after MSS
- **R:R:** 1:4+ with proper patience

### Example 3: Indices (NAS100)
- **HTF Bias:** Bullish (Daily discount)
- **Kill Zone:** NY AM (7:30-10:00 PM BD)
- **Setup:** Full PO3 play with Asian range sweep
- **R:R:** 1:5+ on distribution moves

---

## Common Mistakes

<Callout type="warning" title="Avoid These ICT Errors">

**❌ Trading outside Kill Zones** — ICT concepts work best at specific times. Random entries reduce win rate.

**❌ No daily bias** — Without directional conviction, you'll take both sides and net zero.

**❌ Overcomplicating** — ICT has many concepts but you only need a few working together for a complete model.

**❌ Ignoring time** — ICT is as much about WHEN as WHERE. Time alignment is critical.

**❌ No patience** — The best setups happen once or twice per day. Wait for them.

</Callout>

---

## Multi-Timeframe Application

| Timeframe | Purpose |
|-----------|---------|
| **Monthly/Weekly** | Long-term liquidity targets, institutional ranges |
| **Daily** | Bias determination, PO3 candle analysis |
| **4H** | Structure identification, swing direction |
| **1H** | Session analysis, setup identification |
| **15M/5M** | Entry precision, MSS confirmation |

---

## Risk Management

| Aspect | Guideline |
|--------|-----------|
| Maximum Risk Per Trade | 1-2% of account |
| Minimum R:R | 1:3 (preferably 1:5+) |
| Maximum Daily Trades | 1-2 high-quality setups |
| Stop Placement | Beyond the manipulation extreme |
| Target | Next liquidity pool or institutional level |

---

## Summary

| Aspect | Key Points |
|--------|-----------|
| **Framework** | Part of ICT's institutional trading methodology |
| **Time** | Kill Zones determine WHEN to trade |
| **Direction** | Daily bias determines WHERE price will go |
| **Entry** | PO3 → Manipulation → MSS → OB/FVG entry |
| **Risk** | 1-2% max, 1:3+ R:R minimum |

---

## Related Topics

- [Power of 3](/en/ict/power-of-3) — The foundational ICT cycle
- [Judas Swing](/en/ict/judas-swing) — The manipulation move
- [ICT Kill Zones](/en/ict/ict-kill-zones) — Time-based trading
- [OTE](/en/ict/ote) — Optimal entry zones
- [Silver Bullet](/en/ict/silver-bullet) — Advanced time-based entries
`;
  } else {
    return `
## ${titleEn.replace(" — Complete Guide", "")} কী?

${titleEn.replace(" — Complete Guide", "")} হলো ICT (Inner Circle Trader) মেথডলজির একটি মূল কনসেপ্ট। ICT মেথডলজি ইন্টারব্যাংক মার্কেট এবং মার্কেট-মেকিং অ্যালগরিদম কীভাবে কাজ করে তা বুঝতে ফোকাস করে, যাতে ট্রেডাররা ইনস্টিটিউশনাল অর্ডার ফ্লোর সাথে ট্রেড করতে পারে।

<Callout type="info" title="ICT মেথডলজি">
এই কনসেপ্ট ICT এর ব্যাপক ট্রেডিং ফ্রেমওয়ার্কের অংশ। প্রতিটি কনসেপ্ট অন্যদের সাথে সিনার্জিস্টিকভাবে কাজ করে — আলাদাভাবে আয়ত্ত করা ও তাদের সংযোগ বোঝা একটি সম্পূর্ণ ICT মেথডলজি গড়ে তোলার জন্য অপরিহার্য।
</Callout>

---

## কেন গুরুত্বপূর্ণ

1. **অ্যালগরিদমিক বোঝাপড়া** — মার্কেট-মেকিং অ্যালগরিদম কীভাবে কাজ করে তা প্রকাশ করে
2. **প্রিসিশন এন্ট্রি** — ইনস্টিটিউশনাল-গ্রেড এন্ট্রি টাইমিং
3. **সময়-ভিত্তিক ট্রেডিং** — নির্দিষ্ট হাই-প্রোবাবিলিটি সময় উইন্ডোর সাথে অ্যালাইন
4. **লিকুইডিটি লজিক** — কোথায় এবং কেন লিকুইডিটি টার্গেট করা হয় তা দেখায়
5. **প্রফেশনাল এজ** — PO3, OTE ও অন্যান্য ICT কনসেপ্টের সাথে মিলিয়ে সিস্টেমেটিক ট্রেডিং

---

## মূল নীতি

### নীতি ১: প্রাইস লিকুইডিটিতে ডেলিভার করে
মার্কেট-মেকিং অ্যালগরিদমের প্রাথমিক কাজ হলো রেস্টিং লিকুইডিটির এলাকায় প্রাইস ডেলিভার করা।

### নীতি ২: সময় হলো ফ্রেমওয়ার্ক
ICT জোর দেয় যে সময় নির্ধারণ করে কখন প্রাইস মুভ করবে। Kill Zone, সেশন ওপেন এবং নির্দিষ্ট ঘণ্টা অনুমানযোগ্য আচরণ তৈরি করে।

### নীতি ৩: Distribution এর আগে Manipulation
যেকোনো গুরুত্বপূর্ণ মুভের আগে, ম্যানিপুলেশন ফেজ রিটেইল ট্রেডারদের ট্র্যাপ করে প্রয়োজনীয় কাউন্টার-পার্টি লিকুইডিটি তৈরি করে।

---

## ট্রেডিং কৌশল

### বাংলাদেশ সময়ে Kill Zone:

| Kill Zone | সময় (BD) | সেরা ব্যবহার |
|-----------|----------|------------|
| লন্ডন ওপেন | দুপুর ২:০০ - বিকেল ৫:০০ | ম্যানিপুলেশন/রিভার্সাল |
| NY AM | রাত ৭:৩০ - ১০:০০ | প্রধান মুভ/distribution |
| NY Lunch | রাত ১০:০০ - ১১:৩০ | এড়িয়ে চলুন |
| NY PM | রাত ১১:৩০ - ১:০০ AM | কন্টিনিউয়েশন |

---

## বাস্তব উদাহরণ

### EUR/USD (ফরেক্স)
- **HTF বায়াস:** বুলিশ (উইকলি ডিসকাউন্ট)
- **Kill Zone:** লন্ডন ওপেন (বিকেল ২:৩০ BD)
- **সেটআপ:** Judas Swing এশিয়ান লো নেয়, MSS কনফার্ম
- **এন্ট্রি:** 15M বুলিশ OB তে
- **R:R:** সাধারণত ১:৩+

### গোল্ড (XAU/USD)
- **HTF বায়াস:** বিয়ারিশ (4H প্রিমিয়াম)
- **Kill Zone:** NY AM (রাত ৮:০০ BD)
- **সেটআপ:** BSL সুইপ + MSS
- **R:R:** ১:৪+

---

## সাধারণ ভুল

<Callout type="warning" title="এড়িয়ে চলুন">

**❌ Kill Zone এর বাইরে ট্রেড** — ICT কনসেপ্ট নির্দিষ্ট সময়ে সেরা কাজ করে।

**❌ ডেইলি বায়াস ছাড়া** — দিকনির্দেশনা ছাড়া দুই দিকেই ট্রেড নিবেন এবং নেট জিরো হবে।

**❌ অতিরিক্ত জটিল করা** — কয়েকটি কনসেপ্ট একসাথে কাজ করলেই যথেষ্ট।

**❌ ধৈর্যের অভাব** — সেরা সেটআপ দিনে ১-২ বার আসে। অপেক্ষা করুন।

</Callout>

---

## রিস্ক ম্যানেজমেন্ট

| বিষয় | গাইডলাইন |
|-------|----------|
| প্রতি ট্রেড সর্বোচ্চ রিস্ক | অ্যাকাউন্টের ১-২% |
| ন্যূনতম R:R | ১:৩ (সম্ভব হলে ১:৫+) |
| দৈনিক সর্বোচ্চ ট্রেড | ১-২টি হাই-কোয়ালিটি সেটআপ |

---

## সারসংক্ষেপ

| বিষয় | মূল পয়েন্ট |
|-------|-----------|
| **ফ্রেমওয়ার্ক** | ICT ইনস্টিটিউশনাল ট্রেডিং মেথডলজির অংশ |
| **সময়** | Kill Zone নির্ধারণ করে কখন ট্রেড করবেন |
| **দিক** | Daily bias নির্ধারণ করে প্রাইস কোথায় যাবে |
| **এন্ট্রি** | PO3 → Manipulation → MSS → OB/FVG |
| **রিস্ক** | সর্বোচ্চ ১-২%, ন্যূনতম ১:৩ R:R |

---

## সম্পর্কিত টপিক

- [Power of 3](/bn/ict/power-of-3) — মৌলিক ICT সাইকেল
- [Judas Swing](/bn/ict/judas-swing) — ম্যানিপুলেশন মুভ
- [ICT Kill Zones](/bn/ict/ict-kill-zones) — সময়-ভিত্তিক ট্রেডিং
- [OTE](/bn/ict/ote) — অপটিমাল এন্ট্রি জোন
`;
  }
}

for (const topic of ictTopics) {
  w(
    "en",
    "ict",
    topic.slug,
    {
      title: topic.en.title,
      description: topic.en.desc,
      level: topic.en.level,
      order: topic.en.order,
    },
    genICTContent(topic.slug, topic.en.title, true),
  );

  w(
    "bn",
    "ict",
    topic.slug,
    {
      title: topic.bn.title,
      description: topic.bn.desc,
      level: topic.bn.level,
      order: topic.bn.order,
    },
    genICTContent(topic.slug, topic.bn.title, false),
  );
}

console.log("\n✅ Batch 3 complete: All ICT topics expanded (EN + BN)");
