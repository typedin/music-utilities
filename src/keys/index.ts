import { ModeEnum, type AlterationEnum, type DiatonicNoteEnum } from "../constants.js";
import { MajorSixth } from "../interval-builders/Sixth.js";
import { MinorThird } from "../interval-builders/Third.js";

type ITonality = {
  tonality: DiatonicNoteEnum;
  alteration: AlterationEnum;
  mode: ModeEnum;
};

export function getRelativeKey(aTonality: ITonality): ITonality {
  const { name, alteration } =
    aTonality.mode == ModeEnum.M
      ? MajorSixth({
        name: aTonality.tonality,
        alteration: aTonality.alteration,
        octave: 1,
      })
      : MinorThird({
        name: aTonality.tonality,
        alteration: aTonality.alteration,
        octave: 1,
      });

  return {
    tonality: name,
    alteration,
    mode: aTonality.mode === ModeEnum.M ? ModeEnum.m : ModeEnum.M,
  };
}
