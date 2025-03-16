import { getNextNoteOnScale } from "../helpers/index.js";
import { beginOn } from "../scale-builders/beginOn.js";
import { spanOver } from "../scale-builders/spanOver.js";
export default function PositionBuilders(scale, musicalString, options) {
    const nextPossibleNoteWithStringOctave = {
        ...getNextNoteOnScale(scale, musicalString),
        octave: musicalString.octave,
    };
    if (options?.isRabbath) {
        return spanOver(beginOn(scale, nextPossibleNoteWithStringOctave), 2).filter((_note, index) => [0, 2, 3, 6, 10, 13].includes(index));
    }
    return beginOn(scale, nextPossibleNoteWithStringOctave);
}
//# sourceMappingURL=index.js.map