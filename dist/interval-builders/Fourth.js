"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiminishedFourth = DiminishedFourth;
exports.PerfectFourth = PerfectFourth;
exports.AugmentedFourth = AugmentedFourth;
const getAlterationForPerfectInterval_1 = require("./getAlterationForPerfectInterval");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialCases = {
    up: ["F"],
    down: ["B"],
};
const notesThatMakeOctaveChange = {
    up: ["G", "A", "B"],
    down: ["C", "D", "E"],
};
const semitones = {
    special: {
        up: 6,
        down: 6,
    },
    normal: {
        up: 5,
        down: 7,
    },
};
function DiminishedFourth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForDiminishedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectFourth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForPerfectInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedFourth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForAugmentedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Fourth.js.map