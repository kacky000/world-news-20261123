// Entry program for news-image-20261123 (Node 22, standard library only).
// The front page is drawn ahead of time (art/compose.mjs -> art/front-page.html -> art/shoot.sh -> entry.png);
// at grading time this program only copies that PNG to the output folder.
// Locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const size = statSync(src).size;
if (size > 1024 * 1024) throw new Error(`entry.png is ${size} bytes; the gate allows 1 MiB`);
copyFileSync(src, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
