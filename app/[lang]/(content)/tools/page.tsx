import Link from "next/link";
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
  Gauge
} from "lucide-react";

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const tools: Array<{
    icon: any;
    title: string;
    description: string;
    color: string;
    href: string;
  }> = [
    {
      icon: Calculator,
      title: "Position Size Calculator",
      description: "Calculate the optimal position size based on your account balance, risk percentage, and stop loss distance.",
      color: "#00ff9d",
      href: "/tools/position-calculator",
    },
    {
      icon: DollarSign,
      title: "Pip Value Calculator",
      description: "Determine the value of a pip for any currency pair and lot size.",
      color: "#3b82f6",
      href: "/tools/pip-value-calculator",
    },
    {
      icon: TrendingUp,
      title: "Fibonacci Calculator",
      description: "Calculate Fibonacci retracement and extension levels for your trades.",
      color: "#10b981",
      href: "/tools/fibonacci-calculator",
    },
    {
      icon: Zap,
      title: "Risk-Reward Ratio Calculator",
      description: "Analyze your trade's risk-to-reward ratio and win rate requirements.",
      color: "#f59e0b",
      href: "/tools/risk-reward-calculator",
    },
    {
      icon: Clock,
      title: "Trading Session Timer",
      description: "Real-time trading session clock showing London, New York, Tokyo, and Sydney market hours.",
      color: "#a855f7",
      href: "/tools/session-timer",
    },
    {
      icon: BarChart3,
      title: "Lot Size to Volume Converter",
      description: "Convert between lot sizes, micro lots, and standard contract volumes.",
      color: "#ec4899",
      href: "/tools/lot-converter",
    },
    {
      icon: Target,
      title: "Take Profit & Stop Loss Calculator",
      description: "Calculate optimal TP/SL levels based on price targets and risk percentage.",
      color: "#06b6d4",
      href: "/tools/tp-sl-calculator",
    },
    {
      icon: PieChart,
      title: "Portfolio Allocation Tool",
      description: "Manage and optimize your trading portfolio allocation across multiple positions.",
      color: "#8b5cf6",
      href: "/tools/portfolio-allocation",
    },
    {
      icon: Gauge,
      title: "ATR & Volatility Analyzer",
      description: "Calculate Average True Range and analyze market volatility for better position sizing.",
      color: "#14b8a6",
      href: "/tools/atr-analyzer",
    },
    {
      icon: AlertCircle,
      title: "Economic Calendar Alert",
      description: "Get notifications for important economic events that impact your trading.",
      color: "#ef4444",
      href: "/tools/economic-calendar",
    },
    {
      icon: Layers,
      title: "Multi-Timeframe Analysis",
      description: "Analyze multiple timeframes simultaneously to find confluence setups.",
      color: "#f97316",
      href: "/tools/mtf-analyzer",
    },
    {
      icon: FileSpreadsheet,
      title: "Trading Journal Template",
      description: "Download a professional trading journal template to track your trades and performance.",
      color: "#ff9500",
      href: "/tools/journal-template",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground">Trading Tools</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Essential calculators and tools to enhance your trading performance
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.title}
              href={`/${lang}${tool.href}`}
            >
              <div
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent-green/30 hover:bg-accent-green/5 hover:shadow-lg"
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
                  Launch Tool →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

