import { IScale, IScaleDegree } from "../types";

export function transpose(scale: IScale, nbOctave: number): IScale {
	return scale.map((note: IScaleDegree) => ({
		...note,
		octave: note.octave + nbOctave,
	}));
}
