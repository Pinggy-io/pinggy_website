#!/usr/bin/env python3
"""
In-body theme chart for content/blog/what_yc_is_funding_in_2026.md

Source: the YC company directory, retrieved August 11, 2026, covering the three
most recent batches (Summer 2026 = 197 companies, Fall 2026 = 10, Winter 2027 =
1, so 208 total). Each company is assigned exactly ONE primary theme from YC's
own industry / subindustry / tags fields, so the counts sum to 208 and no
company is double counted. Figures match the post body.

Usage (see README.md in this folder for the full workflow):
    python what_yc_is_funding_in_2026.py
    cwebp -lossless -m 6 what_yc_is_funding_in_2026_themes.png \
      -o what_yc_is_funding_in_2026_themes.webp

Use -lossless, NOT the -q 88 the banner scripts use. This chart is flat colour
and crisp text, so lossless is both smaller and sharper: at 2200x1544 it encodes
to ~49 KB, against ~137 KB for lossy -q 95, with no ringing around the glyphs.
Note this is the in-body chart, NOT the post banner - do not overwrite
what_yc_is_funding_in_2026_banner.webp.

STYLE NOTE: this chart deliberately does NOT use the lavender hatched banner
style of the other scripts in this folder. It is a pixel-faithful render of the
HTML/CSS bar chart it replaced, so it matches the blog post template's own
palette (blog.css `.bp`): accent #2563eb bars on --accent-soft #eef2fe tracks,
--rule #e9ebf0 borders, --ink #1f2a37 text. The banner scripts are top-of-post
art; this one sits inside the reading column next to that CSS, so it follows the
post tokens instead. Keep it that way.
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

# ---- blog post tokens (static/css/blog.css, scoped to .bp) ----------------
ACCENT = "#2563eb"        # --accent, the filled bar
TRACK = "#eef2fe"         # --accent-soft, the bar track
RULE = "#e9ebf0"          # --rule, the outer box border
INK = "#1f2a37"           # --ink, label + title text
MUTED = "#5b6675"         # secondary text (counts / footnote)
SURFACE = "#ffffff"       # --surface

FONT = "Helvetica Neue"   # closest system match to the post's Plus Jakarta Sans
plt.rcParams.update({"font.family": FONT, "text.color": INK})

TOTAL = 208

# ---- data (all values cited in the post) ----------------------------------
# (theme, company count). Percentages and bar widths are derived, never
# hard-coded, so they cannot drift out of sync with the counts.
themes = [
    ("Other vertical B2B / AI apps",     33),
    ("AI infrastructure & data",         32),
    ("Robotics & physical AI",           32),
    ("Developer tools & agent tooling",  24),
    ("Fintech & financial ops",          23),
    ("Healthcare & bio",                 19),
    ("Industrial, energy & materials",   10),
    ("Security & compliance",             8),
    ("Supply chain & logistics",          6),
    ("Defense, aerospace & drones",       6),
    ("Consumer",                          5),
    ("Construction & real estate",        5),
    ("Government & education",            5),
]
assert sum(v for _, v in themes) == TOTAL, "theme counts must sum to 208"
peak = max(v for _, v in themes)

# ---- layout, in px on a 1100x772 canvas (mirrors the CSS box model) -------
W, H = 1100, 772
PAD = 30                      # outer box inset
TEXT_X = PAD + 26             # left padding inside the box
TRACK_X0, TRACK_X1 = 372, 890  # bar track start / end
COUNT_X, PCT_X = 952, 1040    # right-aligned numeric columns
ROW0, PITCH, BAR_H = 138, 42, 25

# Render at 2x so the webp stays crisp on retina/HiDPI screens. Layout above is
# authored in 1x px; matplotlib scales every mark and glyph by this factor, so
# only change SCALE, never the coordinates.
SCALE = 2

fig = plt.figure(figsize=(W / 100, H / 100), dpi=100)
fig.patch.set_facecolor(SURFACE)
ax = fig.add_axes([0, 0, 1, 1])
ax.set_xlim(0, W)
ax.set_ylim(H, 0)             # invert y so we can lay out top-down
ax.axis("off")


def rrect(x, y, w, h, color, r=4, **kw):
    """Rounded rect positioned by its top-left corner, like a CSS box."""
    ax.add_patch(FancyBboxPatch(
        (x + r, y + r), max(w - 2 * r, 0.1), max(h - 2 * r, 0.1),
        boxstyle=f"round,pad={r},rounding_size={r}",
        linewidth=kw.pop("lw", 0), facecolor=color, **kw))


# outer card
rrect(PAD, PAD, W - 2 * PAD, H - 2 * PAD, SURFACE, r=8,
      edgecolor=RULE, lw=1.2)

ax.text(TEXT_X, 78, "Primary theme, all 208 companies "
        "(Summer 2026 + Fall 2026 + Winter 2027)",
        fontsize=14.5, fontweight="bold", va="center", color=INK)

for i, (label, n) in enumerate(themes):
    y = ROW0 + i * PITCH
    ax.text(TEXT_X, y + BAR_H / 2, label, fontsize=12.5, va="center", color=INK)
    rrect(TRACK_X0, y, TRACK_X1 - TRACK_X0, BAR_H, TRACK, r=3)
    rrect(TRACK_X0, y, (TRACK_X1 - TRACK_X0) * n / peak, BAR_H, ACCENT, r=3)
    ax.text(COUNT_X, y + BAR_H / 2, str(n), fontsize=12.5, va="center",
            ha="right", color=INK)
    ax.text(PCT_X, y + BAR_H / 2, f"{n / TOTAL * 100:.1f}%", fontsize=12.5,
            va="center", ha="right", color=MUTED)

ax.text(TEXT_X, ROW0 + len(themes) * PITCH + 22,
        "Bar length is relative to the largest theme. "
        "Source: YC company directory, retrieved August 11, 2026.",
        fontsize=11, va="center", color=MUTED)

out = "what_yc_is_funding_in_2026_themes.png"
fig.savefig(out, dpi=100 * SCALE, facecolor=SURFACE)
print("wrote", out)
