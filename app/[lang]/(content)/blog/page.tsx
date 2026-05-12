import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  category: string;
  featured?: boolean;
}

function getBlogPosts(locale: Locale): BlogPost[] {
  const dir = path.join(process.cwd(), "content", locale, "blog");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const posts: BlogPost[] = files.map((file) => {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(content);
    return {
      slug: file.replace(".mdx", ""),
      title: data.title ?? file.replace(".mdx", "").replace(/-/g, " "),
      description: data.description ?? "",
      date: data.date ?? "2026-01-01",
      readingTime: data.readingTime ?? 5,
      category: data.category ?? "General",
      featured: data.featured ?? false,
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const posts = getBlogPosts(locale);

  const isBn = locale === "bn";
  const title = isBn ? "ব্লগ" : "Blog";
  const subtitle = isBn
    ? "ট্রেডিং শিক্ষা ও মার্কেট অ্যানালাইসিসের সর্বশেষ আর্টিকেল"
    : "Latest articles on trading education and market analysis";
  const minRead = isBn ? "মিনিট পড়া" : "min read";

  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground">{title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${lang}/blog/${post.slug}`}
            className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-accent-green/30 hover:bg-accent-green/5"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-2.5 py-0.5 font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={10} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {post.readingTime} {minRead}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent-green">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
