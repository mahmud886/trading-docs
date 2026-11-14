"""
Session hours for the Forex Sessions lessons, in UTC, and conversion to Bangladesh time (UTC+6, no DST).

"summer" = US/UK daylight time (roughly mid-March to late October/early November); "winter" = standard time.
Sydney's own summer is the northern winter, so its offset flips the other way.
"""

BD_OFFSET = 6

# name: {season: (open_utc, close_utc)} for local 7 AM – 4 PM Sydney, 9 AM – 6 PM Tokyo, 8 AM – 5 PM London / New York
SESSIONS = {
    "Sydney": {"summer": (21, 30), "winter": (20, 29)},     # AEST (UTC+10) / AEDT (UTC+11)
    "Tokyo": {"summer": (24, 33), "winter": (24, 33)},      # JST (UTC+9), no DST
    "London": {"summer": (7, 16), "winter": (8, 17)},       # BST (UTC+1) / GMT
    "New York": {"summer": (12, 21), "winter": (13, 22)},   # EDT (UTC-4) / EST (UTC-5)
}


def bd_hours(name, season="summer"):
    """(open, close) as BD clock hours since BD midnight, close possibly > 24."""
    o, c = SESSIONS[name][season]
    o, c = (o + BD_OFFSET) % 24, (c + BD_OFFSET) % 24
    return o, c if c > o else c + 24


def clock(h):
    """Hours since BD midnight (may exceed 24, may be fractional) -> '6:30 PM'."""
    h = h % 24
    hh, mm = int(h), int(round((h - int(h)) * 60))
    ap = "AM" if hh < 12 else "PM"
    hh = hh % 12 or 12
    return f"{hh}:{mm:02d} {ap}"


def overlap(a, b, season="summer"):
    (ao, ac), (bo, bc) = bd_hours(a, season), bd_hours(b, season)
    for shift in (0, 24, -24):
        lo, hi = max(ao, bo + shift), min(ac, bc + shift)
        if lo < hi:
            return lo, hi
    return None


if __name__ == "__main__":
    for n in SESSIONS:
        for s in ("summer", "winter"):
            o, c = bd_hours(n, s)
            print(f"{n:9s} {s:6s} {clock(o)} – {clock(c)}")
    print("Tokyo/London", [clock(x) for x in overlap("Tokyo", "London")])
    print("London/NY", [clock(x) for x in overlap("London", "New York")])
    print("London/NY winter", [clock(x) for x in overlap("London", "New York", "winter")])
