import { Note } from "../types";
export type IntervalTable = {
    type: "unison" | "second" | "third" | "fourth" | "fifth" | "sixth" | "seventh" | "octave";
    quality: "diminished" | "minor" | "major" | "augmented" | "perfect";
    halfsteps: number;
    callback: (note: Note, direction?: "up" | "down") => Note;
};
declare const intervalTable: IntervalTable[];
export { intervalTable };
