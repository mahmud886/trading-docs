# Trading Docs — Project Overview

Next.js 16 MDX site, bilingual (EN + BN). Read `node_modules/next/dist/docs/` before changing framework code (see `AGENTS.md`).

## Content (306 pages per language)

| Section | Pages | Section | Pages |
| --- | --- | --- | --- |
| SMC | 31 | Order Flow | 8 |
| ICT | 31 | Auction Market | 7 |
| Price Action | 32 | Intermarket | 8 |
| Forex Sessions | 16 | Quantitative | 9 |
| Wyckoff | 8 | Blog | 39 |

Files: `content/{en,bn}/<section>/<slug>.mdx`. BN is Bangla prose with English technical terms.

Every lesson has a dark/light chart pair, an MP4 explainer, a synthetic-data callout, a planned R:R example, no unsourced claims, and Bangladesh-time (BD) fixes. Blog posts reuse the lesson assets.

## Assets and storage

- Images: `public/images/<section>/<slug>/*-{dark,light}.webp` (≈29 MB, 350 WebP files). `img` maps to `ZoomImage` (zoom/fullscreen; dark/light chosen by suffix).
- Videos: `public/videos/<section>/*-{dark,light}.mp4` (≈51 MB, 298 files), 1600x900 crf27, rendered by `<LessonVideo>` with fullscreen.
- `public/` total ≈ 79 MB (PNG→WebP and video compression done via `scripts/optimize-assets.py --content`). `.git` is ≈ 283 MB because of history, not the deployed site.

## Authoring workflow (`samples/`)

- Chart kits: `samples/smc-charts`, `smc/_shared`, `forex-sessions/_shared`, `auction-market/_shared`, `intermarket/_shared`; each lesson has `charts/`, `data/`, `output/` and `<slug>.{en,bn}.mdx`.
- `samples/publish.sh <section> <slug> "<subject>" "<body>"`: copy MDX, optimise assets, check links, prettier, `next build`, commit, push.
- Blog: `samples/blog/posts/<slug>.py` specs → `make_post.py` → `publish_batch.sh slug...` (one build, one commit per post).
- Data is synthetic and disclosed as such; chart scripts assert that the numbers in the text match.

## Deploy

Vercel deploys were turned off because storage was full. Turn them back on only after checking usage against the figures above. Pushing to `main` triggers a deploy once it is on.
