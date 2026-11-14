SPEC = dict(
    fm=dict(date="2026-05-06", category="Smart Money Concepts", tags=["liquidity", "sweeps", "smart-money", "liquidity-cycle"], reading=7, featured=False),
    fig=dict(img="/images/ict/liquidity/sweep-vs-run-dark.webp", video="/videos/ict/liquidity-cycle-explainer-dark.mp4", lesson="/ict/liquidity"),
    en=dict(
        title="Liquidity Sweeps and the Liquidity Cycle — Sweep or Run?",
        description="How to tell a sweep (price takes a level and reverses) from a run (price takes a level and keeps going), the repeating cycle of build-up, sweep and move that traders look for, a decision checklist, and the ways the \"smart money\" explanation can mislead you.",
        intro="Price repeatedly **builds liquidity** (highs or lows that attract stops), **takes it** and then **moves**, either back the way it came or onward. Traders often describe this as a cycle. The practical question is always the same: after price takes a level, is it a **sweep** (reversal) or a **run** (continuation)?",
        fix="The original framed sweeps as \"smart money\" hunting retail stops and quoted success rates. We can't observe who is behind an order, and a sweep that reverses is explained equally well by simple supply and demand. Use the vocabulary if it helps you organise the chart, but base decisions on what price **does**, not on who you imagine is doing it.",
        sections=[
            ("The Cycle", """
| Phase                | What you see                                                                 | What you do                              |
| -------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| **1. Build**         | Equal highs or lows, tight ranges, a clear level                              | Mark the level; do nothing yet           |
| **2. Take**          | Price trades beyond the level                                                 | Watch the **close** and the next candles |
| **3. Move**          | Either a reversal (sweep) or acceptance beyond it (run)                       | Act only on confirmation                 |

The [Liquidity](/en/ict/liquidity) lesson shows the cycle on EUR/USD, and [Liquidity Concepts](/en/blog/liquidity-concepts-complete-guide) lists the types of levels."""),
            ("Sweep or Run? A Checklist", """
| Question                                       | Points to a **sweep**                         | Points to a **run**                          |
| ---------------------------------------------- | --------------------------------------------- | -------------------------------------------- |
| Where does the candle close?                   | Back inside the old range                     | Beyond the level                             |
| What does the next candle do?                  | Moves away from the level                     | Holds or extends beyond                      |
| Higher-timeframe direction                     | Against the break                             | With the break                               |
| Speed of the move                              | Quick spike, quick return                     | Steady push, small pullbacks                 |
| Structure after                                | A shift in the opposite direction             | New highs (or lows) in the same direction    |

No single row decides it; the more rows agree, the clearer the picture. When they split, **stand aside**."""),
            ("What Can Mislead You", """
| Trap                                       | Why                                                              |
| ------------------------------------------ | ---------------------------------------------------------------- |
| Believing every wick is a hunt             | Most wicks are noise                                             |
| Trading the first beyond-level candle      | You can't yet tell sweep from run                                |
| Counting only the winning sweeps           | Keep a record of every level you marked                          |
| Using the story as a reason to hold a loser | The story doesn't change where your stop is                      |"""),
        ],
        example="""
The Asian high is **1.0880**. At 1:10 PM BD price pushes to **1.0888** but a 15-minute candle closes at **1.0874**, back inside; the next candle makes a lower high and a 5-minute candle closes below the last higher low. Checklist: close inside, move away, higher timeframe neutral, quick spike: four rows point to a sweep. Plan: sell **1.0872**, stop **1.0892** (above the spike): risk 20 pips; target **1.0832** (the Asian low): reward 40 pips, **1 : 2.0** planned. If price closes above **1.0892**, treat it as a run and cancel.""",
        mistakes=[["Treating a first beyond-level candle as a signal", "Wait for the close and the next candles"], ["Forcing the cycle onto every range", "Only act on levels many traders would see"], ["Explaining losses with a story", "Review the rows in the checklist instead"], ["Skipping a record of marked levels", "Log every level and outcome"]],
        practice=["Mark ten obvious levels on a chart and label each take as sweep or run.", "Fill in the checklist table for each, then see which rows were the best predictors.", "Write down how many you would have traded and the R of each."],
        summary=[["Cycle", "Build, take, move"], ["Sweep vs run", "Decided by the close, the next candles, the higher timeframe and structure after"], ["Stand aside", "When the checklist splits"], ["Caution", "Who is behind an order is unobservable"]],
        related=[("/ict/liquidity", "Liquidity"), ("/ict/liquidity-sweep", "Liquidity Sweep"), ("/blog/liquidity-sweeps-explained", "Liquidity Sweeps Explained"), ("/blog/liquidity-concepts-complete-guide", "Liquidity Concepts")],
        fig_alt="A synthetic comparison of a sweep (price takes a level and reverses) and a run (price takes a level and keeps going)",
        fig_note="Synthetic candles for teaching", fig_label="Liquidity"),
    bn=dict(
        title="Liquidity Sweeps ও Liquidity Cycle — Sweep নাকি Run?",
        description="Sweep (প্রাইস লেভেল নিয়ে উল্টায়) ও Run (প্রাইস লেভেল নিয়ে চলতেই থাকে) কীভাবে আলাদা করবেন, ট্রেডাররা যে বিল্ড-আপ, Sweep ও মুভের পুনরাবৃত্ত চক্র খোঁজেন, সিদ্ধান্তের চেকলিস্ট, আর \"Smart Money\" ব্যাখ্যা কীভাবে বিভ্রান্ত করতে পারে।",
        intro="প্রাইস বারবার **Liquidity বানায়** (যে High বা Low Stop আকর্ষণ করে), **সেটি নেয়**, তারপর **নড়ে**, হয় যে পথে এসেছে সেখানে ফিরে, নয়তো সামনে। ট্রেডাররা প্রায়ই একে চক্র বলেন। ব্যবহারিক প্রশ্ন সবসময় একই: প্রাইস লেভেল নেওয়ার পর সেটি **Sweep** (রিভার্সাল) নাকি **Run** (কন্টিনিউয়েশন)?",
        fix="মূল লেখায় Sweep কে রিটেইলের Stop শিকারকারী \"Smart Money\" হিসেবে দেখানো হয়েছিল এবং সাফল্যের হার ছিল। অর্ডারের পেছনে কে তা আমরা দেখতে পাই না, আর উল্টে যাওয়া Sweep সরল সরবরাহ-চাহিদা দিয়েও সমান ভালো ব্যাখ্যা করা যায়। চার্ট গোছাতে শব্দভান্ডার কাজে লাগলে ব্যবহার করুন, কিন্তু সিদ্ধান্ত নিন প্রাইস **কী করে** তার ওপর, কে করছে বলে কল্পনা করেন তার ওপর নয়।",
        sections=[
            ("চক্র", """
| পর্যায়                | যা দেখেন                                                                 | যা করবেন                              |
| -------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| **১. বিল্ড**         | Equal High বা Low, সংকীর্ণ রেঞ্জ, স্পষ্ট লেভেল                              | লেভেল চিহ্নিত করুন; এখনো কিছু করবেন না           |
| **২. নেওয়া**          | প্রাইস লেভেলের ওপারে ট্রেড করে                                                 | **Close** ও পরের ক্যান্ডেল দেখুন |
| **৩. মুভ**           | হয় রিভার্সাল (Sweep) নয়তো ওপারে গ্রহণ (Run)                       | শুধু নিশ্চিতকরণে কাজ করুন                 |

[Liquidity](/bn/ict/liquidity) লেসন EUR/USD তে চক্র দেখায়, আর [Liquidity Concepts](/bn/blog/liquidity-concepts-complete-guide) লেভেলের ধরন তালিকা করে।"""),
            ("Sweep নাকি Run? চেকলিস্ট", """
| প্রশ্ন                                       | **Sweep** এর দিকে                         | **Run** এর দিকে                          |
| ---------------------------------------------- | --------------------------------------------- | -------------------------------------------- |
| ক্যান্ডেল কোথায় Close করে?                   | পুরোনো রেঞ্জের ভেতরে ফিরে                     | লেভেলের ওপারে                             |
| পরের ক্যান্ডেল কী করে?                  | লেভেল থেকে দূরে সরে                     | ওপারে টিকে বা বাড়ে                      |
| হায়ার-টাইমফ্রেমের দিক                     | ভাঙার বিপরীতে                             | ভাঙার সাথে                               |
| মুভের গতি                              | দ্রুত স্পাইক, দ্রুত ফেরা                       | ধীর ঠেলা, ছোট পুলব্যাক                 |
| পরে স্ট্রাকচার                               | বিপরীত দিকে শিফট             | একই দিকে নতুন High (বা Low)    |

কোনো একটি সারি সিদ্ধান্ত দেয় না; যত বেশি সারি মেলে, চিত্র তত স্পষ্ট। ভাগ হলে **সরে থাকুন**।"""),
            ("যা বিভ্রান্ত করতে পারে", """
| ফাঁদ                                       | কেন                                                              |
| ------------------------------------------ | ---------------------------------------------------------------- |
| প্রতিটি Wick কে শিকার বিশ্বাস করা            | বেশিরভাগ Wick নয়েজ                                             |
| লেভেলের ওপারের প্রথম ক্যান্ডেলে ট্রেড      | এখনো Sweep ও Run আলাদা করা যায় না                                |
| শুধু জেতা Sweep গোনা           | চিহ্নিত প্রতিটি লেভেলের রেকর্ড রাখুন                          |
| গল্পকে হারা ট্রেড ধরে রাখার কারণ বানানো | গল্প আপনার Stop কোথায় তা বদলায় না                      |"""),
        ],
        example="""
এশিয়ান High **1.0880**। দুপুর ১:১০ BD তে প্রাইস **1.0888** এ যায় কিন্তু ১৫-মিনিটের ক্যান্ডেল **1.0874** এ, ভেতরে ফিরে Close করে; পরের ক্যান্ডেল Lower High বানায় আর ৫-মিনিটের ক্যান্ডেল শেষ Higher Low এর নিচে Close করে। চেকলিস্ট: ভেতরে Close, দূরে সরা, হায়ার টাইমফ্রেম নিরপেক্ষ, দ্রুত স্পাইক: চার সারি Sweep এর দিকে। পরিকল্পনা: **1.0872** এ Sell, Stop **1.0892** (স্পাইকের উপরে): রিস্ক ২০ পিপ; টার্গেট **1.0832** (এশিয়ান Low): রিওয়ার্ড ৪০ পিপ, পরিকল্পিত **১ : ২.০**। প্রাইস **1.0892** এর উপরে Close করলে একে Run ধরে বাতিল করুন।""",
        mistakes=[["লেভেলের ওপারের প্রথম ক্যান্ডেলকে সংকেত ধরা", "Close ও পরের ক্যান্ডেলের অপেক্ষা করুন"], ["প্রতিটি রেঞ্জে চক্র চাপানো", "যে লেভেল অনেক ট্রেডার দেখবে শুধু সেখানে কাজ করুন"], ["লোকসানকে গল্প দিয়ে ব্যাখ্যা", "বরং চেকলিস্টের সারিগুলো রিভিউ করুন"], ["চিহ্নিত লেভেলের রেকর্ড না রাখা", "প্রতিটি লেভেল ও ফল লগ করুন"]],
        practice=["চার্টে দশটি সুস্পষ্ট লেভেল চিহ্নিত করে প্রতিটি নেওয়াকে Sweep বা Run লেবেল করুন।", "প্রতিটির জন্য চেকলিস্ট ভরে কোন সারি সেরা ভবিষ্যদ্বক্তা দেখুন।", "কতগুলো ট্রেড করতেন ও প্রতিটির R লিখুন।"],
        summary=[["চক্র", "বিল্ড, নেওয়া, মুভ"], ["Sweep বনাম Run", "Close, পরের ক্যান্ডেল, হায়ার টাইমফ্রেম ও পরের স্ট্রাকচার দিয়ে ঠিক হয়"], ["সরে থাকুন", "চেকলিস্ট ভাগ হলে"], ["সতর্কতা", "অর্ডারের পেছনে কে তা অদৃশ্য"]],
        related=[("/ict/liquidity", "Liquidity"), ("/ict/liquidity-sweep", "Liquidity Sweep"), ("/blog/liquidity-sweeps-explained", "Liquidity Sweeps Explained"), ("/blog/liquidity-concepts-complete-guide", "Liquidity Concepts")],
        fig_alt="Sweep (প্রাইস লেভেল নিয়ে উল্টায়) ও Run (প্রাইস লেভেল নিয়ে চলতেই থাকে) এর একটি সিন্থেটিক তুলনা",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Liquidity"),
)
