SPEC = dict(
    fm=dict(date="2026-05-01", category="Price Action", tags=["price-action", "beginner", "candlestick", "market-structure"], reading=8, featured=True),
    fig=dict(img="/images/price-action/introduction/price-action-three-pillars-dark.webp", video="/videos/price-action/price-action-intro-explainer-dark.mp4", lesson="/price-action/introduction"),
    en=dict(
        title="Getting Started with Price Action — The Three Pillars for Beginners",
        description="A beginner's guide to reading a bare chart: candles, market structure and support and resistance as three pillars, a simple top-down routine, how to practise without risking money, and a worked support-retest trade with a planned 1 to 2 reward-to-risk.",
        intro="**Price action** means making decisions from the price chart itself (candles, swings, and levels) instead of from a stack of indicators. It is a way of reading information that is already on the screen. It does not promise profits, and it takes practice to read well.",
        fix="The original made broad promises about what price action \"reveals\" and about how fast beginners can profit. Skill takes time and results vary, so those promises are removed; this guide describes a method and a practice routine instead.",
        sections=[
            ("The Three Pillars", """
| Pillar                     | Question it answers                                  | Where to learn more                                         |
| -------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| **Candles**                | Who controlled this period: buyers or sellers?       | [Candlestick Basics](/en/price-action/candlestick-basics)   |
| **Market structure**       | Is price making higher highs and higher lows, or the reverse? | [Market Structure](/en/price-action/market-structure) |
| **Support and resistance** | Where has price reacted before?                      | [Support and Resistance](/en/price-action/support-resistance) |

A candle shows the **open, high, low and close** of a period. A long lower wick and a close near the high suggest buyers pushed price back up; a long upper wick suggests the opposite. One candle alone is weak evidence: it matters **where** it appears (at a level, after a trend) and what the **next** candles do."""),
            ("A Simple Top-Down Routine", """
| Step | What to do                                                                                  |
| ---- | ------------------------------------------------------------------------------------------- |
| 1    | Open the **daily** chart: is the structure up, down or sideways?                            |
| 2    | Mark the nearest major **support and resistance** levels                                    |
| 3    | Move to the **1-hour** chart and look for price approaching one of those levels             |
| 4    | Wait for a **reaction candle** or a small structure shift at the level                      |
| 5    | Plan entry, stop and target **before** you click, and compute the size                      |
| 6    | Record the trade and the reasons in a journal                                               |

Work on one pair and one or two timeframes at first. Add sessions and other tools later; see [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis)."""),
            ("Practising Safely", """
| Stage                    | Goal                                                                      |
| ------------------------ | ------------------------------------------------------------------------- |
| Chart reading (no trades) | Mark structure and levels on 50 past charts and check what happened next  |
| Demo account             | Follow the routine and log every trade for several weeks                  |
| Small live size          | Risk a very small fixed amount per trade while you learn the costs and emotions |
| Review                   | Weekly: look at trades that followed the plan and trades that didn't      |

Treat early losses as the cost of learning, and keep risk small enough that you can keep learning."""),
        ],
        example="""
EUR/USD has bounced from **1.0820** twice on the daily chart, so it is support. Price pulls back to **1.0830** on the 1-hour chart and a bullish candle with a long lower wick closes at **1.0834**. Plan: buy **1.0834**, stop **1.0814** (below support): risk 20 pips; target **1.0874** (the previous swing high): reward 40 pips, **1 : 2.0** planned. If price closes below **1.0814**, support has failed and the idea is cancelled.""",
        mistakes=[["Reading one candle out of context", "Look at where it is and what follows"], ["Marking too many levels", "Keep the few that price has respected several times"], ["Trading without a stop or size plan", "Plan both before entering"], ["Jumping to live trading quickly", "Practise on past charts and demo first"]],
        practice=["Mark structure and two support or resistance levels on the daily chart of one pair.", "On the 1-hour chart, find three reactions at your levels and note what the candles did.", "Write the plan for one hypothetical trade: entry, stop, target, size."],
        summary=[["Price action", "Decisions from candles, structure and levels"], ["Pillars", "Candles, market structure, support and resistance"], ["Routine", "Daily bias, levels, 1-hour reaction, plan, journal"], ["Expectation", "A skill built with practice, not a promise of profit"]],
        related=[("/price-action/introduction", "Introduction to Price Action"), ("/price-action/candlestick-basics", "Candlestick Basics"), ("/price-action/support-resistance", "Support and Resistance"), ("/blog/top-5-beginner-mistakes", "Top 5 Beginner Mistakes")],
        fig_alt="The three pillars of price action: candles, market structure and support and resistance on one synthetic chart",
        fig_note="Synthetic candles for teaching", fig_label="Introduction to Price Action"),
    bn=dict(
        title="Getting Started with Price Action — নতুনদের জন্য তিন স্তম্ভ",
        description="খালি চার্ট পড়ার নতুনদের গাইড: ক্যান্ডেল, মার্কেট স্ট্রাকচার ও সাপোর্ট-রেজিস্ট্যান্স তিন স্তম্ভ হিসেবে, সরল টপ-ডাউন রুটিন, টাকা ঝুঁকি ছাড়া কীভাবে অনুশীলন করবেন, আর ১ : ২ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে সাপোর্ট-রিটেস্ট ট্রেডের উদাহরণ।",
        intro="**Price Action** মানে ইন্ডিকেটরের স্তূপের বদলে প্রাইস চার্ট থেকেই (ক্যান্ডেল, Swing ও লেভেল) সিদ্ধান্ত নেওয়া। এটি স্ক্রিনে ইতিমধ্যে থাকা তথ্য পড়ার উপায়। এটি মুনাফার প্রতিশ্রুতি দেয় না, আর ভালো পড়তে অনুশীলন লাগে।",
        fix="মূল লেখায় Price Action কী \"প্রকাশ করে\" ও নতুনরা কত দ্রুত মুনাফা করতে পারে সে নিয়ে বড় প্রতিশ্রুতি ছিল। দক্ষতায় সময় লাগে আর ফল ভিন্ন হয়, তাই প্রতিশ্রুতিগুলো সরানো হয়েছে; এই গাইড বরং পদ্ধতি ও অনুশীলনের রুটিন বর্ণনা করে।",
        sections=[
            ("তিন স্তম্ভ", """
| স্তম্ভ                     | যে প্রশ্নের উত্তর দেয়                                  | আরও কোথায় শিখবেন                                         |
| -------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| **ক্যান্ডেল**                | এই সময়কালে কে নিয়ন্ত্রণে ছিল: ক্রেতা না বিক্রেতা?       | [Candlestick Basics](/bn/price-action/candlestick-basics)   |
| **মার্কেট স্ট্রাকচার**       | প্রাইস কি Higher High ও Higher Low বানাচ্ছে, নাকি উল্টো? | [Market Structure](/bn/price-action/market-structure) |
| **সাপোর্ট ও রেজিস্ট্যান্স** | প্রাইস আগে কোথায় প্রতিক্রিয়া দেখিয়েছে?                      | [Support and Resistance](/bn/price-action/support-resistance) |

ক্যান্ডেল একটি সময়কালের **Open, High, Low ও Close** দেখায়। লম্বা নিচের Wick ও High এর কাছে Close ইঙ্গিত দেয় ক্রেতারা প্রাইস ঠেলে উপরে তুলেছে; লম্বা উপরের Wick উল্টোটা। একটি ক্যান্ডেল একা দুর্বল প্রমাণ: এটি **কোথায়** দেখা দিয়েছে (লেভেলে, ট্রেন্ডের পর) আর **পরের** ক্যান্ডেলগুলো কী করে তা গুরুত্বপূর্ণ।"""),
            ("একটি সরল টপ-ডাউন রুটিন", """
| ধাপ | কী করবেন                                                                                  |
| ---- | ------------------------------------------------------------------------------------------- |
| ১    | **ডেইলি** চার্ট খুলুন: স্ট্রাকচার আপ, ডাউন নাকি সাইডওয়েজ?                            |
| ২    | কাছের প্রধান **সাপোর্ট ও রেজিস্ট্যান্স** লেভেল চিহ্নিত করুন                                    |
| ৩    | **১-ঘণ্টার** চার্টে যান আর প্রাইস ওই লেভেলের কাছে আসছে কি না দেখুন             |
| ৪    | লেভেলে **প্রতিক্রিয়ার ক্যান্ডেল** বা ছোট স্ট্রাকচার শিফটের অপেক্ষা করুন                      |
| ৫    | ক্লিকের **আগে** এন্ট্রি, Stop ও টার্গেট পরিকল্পনা করে সাইজ হিসাব করুন                      |
| ৬    | জার্নালে ট্রেড ও কারণ লিখুন                                               |

প্রথমে একটি পেয়ার ও এক-দুটি টাইমফ্রেমে কাজ করুন। সেশন ও অন্য সরঞ্জাম পরে যোগ করুন; [Multi-Timeframe Analysis](/bn/price-action/multi-timeframe-analysis) দেখুন।"""),
            ("নিরাপদে অনুশীলন", """
| পর্যায়                    | লক্ষ্য                                                                      |
| ------------------------ | ------------------------------------------------------------------------- |
| চার্ট পড়া (ট্রেড ছাড়া) | ৫০টি পুরোনো চার্টে স্ট্রাকচার ও লেভেল চিহ্নিত করে পরে কী হয়েছে দেখুন  |
| ডেমো অ্যাকাউন্ট             | রুটিন অনুসরণ করে কয়েক সপ্তাহ প্রতিটি ট্রেড লিখুন                  |
| ছোট লাইভ সাইজ          | খরচ ও আবেগ শেখার সময় প্রতি ট্রেডে খুব ছোট স্থির অঙ্ক ঝুঁকি নিন |
| রিভিউ                   | সাপ্তাহিক: পরিকল্পনা মানা ও না-মানা ট্রেড দেখুন      |

শুরুর লোকসানকে শেখার খরচ ধরুন, আর ঝুঁকি এত ছোট রাখুন যাতে শেখা চালিয়ে যেতে পারেন।"""),
        ],
        example="""
ডেইলি চার্টে EUR/USD **1.0820** থেকে দুবার বাউন্স করেছে, তাই এটি Support। ১-ঘণ্টার চার্টে প্রাইস **1.0830** এ পুলব্যাক করে আর লম্বা নিচের Wick সহ বুলিশ ক্যান্ডেল **1.0834** এ Close করে। পরিকল্পনা: **1.0834** এ Buy, Stop **1.0814** (Support এর নিচে): রিস্ক ২০ পিপ; টার্গেট **1.0874** (আগের Swing High): রিওয়ার্ড ৪০ পিপ, পরিকল্পিত **১ : ২.০**। প্রাইস **1.0814** এর নিচে Close করলে Support ব্যর্থ, ধারণা বাতিল।""",
        mistakes=[["প্রসঙ্গ ছাড়া একটি ক্যান্ডেল পড়া", "এটি কোথায় ও পরে কী হয় দেখুন"], ["অনেক লেভেল চিহ্নিত করা", "প্রাইস যে কয়েকটি বারবার সম্মান করেছে সেগুলো রাখুন"], ["Stop বা সাইজের পরিকল্পনা ছাড়া ট্রেড", "এন্ট্রির আগে দুটিই পরিকল্পনা করুন"], ["দ্রুত লাইভ ট্রেডে ঝাঁপ", "আগে পুরোনো চার্ট ও ডেমোতে অনুশীলন করুন"]],
        practice=["এক পেয়ারের ডেইলি চার্টে স্ট্রাকচার ও দুটি সাপোর্ট বা রেজিস্ট্যান্স লেভেল চিহ্নিত করুন।", "১-ঘণ্টার চার্টে আপনার লেভেলে তিনটি প্রতিক্রিয়া খুঁজে ক্যান্ডেল কী করেছে লিখুন।", "একটি কাল্পনিক ট্রেডের পরিকল্পনা লিখুন: এন্ট্রি, Stop, টার্গেট, সাইজ।"],
        summary=[["Price Action", "ক্যান্ডেল, স্ট্রাকচার ও লেভেল থেকে সিদ্ধান্ত"], ["স্তম্ভ", "ক্যান্ডেল, মার্কেট স্ট্রাকচার, সাপোর্ট-রেজিস্ট্যান্স"], ["রুটিন", "ডেইলি বায়াস, লেভেল, ১-ঘণ্টার প্রতিক্রিয়া, পরিকল্পনা, জার্নাল"], ["প্রত্যাশা", "অনুশীলনে গড়া দক্ষতা, মুনাফার প্রতিশ্রুতি নয়"]],
        related=[("/price-action/introduction", "Introduction to Price Action"), ("/price-action/candlestick-basics", "Candlestick Basics"), ("/price-action/support-resistance", "Support and Resistance"), ("/blog/top-5-beginner-mistakes", "Top 5 Beginner Mistakes")],
        fig_alt="Price Action এর তিন স্তম্ভ: একটি সিন্থেটিক চার্টে ক্যান্ডেল, মার্কেট স্ট্রাকচার এবং সাপোর্ট-রেজিস্ট্যান্স",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Introduction to Price Action"),
)
