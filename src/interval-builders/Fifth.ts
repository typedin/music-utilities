import { getName } from "./getName";
import { getNoteOctave } from "./getNoteOctave";
import type { AlterationEnum, DiatonicNoteEnum } from "../constants";
import { getNextAlteration, getPreviousAlteration } from "../helpers";
import { Note, Semitones } from "../types";

function getAlterationForDiminishedFifth(
  note: Note,
  direction: "up" | "down",
  specialCases: { up: string[]; down: string[] },
): AlterationEnum {
  if (direction == "up") {
    return specialCases[direction].includes(note.name)
      ? note.alteration
      : getPreviousAlteration(note.alteration);
  }

  return specialCases[direction].includes(note.name)
    ? note.alteration
    : getNextAlteration(note.alteration);
}

function getAlterationForPerfectFifth(
  note: Note,
  direction: "up" | "down",
  specialCases: { up: string[]; down: string[] },
): AlterationEnum {
  if (direction == "up") {
    return specialCases[direction].includes(note.name)
      ? getNextAlteration(note.alteration)
      : note.alteration;
  }

  return specialCases[direction].includes(note.name)
    ? getPreviousAlteration(note.alteration)
    : note.alteration;
}

function getAlterationForAugmentedFifth(
  note: Note,
  direction: "up" | "down",
  specialCases: { up: string[]; down: string[] },
): AlterationEnum {
  if (direction == "up") {
    return specialCases[direction].includes(note.name)
      ? getNextAlteration(getNextAlteration(note.alteration))
      : getNextAlteration(note.alteration);
  }

  return specialCases[direction].includes(note.name)
    ? getPreviousAlteration(getPreviousAlteration(note.alteration))
    : getPreviousAlteration(note.alteration);
}

const specialCases = {
  up: ["B"] as Array<DiatonicNoteEnum>,
  down: ["F"] as Array<DiatonicNoteEnum>,
};

const notesThatMakeOctaveChange = {
  up: ["F", "G", "A", "B"] as Array<DiatonicNoteEnum>,
  down: ["C", "D", "E", "F"] as Array<DiatonicNoteEnum>,
};

const semitones: Semitones = {
  special: {
    up: 6,
    down: 6,
  },
  normal: {
    up: 7,
    down: 5,
  },
};

function DiminishedFifth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForDiminishedFifth(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

function PerfectFifth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForPerfectFifth(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

function AugmentedFifth(note: Note, direction: "up" | "down" = "up"): Note {
  return {
    name: getName(note, direction, semitones, specialCases),
    alteration: getAlterationForAugmentedFifth(note, direction, specialCases),
    octave: getNoteOctave(
      note,
      notesThatMakeOctaveChange[direction],
      direction,
    ),
  };
}

export { DiminishedFifth, PerfectFifth, AugmentedFifth };
