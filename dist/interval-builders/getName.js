"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = getName;
const helpers_1 = require("../helpers");
function getName(note, direction, semitones, specialCases) {
    return specialCases[direction].includes(note.name)
        ? (0, helpers_1.getNoteFromInterval)(note, semitones.special[direction])
        : (0, helpers_1.getNoteFromInterval)(note, semitones.normal[direction]);
}
//# sourceMappingURL=getName.js.map