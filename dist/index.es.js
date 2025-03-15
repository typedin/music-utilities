var o = /* @__PURE__ */ ((a) => (a.doubleFlat = "𝄫", a.flat = "♭", a.natural = "", a.sharp = "♯", a.doubleSharp = "𝄪", a))(o || {}), i = /* @__PURE__ */ ((a) => (a.C = "C", a.C_SHARP = "undeclared c-sharp", a.D = "D", a.D_SHARP = "undeclared d-sharp", a.E = "E", a.F = "F", a.F_SHARP = "undeclared f-sharp", a.G = "G", a.G_SHARP = "undeclared g-sharp", a.A = "A", a.A_SHARP = "undeclared a-sharp", a.B = "B", a))(i || {});
function Q(a, t) {
  return a.octave == t.octave && a.name == t.name;
}
function q(a) {
  return a.name == i.B;
}
function N(a, t) {
  return Math.abs(p(t) - p(a)) < 2 || Math.abs(p(a) - p(t)) < 2;
}
function na(a, t) {
  return (a.name == i.F && t.name == i.E || a.name == i.C && q(t)) && N(a, t);
}
function ua(a, t) {
  return s(t.alteration) == r(a.alteration) || r(t.alteration) == s(a.alteration);
}
function ea(a, t) {
  return (a.name == i.E && t.name == i.F || q(a) && t.name == i.C) && N(a, t);
}
function V(a, t) {
  return t.name == i.C && a.octave == t.octave - 1 || a.name == i.C && a.octave - 1 == t.octave;
}
function aa(a, t, n = !1) {
  return n && !Q(a, t) ? !1 : Q(a, t) ? a.alteration == t.alteration : q(t) && V(a, t) ? s(a.alteration) == t.alteration : q(a) && V(a, t) || ea(a, t) ? r(a.alteration) == t.alteration : na(a, t) ? r(t.alteration) == a.alteration : !!ua(a, t);
}
function p(a) {
  return Object.values(i).indexOf(a.name) % 12;
}
function w(a) {
  return Object.values(o).indexOf(a.alteration);
}
function Ea(a, t) {
  return aa(a, t) ? !1 : a.octave < t.octave ? !0 : a.octave > t.octave ? !1 : p(a) == p(t) && a.alteration != t.alteration ? w(a) < w(t) : p(a) < p(t);
}
function za(a, t) {
  return aa(a, t) || a.octave < t.octave ? !1 : a.octave > t.octave ? !0 : p(a) == p(t) && a.alteration != t.alteration ? w(a) > w(t) : p(a) > p(t);
}
function W(a, t) {
  const n = (u, c) => (Object.values(i).indexOf(u.name) + c) % 12;
  return Object.values(i)[n(a, t)];
}
function la(a, t) {
  const n = a.map((c) => c.name).indexOf(t.name), u = a[(n + 1) % a.length];
  return {
    alteration: u.alteration,
    name: u.name,
    octave: u.octave
  };
}
function r(a) {
  return Object.values(o)[Object.values(o).indexOf(a) - 1] || o.natural;
}
function s(a) {
  return Object.values(o)[Object.values(o).indexOf(a) + 1];
}
function X(a, t) {
  return a.findIndex((u) => u.octave == t.octave && u.name == t.name && u.alteration == t.alteration) > -1;
}
function Ha(a) {
  return {
    name: a[0],
    alteration: a.slice(1, a.length - 1),
    octave: parseInt(a[a.length - 1])
  };
}
function Ja(a) {
  return `${a.name}${a.alteration}${a.octave}`;
}
function Ka(a, t) {
  return X(a, { ...t, octave: a[0].octave }) || X(a, { ...t, octave: a[0].octave + 1 }) ? {
    ...t,
    octave: a[0].octave
  } : la(a, t);
}
function Qa(a) {
  return {
    name: a.name,
    octave: a.octave,
    alteration: a.alteration
  };
}
function k(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? r(a.alteration) : r(r(a.alteration)) : n[t].includes(a.name) ? s(a.alteration) : s(s(a.alteration));
}
function O(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? a.alteration : r(a.alteration) : n[t].includes(a.name) ? a.alteration : s(a.alteration);
}
function S(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? s(a.alteration) : a.alteration : n[t].includes(a.name) ? r(a.alteration) : a.alteration;
}
function C(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? s(s(a.alteration)) : s(a.alteration) : n[t].includes(a.name) ? r(r(a.alteration)) : r(a.alteration);
}
function e(a, t, n, u) {
  return u[t].includes(a.name) ? W(a, n.special[t]) : W(a, n.normal[t]);
}
function l(a, t, n) {
  return t.includes(a.name) ? n == "down" ? a.octave - 1 : a.octave + 1 : a.octave;
}
const f = {
  up: ["D", "E", "A", "B"],
  down: ["C", "F", "G", "D"]
}, $ = {
  up: ["A", "B"],
  down: ["C", "D"]
}, M = {
  normal: {
    up: 4,
    down: 8
  },
  special: {
    up: 3,
    down: 9
  }
};
function ra(a, t = "up") {
  return {
    name: e(a, t, M, f),
    alteration: k(
      a,
      t,
      f
    ),
    octave: l(
      a,
      $[t],
      t
    )
  };
}
function sa(a, t = "up") {
  return {
    name: e(a, t, M, f),
    alteration: O(a, t, f),
    octave: l(
      a,
      $[t],
      t
    )
  };
}
function ca(a, t = "up") {
  return {
    name: e(a, t, M, f),
    alteration: S(a, t, f),
    octave: l(
      a,
      $[t],
      t
    )
  };
}
function ia(a, t = "up") {
  return {
    name: e(a, t, M, f),
    alteration: C(
      a,
      t,
      f
    ),
    octave: l(
      a,
      $[t],
      t
    )
  };
}
function pa(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? a.alteration : r(a.alteration) : n[t].includes(a.name) ? a.alteration : s(a.alteration);
}
function fa(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? s(a.alteration) : a.alteration : n[t].includes(a.name) ? r(a.alteration) : a.alteration;
}
function ma(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? s(s(a.alteration)) : s(a.alteration) : n[t].includes(a.name) ? r(r(a.alteration)) : r(a.alteration);
}
const y = {
  up: ["B"],
  down: ["F"]
}, I = {
  up: ["F", "G", "A", "B"],
  down: ["C", "D", "E", "F"]
}, T = {
  special: {
    up: 6,
    down: 6
  },
  normal: {
    up: 7,
    down: 5
  }
};
function ha(a, t = "up") {
  return {
    name: e(a, t, T, y),
    alteration: pa(a, t, y),
    octave: l(
      a,
      I[t],
      t
    )
  };
}
function va(a, t = "up") {
  return {
    name: e(a, t, T, y),
    alteration: fa(a, t, y),
    octave: l(
      a,
      I[t],
      t
    )
  };
}
function oa(a, t = "up") {
  return {
    name: e(a, t, T, y),
    alteration: ma(a, t, y),
    octave: l(
      a,
      I[t],
      t
    )
  };
}
function x(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? r(r(a.alteration)) : r(a.alteration) : n[t].includes(a.name) ? s(s(a.alteration)) : s(a.alteration);
}
function U(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? r(a.alteration) : a.alteration : n[t].includes(a.name) ? s(a.alteration) : a.alteration;
}
function R(a, t, n) {
  return t == "up" ? n[t].includes(a.name) ? s(s(a.alteration)) : s(a.alteration) : n[t].includes(a.name) ? r(r(a.alteration)) : r(a.alteration);
}
const b = {
  up: [],
  down: []
}, _ = {
  up: [],
  down: []
}, E = {
  special: {
    up: 0,
    down: 0
  },
  normal: {
    up: 0,
    down: 0
  }
};
function ya(a, t = "up") {
  return {
    name: e(a, t, E, b),
    alteration: x(
      a,
      t,
      b
    ),
    octave: l(
      a,
      _[t],
      t
    )
  };
}
function ba(a, t = "up") {
  return {
    name: e(a, t, E, b),
    alteration: U(a, t, b),
    octave: l(
      a,
      _[t],
      t
    )
  };
}
function ga(a, t = "up") {
  return {
    name: e(a, t, E, b),
    alteration: R(
      a,
      t,
      b
    ),
    octave: l(
      a,
      _[t],
      t
    )
  };
}
const g = {
  up: ["F"],
  down: ["B"]
}, z = {
  up: ["G", "A", "B"],
  down: ["C", "D", "E"]
}, H = {
  special: {
    up: 6,
    down: 6
  },
  normal: {
    up: 5,
    down: 7
  }
};
function Fa(a, t = "up") {
  return {
    name: e(a, t, H, g),
    alteration: x(
      a,
      t,
      g
    ),
    octave: l(
      a,
      z[t],
      t
    )
  };
}
function Aa(a, t = "up") {
  return {
    name: e(a, t, H, g),
    alteration: U(a, t, g),
    octave: l(
      a,
      z[t],
      t
    )
  };
}
function qa(a, t = "up") {
  return {
    name: e(a, t, H, g),
    alteration: R(
      a,
      t,
      g
    ),
    octave: l(
      a,
      z[t],
      t
    )
  };
}
const m = {
  up: ["D", "E", "G", "A", "B"],
  down: ["C", "D", "F", "G", "A"]
}, d = {
  up: ["D", "E", "F", "G", "A", "B"],
  down: ["C", "D", "E", "F", "G", "A"]
}, B = {
  normal: {
    up: 11,
    down: 1
  },
  special: {
    up: 10,
    down: 2
  }
};
function wa(a, t = "up") {
  return {
    name: e(a, t, B, m),
    alteration: k(
      a,
      t,
      m
    ),
    octave: l(
      a,
      d[t],
      t
    )
  };
}
function ka(a, t = "up") {
  return {
    name: e(a, t, B, m),
    alteration: O(a, t, m),
    octave: l(
      a,
      d[t],
      t
    )
  };
}
function Oa(a, t = "up") {
  return {
    name: e(a, t, B, m),
    alteration: S(a, t, m),
    octave: l(
      a,
      d[t],
      t
    )
  };
}
function Sa(a, t = "up") {
  return {
    name: e(a, t, B, m),
    alteration: C(
      a,
      t,
      m
    ),
    octave: l(
      a,
      d[t],
      t
    )
  };
}
const h = {
  up: ["E", "A", "B"],
  down: ["C", "F", "G"]
}, D = {
  up: ["E", "F", "G", "A", "B"],
  down: ["C", "D", "E", "F", "G"]
}, j = {
  normal: {
    up: 9,
    down: 3
  },
  special: {
    up: 8,
    down: 4
  }
};
function Ca(a, t = "up") {
  return {
    name: e(a, t, j, h),
    alteration: k(
      a,
      t,
      h
    ),
    octave: l(
      a,
      D[t],
      t
    )
  };
}
function $a(a, t = "up") {
  return {
    name: e(a, t, j, h),
    alteration: O(a, t, h),
    octave: l(
      a,
      D[t],
      t
    )
  };
}
function Ma(a, t = "up") {
  return {
    name: e(a, t, j, h),
    alteration: S(a, t, h),
    octave: l(
      a,
      D[t],
      t
    )
  };
}
function da(a, t = "up") {
  return {
    name: e(a, t, j, h),
    alteration: C(
      a,
      t,
      h
    ),
    octave: l(
      a,
      D[t],
      t
    )
  };
}
const F = {
  up: [],
  down: []
}, J = {
  up: ["C", "D", "E", "F", "G", "A", "B"],
  down: ["C", "D", "E", "F", "G", "A", "B"]
}, K = {
  special: {
    up: 12,
    down: 12
  },
  normal: {
    up: 12,
    down: 12
  }
};
function Ba(a, t = "up") {
  return {
    name: e(a, t, K, F),
    alteration: x(
      a,
      t,
      F
    ),
    octave: l(
      a,
      J[t],
      t
    )
  };
}
function Da(a, t = "up") {
  return {
    name: e(a, t, K, F),
    alteration: U(a, t, F),
    octave: l(
      a,
      J[t],
      t
    )
  };
}
function ja(a, t = "up") {
  return {
    name: e(a, t, K, F),
    alteration: R(
      a,
      t,
      F
    ),
    octave: l(
      a,
      J[t],
      t
    )
  };
}
const v = {
  up: ["E", "B"],
  down: ["C", "F"]
}, P = {
  up: ["B"],
  down: ["C"]
}, G = {
  special: {
    up: 1,
    down: 11
  },
  normal: {
    up: 2,
    down: 10
  }
};
function Pa(a, t = "up") {
  return {
    name: e(a, t, G, v),
    alteration: k(
      a,
      t,
      v
    ),
    octave: l(
      a,
      P[t],
      t
    )
  };
}
function Ga(a, t = "up") {
  return {
    name: e(a, t, G, v),
    alteration: O(a, t, v),
    octave: l(
      a,
      P[t],
      t
    )
  };
}
function Ia(a, t = "up") {
  return {
    name: e(a, t, G, v),
    alteration: S(a, t, v),
    octave: l(
      a,
      P[t],
      t
    )
  };
}
function Ta(a, t = "up") {
  return {
    name: e(a, t, G, v),
    alteration: C(
      a,
      t,
      v
    ),
    octave: l(
      a,
      P[t],
      t
    )
  };
}
const Y = [
  {
    type: "unison",
    quality: "diminished",
    callback: ya,
    halfsteps: -1
  },
  {
    type: "unison",
    quality: "perfect",
    callback: ba,
    halfsteps: 0
  },
  {
    type: "unison",
    quality: "augmented",
    callback: ga,
    halfsteps: 1
  },
  {
    type: "second",
    quality: "diminished",
    callback: Pa,
    halfsteps: 0
  },
  {
    type: "second",
    quality: "minor",
    callback: Ga,
    halfsteps: 1
  },
  {
    type: "second",
    quality: "major",
    callback: Ia,
    halfsteps: 2
  },
  {
    type: "second",
    quality: "augmented",
    callback: Ta,
    halfsteps: 3
  },
  {
    type: "third",
    quality: "diminished",
    callback: ra,
    halfsteps: 2
  },
  {
    type: "third",
    quality: "minor",
    callback: sa,
    halfsteps: 3
  },
  {
    type: "third",
    quality: "major",
    callback: ca,
    halfsteps: 4
  },
  {
    type: "third",
    quality: "augmented",
    callback: ia,
    halfsteps: 5
  },
  {
    type: "fourth",
    quality: "diminished",
    callback: Fa,
    halfsteps: 4
  },
  {
    type: "fourth",
    quality: "perfect",
    callback: Aa,
    halfsteps: 5
  },
  {
    type: "fourth",
    quality: "augmented",
    callback: qa,
    halfsteps: 6
  },
  {
    type: "fifth",
    quality: "diminished",
    callback: ha,
    halfsteps: 6
  },
  {
    type: "fifth",
    quality: "perfect",
    callback: va,
    halfsteps: 7
  },
  {
    type: "fifth",
    quality: "augmented",
    callback: oa,
    halfsteps: 8
  },
  {
    type: "sixth",
    quality: "diminished",
    callback: Ca,
    halfsteps: 7
  },
  {
    type: "sixth",
    quality: "minor",
    callback: $a,
    halfsteps: 8
  },
  {
    type: "sixth",
    quality: "major",
    callback: Ma,
    halfsteps: 9
  },
  {
    type: "sixth",
    quality: "augmented",
    callback: da,
    halfsteps: 10
  },
  {
    type: "seventh",
    quality: "diminished",
    callback: wa,
    halfsteps: 9
  },
  {
    type: "seventh",
    quality: "minor",
    callback: ka,
    halfsteps: 10
  },
  {
    type: "seventh",
    quality: "major",
    callback: Oa,
    halfsteps: 11
  },
  {
    type: "seventh",
    quality: "augmented",
    callback: Sa,
    halfsteps: 12
  },
  {
    type: "octave",
    quality: "diminished",
    callback: Ba,
    halfsteps: 11
  },
  {
    type: "octave",
    quality: "perfect",
    callback: Da,
    halfsteps: 12
  },
  {
    type: "octave",
    quality: "augmented",
    callback: ja,
    halfsteps: 13
  }
];
function ta(a, t, n, u) {
  const c = a(n, t);
  return c.name == u.name && c.octave == u.octave && c.alteration == u.alteration;
}
function xa(a, t, n) {
  let u = t.octave;
  do {
    for (const c of n)
      if (ta(c.callback, "up", a, {
        ...t,
        octave: u
      })) {
        const A = 12 * (t.octave - u);
        return {
          direction: "up",
          compound: !!A,
          type: c.type,
          quality: c.quality,
          halfsteps: c.halfsteps + A
        };
      }
    u--;
  } while (u >= 0);
}
function Ua(a, t, n) {
  let u = t.octave;
  do {
    for (const c of n) {
      const A = 12 * (u - t.octave);
      if (ta(c.callback, "down", a, {
        ...t,
        octave: u
      }))
        return {
          direction: "down",
          compound: A > 0,
          type: c.type,
          quality: c.quality,
          halfsteps: Math.abs(c.halfsteps + A)
        };
    }
    u++;
  } while (u <= 12);
}
function Z(a, t) {
  return xa(a, t, Y) || Ua(a, t, Y);
}
function L(a, t) {
  var u;
  const n = Z(a, t);
  if (!n)
    throw new Error(`Could not calculate frequency for: ${t}`);
  return ((u = Z(a, t)) == null ? void 0 : u.direction) == "down" ? a.frequency / Math.pow(1.059463, n.halfsteps) : a.frequency * Math.pow(1.059463, n.halfsteps);
}
function Ra(a, t) {
  return 100 - a / t * 100;
}
function _a(a) {
  return (a + Number.EPSILON) * 100 / 100;
}
function Va(a, { from: t, to: n }) {
  const u = L(a, t), c = L(a, n);
  return Math.round(
    _a(Ra(u, c))
  );
}
function Wa(a, t) {
  return a.map((n) => ({
    ...n,
    octave: n.octave + t
  }));
}
export {
  Qa as asNote,
  Ja as buildNoteName,
  Va as frequencyAsPercentage,
  Ka as getFirstPossibleNoteInScale,
  s as getNextAlteration,
  la as getNextNoteOnScale,
  W as getNoteFromInterval,
  r as getPreviousAlteration,
  p as indexOfNote,
  X as isInScale,
  Ea as isNoteHigher,
  za as isNoteLower,
  Ha as parseNoteName,
  Wa as transpose
};
