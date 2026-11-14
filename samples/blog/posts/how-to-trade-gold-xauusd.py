SPEC = dict(
    fm=dict(date="2026-05-08", category="Academy", tags=["gold", "xauusd", "commodities", "beginner"], reading=8, featured=True),
    fig=dict(img="/images/ict/liquidity-sweep/gold-eql-sweep-dark.webp", video="/videos/ict/sweep-anatomy-explainer-dark.mp4", lesson="/ict/liquidity-sweep"),
    en=dict(
        title="How to Trade Gold (XAU/USD) — Contract Size, Drivers, Sessions and Risk",
        description="A practical introduction to trading gold against the US dollar: how the contract is quoted and sized (1 standard lot is 100 ounces), what drives the price, the best Bangladesh-time windows, why stops must be wider than on forex pairs, and a position-size calculation for a 1% risk trade.",
        intro="**XAU/USD** quotes the price of one troy ounce of gold in US dollars. It trades like a currency pair on most platforms but behaves differently: it moves in **dollars per ounce**, has larger swings than major pairs, and responds to different drivers. This guide covers the basics a beginner needs before the first trade.",
        fix="The original made broad claims about gold as a \"safe haven that always rises in crises\" and quoted precise reliability for setups. Gold has fallen in some crises and risen in calm periods, and no setup has fixed odds. The ideas below are tendencies to test.",
        sections=[
            ("Contract Size and Pip Value", """
| Item                                | Value (most brokers; check yours)                                 |
| ----------------------------------- | ----------------------------------------------------------------- |
| Quote                               | US dollars per troy ounce (for example 2,040.00)                  |
| 1 standard lot                      | 100 troy ounces                                                   |
| Profit on a 1.00 price move         | 100 USD per standard lot                                          |
| Profit on a 10.00 move              | 1,000 USD per standard lot (100 USD per 0.10 lot)                 |

Brokers differ on what they call a "pip" or "point" for gold, so **think in dollars of price movement** and check the contract specification before trading."""),
            ("What Moves Gold", """
| Driver                     | Common tendency (not a rule)                                                    |
| -------------------------- | ------------------------------------------------------------------------------- |
| **US dollar**              | Stronger dollar often pressures gold, and the reverse                           |
| **Real interest rates**    | Higher real yields often weigh on gold, but the link has weakened at times      |
| **Risk sentiment**         | Gold is often bought in stress, though not every time                           |
| **Central-bank demand**    | Large purchases can support prices                                              |
| **Scheduled data**         | US inflation, jobs and central-bank decisions move it sharply                   |

See [Gold, the Dollar and Bonds](/en/intermarket/gold-dollar-bonds) for a test of these links on synthetic data, including when they break."""),
            ("Best Windows in Bangladesh Time", """
| Window (BD, US/UK summer)  | Why it matters                                                       |
| -------------------------- | -------------------------------------------------------------------- |
| 1:00 PM onward             | London open: first large liquidity of the day                        |
| 6:00 PM onward             | New York open: usually the most active gold hours                    |
| 6:30 PM                    | US data releases (8:30 AM New York): spikes and fast reversals       |

Add one hour in winter. Gold is quieter in the Asian session, and **spreads can widen** around news and at rollover. Many beginners trade one window only. See [Best Trading Times in Bangladesh](/en/forex-sessions/best-trading-times-bd)."""),
        ],
        example="""
Gold sweeps the equal lows at **2,030.00** at the New York open and closes back above. Plan: buy **2,040.00**, stop **2,030.00** (10.00 below), target **2,070.00** (30.00 above): risk 10, reward 30, **1 : 3.0** planned. With a 10,000 account at 1% risk (100): lot size = 100 ÷ (10.00 × 100 oz) = **0.10 lot**. If price closes below **2,030.00**, the sweep idea is wrong.""",
        mistakes=[["Using a forex-sized stop on gold", "Gold swings are larger: size the stop to the market, then the lot to the stop"], ["Trading through major US data", "Stand aside or reduce size around releases"], ["Ignoring the spread at the open", "Check the spread before entering"], ["Over-leveraging because the stop is small in points", "Compute risk in dollars per lot"]],
        practice=["Find your broker's gold contract specification and write down the lot size and pip value.", "Measure gold's average daily range over 30 days in dollars.", "Compute the lot size for 1% risk and a stop of one quarter of the daily range."],
        summary=[["Contract", "100 oz per standard lot; 1.00 move = 100 USD per lot"], ["Drivers", "Dollar, real rates, risk sentiment, central banks, scheduled data"], ["Windows", "London from 1:00 PM and New York from 6:00 PM BD in summer"], ["Risk", "Compute size from the stop in dollars"]],
        related=[("/intermarket/gold-dollar-bonds", "Gold, the Dollar and Bonds"), ("/ict/liquidity-sweep", "Liquidity Sweep"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh"), ("/blog/position-sizing-101", "Position Sizing 101")],
        fig_alt="A synthetic gold chart where price sweeps a pair of equal lows and closes back above",
        fig_note="Synthetic candles for teaching; not real gold prices", fig_label="Liquidity Sweep"),
    bn=dict(
        title="স্বর্ণ (XAU/USD) ট্রেড — কন্ট্রাক্ট সাইজ, চালক, সেশন ও ঝুঁকি",
        description="মার্কিন ডলারের বিপরীতে স্বর্ণ ট্রেডের ব্যবহারিক ভূমিকা: কন্ট্রাক্ট কীভাবে কোট ও সাইজ হয় (১ স্ট্যান্ডার্ড লট = ১০০ আউন্স), প্রাইসকে কী চালায়, সেরা বাংলাদেশ-সময়ের উইন্ডো, কেন ফরেক্স পেয়ারের চেয়ে Stop চওড়া হতে হয়, আর ১% ঝুঁকির ট্রেডের পজিশন সাইজ হিসাব।",
        intro="**XAU/USD** এক ট্রয় আউন্স স্বর্ণের দাম মার্কিন ডলারে কোট করে। বেশিরভাগ প্ল্যাটফর্মে এটি কারেন্সি পেয়ারের মতো ট্রেড হয় কিন্তু আচরণ ভিন্ন: এটি চলে **প্রতি আউন্সে ডলারে**, মেজর পেয়ারের চেয়ে দোলা বড়, আর ভিন্ন চালকে সাড়া দেয়। এই গাইডে প্রথম ট্রেডের আগে নতুনদের দরকারি মৌলিক বিষয় আছে।",
        fix="মূল লেখায় স্বর্ণকে \"নিরাপদ আশ্রয় যা সংকটে সবসময় বাড়ে\" বলা হয়েছিল এবং সেটআপের নির্ভুল নির্ভরযোগ্যতার সংখ্যা ছিল। কিছু সংকটে স্বর্ণ পড়েছে, শান্ত সময়ে বেড়েছে, আর কোনো সেটআপের স্থির সম্ভাবনা নেই। নিচের ধারণাগুলো পরীক্ষার প্রবণতা।",
        sections=[
            ("কন্ট্রাক্ট সাইজ ও পিপ মান", """
| বিষয়                                | মান (বেশিরভাগ ব্রোকার; আপনারটি যাচাই করুন)                                 |
| ----------------------------------- | ----------------------------------------------------------------- |
| কোট                               | প্রতি ট্রয় আউন্সে মার্কিন ডলার (যেমন ২,০৪০.০০)                  |
| ১ স্ট্যান্ডার্ড লট                      | ১০০ ট্রয় আউন্স                                                   |
| ১.০০ প্রাইস মুভে লাভ         | প্রতি স্ট্যান্ডার্ড লটে ১০০ USD                                          |
| ১০.০০ মুভে লাভ              | প্রতি স্ট্যান্ডার্ড লটে ১,০০০ USD (প্রতি ০.১০ লটে ১০০ USD)                 |

স্বর্ণের "পিপ" বা "পয়েন্ট" কী তা নিয়ে ব্রোকার ভিন্ন, তাই **প্রাইস মুভ ডলারে ভাবুন** আর ট্রেডের আগে কন্ট্রাক্ট স্পেসিফিকেশন দেখুন।"""),
            ("স্বর্ণকে কী চালায়", """
| চালক                     | সাধারণ প্রবণতা (নিয়ম নয়)                                                    |
| -------------------------- | ------------------------------------------------------------------------------- |
| **মার্কিন ডলার**              | শক্তিশালী ডলার প্রায়ই স্বর্ণে চাপ দেয়, আর উল্টোটা                           |
| **Real সুদের হার**    | উচ্চ Real Yield প্রায়ই স্বর্ণে চাপ দেয়, তবে সম্পর্ক কখনো দুর্বল হয়েছে      |
| **ঝুঁকি-মনোভাব**         | চাপের সময় প্রায়ই স্বর্ণ কেনা হয়, প্রতিবার নয়                           |
| **সেন্ট্রাল ব্যাংক চাহিদা**    | বড় ক্রয় দামকে সমর্থন দিতে পারে                                              |
| **নির্ধারিত ডেটা**         | মার্কিন মূল্যস্ফীতি, চাকরি ও সেন্ট্রাল ব্যাংক সিদ্ধান্ত তীব্রভাবে নাড়ায়                   |

এই সম্পর্কগুলোর সিন্থেটিক ডেটায় পরীক্ষা, ভাঙার সময়সহ, [Gold, the Dollar and Bonds](/bn/intermarket/gold-dollar-bonds) এ দেখুন।"""),
            ("বাংলাদেশ সময়ে সেরা উইন্ডো", """
| উইন্ডো (BD, US/UK Summer)  | কেন গুরুত্বপূর্ণ                                                       |
| -------------------------- | -------------------------------------------------------------------- |
| দুপুর ১:০০ থেকে             | London খোলা: দিনের প্রথম বড় লিকুইডিটি                        |
| সন্ধ্যা ৬:০০ থেকে            | New York খোলা: সাধারণত স্বর্ণের সবচেয়ে সক্রিয় ঘণ্টা                    |
| সন্ধ্যা ৬:৩০              | মার্কিন ডেটা রিলিজ (New York এ সকাল ৮:৩০): স্পাইক ও দ্রুত রিভার্সাল       |

Winter এ এক ঘণ্টা যোগ করুন। এশিয়ান সেশনে স্বর্ণ শান্ত, আর নিউজ ও রোলওভারে **স্প্রেড বাড়তে পারে**। অনেক নতুন একটি উইন্ডোতেই ট্রেড করেন। [Best Trading Times in Bangladesh](/bn/forex-sessions/best-trading-times-bd) দেখুন।"""),
        ],
        example="""
New York খোলায় স্বর্ণ **2,030.00** এর Equal Low Sweep করে উপরে ফিরে Close করে। পরিকল্পনা: **2,040.00** এ Buy, Stop **2,030.00** (১০.০০ নিচে), টার্গেট **2,070.00** (৩০.০০ উপরে): রিস্ক ১০, রিওয়ার্ড ৩০, পরিকল্পিত **১ : ৩.০**। ১০,০০০ অ্যাকাউন্টে ১% ঝুঁকিতে (১০০): লট সাইজ = ১০০ ÷ (১০.০০ × ১০০ oz) = **০.১০ লট**। প্রাইস **2,030.00** এর নিচে Close করলে Sweep ধারণা ভুল।""",
        mistakes=[["স্বর্ণে ফরেক্স-আকারের Stop ব্যবহার", "স্বর্ণের দোলা বড়: আগে মার্কেট অনুযায়ী Stop, তারপর Stop অনুযায়ী লট"], ["বড় মার্কিন ডেটার সময় ট্রেড", "রিলিজের সময় সরে থাকুন বা সাইজ কমান"], ["খোলায় স্প্রেড উপেক্ষা", "এন্ট্রির আগে স্প্রেড দেখুন"], ["পয়েন্টে Stop ছোট বলে অতিরিক্ত লিভারেজ", "প্রতি লটে ডলারে ঝুঁকি হিসাব করুন"]],
        practice=["আপনার ব্রোকারের স্বর্ণ কন্ট্রাক্ট স্পেসিফিকেশন দেখে লট সাইজ ও পিপ মান লিখুন।", "৩০ দিনে স্বর্ণের গড় দৈনিক রেঞ্জ ডলারে মাপুন।", "১% ঝুঁকি ও দৈনিক রেঞ্জের এক-চতুর্থাংশ Stop এ লট সাইজ হিসাব করুন।"],
        summary=[["কন্ট্রাক্ট", "প্রতি স্ট্যান্ডার্ড লটে ১০০ oz; ১.০০ মুভ = প্রতি লটে ১০০ USD"], ["চালক", "ডলার, Real সুদের হার, ঝুঁকি-মনোভাব, সেন্ট্রাল ব্যাংক, নির্ধারিত ডেটা"], ["উইন্ডো", "Summer এ London দুপুর ১:০০ ও New York সন্ধ্যা ৬:০০ BD থেকে"], ["ঝুঁকি", "ডলারে Stop থেকে সাইজ হিসাব করুন"]],
        related=[("/intermarket/gold-dollar-bonds", "Gold, the Dollar and Bonds"), ("/ict/liquidity-sweep", "Liquidity Sweep"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh"), ("/blog/position-sizing-101", "Position Sizing 101")],
        fig_alt="একটি সিন্থেটিক স্বর্ণ চার্ট যেখানে প্রাইস এক জোড়া Equal Low Sweep করে উপরে ফিরে Close করে",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল; আসল স্বর্ণের দাম নয়", fig_label="Liquidity Sweep"),
)
