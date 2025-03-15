export function getNoteOctave(note, notesThatMakeOctaveChange, direction) {
  if (notesThatMakeOctaveChange.includes(note.name)) {
    return direction == "down" ? note.octave - 1 : note.octave + 1;
  }
  return note.octave;
}
//# sourceMappingURL=getNoteOctave.js.map
