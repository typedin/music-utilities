import { Note } from "@/types";
import type { AlterationEnum } from "../constants";
import { getNextAlteration, getPreviousAlteration } from "../helpers";

function getAlterationForDiminishedInterval(
  note: Note,
  direction: "up" | "down",
  specialCases: { up: string[]; down: string[] },
): AlterationEnum {
  if (direction == "up") {
    return specialCases[direction].includes(note.name)
      ? getPreviousAlteration(note.alteration)
      : getPreviousAlteration(getPreviousAlteration(note.alteration));
  }

  return specialCases[direction].includes(note.name)
    ? getNextAlteration(note.alteration)
    : getNextAlteration(getNextAlteration(note.alteration));
}

function getAlterationForMinorInterval(
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

function getAlterationForMajorInterval(
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

function getAlterationForAugmentedInterval(
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

export {
  getAlterationForDiminishedInterval,
  getAlterationForMinorInterval,
  getAlterationForMajorInterval,
  getAlterationForAugmentedInterval,
};
