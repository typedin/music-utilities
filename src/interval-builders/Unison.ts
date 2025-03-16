import { DiatonicNoteEnum } from "../constants.js";
import { getNextAlteration, getPreviousAlteration } from "../helpers/index.js";
import type { Note, Semitones } from "../types/index.js";
import { getAlterationForAugmentedInterval } from "./getAlteration.js";
import { getAlterationForPerfectInterval } from "./getAlterationForPerfectInterval.js";
import { getName } from "./getName.js";
import { getNoteOctave } from "./getNoteOctave.js";

const specialCases = {
  up: [] as Array<DiatonicNoteEnum>,
  down: [] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: [] as Array<DiatonicNoteEnum>,
  down: [] as Array<DiatonicNoteEnum>,
};

const semitones: Semitones = {
  special: {
    up: 0,
    down: 0,
  },
  normal: {
    up: 0,
    down: 0,
  },
};

function DiminishedUnison(note: Note, direction: "up" | "down" = "up"): Note {
  // technically Diminished Unisons don't exist
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration:
      direction == "up" ? getPreviousAlteration(note.alteration) : getNextAlteration(note.alteration),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function PerfectUnison(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForPerfectInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}

function AugmentedUnison(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedInterval(note, direction, specialCases),
    octave: getNoteOctave(note, notesThatMakeOctaveChange[direction], direction),
  };
}
export { PerfectUnison, DiminishedUnison, AugmentedUnison };
