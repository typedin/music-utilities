import {
  IMusicalString,
  INotePosition,
  IReference,
  IScaleDegree,
} from "../types";
export default function createNotePosition(
  scaleDegree: IScaleDegree,
  reference: IReference,
  musicalString: IMusicalString,
  args: {
    index: number;
  },
): INotePosition;
