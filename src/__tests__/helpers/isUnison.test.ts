import * as isUnison from "../../helpers/isUnison";
import * as testsHelpers from "../tests-helpers";

describe("isUnison", () => {
  it("is true for same notes on same octave", () => {
    expect(isUnison.isUnison(testsHelpers.C4, testsHelpers.C4)).toBe(true);
  });

  it("is false for same notes on different octaves", () => {
    expect(isUnison.isUnison(testsHelpers.C4, testsHelpers.C5)).toBe(false);
    expect(isUnison.isUnison(testsHelpers.C5, testsHelpers.C4)).toBe(false);
  });

  it("is false for two different notes", () => {
    expect(isUnison.isUnison(testsHelpers.C4, testsHelpers.D4)).toBe(false);
    expect(isUnison.isUnison(testsHelpers.G2, testsHelpers.Aflat2)).toBe(false);
    expect(isUnison.isUnison(testsHelpers.G2, testsHelpers.Bflat2)).toBe(false);
  });

  it("is false for major seconds with E and B", () => {
    expect(isUnison.isUnison(testsHelpers.FSharp2, testsHelpers.E2)).toBe(
      false,
    );
    expect(isUnison.isUnison(testsHelpers.E2, testsHelpers.FSharp2)).toBe(
      false,
    );
    expect(isUnison.isUnison(testsHelpers.CSharp2, testsHelpers.B2)).toBe(
      false,
    );
    expect(isUnison.isUnison(testsHelpers.B2, testsHelpers.CSharp2)).toBe(
      false,
    );
  });

  it("is true for this diminished seconds", () => {
    expect(isUnison.isUnison(testsHelpers.Csharp4, testsHelpers.Db4)).toBe(
      true,
    );
    expect(isUnison.isUnison(testsHelpers.Db4, testsHelpers.Csharp4)).toBe(
      true,
    );
  });

  it("is true for enharmonies", () => {
    expect(isUnison.isUnison(testsHelpers.Cb4, testsHelpers.B3)).toBe(true);
  });

  it("is true for enharmonies", () => {
    expect(isUnison.isUnison(testsHelpers.B3, testsHelpers.Cb4)).toBe(true);
  });

  it("is true for enharmonies between F and E", () => {
    expect(isUnison.isUnison(testsHelpers.Fflat4, testsHelpers.E4)).toBe(true);
    expect(isUnison.isUnison(testsHelpers.E4, testsHelpers.Fflat4)).toBe(true);
  });

  it("is true for enharmonies between C and B", () => {
    expect(isUnison.isUnison(testsHelpers.Cb4, testsHelpers.B3)).toBe(true);
    expect(isUnison.isUnison(testsHelpers.B3, testsHelpers.Cb4)).toBe(true);
  });

  test("special case", () => {
    expect(isUnison.isUnison(testsHelpers.A1, testsHelpers.Asharp1)).toBe(
      false,
    );
    expect(isUnison.isUnison(testsHelpers.Aflat1, testsHelpers.A1)).toBe(false);
    expect(isUnison.isUnison(testsHelpers.Asharp1, testsHelpers.A1)).toBe(
      false,
    );
    expect(isUnison.isUnison(testsHelpers.A1, testsHelpers.Aflat1)).toBe(false);
    expect(isUnison.isUnison(testsHelpers.Aflat1, testsHelpers.Aflat1)).toBe(
      true,
    );
  });

  describe("in strict mode", () => {
    it("is false for enharmonics", () => {
      expect(
        isUnison.isUnison(testsHelpers.Fflat4, testsHelpers.E4, true),
      ).toBe(false);
      expect(
        isUnison.isUnison(testsHelpers.E4, testsHelpers.Fflat4, true),
      ).toBe(false);
      expect(isUnison.isUnison(testsHelpers.Cb4, testsHelpers.B3, true)).toBe(
        false,
      );
      expect(isUnison.isUnison(testsHelpers.B3, testsHelpers.Cb4, true)).toBe(
        false,
      );
    });
  });
});
