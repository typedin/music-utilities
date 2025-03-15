"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = equal;
/**
 * logic has been taken from here:
 * https://cmtext.indiana.edu/acoustics/chapter1_pitch.php
 */
function formula(reference, semitones) {
    if (reference.type == "length") {
        return reference.value - recursion(reference.value, semitones);
    }
    if (reference.type == "frequency") {
        return reference.value * Math.pow(2, semitones / 12);
    }
    throw new Error("Could not find a formula for this...");
}
function recursion(value, semitones) {
    if (semitones == 0) {
        return value;
    }
    return recursion((value * 94.39) / 100, semitones - 1);
}
function equal(reference) {
    const P1 = {
        up: formula(reference, 0),
    };
    const m2 = {
        up: formula(reference, 1),
    };
    const M2 = {
        up: formula(reference, 2),
    };
    const m3 = {
        up: formula(reference, 3),
    };
    const M3 = {
        up: formula(reference, 4),
    };
    const P4 = {
        up: formula(reference, 5),
    };
    const P5 = {
        up: formula(reference, 7),
    };
    const m6 = {
        up: formula(reference, 9),
    };
    const M6 = {
        up: formula(reference, 10),
    };
    const m7 = {
        up: formula(reference, 10),
    };
    const M7 = {
        up: formula(reference, 11),
    };
    const P8 = {
        up: formula(reference, 12),
    };
    const chromatic = {
        d2: P1,
        A1: m2,
        d3: M2,
        d4: M3,
        A3: P4,
        d6: P5,
        A5: m6,
        d7: M6,
        A6: m7,
        d8: M7,
        A7: P8,
    };
    return {
        P1,
        m2,
        M2,
        m3,
        M3,
        P4,
        P5,
        m6,
        M6,
        m7,
        M7,
        P8,
        ...chromatic,
    };
}
//# sourceMappingURL=equal.js.map