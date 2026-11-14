SPEC = dict(
    fm=dict(date="2026-05-11", category="ICT", tags=["daily-bias", "ict", "market-structure", "liquidity", "planning"], reading=6, featured=True),
    fig=dict(img="/images/ict/daily-bias/eurusd-daily-bias-dark.webp", video="/videos/ict/daily-bias-explainer-dark.mp4", lesson="/ict/daily-bias"),
    en=dict(
        title="Daily Bias — How to Plan the Day's Direction Before It Starts",
        description="Daily bias is a working hypothesis about which side of the day's range is more likely to be reached first. This guide gives a four-question checklist (structure, previous day's high and low, premium or discount, news), shows how a bias can be wrong, and uses Bangladesh-time session windows.",
        intro="A **daily bias** is a hypothesis, written before the session starts, about which direction price is more likely to travel today. It is not a forecast: it decides which setups you will **look for** and which you will **ignore**.",
        fix="The original presented bias as something you could determine with high accuracy and tied it to what \"institutions\" intend. Neither is established. Treat the bias as a filter that can be wrong, and keep a record of how often it was.",
        sections=[
            ("A Four-Question Checklist", """
| Question                                    | How to answer it                                                              | Leans bullish if…                                       |
| ------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- |
| **1. Higher-timeframe structure**           | Read the daily and 4-hour swings                                              | Higher highs and higher lows, or a bullish break        |
| **2. Previous day's high and low**          | Did price take one side and reject, or close beyond it?                       | It swept the low and closed back above                  |
| **3. Premium or discount**                  | Where is price within the larger dealing range?                               | It sits in discount (below the 50% level)               |
| **4. Scheduled news**                       | Check the calendar (US data is at 6:30 PM BD in summer)                       | No high-impact release will reverse the picture early   |

Count the answers: four agreeing is a clear bias, two against two is **no bias**. A day with no bias is a day to trade less or not at all. See the [Daily Bias](/en/ict/daily-bias) lesson and the [daily session bias checklist](/en/forex-sessions/daily-session-bias)."""),
            ("When the Bias Is Wrong", """
| Situation                                     | What to do                                                            |
| --------------------------------------------- | --------------------------------------------------------------------- |
| Price closes through your invalidation level  | The bias is off: stand aside or flip only with a new setup            |
| A news release breaks the structure           | Re-check the checklist after the release                              |
| The first move of London goes against you     | Wait for a close and a structure shift before deciding                |

Set the invalidation **before** the session, for example: bullish bias is cancelled by a 1-hour close below yesterday's low."""),
            ("Timing in Bangladesh Time", """
| Window (BD, US/UK summer)  | Use                                                                |
| -------------------------- | ------------------------------------------------------------------ |
| 6:00 AM – 12:00 PM         | Asian session: mark the range and write the bias                   |
| 1:00 PM onward             | London open: the first test of the bias                            |
| 6:00 PM onward             | New York open: continuation or reversal of London's move          |

Add one hour in winter for London and New York."""),
        ],
        example="""
Bias is bullish: the daily structure makes higher lows, yesterday's low at **1.0812** was swept and closed back above, and price is in discount. At the London open (1:00 PM BD, summer) EUR/USD dips to **1.0818** and closes back above the Asian low. Plan: buy **1.0850** after a 5-minute structure shift, stop **1.0830**, target **1.0890**: risk 20 pips, reward 40, **1 : 2.0** planned. A 1-hour close below **1.0812** cancels the bias.""",
        mistakes=[["Deciding the bias after seeing the first move", "Write it before the session"], ["Forcing a bias on every day", "Allow \"no bias\" and trade less"], ["Having no invalidation level", "Set the level that cancels the bias in advance"], ["Ignoring the news calendar", "Check it in BD time before the session"]],
        practice=["Write a bias and an invalidation level before each session for 20 days.", "After the session, mark whether the bias was right, wrong or unclear.", "Compare your results on days with four agreeing answers against the rest."],
        summary=[["Bias", "A written hypothesis about the day's direction, made before the session"], ["Checklist", "Structure, previous high/low, premium or discount, news"], ["No bias", "Is a valid answer; trade less"], ["Invalidation", "Set it in advance"]],
        related=[("/ict/daily-bias", "Daily Bias"), ("/forex-sessions/daily-session-bias", "Daily Session Bias"), ("/ict/dealing-range", "Dealing Range"), ("/blog/premium-discount-trading-guide", "Premium and Discount Trading Guide")],
        fig_alt="A synthetic EUR/USD daily-bias chart: a sweep of the previous day's low, a close back above it, and the daily structure",
        fig_note="Synthetic candles for teaching", fig_label="Daily Bias"),
    bn=dict(
        title="Daily Bias — দিন শুরুর আগে দিনের দিক পরিকল্পনা",
        description="Daily Bias হলো দিনের রেঞ্জের কোন দিক আগে ছোঁয়ার সম্ভাবনা বেশি সে বিষয়ে একটি কাজের অনুমান। এই গাইডে চার প্রশ্নের চেকলিস্ট (স্ট্রাকচার, আগের দিনের High-Low, Premium বা Discount, নিউজ), বায়াস কীভাবে ভুল হতে পারে, আর বাংলাদেশ সময়ে সেশন উইন্ডো।",
        intro="**Daily Bias** হলো সেশন শুরুর আগে লেখা একটি অনুমান: আজ প্রাইস কোন দিকে যাওয়ার সম্ভাবনা বেশি। এটি পূর্বাভাস নয়: কোন সেটআপ আপনি **খুঁজবেন** আর কোনটি **উপেক্ষা করবেন** তা এটি ঠিক করে।",
        fix="মূল লেখায় বায়াসকে এমন কিছু হিসেবে দেখানো হয়েছিল যা উচ্চ নির্ভুলতায় নির্ধারণ করা যায় এবং \"প্রতিষ্ঠান\" কী চায় তার সাথে জোড়া হয়েছিল। কোনোটিই প্রতিষ্ঠিত নয়। বায়াসকে ভুল হতে পারে এমন ফিল্টার ধরুন, আর কতবার ভুল হয়েছে তার রেকর্ড রাখুন।",
        sections=[
            ("চার প্রশ্নের চেকলিস্ট", """
| প্রশ্ন                                    | কীভাবে উত্তর দেবেন                                                              | বুলিশের দিকে যদি…                                       |
| ------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- |
| **১. হায়ার-টাইমফ্রেম স্ট্রাকচার**           | ডেইলি ও ৪-ঘণ্টার Swing পড়ুন                                              | Higher High ও Higher Low, বা বুলিশ ভাঙা        |
| **২. আগের দিনের High ও Low**          | প্রাইস কি এক দিক নিয়ে প্রত্যাখ্যাত হয়েছে, বা ওপারে Close করেছে?                       | Low Sweep করে ফিরে উপরে Close করেছে                  |
| **৩. Premium বা Discount**                  | বড় Dealing Range এর মধ্যে প্রাইস কোথায়?                               | Discount এ (৫০% লেভেলের নিচে)               |
| **৪. নির্ধারিত নিউজ**                       | ক্যালেন্ডার দেখুন (Summer এ US ডেটা সন্ধ্যা ৬:৩০ BD)                     | কোনো উচ্চ-প্রভাবের রিলিজ আগেই চিত্র উল্টাবে না   |

উত্তর গুনুন: চারটি একমত হলে স্পষ্ট বায়াস, দুই-দুই হলে **বায়াস নেই**। বায়াস-হীন দিন কম বা মোটেই ট্রেড না করার দিন। [Daily Bias](/bn/ict/daily-bias) লেসন ও [ডেইলি সেশন বায়াস চেকলিস্ট](/bn/forex-sessions/daily-session-bias) দেখুন।"""),
            ("বায়াস ভুল হলে", """
| পরিস্থিতি                                     | কী করবেন                                                            |
| --------------------------------------------- | --------------------------------------------------------------------- |
| প্রাইস আপনার বাতিলের লেভেল ভেদ করে Close করে  | বায়াস বন্ধ: সরে থাকুন বা নতুন সেটআপ হলেই শুধু উল্টান            |
| নিউজ রিলিজ স্ট্রাকচার ভাঙে           | রিলিজের পর আবার চেকলিস্ট দেখুন                              |
| London এর প্রথম মুভ আপনার বিপরীতে     | সিদ্ধান্তের আগে Close ও স্ট্রাকচার শিফটের অপেক্ষা করুন                    |

বাতিলের শর্ত **সেশনের আগে** ঠিক করুন, যেমন: গতকালের Low এর নিচে ১-ঘণ্টার Close হলে বুলিশ বায়াস বাতিল।"""),
            ("বাংলাদেশ সময়ে টাইমিং", """
| উইন্ডো (BD, US/UK Summer)  | ব্যবহার                                                                |
| -------------------------- | ------------------------------------------------------------------ |
| সকাল ৬:০০ – দুপুর ১২:০০         | এশিয়ান সেশন: রেঞ্জ চিহ্নিত করে বায়াস লিখুন                   |
| দুপুর ১:০০ থেকে             | London খোলা: বায়াসের প্রথম পরীক্ষা                            |
| সন্ধ্যা ৬:০০ থেকে            | New York খোলা: London এর মুভের কন্টিনিউয়েশন বা রিভার্সাল          |

London ও New York এ Winter এ এক ঘণ্টা যোগ করুন।"""),
        ],
        example="""
বায়াস বুলিশ: ডেইলি স্ট্রাকচারে Higher Low, গতকালের Low **1.0812** Sweep হয়ে উপরে ফিরে Close করেছে, আর প্রাইস Discount এ। London খোলায় (দুপুর ১:০০ BD, Summer) EUR/USD **1.0818** এ নেমে এশিয়ান Low এর উপরে ফিরে Close করে। পরিকল্পনা: ৫-মিনিটের স্ট্রাকচার শিফটের পর **1.0850** এ Buy, Stop **1.0830**, টার্গেট **1.0890**: রিস্ক ২০ পিপ, রিওয়ার্ড ৪০, পরিকল্পিত **১ : ২.০**। **1.0812** এর নিচে ১-ঘণ্টার Close হলে বায়াস বাতিল।""",
        mistakes=[["প্রথম মুভ দেখে বায়াস ঠিক করা", "সেশনের আগে লিখুন"], ["প্রতিদিন জোর করে বায়াস চাপানো", "\"বায়াস নেই\" মেনে নিন ও কম ট্রেড করুন"], ["বাতিলের লেভেল না রাখা", "বায়াস বাতিলকারী লেভেল আগে ঠিক করুন"], ["নিউজ ক্যালেন্ডার উপেক্ষা", "সেশনের আগে BD সময়ে দেখুন"]],
        practice=["২০ দিন প্রতি সেশনের আগে বায়াস ও বাতিলের লেভেল লিখুন।", "সেশনের পরে চিহ্নিত করুন বায়াস ঠিক, ভুল বা অস্পষ্ট ছিল।", "চারটি উত্তর একমত এমন দিনের ফল বাকিদের সাথে তুলনা করুন।"],
        summary=[["বায়াস", "সেশনের আগে লেখা দিনের দিক নিয়ে অনুমান"], ["চেকলিস্ট", "স্ট্রাকচার, আগের High/Low, Premium বা Discount, নিউজ"], ["বায়াস নেই", "বৈধ উত্তর; কম ট্রেড করুন"], ["বাতিল", "আগে ঠিক করুন"]],
        related=[("/ict/daily-bias", "Daily Bias"), ("/forex-sessions/daily-session-bias", "Daily Session Bias"), ("/ict/dealing-range", "Dealing Range"), ("/blog/premium-discount-trading-guide", "Premium and Discount Trading Guide")],
        fig_alt="একটি সিন্থেটিক EUR/USD ডেইলি-বায়াস চার্ট: আগের দিনের Low এর Sweep, তার উপরে ফিরে Close ও ডেইলি স্ট্রাকচার",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Daily Bias"),
)
