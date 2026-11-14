SPEC = dict(
    fm=dict(date="2026-05-19", category="Price Action", tags=["multi-timeframe", "mtf-analysis", "timeframes", "confluence"], reading=8, featured=True),
    fig=dict(img="/images/price-action/multi-timeframe-analysis/multi-timeframe-top-down-dark.webp", video="/videos/price-action/multi-timeframe-explainer-dark.mp4", lesson="/price-action/multi-timeframe-analysis"),
    en=dict(
        title="Multi-Timeframe Analysis — A Top-Down Method with Three Charts",
        description="How to use three timeframes with fixed roles (direction, zone, trigger), why a ratio of roughly 4 to 6 between them works as a rule of thumb, what to do when they disagree, and a worked top-down EUR/USD trade (daily, 1-hour, 5-minute) with a 1 to 3 planned reward-to-risk.",
        intro="One chart can show two opposite stories: an uptrend on the daily and a downtrend on the 5-minute. **Multi-timeframe analysis** gives each chart one job so the stories don't collide: a higher timeframe for **direction**, a middle one for the **zone**, and a lower one for the **trigger**.",
        fix="The original called multi-timeframe analysis a professional edge and gave fixed alignment statistics. We found no source for such numbers. The method is a way to organise decisions and avoid trading against the larger picture; its value has to be judged in your own results.",
        sections=[
            ("Three Charts, Three Jobs", """
| Role          | Example (swing)    | Example (day trading) | Question                                   |
| ------------- | ------------------ | --------------------- | ------------------------------------------ |
| **Direction** | Weekly / daily     | Daily / 4-hour        | Which way is the larger trend?             |
| **Zone**      | 4-hour             | 1-hour                | Where could price react?                   |
| **Trigger**   | 1-hour             | 5-minute              | Has price shown a reaction at the zone?    |

A common rule of thumb is a **ratio of about 4 to 6** between neighbouring timeframes (daily to 4-hour to 1-hour is roughly 6 then 4; 1-hour to 15-minute to 5-minute is 4 then 3). Too close and you add noise, too far apart and the chart loses the connection. See the [Multi-Timeframe Analysis](/en/price-action/multi-timeframe-analysis) lesson for the chart walk-through."""),
            ("The Top-Down Routine", """
| Step | Chart       | What to do                                                                  |
| ---- | ----------- | --------------------------------------------------------------------------- |
| 1    | Direction   | Mark structure and the nearest major levels; write the bias                 |
| 2    | Zone        | Find a level, order block or gap that agrees with the bias                  |
| 3    | Trigger     | Wait for a reaction or a structure shift **in the bias direction** at the zone |
| 4    | All         | Place the stop beyond the zone's structure and check the target against the higher-timeframe level |

You enter on the lowest chart but your reasons come from the higher ones. Work **down**, never up from the trigger chart."""),
            ("When Timeframes Disagree", """
| Situation                                          | Reasonable response                                           |
| -------------------------------------------------- | ------------------------------------------------------------- |
| Direction up, trigger shows a down shift           | Wait: it may be only a pullback; trade only with the direction |
| Direction range, zone at a range edge              | Take smaller size, shorter targets                            |
| Direction and zone disagree                        | Stand aside                                                   |
| Everything aligns but the target is too close      | Skip the trade                                                |

Disagreement is information: it is often a reason to **do nothing**."""),
        ],
        example="""
Daily structure is bullish (higher lows) and the nearest daily support is **1.0820**. On the 1-hour chart price pulls back to a bullish order block at **1.0826 – 1.0832**. On the 5-minute chart a candle closes above the last lower high at **1.0834**. Plan: buy **1.0834**, stop **1.0822** (below the zone): risk 12 pips; target **1.0870** (the 1-hour swing high): reward 36 pips, **1 : 3.0** planned. If price closes below **1.0822**, the zone has failed and the plan is cancelled.""",
        mistakes=[["Using many timeframes with no roles", "Pick three and give each a job"], ["Trading the trigger against the direction", "Trade only with the higher-timeframe bias"], ["Switching timeframes after a loss", "Fix the set before the session"], ["Ignoring the higher-timeframe level", "Check the target against it"]],
        practice=["Choose your direction, zone and trigger timeframes and write them down.", "For ten past trades, check whether all three charts agreed at entry.", "Compare the R of trades where they agreed with those where they did not."],
        summary=[["Roles", "Direction, zone, trigger"], ["Ratio", "Roughly 4 to 6 between neighbours, as a rule of thumb"], ["Disagreement", "A reason to wait or stand aside"], ["Edge", "A way to organise decisions, not proven by itself"]],
        related=[("/price-action/multi-timeframe-analysis", "Multi-Timeframe Analysis"), ("/blog/timeframe-selection", "Choosing a Timeframe"), ("/price-action/market-structure", "Market Structure"), ("/blog/trade-execution-checklist", "Trade Execution Checklist")],
        fig_alt="A synthetic top-down chart: the daily trend, a 1-hour zone and a 5-minute trigger lined up on one trade",
        fig_note="Synthetic candles for teaching", fig_label="Multi-Timeframe Analysis"),
    bn=dict(
        title="Multi-Timeframe Analysis — তিন চার্টের টপ-ডাউন পদ্ধতি",
        description="স্থির ভূমিকাসহ তিনটি টাইমফ্রেম (দিক, জোন, ট্রিগার) কীভাবে ব্যবহার করবেন, কেন প্রতিবেশীদের মধ্যে প্রায় ৪ থেকে ৬ অনুপাত মোটামুটি নিয়ম হিসেবে কাজ করে, টাইমফ্রেম একমত না হলে কী করবেন, আর ১ : ৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে EUR/USD টপ-ডাউন ট্রেড (ডেইলি, ১-ঘণ্টা, ৫-মিনিট)।",
        intro="একটি চার্ট দুটি বিপরীত গল্প দেখাতে পারে: ডেইলিতে আপট্রেন্ড আর ৫-মিনিটে ডাউনট্রেন্ড। **Multi-Timeframe Analysis** প্রতিটি চার্টকে একটি কাজ দেয় যাতে গল্পগুলো সংঘর্ষে না যায়: **দিক** এর জন্য হায়ার টাইমফ্রেম, **জোন** এর জন্য মাঝেরটি, আর **ট্রিগার** এর জন্য নিচেরটি।",
        fix="মূল লেখায় Multi-timeframe Analysis কে পেশাদার Edge বলা হয়েছিল এবং নির্দিষ্ট সামঞ্জস্যের পরিসংখ্যান ছিল। এমন সংখ্যার উৎস আমরা পাইনি। পদ্ধতিটি সিদ্ধান্ত সাজানো ও বড় চিত্রের বিরুদ্ধে ট্রেড এড়ানোর উপায়; এর মূল্য আপনার নিজের ফলে বিচার করতে হবে।",
        sections=[
            ("তিন চার্ট, তিন কাজ", """
| ভূমিকা          | উদাহরণ (সুইং)    | উদাহরণ (ডে ট্রেডিং) | প্রশ্ন                                   |
| ------------- | ------------------ | --------------------- | ------------------------------------------ |
| **দিক** | সাপ্তাহিক / ডেইলি     | ডেইলি / ৪-ঘণ্টা        | বড় ট্রেন্ড কোন দিকে?             |
| **জোন**      | ৪-ঘণ্টা             | ১-ঘণ্টা                | প্রাইস কোথায় প্রতিক্রিয়া দিতে পারে?                   |
| **ট্রিগার**   | ১-ঘণ্টা             | ৫-মিনিট              | জোনে কি প্রাইস প্রতিক্রিয়া দেখিয়েছে?    |

একটি প্রচলিত মোটামুটি নিয়ম হলো প্রতিবেশী টাইমফ্রেমের মধ্যে **প্রায় ৪ থেকে ৬ অনুপাত** (ডেইলি থেকে ৪-ঘণ্টা থেকে ১-ঘণ্টা মোটামুটি ৬ তারপর ৪; ১-ঘণ্টা থেকে ১৫-মিনিট থেকে ৫-মিনিট ৪ তারপর ৩)। খুব কাছে হলে নয়েজ বাড়ে, খুব দূরে হলে চার্টের সংযোগ হারায়। চার্ট ওয়াকথ্রুর জন্য [Multi-Timeframe Analysis](/bn/price-action/multi-timeframe-analysis) লেসন দেখুন।"""),
            ("টপ-ডাউন রুটিন", """
| ধাপ | চার্ট       | কী করবেন                                                                  |
| ---- | ----------- | --------------------------------------------------------------------------- |
| ১    | দিক   | স্ট্রাকচার ও কাছের প্রধান লেভেল চিহ্নিত করে বায়াস লিখুন                 |
| ২    | জোন        | বায়াসের সাথে মেলে এমন লেভেল, Order Block বা গ্যাপ খুঁজুন                  |
| ৩    | ট্রিগার     | জোনে **বায়াসের দিকে** প্রতিক্রিয়া বা স্ট্রাকচার শিফটের অপেক্ষা করুন |
| ৪    | সব       | জোনের স্ট্রাকচারের ওপারে Stop বসান আর টার্গেট হায়ার-টাইমফ্রেম লেভেলের সাথে মেলান |

আপনি সবচেয়ে নিচের চার্টে এন্ট্রি নেন কিন্তু কারণ আসে উপরের চার্ট থেকে। **নিচের দিকে** কাজ করুন, ট্রিগার চার্ট থেকে উপরে কখনো নয়।"""),
            ("টাইমফ্রেম একমত না হলে", """
| পরিস্থিতি                                          | যুক্তিসঙ্গত প্রতিক্রিয়া                                           |
| -------------------------------------------------- | ------------------------------------------------------------- |
| দিক আপ, ট্রিগার ডাউন শিফট দেখায়           | অপেক্ষা: এটি শুধু পুলব্যাক হতে পারে; শুধু দিকের সাথে ট্রেড করুন |
| দিক রেঞ্জ, জোন রেঞ্জের কিনারায়              | ছোট সাইজ, ছোট টার্গেট                            |
| দিক ও জোন একমত নয়                        | সরে থাকুন                                                   |
| সব মিলেছে কিন্তু টার্গেট খুব কাছে      | ট্রেড বাদ দিন                                                |

মতভেদ তথ্য: এটি প্রায়ই **কিছু না করার** কারণ।"""),
        ],
        example="""
ডেইলি স্ট্রাকচার বুলিশ (Higher Low) আর কাছের ডেইলি Support **1.0820**। ১-ঘণ্টার চার্টে প্রাইস **1.0826 – 1.0832** এর বুলিশ Order Block এ পুলব্যাক করে। ৫-মিনিটের চার্টে একটি ক্যান্ডেল শেষ Lower High এর উপরে **1.0834** এ Close করে। পরিকল্পনা: **1.0834** এ Buy, Stop **1.0822** (জোনের নিচে): রিস্ক ১২ পিপ; টার্গেট **1.0870** (১-ঘণ্টার Swing High): রিওয়ার্ড ৩৬ পিপ, পরিকল্পিত **১ : ৩.০**। প্রাইস **1.0822** এর নিচে Close করলে জোন ব্যর্থ, পরিকল্পনা বাতিল।""",
        mistakes=[["ভূমিকা ছাড়া অনেক টাইমফ্রেম ব্যবহার", "তিনটি বেছে প্রতিটিকে কাজ দিন"], ["দিকের বিরুদ্ধে ট্রিগারে ট্রেড", "শুধু হায়ার-টাইমফ্রেম বায়াসের সাথে ট্রেড করুন"], ["লোকসানের পর টাইমফ্রেম বদলানো", "সেশনের আগে সেট ঠিক করুন"], ["হায়ার-টাইমফ্রেম লেভেল উপেক্ষা", "টার্গেট এর সাথে মেলান"]],
        practice=["আপনার দিক, জোন ও ট্রিগার টাইমফ্রেম বেছে লিখুন।", "দশটি পুরোনো ট্রেডে এন্ট্রিতে তিন চার্ট একমত ছিল কি না দেখুন।", "একমত ও না-একমত ট্রেডের R তুলনা করুন।"],
        summary=[["ভূমিকা", "দিক, জোন, ট্রিগার"], ["অনুপাত", "মোটামুটি নিয়ম হিসেবে প্রতিবেশীদের মধ্যে প্রায় ৪ থেকে ৬"], ["মতভেদ", "অপেক্ষা বা সরে থাকার কারণ"], ["Edge", "সিদ্ধান্ত সাজানোর উপায়, নিজে প্রমাণিত নয়"]],
        related=[("/price-action/multi-timeframe-analysis", "Multi-Timeframe Analysis"), ("/blog/timeframe-selection", "Choosing a Timeframe"), ("/price-action/market-structure", "Market Structure"), ("/blog/trade-execution-checklist", "Trade Execution Checklist")],
        fig_alt="একটি সিন্থেটিক টপ-ডাউন চার্ট: একটি ট্রেডে ডেইলি ট্রেন্ড, ১-ঘণ্টার জোন ও ৫-মিনিটের ট্রিগার মিলেছে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Multi-Timeframe Analysis"),
)
