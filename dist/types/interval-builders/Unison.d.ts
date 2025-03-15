import { Note } from "../types";
declare function DiminishedUnison(note: Note, direction?: "up" | "down"): Note;
declare function PerfectUnison(note: Note, direction?: "up" | "down"): Note;
declare function AugmentedUnison(note: Note, direction?: "up" | "down"): Note;
export { PerfectUnison, DiminishedUnison, AugmentedUnison };
