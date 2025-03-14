import * as Scales from "../__fixtures__/Scales";
import * as testsHelpers from "../tests-helpers";
import { getFirstPossibleNoteInScale } from "../../helpers";
import { beginOn } from "../../scale-builders/beginOn";
import { endOn } from "../../scale-builders/endOn";

describe("endOn", () => {
	it("can limit when the end is in the scale", () => {
		const scale = Scales.C_MAJOR_SCALE

		expect(endOn(scale, testsHelpers.C2).length).toEqual(1);
		expect(endOn(scale, testsHelpers.D2).length).toEqual(2);
		expect(endOn(scale, testsHelpers.E2).length).toEqual(3);
		expect(endOn(scale, testsHelpers.F2).length).toEqual(4);
		expect(endOn(scale, testsHelpers.G2).length).toEqual(5);
		expect(endOn(scale, testsHelpers.A2).length).toEqual(6);
		expect(endOn(scale, testsHelpers.B2).length).toEqual(7);
	});

	it("can limit when the end is 1 octave higger than the scale", () => {
		const scale = Scales.C_MAJOR_SCALE

		expect(endOn(scale, testsHelpers.C3).length).toEqual(8);
		expect(endOn(scale, testsHelpers.D3).length).toEqual(9);
		expect(endOn(scale, testsHelpers.E3).length).toEqual(10);
		expect(endOn(scale, testsHelpers.F3).length).toEqual(11);
		expect(endOn(scale, testsHelpers.G3).length).toEqual(12);
		expect(endOn(scale, testsHelpers.A3).length).toEqual(13);
		expect(endOn(scale, testsHelpers.B3).at(13)).toEqual({
			alteration: "",
			degree: 7,
			function: "leading tone",
			name: "B",
			octave: 3,
			order: 14,
		});
	});

	it("can limit when the end is 2 octaves higger than the scale", () => {
		const scale = Scales.C_MAJOR_SCALE

		expect(endOn(scale, testsHelpers.C4).length).toEqual(15);
		expect(endOn(scale, testsHelpers.D4).length).toEqual(16);
		expect(endOn(scale, testsHelpers.E4).length).toEqual(17);
		expect(endOn(scale, testsHelpers.F4).length).toEqual(18);
		expect(endOn(scale, testsHelpers.G4).length).toEqual(19);
		expect(endOn(scale, testsHelpers.A4).length).toEqual(20);
		expect(endOn(scale, testsHelpers.B4).at(20)).toEqual({
			alteration: "",
			degree: 7,
			function: "leading tone",
			name: "B",
			octave: 4,
			order: 21,
		});
	});

	it("can limit when the end is 3 octaves higger than the scale", () => {
		const scale = Scales.C_MAJOR_SCALE

		expect(endOn(scale, testsHelpers.D4).length).toEqual(16);
	});

	it.skip("can limit when the beginning is not the root", () => {
		const scale = beginOn(
			Scales.C_MAJOR_SCALE,
			testsHelpers.E1
		);

		const result = endOn(scale, testsHelpers.D4);

		expect(result.length).toEqual(21);
		expect(result[result.length - 1]).toEqual({
			...testsHelpers.D4,
			degree: 2,
			function: "supertonic",
			order: 21,
		});
	});

	it("does not go over the limit with complex chaining", () => {
		const scale = Scales.Eb4_MINOR_MELODIC_ASCENDING
		const upperLimit = testsHelpers.Bb4;
		const lowerLimit = testsHelpers.A1;
		const possibleLowerLimit = {
			...getFirstPossibleNoteInScale(scale, lowerLimit),
			octave: lowerLimit.octave,
		};

		const result = endOn(
			beginOn(scale, possibleLowerLimit),
			upperLimit!
		);

		expect(result.at(result.length - 1)?.name).toEqual(upperLimit.name);
		expect(result.at(result.length - 1)?.octave).toEqual(
			upperLimit.octave
		);
		expect(result.at(result.length - 1)?.alteration).toEqual(
			upperLimit.alteration
		);
	});
});
