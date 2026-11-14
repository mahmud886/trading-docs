SPEC = dict(
    fm=dict(date="2026-05-19", category="Trading Strategy", tags=["strategy", "top-down", "smc", "ict", "execution"], reading=9, featured=True),
    fig=dict(img="/images/smc/advanced-execution-models/execution-models-dark.webp", video="/videos/smc/execution-models-explainer-dark.mp4", lesson="/smc/advanced-execution-models"),
    en=dict(
        title="A Complete Top-Down Trading Strategy — From Bias to Management",
        description="A seven-step framework that joins higher-timeframe bias, a liquidity map, a point of interest, session timing, lower-timeframe confirmation, risk and trade management into one written plan, with a worked EUR/USD example sized at 1% risk and a 1:3 planned reward.",
        intro="A strategy is a **written sequence of decisions** that you can follow the same way every time. This post joins the ideas from the SMC and ICT lessons into one top-down plan. It is a template to test and adapt, not a system with a known win rate.",
        fix="The original described a \"complete\" strategy with firm probabilities and institutional framing. No such numbers are proven, so they are removed: treat every step as a hypothesis, test it on your own data, and keep records.",
        sections=[
            ("The Seven Steps", """
| Step                      | Question                                                                         | Tool                                                      |
| ------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 1. **Bias**               | Which direction does the higher timeframe favour today?                           | Structure, previous day's high/low, premium or discount   |
| 2. **Liquidity map**      | Where are the obvious stops (equal highs/lows, session highs/lows)?               | [Liquidity Pools](/en/smc/liquidity-pools)                |
| 3. **Point of interest**  | Which zone could produce a reaction (order block, FVG, OTE)?                      | [Order Blocks](/en/smc/order-blocks), [FVG](/en/smc/fair-value-gap) |
| 4. **Timing**             | Is it inside your trading window?                                                 | [Kill Zones in BD time](/en/forex-sessions/kill-zones)    |
| 5. **Confirmation**       | Did a lower-timeframe shift appear at the zone?                                   | [Entry Confirmation](/en/smc/entry-confirmation)          |
| 6. **Risk**               | Where is the structural stop, and what size gives your fixed risk?                | [Risk Models](/en/smc/risk-models)                        |
| 7. **Management**         | Where do you take partial profit, move the stop, or exit early?                   | [Trade Management](/en/price-action/trade-management)     |

Each step can say **no**. A plan with no filters trades everything; a plan with seven honest filters trades rarely and is easier to evaluate. The chart shows how these execution models combine in the [Advanced Execution Models](/en/smc/advanced-execution-models) lesson."""),
            ("Writing the Plan Down", """
A plan is only useful if you can check it afterwards. Write one line per step, for example:

| Step           | Example entry in the plan                                               |
| -------------- | ----------------------------------------------------------------------- |
| Bias           | Daily structure bullish; price in discount of the weekly range           |
| Liquidity      | Asian-session low and equal lows below price                            |
| Zone           | A bullish fair value gap after the sweep                                |
| Timing         | London open, 1:00 PM BD in summer (2:00 PM in winter)                   |
| Confirmation   | A 5-minute close above the last lower high                              |
| Risk           | Stop below the sweep low; 1% of the account                             |
| Management     | Half off at 1R, stop to break-even, rest at the prior high              |"""),
            ("Risk and Management", """
Risk per trade is set **before** the trade, from the stop distance: position size = (account × risk %) ÷ (stop in pips × pip value). Keep it fixed (for example 1%) so one loss never decides the month. See [Position Sizing 101](/en/blog/position-sizing-101).

For management, decide the exit rules in advance: partial profit levels, when the stop moves, and a time stop. Changing them mid-trade is where plans turn into guesses."""),
        ],
        example="""
EUR/USD, London open (1:00 PM BD, summer). Daily bias bullish. Price sweeps the Asian low at **1.0828**, closes back above the last lower high on the 5-minute chart and leaves a bullish fair value gap between **1.0836** and **1.0842**. Plan: buy **1.0840**, stop **1.0822** (below the sweep low): risk 18 pips; target **1.0894** (the prior high): reward 54 pips, **1 : 3.0** planned. On a 10,000 account with 1% risk (100), the size is 100 ÷ 18 = about 5.6 per pip (0.56 standard lot). If price closes below **1.0822**, the idea is cancelled.""",
        mistakes=[["Skipping steps when a setup looks exciting", "A step that can't say no isn't a filter: follow all seven"], ["Changing the plan mid-trade", "Write the management rules first"], ["Ignoring timing and trading any hour", "Trade only your planned window"], ["Copying a plan without testing it", "Back-test and forward-test on your market"]],
        practice=["Write your own seven-line plan, one line per step.", "Mark five past trades and check whether each step was satisfied.", "Compute the position size for a 1% risk and a 20-pip stop on your account."],
        summary=[["Framework", "Bias, liquidity, zone, timing, confirmation, risk, management"], ["Rule", "Every step can say no; write the plan down"], ["Sizing", "Fixed risk per trade from the stop distance"], ["Status", "A template to test, not a system with proven odds"]],
        related=[("/smc/advanced-execution-models", "Advanced Execution Models"), ("/ict/daily-bias", "Daily Bias"), ("/smc/entry-confirmation", "Entry Confirmation"), ("/blog/trade-execution-checklist", "Trade Execution Checklist")],
        fig_alt="A chart of combined execution models for a trade: bias, a liquidity sweep, a zone, and lower-timeframe confirmation",
        fig_note="Synthetic candles for teaching", fig_label="Advanced Execution Models"),
    bn=dict(
        title="একটি সম্পূর্ণ টপ-ডাউন ট্রেডিং স্ট্র্যাটেজি — বায়াস থেকে ব্যবস্থাপনা",
        description="সাত ধাপের ফ্রেমওয়ার্ক যা হায়ার-টাইমফ্রেম বায়াস, লিকুইডিটি ম্যাপ, পয়েন্ট অফ ইন্টারেস্ট, সেশন টাইমিং, লোয়ার-টাইমফ্রেম নিশ্চিতকরণ, ঝুঁকি ও ট্রেড ব্যবস্থাপনাকে একটি লিখিত পরিকল্পনায় জোড়ে — ১% ঝুঁকি ও ১:৩ পরিকল্পিত রিওয়ার্ডে সাইজ করা EUR/USD উদাহরণসহ।",
        intro="স্ট্র্যাটেজি হলো **সিদ্ধান্তের লিখিত ক্রম** যা প্রতিবার একইভাবে অনুসরণ করা যায়। এই পোস্ট SMC ও ICT লেসনের ধারণাগুলোকে একটি টপ-ডাউন পরিকল্পনায় জোড়ে। এটি পরীক্ষা ও মানিয়ে নেওয়ার টেমপ্লেট, জানা জয়ের হারের সিস্টেম নয়।",
        fix="মূল লেখায় দৃঢ় সম্ভাবনা ও প্রাতিষ্ঠানিক ফ্রেমিংসহ \"সম্পূর্ণ\" স্ট্র্যাটেজি বর্ণনা ছিল। এমন কোনো সংখ্যা প্রমাণিত নয়, তাই সরানো হয়েছে: প্রতিটি ধাপকে অনুমান ধরুন, নিজের ডেটায় পরীক্ষা করুন, আর রেকর্ড রাখুন।",
        sections=[
            ("সাত ধাপ", """
| ধাপ                      | প্রশ্ন                                                                         | সরঞ্জাম                                                      |
| ------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------- |
| ১. **বায়াস**               | আজ হায়ার টাইমফ্রেম কোন দিক সমর্থন করে?                           | স্ট্রাকচার, আগের দিনের High/Low, Premium বা Discount   |
| ২. **লিকুইডিটি ম্যাপ**      | সুস্পষ্ট Stop কোথায় (Equal High/Low, সেশন High/Low)?               | [Liquidity Pools](/bn/smc/liquidity-pools)                |
| ৩. **পয়েন্ট অফ ইন্টারেস্ট**  | কোন জোন প্রতিক্রিয়া দিতে পারে (Order Block, FVG, OTE)?                      | [Order Blocks](/bn/smc/order-blocks), [FVG](/bn/smc/fair-value-gap) |
| ৪. **টাইমিং**             | এটি কি আপনার ট্রেডিং উইন্ডোর ভেতরে?                                                 | [BD সময়ে Kill Zone](/bn/forex-sessions/kill-zones)    |
| ৫. **নিশ্চিতকরণ**       | জোনে কি লোয়ার-টাইমফ্রেম শিফট এসেছে?                                   | [Entry Confirmation](/bn/smc/entry-confirmation)          |
| ৬. **ঝুঁকি**               | স্ট্রাকচারাল Stop কোথায়, আর কত সাইজ আপনার স্থির ঝুঁকি দেয়?                | [Risk Models](/bn/smc/risk-models)                        |
| ৭. **ব্যবস্থাপনা**         | আংশিক মুনাফা কোথায়, Stop কখন সরবে, বা আগে কখন বেরোবেন?                   | [Trade Management](/bn/price-action/trade-management)     |

প্রতিটি ধাপ **না** বলতে পারে। ফিল্টারহীন পরিকল্পনা সবকিছু ট্রেড করে; সাতটি সৎ ফিল্টারের পরিকল্পনা কদাচিৎ ট্রেড করে আর মূল্যায়ন সহজ। চার্টে এই এক্সিকিউশন মডেলগুলো কীভাবে মেলে তা [Advanced Execution Models](/bn/smc/advanced-execution-models) লেসনে আছে।"""),
            ("পরিকল্পনা লিখে রাখা", """
পরিকল্পনা কাজের তখনই যখন পরে মিলিয়ে দেখা যায়। প্রতি ধাপে এক লাইন লিখুন, যেমন:

| ধাপ           | পরিকল্পনায় উদাহরণ এন্ট্রি                                               |
| -------------- | ----------------------------------------------------------------------- |
| বায়াস           | ডেইলি স্ট্রাকচার বুলিশ; প্রাইস সাপ্তাহিক রেঞ্জের Discount এ           |
| লিকুইডিটি      | প্রাইসের নিচে এশিয়ান-সেশন Low ও Equal Low                            |
| জোন           | Sweep এর পর বুলিশ Fair Value Gap                                |
| টাইমিং         | London খোলা, Summer এ দুপুর ১:০০ BD (Winter এ ২:০০)                   |
| নিশ্চিতকরণ   | শেষ Lower High এর উপরে ৫-মিনিটের Close                           |
| ঝুঁকি           | Sweep Low এর নিচে Stop; অ্যাকাউন্টের ১%                             |
| ব্যবস্থাপনা     | ১R এ অর্ধেক বের, Stop Break-even এ, বাকিটা আগের High এ              |"""),
            ("ঝুঁকি ও ব্যবস্থাপনা", """
ট্রেডপ্রতি ঝুঁকি ট্রেডের **আগে**, Stop দূরত্ব থেকে ঠিক হয়: পজিশন সাইজ = (অ্যাকাউন্ট × ঝুঁকি %) ÷ (পিপে Stop × পিপ মান)। এটি স্থির রাখুন (যেমন ১%) যাতে একটি লোকসান কখনো মাসের ফল ঠিক না করে। [Position Sizing 101](/bn/blog/position-sizing-101) দেখুন।

ব্যবস্থাপনার জন্য আগে নিয়ম ঠিক করুন: আংশিক মুনাফার লেভেল, Stop কখন সরবে, আর টাইম-স্টপ। ট্রেডের মাঝে বদলালেই পরিকল্পনা অনুমানে পরিণত হয়।"""),
        ],
        example="""
EUR/USD, London খোলা (দুপুর ১:০০ BD, Summer)। ডেইলি বায়াস বুলিশ। প্রাইস **1.0828** এ এশিয়ান Low Sweep করে, ৫-মিনিটের চার্টে শেষ Lower High এর উপরে ফিরে Close করে এবং **1.0836** ও **1.0842** এর মাঝে বুলিশ Fair Value Gap রেখে যায়। পরিকল্পনা: **1.0840** এ Buy, Stop **1.0822** (Sweep Low এর নিচে): রিস্ক ১৮ পিপ; টার্গেট **1.0894** (আগের High): রিওয়ার্ড ৫৪ পিপ, পরিকল্পিত **১ : ৩.০**। ১,০০০০ অ্যাকাউন্টে ১% ঝুঁকিতে (১০০) সাইজ ১০০ ÷ ১৮ = প্রায় প্রতি পিপে ৫.৬ (০.৫৬ স্ট্যান্ডার্ড লট)। প্রাইস **1.0822** এর নিচে Close করলে ধারণা বাতিল।""",
        mistakes=[["উত্তেজনাপূর্ণ সেটআপ দেখে ধাপ এড়ানো", "যে ধাপ না বলতে পারে না তা ফিল্টার নয়: সাতটিই মানুন"], ["ট্রেডের মাঝে পরিকল্পনা বদলানো", "আগে ব্যবস্থাপনার নিয়ম লিখুন"], ["টাইমিং উপেক্ষা করে যেকোনো ঘণ্টায় ট্রেড", "শুধু পরিকল্পিত উইন্ডোতে ট্রেড করুন"], ["পরীক্ষা না করে পরিকল্পনা নকল", "আপনার মার্কেটে ব্যাকটেস্ট ও ফরওয়ার্ড টেস্ট করুন"]],
        practice=["এক-দুই বাক্যে নিজের সাত-লাইনের পরিকল্পনা লিখুন, প্রতি ধাপে এক লাইন।", "পাঁচটি পুরোনো ট্রেড চিহ্নিত করে প্রতিটিতে প্রতি ধাপ পূরণ হয়েছিল কি না দেখুন।", "আপনার অ্যাকাউন্টে ১% ঝুঁকি ও ২০-পিপ Stop এর পজিশন সাইজ হিসাব করুন।"],
        summary=[["ফ্রেমওয়ার্ক", "বায়াস, লিকুইডিটি, জোন, টাইমিং, নিশ্চিতকরণ, ঝুঁকি, ব্যবস্থাপনা"], ["নিয়ম", "প্রতিটি ধাপ না বলতে পারে; পরিকল্পনা লিখে রাখুন"], ["সাইজিং", "Stop দূরত্ব থেকে ট্রেডপ্রতি স্থির ঝুঁকি"], ["অবস্থা", "পরীক্ষার টেমপ্লেট, প্রমাণিত সম্ভাবনার সিস্টেম নয়"]],
        related=[("/smc/advanced-execution-models", "Advanced Execution Models"), ("/ict/daily-bias", "Daily Bias"), ("/smc/entry-confirmation", "Entry Confirmation"), ("/blog/trade-execution-checklist", "Trade Execution Checklist")],
        fig_alt="একটি ট্রেডের মিলিত এক্সিকিউশন মডেলের চার্ট: বায়াস, লিকুইডিটি Sweep, জোন ও লোয়ার-টাইমফ্রেম নিশ্চিতকরণ",
        fig_note="শেখানোর জন্য সিন্থেটিক ক্যান্ডেল", fig_label="Advanced Execution Models"),
)
