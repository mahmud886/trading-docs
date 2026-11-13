"""Fibonacci ladder for OTE charts: retracement levels of an expansion leg, drawn with chartkit."""

LEVELS = (0.0, 0.5, 0.62, 0.705, 0.79, 1.0)


def retrace(start, end, pct):
    """Price at `pct` retracement of the leg start → end (0 % = end of the leg, 100 % = its start)."""
    return end - (end - start) * pct


def ladder(ch, start, end, x0, x_label, fmt, *, zone_x0=None):
    """Draw the levels from x0 to x_label, shade 62–79 %, and label each level at x_label."""
    t = ch.t
    ch.zone(zone_x0 or x0, x_label, retrace(start, end, 0.62), retrace(start, end, 0.79), color=t.accent,
            alpha=0.10, border=False)
    for pct in LEVELS:
        y = retrace(start, end, pct)
        ote = 0.62 <= pct <= 0.79
        ch.hline(x0, x_label, y, color=t.accent if ote else t.ink3, width=1.2 if pct != 0.705 else 1.6,
                 dash="dot" if pct in (0.0, 1.0) else "dash")
        name = f"{pct * 100:g} %"
        ch.label(x_label, y, f"<b>{name}</b> · {y:{fmt}}" if ote else f"{name} · {y:{fmt}}", size=11,
                 color=t.accent if ote else t.ink3, xanchor="right", yanchor="bottom", yshift=1)
