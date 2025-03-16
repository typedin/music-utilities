import type { DiatonicNoteEnum } from "../constants.js";
import type { Note, Semitones } from "../types/index.js";
import {
  getAlterationForAugmentedInterval,
  getAlterationForDiminishedInterval,
  getAlterationForMajorInterval,
  getAlterationForMinorInterval,
} from "./getAlteration.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";

const specialCases = {
  up: ["E", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "F", "G"] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: ["E", "F", "G", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "D", "E", "F", "G"] as Array<DiatonicNoteEnum>,
};

const semitones: Semitones = {
  normal: {
    up: 9,
    down: 3,
  },
  special: {
    up: 8,
    down: 4,
  },
};

function DiminishedSixth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function MinorSixth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMinorInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function MajorSixth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMajorInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function AugmentedSixth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

export { DiminishedSixth, MajorSixth, MinorSixth, AugmentedSixth };
