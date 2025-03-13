import * as helpers from "@/helpers";
import { describe, expect, it, test } from "vitest";
import * as testsHelpers from "../tests-helpers";
import { AlterationEnum, DiatonicNoteEnum } from "@/constants";
import { Eb4_MINOR_MELODIC_ASCENDING } from "../__fixtures__/Scales";

describe("isNoteHigher", () => {
	it("is false for enharmonies", () => {
		expect(helpers.isNoteHigher(testsHelpers.Fflat4, testsHelpers.E4)).toBe(
			false
		);
		/* expect(helpers.isNoteHigher(testsHelpers.E4, testsHelpers.Fflat4)).toBe( */
		/*     false */
		/* ); */
		/* expect(helpers.isNoteHigher(testsHelpers.B3, testsHelpers.Cb4)).toBe( */
		/*     false */
		/* ); */
		/* expect(helpers.isNoteHigher(testsHelpers.Cb4, testsHelpers.B3)).toBe( */
		/*     false */
		/* ); */
	});

	test("unison", () => {
		expect(helpers.isNoteHigher(testsHelpers.C4, testsHelpers.C4)).toBe(
			false
		);
	});

	test("octave", () => {
		expect(helpers.isNoteHigher(testsHelpers.C4, testsHelpers.C5)).toBe(
			true
		);
		expect(helpers.isNoteHigher(testsHelpers.C5, testsHelpers.C4)).toBe(
			false
		);
	});

	test("major second", () => {
		expect(helpers.isNoteHigher(testsHelpers.C4, testsHelpers.D4)).toBe(
			true
		);
		expect(helpers.isNoteHigher(testsHelpers.D4, testsHelpers.C4)).toBe(
			false
		);
	});

	test("minor third", () => {
		expect(helpers.isNoteHigher(testsHelpers.A4, testsHelpers.C5)).toBe(
			true
		);
		expect(helpers.isNoteHigher(testsHelpers.C5, testsHelpers.A4)).toBe(
			false
		);
	});

	test("special case", () => {
		expect(
			helpers.isNoteHigher(testsHelpers.A1, testsHelpers.Asharp1)
		).toBe(true);
		expect(helpers.isNoteHigher(testsHelpers.Aflat1, testsHelpers.A1)).toBe(
			true
		);
		expect(
			helpers.isNoteHigher(testsHelpers.Asharp1, testsHelpers.A1)
		).toBe(false);
		expect(helpers.isNoteHigher(testsHelpers.A1, testsHelpers.Aflat1)).toBe(
			false
		);
		expect(
			helpers.isNoteHigher(testsHelpers.Aflat1, testsHelpers.Aflat1)
		).toBe(false);
	});
});

describe("isNoteLower", () => {
	it("is false for enharmonies", () => {
		expect(helpers.isNoteLower(testsHelpers.Cb4, testsHelpers.B3)).toBe(
			false
		);
	});

	test("unison", () => {
		expect(helpers.isNoteLower(testsHelpers.C4, testsHelpers.C4)).toBe(
			false
		);
	});

	test("octave", () => {
		expect(helpers.isNoteLower(testsHelpers.C4, testsHelpers.C5)).toBe(
			false
		);
		expect(helpers.isNoteLower(testsHelpers.C5, testsHelpers.C4)).toBe(
			true
		);
	});

	test("major second", () => {
		expect(helpers.isNoteLower(testsHelpers.C4, testsHelpers.D4)).toBe(
			false
		);
		expect(helpers.isNoteLower(testsHelpers.D4, testsHelpers.C4)).toBe(
			true
		);
	});

	test("minor third", () => {
		expect(helpers.isNoteLower(testsHelpers.A4, testsHelpers.C5)).toBe(
			false
		);
		expect(helpers.isNoteLower(testsHelpers.C5, testsHelpers.A4)).toBe(
			true
		);
	});

	test("special case", () => {
		expect(helpers.isNoteLower(testsHelpers.Asharp1, testsHelpers.A1)).toBe(
			true
		);
		expect(helpers.isNoteLower(testsHelpers.A1, testsHelpers.Aflat1)).toBe(
			true
		);
		expect(helpers.isNoteLower(testsHelpers.A1, testsHelpers.Asharp1)).toBe(
			false
		);
		expect(helpers.isNoteLower(testsHelpers.Aflat1, testsHelpers.A1)).toBe(
			false
		);
		expect(
			helpers.isNoteLower(testsHelpers.Aflat1, testsHelpers.Aflat1)
		).toBe(false);
	});
});

describe("parseNoteName", () => {
	it("parses natural notes", () => {
		expect(helpers.parseNoteName("C5")).toEqual({
			name: "C",
			alteration: "",
			octave: 5,
		});
	});

	it("parses sharped notes", () => {
		expect(helpers.parseNoteName("C#5")).toEqual({
			name: "C",
			alteration: "#",
			octave: 5,
		});
	});

	it("parses double sharped notes", () => {
		expect(helpers.parseNoteName("C𝄪5")).toEqual({
			name: "C",
			alteration: "𝄪",
			octave: 5,
		});
	});

	it("parses sharped notes", () => {
		expect(helpers.parseNoteName("Cb5")).toEqual({
			name: "C",
			alteration: "b",
			octave: 5,
		});
	});

	it("parses double sharped notes", () => {
		expect(helpers.parseNoteName("C♭♭5")).toEqual({
			name: "C",
			alteration: "♭♭",
			octave: 5,
		});
	});
});

describe("buildNoteName", () => {
	it("builds natural notes", () => {
		const input = {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 5,
		};
		expect(helpers.buildNoteName(input)).toEqual("C5");
	});

	it("builds sharped notes", () => {
		const expectation = "C♯5";
		expect(helpers.buildNoteName(testsHelpers.Csharp5)).toEqual(
			expectation
		);
	});

	it("builds double sharped notes", () => {
		const input = {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		};
		const expectation = "C𝄪5";
		expect(helpers.buildNoteName(input)).toEqual(expectation);
	});

	it("builds flat notes", () => {
		const input = {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.flat,
			octave: 5,
		};
		const expectation = "C♭5";
		expect(helpers.buildNoteName(input)).toEqual(expectation);
	});

	it("builds double flat notes", () => {
		const input = {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.doubleFlat,
			octave: 5,
		};
		const expectation = "C𝄫5";
		expect(helpers.buildNoteName(input)).toEqual(expectation);
	});
});

describe("getFirstPossibleNoteInScale", () => {
	it("gets E flat 4 for E flat 1 on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.Eb1)).toEqual(testsHelpers.Eb4);
	});

	it("gets C 4 for C 1 on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.C1)).toEqual(testsHelpers.C4);
	});

	it("gets B flat for B flat on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.Bb1)).toEqual(testsHelpers.Bb4);
	});

	it("gets D for D on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.D1)).toEqual(testsHelpers.D4);
	});

	it("gets B flat for A on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.A1)).toEqual(testsHelpers.Bb4);
	});

	it("gets C for B on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.B1)).toEqual(testsHelpers.C5);
	});

	it("gets F for E on Eb scale", () => {
		const scale = Eb4_MINOR_MELODIC_ASCENDING;

		expect(helpers.getFirstPossibleNoteInScale(scale, testsHelpers.E1)).toEqual(testsHelpers.F4);
	});
});
