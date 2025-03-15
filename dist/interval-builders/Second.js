import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval, getAlterationForMajorInterval, getAlterationForMinorInterval, } from "./getAlteration";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorSecond(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForMinorInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorSecond(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForMajorInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedSecond(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { AugmentedSecond, MajorSecond, MinorSecond, DiminishedSecond };
//# sourceMappingURL=Second.js.map