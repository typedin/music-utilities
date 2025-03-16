import calculateFrequency from "../../frequency-calculator/index.js";
import { A4, Ab4, B4, Bbb4, C2, C5, Cb4, Csharp5 } from "../tests-helpers.js";

describe("CalculateFrequency", () => {
  it("can calculate a unison", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, A4)).toBeCloseTo(440);
  });

  it("can calculate a note lower than the reference", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, C2)).toBeCloseTo(65.41, 2);
  });

  it("can calculate a B double flat 4", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, Bbb4)).toBeCloseTo(440, 2);
  });

  it("can calculate a note in an octave higher", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, C5)).toBeCloseTo(523.25, 2);
  });

  it("can calculate a C5 with a different frequency", () => {
    expect(calculateFrequency({ ...A4, frequency: 442 }, C5)).toBeCloseTo(525.63, 2);
  });

  it("can calculate a C#5", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, Csharp5)).toBeCloseTo(554.37, 2);
  });

  it("can calculate a A♭4", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, Ab4)).toBeCloseTo(415.3, 2);
  });

  it("can calculate a C♭4", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, Cb4)).toBeCloseTo(246.94, 2);
  });

  it("can calculate a B4", () => {
    expect(calculateFrequency({ ...A4, frequency: 440 }, B4)).toBeCloseTo(493.88, 2);
  });
});
