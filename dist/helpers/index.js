"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOfNote = indexOfNote;
exports.isNoteHigher = isNoteHigher;
exports.isNoteLower = isNoteLower;
exports.getNoteFromInterval = getNoteFromInterval;
exports.getNextNoteOnScale = getNextNoteOnScale;
exports.getPreviousAlteration = getPreviousAlteration;
exports.getNextAlteration = getNextAlteration;
exports.isInScale = isInScale;
exports.parseNoteName = parseNoteName;
exports.buildNoteName = buildNoteName;
exports.getFirstPossibleNoteInScale = getFirstPossibleNoteInScale;
exports.asNote = asNote;
const constants_1 = require("../constants");
const isUnison_1 = require("./isUnison");
function indexOfNote(note) {
    return Object.values(constants_1.DiatonicNoteEnum).indexOf(note.name) % 12;
}
function indexOfAlteration(note) {
    return Object.values(constants_1.AlterationEnum).indexOf(note.alteration);
}
function isNoteHigher(reference, expectedHigherNote) {
    if ((0, isUnison_1.isUnison)(reference, expectedHigherNote)) {
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
function isNoteLower(reference, expectedLowerNote) {
    if ((0, isUnison_1.isUnison)(reference, expectedLowerNote)) {
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
function getNoteFromInterval(note, interval) {
    const index = (note, offset) => (Object.values(constants_1.DiatonicNoteEnum).indexOf(note.name) + offset) % 12;
    return Object.values(constants_1.DiatonicNoteEnum)[index(note, interval)];
}
function getNextNoteOnScale(scale, note) {
    const index = scale.map((scaleDegree) => scaleDegree.name).indexOf(note.name);
    const nextPossibleNote = scale[(index + 1) % scale.length];
    return {
        alteration: nextPossibleNote.alteration,
        name: nextPossibleNote.name,
        octave: nextPossibleNote.octave,
    };
}
function getPreviousAlteration(needle) {
    return (Object.values(constants_1.AlterationEnum)[Object.values(constants_1.AlterationEnum).indexOf(needle) - 1] || constants_1.AlterationEnum.natural);
}
function getNextAlteration(needle) {
    return Object.values(constants_1.AlterationEnum)[Object.values(constants_1.AlterationEnum).indexOf(needle) + 1];
}
function isInScale(haystack, needle) {
    const index = haystack.findIndex((e) => {
        return (e.octave == needle.octave &&
            e.name == needle.name &&
            e.alteration == needle.alteration);
    });
    return index > -1;
}
function parseNoteName(note) {
    return {
        name: note[0],
        alteration: note.slice(1, note.length - 1),
        octave: parseInt(note[note.length - 1]),
    };
}
function buildNoteName(note) {
    return `${note.name}${note.alteration}${note.octave}`;
}
function getFirstPossibleNoteInScale(scale, note) {
    if (isInScale(scale, { ...note, octave: scale[0].octave }) ||
        isInScale(scale, { ...note, octave: scale[0].octave + 1 })) {
        return {
            ...note,
            octave: scale[0].octave,
        };
    }
    return getNextNoteOnScale(scale, note);
}
function asNote(note) {
    return {
        name: note.name,
        octave: note.octave,
        alteration: note.alteration,
    };
}
//# sourceMappingURL=index.js.map