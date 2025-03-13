import {
	AlterationEnum,
	DiatonicNoteEnum,
	ModeEnum,
} from "@/constants";
import getRelativeKey from "@/keys";

describe("index", () => {
	describe("for major keys", () => {
		it("gets relative key for a major scale", () => {
			const result = getRelativeKey({
				tonality: DiatonicNoteEnum.C,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.M,
			});

			expect(result).toEqual({
				tonality: DiatonicNoteEnum.A,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.m,
			});
		});
		it("gets relative key for a major scale with sharps", () => {
			const result = getRelativeKey({
				tonality: DiatonicNoteEnum.A,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.M,
			});

			expect(result).toEqual({
				tonality: DiatonicNoteEnum.F,
				alteration: AlterationEnum.sharp,
				mode: ModeEnum.m,
			});
		});
		it("gets relative key for a major scale with flats", () => {
			const result = getRelativeKey({
				tonality: DiatonicNoteEnum.E,
				alteration: AlterationEnum.flat,
				mode: ModeEnum.M,
			});

			expect(result).toEqual({
				tonality: DiatonicNoteEnum.C,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.m,
			});
		});
	});

	describe("for minor keys", () => {
		it("gets relative key for a minor scale", () => {
			const result = getRelativeKey({
				tonality: DiatonicNoteEnum.A,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.m,
			});

			expect(result).toEqual({
				tonality: DiatonicNoteEnum.C,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.M,
			});
		});
		it("gets relative key for a major scale with sharps", () => {
			const result = getRelativeKey({
				tonality: DiatonicNoteEnum.E,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.m,
			});

			expect(result).toEqual({
				tonality: DiatonicNoteEnum.G,
				alteration: AlterationEnum.natural,
				mode: ModeEnum.M,
			});
		});
		it("gets relative key for a major scale with flats", () => {
			const result = getRelativeKey({
				tonality: DiatonicNoteEnum.B,
				alteration: AlterationEnum.flat,
				mode: ModeEnum.m,
			});

			expect(result).toEqual({
				tonality: DiatonicNoteEnum.D,
				alteration: AlterationEnum.flat,
				mode: ModeEnum.M,
			});
		});
	});
});
