SPEC = dict(
    fm=dict(date="2026-05-19", category="ICT", tags=["ict", "kill-zone", "time-based-entry", "session-timing", "forex-sessions"], reading=8, featured=True),
    fig=dict(img="/images/forex-sessions/kill-zones/kill-zones-bd-dark.webp", video="/videos/forex-sessions/kill-zones-bd-explainer-dark.mp4", lesson="/forex-sessions/kill-zones"),
    en=dict(
        title="ICT Kill Zones in Bangladesh Time — The Complete Schedule",
        description="Every ICT kill-zone window converted from New York time to Bangladesh time for US summer and winter, what each window is used for, a daily schedule for traders in Bangladesh, a London kill-zone setup, and a reminder that a window tells you when to watch, not what will happen.",
        intro="ICT **kill zones** are time windows, defined in **New York time**, in which major centres open and volume arrives. They answer **when** to look for a setup. The setup itself (a sweep, a structure shift, a gap) still has to appear.",
        fix="The original listed several kill-zone times in Bangladesh time that did not convert correctly (it mixed summer and winter offsets and gave no winter times), and claimed trades outside the windows have much lower probability. The times below are converted from New York time with one rule, and the probability claim is removed because it was never shown with data.",
        sections=[
            ("The Conversion Rule", """
| US clocks                                          | BD time = New York time + |
| -------------------------------------------------- | ------------------------- |
| **Summer** (EDT, mid-March to early November)      | **10 hours**              |
| **Winter** (EST, early November to mid-March)      | **11 hours**              |

Bangladesh does not change its clocks, so every window shifts by one hour when New York does."""),
            ("All Windows in BD Time", """
| Window               | New York time       | **BD (summer)**        | **BD (winter)**   | Purpose                                    |
| -------------------- | ------------------- | ---------------------- | ----------------- | ------------------------------------------ |
| **Asian range**      | 8:00 PM – 2:00 AM   | **6:00 AM – 12:00 PM** | 7:00 AM – 1:00 PM | Mark the high and low                      |
| **London kill zone** | 2:00 – 5:00 AM      | **12:00 – 3:00 PM**    | 1:00 – 4:00 PM    | First directional move; Asian range tested |
| London silver bullet | 3:00 – 4:00 AM      | 1:00 – 2:00 PM         | 2:00 – 3:00 PM    | One-hour FVG window                        |
| **NY kill zone**     | 7:00 – 10:00 AM     | **5:00 – 8:00 PM**     | 6:00 – 9:00 PM    | US data and open                           |
| NY AM silver bullet  | 10:00 – 11:00 AM    | 8:00 – 9:00 PM         | 9:00 – 10:00 PM   | One-hour FVG window                        |
| London close         | 10:00 AM – 12:00 PM | 8:00 – 10:00 PM        | 9:00 – 11:00 PM   | Profit-taking; possible reversal           |
| NY PM silver bullet  | 2:00 – 3:00 PM      | 12:00 – 1:00 AM        | 1:00 – 2:00 AM    | Afternoon FVG window                       |

See the full lesson, [Kill Zones in Bangladesh Time](/en/forex-sessions/kill-zones), and the ICT view in [ICT Kill Zones](/en/ict/ict-kill-zones). \"Silver bullet AM\" refers to the New York morning, not the Asian session."""),
            ("A Daily Schedule (Summer)", """
| Time (BD)             | Action                                                                  |
| --------------------- | ----------------------------------------------------------------------- |
| 6:00 AM – 12:00 PM    | Mark the Asian high and low; write the daily bias                        |
| 12:00 – 3:00 PM       | London kill zone: wait for a sweep of the Asian range and a structure shift |
| 3:00 – 5:00 PM        | Review; usually quieter                                                  |
| 5:00 – 8:00 PM        | New York kill zone; US data at 6:30 PM                                   |
| After 8:00 PM         | Close or manage open trades; avoid starting new ones when tired          |

Add one hour in winter. Not every day has a clean setup in a window; **no trade is a valid outcome**."""),
        ],
        example="""
London kill zone, EUR/USD. The Asian range is **1.0860 – 1.0880**. At 12:20 PM BD price sweeps the low to **1.0854** and closes back inside; a 5-minute candle then closes above the last lower high. Plan: buy **1.0862**, stop **1.0850** (below the sweep low): risk 12 pips; target **1.0890** (above the Asian high): reward 28 pips, **1 : 2.3** planned. If price closes below **1.0850**, the idea is cancelled.""",
        mistakes=[["Using New York times as BD times", "Convert with +10 hours (summer) or +11 (winter)"], ["Forgetting winter", "Add one hour from early November to mid-March"], ["Trading a window with no setup", "A window is when to watch, not a reason to trade"], ["Applying silver-bullet times to the wrong session", "Check the New York time first, then convert"]],
        practice=["Write your own kill-zone schedule in BD time for the current season.", "For ten days, note what each window did on EUR/USD.", "Record which windows produced setups that met your rules."],
        summary=[["Kill zones", "Time windows set in New York time"], ["Conversion", "BD = New York + 10 (summer) or + 11 (winter)"], ["Use", "They show when to watch; the setup must still appear"], ["Evidence", "Test time-of-day effects on your own journal"]],
        related=[("/forex-sessions/kill-zones", "Kill Zones in Bangladesh Time"), ("/ict/ict-kill-zones", "ICT Kill Zones"), ("/forex-sessions/asian-range", "Asian Range"), ("/blog/ict-kill-zones-explained", "ICT Kill Zones Explained")],
        fig_alt="ICT kill zones in Bangladesh time: Asian range 6:00 AM to 12:00 PM, London kill zone 12:00 to 3:00 PM, New York kill zone 5:00 to 8:00 PM in US summer",
        fig_note="A reference chart from the sessions lesson (US summer times; add one hour in winter)", fig_label="Kill Zones in Bangladesh Time"),
    bn=dict(
        title="বাংলাদেশ সময়ে ICT Kill Zones — সম্পূর্ণ সময়সূচি",
        description="প্রতিটি ICT Kill-zone উইন্ডো New York সময় থেকে বাংলাদেশ সময়ে রূপান্তর (US Summer ও Winter), প্রতিটি উইন্ডো কীসের জন্য, বাংলাদেশি ট্রেডারদের দৈনিক সূচি, London Kill-zone সেটআপ, আর স্মরণ যে উইন্ডো কখন দেখবেন তা বলে, কী ঘটবে তা নয়।",
        intro="ICT **Kill Zone** হলো **New York সময়ে** সংজ্ঞায়িত সময় উইন্ডো যেখানে প্রধান কেন্দ্র খোলে ও ভলিউম আসে। এগুলো উত্তর দেয় **কখন** সেটআপ খুঁজবেন। সেটআপ (Sweep, স্ট্রাকচার শিফট, গ্যাপ) তবুও দেখা দিতে হবে।",
        fix="মূল লেখায় কয়েকটি Kill-zone সময় বাংলাদেশ সময়ে ঠিকমতো রূপান্তরিত ছিল না (Summer ও Winter অফসেট মিশিয়েছিল, Winter সময় দেয়নি), এবং দাবি ছিল উইন্ডোর বাইরের ট্রেডের সম্ভাবনা অনেক কম। নিচের সময়গুলো এক নিয়মে New York সময় থেকে রূপান্তরিত, আর সম্ভাবনার দাবি সরানো হয়েছে কারণ ডেটায় তা কখনো দেখানো হয়নি।",
        sections=[
            ("রূপান্তরের নিয়ম", """
| US ঘড়ি                                          | BD সময় = New York সময় + |
| -------------------------------------------------- | ------------------------- |
| **Summer** (EDT, মধ্য-মার্চ থেকে নভেম্বরের শুরু)      | **১০ ঘণ্টা**              |
| **Winter** (EST, নভেম্বরের শুরু থেকে মধ্য-মার্চ)      | **১১ ঘণ্টা**              |

বাংলাদেশ ঘড়ি বদলায় না, তাই New York বদলালে প্রতিটি উইন্ডো এক ঘণ্টা সরে।"""),
            ("BD সময়ে সব উইন্ডো", """
| উইন্ডো               | New York সময়       | **BD (Summer)**        | **BD (Winter)**   | উদ্দেশ্য                                    |
| -------------------- | ------------------- | ---------------------- | ----------------- | ------------------------------------------ |
| **এশিয়ান রেঞ্জ**      | রাত ৮:০০ – ভোর ২:০০   | **সকাল ৬:০০ – দুপুর ১২:০০** | সকাল ৭:০০ – দুপুর ১:০০ | High ও Low চিহ্নিত করুন                      |
| **London Kill Zone** | ভোর ২:০০ – ৫:০০      | **দুপুর ১২:০০ – ৩:০০**    | দুপুর ১:০০ – ৪:০০    | প্রথম দিকনির্দেশক মুভ; এশিয়ান রেঞ্জ পরীক্ষা |
| London Silver Bullet | ভোর ৩:০০ – ৪:০০      | দুপুর ১:০০ – ২:০০         | দুপুর ২:০০ – ৩:০০    | এক-ঘণ্টার FVG উইন্ডো                        |
| **NY Kill Zone**     | সকাল ৭:০০ – ১০:০০     | **সন্ধ্যা ৫:০০ – ৮:০০**     | সন্ধ্যা ৬:০০ – ৯:০০    | US ডেটা ও খোলা                           |
| NY AM Silver Bullet  | সকাল ১০:০০ – ১১:০০    | রাত ৮:০০ – ৯:০০         | রাত ৯:০০ – ১০:০০   | এক-ঘণ্টার FVG উইন্ডো                        |
| London Close         | সকাল ১০:০০ – দুপুর ১২:০০ | রাত ৮:০০ – ১০:০০        | রাত ৯:০০ – ১১:০০    | মুনাফা তোলা; সম্ভাব্য রিভার্সাল           |
| NY PM Silver Bullet  | দুপুর ২:০০ – ৩:০০      | মধ্যরাত ১২:০০ – ১:০০        | রাত ১:০০ – ২:০০    | বিকেলের FVG উইন্ডো                       |

পূর্ণ লেসন [BD সময়ে Kill Zones](/bn/forex-sessions/kill-zones) ও ICT দৃষ্টিভঙ্গি [ICT Kill Zones](/bn/ict/ict-kill-zones) এ দেখুন। \"Silver Bullet AM\" মানে New York এর সকাল, এশিয়ান সেশন নয়।"""),
            ("দৈনিক সূচি (Summer)", """
| সময় (BD)             | কাজ                                                                  |
| --------------------- | ----------------------------------------------------------------------- |
| সকাল ৬:০০ – দুপুর ১২:০০    | এশিয়ান High ও Low চিহ্নিত করুন; ডেইলি বায়াস লিখুন                        |
| দুপুর ১২:০০ – ৩:০০       | London Kill Zone: এশিয়ান রেঞ্জের Sweep ও স্ট্রাকচার শিফটের অপেক্ষা করুন |
| বিকেল ৩:০০ – ৫:০০        | রিভিউ; সাধারণত শান্ত                                                  |
| সন্ধ্যা ৫:০০ – ৮:০০        | New York Kill Zone; সন্ধ্যা ৬:৩০ এ US ডেটা                                   |
| রাত ৮:০০ এর পর         | খোলা ট্রেড বন্ধ বা পরিচালনা; ক্লান্ত অবস্থায় নতুন শুরু এড়ান          |

Winter এ এক ঘণ্টা যোগ করুন। প্রতিদিন উইন্ডোতে পরিষ্কার সেটআপ থাকে না; **ট্রেড না করা বৈধ ফল**।"""),
        ],
        example="""
London Kill Zone, EUR/USD। এশিয়ান রেঞ্জ **1.0860 – 1.0880**। দুপুর ১২:২০ BD তে প্রাইস Low Sweep করে **1.0854** এ গিয়ে ভেতরে ফিরে Close করে; তারপর ৫-মিনিটের ক্যান্ডেল শেষ Lower High এর উপরে Close করে। পরিকল্পনা: **1.0862** এ Buy, Stop **1.0850** (Sweep Low এর নিচে): রিস্ক ১২ পিপ; টার্গেট **1.0890** (এশিয়ান High এর উপরে): রিওয়ার্ড ২৮ পিপ, পরিকল্পিত **১ : ২.৩**। প্রাইস **1.0850** এর নিচে Close করলে ধারণা বাতিল।""",
        mistakes=[["New York সময়কে BD সময় ধরা", "+১০ ঘণ্টা (Summer) বা +১১ (Winter) দিয়ে রূপান্তর করুন"], ["Winter ভুলে যাওয়া", "নভেম্বরের শুরু থেকে মধ্য-মার্চ এক ঘণ্টা যোগ করুন"], ["সেটআপ ছাড়া উইন্ডোতে ট্রেড", "উইন্ডো কখন দেখবেন, ট্রেডের কারণ নয়"], ["ভুল সেশনে Silver Bullet সময় প্রয়োগ", "আগে New York সময় দেখে তারপর রূপান্তর করুন"]],
        practice=["চলতি ঋতুর জন্য BD সময়ে নিজের Kill-zone সূচি লিখুন।", "দশ দিন EUR/USD তে প্রতিটি উইন্ডো কী করেছে লিখুন।", "কোন উইন্ডোতে আপনার নিয়ম মেনে সেটআপ এসেছে লিখুন।"],
        summary=[["Kill Zone", "New York সময়ে নির্ধারিত সময় উইন্ডো"], ["রূপান্তর", "BD = New York + ১০ (Summer) বা + ১১ (Winter)"], ["ব্যবহার", "কখন দেখবেন তা বলে; সেটআপ তবুও আসতে হবে"], ["প্রমাণ", "নিজের জার্নালে সময়ের প্রভাব পরীক্ষা করুন"]],
        related=[("/forex-sessions/kill-zones", "Kill Zones in Bangladesh Time"), ("/ict/ict-kill-zones", "ICT Kill Zones"), ("/forex-sessions/asian-range", "Asian Range"), ("/blog/ict-kill-zones-explained", "ICT Kill Zones Explained")],
        fig_alt="বাংলাদেশ সময়ে ICT Kill Zone: US Summer এ এশিয়ান রেঞ্জ সকাল ৬:০০ থেকে দুপুর ১২:০০, London Kill Zone দুপুর ১২:০০ থেকে ৩:০০, New York Kill Zone সন্ধ্যা ৫:০০ থেকে ৮:০০",
        fig_note="সেশন লেসন থেকে রেফারেন্স চার্ট (US Summer সময়; Winter এ এক ঘণ্টা যোগ করুন)", fig_label="Kill Zones in Bangladesh Time"),
)
