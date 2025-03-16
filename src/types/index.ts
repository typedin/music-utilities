import { AlterationEnum, DiatonicNoteEnum } from "../constants.js";

// INFO go see the ScaleBuilder function
//
// Key Elements of a Scale:
//
// Tonic (Root Note) – The starting note that gives the scale its name.
// Intervals – The pattern of whole steps (W) and half steps (H) that determine the character of the scale.
// Octave Structure – Most scales repeat every octave (e.g., C–D–E–F–G–A–B–C).
// Mode or Type – Scales can be major, minor, modal, or exotic, based on their interval patterns.
// Number of Notes – Common scales have 5 (pentatonic), 7 (heptatonic), or even 12 (chromatic) notes.
export type IScale = any;

export type DegreeBuilder = {
  function: string;
  callable: IntervalBuilder;
};

// TODO no references found
export interface ScaleBuilder {
  (tonic: Note, degreeBuilders: Array<DegreeBuilder>): Array<DegreeBuilder>;
}

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

export type IntervalBuilder = (note: Note, direction: "up" | "down") => Note;

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
