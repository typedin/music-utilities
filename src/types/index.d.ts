import { AlterationEnum, DiatonicNoteEnum } from "../constants";

export type IScale = any;

export type Semitones = {
  special: { up: number; down: number };
  normal: { up: number; down: number };
};

export interface IReference extends Note {
  frequency: number;
}

export interface IScaleBuilder {
  tonic: Note;
  scaleSchema: any;
  tonicRepetition: boolean;
  withoutTonicRepetition: () => IScaleBuilder;
  scale: () => IScale;
}

export interface INotePosition extends Note {
  degree: number;
  frequency: number;
  function: string;
  order: number; // 1 indexed
  position: number;
}

export interface Interval {
  direction?: "up" | "down";
  compound: boolean;
  halfsteps: number;
  quality?: string;
  type: string;
}

export interface Note {
  name: DiatonicNoteEnum;
  alteration: AlterationEnum;
  octave: number;
}

export interface IScaleDegree extends Note {
  degree: number; // the actual musical degree
  function: string;
  order: number; // used to sort them
}

export interface IMusicalString extends Note {
  frequency: number;
}

export interface ReferenceUsedInStringStore extends Note {
  tuning: number;
}

export interface Alteration {
  name: string;
  visual:
  | AlterationEnum.flat
  | AlterationEnum.sharp
  | AlterationEnum.natural
  | AlterationEnum.doubleFlat
  | AlterationEnum.doubleSharp;
}

export type IntervalBuilder = (
  note: Note,
  direction: "up" | "down" = "up",
) => Note;

export interface StringInstumentPreset {
  strings: Array<IMusicalString>;
  stringLimits: Array<StringLimits>;
}

export interface StringLimits {
  string: IMusicalString;
  limits: {
    upper: Note;
    lower: Note;
  };
}
