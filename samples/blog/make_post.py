"""Write samples/blog/<slug>/<slug>.{en,bn}.mdx from a spec dict (see posts/*.py). Usage: python3 make_post.py <slug> [<slug> ...]"""

import importlib.util
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
L = {
    "en": dict(chart="The Chart", note="About this chart", example="Example (no chart)", mistakes="Common Mistakes", practice="Practice",
               summary="Summary", related="Related Topics", fix="Corrected and toned down", point="Point", detail="Detail", mistake="Mistake",
               fixc="Fix", idea="Idea", lesson="From the lesson", base="/en"),
    "bn": dict(chart="চার্ট", note="এই চার্ট সম্পর্কে", example="উদাহরণ (চার্ট ছাড়া)", mistakes="সাধারণ ভুল", practice="অনুশীলন",
               summary="সারাংশ", related="সম্পর্কিত বিষয়", fix="সংশোধিত ও নরম করা হয়েছে", point="বিষয়", detail="বিস্তারিত", mistake="ভুল",
               fixc="সমাধান", idea="ধারণা", lesson="লেসন থেকে", base="/bn"),
}


def table(head, rows):
    if not rows:
        return ""
    out = ["| " + " | ".join(head) + " |", "| " + " | ".join("---" for _ in head) + " |"]
    out += ["| " + " | ".join(r) + " |" for r in rows]
    return "\n".join(out) + "\n"


def render(spec, lang):
    s, t = spec[lang], L[lang]
    fm = spec["fm"]
    lines = ["---", f'title: "{s["title"].replace(chr(34), chr(92) + chr(34))}"', f'description: "{s["description"].replace(chr(34), chr(92) + chr(34))}"', f'date: "{fm["date"]}"', 'author: "Trading Docs"',
             f'category: "{fm["category"]}"', "tags: [" + ", ".join(f'"{x}"' for x in fm["tags"]) + "]", f'readingTime: {fm["reading"]}',
             f'featured: {"true" if fm.get("featured") else "false"}', "---", ""]
    lines += [s["intro"], ""]
    lines += ['<Callout type="warning" title="' + t["fix"] + '">', "  " + s["fix"], "</Callout>", "", "---", ""]
    fig = spec.get("fig")
    for i, (h, body) in enumerate(s["sections"]):
        lines += [f"## {h}", "", body.strip(), ""]
        if i == 0 and fig:
            lines += [f"### {t['chart']}", "", f"![{s['fig_alt']}]({fig['img']})", ""]
            if fig.get("video"):
                lines += [f'<LessonVideo controls muted playsInline loop preload="metadata" src="{fig["video"]}" className="mt-6 w-full rounded-xl border border-border" />', ""]
            lines += ['<Callout type="info" title="' + t["note"] + '">', "  " + s["fig_note"] + f" ({t['lesson']}: [{s['fig_label']}]({t['base']}{fig['lesson']}).)", "</Callout>", ""]
        lines += ["---", ""]
    lines += [f"## {t['example']}", "", s["example"].strip(), "", "---", "", f"## {t['mistakes']}", ""]
    lines += [table([t["mistake"], t["fixc"]], s["mistakes"]), "---", "", f"## {t['practice']}", ""]
    lines += [f"{i}. {x}" for i, x in enumerate(s["practice"], 1)]
    lines += [f"{len(s['practice']) + 1}. {'Log it in your' if lang == 'en' else 'আপনার'} [{'trading journal' if lang == 'en' else 'ট্রেডিং জার্নালে'}]({t['base']}/tools/journal-template){'.' if lang == 'en' else ' লিখুন।'}", "",
              "---", "", f"## {t['summary']}", "", table([t["idea"], t["detail"]], s["summary"]), "---", "", f"## {t['related']}", ""]
    lines += [f"- [{label}]({t['base']}{path})" for path, label in s["related"]]
    return "\n".join(lines).replace("\n\n\n", "\n\n") + "\n"


def main():
    for slug in sys.argv[1:]:
        sp = importlib.util.spec_from_file_location(slug, HERE / "posts" / f"{slug}.py")
        mod = importlib.util.module_from_spec(sp)
        sp.loader.exec_module(mod)
        out = HERE / slug
        out.mkdir(exist_ok=True)
        for lang in ("en", "bn"):
            (out / f"{slug}.{lang}.mdx").write_text(render(mod.SPEC, lang))
        print("wrote", slug)


if __name__ == "__main__":
    main()
