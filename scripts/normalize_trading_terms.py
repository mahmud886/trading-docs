#!/usr/bin/env python3
"""
normalize_trading_terms.py

Idempotent normalization pass to keep forex/trading jargon in the canonical trading language
across `content/bn/**`. This script protects MDX constructs (frontmatter, fenced code,
inline code, JSX/Callout components, tables, links) by stashing them as tokens, runs
glossary-based replacements on the remaining plain text, restores tokens, and writes
per-file diffs during --dry-run or updates files when --apply is provided.

Usage:
  python3 scripts/normalize_trading_terms.py --dry-run --root /path/to/repo
  python3 scripts/normalize_trading_terms.py --apply --root /path/to/repo

This tool is conservative and intended to produce diffs for review before applying.
"""

import argparse
import json
import os
import re
import shutil
import sys
import tempfile
import hashlib
from pathlib import Path
from datetime import datetime
from difflib import unified_diff
from urllib.parse import urlsplit, urlunsplit


def load_glossary(path: Path):
    with path.open('r', encoding='utf-8') as f:
        data = json.load(f)
    mappings = data.get('mappings', [])
    # sort longer "from" first to avoid partial matches
    mappings.sort(key=lambda x: -len(x['from']))
    return mappings


TOKEN_FMT = '__MDX_TOKEN__{type}__{id}__'


def make_token(type_, idx):
    return TOKEN_FMT.format(type=type_.upper(), id=str(idx).zfill(6))


def canonicalize_internal_url(url: str) -> str:
    """Lowercase only internal site paths like /en/SMC/inducement.

    External URLs, mailto:, anchors, and non-root-relative URLs are left untouched.
    """
    if not url.startswith('/') or url.startswith('//'):
        return url
    parts = urlsplit(url)
    lowered_path = parts.path.lower()
    return urlunsplit((parts.scheme, parts.netloc, lowered_path, parts.query, parts.fragment))


def stash_patterns(text: str):
    """Stash frontmatter, fenced code, inline code, callout components, tables,
    and markdown link URLs.
    Returns (protected_text, tokens_list) where tokens_list is list of (token, original).
    """
    tokens = []
    idx = 0

    # frontmatter
    def _stash_frontmatter(m):
        nonlocal idx
        token = make_token('FRONT', idx)
        tokens.append((token, m.group(0)))
        idx += 1
        return token

    text = re.sub(r"\A---\n.*?\n---\n", _stash_frontmatter, text, flags=re.S)

    # fenced code blocks ```...```
    def _stash_fenced(m):
        nonlocal idx
        token = make_token('FENCED', idx)
        tokens.append((token, m.group(0)))
        idx += 1
        return token

    text = re.sub(r"```[\s\S]*?```", _stash_fenced, text)

    # inline code `...` (single-line)
    def _stash_inline(m):
        nonlocal idx
        token = make_token('INLINE', idx)
        tokens.append((token, m.group(0)))
        idx += 1
        return token

    text = re.sub(r"`([^`]+?)`", _stash_inline, text)

    # <Callout ...>...</Callout> - non-greedy
    def _stash_callout(m):
        nonlocal idx
        token = make_token('CALLOUT', idx)
        tokens.append((token, m.group(0)))
        idx += 1
        return token

    text = re.sub(r"<Callout[\s\S]*?<\/Callout>", _stash_callout, text)

    # simple JSX/HTML tags that may contain attributes but not try to fully parse nested JSX
    def _stash_tag(m):
        nonlocal idx
        token = make_token('TAG', idx)
        tokens.append((token, m.group(0)))
        idx += 1
        return token

    text = re.sub(r"<[^>]{1,200}>", _stash_tag, text)

    # tables: contiguous lines containing pipes and at least one pipe in them
    def _stash_table_block(m):
        nonlocal idx
        token = make_token('TABLE', idx)
        tokens.append((token, m.group(0)))
        idx += 1
        return token

    text = re.sub(r"((?:^.*\|.*\n){2,})", _stash_table_block, text, flags=re.M)

    # markdown links: preserve the visible label, but protect the destination URL
    # and canonicalize internal route paths to lowercase.
    def _stash_link_target(m):
        nonlocal idx
        label = m.group(1)
        url = canonicalize_internal_url(m.group(2))
        token = make_token('LINK', idx)
        tokens.append((token, url))
        idx += 1
        return f'[{label}]({token})'

    text = re.sub(r"(?<!!)\[([^\]]+)\]\(([^\)]+)\)", _stash_link_target, text)

    return text, tokens


def restore_tokens(text: str, tokens):
    for token, orig in tokens:
        text = text.replace(token, orig)
    return text


def apply_mappings(text: str, mappings):
    # Use a conservative boundary approach: ensure the match isn't part of a larger word
    # by checking simple \w boundaries. This is good enough for our glossary terms.
    for m in mappings:
        frm = re.escape(m['from'])
        to = m['to']
        try:
            text = re.sub(rf'(?<![\w]){frm}(?![\w])', to, text, flags=re.IGNORECASE)
        except re.error:
            # fallback to plain replace if the regex fails for some reason
            text = text.replace(m['from'], to)
    return text


def file_hash(path: Path):
    h = hashlib.sha256()
    with path.open('rb') as f:
        while True:
            b = f.read(8192)
            if not b:
                break
            h.update(b)
    return h.hexdigest()


def process_file(path: Path, mappings, dry_run=True):
    orig = path.read_text(encoding='utf-8')
    protected, tokens = stash_patterns(orig)

    changed = False
    transformed = apply_mappings(protected, mappings)
    restored = restore_tokens(transformed, tokens)

    if restored != orig:
        changed = True
    return changed, orig, restored


def write_backup(path: Path, backup_root: Path):
    dest = backup_root / path.relative_to(backup_root.parent)
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(path, dest)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', required=True, help='Repository root path')
    ap.add_argument('--glossary', default='glossaries/trading_keep.json', help='Path to glossary JSON (relative to root)')
    ap.add_argument('--dry-run', action='store_true', default=False, help='Do not write files; produce diffs')
    ap.add_argument('--apply', action='store_true', default=False, help='Apply changes')
    args = ap.parse_args()

    root = Path(args.root).expanduser().resolve()
    glossary_path = (root / args.glossary).resolve()
    mappings = load_glossary(glossary_path)

    # collect each content file exactly once
    candidates = sorted(
        set(root.glob('content/**/*.mdx')) | set(root.glob('content/**/*.md')),
        key=lambda p: str(p),
    )

    if not candidates:
        print('No content files found under content/**')
        sys.exit(1)

    timestamp = datetime.utcnow().strftime('%Y%m%d%H%M%S')
    diffs_root = root / f'diffs/normalize_trading_{timestamp}'
    backups_root = root / f'.backups/normalize_trading_{timestamp}'
    diffs_root.mkdir(parents=True, exist_ok=True)
    backups_root.mkdir(parents=True, exist_ok=True)

    changed_files = []

    for p in candidates:
        changed, orig, new = process_file(p, mappings, dry_run=args.dry_run)
        if changed:
            rel = p.relative_to(root)
            print('CHANGED:', rel)
            # write diff
            orig_lines = orig.splitlines(keepends=True)
            new_lines = new.splitlines(keepends=True)
            ud = ''.join(unified_diff(orig_lines, new_lines, fromfile=str(rel), tofile=str(rel) + ' (new)'))
            diff_path = diffs_root / (str(rel).replace('/', '__') + '.diff')
            diff_path.parent.mkdir(parents=True, exist_ok=True)
            diff_path.write_text(ud, encoding='utf-8')
            changed_files.append((p, ud))
            if args.apply:
                # backup original
                backup_path = backups_root / rel
                backup_path.parent.mkdir(parents=True, exist_ok=True)
                backup_path.write_text(orig, encoding='utf-8')
                # atomic write
                fd, tmp_path = tempfile.mkstemp(prefix='normalize_', dir=str(p.parent))
                with os.fdopen(fd, 'w', encoding='utf-8') as tf:
                    tf.write(new)
                os.replace(tmp_path, str(p))

    print('\nSummary:')
    print('Total changed files:', len(changed_files))
    if len(changed_files) > 0:
        print('Diffs written to:', diffs_root)
        if args.apply:
            print('Backups stored at:', backups_root)
        else:
            print('Run with --apply to make changes (review diffs first)')

if __name__ == '__main__':
    main()



