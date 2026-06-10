"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const dict = {
  en: {
    back: "Back to Tools",
    title: "Position Size Calculator",
    subtitle: "Calculate the optimal position size — the foundation of institutional risk management",
    accountBalance: "Account Balance (USD)",
    riskPercent: "Risk Percentage (%)",
    stopLoss: "Stop Loss Distance (Pips)",
    pairType: "Currency Pair Type",
    major: "Major Pairs (EUR/USD, GBP/USD)",
    minor: "Minor Pairs (EUR/GBP, AUD/NZD)",
    exotic: "Exotic Pairs (USD/TRY, EUR/ZAR)",
    crypto: "Cryptocurrency (BTC, ETH)",
    gold: "Gold (XAU/USD)",
    results: "Calculation Results",
    riskAmount: "Risk Amount",
    positionSize: "Position Size",
    microLots: "Micro Lots",
    miniLots: "Mini Lots",
    summary: "You are risking",
    onThisTrade: "on this trade. With a",
    pipStop: "pip stop loss, you should trade",
    lots: "lots",
    tipsTitle: "💡 Institutional Position Sizing Rules",
    tips: [
      "Banks risk 0.5-2% per position — never more than 5% total portfolio risk",
      "Prop firms typically allow 1-2% per trade with 5% daily max drawdown",
      "Scale position size based on conviction: High = 2%, Normal = 1%, Low = 0.5%",
      "Always adjust for volatility — reduce size during news events (NFP, FOMC)",
      "Institutional traders use ATR-based stops, not fixed pip amounts",
    ],
  },
  bn: {
    back: "টুলসে ফিরে যান",
    title: "পজিশন সাইজ ক্যালকুলেটর",
    subtitle: "অপটিমাল পজিশন সাইজ ক্যালকুলেট করুন — ইনস্টিটিউশনাল রিস্ক ম্যানেজমেন্টের ভিত্তি",
    accountBalance: "অ্যাকাউন্ট ব্যালেন্স (USD)",
    riskPercent: "রিস্ক শতাংশ (%)",
    stopLoss: "স্টপ লস দূরত্ব (পিপ)",
    pairType: "কারেন্সি পেয়ারের ধরন",
    major: "মেজর পেয়ার (EUR/USD, GBP/USD)",
    minor: "মাইনর পেয়ার (EUR/GBP, AUD/NZD)",
    exotic: "এক্সোটিক পেয়ার (USD/TRY, EUR/ZAR)",
    crypto: "ক্রিপ্টোকারেন্সি (BTC, ETH)",
    gold: "গোল্ড (XAU/USD)",
    results: "ক্যালকুলেশন ফলাফল",
    riskAmount: "রিস্কের পরিমাণ",
    positionSize: "পজিশন সাইজ",
    microLots: "মাইক্রো লট",
    miniLots: "মিনি লট",
    summary: "আপনি রিস্ক নিচ্ছেন",
    onThisTrade: "এই ট্রেডে।",
    pipStop: "পিপ স্টপ লসে, আপনার ট্রেড করা উচিত",
    lots: "লট",
    tipsTitle: "💡 ইনস্টিটিউশনাল পজিশন সাইজিং নিয়ম",
    tips: [
      "ব্যাংকরা প্রতি পজিশনে ০.৫-২% রিস্ক নেয় — মোট পোর্টফোলিও রিস্ক কখনো ৫%-এর বেশি নয়",
      "প্রপ ফার্মগুলো সাধারণত প্রতি ট্রেডে ১-২% অনুমতি দেয় এবং দৈনিক সর্বোচ্চ ৫% ড্রডাউন",
      "বিশ্বাসের ভিত্তিতে পজিশন সাইজ করুন: উচ্চ = ২%, সাধারণ = ১%, নিম্ন = ০.৫%",
      "সবসময় ভোলাটিলিটি অনুযায়ী অ্যাডজাস্ট করুন — নিউজ ইভেন্টে (NFP, FOMC) সাইজ কমান",
      "ইনস্টিটিউশনাল ট্রেডাররা ATR-ভিত্তিক স্টপ ব্যবহার করে, ফিক্সড পিপ পরিমাণ নয়",
    ],
  },
};

export default function PositionCalculator() {
  const pathname = usePathname();
  const lang = (pathname.split("/")[1] || "en") as "en" | "bn";
  const t = dict[lang] || dict.en;

  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [riskPercentage, setRiskPercentage] = useState<number>(2);
  const [stopLossDistance, setStopLossDistance] = useState<number>(50);
  const [pairType, setPairType] = useState<string>("major");

  const riskAmount = (accountBalance * riskPercentage) / 100;
  const positionSize = riskAmount / stopLossDistance;

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors duration-200"
      >
        <ArrowLeft size={18} />
        {t.back}
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="text-muted-foreground mt-2">{t.subtitle}</p>

        <div className="mt-8 space-y-6">
          {/* Account Balance */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.accountBalance}</label>
            <input
              type="number"
              value={accountBalance}
              onChange={(e) => setAccountBalance(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
              min="100"
              step="100"
            />
          </div>

          {/* Risk Percentage */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.riskPercent}: {riskPercentage.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0.1%</span>
              <span className="text-accent-green font-medium">2% (recommended)</span>
              <span>10%</span>
            </div>
          </div>

          {/* Stop Loss Distance */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.stopLoss}</label>
            <input
              type="number"
              value={stopLossDistance}
              onChange={(e) => setStopLossDistance(Number(e.target.value))}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
              min="1"
              step="1"
            />
          </div>

          {/* Pair Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.pairType}</label>
            <select
              value={pairType}
              onChange={(e) => setPairType(e.target.value)}
              className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-accent-green transition-colors"
            >
              <option value="major">{t.major}</option>
              <option value="minor">{t.minor}</option>
              <option value="exotic">{t.exotic}</option>
              <option value="gold">{t.gold}</option>
              <option value="crypto">{t.crypto}</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 bg-muted border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.results}</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground text-sm">{t.riskAmount}</p>
              <p className="text-2xl font-bold text-accent-green mt-1">${riskAmount.toFixed(2)}</p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">{t.positionSize}</p>
              <p className="text-2xl font-bold text-accent-blue mt-1">{positionSize.toFixed(3)} Lots</p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">{t.microLots}</p>
              <p className="text-2xl font-bold text-accent-purple mt-1">{(positionSize * 100).toFixed(0)} µLots</p>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">{t.miniLots}</p>
              <p className="text-2xl font-bold text-accent-orange mt-1">{(positionSize * 10).toFixed(2)} mLots</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-card/50 border border-accent-blue/20 rounded-lg">
            <p className="text-xs text-foreground">
              📝 {t.summary} <span className="text-accent-green font-semibold">${riskAmount.toFixed(2)}</span>{" "}
              {t.onThisTrade}{" "}
              <span className="text-accent-orange font-semibold">
                {stopLossDistance} {t.pipStop}
              </span>{" "}
              <span className="text-accent-blue font-semibold">
                {positionSize.toFixed(3)} {t.lots}
              </span>
              .
            </p>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-accent-orange/5 border border-accent-orange/20 rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">{t.tipsTitle}</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            {t.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
