// Lays out the front page as one 1024x1024 SVG and writes art/front-page.html.
// Run: node art/compose.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { tag, line, block, box, esc } from './svg.mjs';
import { picture } from './glyphs.mjs';
import { worldMap } from './earth.mjs';
import { DAY, LEADS, CARDS, BRIEFS, LEFT_OUT, SOURCES, FILED } from './stories.mjs';

const W = 1024, H = 1024, M = 18;
const INK = '#16161a', PAPER = '#fbf8f1', RULE = '#2b2b30', MUTED = '#5b5b66';

export const REGION = {
  'ASIA':      { color: '#c0392b', label: 'ASIA' },
  'OCEANIA':   { color: '#16a085', label: 'OCEANIA' },
  'MIDEAST':   { color: '#d35400', label: 'MIDDLE EAST' },
  'AFRICA':    { color: '#b7950b', label: 'AFRICA' },
  'EUROPE':    { color: '#2471a3', label: 'EUROPE' },
  'N.AMERICA': { color: '#6c3483', label: 'N. AMERICA' },
  'LATAM':     { color: '#1e8449', label: 'LATIN AMERICA' },
};

const SURE = {
  CONFIRMED: { color: '#1e8449', short: 'CONF', note: 'seen / measured' },
  OFFICIAL:  { color: '#1f618d', short: 'OFF',  note: 'govt / body says' },
  REPORTED:  { color: '#b9770e', short: 'REP',  note: 'news agency' },
  CLAIM:     { color: '#7d3c98', short: 'CLAIM', note: 'one side only' },
  FORECAST:  { color: '#626567', short: 'DUE',  note: 'on today’s slate' },
};

const all = [...LEADS, ...CARDS, ...BRIEFS];
const count = all.length;
const regions = new Set(all.map((s) => s.region));
const fields = new Set(all.map((s) => s.field));
for (const s of all) {
  if (!REGION[s.region]) throw new Error(`unknown region ${s.region} on #${s.n}`);
  if (!SURE[s.tag]) throw new Error(`unknown tag ${s.tag} on #${s.n}`);
}

function chip(x, y, t, src, size = 9) {
  const s = SURE[t];
  const label = t;
  const wTag = label.length * size * 0.68 + 8;
  return tag('g', {},
    box(x, y - size, wTag, size + 4, { fill: s.color, r: 2 }),
    line(x + 4, y + 0.5, label, { size, weight: 700, fill: '#fff', ls: 0.3 }),
    src ? line(x + wTag + 4, y + 0.5, src, { size, fill: MUTED, italic: true }) : '',
  );
}

function badge(x, y, n, region, r = 9) {
  return tag('g', {},
    tag('circle', { cx: x, cy: y, r, fill: REGION[region].color }),
    line(x, y + r * 0.42, n, { size: r * 1.15, weight: 700, fill: '#fff', anchor: 'middle' }),
  );
}

// ---------- masthead ----------
function masthead() {
  const out = [];
  out.push(box(0, 0, W, H, { fill: PAPER }));
  out.push(line(M, 24, 'ONE PAGE · THE WHOLE WORLD · ONE UTC DAY', { size: 12, weight: 700, fill: MUTED, ls: 2 }));
  out.push(line(W - M, 24, `EDITION FILED ${FILED} UTC`, { size: 12, weight: 700, fill: MUTED, anchor: 'end', ls: 1 }));
  out.push(tag('text', {
    x: M, y: 112, font_size: 96, font_weight: 900, fill: INK, textLength: 700, lengthAdjust: 'spacingAndGlyphs',
    font_family: "'Arial Black', 'Arial', sans-serif",
  }, esc(DAY.date)));
  out.push(box(736, 38, W - M - 736, 78, { fill: INK, r: 4 }));
  out.push(tag('text', {
    x: 736 + (W - M - 736) / 2, y: 92, font_size: 46, font_weight: 900, fill: PAPER, text_anchor: 'middle',
    textLength: W - M - 736 - 24, lengthAdjust: 'spacingAndGlyphs', font_family: "'Arial Black', 'Arial', sans-serif",
  }, esc(DAY.weekday)));
  out.push(line(736 + (W - M - 736) / 2, 110, '00:00 – 23:59 UTC', { size: 12, weight: 700, fill: '#f5b041', anchor: 'middle', ls: 1 }));
  out.push(box(M, 124, W - 2 * M, 2.5, { fill: RULE }));
  const strap = `${count} STORIES · ${regions.size} REGIONS · ${fields.size} FIELDS · EVERY ONE FROM THIS ${DAY.weekday}`;
  out.push(tag('text', {
    x: W / 2, y: 147, font_size: 19, font_weight: 900, fill: '#b03a2e', text_anchor: 'middle', letter_spacing: 1,
    font_family: "'Arial Black', 'Arial', sans-serif",
  }, esc(strap)));
  return out;
}

// ---------- UTC strip ----------
function utcStrip(y) {
  const x0 = 136, x1 = W - M - 6;
  const X = (h) => x0 + ((x1 - x0) * h) / 24;
  const out = [];
  out.push(box(M, y, W - 2 * M, 50, { fill: '#f0ebe0', r: 3 }));
  out.push(line(M + 8, y + 20, 'THE DAY', { size: 13, weight: 900, fill: INK }));
  out.push(line(M + 8, y + 36, 'IN UTC', { size: 13, weight: 900, fill: '#b03a2e' }));
  out.push(box(x0, y + 24, x1 - x0, 3, { fill: '#2b2b30' }));
  const [fh, fm] = FILED.split(':').map(Number);
  out.push(box(X(fh + fm / 60), y + 22, x1 - X(fh + fm / 60), 7, { fill: '#d5d0c4' }));
  for (let h = 0; h <= 24; h += 3) {
    out.push(tag('line', { x1: X(h), y1: y + 22, x2: X(h), y2: y + 30, stroke: '#2b2b30', stroke_width: 1 }));
    out.push(line(X(h) + 2, y + 37, String(h).padStart(2, '0'), { size: 7.5, fill: MUTED }));
  }
  const timed = all.filter((s) => s.utc).sort((a, b) => a.utc.localeCompare(b.utc));
  const at = (s) => { const [hh, mm] = s.utc.split(':').map(Number); return X(hh + mm / 60); };
  // Each event gets a dot; labels go in two rows (above / below the axis), each row
  // keeping a running right edge so no two labels collide.
  const edge = [-99, -99];
  timed.forEach((s, i) => {
    const px = at(s);
    out.push(tag('circle', { cx: px, cy: y + 25.5, r: 4, fill: REGION[s.region].color, stroke: '#fff', stroke_width: 1 }));
    const label = `${s.utc} ${s.when ?? ''}`.trim();
    const wl = label.length * 4.9;
    let row = edge[0] <= edge[1] ? 0 : 1;
    const lx = Math.max(px - 3, edge[row] + 6);
    const ly = row === 0 ? y + 15 : y + 45;
    out.push(tag('line', { x1: px, y1: y + 25.5, x2: lx + 2, y2: row === 0 ? ly + 2 : ly - 8, stroke: '#8a8478', stroke_width: 0.6 }));
    out.push(line(lx, ly, label, { size: 8.5, weight: 700, fill: INK }));
    edge[row] = lx + wl;
  });
  return out;
}

// ---------- leads ----------
function leads(y) {
  const out = [];
  const n = LEADS.length;
  const gap = 12;
  const w = (W - 2 * M - gap * (n - 1)) / n;
  const chars = Math.floor(w / 9.6);
  LEADS.forEach((s, i) => {
    const x = M + i * (w + gap);
    out.push(box(x, y, w, 238, { fill: '#fff', stroke: '#d9d3c5', sw: 1, r: 4 }));
    out.push(picture(s.pic, x + 6, y + 6, w - 12, 104, s.back));
    out.push(badge(x + 20, y + 20, s.n, s.region, 11));
    out.push(box(x + 6, y + 98, w - 12, 12, { fill: 'rgba(0,0,0,0.55)' }));
    out.push(line(x + 10, y + 107.5, `${REGION[s.region].label} · ${s.place} · ${s.field.toUpperCase()}`, { size: 8.5, weight: 700, fill: '#fff', ls: 0.6 }));
    const hd = block(x + 10, y + 132, s.head, chars, 19, { size: 17, weight: 900, fill: INK, family: "'Arial Black', Arial, sans-serif" }, 2);
    out.push(hd.svg);
    const bd = block(x + 10, y + 134 + hd.height, s.body, Math.floor(w / 6.1), 14, { size: 11.5, fill: '#33333a' }, 4);
    out.push(bd.svg);
    out.push(chip(x + 10, y + 228, s.tag, s.src));
  });
  return out;
}

// ---------- cards ----------
function cards(y) {
  const out = [];
  const cols = 6, gap = 8;
  const w = (W - 2 * M - gap * (cols - 1)) / cols, h = 96;
  out.push(line(M, y - 6, 'ALSO TODAY', { size: 12, weight: 900, fill: INK, ls: 1.5 }));
  CARDS.forEach((s, i) => {
    const x = M + (i % cols) * (w + gap);
    const yy = y + Math.floor(i / cols) * (h + gap);
    out.push(box(x, yy, w, h, { fill: '#fff', stroke: '#d9d3c5', sw: 1, r: 3 }));
    out.push(picture(s.pic, x + 4, yy + 4, w - 8, 38, s.back));
    out.push(badge(x + 14, yy + 14, s.n, s.region, 8));
    const pl = s.place.toUpperCase();
    out.push(box(x + w - 10 - pl.length * 4.9, yy + 6, pl.length * 4.9 + 6, 10, { fill: 'rgba(255,255,255,0.85)', r: 2 }));
    out.push(line(x + w - 7, yy + 13.5, pl, { size: 7.5, weight: 700, fill: INK, anchor: 'end' }));
    out.push(block(x + 6, yy + 55, s.head, 26, 11.5, { size: 10.3, weight: 700, fill: INK }, 3).svg);
    out.push(chip(x + 6, yy + 89, s.tag, s.src, 7.5));
  });
  return out;
}

// ---------- map, legend, date check ----------
function lowerLeft(y) {
  const out = [];
  const w = 396;
  out.push(line(M, y - 6, 'WHERE IT HAPPENED · NUMBERS MATCH STORIES', { size: 10.5, weight: 900, fill: INK, ls: 0.8 }));
  out.push(worldMap(M, y, w, 176, all.filter((s) => s.lon !== undefined).map((s) => ({ n: s.n, lon: s.lon, lat: s.lat, color: REGION[s.region].color })), { pin: 6 }));
  // region key
  let kx = M, ky = y + 190;
  for (const [k, r] of Object.entries(REGION)) {
    const c = all.filter((s) => s.region === k).length;
    const t = `${k} ${c}`;
    out.push(tag('circle', { cx: kx + 4, cy: ky - 3.5, r: 4, fill: r.color }));
    out.push(line(kx + 10, ky, t, { size: 8.5, weight: 700, fill: INK }));
    kx += t.length * 5.3 + 14;
  }
  // HOW SURE legend
  let ly = y + 208;
  out.push(line(M, ly + 2, 'HOW SURE', { size: 10.5, weight: 900, fill: INK }));
  let lx = M + 66;
  for (const [k, s] of Object.entries(SURE)) {
    out.push(box(lx, ly - 8, 8, 8, { fill: s.color, r: 1.5 }));
    out.push(line(lx + 11, ly - 0.5, k, { size: 7.5, weight: 700, fill: INK }));
    out.push(line(lx + 11, ly + 8, s.note, { size: 6.5, fill: MUTED }));
    lx += 66;
  }
  // date check
  let ty = y + 232;
  out.push(box(M, ty - 12, w, 16, { fill: INK, r: 2 }));
  out.push(line(M + 6, ty, `DATE CHECK · LEFT OUT BECAUSE IT WAS NOT ${DAY.short}`, { size: 9.5, weight: 900, fill: '#fff', ls: 0.5 }));
  out.push(line(M + w - 6, ty, 'REAL DATE', { size: 8.5, weight: 700, fill: '#f5b041', anchor: 'end' }));
  LEFT_OUT.forEach((d, i) => {
    const yy = ty + 15 + i * 13.5;
    if (i % 2 === 0) out.push(box(M, yy - 10, w, 13.5, { fill: '#efe9dc' }));
    out.push(line(M + 6, yy, '✕ ' + d.story, { size: 9, fill: INK }));
    out.push(line(M + w - 6, yy, d.real, { size: 9, weight: 700, fill: '#b03a2e', anchor: 'end' }));
  });
  return out;
}

// ---------- numbered briefs ----------
function briefs(y) {
  const out = [];
  const x0 = M + 396 + 16;
  const colW = (W - M - x0 - 12) / 2;
  out.push(line(x0, y - 6, `IN BRIEF · STORIES ${BRIEFS[0].n}–${BRIEFS[BRIEFS.length - 1].n}`, { size: 12, weight: 900, fill: INK, ls: 1.2 }));
  const per = Math.ceil(BRIEFS.length / 2);
  const lead = Math.min(18.5, 330 / per);
  BRIEFS.forEach((s, i) => {
    const col = Math.floor(i / per);
    const x = x0 + col * (colW + 12);
    const yy = y + 10 + (i % per) * lead;
    if ((i % per) % 2 === 0) out.push(box(x - 2, yy - 11, colW + 4, lead, { fill: '#f3eee3' }));
    out.push(line(x + 12, yy + 1, s.n, { size: 9.5, weight: 900, fill: REGION[s.region].color, anchor: 'end' }));
    out.push(line(x + 16, yy + 1, s.text, { size: 9.6, fill: INK }));
    const sh = SURE[s.tag].short;
    const cw = sh.length * 5.2 + 5;
    out.push(box(x + colW - cw, yy - 7.5, cw, 10, { fill: SURE[s.tag].color, r: 2 }));
    out.push(line(x + colW - cw / 2, yy + 0.5, sh, { size: 7, weight: 700, fill: '#fff', anchor: 'middle' }));
  });
  return out;
}

function footer() {
  return [
    box(M, H - 22, W - 2 * M, 1, { fill: RULE }),
    line(M, H - 9, `SOURCES: ${SOURCES}`, { size: 8, fill: MUTED }),
  ];
}

const svg = tag('svg', { xmlns: 'http://www.w3.org/2000/svg', width: W, height: H, viewBox: `0 0 ${W} ${H}` },
  masthead(), utcStrip(156), leads(212), cards(472), lowerLeft(686), briefs(686), footer());

const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(DAY.date)}</title>
<style>html,body{margin:0;padding:0;background:${PAPER}}svg{display:block}</style></head><body>${svg}</body></html>\n`;

const here = fileURLToPath(new URL('.', import.meta.url));
writeFileSync(here + 'front-page.html', html);
console.log(`front-page.html: ${count} stories, ${regions.size} regions, ${fields.size} fields`);
