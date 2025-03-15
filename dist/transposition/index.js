"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpose = transpose;
function transpose(scale, nbOctave) {
    return scale.map((note) => ({
        ...note,
        octave: note.octave + nbOctave,
    }));
}
//# sourceMappingURL=index.js.map