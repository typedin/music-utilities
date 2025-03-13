import {
	diminishedSecondFlats,
	diminishedSecondNatural,
	diminishedSecondSharps,
} from "../__fixtures__/DiminishedSeconds";
import {
	minorSecondFlats,
	minorSecondNatural,
	minorSecondSharps,
} from "../__fixtures__/MinorSeconds";
import {
	majorSecondFlats,
	majorSecondNatural,
	majorSecondSharps,
} from "../__fixtures__/MajorSeconds";
import {
	augmentedSecondFlats,
	augmentedSecondNatural,
	augmentedSecondSharps,
} from "../__fixtures__/AugmentedSeconds";
import {
	AugmentedSecond,
	MajorSecond,
	MinorSecond,
	DiminishedSecond,
} from "@/interval-builders/Second";

import { describe, it, expect } from "vitest";
import { A2, AdoubleFlat2, G2, GFlat2 } from "../tests-helpers";

describe("Second", () => {
	describe("Diminished", () => {
		describe("up", () => {
			it("gets the diminished second for natural note names", () => {
				expect(DiminishedSecond(G2)).toEqual(AdoubleFlat2);
				diminishedSecondNatural.forEach(({ input, output }) => {
					expect(DiminishedSecond(input)).toEqual(output);
				});
			});

			it("gets the diminished second for sharp note names", () => {
				diminishedSecondSharps.forEach(({ input, output }) => {
					expect(DiminishedSecond(input)).toEqual(output);
				});
			});

			it("gets the major second for flat note names", () => {
				diminishedSecondFlats.forEach(({ input, output }) => {
					expect(DiminishedSecond(input)).toEqual(output);
				});
			});
		});
		describe("down", () => {
			it("gets the diminished second for natural note names", () => {
				expect(DiminishedSecond(AdoubleFlat2, "down")).toEqual(G2);
				diminishedSecondNatural.forEach(({ input, output }) => {
					expect(DiminishedSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the diminished second for sharp note names", () => {
				diminishedSecondSharps.forEach(({ input, output }) => {
					expect(DiminishedSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the major second for flat note names", () => {
				diminishedSecondFlats.forEach(({ input, output }) => {
					expect(DiminishedSecond(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("Minor", () => {
		describe("up", () => {
			it("gets the minor second for natural note names", () => {
				minorSecondNatural.forEach(({ input, output }) => {
					expect(MinorSecond(input)).toEqual(output);
				});
			});

			it("gets the minor second for sharp note names", () => {
				minorSecondSharps.forEach(({ input, output }) => {
					expect(MinorSecond(input)).toEqual(output);
				});
			});

			it("gets the major second for flat note names", () => {
				minorSecondFlats.forEach(({ input, output }) => {
					expect(MinorSecond(input)).toEqual(output);
				});
			});
		});

		describe("down", () => {
			it("gets the minor second for natural note names", () => {
				minorSecondNatural.forEach(({ input, output }) => {
					expect(MinorSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the minor second for sharp note names", () => {
				minorSecondSharps.forEach(({ input, output }) => {
					expect(MinorSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the major second for flat note names", () => {
				minorSecondFlats.forEach(({ input, output }) => {
					expect(MinorSecond(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("Major", () => {
		describe("up", () => {
			it("gets the major second for natural note names", () => {
				majorSecondNatural.forEach(({ input, output }) => {
					expect(MajorSecond(input)).toEqual(output);
				});
			});

			it("gets the major second for sharp note names", () => {
				majorSecondSharps.forEach(({ input, output }) => {
					expect(MajorSecond(input)).toEqual(output);
				});
			});

			it("gets the major second for flat note names", () => {
				majorSecondFlats.forEach(({ input, output }) => {
					expect(MajorSecond(input)).toEqual(output);
				});
			});
		});

		describe("down", () => {
			it("gets the major second for natural note names", () => {
				majorSecondNatural.forEach(({ input, output }) => {
					expect(MajorSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the major second for sharp note names", () => {
				majorSecondSharps.forEach(({ input, output }) => {
					expect(MajorSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the major second for flat note names", () => {
				majorSecondFlats.forEach(({ input, output }) => {
					expect(MajorSecond(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("Augmented", () => {
		describe("up", () => {
			it("gets the augmented second for natural note names", () => {
				expect(AugmentedSecond(GFlat2)).toEqual(A2);
				augmentedSecondNatural.forEach(({ input, output }) => {
					expect(AugmentedSecond(input)).toEqual(output);
				});
			});

			it("gets the augmented second for sharp note names", () => {
				augmentedSecondSharps.forEach(({ input, output }) => {
					expect(AugmentedSecond(input)).toEqual(output);
				});
			});

			it("gets the augmented second for flat note names", () => {
				augmentedSecondFlats.forEach(({ input, output }) => {
					expect(AugmentedSecond(input)).toEqual(output);
				});
			});
		});

		describe("down", () => {
			it("gets the augmented second for natural note names", () => {
				expect(AugmentedSecond(A2, "down")).toEqual(GFlat2);
				augmentedSecondNatural.forEach(({ input, output }) => {
					expect(AugmentedSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the augmented second for sharp note names", () => {
				augmentedSecondSharps.forEach(({ input, output }) => {
					expect(AugmentedSecond(output, "down")).toEqual(input);
				});
			});

			it("gets the augmented second for flat note names", () => {
				augmentedSecondFlats.forEach(({ input, output }) => {
					expect(AugmentedSecond(output, "down")).toEqual(input);
				});
			});
		});
	});
});
