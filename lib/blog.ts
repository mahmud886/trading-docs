import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

const blogDir = (locale: Locale) => path.join(process.cwd(), "content", locale, "blog");

/**
 * Get all blog posts for a locale
 */
export function getAllBlogPosts(locale: Locale): BlogPost[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const posts: BlogPost[] = files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title ?? file.replace(".mdx", ""),
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString().split("T")[0],
      author: data.author ?? "Trading Docs",
      category: data.category ?? "General",
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? 5,
      featured: data.featured ?? false,
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post with content
 */
export function getBlogPostBySlug(locale: Locale, slug: string): BlogPostWithContent | null {
  const dir = blogDir(locale);
  const filePath = path.join(dir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString().split("T")[0],
    author: data.author ?? "Trading Docs",
    category: data.category ?? "General",
    tags: data.tags ?? [],
    readingTime: data.readingTime ?? 5,
    featured: data.featured ?? false,
    content,
  };
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(locale: Locale, limit: number = 3): BlogPost[] {
  return getAllBlogPosts(locale)
    .filter((post) => post.featured)
    .slice(0, limit);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(locale: Locale, category: string): BlogPost[] {
  return getAllBlogPosts(locale).filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Get all blog categories
 */
export function getAllBlogCategories(locale: Locale): string[] {
  const posts = getAllBlogPosts(locale);
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

/**
 * Paginate blog posts
 */
export function paginateBlogPosts(
  posts: BlogPost[],
  page: number = 1,
  pageSize: number = 6,
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const totalPages = Math.ceil(posts.length / pageSize);
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;

  return {
    posts: posts.slice(startIdx, endIdx),
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}

/**
 * Find related posts by tags and category
 */
export function getRelatedBlogPosts(locale: Locale, currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts(locale).filter((post) => post.slug !== currentPost.slug);

  // Score posts based on tag overlap and category match
  const scored = allPosts.map((post) => {
    let score = 0;

    // Same category: +10 points
    if (post.category === currentPost.category) score += 10;

    // Shared tags: +3 points each
    const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag)).length;
    score += sharedTags * 3;

    return { post, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

/**
 * Search blog posts
 */
export function searchBlogPosts(locale: Locale, query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  const allPosts = getAllBlogPosts(locale);

  return allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      post.category.toLowerCase().includes(lowerQuery)
    );
  });
}
