import type { DiatonicNoteEnum } from "../constants.js";
import { getNoteFromInterval } from "../helpers/index.js";
import type { Note, Semitones } from "../types/index.js";

export function getName(
  note: Note,
  direction: "up" | "down",
  semitones: Semitones,
  specialCases: { up: string[]; down: string[] },
): DiatonicNoteEnum {
  return specialCases[direction].includes(note.name)
    ? getNoteFromInterval(note, semitones.special[direction])
    : getNoteFromInterval(note, semitones.normal[direction]);
}
