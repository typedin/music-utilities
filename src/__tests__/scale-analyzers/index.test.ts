import scaleAnalyser from "../../scale-analyzers/index.js";
import * as Scales from "../__fixtures__/Scales.js";

describe("index", () => {
  it("can identify a major scale", () => {
    expect(scaleAnalyser(Scales.C_MAJOR_SCALE)).toEqual("major");
  });
  it("can identify a minor scale", () => {
    expect(scaleAnalyser(Scales.C_MINOR_SCALE)).toEqual("minor");
  });
});
