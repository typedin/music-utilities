"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PositionBuilders;
const helpers_1 = require("../helpers");
const beginOn_1 = require("../scale-builders/beginOn");
const spanOver_1 = require("../scale-builders/spanOver");
function PositionBuilders(scale, musicalString, options) {
    const nextPossibleNoteWithStringOctave = {
        ...(0, helpers_1.getNextNoteOnScale)(scale, musicalString),
        octave: musicalString.octave,
    };
    if (options?.isRabbath) {
        return (0, spanOver_1.spanOver)((0, beginOn_1.beginOn)(scale, nextPossibleNoteWithStringOctave), 2).filter((_note, index) => [0, 2, 3, 6, 10, 13].includes(index));
    }
    return (0, beginOn_1.beginOn)(scale, nextPossibleNoteWithStringOctave);
}
//# sourceMappingURL=index.js.map