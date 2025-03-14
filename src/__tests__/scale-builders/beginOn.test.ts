import { beginOn } from "../../scale-builders/beginOn";
import * as Scales from "../__fixtures__/Scales";
import * as testsHelpers from "../tests-helpers";

describe("beginOn", () => {
  it("gets C major scale", () => {
    const scale = Scales.C_MAJOR_SCALE;

    expect(beginOn(scale, testsHelpers.A1).length).toEqual(7);
    expect(beginOn(scale, testsHelpers.A1)).toEqual(
      Scales.C_MAJOR_SCALE_STARTING_ON_A,
    );
  });

  it("gets B minor scale", () => {
    const scale = Scales.B_MINOR_MEL_ASC;
    expect(beginOn(scale, testsHelpers.A1).length).toEqual(7);
    expect(beginOn(scale, testsHelpers.A1)).toEqual(Scales.B_MINOR_MEL_ASC);
  });
});
