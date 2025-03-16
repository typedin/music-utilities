import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval } from "./getAlteration.js";
import { getAlterationForPerfectInterval } from "./getAlterationForPerfectInterval.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectFourth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForPerfectInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedFourth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { DiminishedFourth, PerfectFourth, AugmentedFourth };
//# sourceMappingURL=Fourth.js.map