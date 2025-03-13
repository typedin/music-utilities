import {
  DiminishedThird,
  MajorThird,
  MinorThird,
  AugmentedThird,
} from "@/modules/interval-builders/Third";
import {
  augmentedThirdFlats,
  augmentedThirdNatural,
  augmentedThirdSharps,
} from "../__fixtures__/AugmentedThirds";
import { describe, it, expect } from "vitest";
import {
  diminishedThirdFlats,
  diminishedThirdNatural,
  diminishedThirdSharps,
} from "../__fixtures__/DiminishedThirds";
import {
  majorThirdFlats,
  majorThirdNatural,
  majorThirdSharps,
} from "../__fixtures__/MajorThirds";
import {
  minorThirdFlats,
  minorThirdNatural,
  minorThirdSharps,
} from "../__fixtures__/MinorThirds";
import { AdoubleFlat2, C3, C4 } from "../tests-helpers";

describe("Thirds", () => {
  describe("Diminished", () => {
    describe("up", () => {
      it("gets the diminished third for natural note names", () => {
        diminishedThirdNatural.forEach(({ input, output }) => {
          expect(DiminishedThird(input)).toEqual(output);
        });
      });

      it("gets the diminished third for sharp note names", () => {
        diminishedThirdSharps.forEach(({ input, output }) => {
          expect(DiminishedThird(input)).toEqual(output);
        });
      });

      it("gets the diminished third for flat note names", () => {
        diminishedThirdFlats.forEach(({ input, output }) => {
          expect(DiminishedThird(input)).toEqual(output);
        });
      });
    });
    describe("down", () => {
      it("gets the diminished third for natural note names", () => {
        diminishedThirdNatural.forEach(({ input, output }) => {
          expect(DiminishedThird(output, "down")).toEqual(input);
        });
      });
      it("gets the diminished third for sharp note names", () => {
        diminishedThirdSharps.forEach(({ input, output }) => {
          expect(DiminishedThird(output, "down")).toEqual(input);
        });
      });
      it("gets the diminished third for flat note names", () => {
        diminishedThirdFlats.forEach(({ input, output }) => {
          expect(DiminishedThird(output, "down")).toEqual(input);
        });
      });
    });
  });
  describe("Minor", () => {
    describe("up", () => {
      it("gets the minor third for natural note names", () => {
        minorThirdNatural.forEach(({ input, output }) => {
          expect(MinorThird(input)).toEqual(output);
        });
      });

      it("gets the minor third for sharp note names", () => {
        minorThirdSharps.forEach(({ input, output }) => {
          expect(MinorThird(input)).toEqual(output);
        });
      });

      it("gets the minor third for flat note names", () => {
        minorThirdFlats.forEach(({ input, output }) => {
          expect(MinorThird(input)).toEqual(output);
        });
      });
    });

    describe("down", () => {
      it("gets the minor third for natural note names", () => {
        minorThirdNatural.forEach(({ input, output }) => {
          expect(MinorThird(output, "down")).toEqual(input);
        });
      });

      it("gets the minor third for sharp note names", () => {
        minorThirdSharps.forEach(({ input, output }) => {
          expect(MinorThird(output, "down")).toEqual(input);
        });
      });

      it("gets the minor third for flat note names", () => {
        minorThirdFlats.forEach(({ input, output }) => {
          expect(MinorThird(output, "down")).toEqual(input);
        });
      });
    });
  });
  describe("Major", () => {
    describe("up", () => {
      it("gets the major third for natural note names", () => {
        majorThirdNatural.forEach(({ input, output }) => {
          expect(MajorThird(input)).toEqual(output);
        });
      });

      it("gets the major third for sharp note names", () => {
        majorThirdSharps.forEach(({ input, output }) => {
          expect(MajorThird(input)).toEqual(output);
        });
      });

      it("gets the major third for flat note names", () => {
        majorThirdFlats.forEach(({ input, output }) => {
          expect(MajorThird(input)).toEqual(output);
        });
      });
    });

    describe("down", () => {
      it("gets the major third for natural note names", () => {
        majorThirdNatural.forEach(({ input, output }) => {
          expect(MajorThird(output, "down")).toEqual(input);
        });
      });

      it("gets the major third for sharp note names", () => {
        majorThirdSharps.forEach(({ input, output }) => {
          expect(MajorThird(output, "down")).toEqual(input);
        });
      });

      it("gets the major third for flat note names", () => {
        majorThirdFlats.forEach(({ input, output }) => {
          expect(MajorThird(output, "down")).toEqual(input);
        });
      });
    });
  });
  describe("Augmented", () => {
    describe("up", () => {
      it("gets the augmented third for natural note names", () => {
        augmentedThirdNatural.forEach(({ input, output }) => {
          expect(AugmentedThird(input)).toEqual(output);
        });
      });

      it("gets the augmented third for sharp note names", () => {
        augmentedThirdSharps.forEach(({ input, output }) => {
          expect(AugmentedThird(input)).toEqual(output);
        });
      });

      it("gets the augmented third for flat note names", () => {
        augmentedThirdFlats.forEach(({ input, output }) => {
          expect(AugmentedThird(input)).toEqual(output);
        });
      });
    });

    describe("down", () => {
      it("gets the augmented third for natural note names", () => {
        expect(AugmentedThird(C3, "down")).toEqual(AdoubleFlat2);
        augmentedThirdNatural.forEach(({ input, output }) => {
          expect(AugmentedThird(output, "down")).toEqual(input);
        });
      });

      it("gets the augmented third for sharp note names", () => {
        augmentedThirdSharps.forEach(({ input, output }) => {
          expect(AugmentedThird(output, "down")).toEqual(input);
        });
      });

      it("gets the augmented third for flat note names", () => {
        augmentedThirdFlats.forEach(({ input, output }) => {
          expect(AugmentedThird(output, "down")).toEqual(input);
        });
      });
    });
  });
});
