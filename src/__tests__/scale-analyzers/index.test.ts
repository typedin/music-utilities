import analyzeScale from "../../scale-analyzers/index";
import * as Scales from "../__fixtures__/Scales";

describe("index", () => {
  it("can identify a major scale", () => {
    expect(analyzeScale(Scales.C_MAJOR_SCALE)).toEqual("major");
  });
  it("can identify a minor scale", () => {
    expect(analyzeScale(Scales.C_MINOR_SCALE)).toEqual("minor");
  });
});
