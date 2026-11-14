from pathlib import Path
import re
import json
import argparse
import logging
from typing import Dict, List, Optional

try:
    from deep_translator import GoogleTranslator
except Exception:  # pragma: no cover - user should install dependency
    GoogleTranslator = None


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_EN_DIR = ROOT / "content/en/price-action"
DEFAULT_BN_DIR = ROOT / "content/bn/price-action"


# Regular expressions used for parsing
front_title_re = re.compile(r'^title:\s*"(.*)"$')
front_desc_re = re.compile(r'^description:\s*"(.*)"$')
table_sep_re = re.compile(r'^\s*\|[-\s:|]+\|\s*$')
callout_open_any_re = re.compile(r'<Callout[^>]*>')
callout_title_attr_re = re.compile(r'title="([^"]+)"')
fenced_code_re = re.compile(r'```[\s\S]*?```')
inline_code_re = re.compile(r'`[^`]+`')


def load_cache(path: Optional[Path]) -> Dict[str, str]:
    if not path:
        return {}
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        logging.warning('Failed to load cache from %s', path)
    return {}


def save_cache(path: Optional[Path], cache: Dict[str, str]) -> None:
    if not path:
        return
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding='utf-8')
    except Exception:
        logging.warning('Failed to write cache to %s', path)


def make_translator(src: str, tgt: str):
    if GoogleTranslator is None:
        raise RuntimeError('deep_translator is required. Install with: pip install deep-translator')
    return GoogleTranslator(source=src, target=tgt)


def translate_frontmatter(lines: List[str], tr_func) -> List[str]:
    out: List[str] = []
    for line in lines:
        m = front_title_re.match(line)
        if m:
            title = tr_func(m.group(1))
            out.append(f'title: "{title}"')
            continue
        m = front_desc_re.match(line)
        if m:
            desc = tr_func(m.group(1))
            out.append(f'description: "{desc}"')
            continue
        out.append(line)
    return out


def _stash_tables(text: str, table_store: List[str]) -> str:
    # Simple stateful scanner to detect markdown tables and stash them
    lines = text.splitlines(keepends=True)
    out_lines: List[str] = []
    i = 0
    while i < len(lines):
        if lines[i].lstrip().startswith('|') and i + 1 < len(lines) and table_sep_re.match(lines[i + 1].strip()):
            # start of table
            j = i
            table_block = []
            # include header and separator
            table_block.append(lines[j])
            j += 1
            table_block.append(lines[j])
            j += 1
            while j < len(lines) and lines[j].lstrip().startswith('|'):
                table_block.append(lines[j])
                j += 1
            placeholder = f'[[TABLE_{len(table_store)}]]'
            table_store.append(''.join(table_block))
            out_lines.append(placeholder + '\n')
            i = j
            continue
        out_lines.append(lines[i])
        i += 1
    return ''.join(out_lines)


def translate_body(body: str, tr_func) -> str:
    code_blocks: List[str] = []
    inline_codes: List[str] = []
    callouts: List[str] = []
    tables: List[str] = []

    # Stash fenced code blocks
    def stash_fenced(m: re.Match[str]) -> str:
        code_blocks.append(m.group(0))
        return f'[[CODE_{len(code_blocks) - 1}]]'

    protected = fenced_code_re.sub(stash_fenced, body)

    # Stash inline code spans
    def stash_inline(m: re.Match[str]) -> str:
        inline_codes.append(m.group(0))
        return f'[[INLCODE_{len(inline_codes) - 1}]]'

    protected = inline_code_re.sub(stash_inline, protected)

    # Stash tables
    protected = _stash_tables(protected, tables)

    # Stash Callout openings (flexible attribute order)
    def stash_callout(m: re.Match[str]) -> str:
        tag = m.group(0)
        title_m = callout_title_attr_re.search(tag)
        title = tr_func(title_m.group(1)) if title_m else ''
        # Preserve other attributes but replace title with translated one (if present)
        if title_m:
            new_tag = callout_title_attr_re.sub(f'title="{title}"', tag)
        else:
            new_tag = tag
        callouts.append(new_tag)
        return f'[[CALL_{len(callouts) - 1}]]'

    protected = callout_open_any_re.sub(stash_callout, protected)
    protected = protected.replace('</Callout>', '[[ENDCALL]]')

    # Split into chunks to avoid translator limits
    chunks: List[str] = []
    current: List[str] = []
    current_len = 0
    for para in protected.split('\n\n'):
        if not para.strip():
            if current:
                chunks.append('\n\n'.join(current))
                current = []
                current_len = 0
            chunks.append('')
            continue
        para_len = len(para)
        if current and current_len + para_len + 2 > 4500:
            chunks.append('\n\n'.join(current))
            current = [para]
            current_len = para_len
        else:
            current.append(para)
            current_len += para_len + (2 if current_len else 0)

    if current:
        chunks.append('\n\n'.join(current))

    translated_parts: List[str] = []
    for chunk in chunks:
        if chunk == '':
            translated_parts.append('')
        else:
            translated_parts.append(tr_func(chunk))

    translated = '\n\n'.join(translated_parts)

    # restore code blocks, inline codes, callouts, tables
    for i, code in enumerate(code_blocks):
        translated = translated.replace(f'[[CODE_{i}]]', code)

    for i, code in enumerate(inline_codes):
        translated = translated.replace(f'[[INLCODE_{i}]]', code)

    for i, call in enumerate(callouts):
        translated = translated.replace(f'[[CALL_{i}]]', call)

    translated = translated.replace('[[ENDCALL]]', '</Callout>')

    for i, table in enumerate(tables):
        translated = translated.replace(f'[[TABLE_{i}]]\n', table)

    return translated


def process_dir(en_dir: Path, bn_dir: Path, translator, cache: Dict[str, str], cache_path: Optional[Path], dry_run: bool) -> None:
    en_files = sorted(en_dir.glob('*.mdx'))
    for en_file in en_files:
        bn_file = bn_dir / en_file.name
        src = en_file.read_text(encoding='utf-8')
        parts = src.split('---\n', 2)
        if len(parts) != 3:
            logging.warning('Skipping %s: unexpected frontmatter format', en_file)
            continue

        fm_lines = parts[1].splitlines()
        body = parts[2]

        def tr_func(text: str) -> str:
            if text in cache:
                return cache[text]
            out = translator.translate(text)
            cache[text] = out
            return out

        translated = '---\n' + '\n'.join(translate_frontmatter(fm_lines, tr_func)) + '\n---\n' + translate_body(body, tr_func)
        if dry_run:
            logging.info('Dry-run: would update %s', bn_file.relative_to(ROOT))
        else:
            bn_dir.mkdir(parents=True, exist_ok=True)
            bn_file.write_text(translated, encoding='utf-8')
            print(f'updated {bn_file.relative_to(ROOT)}')

    save_cache(cache_path, cache)
    print(f'\nDone. Translated {len(en_files)} files. Cache entries: {len(cache)}')


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description='Translate price-action MDX from EN to BN')
    p.add_argument('--en-dir', type=Path, default=DEFAULT_EN_DIR)
    p.add_argument('--bn-dir', type=Path, default=DEFAULT_BN_DIR)
    p.add_argument('--src-lang', default='en')
    p.add_argument('--tgt-lang', default='bn')
    p.add_argument('--cache-file', type=Path, default=Path.home() / '.cache' / 'trading-docs' / 'sync-price-action-bn.json')
    p.add_argument('--no-cache', action='store_true')
    p.add_argument('--dry-run', action='store_true')
    p.add_argument('--verbose', action='store_true')
    return p.parse_args()


def main() -> None:
    args = parse_args()
    logging.basicConfig(level=logging.DEBUG if args.verbose else logging.INFO, format='%(levelname)s: %(message)s')

    cache_path = None if args.no_cache else args.cache_file
    cache = load_cache(cache_path)

    translator = make_translator(args.src_lang, args.tgt_lang)

    process_dir(args.en_dir, args.bn_dir, translator, cache, cache_path, args.dry_run)


if __name__ == '__main__':
    main()


