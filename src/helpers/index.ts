import { AlterationEnum, DiatonicNoteEnum } from "../constants.js";
import type { IScaleDegree, Note } from "../types/index.js";
import { isUnison } from "./isUnison.js";

export function indexOfNote(note: Note): number {
  return Object.values(DiatonicNoteEnum).indexOf(note.name) % 12;
}

function indexOfAlteration(note: Note): number {
  return Object.values(AlterationEnum).indexOf(note.alteration);
}

export function isNoteHigher(
  reference: Note,
  expectedHigherNote: Note,
): boolean {
  if (isUnison(reference, expectedHigherNote)) {
    return false;
  }

  if (reference.octave < expectedHigherNote.octave) {
    return true;
  }

  if (reference.octave > expectedHigherNote.octave) {
    return false;
  }

  if (
    indexOfNote(reference) == indexOfNote(expectedHigherNote) &&
    reference.alteration != expectedHigherNote.alteration
  ) {
    return indexOfAlteration(reference) < indexOfAlteration(expectedHigherNote);
  }

  return indexOfNote(reference) < indexOfNote(expectedHigherNote);
}

export function isNoteLower(reference: Note, expectedLowerNote: Note): boolean {
  if (isUnison(reference, expectedLowerNote)) {
    return false;
  }

  if (reference.octave < expectedLowerNote.octave) {
    return false;
  }

  if (reference.octave > expectedLowerNote.octave) {
    return true;
  }

  if (
    indexOfNote(reference) == indexOfNote(expectedLowerNote) &&
    reference.alteration != expectedLowerNote.alteration
  ) {
    return indexOfAlteration(reference) > indexOfAlteration(expectedLowerNote);
  }

  return indexOfNote(reference) > indexOfNote(expectedLowerNote);
}

export function getNoteFromInterval(
  note: Note,
  interval: number,
): DiatonicNoteEnum {
  const index = (note: Note, offset: number): number =>
    (Object.values(DiatonicNoteEnum).indexOf(note.name) + offset) % 12;

  return Object.values(DiatonicNoteEnum)[index(note, interval)];
}

export function getNextNoteOnScale(scale: IScaleDegree[], note: Note) {
  const index = scale.map((scaleDegree) => scaleDegree.name).indexOf(note.name);

  const nextPossibleNote = scale[(index + 1) % scale.length];

  return {
    alteration: nextPossibleNote.alteration,
    name: nextPossibleNote.name,
    octave: nextPossibleNote.octave,
  };
}

export function getPreviousAlteration(needle: AlterationEnum): AlterationEnum {
  return (
    Object.values(AlterationEnum)[
    Object.values(AlterationEnum).indexOf(needle) - 1
    ] || AlterationEnum.natural
  );
}

export function getNextAlteration(needle: AlterationEnum): AlterationEnum {
  return Object.values(AlterationEnum)[
    Object.values(AlterationEnum).indexOf(needle) + 1
  ];
}

export function isInScale(
  haystack: Array<IScaleDegree>,
  needle: Note,
): boolean {
  const index = haystack.findIndex((e) => {
    return (
      e.octave == needle.octave &&
      e.name == needle.name &&
      e.alteration == needle.alteration
    );
  });
  return index > -1;
}

export function parseNoteName(note: string): Note {
  return {
    name: note[0] as DiatonicNoteEnum,
    alteration: note.slice(1, note.length - 1) as AlterationEnum,
    octave: parseInt(note[note.length - 1]),
  };
}

export function buildNoteName(note: Note): string {
  return `${note.name}${note.alteration}${note.octave}`;
}

export function getFirstPossibleNoteInScale(
  scale: IScaleDegree[],
  note: Note,
): Note {
  if (
    isInScale(scale, { ...note, octave: scale[0].octave }) ||
    isInScale(scale, { ...note, octave: scale[0].octave + 1 })
  ) {
    return {
      ...note,
      octave: scale[0].octave,
    };
  }

  return getNextNoteOnScale(scale, note);
}

export function asNote(note: Note): Note {
  return {
    name: note.name,
    octave: note.octave,
    alteration: note.alteration,
  };
}
