import { pythagorean } from "../../frequency-ratio/pythagorean.js";
import { frequencyRatio } from "../../frequency-ratio/index.js";

const REFERENCE = 261;

describe("pythagorean", () => {
  describe("major second", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M2",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toBeCloseTo(294, 0); // expect a D
    });
  });
  describe("major third", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M3",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toBeCloseTo(330, 0); // expect a E
    });
  });
  describe("perfect forth", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P4",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toBeCloseTo(348); // expect a F
    });
  });

  describe("perfect fifth", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P5",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toEqual(391.5); // expect a G
    });
  });

  describe("minor sixth", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "m6",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toBeCloseTo(440, 0); // expect a A
    });
  });
  describe("major seventh", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M7",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toBeCloseTo(495, 0); // expect a B
    });
  });
  describe("octave", () => {
    it("can be calculated up", () => {
      const result = frequencyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P8",
        },
        pythagorean,
      );
      // @ts-ignore
      expect(result).toEqual(522);
    });
  });
});
