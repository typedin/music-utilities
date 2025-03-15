"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiminishedFifth = DiminishedFifth;
exports.PerfectFifth = PerfectFifth;
exports.AugmentedFifth = AugmentedFifth;
const getName_1 = require("./getName");
const getNoteOctave_1 = require("./getNoteOctave");
const helpers_1 = require("../helpers");
function getAlterationForDiminishedFifth(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? note.alteration
            : (0, helpers_1.getPreviousAlteration)(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? note.alteration
        : (0, helpers_1.getNextAlteration)(note.alteration);
}
function getAlterationForPerfectFifth(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? (0, helpers_1.getNextAlteration)(note.alteration)
            : note.alteration;
    }
    return specialCases[direction].includes(note.name)
        ? (0, helpers_1.getPreviousAlteration)(note.alteration)
        : note.alteration;
}
function getAlterationForAugmentedFifth(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? (0, helpers_1.getNextAlteration)((0, helpers_1.getNextAlteration)(note.alteration))
            : (0, helpers_1.getNextAlteration)(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? (0, helpers_1.getPreviousAlteration)((0, helpers_1.getPreviousAlteration)(note.alteration))
        : (0, helpers_1.getPreviousAlteration)(note.alteration);
}
const specialCases = {
    up: ["B"],
    down: ["F"],
};
const notesThatMakeOctaveChange = {
    up: ["F", "G", "A", "B"],
    down: ["C", "D", "E", "F"],
};
const semitones = {
    special: {
        up: 6,
        down: 6,
    },
    normal: {
        up: 7,
        down: 5,
    },
};
function DiminishedFifth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedFifth(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectFifth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: getAlterationForPerfectFifth(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedFifth(note, direction = "up") {
    return {
        name: (0, getName_1.getName)(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedFifth(note, direction, specialCases),
        octave: (0, getNoteOctave_1.getNoteOctave)(note, notesThatMakeOctaveChange[direction], direction),
    };
}
//# sourceMappingURL=Fifth.js.map