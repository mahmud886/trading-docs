SPEC = dict(
    fm=dict(date="2026-04-25", category="ICT", tags=["ict", "kill-zones", "sessions", "time-based"], reading=6, featured=True),
    fig=dict(img="/images/ict/ict-kill-zones/kill-zone-clock-dark.webp", video="/videos/ict/kill-zones-explainer-dark.mp4", lesson="/ict/ict-kill-zones"),
    en=dict(
        title="ICT Kill Zones Explained — Why Time of Day Matters",
        description="Why trading activity clusters at certain hours (markets open, data is released), how ICT labels those hours as kill zones, how to use a window as a filter rather than a signal, and a worked New York kill-zone example around the 6:30 PM Bangladesh-time US data release.",
        intro="Price does not move evenly through the day. Activity rises when a major centre opens or when scheduled data is released. ICT's **kill zones** give names to those busier hours so a trader can decide **when to be at the screen**. They work as a filter on time, not as a signal.",
        fix="The original said that most daily moves \"always\" start inside kill zones and gave exact probabilities. We found no support for that. Activity does cluster around opens and data releases; how reliably a given window produces a tradeable setup should be measured on your own market and journal.",
        sections=[
            ("Why Hours Matter", """
| Reason                          | Effect                                                              |
| ------------------------------- | ------------------------------------------------------------------- |
| A major centre opens            | More participants, tighter spreads, larger moves                    |
| Scheduled data (for example US) | A spike, then often a reversal or a trend                           |
| Overlaps between sessions       | Two centres active at once                                          |
| Quiet hours (late Asian, rollover) | Smaller ranges, wider spreads, more noise                         |

A kill zone is a window where those effects are expected. It tells you to **look**; you still need structure, a level and a plan. See [ICT Kill Zones](/en/ict/ict-kill-zones) for the full definitions and [Kill Zones in Bangladesh Time](/en/forex-sessions/kill-zones) for the conversion."""),
            ("The Main Windows in BD Time", """
| Window               | BD (US summer)        | BD (US winter)  |
| -------------------- | --------------------- | --------------- |
| Asian range          | 6:00 AM – 12:00 PM    | 7:00 AM – 1:00 PM |
| **London kill zone** | **12:00 – 3:00 PM**   | 1:00 – 4:00 PM  |
| **NY kill zone**     | **5:00 – 8:00 PM**    | 6:00 – 9:00 PM  |

US data at 8:30 AM New York is **6:30 PM BD in summer** and 7:30 PM in winter, inside the NY window."""),
            ("Using a Window as a Filter", """
| Do                                                        | Don't                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------- |
| Mark levels and bias **before** the window opens          | Start analysing after the move                             |
| Wait for a sweep or structure shift inside the window     | Enter because the clock says so                            |
| Skip a window with no setup                               | Force a trade                                              |
| Check the calendar for a scheduled release                | Ignore news inside the window                              |"""),
        ],
        example="""
New York kill zone, EUR/USD. US data at 6:30 PM BD pushes price up through the earlier high at **1.0900** to **1.0902**, but it closes back at **1.0896**, a sweep that failed. Plan: sell **1.0896**, stop **1.0908** (above the sweep high): risk 12 pips; target **1.0864** (the earlier support): reward 32 pips, **1 : 2.7** planned. If price closes above **1.0908**, the sweep idea fails.""",
        mistakes=[["Believing every kill zone produces a trade", "A window is when to watch, not when to trade"], ["Mixing summer and winter times", "Add one hour in winter"], ["Ignoring scheduled data", "Check the calendar in BD time"], ["Trading all windows every day", "Choose one or two and learn them"]],
        practice=["Write the kill-zone windows in BD time for the current season.", "For two weeks, note what each window did on your pair.", "Choose the one window you will focus on."],
        summary=[["Why", "Activity clusters when centres open and data is released"], ["Kill zones", "Named windows in New York time"], ["Use", "A filter on time; a setup must still appear"], ["Evidence", "Measure how your own market behaves in each window"]],
        related=[("/ict/ict-kill-zones", "ICT Kill Zones"), ("/forex-sessions/kill-zones", "Kill Zones in Bangladesh Time"), ("/blog/ict-kill-zones-complete", "ICT Kill Zones Complete Schedule"), ("/forex-sessions/economic-releases", "Economic Releases in BD Time")],
        fig_alt="The ICT kill zones on a 24-hour Bangladesh-time clock for US summer and winter",
        fig_note="A reference clock from the ICT lesson", fig_label="ICT Kill Zones"),
    bn=dict(
        title="ICT Kill Zones ব্যাখ্যা — কেন দিনের সময় গুরুত্বপূর্ণ",
        description="কেন ট্রেডিং কার্যকলাপ নির্দিষ্ট ঘণ্টায় জমে (মার্কেট খোলে, ডেটা আসে), ICT কীভাবে সেই ঘণ্টাগুলোকে Kill Zone বলে, উইন্ডোকে সংকেত নয় ফিল্টার হিসেবে কীভাবে ব্যবহার করবেন, আর বাংলাদেশ সময়ে সন্ধ্যা ৬:৩০ এর US ডেটা রিলিজ ঘিরে New York Kill-zone উদাহরণ।",
        intro="প্রাইস দিনভর সমানভাবে নড়ে না। কোনো প্রধান কেন্দ্র খুললে বা নির্ধারিত ডেটা এলে কার্যকলাপ বাড়ে। ICT এর **Kill Zone** এই ব্যস্ততর ঘণ্টাগুলোকে নাম দেয় যাতে ট্রেডার ঠিক করতে পারেন **কখন স্ক্রিনে থাকবেন**। এগুলো সময়ের ওপর ফিল্টার হিসেবে কাজ করে, সংকেত হিসেবে নয়।",
        fix="মূল লেখায় বলা হয়েছিল দৈনিক বেশিরভাগ মুভ \"সবসময়\" Kill Zone এর ভেতরে শুরু হয় এবং নির্দিষ্ট সম্ভাবনা দেওয়া হয়েছিল। এর সমর্থন আমরা পাইনি। খোলা ও ডেটা রিলিজ ঘিরে কার্যকলাপ জমে; কোনো উইন্ডো কতটা নির্ভরযোগ্যভাবে ট্রেডযোগ্য সেটআপ দেয় তা নিজের মার্কেট ও জার্নালে মাপা উচিত।",
        sections=[
            ("কেন ঘণ্টা গুরুত্বপূর্ণ", """
| কারণ                          | প্রভাব                                                              |
| ------------------------------- | ------------------------------------------------------------------- |
| প্রধান কেন্দ্র খোলে            | বেশি অংশগ্রহণকারী, সংকীর্ণ স্প্রেড, বড় মুভ                    |
| নির্ধারিত ডেটা (যেমন US) | স্পাইক, তারপর প্রায়ই রিভার্সাল বা ট্রেন্ড                           |
| সেশনের ওভারল্যাপ       | একসাথে দুটি কেন্দ্র সক্রিয়                                          |
| শান্ত ঘণ্টা (শেষ এশিয়ান, রোলওভার) | ছোট রেঞ্জ, চওড়া স্প্রেড, বেশি নয়েজ                         |

Kill Zone হলো সেই উইন্ডো যেখানে এই প্রভাব প্রত্যাশিত। এটি বলে **দেখুন**; স্ট্রাকচার, লেভেল ও পরিকল্পনা তবুও লাগবে। পূর্ণ সংজ্ঞা [ICT Kill Zones](/bn/ict/ict-kill-zones) এ আর রূপান্তর [BD সময়ে Kill Zones](/bn/forex-sessions/kill-zones) এ দেখুন।"""),
            ("BD সময়ে প্রধান উইন্ডো", """
| উইন্ডো               | BD (US Summer)        | BD (US Winter)  |
| -------------------- | --------------------- | --------------- |
| এশিয়ান রেঞ্জ          | সকাল ৬:০০ – দুপুর ১২:০০    | সকাল ৭:০০ – দুপুর ১:০০ |
| **London Kill Zone** | **দুপুর ১২:০০ – ৩:০০**   | দুপুর ১:০০ – ৪:০০  |
| **NY Kill Zone**     | **সন্ধ্যা ৫:০০ – ৮:০০**    | সন্ধ্যা ৬:০০ – ৯:০০  |

New York এ সকাল ৮:৩০ এর US ডেটা **Summer এ সন্ধ্যা ৬:৩০ BD** ও Winter এ রাত ৭:৩০, NY উইন্ডোর ভেতরে।"""),
            ("উইন্ডোকে ফিল্টার হিসেবে ব্যবহার", """
| করুন                                                        | করবেন না                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------- |
| উইন্ডো খোলার **আগে** লেভেল ও বায়াস চিহ্নিত করুন          | মুভের পরে বিশ্লেষণ শুরু করা                             |
| উইন্ডোর ভেতরে Sweep বা স্ট্রাকচার শিফটের অপেক্ষা করুন     | ঘড়ি বলছে বলে এন্ট্রি                            |
| সেটআপ নেই এমন উইন্ডো বাদ দিন                               | জোর করে ট্রেড                                              |
| নির্ধারিত রিলিজের জন্য ক্যালেন্ডার দেখুন                | উইন্ডোর ভেতরের নিউজ উপেক্ষা                              |"""),
        ],
        example="""
New York Kill Zone, EUR/USD। সন্ধ্যা ৬:৩০ BD তে US ডেটা প্রাইসকে আগের High **1.0900** ভেদ করে **1.0902** এ ঠেলে, কিন্তু এটি **1.0896** এ ফিরে Close করে: একটি ব্যর্থ Sweep। পরিকল্পনা: **1.0896** এ Sell, Stop **1.0908** (Sweep High এর উপরে): রিস্ক ১২ পিপ; টার্গেট **1.0864** (আগের Support): রিওয়ার্ড ৩২ পিপ, পরিকল্পিত **১ : ২.৭**। প্রাইস **1.0908** এর উপরে Close করলে Sweep ধারণা ব্যর্থ।""",
        mistakes=[["প্রতিটি Kill Zone ট্রেড দেয় ভাবা", "উইন্ডো কখন দেখবেন, কখন ট্রেড করবেন নয়"], ["Summer ও Winter সময় মেশানো", "Winter এ এক ঘণ্টা যোগ করুন"], ["নির্ধারিত ডেটা উপেক্ষা", "BD সময়ে ক্যালেন্ডার দেখুন"], ["প্রতিদিন সব উইন্ডোতে ট্রেড", "এক-দুটি বেছে শিখুন"]],
        practice=["চলতি ঋতুর জন্য BD সময়ে Kill-zone উইন্ডো লিখুন।", "দুই সপ্তাহ আপনার পেয়ারে প্রতিটি উইন্ডো কী করেছে লিখুন।", "যে একটি উইন্ডোতে মনোযোগ দেবেন তা বাছুন।"],
        summary=[["কেন", "কেন্দ্র খুললে ও ডেটা এলে কার্যকলাপ জমে"], ["Kill Zone", "New York সময়ে নামকরা উইন্ডো"], ["ব্যবহার", "সময়ের ফিল্টার; সেটআপ তবুও আসতে হবে"], ["প্রমাণ", "প্রতিটি উইন্ডোতে নিজের মার্কেটের আচরণ মাপুন"]],
        related=[("/ict/ict-kill-zones", "ICT Kill Zones"), ("/forex-sessions/kill-zones", "Kill Zones in Bangladesh Time"), ("/blog/ict-kill-zones-complete", "ICT Kill Zones Complete Schedule"), ("/forex-sessions/economic-releases", "Economic Releases in BD Time")],
        fig_alt="US Summer ও Winter এর জন্য ২৪-ঘণ্টার বাংলাদেশ-সময়ের ঘড়িতে ICT Kill Zone",
        fig_note="ICT লেসন থেকে রেফারেন্স ঘড়ি", fig_label="ICT Kill Zones"),
)
