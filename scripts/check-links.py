# Checks internal links in content/**/*.mdx against content files and static routes. Run: python3 scripts/check-links.py
import re,os,glob,collections
files=set()
for p in glob.glob('content/*/**/*.mdx',recursive=True):
    parts=p.split('/'); lang=parts[1]; rest='/'.join(parts[2:])[:-4]
    files.add(f'/{lang}/{rest}'); files.add(f'/{lang}/{rest.split("/")[0]}')
static=set()
for base in ('app/[lang]/(content)','app/[lang]/(docs)'):
    for d in os.listdir(base):
        q=f'{base}/{d}'
        if os.path.isdir(q) and not d.startswith('['):
            for l in('en','bn'):
                static.add(f'/{l}/{d}')
                for sd in os.listdir(q):
                    if os.path.isdir(f'{q}/{sd}') and not sd.startswith('['): static.add(f'/{l}/{d}/{sd}')
for l in('en','bn'): static.add(f'/{l}')
bad=collections.Counter(); ex={}; tot=0
for p in glob.glob('content/**/*.mdx',recursive=True):
    s=open(p).read()
    for m in re.finditer(r'\]\((/[^)\s#]*)(#[^)]*)?\)|href="(/[^"#]*)',s):
        u=(m.group(1) or m.group(3)).rstrip('/')
        if u.startswith(('/images','/videos')): continue
        tot+=1
        if u not in files and u not in static:
            bad[u]+=1; ex.setdefault(u,p)
print(tot,len(bad),sum(bad.values()))
for u,c in bad.most_common(60): print(c,u,ex[u])
