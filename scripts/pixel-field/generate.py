#!/usr/bin/env python3
"""Generate the homepage "pixel field": the low-res art behind the stage
terminal (see DESIGN_GUIDELINES.md section 7, "Stage + pixel field").

A 64x26 RGBA PNG of a calm, light landscape in tints of the brand blue:
four broad sky bands joined by a sparse ordered dither, a few white
clouds placed where the terminal mock doesn't cover them, and two layers of
soft hills along the bottom. The top corners step in with transparent cells
so the stage band shows through, which gives the field its silhouette.

Keep it quiet: the dark terminal sits on top, so the field should read as
a backdrop, not compete with it. No per-pixel noise, no small details.

The browser upscales it with `image-rendering: pixelated`, so the file stays
under a kilobyte. Pure standard library (zlib + struct), no Pillow needed.

    python3 scripts/pixel-field/generate.py

writes assets/images/home/pixel-field.png. The output is deterministic, so
re-running it without edits produces an identical file.
"""

import struct
import zlib
from pathlib import Path

W, H = 64, 26

# Sky, top to bottom: light tints between --brand-100 (#dce6fc) and
# --brand-50 (#eef3fe), plus one step deeper for the top band.
SKY = [
    ((200, 215, 248), 7),   # rows 0-6
    ((213, 225, 250), 6),   # rows 7-12
    ((226, 234, 252), 6),   # rows 13-18
    ((238, 243, 254), 7),   # rows 19-25 (--brand-50)
]

CLOUD = (255, 255, 255)
HILL_FAR = (186, 204, 245)
HILL_NEAR = (166, 189, 242)

# Cloud sprites ("#" = cloud) and their top-left cells. The terminal mock
# covers roughly columns 11-53 from row 4 down, so clouds sit at the sides
# and in the strip above the terminal.
CLOUDS = [
    (["..###...", ".######.", "########"], 2, 9),
    (["...###..", ".######.", "########"], 54, 6),
    ([".##...", "#####."], 56, 13),
    (["..##....", "#######."], 22, 1),
    (["...##..", ".#####.", "#######"], 38, 0),
]

# Hill outlines as (run length, height in rows) pairs, left to right.
# Long flat runs and small height steps keep the horizon calm.
HILLS_FAR = [(6, 5), (5, 6), (7, 7), (6, 6), (8, 5), (6, 6), (7, 7), (5, 6), (6, 5), (8, 6)]
HILLS_NEAR = [(9, 2), (7, 3), (10, 2), (8, 3), (9, 2), (7, 3), (6, 2), (8, 3)]


def expand(runs):
    heights = []
    for run, h in runs:
        heights.extend([h] * run)
    return (heights + [heights[-1]] * W)[:W]


def band_index(y):
    start = 0
    for i, (_, rows) in enumerate(SKY):
        if y < start + rows:
            return i, y - start, rows
        start += rows
    return len(SKY) - 1, 0, 1


def sky_color(x, y):
    """Flat bands. The last row of each band takes the next band's color in
    every fourth cell: a sparse, ordered dither that softens the step
    without the busy look of a full checkerboard."""
    i, offset, rows = band_index(y)
    if offset == rows - 1 and i + 1 < len(SKY) and (x + 2 * i) % 4 == 0:
        return SKY[i + 1][0]
    return SKY[i][0]


def top_mask():
    """Transparent cells at the top of each column: a stepped arch, three
    cells deep at the outer edges, zero across the middle."""
    mask = []
    for x in range(W):
        edge = min(x, W - 1 - x)
        if edge < 4:
            mask.append(3)
        elif edge < 8:
            mask.append(2)
        elif edge < 12:
            mask.append(1)
        else:
            mask.append(0)
    return mask


def build():
    far = expand(HILLS_FAR)
    near = expand(HILLS_NEAR)
    mask = top_mask()

    cloud_cells = set()
    for rows, cx, cy in CLOUDS:
        for dy, line in enumerate(rows):
            for dx, ch in enumerate(line):
                if ch == "#":
                    cloud_cells.add((cx + dx, cy + dy))

    out = []
    for y in range(H):
        row = []
        from_bottom = H - 1 - y
        for x in range(W):
            if y < mask[x]:
                row.append((0, 0, 0, 0))
            elif from_bottom < near[x]:
                row.append((*HILL_NEAR, 255))
            elif from_bottom < far[x]:
                row.append((*HILL_FAR, 255))
            elif (x, y) in cloud_cells:
                row.append((*CLOUD, 255))
            else:
                row.append((*sky_color(x, y), 255))
        out.append(row)
    return out


def write_png(path, rows):
    raw = b"".join(
        b"\x00" + b"".join(struct.pack("BBBB", *px) for px in row) for row in rows
    )

    def chunk(tag, data):
        body = tag + data
        return (
            struct.pack(">I", len(data))
            + body
            + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)
        )

    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", W, H, 8, 6, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(raw, 9))
    png += chunk(b"IEND", b"")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(png)


if __name__ == "__main__":
    root = Path(__file__).resolve().parents[2]
    out = root / "assets" / "images" / "home" / "pixel-field.png"
    write_png(out, build())
    print(f"wrote {out.relative_to(root)} ({out.stat().st_size} bytes, {W}x{H})")
