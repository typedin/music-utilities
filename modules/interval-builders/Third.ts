import {
  getAlterationForAugmentedInterval,
  getAlterationForDiminishedInterval,
  getAlterationForMajorInterval,
  getAlterationForMinorInterval,
} from "./getAlteration";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import type { Semitones } from "./Semitones";

const specialcases = {
  up: ["D", "E", "A", "B"],
  down: ["C", "F", "G", "D"],
};

const notesThatMakeOctaveChange = {
  up: ["A", "B"],
  down: ["C", "D"],
};

const semitones: Semitones = {
  normal: {
    up: 4,
    down: 8,
  },
  special: {
    up: 3,
    down: 9,
  },
};

function DiminishedThird(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialcases),
    alteration: getAlterationForDiminishedInterval(
      note,
      direction,
      specialcases
    ),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction
    ),
  };
}

function MinorThird(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialcases),
    alteration: getAlterationForMinorInterval(note, direction, specialcases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction
    ),
  };
}

function MajorThird(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialcases),
    alteration: getAlterationForMajorInterval(note, direction, specialcases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction
    ),
  };
}

function AugmentedThird(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialcases),
    alteration: getAlterationForAugmentedInterval(
      note,
      direction,
      specialcases
    ),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction
    ),
  };
}

export { DiminishedThird, MinorThird, MajorThird, AugmentedThird };
