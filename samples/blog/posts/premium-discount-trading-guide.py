SPEC = dict(
    fm=dict(date="2026-05-13", category="SMC", tags=["premium-discount", "smc", "order-blocks", "fibonacci", "value-zones"], reading=7, featured=True),
    fig=dict(img="/images/smc/premium-discount/premium-discount-obs-dark.webp", video="/videos/smc/premium-discount-explainer-dark.mp4", lesson="/smc/premium-discount"),
    en=dict(
        title="Premium and Discount Trading Guide — Buy Low, Sell High Inside a Range",
        description="How to split a swing range at its 50% equilibrium into premium (upper half) and discount (lower half), why traders prefer buying in discount and selling in premium, how to combine it with order blocks, the cases where it fails, and a worked EUR/USD buy with a 1 to 2.7 planned reward-to-risk.",
        intro="Take any swing range and draw its **50% midpoint**, the **equilibrium**. Prices above are the **premium** half, prices below are the **discount** half. The idea is simple and old: **buy the lower half, sell the upper half**. It filters entries by where they sit inside a range; it is not a signal by itself.",
        fix="The original tied premium and discount to what \"institutions\" do and implied a high success rate. Neither is established. The 50% split is a **convention**; its value is that it stops you buying near the top of a range. Test whether it improves your results.",
        sections=[
            ("The Range and Its Halves", """
| Part              | Definition                                    | Stance                                        |
| ----------------- | --------------------------------------------- | --------------------------------------------- |
| **Range**         | Swing low to swing high (or the reverse)       | Choose a clear, confirmed swing               |
| **Equilibrium**   | The 50% level of the range                    | A reference, not a signal                     |
| **Premium**       | Above the 50% level                           | Look for sells (or avoid buying)              |
| **Discount**      | Below the 50% level                           | Look for buys (or avoid selling)              |

Example: range low **1.0800**, high **1.0900**. Equilibrium **1.0850**. Premium **1.0850 – 1.0900**, discount **1.0800 – 1.0850**. See [Premium and Discount](/en/smc/premium-discount) and [Dealing Range](/en/ict/dealing-range)."""),
            ("Combining With a Zone", """
| Combination                                        | Why it helps                                                         |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| Buy at a bullish order block **in discount**       | Two reasons agree: zone and location                                 |
| Sell at a bearish order block **in premium**       | Same, reversed                                                       |
| Zone against the location (buy in premium)         | Needs a very strong reason: it often means chasing                   |
| Range direction agrees with the higher timeframe   | Trade the larger trend's side of the range                           |

In a strong trend price may stay in premium (or discount) for a long time: waiting for discount can mean never entering. Then use the **last pullback** as the range instead. See [PD Arrays](/en/ict/pd-arrays)."""),
            ("When It Fails", """
| Failure                                         | What it looks like                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------- |
| Range broken, not a range any more              | A close beyond the swing: redraw or step aside                      |
| Trend never gives a discount                    | Price runs; you wait and miss it                                    |
| Using too small a range                         | Premium and discount become noise                                   |
| Treating 50% as a magnet                        | Price often goes straight through it                                |"""),
        ],
        example="""
Range **1.0800 – 1.0900**, equilibrium **1.0850**. A bullish order block sits at **1.0826 – 1.0834**, deep in discount, and a 5-minute candle rejects it. Plan: buy **1.0832**, stop **1.0812** (below the block and the range low area): risk 20 pips; target **1.0886** (near the top of the range): reward 54 pips, **1 : 2.7** planned. If price closes below **1.0812**, the idea is cancelled.""",
        mistakes=[["Buying in premium because the setup looks good", "Require the location to agree, or accept a lower-quality trade"], ["Using the 50% level as an entry", "It is a reference: you still need a zone and a reaction"], ["Using a stale range", "Redraw after structure breaks"], ["Waiting forever for discount", "In trends, use the latest pullback range"]],
        practice=["Draw ranges on ten recent swings and mark the 50% level.", "Count how many pullback entries came from discount and how many from premium.", "Compare the R of the two groups."],
        summary=[["Equilibrium", "The 50% level of a swing range"], ["Rule", "Buy below it, sell above it, ideally at a zone"], ["Limits", "Strong trends, broken ranges and tiny ranges"], ["Status", "A convention to test, not a signal"]],
        related=[("/smc/premium-discount", "Premium and Discount"), ("/ict/dealing-range", "Dealing Range"), ("/ict/pd-arrays", "PD Arrays"), ("/blog/premium-discount-zones-complete", "Premium and Discount Zones")],
        fig_alt="A synthetic range with the 50% equilibrium, the premium half above and the discount half below, and order blocks in each",
        fig_note="Synthetic candles for teaching", fig_label="Premium and Discount"),
    bn=dict(
        title="Premium ও Discount ট্রেডিং গাইড — রেঞ্জের ভেতরে কম দামে কিনুন, বেশি দামে বেচুন",
        description="Swing রেঞ্জকে ৫০% Equilibrium এ Premium (উপরের অর্ধেক) ও Discount (নিচের অর্ধেক) এ কীভাবে ভাগ করবেন, কেন ট্রেডাররা Discount এ Buy ও Premium এ Sell পছন্দ করেন, Order Block এর সাথে মেলানো, কোথায় ব্যর্থ হয়, আর ১ : ২.৭ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে EUR/USD Buy এর উদাহরণ।",
        intro="যেকোনো Swing রেঞ্জ নিয়ে এর **৫০% মধ্যবিন্দু** টানুন: **Equilibrium**। উপরের দামগুলো **Premium** অর্ধেক, নিচেরগুলো **Discount** অর্ধেক। ধারণা সরল ও পুরোনো: **নিচের অর্ধেকে কিনুন, উপরের অর্ধেকে বেচুন**। এটি রেঞ্জের ভেতরে এন্ট্রি কোথায় তা দিয়ে ফিল্টার করে; নিজে সংকেত নয়।",
        fix="মূল লেখায় Premium ও Discount কে \"প্রতিষ্ঠান\" যা করে তার সাথে জোড়া হয়েছিল এবং উচ্চ সাফল্যের ইঙ্গিত ছিল। কোনোটিই প্রতিষ্ঠিত নয়। ৫০% বিভাজন একটি **রীতি**; এর মূল্য হলো রেঞ্জের শীর্ষের কাছে কেনা থেকে আটকানো। এটি আপনার ফল ভালো করে কি না পরীক্ষা করুন।",
        sections=[
            ("রেঞ্জ ও তার দুই অর্ধেক", """
| অংশ              | সংজ্ঞা                                    | অবস্থান                                        |
| ----------------- | --------------------------------------------- | --------------------------------------------- |
| **রেঞ্জ**         | Swing Low থেকে Swing High (বা উল্টো)       | স্পষ্ট, নিশ্চিত Swing বাছুন               |
| **Equilibrium**   | রেঞ্জের ৫০% লেভেল                    | রেফারেন্স, সংকেত নয়                     |
| **Premium**       | ৫০% লেভেলের উপরে                           | Sell খুঁজুন (বা Buy এড়ান)              |
| **Discount**      | ৫০% লেভেলের নিচে                           | Buy খুঁজুন (বা Sell এড়ান)              |

উদাহরণ: রেঞ্জ Low **1.0800**, High **1.0900**। Equilibrium **1.0850**। Premium **1.0850 – 1.0900**, Discount **1.0800 – 1.0850**। [Premium and Discount](/bn/smc/premium-discount) ও [Dealing Range](/bn/ict/dealing-range) দেখুন।"""),
            ("জোনের সাথে মেলানো", """
| সমন্বয়                                        | কেন সাহায্য করে                                                         |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| **Discount এ** বুলিশ Order Block এ Buy       | দুটি কারণ মেলে: জোন ও অবস্থান                                 |
| **Premium এ** বেয়ারিশ Order Block এ Sell       | একই, উল্টো                                                       |
| অবস্থানের বিরুদ্ধে জোন (Premium এ Buy)         | খুব শক্তিশালী কারণ লাগে: প্রায়ই তাড়া করা বোঝায়                  |
| রেঞ্জের দিক হায়ার টাইমফ্রেমের সাথে একমত   | বড় ট্রেন্ডের পাশের রেঞ্জ ট্রেড করুন                                   |

শক্তিশালী ট্রেন্ডে প্রাইস অনেকক্ষণ Premium (বা Discount) এ থাকতে পারে: Discount এর অপেক্ষা মানে কখনো এন্ট্রি না হওয়া। তখন রেঞ্জ হিসেবে **শেষ পুলব্যাক** ব্যবহার করুন। [PD Arrays](/bn/ict/pd-arrays) দেখুন।"""),
            ("কখন ব্যর্থ হয়", """
| ব্যর্থতা                                         | দেখতে কেমন                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------- |
| রেঞ্জ ভেঙে গেছে, আর রেঞ্জ নেই              | Swing এর ওপারে Close: আবার আঁকুন বা সরে থাকুন                      |
| ট্রেন্ড কখনো Discount দেয় না                    | প্রাইস পালিয়ে যায়; অপেক্ষা করে মিস                                    |
| খুব ছোট রেঞ্জ ব্যবহার                       | Premium ও Discount নয়েজ হয়ে যায়                                   |
| ৫০% কে চুম্বক ধরা                        | প্রাইস প্রায়ই সোজা ভেদ করে যায়                                |"""),
        ],
        example="""
রেঞ্জ **1.0800 – 1.0900**, Equilibrium **1.0850**। Discount এর গভীরে **1.0826 – 1.0834** এ বুলিশ Order Block, আর ৫-মিনিটের ক্যান্ডেল এটি প্রত্যাখ্যান করে। পরিকল্পনা: **1.0832** এ Buy, Stop **1.0812** (ব্লক ও রেঞ্জ Low এলাকার নিচে): রিস্ক ২০ পিপ; টার্গেট **1.0886** (রেঞ্জের শীর্ষের কাছে): রিওয়ার্ড ৫৪ পিপ, পরিকল্পিত **১ : ২.৭**। প্রাইস **1.0812** এর নিচে Close করলে ধারণা বাতিল।""",
        mistakes=[["সেটআপ ভালো দেখায় বলে Premium এ Buy", "অবস্থান মেলা দাবি করুন, বা নিম্নমানের ট্রেড মেনে নিন"], ["৫০% লেভেলকে এন্ট্রি হিসেবে ব্যবহার", "এটি রেফারেন্স: জোন ও প্রতিক্রিয়া তবুও লাগবে"], ["পুরোনো রেঞ্জ ব্যবহার", "স্ট্রাকচার ভাঙলে আবার আঁকুন"], ["Discount এর জন্য অনন্তকাল অপেক্ষা", "ট্রেন্ডে সর্বশেষ পুলব্যাক রেঞ্জ ব্যবহার করুন"]],
        practice=["দশটি সাম্প্রতিক Swing এ রেঞ্জ এঁকে ৫০% লেভেল চিহ্নিত করুন।", "কতগুলো পুলব্যাক এন্ট্রি Discount থেকে আর কতগুলো Premium থেকে এসেছে গুনুন।", "দুই গ্রুপের R তুলনা করুন।"],
        summary=[["Equilibrium", "Swing রেঞ্জের ৫০% লেভেল"], ["নিয়ম", "এর নিচে Buy, উপরে Sell, আদর্শভাবে জোনে"], ["সীমা", "শক্তিশালী ট্রেন্ড, ভাঙা রেঞ্জ ও ছোট রেঞ্জ"], ["অবস্থা", "পরীক্ষার রীতি, সংকেত নয়"]],
        related=[("/smc/premium-discount", "Premium and Discount"), ("/ict/dealing-range", "Dealing Range"), ("/ict/pd-arrays", "PD Arrays"), ("/blog/premium-discount-zones-complete", "Premium and Discount Zones")],
        fig_alt="৫০% Equilibrium, উপরের Premium অর্ধেক, নিচের Discount অর্ধেক ও প্রতিটিতে Order Block সহ একটি সিন্থেটিক রেঞ্জ",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Premium and Discount"),
)
