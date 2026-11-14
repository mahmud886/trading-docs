import type { GlossaryTerm } from "./types";

export const ictTermsBn: GlossaryTerm[] = [
  // Foundation
  {
    term: "ICT (Inner Circle Trader)",
    definition:
      "Michael J. Huddleston দ্বারা বিকশিত Trading পদ্ধতি যা Institutional Trading Logic এবং Financial Market এ Smart Money কীভাবে কাজ করে তা শেখায়।",
    category: "Foundation",
  },
  {
    term: "Smart Money Concepts (SMC)",
    definition:
      "Trading পদ্ধতি যা বোঝার উপর ফোকাস করে কীভাবে Institution (Bank, Hedge Fund, Market Maker) Price Move করে।",
    category: "Foundation",
  },
  {
    term: "Institutional Trading",
    definition:
      "বড় আর্থিক প্রতিষ্ঠান কিভাবে অর্ডার এক্সিকিউট করে, পজিশন সংগ্রহ করে এবং algorithmic delivery ও liquidity targeting এর মাধ্যমে প্রাইস মুভ করে।",
    category: "Foundation",
  },
  {
    term: "Market Efficiency",
    definition: "মার্কেট premium ও discount zone এর মধ্যে দক্ষভাবে প্রাইস ডেলিভার করতে চায়, পথে imbalance পূরণ করে।",
    category: "Foundation",
  },
  {
    term: "Price Delivery Algorithm (PDA)",
    definition:
      "যে algorithmic system নিয়ন্ত্রণ করে কিভাবে price liquidity pool এর মধ্যে move করে, FVG পূরণ করে এবং institutional target এ ডেলিভার করে।",
    category: "Foundation",
  },
  {
    term: "Market Maker Model",
    definition:
      "কিভাবে market maker (bank, institution) price engineer করে — liquidity accumulate, retail trader দের manipulate, এবং target এ price deliver করে।",
    category: "Foundation",
  },
  {
    term: "How Institutions Move Price",
    definition:
      "Institution liquidity pool target করে, false move engineer করে, এবং multiple timeframe জুড়ে algorithmic order execution ব্যবহার করে price move করে।",
    category: "Foundation",
  },
  {
    term: "Retail vs Smart Money",
    definition:
      "Retail trader price এ react করে; Smart Money price engineer করে। Retail সেই liquidity provide করে যা institution তাদের বড় order fill করতে ব্যবহার করে।",
    category: "Foundation",
  },
  {
    term: "Understanding Liquidity",
    definition:
      "মূল concept যে সকল price movement resting order (stop loss, pending order) access করার প্রয়োজনে driven।",
    category: "Foundation",
  },

  // Market Structure
  {
    term: "Market Structure",
    definition: "Swing high ও swing low এর framework যা trend direction ও market character নির্ধারণ করে।",
    category: "Market Structure",
  },
  {
    term: "Bullish Market Structure",
    definition: "Higher high ও higher low এর সিরিজ যা upward institutional bias ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "Bearish Market Structure",
    definition: "Lower high ও lower low এর সিরিজ যা downward institutional bias ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "Range Market Structure",
    definition:
      "Price নির্দিষ্ট high ও low এর মধ্যে consolidate করে clear directional bias ছাড়া — accumulation বা distribution zone।",
    category: "Market Structure",
  },
  {
    term: "Swing High",
    definition: "Price এর একটি শিখর যার উভয় পাশে lower high আছে, resistance ও সম্ভাব্য reversal point চিহ্নিত করে।",
    category: "Market Structure",
  },
  {
    term: "Swing Low",
    definition: "Price এর একটি গর্ত যার উভয় পাশে higher low আছে, support ও সম্ভাব্য reversal point চিহ্নিত করে।",
    category: "Market Structure",
  },
  {
    term: "Internal Structure",
    definition:
      "Higher timeframe move এর মধ্যে lower timeframe market structure (যেমন H4 trend এর মধ্যে M5 structure)।",
    category: "Market Structure",
  },
  {
    term: "External Structure",
    definition: "Higher timeframe market structure যা সামগ্রিক market direction ও bias প্রদান করে।",
    category: "Market Structure",
  },
  {
    term: "BOS (Break of Structure)",
    definition:
      "যখন price একটি সাম্প্রতিক swing high (bullish) বা swing low (bearish) ভেঙে যায়, trend continuation ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "MSS (Market Structure Shift)",
    definition:
      "Change of Character (CHOCH) এর সমান — যখন market structure bullish থেকে bearish বা তার বিপরীতে transition হয়।",
    category: "Market Structure",
  },
  {
    term: "CHOCH (Change of Character)",
    definition: "যখন price বিদ্যমান trend এর বিপরীত direction এ structure break করে, সম্ভাব্য reversal ইঙ্গিত করে।",
    category: "Market Structure",
  },
  {
    term: "Structural Shift",
    definition: "The moment when market character changes from trending to ranging or reverses direction entirely.",
    category: "Market Structure",
  },
  {
    term: "Trend Continuation",
    definition:
      "যখন price বর্তমান market structure সম্মান করে এবং নতুন higher high (bullish) বা lower low (bearish) তৈরি করে।",
    category: "Market Structure",
  },
  {
    term: "Trend Reversal",
    definition: "যখন market structure shift হয় এবং price নতুন structure সহ বিপরীত direction এ move শুরু করে।",
    category: "Market Structure",
  },
  {
    term: "Fractal Market Structure",
    definition: "Repeating patterns of market structure across all timeframes (structure within structure).",
    category: "Market Structure",
  },
  {
    term: "Multi Timeframe Market Structure",
    definition:
      "Market structure analysis across multiple timeframes to ensure alignment (Monthly → Weekly → Daily → Intraday).",
    category: "Market Structure",
  },

  // Liquidity
  {
    term: "Liquidity (লিকুইডিটি)",
    definition:
      "Price level এর উপরে/নিচে resting stop loss ও pending order যা institution order execution এর জন্য target করে।",
    category: "Liquidity",
  },
  {
    term: "Buy Side Liquidity (BSL)",
    definition: "Swing high, equal high বা resistance level এর উপরে থাকা stop loss ও buy stop।",
    category: "Liquidity",
  },
  {
    term: "Sell Side Liquidity (SSL)",
    definition: "Swing low, equal low বা support level এর নিচে থাকা stop loss ও sell stop।",
    category: "Liquidity",
  },
  {
    term: "Resting Liquidity",
    definition: "Market এ inactive ভাবে trigger হওয়ার অপেক্ষায় থাকা stop loss ও pending order।",
    category: "Liquidity",
  },
  {
    term: "Engineered Liquidity",
    definition: "Smart Money দ্বারা consolidation ও equal high/low এর মাধ্যমে ইচ্ছাকৃতভাবে তৈরি liquidity pool।",
    category: "Liquidity",
  },
  {
    term: "External Liquidity",
    definition: "বর্তমান price range এর বাইরে resting liquidity (high এর উপরে বা low এর নিচে)।",
    category: "Liquidity",
  },
  {
    term: "Internal Liquidity",
    definition: "বর্তমান consolidation বা range এর মধ্যে resting liquidity (imbalance, gap)।",
    category: "Liquidity",
  },
  {
    term: "Relative Equal Highs",
    definition: "প্রায় একই price level এ multiple swing high (minor variance acceptable), উপরে BSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Relative Equal Lows",
    definition: "প্রায় একই price level এ multiple swing low (minor variance acceptable), নিচে SSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Equal Highs (EQH)",
    definition: "দুই বা ততোধিক high ঠিক একই বা প্রায় একই price level এ, উপরে BSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Equal Lows (EQL)",
    definition: "দুই বা ততোধিক low ঠিক একই বা প্রায় একই price level এ, নিচে SSL ইঙ্গিত করে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Pool",
    definition: "Resting stop loss ও order এর ঘনীভূত এলাকা, সাধারণত swing point বা equal high/low তে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Void",
    definition: "Chart এ কোনো significant liquidity নেই এমন area — FVG এর সমান।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Run",
    definition: "যখন price aggressively একটি liquidity pool এর দিকে move করে stop sweep ও order execute করতে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Grab",
    definition: "একটি level এর উপরে/নিচে liquidity capture করার দ্রুত move, সাধারণত তাৎক্ষণিক reversal অনুসরণ করে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Sweep",
    definition: "Stop trigger করতে price একটি level অতিক্রম করে (chart এ wick তৈরি করে), তারপর reverse করে।",
    category: "Liquidity",
  },
  {
    term: "Stop Hunt",
    definition: "সত্যিকার direction এ reverse করার আগে stop loss trigger করতে market maker দের ইচ্ছাকৃত move।",
    category: "Liquidity",
  },
  {
    term: "Inducement",
    definition:
      "Retail trader দের ভুল position এ প্রলুব্ধ করতে ডিজাইন করা false price move, institution এর জন্য liquidity তৈরি করে।",
    category: "Liquidity",
  },
  {
    term: "Trap Formation",
    definition: "Institutional move শুরু হওয়ার আগে retail trader দের ভুল পাশে trap করতে ডিজাইন করা price structure।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Engineering",
    definition: "Institution কিভাবে consolidation ও equal high/low তৈরি করে liquidity pool build করে।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Delivery",
    definition: "Engineered liquidity capture করতে price move করার প্রক্রিয়া।",
    category: "Liquidity",
  },
  {
    term: "Liquidity Raid",
    definition: "দ্রুত একাধিক liquidity pool capture করার aggressive move।",
    category: "Liquidity",
  },
  {
    term: "Draw on Liquidity",
    definition: "Significant liquidity pool এর দিকে price এর magnetic pull।",
    category: "Liquidity",
  },
  {
    term: "Reaching for Liquidity",
    definition: "বর্তমান structure এর বাইরে পরবর্তী available liquidity pool capture করতে price extend করা।",
    category: "Liquidity",
  },
  {
    term: "Targeting Liquidity",
    definition: "Institutional bias এর উপর ভিত্তি করে price পরবর্তী কোন liquidity pool reach করবে তা identify করা।",
    category: "Liquidity",
  },
  {
    term: "Opposing Liquidity",
    definition: "বর্তমান price action এর opposite side এ liquidity pool (price fall করলে BSL, rise করলে SSL)।",
    category: "Liquidity",
  },

  // Dealing Range
  {
    term: "Dealing Range",
    definition:
      "একটি significant move এর low থেকে high পর্যন্ত full price range যার মধ্যে premium ও discount zone বিদ্যমান।",
    category: "Dealing Range",
  },
  {
    term: "Premium",
    definition: "Dealing range এর upper portion (সাধারণত 50-100%) যেখানে price ব্যয়বহুল — selling এর জন্য অনুকূল।",
    category: "Dealing Range",
  },
  {
    term: "Discount",
    definition: "Dealing range এর lower portion (সাধারণত 0-50%) যেখানে price সস্তা — buying এর জন্য অনুকূল।",
    category: "Dealing Range",
  },
  {
    term: "Equilibrium",
    definition: "Dealing range এর 50% midpoint — premium ও discount কোনটিই নয়।",
    category: "Dealing Range",
  },
  {
    term: "Consequent Encroachment (CE)",
    definition: "যেকোনো range, FVG বা wick এর 50% level — সেই structure এর মধ্যে optimal entry point।",
    category: "Dealing Range",
  },
  {
    term: "Optimal Trade Entry (OTE)",
    definition: "একটি move এর 62-79% Fibonacci retracement zone — institutional re-entry sweet spot।",
    category: "Dealing Range",
  },
  {
    term: "Midpoint Theory",
    definition: "Range, wick ও imbalance এর মাঝখানে (50%) price আকৃষ্ট হয় — market equilibrium seek করে।",
    category: "Dealing Range",
  },
  {
    term: "Range Expansion",
    definition: "যখন price consolidation থেকে breakout করে এবং বাড়তি volatility সহ trending শুরু করে।",
    category: "Dealing Range",
  },
  {
    term: "Range Contraction",
    definition: "যখন price volatility কমে ও consolidation tight হয় পরবর্তী expansion এর আগে।",
    category: "Dealing Range",
  },

  // PD Arrays
  {
    term: "Institutional Order Flow",
    definition: "Market এ বড় institutional order এর direction ও volume।",
    category: "PD Arrays",
  },
  {
    term: "Market Narrative",
    definition: "Structure, liquidity ও price delivery এর উপর ভিত্তি করে institution কী করছে তার গল্প।",
    category: "PD Arrays",
  },
  {
    term: "Price Delivery",
    definition: "কিভাবে price এক liquidity pool থেকে অন্যটিতে move করে, পথে imbalance fill করে।",
    category: "PD Arrays",
  },
  {
    term: "PD Array",
    definition:
      "Premium বা Discount Array — নির্দিষ্ট price structure যেখানে institution order place করে (Order Block, FVG, Breaker, Mitigation Block)।",
    category: "PD Arrays",
  },
  {
    term: "Premium PD Array",
    definition: "Dealing range এর premium zone এ অবস্থিত PD Array — short entry এর resistance zone।",
    category: "PD Arrays",
  },
  {
    term: "Discount PD Array",
    definition: "Dealing range এর discount zone এ অবস্থিত PD Array — long entry এর support zone।",
    category: "PD Arrays",
  },
  {
    term: "Institutional Footprints",
    definition: "Chart এ দৃশ্যমান institutional activity এর প্রমাণ (displacement, FVG, order block, liquidity sweep)।",
    category: "PD Arrays",
  },
  {
    term: "Order Block (OB)",
    definition: "Strong directional move এর আগে শেষ বিপরীত-রঙের candle — যেখানে institution enter করেছে চিহ্নিত করে।",
    category: "PD Arrays",
  },
  {
    term: "Bullish Order Block",
    definition: "Strong upward displacement এর আগে শেষ bearish candle — long entry এর support zone।",
    category: "PD Arrays",
  },
  {
    term: "Bearish Order Block",
    definition: "Strong downward displacement এর আগে শেষ bullish candle — short entry এর resistance zone।",
    category: "PD Arrays",
  },
  {
    term: "Refined Order Block",
    definition: "Order block এর wick (full candle body নয়) ব্যবহার করে আরো precise entry level।",
    category: "PD Arrays",
  },
  {
    term: "Naked Order Block",
    definition: "Order block যা এখনো test হয়নি (price ফিরে আসেনি)।",
    category: "PD Arrays",
  },
  {
    term: "Covered Order Block",
    definition: "Order block যা test/touch হয়েছে কিন্তু এখনো valid — price return করে respect করেছে।",
    category: "PD Arrays",
  },
  {
    term: "Mitigation of Order Block",
    definition: "When price returns to an order block and 'mitigates' it by filling remaining institutional orders.",
    category: "PD Arrays",
  },
  {
    term: "Order Block Validation",
    definition: "OB institutional কিনা তার confirmation (displacement দ্বারা তৈরি, structure break, FVG create করে)।",
    category: "PD Arrays",
  },
  {
    term: "Order Block Failure",
    definition: "যখন price কোনো reaction ছাড়াই order block সম্পূর্ণ অতিক্রম করে — OB invalidate হয়।",
    category: "PD Arrays",
  },
  {
    term: "High Probability Order Block",
    definition: "Multiple confluence factor সহ OB (FVG overlap, OTE zone, HTF alignment, Kill Zone timing)।",
    category: "PD Arrays",
  },
  {
    term: "Breaker Block",
    definition: "যে order block ভেঙে গিয়ে fail হয়েছে, এখন বিপরীত ভূমিকায় কাজ করছে।",
    category: "PD Arrays",
  },
  {
    term: "Bullish Breaker",
    definition: "Failed bearish order block (upside এ broken) — retest এ support হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Bearish Breaker",
    definition: "Failed bullish order block (downside এ broken) — retest এ resistance হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Breaker Retest",
    definition: "Price broken order block এ নতুন role এ test করতে return করে — key entry opportunity।",
    category: "PD Arrays",
  },
  {
    term: "Failed Order Block",
    definition: "সম্পূর্ণ broken order block — opposite side থেকে retest হলে breaker হয়।",
    category: "PD Arrays",
  },
  {
    term: "Breaker Confirmation",
    definition: "Price former order block এ নতুন opposing role এ react করলে breaker valid confirm হয়।",
    category: "PD Arrays",
  },
  {
    term: "Mitigation Block",
    definition:
      "আংশিকভাবে test হওয়া order block যা সম্পূর্ণ hold করতে ব্যর্থ, price ফিরে আসার জন্য unfilled order রেখে যায়।",
    category: "PD Arrays",
  },
  {
    term: "Bullish Mitigation Block",
    definition: "Test হওয়া bullish order block যেখানে price আবার remaining buy order fill করতে return করে।",
    category: "PD Arrays",
  },
  {
    term: "Bearish Mitigation Block",
    definition: "Test হওয়া bearish order block যেখানে price আবার remaining sell order fill করতে return করে।",
    category: "PD Arrays",
  },
  {
    term: "Mitigation Process",
    definition: "First OB touch এ complete না হওয়া remaining institutional order fill করতে price return করা।",
    category: "PD Arrays",
  },
  {
    term: "Institutional Repricing",
    definition: "Initial reaction এর পর mitigation block এ institution re-enter বা position add করে।",
    category: "PD Arrays",
  },
  {
    term: "Fair Value Gap (FVG)",
    definition: "3-candle price imbalance যেখানে candle 1 ও 3 এর wick overlap করে না — inefficient price delivery।",
    category: "PD Arrays",
  },
  {
    term: "Bullish FVG (BISI)",
    definition: "Buy-Side Imbalance, Sell-Side Inefficiency — বর্তমান price এর নিচে gap যা support হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Bearish FVG (SIBI)",
    definition: "Sell-Side Imbalance, Buy-Side Inefficiency — বর্তমান price এর উপরে gap যা resistance হিসেবে কাজ করে।",
    category: "PD Arrays",
  },
  {
    term: "Consequent Encroachment (FVG)",
    definition: "যেকোনো FVG এর 50% midpoint — gap এর মধ্যে optimal entry point।",
    category: "PD Arrays",
  },
  {
    term: "Inversion Fair Value Gap (IFVG)",
    definition: "FVG যা সম্পূর্ণ trade through হয়েছে এবং এখন বিপরীত function serve করে।",
    category: "PD Arrays",
  },
  {
    term: "Balanced Price Range (BPR)",
    definition: "FVG এর বিপরীত — price range যেখানে efficient delivery ঘটেছে (কোনো gap নেই)।",
    category: "PD Arrays",
  },
  {
    term: "Inefficiency",
    definition: "যেকোনো area যেখানে price delivery optimal ছিল না — imbalance তৈরি করে যা fill হতে হবে।",
    category: "PD Arrays",
  },
  {
    term: "Rebalancing",
    definition: "Price FVG বা inefficiency fill করতে return করলে — market equilibrium seek করে।",
    category: "PD Arrays",
  },
  {
    term: "FVG Mitigation",
    definition: "Price fair value gap আংশিক বা সম্পূর্ণ fill করতে return করা।",
    category: "PD Arrays",
  },
  {
    term: "Rejection Block",
    definition: "Long wick সহ candle যা একটি level এ strong rejection দেখায় — wick body ভবিষ্যত support/resistance।",
    category: "PD Arrays",
  },
  {
    term: "Volume Imbalance",
    definition:
      "একটি candle এর close ও পরের candle এর open এর মধ্যে gap (একই direction) — aggressive institutional activity।",
    category: "PD Arrays",
  },
  {
    term: "Opening Gap",
    definition: "Previous session close ও current session open এর মধ্যে gap — price fill করতে magnet হিসেবে কাজ করে।",
    category: "PD Arrays",
  },

  // Time & Sessions
  {
    term: "Market Timing",
    definition: "কখন institutional trader সবচেয়ে active এবং price movement সবচেয়ে significant তা বোঝা।",
    category: "Time & Sessions",
  },
  {
    term: "Time and Price Theory",
    definition:
      "ICT concept যে time price এর চেয়ে বেশি গুরুত্বপূর্ণ — নির্দিষ্ট time window algorithmically নির্দিষ্ট price behavior তৈরি করে।",
    category: "Time & Sessions",
  },
  {
    term: "Kill Zone (কিল জোন)",
    definition: "নির্দিষ্ট time window যখন institutional order flow সর্বোচ্চ এবং best trade setup ঘটে।",
    category: "Time & Sessions",
  },
  {
    term: "London Kill Zone",
    definition: "2:00-5:00 AM EST (8:00-11:00 AM London) — European institutional trading এর primary window।",
    category: "Time & Sessions",
  },
  {
    term: "New York Kill Zone",
    definition: "7:00-10:00 AM EST (New York AM session) — US institutional trading এর primary window।",
    category: "Time & Sessions",
  },
  {
    term: "London Open",
    definition: "3:00 AM EST (8:00 AM London) — London market open হলে high volatility time।",
    category: "Time & Sessions",
  },
  {
    term: "New York Open",
    definition: "9:30 AM EST — US stock market open, index ও correlated market এ high impact।",
    category: "Time & Sessions",
  },
  {
    term: "Asian Session",
    definition: "Ranging session (7 PM - 2 AM EST) যা London target করার জন্য liquidity pool তৈরি করে।",
    category: "Time & Sessions",
  },
  {
    term: "Session Liquidity",
    definition: "একটি session এ accumulated stop loss ও order যা পরবর্তী session দ্বারা target হয়।",
    category: "Time & Sessions",
  },
  {
    term: "Session High",
    definition: "একটি নির্দিষ্ট trading session এ সর্বোচ্চ price — পরবর্তী session এর BSL target।",
    category: "Time & Sessions",
  },
  {
    term: "Session Low",
    definition: "একটি নির্দিষ্ট trading session এ সর্বনিম্ন price — পরবর্তী session এর SSL target।",
    category: "Time & Sessions",
  },
  {
    term: "Daily Open",
    definition: "Daily candle এর opening price (forex এ 5 PM EST) — intraday bias এর significant reference level।",
    category: "Time & Sessions",
  },
  {
    term: "Weekly Open",
    definition: "Weekly candle এর opening price (Sunday 5 PM EST) — weekly directional bias এর key reference।",
    category: "Time & Sessions",
  },
  {
    term: "Monthly Open",
    definition: "Monthly candle এর opening price — monthly narrative এর institutional reference level।",
    category: "Time & Sessions",
  },
  {
    term: "Judas Swing (জুডাস সুইং)",
    definition: "Session open এ false breakout যা trader দের trap করে price সত্যিকার direction এ reverse করার আগে।",
    category: "Time & Sessions",
  },
  {
    term: "London Judas Swing",
    definition: "London open (3 AM EST / 8 AM London) এ ঘটা manipulation — true move এর আগে false expansion।",
    category: "Time & Sessions",
  },
  {
    term: "New York Judas Swing",
    definition: "NY open (9:30 AM EST) এ ঘটা manipulation — real direction এর আগে initial fake move।",
    category: "Time & Sessions",
  },
  {
    term: "False Move",
    definition: "Breakout হিসেবে দেখা price movement কিন্তু আসলে liquidity collect করার manipulation।",
    category: "Time & Sessions",
  },
  {
    term: "Liquidity Collection Phase",
    definition: "যে period এ false move stop sweep করে real institutional move এর জন্য liquidity তৈরি করে।",
    category: "Time & Sessions",
  },

  // Models
  {
    term: "Power of Three (PO3)",
    definition: "তিন-পর্যায় institutional cycle: Accumulation → Manipulation → Distribution।",
    category: "Models",
  },
  {
    term: "Accumulation (অ্যাকুমুলেশন)",
    definition: "যে phase এ institution নীরবে consolidation এ position তৈরি করে।",
    category: "Models",
  },
  {
    term: "Manipulation (ম্যানিপুলেশন)",
    definition: "Retail trader দের trap ও true move এর আগে liquidity sweep করার false move।",
    category: "Models",
  },
  {
    term: "Distribution (ডিস্ট্রিবিউশন)",
    definition: "আসল institutional move যা target এ price deliver করে।",
    category: "Models",
  },
  {
    term: "Daily PO3",
    definition:
      "একটি trading day এ PO3 cycle (Asian = Accumulation, London open = Manipulation, London/NY = Distribution)।",
    category: "Models",
  },
  {
    term: "Weekly PO3",
    definition: "এক trading week এ PO3 cycle (Mon-Tue = Accumulation, Wed = Manipulation, Thu-Fri = Distribution)।",
    category: "Models",
  },
  {
    term: "Monthly PO3",
    definition:
      "এক month এ PO3 cycle (প্রথম সপ্তাহ = Accumulation, মাঝামাঝি = Manipulation, শেষ সপ্তাহ = Distribution)।",
    category: "Models",
  },
  {
    term: "Market Maker Buy Model (MMBM)",
    definition: "Long position এর institutional accumulation model (bearish → SSL sweep → bullish reverse)।",
    category: "Models",
  },
  {
    term: "Market Maker Sell Model (MMSM)",
    definition: "Short position এর institutional distribution model (bullish → BSL sweep → bearish reverse)।",
    category: "Models",
  },
  {
    term: "Buy Program",
    definition: "যখন institution actively multiple timeframe জুড়ে long position accumulate করছে।",
    category: "Models",
  },
  {
    term: "Sell Program",
    definition: "যখন institution actively multiple timeframe জুড়ে short position distribute করছে।",
    category: "Models",
  },
  {
    term: "Institutional Distribution",
    definition: "যে phase এ institution favorable price এ accumulated position exit করে — delivery phase।",
    category: "Models",
  },
  {
    term: "Institutional Accumulation",
    definition: "Major directional move এর আগে institution position build করার phase — consolidation এর মধ্যে hidden।",
    category: "Models",
  },
  {
    term: "ICT 2022 Model",
    definition: "Kill zone এ Silver Bullet entry ও FVG-based execution focus করা updated trading model।",
    category: "Models",
  },
  {
    term: "ICT 2023 Model",
    definition:
      "Algorithmic price delivery, time-based entry ও narrative confluence emphasize করা refined execution model।",
    category: "Models",
  },
  {
    term: "ICT Unicorn Model",
    definition:
      "Setup where a breaker block perfectly overlaps with a fair value gap, creating an ultra-high-probability entry zone।",
    category: "Models",
  },
  {
    term: "ICT Silver Bullet (সিলভার বুলেট)",
    definition: "নির্দিষ্ট 1-hour window এ (3-4 AM, 10-11 AM, 2-3 PM EST) FVG target করা high-probability setup।",
    category: "Models",
  },
  {
    term: "ICT Turtle Soup",
    definition: "False breakout ও reversal trade — পুরনো high/low নিলে breakout fail হলে opposite trade।",
    category: "Models",
  },
  {
    term: "ICT Venom Model",
    definition: "Displacement leg এর মধ্যে নির্দিষ্ট FVG precision entry point হিসেবে ব্যবহার।",
    category: "Models",
  },
  {
    term: "ICT Scout Sniper Entry",
    definition: "Institutional direction confirm করার পর optimal PD Array তে precision entry।",
    category: "Models",
  },
  {
    term: "ICT OTE Entry",
    definition: "Displacement institutional direction confirm করার পর 62-79% Fibonacci retracement zone এ entry।",
    category: "Models",
  },
  {
    term: "ICT MSS Entry",
    definition: "Lower timeframe এ Market Structure Shift (CHOCH) reversal confirm করার পর entry।",
    category: "Models",
  },
  {
    term: "ICT FVG Entry",
    definition: "Higher timeframe bias alignment এ price Fair Value Gap fill করতে return করলে entry।",
    category: "Models",
  },
  {
    term: "CISD",
    definition: "চার-পর্যায় institutional cycle: Consolidation → Inducement → Stop-loss hunt → Distribution।",
    category: "Models",
  },
  {
    term: "Consolidation Phase (C)",
    definition: "Range building phase যেখানে institution position accumulate করে।",
    category: "Models",
  },
  {
    term: "Inducement Phase (I)",
    definition: "Retail trader দের ভুল position এ attract করার false move।",
    category: "Models",
  },
  {
    term: "Stop-loss Hunt (S)",
    definition: "Real move এর জন্য liquidity তৈরি করতে aggressive stop sweep।",
    category: "Models",
  },
  {
    term: "Distribution Phase (D)",
    definition: "Target এ price deliver করা true institutional move।",
    category: "Models",
  },

  // SMT & Analysis
  {
    term: "SMT Divergence",
    definition: "যখন correlated instrument সমান high/low তৈরি করতে ব্যর্থ হয়, institutional bias প্রকাশ করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Bullish SMT",
    definition: "Correlated pair lower low তৈরি করে যখন আপনার pair higher low তৈরি করে — bullish bias।",
    category: "SMT & Analysis",
  },
  {
    term: "Bearish SMT",
    definition: "Correlated pair higher high তৈরি করে যখন আপনার pair lower high তৈরি করে — bearish bias।",
    category: "SMT & Analysis",
  },
  {
    term: "Intermarket Analysis",
    definition: "Correlated market এর relationship analyze করা (EUR/USD vs GBP/USD, ES vs NQ ইত্যাদি)।",
    category: "SMT & Analysis",
  },
  {
    term: "Correlated Markets",
    definition: "যে market সাধারণত একসাথে move করে (যেমন EUR/USD ও GBP/USD, Gold ও Silver)।",
    category: "SMT & Analysis",
  },
  {
    term: "Relative Strength",
    definition: "Correlated pair এ কোন instrument stronger — অন্যটির তুলনায় better high/low তৈরি করছে।",
    category: "SMT & Analysis",
  },
  {
    term: "Relative Weakness",
    definition: "Correlated pair এ কোন instrument weaker — অন্যটির তুলনায় worse high/low তৈরি করছে।",
    category: "SMT & Analysis",
  },
  {
    term: "Monthly/Weekly/Daily Bias",
    definition: "Higher timeframe market structure থেকে নির্ধারিত directional bias।",
    category: "SMT & Analysis",
  },
  {
    term: "H4 Narrative",
    definition: "The 4-hour timeframe story of institutional order flow — bridges HTF bias and LTF execution।",
    category: "SMT & Analysis",
  },
  {
    term: "H1 Confirmation",
    definition: "Execution TF তে drop করার আগে institutional narrative confirm করা 1-hour timeframe structure।",
    category: "SMT & Analysis",
  },
  {
    term: "M15 Entry Model",
    definition: "15-minute timeframe entry framework — confirmed narrative এর মধ্যে precise entry setup identify করে।",
    category: "SMT & Analysis",
  },
  {
    term: "M5 Execution",
    definition: "5-minute timeframe execution — tight stop loss placement সহ trade entry এর final trigger।",
    category: "SMT & Analysis",
  },
  {
    term: "Top Down Analysis",
    definition: "সর্বোচ্চ timeframe (Monthly/Weekly) থেকে execution timeframe (M5/M1) পর্যন্ত analysis শুরু করা।",
    category: "SMT & Analysis",
  },
  {
    term: "HTF (Higher Timeframe)",
    definition: "বড় timeframe যা সামগ্রিক direction provide করে (Daily, 4H, Weekly)।",
    category: "SMT & Analysis",
  },
  {
    term: "LTF (Lower Timeframe)",
    definition: "ছোট timeframe যা precise entry execution এ ব্যবহৃত (M15, M5, M1)।",
    category: "SMT & Analysis",
  },
  {
    term: "IPDA (Interbank Price Delivery Algorithm)",
    definition:
      "Interbank dealer দের 20/40/60 day look-back period জুড়ে price efficiently deliver করার algorithmic system।",
    category: "SMT & Analysis",
  },
  {
    term: "Repricing",
    definition: "Partial move এর পর key PD Array তে institution market এ re-enter করে position add করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Institutional Sponsorship",
    definition:
      "Institutional capital directional move back করছে তার evidence — displacement ও structure break দ্বারা confirmed।",
    category: "SMT & Analysis",
  },
  {
    term: "Delivery State",
    definition: "Price delivery এর বর্তমান phase (expansion, retracement, consolidation)।",
    category: "SMT & Analysis",
  },
  {
    term: "Expansion Phase",
    definition: "যখন price consolidation থেকে দূরে active trending move এ।",
    category: "SMT & Analysis",
  },
  {
    term: "Retracement Phase",
    definition: "যখন price institutional re-entry এর জন্য PD Array তে pull back করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Consolidation Phase",
    definition: "যখন price range-bound, পরবর্তী expansion এর জন্য liquidity pool build করে।",
    category: "SMT & Analysis",
  },
  {
    term: "Accumulation Cycle",
    definition: "Markup এর আগে multiple timeframe জুড়ে institutional position building এর full cycle।",
    category: "SMT & Analysis",
  },
  {
    term: "Distribution Cycle",
    definition: "Markdown এর আগে multiple timeframe জুড়ে institutional position unloading এর full cycle।",
    category: "SMT & Analysis",
  },
  {
    term: "Macro Liquidity",
    definition: "Higher timeframe এ visible বড় liquidity pool (weekly/monthly high ও low)।",
    category: "SMT & Analysis",
  },
  {
    term: "Micro Liquidity",
    definition: "Lower timeframe এ visible ছোট liquidity pool (intraday swing point)।",
    category: "SMT & Analysis",
  },
  {
    term: "Algorithmic Price Delivery",
    definition:
      "The concept that price is delivered by algorithms following specific rules for liquidity, imbalance, and time।",
    category: "SMT & Analysis",
  },

  // Risk
  {
    term: "Risk Management (রিস্ক ম্যানেজমেন্ট)",
    definition:
      "Position sizing ও capital protection এর systematic approach — long-term survival এর সবচেয়ে critical skill।",
    category: "Risk",
  },
  {
    term: "Position Sizing (পজিশন সাইজিং)",
    definition: "Fixed percentage account risk (সাধারণত প্রতি trade এ 1-2%) এর উপর ভিত্তি করে lot size calculate করা।",
    category: "Risk",
  },
  {
    term: "Capital Preservation",
    definition:
      "Proper risk control এর মাধ্যমে catastrophic loss থেকে account রক্ষা করা — survival first, profit second।",
    category: "Risk",
  },
  {
    term: "Drawdown Control",
    definition: "Maximum equity decline সীমিত করার rule — সাধারণত 5-10% max drawdown এ trading stop করে reassess।",
    category: "Risk",
  },
  {
    term: "Daily Loss Limit",
    definition: "একটি single day এ maximum loss limit (যেমন account এর 2-3%) — hit হলে trading stop।",
    category: "Risk",
  },
  {
    term: "Weekly Loss Limit",
    definition: "একটি single week এ maximum loss limit (যেমন account এর 5%) — hit হলে rest ও review force করে।",
    category: "Risk",
  },
  {
    term: "Risk Reward Ratio (RR)",
    definition: "সম্ভাব্য profit ও সম্ভাব্য loss এর ratio (যেমন 1:3 মানে 1 risk করে 3 earn)। Minimum 1:2 recommended।",
    category: "Risk",
  },
  {
    term: "Trade Management",
    definition: "Open position handle করা (scaling, trailing stop, profit taking) — winner maximize করার art।",
    category: "Risk",
  },
  {
    term: "Scaling In",
    definition: "Original risk parameter maintain করে subsequent PD Array তে winning position এ add করা।",
    category: "Risk",
  },
  {
    term: "Partial Profit Taking",
    definition: "Target এ position এর একটি অংশ close করে বাকিটা run করতে দেওয়া — profit lock, stress reduce।",
    category: "Risk",
  },

  // Professional
  {
    term: "Daily Narrative",
    definition: "HTF bias, session context ও key level এর উপর ভিত্তি করে আজ institution কী করছে তার গল্প build করা।",
    category: "Professional",
  },
  {
    term: "Weekly Narrative",
    definition: "সপ্তাহ জুড়ে institutional story — কোন liquidity pool target, PO3 এর কোন phase এ আছি।",
    category: "Professional",
  },
  {
    term: "Monthly Narrative",
    definition: "মাসের broader institutional agenda — major liquidity target ও directional bias।",
    category: "Professional",
  },
  {
    term: "Quarterly Theory",
    definition:
      "ICT concept যে major market reversal ও expansion quarterly boundary (March, June, September, December) এ align হয়।",
    category: "Professional",
  },
  {
    term: "Annual Range Theory",
    definition: "প্রতি বছরের high ও low নির্দিষ্ট quarter এ set হয় predictable expansion pattern সহ।",
    category: "Professional",
  },
  {
    term: "Dealing Desk Logic",
    definition:
      "Institutional dealing desk কিভাবে order execute করে — retail flow institutional position এর against pair করে।",
    category: "Professional",
  },
  {
    term: "Smart Money Narrative",
    definition:
      "সকল timeframe জুড়ে complete institutional story — bias, liquidity, time ও PD array একটি thesis এ combine।",
    category: "Professional",
  },
  {
    term: "Market Maker Logic",
    definition:
      "Market maker দের algorithmic rule: liquidity engineer, price manipulate, institutional target এ deliver।",
    category: "Professional",
  },
  {
    term: "Institutional Bias Building",
    definition:
      "Multi-timeframe analysis, SMT ও narrative alignment এর মাধ্যমে directional conviction build করার process।",
    category: "Professional",
  },
  {
    term: "Precision Entry Framework",
    definition:
      "Minimal risk এ trade execute করার complete system: HTF bias → LTF confirmation → Kill Zone timing → PD Array entry।",
    category: "Professional",
  },
  {
    term: "High Probability Trade Framework",
    definition:
      "Framework combining multiple confluence factors: HTF structure + liquidity target + time + PD Array + SMT alignment।",
    category: "Professional",
  },
  {
    term: "Complete ICT Trading Plan",
    definition:
      "Bias determination, entry model, risk rule, trade management ও journaling cover করা full trading plan।",
    category: "Professional",
  },
  {
    term: "Professional Trade Journaling",
    definition:
      "Screenshot, narrative, entry/exit logic ও psychological state সহ trade systematic recording — review এর জন্য।",
    category: "Professional",
  },
  {
    term: "Full ICT Trading System",
    definition:
      "সকল ICT concept এক cohesive personal system এ integration — analysis থেকে execution থেকে management থেকে review।",
    category: "Professional",
  },
];
