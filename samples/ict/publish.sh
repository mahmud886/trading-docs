#!/usr/bin/env bash
# Publish one ICT lesson from samples/ict/<slug> to the site, build, commit, push and fast-forward main.
# Usage: samples/ict/publish.sh <slug> "<commit subject>" "<commit body>"
set -euo pipefail
slug=$1; subject=$2; body=$3
cd "$(git rev-parse --show-toplevel)"
src=samples/ict/$slug
for l in en bn; do cp "$src/$slug.$l.mdx" "content/$l/ict/$slug.mdx"; done
if ls "$src"/output/*.png >/dev/null 2>&1; then
  mkdir -p "public/images/ict/$slug" public/videos/ict
  cp "$src"/output/*.png "public/images/ict/$slug/"
  cp "$src"/output/*.mp4 public/videos/ict/ 2>/dev/null || true
fi
fail=0
for l in en bn; do
  f=content/$l/ict/$slug.mdx
  for p in $(grep -oE '/(images|videos)/[a-z0-9/._-]+' "$f" | sort -u); do
    [ -f "public$p" ] || { echo "MISSING asset $p"; fail=1; }
    [ -f "public${p/-dark./-light.}" ] || { echo "MISSING light twin $p"; fail=1; }
  done
  for link in $(grep -oE '\]\(/[a-z]+/[a-z0-9/-]+\)' "$f" | tr -d '()]' | sort -u); do
    lang=$(echo "$link" | cut -d/ -f2); rest=$(echo "$link" | cut -d/ -f3-)
    [ -f "content/$lang/$rest.mdx" ] || [ -d "app/[lang]/(content)/$rest" ] || { echo "MISSING link $link"; fail=1; }
  done
done
[ $fail = 0 ]
npx prettier --write "content/en/ict/$slug.mdx" "content/bn/ict/$slug.mdx" >/dev/null
log=$(mktemp)
timeout 900 npx next build >"$log" 2>&1 || { tail -30 "$log"; exit 1; }
for l in en bn; do
  h=.next/server/app/$l/ict/$slug.html
  [ -f "$h" ] || { echo "page not built: $h"; exit 1; }
  echo "$l/$slug: $(grep -o 'theme-dark-only' "$h" | wc -l) dark, $(grep -o '<video' "$h" | wc -l) video"
done
git checkout -q next-env.d.ts 2>/dev/null || true
find "$src" -name __pycache__ -prune -exec rm -rf {} +
git add "$src" "content/en/ict/$slug.mdx" "content/bn/ict/$slug.mdx"
[ -d "public/images/ict/$slug" ] && git add "public/images/ict/$slug" public/videos/ict
git commit -q -m "$subject" -m "$body" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01NwitYNpi7ecf2M24KK5cFd"
git push -q
git checkout -q main && git merge --ff-only -q claude/ict-deep-lessons && git push -q origin main
git checkout -q claude/ict-deep-lessons
git log --oneline -1
