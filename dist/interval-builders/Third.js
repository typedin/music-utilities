"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiminishedThird = DiminishedThird;
exports.MinorThird = MinorThird;
exports.MajorThird = MajorThird;
exports.AugmentedThird = AugmentedThird;
const getAlteration_1 = require("./getAlteration");
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const specialcases = {
    up: ["D", "E", "A", "B"],
    down: ["C", "F", "G", "D"],
};
const notesThatMakeOctaveChange = {
    up: ["A", "B"],
    down: ["C", "D"],
};
const semitones = {
    normal: {
        up: 4,
        down: 8,
    },
    special: {
        up: 3,
        down: 9,
    },
};
function DiminishedThird(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialcases),
        alteration: (0, getAlteration_1.getAlterationForDiminishedInterval)(note, direction, specialcases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorThird(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialcases),
        alteration: (0, getAlteration_1.getAlterationForMinorInterval)(note, direction, specialcases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorThird(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialcases),
        alteration: (0, getAlteration_1.getAlterationForMajorInterval)(note, direction, specialcases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedThird(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialcases),
        alteration: (0, getAlteration_1.getAlterationForAugmentedInterval)(note, direction, specialcases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Third.js.map