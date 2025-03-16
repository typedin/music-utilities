import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval } from "./getAlteration.js";
import { getAlterationForPerfectInterval } from "./getAlterationForPerfectInterval.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectOctave(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForPerfectInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedOctave(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { DiminishedOctave, PerfectOctave, AugmentedOctave };
//# sourceMappingURL=Octave.js.map