"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlterationForDiminishedInterval = getAlterationForDiminishedInterval;
exports.getAlterationForMinorInterval = getAlterationForMinorInterval;
exports.getAlterationForMajorInterval = getAlterationForMajorInterval;
exports.getAlterationForAugmentedInterval = getAlterationForAugmentedInterval;
const helpers_1 = require("../helpers");
function getAlterationForDiminishedInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? (0, helpers_1.getPreviousAlteration)(note.alteration)
            : (0, helpers_1.getPreviousAlteration)((0, helpers_1.getPreviousAlteration)(note.alteration));
    }
    return specialCases[direction].includes(note.name)
        ? (0, helpers_1.getNextAlteration)(note.alteration)
        : (0, helpers_1.getNextAlteration)((0, helpers_1.getNextAlteration)(note.alteration));
}
function getAlterationForMinorInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? note.alteration
            : (0, helpers_1.getPreviousAlteration)(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? note.alteration
        : (0, helpers_1.getNextAlteration)(note.alteration);
}
function getAlterationForMajorInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? (0, helpers_1.getNextAlteration)(note.alteration)
            : note.alteration;
    }
    return specialCases[direction].includes(note.name)
        ? (0, helpers_1.getPreviousAlteration)(note.alteration)
        : note.alteration;
}
function getAlterationForAugmentedInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? (0, helpers_1.getNextAlteration)((0, helpers_1.getNextAlteration)(note.alteration))
            : (0, helpers_1.getNextAlteration)(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? (0, helpers_1.getPreviousAlteration)((0, helpers_1.getPreviousAlteration)(note.alteration))
        : (0, helpers_1.getPreviousAlteration)(note.alteration);
}
//# sourceMappingURL=getAlteration.js.map