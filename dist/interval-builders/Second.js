"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AugmentedSecond = AugmentedSecond;
exports.MajorSecond = MajorSecond;
exports.MinorSecond = MinorSecond;
exports.DiminishedSecond = DiminishedSecond;
const getAlteration_1 = require("./getAlteration");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialCases = {
    up: ["E", "B"],
    down: ["C", "F"],
};
const notesThatMakeOctaveChange = {
    up: ["B"],
    down: ["C"],
};
const semitones = {
    special: {
        up: 1,
        down: 11,
    },
    normal: {
        up: 2,
        down: 10,
    },
};
function DiminishedSecond(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForDiminishedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorSecond(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForMinorInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorSecond(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForMajorInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedSecond(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForAugmentedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Second.js.map