import {
	DiminishedSeventh,
	MajorSeventh,
	MinorSeventh,
	AugmentedSeventh,
} from "../../interval-builders/Seventh";
import { describe, it, expect } from "vitest";
import {
	diminishedSeventhFlats,
	diminishedSeventhNatural,
	diminishedSeventhSharps,
	minorSeventhFlats,
	minorSeventhNatural,
	minorSeventhSharps,
	majorSeventhFlats,
	majorSeventhNatural,
	majorSeventhSharps,
	augmentedSeventhFlats,
	augmentedSeventhNatural,
	augmentedSeventhSharps,
} from "../__fixtures__/Sevenths";

describe("Sevenths", () => {
	describe("Diminished", () => {
		describe("up", () => {
			it("gets the diminished seventh for natural note names", () => {
				diminishedSeventhNatural.forEach(({ input, output }) => {
					expect(DiminishedSeventh(input)).toEqual(output);
				});
			});

			it("gets the diminished seventh for sharp note names", () => {
				diminishedSeventhSharps.forEach(({ input, output }) => {
					expect(DiminishedSeventh(input)).toEqual(output);
				});
			});

			it("gets the diminished seventh for flat note names", () => {
				diminishedSeventhFlats.forEach(({ input, output }) => {
					expect(DiminishedSeventh(input)).toEqual(output);
				});
			});
		});
		describe("down", () => {
			it("gets the diminished seventh for natural note names", () => {
				diminishedSeventhNatural.forEach(({ input, output }) => {
					expect(DiminishedSeventh(output, "down")).toEqual(input);
				});
			});
			it("gets the diminished seventh for sharp note names", () => {
				diminishedSeventhSharps.forEach(({ input, output }) => {
					expect(DiminishedSeventh(output, "down")).toEqual(input);
				});
			});
			it("gets the diminished seventh for flat note names", () => {
				diminishedSeventhFlats.forEach(({ input, output }) => {
					expect(DiminishedSeventh(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("Minor", () => {
		describe("up", () => {
			it("gets the minor seventh for natural note names", () => {
				minorSeventhNatural.forEach(({ input, output }) => {
					expect(MinorSeventh(input)).toEqual(output);
				});
			});

			it("gets the minor seventh for sharp note names", () => {
				minorSeventhSharps.forEach(({ input, output }) => {
					expect(MinorSeventh(input)).toEqual(output);
				});
			});

			it("gets the minor seventh for flat note names", () => {
				minorSeventhFlats.forEach(({ input, output }) => {
					expect(MinorSeventh(input)).toEqual(output);
				});
			});
		});

		describe("down", () => {
			it("gets the minor seventh for natural note names", () => {
				minorSeventhNatural.forEach(({ input, output }) => {
					expect(MinorSeventh(output, "down")).toEqual(input);
				});
			});

			it("gets the minor seventh for sharp note names", () => {
				minorSeventhSharps.forEach(({ input, output }) => {
					expect(MinorSeventh(output, "down")).toEqual(input);
				});
			});

			it("gets the minor seventh for flat note names", () => {
				minorSeventhFlats.forEach(({ input, output }) => {
					expect(MinorSeventh(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("Major", () => {
		describe("up", () => {
			it("gets the major seventh for natural note names", () => {
				majorSeventhNatural.forEach(({ input, output }) => {
					expect(MajorSeventh(input)).toEqual(output);
				});
			});

			it("gets the major seventh for sharp note names", () => {
				majorSeventhSharps.forEach(({ input, output }) => {
					expect(MajorSeventh(input)).toEqual(output);
				});
			});

			it("gets the major seventh for flat note names", () => {
				majorSeventhFlats.forEach(({ input, output }) => {
					expect(MajorSeventh(input)).toEqual(output);
				});
			});
		});

		describe("down", () => {
			it("gets the major seventh for natural note names", () => {
				majorSeventhNatural.forEach(({ input, output }) => {
					expect(MajorSeventh(output, "down")).toEqual(input);
				});
			});

			it("gets the major seventh for sharp note names", () => {
				majorSeventhSharps.forEach(({ input, output }) => {
					expect(MajorSeventh(output, "down")).toEqual(input);
				});
			});

			it("gets the major seventh for flat note names", () => {
				majorSeventhFlats.forEach(({ input, output }) => {
					expect(MajorSeventh(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("Augmented", () => {
		describe("up", () => {
			it("gets the augmented seventh for natural note names", () => {
				augmentedSeventhNatural.forEach(({ input, output }) => {
					expect(AugmentedSeventh(input)).toEqual(output);
				});
			});

			it("gets the augmented seventh for sharp note names", () => {
				augmentedSeventhSharps.forEach(({ input, output }) => {
					expect(AugmentedSeventh(input)).toEqual(output);
				});
			});

			it("gets the augmented seventh for flat note names", () => {
				augmentedSeventhFlats.forEach(({ input, output }) => {
					expect(AugmentedSeventh(input)).toEqual(output);
				});
			});
		});

		describe("down", () => {
			it("gets the augmented seventh for natural note names", () => {
				augmentedSeventhNatural.forEach(({ input, output }) => {
					expect(AugmentedSeventh(output, "down")).toEqual(input);
				});
			});

			it("gets the augmented seventh for sharp note names", () => {
				augmentedSeventhSharps.forEach(({ input, output }) => {
					expect(AugmentedSeventh(output, "down")).toEqual(input);
				});
			});

			it("gets the augmented seventh for flat note names", () => {
				augmentedSeventhFlats.forEach(({ input, output }) => {
					expect(AugmentedSeventh(output, "down")).toEqual(input);
				});
			});
		});
	});
});
