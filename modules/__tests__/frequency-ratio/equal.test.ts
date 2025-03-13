import equal from "@/modules/frequency-ratio/equal";
import frenquecyRatio from "@/modules/frequency-ratio/";

const REFERENCE_IN_FREQUENCY = {
  type: "frequency",
  value: 261.626,
};
const REFERENCE_IN_LENGTH = {
  type: "length",
  value: 106,
};

describe("equal for reference in hertz", () => {
  describe("major second", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_FREQUENCY,
        {
          direction: "up",
          name: "M2",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(293.6647, 0); // expect a D
    });
  });
  describe("major third", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_FREQUENCY,
        {
          direction: "up",
          name: "M3",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(329.6275, 0);
    });
  });
  describe("perfect fifth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_FREQUENCY,
        {
          direction: "up",
          name: "P5",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(391.9954, 0);
    });
  });

  describe("minor sixth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_FREQUENCY,
        {
          direction: "up",
          name: "m6",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(440, 0);
    });
  });
  describe("major seventh", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_FREQUENCY,
        {
          direction: "up",
          name: "M7",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(493.8833, 0);
    });
  });
  describe("perfect octave", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_FREQUENCY,
        {
          direction: "up",
          name: "P8",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(523.2511, 0);
    });
  });
});
describe("equal for reference in length", () => {
  describe("minor second", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_LENGTH,
        {
          direction: "up",
          name: "m2",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(5.95, 2);
    });
  });
  describe("major second", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE_IN_LENGTH,
        {
          direction: "up",
          name: "M2",
        },
        equal
      );
      // @ts-ignore
      expect(result).toBeCloseTo(11.56, 2);
    });
  });
});
