"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOn = endOn;
const helpers_1 = require("../helpers");
function endOn(scale, end) {
    const result = [];
    while (!(0, helpers_1.isInScale)(scale, end) && scale.length && end) {
        const lastPart = scale.slice(-7).map((degree) => ({
            ...degree,
            order: degree.order + 7,
            octave: degree.octave + 1,
        }));
        scale = scale.concat(lastPart);
    }
    for (let i = 0; i < scale.length; i++) {
        if ((0, helpers_1.isNoteHigher)(end, scale[i])) {
            break;
        }
        result.push(scale[i]);
    }
    return result;
}
//# sourceMappingURL=endOn.js.map