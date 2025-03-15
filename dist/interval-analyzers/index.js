"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IntervalAnalyzer;
const interval_table_1 = require("./interval-table");
function createInterval(callback, direction, firstNote, secondNote) {
    const transposedNote = callback(firstNote, direction);
    return (transposedNote.name == secondNote.name &&
        transposedNote.octave == secondNote.octave &&
        transposedNote.alteration == secondNote.alteration);
}
function intervalUp(firstNote, secondNote, intervalTable) {
    let currentOctave = secondNote.octave;
    do {
        for (const interval of intervalTable) {
            if (createInterval(interval.callback, "up", firstNote, {
                ...secondNote,
                octave: currentOctave,
            })) {
                const difference = 12 * (secondNote.octave - currentOctave);
                return {
                    direction: "up",
                    compound: difference ? true : false,
                    type: interval.type,
                    quality: interval.quality,
                    halfsteps: interval.halfsteps + difference,
                };
            }
        }
        currentOctave--;
    } while (currentOctave >= 0);
    return undefined;
}
function intervalDown(firstNote, secondNote, intervalTable) {
    let currentOctave = secondNote.octave;
    do {
        for (const interval of intervalTable) {
            const difference = 12 * (currentOctave - secondNote.octave);
            if (createInterval(interval.callback, "down", firstNote, {
                ...secondNote,
                octave: currentOctave,
            })) {
                return {
                    direction: "down",
                    compound: difference > 0 ? true : false,
                    type: interval.type,
                    quality: interval.quality,
                    halfsteps: Math.abs(interval.halfsteps + difference),
                };
            }
        }
        currentOctave++;
    } while (currentOctave <= 12);
    return undefined;
}
function IntervalAnalyzer(firstNote, secondNote) {
    return (intervalUp(firstNote, secondNote, interval_table_1.intervalTable) ||
        intervalDown(firstNote, secondNote, interval_table_1.intervalTable));
}
//# sourceMappingURL=index.js.map