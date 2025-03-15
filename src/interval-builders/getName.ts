import type { DiatonicNoteEnum } from "../constants";
import { getNoteFromInterval } from "../helpers";
import { Note, Semitones } from "../types";

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
