"use client";

import { useState, useEffect } from "react";
import { Bookmark, CheckCircle, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";

interface ProgressData {
  completed: string[];
  bookmarks: string[];
}

// i18n strings for dashboard (client component can't use async getDictionary)
const dashboardDict = {
  en: {
    title: "Your Dashboard",
    subtitle: "Track your learning progress and manage bookmarks",
    completedCount: "Completed",
    bookmarkedCount: "Bookmarked",
    progressPercent: "Progress",
    overallProgress: "Overall Progress",
    lessonsOf: "of ~200 lessons completed",
    completedLessons: "Completed Lessons",
    bookmarkedLessons: "Bookmarked Lessons",
    noCompleted: "No completed lessons yet. Start learning!",
    noBookmarks: "No bookmarks yet. Save lessons for later!",
    institutionalTip:
      "💡 Pro Tip: Institutional traders review their progress weekly. Track your win rate and R:R ratios alongside lesson completion.",
  },
  bn: {
    title: "আপনার ড্যাশবোর্ড",
    subtitle: "আপনার শেখার অগ্রগতি ট্র্যাক করুন এবং বুকমার্ক পরিচালনা করুন",
    completedCount: "সম্পন্ন",
    bookmarkedCount: "বুকমার্ক",
    progressPercent: "অগ্রগতি",
    overallProgress: "সামগ্রিক অগ্রগতি",
    lessonsOf: "~২০০ পাঠের মধ্যে সম্পন্ন",
    completedLessons: "সম্পন্ন পাঠ",
    bookmarkedLessons: "বুকমার্ক করা পাঠ",
    noCompleted: "এখনো কোনো পাঠ সম্পন্ন হয়নি। শেখা শুরু করুন!",
    noBookmarks: "এখনো কোনো বুকমার্ক নেই। পরে পড়ার জন্য পাঠ সেভ করুন!",
    institutionalTip:
      "💡 প্রো টিপ: ইনস্টিটিউশনাল ট্রেডাররা সাপ্তাহিক অগ্রগতি পর্যালোচনা করে। পাঠ সম্পন্নের পাশাপাশি আপনার উইন রেট ও R:R রেশিও ট্র্যাক করুন।",
  },
};

export default function DashboardPage() {
  const [data, setData] = useState<ProgressData>({
    completed: [],
    bookmarks: [],
  });

  const pathname = usePathname();
  const lang = (pathname.split("/")[1] || "en") as "en" | "bn";
  const t = dashboardDict[lang] || dashboardDict.en;

  useEffect(() => {
    const saved = localStorage.getItem("trading-docs-progress");
    if (saved) {
      const parsed = JSON.parse(saved);
      requestAnimationFrame(() => setData(parsed));
    }
  }, []);

  const completedCount = data.completed.length;
  const bookmarkCount = data.bookmarks.length;
  const progressPercent = completedCount > 0 ? Math.round((completedCount / 200) * 100) : 0;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold text-foreground">{t.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{t.subtitle}</p>

      {/* Institutional Tip */}
      <div className="mt-6 rounded-xl border border-accent-green/20 bg-accent-green/5 p-4 text-sm text-muted-foreground">
        {t.institutionalTip}
      </div>

      {/* Stats */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: CheckCircle,
            label: t.completedCount,
            value: completedCount,
            color: "#00ff9d",
          },
          {
            icon: Bookmark,
            label: t.bookmarkedCount,
            value: bookmarkCount,
            color: "#38bdf8",
          },
          {
            icon: TrendingUp,
            label: t.progressPercent,
            value: `${progressPercent}%`,
            color: "#fb923c",
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-6 backdrop-blur-xl">
              <Icon size={24} style={{ color: stat.color }} />
              <div className="mt-3 text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-foreground">{t.overallProgress}</h2>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-linear-to-r from-accent-green to-accent-blue transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {completedCount} {t.lessonsOf}
        </p>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            <CheckCircle size={18} className="mr-2 inline text-accent-green" />
            {t.completedLessons}
          </h2>
          <div className="rounded-xl border border-border bg-card p-6 backdrop-blur-xl">
            {data.completed.length > 0 ? (
              <ul className="space-y-2">
                {data.completed.slice(-10).map((item) => (
                  <li key={item} className="text-sm text-muted-foreground capitalize">
                    {item.replace(/-/g, " ").replace(/\//g, " → ")}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{t.noCompleted}</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            <Bookmark size={18} className="mr-2 inline text-accent-blue" />
            {t.bookmarkedLessons}
          </h2>
          <div className="rounded-xl border border-border bg-card p-6 backdrop-blur-xl">
            {data.bookmarks.length > 0 ? (
              <ul className="space-y-2">
                {data.bookmarks.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground capitalize">
                    {item.replace(/-/g, " ").replace(/\//g, " → ")}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{t.noBookmarks}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
