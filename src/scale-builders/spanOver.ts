import type { IScaleDegree } from "../types/index.js";

export function spanOver(
  scale: IScaleDegree[],
  numberOfOctaves: number,
): Array<IScaleDegree> {
  const result: IScaleDegree[] = [];

  for (let i = 0; i < numberOfOctaves; i++) {
    scale.forEach((el) => {
      result.push({
        ...el,
        order: el.order + 7 * i,
        octave: el.octave + i,
      });
    });
  }

  result.push({
    ...scale[0],
    order: scale[0].order + result.length,
    octave: scale[0].octave + numberOfOctaves,
  });
  return result;
}
