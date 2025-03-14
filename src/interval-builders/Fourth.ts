import { Note, Semitones } from "@/types";
import {
  getAlterationForAugmentedInterval,
  getAlterationForDiminishedInterval,
  getAlterationForPerfectInterval,
} from "./getAlterationForPerfectInterval";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import { DiatonicNoteEnum } from "@/constants";

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

function PerfectFourth(note: Note, direction: "up" | "down" = "up"): Note {
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

function AugmentedFourth(note: Note, direction: "up" | "down" = "up"): Note {
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

export { DiminishedFourth, PerfectFourth, AugmentedFourth };
