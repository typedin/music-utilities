import { DiatonicNoteEnum } from "../constants.js";
import { getNextAlteration, getPreviousAlteration, indexOfNote } from "./index.js";
function areNotesTheSame(firstNote, secondNote) {
    return firstNote.octave == secondNote.octave && firstNote.name == secondNote.name;
}
function isNoteB(aNote) {
    return aNote.name == DiatonicNoteEnum.B;
}
function areNotesSeconds(firstNote, secondNote) {
    return (Math.abs(indexOfNote(secondNote) - indexOfNote(firstNote)) < 2 ||
        Math.abs(indexOfNote(firstNote) - indexOfNote(secondNote)) < 2);
}
function areNotesSpecialSecondsDown(firstNote, secondNote) {
    return (((firstNote.name == DiatonicNoteEnum.F && secondNote.name == DiatonicNoteEnum.E) ||
        (firstNote.name == DiatonicNoteEnum.C && isNoteB(secondNote))) &&
        areNotesSeconds(firstNote, secondNote));
}
function areNotesDiminishedSeconds(firstNote, secondNote) {
    return (getNextAlteration(secondNote.alteration) == getPreviousAlteration(firstNote.alteration) ||
        getPreviousAlteration(secondNote.alteration) == getNextAlteration(firstNote.alteration));
}
function areNotesSpecialSecondsUp(firstNote, secondNote) {
    return (((firstNote.name == DiatonicNoteEnum.E && secondNote.name == DiatonicNoteEnum.F) ||
        (isNoteB(firstNote) && secondNote.name == DiatonicNoteEnum.C)) &&
        areNotesSeconds(firstNote, secondNote));
}
function isComparingCandB(firstNote, secondNote) {
    if (secondNote.name == DiatonicNoteEnum.C && firstNote.octave == secondNote.octave - 1) {
        return true;
    }
    if (firstNote.name == DiatonicNoteEnum.C && firstNote.octave - 1 == secondNote.octave) {
        return true;
    }
    return false;
}
export function isUnison(firstNote, secondNote, strict = false) {
    if (strict && !areNotesTheSame(firstNote, secondNote)) {
        return false;
    }
    // if notes share the same name and octave
    // check the alteration only
    if (areNotesTheSame(firstNote, secondNote)) {
        return firstNote.alteration == secondNote.alteration;
    }
    if (isNoteB(secondNote) && isComparingCandB(firstNote, secondNote)) {
        return getNextAlteration(firstNote.alteration) == secondNote.alteration;
    }
    if (isNoteB(firstNote) && isComparingCandB(firstNote, secondNote)) {
        return getPreviousAlteration(firstNote.alteration) == secondNote.alteration;
    }
    if (areNotesSpecialSecondsUp(firstNote, secondNote)) {
        return getPreviousAlteration(firstNote.alteration) == secondNote.alteration;
    }
    if (areNotesSpecialSecondsDown(firstNote, secondNote)) {
        return getPreviousAlteration(secondNote.alteration) == firstNote.alteration;
    }
    if (areNotesDiminishedSeconds(firstNote, secondNote)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=isUnison.js.map