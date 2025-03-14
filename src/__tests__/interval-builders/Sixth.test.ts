import {
  DiminishedSixth,
  MajorSixth,
  MinorSixth,
  AugmentedSixth,
} from "../../interval-builders/Sixth";
import {
  diminishedSixthFlats,
  diminishedSixthNatural,
  diminishedSixthSharps,
  minorSixthFlats,
  minorSixthNatural,
  minorSixthSharps,
  majorSixthFlats,
  majorSixthNatural,
  majorSixthSharps,
  augmentedSixthFlats,
  augmentedSixthNatural,
  augmentedSixthSharps,
} from "../__fixtures__/Sixths";

describe("Sixths", () => {
  describe("Diminished", () => {
    describe("down", () => {
      it("gets the diminished sixth for natural note names", () => {
        diminishedSixthNatural.forEach(({ input, output }) => {
          expect(DiminishedSixth(output, "down")).toEqual(input);
        });
      });
      it("gets the diminished sixth for sharp note names", () => {
        diminishedSixthSharps.forEach(({ input, output }) => {
          expect(DiminishedSixth(output, "down")).toEqual(input);
        });
      });
      it("gets the diminished sixth for flat note names", () => {
        diminishedSixthFlats.forEach(({ input, output }) => {
          expect(DiminishedSixth(output, "down")).toEqual(input);
        });
      });
    });
    describe("up", () => {
      it("gets the diminished sixth for natural note names", () => {
        diminishedSixthNatural.forEach(({ input, output }) => {
          expect(DiminishedSixth(input)).toEqual(output);
        });
      });

      it("gets the diminished sixth for sharp note names", () => {
        diminishedSixthSharps.forEach(({ input, output }) => {
          expect(DiminishedSixth(input)).toEqual(output);
        });
      });

      it("gets the diminished sixth for flat note names", () => {
        diminishedSixthFlats.forEach(({ input, output }) => {
          expect(DiminishedSixth(input)).toEqual(output);
        });
      });
    });
  });
  describe("Minor", () => {
    describe("up", () => {
      it("gets the minor sixth for natural note names", () => {
        minorSixthNatural.forEach(({ input, output }) => {
          expect(MinorSixth(input)).toEqual(output);
        });
      });

      it("gets the minor sixth for sharp note names", () => {
        minorSixthSharps.forEach(({ input, output }) => {
          expect(MinorSixth(input)).toEqual(output);
        });
      });

      it("gets the minor sixth for flat note names", () => {
        minorSixthFlats.forEach(({ input, output }) => {
          expect(MinorSixth(input)).toEqual(output);
        });
      });
    });

    describe("down", () => {
      it("gets the minor sixth for natural note names", () => {
        minorSixthNatural.forEach(({ input, output }) => {
          expect(MinorSixth(output, "down")).toEqual(input);
        });
      });

      it("gets the minor sixth for sharp note names", () => {
        minorSixthSharps.forEach(({ input, output }) => {
          expect(MinorSixth(output, "down")).toEqual(input);
        });
      });

      it("gets the minor sixth for flat note names", () => {
        minorSixthFlats.forEach(({ input, output }) => {
          expect(MinorSixth(output, "down")).toEqual(input);
        });
      });
    });
  });
  describe("Major", () => {
    describe("up", () => {
      it("gets the major second for natural note names", () => {
        majorSixthNatural.forEach(({ input, output }) => {
          expect(MajorSixth(input)).toEqual(output);
        });
      });

      it("gets the major second for sharp note names", () => {
        majorSixthSharps.forEach(({ input, output }) => {
          expect(MajorSixth(input)).toEqual(output);
        });
      });

      it("gets the major second for flat note names", () => {
        majorSixthFlats.forEach(({ input, output }) => {
          expect(MajorSixth(input)).toEqual(output);
        });
      });
    });

    describe("down", () => {
      it("gets the major second for natural note names", () => {
        majorSixthNatural.forEach(({ input, output }) => {
          expect(MajorSixth(output, "down")).toEqual(input);
        });
      });

      it("gets the major second for sharp note names", () => {
        majorSixthSharps.forEach(({ input, output }) => {
          expect(MajorSixth(output, "down")).toEqual(input);
        });
      });

      it("gets the major second for flat note names", () => {
        majorSixthFlats.forEach(({ input, output }) => {
          expect(MajorSixth(output, "down")).toEqual(input);
        });
      });
    });
  });
  describe("Augmented", () => {
    describe("up", () => {
      it("gets the augmented second for natural note names", () => {
        augmentedSixthNatural.forEach(({ input, output }) => {
          expect(AugmentedSixth(input)).toEqual(output);
        });
      });

      it("gets the augmented second for sharp note names", () => {
        augmentedSixthSharps.forEach(({ input, output }) => {
          expect(AugmentedSixth(input)).toEqual(output);
        });
      });

      it("gets the augmented second for flat note names", () => {
        augmentedSixthFlats.forEach(({ input, output }) => {
          expect(AugmentedSixth(input)).toEqual(output);
        });
      });
    });

    describe("down", () => {
      it("gets the augmented second for natural note names", () => {
        augmentedSixthNatural.forEach(({ input, output }) => {
          expect(AugmentedSixth(output, "down")).toEqual(input);
        });
      });

      it("gets the augmented second for sharp note names", () => {
        augmentedSixthSharps.forEach(({ input, output }) => {
          expect(AugmentedSixth(output, "down")).toEqual(input);
        });
      });

      it("gets the augmented second for flat note names", () => {
        augmentedSixthFlats.forEach(({ input, output }) => {
          expect(AugmentedSixth(output, "down")).toEqual(input);
        });
      });
    });
  });
});
