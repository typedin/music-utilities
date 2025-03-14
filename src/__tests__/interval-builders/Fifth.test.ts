import { describe, it, expect } from "vitest";
import {
	AugmentedFifth,
	PerfectFifth,
	DiminishedFifth,
} from "../../interval-builders/Fifth";
import * as Fifths from "../__fixtures__/Fifths";

describe("Fifth", () => {
	describe("diminished", () => {
		describe("up", () => {
			it("gets all diminished fifths for natural notes", () => {
				Fifths.diminishedFifthNaturals.forEach(({ input, output }) => {
					expect(DiminishedFifth(input)).toEqual(output);
				});
			});
			it("gets all diminished fifths for flat notes", () => {
				Fifths.diminishedFifthFlats.forEach(({ input, output }) => {
					expect(DiminishedFifth(input)).toEqual(output);
				});
			});
			it("gets all diminished fifths for sharp notes", () => {
				Fifths.diminishedFifthSharps.forEach(({ input, output }) => {
					expect(DiminishedFifth(input)).toEqual(output);
				});
			});
		});
		describe("down", () => {
			it("gets all diminished fifths for natural notes", () => {
				Fifths.diminishedFifthNaturals.forEach(({ input, output }) => {
					expect(DiminishedFifth(output, "down")).toEqual(input);
				});
			});
			it("gets all diminished fifths for flat notes", () => {
				Fifths.diminishedFifthFlats.forEach(({ input, output }) => {
					expect(DiminishedFifth(output, "down")).toEqual(input);
				});
			});
			it("gets all diminished fifths for sharp notes", () => {
				Fifths.diminishedFifthSharps.forEach(({ input, output }) => {
					expect(DiminishedFifth(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("perfect", () => {
		describe("up", () => {
			it("gets all perfect fifths for natural notes", () => {
				Fifths.perfectFifthNaturals.forEach(({ input, output }) => {
					expect(PerfectFifth(input)).toEqual(output);
				});
			});
			it("gets all perfect fifths for flat notes", () => {
				Fifths.perfectFifthFlats.forEach(({ input, output }) => {
					expect(PerfectFifth(input)).toEqual(output);
				});
			});
			it("gets all perfect fifths for sharp notes", () => {
				Fifths.perfectFifthSharps.forEach(({ input, output }) => {
					expect(PerfectFifth(input)).toEqual(output);
				});
			});
		});
		describe("down", () => {
			it("gets all perfect fifths for natural notes", () => {
				Fifths.perfectFifthNaturals.forEach(({ input, output }) => {
					expect(PerfectFifth(output, "down")).toEqual(input);
				});
			});
			it("gets all perfect fifths for flat notes", () => {
				Fifths.perfectFifthFlats.forEach(({ input, output }) => {
					expect(PerfectFifth(output, "down")).toEqual(input);
				});
			});
			it("gets all perfect fifths for sharp notes", () => {
				Fifths.perfectFifthSharps.forEach(({ input, output }) => {
					expect(PerfectFifth(output, "down")).toEqual(input);
				});
			});
		});
	});
	describe("augmented", () => {
		describe("up", () => {
			it("gets all augmented fifths for natural notes", () => {
				Fifths.augmentedFifthNaturals.forEach(({ input, output }) => {
					expect(AugmentedFifth(input)).toEqual(output);
				});
			});
			it("gets all augmented fifths for flat notes", () => {
				Fifths.augmentedFifthFlats.forEach(({ input, output }) => {
					expect(AugmentedFifth(input)).toEqual(output);
				});
			});
			it("gets all augmented fifths for sharp notes", () => {
				Fifths.augmentedFifthSharps.forEach(({ input, output }) => {
					expect(AugmentedFifth(input)).toEqual(output);
				});
			});
		});
		describe("down", () => {
			it("gets all augmented fifths for natural notes", () => {
				Fifths.augmentedFifthNaturals.forEach(({ input, output }) => {
					expect(AugmentedFifth(output, "down")).toEqual(input);
				});
			});
			it("gets all augmented fifths for flat notes", () => {
				Fifths.augmentedFifthFlats.forEach(({ input, output }) => {
					expect(AugmentedFifth(output, "down")).toEqual(input);
				});
			});
			it("gets all augmented fifths for sharp notes", () => {
				Fifths.augmentedFifthSharps.forEach(({ input, output }) => {
					expect(AugmentedFifth(output, "down")).toEqual(input);
				});
			});
		});
	});
});
