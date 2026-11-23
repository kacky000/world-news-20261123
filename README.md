# world-news-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/kacky000/world-news-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/kacky000/world-news-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Monday 23 November 2026 (UTC) on one 1024×1024 front page: the date in the biggest type, a strip of the day's
UTC timeline, three drawn lead stories, twelve drawn cards, numbered briefs, a pin map, a "how sure" tag on every
story (CONFIRMED / OFFICIAL / REPORTED / CLAIM / FORECAST, with its source) and a DATE CHECK table of stories left
out because they belong to another day.

The page is plain SVG written by `art/compose.mjs` from the story list in `art/stories.mjs`; the drawings come
from `art/glyphs.mjs` and the map from `art/earth.mjs`. `art/shoot.sh` renders it with headless Chrome into
`entry.png`, and `main.ts` copies that PNG to the output folder.

## Run it

```sh
bash art/shoot.sh                                   # rebuild entry.png (needs Node 22 and Chrome)
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts # what the grader runs
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=9ykrm1qx&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
