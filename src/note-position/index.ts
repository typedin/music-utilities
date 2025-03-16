import calculateFrequency from "../frequency-calculator/index.js";
import { frequencyAsPercentage } from "../frequency-ratio/index.js";
import type { IMusicalString, INotePosition, IReference, IScaleDegree } from "../types/index.js";

export default function createNotePosition(
  scaleDegree: IScaleDegree,
  reference: IReference,
  musicalString: IMusicalString,
  args: {
    index: number;
  },
): INotePosition {
  return {
    ...scaleDegree,
    degree: scaleDegree.degree,
    function: scaleDegree.function,
    order: 1 + args.index, // 1 indexed
    position: frequencyAsPercentage(reference, {
      to: scaleDegree,
      from: musicalString,
    }),
    frequency: calculateFrequency(reference, scaleDegree),
  };
}
