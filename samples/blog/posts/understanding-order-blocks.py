SPEC = dict(
    fm=dict(date="2026-04-28", category="SMC", tags=["smc", "order-blocks", "institutional", "entry-zones"], reading=9, featured=True),
    fig=dict(img="/images/smc/order-blocks/bullish-order-block-eurusd-dark.webp", lesson="/smc/order-blocks"),
    en=dict(
        title="Understanding Order Blocks — A Zone Defined by Displacement",
        description="What an order block is, how to mark one (the last opposite candle before a displacement that breaks structure), what makes some zones better than others, and how to plan an entry, stop and target, with a worked bullish EUR/USD example at a 1 to 3 planned reward-to-risk.",
        intro="An **order block** is the last opposite-coloured candle (or small cluster) before a strong move that breaks structure. The idea is that price may react when it returns to that area. It is a *hypothesis* about where orders may sit, not a certainty, and it works best as one part of a plan.",
        fix="The original told a personal story and claimed order blocks reveal what institutions are doing. Nobody outside the market sees institutional orders, so this version treats the block as a **price zone with defined rules**, with no promised hit rate.",
        sections=[
            ("How to Mark One", """
| Step | Bullish order block                                                   | Bearish order block                               |
| ---- | --------------------------------------------------------------------- | ------------------------------------------------- |
| 1    | Find a strong up move that breaks a swing high (displacement)         | A strong down move that breaks a swing low        |
| 2    | Mark the **last down candle** before that move                        | Mark the **last up candle** before the move       |
| 3    | Zone = the candle body or full range (pick one rule and stay with it) | Same                                              |
| 4    | Wait for price to return to the zone                                  | Same                                              |

See [Order Blocks](/en/smc/order-blocks) for the full lesson and [Fresh vs Tested](/en/smc/fresh-vs-tested) for how a zone's reliability changes after the first touch."""),
            ("What Makes a Better Zone", """
| Feature                            | Why it matters                                             |
| ---------------------------------- | ---------------------------------------------------------- |
| Clear displacement from the zone   | Shows a strong imbalance (often leaves a fair value gap)   |
| It broke structure                 | Confirms it matters to the larger trend                    |
| In the right half of the range     | Longs in discount, shorts in premium (see [Premium and Discount](/en/smc/premium-discount)) |
| Untouched (fresh)                  | A first revisit has more chance than a tenth               |
| Higher-timeframe agreement         | The zone is in line with the bias                          |

These are filters, not guarantees. Test which ones matter for you on your own sample."""),
            ("Entry, Stop and Target", """
| Part   | Rule                                                                      |
| ------ | ------------------------------------------------------------------------- |
| Entry  | At the zone's edge (aggressive) or after a lower-timeframe confirmation (see [Entry Confirmation](/en/smc/entry-confirmation)) |
| Stop   | Beyond the far side of the zone, with a small buffer                      |
| Target | The next liquidity pool or opposite structure level                       |
| Skip   | If the reward is under 1.5R once the stop is placed                       |

If price closes through the zone, the idea is invalid: exit, don't widen the stop. A broken block may turn into a [breaker](/en/smc/breaker-blocks)."""),
        ],
        example="""
EUR/USD bullish block after a displacement that broke a swing high: zone **1.0826 – 1.0832**. Buy limit at **1.0832**, stop **1.0820** (below the zone and the sweep), target **1.0868** at the previous high: risk 12 pips, reward 36, **1 : 3.0**. At 1% on 10,000 the size is 100 ÷ (12 × 10) = **0.83 standard lot**. If price closes below 1.0826 the idea is wrong. All prices are illustrative.""",
        mistakes=[["Marking every candle as an order block", "Require displacement that breaks structure"], ["Trading against the higher-timeframe bias", "Align first"], ["Stop inside the zone", "Place it beyond the far side"], ["Expecting every zone to hold", "Plan for it to fail and size for it"]],
        practice=["Mark ten bullish and ten bearish blocks on past charts using the rules above.", "Count how many were respected on the first revisit.", "Compare fresh zones with tested ones."],
        summary=[["Definition", "Last opposite candle before a structure-breaking displacement"], ["Quality", "Displacement, structure break, right half, fresh, HTF agreement"], ["Trade", "Entry at the edge, stop beyond, target at liquidity"], ["Caution", "A hypothesis, not a promise"]],
        related=[("/smc/order-blocks", "Order Blocks"), ("/smc/fresh-vs-tested", "Fresh vs Tested"), ("/smc/breaker-blocks", "Breaker Blocks"), ("/smc/entry-confirmation", "Entry Confirmation")],
        fig_alt="A bullish order block on a synthetic EUR/USD chart: the last down candle before the displacement, with the zone marked",
        fig_note="Synthetic candles for teaching", fig_label="Order Blocks"),
    bn=dict(
        title="Order Block বোঝা — Displacement দিয়ে সংজ্ঞায়িত একটি জোন",
        description="Order Block কী, কীভাবে চিহ্নিত করবেন (স্ট্রাকচার ভাঙা Displacement এর আগের শেষ বিপরীত ক্যান্ডেল), কোন জোন ভালো হয়, আর এন্ট্রি, Stop ও টার্গেট কীভাবে পরিকল্পনা করবেন — ১ : ৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কের বুলিশ EUR/USD উদাহরণসহ।",
        intro="**Order Block** হলো স্ট্রাকচার ভাঙা শক্তিশালী মুভের আগের শেষ বিপরীত-রঙের ক্যান্ডেল (বা ছোট গুচ্ছ)। ধারণা হলো প্রাইস সেই এলাকায় ফিরলে প্রতিক্রিয়া দেখাতে পারে। এটি অর্ডার কোথায় থাকতে পারে তার একটি *অনুমান*, নিশ্চয়তা নয়, এবং পরিকল্পনার একটি অংশ হিসেবে সবচেয়ে ভালো কাজ করে।",
        fix="মূল লেখায় ব্যক্তিগত গল্প ছিল এবং দাবি ছিল Order Block দেখায় প্রতিষ্ঠানগুলো কী করছে। বাজারের বাইরে কেউ প্রাতিষ্ঠানিক অর্ডার দেখে না, তাই এই সংস্করণ ব্লককে **সংজ্ঞায়িত নিয়মের প্রাইস জোন** হিসেবে দেখে, কোনো হিট রেটের প্রতিশ্রুতি ছাড়া।",
        sections=[
            ("কীভাবে চিহ্নিত করবেন", """
| ধাপ | বুলিশ Order Block                                                   | বিয়ারিশ Order Block                               |
| ---- | --------------------------------------------------------------------- | ------------------------------------------------- |
| ১    | Swing High ভাঙা শক্তিশালী ঊর্ধ্বমুখী মুভ খুঁজুন (Displacement)         | Swing Low ভাঙা শক্তিশালী নিম্নমুখী মুভ        |
| ২    | ওই মুভের আগের **শেষ Down ক্যান্ডেল** চিহ্নিত করুন                        | মুভের আগের **শেষ Up ক্যান্ডেল** চিহ্নিত করুন       |
| ৩    | জোন = ক্যান্ডেলের Body বা পুরো রেঞ্জ (একটি নিয়ম বেছে তাতে থাকুন) | একই                                              |
| ৪    | প্রাইস জোনে ফেরার অপেক্ষা করুন                                  | একই                                              |

পূর্ণ লেসনের জন্য [Order Blocks](/bn/smc/order-blocks) আর প্রথম স্পর্শের পর জোনের নির্ভরযোগ্যতা কীভাবে বদলায় তার জন্য [Fresh vs Tested](/bn/smc/fresh-vs-tested) দেখুন।"""),
            ("কোন জোন ভালো", """
| বৈশিষ্ট্য                            | কেন গুরুত্বপূর্ণ                                             |
| ---------------------------------- | ---------------------------------------------------------- |
| জোন থেকে স্পষ্ট Displacement   | শক্তিশালী ইমব্যালান্স দেখায় (প্রায়ই Fair Value Gap রেখে যায়)   |
| স্ট্রাকচার ভেঙেছে                 | বড় ট্রেন্ডের জন্য গুরুত্বপূর্ণ নিশ্চিত করে                    |
| রেঞ্জের সঠিক অর্ধেকে     | Long Discount এ, Short Premium এ ([Premium and Discount](/bn/smc/premium-discount) দেখুন) |
| অস্পৃষ্ট (Fresh)                  | প্রথম পুনরায় আসার সুযোগ দশমটির চেয়ে বেশি                  |
| হায়ার-টাইমফ্রেমের সাথে মিল        | জোন বায়াসের সাথে সঙ্গতিপূর্ণ                          |

এগুলো ফিল্টার, নিশ্চয়তা নয়। কোনটি আপনার জন্য কাজ করে তা নিজের নমুনায় পরীক্ষা করুন।"""),
            ("এন্ট্রি, Stop ও টার্গেট", """
| অংশ   | নিয়ম                                                                      |
| ------ | ------------------------------------------------------------------------- |
| এন্ট্রি  | জোনের প্রান্তে (আগ্রাসী) বা লোয়ার-টাইমফ্রেম নিশ্চিতকরণের পর ([Entry Confirmation](/bn/smc/entry-confirmation) দেখুন) |
| Stop   | জোনের দূরের দিকের ওপারে, ছোট বাফারসহ                      |
| টার্গেট | পরবর্তী লিকুইডিটি পুল বা বিপরীত স্ট্রাকচার লেভেল                       |
| বাদ দিন   | Stop বসানোর পর রিওয়ার্ড ১.৫R এর কম হলে                       |

প্রাইস জোনের মধ্য দিয়ে Close করলে ধারণা অবৈধ: বের হয়ে যান, Stop বাড়াবেন না। ভাঙা ব্লক [Breaker](/bn/smc/breaker-blocks) এ পরিণত হতে পারে।"""),
        ],
        example="""
EUR/USD এ Swing High ভাঙা Displacement এর পর বুলিশ ব্লক: জোন **1.0826 – 1.0832**। **1.0832** এ Buy Limit, Stop **1.0820** (জোন ও Sweep এর নিচে), টার্গেট **1.0868** আগের High এ: রিস্ক ১২ পিপ, রিওয়ার্ড ৩৬, **১ : ৩.০**। ১০,০০০ এ ১% ঝুঁকিতে সাইজ ১০০ ÷ (১২ × ১০) = **০.৮৩ স্ট্যান্ডার্ড লট**। প্রাইস 1.0826 এর নিচে Close করলে ধারণা ভুল। সব দাম দৃষ্টান্তমূলক।""",
        mistakes=[["প্রতিটি ক্যান্ডেলকে Order Block বলা", "স্ট্রাকচার ভাঙা Displacement দাবি করুন"], ["হায়ার-টাইমফ্রেম বায়াসের বিপরীতে ট্রেড", "আগে মেলান"], ["জোনের ভেতরে Stop", "দূরের দিকের ওপারে বসান"], ["প্রতিটি জোন টিকবে আশা করা", "ব্যর্থ হওয়ার পরিকল্পনা করে সাইজ করুন"]],
        practice=["উপরের নিয়মে পুরোনো চার্টে দশটি বুলিশ ও দশটি বিয়ারিশ ব্লক চিহ্নিত করুন।", "প্রথম পুনরায় আসায় কয়টি সম্মানিত হয়েছে গুনুন।", "Fresh জোন ও টেস্টেড জোন তুলনা করুন।"],
        summary=[["সংজ্ঞা", "স্ট্রাকচার-ভাঙা Displacement এর আগের শেষ বিপরীত ক্যান্ডেল"], ["মান", "Displacement, স্ট্রাকচার ভাঙা, সঠিক অর্ধেক, Fresh, HTF মিল"], ["ট্রেড", "প্রান্তে এন্ট্রি, ওপারে Stop, লিকুইডিটিতে টার্গেট"], ["সতর্কতা", "অনুমান, প্রতিশ্রুতি নয়"]],
        related=[("/smc/order-blocks", "Order Blocks"), ("/smc/fresh-vs-tested", "Fresh vs Tested"), ("/smc/breaker-blocks", "Breaker Blocks"), ("/smc/entry-confirmation", "Entry Confirmation")],
        fig_alt="একটি সিন্থেটিক EUR/USD চার্টে বুলিশ Order Block: Displacement এর আগের শেষ Down ক্যান্ডেল, জোন চিহ্নিত",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Order Blocks"),
)
