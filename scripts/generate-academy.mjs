/**
 * Academy Content Generator
 * Generates educational academy content for trading docs
 */
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.resolve("content");

function generateAcademyEN(title, slug) {
  return `
## What is ${title}?

${title} is an essential skill and knowledge area for any serious trader. Whether you're just starting your trading journey or looking to refine your approach, understanding ${title.toLowerCase()} will give you a significant edge in the financial markets.

<Callout type="info" title="Academy Foundation">
This lesson is part of the Trading Academy — foundational knowledge that every trader needs regardless of their preferred methodology (Price Action, SMC, or ICT).
</Callout>

## Why ${title} Matters

In trading, success isn't just about finding entries — it's about **managing your entire trading business**. ${title} addresses a critical aspect of this:

1. **Foundation of consistency** — Without proper understanding, even the best strategy will fail
2. **Long-term survival** — Most traders fail because they neglect fundamental skills
3. **Professional development** — Institutional traders master these basics first
4. **Psychological edge** — Confidence comes from competence in core skills
5. **Compound growth** — Small improvements here lead to exponential results over time

---

## Beginner Guide

### Getting Started

If you're new to ${title.toLowerCase()}, here's what you need to know:

**Core principles:**
- Start with the basics before attempting advanced techniques
- Practice on a demo account before risking real money
- Keep a trading journal to track your progress
- Focus on one market and one timeframe initially
- Risk management is more important than entry strategy

### Key Terminology

Understanding the language of trading is essential. Here are the core terms related to ${title.toLowerCase()} that every beginner should know:

- **Pip**: The smallest price movement in forex (0.0001 for most pairs)
- **Lot Size**: The volume of your trade (1 lot = 100,000 units)
- **Leverage**: Borrowed capital that amplifies both profits and losses
- **Spread**: The difference between bid and ask price (your trading cost)
- **Margin**: The collateral required to hold a position open

---

## Intermediate Application

### Developing Your Approach

Once you understand the basics, it's time to develop a systematic approach to ${title.toLowerCase()}:

1. **Create rules** — Write down specific criteria for every decision
2. **Test your rules** — Backtest on at least 50-100 historical trades
3. **Track results** — Record every trade with entry, exit, and reason
4. **Review regularly** — Weekly review of your trading performance
5. **Adjust gradually** — Make small improvements based on data, not emotions

### Practical Framework

| Phase | Focus | Duration |
|-------|-------|----------|
| **Learning** | Study concepts, watch charts | 1-3 months |
| **Demo trading** | Apply concepts with no risk | 2-4 months |
| **Small live** | Trade with minimal capital | 3-6 months |
| **Scaling** | Gradually increase position size | Ongoing |

---

## Advanced Strategies

### Professional-Level Execution

Advanced traders treat ${title.toLowerCase()} as a **systematic process**:

- **Data-driven decisions** — Every choice backed by statistical evidence
- **Automation where possible** — Remove emotion from repetitive tasks
- **Continuous optimization** — Regular review and improvement cycles
- **Risk-first approach** — Always calculate risk before considering reward
- **Multi-market awareness** — Understanding correlations and intermarket dynamics

### Integration with Trading Methodology

${title} becomes most powerful when integrated with your preferred methodology:

**For SMC/ICT Traders:**
- Apply ${title.toLowerCase()} concepts during Kill Zone windows
- Align with institutional order flow principles
- Use market structure (BOS/CHOCH) as confirmation

**For Price Action Traders:**
- Combine with key levels and pattern recognition
- Use candlestick analysis for confirmation
- Apply during high-probability trading sessions

---

## Common Mistakes

### ❌ Mistake 1: Skipping Fundamentals
Many traders rush to advanced strategies without mastering basics. Build a solid foundation first.

### ❌ Mistake 2: Overcomplicating Things
The best traders keep things simple. Complex doesn't mean better.

### ❌ Mistake 3: Ignoring Psychology
Trading is 80% psychology. Master your emotions before your strategy.

### ❌ Mistake 4: Not Journaling
If you're not tracking your trades, you can't improve systematically.

### ❌ Mistake 5: Revenge Trading
After a loss, the worst thing you can do is immediately take another trade to "make it back."

---

## Risk Management Framework

| Component | Guideline |
|-----------|-----------|
| **Risk per trade** | 1-2% of total capital |
| **Max daily loss** | 3-5% of capital |
| **Max weekly loss** | 5-10% of capital |
| **Recovery plan** | Reduce size to 0.5% after hitting max loss |
| **Growth target** | 5-10% monthly (realistic) |

---

## Bangladesh-Specific Considerations

For Bangladeshi traders:
- **Best trading hours**: London (1:00-4:00 PM BD) and NY (7:00-10:00 PM BD) sessions
- **Currency considerations**: Fund accounts in USD; BDT conversion may vary
- **Broker selection**: Use regulated brokers; avoid unregulated local brokers
- **Internet reliability**: Use mobile data as backup for execution
- **Tax implications**: Consult a local tax professional for trading income

---

## Trading Psychology

### The Mental Game

${title} requires strong psychological discipline:

- **Patience** — Wait for your setup; don't force trades
- **Discipline** — Follow your rules even when it's uncomfortable
- **Acceptance** — Losses are part of trading; accept them gracefully
- **Confidence** — Trust your process, not individual outcomes
- **Detachment** — Don't get emotionally attached to any trade

<Callout type="warning" title="Psychology Warning">
Most traders don't fail because of bad strategy — they fail because they can't follow their own rules. Master your psychology FIRST, strategy second.
</Callout>

---

## Practical Exercises

### Exercise 1: Demo Trading
Open a demo account and practice ${title.toLowerCase()} concepts for 30 days. Track every trade.

### Exercise 2: Journaling
Create a trading journal with: date, pair, entry, exit, risk, reward, screenshots, and notes.

### Exercise 3: Review Process
At the end of each week, review all trades and identify patterns in your wins and losses.

---

## Pro Tips

<Callout type="tip" title="Pro Tip 1: Start Small">
When transitioning to live trading, start with the **smallest possible position size**. Your goal in the first 3 months isn't profit — it's survival and learning.
</Callout>

<Callout type="tip" title="Pro Tip 2: Routine is Everything">
Develop a **daily trading routine**: pre-market analysis, Kill Zone trading, post-market review. Consistency in process leads to consistency in results.
</Callout>

<Callout type="tip" title="Pro Tip 3: Community and Accountability">
Find a trading community or accountability partner. Discussing trades and reviewing each other's work accelerates learning significantly.
</Callout>

---

## FAQ

### How long does it take to become profitable?
Most successful traders take **1-2 years** of consistent practice. Focus on the process, not the timeline.

### How much capital do I need to start?
You can start learning with a **demo account** (free). For live trading, $100-500 is enough to begin with micro lots while you develop skills.

### Should I trade full-time or part-time?
Start **part-time** while maintaining your income source. Only consider full-time trading after 6-12 months of consistent profitability.

---

## Summary

| Area | Key Takeaway |
|------|-------------|
| **Foundation** | Master basics before advancing |
| **Practice** | Demo first, then small live |
| **Psychology** | 80% of trading success |
| **Risk Management** | Never risk more than 1-2% per trade |
| **Consistency** | Follow your process every single day |
| **Patience** | Success takes 1-2 years of dedicated practice |

---

## Next Steps

- [Introduction to Price Action](/en/price-action/introduction) — Learn market structure
- [Introduction to SMC](/en/smc/introduction) — Understand institutional trading
- [Introduction to ICT](/en/ict/introduction) — Advanced methodology
- [Forex Session Guide](/en/forex-sessions/introduction) — Master session timing`;
}

function generateAcademyBN(title, slug) {
  return `
## ${title} কী?

${title} হলো যেকোনো গুরুতর ট্রেডারের জন্য একটি অপরিহার্য দক্ষতা এবং জ্ঞানের ক্ষেত্র। আপনি আপনার ট্রেডিং যাত্রা শুধু শুরু করছেন বা আপনার পদ্ধতি পরিমার্জন করতে চাইছেন, ${title.toLowerCase()} বোঝা আপনাকে আর্থিক বাজারে একটি উল্লেখযোগ্য সুবিধা দেবে।

<Callout type="info" title="একাডেমি ফাউন্ডেশন">
এই পাঠ ট্রেডিং একাডেমির অংশ — প্রতিটি ট্রেডারের জন্য প্রয়োজনীয় মৌলিক জ্ঞান, তাদের পছন্দের মেথডলজি (প্রাইস অ্যাকশন, SMC, বা ICT) যাই হোক না কেন।
</Callout>

## ${title} কেন গুরুত্বপূর্ণ

ট্রেডিংয়ে, সাফল্য শুধু এন্ট্রি খোঁজা নয় — এটি আপনার **সম্পূর্ণ ট্রেডিং ব্যবসা পরিচালনা** সম্পর্কে:

1. **ধারাবাহিকতার ভিত্তি** — সঠিক বোঝাপড়া ছাড়া সেরা কৌশলও ব্যর্থ হবে
2. **দীর্ঘমেয়াদী টিকে থাকা** — বেশিরভাগ ট্রেডার মৌলিক দক্ষতা অবহেলা করে ব্যর্থ হয়
3. **পেশাদার উন্নয়ন** — ইনস্টিটিউশনাল ট্রেডাররা প্রথমে এই বেসিকগুলো আয়ত্ত করে
4. **মনোবৈজ্ঞানিক সুবিধা** — আত্মবিশ্বাস আসে মূল দক্ষতায় দক্ষতা থেকে

---

## শুরু পর্যায়ের গাইড

### শুরু করা

আপনি যদি ${title.toLowerCase()} এ নতুন হন:

**মূল নীতি:**
- উন্নত কৌশলের আগে বেসিক দিয়ে শুরু করুন
- আসল টাকা ঝুঁকিতে ফেলার আগে ডেমো অ্যাকাউন্টে অনুশীলন করুন
- অগ্রগতি ট্র্যাক করতে ট্রেডিং জার্নাল রাখুন
- প্রাথমিকভাবে একটি মার্কেট এবং একটি টাইমফ্রেমে ফোকাস করুন
- রিস্ক ম্যানেজমেন্ট এন্ট্রি কৌশলের চেয়ে বেশি গুরুত্বপূর্ণ

---

## মধ্যবর্তী পর্যায়ের প্রয়োগ

### আপনার পদ্ধতি ডেভেলপ করা

| পর্যায় | ফোকাস | সময়কাল |
|---------|-------|---------|
| **শেখা** | কনসেপ্ট অধ্যয়ন, চার্ট দেখা | ১-৩ মাস |
| **ডেমো ট্রেডিং** | কোনো ঝুঁকি ছাড়া কনসেপ্ট প্রয়োগ | ২-৪ মাস |
| **ছোট লাইভ** | ন্যূনতম মূলধনে ট্রেড | ৩-৬ মাস |
| **স্কেলিং** | ধীরে ধীরে পজিশন সাইজ বাড়ান | চলমান |

---

## উন্নত কৌশল

উন্নত ট্রেডাররা ${title.toLowerCase()} কে একটি **পদ্ধতিগত প্রক্রিয়া** হিসেবে বিবেচনা করে:

- **ডেটা-চালিত সিদ্ধান্ত** — প্রতিটি পছন্দ পরিসংখ্যানগত প্রমাণ দ্বারা সমর্থিত
- **সম্ভব হলে অটোমেশন** — পুনরাবৃত্তিমূলক কাজ থেকে আবেগ সরান
- **ক্রমাগত অপ্টিমাইজেশন** — নিয়মিত পর্যালোচনা এবং উন্নতি চক্র
- **রিস্ক-প্রথম পদ্ধতি** — রিওয়ার্ড বিবেচনার আগে সর্বদা রিস্ক গণনা করুন

---

## সাধারণ ভুল

### ❌ ভুল ১: মৌলিক বিষয় এড়িয়ে যাওয়া
অনেক ট্রেডার বেসিক আয়ত্ত না করে উন্নত কৌশলে দৌড়ায়।

### ❌ ভুল ২: অতিরিক্ত জটিল করা
সেরা ট্রেডাররা জিনিস সহজ রাখে। জটিল মানে ভালো নয়।

### ❌ ভুল ৩: সাইকোলজি উপেক্ষা করা
ট্রেডিং ৮০% সাইকোলজি। আপনার কৌশলের আগে আবেগ আয়ত্ত করুন।

### ❌ ভুল ৪: জার্নালিং না করা
ট্রেড ট্র্যাক না করলে পদ্ধতিগতভাবে উন্নতি করতে পারবেন না।

### ❌ ভুল ৫: রিভেঞ্জ ট্রেডিং
লসের পর, সবচেয়ে খারাপ কাজ হলো "ফিরিয়ে আনতে" আরেকটি ট্রেড নেওয়া।

---

## রিস্ক ম্যানেজমেন্ট

| উপাদান | নির্দেশিকা |
|--------|-----------|
| **প্রতি ট্রেডে রিস্ক** | মোট মূলধনের ১-২% |
| **সর্বোচ্চ দৈনিক ক্ষতি** | মূলধনের ৩-৫% |
| **সর্বোচ্চ সাপ্তাহিক ক্ষতি** | মূলধনের ৫-১০% |
| **বৃদ্ধির লক্ষ্য** | মাসিক ৫-১০% (বাস্তবসম্মত) |

---

## বাংলাদেশি ট্রেডারদের জন্য বিশেষ বিবেচনা

- **সেরা ট্রেডিং সময়**: লন্ডন (দুপুর ১:০০-৪:০০ BD) এবং NY (রাত ৭:০০-১০:০০ BD) সেশন
- **কারেন্সি বিবেচনা**: USD তে অ্যাকাউন্ট ফান্ড করুন
- **ব্রোকার নির্বাচন**: রেগুলেটেড ব্রোকার ব্যবহার করুন
- **ইন্টারনেট নির্ভরযোগ্যতা**: এক্সিকিউশনের জন্য ব্যাকআপ হিসেবে মোবাইল ডেটা রাখুন

---

## ট্রেডিং সাইকোলজি

${title} শক্তিশালী মনোবৈজ্ঞানিক শৃঙ্খলা প্রয়োজন:

- **ধৈর্য** — আপনার সেটআপের জন্য অপেক্ষা করুন; ট্রেড জোর করবেন না
- **শৃঙ্খলা** — অস্বস্তিকর হলেও আপনার নিয়ম অনুসরণ করুন
- **গ্রহণ** — লস ট্রেডিংয়ের অংশ; সুন্দরভাবে গ্রহণ করুন
- **আত্মবিশ্বাস** — আপনার প্রক্রিয়ায় বিশ্বাস রাখুন, পৃথক ফলাফলে নয়

<Callout type="warning" title="সাইকোলজি সতর্কতা">
বেশিরভাগ ট্রেডার খারাপ কৌশলের কারণে ব্যর্থ হয় না — তারা ব্যর্থ হয় কারণ তারা নিজেদের নিয়ম অনুসরণ করতে পারে না। প্রথমে আপনার সাইকোলজি আয়ত্ত করুন, কৌশল দ্বিতীয়।
</Callout>

---

## প্রো টিপস

<Callout type="tip" title="প্রো টিপ ১: ছোট শুরু করুন">
লাইভ ট্রেডিংয়ে যাওয়ার সময়, **সবচেয়ে ছোট সম্ভব পজিশন সাইজ** দিয়ে শুরু করুন। প্রথম ৩ মাসে আপনার লক্ষ্য লাভ নয় — টিকে থাকা এবং শেখা।
</Callout>

<Callout type="tip" title="প্রো টিপ ২: রুটিন সবকিছু">
একটি **দৈনিক ট্রেডিং রুটিন** তৈরি করুন: প্রি-মার্কেট বিশ্লেষণ, কিল জোন ট্রেডিং, পোস্ট-মার্কেট পর্যালোচনা।
</Callout>

---

## সচরাচর জিজ্ঞাসিত প্রশ্ন

### লাভজনক হতে কতদিন লাগে?
বেশিরভাগ সফল ট্রেডার **১-২ বছর** ধারাবাহিক অনুশীলন নেয়।

### শুরু করতে কত মূলধন লাগে?
আপনি **ডেমো অ্যাকাউন্ট** (ফ্রি) দিয়ে শেখা শুরু করতে পারেন। লাইভ ট্রেডিংয়ের জন্য, মাইক্রো লটে দক্ষতা বিকাশের সময় $100-500 যথেষ্ট।

---

## সারাংশ

| ক্ষেত্র | মূল বিষয় |
|--------|----------|
| **ভিত্তি** | উন্নত হওয়ার আগে বেসিক আয়ত্ত করুন |
| **অনুশীলন** | প্রথমে ডেমো, তারপর ছোট লাইভ |
| **সাইকোলজি** | ট্রেডিং সাফল্যের ৮০% |
| **রিস্ক ম্যানেজমেন্ট** | প্রতি ট্রেডে ১-২% এর বেশি রিস্ক নেবেন না |
| **ধৈর্য** | সাফল্যে ১-২ বছর নিবেদিত অনুশীলন লাগে |

---

## পরবর্তী ধাপ

- [প্রাইস অ্যাকশন পরিচিতি](/bn/price-action/introduction) — মার্কেট স্ট্রাকচার শিখুন
- [SMC পরিচিতি](/bn/smc/introduction) — ইনস্টিটিউশনাল ট্রেডিং বুঝুন
- [ICT পরিচিতি](/bn/ict/introduction) — অ্যাডভান্সড মেথডলজি
- [ফরেক্স সেশন গাইড](/bn/forex-sessions/introduction) — সেশন টাইমিং আয়ত্ত করুন`;
}

const langs = ["en", "bn"];
let count = 0;

for (const lang of langs) {
  const dir = path.join(CONTENT_DIR, lang, "academy");
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    if (content.split("\n").length > 30) continue;

    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;

    const fm = {};
    fmMatch[1].split("\n").forEach((line) => {
      const [key, ...vals] = line.split(":");
      if (key && vals.length) fm[key.trim()] = vals.join(":").trim().replace(/^"|"$/g, "");
    });

    const title = fm.title || file.replace(".mdx", "").replace(/-/g, " ");
    const body =
      lang === "en"
        ? generateAcademyEN(title, file.replace(".mdx", ""))
        : generateAcademyBN(title, file.replace(".mdx", ""));

    const desc =
      lang === "en"
        ? `Complete guide to ${title}. Learn everything from basics to advanced concepts with practical examples, risk management, and professional tips.`
        : `${title} এর সম্পূর্ণ গাইড। বাস্তব উদাহরণ, রিস্ক ম্যানেজমেন্ট এবং পেশাদার টিপস সহ বেসিক থেকে অ্যাডভান্সড কনসেপ্ট পর্যন্ত সবকিছু শিখুন।`;

    const newContent = `---
title: "${fm.title || title}"
description: "${desc}"
level: ${fm.level || "beginner"}
order: ${fm.order || 1}
lastUpdated: "2026-05-11"
---
${body}
`;

    fs.writeFileSync(filePath, newContent, "utf-8");
    count++;
    console.log(`✅ ${lang}/academy/${file}`);
  }
}

console.log(`\nDone! Updated ${count} academy files.`);
