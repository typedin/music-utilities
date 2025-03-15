import { frequencyAsPercentage } from "../frequency-ratio";
import calculateFrequency from "../frequency-calculator";
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
