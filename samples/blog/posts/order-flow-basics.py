SPEC = dict(
    fm=dict(date="2026-05-13", category="SMC", tags=["order-flow", "volume", "footprint", "execution", "liquidity"], reading=7, featured=True),
    fig=dict(img="/images/order-flow/introduction/inside-one-candle-dark.webp", video="/videos/order-flow/inside-one-candle-explainer-dark.mp4", lesson="/order-flow/introduction"),
    en=dict(
        title="Order Flow Basics — What Is Inside a Candle",
        description="What order flow is and isn't: aggressive versus passive orders, volume at price, delta, the point of control and the main tools (DOM, volume profile, VWAP, footprint), what data you need, and why spot forex has limits. A worked futures example with a 1 to 3.7 planned reward-to-risk.",
        intro="A candle shows four prices: open, high, low and close. **Order flow** looks at the **trades inside it**: how much traded at each price, and whether buyers or sellers were the aggressors. It adds information about *how* price moved. It does not reveal who is trading or why.",
        fix="The original said order flow shows \"institutional activity\" and implied it works the same in spot forex. Order flow shows executed volume and, on some platforms, resting orders. Spot forex has no central exchange, so real order flow tools are best used on **futures** (for example 6E for EUR/USD).",
        sections=[
            ("The Vocabulary", """
| Term                        | Meaning                                                                    |
| --------------------------- | -------------------------------------------------------------------------- |
| **Aggressive buyer**        | A market buy that hits the **ask**; takes liquidity                        |
| **Aggressive seller**       | A market sell that hits the **bid**; takes liquidity                       |
| **Passive orders**          | Limit orders waiting in the book; provide liquidity                        |
| **Volume at price**         | How many contracts traded at each price                                    |
| **Delta**                   | Volume bought at the ask minus volume sold at the bid                      |
| **Point of control (POC)**  | The price with the most volume                                             |

In the [Introduction to Order Flow](/en/order-flow/introduction) lesson, a synthetic 5-minute candle opens 1.0852 and closes 1.0857; the volume at 1.0854 (800 contracts) is its POC, 2,500 contracts were bought at the ask and 1,650 sold at the bid, so delta is **+850**: net aggressive buying that agrees with the rising candle."""),
            ("The Main Tools", """
| Tool               | What it shows                                  | Lesson                                                      |
| ------------------ | ---------------------------------------------- | ----------------------------------------------------------- |
| DOM / Level 2      | Resting limit orders at each price             | [DOM and Level 2](/en/order-flow/dom-level2)                |
| Volume profile     | Volume by price over a period                  | [Volume Profile](/en/order-flow/volume-profile)             |
| VWAP               | Volume-weighted average price                  | [VWAP](/en/order-flow/vwap)                                 |
| Delta              | Buy minus sell volume                          | [Delta Analysis](/en/order-flow/delta-analysis)             |
| Footprint          | Bid and ask volume at each price in each candle | [Footprint Charts](/en/order-flow/footprint-charts)        |

Start with volume profile and VWAP (the simplest), add delta, and use footprint and DOM last."""),
            ("What Data You Need", """
| Market                    | Order-flow data                                                              |
| ------------------------- | ---------------------------------------------------------------------------- |
| Futures (6E, ES, GC)      | Centralised exchange data: real volume, trade-by-trade bid/ask, one book     |
| Stocks                    | Exchange data with real volume, fragmented across venues                     |
| **Spot forex**            | No central exchange: broker volume is **tick volume** or that broker's flow  |

Order flow **confirms**; it does not replace structure, levels and a plan."""),
        ],
        example="""
6E (EUR/USD futures) pulls back to a daily support at **1.0850**. A 5-minute candle shows heavy selling at the bid (1,800 contracts) but the low holds, and the next candle's delta is **+620** with a close above **1.0854**. Plan: buy **1.0855**, stop **1.0846** (below support): risk 9 pips; target **1.0888**: reward 33 pips, **1 : 3.7** planned. The order-flow evidence only adds to a level you had already marked.""",
        mistakes=[["Using tick volume as exchange volume", "Know what your data is"], ["Trading order flow without a level", "Mark levels and structure first"], ["Reading many tools at once", "Use one or two for a month"], ["Trusting one candle's delta", "Look at several candles and the level"]],
        practice=["On a futures chart or replay, pick one candle and write its volume by price, POC and delta.", "Compare the candle's colour with its delta.", "Note what the next candle did at that level."],
        summary=[["Order flow", "Executed trades inside the candles"], ["Delta", "Bought at the ask minus sold at the bid"], ["Data", "Best on futures; spot forex has no central book"], ["Use", "Confirmation, not a replacement for analysis"]],
        related=[("/order-flow/introduction", "Introduction to Order Flow"), ("/order-flow/volume-profile", "Volume Profile"), ("/order-flow/delta-analysis", "Delta Analysis"), ("/order-flow/footprint-charts", "Footprint Charts")],
        fig_alt="A synthetic 5-minute futures candle with the volume at each price split into sold at the bid and bought at the ask, with the point of control and delta marked",
        fig_note="Synthetic data (contracts at nine price levels)", fig_label="Introduction to Order Flow"),
    bn=dict(
        title="Order Flow Basics — ক্যান্ডেলের ভেতরে কী আছে",
        description="Order Flow কী ও কী নয়: Aggressive বনাম Passive অর্ডার, প্রাইসে ভলিউম, Delta, Point of Control ও প্রধান সরঞ্জাম (DOM, Volume Profile, VWAP, Footprint), কী ডেটা লাগে, আর কেন স্পট ফরেক্সের সীমা আছে। ১ : ৩.৭ পরিকল্পিত রিওয়ার্ড-টু-রিস্কে ফিউচার্স উদাহরণসহ।",
        intro="একটি ক্যান্ডেল চারটি দাম দেখায়: Open, High, Low ও Close। **Order Flow** দেখে এর **ভেতরের ট্রেডগুলো**: প্রতিটি দামে কত ট্রেড হয়েছে, আর ক্রেতা না বিক্রেতা আগ্রাসী ছিল। এটি প্রাইস *কীভাবে* নড়েছে সে তথ্য যোগ করে। কে ট্রেড করছে বা কেন, তা প্রকাশ করে না।",
        fix="মূল লেখায় বলা হয়েছিল Order Flow \"প্রাতিষ্ঠানিক কার্যকলাপ\" দেখায় এবং ইঙ্গিত ছিল স্পট ফরেক্সেও একইভাবে কাজ করে। Order Flow Executed ভলিউম ও কিছু প্ল্যাটফর্মে Resting অর্ডার দেখায়। স্পট ফরেক্সে কেন্দ্রীয় এক্সচেঞ্জ নেই, তাই আসল Order Flow সরঞ্জাম **ফিউচার্সে** (যেমন EUR/USD এর জন্য 6E) ব্যবহার করাই ভালো।",
        sections=[
            ("শব্দভান্ডার", """
| শব্দ                        | অর্থ                                                                    |
| --------------------------- | -------------------------------------------------------------------------- |
| **Aggressive ক্রেতা**        | **Ask** এ আঘাত করা মার্কেট Buy; লিকুইডিটি নেয়                        |
| **Aggressive বিক্রেতা**       | **Bid** এ আঘাত করা মার্কেট Sell; লিকুইডিটি নেয়                       |
| **Passive অর্ডার**          | বুকে অপেক্ষারত Limit অর্ডার; লিকুইডিটি দেয়                        |
| **প্রাইসে ভলিউম**         | প্রতিটি দামে কত কন্ট্রাক্ট ট্রেড হয়েছে                                    |
| **Delta**                   | Ask এ কেনা ভলিউম মাইনাস Bid এ বেচা ভলিউম                      |
| **Point of Control (POC)**  | সবচেয়ে বেশি ভলিউমের দাম                                             |

[Introduction to Order Flow](/bn/order-flow/introduction) লেসনে একটি সিন্থেটিক ৫-মিনিটের ক্যান্ডেল 1.0852 এ খোলে আর 1.0857 এ Close করে; 1.0854 এ ভলিউম (৮০০ কন্ট্রাক্ট) এর POC, Ask এ ২,৫০০ কন্ট্রাক্ট কেনা ও Bid এ ১,৬৫০ বেচা, তাই Delta **+৮৫০**: ওঠা ক্যান্ডেলের সাথে মেলা নেট আগ্রাসী ক্রয়।"""),
            ("প্রধান সরঞ্জাম", """
| সরঞ্জাম               | কী দেখায়                                  | লেসন                                                      |
| ------------------ | ---------------------------------------------- | ----------------------------------------------------------- |
| DOM / Level 2      | প্রতিটি দামে Resting Limit অর্ডার             | [DOM and Level 2](/bn/order-flow/dom-level2)                |
| Volume Profile     | একটি সময়কালে দাম অনুযায়ী ভলিউম                  | [Volume Profile](/bn/order-flow/volume-profile)             |
| VWAP               | ভলিউম-ভারিত গড় দাম                  | [VWAP](/bn/order-flow/vwap)                                 |
| Delta              | Buy মাইনাস Sell ভলিউম                          | [Delta Analysis](/bn/order-flow/delta-analysis)             |
| Footprint          | প্রতিটি ক্যান্ডেলে প্রতিটি দামে Bid ও Ask ভলিউম | [Footprint Charts](/bn/order-flow/footprint-charts)        |

Volume Profile ও VWAP (সবচেয়ে সরল) দিয়ে শুরু করুন, Delta যোগ করুন, আর Footprint ও DOM শেষে ব্যবহার করুন।"""),
            ("কী ডেটা লাগে", """
| মার্কেট                    | Order-flow ডেটা                                                              |
| ------------------------- | ---------------------------------------------------------------------------- |
| ফিউচার্স (6E, ES, GC)      | কেন্দ্রীয় এক্সচেঞ্জ ডেটা: আসল ভলিউম, ট্রেড-বাই-ট্রেড Bid/Ask, একটি বুক     |
| স্টক                    | আসল ভলিউমসহ এক্সচেঞ্জ ডেটা, ভেন্যু জুড়ে বিভক্ত                     |
| **স্পট ফরেক্স**            | কেন্দ্রীয় এক্সচেঞ্জ নেই: ব্রোকারের ভলিউম **Tick Volume** বা ওই ব্রোকারের ফ্লো  |

Order Flow **নিশ্চিত করে**; স্ট্রাকচার, লেভেল ও পরিকল্পনার জায়গা নেয় না।"""),
        ],
        example="""
6E (EUR/USD ফিউচার্স) ডেইলি Support **1.0850** এ পুলব্যাক করে। ৫-মিনিটের ক্যান্ডেল Bid এ ভারী বিক্রি (১,৮০০ কন্ট্রাক্ট) দেখায় কিন্তু Low টিকে যায়, আর পরের ক্যান্ডেলের Delta **+৬২০** এবং **1.0854** এর উপরে Close। পরিকল্পনা: **1.0855** এ Buy, Stop **1.0846** (Support এর নিচে): রিস্ক ৯ পিপ; টার্গেট **1.0888**: রিওয়ার্ড ৩৩ পিপ, পরিকল্পিত **১ : ৩.৭**। Order-flow প্রমাণ শুধু আগে চিহ্নিত লেভেলের সাথে যোগ হয়।""",
        mistakes=[["Tick Volume কে এক্সচেঞ্জ ভলিউম ধরা", "আপনার ডেটা কী তা জানুন"], ["লেভেল ছাড়া Order Flow ট্রেড", "আগে লেভেল ও স্ট্রাকচার চিহ্নিত করুন"], ["একসাথে অনেক সরঞ্জাম পড়া", "এক মাস এক-দুটি ব্যবহার করুন"], ["একটি ক্যান্ডেলের Delta তে ভরসা", "কয়েকটি ক্যান্ডেল ও লেভেল দেখুন"]],
        practice=["ফিউচার্স চার্ট বা রিপ্লেতে একটি ক্যান্ডেল বেছে দাম অনুযায়ী ভলিউম, POC ও Delta লিখুন।", "ক্যান্ডেলের রং ও Delta তুলনা করুন।", "সেই লেভেলে পরের ক্যান্ডেল কী করেছে লিখুন।"],
        summary=[["Order Flow", "ক্যান্ডেলের ভেতরের Executed ট্রেড"], ["Delta", "Ask এ কেনা মাইনাস Bid এ বেচা"], ["ডেটা", "ফিউচার্সে ভালো; স্পট ফরেক্সে কেন্দ্রীয় বুক নেই"], ["ব্যবহার", "নিশ্চিতকরণ, বিশ্লেষণের বিকল্প নয়"]],
        related=[("/order-flow/introduction", "Introduction to Order Flow"), ("/order-flow/volume-profile", "Volume Profile"), ("/order-flow/delta-analysis", "Delta Analysis"), ("/order-flow/footprint-charts", "Footprint Charts")],
        fig_alt="একটি সিন্থেটিক ৫-মিনিটের ফিউচার্স ক্যান্ডেল, প্রতিটি দামে ভলিউম Bid এ বেচা ও Ask এ কেনায় ভাগ করা, POC ও Delta চিহ্নিত",
        fig_note="সিন্থেটিক ডেটা (নয়টি প্রাইস লেভেলে কন্ট্রাক্ট)", fig_label="Introduction to Order Flow"),
)
