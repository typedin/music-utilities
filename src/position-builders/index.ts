import { getNextNoteOnScale } from "../helpers/index.js";
import { beginOn } from "../scale-builders/beginOn.js";
import { spanOver } from "../scale-builders/spanOver.js";
import type { IMusicalString, IScaleDegree, Note } from "../types/index.js";

type BuilderOptions = {
  isRabbath?: boolean;
};

export default function PositionBuilders(
  scale: IScaleDegree[],
  musicalString: IMusicalString,
  options?: BuilderOptions,
): IScaleDegree[] {
  const nextPossibleNoteWithStringOctave: Note = {
    ...getNextNoteOnScale(scale, musicalString),
    octave: musicalString.octave,
  };

  if (options?.isRabbath) {
    return spanOver(beginOn(scale, nextPossibleNoteWithStringOctave), 2).filter(
      (_note, index) => [0, 2, 3, 6, 10, 13].includes(index),
    );
  }
  return beginOn(scale, nextPossibleNoteWithStringOctave);
}
