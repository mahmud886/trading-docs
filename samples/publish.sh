#!/usr/bin/env bash
# Publish one lesson from samples/<section>/<slug> to the site, build, commit, push; main only with PUSH_MAIN=1 (each main push triggers a Vercel deploy).
# Usage: samples/publish.sh <section> <slug> "<commit subject>" "<commit body>"
set -euo pipefail
sec=$1; slug=$2; subject=$3; body=$4
cd "$(git rev-parse --show-toplevel)"
src=samples/$sec/$slug
for l in en bn; do cp "$src/$slug.$l.mdx" "content/$l/$sec/$slug.mdx"; done
if ls "$src"/output/*.png >/dev/null 2>&1; then
  mkdir -p "public/images/$sec/$slug" public/videos/$sec
  cp "$src"/output/*.png "public/images/$sec/$slug/"
  cp "$src"/output/*.mp4 public/videos/$sec/ 2>/dev/null || true
fi
# Ship WebP images and 1600x900 videos (and point the lesson at .webp) to keep deployments small.
python3 scripts/optimize-assets.py --content >/dev/null
fail=0
for l in en bn; do
  f=content/$l/$sec/$slug.mdx
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
npx prettier --write "content/en/$sec/$slug.mdx" "content/bn/$sec/$slug.mdx" >/dev/null
log=$(mktemp)
timeout 900 npx next build >"$log" 2>&1 || { tail -30 "$log"; exit 1; }
for l in en bn; do
  h=.next/server/app/$l/$sec/$slug.html
  [ -f "$h" ] || { echo "page not built: $h"; exit 1; }
  echo "$l/$slug: $(grep -o 'theme-dark-only' "$h" | wc -l) dark, $(grep -o '<video' "$h" | wc -l) video"
done
git checkout -q next-env.d.ts 2>/dev/null || true
find "$src" -name __pycache__ -prune -exec rm -rf {} +
git add "$src" "content/en/$sec/$slug.mdx" "content/bn/$sec/$slug.mdx"
[ -d "public/images/$sec/$slug" ] && git add "public/images/$sec/$slug" public/videos/$sec
git commit -q -m "$subject" -m "$body" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01NwitYNpi7ecf2M24KK5cFd"
retry() { for i in 1 2 3 4 5; do "$@" && return 0; sleep $((i * 8)); done; return 1; }
retry git push -q -u origin claude/ict-deep-lessons
[ "${PUSH_MAIN:-0}" = 1 ] && retry git push -q origin claude/ict-deep-lessons:main || true
git log --oneline -1
