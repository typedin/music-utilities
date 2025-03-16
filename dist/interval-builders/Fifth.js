import { getNextAlteration, getPreviousAlteration } from "../helpers/index.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";
function getAlterationForDiminishedFifth(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? note.alteration
            : getPreviousAlteration(note.alteration);
    }
    return specialCases[direction].includes(note.name) ? note.alteration : getNextAlteration(note.alteration);
}
function getAlterationForPerfectFifth(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name) ? getNextAlteration(note.alteration) : note.alteration;
    }
    return specialCases[direction].includes(note.name)
        ? getPreviousAlteration(note.alteration)
        : note.alteration;
}
function getAlterationForAugmentedFifth(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? getNextAlteration(getNextAlteration(note.alteration))
            : getNextAlteration(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? getPreviousAlteration(getPreviousAlteration(note.alteration))
        : getPreviousAlteration(note.alteration);
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
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedFifth(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function PerfectFifth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForPerfectFifth(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
function AugmentedFifth(note, direction = "up") {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedFifth(note, direction, specialCases),
        octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
    };
}
export { DiminishedFifth, PerfectFifth, AugmentedFifth };
//# sourceMappingURL=Fifth.js.map