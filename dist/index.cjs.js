"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var o = ((a) => (
    (a.doubleFlat = "𝄫"),
    (a.flat = "♭"),
    (a.natural = ""),
    (a.sharp = "♯"),
    (a.doubleSharp = "𝄪"),
    a
  ))(o || {}),
  p = ((a) => (
    (a.C = "C"),
    (a.C_SHARP = "undeclared c-sharp"),
    (a.D = "D"),
    (a.D_SHARP = "undeclared d-sharp"),
    (a.E = "E"),
    (a.F = "F"),
    (a.F_SHARP = "undeclared f-sharp"),
    (a.G = "G"),
    (a.G_SHARP = "undeclared g-sharp"),
    (a.A = "A"),
    (a.A_SHARP = "undeclared a-sharp"),
    (a.B = "B"),
    a
  ))(p || {});
function W(a, t) {
  return a.octave == t.octave && a.name == t.name;
}
function q(a) {
  return a.name == p.B;
}
function N(a, t) {
  return Math.abs(i(t) - i(a)) < 2 || Math.abs(i(a) - i(t)) < 2;
}
function ea(a, t) {
  return (
    ((a.name == p.F && t.name == p.E) || (a.name == p.C && q(t))) && N(a, t)
  );
}
function ua(a, t) {
  return (
    s(t.alteration) == r(a.alteration) || r(t.alteration) == s(a.alteration)
  );
}
function la(a, t) {
  return (
    ((a.name == p.E && t.name == p.F) || (q(a) && t.name == p.C)) && N(a, t)
  );
}
function X(a, t) {
  return (
    (t.name == p.C && a.octave == t.octave - 1) ||
    (a.name == p.C && a.octave - 1 == t.octave)
  );
}
function aa(a, t, n = !1) {
  return n && !W(a, t)
    ? !1
    : W(a, t)
      ? a.alteration == t.alteration
      : q(t) && X(a, t)
        ? s(a.alteration) == t.alteration
        : (q(a) && X(a, t)) || la(a, t)
          ? r(a.alteration) == t.alteration
          : ea(a, t)
            ? r(t.alteration) == a.alteration
            : !!ua(a, t);
}
function i(a) {
  return Object.values(p).indexOf(a.name) % 12;
}
function w(a) {
  return Object.values(o).indexOf(a.alteration);
}
function ra(a, t) {
  return aa(a, t)
    ? !1
    : a.octave < t.octave
      ? !0
      : a.octave > t.octave
        ? !1
        : i(a) == i(t) && a.alteration != t.alteration
          ? w(a) < w(t)
          : i(a) < i(t);
}
function sa(a, t) {
  return aa(a, t) || a.octave < t.octave
    ? !1
    : a.octave > t.octave
      ? !0
      : i(a) == i(t) && a.alteration != t.alteration
        ? w(a) > w(t)
        : i(a) > i(t);
}
function x(a, t) {
  const n = (e, c) => (Object.values(p).indexOf(e.name) + c) % 12;
  return Object.values(p)[n(a, t)];
}
function ta(a, t) {
  const n = a.map((c) => c.name).indexOf(t.name),
    e = a[(n + 1) % a.length];
  return { alteration: e.alteration, name: e.name, octave: e.octave };
}
function r(a) {
  return Object.values(o)[Object.values(o).indexOf(a) - 1] || o.natural;
}
function s(a) {
  return Object.values(o)[Object.values(o).indexOf(a) + 1];
}
function G(a, t) {
  return (
    a.findIndex(
      (e) =>
        e.octave == t.octave &&
        e.name == t.name &&
        e.alteration == t.alteration,
    ) > -1
  );
}
function ca(a) {
  return {
    name: a[0],
    alteration: a.slice(1, a.length - 1),
    octave: parseInt(a[a.length - 1]),
  };
}
function ia(a) {
  return `${a.name}${a.alteration}${a.octave}`;
}
function pa(a, t) {
  return G(a, { ...t, octave: a[0].octave }) ||
    G(a, { ...t, octave: a[0].octave + 1 })
    ? { ...t, octave: a[0].octave }
    : ta(a, t);
}
function fa(a) {
  return { name: a.name, octave: a.octave, alteration: a.alteration };
}
function k(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? r(a.alteration)
      : r(r(a.alteration))
    : n[t].includes(a.name)
      ? s(a.alteration)
      : s(s(a.alteration));
}
function O(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? a.alteration
      : r(a.alteration)
    : n[t].includes(a.name)
      ? a.alteration
      : s(a.alteration);
}
function S(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? s(a.alteration)
      : a.alteration
    : n[t].includes(a.name)
      ? r(a.alteration)
      : a.alteration;
}
function C(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? s(s(a.alteration))
      : s(a.alteration)
    : n[t].includes(a.name)
      ? r(r(a.alteration))
      : r(a.alteration);
}
function u(a, t, n, e) {
  return e[t].includes(a.name) ? x(a, n.special[t]) : x(a, n.normal[t]);
}
function l(a, t, n) {
  return t.includes(a.name)
    ? n == "down"
      ? a.octave - 1
      : a.octave + 1
    : a.octave;
}
const f = { up: ["D", "E", "A", "B"], down: ["C", "F", "G", "D"] },
  $ = { up: ["A", "B"], down: ["C", "D"] },
  M = { normal: { up: 4, down: 8 }, special: { up: 3, down: 9 } };
function ma(a, t = "up") {
  return { name: u(a, t, M, f), alteration: k(a, t, f), octave: l(a, $[t], t) };
}
function va(a, t = "up") {
  return { name: u(a, t, M, f), alteration: O(a, t, f), octave: l(a, $[t], t) };
}
function ha(a, t = "up") {
  return { name: u(a, t, M, f), alteration: S(a, t, f), octave: l(a, $[t], t) };
}
function oa(a, t = "up") {
  return { name: u(a, t, M, f), alteration: C(a, t, f), octave: l(a, $[t], t) };
}
function ya(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? a.alteration
      : r(a.alteration)
    : n[t].includes(a.name)
      ? a.alteration
      : s(a.alteration);
}
function ga(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? s(a.alteration)
      : a.alteration
    : n[t].includes(a.name)
      ? r(a.alteration)
      : a.alteration;
}
function ba(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? s(s(a.alteration))
      : s(a.alteration)
    : n[t].includes(a.name)
      ? r(r(a.alteration))
      : r(a.alteration);
}
const y = { up: ["B"], down: ["F"] },
  T = { up: ["F", "G", "A", "B"], down: ["C", "D", "E", "F"] },
  U = { special: { up: 6, down: 6 }, normal: { up: 7, down: 5 } };
function Aa(a, t = "up") {
  return {
    name: u(a, t, U, y),
    alteration: ya(a, t, y),
    octave: l(a, T[t], t),
  };
}
function Fa(a, t = "up") {
  return {
    name: u(a, t, U, y),
    alteration: ga(a, t, y),
    octave: l(a, T[t], t),
  };
}
function qa(a, t = "up") {
  return {
    name: u(a, t, U, y),
    alteration: ba(a, t, y),
    octave: l(a, T[t], t),
  };
}
function R(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? r(r(a.alteration))
      : r(a.alteration)
    : n[t].includes(a.name)
      ? s(s(a.alteration))
      : s(a.alteration);
}
function _(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? r(a.alteration)
      : a.alteration
    : n[t].includes(a.name)
      ? s(a.alteration)
      : a.alteration;
}
function E(a, t, n) {
  return t == "up"
    ? n[t].includes(a.name)
      ? s(s(a.alteration))
      : s(a.alteration)
    : n[t].includes(a.name)
      ? r(r(a.alteration))
      : r(a.alteration);
}
const g = { up: [], down: [] },
  z = { up: [], down: [] },
  H = { special: { up: 0, down: 0 }, normal: { up: 0, down: 0 } };
function wa(a, t = "up") {
  return { name: u(a, t, H, g), alteration: R(a, t, g), octave: l(a, z[t], t) };
}
function ka(a, t = "up") {
  return { name: u(a, t, H, g), alteration: _(a, t, g), octave: l(a, z[t], t) };
}
function Oa(a, t = "up") {
  return { name: u(a, t, H, g), alteration: E(a, t, g), octave: l(a, z[t], t) };
}
const b = { up: ["F"], down: ["B"] },
  J = { up: ["G", "A", "B"], down: ["C", "D", "E"] },
  K = { special: { up: 6, down: 6 }, normal: { up: 5, down: 7 } };
function Sa(a, t = "up") {
  return { name: u(a, t, K, b), alteration: R(a, t, b), octave: l(a, J[t], t) };
}
function Ca(a, t = "up") {
  return { name: u(a, t, K, b), alteration: _(a, t, b), octave: l(a, J[t], t) };
}
function $a(a, t = "up") {
  return { name: u(a, t, K, b), alteration: E(a, t, b), octave: l(a, J[t], t) };
}
const m = { up: ["D", "E", "G", "A", "B"], down: ["C", "D", "F", "G", "A"] },
  d = {
    up: ["D", "E", "F", "G", "A", "B"],
    down: ["C", "D", "E", "F", "G", "A"],
  },
  P = { normal: { up: 11, down: 1 }, special: { up: 10, down: 2 } };
function Ma(a, t = "up") {
  return { name: u(a, t, P, m), alteration: k(a, t, m), octave: l(a, d[t], t) };
}
function da(a, t = "up") {
  return { name: u(a, t, P, m), alteration: O(a, t, m), octave: l(a, d[t], t) };
}
function Pa(a, t = "up") {
  return { name: u(a, t, P, m), alteration: S(a, t, m), octave: l(a, d[t], t) };
}
function Ba(a, t = "up") {
  return { name: u(a, t, P, m), alteration: C(a, t, m), octave: l(a, d[t], t) };
}
const v = { up: ["E", "A", "B"], down: ["C", "F", "G"] },
  B = { up: ["E", "F", "G", "A", "B"], down: ["C", "D", "E", "F", "G"] },
  j = { normal: { up: 9, down: 3 }, special: { up: 8, down: 4 } };
function ja(a, t = "up") {
  return { name: u(a, t, j, v), alteration: k(a, t, v), octave: l(a, B[t], t) };
}
function Da(a, t = "up") {
  return { name: u(a, t, j, v), alteration: O(a, t, v), octave: l(a, B[t], t) };
}
function Ia(a, t = "up") {
  return { name: u(a, t, j, v), alteration: S(a, t, v), octave: l(a, B[t], t) };
}
function xa(a, t = "up") {
  return { name: u(a, t, j, v), alteration: C(a, t, v), octave: l(a, B[t], t) };
}
const A = { up: [], down: [] },
  Q = {
    up: ["C", "D", "E", "F", "G", "A", "B"],
    down: ["C", "D", "E", "F", "G", "A", "B"],
  },
  V = { special: { up: 12, down: 12 }, normal: { up: 12, down: 12 } };
function Ga(a, t = "up") {
  return { name: u(a, t, V, A), alteration: R(a, t, A), octave: l(a, Q[t], t) };
}
function Ta(a, t = "up") {
  return { name: u(a, t, V, A), alteration: _(a, t, A), octave: l(a, Q[t], t) };
}
function Ua(a, t = "up") {
  return { name: u(a, t, V, A), alteration: E(a, t, A), octave: l(a, Q[t], t) };
}
const h = { up: ["E", "B"], down: ["C", "F"] },
  D = { up: ["B"], down: ["C"] },
  I = { special: { up: 1, down: 11 }, normal: { up: 2, down: 10 } };
function Ra(a, t = "up") {
  return { name: u(a, t, I, h), alteration: k(a, t, h), octave: l(a, D[t], t) };
}
function _a(a, t = "up") {
  return { name: u(a, t, I, h), alteration: O(a, t, h), octave: l(a, D[t], t) };
}
function Ea(a, t = "up") {
  return { name: u(a, t, I, h), alteration: S(a, t, h), octave: l(a, D[t], t) };
}
function za(a, t = "up") {
  return { name: u(a, t, I, h), alteration: C(a, t, h), octave: l(a, D[t], t) };
}
const Y = [
  { type: "unison", quality: "diminished", callback: wa, halfsteps: -1 },
  { type: "unison", quality: "perfect", callback: ka, halfsteps: 0 },
  { type: "unison", quality: "augmented", callback: Oa, halfsteps: 1 },
  { type: "second", quality: "diminished", callback: Ra, halfsteps: 0 },
  { type: "second", quality: "minor", callback: _a, halfsteps: 1 },
  { type: "second", quality: "major", callback: Ea, halfsteps: 2 },
  { type: "second", quality: "augmented", callback: za, halfsteps: 3 },
  { type: "third", quality: "diminished", callback: ma, halfsteps: 2 },
  { type: "third", quality: "minor", callback: va, halfsteps: 3 },
  { type: "third", quality: "major", callback: ha, halfsteps: 4 },
  { type: "third", quality: "augmented", callback: oa, halfsteps: 5 },
  { type: "fourth", quality: "diminished", callback: Sa, halfsteps: 4 },
  { type: "fourth", quality: "perfect", callback: Ca, halfsteps: 5 },
  { type: "fourth", quality: "augmented", callback: $a, halfsteps: 6 },
  { type: "fifth", quality: "diminished", callback: Aa, halfsteps: 6 },
  { type: "fifth", quality: "perfect", callback: Fa, halfsteps: 7 },
  { type: "fifth", quality: "augmented", callback: qa, halfsteps: 8 },
  { type: "sixth", quality: "diminished", callback: ja, halfsteps: 7 },
  { type: "sixth", quality: "minor", callback: Da, halfsteps: 8 },
  { type: "sixth", quality: "major", callback: Ia, halfsteps: 9 },
  { type: "sixth", quality: "augmented", callback: xa, halfsteps: 10 },
  { type: "seventh", quality: "diminished", callback: Ma, halfsteps: 9 },
  { type: "seventh", quality: "minor", callback: da, halfsteps: 10 },
  { type: "seventh", quality: "major", callback: Pa, halfsteps: 11 },
  { type: "seventh", quality: "augmented", callback: Ba, halfsteps: 12 },
  { type: "octave", quality: "diminished", callback: Ga, halfsteps: 11 },
  { type: "octave", quality: "perfect", callback: Ta, halfsteps: 12 },
  { type: "octave", quality: "augmented", callback: Ua, halfsteps: 13 },
];
function na(a, t, n, e) {
  const c = a(n, t);
  return (
    c.name == e.name && c.octave == e.octave && c.alteration == e.alteration
  );
}
function Ha(a, t, n) {
  let e = t.octave;
  do {
    for (const c of n)
      if (na(c.callback, "up", a, { ...t, octave: e })) {
        const F = 12 * (t.octave - e);
        return {
          direction: "up",
          compound: !!F,
          type: c.type,
          quality: c.quality,
          halfsteps: c.halfsteps + F,
        };
      }
    e--;
  } while (e >= 0);
}
function Ja(a, t, n) {
  let e = t.octave;
  do {
    for (const c of n) {
      const F = 12 * (e - t.octave);
      if (na(c.callback, "down", a, { ...t, octave: e }))
        return {
          direction: "down",
          compound: F > 0,
          type: c.type,
          quality: c.quality,
          halfsteps: Math.abs(c.halfsteps + F),
        };
    }
    e++;
  } while (e <= 12);
}
function Z(a, t) {
  return Ha(a, t, Y) || Ja(a, t, Y);
}
function L(a, t) {
  var e;
  const n = Z(a, t);
  if (!n) throw new Error(`Could not calculate frequency for: ${t}`);
  return ((e = Z(a, t)) == null ? void 0 : e.direction) == "down"
    ? a.frequency / Math.pow(1.059463, n.halfsteps)
    : a.frequency * Math.pow(1.059463, n.halfsteps);
}
function Ka(a, t) {
  return 100 - (a / t) * 100;
}
function Qa(a) {
  return ((a + Number.EPSILON) * 100) / 100;
}
function Va(a, { from: t, to: n }) {
  const e = L(a, t),
    c = L(a, n);
  return Math.round(Qa(Ka(e, c)));
}
function Wa(a, t) {
  return a.map((n) => ({ ...n, octave: n.octave + t }));
}
exports.asNote = fa;
exports.buildNoteName = ia;
exports.frequencyAsPercentage = Va;
exports.getFirstPossibleNoteInScale = pa;
exports.getNextAlteration = s;
exports.getNextNoteOnScale = ta;
exports.getNoteFromInterval = x;
exports.getPreviousAlteration = r;
exports.indexOfNote = i;
exports.isInScale = G;
exports.isNoteHigher = ra;
exports.isNoteLower = sa;
exports.parseNoteName = ca;
exports.transpose = Wa;
