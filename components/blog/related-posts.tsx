"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
  locale: string;
}

export function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h3 className="mb-8 text-2xl font-bold text-foreground">Related Posts</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card/50 p-5 transition-all hover:border-accent-green/30 hover:bg-accent-green/5"
          >
            {/* Category */}
            <span className="mb-2 inline-flex w-fit rounded-full bg-accent-green/10 px-2.5 py-0.5 text-xs font-semibold text-accent-green">
              {post.category}
            </span>

            {/* Title */}
            <h4 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-accent-green line-clamp-2">
              {post.title}
            </h4>

            {/* Description */}
            <p className="mb-auto text-sm text-muted-foreground line-clamp-2">
              {post.description}
            </p>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readingTime}m
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

