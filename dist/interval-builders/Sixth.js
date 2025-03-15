"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiminishedSixth = DiminishedSixth;
exports.MajorSixth = MajorSixth;
exports.MinorSixth = MinorSixth;
exports.AugmentedSixth = AugmentedSixth;
const getAlteration_1 = require("./getAlteration");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialCases = {
    up: ["E", "A", "B"],
    down: ["C", "F", "G"],
};
const notesThatMakeOctaveChange = {
    up: ["E", "F", "G", "A", "B"],
    down: ["C", "D", "E", "F", "G"],
};
const semitones = {
    normal: {
        up: 9,
        down: 3,
    },
    special: {
        up: 8,
        down: 4,
    },
};
function DiminishedSixth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForDiminishedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorSixth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForMinorInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorSixth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForMajorInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedSixth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForAugmentedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Sixth.js.map