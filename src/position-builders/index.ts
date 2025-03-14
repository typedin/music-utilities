import { getNextNoteOnScale } from "../helpers";
import { beginOn } from "../scale-builders/beginOn";
import { spanOver } from "../scale-builders/spanOver";

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
