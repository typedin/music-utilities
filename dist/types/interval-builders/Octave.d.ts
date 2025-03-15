import { Note } from "../types";
declare function DiminishedOctave(note: Note, direction?: "up" | "down"): Note;
declare function PerfectOctave(note: Note, direction?: "up" | "down"): Note;
declare function AugmentedOctave(note: Note, direction?: "up" | "down"): Note;
export { DiminishedOctave, PerfectOctave, AugmentedOctave };
