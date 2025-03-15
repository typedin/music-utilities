"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiminishedOctave = DiminishedOctave;
exports.PerfectOctave = PerfectOctave;
exports.AugmentedOctave = AugmentedOctave;
const getAlterationForPerfectInterval_1 = require("./getAlterationForPerfectInterval");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialCases = {
    up: [],
    down: [],
};
const notesThatMakeOctaveChange = {
    up: ["C", "D", "E", "F", "G", "A", "B"],
    down: ["C", "D", "E", "F", "G", "A", "B"],
};
const semitones = {
    special: {
        up: 12,
        down: 12,
    },
    normal: {
        up: 12,
        down: 12,
    },
};
function DiminishedOctave(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForDiminishedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectOctave(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForPerfectInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedOctave(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForAugmentedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Octave.js.map