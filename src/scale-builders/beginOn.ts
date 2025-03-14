import { DiatonicNoteEnum } from "../constants";

export function beginOn(
  scale: IScaleDegree[],
  startingNote: Note,
): Array<IScaleDegree> {
  const indexOfFirstDegree = scale.findIndex(
    (degree) => degree.name == startingNote.name,
  );

  const firstPart = scale.slice(indexOfFirstDegree, scale.length);
  const secondPart = scale.slice(0, indexOfFirstDegree);

  const result = firstPart.concat(secondPart);

  let hasTheNoteB = false;
  result.forEach((degree, index): void => {
    if (hasTheNoteB) {
      degree.octave = startingNote.octave + 1;
    } else {
      degree.octave = startingNote.octave;
    }
    if (degree.name == DiatonicNoteEnum.B) {
      hasTheNoteB = true;
    }
    degree.order = index + 1;
  });

  return result;
}
