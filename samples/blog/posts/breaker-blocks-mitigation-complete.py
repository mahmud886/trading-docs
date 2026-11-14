SPEC = dict(
    fm=dict(date="2026-05-19", category="SMC", tags=["breaker-blocks", "mitigation", "smc", "order-blocks", "advanced-setup"], reading=8, featured=True),
    fig=dict(img="/images/smc/breaker-blocks/bearish-breaker-dark.webp", video="/videos/smc/breaker-explainer-dark.mp4", lesson="/smc/breaker-blocks"),
    en=dict(
        title="Breaker Blocks and Mitigation Blocks — A Practical SMC Guide",
        description="How a failed order block becomes a breaker (after a liquidity sweep and a structure break) or a mitigation block (without the sweep), how to validate each, a step-by-step entry with a structural stop, and the common ways these setups fail.",
        intro="An **order block** is the last opposite candle before a strong move. When price comes back and the block **fails** (price closes through it), it can flip polarity. Smart Money Concepts names two versions: the **breaker block** and the **mitigation block**. They are descriptions of structure, not guarantees.",
        fix="The original treated breakers as \"powerful opportunities\" and implied reliable outcomes. They are zones where price **may** react; many fail. Claims about who is behind the move (\"smart money\") are interpretations, so this version sticks to what can be seen on the chart.",
        sections=[
            ("Breaker vs Mitigation Block", """
| Feature                    | **Breaker block**                                                                 | **Mitigation block**                                                  |
| -------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Starts as                  | An order block that fails                                                         | An order block that fails                                             |
| Liquidity sweep first?     | **Yes**: price takes out a prior swing high or low, then reverses                 | **No**: price makes a lower high (or higher low) and then breaks      |
| Structure break            | Breaks the swing that created the sweep                                           | Breaks the last swing low (bearish case) or high (bullish case)       |
| Typical reading            | A stronger reversal signal because stops were taken                               | A weaker, continuation-flavoured signal                               |

**Bearish breaker (example)**: price makes a high that sweeps a prior high, drops and breaks the last swing low; the last up-candle before the original rally (the old bullish order block) now sits above price as a zone to **sell** when price returns to it. A bullish breaker is the mirror image. See [Breaker Blocks](/en/smc/breaker-blocks) and [Mitigation Blocks](/en/smc/mitigation-blocks) for worked charts."""),
            ("Validating the Setup", """
| Check                                      | What you want                                                        |
| ------------------------------------------ | -------------------------------------------------------------------- |
| An order block existed before                | A clear last opposite candle before a displacement                   |
| It failed with displacement                  | A strong close through the block, ideally leaving a fair value gap   |
| Structure broke                              | A close beyond the relevant swing, not just a wick                   |
| Higher-timeframe alignment                   | The breaker points the same way as the larger trend, or at a key level |
| Space to the target                          | At least 2R of room before the next opposing level                   |

Without displacement and a structure break, a flipped block is just a line on the chart."""),
            ("Entry, Stop and Management", """
1. Mark the breaker zone (the body, or the full candle on higher timeframes).
2. Wait for price to **return** to it. Do not chase the break.
3. On a lower timeframe look for confirmation (a reaction candle, a small structure shift).
4. Place the stop **beyond the zone and the swing** that defines the setup.
5. Target the nearest opposing liquidity or level, and take partial profit there.

If price closes through the breaker instead of reacting, the idea is wrong and the stop does its job."""),
        ],
        example="""
EUR/USD, bullish breaker on the 1-hour chart: price sweeps a prior low at **1.0816**, rallies and closes above the last lower high, and the old bearish order block between **1.0838** and **1.0846** becomes support. Plan: buy a return to **1.0842**, stop **1.0826** (below the sweep low and zone), target **1.0890** (the next swing high): risk 16 pips, reward 48, **1 : 3.0** planned. If price closes below **1.0826**, the setup is cancelled.""",
        mistakes=[["Treating every flipped block as a breaker", "Require a sweep, displacement and a structure break"], ["Entering at the break instead of the return", "Wait for the retest and a reaction"], ["Stop inside the zone", "Place it beyond the swing that defines the idea"], ["Ignoring higher-timeframe direction", "Check the bigger trend and key levels first"]],
        practice=["Find five order blocks that failed on your chart and mark whether a sweep came first.", "For each, note whether price reacted on the return, and by how many R.", "Compare breakers (with a sweep) against mitigation blocks (without)."],
        summary=[["Breaker", "Failed order block after a liquidity sweep and structure break"], ["Mitigation block", "Failed order block without the sweep"], ["Entry", "On the return to the zone with confirmation; stop beyond the swing"], ["Caution", "Zones where price may react, not guarantees"]],
        related=[("/smc/breaker-blocks", "Breaker Blocks"), ("/smc/mitigation-blocks", "Mitigation Blocks"), ("/smc/order-blocks", "Order Blocks"), ("/blog/understanding-order-blocks", "Understanding Order Blocks")],
        fig_alt="A synthetic bearish breaker block: a bullish order block fails after a liquidity sweep and structure break, and price later returns to the zone",
        fig_note="Synthetic candles for teaching; real breakers are rarely this clean", fig_label="Breaker Blocks"),
    bn=dict(
        title="Breaker Blocks ও Mitigation Blocks — ব্যবহারিক SMC গাইড",
        description="ব্যর্থ Order Block কীভাবে Breaker (Liquidity Sweep ও স্ট্রাকচার ভাঙার পর) বা Mitigation Block (Sweep ছাড়া) হয়, প্রতিটি কীভাবে যাচাই করবেন, স্ট্রাকচারাল Stop সহ ধাপে ধাপে এন্ট্রি, আর এই সেটআপ ব্যর্থ হওয়ার প্রচলিত উপায়।",
        intro="**Order Block** হলো শক্তিশালী মুভের আগের শেষ বিপরীত ক্যান্ডেল। প্রাইস ফিরে এসে ব্লকটি **ব্যর্থ** করলে (ব্লক ভেদ করে Close) এটি পোলারিটি উল্টাতে পারে। Smart Money Concepts এর দুটি রূপ: **Breaker Block** ও **Mitigation Block**। এগুলো স্ট্রাকচারের বর্ণনা, নিশ্চয়তা নয়।",
        fix="মূল লেখায় Breaker কে \"শক্তিশালী সুযোগ\" বলা হয়েছিল এবং নির্ভরযোগ্য ফলের ইঙ্গিত ছিল। এগুলো এমন জোন যেখানে প্রাইস **প্রতিক্রিয়া দেখাতে পারে**; অনেকগুলো ব্যর্থ হয়। মুভের পেছনে কে (\"Smart Money\") তা ব্যাখ্যা মাত্র, তাই এই সংস্করণ চার্টে যা দেখা যায় তাতেই থাকে।",
        sections=[
            ("Breaker বনাম Mitigation Block", """
| বৈশিষ্ট্য                    | **Breaker Block**                                                                 | **Mitigation Block**                                                  |
| -------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| শুরু                  | ব্যর্থ হওয়া Order Block                                                         | ব্যর্থ হওয়া Order Block                                             |
| আগে Liquidity Sweep?     | **হ্যাঁ**: প্রাইস আগের Swing High বা Low নিয়ে তারপর উল্টায়                 | **না**: প্রাইস Lower High (বা Higher Low) বানিয়ে তারপর ভাঙে      |
| স্ট্রাকচার ভাঙা            | যে Swing Sweep তৈরি করেছে তা ভাঙে                                           | শেষ Swing Low (বেয়ারিশ) বা High (বুলিশ) ভাঙে       |
| সাধারণ পাঠ            | শক্তিশালী রিভার্সাল সংকেত কারণ Stop নেওয়া হয়েছে                               | দুর্বল, কন্টিনিউয়েশন-ঘেঁষা সংকেত                               |

**বেয়ারিশ Breaker (উদাহরণ)**: প্রাইস আগের High Sweep করে একটি High বানায়, পড়ে শেষ Swing Low ভাঙে; মূল র‍্যালির আগের শেষ আপ-ক্যান্ডেল (পুরোনো বুলিশ Order Block) এখন প্রাইসের উপরে থাকে, ফিরে এলে **Sell** করার জোন। বুলিশ Breaker উল্টো প্রতিচ্ছবি। কাজের চার্টের জন্য [Breaker Blocks](/bn/smc/breaker-blocks) ও [Mitigation Blocks](/bn/smc/mitigation-blocks) দেখুন।"""),
            ("সেটআপ যাচাই", """
| যাচাই                                      | যা চান                                                        |
| ------------------------------------------ | -------------------------------------------------------------------- |
| আগে একটি Order Block ছিল                | Displacement এর আগে স্পষ্ট শেষ বিপরীত ক্যান্ডেল                   |
| Displacement সহ ব্যর্থ হয়েছে                  | ব্লক ভেদ করে শক্তিশালী Close, আদর্শভাবে Fair Value Gap রেখে   |
| স্ট্রাকচার ভেঙেছে                              | প্রাসঙ্গিক Swing এর ওপারে Close, শুধু Wick নয়                   |
| হায়ার-টাইমফ্রেম সামঞ্জস্য                   | Breaker বড় ট্রেন্ডের দিকে, বা কোনো মূল লেভেলে ইঙ্গিত করে |
| টার্গেট পর্যন্ত জায়গা                          | পরের বিপরীত লেভেলের আগে অন্তত ২R জায়গা                   |

Displacement ও স্ট্রাকচার ভাঙা ছাড়া উল্টানো ব্লক চার্টে শুধু একটি রেখা।"""),
            ("এন্ট্রি, Stop ও ব্যবস্থাপনা", """
1. Breaker জোন চিহ্নিত করুন (বডি, বা হায়ার টাইমফ্রেমে পুরো ক্যান্ডেল)।
2. প্রাইস এতে **ফিরে আসার** অপেক্ষা করুন। ভাঙার পেছনে ছুটবেন না।
3. ছোট টাইমফ্রেমে নিশ্চিতকরণ খুঁজুন (প্রতিক্রিয়ার ক্যান্ডেল, ছোট স্ট্রাকচার শিফট)।
4. সেটআপ সংজ্ঞায়িত করা **জোন ও Swing এর ওপারে** Stop বসান।
5. কাছের বিপরীত Liquidity বা লেভেলে টার্গেট করুন, সেখানে আংশিক মুনাফা নিন।

প্রাইস প্রতিক্রিয়া না দেখিয়ে Breaker ভেদ করে Close করলে ধারণা ভুল, আর Stop নিজের কাজ করে।"""),
        ],
        example="""
EUR/USD, ১-ঘণ্টার চার্টে বুলিশ Breaker: প্রাইস **1.0816** এ আগের Low Sweep করে, র‍্যালি করে শেষ Lower High এর উপরে Close করে, আর **1.0838** ও **1.0846** এর মাঝের পুরোনো বেয়ারিশ Order Block Support হয়। পরিকল্পনা: **1.0842** এ ফেরায় Buy, Stop **1.0826** (Sweep Low ও জোনের নিচে), টার্গেট **1.0890** (পরের Swing High): রিস্ক ১৬ পিপ, রিওয়ার্ড ৪৮, পরিকল্পিত **১ : ৩.০**। প্রাইস **1.0826** এর নিচে Close করলে সেটআপ বাতিল।""",
        mistakes=[["প্রতিটি উল্টানো ব্লককে Breaker ধরা", "Sweep, Displacement ও স্ট্রাকচার ভাঙা দাবি করুন"], ["ফেরার বদলে ভাঙার সময় এন্ট্রি", "রিটেস্ট ও প্রতিক্রিয়ার অপেক্ষা করুন"], ["জোনের ভেতরে Stop", "ধারণা সংজ্ঞায়িত করা Swing এর ওপারে রাখুন"], ["হায়ার-টাইমফ্রেমের দিক উপেক্ষা", "আগে বড় ট্রেন্ড ও মূল লেভেল দেখুন"]],
        practice=["চার্টে ব্যর্থ হওয়া পাঁচটি Order Block খুঁজে আগে Sweep এসেছিল কি না চিহ্নিত করুন।", "প্রতিটির জন্য ফেরায় প্রাইস প্রতিক্রিয়া দেখিয়েছে কি না, ও কত R, লিখুন।", "Breaker (Sweep সহ) ও Mitigation Block (Sweep ছাড়া) তুলনা করুন।"],
        summary=[["Breaker", "Liquidity Sweep ও স্ট্রাকচার ভাঙার পর ব্যর্থ Order Block"], ["Mitigation Block", "Sweep ছাড়া ব্যর্থ Order Block"], ["এন্ট্রি", "নিশ্চিতকরণসহ জোনে ফেরায়; Swing এর ওপারে Stop"], ["সতর্কতা", "যে জোনে প্রাইস প্রতিক্রিয়া দেখাতে পারে, নিশ্চয়তা নয়"]],
        related=[("/smc/breaker-blocks", "Breaker Blocks"), ("/smc/mitigation-blocks", "Mitigation Blocks"), ("/smc/order-blocks", "Order Blocks"), ("/blog/understanding-order-blocks", "Understanding Order Blocks")],
        fig_alt="একটি সিন্থেটিক বেয়ারিশ Breaker Block: Liquidity Sweep ও স্ট্রাকচার ভাঙার পর বুলিশ Order Block ব্যর্থ হয়, প্রাইস পরে জোনে ফেরে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল; আসল Breaker এত পরিষ্কার কদাচিৎ হয়", fig_label="Breaker Blocks"),
)
