"use client";

import { useState, useEffect } from "react";
import { BookOpen, Bookmark, CheckCircle, TrendingUp } from "lucide-react";

interface ProgressData {
  completed: string[];
  bookmarks: string[];
}

export default function DashboardPage() {
  const [data, setData] = useState<ProgressData>({
    completed: [],
    bookmarks: [],
  });

  useEffect(() => {
    const saved = localStorage.getItem("trading-docs-progress");
    if (saved) setData(JSON.parse(saved));
  }, []);

  const completedCount = data.completed.length;
  const bookmarkCount = data.bookmarks.length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold text-white">Your Dashboard</h1>
      <p className="mt-3 text-lg text-zinc-400">
        Track your learning progress and manage bookmarks
      </p>

      {/* Stats */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: CheckCircle,
            label: "Completed",
            value: completedCount,
            color: "#00ff9d",
          },
          {
            icon: Bookmark,
            label: "Bookmarked",
            value: bookmarkCount,
            color: "#3b82f6",
          },
          {
            icon: TrendingUp,
            label: "Progress",
            value: `${completedCount > 0 ? Math.round((completedCount / 200) * 100) : 0}%`,
            color: "#ff9500",
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6"
            >
              <Icon size={24} style={{ color: stat.color }} />
              <div className="mt-3 text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Overall Progress</h2>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00ff9d] to-[#3b82f6] transition-all"
            style={{
              width: `${completedCount > 0 ? Math.round((completedCount / 200) * 100) : 0}%`,
            }}
          />
        </div>
        <p className="mt-2 text-sm text-zinc-500">
          {completedCount} of ~200 lessons completed
        </p>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            <CheckCircle size={18} className="mr-2 inline text-[#00ff9d]" />
            Completed Lessons
          </h2>
          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6">
            {data.completed.length > 0 ? (
              <ul className="space-y-2">
                {data.completed.slice(-10).map((item) => (
                  <li key={item} className="text-sm text-zinc-400 capitalize">
                    {item.replace(/-/g, " ").replace(/\//g, " → ")}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-zinc-500">
                No completed lessons yet. Start learning!
              </p>
            )}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            <Bookmark size={18} className="mr-2 inline text-[#3b82f6]" />
            Bookmarked Lessons
          </h2>
          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6">
            {data.bookmarks.length > 0 ? (
              <ul className="space-y-2">
                {data.bookmarks.map((item) => (
                  <li key={item} className="text-sm text-zinc-400 capitalize">
                    {item.replace(/-/g, " ").replace(/\//g, " → ")}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-zinc-500">
                No bookmarks yet. Save lessons for later!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

