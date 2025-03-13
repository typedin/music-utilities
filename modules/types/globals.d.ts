import { AlterationEnum, DiatonicNoteEnum } from "../constants";

declare global {
    interface Interval {
        direction?: "up" | "down";
        compound: boolean;
        halfsteps: number;
        quality?: string;
        type: string;
    }

    interface Note {
        name: DiatonicNoteEnum;
        alteration: AlterationEnum;
        octave: number;
    }

    interface IScaleDegree extends Note {
        degree: number; // the actual musical degree
        function: string;
        order: number; // used to sort them
    }
    interface IMusicalString extends Note {
        frequency: number;
    }

    interface ReferenceUsedInStringStore extends Note {
        tuning: number;
    }

    interface Alteration {
        name: string;
        visual:
        | AlterationEnum.flat
        | AlterationEnum.sharp
        | AlterationEnum.natural
        | AlterationEnum.doubleFlat
        | AlterationEnum.doubleSharp;
    }

    type IntervalBuilder = (
        note: Note,
        direction: "up" | "down" = "up"
    ) => Note;

    interface StringInstumentPreset {
        strings: Array<IMusicalString>;
        stringLimits: Array<StringLimits>;
    }

    interface StringLimits {
        string: IMusicalString;
        limits: {
            upper: Note;
            lower: Note;
        };
    }
}

export { };
