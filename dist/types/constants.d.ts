export declare const NB_OF_SEMITONES = 12;
export declare enum FingerEnum {
  thumb = "+",
  first = "1",
  second = "2",
  third = "3",
  fourth = "4",
  fifth = "5",
}
export declare enum AlterationEnum {
  doubleFlat = "\uD834\uDD2B",
  flat = "\u266D",
  natural = "",
  sharp = "\u266F",
  doubleSharp = "\uD834\uDD2A",
}
export declare enum DiatonicNoteEnum {
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
export declare enum ModeEnum {
  M = "Major",
  m = "Minor",
}
export declare const ScaleFunction: string[];
export declare const intervals: {
  type: string;
  name: string;
  quality: string;
  halfsteps: number;
}[];
