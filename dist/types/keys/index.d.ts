import { AlterationEnum, DiatonicNoteEnum, ModeEnum } from "../constants";
type ITonality = {
  tonality: DiatonicNoteEnum;
  alteration: AlterationEnum;
  mode: ModeEnum;
};
export default function getRelativeKey(aTonality: ITonality): ITonality;
export {};
