import type { IScale, IScaleDegree } from "../types/index.js";

export function transpose(scale: IScale, nbOctave: number): IScale {
  return scale.map((note: IScaleDegree) => ({
    ...note,
    octave: note.octave + nbOctave,
  }));
}
