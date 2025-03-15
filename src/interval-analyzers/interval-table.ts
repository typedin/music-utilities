import {
  DiminishedUnison,
  PerfectUnison,
  AugmentedUnison,
} from "../interval-builders/Unison";
import {
  AugmentedThird,
  DiminishedThird,
  MajorThird,
  MinorThird,
} from "../interval-builders/Third";
import {
  AugmentedFourth,
  DiminishedFourth,
  PerfectFourth,
} from "../interval-builders/Fourth";
import {
  AugmentedFifth,
  DiminishedFifth,
  PerfectFifth,
} from "../interval-builders/Fifth";
import {
  AugmentedSeventh,
  DiminishedSeventh,
  MajorSeventh,
  MinorSeventh,
} from "../interval-builders/Seventh";
import {
  AugmentedSixth,
  DiminishedSixth,
  MajorSixth,
  MinorSixth,
} from "../interval-builders/Sixth";
import {
  AugmentedOctave,
  DiminishedOctave,
  PerfectOctave,
} from "../interval-builders/Octave";
import {
  AugmentedSecond,
  DiminishedSecond,
  MajorSecond,
  MinorSecond,
} from "../interval-builders/Second";
import { Note } from "@/types";

export type IntervalTable = {
  type:
    | "unison"
    | "second"
    | "third"
    | "fourth"
    | "fifth"
    | "sixth"
    | "seventh"
    | "octave";
  quality: "diminished" | "minor" | "major" | "augmented" | "perfect";
  halfsteps: number;
  callback: (note: Note, direction?: "up" | "down") => Note;
};

const intervalTable: IntervalTable[] = [
  {
    type: "unison",
    quality: "diminished",
    callback: DiminishedUnison,
    halfsteps: -1,
  },
  {
    type: "unison",
    quality: "perfect",
    callback: PerfectUnison,
    halfsteps: 0,
  },
  {
    type: "unison",
    quality: "augmented",
    callback: AugmentedUnison,
    halfsteps: 1,
  },
  {
    type: "second",
    quality: "diminished",
    callback: DiminishedSecond,
    halfsteps: 0,
  },
  {
    type: "second",
    quality: "minor",
    callback: MinorSecond,
    halfsteps: 1,
  },
  {
    type: "second",
    quality: "major",
    callback: MajorSecond,
    halfsteps: 2,
  },
  {
    type: "second",
    quality: "augmented",
    callback: AugmentedSecond,
    halfsteps: 3,
  },
  {
    type: "third",
    quality: "diminished",
    callback: DiminishedThird,
    halfsteps: 2,
  },
  {
    type: "third",
    quality: "minor",
    callback: MinorThird,
    halfsteps: 3,
  },
  {
    type: "third",
    quality: "major",
    callback: MajorThird,
    halfsteps: 4,
  },
  {
    type: "third",
    quality: "augmented",
    callback: AugmentedThird,
    halfsteps: 5,
  },
  {
    type: "fourth",
    quality: "diminished",
    callback: DiminishedFourth,
    halfsteps: 4,
  },
  {
    type: "fourth",
    quality: "perfect",
    callback: PerfectFourth,
    halfsteps: 5,
  },
  {
    type: "fourth",
    quality: "augmented",
    callback: AugmentedFourth,
    halfsteps: 6,
  },
  {
    type: "fifth",
    quality: "diminished",
    callback: DiminishedFifth,
    halfsteps: 6,
  },
  {
    type: "fifth",
    quality: "perfect",
    callback: PerfectFifth,
    halfsteps: 7,
  },
  {
    type: "fifth",
    quality: "augmented",
    callback: AugmentedFifth,
    halfsteps: 8,
  },
  {
    type: "sixth",
    quality: "diminished",
    callback: DiminishedSixth,
    halfsteps: 7,
  },
  {
    type: "sixth",
    quality: "minor",
    callback: MinorSixth,
    halfsteps: 8,
  },
  {
    type: "sixth",
    quality: "major",
    callback: MajorSixth,
    halfsteps: 9,
  },
  {
    type: "sixth",
    quality: "augmented",
    callback: AugmentedSixth,
    halfsteps: 10,
  },
  {
    type: "seventh",
    quality: "diminished",
    callback: DiminishedSeventh,
    halfsteps: 9,
  },
  {
    type: "seventh",
    quality: "minor",
    callback: MinorSeventh,
    halfsteps: 10,
  },
  {
    type: "seventh",
    quality: "major",
    callback: MajorSeventh,
    halfsteps: 11,
  },
  {
    type: "seventh",
    quality: "augmented",
    callback: AugmentedSeventh,
    halfsteps: 12,
  },
  {
    type: "octave",
    quality: "diminished",
    callback: DiminishedOctave,
    halfsteps: 11,
  },
  {
    type: "octave",
    quality: "perfect",
    callback: PerfectOctave,
    halfsteps: 12,
  },
  {
    type: "octave",
    quality: "augmented",
    callback: AugmentedOctave,
    halfsteps: 13,
  },
];

export { intervalTable };
