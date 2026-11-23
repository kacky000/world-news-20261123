// Flat illustrations. Each subject is drawn on a 100x100 square; picture() fills a box
// with a sky/ground backdrop and centres the subject scaled to the box height.
import { tag } from './svg.mjs';

const P = (d, fill, extra = {}) => tag('path', { d, fill, ...extra });
const C = (cx, cy, r, fill, extra = {}) => tag('circle', { cx, cy, r, fill, ...extra });
const R = (x, y, width, height, fill, extra = {}) => tag('rect', { x, y, width, height, fill, ...extra });
const L = (x1, y1, x2, y2, stroke, w = 2) => tag('line', { x1, y1, x2, y2, stroke, stroke_width: w, stroke_linecap: 'round' });

const SUBJECTS = {
  quake: () => [
    P('M0 70 L30 70 L38 58 L46 82 L54 50 L62 88 L70 64 L78 70 L100 70', 'none', { stroke: '#c0392b', stroke_width: 4, stroke_linejoin: 'round' }),
    R(18, 30, 22, 30, '#7f8c8d'), P('M14 30 L29 18 L44 30Z', '#5d6d7e'), R(56, 34, 26, 26, '#95a5a6', { transform: 'rotate(8 69 47)' }),
  ],
  vote: () => [
    R(25, 45, 50, 42, '#2e86c1'), R(38, 40, 24, 5, '#1b4f72'),
    R(40, 14, 20, 30, '#fdfefe', { stroke: '#566573', stroke_width: 1.5, transform: 'rotate(-6 50 30)' }),
    P('M44 28 L49 34 L58 21', 'none', { stroke: '#27ae60', stroke_width: 3.5 }),
  ],
  rocket: () => [
    P('M50 8 C62 22 62 52 58 66 L42 66 C38 52 38 22 50 8Z', '#ecf0f1', { stroke: '#7f8c8d', stroke_width: 1.5 }),
    C(50, 32, 6, '#3498db'), P('M42 54 L30 70 L42 66Z', '#c0392b'), P('M58 54 L70 70 L58 66Z', '#c0392b'),
    P('M43 66 L50 92 L57 66Z', '#f39c12'), P('M46 66 L50 82 L54 66Z', '#f7dc6f'),
  ],
  court: () => [
    P('M15 34 L50 14 L85 34Z', '#b9a37e'), R(18, 34, 64, 6, '#a38b62'),
    ...[24, 38, 52, 66].map((x) => R(x, 42, 8, 34, '#d5c4a1')), R(14, 76, 72, 8, '#a38b62'),
  ],
  gavel: () => [
    R(30, 30, 34, 16, '#8e5b3a', { transform: 'rotate(-35 47 38)' }), R(48, 44, 7, 40, '#a0522d', { transform: 'rotate(-35 51 64)' }),
    R(18, 82, 44, 8, '#6e4b2a'),
  ],
  drone: () => [
    P('M50 40 L20 52 L20 58 L50 50 L80 58 L80 52Z', '#566573'), R(46, 30, 8, 34, '#34495e'), P('M44 64 L50 74 L56 64Z', '#34495e'),
    C(78, 82, 10, '#e67e22'), C(72, 86, 7, '#f39c12'), C(86, 86, 6, '#f5b041'),
  ],
  missile: () => [
    P('M20 80 L66 34', 'none', { stroke: '#bdc3c7', stroke_width: 6, stroke_dasharray: '4 5' }),
    P('M62 30 L82 18 L76 40Z', '#7b241c'), R(56, 30, 10, 24, '#922b21', { transform: 'rotate(45 61 42)' }),
  ],
  market: () => [
    R(14, 18, 72, 64, '#fdfefe', { stroke: '#aab7b8', stroke_width: 1.5 }),
    P('M20 70 L34 58 L44 64 L58 44 L68 50 L80 28', 'none', { stroke: '#27ae60', stroke_width: 4, stroke_linejoin: 'round' }),
    ...[0, 1, 2, 3].map((i) => R(22 + i * 15, 72 - i * 3, 9, 6 + i * 3, '#d6eaf8')),
  ],
  marketdown: () => [
    R(14, 18, 72, 64, '#fdfefe', { stroke: '#aab7b8', stroke_width: 1.5 }),
    P('M20 30 L34 40 L44 34 L58 54 L68 48 L80 70', 'none', { stroke: '#c0392b', stroke_width: 4, stroke_linejoin: 'round' }),
  ],
  ball: () => [
    C(50, 50, 30, '#fdfefe', { stroke: '#2c3e50', stroke_width: 2 }),
    P('M50 36 L63 45 L58 61 L42 61 L37 45Z', '#2c3e50'),
    L(50, 20, 50, 36, '#2c3e50'), L(63, 45, 78, 40, '#2c3e50'), L(37, 45, 22, 40, '#2c3e50'), L(58, 61, 66, 75, '#2c3e50'), L(42, 61, 34, 75, '#2c3e50'),
  ],
  trophy: () => [
    P('M32 18 L68 18 L64 46 C62 56 38 56 36 46Z', '#f1c40f'), P('M32 22 C18 22 20 42 36 42', 'none', { stroke: '#f1c40f', stroke_width: 4 }),
    P('M68 22 C82 22 80 42 64 42', 'none', { stroke: '#f1c40f', stroke_width: 4 }), R(46, 54, 8, 14, '#d4ac0d'), R(34, 68, 32, 10, '#7d6608'),
  ],
  fire: () => [
    P('M50 12 C66 32 76 46 70 66 C66 80 34 80 30 66 C26 52 38 44 42 32 C46 44 52 44 50 12Z', '#e74c3c'),
    P('M50 40 C58 52 62 60 58 70 C54 78 44 78 42 70 C40 62 48 56 50 40Z', '#f5b041'),
  ],
  summit: () => [
    R(30, 52, 40, 34, '#5d6d7e'), R(26, 46, 48, 8, '#34495e'), C(50, 40, 7, '#f0b27a'),
    L(18, 86, 18, 22, '#7f8c8d', 2), R(18, 22, 18, 12, '#3498db'), L(82, 86, 82, 22, '#7f8c8d', 2), R(64, 22, 18, 12, '#e74c3c'),
  ],
  ship: () => [
    P('M14 62 L86 62 L76 80 L24 80Z', '#2c3e50'), R(30, 46, 40, 16, '#ecf0f1'), R(52, 32, 8, 14, '#c0392b'),
    P('M0 86 Q12 80 25 86 T50 86 T75 86 T100 86', 'none', { stroke: '#2e86c1', stroke_width: 3 }),
  ],
  plane: () => [
    P('M12 52 L88 44 C94 44 94 52 88 52 L12 56Z', '#ecf0f1', { stroke: '#7f8c8d', stroke_width: 1.2 }),
    P('M44 50 L64 22 L72 22 L60 50Z', '#aab7b8'), P('M44 54 L62 80 L70 80 L58 54Z', '#aab7b8'), P('M14 52 L8 38 L16 38 L24 51Z', '#c0392b'),
  ],
  health: () => [
    R(20, 20, 60, 60, '#fdfefe', { rx: 10, stroke: '#c0392b', stroke_width: 2 }), R(42, 30, 16, 40, '#c0392b'), R(30, 42, 40, 16, '#c0392b'),
  ],
  leaf: () => [
    P('M22 78 C20 40 46 18 82 18 C82 54 60 80 22 78Z', '#27ae60'), P('M22 78 C40 60 56 44 76 24', 'none', { stroke: '#1e8449', stroke_width: 3 }),
  ],
  coin: () => [
    C(44, 56, 24, '#f4d03f', { stroke: '#b7950b', stroke_width: 3 }), C(62, 40, 22, '#f7dc6f', { stroke: '#b7950b', stroke_width: 3 }),
    tag('text', { x: 62, y: 48, font_size: 24, font_weight: 700, fill: '#9a7d0a', text_anchor: 'middle', font_family: 'Arial' }, '$'),
  ],
  oil: () => [
    P('M20 84 L36 30 L44 30 L60 84Z', 'none', { stroke: '#34495e', stroke_width: 3 }), L(28, 60, 52, 60, '#34495e'),
    R(56, 50, 30, 34, '#1c2833', { rx: 3 }), P('M71 18 C80 30 80 38 71 40 C62 38 62 30 71 18Z', '#17202a'),
  ],
  chip: () => [
    R(28, 28, 44, 44, '#2c3e50', { rx: 4 }), R(38, 38, 24, 24, '#5dade2'),
    ...[34, 46, 58].flatMap((v) => [L(v, 18, v, 28, '#7f8c8d'), L(v, 72, v, 82, '#7f8c8d'), L(18, v, 28, v, '#7f8c8d'), L(72, v, 82, v, '#7f8c8d')]),
  ],
  storm: () => [
    C(38, 38, 16, '#aab7b8'), C(56, 32, 20, '#bfc9ca'), C(70, 42, 14, '#aab7b8'), R(24, 40, 58, 14, '#bfc9ca'),
    P('M52 54 L42 72 L52 72 L44 90 L64 66 L54 66 L60 54Z', '#f4d03f'),
    ...[30, 70, 80].map((x) => L(x, 60, x - 6, 76, '#5dade2')),
  ],
  rain: () => [
    C(40, 34, 16, '#85929e'), C(60, 30, 18, '#99a3a4'), R(24, 34, 52, 14, '#99a3a4'),
    ...[30, 42, 54, 66].map((x) => L(x, 56, x - 6, 72, '#2e86c1', 3)), P('M0 84 Q25 78 50 84 T100 84 L100 100 L0 100Z', '#5dade2'),
  ],
  snow: () => [
    P('M10 84 L40 34 L52 50 L64 30 L92 84Z', '#85929e'), P('M40 34 L48 47 L44 50 L36 41Z', '#fdfefe'), P('M64 30 L72 44 L66 46 L58 40Z', '#fdfefe'),
    ...[[20, 20], [80, 18], [30, 64], [74, 60]].map(([x, y]) => C(x, y, 2.5, '#fdfefe')),
  ],
  protest: () => [
    ...[24, 50, 76].map((x) => tag('g', {}, C(x, 62, 7, '#f0b27a'), R(x - 8, 70, 16, 20, '#5d6d7e'))),
    L(40, 70, 40, 26, '#6e4b2a'), R(22, 16, 38, 14, '#fdfefe', { stroke: '#c0392b', stroke_width: 2 }),
  ],
  handshake: () => [
    P('M10 48 L36 40 L54 52 L46 60 L32 54 L10 62Z', '#f0b27a'), P('M90 48 L64 40 L44 50 L54 62 L70 54 L90 62Z', '#d68910'),
    R(4, 44, 10, 22, '#2e86c1'), R(86, 44, 10, 22, '#2e86c1'),
  ],
  train: () => [
    R(22, 24, 56, 50, '#c0392b', { rx: 8 }), R(28, 32, 44, 16, '#d6eaf8'), C(34, 64, 4, '#f9e79f'), C(66, 64, 4, '#f9e79f'),
    L(24, 90, 36, 74, '#566573', 3), L(76, 90, 64, 74, '#566573', 3), L(14, 90, 86, 90, '#566573', 3),
  ],
  satellite: () => [
    R(40, 40, 20, 20, '#d5d8dc', { transform: 'rotate(45 50 50)' }), R(8, 44, 26, 12, '#2e86c1'), R(66, 44, 26, 12, '#2e86c1'),
    L(34, 50, 40, 50, '#7f8c8d'), L(60, 50, 66, 50, '#7f8c8d'), C(50, 50, 4, '#f4d03f'),
  ],
  moon: () => [C(50, 50, 30, '#f4f6f6'), C(40, 40, 6, '#d5dbdb'), C(60, 58, 8, '#d5dbdb'), C(58, 34, 4, '#d5dbdb')],
  calendar: () => [
    R(20, 22, 60, 60, '#fdfefe', { rx: 4, stroke: '#566573', stroke_width: 2 }), R(20, 22, 60, 16, '#c0392b', { rx: 4 }),
    tag('text', { x: 50, y: 72, font_size: 30, font_weight: 700, fill: '#2c3e50', text_anchor: 'middle', font_family: 'Arial' }, '23'),
  ],
  factory: () => [
    P('M12 84 L12 50 L32 60 L32 50 L52 60 L52 50 L72 60 L72 30 L84 30 L84 84Z', '#7f8c8d'),
    C(80, 20, 6, '#d5d8dc'), C(88, 12, 5, '#e5e8e8'), ...[20, 40, 60].map((x) => R(x, 68, 8, 8, '#f4d03f')),
  ],
  ice: () => [
    P('M10 70 L26 40 L44 48 L58 30 L78 44 L90 70Z', '#d6eaf8', { stroke: '#85c1e9', stroke_width: 2 }),
    P('M0 72 Q25 66 50 72 T100 72 L100 100 L0 100Z', '#2e86c1'),
  ],
  medal: () => [P('M36 12 L50 40 L64 12Z', '#2e86c1'), C(50, 56, 22, '#f1c40f', { stroke: '#b7950b', stroke_width: 3 }), C(50, 56, 12, '#f7dc6f')],
  bank: () => [
    P('M14 36 L50 16 L86 36Z', '#5d6d7e'), ...[22, 38, 54, 70].map((x) => R(x, 40, 8, 34, '#aab7b8')), R(12, 76, 76, 8, '#5d6d7e'),
    tag('text', { x: 50, y: 33, font_size: 12, font_weight: 700, fill: '#fdfefe', text_anchor: 'middle', font_family: 'Arial' }, '%'),
  ],
  flag: () => [L(28, 90, 28, 12, '#566573', 3), P('M30 14 C44 8 58 22 74 14 L74 44 C58 52 44 38 30 44Z', '#e74c3c')],
  tank: () => [
    R(16, 58, 68, 18, '#566573', { rx: 9 }), R(30, 44, 36, 16, '#6c7a89', { rx: 4 }), L(64, 50, 92, 44, '#566573', 5),
    ...[26, 40, 54, 68].map((x) => C(x, 67, 5, '#2c3e50')),
  ],
  dove: () => [
    P('M20 56 C30 40 54 40 66 50 L84 42 L74 56 C64 70 40 72 20 56Z', '#fdfefe', { stroke: '#7f8c8d', stroke_width: 1.5 }),
    P('M40 52 C46 30 60 24 70 22 C62 36 56 46 48 54Z', '#eaeded', { stroke: '#7f8c8d', stroke_width: 1.5 }), C(72, 48, 2, '#2c3e50'),
  ],
  phone: () => [
    R(32, 12, 36, 76, '#2c3e50', { rx: 6 }), R(36, 20, 28, 56, '#5dade2'), C(50, 82, 3, '#7f8c8d'),
    P('M40 40 L48 48 L60 32', 'none', { stroke: '#fdfefe', stroke_width: 3 }),
  ],
};

const BACKDROPS = {
  sky: ['#d6eaf8', '#eaf2f8'], dusk: ['#f5cba7', '#fae5d3'], night: ['#1b2631', '#34495e'], paper: ['#f2ebe0', '#f8f4ec'],
  grass: ['#d5f5e3', '#eafaf1'], sand: ['#f9e79f', '#fcf3cf'], steel: ['#d5d8dc', '#eaecee'], rose: ['#f5b7b1', '#fadbd8'],
};

let gradId = 0;
export function picture(kind, x, y, w, h, back = 'sky') {
  const [a, b] = BACKDROPS[back] ?? BACKDROPS.sky;
  const id = `bg${++gradId}`;
  const s = h / 100;
  const parts = (SUBJECTS[kind] ?? SUBJECTS.calendar)();
  return tag('g', {},
    tag('defs', {}, tag('linearGradient', { id, x1: 0, y1: 0, x2: 0, y2: 1 },
      tag('stop', { offset: 0, stop_color: a }), tag('stop', { offset: 1, stop_color: b }))),
    tag('rect', { x, y, width: w, height: h, fill: `url(#${id})`, rx: 3 }),
    tag('g', { transform: `translate(${(x + (w - h) / 2).toFixed(1)} ${y}) scale(${s.toFixed(3)})` }, parts),
  );
}

export const KINDS = Object.keys(SUBJECTS);
