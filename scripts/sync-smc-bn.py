from pathlib import Path
import re
import json
import argparse
import logging
from typing import Dict, List, Optional

try:
    from deep_translator import GoogleTranslator
except Exception:  # pragma: no cover - dependency is installed locally when needed
    GoogleTranslator = None


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_EN_DIR = ROOT / "content/en/smc"
DEFAULT_BN_DIR = ROOT / "content/bn/smc"


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
            out.append(f'title: "{tr_func(m.group(1))}"')
            continue
        m = front_desc_re.match(line)
        if m:
            out.append(f'description: "{tr_func(m.group(1))}"')
            continue
        out.append(line)
    return out


def _translate_table_block(table_block: str, tr_func) -> str:
    lines = table_block.splitlines()
    out_lines: List[str] = []
    for line in lines:
        if table_sep_re.match(line.strip()):
            out_lines.append(line)
            continue
        if not line.lstrip().startswith('|'):
            out_lines.append(line)
            continue

        parts = line.split('|')
        rebuilt: List[str] = []
        for idx, part in enumerate(parts):
            if idx == 0 or idx == len(parts) - 1:
                rebuilt.append(part)
                continue
            cell = part.strip()
            if not cell:
                rebuilt.append(part)
                continue
            translated_cell = tr_func(cell)
            rebuilt.append(f' {translated_cell} ')
        out_lines.append('|'.join(rebuilt))
    return '\n'.join(out_lines)


def _stash_tables(text: str, table_store: List[str], tr_func) -> str:
    lines = text.splitlines(keepends=True)
    out_lines: List[str] = []
    i = 0
    while i < len(lines):
        if lines[i].lstrip().startswith('|') and i + 1 < len(lines) and table_sep_re.match(lines[i + 1].strip()):
            j = i
            table_block = []
            table_block.append(lines[j])
            j += 1
            table_block.append(lines[j])
            j += 1
            while j < len(lines) and lines[j].lstrip().startswith('|'):
                table_block.append(lines[j])
                j += 1
            placeholder = f'⟪{len(table_store)}⟫'
            table_store.append(_translate_table_block(''.join(table_block), tr_func))
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

    def stash_fenced(m: re.Match[str]) -> str:
        code_blocks.append(m.group(0))
        return f'⟦{len(code_blocks) - 1}⟧'

    protected = fenced_code_re.sub(stash_fenced, body)

    def stash_inline(m: re.Match[str]) -> str:
        inline_codes.append(m.group(0))
        return f'⟨{len(inline_codes) - 1}⟩'

    protected = inline_code_re.sub(stash_inline, protected)
    protected = _stash_tables(protected, tables, tr_func)

    def stash_callout(m: re.Match[str]) -> str:
        tag = m.group(0)
        title_m = callout_title_attr_re.search(tag)
        title = tr_func(title_m.group(1)) if title_m else ''
        if title_m:
            new_tag = callout_title_attr_re.sub(f'title="{title}"', tag)
        else:
            new_tag = tag
        callouts.append(new_tag)
        return f'⟬{len(callouts) - 1}⟭'

    protected = callout_open_any_re.sub(stash_callout, protected)
    protected = protected.replace('</Callout>', '⟭END⟬')

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

    for i, code in enumerate(code_blocks):
        translated = translated.replace(f'⟦{i}⟧', code)

    for i, code in enumerate(inline_codes):
        translated = translated.replace(f'⟨{i}⟩', code)

    for i, call in enumerate(callouts):
        translated = translated.replace(f'⟬{i}⟭', call)

    translated = translated.replace('⟭END⟬', '</Callout>')

    for i, table in enumerate(tables):
        translated = translated.replace(f'⟪{i}⟫\n', table)

    translated = re.sub(r'\]\(/en/', '](/bn/', translated)
    translated = re.sub(r'\]\(/en\)', '](/bn)', translated)
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
    p = argparse.ArgumentParser(description='Translate SMC MDX from EN to BN')
    p.add_argument('--en-dir', type=Path, default=DEFAULT_EN_DIR)
    p.add_argument('--bn-dir', type=Path, default=DEFAULT_BN_DIR)
    p.add_argument('--src-lang', default='en')
    p.add_argument('--tgt-lang', default='bn')
    p.add_argument('--cache-file', type=Path, default=Path.home() / '.cache' / 'trading-docs' / 'sync-smc-bn.json')
    p.add_argument('--limit', type=int, default=0, help='Only process the first N markdown files (0 = all)')
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

    if args.limit and args.limit > 0:
        original_glob = DEFAULT_EN_DIR.glob
        # ...existing code...
        # Limit processing by temporarily wrapping the directory scan inside process_dir.
        # The caller will pass a sliced list via a small shim below.
        en_files = sorted(args.en_dir.glob('*.mdx'))[: args.limit]
        temp_en_dir = args.en_dir
        temp_bn_dir = args.bn_dir

        def limited_process_dir() -> None:
            for en_file in en_files:
                bn_file = temp_bn_dir / en_file.name
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
                if args.dry_run:
                    logging.info('Dry-run: would update %s', bn_file.relative_to(ROOT))
                else:
                    temp_bn_dir.mkdir(parents=True, exist_ok=True)
                    bn_file.write_text(translated, encoding='utf-8')
                    print(f'updated {bn_file.relative_to(ROOT)}')

        limited_process_dir()
        save_cache(cache_path, cache)
        print(f'\nDone. Translated {len(en_files)} files. Cache entries: {len(cache)}')
        return

    process_dir(args.en_dir, args.bn_dir, translator, cache, cache_path, args.dry_run)


if __name__ == '__main__':
    main()


