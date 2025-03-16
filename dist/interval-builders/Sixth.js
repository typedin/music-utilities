import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval, getAlterationForMajorInterval, getAlterationForMinorInterval, } from "./getAlteration.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorSixth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForMinorInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorSixth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForMajorInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedSixth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { DiminishedSixth, MajorSixth, MinorSixth, AugmentedSixth };
//# sourceMappingURL=Sixth.js.map