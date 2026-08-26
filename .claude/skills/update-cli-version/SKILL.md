---
name: update-cli-version
description: Update the Pinggy CLI download links on /cli/ to a new release of github.com/Pinggy-io/cli-js. Use when asked to "update the CLI version", "bump the CLI download links", or point the CLI page at a new vX.Y.Z release. Handles the current-version card, the older-versions table, link verification, and lastmod.
---

# Update the Pinggy CLI download version

All CLI download markup lives in a single file: `layouts/shortcodes/cli-downloads.html`.
It is pulled into `content/cli/index.md` via `{{< cli-downloads >}}`. There is no
`.amp.html` twin and no other file in the repo references the release URLs, so this
one file plus the page's `lastmod` is the whole change.

Releases come from <https://github.com/Pinggy-io/cli-js/releases>.

## 1. Find the target release and its assets

If the user did not name a version, take the latest:

```bash
curl -s https://api.github.com/repos/Pinggy-io/cli-js/releases/latest | grep '"tag_name"'
curl -s https://api.github.com/repos/Pinggy-io/cli-js/releases | grep '"tag_name"'   # full history
```

Asset filenames have been stable across releases:

```
pinggy-win-x64.exe   pinggy-win-arm64.exe
pinggy-macos-x64     pinggy-macos-arm64
pinggy-linux-x64     pinggy-linux-arm64
```

Confirm the new release actually ships all six before editing:

```bash
curl -s https://api.github.com/repos/Pinggy-io/cli-js/releases/latest | grep '"browser_download_url"'
```

## 2. Verify every URL before writing it

Required step - do not skip it. GitHub download URLs 302 to
`objects.githubusercontent.com`, so use `-IL` and check the final status is `200`.
Check both the new version and any version being added as a table row:

```bash
NEW=v0.5.6
OLD=v0.5.5   # the version moving from the card into the table
for f in pinggy-win-x64.exe pinggy-win-arm64.exe pinggy-macos-arm64 \
         pinggy-macos-x64 pinggy-linux-x64 pinggy-linux-arm64; do
  for v in $NEW $OLD; do
    code=$(curl -s -o /dev/null -w "%{http_code}" -IL \
      "https://github.com/Pinggy-io/cli-js/releases/download/$v/$f")
    echo "$code  $v/$f"
  done
done
```

Anything other than `200` means that asset is missing from the release - stop and
tell the user rather than shipping a dead link.

## 3. Bump the current-version card

Six `href`s plus one version pill, all reading the old tag. Because the pill and
the links use the same `vX.Y.Z` string, and the older-versions table never contains
the version currently on the card, a single global replace is safe **as the first
edit**:

```bash
sed -i '' 's|v0\.5\.5|v0.5.6|g' layouts/shortcodes/cli-downloads.html
grep -n "v0.5.6" layouts/shortcodes/cli-downloads.html   # expect 7 hits: 1 pill + 6 links
```

Run this *before* step 4, otherwise it would also rewrite the row you just added.

## 4. Add the outgoing version to the older-versions table

The table is inside the "Older versions" accordion. Rows are newest-first and
previous bumps kept every old row rather than trimming, so just prepend. Note the
table lists versions **without** the `v` prefix in the badge, but **with** it in
the URLs. Skip versions that were never released (e.g. there is no `v0.5.4`).

Insert one row right after `<tbody>`:

```bash
cat > /tmp/newrow.html <<'EOF'
                  <tr>
                    <th scope="row">
                      <span
                        class="badge rounded-pill"
                        style="background-color: #e9ecef; color: #212529;"
                      >0.5.5</span>
                    </th>
                    <td>
                      <div class="d-flex flex-column gap-1">
                        <a href="https://github.com/Pinggy-io/cli-js/releases/download/v0.5.5/pinggy-win-x64.exe" target="_blank" class="link-primary text-decoration-none">x86-64</a>
                        <a href="https://github.com/Pinggy-io/cli-js/releases/download/v0.5.5/pinggy-win-arm64.exe" target="_blank" class="link-primary text-decoration-none">ARM64</a>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column gap-1">
                        <a href="https://github.com/Pinggy-io/cli-js/releases/download/v0.5.5/pinggy-macos-arm64" target="_blank" class="link-primary text-decoration-none">Apple Silicon</a>
                        <a href="https://github.com/Pinggy-io/cli-js/releases/download/v0.5.5/pinggy-macos-x64" target="_blank" class="link-primary text-decoration-none">Intel</a>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column gap-1">
                        <a href="https://github.com/Pinggy-io/cli-js/releases/download/v0.5.5/pinggy-linux-x64" target="_blank" class="link-primary text-decoration-none">x86-64</a>
                        <a href="https://github.com/Pinggy-io/cli-js/releases/download/v0.5.5/pinggy-linux-arm64" target="_blank" class="link-primary text-decoration-none">ARM64</a>
                      </div>
                    </td>
                  </tr>
EOF
sed -i '' '/^                <tbody>$/r /tmp/newrow.html' layouts/shortcodes/cli-downloads.html
```

If the jump skipped intermediate releases (e.g. 0.5.1 straight to 0.5.5), add a
row for **each** released version in between, newest-first, as the previous bump
did for 0.5.3 and 0.5.2.

## 5. Update `lastmod`

Per `CLAUDE.md`, set `lastmod` in `content/cli/index.md` to **one day before
today**, keeping the existing time and `+05:30` offset.

## 6. Verify

```bash
grep -c "<tbody>" layouts/shortcodes/cli-downloads.html          # must stay 1
grep -o '>0\.[0-9]*\.[0-9]*</span>' layouts/shortcodes/cli-downloads.html  # newest-first, no dupes
hugo --gc --minify
grep -o "v0.5.6" public/cli/index.html | wc -l                   # 7
```

Do not commit `public/` or `resources/`.
