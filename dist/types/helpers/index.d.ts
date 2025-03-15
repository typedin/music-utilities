import { IScaleDegree, Note } from "../types";
import { AlterationEnum, DiatonicNoteEnum } from "../constants";
export declare function indexOfNote(note: Note): number;
export declare function isNoteHigher(reference: Note, expectedHigherNote: Note): boolean;
export declare function isNoteLower(reference: Note, expectedLowerNote: Note): boolean;
export declare function getNoteFromInterval(note: Note, interval: number): DiatonicNoteEnum;
export declare function getNextNoteOnScale(scale: IScaleDegree[], note: Note): {
    alteration: AlterationEnum;
    name: DiatonicNoteEnum;
    octave: number;
};
export declare function getPreviousAlteration(needle: AlterationEnum): AlterationEnum;
export declare function getNextAlteration(needle: AlterationEnum): AlterationEnum;
export declare function isInScale(haystack: Array<IScaleDegree>, needle: Note): boolean;
export declare function parseNoteName(note: string): Note;
export declare function buildNoteName(note: Note): string;
export declare function getFirstPossibleNoteInScale(scale: IScaleDegree[], note: Note): Note;
export declare function asNote(note: Note): Note;
