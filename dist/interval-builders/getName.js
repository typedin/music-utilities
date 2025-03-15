import { getNoteFromInterval } from "../helpers";
export function getName(note, direction, semitones, specialCases) {
  return specialCases[direction].includes(note.name)
    ? getNoteFromInterval(note, semitones.special[direction])
    : getNoteFromInterval(note, semitones.normal[direction]);
}
//# sourceMappingURL=getName.js.map
