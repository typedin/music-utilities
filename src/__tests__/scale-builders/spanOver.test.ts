import { spanOver } from "../../scale-builders/spanOver";
import * as Scales from "../__fixtures__/Scales";
import * as testsHelpers from "../tests-helpers";
import { beginOn } from "../../scale-builders/beginOn";

describe("spanOver", () => {
  it("can span over 1 octave", () => {
    const scale = Scales.C_MAJOR_SCALE;

    expect(spanOver(scale, 1).length).toBe(8);

    expect(spanOver(scale, 1).at(7)).toEqual({
      ...testsHelpers.C3,
      degree: 1,
      function: "tonic",
      order: 8,
    });
  });

  it("can span over 3 octaves", () => {
    const scale = Scales.C_MAJOR_SCALE;

    expect(spanOver(scale, 3)).toEqual(Scales.C_MAJOR_SCALE_3_OCTAVES);
  });

  it("can span over 3 octaves on a scale that has been transposed", () => {
    const scale = Scales.C_MAJOR_SCALE;

    const result = spanOver(beginOn(scale, testsHelpers.A1), 3);

    expect(result.length).toEqual(22);

    expect(result.at(0)).toEqual({
      order: 1,
      degree: 6,
      name: "A",
      alteration: "",
      function: "submediant",
      octave: 1,
    });
    expect(result.at(7)).toEqual({
      order: 8,
      degree: 6,
      name: "A",
      alteration: "",
      function: "submediant",
      octave: 2,
    });
    expect(result.at(14)).toEqual({
      order: 15,
      degree: 6,
      name: "A",
      alteration: "",
      function: "submediant",
      octave: 3,
    });
    expect(result.at(21)).toEqual({
      order: 22,
      degree: 6,
      name: "A",
      alteration: "",
      function: "submediant",
      octave: 4,
    });
  });
});
