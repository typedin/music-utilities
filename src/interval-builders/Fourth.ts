import type { AlterationEnum, DiatonicNoteEnum } from "../constants.js";
import { getNextAlteration, getPreviousAlteration } from "../helpers/index.js";
import type { Note, Semitones } from "../types/index.js";
import { getAlterationForAugmentedInterval } from "./getAlteration.js";
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

function getAlterationForDiminishedInterval(
  note: Note,
  direction: "up" | "down",
  specialCases: { up: string[]; down: string[] },
): AlterationEnum {
  if (direction == "up") {
    return specialCases[direction].includes(note.name)
      ? getPreviousAlteration(getPreviousAlteration(note.alteration))
      : getPreviousAlteration(note.alteration);
  }

  return specialCases[direction].includes(note.name)
    ? getNextAlteration(getNextAlteration(note.alteration))
    : getNextAlteration(note.alteration);
}
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
