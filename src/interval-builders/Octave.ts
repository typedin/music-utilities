import type { DiatonicNoteEnum } from "../constants.js";
import type { Note, Semitones } from "../types/index.js";
import { getAlterationForAugmentedInterval, getAlterationForDiminishedInterval } from "./getAlteration.js";
import { getAlterationForPerfectInterval } from "./getAlterationForPerfectInterval.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";

const specialCases = {
  up: [] as Array<DiatonicNoteEnum>,
  down: [] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: ["C", "D", "E", "F", "G", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "D", "E", "F", "G", "A", "B"] as Array<DiatonicNoteEnum>,
};

const semitones: Semitones = {
  special: {
    up: 12,
    down: 12,
  },
  normal: {
    up: 12,
    down: 12,
  },
};

function DiminishedOctave(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForDiminishedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function PerfectOctave(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForPerfectInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function AugmentedOctave(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

export { DiminishedOctave, PerfectOctave, AugmentedOctave };
