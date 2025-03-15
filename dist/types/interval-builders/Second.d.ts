import { Note } from "../types";
declare function DiminishedSecond(note: Note, direction?: "up" | "down"): Note;
declare function MinorSecond(note: Note, direction?: "up" | "down"): Note;
declare function MajorSecond(note: Note, direction?: "up" | "down"): Note;
declare function AugmentedSecond(note: Note, direction?: "up" | "down"): Note;
export { AugmentedSecond, MajorSecond, MinorSecond, DiminishedSecond };
