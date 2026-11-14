SPEC = dict(
    fm=dict(date="2026-05-12", category="SMC", tags=["mss", "choch", "bos", "market-structure", "reversal"], reading=6, featured=False),
    fig=dict(img="/images/smc/market-structure-shift/bullish-mss-dark.webp", video="/videos/smc/mss-explainer-dark.mp4", lesson="/smc/market-structure-shift"),
    en=dict(
        title="Market Structure Shift (MSS) — How It Relates to CHOCH and BOS",
        description="A market structure shift is a break of a key swing with displacement, usually after a liquidity sweep. How MSS relates to CHOCH and BOS (the names overlap between SMC and ICT teaching), a validation checklist, entry and stop placement, and a worked bullish example with a 1 to 3 planned reward-to-risk.",
        intro="A **market structure shift (MSS)** is the break of a significant swing against the prevailing direction, ideally with **displacement** (strong, one-sided candles) and often right after a liquidity sweep. Different teachers use MSS, CHOCH and BOS with slightly different meanings, so define the terms you use and stick to them.",
        fix="The original treated MSS as a reliable reversal signal and mixed up the three terms. A shift can fail, and many shifts are only pauses in the old trend. Here MSS, CHOCH and BOS are separated and a checklist is given for judging each shift.",
        sections=[
            ("MSS, CHOCH and BOS — Terms Used Here", """
| Term     | Meaning in this guide                                                                 | Direction vs trend |
| -------- | ------------------------------------------------------------------------------------- | ------------------ |
| **BOS**  | A close beyond a swing in the direction of the trend                                  | With               |
| **CHOCH** | The first close beyond a swing against the trend                                     | Against            |
| **MSS**  | A CHOCH-type break that comes after a sweep **and** shows displacement                | Against            |

So every MSS is an against-trend break, but not every against-trend break qualifies as an MSS: it needs the sweep and the displacement. Compare [CHOCH vs BOS](/en/blog/choch-vs-bos-explained), [Market Structure Shift](/en/smc/market-structure-shift) and [MSS in ICT](/en/ict/mss)."""),
            ("Validation Checklist", """
| Check                           | What you want                                                             |
| ------------------------------- | ------------------------------------------------------------------------- |
| A sweep first                   | Price took a clear high or low before the break                           |
| Displacement                    | Several strong candles, ideally leaving a fair value gap                  |
| A close, not a wick             | The candle body closes beyond the swing                                   |
| Context                         | At a higher-timeframe level, or aligned with the larger direction         |
| Room                            | At least 2R to the next opposing level                                    |

Zero or one ticks: ignore it. Four or five: add it to your plan."""),
            ("Entry and Failure", """
| Item      | Rule                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------- |
| Entry     | Retest of the break: the gap left by displacement, or the order block that caused it           |
| Stop      | Beyond the sweep's extreme                                                                     |
| Target    | The next opposing liquidity; take partial profit there                                         |
| Failure   | A close back beyond the sweep's extreme, or no follow-through after the retest                 |"""),
        ],
        example="""
EUR/USD is in a downtrend with the last lower high at **1.0850**. Price sweeps a low at **1.0816**, then five strong candles close above **1.0850**, leaving a gap at **1.0840 – 1.0846**: a bullish MSS. Plan: buy a retest at **1.0846**, stop **1.0828** (below the sweep area): risk 18 pips; target **1.0900** (the next swing high): reward 54 pips, **1 : 3.0** planned. If price closes below **1.0828**, the shift failed.""",
        mistakes=[["Calling every break an MSS", "Require sweep, displacement and a close"], ["Entering at the break candle", "Plan an entry on the retest"], ["Ignoring the larger trend", "Check higher-timeframe context"], ["Mixing term definitions", "Write down what MSS, CHOCH and BOS mean to you"]],
        practice=["Find ten against-trend breaks and mark which had a sweep and displacement.", "Count how many of those reversed the trend over the next 30 candles.", "Compare shifts with and without a sweep."],
        summary=[["MSS", "A break against the trend with a sweep and displacement"], ["CHOCH and BOS", "First against-trend break and with-trend break"], ["Checklist", "Sweep, displacement, close, context, room"], ["Caution", "Shifts can fail; use a stop beyond the sweep"]],
        related=[("/smc/market-structure-shift", "Market Structure Shift"), ("/smc/choch", "CHOCH"), ("/smc/bos", "BOS"), ("/blog/choch-vs-bos-explained", "CHOCH vs BOS")],
        fig_alt="A synthetic bullish market structure shift: a sweep of a low followed by strong candles closing above the last lower high",
        fig_note="Synthetic candles for teaching", fig_label="Market Structure Shift"),
    bn=dict(
        title="Market Structure Shift (MSS) — CHOCH ও BOS এর সাথে সম্পর্ক",
        description="Market Structure Shift হলো Displacement সহ, সাধারণত Liquidity Sweep এর পর, গুরুত্বপূর্ণ Swing ভাঙা। MSS এর সাথে CHOCH ও BOS এর সম্পর্ক (SMC ও ICT শিক্ষায় নাম মিলে যায়), যাচাইয়ের চেকলিস্ট, এন্ট্রি ও Stop বসানো, আর ১ : ৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে বুলিশ উদাহরণ।",
        intro="**Market Structure Shift (MSS)** হলো প্রচলিত দিকের বিরুদ্ধে গুরুত্বপূর্ণ Swing ভাঙা, আদর্শভাবে **Displacement** সহ (শক্তিশালী, একমুখী ক্যান্ডেল) এবং প্রায়ই Liquidity Sweep এর ঠিক পরে। ভিন্ন শিক্ষক MSS, CHOCH ও BOS সামান্য ভিন্ন অর্থে ব্যবহার করেন, তাই যে শব্দ ব্যবহার করেন তার সংজ্ঞা ঠিক করে তাতেই থাকুন।",
        fix="মূল লেখায় MSS কে নির্ভরযোগ্য রিভার্সাল সংকেত ধরা হয়েছিল এবং তিনটি শব্দ গুলিয়ে ফেলা হয়েছিল। শিফট ব্যর্থ হতে পারে, আর অনেক শিফট পুরোনো ট্রেন্ডের বিরতি মাত্র। এখানে MSS, CHOCH ও BOS আলাদা করা হয়েছে এবং প্রতিটি শিফট বিচারের চেকলিস্ট দেওয়া হয়েছে।",
        sections=[
            ("MSS, CHOCH ও BOS — এখানে ব্যবহৃত শব্দ", """
| শব্দ     | এই গাইডে অর্থ                                                                 | ট্রেন্ডের সাপেক্ষে দিক |
| -------- | ------------------------------------------------------------------------------------- | ------------------ |
| **BOS**  | ট্রেন্ডের দিকে Swing এর ওপারে Close                                  | সাথে               |
| **CHOCH** | ট্রেন্ডের বিরুদ্ধে Swing এর ওপারে প্রথম Close                                     | বিপরীতে            |
| **MSS**  | Sweep এর পর **এবং** Displacement দেখানো CHOCH-ধরনের ভাঙা                | বিপরীতে            |

তাই প্রতিটি MSS ট্রেন্ড-বিরোধী ভাঙা, কিন্তু প্রতিটি ট্রেন্ড-বিরোধী ভাঙা MSS এর যোগ্য নয়: এতে Sweep ও Displacement লাগে। তুলনা করুন [CHOCH vs BOS](/bn/blog/choch-vs-bos-explained), [Market Structure Shift](/bn/smc/market-structure-shift) ও [ICT তে MSS](/bn/ict/mss)।"""),
            ("যাচাইয়ের চেকলিস্ট", """
| যাচাই                           | যা চান                                                             |
| ------------------------------- | ------------------------------------------------------------------------- |
| আগে Sweep                   | ভাঙার আগে প্রাইস স্পষ্ট High বা Low নিয়েছে                           |
| Displacement                    | কয়েকটি শক্তিশালী ক্যান্ডেল, আদর্শভাবে Fair Value Gap রেখে                  |
| Close, Wick নয়             | ক্যান্ডেলের বডি Swing এর ওপারে Close করে                                   |
| প্রসঙ্গ                         | হায়ার-টাইমফ্রেম লেভেলে, বা বড় দিকের সাথে মিলে         |
| জায়গা                            | পরের বিপরীত লেভেল পর্যন্ত অন্তত ২R                                    |

শূন্য বা একটি টিক: উপেক্ষা করুন। চার বা পাঁচ: পরিকল্পনায় যোগ করুন।"""),
            ("এন্ট্রি ও ব্যর্থতা", """
| বিষয়      | নিয়ম                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------- |
| এন্ট্রি     | ভাঙার রিটেস্ট: Displacement এর রেখে যাওয়া গ্যাপ, বা যে Order Block এটি ঘটিয়েছে           |
| Stop      | Sweep এর চরমের ওপারে                                                                     |
| টার্গেট    | পরের বিপরীত Liquidity; সেখানে আংশিক মুনাফা                                         |
| ব্যর্থতা   | Sweep এর চরমের ওপারে ফিরে Close, বা রিটেস্টের পর Follow-through নেই                 |"""),
        ],
        example="""
EUR/USD ডাউনট্রেন্ডে, শেষ Lower High **1.0850**। প্রাইস **1.0816** এ একটি Low Sweep করে, তারপর পাঁচটি শক্তিশালী ক্যান্ডেল **1.0850** এর উপরে Close করে এবং **1.0840 – 1.0846** এ গ্যাপ রাখে: বুলিশ MSS। পরিকল্পনা: **1.0846** এ রিটেস্টে Buy, Stop **1.0828** (Sweep এলাকার নিচে): রিস্ক ১৮ পিপ; টার্গেট **1.0900** (পরের Swing High): রিওয়ার্ড ৫৪ পিপ, পরিকল্পিত **১ : ৩.০**। প্রাইস **1.0828** এর নিচে Close করলে শিফট ব্যর্থ।""",
        mistakes=[["প্রতিটি ভাঙাকে MSS বলা", "Sweep, Displacement ও Close দাবি করুন"], ["ভাঙার ক্যান্ডেলে এন্ট্রি", "রিটেস্টে এন্ট্রি পরিকল্পনা করুন"], ["বড় ট্রেন্ড উপেক্ষা", "হায়ার-টাইমফ্রেম প্রসঙ্গ দেখুন"], ["শব্দের সংজ্ঞা মেশানো", "MSS, CHOCH ও BOS আপনার কাছে কী লিখে রাখুন"]],
        practice=["দশটি ট্রেন্ড-বিরোধী ভাঙা খুঁজে কোনটিতে Sweep ও Displacement ছিল চিহ্নিত করুন।", "সেগুলোর কতগুলো পরের ৩০ ক্যান্ডেলে ট্রেন্ড উল্টেছে গুনুন।", "Sweep সহ ও ছাড়া শিফট তুলনা করুন।"],
        summary=[["MSS", "Sweep ও Displacement সহ ট্রেন্ড-বিরোধী ভাঙা"], ["CHOCH ও BOS", "প্রথম ট্রেন্ড-বিরোধী ও ট্রেন্ডের সাথে ভাঙা"], ["চেকলিস্ট", "Sweep, Displacement, Close, প্রসঙ্গ, জায়গা"], ["সতর্কতা", "শিফট ব্যর্থ হতে পারে; Sweep এর ওপারে Stop রাখুন"]],
        related=[("/smc/market-structure-shift", "Market Structure Shift"), ("/smc/choch", "CHOCH"), ("/smc/bos", "BOS"), ("/blog/choch-vs-bos-explained", "CHOCH vs BOS")],
        fig_alt="একটি সিন্থেটিক বুলিশ Market Structure Shift: Low এর Sweep এর পর শক্তিশালী ক্যান্ডেল শেষ Lower High এর উপরে Close করে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Market Structure Shift"),
)
