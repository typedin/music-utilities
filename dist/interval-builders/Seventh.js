import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval, getAlterationForMajorInterval, getAlterationForMinorInterval, } from "./getAlteration";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MinorSeventh(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForMinorInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function MajorSeventh(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForMajorInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedSeventh(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { DiminishedSeventh, MajorSeventh, MinorSeventh, AugmentedSeventh };
//# sourceMappingURL=Seventh.js.map