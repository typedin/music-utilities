import { AlterationEnum, DiatonicNoteEnum } from "../../constants.js"
import { ScaleBuilder } from "../../scale-builders/ScaleBuilder.js";
import * as Scales from "../__fixtures__/Scales.js";
import { majorScaleSchema, naturalHarmonicMinorScaleSchema } from "./__fixtures__/scales-schemas.js";

describe("ScaleBuilder", () => {
  it("creates a major scale on one octave with the repetition of the tonic by default", () => {
    const builder = new ScaleBuilder(
      {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 2,
      },
      majorScaleSchema,
    );

    expect(builder.scale().length).toEqual(8);
    expect(builder.scale().slice(0, -1)).toEqual(Scales.C_MAJOR_SCALE);
    expect(builder.scale().at(-1)).toEqual({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
      octave: 3,
    });
  });

  it("creates a major scale on one octave without the repetition of the tonic", () => {
    const builder = new ScaleBuilder(
      {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 2,
      },
      majorScaleSchema,
    ).withoutTonicRepetition();

    expect(builder.scale().length).toEqual(7);
    expect(builder.scale()).toEqual(Scales.C_MAJOR_SCALE);
  });

  it("creates a major scale on 2 octaves with tonic repetition", () => {
    const builder = new ScaleBuilder(
      {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 2,
      },
      majorScaleSchema,
      2,
    );

    expect(builder.scale().length).toEqual(15);
    expect(builder.scale().at(14)).toEqual({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
      octave: 4,
    });
  });

  it("creates a major scale on 2 octaves without tonic repetition", () => {
    const builder = new ScaleBuilder(
      {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 2,
      },
      majorScaleSchema,
      2,
    ).withoutTonicRepetition();

    expect(builder.scale().length).toEqual(14);
  });

  test("sanity check", () => {
    const builder = new ScaleBuilder(
      {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 2,
      },
      naturalHarmonicMinorScaleSchema,
    );

    expect(builder.scale().length).toEqual(8);
  });
});
