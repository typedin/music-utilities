import { isInScale, isNoteHigher } from "../helpers";
export function endOn(scale, end) {
  const result = [];
  while (!isInScale(scale, end) && scale.length && end) {
    const lastPart = scale.slice(-7).map((degree) => ({
      ...degree,
      order: degree.order + 7,
      octave: degree.octave + 1,
    }));
    scale = scale.concat(lastPart);
  }
  for (let i = 0; i < scale.length; i++) {
    if (isNoteHigher(end, scale[i])) {
      break;
    }
    result.push(scale[i]);
  }
  return result;
}
//# sourceMappingURL=endOn.js.map
