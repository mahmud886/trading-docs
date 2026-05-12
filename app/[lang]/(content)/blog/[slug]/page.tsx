import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { createMdxComponents } from "@/components/docs/mdx-components";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import type { Locale } from "@/lib/i18n";

function getBlogPost(locale: Locale, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    locale,
    "blog",
    `${slug}.mdx`
  );
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const locale of ["en", "bn"]) {
    const dir = path.join(process.cwd(), "content", locale, "blog");
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      params.push({ lang: locale, slug: file.replace(".mdx", "") });
    }
  }
  return params;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const post = getBlogPost(locale, slug);

   if (!post) return notFound();

   const { content: mdxContent } = await compileMDX({
     source: post.content,
     components: createMdxComponents(),
     options: {
       mdxOptions: {
         remarkPlugins: [remarkGfm],
       },
     },
   });

  const isBn = locale === "bn";
  const backText = isBn ? "← ব্লগে ফিরে যান" : "← Back to Blog";
  const minRead = isBn ? "মিনিট পড়া" : "min read";

  return (
    <div>
      <Link
        href={`/${lang}/blog`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent-green"
      >
        {backText}
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {post.data.category && (
              <span className="rounded-full border border-border px-2.5 py-0.5 font-medium">
                {post.data.category}
              </span>
            )}
            {post.data.date && (
              <span className="flex items-center gap-1">
                <Calendar size={10} />
                {post.data.date}
              </span>
            )}
            {post.data.readingTime && (
              <span className="flex items-center gap-1">
                <Clock size={10} />
                {post.data.readingTime} {minRead}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-bold text-foreground">
            {post.data.title}
          </h1>
          {post.data.description && (
            <p className="mt-3 text-lg text-muted-foreground">
              {post.data.description}
            </p>
          )}
        </div>

        <div className="prose max-w-none dark:prose-invert">{mdxContent}</div>
      </article>
    </div>
  );
}
