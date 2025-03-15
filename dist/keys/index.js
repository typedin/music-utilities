"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getRelativeKey;
const constants_1 = require("../constants");
const Sixth_1 = require("../interval-builders/Sixth");
const Third_1 = require("../interval-builders/Third");
function getRelativeKey(aTonality) {
    const { name, alteration } = aTonality.mode == constants_1.ModeEnum.M
        ? (0, Sixth_1.MajorSixth)({
            name: aTonality.tonality,
            alteration: aTonality.alteration,
            octave: 1,
        })
        : (0, Third_1.MinorThird)({
            name: aTonality.tonality,
            alteration: aTonality.alteration,
            octave: 1,
        });
    return {
        tonality: name,
        alteration,
        mode: aTonality.mode === constants_1.ModeEnum.M ? constants_1.ModeEnum.m : constants_1.ModeEnum.M,
    };
}
//# sourceMappingURL=index.js.map