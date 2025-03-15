"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiminishedSeventh = DiminishedSeventh;
exports.MajorSeventh = MajorSeventh;
exports.MinorSeventh = MinorSeventh;
exports.AugmentedSeventh = AugmentedSeventh;
const getAlteration_1 = require("./getAlteration");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialCases = {
    up: ["D", "E", "G", "A", "B"],
    down: ["C", "D", "F", "G", "A"],
};
const notesThatMakeOctaveChange = {
    up: ["D", "E", "F", "G", "A", "B"],
    down: ["C", "D", "E", "F", "G", "A"],
};
const semitones = {
    normal: {
        up: 11,
        down: 1,
    },
    special: {
        up: 10,
        down: 2,
    },
};
function DiminishedSeventh(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForDiminishedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorSeventh(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForMinorInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorSeventh(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForMajorInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedSeventh(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: (0, getAlteration_1.getAlterationForAugmentedInterval)(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Seventh.js.map