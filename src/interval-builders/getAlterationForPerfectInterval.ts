import type { AlterationEnum } from "../constants.js";
import { getNextAlteration, getPreviousAlteration } from "../helpers/index.js";
import type { Note } from "../types/index.js";

export function getAlterationForDiminishedInterval(
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

export function getAlterationForPerfectInterval(
  note: Note,
  direction: "up" | "down",
  specialCases: { up: string[]; down: string[] },
): AlterationEnum {
  if (direction == "up") {
    return specialCases[direction].includes(note.name)
      ? getPreviousAlteration(note.alteration)
      : note.alteration;
  }

  return specialCases[direction].includes(note.name) ? getNextAlteration(note.alteration) : note.alteration;
}

export function getAlterationForAugmentedInterval(
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
