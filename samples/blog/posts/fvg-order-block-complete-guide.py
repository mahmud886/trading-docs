SPEC = dict(
    fm=dict(date="2026-05-19", category="SMC", tags=["fvg", "order-block", "smc", "entry-setup", "confluence"], reading=8, featured=True),
    fig=dict(img="/images/smc/order-blocks/bullish-order-block-eurusd-dark.webp", video="/videos/smc/smc-fvg-explainer-dark.mp4", lesson="/smc/order-blocks"),
    en=dict(
        title="FVG and Order Block Together — Building a Confluence Entry",
        description="How a fair value gap and an order block can overlap to define a tighter entry zone: what each one is, how to rank overlaps, how to place the stop and target, and the ways the combination fails. With a worked EUR/USD entry at a 1 to 3.1 planned reward-to-risk.",
        intro="An **order block** marks where a strong move began (the last opposite candle). A **fair value gap** marks the unfilled range left by the move itself. When the two **overlap or sit next to each other**, they define a smaller area to watch than either alone. This is confluence; it narrows the risk but does not guarantee a reaction.",
        fix="The original described the pair as a high-probability institutional setup with fixed odds. No such odds are established. Treat the overlap as a **better-defined zone**, not as a signal.",
        sections=[
            ("The Two Building Blocks", """
| Concept                | What it is                                                              | Role in the setup                             |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| **Order block (OB)**   | The last opposite candle before a displacement                           | Marks where the move started                  |
| **Fair value gap (FVG)** | The three-candle gap left by the displacement                          | Marks where price moved too quickly to overlap |
| **Overlap**            | The part of the OB and FVG that share prices                             | A narrower zone and a tighter stop            |

See [Order Blocks](/en/smc/order-blocks) and [Fair Value Gap](/en/smc/fair-value-gap) for each in detail, and [Understanding Order Blocks](/en/blog/understanding-order-blocks) and [Fair Value Gap Explained](/en/blog/fair-value-gap-explained) for the basics."""),
            ("Ranking an Overlap", """
| Feature                                    | Stronger                                           | Weaker                              |
| ------------------------------------------ | -------------------------------------------------- | ----------------------------------- |
| Displacement                               | Several large candles that break structure         | One modest candle                   |
| Liquidity taken first                      | A clear sweep before the move                      | None                                |
| Higher-timeframe direction                 | Same direction as the larger trend                 | Against it                          |
| Freshness                                  | Not yet revisited                                  | Already tested more than once       |
| Room to the target                         | At least 2R before the next opposing level         | Little space                        |

Count the stronger features. A zone with one or two is a watch-list item; a zone with four or five is worth a plan. See [Zone Strength Scoring](/en/smc/zone-strength-scoring)."""),
            ("Entry, Stop and Failure", """
| Item          | Rule                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| Entry         | At the overlap, or the FVG midpoint inside the OB, after a lower-timeframe reaction          |
| Stop          | Beyond the **far edge of the order block** (the swing that created it)                       |
| Target        | The nearest opposing liquidity or level, partial profit there                                |
| Failure       | A candle **closes through** the order block: the zone is broken and the idea is cancelled    |

Typical ways it fails: price slices through without a reaction; the gap fills completely and the block is broken; a news spike overwhelms the zone."""),
        ],
        example="""
Bullish order block **1.0826 – 1.0834**; the gap above it spans **1.0836 – 1.0842**. Price returns to the top of the block and the lower edge of the gap at **1.0836** and a 5-minute candle rejects. Plan: buy **1.0836**, stop **1.0822** (below the order block): risk 14 pips; target **1.0880**: reward 44 pips, **1 : 3.1** planned. If a candle closes below **1.0822**, the zone has failed and the plan is cancelled.""",
        mistakes=[["Treating overlap as a signal", "Wait for a reaction and confirmation"], ["Stop inside the block", "Place it beyond the far edge"], ["Using already-tested zones as fresh", "Prefer zones price has not revisited"], ["Entering with less than 2R of room", "Skip trades with a nearby opposing level"]],
        practice=["Find five order blocks that have a fair value gap beside them and mark the overlap.", "Score each zone with the table above.", "Note which scores produced a reaction on the return."],
        summary=[["OB", "The last opposite candle before a displacement"], ["FVG", "The unfilled range the displacement leaves"], ["Overlap", "A narrower, better-defined zone and a tighter stop"], ["Caution", "Confluence narrows risk; it does not guarantee a reaction"]],
        related=[("/smc/order-blocks", "Order Blocks"), ("/smc/fair-value-gap", "Fair Value Gap"), ("/smc/zone-strength-scoring", "Zone Strength Scoring"), ("/blog/understanding-order-blocks", "Understanding Order Blocks")],
        fig_alt="A synthetic EUR/USD bullish order block: the last down candle before a strong move up, and price later returning to the zone",
        fig_note="Synthetic candles for teaching", fig_label="Order Blocks"),
    bn=dict(
        title="FVG ও Order Block একসাথে — Confluence এন্ট্রি বানানো",
        description="Fair Value Gap ও Order Block কীভাবে ওভারল্যাপ করে আরও সংকীর্ণ এন্ট্রি জোন তৈরি করে: প্রতিটি কী, ওভারল্যাপ কীভাবে র‍্যাঙ্ক করবেন, Stop ও টার্গেট কোথায়, আর সমন্বয় কীভাবে ব্যর্থ হয়। ১ : ৩.১ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে EUR/USD উদাহরণসহ।",
        intro="**Order Block** চিহ্নিত করে শক্তিশালী মুভ কোথায় শুরু হয়েছিল (শেষ বিপরীত ক্যান্ডেল)। **Fair Value Gap** চিহ্নিত করে মুভ নিজে যে অপূরিত রেঞ্জ রেখে গেছে। দুটি **ওভারল্যাপ করলে বা পাশাপাশি থাকলে** একা কোনোটির চেয়ে ছোট এলাকা দেখার থাকে। এটিই Confluence; ঝুঁকি সংকীর্ণ করে কিন্তু প্রতিক্রিয়ার নিশ্চয়তা দেয় না।",
        fix="মূল লেখায় জোড়াটিকে নির্দিষ্ট সম্ভাবনার উচ্চ-সম্ভাবনার প্রাতিষ্ঠানিক সেটআপ বলা হয়েছিল। এমন কোনো সম্ভাবনা প্রতিষ্ঠিত নয়। ওভারল্যাপকে **আরও ভালোভাবে সংজ্ঞায়িত জোন** ধরুন, সংকেত নয়।",
        sections=[
            ("দুটি বিল্ডিং ব্লক", """
| ধারণা                | কী                                                              | সেটআপে ভূমিকা                             |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| **Order Block (OB)**   | Displacement এর আগের শেষ বিপরীত ক্যান্ডেল                           | মুভ কোথায় শুরু হয়েছিল চিহ্নিত করে                  |
| **Fair Value Gap (FVG)** | Displacement এর রেখে যাওয়া তিন-ক্যান্ডেলের গ্যাপ                          | প্রাইস এত দ্রুত চলেছে যে ওভারল্যাপ হয়নি তা চিহ্নিত করে |
| **ওভারল্যাপ**            | OB ও FVG এর যে অংশ একই দাম ভাগ করে                             | সংকীর্ণ জোন ও কাছের Stop            |

প্রতিটি বিস্তারিত দেখতে [Order Blocks](/bn/smc/order-blocks) ও [Fair Value Gap](/bn/smc/fair-value-gap), আর মৌলিক ধারণার জন্য [Understanding Order Blocks](/bn/blog/understanding-order-blocks) ও [Fair Value Gap Explained](/bn/blog/fair-value-gap-explained) দেখুন।"""),
            ("ওভারল্যাপ র‍্যাঙ্ক করা", """
| বৈশিষ্ট্য                                    | শক্তিশালী                                           | দুর্বল                              |
| ------------------------------------------ | -------------------------------------------------- | ----------------------------------- |
| Displacement                               | স্ট্রাকচার ভাঙা কয়েকটি বড় ক্যান্ডেল         | একটি মাঝারি ক্যান্ডেল                   |
| আগে লিকুইডিটি নেওয়া                      | মুভের আগে স্পষ্ট Sweep                      | নেই                                |
| হায়ার-টাইমফ্রেমের দিক                 | বড় ট্রেন্ডের একই দিক                 | বিপরীত                          |
| তাজা                                          | এখনো পুনঃপরিদর্শিত হয়নি                                  | একাধিকবার পরীক্ষিত       |
| টার্গেট পর্যন্ত জায়গা                         | পরের বিপরীত লেভেলের আগে অন্তত ২R         | সামান্য জায়গা                    |

শক্তিশালী বৈশিষ্ট্য গুনুন। একটি বা দুটি থাকলে ওয়াচ-লিস্টের আইটেম; চার-পাঁচটি থাকলে পরিকল্পনার যোগ্য। [Zone Strength Scoring](/bn/smc/zone-strength-scoring) দেখুন।"""),
            ("এন্ট্রি, Stop ও ব্যর্থতা", """
| বিষয়          | নিয়ম                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| এন্ট্রি         | ওভারল্যাপে, বা লোয়ার-টাইমফ্রেম প্রতিক্রিয়ার পর OB এর ভেতরে FVG মধ্যবিন্দুতে          |
| Stop          | **Order Block এর দূরের কিনারার** ওপারে (যে Swing এটি তৈরি করেছে)                       |
| টার্গেট        | কাছের বিপরীত লিকুইডিটি বা লেভেল, সেখানে আংশিক মুনাফা                                |
| ব্যর্থতা       | একটি ক্যান্ডেল Order Block ভেদ করে **Close** করলে: জোন ভাঙা, ধারণা বাতিল    |

ব্যর্থ হওয়ার সাধারণ উপায়: প্রতিক্রিয়া ছাড়াই প্রাইস কেটে যায়; গ্যাপ পুরো পূরণ হয়ে ব্লক ভাঙে; নিউজ স্পাইক জোনকে ছাপিয়ে যায়।"""),
        ],
        example="""
বুলিশ Order Block **1.0826 – 1.0834**; এর উপরের গ্যাপ **1.0836 – 1.0842**। প্রাইস ব্লকের উপরে ও গ্যাপের নিচের কিনারায় **1.0836** এ ফেরে আর ৫-মিনিটের ক্যান্ডেল প্রত্যাখ্যান করে। পরিকল্পনা: **1.0836** এ Buy, Stop **1.0822** (Order Block এর নিচে): রিস্ক ১৪ পিপ; টার্গেট **1.0880**: রিওয়ার্ড ৪৪ পিপ, পরিকল্পিত **১ : ৩.১**। কোনো ক্যান্ডেল **1.0822** এর নিচে Close করলে জোন ব্যর্থ, পরিকল্পনা বাতিল।""",
        mistakes=[["ওভারল্যাপকে সংকেত ধরা", "প্রতিক্রিয়া ও নিশ্চিতকরণের অপেক্ষা করুন"], ["ব্লকের ভেতরে Stop", "দূরের কিনারার ওপারে রাখুন"], ["পরীক্ষিত জোনকে তাজা ধরা", "প্রাইস যেখানে ফেরেনি সেই জোন পছন্দ করুন"], ["২R এর কম জায়গায় এন্ট্রি", "কাছে বিপরীত লেভেল থাকলে ট্রেড বাদ দিন"]],
        practice=["পাশে Fair Value Gap আছে এমন পাঁচটি Order Block খুঁজে ওভারল্যাপ চিহ্নিত করুন।", "উপরের টেবিল দিয়ে প্রতিটি জোন স্কোর করুন।", "কোন স্কোরে ফেরায় প্রতিক্রিয়া হয়েছে লিখুন।"],
        summary=[["OB", "Displacement এর আগের শেষ বিপরীত ক্যান্ডেল"], ["FVG", "Displacement এর রেখে যাওয়া অপূরিত রেঞ্জ"], ["ওভারল্যাপ", "সংকীর্ণ, ভালো-সংজ্ঞায়িত জোন ও কাছের Stop"], ["সতর্কতা", "Confluence ঝুঁকি সংকীর্ণ করে; প্রতিক্রিয়ার নিশ্চয়তা দেয় না"]],
        related=[("/smc/order-blocks", "Order Blocks"), ("/smc/fair-value-gap", "Fair Value Gap"), ("/smc/zone-strength-scoring", "Zone Strength Scoring"), ("/blog/understanding-order-blocks", "Understanding Order Blocks")],
        fig_alt="একটি সিন্থেটিক EUR/USD বুলিশ Order Block: শক্তিশালী আপ মুভের আগের শেষ ডাউন ক্যান্ডেল, আর প্রাইস পরে জোনে ফেরে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Order Blocks"),
)
