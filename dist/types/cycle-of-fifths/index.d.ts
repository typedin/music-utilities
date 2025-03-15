import { AlterationEnum, DiatonicNoteEnum } from "../constants";
export default function ({ name, alteration, }: {
    name: DiatonicNoteEnum;
    alteration: AlterationEnum;
}): {
    getSequence: () => any[];
    next: () => any;
    previous: () => any;
};
