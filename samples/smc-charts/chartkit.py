"""
Shared design system for the SMC sample charts (v2: light + dark themes).

Every chart script exposes build(theme, reveal=None) -> go.Figure. The same build
renders both themes, and the animation script reuses it with partial `reveal`.

Palette: green/red candles tuned for colour-vision deficiency (validated with the
dataviz palette validator), blue zones, and the site's neon-green accent
(app/globals.css: --accent-green / --neon-green).
"""

from __future__ import annotations

import csv
from contextlib import contextmanager
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path

import plotly
import plotly.graph_objects as go
import plotly.io as pio

HERE = Path(__file__).resolve().parent
DATA_DIR = HERE / "data"
OUT_DIR = HERE / "output"

FONT = "Inter, 'Helvetica Neue', Arial, sans-serif"
MONO = "'JetBrains Mono', 'SFMono-Regular', Menlo, monospace"
WIDTH, HEIGHT = 1600, 900
BAR = timedelta(minutes=15)
DISCLAIMER = "not historical prices, not a live trade, not financial advice."


@dataclass(frozen=True)
class Theme:
    name: str
    surface: str
    grid: str
    axis: str
    ink: str
    ink2: str
    ink3: str
    bull: str
    bear: str
    zone: str
    bull_text: str
    bear_text: str
    zone_text: str
    accent: str
    tag_ink: str
    reward_alpha: float
    risk_alpha: float
    zone_alpha: float


LIGHT = Theme(
    name="light", surface="#F6FAF8", grid="#E2ECE6", axis="#C3D3CA", ink="#0F1F18", ink2="#3F574B",
    ink3="#7F978B", bull="#22B35E", bear="#C8283A", zone="#0E8FD0", bull_text="#15803D", bear_text="#B0222F",
    zone_text="#0369A1", accent="#00A85C", tag_ink="#FFFFFF", reward_alpha=0.10, risk_alpha=0.10, zone_alpha=0.16,
)
DARK = Theme(
    name="dark", surface="#050A08", grid="#12201A", axis="#26392F", ink="#F0F9F4", ink2="#A9C7B6",
    ink3="#6E8E7E", bull="#1FC774", bear="#E5404F", zone="#38BDF8", bull_text="#4ADE80", bear_text="#FF8A95",
    zone_text="#7DD3FC", accent="#00FF9D", tag_ink="#04110B", reward_alpha=0.12, risk_alpha=0.14, zone_alpha=0.18,
)
THEMES = (LIGHT, DARK)


# --- Data ------------------------------------------------------------------------


@dataclass(frozen=True)
class Candle:
    t: datetime
    label: str
    o: float
    h: float
    l: float
    c: float

    @property
    def bullish(self) -> bool:
        return self.c > self.o

    @property
    def body(self) -> float:
        return abs(self.c - self.o)

    def grown(self, p: float) -> "Candle":
        """The candle `p` (0..1) of the way through forming — used by the animation."""
        if p >= 1:
            return self
        c = self.o + (self.c - self.o) * p
        top, bot = max(self.o, self.c), min(self.o, self.c)
        h = max(self.o, c) + (self.h - top) * p
        l = min(self.o, c) - (bot - self.l) * p
        return Candle(self.t, self.label, self.o, h, l, c)


def at(hhmm: str, day: int = 0) -> datetime:
    """Map a BD clock time onto a fixed placeholder date (only the time is shown)."""
    h, m = map(int, hhmm.split(":"))
    return datetime(2000, 1, 3 + day, h, m)


def load_candles(name: str, data_dir: Path = DATA_DIR) -> list[Candle]:
    """Read <data_dir>/<name>.csv. Columns: day (optional), time_bd, open, high, low, close."""
    with (data_dir / f"{name}.csv").open(newline="") as f:
        rows = list(csv.DictReader(line for line in f if not line.startswith("#")))
    candles = [
        Candle(at(r["time_bd"], int(r.get("day") or 0)), r["time_bd"],
               *(float(r[k]) for k in ("open", "high", "low", "close")))
        for r in rows
    ]
    for c in candles:
        assert c.l <= min(c.o, c.c) <= max(c.o, c.c) <= c.h, f"bad OHLC at {c.label}"
    return candles


def by_time(candles: list[Candle], hhmm: str, day: int = 0) -> Candle:
    return next(c for c in candles if c.t == at(hhmm, day))


def is_engulfing(prev: Candle, cur: Candle) -> bool:
    if cur.bullish and not prev.bullish:
        return cur.o <= prev.c and cur.c >= prev.o
    if not cur.bullish and prev.bullish:
        return cur.o >= prev.c and cur.c <= prev.o
    return False


def levels(entry: float, stop: float, targets: list[float], unit: float):
    """Risk in units and [(target, reward, R multiple), ...] — computed, never typed in."""
    risk = round(abs(entry - stop) / unit, 1)
    return risk, [(tp, round(abs(tp - entry) / unit, 1), round(abs(tp - entry) / unit, 1) / risk) for tp in targets]


# --- Reveal (animation) ------------------------------------------------------------


@dataclass
class Reveal:
    """How much of a chart is visible. None everywhere = the finished static chart."""

    candles: float | None = None  # number of candles shown; the fraction grows the last one
    groups: dict[str, float] | None = None  # annotation group -> opacity 0..1
    caption: str | None = None

    def alpha(self, group: str) -> float:
        return 1.0 if self.groups is None else self.groups.get(group, 0.0)

    def visible(self, candles: list[Candle]) -> list[Candle]:
        if self.candles is None:
            return candles
        n = int(self.candles)
        out = candles[:n]
        if n < len(candles) and self.candles > n:
            out.append(candles[n].grown(self.candles - n))
        return out


# --- Chart -------------------------------------------------------------------------


class Chart:
    """A themed figure with drawing helpers; `with chart.group(name):` fades a set of marks."""

    def __init__(self, t: Theme, reveal: Reveal | None = None, *, top=150, bottom=96, right=104, left=40,
                 fig: go.Figure | None = None):
        self.t, self.reveal, self._alpha = t, reveal or Reveal(), 1.0
        self._tags: list[float] = []  # price-tag levels; nearby axis ticks are hidden
        self.fig = fig or go.Figure()
        self.fig.update_layout(
            width=WIDTH, height=HEIGHT, paper_bgcolor=t.surface, plot_bgcolor=t.surface,
            margin=dict(l=left, r=right, t=top, b=bottom), font=dict(family=FONT, color=t.ink2, size=13),
            hovermode="x", showlegend=False,
            hoverlabel=dict(font=dict(family=MONO, size=12, color=t.ink), bgcolor=t.surface, bordercolor=t.axis),
        )

    # Groups -------------------------------------------------------------------
    @contextmanager
    def group(self, name: str):
        prev, self._alpha = self._alpha, self.reveal.alpha(name)
        try:
            yield self._alpha > 0
        finally:
            self._alpha = prev

    def _skip(self) -> bool:
        return self._alpha <= 0

    # Marks --------------------------------------------------------------------
    def candles(self, candles: list[Candle], name: str, *, price_fmt: str, x=None, text=None, row=None, col=None,
                time_fmt="%H:%M BD"):
        shown = self.reveal.visible(candles)
        xs = [c.t for c in shown] if x is None else x[:len(shown)]
        t = self.t
        self.fig.add_trace(go.Candlestick(
            x=xs, open=[c.o for c in shown], high=[c.h for c in shown], low=[c.l for c in shown],
            close=[c.c for c in shown], name=name, text=None if text is None else text[:len(shown)],
            increasing=dict(line=dict(color=t.bull, width=1.4), fillcolor=t.bull),
            decreasing=dict(line=dict(color=t.bear, width=1.4), fillcolor=t.bear),
            whiskerwidth=0, xhoverformat=time_fmt if x is None else None, yhoverformat=price_fmt,
            showlegend=False,
        ), row=row, col=col)

    def label(self, x, y, text, *, color=None, size=13, xanchor="left", yanchor="middle", align="left",
              bold=False, font=FONT, **kw):
        if self._skip():
            return
        self.fig.add_annotation(
            x=x, y=y, text=f"<b>{text}</b>" if bold else text, showarrow=False, xanchor=xanchor, yanchor=yanchor,
            font=dict(family=font, size=size, color=color or self.t.ink2), align=align, opacity=self._alpha, **kw,
        )

    def callout(self, x, y, ax, ay, text, *, xanchor="center", yanchor="middle", align="left", **kw):
        """Text at (ax, ay) with an arrow to (x, y), both in data coordinates."""
        if self._skip():
            return
        self.fig.add_annotation(
            x=x, y=y, ax=ax, ay=ay, axref=kw.pop("axref", "x"), ayref=kw.pop("ayref", "y"), text=text,
            showarrow=True, arrowhead=2, arrowsize=1, arrowwidth=1.3, arrowcolor=self.t.ink2, standoff=4,
            xanchor=xanchor, yanchor=yanchor, align=align, opacity=self._alpha, bgcolor=self.t.surface, borderpad=3,
            font=dict(family=FONT, size=13, color=self.t.ink2), **kw,
        )

    def hline(self, x0, x1, y, *, color=None, width=1.2, dash="dot", **kw):
        if self._skip():
            return
        self.fig.add_shape(type="line", x0=x0, x1=x1, y0=y, y1=y, opacity=self._alpha,
                           line=dict(color=color or self.t.ink3, width=width, dash=dash), **kw)

    def zone(self, x0, x1, y0, y1, *, color=None, alpha=None, dash="solid", border=True, **kw):
        if self._skip():
            return
        color = color or self.t.zone
        a = (self.t.zone_alpha if alpha is None else alpha) * self._alpha
        self.fig.add_shape(type="rect", x0=x0, x1=x1, y0=y0, y1=y1, layer="below", fillcolor=color, opacity=a,
                           line_width=0, **kw)
        if border:
            self.fig.add_shape(type="rect", x0=x0, x1=x1, y0=y0, y1=y1, layer="below", opacity=self._alpha * 0.9,
                               line=dict(color=color, width=1.2, dash=dash), **kw)

    def price_tag(self, y, text, color, *, ink=None):
        """TradingView-style value pill on the right price axis."""
        if self._skip():
            return
        self._tags.append(y)
        self.fig.add_annotation(
            xref="paper", x=1, y=y, yref="y", xanchor="left", xshift=4, showarrow=False, text=f"<b>{text}</b>",
            bgcolor=color, borderpad=4, opacity=self._alpha,
            font=dict(family=MONO, size=12, color=ink or self.t.tag_ink),
        )

    def position(self, x0, x1, *, entry, stop, targets, unit, unit_name, fmt, long: bool):
        """Risk/reward boxes, levels, labels and price tags. Returns (risk, [(target, reward, rr), ...])."""
        t = self.t
        risk, out = levels(entry, stop, targets, unit)
        if self._skip():
            return risk, out
        far = max(targets, key=lambda v: abs(v - entry))
        a = self._alpha
        self.fig.add_shape(type="rect", x0=x0, x1=x1, y0=entry, y1=far, line_width=0, fillcolor=t.bull,
                           opacity=t.reward_alpha * a, layer="below")
        self.fig.add_shape(type="rect", x0=x0, x1=x1, y0=stop, y1=entry, line_width=0, fillcolor=t.bear,
                           opacity=t.risk_alpha * a, layer="below")
        up, down = ("bottom", "top") if long else ("top", "bottom")
        shift = 3 if long else -3
        for i, (tp, rw, rr) in enumerate(out, 1):
            name = f"TP{i}" if len(out) > 1 else "TP"
            self.hline(x0, x1, tp, color=t.bull, width=1.6, dash="solid")
            self.label(x1, tp, f"{name} · +{rw:g} {unit_name} · 1 : {rr:.1f}", color=t.bull_text, xanchor="right",
                       yanchor=up, bold=True, yshift=shift)
            self.price_tag(tp, f"{tp:{fmt}}", t.bull)
        self.hline(x0, x1, entry, color=t.ink, width=1.6, dash="solid")
        self.label(x1, entry, "Entry", color=t.ink, xanchor="right", yanchor=up, bold=True, yshift=shift)
        self.price_tag(entry, f"{entry:{fmt}}", t.ink, ink=t.surface)
        self.hline(x0, x1, stop, color=t.bear, width=1.6, dash="solid")
        self.label(x1, stop, f"SL · −{risk:g} {unit_name}", color=t.bear_text, xanchor="right", yanchor=down,
                   bold=True, yshift=-shift)
        self.price_tag(stop, f"{stop:{fmt}}", t.bear, ink="#FFFFFF")
        return risk, out

    def projection(self, x0, y0, x1, y1, text, tx, ty, **kw):
        """Grey arrow for a hypothetical path — explicitly not an outcome."""
        if self._skip():
            return
        self.fig.add_annotation(x=x1, y=y1, ax=x0, ay=y0, xref="x", yref="y", axref="x", ayref="y", showarrow=True,
                                arrowhead=2, arrowsize=1.1, arrowwidth=1.8, arrowcolor=self.t.ink3, text="",
                                standoff=2, opacity=self._alpha)
        self.label(tx, ty, text, color=self.t.ink3, size=12, **kw)

    def step(self, x, y, n: int, text, *, color=None, **kw):
        """A numbered teaching label: ① text."""
        self.label(x, y, f"<span style='color:{self.t.accent}'>{'①②③④⑤⑥'[n - 1]}</span> {text}", color=color, **kw)

    # Frame ----------------------------------------------------------------------
    def header(self, eyebrow: str, title: str, subtitle: str, key: list[tuple[str, str]] | None = None, *,
               offset: int = 0):
        t, fig = self.t, self.fig
        rows = [(118, f"<b>{eyebrow.upper()}</b>", 12, t.accent), (74, f"<b>{title}</b>", 27, t.ink),
                (44, subtitle, 15, t.ink2)]
        for shift, text, size, color in rows:
            fig.add_annotation(xref="paper", yref="paper", x=0, y=1, yshift=shift + offset, xanchor="left",
                               yanchor="bottom", showarrow=False, text=text,
                               font=dict(family=FONT, size=size, color=color))
        if key is None:
            key = [("▮", t.bull, "Bullish candle"), ("▮", t.bear, "Bearish candle")]
        fig.add_annotation(
            xref="paper", yref="paper", x=1, y=1, yshift=44 + offset, xanchor="right", yanchor="bottom",
            showarrow=False, font=dict(family=FONT, size=13, color=t.ink2),
            text="     ".join(f"<span style='color:{c}'>{g}</span> {name}" for g, c, name in key),
        )

    def footnote(self, source: str):
        t = self.t
        self.fig.add_annotation(xref="paper", yref="paper", x=0, y=0, yshift=-62, xanchor="left", yanchor="top",
                                showarrow=False, text=f"<b>Educational illustration.</b> {source} — {DISCLAIMER}",
                                font=dict(family=FONT, size=12, color=t.ink3))
        self.fig.add_annotation(xref="paper", yref="paper", x=1, y=0, yshift=-62, xanchor="right", yanchor="top",
                                showarrow=False, text=f"<span style='color:{t.accent}'>●</span> <b>TradingDocs</b>",
                                font=dict(family=FONT, size=13, color=t.ink2))

    def caption(self):
        """Animation caption: a card in the top-left of the plot."""
        if not self.reveal.caption:
            return
        t = self.t
        self.fig.add_annotation(xref="paper", yref="paper", x=0.012, y=0.985, xanchor="left", yanchor="top",
                                showarrow=False, text=self.reveal.caption, align="left", bgcolor=t.surface,
                                bordercolor=t.accent, borderwidth=1.5, borderpad=10,
                                font=dict(family=FONT, size=19, color=t.ink))

    def _axis_style(self):
        t = self.t
        return dict(showgrid=True, gridcolor=t.grid, zeroline=False, showline=True, linecolor=t.axis, ticks="outside",
                    tickcolor=t.axis, ticklen=5, tickfont=dict(family=MONO, size=12, color=t.ink2))

    def axes(self, *, y_range, y_dtick, y_fmt, x_range=None, x_dtick_min=60, x_title="Time (BD, UTC+6)",
             x_ticks=None):
        t = self.t
        x = dict(rangeslider_visible=False, title=dict(text=x_title, font=dict(size=12, color=t.ink3), standoff=10),
                 **self._axis_style())
        if x_ticks is None:
            x.update(type="date", range=x_range, tickformat="%H:%M", dtick=x_dtick_min * 60 * 1000)
        else:
            x.update(range=x_range, tickvals=x_ticks[0], ticktext=x_ticks[1])
        self.fig.update_xaxes(**x)
        # Gridlines keep every step; tick labels within ~3.5% of the range of a price tag are dropped.
        lo, hi = y_range
        first = -(-lo // y_dtick) * y_dtick
        steps = [round(first + i * y_dtick, 10) for i in range(int((hi - first) / y_dtick) + 1)]
        gap = 0.035 * (hi - lo)
        tickvals = [v for v in steps if all(abs(v - tag) > gap for tag in self._tags)]
        self.fig.update_yaxes(side="right", range=y_range, tickvals=tickvals, tickformat=y_fmt,
                              minor=dict(tickvals=steps, showgrid=True, gridcolor=t.grid, ticks=""),
                              title=dict(text="", standoff=8), **self._axis_style())


# --- Output ------------------------------------------------------------------------

HTML_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<script src="https://cdn.plot.ly/plotly-{plotly_js}.min.js"></script>
<style>
  :root {{ --bg: {light_bg}; --ink: {light_ink}; --line: {light_axis}; }}
  :root[data-theme="dark"] {{ --bg: {dark_bg}; --ink: {dark_ink}; --line: {dark_axis}; }}
  html, body {{ margin: 0; background: var(--bg); color: var(--ink); font-family: Inter, Arial, sans-serif; }}
  .bar {{ display: flex; justify-content: flex-end; gap: 8px; padding: 12px 16px 0; }}
  button {{ font: 600 13px Inter, Arial, sans-serif; color: var(--ink); background: transparent;
           border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px; cursor: pointer; }}
  #chart {{ width: 100%; max-width: 1600px; margin: 0 auto; }}
</style>
</head>
<body>
<div class="bar"><button id="toggle" type="button">Toggle light / dark</button></div>
<div id="chart"></div>
<script>
  const figs = {{ light: {light_fig}, dark: {dark_fig} }};
  const config = {{ editable: true, displaylogo: false, responsive: true,
    toImageButtonOptions: {{ format: "png", filename: "{name}", scale: 2 }} }};
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  function draw() {{
    document.documentElement.dataset.theme = theme;
    Plotly.react("chart", figs[theme].data, figs[theme].layout, config);
  }}
  document.getElementById("toggle").onclick = () => {{ theme = theme === "dark" ? "light" : "dark"; draw(); }};
  draw();
</script>
</body>
</html>
"""


def save(name: str, build, title: str, out_dir: Path = OUT_DIR) -> list[Path]:
    """Render PNGs for both themes plus one HTML preview that follows the viewer's theme."""
    out_dir.mkdir(exist_ok=True)
    figs = {t.name: build(t) for t in THEMES}
    paths = [out_dir / f"{name}-{t}.png" for t in figs]
    pio.write_images(list(figs.values()), paths, scale=2, width=WIDTH, height=HEIGHT)
    html = HTML_TEMPLATE.format(
        title=title, name=name, plotly_js=plotly.offline.get_plotlyjs_version(),
        light_bg=LIGHT.surface, light_ink=LIGHT.ink, light_axis=LIGHT.axis,
        dark_bg=DARK.surface, dark_ink=DARK.ink, dark_axis=DARK.axis,
        light_fig=figs["light"].to_json(), dark_fig=figs["dark"].to_json(),
    )
    (out_dir / f"{name}.html").write_text(html)
    return paths


# --- Animation -----------------------------------------------------------------------


def smooth(x: float) -> float:
    x = min(max(x, 0.0), 1.0)
    return x * x * (3 - 2 * x)


class Timeline:
    """Builds the per-frame (candles, {group: alpha}, caption key) list for an explainer video."""

    def __init__(self, groups):
        self.n, self.shown, self.frames = 0.0, {g: 0.0 for g in groups}, []

    def _frame(self, cap):
        self.frames.append((round(self.n, 3), tuple(sorted((g, round(a, 3)) for g, a in self.shown.items())), cap))

    def hold(self, cap, frames):
        for _ in range(frames):
            self._frame(cap)
        return self

    def fade(self, group, cap, frames=12):
        for i in range(1, frames + 1):
            self.shown[group] = smooth(i / frames)
            self._frame(cap)
        return self

    def candles_to(self, target, per, cap, fade=None, fade_frames=12):
        """Grow candles up to index `target`, `per` frames per candle, optionally fading a group in."""
        start, count = self.n, int(round((target - self.n) * per))
        for i in range(1, count + 1):
            self.n = start + (target - start) * i / count
            if fade and i <= fade_frames:
                self.shown[fade] = smooth(i / fade_frames)
            self._frame(cap)
        return self


def render_video(name: str, build, timeline: Timeline, captions, out_dir: Path = OUT_DIR, fps: int = 30,
                 themes=THEMES, **build_kw) -> list[Path]:
    """Render each unique frame once with `build(theme, Reveal(...), **build_kw)` and encode an H.264 MP4."""
    import os
    import subprocess
    import tempfile

    out = []
    frames = timeline.frames
    unique = {k: i for i, k in enumerate(dict.fromkeys(frames))}
    for t in themes:
        caps = captions(t)
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            figs = [build(t, Reveal(candles=k[0], groups=dict(k[1]), caption=caps[k[2]]), **build_kw) for k in unique]
            pio.write_images(figs, [tmp / f"u{i:04d}.png" for i in unique.values()], scale=1920 / WIDTH, width=WIDTH,
                             height=HEIGHT)
            for i, k in enumerate(frames):
                os.link(tmp / f"u{unique[k]:04d}.png", tmp / f"f{i:04d}.png")
            out_dir.mkdir(exist_ok=True)
            path = out_dir / f"{name}-{t.name}.mp4"
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(fps), "-i", str(tmp / "f%04d.png"),
                            "-vf", "scale=1920:1080:flags=lanczos,format=yuv420p", "-c:v", "libx264", "-preset",
                            "slow", "-crf", "20", "-movflags", "+faststart", str(path)], check=True)
        print(f"{path.name}: {len(frames)} frames ({len(frames) / fps:.1f}s), {len(unique)} rendered")
        out.append(path)
    return out
