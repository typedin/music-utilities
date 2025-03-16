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
  up: ["E", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "F"] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: ["B"] as Array<DiatonicNoteEnum>,
  down: ["C"] as Array<DiatonicNoteEnum>,
};

const semitones: Semitones = {
  special: {
    up: 1,
    down: 11,
  },
  normal: {
    up: 2,
    down: 10,
  },
};

function DiminishedSecond(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}
function MinorSecond(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMinorInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function MajorSecond(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMajorInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function AugmentedSecond(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

export { AugmentedSecond, MajorSecond, MinorSecond, DiminishedSecond };
