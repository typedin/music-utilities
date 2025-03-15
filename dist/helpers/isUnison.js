"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnison = isUnison;
const constants_1 = require("../constants");
const _1 = require(".");
function areNotesTheSame(firstNote, secondNote) {
    return (firstNote.octave == secondNote.octave && firstNote.name == secondNote.name);
}
function isNoteB(aNote) {
    return aNote.name == constants_1.DiatonicNoteEnum.B;
}
function areNotesSeconds(firstNote, secondNote) {
    return (Math.abs((0, _1.indexOfNote)(secondNote) - (0, _1.indexOfNote)(firstNote)) < 2 ||
        Math.abs((0, _1.indexOfNote)(firstNote) - (0, _1.indexOfNote)(secondNote)) < 2);
}
function areNotesSpecialSecondsDown(firstNote, secondNote) {
    return (((firstNote.name == constants_1.DiatonicNoteEnum.F &&
        secondNote.name == constants_1.DiatonicNoteEnum.E) ||
        (firstNote.name == constants_1.DiatonicNoteEnum.C && isNoteB(secondNote))) &&
        areNotesSeconds(firstNote, secondNote));
}
function areNotesDiminishedSeconds(firstNote, secondNote) {
    return ((0, _1.getNextAlteration)(secondNote.alteration) ==
        (0, _1.getPreviousAlteration)(firstNote.alteration) ||
        (0, _1.getPreviousAlteration)(secondNote.alteration) ==
            (0, _1.getNextAlteration)(firstNote.alteration));
}
function areNotesSpecialSecondsUp(firstNote, secondNote) {
    return (((firstNote.name == constants_1.DiatonicNoteEnum.E &&
        secondNote.name == constants_1.DiatonicNoteEnum.F) ||
        (isNoteB(firstNote) && secondNote.name == constants_1.DiatonicNoteEnum.C)) &&
        areNotesSeconds(firstNote, secondNote));
}
function isComparingCandB(firstNote, secondNote) {
    if (secondNote.name == constants_1.DiatonicNoteEnum.C &&
        firstNote.octave == secondNote.octave - 1) {
        return true;
    }
    if (firstNote.name == constants_1.DiatonicNoteEnum.C &&
        firstNote.octave - 1 == secondNote.octave) {
        return true;
    }
    return false;
}
function isUnison(firstNote, secondNote, strict = false) {
    if (strict && !areNotesTheSame(firstNote, secondNote)) {
        return false;
    }
    // if notes share the same name and octave
    // check the alteration only
    if (areNotesTheSame(firstNote, secondNote)) {
        return firstNote.alteration == secondNote.alteration;
    }
    if (isNoteB(secondNote) && isComparingCandB(firstNote, secondNote)) {
        return (0, _1.getNextAlteration)(firstNote.alteration) == secondNote.alteration;
    }
    if (isNoteB(firstNote) && isComparingCandB(firstNote, secondNote)) {
        return (0, _1.getPreviousAlteration)(firstNote.alteration) == secondNote.alteration;
    }
    if (areNotesSpecialSecondsUp(firstNote, secondNote)) {
        return (0, _1.getPreviousAlteration)(firstNote.alteration) == secondNote.alteration;
    }
    if (areNotesSpecialSecondsDown(firstNote, secondNote)) {
        return (0, _1.getPreviousAlteration)(secondNote.alteration) == firstNote.alteration;
    }
    if (areNotesDiminishedSeconds(firstNote, secondNote)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=isUnison.js.map