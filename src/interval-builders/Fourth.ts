import {
    getAlterationForAugmentedInterval,
    getAlterationForDiminishedInterval,
    getAlterationForPerfectInterval,
} from "./getAlterationForPerfectInterval";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import type { Semitones } from "./Semitones";

const specialCases = {
    up: ["F"],
    down: ["B"],
};

const notesThatMakeOctaveChange = {
    up: ["G", "A", "B"],
    down: ["C", "D", "E"],
};

const semitones: Semitones = {
    special: {
        up: 6,
        down: 6,
    },
    normal: {
        up: 5,
        down: 7,
    },
};

function DiminishedFourth(note: Note, direction: "up" | "down" = "up"): Note {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForDiminishedInterval(
            note,
            direction,
            specialCases
        ),
        octave: getNoteOctave(
            note,
            notesThatMakeOctaveChange[direction],
            direction
        ),
    };
}

function PerfectFourth(note: Note, direction: "up" | "down" = "up"): Note {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForPerfectInterval(
            note,
            direction,
            specialCases
        ),
        octave: getNoteOctave(
            note,
            notesThatMakeOctaveChange[direction],
            direction
        ),
    };
}

function AugmentedFourth(note: Note, direction: "up" | "down" = "up"): Note {
    return {
        name: getName(note, direction, semitones, specialCases),
        alteration: getAlterationForAugmentedInterval(
            note,
            direction,
            specialCases
        ),
        octave: getNoteOctave(
            note,
            notesThatMakeOctaveChange[direction],
            direction
        ),
    };
}

export { DiminishedFourth, PerfectFourth, AugmentedFourth };
