import { describe, it, expect } from "vitest";
import { AlterationEnum, DiatonicNoteEnum } from "../../constants";
import {
	AugmentedUnison,
	DiminishedUnison,
	PerfectUnison,
} from "../../interval-builders/Unison";

describe("Unison", () => {
	describe("Diminished", () => {
		it("up", () => {
			expect(
				DiminishedUnison({
					alteration: AlterationEnum.natural,
					name: DiatonicNoteEnum.C,
					octave: 4,
				})
			).toEqual({
				alteration: AlterationEnum.flat,
				name: DiatonicNoteEnum.C,
				octave: 4,
			});
		});
		it("down", () => {
			expect(
				DiminishedUnison(
					{
						alteration: AlterationEnum.natural,
						name: DiatonicNoteEnum.C,
						octave: 4,
					},
					"down"
				)
			).toEqual({
				alteration: AlterationEnum.sharp,
				name: DiatonicNoteEnum.C,
				octave: 4,
			});
		});
	});
	describe("Perfect", () => {
		it("up", () => {
			expect(
				PerfectUnison({
					alteration: AlterationEnum.natural,
					name: DiatonicNoteEnum.C,
					octave: 4,
				})
			).toEqual({
				alteration: AlterationEnum.natural,
				name: DiatonicNoteEnum.C,
				octave: 4,
			});
		});
		it("down", () => {
			expect(
				PerfectUnison(
					{
						alteration: AlterationEnum.natural,
						name: DiatonicNoteEnum.C,
						octave: 4,
					},
					"down"
				)
			).toEqual({
				alteration: AlterationEnum.natural,
				name: DiatonicNoteEnum.C,
				octave: 4,
			});
		});
	});
	describe("Augmented", () => {
		it("up", () => {
			expect(
				AugmentedUnison({
					alteration: AlterationEnum.natural,
					name: DiatonicNoteEnum.C,
					octave: 4,
				})
			).toEqual({
				alteration: AlterationEnum.sharp,
				name: DiatonicNoteEnum.C,
				octave: 4,
			});
		});
		it("down", () => {
			expect(
				AugmentedUnison(
					{
						alteration: AlterationEnum.natural,
						name: DiatonicNoteEnum.C,
						octave: 4,
					},
					"down"
				)
			).toEqual({
				alteration: AlterationEnum.flat,
				name: DiatonicNoteEnum.C,
				octave: 4,
			});
			expect(
				AugmentedUnison(
					{
						alteration: AlterationEnum.natural,
						name: DiatonicNoteEnum.A,
						octave: 4,
					},
					"down"
				)
			).toEqual({
				alteration: AlterationEnum.flat,
				name: DiatonicNoteEnum.A,
				octave: 4,
			});
		});
	});
});
