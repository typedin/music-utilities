import { IScaleDegree, Note } from "../types";
export declare function getNoteOctave(
  note: Note,
  notesThatMakeOctaveChange: IScaleDegree["name"][],
  direction?: "up" | "down",
): number;
