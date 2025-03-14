import {
  getAlterationForAugmentedInterval,
  getAlterationForDiminishedInterval,
  getAlterationForPerfectInterval,
} from "./getAlterationForPerfectInterval";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import type { Semitones } from "./Semitones";

const specialCases = {
  up: [],
  down: [],
};

const notesThatMakeOctaveChange = {
  up: ["C", "D", "E", "F", "G", "A", "B"],
  down: ["C", "D", "E", "F", "G", "A", "B"],
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
    alteration: getAlterationForDiminishedInterval(
      note,
      direction,
      specialCases,
    ),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

function PerfectOctave(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForPerfectInterval(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

function AugmentedOctave(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedInterval(
      note,
      direction,
      specialCases,
    ),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

export { DiminishedOctave, PerfectOctave, AugmentedOctave };
