import {
  getAlterationForAugmentedInterval,
  getAlterationForDiminishedInterval,
  getAlterationForMajorInterval,
  getAlterationForMinorInterval,
} from "./getAlteration";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import type { Semitones } from "./Semitones";

const specialCases = {
  up: ["E", "A", "B"],
  down: ["C", "F", "G"],
};

const notesThatMakeOctaveChange = {
  up: ["E", "F", "G", "A", "B"],
  down: ["C", "D", "E", "F", "G"],
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

function MinorSixth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMinorInterval(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction
    ),
  };
}

function MajorSixth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMajorInterval(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction
    ),
  };
}

function AugmentedSixth(note: Note, direction: "up" | "down" = "up"): Note {
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

export { DiminishedSixth, MajorSixth, MinorSixth, AugmentedSixth };
