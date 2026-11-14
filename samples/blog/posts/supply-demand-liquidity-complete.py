SPEC = dict(
    fm=dict(date="2026-05-19", category="SMC", tags=["supply-demand", "liquidity", "sweep", "grab", "zones"], reading=8, featured=True),
    fig=dict(img="/images/smc/supply-demand-zones/supply-demand-zones-dark.webp", video="/videos/smc/supply-demand-explainer-dark.mp4", lesson="/smc/supply-demand-zones"),
    en=dict(
        title="Supply and Demand Zones with Liquidity — Putting the Two Together",
        description="How supply and demand zones (the base before a strong move) and liquidity (resting stops above or below) combine into one setup: a sweep of liquidity, then a reaction from a fresh zone. Zone marking rules, what makes a zone strong or weak, and a worked demand-zone buy with a 1 to 3 planned reward-to-risk.",
        intro="A **demand zone** is a small area where price paused (a base) before a strong move up; a **supply zone** is the same before a strong move down. **Liquidity** is where stops and pending orders rest. The two combine into one idea: price **takes liquidity**, **returns to a zone** that started a strong move, and reacts, or it doesn't.",
        fix="The original called zones \"institutional footprints\" and gave confident reaction rates. We can't see who trades, and zones fail often. Treat a zone as a **place to look for a reaction**, graded by evidence (displacement, freshness, location), not as a guaranteed turning point.",
        sections=[
            ("Marking a Zone", """
| Step | Rule                                                                                                |
| ---- | --------------------------------------------------------------------------------------------------- |
| 1    | Find a **strong move**: several large candles that break structure                                  |
| 2    | Mark the **base** just before it: the small candles (or last opposite candle) where the move started |
| 3    | Draw the zone from the base's extreme to its body edge (a proximal and a distal line)               |
| 4    | Mark it fresh until price returns for the first time                                                |

The pattern types (rally–base–rally, drop–base–drop for continuation; rally–base–drop and drop–base–rally for reversal) are covered in [Rally–Base–Rally](/en/smc/rally-base-rally) and [Supply and Demand Zones](/en/smc/supply-demand-zones). See [Proximal and Distal Lines](/en/smc/proximal-distal-lines) for the edges."""),
            ("What Makes a Zone Stronger", """
| Feature                               | Stronger                                        | Weaker                          |
| ------------------------------------- | ----------------------------------------------- | ------------------------------- |
| Departure from the base               | Fast, large candles, a gap left behind          | Slow, overlapping candles       |
| Freshness                             | Never revisited                                 | Tested more than once           |
| Liquidity taken before                | A clear sweep of a high or low into the zone    | None                            |
| Higher-timeframe direction            | With the larger trend                           | Against it                      |
| Space to the target                   | At least 2R                                     | Close opposing level            |

See [Zone Strength Scoring](/en/smc/zone-strength-scoring) and [Fresh vs Tested Zones](/en/smc/fresh-vs-tested)."""),
            ("Liquidity as the Trigger", """
| Sequence                                                         | What to do                                                      |
| ---------------------------------------------------------------- | --------------------------------------------------------------- |
| Price sweeps a low, then reaches a demand zone                   | Look for a reaction and a structure shift: a buy setup          |
| Price sweeps a high, then reaches a supply zone                  | Look for a reaction and a structure shift: a sell setup         |
| Price reaches a zone with no liquidity taken                     | Weaker case: wait for more evidence                             |
| Price closes through the zone                                    | The zone has failed: step aside                                 |"""),
        ],
        example="""
A demand zone **1.0816 – 1.0824** started a strong rally earlier in the day. Price sweeps the equal lows at **1.0812**, returns to the zone and a 5-minute candle closes above the last lower high. Plan: buy **1.0822**, stop **1.0810** (below the sweep low): risk 12 pips; target **1.0858** (the next swing high): reward 36 pips, **1 : 3.0** planned. If price closes below **1.0810**, the zone has failed.""",
        mistakes=[["Marking every pause as a zone", "Require a strong departure"], ["Trading tested zones as if fresh", "Prefer first returns"], ["Stop inside the zone", "Place it beyond the zone's distal line and the sweep"], ["Ignoring the larger trend", "Prefer zones with the higher-timeframe direction"]],
        practice=["Mark five demand and five supply zones with the rules above.", "Score each zone with the strength table.", "Note which scores produced a reaction on the first return."],
        summary=[["Zone", "The base before a strong move: a place to look for a reaction"], ["Strength", "Fast departure, fresh, liquidity taken, trend-aligned, room to target"], ["Trigger", "A sweep into the zone then a structure shift"], ["Caution", "Zones fail often; use a stop beyond the distal line"]],
        related=[("/smc/supply-demand-zones", "Supply and Demand Zones"), ("/smc/zone-strength-scoring", "Zone Strength Scoring"), ("/smc/liquidity-pools", "Liquidity Pools"), ("/blog/liquidity-concepts-complete-guide", "Liquidity Concepts")],
        fig_alt="Synthetic supply and demand zones marked on a chart with the strong moves that created them",
        fig_note="Synthetic candles for teaching", fig_label="Supply and Demand Zones"),
    bn=dict(
        title="Liquidity সহ Supply ও Demand জোন — দুটিকে একসাথে করা",
        description="Supply ও Demand জোন (শক্তিশালী মুভের আগের বেস) ও Liquidity (উপরে বা নিচে জমে থাকা Stop) কীভাবে একটি সেটআপে মেলে: Liquidity এর Sweep, তারপর তাজা জোন থেকে প্রতিক্রিয়া। জোন চিহ্নিত করার নিয়ম, জোন কীসে শক্তিশালী বা দুর্বল, আর ১ : ৩ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে Demand-জোন Buy এর উদাহরণ।",
        intro="**Demand জোন** হলো ছোট এলাকা যেখানে প্রাইস শক্তিশালী ঊর্ধ্বমুখী মুভের আগে থেমেছিল (বেস); **Supply জোন** নিচের দিকে একই। **Liquidity** হলো যেখানে Stop ও পেন্ডিং অর্ডার জমে। দুটি একটি ধারণায় মেলে: প্রাইস **Liquidity নেয়**, শক্তিশালী মুভ শুরু করা **জোনে ফেরে**, আর প্রতিক্রিয়া দেখায়, নয়তো দেখায় না।",
        fix="মূল লেখায় জোনকে \"প্রাতিষ্ঠানিক পদচিহ্ন\" বলা হয়েছিল এবং আত্মবিশ্বাসী প্রতিক্রিয়ার হার ছিল। কে ট্রেড করছে আমরা দেখতে পাই না, আর জোন প্রায়ই ব্যর্থ হয়। জোনকে **প্রতিক্রিয়া খোঁজার জায়গা** ধরুন, প্রমাণে (Displacement, তাজা, অবস্থান) গ্রেড করা, নিশ্চিত মোড়ের বিন্দু নয়।",
        sections=[
            ("জোন চিহ্নিত করা", """
| ধাপ | নিয়ম                                                                                                |
| ---- | --------------------------------------------------------------------------------------------------- |
| ১    | **শক্তিশালী মুভ** খুঁজুন: স্ট্রাকচার ভাঙা কয়েকটি বড় ক্যান্ডেল                                  |
| ২    | ঠিক আগের **বেস** চিহ্নিত করুন: ছোট ক্যান্ডেল (বা শেষ বিপরীত ক্যান্ডেল) যেখানে মুভ শুরু হয়েছে |
| ৩    | বেসের চরম থেকে তার বডির কিনারা পর্যন্ত জোন আঁকুন (Proximal ও Distal লাইন)               |
| ৪    | প্রাইস প্রথমবার ফেরা পর্যন্ত একে তাজা চিহ্নিত রাখুন                                                |

প্যাটার্নের ধরন (কন্টিনিউয়েশনের জন্য Rally–Base–Rally, Drop–Base–Drop; রিভার্সালের জন্য Rally–Base–Drop ও Drop–Base–Rally) আছে [Rally–Base–Rally](/bn/smc/rally-base-rally) ও [Supply and Demand Zones](/bn/smc/supply-demand-zones) এ। কিনারার জন্য [Proximal and Distal Lines](/bn/smc/proximal-distal-lines) দেখুন।"""),
            ("কীসে জোন শক্তিশালী", """
| বৈশিষ্ট্য                               | শক্তিশালী                                        | দুর্বল                          |
| ------------------------------------- | ----------------------------------------------- | ------------------------------- |
| বেস থেকে প্রস্থান               | দ্রুত, বড় ক্যান্ডেল, পেছনে গ্যাপ          | ধীর, ওভারল্যাপিং ক্যান্ডেল       |
| তাজা                             | কখনো পুনঃপরিদর্শিত হয়নি                                 | একাধিকবার পরীক্ষিত           |
| আগে Liquidity নেওয়া                | জোনে ঢোকার আগে High বা Low এর স্পষ্ট Sweep    | নেই                            |
| হায়ার-টাইমফ্রেমের দিক            | বড় ট্রেন্ডের সাথে                           | বিপরীতে                           |
| টার্গেট পর্যন্ত জায়গা                   | অন্তত ২R                                     | কাছে বিপরীত লেভেল            |

[Zone Strength Scoring](/bn/smc/zone-strength-scoring) ও [Fresh vs Tested Zones](/bn/smc/fresh-vs-tested) দেখুন।"""),
            ("ট্রিগার হিসেবে Liquidity", """
| ক্রম                                                         | কী করবেন                                                      |
| ---------------------------------------------------------------- | --------------------------------------------------------------- |
| প্রাইস Low Sweep করে Demand জোনে পৌঁছায়                   | প্রতিক্রিয়া ও স্ট্রাকচার শিফট খুঁজুন: Buy সেটআপ          |
| প্রাইস High Sweep করে Supply জোনে পৌঁছায়                  | প্রতিক্রিয়া ও স্ট্রাকচার শিফট খুঁজুন: Sell সেটআপ         |
| Liquidity না নিয়ে প্রাইস জোনে পৌঁছায়                     | দুর্বলতর ক্ষেত্র: আরও প্রমাণের অপেক্ষা করুন                             |
| প্রাইস জোন ভেদ করে Close করে                                    | জোন ব্যর্থ: সরে থাকুন                                                |"""),
        ],
        example="""
একটি Demand জোন **1.0816 – 1.0824** আগে দিনে শক্তিশালী র‍্যালি শুরু করেছিল। প্রাইস **1.0812** এ Equal Low Sweep করে জোনে ফেরে আর ৫-মিনিটের ক্যান্ডেল শেষ Lower High এর উপরে Close করে। পরিকল্পনা: **1.0822** এ Buy, Stop **1.0810** (Sweep Low এর নিচে): রিস্ক ১২ পিপ; টার্গেট **1.0858** (পরের Swing High): রিওয়ার্ড ৩৬ পিপ, পরিকল্পিত **১ : ৩.০**। প্রাইস **1.0810** এর নিচে Close করলে জোন ব্যর্থ।""",
        mistakes=[["প্রতিটি বিরতিকে জোন চিহ্নিত করা", "শক্তিশালী প্রস্থান দাবি করুন"], ["পরীক্ষিত জোনকে তাজা ধরে ট্রেড", "প্রথম ফেরা পছন্দ করুন"], ["জোনের ভেতরে Stop", "জোনের Distal লাইন ও Sweep এর ওপারে রাখুন"], ["বড় ট্রেন্ড উপেক্ষা", "হায়ার-টাইমফ্রেম দিকের জোন পছন্দ করুন"]],
        practice=["উপরের নিয়মে পাঁচটি Demand ও পাঁচটি Supply জোন চিহ্নিত করুন।", "শক্তির টেবিল দিয়ে প্রতিটি জোন স্কোর করুন।", "কোন স্কোরে প্রথম ফেরায় প্রতিক্রিয়া হয়েছে লিখুন।"],
        summary=[["জোন", "শক্তিশালী মুভের আগের বেস: প্রতিক্রিয়া খোঁজার জায়গা"], ["শক্তি", "দ্রুত প্রস্থান, তাজা, Liquidity নেওয়া, ট্রেন্ড-মেলা, টার্গেট পর্যন্ত জায়গা"], ["ট্রিগার", "জোনে Sweep তারপর স্ট্রাকচার শিফট"], ["সতর্কতা", "জোন প্রায়ই ব্যর্থ হয়; Distal লাইনের ওপারে Stop রাখুন"]],
        related=[("/smc/supply-demand-zones", "Supply and Demand Zones"), ("/smc/zone-strength-scoring", "Zone Strength Scoring"), ("/smc/liquidity-pools", "Liquidity Pools"), ("/blog/liquidity-concepts-complete-guide", "Liquidity Concepts")],
        fig_alt="চার্টে চিহ্নিত সিন্থেটিক Supply ও Demand জোন এবং যে শক্তিশালী মুভ সেগুলো তৈরি করেছে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Supply and Demand Zones"),
)
