import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval } from "./getAlteration.js";
import { getAlterationForPerfectInterval } from "./getAlterationForPerfectInterval.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectUnison(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForPerfectInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedUnison(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { PerfectUnison, DiminishedUnison, AugmentedUnison };
//# sourceMappingURL=Unison.js.map