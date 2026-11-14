SPEC = dict(
    fm=dict(date="2026-05-13", category="SMC", tags=["fair-value-gap", "fvg", "imbalance", "smc", "entries"], reading=6, featured=True),
    fig=dict(img="/images/smc/fair-value-gap/eurusd-bullish-fvg-smc-dark.webp", video="/videos/smc/smc-fvg-explainer-dark.mp4", lesson="/smc/fair-value-gap"),
    en=dict(
        title="Fair Value Gap Explained — The Three-Candle Imbalance",
        description="A fair value gap (FVG) is the price range left between the first candle's extreme and the third candle's extreme when a strong move leaves no overlap. How to mark bullish and bearish gaps, the 50% entry, when a gap is invalidated (inversion), and how FVGs fail.",
        intro="A **fair value gap** is a three-candle pattern in which a strong middle candle moves so fast that the first and third candles do not overlap. The unfilled range between them is the gap. Traders watch it as a place where price **may** return and react.",
        fix="The original suggested FVGs are filled or respected with high reliability and tied them to institutional order imbalance. Many gaps are never revisited and many are filled completely. The gap is a **geometric fact**; its significance is a hypothesis.",
        sections=[
            ("How to Mark a Gap", """
| Type              | Candles                                                                 | Gap range                                          |
| ----------------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| **Bullish FVG**   | Strong up candle in the middle; candle 3's **low** is above candle 1's **high** | From candle 1's high up to candle 3's low          |
| **Bearish FVG**   | Strong down candle in the middle; candle 3's **high** is below candle 1's **low** | From candle 3's high up to candle 1's low        |

Example: candle 1 high **1.0836**, candle 3 low **1.0842** → bullish gap **1.0836 – 1.0842** (6 pips). Mark it from the third candle forward. See [Fair Value Gap](/en/smc/fair-value-gap), [Imbalance](/en/smc/imbalance) and the ICT view in [FVG](/en/ict/fvg)."""),
            ("Using the Gap", """
| Approach                    | Entry                                         | Stop                                 | Comment                                              |
| --------------------------- | --------------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| **Edge entry**              | The near edge of the gap                      | Beyond the far edge                  | Fills more often, tighter reaction zone              |
| **50% (midpoint) entry**    | The middle of the gap                         | Beyond the far edge                  | Better price, can be missed                          |
| **Confirmation entry**      | After a lower-timeframe shift inside the gap  | Beyond the swing                     | Fewer trades, more evidence                          |

A gap is **invalidated** when price **closes through it** (beyond the far edge). A gap that fails this way can **invert**: a bullish gap that is closed through can act as resistance. Context matters more than the gap itself: a gap in the direction of the higher-timeframe trend, after a liquidity sweep, is better evidence than a gap in the middle of a range."""),
            ("How FVGs Fail", """
| Failure                                    | What it looks like                                                    |
| ------------------------------------------ | --------------------------------------------------------------------- |
| Price never returns                        | The gap stays unfilled; you wait and the move leaves without you      |
| Price fills the gap and keeps going        | No reaction; a close beyond the far edge                              |
| A gap during a news spike                  | Large, noisy, often filled quickly                                    |
| Tiny gaps                                  | A 1-pip gap carries little meaning                                    |"""),
        ],
        example="""
Bullish gap **1.0836 – 1.0842** after a sweep of the Asian low, with the 1-hour trend up. Plan: buy the midpoint **1.0839**, stop **1.0832** (below the far edge), target **1.0860** (the next swing high): risk 7 pips, reward 21, **1 : 3.0** planned. If a candle closes below **1.0832**, the gap has failed and the idea is cancelled.""",
        mistakes=[["Trading every gap", "Prefer gaps with trend, sweep and room to the target"], ["Stop inside the gap", "Place it beyond the far edge"], ["Ignoring a close through the gap", "That is invalidation, not a dip"], ["Waiting forever for a fill", "Set a time limit; some gaps never fill"]],
        practice=["Mark ten bullish and bearish gaps and note how many were revisited within 20 candles.", "For each, note whether the gap held or a close went through it.", "Compare gaps with a sweep before them against gaps without."],
        summary=[["FVG", "The unfilled range between candle 1 and candle 3 around a strong candle"], ["Entry", "Edge, midpoint or after confirmation; stop beyond the far edge"], ["Invalidation", "A close through the gap; it may invert"], ["Caution", "A geometric pattern; its significance is a hypothesis"]],
        related=[("/smc/fair-value-gap", "Fair Value Gap"), ("/ict/fvg", "ICT Fair Value Gap"), ("/smc/imbalance", "Imbalance"), ("/blog/fvg-order-block-complete-guide", "FVG and Order Block Guide")],
        fig_alt="A synthetic EUR/USD bullish fair value gap: a strong up candle leaves a gap between the first candle's high and the third candle's low, and price later returns to it",
        fig_note="Synthetic candles for teaching", fig_label="Fair Value Gap"),
    bn=dict(
        title="Fair Value Gap ব্যাখ্যা — তিন-ক্যান্ডেলের ইমব্যালেন্স",
        description="শক্তিশালী মুভে কোনো ওভারল্যাপ না থাকলে প্রথম ক্যান্ডেলের চরম ও তৃতীয় ক্যান্ডেলের চরমের মাঝের প্রাইস রেঞ্জই Fair Value Gap (FVG)। বুলিশ ও বেয়ারিশ গ্যাপ কীভাবে চিহ্নিত করবেন, ৫০% এন্ট্রি, কখন গ্যাপ বাতিল (Inversion), আর FVG কীভাবে ব্যর্থ হয়।",
        intro="**Fair Value Gap** হলো তিন-ক্যান্ডেলের প্যাটার্ন যেখানে মাঝের শক্তিশালী ক্যান্ডেল এত দ্রুত চলে যে প্রথম ও তৃতীয় ক্যান্ডেল ওভারল্যাপ করে না। তাদের মাঝের অপূরিত রেঞ্জই গ্যাপ। ট্রেডাররা একে এমন জায়গা হিসেবে দেখেন যেখানে প্রাইস **ফিরে এসে প্রতিক্রিয়া দেখাতে পারে**।",
        fix="মূল লেখায় ইঙ্গিত ছিল FVG উচ্চ নির্ভরযোগ্যতায় পূরণ বা সম্মানিত হয় এবং এটি প্রাতিষ্ঠানিক অর্ডার ইমব্যালেন্সের সাথে জোড়া হয়েছিল। অনেক গ্যাপে প্রাইস কখনো ফেরে না, আর অনেকগুলো পুরো পূরণ হয়। গ্যাপ একটি **জ্যামিতিক তথ্য**; এর তাৎপর্য অনুমান।",
        sections=[
            ("গ্যাপ কীভাবে চিহ্নিত করবেন", """
| ধরন              | ক্যান্ডেল                                                                 | গ্যাপ রেঞ্জ                                          |
| ----------------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| **বুলিশ FVG**   | মাঝে শক্তিশালী আপ ক্যান্ডেল; ক্যান্ডেল ৩ এর **Low** ক্যান্ডেল ১ এর **High** এর উপরে | ক্যান্ডেল ১ এর High থেকে ক্যান্ডেল ৩ এর Low পর্যন্ত          |
| **বেয়ারিশ FVG**   | মাঝে শক্তিশালী ডাউন ক্যান্ডেল; ক্যান্ডেল ৩ এর **High** ক্যান্ডেল ১ এর **Low** এর নিচে | ক্যান্ডেল ৩ এর High থেকে ক্যান্ডেল ১ এর Low পর্যন্ত        |

উদাহরণ: ক্যান্ডেল ১ এর High **1.0836**, ক্যান্ডেল ৩ এর Low **1.0842** → বুলিশ গ্যাপ **1.0836 – 1.0842** (৬ পিপ)। তৃতীয় ক্যান্ডেল থেকে সামনে চিহ্নিত করুন। [Fair Value Gap](/bn/smc/fair-value-gap), [Imbalance](/bn/smc/imbalance) ও [FVG](/bn/ict/fvg) এ ICT দৃষ্টিভঙ্গি দেখুন।"""),
            ("গ্যাপ ব্যবহার", """
| পদ্ধতি                    | এন্ট্রি                                         | Stop                                 | মন্তব্য                                              |
| --------------------------- | --------------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| **কিনারা এন্ট্রি**              | গ্যাপের কাছের কিনারা                      | দূরের কিনারার ওপারে                  | বেশি পূরণ হয়, সংকীর্ণ প্রতিক্রিয়া জোন              |
| **৫০% (মধ্যবিন্দু) এন্ট্রি**    | গ্যাপের মাঝখান                         | দূরের কিনারার ওপারে                  | ভালো দাম, মিস হতে পারে                          |
| **নিশ্চিতকরণ এন্ট্রি**      | গ্যাপের ভেতরে লোয়ার-টাইমফ্রেম শিফটের পর  | Swing এর ওপারে                     | কম ট্রেড, বেশি প্রমাণ                           |

প্রাইস **ভেদ করে Close** করলে (দূরের কিনারার ওপারে) গ্যাপ **বাতিল**। এভাবে ব্যর্থ গ্যাপ **উল্টাতে** পারে: ভেদ করে Close হওয়া বুলিশ গ্যাপ Resistance হিসেবে কাজ করতে পারে। গ্যাপের চেয়ে প্রসঙ্গ বেশি গুরুত্বপূর্ণ: হায়ার-টাইমফ্রেম ট্রেন্ডের দিকে, Liquidity Sweep এর পরের গ্যাপ রেঞ্জের মাঝের গ্যাপের চেয়ে ভালো প্রমাণ।"""),
            ("FVG কীভাবে ব্যর্থ হয়", """
| ব্যর্থতা                                    | দেখতে কেমন                                                    |
| ------------------------------------------ | --------------------------------------------------------------------- |
| প্রাইস কখনো ফেরে না                        | গ্যাপ অপূরিত থাকে; আপনি অপেক্ষা করেন আর মুভ আপনাকে ছাড়াই চলে যায়      |
| প্রাইস গ্যাপ পূরণ করে চলতেই থাকে        | প্রতিক্রিয়া নেই; দূরের কিনারার ওপারে Close                              |
| নিউজ স্পাইকের সময় গ্যাপ                  | বড়, এলোমেলো, প্রায়ই দ্রুত পূরণ                                    |
| ক্ষুদ্র গ্যাপ                                  | ১ পিপের গ্যাপের অর্থ কম                                    |"""),
        ],
        example="""
এশিয়ান Low Sweep এর পর ১-ঘণ্টার ট্রেন্ড আপ থাকায় বুলিশ গ্যাপ **1.0836 – 1.0842**। পরিকল্পনা: মধ্যবিন্দু **1.0839** এ Buy, Stop **1.0832** (দূরের কিনারার নিচে), টার্গেট **1.0860** (পরের Swing High): রিস্ক ৭ পিপ, রিওয়ার্ড ২১, পরিকল্পিত **১ : ৩.০**। কোনো ক্যান্ডেল **1.0832** এর নিচে Close করলে গ্যাপ ব্যর্থ, ধারণা বাতিল।""",
        mistakes=[["প্রতিটি গ্যাপ ট্রেড করা", "ট্রেন্ড, Sweep ও টার্গেট পর্যন্ত জায়গাসহ গ্যাপ পছন্দ করুন"], ["গ্যাপের ভেতরে Stop", "দূরের কিনারার ওপারে রাখুন"], ["গ্যাপ ভেদ করা Close উপেক্ষা", "এটি বাতিল, ডিপ নয়"], ["পূরণের জন্য অনন্তকাল অপেক্ষা", "সময়সীমা রাখুন; কিছু গ্যাপ কখনো পূরণ হয় না"]],
        practice=["দশটি বুলিশ ও বেয়ারিশ গ্যাপ চিহ্নিত করে কতগুলো ২০ ক্যান্ডেলের মধ্যে আবার ছোঁয়া হয়েছে লিখুন।", "প্রতিটির জন্য গ্যাপ টিকেছে নাকি ভেদ করে Close হয়েছে লিখুন।", "আগে Sweep থাকা গ্যাপ ও না-থাকা গ্যাপ তুলনা করুন।"],
        summary=[["FVG", "শক্তিশালী ক্যান্ডেল ঘিরে ক্যান্ডেল ১ ও ৩ এর মাঝের অপূরিত রেঞ্জ"], ["এন্ট্রি", "কিনারা, মধ্যবিন্দু বা নিশ্চিতকরণের পর; দূরের কিনারার ওপারে Stop"], ["বাতিল", "গ্যাপ ভেদ করে Close; উল্টাতে পারে"], ["সতর্কতা", "জ্যামিতিক প্যাটার্ন; তাৎপর্য অনুমান"]],
        related=[("/smc/fair-value-gap", "Fair Value Gap"), ("/ict/fvg", "ICT Fair Value Gap"), ("/smc/imbalance", "Imbalance"), ("/blog/fvg-order-block-complete-guide", "FVG and Order Block Guide")],
        fig_alt="একটি সিন্থেটিক EUR/USD বুলিশ Fair Value Gap: শক্তিশালী আপ ক্যান্ডেল প্রথম ক্যান্ডেলের High ও তৃতীয় ক্যান্ডেলের Low এর মাঝে গ্যাপ রাখে, প্রাইস পরে ফেরে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Fair Value Gap"),
)
