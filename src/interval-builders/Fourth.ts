import type { DiatonicNoteEnum } from "../constants.js";
import type { Note, Semitones } from "../types/index.js";
import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval } from "./getAlteration.js";
import { getAlterationForPerfectInterval } from "./getAlterationForPerfectInterval.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";

const specialCases = {
  up: ["F"] as Array<DiatonicNoteEnum>,
  down: ["B"] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: ["G", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "D", "E"] as Array<DiatonicNoteEnum>,
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
    alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function PerfectFourth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForPerfectInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function AugmentedFourth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

export { DiminishedFourth, PerfectFourth, AugmentedFourth };
