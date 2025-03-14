export function getNoteOctave(
  note: Note,
  notesThatMakeOctaveChange: IScaleDegree["name"][],
  direction?: "up" | "down",
): number {
  if (notesThatMakeOctaveChange.includes(note.name)) {
    return direction == "down" ? note.octave - 1 : note.octave + 1;
  }

  return note.octave;
}
