import { AlterationEnum, DiatonicNoteEnum } from "../constants.js";
import { isUnison } from "./isUnison.js";
export function indexOfNote(note) {
    return Object.values(DiatonicNoteEnum).indexOf(note.name) % 12;
}
function indexOfAlteration(note) {
    return Object.values(AlterationEnum).indexOf(note.alteration);
}
export function isNoteHigher(reference, expectedHigherNote) {
    if (isUnison(reference, expectedHigherNote)) {
        return false;
    }
    if (reference.octave < expectedHigherNote.octave) {
        return true;
    }
    if (reference.octave > expectedHigherNote.octave) {
        return false;
    }
    if (indexOfNote(reference) == indexOfNote(expectedHigherNote) &&
        reference.alteration != expectedHigherNote.alteration) {
        return indexOfAlteration(reference) < indexOfAlteration(expectedHigherNote);
    }
    return indexOfNote(reference) < indexOfNote(expectedHigherNote);
}
export function isNoteLower(reference, expectedLowerNote) {
    if (isUnison(reference, expectedLowerNote)) {
        return false;
    }
    if (reference.octave < expectedLowerNote.octave) {
        return false;
    }
    if (reference.octave > expectedLowerNote.octave) {
        return true;
    }
    if (indexOfNote(reference) == indexOfNote(expectedLowerNote) &&
        reference.alteration != expectedLowerNote.alteration) {
        return indexOfAlteration(reference) > indexOfAlteration(expectedLowerNote);
    }
    return indexOfNote(reference) > indexOfNote(expectedLowerNote);
}
export function getNoteFromInterval(note, interval) {
    const index = (note, offset) => (Object.values(DiatonicNoteEnum).indexOf(note.name) + offset) % 12;
    return Object.values(DiatonicNoteEnum)[index(note, interval)];
}
export function getNextNoteOnScale(scale, note) {
    const index = scale.map((scaleDegree) => scaleDegree.name).indexOf(note.name);
    const nextPossibleNote = scale[(index + 1) % scale.length];
    return {
        alteration: nextPossibleNote.alteration,
        name: nextPossibleNote.name,
        octave: nextPossibleNote.octave,
    };
}
export function getPreviousAlteration(needle) {
    return (Object.values(AlterationEnum)[Object.values(AlterationEnum).indexOf(needle) - 1] || AlterationEnum.natural);
}
export function getNextAlteration(needle) {
    return Object.values(AlterationEnum)[Object.values(AlterationEnum).indexOf(needle) + 1];
}
export function isInScale(haystack, needle) {
    const index = haystack.findIndex((e) => {
        return e.octave == needle.octave && e.name == needle.name && e.alteration == needle.alteration;
    });
    return index > -1;
}
export function parseNoteName(note) {
    return {
        name: note[0],
        alteration: note.slice(1, note.length - 1),
        octave: parseInt(note[note.length - 1]),
    };
}
export function buildNoteName(note) {
    return `${note.name}${note.alteration}${note.octave}`;
}
export function getFirstPossibleNoteInScale(scale, note) {
    if (isInScale(scale, { ...note, octave: scale[0].octave }) ||
        isInScale(scale, { ...note, octave: scale[0].octave + 1 })) {
        return {
            ...note,
            octave: scale[0].octave,
        };
    }
    return getNextNoteOnScale(scale, note);
}
export function asNote(note) {
    return {
        name: note.name,
        octave: note.octave,
        alteration: note.alteration,
    };
}
//# sourceMappingURL=index.js.map