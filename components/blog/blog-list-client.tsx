"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Calendar, Clock, Search } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
  locale: string;
  pageSize?: number;
}

export function BlogListClient({
  posts,
  categories,
  locale,
  pageSize = 6,
}: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and search
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [posts, selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedPosts = filteredPosts.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full rounded-lg border border-border bg-card px-4 py-3 pl-10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-green/50"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === null
                ? "bg-accent-green text-black"
                : "border border-border bg-card text-foreground hover:border-accent-green/50"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-accent-green text-black"
                  : "border border-border bg-card text-foreground hover:border-accent-green/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Blog Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {paginatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent-green/30 hover:bg-accent-green/5"
            >
              {/* Category Tag */}
              <div className="mb-3 inline-flex w-fit">
                <span className="rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-xs font-semibold text-accent-green">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent-green">
                {post.title}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              {/* Metadata */}
              <div className="flex items-center gap-4 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US")}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readingTime} min read
                </div>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-[10px] text-muted-foreground">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card p-12 text-center">
          <Search className="mx-auto mb-3 h-12 w-12 text-muted-foreground/30" />
          <p className="text-lg font-medium text-foreground">No posts found</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent-green/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>

          {/* Page numbers */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => {
                const distance = Math.abs(page - currentPage);
                return distance <= 1 || page === 1 || page === totalPages;
              })
              .map((page, idx, arr) => {
                if (idx > 0 && arr[idx - 1] < page - 1) {
                  return (
                    <span
                      key={`dots-${page}`}
                      className="px-2 py-1 text-sm text-muted-foreground"
                    >
                      ...
                    </span>
                  );
                }
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                      page === currentPage
                        ? "bg-accent-green text-black"
                        : "border border-border text-foreground hover:bg-accent-green/10"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent-green/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

