import { Note, Semitones } from "../types";
import {
  getAlterationForAugmentedInterval,
  getAlterationForDiminishedInterval,
  getAlterationForMajorInterval,
  getAlterationForMinorInterval,
} from "./getAlteration";
import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import { DiatonicNoteEnum } from "../constants";

const specialCases = {
  up: ["D", "E", "G", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "D", "F", "G", "A"] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: ["D", "E", "F", "G", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "D", "E", "F", "G", "A"] as Array<DiatonicNoteEnum>,
};

const semitones: Semitones = {
  normal: {
    up: 11,
    down: 1,
  },
  special: {
    up: 10,
    down: 2,
  },
};

function DiminishedSeventh(note: Note, direction: "up" | "down" = "up"): Note {
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

function MinorSeventh(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMinorInterval(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

function MajorSeventh(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForMajorInterval(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

function AugmentedSeventh(note: Note, direction: "up" | "down" = "up"): Note {
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

export { DiminishedSeventh, MajorSeventh, MinorSeventh, AugmentedSeventh };
