import { AlterationEnum, DiatonicNoteEnum, } from "../../constants";
import cycleOfFifths from "../../cycle-of-fifths/index";

describe("index", () => {
	it("works", () => {
		const cycle = cycleOfFifths({ name: DiatonicNoteEnum.C, alteration: AlterationEnum.natural })

		expect(cycle.getSequence().length).toEqual(12)
	});

	it("completes the circle", () => {
		const cycle = cycleOfFifths({ name: DiatonicNoteEnum.C, alteration: AlterationEnum.natural })

		expect(cycle.getSequence().at(0)).toEqual({
			major: { name: DiatonicNoteEnum.D, alteration: AlterationEnum.flat, octave: 4 },
			minor: { name: DiatonicNoteEnum.B, alteration: AlterationEnum.flat, octave: 4 },
		})
		expect(cycle.getSequence().at(1)).toEqual({
			major: { name: DiatonicNoteEnum.A, alteration: AlterationEnum.flat, octave: 4 },
			minor: { name: DiatonicNoteEnum.F, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.getSequence().at(2)).toEqual({
			major: { name: DiatonicNoteEnum.E, alteration: AlterationEnum.flat, octave: 4 },
			minor: { name: DiatonicNoteEnum.C, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.getSequence().at(3)).toEqual({
			major: { name: DiatonicNoteEnum.B, alteration: AlterationEnum.flat, octave: 4 },
			minor: { name: DiatonicNoteEnum.G, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.getSequence().at(4)).toEqual({
			major: { name: DiatonicNoteEnum.F, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.D, alteration: AlterationEnum.natural, octave: 4 }
		})
		// C
		expect(cycle.getSequence().at(5)).toEqual({
			major: { name: DiatonicNoteEnum.C, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.A, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.getSequence().at(6)).toEqual({
			major: { name: DiatonicNoteEnum.G, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.E, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.getSequence().at(7)).toEqual({
			major: { name: DiatonicNoteEnum.D, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.B, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.getSequence().at(8)).toEqual({
			major: { name: DiatonicNoteEnum.A, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.F, alteration: AlterationEnum.sharp, octave: 4 }
		})
		expect(cycle.getSequence().at(9)).toEqual({
			major: { name: DiatonicNoteEnum.E, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.C, alteration: AlterationEnum.sharp, octave: 4 }
		})
		expect(cycle.getSequence().at(10)).toEqual({
			major: { name: DiatonicNoteEnum.B, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.G, alteration: AlterationEnum.sharp, octave: 4 }
		})
		expect(cycle.getSequence().at(11)).toEqual({
			major: { name: DiatonicNoteEnum.F, alteration: AlterationEnum.sharp, octave: 4 },
			minor: { name: DiatonicNoteEnum.D, alteration: AlterationEnum.sharp, octave: 4 }
		})
	});


	it("gets next or previous key in any direction", () => {
		const cycle = cycleOfFifths({ name: DiatonicNoteEnum.C, alteration: AlterationEnum.natural })

		expect(cycle.next()).toEqual({
			major: { name: DiatonicNoteEnum.G, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.E, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.previous()).toEqual({
			major: { name: DiatonicNoteEnum.C, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.A, alteration: AlterationEnum.natural, octave: 4 }
		})
		expect(cycle.previous()).toEqual({
			major: { name: DiatonicNoteEnum.F, alteration: AlterationEnum.natural, octave: 4 },
			minor: { name: DiatonicNoteEnum.D, alteration: AlterationEnum.natural, octave: 4 }
		})
	});
});
