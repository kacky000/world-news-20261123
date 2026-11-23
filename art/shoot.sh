#!/usr/bin/env bash
# Builds art/front-page.html from the story list, then photographs it at 1024x1024 into entry.png.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
root="$(dirname "$here")"
node "$here/compose.mjs"
chrome="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
profile="${TMPDIR:-/tmp}/news-page-chrome"
page="file:///$(cygpath -m "$here/front-page.html" 2>/dev/null || echo "$here/front-page.html")"
out="$(cygpath -m "$root/entry.png" 2>/dev/null || echo "$root/entry.png")"
"$chrome" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$profile" \
  --window-size=1024,1024 --screenshot="$out" "$page" >/dev/null 2>&1
ls -l "$root/entry.png"
