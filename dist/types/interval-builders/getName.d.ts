import type { DiatonicNoteEnum } from "../constants";
import { Note, Semitones } from "../types";
export declare function getName(
  note: Note,
  direction: "up" | "down",
  semitones: Semitones,
  specialCases: {
    up: string[];
    down: string[];
  },
): DiatonicNoteEnum;
