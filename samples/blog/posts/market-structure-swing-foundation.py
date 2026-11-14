SPEC = dict(
    fm=dict(date="2026-05-19", category="Price Action", tags=["market-structure", "swing-high", "swing-low", "choch", "bos"], reading=8, featured=True),
    fig=dict(img="/images/price-action/market-structure/market-structure-cycle-dark.webp", video="/videos/price-action/market-structure-explainer-dark.mp4", lesson="/price-action/market-structure"),
    en=dict(
        title="Market Structure and Swing Points — The Foundation",
        description="How to mark swing highs and lows objectively, read an uptrend (higher highs and higher lows), a downtrend and a range from them, how structure sets stops and targets, internal versus external swings, and how structure breaks. Includes a worked pullback buy with a 1 to 2.9 planned reward-to-risk.",
        intro="**Market structure** is the sequence of **swing highs and swing lows** that price leaves behind. Almost every other chart idea (trend, support, breakouts, order blocks) is built from it, so marking it consistently is the first skill to learn.",
        fix="The original gave fixed percentages for how often trends continue and presented structure as predictive. Structure **describes** what price has done; it does not tell you what comes next. The rules below are about marking it objectively and using it for risk, not about forecasting.",
        sections=[
            ("Marking Swings Objectively", """
| Rule                                  | Detail                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| **Swing high**                        | A candle whose high is higher than the highs of the N candles on each side     |
| **Swing low**                         | A candle whose low is lower than the lows of the N candles on each side        |
| Choose N once                         | Commonly 2 or 3 on the chart you trade; stay consistent                        |
| Use closes to confirm breaks          | A swing is broken when a candle **closes** beyond it, not just wicks through   |

Different timeframes show different swings. Mark **external** swings (the larger turning points of the range) and **internal** swings (smaller ones inside a pullback): see [Internal and External Liquidity](/en/smc/internal-external-liquidity) and [Swing Highs and Lows](/en/price-action/swing-high-low)."""),
            ("Reading the Trend", """
| Structure                                       | Reading        | Typical stance                                         |
| ----------------------------------------------- | -------------- | ------------------------------------------------------ |
| Higher highs and higher lows                    | Uptrend        | Look for buys on pullbacks to the last higher low      |
| Lower highs and lower lows                      | Downtrend      | Look for sells on pullbacks to the last lower high     |
| Highs and lows within a band                    | Range          | Fade the edges with small size, or wait for a break    |
| A close beyond the last higher low (in an uptrend) | Trend may be changing | Treat as a warning; wait for confirmation       |

See [Market Structure](/en/price-action/market-structure) and [CHOCH vs BOS](/en/blog/choch-vs-bos-explained) for how breaks are classified."""),
            ("Structure for Stops and Targets", """
| Use              | Rule                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **Stop**         | Beyond the swing that, if broken, would change your view (not a fixed pip count)           |
| **Target**       | The previous swing high or low, or the next level                                          |
| **Invalidation** | A close beyond the swing you are using                                                     |

A stop at a **structural** point has a reason: if price gets there, the idea was wrong."""),
        ],
        example="""
EUR/USD is making higher highs and higher lows; the last higher low is **1.0820** and the last high **1.0866**. Price pulls back to **1.0826** and a 15-minute candle rejects. Plan: buy **1.0826**, stop **1.0812** (below the higher low): risk 14 pips; target **1.0866** (the prior high): reward 40 pips, **1 : 2.9** planned. If price closes below **1.0820** the higher low is broken and the uptrend reading is in doubt.""",
        mistakes=[["Changing the swing definition to fit the story", "Fix N and keep it"], ["Treating a wick through a swing as a break", "Use closes"], ["Placing stops by pip count", "Use structure"], ["Marking swings on one timeframe only", "Check the higher timeframe's structure"]],
        practice=["Mark swings with N = 3 on 100 candles of one pair, then repeat a week later and compare.", "Label the trend at five points and check what the next swing did.", "For three trades, place stops at the structural swing and compute the R."],
        summary=[["Structure", "The sequence of swing highs and lows"], ["Trend", "Higher highs and lows, lower highs and lows, or a range"], ["Breaks", "A close beyond a swing, not a wick"], ["Use", "Stops, targets and invalidation — not prediction"]],
        related=[("/price-action/market-structure", "Market Structure"), ("/price-action/swing-high-low", "Swing Highs and Lows"), ("/blog/choch-vs-bos-explained", "CHOCH vs BOS"), ("/blog/market-structure-shift-choch-bos", "Market Structure Shift")],
        fig_alt="A synthetic uptrend showing swing highs, swing lows and the structure cycle of higher highs and higher lows",
        fig_note="Synthetic candles for teaching", fig_label="Market Structure"),
    bn=dict(
        title="Market Structure ও Swing Point — ভিত্তি",
        description="Swing High ও Low নিরপেক্ষভাবে কীভাবে চিহ্নিত করবেন, এগুলো থেকে আপট্রেন্ড (Higher High ও Higher Low), ডাউনট্রেন্ড ও রেঞ্জ কীভাবে পড়বেন, স্ট্রাকচার কীভাবে Stop ও টার্গেট ঠিক করে, Internal বনাম External Swing, আর স্ট্রাকচার কীভাবে ভাঙে। ১ : ২.৯ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে পুলব্যাক Buy এর উদাহরণসহ।",
        intro="**Market Structure** হলো প্রাইসের রেখে যাওয়া **Swing High ও Swing Low** এর ক্রম। প্রায় সব অন্য চার্ট-ধারণা (ট্রেন্ড, সাপোর্ট, Breakout, Order Block) এ থেকেই তৈরি, তাই ধারাবাহিকভাবে এটি চিহ্নিত করা শেখার প্রথম দক্ষতা।",
        fix="মূল লেখায় ট্রেন্ড কত ঘন চলতে থাকে তার স্থির শতাংশ দেওয়া হয়েছিল এবং স্ট্রাকচারকে ভবিষ্যদ্বাণীমূলক দেখানো হয়েছিল। স্ট্রাকচার প্রাইস কী করেছে তা **বর্ণনা** করে; পরে কী আসছে তা বলে না। নিচের নিয়ম একে নিরপেক্ষভাবে চিহ্নিত করা ও ঝুঁকির জন্য ব্যবহার নিয়ে, পূর্বাভাস নিয়ে নয়।",
        sections=[
            ("নিরপেক্ষভাবে Swing চিহ্নিত করা", """
| নিয়ম                                  | বিস্তারিত                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| **Swing High**                        | যে ক্যান্ডেলের High দুই পাশের N ক্যান্ডেলের High এর চেয়ে বেশি     |
| **Swing Low**                         | যে ক্যান্ডেলের Low দুই পাশের N ক্যান্ডেলের Low এর চেয়ে কম        |
| N একবার ঠিক করুন                         | যে চার্টে ট্রেড করেন সেখানে সাধারণত ২ বা ৩; ধারাবাহিক থাকুন                        |
| ভাঙা নিশ্চিত করতে Close ব্যবহার          | ক্যান্ডেল ওপারে **Close** করলেই Swing ভাঙে, শুধু Wick ভেদ করলে নয়   |

ভিন্ন টাইমফ্রেম ভিন্ন Swing দেখায়। **External** Swing (রেঞ্জের বড় মোড়ের বিন্দু) ও **Internal** Swing (পুলব্যাকের ভেতরের ছোটগুলো) চিহ্নিত করুন: [Internal and External Liquidity](/bn/smc/internal-external-liquidity) ও [Swing Highs and Lows](/bn/price-action/swing-high-low) দেখুন।"""),
            ("ট্রেন্ড পড়া", """
| স্ট্রাকচার                                       | পাঠ        | সাধারণ অবস্থান                                         |
| ----------------------------------------------- | -------------- | ------------------------------------------------------ |
| Higher High ও Higher Low                    | আপট্রেন্ড        | শেষ Higher Low তে পুলব্যাকে Buy খুঁজুন      |
| Lower High ও Lower Low                      | ডাউনট্রেন্ড      | শেষ Lower High এ পুলব্যাকে Sell খুঁজুন     |
| ব্যান্ডের ভেতরে High ও Low                    | রেঞ্জ          | ছোট সাইজে কিনারা Fade, বা ভাঙার অপেক্ষা    |
| (আপট্রেন্ডে) শেষ Higher Low এর ওপারে Close | ট্রেন্ড বদলাতে পারে | সতর্কতা ধরুন; নিশ্চিতকরণের অপেক্ষা করুন       |

ভাঙা কীভাবে শ্রেণিবদ্ধ হয় তা [Market Structure](/bn/price-action/market-structure) ও [CHOCH vs BOS](/bn/blog/choch-vs-bos-explained) এ দেখুন।"""),
            ("Stop ও টার্গেটের জন্য স্ট্রাকচার", """
| ব্যবহার              | নিয়ম                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **Stop**         | যে Swing ভাঙলে আপনার দৃষ্টিভঙ্গি বদলাবে তার ওপারে (স্থির পিপ সংখ্যা নয়)           |
| **টার্গেট**       | আগের Swing High বা Low, বা পরের লেভেল                                          |
| **বাতিল** | আপনার ব্যবহৃত Swing এর ওপারে Close                                                     |

**স্ট্রাকচারাল** বিন্দুতে Stop এর কারণ আছে: প্রাইস সেখানে গেলে ধারণা ভুল ছিল।"""),
        ],
        example="""
EUR/USD Higher High ও Higher Low বানাচ্ছে; শেষ Higher Low **1.0820** ও শেষ High **1.0866**। প্রাইস **1.0826** এ পুলব্যাক করে আর ১৫-মিনিটের ক্যান্ডেল প্রত্যাখ্যান করে। পরিকল্পনা: **1.0826** এ Buy, Stop **1.0812** (Higher Low এর নিচে): রিস্ক ১৪ পিপ; টার্গেট **1.0866** (আগের High): রিওয়ার্ড ৪০ পিপ, পরিকল্পিত **১ : ২.৯**। প্রাইস **1.0820** এর নিচে Close করলে Higher Low ভাঙে আর আপট্রেন্ড পাঠ সন্দেহজনক।""",
        mistakes=[["গল্প মেলাতে Swing এর সংজ্ঞা বদলানো", "N ঠিক করে রাখুন"], ["Swing এর ভেতর দিয়ে Wick কে ভাঙা ধরা", "Close ব্যবহার করুন"], ["পিপ সংখ্যায় Stop বসানো", "স্ট্রাকচার ব্যবহার করুন"], ["শুধু এক টাইমফ্রেমে Swing চিহ্নিত", "হায়ার টাইমফ্রেমের স্ট্রাকচারও দেখুন"]],
        practice=["এক পেয়ারের ১০০ ক্যান্ডেলে N = ৩ দিয়ে Swing চিহ্নিত করুন, এক সপ্তাহ পরে আবার করে তুলনা করুন।", "পাঁচটি বিন্দুতে ট্রেন্ড লেবেল করে পরের Swing কী করেছে দেখুন।", "তিনটি ট্রেডে স্ট্রাকচারাল Swing এ Stop বসিয়ে R হিসাব করুন।"],
        summary=[["স্ট্রাকচার", "Swing High ও Low এর ক্রম"], ["ট্রেন্ড", "Higher High-Low, Lower High-Low, বা রেঞ্জ"], ["ভাঙা", "Swing এর ওপারে Close, Wick নয়"], ["ব্যবহার", "Stop, টার্গেট ও বাতিল — পূর্বাভাস নয়"]],
        related=[("/price-action/market-structure", "Market Structure"), ("/price-action/swing-high-low", "Swing Highs and Lows"), ("/blog/choch-vs-bos-explained", "CHOCH vs BOS"), ("/blog/market-structure-shift-choch-bos", "Market Structure Shift")],
        fig_alt="একটি সিন্থেটিক আপট্রেন্ড যেখানে Swing High, Swing Low ও Higher High-Higher Low এর স্ট্রাকচার চক্র দেখানো হয়েছে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Market Structure"),
)
