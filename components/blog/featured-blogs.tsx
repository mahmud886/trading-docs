"use client";

import Link from "next/link";
import { Calendar, Clock, Sparkles } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface FeaturedBlogsProps {
  posts: BlogPost[];
  locale: string;
}

export function FeaturedBlogs({ posts, locale }: FeaturedBlogsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-10">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles size={24} className="text-accent-green" />
        <h3 className="text-3xl font-bold text-foreground">Featured Articles</h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-2xl border-2 border-accent-green/20 bg-gradient-to-br from-accent-green/5 to-card transition-all hover:border-accent-green/50 hover:shadow-lg hover:shadow-accent-green/20"
          >
            {/* Featured badge */}
            <div className="absolute right-0 top-0 bg-accent-green px-3 py-1 text-xs font-bold text-black">
              FEATURED
            </div>

            <div className="p-6">
              {/* Number */}
              <div className="mb-4 text-4xl font-bold opacity-10 text-accent-green">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Category */}
              <span className="inline-flex rounded-full bg-accent-green/10 px-3 py-1 text-xs font-semibold text-accent-green mb-3">
                {post.category}
              </span>

              {/* Title */}
              <h2 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-accent-green">
                {post.title}
              </h2>

              {/* Description */}
              <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.description}</p>

              {/* Meta */}
              <div className="flex items-center gap-4 border-t border-accent-green/10 pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readingTime} min
                </span>
              </div>

              {/* CTA */}
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-green transition-transform group-hover:translate-x-1">
                Read Article →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
