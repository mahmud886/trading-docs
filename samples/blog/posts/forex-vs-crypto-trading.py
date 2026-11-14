SPEC = dict(
    fm=dict(date="2026-05-12", category="Markets", tags=["forex", "crypto", "comparison", "market-analysis"], reading=7, featured=False),
    fig=dict(img="/images/forex-sessions/introduction/sessions-bd-map-dark.webp", video="/videos/forex-sessions/sessions-bd-explainer-dark.mp4", lesson="/forex-sessions/introduction"),
    en=dict(
        title="Forex vs Crypto Trading — How the Two Markets Differ",
        description="A balanced comparison of forex and crypto: trading hours, where trades happen, liquidity, volatility, leverage and costs, and what each difference means for stop size and position size, with a worked sizing example on EUR/USD and BTC/USD and a reminder to check local regulation.",
        intro="Both markets trade price charts, so the same tools can be applied to both, but the **market structure and the size of moves differ**, and those differences change how you should size and manage trades. This is a comparison, not a recommendation of either.",
        fix="The original made broad claims about which market is \"better\" and quoted market-size figures without sources. Both can be traded well or badly. Rules for retail traders also differ by country and change over time, so **check your local regulation and your broker or exchange's licence** before trading either.",
        sections=[
            ("Side by Side", """
| Feature               | Forex (major pairs)                                        | Crypto (for example BTC/USD)                               |
| --------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| **Hours**             | 24 hours, five days (closed from Friday night to Sunday night) | 24 hours, seven days                                       |
| **Where it trades**   | Over the counter through banks and dealers; no single exchange | Many exchanges and platforms, each with its own order book |
| **Sessions**          | Clear Asian, London and New York rhythm                    | Weaker session pattern; activity follows news and flows    |
| **Typical daily moves** | Often a fraction of one percent for major pairs          | Often several percent; much larger swings are common       |
| **Costs**             | Spread (plus commission or swap on some accounts)          | Spread or fee, plus funding rates on perpetual contracts   |
| **Leverage**          | Offered by brokers; limits vary by jurisdiction            | Offered on derivatives; limits vary by platform            |
| **Gaps**              | Weekend gaps on Monday opens                               | No weekend gap; price moves while you sleep                |
| **Main drivers**      | Interest rates, data, central banks, risk sentiment        | Flows, sentiment, regulation news, leverage cycles         |

In Bangladesh time (US/UK summer) the forex week opens in the early hours of Monday and the main liquidity windows are London (from 1:00 PM) and New York (from 6:00 PM); see the [sessions map](/en/forex-sessions/introduction). Crypto has no such fixed windows."""),
            ("What the Differences Mean for Risk", """
Because crypto moves are larger, the **same percentage risk needs a smaller position**. With a 10,000 account risking 1% (100):

| Market    | Stop distance            | Position size that risks 100                        |
| --------- | ------------------------ | --------------------------------------------------- |
| EUR/USD   | 20 pips (about 0.18%)    | About 54,000 notional (about 0.54 standard lot)     |
| BTC/USD   | 3% (1,800 on 60,000)     | About 3,300 notional (about 0.055 BTC)              |

Both lose the same 100 if stopped. The EUR/USD position is large relative to the account; the BTC position is small. Position size comes from the **stop distance**, not from the market's name. Review [Position Sizing 101](/en/blog/position-sizing-101)."""),
            ("Which Skills Transfer", """
| Skill                          | Forex                                              | Crypto                                         |
| ------------------------------ | -------------------------------------------------- | ---------------------------------------------- |
| Market structure and levels    | Works the same way                                 | Works, but wider zones and wicks               |
| Session timing                 | Central: London and New York windows               | Less reliable                                  |
| News calendar                  | Scheduled data matters a lot                       | Less scheduled; sudden events                  |
| Leverage and liquidation       | Margin calls                                       | Liquidation engines can cascade                |"""),
        ],
        example="""
Crypto plan: BTC/USD at **60,000**, stop **58,200** (3%), target **63,600** (6%): risk 1,800, reward 3,600, **1 : 2.0** planned; at 1% risk of a 10,000 account (100) that is about 0.055 BTC. Forex plan: EUR/USD buy **1.0850**, stop **1.0830**, target **1.0890**, also **1 : 2.0**, at about 0.54 lot for the same 100 of risk. Same risk, very different position sizes.""",
        mistakes=[["Using the same stop distance in both markets", "Size the stop to the market's typical movement"], ["Using forex position sizes on crypto", "Recompute from stop distance and risk %"], ["Ignoring funding rates and fees", "Include them in costs"], ["Skipping local regulation", "Check legality and licensing where you live"]],
        practice=["Measure the average daily range of EUR/USD and BTC/USD over the last 30 days.", "Compute the position size for 1% risk and a stop of one third of the daily range in each.", "Compare your answers and write down why they differ."],
        summary=[["Hours", "Forex 24/5 with sessions; crypto 24/7"], ["Structure", "Forex OTC and centralised by dealers; crypto fragmented across exchanges"], ["Risk", "Larger crypto moves need smaller positions for the same risk"], ["Regulation", "Check local rules before trading either market"]],
        related=[("/forex-sessions/introduction", "Introduction to Forex Sessions"), ("/blog/position-sizing-101", "Position Sizing 101"), ("/blog/risk-management-essentials", "Risk Management Essentials"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh")],
        fig_alt="A map of the forex sessions in Bangladesh time: Sydney, Tokyo, London and New York windows across the day",
        fig_note="A reference chart from the sessions lesson (US/UK summer times)", fig_label="Introduction to Forex Sessions"),
    bn=dict(
        title="Forex vs Crypto Trading — দুই মার্কেটের পার্থক্য",
        description="ফরেক্স ও ক্রিপ্টোর ভারসাম্যপূর্ণ তুলনা: ট্রেডিং সময়, ট্রেড কোথায় হয়, তারল্য, ভোলাটিলিটি, লিভারেজ ও খরচ, আর প্রতিটি পার্থক্য Stop ও পজিশন সাইজের জন্য কী বোঝায় — EUR/USD ও BTC/USD এ সাইজিং উদাহরণ ও স্থানীয় নিয়মকানুন যাচাইয়ের স্মরণসহ।",
        intro="দুটি মার্কেটেই প্রাইস চার্টে ট্রেড হয়, তাই একই সরঞ্জাম দুটিতে প্রয়োগ করা যায়, কিন্তু **মার্কেটের কাঠামো ও মুভের আকার ভিন্ন**, আর এই পার্থক্য ট্রেডের সাইজ ও ব্যবস্থাপনা বদলে দেয়। এটি তুলনা, কোনোটির সুপারিশ নয়।",
        fix="মূল লেখায় কোন মার্কেট \"ভালো\" তা নিয়ে ব্যাপক দাবি ও উৎস ছাড়া মার্কেটের আকারের সংখ্যা ছিল। দুটিই ভালো বা খারাপভাবে ট্রেড করা যায়। রিটেইল ট্রেডারদের নিয়ম দেশভেদে ভিন্ন ও সময়ের সাথে বদলায়, তাই কোনোটিতে ট্রেডের আগে **স্থানীয় নিয়মকানুন ও আপনার ব্রোকার বা এক্সচেঞ্জের লাইসেন্স যাচাই করুন**।",
        sections=[
            ("পাশাপাশি", """
| বৈশিষ্ট্য               | ফরেক্স (মেজর পেয়ার)                                        | ক্রিপ্টো (যেমন BTC/USD)                               |
| --------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| **সময়**             | ২৪ ঘণ্টা, পাঁচ দিন (শুক্রবার রাত থেকে রবিবার রাত পর্যন্ত বন্ধ) | ২৪ ঘণ্টা, সাত দিন                                       |
| **কোথায় ট্রেড**   | ব্যাংক ও ডিলারদের মাধ্যমে ওভার-দ্য-কাউন্টার; একক এক্সচেঞ্জ নেই | অনেক এক্সচেঞ্জ ও প্ল্যাটফর্ম, প্রতিটির নিজস্ব অর্ডার বুক |
| **সেশন**          | স্পষ্ট এশিয়ান, London ও New York ছন্দ                    | দুর্বল সেশন প্যাটার্ন; কার্যকলাপ নিউজ ও ফ্লো অনুসরণ করে    |
| **সাধারণ দৈনিক মুভ** | মেজর পেয়ারে প্রায়ই এক শতাংশের ভগ্নাংশ          | প্রায়ই কয়েক শতাংশ; অনেক বড় দোলাও সাধারণ       |
| **খরচ**             | স্প্রেড (কিছু অ্যাকাউন্টে কমিশন বা সোয়াপও)          | স্প্রেড বা ফি, সাথে পারপেচুয়াল চুক্তিতে ফান্ডিং রেট   |
| **লিভারেজ**          | ব্রোকার দেয়; সীমা এখতিয়ারভেদে ভিন্ন            | ডেরিভেটিভে দেয়; সীমা প্ল্যাটফর্মভেদে ভিন্ন            |
| **গ্যাপ**              | সোমবার খোলায় সপ্তাহান্তের গ্যাপ                               | সপ্তাহান্তের গ্যাপ নেই; আপনি ঘুমালেও প্রাইস নড়ে                |
| **মূল চালক**      | সুদের হার, ডেটা, সেন্ট্রাল ব্যাংক, ঝুঁকি-মনোভাব        | ফ্লো, মনোভাব, নিয়ন্ত্রক খবর, লিভারেজ চক্র         |

বাংলাদেশ সময়ে (US/UK Summer) ফরেক্স সপ্তাহ সোমবার ভোরে খোলে আর প্রধান লিকুইডিটি উইন্ডো London (দুপুর ১:০০ থেকে) ও New York (সন্ধ্যা ৬:০০ থেকে); [সেশন ম্যাপ](/bn/forex-sessions/introduction) দেখুন। ক্রিপ্টোর এমন নির্দিষ্ট উইন্ডো নেই।"""),
            ("ঝুঁকির জন্য পার্থক্য কী বোঝায়", """
ক্রিপ্টোর মুভ বড় বলে **একই শতাংশ ঝুঁকিতে ছোট পজিশন লাগে**। ১০,০০০ অ্যাকাউন্টে ১% (১০০) ঝুঁকিতে:

| মার্কেট    | Stop দূরত্ব            | ১০০ ঝুঁকি নেওয়া পজিশন সাইজ                        |
| --------- | ------------------------ | --------------------------------------------------- |
| EUR/USD   | ২০ পিপ (প্রায় ০.১৮%)    | প্রায় ৫৪,০০০ নোশনাল (প্রায় ০.৫৪ স্ট্যান্ডার্ড লট)     |
| BTC/USD   | ৩% (৬০,০০০ এ ১,৮০০)     | প্রায় ৩,৩০০ নোশনাল (প্রায় ০.০৫৫ BTC)              |

Stop লাগলে দুটিতেই একই ১০০ হারান। EUR/USD পজিশন অ্যাকাউন্টের তুলনায় বড়; BTC পজিশন ছোট। পজিশন সাইজ আসে **Stop দূরত্ব** থেকে, মার্কেটের নাম থেকে নয়। [Position Sizing 101](/bn/blog/position-sizing-101) পড়ুন।"""),
            ("কোন দক্ষতা স্থানান্তরযোগ্য", """
| দক্ষতা                          | ফরেক্স                                              | ক্রিপ্টো                                         |
| ------------------------------ | -------------------------------------------------- | ---------------------------------------------- |
| মার্কেট স্ট্রাকচার ও লেভেল    | একইভাবে কাজ করে                                 | কাজ করে, কিন্তু জোন ও Wick বড়               |
| সেশন টাইমিং                 | কেন্দ্রীয়: London ও New York উইন্ডো               | কম নির্ভরযোগ্য                                  |
| নিউজ ক্যালেন্ডার              | নির্ধারিত ডেটা অনেক গুরুত্বপূর্ণ                       | কম নির্ধারিত; আকস্মিক ঘটনা                  |
| লিভারেজ ও লিকুইডেশন       | মার্জিন কল                                       | লিকুইডেশন ইঞ্জিন ধারাবাহিকভাবে ধসাতে পারে                |"""),
        ],
        example="""
ক্রিপ্টো পরিকল্পনা: BTC/USD **60,000** এ, Stop **58,200** (৩%), টার্গেট **63,600** (৬%): রিস্ক ১,৮০০, রিওয়ার্ড ৩,৬০০, পরিকল্পিত **১ : ২.০**; ১০,০০০ অ্যাকাউন্টের ১% ঝুঁকিতে (১০০) প্রায় ০.০৫৫ BTC। ফরেক্স পরিকল্পনা: EUR/USD Buy **1.0850**, Stop **1.0830**, টার্গেট **1.0890**, এটিও **১ : ২.০**, একই ১০০ ঝুঁকিতে প্রায় ০.৫৪ লট। একই ঝুঁকি, পজিশন সাইজ খুব ভিন্ন।""",
        mistakes=[["দুই মার্কেটে একই Stop দূরত্ব ব্যবহার", "মার্কেটের সাধারণ চলাচল অনুযায়ী Stop বাছুন"], ["ক্রিপ্টোতে ফরেক্সের পজিশন সাইজ ব্যবহার", "Stop দূরত্ব ও ঝুঁকি % থেকে আবার হিসাব করুন"], ["ফান্ডিং রেট ও ফি উপেক্ষা", "খরচে ধরুন"], ["স্থানীয় নিয়ম এড়ানো", "আপনি যেখানে থাকেন সেখানে বৈধতা ও লাইসেন্সিং যাচাই করুন"]],
        practice=["গত ৩০ দিনে EUR/USD ও BTC/USD এর গড় দৈনিক রেঞ্জ মাপুন।", "প্রতিটিতে ১% ঝুঁকি ও দৈনিক রেঞ্জের এক-তৃতীয়াংশ Stop এ পজিশন সাইজ হিসাব করুন।", "উত্তর তুলনা করে কেন ভিন্ন তা লিখুন।"],
        summary=[["সময়", "ফরেক্স ২৪/৫ সেশনসহ; ক্রিপ্টো ২৪/৭"], ["কাঠামো", "ফরেক্স OTC; ক্রিপ্টো এক্সচেঞ্জ জুড়ে বিভক্ত"], ["ঝুঁকি", "একই ঝুঁকিতে ক্রিপ্টোর বড় মুভে ছোট পজিশন"], ["নিয়ম", "কোনো মার্কেটে ট্রেডের আগে স্থানীয় নিয়ম যাচাই করুন"]],
        related=[("/forex-sessions/introduction", "Introduction to Forex Sessions"), ("/blog/position-sizing-101", "Position Sizing 101"), ("/blog/risk-management-essentials", "Risk Management Essentials"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh")],
        fig_alt="বাংলাদেশ সময়ে ফরেক্স সেশনের ম্যাপ: দিন জুড়ে Sydney, Tokyo, London ও New York উইন্ডো",
        fig_note="সেশন লেসন থেকে রেফারেন্স চার্ট (US/UK Summer সময়)", fig_label="Introduction to Forex Sessions"),
)
