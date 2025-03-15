export const NB_OF_SEMITONES = 12;

export enum FingerEnum {
  thumb = "+",
  first = "1",
  second = "2",
  third = "3",
  fourth = "4",
  fifth = "5",
}
export enum AlterationEnum {
  doubleFlat = "𝄫",
  flat = "♭",
  natural = "",
  sharp = "♯",
  doubleSharp = "𝄪",
}

export enum DiatonicNoteEnum {
  C = "C",
  C_SHARP = "undeclared c-sharp",
  D = "D",
  D_SHARP = "undeclared d-sharp",
  E = "E",
  F = "F",
  F_SHARP = "undeclared f-sharp",
  G = "G",
  G_SHARP = "undeclared g-sharp",
  A = "A",
  A_SHARP = "undeclared a-sharp",
  B = "B",
}

export enum ModeEnum {
  M = "Major",
  m = "Minor",
}
export const ScaleFunction = [
  "tonic",
  "supertonic",
  "mediant",
  "subdominant",
  "dominant",
  "submediant",
  "leading tone",
];

export const intervals = [
  {
    type: "DiminishedSecond",
    name: "second",
    quality: "diminished",
    halfsteps: 0,
  },
  {
    type: "MinorSecond",
    name: "second",
    quality: "minor",
    halfsteps: 1,
  },
  {
    type: "MajorSecond",
    name: "second",
    quality: "major",
    halfsteps: 2,
  },
  {
    type: "AugmentedSecond",
    name: "second",
    quality: "augmented",
    halfsteps: 3,
  },
  {
    type: "DiminishedThird",
    name: "third",
    quality: "diminished",
    halfsteps: 2,
  },
  {
    type: "MinorThird",
    name: "third",
    quality: "minor",
    halfsteps: 3,
  },
  {
    type: "MajorThird",
    name: "third",
    quality: "major",
    halfsteps: 4,
  },
  {
    type: "AugmentedThird",
    name: "third",
    quality: "augmented",
    halfsteps: 5,
  },
  {
    type: "DiminishedForth",
    name: "forth",
    quality: "diminished",
    halfsteps: 4,
  },
  {
    type: "PerfectForth",
    name: "forth",
    quality: "perfect",
    halfsteps: 5,
  },
  {
    type: "AugmentedForth",
    name: "forth",
    quality: "augmented",
    halfsteps: 6,
  },
  {
    type: "DiminishedFifth",
    name: "fifth",
    quality: "diminished",
    halfsteps: 6,
  },
  {
    type: "PerfectFifth",
    name: "fifth",
    quality: "perfect",
    halfsteps: 7,
  },
  {
    type: "AugmentedFifth",
    name: "fifth",
    quality: "perfect",
    halfsteps: 8,
  },
  {
    type: "DiminishedSixth",
    name: "sixth",
    quality: "diminished",
    halfsteps: 7,
  },
  {
    type: "MinorSixth",
    name: "sixth",
    quality: "minor",
    halfsteps: 8,
  },
  {
    type: "MajorSixth",
    name: "sixth",
    quality: "major",
    halfsteps: 9,
  },
  {
    type: "AugmentedSixth",
    name: "sixth",
    quality: "augmented",
    halfsteps: 10,
  },
  {
    type: "DiminishedSeventh",
    name: "seventh",
    quality: "diminished",
    halfsteps: 9,
  },
  {
    type: "MinorSeventh",
    name: "seventh",
    quality: "minor",
    halfsteps: 10,
  },
  {
    type: "MajorSeventh",
    name: "seventh",
    quality: "major",
    halfsteps: 11,
  },
  {
    type: "AugmentedSeventh",
    name: "seventh",
    quality: "augmented",
    halfsteps: 12,
  },
  {
    type: "DiminishedOctave",
    name: "octave",
    quality: "diminished",
    halfsteps: 11,
  },
  {
    type: "Octave",
    name: "octave",
    quality: "perfect",
    halfsteps: 12,
  },
  {
    type: "AugmentedOctave",
    name: "octave",
    quality: "augmented",
    halfsteps: 13,
  },
];
