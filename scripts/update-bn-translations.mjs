import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated: ${path.relative(process.cwd(), filePath)}`);
}

// ============================================================
// BN _meta.json files for new categories
// ============================================================

// Order Flow
writeFile(path.join(contentDir, 'bn', 'order-flow', '_meta.json'), JSON.stringify({
  "introduction": "অর্ডার ফ্লো পরিচিতি",
  "dom-level2": "DOM ও Level 2 ডেটা",
  "volume-profile": "ভলিউম প্রোফাইল (POC, VAH, VAL)",
  "vwap": "VWAP — ইনস্টিটিউশনাল অ্যাংকর",
  "delta-analysis": "ডেল্টা ও কিউমুলেটিভ ডেল্টা",
  "footprint-charts": "ফুটপ্রিন্ট চার্ট ও ক্লাস্টার",
  "absorption-exhaustion": "অ্যাবসর্পশন ও এক্সহশন",
  "iceberg-spoofing": "আইসবার্গ অর্ডার ও স্পুফিং"
}, null, 2) + '\n');

// Intermarket
writeFile(path.join(contentDir, 'bn', 'intermarket', '_meta.json'), JSON.stringify({
  "introduction": "ইন্টারমার্কেট অ্যানালাইসিস পরিচিতি",
  "dxy-correlation": "DXY ↔ মেজর পেয়ার কোরিলেশন",
  "yield-curve": "ইয়েল্ড কার্ভ ডায়নামিক্স",
  "gold-dollar-bonds": "গোল্ড ↔ ডলার ↔ বন্ড ট্রিনিটি",
  "risk-on-risk-off": "রিস্ক-অন / রিস্ক-অফ ফ্রেমওয়ার্ক",
  "cross-asset-momentum": "ক্রস-অ্যাসেট মোমেন্টাম সিগন্যাল",
  "spx-vix-regime": "SPX ↔ VIX রিজিম ডিটেকশন",
  "currency-strength": "কারেন্সি স্ট্রেংথ মেথডলজি"
}, null, 2) + '\n');

// Quantitative
writeFile(path.join(contentDir, 'bn', 'quantitative', '_meta.json'), JSON.stringify({
  "introduction": "কোয়ান্টিটেটিভ ট্রেডিং পরিচিতি",
  "expectancy-formula": "এক্সপেক্টেন্সি ও এজ ক্যালকুলেশন",
  "kelly-criterion": "কেলি ক্রাইটেরিয়ন ও ফ্র্যাকশনাল কেলি",
  "mean-reversion": "মিন রিভার্সন মডেল",
  "momentum-factors": "মোমেন্টাম ফ্যাক্টর স্ট্র্যাটেজি",
  "backtesting-methodology": "স্ট্যাটিস্টিক্যাল ব্যাকটেস্টিং মেথডলজি",
  "monte-carlo": "মন্টে কার্লো সিমুলেশন",
  "equity-curve-management": "ইকুইটি কার্ভ ম্যানেজমেন্ট",
  "walk-forward": "ওয়াক-ফরওয়ার্ড অপটিমাইজেশন"
}, null, 2) + '\n');

// Wyckoff
writeFile(path.join(contentDir, 'bn', 'wyckoff', '_meta.json'), JSON.stringify({
  "introduction": "ওয়াইকফ মেথড পরিচিতি",
  "composite-man": "কম্পোজিট ম্যান থিওরি",
  "accumulation-schematic": "ওয়াইকফ একুমুলেশন স্কিম্যাটিক",
  "distribution-schematic": "ওয়াইকফ ডিস্ট্রিবিউশন স্কিম্যাটিক",
  "phases-events": "ওয়াইকফ ফেজ ও ইভেন্ট",
  "volume-spread-analysis": "ভলিউম স্প্রেড অ্যানালাইসিস (VSA)",
  "effort-vs-result": "এফোর্ট vs রেজাল্ট প্রিন্সিপল",
  "cause-effect": "কজ অ্যান্ড ইফেক্ট (P&F চার্ট)"
}, null, 2) + '\n');

// Auction Market
writeFile(path.join(contentDir, 'bn', 'auction-market', '_meta.json'), JSON.stringify({
  "introduction": "অকশন মার্কেট থিওরি পরিচিতি",
  "market-profile": "মার্কেট প্রোফাইল (TPO চার্ট)",
  "initial-balance": "ইনিশিয়াল ব্যালেন্স (IB)",
  "value-area": "ভ্যালু এরিয়া মাইগ্রেশন",
  "excess-poor-highs-lows": "এক্সেস ও পুওর হাই/লো",
  "single-prints": "সিঙ্গেল প্রিন্ট কনসেপ্ট",
  "balanced-imbalanced": "ব্যালেন্সড vs ইমব্যালেন্সড মার্কেট"
}, null, 2) + '\n');

// ============================================================
// Update BN MDX frontmatter for all new categories
// ============================================================

const bnTranslations = {
  // Order Flow
  'order-flow': [
    { slug: 'introduction', title: 'অর্ডার ফ্লো ট্রেডিং পরিচিতি', description: 'অর্ডার ফ্লো বুঝুন — রিয়েল-টাইম বাই ও সেল অর্ডারের অধ্যয়ন যা রেগুলার চার্টে অদৃশ্য ইনস্টিটিউশনাল অ্যাক্টিভিটি প্রকাশ করে।' },
    { slug: 'dom-level2', title: 'DOM ও Level 2 ডেটা রিডিং — সম্পূর্ণ গাইড', description: 'ডেপথ অফ মার্কেট (DOM) ও Level 2 ডেটা রিডিং মাস্টার করুন। ইনস্টিটিউশনাল অর্ডার, স্পুফিং, অ্যাবসর্পশন এবং রিয়েল-টাইম সাপ্লাই/ডিমান্ড ইমব্যালেন্স চিনতে শিখুন।' },
    { slug: 'volume-profile', title: 'ভলিউম প্রোফাইল — POC, VAH, VAL সম্পূর্ণ গাইড', description: 'ভলিউম প্রোফাইল অ্যানালাইসিস মাস্টার করুন। Point of Control (POC), Value Area High/Low, High/Low Volume Nodes এবং ইনস্টিটিউশনাল এন্ট্রি-এক্সিট শিখুন।' },
    { slug: 'vwap', title: 'VWAP — ভলিউম ওয়েটেড এভারেজ প্রাইস (ইনস্টিটিউশনাল অ্যাংকর)', description: 'VWAP মাস্টার করুন — ইনস্টিটিউশনাল বেঞ্চমার্ক। ব্যাংকরা কিভাবে VWAP ব্যবহার করে এবং VWAP ট্রেডিং স্ট্র্যাটেজি শিখুন।' },
    { slug: 'delta-analysis', title: 'ডেল্টা ও কিউমুলেটিভ ডেল্টা অ্যানালাইসিস — সম্পূর্ণ গাইড', description: 'ডেল্টা অ্যানালাইসিস মাস্টার করুন — বায়িং ও সেলিং ভলিউমের পার্থক্য। কিউমুলেটিভ ডেল্টা ডাইভার্জেন্স এবং ইনস্টিটিউশনাল দিকনির্দেশ নিশ্চিত করুন।' },
    { slug: 'footprint-charts', title: 'ফুটপ্রিন্ট চার্ট ও ক্লাস্টার অ্যানালাইসিস — সম্পূর্ণ গাইড', description: 'ফুটপ্রিন্ট চার্ট মাস্টার করুন — প্রতিটি ক্যান্ডেলের ভিতরে বিড/আস্ক ভলিউম, ডেল্টা এবং ইমব্যালেন্স দেখুন।' },
    { slug: 'absorption-exhaustion', title: 'অ্যাবসর্পশন ও এক্সহশন প্যাটার্ন — সম্পূর্ণ গাইড', description: 'অ্যাবসর্পশন ও এক্সহশন প্যাটার্ন মাস্টার করুন। ইনস্টিটিউশনরা কখন অ্যাগ্রেসিভ অর্ডার শোষণ করছে এবং মোমেন্টাম কখন শেষ হচ্ছে চিনুন।' },
    { slug: 'iceberg-spoofing', title: 'আইসবার্গ অর্ডার ও স্পুফিং ডিটেকশন — সম্পূর্ণ গাইড', description: 'হিডেন ইনস্টিটিউশনাল আইসবার্গ অর্ডার চিনতে এবং অবৈধ স্পুফিং/লেয়ারিং ডিটেক্ট করতে শিখুন।' },
  ],
  // Intermarket
  'intermarket': [
    { slug: 'introduction', title: 'ইন্টারমার্কেট অ্যানালাইসিস পরিচিতি', description: 'মার্কেটগুলো কিভাবে একে অপরের সাথে সংযুক্ত তা বুঝুন। কোনো ইনস্টিটিউশনাল ফান্ড বিচ্ছিন্নভাবে ট্রেড করে না — পেশাদার পোর্টফোলিও সিদ্ধান্তের কোরিলেশন শিখুন।' },
    { slug: 'dxy-correlation', title: 'DXY ↔ মেজর পেয়ার কোরিলেশন মডেল', description: 'US ডলার ইনডেক্স ও মেজর কারেন্সি পেয়ারের সম্পর্ক মাস্টার করুন। DXY মুভমেন্ট কিভাবে EUR/USD, GBP/USD প্রেডিক্ট করে শিখুন।' },
    { slug: 'yield-curve', title: 'ইয়েল্ড কার্ভ ডায়নামিক্স — 2s10s স্প্রেড ও রিয়েল ইয়েল্ড', description: 'ম্যাক্রো ফান্ডের ইয়েল্ড কার্ভ অ্যানালাইসিস বুঝুন। 2-year vs 10-year স্প্রেড ডায়নামিক্স এবং বন্ড মার্কেট কিভাবে কারেন্সি ও ইকুইটি মুভমেন্ট প্রেডিক্ট করে শিখুন।' },
    { slug: 'gold-dollar-bonds', title: 'গোল্ড ↔ ডলার ↔ বন্ড ট্রিনিটি', description: 'গোল্ড, US ডলার এবং ট্রেজারি বন্ডের তিন-মুখী সম্পর্ক মাস্টার করুন। ইনস্টিটিউশনরা কিভাবে এই ট্রিনিটি হেজিং ও রোটেশনে ব্যবহার করে শিখুন।' },
    { slug: 'risk-on-risk-off', title: 'রিস্ক-অন / রিস্ক-অফ ফ্রেমওয়ার্ক', description: 'ইনস্টিটিউশনাল রিস্ক রিজিম ফ্রেমওয়ার্ক শিখুন। রিস্ক-অন vs রিস্ক-অফ পরিবেশে কোন অ্যাসেটে ফ্লো যায় এবং কিভাবে পজিশন করবেন বুঝুন।' },
    { slug: 'cross-asset-momentum', title: 'ক্রস-অ্যাসেট মোমেন্টাম সিগন্যাল', description: 'অ্যাসেট ক্লাস জুড়ে মোমেন্টাম সিগন্যাল চিনুন। ইকুইটি, বন্ড ও কমোডিটি মোমেন্টাম কিভাবে ফরেক্সের জন্য লিডিং সিগন্যাল তৈরি করে শিখুন।' },
    { slug: 'spx-vix-regime', title: 'SPX ↔ VIX রিজিম ডিটেকশন', description: 'SPX-VIX ইনভার্স কোরিলেশন ও রিজিম ডিটেকশন মাস্টার করুন। ভোলাটিলিটি রিজিম কিভাবে ইনস্টিটিউশনাল বিহেভিয়ার নির্ধারণ করে শিখুন।' },
    { slug: 'currency-strength', title: 'কারেন্সি স্ট্রেংথ মিটার মেথডলজি', description: 'সবচেয়ে শক্তিশালী ও দুর্বল কারেন্সি চিনতে কারেন্সি স্ট্রেংথ মিটার তৈরি ও ব্যবহার করুন। ফরেক্সে সর্বোচ্চ এজের জন্য ইনস্টিটিউশনাল পেয়ারিং মেথডলজি শিখুন।' },
  ],
  // Quantitative
  'quantitative': [
    { slug: 'introduction', title: 'কোয়ান্টিটেটিভ ট্রেডিং পরিচিতি', description: 'ট্রেডিংয়ে কোয়ান্টিটেটিভ অ্যাপ্রোচ বুঝুন। সিস্টেম্যাটিক ট্রেডাররা কিভাবে গণিত, পরিসংখ্যান ও সম্ভাব্যতা ব্যবহার করে ধারাবাহিক এজ তৈরি করে শিখুন।' },
    { slug: 'expectancy-formula', title: 'এক্সপেক্টেন্সি ফর্মুলা ও এজ ক্যালকুলেশন', description: 'এক্সপেক্টেন্সি ফর্মুলা মাস্টার করুন — প্রতিটি লাভজনক ট্রেডিং সিস্টেমের গাণিতিক ভিত্তি। আপনার প্রকৃত এজ ক্যালকুলেট করুন: (Win% × Avg Win) - (Loss% × Avg Loss)।' },
    { slug: 'kelly-criterion', title: 'কেলি ক্রাইটেরিয়ন ও ফ্র্যাকশনাল কেলি পজিশন সাইজিং', description: 'কেলি ক্রাইটেরিয়ন ব্যবহার করে অপটিমাল পজিশন সাইজিং শিখুন। ফুল কেলি, ফ্র্যাকশনাল কেলি এবং ইনস্টিটিউশনাল ট্রেডাররা কেন 25-50% কেলি ব্যবহার করে বুঝুন।' },
    { slug: 'mean-reversion', title: 'মিন রিভার্সন মডেল', description: 'কোয়ান্টিটেটিভ ফান্ডের মিন রিভার্সন স্ট্র্যাটেজি মাস্টার করুন। Z-score অ্যানালাইসিস, বোলিঞ্জার ব্যান্ড রিভার্সন এবং স্ট্যাটিস্টিক্যাল আর্বিট্রাজ শিখুন।' },
    { slug: 'momentum-factors', title: 'মোমেন্টাম ফ্যাক্টর স্ট্র্যাটেজি', description: 'কোয়ান্টিটেটিভ ফ্যাক্টর হিসেবে মোমেন্টাম বুঝুন। টাইম-সিরিজ মোমেন্টাম, ক্রস-সেকশনাল মোমেন্টাম এবং CTA ট্রেন্ড-ফলোয়িং শিখুন।' },
    { slug: 'backtesting-methodology', title: 'স্ট্যাটিস্টিক্যাল ব্যাকটেস্টিং মেথডলজি', description: 'কঠোর ব্যাকটেস্টিং মেথডলজি শিখুন। সারভাইভরশিপ বায়াস, লুক-অ্যাহেড বায়াস, ওভারফিটিং এড়ান এবং স্ট্যাটিস্টিক্যাল সিগনিফিকেন্স টেস্টিং বুঝুন।' },
    { slug: 'monte-carlo', title: 'মন্টে কার্লো সিমুলেশন ও ড্রডাউন এক্সপেক্টেন্সি', description: 'ট্রেডিংয়ের জন্য মন্টে কার্লো অ্যানালাইসিস মাস্টার করুন। হাজার হাজার সম্ভাব্য ইকুইটি কার্ভ সিমুলেট করে ড্রডাউন সম্ভাব্যতা ও রুইন রিস্ক বুঝুন।' },
    { slug: 'equity-curve-management', title: 'ইকুইটি কার্ভ ম্যানেজমেন্ট', description: 'ইকুইটি কার্ভ বিহেভিয়ারের উপর ভিত্তি করে স্ট্র্যাটেজি ম্যানেজ করতে শিখুন। কখন সাইজ বাড়াবেন/কমাবেন, কখন পজ করবেন বুঝুন।' },
    { slug: 'walk-forward', title: 'ওয়াক-ফরওয়ার্ড অপটিমাইজেশন', description: 'ওয়াক-ফরওয়ার্ড অ্যানালাইসিস মাস্টার করুন — স্ট্র্যাটেজি ভ্যালিডেশনের গোল্ড স্ট্যান্ডার্ড। ইন-স্যাম্পল/আউট-অফ-স্যাম্পল টেস্টিং ও কার্ভ-ফিটিং এড়ানো শিখুন।' },
  ],
  // Wyckoff
  'wyckoff': [
    { slug: 'introduction', title: 'ওয়াইকফ মেথড পরিচিতি', description: 'ওয়াইকফ মেথড মাস্টার করুন — ১৯৩০-এর দশকের মূল ইনস্টিটিউশনাল ফ্রেমওয়ার্ক। "কম্পোজিট ম্যান" (স্মার্ট মানি) কিভাবে পজিশন জমা ও বিতরণ করে বুঝুন।' },
    { slug: 'composite-man', title: 'কম্পোজিট ম্যান থিওরি — মূল স্মার্ট মানি', description: 'কম্পোজিট ম্যান বুঝুন — ওয়াইকফের ধারণা যে সম্মিলিত ইনস্টিটিউশনাল অপারেটররা মার্কেট মুভমেন্ট ইঞ্জিনিয়ার করে। তাদের চোখ দিয়ে মার্কেট পড়তে শিখুন।' },
    { slug: 'accumulation-schematic', title: 'ওয়াইকফ একুমুলেশন স্কিম্যাটিক #1 ও #2', description: 'ওয়াইকফ একুমুলেশন প্যাটার্ন মাস্টার করুন। স্কিম্যাটিক #1 (স্প্রিং সহ) ও #2 (স্প্রিং ছাড়া) — PS, SC, AR, ST, Spring, SOS, LPS, BU ফেজ সহ।' },
    { slug: 'distribution-schematic', title: 'ওয়াইকফ ডিস্ট্রিবিউশন স্কিম্যাটিক #1 ও #2', description: 'ওয়াইকফ ডিস্ট্রিবিউশন প্যাটার্ন মাস্টার করুন। স্কিম্যাটিক #1 (UTAD সহ) ও #2 (UTAD ছাড়া) — PSY, BC, AR, ST, UT, UTAD, SOW, LPSY ফেজ সহ।' },
    { slug: 'phases-events', title: 'ওয়াইকফ ফেজ ও ইভেন্ট সম্পূর্ণ ব্রেকডাউন', description: 'সকল ওয়াইকফ ফেজের গভীর বিশ্লেষণ: PS, SC, AR, ST, Spring, Test, SOS, LPS, BU, PSY, BC, UT, UTAD, SOW, LPSY — চিহ্নিতকরণ নিয়ম ও ট্রেডিং স্ট্র্যাটেজি সহ।' },
    { slug: 'volume-spread-analysis', title: 'ভলিউম স্প্রেড অ্যানালাইসিস (VSA) — সম্পূর্ণ গাইড', description: 'ভলিউম স্প্রেড অ্যানালাইসিস মাস্টার করুন — ওয়াইকফ প্রিন্সিপলের আধুনিক বিবর্তন। এফোর্ট (ভলিউম) vs রেজাল্ট (স্প্রেড) পড়ে ইনস্টিটিউশনাল অ্যাক্টিভিটি চিনুন।' },
    { slug: 'effort-vs-result', title: 'এফোর্ট vs রেজাল্ট প্রিন্সিপল', description: 'এফোর্ট vs রেজাল্ট প্রিন্সিপল বুঝুন — যখন ভলিউম (এফোর্ট) প্রাইস মুভমেন্টের (রেজাল্ট) সাথে মেলে না, ইনস্টিটিউশনরা অপারেট করছে।' },
    { slug: 'cause-effect', title: 'কজ অ্যান্ড ইফেক্ট — পয়েন্ট অ্যান্ড ফিগার চার্ট', description: 'ওয়াইকফের কজ অ্যান্ড ইফেক্ট প্রিন্সিপল মাস্টার করুন। "কজ" (একুমুলেশন/ডিস্ট্রিবিউশন রেঞ্জ) মেপে "ইফেক্ট" (প্রাইস টার্গেট) প্রজেক্ট করুন।' },
  ],
  // Auction Market
  'auction-market': [
    { slug: 'introduction', title: 'অকশন মার্কেট থিওরি পরিচিতি', description: 'অকশন মার্কেট থিওরি (AMT) বুঝুন — যে ফ্রেমওয়ার্ক ব্যাখ্যা করে প্রাইস কিভাবে ও কেন মুভ করে। মার্কেট কিভাবে প্রাইস ডিসকভারির মাধ্যমে বায়ার ও সেলারের মধ্যে ট্রেড সহজতর করে শিখুন।' },
    { slug: 'market-profile', title: 'মার্কেট প্রোফাইল — TPO চার্ট সম্পূর্ণ গাইড', description: 'মার্কেট প্রোফাইল (টাইম প্রাইস অপরচুনিটি) চার্ট মাস্টার করুন। TPO ডিস্ট্রিবিউশন পড়া, ব্যালেন্স/ইমব্যালেন্স চিনা এবং ইনস্টিটিউশনাল প্রাইস অ্যাক্সেপ্টেন্স বুঝুন।' },
    { slug: 'initial-balance', title: 'ইনিশিয়াল ব্যালেন্স — ব্রেকআউট ও ফেইলার স্ট্র্যাটেজি', description: 'ইনিশিয়াল ব্যালেন্স (IB) কনসেপ্ট মাস্টার করুন — ট্রেডিংয়ের প্রথম ঘণ্টায় তৈরি হওয়া রেঞ্জ। IB ব্রেকআউট, ফেইলার এবং ইনস্টিটিউশনরা কিভাবে IB রেফারেন্স ব্যবহার করে শিখুন।' },
    { slug: 'value-area', title: 'ভ্যালু এরিয়া মাইগ্রেশন — ইনস্টিটিউশনাল ফ্লো ট্র্যাকিং', description: 'সেশনের মধ্যে ভ্যালু এরিয়া মাইগ্রেশন ট্র্যাক করতে শিখুন। শিফটিং ভ্যালু এরিয়া কিভাবে ইনস্টিটিউশনাল একুমুলেশন, ডিস্ট্রিবিউশন ও ডিরেকশনাল ইনটেন্ট প্রকাশ করে বুঝুন।' },
    { slug: 'excess-poor-highs-lows', title: 'এক্সেস ও পুওর হাই/লো — অকশন সম্পূর্ণতা', description: 'এক্সেস (সম্পন্ন অকশন) vs পুওর হাই/লো (অসম্পন্ন অকশন) চিনুন। পুওর এক্সট্রিম কেন রিভিজিট হয় এবং ইনস্টিটিউশনাল লজিকে কিভাবে ট্রেড করবেন শিখুন।' },
    { slug: 'single-prints', title: 'সিঙ্গেল প্রিন্ট কনসেপ্ট — প্রাইস রিজেকশন জোন', description: 'সিঙ্গেল প্রিন্ট অ্যানালাইসিস মাস্টার করুন — যেখানে প্রাইস এত দ্রুত মুভ করেছে যে শুধু একটি TPO প্রিন্ট হয়েছে। সিঙ্গেল প্রিন্ট কেন সাপোর্ট/রেজিস্ট্যান্স হিসেবে কাজ করে শিখুন।' },
    { slug: 'balanced-imbalanced', title: 'ব্যালেন্সড vs ইমব্যালেন্সড মার্কেট', description: 'ব্যালেন্সড মার্কেট (রেঞ্জ-বাউন্ড, মিন-রিভার্টিং) ও ইমব্যালেন্সড মার্কেট (ট্রেন্ডিং, ডিরেকশনাল) আলাদা করুন। প্রতিটি মার্কেট স্টেটের জন্য অপটিমাল স্ট্র্যাটেজি শিখুন।' },
  ],
};

// Update frontmatter for each BN file
for (const [category, items] of Object.entries(bnTranslations)) {
  for (const item of items) {
    const filePath = path.join(contentDir, 'bn', category, `${item.slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      console.log(`SKIP (not found): ${filePath}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace the title in frontmatter
    content = content.replace(
      /^---\ntitle: ".*?"\ndescription: ".*?"/ms,
      `---\ntitle: "${item.title}"\ndescription: "${item.description}"`
    );

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated frontmatter: content/bn/${category}/${item.slug}.mdx`);
  }
}

// ============================================================
// Update BN _meta.json for SMC (new entries)
// ============================================================
const bnSmcMeta = JSON.parse(fs.readFileSync(path.join(contentDir, 'bn', 'smc', '_meta.json'), 'utf-8'));
bnSmcMeta["supply-demand-zones"] = "সাপ্লাই ও ডিমান্ড জোন";
bnSmcMeta["fresh-vs-tested"] = "ফ্রেশ vs টেস্টেড জোন";
bnSmcMeta["rally-base-rally"] = "র‍্যালি-বেস-র‍্যালি / ড্রপ-বেস-ড্রপ";
bnSmcMeta["zone-strength-scoring"] = "জোন স্ট্রেংথ স্কোরিং";
bnSmcMeta["proximal-distal-lines"] = "প্রক্সিমাল vs ডিস্টাল লাইন";
writeFile(path.join(contentDir, 'bn', 'smc', '_meta.json'), JSON.stringify(bnSmcMeta, null, 2) + '\n');

// ============================================================
// Update BN _meta.json for ICT (new entries)
// ============================================================
const bnIctMeta = JSON.parse(fs.readFileSync(path.join(contentDir, 'bn', 'ict', '_meta.json'), 'utf-8'));
bnIctMeta["options-flow-signals"] = "অপশন ফ্লো সিগন্যাল";
bnIctMeta["max-pain-theory"] = "ম্যাক্স পেইন থিওরি";
bnIctMeta["gamma-exposure"] = "গামা এক্সপোজার (GEX)";
bnIctMeta["put-call-ratio"] = "পুট/কল রেশিও সেন্টিমেন্ট";
bnIctMeta["options-expiry-pinning"] = "অপশন এক্সপায়রি পিনিং";
writeFile(path.join(contentDir, 'bn', 'ict', '_meta.json'), JSON.stringify(bnIctMeta, null, 2) + '\n');

// ============================================================
// Update BN _meta.json for Academy (new entries)
// ============================================================
const bnAcademyMeta = JSON.parse(fs.readFileSync(path.join(contentDir, 'bn', 'academy', '_meta.json'), 'utf-8'));
// Macro
bnAcademyMeta["central-bank-analysis"] = "সেন্ট্রাল ব্যাংক পলিসি অ্যানালাইসিস";
bnAcademyMeta["cot-report"] = "COT রিপোর্ট রিডিং";
bnAcademyMeta["institutional-positioning"] = "ইনস্টিটিউশনাল পজিশনিং ডেটা";
bnAcademyMeta["sentiment-analysis"] = "সেন্টিমেন্ট অ্যানালাইসিস";
bnAcademyMeta["carry-trade"] = "ক্যারি ট্রেড মেকানিক্স";
bnAcademyMeta["seasonal-patterns"] = "সিজনাল প্যাটার্ন";
bnAcademyMeta["interest-rate-differentials"] = "ইন্টারেস্ট রেট ডিফারেনশিয়াল";
bnAcademyMeta["gdp-inflation-cycles"] = "GDP ও ইনফ্লেশন সাইকেল";
// Execution
bnAcademyMeta["slippage-management"] = "স্লিপেজ ম্যানেজমেন্ট";
bnAcademyMeta["spread-dynamics"] = "স্প্রেড ডায়নামিক্স";
bnAcademyMeta["liquidity-providers"] = "লিকুইডিটি প্রোভাইডার বিহেভিয়ার";
bnAcademyMeta["ecn-vs-market-maker"] = "ECN vs মার্কেট মেকার";
bnAcademyMeta["smart-order-routing"] = "স্মার্ট অর্ডার রাউটিং";
bnAcademyMeta["twap-execution"] = "TWAP এক্সিকিউশন";
bnAcademyMeta["vwap-execution"] = "VWAP এক্সিকিউশন";
bnAcademyMeta["partial-fills-scaling"] = "পার্শিয়াল ফিল ও স্কেলিং";
// Crypto
bnAcademyMeta["funding-rate-trading"] = "ফান্ডিং রেট ট্রেডিং";
bnAcademyMeta["liquidation-heatmaps"] = "লিকুইডেশন হিটম্যাপ";
bnAcademyMeta["on-chain-analysis"] = "অন-চেইন অ্যানালাইসিস";
bnAcademyMeta["basis-trading"] = "বেসিস ট্রেডিং";
bnAcademyMeta["dex-liquidity-pools"] = "DEX লিকুইডিটি পুল";
bnAcademyMeta["mev-order-flow"] = "MEV ও অন-চেইন অর্ডার ফ্লো";
writeFile(path.join(contentDir, 'bn', 'academy', '_meta.json'), JSON.stringify(bnAcademyMeta, null, 2) + '\n');

// ============================================================
// Update BN frontmatter for SMC new files
// ============================================================
const bnSmcFiles = [
  { slug: 'supply-demand-zones', title: 'সাপ্লাই ও ডিমান্ড জোন — ইনস্টিটিউশনাল সম্পূর্ণ গাইড', description: 'ইনস্টিটিউশনাল সাপ্লাই ও ডিমান্ড জোন মাস্টার করুন। রিটেইল S&R এবং ইনস্টিটিউশনাল সাপ্লাই/ডিমান্ডের পার্থক্য, জোন চিহ্নিতকরণ নিয়ম ও ট্রেডিং স্ট্র্যাটেজি শিখুন।' },
  { slug: 'fresh-vs-tested', title: 'ফ্রেশ vs টেস্টেড জোন — জোন ভ্যালিডিটি', description: 'ফ্রেশ (আনটেস্টেড) ও টেস্টেড সাপ্লাই/ডিমান্ড জোনের পার্থক্য করতে শিখুন। ফ্রেশ জোনের উচ্চ সম্ভাব্যতা কেন এবং জোন কোয়ালিটি গ্রেড করুন।' },
  { slug: 'rally-base-rally', title: 'র‍্যালি-বেস-র‍্যালি ও ড্রপ-বেস-ড্রপ প্যাটার্ন', description: 'কন্টিনিউয়েশন সাপ্লাই/ডিমান্ড প্যাটার্ন মাস্টার করুন। RBR (র‍্যালি-বেস-র‍্যালি) ডিমান্ড জোন ও DBD (ড্রপ-বেস-ড্রপ) সাপ্লাই জোন শিখুন।' },
  { slug: 'zone-strength-scoring', title: 'জোন স্ট্রেংথ স্কোরিং মেথডলজি', description: 'জোন স্ট্রেংথ স্কোরিং সিস্টেম তৈরি করুন। ডিপার্চার স্পিড, লেভেলে সময়, ফ্রেশনেস ও ভলিউম ক্রাইটেরিয়া ব্যবহার করে সাপ্লাই/ডিমান্ড জোন মূল্যায়ন করুন।' },
  { slug: 'proximal-distal-lines', title: 'প্রক্সিমাল vs ডিস্টাল লাইন — প্রিসিশন জোন ট্রেডিং', description: 'সাপ্লাই/ডিমান্ড জোনের প্রক্সিমাল ও ডিস্টাল লাইন কনসেপ্ট মাস্টার করুন। এন্ট্রি, স্টপ ও টার্গেটের জন্য কোন বাউন্ডারি ব্যবহার করবেন শিখুন।' },
];

for (const item of bnSmcFiles) {
  const filePath = path.join(contentDir, 'bn', 'smc', `${item.slug}.mdx`);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/^---\ntitle: ".*?"\ndescription: ".*?"/ms, `---\ntitle: "${item.title}"\ndescription: "${item.description}"`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated: bn/smc/${item.slug}.mdx`);
}

// ============================================================
// Update BN frontmatter for ICT new files
// ============================================================
const bnIctFiles = [
  { slug: 'options-flow-signals', title: 'অপশন ফ্লো ডিরেকশনাল সিগন্যাল', description: 'হেজ ফান্ডরা কিভাবে ডিরেকশনাল ট্রেডিংয়ে অপশন ফ্লো ডেটা ব্যবহার করে শিখুন। বড় অপশন ট্রেড কিভাবে ইনস্টিটিউশনাল পজিশনিং ও প্রত্যাশিত মুভ প্রকাশ করে বুঝুন।' },
  { slug: 'max-pain-theory', title: 'ম্যাক্স পেইন থিওরি — অপশন এক্সপায়রি প্রাইস ম্যাগনেট', description: 'ম্যাক্স পেইন থিওরি মাস্টার করুন — যে প্রাইসে সর্বাধিক অপশন মূল্যহীন হয়ে যায়। মার্কেট মেকাররা কিভাবে গামা এক্সপোজার হেজ করে এবং প্রাইস ম্যাক্স পেইনের দিকে কেন আকৃষ্ট হয় শিখুন।' },
  { slug: 'gamma-exposure', title: 'গামা এক্সপোজার (GEX) — ইনস্টিটিউশনাল সাপোর্ট ও রেজিস্ট্যান্স', description: 'গামা এক্সপোজার অ্যানালাইসিস মাস্টার করুন। ডিলার হেজিং কিভাবে সাপোর্ট/রেজিস্ট্যান্স লেভেল তৈরি করে এবং গামা পজিটিভ থেকে নেগেটিভ রিজিমে কিভাবে ফ্লিপ করে শিখুন।' },
  { slug: 'put-call-ratio', title: 'পুট/কল রেশিও সেন্টিমেন্ট ইন্ডিকেটর', description: 'পুট/কল রেশিও সেন্টিমেন্ট ও কন্ট্রারিয়ান ইন্ডিকেটর হিসেবে ব্যবহার করুন। এক্সট্রিম রিডিং কিভাবে রিভার্সাল প্রেডিক্ট করে এবং ইনস্টিটিউশনরা কিভাবে অপশন সেন্টিমেন্ট পড়ে শিখুন।' },
  { slug: 'options-expiry-pinning', title: 'অপশন এক্সপায়রি পিনিং ইফেক্ট', description: 'অপশন এক্সপায়রি পিনিং বুঝুন — এক্সপায়রির কাছে সর্বোচ্চ ওপেন ইন্টারেস্টের স্ট্রাইকের দিকে প্রাইস কিভাবে আকৃষ্ট হয়। মাসিক/সাপ্তাহিক OpEx-এর আশেপাশে ট্রেড করতে শিখুন।' },
];

for (const item of bnIctFiles) {
  const filePath = path.join(contentDir, 'bn', 'ict', `${item.slug}.mdx`);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/^---\ntitle: ".*?"\ndescription: ".*?"/ms, `---\ntitle: "${item.title}"\ndescription: "${item.description}"`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated: bn/ict/${item.slug}.mdx`);
}

// ============================================================
// Update BN frontmatter for Academy new files (macro, execution, crypto)
// ============================================================
const bnAcademyFiles = [
  { slug: 'central-bank-analysis', title: 'সেন্ট্রাল ব্যাংক পলিসি অ্যানালাইসিস — হকিশ/ডভিশ স্কোরিং', description: 'ইনস্টিটিউশনাল ম্যাক্রো ট্রেডারদের মতো সেন্ট্রাল ব্যাংক কমিউনিকেশন অ্যানালাইজ করতে শিখুন। Fed, ECB, BOE ও BOJ পলিসি সিদ্ধান্তের জন্য হকিশ/ডভিশ স্কোরিং সিস্টেম তৈরি করুন।' },
  { slug: 'cot-report', title: 'COT রিপোর্ট রিডিং — CFTC কমিটমেন্ট অফ ট্রেডার্স', description: 'COT রিপোর্ট অ্যানালাইসিস মাস্টার করুন। CFTC পজিশনিং ডেটা পড়া, ইনস্টিটিউশনাল সেন্টিমেন্ট এক্সট্রিম চিনা এবং ফরেক্স ও কমোডিটিতে COT কন্ট্রারিয়ান ইন্ডিকেটর হিসেবে ব্যবহার শিখুন।' },
  { slug: 'institutional-positioning', title: 'ইনস্টিটিউশনাল পজিশনিং ডেটা — TFF ও DCOT রিপোর্ট', description: 'TFF (ট্রেডার্স ইন ফাইন্যান্সিয়াল ফিউচার্স) ও ডিসঅ্যাগ্রিগেটেড COT রিপোর্টের মাধ্যমে ইনস্টিটিউশনাল পজিশনিং বুঝুন।' },
  { slug: 'sentiment-analysis', title: 'সেন্টিমেন্ট অ্যানালাইসিস — রিটেইল পজিশনিং কন্ট্রারিয়ান সিগন্যাল', description: 'রিটেইল সেন্টিমেন্ট ডেটা কন্ট্রারিয়ান ইন্ডিকেটর হিসেবে ব্যবহার করতে শিখুন। রিটেইল যখন চরমভাবে লং, স্মার্ট মানি শর্ট।' },
  { slug: 'carry-trade', title: 'ক্যারি ট্রেড মেকানিক্স — ইন্টারেস্ট রেট ডিফারেনশিয়াল', description: 'ইনস্টিটিউশনাল FX ডেস্কের ক্যারি ট্রেড স্ট্র্যাটেজি মাস্টার করুন। ইন্টারেস্ট রেট ডিফারেনশিয়াল কিভাবে কারেন্সি ফ্লো ড্রাইভ করে শিখুন।' },
  { slug: 'seasonal-patterns', title: 'সিজনাল প্যাটার্ন ও ক্যালেন্ডার টেন্ডেন্সি', description: 'ফরেক্স, কমোডিটি ও ইকুইটিতে সিজনাল প্যাটার্ন শিখুন। জানুয়ারি ইফেক্ট, সেল-ইন-মে, কোয়ার্টার-এন্ড ফ্লো বুঝুন।' },
  { slug: 'interest-rate-differentials', title: 'ফরেক্সের জন্য ইন্টারেস্ট রেট ডিফারেনশিয়াল মডেল', description: 'কারেন্সি ট্রেডিংয়ে ইন্টারেস্ট রেট ডিফারেনশিয়াল অ্যানালাইসিস মাস্টার করুন। রেট এক্সপেক্টেশন কিভাবে ফরেক্স ফ্লো ড্রাইভ করে শিখুন।' },
  { slug: 'gdp-inflation-cycles', title: 'GDP ও ইনফ্লেশন সাইকেল ম্যাপিং', description: 'ট্রেডিং সিদ্ধান্তের জন্য ইকোনমিক সাইকেল ম্যাপ করুন। বিজনেস সাইকেলে আমরা কোথায় আছি চিনুন এবং সেই অনুযায়ী পজিশন করুন।' },
  { slug: 'slippage-management', title: 'স্লিপেজ ম্যানেজমেন্ট — সম্পূর্ণ গাইড', description: 'ইনস্টিটিউশনাল ডেস্কের স্লিপেজ ম্যানেজমেন্ট টেকনিক মাস্টার করুন। এক্সিকিউশন খরচ কমানো, ভোলাটিলিটিতে স্লিপেজ ম্যানেজ এবং অর্ডার টাইপ অপটিমাইজ শিখুন।' },
  { slug: 'spread-dynamics', title: 'মার্কেট ইভেন্টে স্প্রেড ডায়নামিক্স', description: 'নিউজ ইভেন্ট, রোলওভার ও লো লিকুইডিটিতে স্প্রেড কিভাবে প্রসারিত হয় বুঝুন। স্প্রেড এক্সপ্যানশনের আশেপাশে ট্রেডিংয়ের ইনস্টিটিউশনাল অ্যাপ্রোচ শিখুন।' },
  { slug: 'liquidity-providers', title: 'লিকুইডিটি প্রোভাইডার বিহেভিয়ার ও মার্কেট মেকিং', description: 'লিকুইডিটি প্রোভাইডার ও মার্কেট মেকাররা কিভাবে অপারেট করে বুঝুন। তাদের হেজিং স্ট্র্যাটেজি ও কিভাবে তাদের বিহেভিয়ার ট্রেডেবল প্যাটার্ন তৈরি করে শিখুন।' },
  { slug: 'ecn-vs-market-maker', title: 'ECN vs মার্কেট মেকার ব্রোকার', description: 'ECN/STP ও মার্কেট মেকার ব্রোকার মডেলের পার্থক্য বুঝুন। আপনার ব্রোকার টাইপ কিভাবে এক্সিকিউশন, প্রাইসিং ও সম্ভাব্য কনফ্লিক্ট অফ ইন্টারেস্ট প্রভাবিত করে শিখুন।' },
  { slug: 'smart-order-routing', title: 'স্মার্ট অর্ডার রাউটিং — ইনস্টিটিউশনাল এক্সিকিউশন', description: 'ইনস্টিটিউশনাল ট্রেডারদের জন্য স্মার্ট অর্ডার রাউটিং (SOR) কিভাবে কাজ করে শিখুন। বড় অর্ডার কিভাবে ভেন্যু জুড়ে বেস্ট এক্সিকিউশনের জন্য রাউট করা হয় বুঝুন।' },
  { slug: 'twap-execution', title: 'TWAP এক্সিকিউশন অ্যালগরিদম', description: 'টাইম-ওয়েটেড এভারেজ প্রাইস (TWAP) এক্সিকিউশন মাস্টার করুন। ইনস্টিটিউশনরা কিভাবে TWAP অ্যালগরিদম ব্যবহার করে ন্যূনতম মার্কেট ইম্প্যাক্টে বড় অর্ডার এক্সিকিউট করে শিখুন।' },
  { slug: 'vwap-execution', title: 'VWAP এক্সিকিউশন অ্যালগরিদম', description: 'ইনস্টিটিউশনাল ডেস্কের VWAP এক্সিকিউশন অ্যালগরিদম মাস্টার করুন। ফান্ডরা কিভাবে VWAP-এর বিপরীতে এক্সিকিউশন বেঞ্চমার্ক করে শিখুন।' },
  { slug: 'partial-fills-scaling', title: 'পার্শিয়াল ফিল ও প্রিসিশন স্কেলিং স্ট্র্যাটেজি', description: 'ইনস্টিটিউশনাল স্কেলিং টেকনিক শিখুন — কিভাবে পার্টে পজিশন তৈরি ও এক্সিট করবেন। DCA, পিরামিড স্কেলিং ও ব্লক-ফিলিং মেথডলজি মাস্টার করুন।' },
  { slug: 'funding-rate-trading', title: 'ফান্ডিং রেট ট্রেডিং — পার্পেচুয়াল ফিউচার্স এজ', description: 'ফান্ডিং রেট ট্রেডিং স্ট্র্যাটেজি মাস্টার করুন। ফান্ডিং রেট ইমব্যালেন্স থেকে কিভাবে প্রফিট করবেন এবং ক্রাউডেড ট্রেড চিনবেন শিখুন।' },
  { slug: 'liquidation-heatmaps', title: 'লিকুইডেশন হিটম্যাপ ও ক্যাসকেড', description: 'ক্রিপ্টো ট্রেডিংয়ে লিকুইডেশন অ্যানালাইসিস মাস্টার করুন। লিকুইডেশন হিটম্যাপ পড়া, ক্যাসকেড ইভেন্ট প্রেডিক্ট করা এবং লিকুইডেশন-ড্রিভেন মুভের জন্য পজিশন করা শিখুন।' },
  { slug: 'on-chain-analysis', title: 'অন-চেইন অ্যানালাইসিস — হোয়েল ওয়ালেট ও এক্সচেঞ্জ ফ্লো', description: 'ইনস্টিটিউশনাল ক্রিপ্টো ট্রেডিংয়ের জন্য অন-চেইন অ্যানালাইসিস মাস্টার করুন। হোয়েল ওয়ালেট ট্র্যাক, এক্সচেঞ্জ ইনফ্লো/আউটফ্লো এবং মেজর মুভ প্রেডিক্ট করা শিখুন।' },
  { slug: 'basis-trading', title: 'বেসিস ট্রেডিং ও ক্যাশ-অ্যান্ড-ক্যারি আর্বিট্রাজ', description: 'ক্রিপ্টো ফান্ডের বেসিস ট্রেডিং স্ট্র্যাটেজি শিখুন। ফিউচার্স প্রিমিয়াম, ক্যাশ-অ্যান্ড-ক্যারি আর্বিট্রাজ এবং মার্কেট-নিউট্রাল রিটার্নের জন্য ফান্ডিং রেট আর্বিট্রাজ বুঝুন।' },
  { slug: 'dex-liquidity-pools', title: 'DEX লিকুইডিটি পুল ডায়নামিক্স', description: 'DEX লিকুইডিটি পুল ও প্রাইসে তাদের প্রভাব বুঝুন। ইমপার্মানেন্ট লস, কনসেনট্রেটেড লিকুইডিটি এবং বড় LP পজিশন কিভাবে সাপোর্ট/রেজিস্ট্যান্স তৈরি করে শিখুন।' },
  { slug: 'mev-order-flow', title: 'MEV ও অন-চেইন অর্ডার ফ্লো', description: 'ম্যাক্সিমাল এক্সট্র্যাক্টেবল ভ্যালু (MEV) ও অন-চেইন অর্ডার ফ্লো বুঝুন। সার্চার, বিল্ডার ও ভ্যালিডেটর কিভাবে ভ্যালু এক্সট্র্যাক্ট করে এবং আপনার ট্রেডে কিভাবে প্রভাব ফেলে শিখুন।' },
];

for (const item of bnAcademyFiles) {
  const filePath = path.join(contentDir, 'bn', 'academy', `${item.slug}.mdx`);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/^---\ntitle: ".*?"\ndescription: ".*?"/ms, `---\ntitle: "${item.title}"\ndescription: "${item.description}"`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated: bn/academy/${item.slug}.mdx`);
}

console.log('\n✅ All Bangla translations updated!');

