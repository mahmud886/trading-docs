"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

interface Position {
  id: number;
  name: string;
  percentage: number;
  color: string;
}

export default function PortfolioAllocation() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  const defaultPositions: Position[] = [
    { id: 1, name: "EURUSD", percentage: 30, color: "bg-blue-500" },
    { id: 2, name: "GBPUSD", percentage: 25, color: "bg-green-500" },
    { id: 3, name: "USDJPY", percentage: 20, color: "bg-purple-500" },
    { id: 4, name: "Gold (XAUUSD)", percentage: 15, color: "bg-yellow-500" },
    { id: 5, name: "Crude Oil (WTIUSD)", percentage: 10, color: "bg-orange-500" },
  ];

  const [positions, setPositions] = useState<Position[]>(defaultPositions);
  const [newPositionName, setNewPositionName] = useState("");
  const [newPositionPercentage, setNewPositionPercentage] = useState(0);

  const totalAllocation = positions.reduce((sum, p) => sum + p.percentage, 0);
  const isBalanced = Math.abs(totalAllocation - 100) < 0.01;

  const addPosition = () => {
    if (newPositionName && newPositionPercentage > 0) {
      const colors = ["bg-red-500", "bg-indigo-500", "bg-pink-500", "bg-cyan-500", "bg-lime-500"];
      setPositions([
        ...positions,
        {
          id: Date.now(),
          name: newPositionName,
          percentage: newPositionPercentage,
          color: colors[positions.length % colors.length],
        },
      ]);
      setNewPositionName("");
      setNewPositionPercentage(0);
    }
  };

  const updatePosition = (id: number, percentage: number) => {
    setPositions(positions.map((p) => (p.id === id ? { ...p, percentage } : p)));
  };

  const deletePosition = (id: number) => {
    setPositions(positions.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href={`/${lang}/tools`}
        className="flex items-center gap-2 text-muted-foreground hover:text-accent-green mb-6 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Tools
      </Link>

      <div className="bg-card border border-border rounded-2xl backdrop-blur-xl p-8">
        <h1 className="text-3xl font-bold text-foreground">Portfolio Allocation Tool</h1>
        <p className="text-muted-foreground mt-2">
          Manage and optimize your trading portfolio across multiple positions
        </p>

        {/* Pie Chart Visualization */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {positions.map((pos, idx) => {
                let startAngle = positions.slice(0, idx).reduce((sum, p) => sum + p.percentage * 3.6, 0);
                let endAngle = startAngle + pos.percentage * 3.6;

                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;

                const x1 = 50 + 40 * Math.cos(startRad);
                const y1 = 50 + 40 * Math.sin(startRad);
                const x2 = 50 + 40 * Math.cos(endRad);
                const y2 = 50 + 40 * Math.sin(endRad);

                const largeArc = endAngle - startAngle > 180 ? 1 : 0;

                const colorMap: { [key: string]: string } = {
                  "bg-blue-500": "#3b82f6",
                  "bg-green-500": "#22c55e",
                  "bg-purple-500": "#a855f7",
                  "bg-yellow-500": "#eab308",
                  "bg-orange-500": "#f97316",
                  "bg-red-500": "#ef4444",
                  "bg-indigo-500": "#6366f1",
                  "bg-pink-500": "#ec4899",
                  "bg-cyan-500": "#06b6d4",
                  "bg-lime-500": "#84cc16",
                };

                return (
                  <path
                    key={pos.id}
                    d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={colorMap[pos.color]}
                    opacity="0.8"
                  />
                );
              })}
              <circle cx="50" cy="50" r="25" fill="#111827" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{totalAllocation.toFixed(1)}%</p>
                <p className={`text-xs ${isBalanced ? "text-green-400" : "text-yellow-400"}`}>
                  {isBalanced ? "✓ Balanced" : "Not Balanced"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Positions List */}
        <div className="mt-8 space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Current Positions</h2>

          {positions.map((pos) => (
            <div key={pos.id} className="bg-muted border border-border rounded-lg p-4">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-3 h-3 rounded-full ${pos.color}`}></div>
                <p className="text-foreground font-medium flex-1">{pos.name}</p>
                <button
                  onClick={() => deletePosition(pos.id)}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove
                </button>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={pos.percentage}
                  onChange={(e) => updatePosition(pos.id, Number(e.target.value))}
                  className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="w-16">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={pos.percentage}
                    onChange={(e) => updatePosition(pos.id, Number(e.target.value))}
                    className="w-full px-2 py-1 bg-muted border border-border rounded text-foreground text-sm text-center focus:outline-none focus:border-accent-green"
                  />
                </div>
                <span className="w-12 text-right text-foreground font-semibold">{pos.percentage.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Position */}
        <div className="mt-8 bg-muted border border-border rounded-lg p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">Add New Position</h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Position name (e.g., Bitcoin)"
              value={newPositionName}
              onChange={(e) => setNewPositionName(e.target.value)}
              className="flex-1 px-3 py-2 bg-muted border border-border rounded text-foreground text-sm focus:outline-none focus:border-accent-green"
            />
            <input
              type="number"
              placeholder="% allocation"
              value={newPositionPercentage}
              onChange={(e) => setNewPositionPercentage(Number(e.target.value))}
              min="0"
              max="100"
              step="0.1"
              className="w-24 px-3 py-2 bg-muted border border-border rounded text-foreground text-sm focus:outline-none focus:border-accent-green text-center"
            />
            <button
              onClick={addPosition}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-foreground rounded text-sm font-medium transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* Allocation Summary */}
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`border rounded-lg p-4 ${isBalanced ? "bg-green-900/20 border-green-500/30" : "bg-yellow-900/20 border-yellow-500/30"}`}
            >
              <p className="text-muted-foreground text-sm">Total Allocation</p>
              <p className={`text-2xl font-bold mt-1 ${isBalanced ? "text-green-400" : "text-yellow-400"}`}>
                {totalAllocation.toFixed(1)}%
              </p>
            </div>

            <div
              className={`border rounded-lg p-4 ${isBalanced ? "bg-green-900/20 border-green-500/30" : "bg-red-900/20 border-red-500/30"}`}
            >
              <p className="text-muted-foreground text-sm">Remaining</p>
              <p className={`text-2xl font-bold mt-1 ${isBalanced ? "text-green-400" : "text-red-400"}`}>
                {(100 - totalAllocation).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-200 mb-2">💡 Portfolio Tips</h3>
          <ul className="text-sm text-foreground space-y-1 list-disc list-inside">
            <li>Don't allocate more than 100% of your capital</li>
            <li>Diversify across different currency pairs/assets</li>
            <li>Higher volatility positions should have smaller allocations</li>
            <li>Rebalance periodically when one position grows too large</li>
            <li>Consider correlation between positions to reduce risk</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
