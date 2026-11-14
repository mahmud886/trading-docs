SPEC = dict(
    fm=dict(date="2026-05-19", category="Forex Sessions", tags=["forex-sessions", "session-overlap", "london-open", "new-york-open", "trading-hours"], reading=9, featured=True),
    fig=dict(img="/images/forex-sessions/session-strategies/session-playbook-bd-dark.webp", video="/videos/forex-sessions/session-playbook-explainer-dark.mp4", lesson="/forex-sessions/session-strategies"),
    en=dict(
        title="A Session Trading Playbook in Bangladesh Time",
        description="A block-by-block plan for the Bangladesh trading day (US/UK summer): prepare 6:00 AM–12:30 PM, watch 1:00–1:30 PM, London entries 1:30–5:00 PM, the 6:00 PM continuation-or-reversal decision, New York entries 6:30–10:00 PM and a 10:00 PM stop time, with a worked London trade and a reminder to add one hour in winter.",
        intro="A **session playbook** assigns a job to each part of the trading day, so you know what to do at each hour and, just as important, when to **do nothing**. The blocks below use Bangladesh time for US/UK summer; add one hour in winter for London and New York.",
        fix="The original mixed several time conversions and gave a fixed share of profitable setups to each session. The times are now taken from the session hours with one rule (+1 hour in winter), and the share claims are removed: record your own results per block instead.",
        sections=[
            ("The Playbook (BD time, summer)", """
| Block                | Job                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------- |
| 6:00 AM – 12:30 PM   | **Prepare**: mark the Asian high and low, write the daily bias, list the news          |
| 1:00 – 1:30 PM       | **Watch** London's open; do not trade the first move                                   |
| 1:30 – 5:00 PM       | **London entries**: sweeps of the Asian range with a close back inside, or an opening-range break that holds |
| 6:00 PM              | **Decision point**: does the New York opening continue London's move or reverse it?     |
| 6:30 – 10:00 PM      | **New York entries**: continuation pullbacks or reversals, with the 6:30 PM data release in mind |
| 10:00 PM             | **Stop**: London closes; manage open trades and stop opening new ones                   |

See [Session Strategies](/en/forex-sessions/session-strategies) for the full lesson and [Best Trading Times in Bangladesh](/en/forex-sessions/best-trading-times-bd) for how to choose the blocks you can attend."""),
            ("Rules for Each Block", """
| Block        | Rule                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ |
| Prepare      | No trading; write the bias and the levels                                                  |
| Watch        | Observe the first move and the first reaction before deciding                              |
| London       | At most two trades; take only setups that match the bias                                   |
| Decision     | If London's move was strong, favour continuation; if price returns to London's extreme, think reversal |
| New York     | Skip the minutes around the 6:30 PM release; trade after the first reaction                |
| Stop         | Pick a fixed stop time and keep it                                                         |

Choose the blocks you can attend. A playbook you cannot follow is worse than a smaller one you can."""),
            ("Making It Yours", """
| Step | What to do                                                                                    |
| ---- | --------------------------------------------------------------------------------------------- |
| 1    | Keep a log with the block (time) of every trade                                               |
| 2    | After 30 to 50 trades, compare R by block                                                     |
| 3    | Drop the blocks that cost money or that you attend badly                                      |
| 4    | Keep summer and winter versions of the schedule                                               |"""),
        ],
        example="""
London entry block. The Asian range was **1.0860 – 1.0880**; at 1:40 PM BD EUR/USD sweeps the low to **1.0854**, a 15-minute candle closes back at **1.0866** and a 5-minute candle closes above the last lower high. Daily bias bullish. Plan: buy **1.0864**, stop **1.0848** (below the sweep low): risk 16 pips; target **1.0894**: reward 30 pips, **1 : 1.9** planned. If price closes below **1.0848**, the plan is cancelled.""",
        mistakes=[["Trading the first move of London", "Watch the first 30 minutes"], ["Treating every block as tradable", "Skip blocks with no setup"], ["No stop time", "Choose one (for example 10:00 PM BD) and keep it"], ["Using summer times in winter", "Add one hour from early November to mid-March"]],
        practice=["Write your own playbook with the blocks you can actually attend, in BD time for both seasons.", "Log each trade with its block for a month.", "Compare R by block and drop the weakest."],
        summary=[["Blocks", "Prepare, watch, London, 6:00 PM decision, New York, stop"], ["Times", "BD time for US/UK summer; +1 hour in winter"], ["Rule", "Some blocks should have no trades"], ["Evidence", "Compare your own R by block"]],
        related=[("/forex-sessions/session-strategies", "Session Strategies"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh"), ("/blog/session-overlap-strategies", "Session Overlap Strategies"), ("/blog/ict-kill-zones-complete", "ICT Kill Zones Complete Schedule")],
        fig_alt="A session playbook for the Bangladesh day: prepare, watch, London entries, the 6:00 PM decision, New York entries and the 10:00 PM stop",
        fig_note="A reference chart from the sessions lesson (US/UK summer times)", fig_label="Session Strategies"),
    bn=dict(
        title="বাংলাদেশ সময়ে সেশন ট্রেডিং প্লেবুক",
        description="বাংলাদেশি ট্রেডিং দিনের ব্লক-ধরে-ব্লক পরিকল্পনা (US/UK Summer): প্রস্তুতি সকাল ৬:০০–দুপুর ১২:৩০, পর্যবেক্ষণ দুপুর ১:০০–১:৩০, London এন্ট্রি দুপুর ১:৩০–বিকেল ৫:০০, সন্ধ্যা ৬:০০ এর কন্টিনিউয়েশন-বা-রিভার্সাল সিদ্ধান্ত, New York এন্ট্রি সন্ধ্যা ৬:৩০–রাত ১০:০০ ও রাত ১০:০০ থামার সময় — London ট্রেডের উদাহরণ ও Winter এ এক ঘণ্টা যোগের স্মরণসহ।",
        intro="**সেশন প্লেবুক** ট্রেডিং দিনের প্রতিটি অংশে একটি কাজ দেয়, যাতে প্রতি ঘণ্টায় কী করবেন, আর সমান গুরুত্বপূর্ণ, কখন **কিছু করবেন না** তা জানেন। নিচের ব্লকগুলো US/UK Summer এর বাংলাদেশ সময়ে; London ও New York এ Winter এ এক ঘণ্টা যোগ করুন।",
        fix="মূল লেখায় কয়েকটি সময় রূপান্তর মেশানো ছিল এবং প্রতিটি সেশনকে লাভজনক সেটআপের নির্দিষ্ট অংশ দেওয়া হয়েছিল। সময় এখন সেশনের ঘণ্টা থেকে এক নিয়মে (Winter এ +১ ঘণ্টা) নেওয়া, আর অংশের দাবি সরানো হয়েছে: বরং প্রতি ব্লকে আপনার নিজের ফল রেকর্ড করুন।",
        sections=[
            ("প্লেবুক (BD সময়, Summer)", """
| ব্লক                | কাজ                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------- |
| সকাল ৬:০০ – দুপুর ১২:৩০   | **প্রস্তুতি**: এশিয়ান High ও Low চিহ্নিত, ডেইলি বায়াস লেখা, নিউজের তালিকা          |
| দুপুর ১:০০ – ১:৩০       | London এর খোলা **পর্যবেক্ষণ**; প্রথম মুভে ট্রেড নয়                                   |
| দুপুর ১:৩০ – বিকেল ৫:০০       | **London এন্ট্রি**: ভেতরে ফিরে Close সহ এশিয়ান রেঞ্জের Sweep, বা টিকে থাকা ওপেনিং-রেঞ্জ ভাঙা |
| সন্ধ্যা ৬:০০              | **সিদ্ধান্তের বিন্দু**: New York এর খোলা কি London এর মুভ চালায় নাকি উল্টায়?     |
| সন্ধ্যা ৬:৩০ – রাত ১০:০০      | **New York এন্ট্রি**: কন্টিনিউয়েশন পুলব্যাক বা রিভার্সাল, সন্ধ্যা ৬:৩০ এর ডেটা রিলিজ মাথায় রেখে |
| রাত ১০:০০             | **থামা**: London বন্ধ; খোলা ট্রেড পরিচালনা, নতুন ট্রেড খোলা বন্ধ                   |

পূর্ণ লেসনের জন্য [Session Strategies](/bn/forex-sessions/session-strategies) আর যে ব্লকে থাকতে পারেন তা বাছতে [Best Trading Times in Bangladesh](/bn/forex-sessions/best-trading-times-bd) দেখুন।"""),
            ("প্রতি ব্লকের নিয়ম", """
| ব্লক        | নিয়ম                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ |
| প্রস্তুতি      | ট্রেড নয়; বায়াস ও লেভেল লিখুন                                                  |
| পর্যবেক্ষণ        | সিদ্ধান্তের আগে প্রথম মুভ ও প্রথম প্রতিক্রিয়া দেখুন                              |
| London       | সর্বোচ্চ দুটি ট্রেড; শুধু বায়াসের সাথে মেলা সেটআপ নিন                                   |
| সিদ্ধান্ত     | London এর মুভ শক্তিশালী হলে কন্টিনিউয়েশন পছন্দ করুন; প্রাইস London এর চরমে ফিরলে রিভার্সাল ভাবুন |
| New York     | সন্ধ্যা ৬:৩০ এর রিলিজের আশপাশের মিনিট বাদ দিন; প্রথম প্রতিক্রিয়ার পর ট্রেড করুন                |
| থামা         | নির্দিষ্ট থামার সময় বেছে তাতে থাকুন                                                         |

যে ব্লকে থাকতে পারেন তা বাছুন। যে প্লেবুক অনুসরণ করা যায় না তা ছোট কিন্তু অনুসরণযোগ্য প্লেবুকের চেয়ে খারাপ।"""),
            ("নিজের করে নেওয়া", """
| ধাপ | কী করবেন                                                                                    |
| ---- | --------------------------------------------------------------------------------------------- |
| ১    | প্রতিটি ট্রেডের ব্লক (সময়) সহ লগ রাখুন                                               |
| ২    | ৩০ থেকে ৫০ ট্রেডের পর ব্লক অনুযায়ী R তুলনা করুন                                                     |
| ৩    | যে ব্লক টাকা খরচ করে বা আপনি খারাপভাবে করেন তা বাদ দিন                                      |
| ৪    | সূচির Summer ও Winter সংস্করণ রাখুন                                               |"""),
        ],
        example="""
London এন্ট্রি ব্লক। এশিয়ান রেঞ্জ **1.0860 – 1.0880** ছিল; দুপুর ১:৪০ BD তে EUR/USD Low Sweep করে **1.0854** এ যায়, ১৫-মিনিটের ক্যান্ডেল **1.0866** এ ফিরে Close করে আর ৫-মিনিটের ক্যান্ডেল শেষ Lower High এর উপরে Close করে। ডেইলি বায়াস বুলিশ। পরিকল্পনা: **1.0864** এ Buy, Stop **1.0848** (Sweep Low এর নিচে): রিস্ক ১৬ পিপ; টার্গেট **1.0894**: রিওয়ার্ড ৩০ পিপ, পরিকল্পিত **১ : ১.৯**। প্রাইস **1.0848** এর নিচে Close করলে পরিকল্পনা বাতিল।""",
        mistakes=[["London এর প্রথম মুভে ট্রেড", "প্রথম ৩০ মিনিট পর্যবেক্ষণ করুন"], ["প্রতিটি ব্লককে ট্রেডযোগ্য ধরা", "সেটআপ নেই এমন ব্লক বাদ দিন"], ["থামার সময় নেই", "একটি বেছে (যেমন রাত ১০:০০ BD) তাতে থাকুন"], ["Winter এ Summer সময়", "নভেম্বরের শুরু থেকে মধ্য-মার্চ এক ঘণ্টা যোগ করুন"]],
        practice=["আপনি আসলে যে ব্লকে থাকতে পারেন সেগুলো নিয়ে দুই ঋতুর BD সময়ে নিজের প্লেবুক লিখুন।", "এক মাস প্রতিটি ট্রেড তার ব্লকসহ লগ করুন।", "ব্লক অনুযায়ী R তুলনা করে সবচেয়ে দুর্বলটি বাদ দিন।"],
        summary=[["ব্লক", "প্রস্তুতি, পর্যবেক্ষণ, London, সন্ধ্যা ৬:০০ সিদ্ধান্ত, New York, থামা"], ["সময়", "US/UK Summer এর BD সময়; Winter এ +১ ঘণ্টা"], ["নিয়ম", "কিছু ব্লকে ট্রেড থাকা উচিত নয়"], ["প্রমাণ", "ব্লক অনুযায়ী নিজের R তুলনা করুন"]],
        related=[("/forex-sessions/session-strategies", "Session Strategies"), ("/forex-sessions/best-trading-times-bd", "Best Trading Times in Bangladesh"), ("/blog/session-overlap-strategies", "Session Overlap Strategies"), ("/blog/ict-kill-zones-complete", "ICT Kill Zones Complete Schedule")],
        fig_alt="বাংলাদেশি দিনের সেশন প্লেবুক: প্রস্তুতি, পর্যবেক্ষণ, London এন্ট্রি, সন্ধ্যা ৬:০০ সিদ্ধান্ত, New York এন্ট্রি ও রাত ১০:০০ থামা",
        fig_note="সেশন লেসন থেকে রেফারেন্স চার্ট (US/UK Summer সময়)", fig_label="Session Strategies"),
)
