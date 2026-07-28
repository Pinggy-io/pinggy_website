# Banner charts

Python + matplotlib scripts that render the data-graph banners used at the top of
some blog posts (e.g. the LLM benchmark comparison banner). Each script is
self-contained: it hard-codes the figures cited in its post, draws the panels in
the house style, and writes a PNG. You then convert the PNG to `.webp` and drop it
into that post's images folder.

## House style (keep banners consistent)

- Light-lavender hatched bars (`#EDEAF7` fill, `#6B5DB8` edge, `///` hatch) for
  magnitude panels; crimson dots (`#E4322B`) with dashed stems for a panel on a
  different kind of scale than the rest (e.g. the TTS banner's price panel).
  Amber hatched bars (`#FBE7C6` / `#C8801E`, `\\\` hatch) mark a proprietary
  reference bar inside an open-weights panel.
- Bold near-black title (two lines), a one-line grey source/metric note under it,
  bold value labels above every mark, recessive dashed y-grid, no top/right spines.
- Each panel is a single-series magnitude chart, so there is one accent per mark
  type - no categorical palette to colorblind-validate. If you ever add a
  multi-series panel, run the dataviz skill's `validate_palette.js` first.
- Figures come from the post body. If you change a number here, change it in the
  post too (and vice-versa). Cite the same source the post cites.

## One-time setup

matplotlib is not a repo dependency; use a throwaway venv (do NOT commit it):

```bash
python3 -m venv /tmp/chartenv
/tmp/chartenv/bin/pip install -r requirements.txt
```

`cwebp` (from the `webp` Homebrew package) is used for PNG -> webp.

## Render a banner

```bash
# from this folder
/tmp/chartenv/bin/python best_open_source_self_hosted_llms_for_coding.py
cwebp -q 88 best_open_source_self_hosted_llms_for_coding_banner.png \
  -o best_open_source_self_hosted_llms_for_coding_banner.webp

# install it as the post banner (overwrites the old one)
cp best_open_source_self_hosted_llms_for_coding_banner.webp \
  ../../assets/images/best_open_source_self_hosted_llms_for_coding/

# then delete the local renders - only the .py belongs in git
rm best_open_source_self_hosted_llms_for_coding_banner.png \
   best_open_source_self_hosted_llms_for_coding_banner.webp
```

Open the PNG and eyeball it before converting: check the title isn't clipped, x
labels don't collide, and nothing overflows. Reduce the tick font size or drop a
model or two if a panel gets crowded.

## Adding a banner for a new post

Copy an existing script, swap in the new data/titles, and name it after the post
slug. Keep the panel count and style the same so all banners read as one set.
