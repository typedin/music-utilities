import type { DiatonicNoteEnum } from "@/modules/constants";
import { getNoteFromInterval } from "../helpers";
import type { Semitones } from "./Semitones";

export function getName(
  note: Note,
  direction: "up" | "down",
  semitones: Semitones,
  specialCases: { up: string[]; down: string[] }
): DiatonicNoteEnum {
  return specialCases[direction].includes(note.name)
    ? getNoteFromInterval(note, semitones.special[direction])
    : getNoteFromInterval(note, semitones.normal[direction]);
}
