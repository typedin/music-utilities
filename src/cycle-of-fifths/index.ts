import { AlterationEnum, DiatonicNoteEnum } from "../constants.js";
import { MinorThird } from "../interval-builders/Third.js";
import { PerfectFifth } from "../interval-builders/Fifth.js";
import type { Note } from "../types/index.js";

export type CycleEntry = { major: Note; minor: Note };

export function cycleOfFifths({ name, alteration }: { name: DiatonicNoteEnum; alteration: AlterationEnum }) {
  // The requested note is placed at INDEX_FOR_DEFAULT_KEY; flats go left, sharps go right.
  const INDEX_FOR_DEFAULT_KEY = 5;
  const cycle: Array<CycleEntry> = new Array(12);

  cycle[INDEX_FOR_DEFAULT_KEY] = {
    major: { name, alteration, octave: 4 },
    minor: {
      ...MinorThird({ name, alteration, octave: 4 }, "down"),
      octave: 4,
    },
  };

  // work our way backward towards flats
  for (let i = INDEX_FOR_DEFAULT_KEY; i >= 0; i--) {
    cycle[i - 1] = {
      major: { ...PerfectFifth(cycle[i]!.major, "down"), octave: 4 },
      minor: { ...PerfectFifth(cycle[i]!.minor, "down"), octave: 4 },
    };
  }

  // work our way upward towards sharps
  for (let i = INDEX_FOR_DEFAULT_KEY; i < 11; i++) {
    cycle[i + 1] = {
      major: { ...PerfectFifth(cycle[i]!.major, "up"), octave: 4 },
      minor: { ...PerfectFifth(cycle[i]!.minor, "up"), octave: 4 },
    };
  }

  let currentIndex = INDEX_FOR_DEFAULT_KEY;

  return {
    /** The index of the requested root note within the sequence. */
    rootIndex: INDEX_FOR_DEFAULT_KEY,
    /** Full 12-entry sequence; the requested note is at index `rootIndex`. */
    getSequence: (): Array<CycleEntry> => cycle,
    /** Sequence rotated so the requested note is at index 0. */
    getSequenceFromRoot: (): Array<CycleEntry> => [
      ...cycle.slice(INDEX_FOR_DEFAULT_KEY),
      ...cycle.slice(0, INDEX_FOR_DEFAULT_KEY),
    ],
    next: (): CycleEntry | undefined => cycle.at((currentIndex += 1)),
    previous: (): CycleEntry | undefined => cycle.at((currentIndex -= 1)),
  };
}
