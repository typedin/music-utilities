export function transpose(scale, nbOctave) {
  return scale.map((note) => ({
    ...note,
    octave: note.octave + nbOctave,
  }));
}
//# sourceMappingURL=index.js.map
