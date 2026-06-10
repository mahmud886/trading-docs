import Link from "next/link";
import { getDictionary, type Locale, locales } from "@/lib/i18n";
import {
  Calculator,
  FileSpreadsheet,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
  BarChart3,
  Target,
  PieChart,
  AlertCircle,
  Layers,
  Gauge,
  Grid3X3,
  Activity,
  LineChart,
  Percent,
  ArrowUpDown,
  Wallet,
  Waves,
  Eye

} from "lucide-react";

const toolsData = {
  en: [
    {
      icon: Calculator,
      title: "Position Size Calculator",
      description: "Calculate the optimal position size based on your account balance, risk percentage, and stop loss distance — the foundation of institutional risk management.",
      color: "#00ff9d",
      href: "/tools/position-calculator",
    },
    {
      icon: DollarSign,
      title: "Pip Value Calculator",
      description: "Determine the value of a pip for any currency pair and lot size. Essential for precise position sizing.",
      color: "#3b82f6",
      href: "/tools/pip-value-calculator",
    },
    {
      icon: TrendingUp,
      title: "Fibonacci Calculator",
      description: "Calculate Fibonacci retracement and extension levels for OTE (Optimal Trade Entry) zones used by institutional traders.",
      color: "#10b981",
      href: "/tools/fibonacci-calculator",
    },
    {
      icon: Zap,
      title: "Risk-Reward Calculator",
      description: "Analyze your trade's risk-to-reward ratio and win rate requirements. Banks require minimum 1:3 R:R for execution.",
      color: "#f59e0b",
      href: "/tools/risk-reward-calculator",
    },
    {
      icon: Clock,
      title: "Trading Session Timer",
      description: "Real-time trading session clock showing institutional kill zones — London, New York, Tokyo, and Sydney in BD time.",
      color: "#a855f7",
      href: "/tools/session-timer",
    },
    {
      icon: BarChart3,
      title: "Lot Size Converter",
      description: "Convert between lot sizes, micro lots, and standard contract volumes for different broker configurations.",
      color: "#ec4899",
      href: "/tools/lot-converter",
    },
    {
      icon: Target,
      title: "TP & SL Calculator",
      description: "Calculate optimal Take Profit & Stop Loss levels based on price targets, OB zones, and risk percentage.",
      color: "#06b6d4",
      href: "/tools/tp-sl-calculator",
    },
    {
      icon: PieChart,
      title: "Portfolio Allocation",
      description: "Manage and optimize your portfolio allocation across multiple positions — like institutional portfolio managers.",
      color: "#8b5cf6",
      href: "/tools/portfolio-allocation",
    },
    {
      icon: Gauge,
      title: "ATR & Volatility Analyzer",
      description: "Calculate Average True Range and analyze market volatility for better position sizing and SL placement.",
      color: "#14b8a6",
      href: "/tools/atr-analyzer",
    },
    {
      icon: AlertCircle,
      title: "Economic Calendar",
      description: "Track high-impact economic events (NFP, CPI, FOMC) that drive institutional order flow and volatility.",
      color: "#ef4444",
      href: "/tools/economic-calendar",
    },
    {
      icon: Layers,
      title: "Multi-Timeframe Analysis",
      description: "Analyze multiple timeframes simultaneously to find institutional confluence setups across HTF and LTF.",
      color: "#f97316",
      href: "/tools/mtf-analyzer",
    },
    {
      icon: FileSpreadsheet,
      title: "Trading Journal Template",
      description: "Download a professional trading journal template used by prop firm traders to track performance metrics.",
      color: "#ff9500",
      href: "/tools/journal-template",
    },
    {
      icon: Grid3X3,
      title: "Correlation Matrix",
      description: "Real-time pair correlation heatmap. Institutions use correlations for hedging and avoiding overexposure across positions.",
      color: "#06b6d4",
      href: "/tools/correlation-matrix",
    },
    {
      icon: Activity,
      title: "Currency Strength Meter",
      description: "Identify the strongest and weakest currencies in real-time. Pair strong vs weak for maximum institutional edge.",
      color: "#10b981",
      href: "/tools/currency-strength",
    },
    {
      icon: LineChart,
      title: "Drawdown Calculator",
      description: "Monte Carlo max drawdown probability simulation at your given win rate and R:R. Essential for prop firm compliance.",
      color: "#ef4444",
      href: "/tools/drawdown-calculator",
    },
    {
      icon: Percent,
      title: "Compounding Calculator",
      description: "Project account growth with compound returns and variable monthly withdrawals. The power of consistent returns.",
      color: "#8b5cf6",
      href: "/tools/compounding-calculator",
    },
    {
      icon: Zap,
      title: "Trade Expectancy Calculator",
      description: "Calculate your mathematical edge: (Win% × Avg Win) - (Loss% × Avg Loss). If positive, you have an edge.",
      color: "#f59e0b",
      href: "/tools/expectancy-calculator",
    },
    {
      icon: Eye,
      title: "COT Data Viewer",
      description: "Weekly CFTC institutional positioning charts. See where asset managers and leveraged funds are positioned.",
      color: "#3b82f6",
      href: "/tools/cot-viewer",
    },
    {
      icon: ArrowUpDown,
      title: "Swap/Rollover Calculator",
      description: "Calculate overnight swap costs for holding positions. Critical for carry trade analysis and swing trading costs.",
      color: "#a855f7",
      href: "/tools/swap-calculator",
    },
    {
      icon: Wallet,
      title: "Margin Calculator",
      description: "Multi-position margin requirement tracker. Manage total exposure like an institutional risk desk.",
      color: "#ec4899",
      href: "/tools/margin-calculator",
    },
    {
      icon: Waves,
      title: "Equity Curve Simulator",
      description: "Monte Carlo simulation of strategy performance. Visualize the range of possible equity paths before risking capital.",
      color: "#14b8a6",
      href: "/tools/equity-simulator",
    },
    {
      icon: Gauge,
      title: "Market Regime Detector",
      description: "ADX/ATR-based trending, ranging, and volatile market classification. Adapt your strategy to current conditions.",
      color: "#f97316",
      href: "/tools/regime-detector",
    },
  ],
  bn: [
    {
      icon: Calculator,
      title: "পজিশন সাইজ ক্যালকুলেটর",
      description: "অ্যাকাউন্ট ব্যালেন্স, রিস্ক শতাংশ ও স্টপ লস দূরত্বের ভিত্তিতে অপটিমাল পজিশন সাইজ ক্যালকুলেট করুন — ইনস্টিটিউশনাল রিস্ক ম্যানেজমেন্টের ভিত্তি।",
      color: "#00ff9d",
      href: "/tools/position-calculator",
    },
    {
      icon: DollarSign,
      title: "পিপ ভ্যালু ক্যালকুলেটর",
      description: "যেকোনো কারেন্সি পেয়ার ও লট সাইজের জন্য পিপের মূল্য নির্ধারণ করুন। সঠিক পজিশন সাইজিংয়ের জন্য অপরিহার্য।",
      color: "#3b82f6",
      href: "/tools/pip-value-calculator",
    },
    {
      icon: TrendingUp,
      title: "ফিবোনাচ্চি ক্যালকুলেটর",
      description: "ইনস্টিটিউশনাল ট্রেডারদের ব্যবহৃত OTE (অপটিমাল ট্রেড এন্ট্রি) জোনের জন্য ফিবোনাচ্চি রিট্রেসমেন্ট ও এক্সটেনশন লেভেল ক্যালকুলেট করুন।",
      color: "#10b981",
      href: "/tools/fibonacci-calculator",
    },
    {
      icon: Zap,
      title: "রিস্ক-রিওয়ার্ড ক্যালকুলেটর",
      description: "আপনার ট্রেডের রিস্ক-টু-রিওয়ার্ড রেশিও ও উইন রেট প্রয়োজনীয়তা বিশ্লেষণ করুন। ব্যাংকগুলো সর্বনিম্ন ১:৩ R:R প্রয়োজন করে।",
      color: "#f59e0b",
      href: "/tools/risk-reward-calculator",
    },
    {
      icon: Clock,
      title: "ট্রেডিং সেশন টাইমার",
      description: "রিয়েল-টাইম ট্রেডিং সেশন ক্লক — ইনস্টিটিউশনাল কিল জোন (লন্ডন, নিউ ইয়র্ক, টোকিও, সিডনি) BD সময়ে দেখুন।",
      color: "#a855f7",
      href: "/tools/session-timer",
    },
    {
      icon: BarChart3,
      title: "লট সাইজ কনভার্টার",
      description: "বিভিন্ন ব্রোকার কনফিগারেশনের জন্য লট সাইজ, মাইক্রো লট ও স্ট্যান্ডার্ড কন্ট্র্যাক্ট ভলিউমের মধ্যে কনভার্ট করুন।",
      color: "#ec4899",
      href: "/tools/lot-converter",
    },
    {
      icon: Target,
      title: "TP ও SL ক্যালকুলেটর",
      description: "প্রাইস টার্গেট, OB জোন ও রিস্ক শতাংশের ভিত্তিতে অপটিমাল টেক প্রফিট ও স্টপ লস লেভেল ক্যালকুলেট করুন।",
      color: "#06b6d4",
      href: "/tools/tp-sl-calculator",
    },
    {
      icon: PieChart,
      title: "পোর্টফোলিও অ্যালোকেশন",
      description: "একাধিক পজিশনে পোর্টফোলিও অ্যালোকেশন পরিচালনা ও অপটিমাইজ করুন — ইনস্টিটিউশনাল পোর্টফোলিও ম্যানেজারদের মতো।",
      color: "#8b5cf6",
      href: "/tools/portfolio-allocation",
    },
    {
      icon: Gauge,
      title: "ATR ও ভোলাটিলিটি অ্যানালাইজার",
      description: "বেটার পজিশন সাইজিং ও SL প্লেসমেন্টের জন্য এভারেজ ট্রু রেঞ্জ ক্যালকুলেট ও মার্কেট ভোলাটিলিটি বিশ্লেষণ করুন।",
      color: "#14b8a6",
      href: "/tools/atr-analyzer",
    },
    {
      icon: AlertCircle,
      title: "ইকোনমিক ক্যালেন্ডার",
      description: "হাই-ইম্প্যাক্ট ইকোনমিক ইভেন্ট (NFP, CPI, FOMC) ট্র্যাক করুন যা ইনস্টিটিউশনাল অর্ডার ফ্লো ও ভোলাটিলিটি চালায়।",
      color: "#ef4444",
      href: "/tools/economic-calendar",
    },
    {
      icon: Layers,
      title: "মাল্টি-টাইমফ্রেম অ্যানালাইসিস",
      description: "HTF ও LTF জুড়ে ইনস্টিটিউশনাল কনফ্লুয়েন্স সেটআপ খুঁজতে একসাথে একাধিক টাইমফ্রেম বিশ্লেষণ করুন।",
      color: "#f97316",
      href: "/tools/mtf-analyzer",
    },
    {
      icon: FileSpreadsheet,
      title: "ট্রেডিং জার্নাল টেমপ্লেট",
      description: "পারফরম্যান্স মেট্রিক্স ট্র্যাক করতে প্রপ ফার্ম ট্রেডারদের ব্যবহৃত প্রফেশনাল ট্রেডিং জার্নাল টেমপ্লেট ডাউনলোড করুন।",
      color: "#ff9500",
      href: "/tools/journal-template",
    },
  ],
};

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : "en";
  const dict = await getDictionary(locale);
  const tools = toolsData[locale] || toolsData.en;

  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground">{dict.tools.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{dict.tools.subtitle}</p>

      {/* Institutional Note */}
      <div className="mt-6 rounded-xl border border-accent-orange/20 bg-accent-orange/5 p-4 text-sm text-muted-foreground">
        {locale === "bn"
          ? "🏦 এই টুলগুলো ইনস্টিটিউশনাল ট্রেডার এবং প্রপ ফার্ম ট্রেডারদের প্রতিদিনের রিস্ক ম্যানেজমেন্ট ওয়ার্কফ্লো অনুসরণ করে ডিজাইন করা হয়েছে।"
          : "🏦 These tools are designed following the daily risk management workflows of institutional traders and prop firm desks."}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.title}
              href={`/${lang}${tool.href}`}
            >
              <div
                className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent-green/30 hover:bg-accent-green/5 hover:shadow-lg"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tool.color}15` }}
                >
                  <Icon size={20} style={{ color: tool.color }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent-green">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-muted-foreground group-hover:text-accent-green">
                  {locale === "bn" ? "টুল খুলুন →" : "Launch Tool →"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
