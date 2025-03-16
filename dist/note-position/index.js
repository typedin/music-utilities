import calculateFrequency from "../frequency-calculator/index.js";
import { frequencyAsPercentage } from "../frequency-ratio/index.js";
export default function createNotePosition(scaleDegree, reference, musicalString, args) {
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
//# sourceMappingURL=index.js.map