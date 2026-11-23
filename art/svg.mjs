// Small helpers for writing SVG as strings.

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// tag('rect', {x: 1, fill: 'red'}, child, child...) -> '<rect x="1" fill="red">...</rect>'
export function tag(name, attrs = {}, ...kids) {
  const a = Object.entries(attrs)
    .filter(([, v]) => v !== undefined && v !== null && v !== false)
    .map(([k, v]) => ` ${k.replace(/_/g, '-')}="${esc(v)}"`)
    .join('');
  const inner = kids.flat(Infinity).filter((k) => k !== undefined && k !== null && k !== false).join('');
  return inner ? `<${name}${a}>${inner}</${name}>` : `<${name}${a}/>`;
}

// One line of text. opts: size, weight, fill, anchor, family, ls (letter-spacing), italic
export function line(x, y, str, o = {}) {
  return tag(
    'text',
    {
      x, y,
      font_size: o.size ?? 12,
      font_weight: o.weight ?? 400,
      fill: o.fill ?? '#1b1b1f',
      text_anchor: o.anchor ?? 'start',
      font_family: o.family ?? 'Arial, Helvetica, sans-serif',
      letter_spacing: o.ls,
      font_style: o.italic ? 'italic' : undefined,
    },
    esc(str),
  );
}

// Break text into lines no longer than `max` characters (word boundaries).
export function breakText(str, max) {
  const out = [];
  let cur = '';
  for (const w of String(str).split(/\s+/)) {
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= max) cur += ' ' + w;
    else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}

// Several lines stacked with a fixed leading; returns {svg, height}.
export function block(x, y, str, max, lead, o = {}, limit = 99) {
  let rows = breakText(str, max);
  if (rows.length > limit) {
    rows = rows.slice(0, limit);
    rows[limit - 1] = rows[limit - 1].replace(/[ ,.;:]*$/, '') + '…';
  }
  return { svg: rows.map((r, i) => line(x, y + i * lead, r, o)).join(''), height: rows.length * lead };
}

export const group = (attrs, ...kids) => tag('g', attrs, ...kids);
export const box = (x, y, w, h, o = {}) =>
  tag('rect', { x, y, width: w, height: h, rx: o.r ?? 0, fill: o.fill ?? 'none', stroke: o.stroke, stroke_width: o.sw });
