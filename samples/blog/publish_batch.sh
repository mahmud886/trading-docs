#!/usr/bin/env bash
# Publish several blog posts with ONE site build: samples/blog/publish_batch.sh slug1 slug2 ... ; one commit per post, one push.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
sec=blog
for s in "$@"; do for l in en bn; do cp "samples/$sec/$s/$s.$l.mdx" "content/$l/$sec/$s.mdx"; done; done
python3 scripts/optimize-assets.py --content >/dev/null
fail=0
for s in "$@"; do for l in en bn; do
  f=content/$l/$sec/$s.mdx
  for p in $(grep -oE '/(images|videos)/[a-z0-9/._-]+' "$f" | sort -u); do
    [ -f "public$p" ] || { echo "MISSING asset $p ($s)"; fail=1; }
    [ -f "public${p/-dark./-light.}" ] || { echo "MISSING light twin $p ($s)"; fail=1; }
  done
  for link in $(grep -oE '\]\(/[a-z]+/[a-z0-9/-]+\)' "$f" | tr -d '()]' | sort -u); do
    lang=$(echo "$link" | cut -d/ -f2); rest=$(echo "$link" | cut -d/ -f3-)
    [ -f "content/$lang/$rest.mdx" ] || [ -d "app/[lang]/(content)/$rest" ] || { echo "MISSING link $link ($s)"; fail=1; }
  done
done; done
[ $fail = 0 ]
for s in "$@"; do npx prettier --write "content/en/$sec/$s.mdx" "content/bn/$sec/$s.mdx" >/dev/null; done
log=$(mktemp)
timeout 1200 npx next build >"$log" 2>&1 || { tail -30 "$log"; exit 1; }
for s in "$@"; do for l in en bn; do
  h=.next/server/app/$l/$sec/$s.html
  [ -f "$h" ] || { echo "page not built: $h"; exit 1; }
  echo "$l/$s: $(grep -o 'theme-dark-only' "$h" | wc -l) dark, $(grep -o '<video' "$h" | wc -l) video"
done; done
git checkout -q next-env.d.ts 2>/dev/null || true
for s in "$@"; do
  title=$(grep -m1 '^title:' "samples/$sec/$s/$s.en.mdx" | sed 's/^title: "//; s/"$//')
  git add "samples/$sec/$s" "content/en/$sec/$s.mdx" "content/bn/$sec/$s.mdx"
  git commit -q -m "Rewrite blog post: $title (EN + BN)" -m "Rewrites the post with unsourced win-rate, percentage and institutional claims removed, BD-time fixes where times appear, a planned example with R:R, common mistakes, practice and links to the related lessons; reuses the chart and animated video of the matching deep lesson." -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01NwitYNpi7ecf2M24KK5cFd"
done
for i in 1 2 3 4 5; do git push -q -u origin claude/ict-deep-lessons && break || sleep $((i * 8)); done
git log --oneline -$#
