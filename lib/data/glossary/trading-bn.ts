import type { GlossaryTerm } from "./types";

export const tradingTermsBn: GlossaryTerm[] = [
  {
    term: "Accumulation (অ্যাকুমুলেশন)",
    definition:
      "একটি ফেজ যেখানে ইনস্টিটিউশনাল ট্রেডাররা বড় প্রাইস মুভের আগে নীরবে পজিশন তৈরি করে। প্রাইস একটি রেঞ্জে কনসলিডেট করে যখন স্মার্ট মানি লিকুইডিটি শোষণ করে।",
    category: "SMC",
  },
  {
    term: "AMD (অ্যাকুমুলেশন, ম্যানিপুলেশন, ডিস্ট্রিবিউশন)",
    definition: "ICT কনসেপ্ট যা তিনটি ফেজ বর্ণনা করে: পজিশন তৈরি, স্টপ ট্রিগার, তারপর টার্গেটে প্রাইস ডেলিভারি।",
    category: "ICT",
  },
  {
    term: "Ask Price (আস্ক প্রাইস)",
    definition: "একটি সম্পদ বিক্রয়ের জন্য বিক্রেতার সর্বনিম্ন গ্রহণযোগ্য মূল্য। Ask ও Bid-এর পার্থক্যই হলো Spread।",
    category: "Basic",
  },
  {
    term: "ATR (এভারেজ ট্রু রেঞ্জ)",
    definition:
      "একটি ভোলাটিলিটি ইন্ডিকেটর যা নির্দিষ্ট পিরিয়ডে প্রাইস মুভমেন্টের গড় রেঞ্জ পরিমাপ করে। Stop loss ও position sizing-এ ব্যবহৃত হয়।",
    category: "Indicator",
  },
  {
    term: "Asian Range (এশিয়ান রেঞ্জ)",
    definition:
      "এশিয়ান/টোকিও সেশনে গঠিত প্রাইস রেঞ্জ। লন্ডন সেশন ম্যানিপুলেশনের রেফারেন্স হিসেবে ব্যবহৃত হয়। BD সময়: সকাল ৫:০০ - দুপুর ২:০০।",
    category: "ICT",
  },
  {
    term: "Bearish (বিয়ারিশ)",
    definition:
      "মার্কেটের এমন অবস্থা যা প্রাইস পতনের ইঙ্গিত দেয়। বিয়ারিশ ক্যান্ডেল তাদের ওপেন প্রাইসের নিচে ক্লোজ হয়।",
    category: "Basic",
  },
  {
    term: "Bearish Engulfing (বিয়ারিশ এনগালফিং)",
    definition:
      "একটি দুই-ক্যান্ডেল রিভার্সাল প্যাটার্ন যেখানে বিয়ারিশ ক্যান্ডেল আগের বুলিশ ক্যান্ডেলকে পুরোপুরি গ্রাস করে।",
    category: "Price Action",
  },
  {
    term: "Bid Price (বিড প্রাইস)",
    definition:
      "একটি সম্পদ ক্রয়ের জন্য ক্রেতার সর্বোচ্চ প্রস্তাবিত মূল্য। রিটেইল সেল অর্ডার বিড প্রাইসে এক্সিকিউট হয়।",
    category: "Basic",
  },
  {
    term: "BOS (ব্রেক অফ স্ট্রাকচার)",
    definition:
      "যখন প্রাইস একটি সুইং হাই (আপট্রেন্ডে) বা সুইং লো (ডাউনট্রেন্ডে) ভেঙে দেয়, ট্রেন্ড কন্টিনিউয়েশন কনফার্ম করে। SMC-তে সবচেয়ে গুরুত্বপূর্ণ কনফার্মেশন সিগন্যাল।",
    category: "SMC",
  },
  {
    term: "Breaker Block (ব্রেকার ব্লক)",
    definition: "একটি ব্যর্থ অর্ডার ব্লক যা ভায়োলেট হওয়ার পর বিপরীত দিক থেকে সাপোর্ট/রেজিস্ট্যান্স হিসেবে কাজ করে।",
    category: "SMC",
  },
  {
    term: "Breakout (ব্রেকআউট)",
    definition:
      "যখন প্রাইস সাপোর্ট, রেজিস্ট্যান্স বা কনসলিডেশন রেঞ্জ মোমেন্টাম সহ অতিক্রম করে। ভ্যালিড ব্রেকআউটে displacement ও volume থাকে।",
    category: "Price Action",
  },
  {
    term: "Bullish (বুলিশ)",
    definition:
      "মার্কেটের এমন অবস্থা যা প্রাইস বৃদ্ধির ইঙ্গিত দেয়। বুলিশ ক্যান্ডেল তাদের ওপেন প্রাইসের উপরে ক্লোজ হয়।",
    category: "Basic",
  },
  {
    term: "Bullish Engulfing (বুলিশ এনগালফিং)",
    definition:
      "একটি দুই-ক্যান্ডেল রিভার্সাল প্যাটার্ন যেখানে বুলিশ ক্যান্ডেল আগের বিয়ারিশ ক্যান্ডেলকে পুরোপুরি গ্রাস করে, আপসাইড রিভার্সাল ইঙ্গিত করে।",
    category: "Price Action",
  },
  {
    term: "Buy-side Liquidity / BSL (বাই-সাইড লিকুইডিটি)",
    definition:
      "সুইং হাই, ইকুয়াল হাই এবং রেজিস্ট্যান্স লেভেলের উপরে থাকা স্টপ-লস অর্ডার। ইনস্টিটিউশনরা প্রাইস নামানোর আগে এগুলো টার্গেট করে।",
    category: "SMC",
  },
  {
    term: "Candlestick (ক্যান্ডেলস্টিক)",
    definition:
      "চার্টে প্রতিটি সময়কালের Open, High, Low, Close দেখানো চার্ট উপস্থাপন। বডি open-close রেঞ্জ দেখায়, উইক high-low দেখায়।",
    category: "Basic",
  },
  {
    term: "CHOCH (চেঞ্জ অফ ক্যারেক্টার)",
    definition:
      "বিদ্যমান ট্রেন্ডের বিপরীতে প্রথম মার্কেট স্ট্রাকচার ব্রেক। আপট্রেন্ডে প্রথম lower low বা ডাউনট্রেন্ডে প্রথম higher high। সম্ভাব্য রিভার্সালের প্রথম চিহ্ন।",
    category: "SMC",
  },
  {
    term: "Compression (কম্প্রেশন)",
    definition:
      "রেজিস্ট্যান্সে higher low বা সাপোর্টে lower high তৈরি করা, একটি বিস্ফোরক মুভের জন্য শক্তি জমা করা। অর্ডার শোষিত হওয়ার ইঙ্গিত।",
    category: "Price Action",
  },
  {
    term: "Confluence (কনফ্লুয়েন্স)",
    definition:
      "যখন একাধিক টেকনিক্যাল ফ্যাক্টর (অর্ডার ব্লক, FVG, ফিব লেভেল, লিকুইডিটি) একই প্রাইস জোনে মিলে যায়, ট্রেড সম্ভাবনা উল্লেখযোগ্যভাবে বৃদ্ধি করে।",
    category: "Price Action",
  },
  {
    term: "Consolidation (কনসলিডেশন)",
    definition:
      "প্রাইস একটি নির্দিষ্ট রেঞ্জের মধ্যে সাইডওয়েজ মুভ করার পিরিয়ড। স্মার্ট মানি কনসলিডেশন ব্যবহার করে পজিশন accumulate বা distribute করতে।",
    category: "Basic",
  },
  {
    term: "Daily Bias (ডেইলি বায়াস)",
    definition:
      "হায়ার টাইমফ্রেম অ্যানালাইসিস, আগের দিনের ক্লোজ এবং ইনস্টিটিউশনাল অর্ডার ফ্লোর উপর ভিত্তি করে আজকের প্রত্যাশিত দিক।",
    category: "ICT",
  },
  {
    term: "Dealing Range (ডিলিং রেঞ্জ)",
    definition:
      "একটি গুরুত্বপূর্ণ সুইং হাই ও সুইং লো-এর মধ্যবর্তী রেঞ্জ যা বর্তমান প্রাইস অ্যাকশন ধারণ করে। Premium/discount অ্যানালাইসিসে ব্যবহৃত।",
    category: "ICT",
  },
  {
    term: "Discount Zone (ডিসকাউন্ট জোন)",
    definition:
      "ডিলিং রেঞ্জের নিচের অর্ধেক (৫০%-এর নিচে) যেখানে প্রাইস সস্তা বলে বিবেচিত। ইনস্টিটিউশনাল বায়াররা ডিসকাউন্ট জোনে এন্ট্রি খোঁজে।",
    category: "SMC",
  },
  {
    term: "Displacement (ডিসপ্লেসমেন্ট)",
    definition:
      "বড় বডি ক্যান্ডেল সহ শক্তিশালী ইমপালসিভ প্রাইস মুভ যা FVG তৈরি করে। আক্রমণাত্মক ইনস্টিটিউশনাল কার্যকলাপ ও প্রতিশ্রুতি ইঙ্গিত করে।",
    category: "SMC",
  },
  {
    term: "Distribution (ডিস্ট্রিবিউশন)",
    definition: "যে ফেজে ইনস্টিটিউশনরা তাদের আগে accumulate করা পজিশন বিক্রি/আনলোড করে, সাধারণত প্রিমিয়াম প্রাইসে।",
    category: "SMC",
  },
  {
    term: "Drawdown (ড্রডাউন)",
    definition:
      "সর্বোচ্চ ইকুইটি থেকে সর্বনিম্ন পয়েন্ট পর্যন্ত শতাংশ পতন। ১০% ড্রডাউন মানে সর্বোচ্চ ব্যালেন্স থেকে ১০% হারানো।",
    category: "Risk",
  },
  {
    term: "Equal Highs / EQH (ইকুয়াল হাই)",
    definition:
      "দুই বা ততোধিক সুইং হাই প্রায় একই প্রাইসে। Buy-side liquidity pool হিসেবে কাজ করে যা ইনস্টিটিউশনরা টার্গেট করবে।",
    category: "SMC",
  },
  {
    term: "Equal Lows / EQL (ইকুয়াল লো)",
    definition:
      "দুই বা ততোধিক সুইং লো প্রায় একই প্রাইসে। Sell-side liquidity pool হিসেবে কাজ করে যা ইনস্টিটিউশনরা টার্গেট করবে।",
    category: "SMC",
  },
  {
    term: "Equilibrium (ইকুইলিব্রিয়াম)",
    definition:
      "যেকোনো ডিলিং রেঞ্জের ৫০% লেভেল। এই লেভেলে প্রাইস 'ফেয়ার ভ্যালু'-তে আছে — প্রিমিয়ামও না, ডিসকাউন্টও না।",
    category: "SMC",
  },
  {
    term: "Expansion (এক্সপ্যানশন)",
    definition:
      "কনসলিডেশন বা ম্যানিপুলেশনের পর প্রাইস আক্রমণাত্মকভাবে ও দিকনির্দেশনামূলকভাবে মুভ করার ফেজ। Distribution/delivery ফেজ।",
    category: "Price Action",
  },
  {
    term: "Fair Value Gap / FVG (ফেয়ার ভ্যালু গ্যাপ)",
    definition:
      "তিন-ক্যান্ডেল ইমব্যালেন্স যেখানে ক্যান্ডেল ১-এর হাই ও ক্যান্ডেল ৩-এর লো ওভারল্যাপ করে না (বুলিশ)। ইনস্টিটিউশনাল ইমব্যালেন্স প্রতিনিধিত্ব করে এবং প্রাইস প্রায়ই ফিরে আসে।",
    category: "SMC",
  },
  {
    term: "Fakeout (ফেকআউট)",
    definition:
      "একটি ফলস ব্রেকআউট যেখানে প্রাইস সংক্ষিপ্তভাবে একটি লেভেল অতিক্রম করে স্টপ ট্রিগার করার পর তীব্রভাবে রিভার্স করে। ইনস্টিটিউশনদের মূল ম্যানিপুলেশন টেকনিক।",
    category: "Price Action",
  },
  {
    term: "Fibonacci Retracement (ফিবোনাচ্চি রিট্রেসমেন্ট)",
    definition:
      "সুইং হাই ও লো-এর মাঝে মূল অনুপাতে (২৩.৬%, ৩৮.২%, ৫০%, ৬১.৮%, ৭৮.৬%) অনুভূমিক রেখা আঁকার টুল। ৬১.৮-৭৮.৬% জোনই OTE।",
    category: "ICT",
  },
  {
    term: "Forex (ফরেক্স)",
    definition:
      "বৈদেশিক মুদ্রা বিনিময় বাজার। দৈনিক $৭.৫ ট্রিলিয়ন ভলিউম সহ বিশ্বের বৃহত্তম আর্থিক বাজার। ২৪/৫ চালু থাকে।",
    category: "Basic",
  },
  {
    term: "Gap (গ্যাপ)",
    definition: "যেখানে কোনো ট্রেডিং হয়নি এমন প্রাইস এরিয়া। ফরেক্সে উইকেন্ড গ্যাপ ও স্টকে ওভারনাইট গ্যাপ সাধারণ।",
    category: "Basic",
  },
  {
    term: "Hammer (হ্যামার)",
    definition:
      "একটি বুলিশ রিভার্সাল ক্যান্ডেল — উপরে ছোট বডি, নিচে লম্বা উইক (বডির কমপক্ষে ২ গুণ)। নিম্ন প্রাইসের শক্তিশালী প্রত্যাখ্যান দেখায়।",
    category: "Price Action",
  },
  {
    term: "Higher High / HH (হায়ার হাই)",
    definition: "আগের সুইং হাই-এর উপরে নতুন সুইং হাই, বুলিশ মার্কেট স্ট্রাকচার ও ট্রেন্ড কন্টিনিউয়েশন কনফার্ম করে।",
    category: "Price Action",
  },
  {
    term: "Higher Low / HL (হায়ার লো)",
    definition:
      "আগের সুইং লো-এর উপরে নতুন সুইং লো, দেখায় যে বায়াররা উচ্চ প্রাইসে ঢুকছে। আপট্রেন্ড কনফার্মেশনের মূল চিহ্ন।",
    category: "Price Action",
  },
  {
    term: "ICT (আইসিটি / ইনার সার্কেল ট্রেডার)",
    definition:
      "Michael J. Huddleston-এর তৈরি ট্রেডিং মেথডলজি যা ইনস্টিটিউশনাল অর্ডার ফ্লো, টাইম-বেসড মডেল ও মার্কেট মেকার অ্যালগরিদমের উপর ফোকাস করে।",
    category: "ICT",
  },
  {
    term: "Imbalance (ইমব্যালেন্স)",
    definition:
      "যে এরিয়ায় আক্রমণাত্মক একতরফা ট্রেডিং অদক্ষ প্রাইস ডেলিভারি তৈরি করেছে। FVG ও volume imbalance হলো ইমব্যালেন্সের ধরন যেখানে প্রাইস ফিরে আসে।",
    category: "SMC",
  },
  {
    term: "Inducement (ইনডিউসমেন্ট)",
    definition:
      "ছোট সুইং হাই/লো যা রিটেইল ট্রেডারদের পজিশনে প্রলুব্ধ করে রিভার্সের আগে। আসল মুভের আগে সুইপ হওয়া ছোট লিকুইডিটি পুল।",
    category: "SMC",
  },
  {
    term: "Institutional Order Flow (ইনস্টিটিউশনাল অর্ডার ফ্লো)",
    definition:
      "মার্কেটে বড় প্লেয়ারদের (ব্যাংক, হেজ ফান্ড) ফুটপ্রিন্ট, displacement, FVG, order block ও liquidity sweep দ্বারা চিহ্নিত।",
    category: "SMC",
  },
  {
    term: "Internal Liquidity (ইন্টার্নাল লিকুইডিটি)",
    definition:
      "ডিলিং রেঞ্জের মধ্যে ছোট সুইং পয়েন্ট দ্বারা তৈরি লিকুইডিটি। রেঞ্জ এক্সট্রিমের external liquidity থেকে পৃথক।",
    category: "SMC",
  },
  {
    term: "Judas Swing (জুডাস সুইং)",
    definition:
      "ICT কনসেপ্ট: সেশন ওপেনে একটি ফলস মুভ যা ট্রেডারদের ফাঁদে ফেলে আসল মুভের আগে। মার্কেট আর্লি এন্ট্রিগুলোকে 'বিশ্বাসঘাতকতা' করে।",
    category: "ICT",
  },
  {
    term: "Kill Zone (কিল জোন)",
    definition:
      "নির্দিষ্ট হাই-প্রবাবিলিটি টাইম উইন্ডো: London (BD সময় ৮:০০-১১:০০ AM), NY (BD সময় ৫:০০-৮:০০ PM)। যখন ইনস্টিটিউশনরা তাদের অর্ডার এক্সিকিউট করে।",
    category: "ICT",
  },
  {
    term: "Leverage (লিভারেজ)",
    definition:
      "ধার করা মূলধন ব্যবহার করে পজিশন সাইজ বড় করা। ১:১০০ লিভারেজ মানে $১,০০০ দিয়ে $১০০,০০০ কন্ট্রোল করা। লাভ ও ক্ষতি উভয়ই বহুগুণ বাড়ায়।",
    category: "Basic",
  },
  {
    term: "Limit Order (লিমিট অর্ডার)",
    definition:
      "বর্তমান মার্কেট প্রাইসের নিচে কিনতে বা উপরে বিক্রি করতে অর্ডার। পূর্বনির্ধারিত লেভেলে (order block, FVG) এন্ট্রির জন্য ব্যবহৃত।",
    category: "Basic",
  },
  {
    term: "Liquidity (লিকুইডিটি)",
    definition:
      "মূল প্রাইস লেভেলে বিশ্রামরত অর্ডারের (স্টপ লস, পেন্ডিং অর্ডার) ক্লাস্টার। ইনস্টিটিউশনদের বড় পজিশন পূরণে লিকুইডিটি প্রয়োজন।",
    category: "SMC",
  },
  {
    term: "Liquidity Grab (লিকুইডিটি গ্র্যাব)",
    definition:
      "যখন প্রাইস দ্রুত একটি কী লেভেলে স্টপ লস নিয়ে নেয় রিভার্সের আগে। ইনস্টিটিউশনদের এন্ট্রির জন্য প্রয়োজনীয় জ্বালানি।",
    category: "SMC",
  },
  {
    term: "Liquidity Pool (লিকুইডিটি পুল)",
    definition: "সুস্পষ্ট টেকনিক্যাল লেভেলে (সুইং হাই/লো, রাউন্ড নম্বর, ট্রেন্ডলাইন) স্টপ-লস অর্ডারের ঘনত্ব।",
    category: "SMC",
  },
  {
    term: "Liquidity Sweep (লিকুইডিটি সুইপ)",
    definition: "প্রাইস একটি লিকুইডিটি লেভেল নিয়ে (স্টপ রান করে) রিভার্স করে। সুইপের পর displacement আসলে কনফার্মেশন।",
    category: "SMC",
  },
  {
    term: "Lot Size (লট সাইজ)",
    definition:
      "Standard lot = ১,০০,০০০ ইউনিট, Mini = ১০,০০০, Micro = ১,০০০, Nano = ১০০ ইউনিট। পিপ ভ্যালু নির্ধারণ করে।",
    category: "Basic",
  },
  {
    term: "Lower High / LH (লোয়ার হাই)",
    definition:
      "আগের সুইং হাই-এর নিচে নতুন সুইং হাই, সেলাররা কন্ট্রোল নিচ্ছে বোঝায়। ডাউনট্রেন্ড স্ট্রাকচারের মূল চিহ্ন।",
    category: "Price Action",
  },
  {
    term: "Lower Low / LL (লোয়ার লো)",
    definition: "আগের সুইং লো-এর নিচে নতুন সুইং লো, বিয়ারিশ কন্টিনিউয়েশন ও ডাউনট্রেন্ড স্ট্রাকচার কনফার্ম করে।",
    category: "Price Action",
  },
  {
    term: "Manipulation (ম্যানিপুলেশন)",
    definition:
      "রিটেইল স্টপ ট্রিগার ও আসল মুভের আগে লিকুইডিটি তৈরি করতে ইনস্টিটিউশনাল প্রাইস ইঞ্জিনিয়ারিং। AMD-তে 'M'।",
    category: "SMC",
  },
  {
    term: "Margin (মার্জিন)",
    definition:
      "লিভারেজড পজিশন খুলতে ও বজায় রাখতে প্রয়োজনীয় জামানত। ইকুইটি maintenance margin-এর নিচে পড়লে Margin Call হয়।",
    category: "Basic",
  },
  {
    term: "Margin Call",
    definition:
      "A broker notification that account equity has fallen below maintenance requirements. Positions may be forcibly closed if additional funds aren't deposited.",
    category: "Risk",
  },
  {
    term: "Market Maker Model / MMM (মার্কেট মেকার মডেল)",
    definition:
      "ICT কনসেপ্ট: ইনস্টিটিউশনরা কিভাবে প্রাইস ইঞ্জিনিয়ার করে — original consolidation, smart money reversal, BOS, ও বিপরীত liquidity pool-এ delivery।",
    category: "ICT",
  },
  {
    term: "Market Structure (মার্কেট স্ট্রাকচার)",
    definition:
      "সুইং হাই ও লো-এর বিন্যাস যা ট্রেন্ড দিক নির্ধারণ করে। Bullish = HH+HL, Bearish = LH+LL, Ranging = সমান লেভেল।",
    category: "SMC",
  },
  {
    term: "MSS (মার্কেট স্ট্রাকচার শিফট)",
    definition:
      "Displacement সহ মার্কেট স্ট্রাকচারের নির্ণায়ক ভাঙন, CHOCH-এর চেয়ে শক্তিশালী। নতুন দিকে ইনস্টিটিউশনাল প্রতিশ্রুতি ইঙ্গিত করে।",
    category: "SMC",
  },
  {
    term: "Mitigation Block (মিটিগেশন ব্লক)",
    definition: "যে প্রাইস জোনে ইনস্টিটিউশনরা আগে লস করেছে এবং প্রাইস ফিরলে ব্রেক-ইভেনে অর্ডার রাখবে।",
    category: "SMC",
  },
  {
    term: "Momentum (মোমেন্টাম)",
    definition:
      "প্রাইস মুভমেন্টের গতি ও ত্বরণ। শক্তিশালী মোমেন্টাম = বড় ক্যান্ডেল ছোট উইক। দুর্বল মোমেন্টাম = ছোট ক্যান্ডেল বড় উইক।",
    category: "Price Action",
  },
  {
    term: "Naked POI (নেকেড পয়েন্ট অফ ইন্টারেস্ট)",
    definition:
      "এমন unmitigated order block, FVG বা breaker block যেখানে প্রাইস এখনো রিটেস্ট করেনি। ভবিষ্যত এন্ট্রির হাই-প্রায়োরিটি জোন।",
    category: "SMC",
  },
  {
    term: "OTE (অপটিমাল ট্রেড এন্ট্রি)",
    definition:
      "ICT-এর প্রিমিয়াম এন্ট্রি জোন — expansion leg-এর ৬২% থেকে ৭৯% Fibonacci retracement-এর মধ্যে। রিট্রেসমেন্টে সর্বোচ্চ সম্ভাবনার এন্ট্রি।",
    category: "ICT",
  },
  {
    term: "Order Block / OB (অর্ডার ব্লক)",
    definition:
      "একটি গুরুত্বপূর্ণ displacement move-এর আগে শেষ বিপরীত ক্যান্ডেল (বা ক্যান্ডেল গ্রুপ)। ইনস্টিটিউশনাল অর্ডার প্লেসমেন্ট জোন প্রতিনিধিত্ব করে।",
    category: "SMC",
  },
  {
    term: "PD Array (পিডি অ্যারে)",
    definition:
      "Premium/Discount Array — ইনস্টিটিউশনাল রেফারেন্স পয়েন্ট: order block, FVG, breaker block, mitigation block, ও liquidity void।",
    category: "ICT",
  },
  {
    term: "Pip (পিপ)",
    definition:
      "Point In Percentage — সবচেয়ে ছোট স্ট্যান্ডার্ড প্রাইস মুভমেন্ট। বেশিরভাগ ফরেক্স পেয়ারে ১ pip = ০.০০০১। JPY পেয়ারে ১ pip = ০.০১।",
    category: "Basic",
  },
  {
    term: "Position Sizing (পজিশন সাইজিং)",
    definition:
      "অ্যাকাউন্ট ব্যালেন্স, রিস্ক শতাংশ ও স্টপ লস দূরত্বের উপর ভিত্তি করে সঠিক লট সাইজ ক্যালকুলেট করা। রিস্ক ম্যানেজমেন্টের ভিত্তি।",
    category: "Risk",
  },
  {
    term: "Power of 3 / PO3 (পাওয়ার অফ ৩)",
    definition:
      "ICT কনসেপ্ট: যেকোনো সেশন বা ক্যান্ডেলের তিনটি ফেজ — Accumulation (open), Manipulation (false move), Distribution (real move to close)।",
    category: "ICT",
  },
  {
    term: "Premium Zone (প্রিমিয়াম জোন)",
    definition:
      "ডিলিং রেঞ্জের উপরের অর্ধেক (৫০%-এর উপরে) যেখানে প্রাইস দামি। ইনস্টিটিউশনাল সেলাররা প্রিমিয়াম জোনে এন্ট্রি খোঁজে।",
    category: "SMC",
  },
  {
    term: "Price Action (প্রাইস অ্যাকশন)",
    definition:
      "ইন্ডিকেটর ছাড়া কাঁচা প্রাইস মুভমেন্ট পড়া। ক্যান্ডেলস্টিক প্যাটার্ন, মার্কেট স্ট্রাকচার ও সাপ্লাই/ডিমান্ড জোন অ্যানালাইসিস করা।",
    category: "Price Action",
  },
  {
    term: "Pullback (পুলব্যাক)",
    definition:
      "ট্রেন্ড দিকের বিপরীতে সাময়িক রিট্রেসমেন্ট। স্বাস্থ্যকর পুলব্যাক আগের impulse leg-এর ৩৮.২-৬১.৮% রিট্রেস করে।",
    category: "Price Action",
  },
  {
    term: "Range (রেঞ্জ)",
    definition:
      "একটি অনুভূমিক প্রাইস চ্যানেল যেখানে প্রাইস সাপোর্ট ও রেজিস্ট্যান্সের মাঝে বাউন্স করে স্পষ্ট ট্রেন্ড ছাড়া।",
    category: "Price Action",
  },
  {
    term: "Resistance (রেজিস্ট্যান্স)",
    definition:
      "যে প্রাইস লেভেলে বিক্রয়ের চাপ ঐতিহাসিকভাবে আরও উর্ধ্বমুখী মুভমেন্ট ঠেকায়। SMC-তে, এর উপরের লিকুইডিটি সুইপ হবে।",
    category: "Price Action",
  },
  {
    term: "Risk Management (রিস্ক ম্যানেজমেন্ট)",
    definition:
      "পজিশন সাইজিং, স্টপ লস ও সর্বোচ্চ ড্রডাউন নিয়মের মাধ্যমে সম্ভাব্য ক্ষতি সীমিত করার অনুশীলন। প্রতি ট্রেডে সর্বোচ্চ ১-২% রিস্ক।",
    category: "Risk",
  },
  {
    term: "Risk-to-Reward / RRR (রিস্ক-টু-রিওয়ার্ড)",
    definition:
      "সম্ভাব্য লস (স্টপ দূরত্ব) ও সম্ভাব্য লাভের (টেক প্রফিট দূরত্ব) অনুপাত। ১:৩ RRR মানে $১০০ রিস্কে $৩০০ লাভের সুযোগ।",
    category: "Risk",
  },
  {
    term: "Scalping (স্ক্যাল্পিং)",
    definition:
      "ছোট লাভের (৫-২০ পিপ) জন্য অনেক দ্রুত ট্রেড নেওয়া। দ্রুত execution, টাইট স্প্রেড ও precise entry প্রয়োজন।",
    category: "Basic",
  },
  {
    term: "Sell-side Liquidity / SSL (সেল-সাইড লিকুইডিটি)",
    definition:
      "সুইং লো, ইকুয়াল লো ও সাপোর্ট লেভেলের নিচে থাকা স্টপ-লস অর্ডার। ইনস্টিটিউশনরা প্রাইস বাড়ানোর আগে এগুলো টার্গেট করে।",
    category: "SMC",
  },
  {
    term: "Session (সেশন)",
    definition:
      "নির্দিষ্ট মার্কেট কার্যকলাপ সময়: Sydney, Tokyo (BD: সকাল ৫:০০-দুপুর ২:০০), London (BD: সকাল ৮:০০-সন্ধ্যা ৫:০০), New York (BD: সন্ধ্যা ৬:০০-রাত ৩:০০)।",
    category: "Basic",
  },
  {
    term: "Silver Bullet (সিলভার বুলেট)",
    definition:
      "ICT টাইম-বেসড এন্ট্রি মডেল — নির্দিষ্ট ১-ঘণ্টা উইন্ডোতে তৈরি FVG টার্গেট করে: ৩-৪ AM, ১০-১১ AM, বা ২-৩ PM EST।",
    category: "ICT",
  },
  {
    term: "SMC (স্মার্ট মানি কনসেপ্ট)",
    definition:
      "একটি ট্রেডিং মেথডলজি যা ইনস্টিটিউশনাল প্লেয়ারদের (ব্যাংক, হেজ ফান্ড) মার্কেটে কিভাবে কাজ করে তা রিভার্স-ইঞ্জিনিয়ার করে।",
    category: "SMC",
  },
  {
    term: "SMT Divergence (এসএমটি ডাইভার্জেন্স)",
    definition:
      "Smart Money Technique: যখন correlated pair একই সাথে corresponding highs/lows তৈরি করতে ব্যর্থ হয়, manipulation ও সম্ভাব্য রিভার্সাল ইঙ্গিত করে।",
    category: "ICT",
  },
  {
    term: "Spread (স্প্রেড)",
    definition: "Bid ও Ask প্রাইসের পার্থক্য। ট্রেডে প্রবেশের খরচ। Variable spread লো লিকুইডিটি ও নিউজ ইভেন্টে বাড়ে।",
    category: "Basic",
  },
  {
    term: "Stop Hunt (স্টপ হান্ট)",
    definition:
      "যখন প্রাইস সুস্পষ্ট স্টপ-লস লেভেলে চালিত হয় ঐ অর্ডার ট্রিগার করতে, বিপরীত দিকে ইনস্টিটিউশনাল এন্ট্রির জন্য লিকুইডিটি প্রদান করে।",
    category: "SMC",
  },
  {
    term: "Stop Loss (স্টপ লস)",
    definition:
      "পূর্বনির্ধারিত লস লেভেলে স্বয়ংক্রিয়ভাবে পজিশন বন্ধ করার প্রতিরক্ষামূলক অর্ডার। মূলধন সংরক্ষণের জন্য অপরিহার্য।",
    category: "Risk",
  },
  {
    term: "Support (সাপোর্ট)",
    definition: "যে প্রাইস লেভেলে ক্রয়ের চাপ ঐতিহাসিকভাবে আরও পতন ঠেকায়। SMC-তে, এর নিচের লিকুইডিটি সুইপ হবে।",
    category: "Price Action",
  },
  {
    term: "Swing High (সুইং হাই)",
    definition: "উভয় পাশে নিম্ন হাই সহ একটি প্রাইস শিখর — স্থানীয় সর্বোচ্চ পয়েন্ট।",
    category: "Price Action",
  },
  {
    term: "Swing Low (সুইং লো)",
    definition: "উভয় পাশে উচ্চ লো সহ একটি প্রাইস গর্ত — স্থানীয় সর্বনিম্ন পয়েন্ট।",
    category: "Price Action",
  },
  {
    term: "Swing Trading",
    definition:
      "A style holding trades for days to weeks, targeting larger moves (100-500+ pips in forex). Uses daily/4H charts for analysis.",
    category: "Basic",
  },
  // T
  {
    term: "Take Profit / TP (টেক প্রফিট)",
    definition:
      "পূর্বনির্ধারিত লাভের লেভেলে স্বয়ংক্রিয়ভাবে পজিশন বন্ধ করার অর্ডার। প্রায়ই বিপরীত liquidity pool বা FVG টার্গেটে রাখা হয়।",
    category: "Basic",
  },
  {
    term: "Three Drives Pattern",
    definition:
      "A reversal pattern with three pushes to a high/low, each with decreasing momentum. Similar to Elliott Wave with exhaustion.",
    category: "Price Action",
  },
  {
    term: "Timeframe (টাইমফ্রেম)",
    definition:
      "প্রতিটি ক্যান্ডেল যে সময়কাল দেখায়: 1m, 5m, 15m, 1H, 4H, Daily, Weekly। হায়ার টাইমফ্রেম প্রাধান্য পায়।",
    category: "Basic",
  },
  {
    term: "Tokyo Session",
    definition:
      "এশিয়ান মার্কেট ঘণ্টা (৭:০০ PM - ৪:০০ AM EST / ৫:০০ AM - ২:০০ PM BD)। JPY পেয়ারের জন্য মূল এবং এশিয়ান রেঞ্জ প্রতিষ্ঠায় গুরুত্বপূর্ণ।",
    category: "Basic",
  },
  {
    term: "Trailing Stop",
    definition: "A stop loss that automatically moves with price to lock in profits as the trade moves in your favor.",
    category: "Risk",
  },
  {
    term: "Trend (ট্রেন্ড)",
    definition:
      "প্রাইস মুভমেন্টের সাধারণ দিক। Uptrend = HH+HL, Downtrend = LH+LL। 'বাঁক না আসা পর্যন্ত ট্রেন্ড আপনার বন্ধু।'",
    category: "Basic",
  },
  {
    term: "Turtle Soup (টার্টল সুপ)",
    definition:
      "ICT কনসেপ্ট — পুরনো highs/lows-এ ফলস ব্রেকআউট ফেড করা। প্রাইস একটি পুরনো high/low নিয়ে রিভার্স করলে breakout traders ফাঁদে পড়ে।",
    category: "ICT",
  },
  {
    term: "Tweezers (Top/Bottom)",
    definition:
      "Two candles with matching highs (top) or lows (bottom) showing rejection at the same level, signaling potential reversal.",
    category: "Price Action",
  },
  // U
  {
    term: "Unicorn Model",
    definition:
      "ICT সেটআপ যেখানে একটি breaker block একটি fair value gap-এর সাথে পারফেক্টলি ওভারল্যাপ করে, অতি-উচ্চ সম্ভাবনার এন্ট্রি জোন তৈরি করে।",
    category: "ICT",
  },
  {
    term: "Unrealized P&L",
    definition: "The current profit or loss on open positions. Only becomes realized when the position is closed.",
    category: "Basic",
  },
  // V
  {
    term: "Venom Model",
    definition:
      "ICT কনসেপ্ট — displacement leg-এর মধ্যে একটি নির্দিষ্ট FVG এন্ট্রি পয়েন্ট হিসেবে ব্যবহার, এর precision ও effectiveness-এর জন্য নামকরণ।",
    category: "ICT",
  },
  {
    term: "Volatility (ভোলাটিলিটি)",
    definition:
      "প্রাইস মুভমেন্টের তারতম্যের মাত্রা। হাই ভোলাটিলিটি = বড় মুভ, লো ভোলাটিলিটি = ছোট মুভ। ATR দ্বারা পরিমাপ।",
    category: "Basic",
  },
  {
    term: "Volume (ভলিউম)",
    definition:
      "একটি পিরিয়ডে ট্রেড হওয়া contracts/shares সংখ্যা। হাই ভলিউম মুভ কনফার্ম করে; লো ভলিউম sustainability প্রশ্ন করে।",
    category: "Price Action",
  },
  {
    term: "Volume Imbalance (ভলিউম ইমব্যালেন্স)",
    definition:
      "একটি ক্যান্ডেলের close ও পরবর্তী ক্যান্ডেলের open-এর মাঝে গ্যাপ (একই দিকে), আক্রমণাত্মক ইনস্টিটিউশনাল activity দেখায়।",
    category: "SMC",
  },
  {
    term: "Weak High/Low (উইক হাই/লো)",
    definition:
      "Displacement/momentum ছাড়া তৈরি সুইং পয়েন্ট যা সুইপ হওয়ার সম্ভাবনা বেশি। এর বাইরে sell-side বা buy-side liquidity বিশ্রামরত।",
    category: "SMC",
  },
  {
    term: "Wyckoff Method (ওয়াইকফ মেথড)",
    definition:
      "Accumulation, markup, distribution ও markdown ফেজ বিশ্লেষণের মার্কেট অ্যানালাইসিস পদ্ধতি। SMC কনসেপ্টের মূল ভিত্তি।",
    category: "SMC",
  },
  {
    term: "XAU/USD (গোল্ড)",
    definition:
      "US Dollar-এ Gold-এর টিকার সিম্বল। সবচেয়ে বেশি ট্রেড হওয়া কমোডিটিগুলোর একটি, দৈনিক ২০০-৫০০+ পিপ মুভ করে।",
    category: "Basic",
  },
  {
    term: "Zone (জোন)",
    definition:
      "যে প্রাইস এরিয়ায় (শুধু একটি লাইন নয়) গুরুত্বপূর্ণ কার্যকলাপ হয়েছে। Order block, supply/demand zone, ও FVG সবই zone।",
    category: "Price Action",
  },
];
