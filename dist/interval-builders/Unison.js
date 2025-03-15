"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfectUnison = PerfectUnison;
exports.DiminishedUnison = DiminishedUnison;
exports.AugmentedUnison = AugmentedUnison;
const getAlterationForPerfectInterval_1 = require("./getAlterationForPerfectInterval");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialCases = {
    up: [],
    down: [],
};
const notesThatMakeOctaveChange = {
    up: [],
    down: [],
};
const semitones = {
    special: {
        up: 0,
        down: 0,
    },
    normal: {
        up: 0,
        down: 0,
    },
};
function DiminishedUnison(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForDiminishedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectUnison(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForPerfectInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedUnison(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlterationForPerfectInterval_1.getAlterationForAugmentedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Unison.js.map