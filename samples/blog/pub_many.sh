#!/usr/bin/env bash
# Publish several blog posts in order: samples/blog/pub_many.sh slug1 slug2 ...  (logs to /tmp/claude-0/pubblog.log)
cd "$(git rev-parse --show-toplevel)"
for s in "$@"; do
  title=$(grep -m1 '^title:' "samples/blog/$s/$s.en.mdx" | sed 's/^title: "//; s/"$//')
  ok=0
  for i in 1 2 3; do
    if bash samples/publish.sh blog "$s" "Rewrite blog post: $title (EN + BN)" "Rewrites the post with unsourced win-rate, percentage and institutional claims removed, a planned example with R:R, common mistakes, practice and links to the related lessons; reuses the chart and animated video of the matching deep lesson." > /tmp/claude-0/pub1.log 2>&1; then ok=1; break; fi
  done
  echo "$s ok=$ok $(tail -1 /tmp/claude-0/pub1.log)" >> /tmp/claude-0/pubblog.log
  [ $ok = 1 ] || tail -15 /tmp/claude-0/pub1.log >> /tmp/claude-0/pubblog.log
done
echo "DONE $*" >> /tmp/claude-0/pubblog.log
