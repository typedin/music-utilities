import {
    AugmentedFourth,
    DiminishedFourth,
    PerfectFourth,
} from "@/modules/interval-builders/Fourth";
import * as Fourths from "../__fixtures__/Fourths";
import { AlterationEnum, DiatonicNoteEnum } from "@/modules/constants";

describe("Forth", () => {
    describe("diminished", () => {
        describe("up", () => {
            it("gets all diminished fourths for natural notes", () => {
                Fourths.diminishedFourthNatural.forEach(({ input, output }) => {
                    expect(DiminishedFourth(input)).toEqual(output);
                });
            });
            it("gets diminished forth for F natural", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.natural,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.doubleFlat,
                    octave: 4,
                };
                expect(DiminishedFourth(input)).toEqual(output);
            });
            it("gets all diminished fourths for flat notes", () => {
                Fourths.diminishedFourthFlats.forEach(({ input, output }) => {
                    expect(DiminishedFourth(input)).toEqual(output);
                });
            });
            // ***************************
            // skip test for B triple flat
            // ***************************
            it("gets all diminished fourths for sharp notes", () => {
                Fourths.diminishedFourthSharps.forEach(({ input, output }) => {
                    expect(DiminishedFourth(input)).toEqual(output);
                });
            });
            it("gets diminished forth for F sharp", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.sharp,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.flat,
                    octave: 4,
                };
                expect(DiminishedFourth(input)).toEqual(output);
            });
        });
        describe("down", () => {
            it("gets all diminished fourths for natural notes", () => {
                Fourths.diminishedFourthNatural.forEach(({ input, output }) => {
                    expect(DiminishedFourth(output, "down")).toEqual(input);
                });
            });
            it("gets diminished forth for F natural", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.natural,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.doubleFlat,
                    octave: 4,
                };
                expect(DiminishedFourth(output, "down")).toEqual(input);
            });
            it("gets diminished forth for F sharp", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.sharp,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.flat,
                    octave: 4,
                };
                expect(DiminishedFourth(output, "down")).toEqual(input);
            });
            it("gets all diminished fourths for flat notes", () => {
                Fourths.diminishedFourthFlats.forEach(({ input, output }) => {
                    expect(DiminishedFourth(output, "down")).toEqual(input);
                });
            });
            it("gets all diminished fourths for sharp notes", () => {
                Fourths.diminishedFourthSharps.forEach(({ input, output }) => {
                    expect(DiminishedFourth(output, "down")).toEqual(input);
                });
            });
        });
    });
    describe("perfect", () => {
        describe("up", () => {
            it("gets all perfect fourths for natural notes", () => {
                Fourths.perfectForthNatural.forEach(({ input, output }) => {
                    expect(PerfectFourth(input)).toEqual(output);
                });
            });
            it("gets perfect forth for F natural", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.natural,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.flat,
                    octave: 4,
                };
                expect(PerfectFourth(input)).toEqual(output);
            });
            it("gets all perfect fourths for flat notes", () => {
                Fourths.perfectForthFlats.forEach(({ input, output }) => {
                    expect(PerfectFourth(input)).toEqual(output);
                });
            });
            it("gets perfect forth for F flat", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.flat,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.doubleFlat,
                    octave: 4,
                };
                expect(PerfectFourth(input)).toEqual(output);
            });
            it("gets all perfect fourths for sharp notes", () => {
                Fourths.perfectForthSharps.forEach(({ input, output }) => {
                    expect(PerfectFourth(input)).toEqual(output);
                });
            });
            it("gets perfect forth for F sharp", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.sharp,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.natural,
                    octave: 4,
                };
                expect(PerfectFourth(input)).toEqual(output);
            });
        });
        describe("down", () => {
            it("gets all perfect fourths for natural notes", () => {
                Fourths.perfectForthNatural.forEach(({ input, output }) => {
                    expect(PerfectFourth(output, "down")).toEqual(input);
                });
            });
            it("gets perfect forth for F natural", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.natural,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.flat,
                    octave: 4,
                };
                expect(PerfectFourth(output, "down")).toEqual(input);
            });
            it("gets all perfect fourths for flat notes", () => {
                Fourths.perfectForthFlats.forEach(({ input, output }) => {
                    expect(PerfectFourth(output, "down")).toEqual(input);
                });
            });
            it("gets perfect forth for F flat", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.flat,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.doubleFlat,
                    octave: 4,
                };
                expect(PerfectFourth(output, "down")).toEqual(input);
            });
            it("gets all perfect fourths for sharp notes", () => {
                Fourths.perfectForthSharps.forEach(({ input, output }) => {
                    expect(PerfectFourth(output, "down")).toEqual(input);
                });
            });
            it("gets perfect forth for F sharp", () => {
                const input = {
                    name: DiatonicNoteEnum.F,
                    alteration: AlterationEnum.sharp,
                    octave: 4,
                };
                const output = {
                    name: DiatonicNoteEnum.B,
                    alteration: AlterationEnum.natural,
                    octave: 4,
                };
                expect(PerfectFourth(output, "down")).toEqual(input);
            });
        });
    });
    describe("augmented", () => {
        describe("up", () => {
            it("gets all augmented fourths for natural notes", () => {
                Fourths.augmentedForthNatural.forEach(({ input, output }) => {
                    expect(AugmentedFourth(input)).toEqual(output);
                });
            });
            it("gets all augmented fourths for flat notes", () => {
                Fourths.augmentedForthFlats.forEach(({ input, output }) => {
                    expect(AugmentedFourth(input)).toEqual(output);
                });
            });
            it("gets all augmented fourths for sharp notes", () => {
                Fourths.augmentedForthSharps.forEach(({ input, output }) => {
                    expect(AugmentedFourth(input)).toEqual(output);
                });
            });
        });
        describe("down", () => {
            it("gets all augmented fourths for natural notes", () => {
                Fourths.augmentedForthNatural.forEach(({ input, output }) => {
                    expect(AugmentedFourth(output, "down")).toEqual(input);
                });
            });
            it("gets all augmented fourths for flat notes", () => {
                Fourths.augmentedForthFlats.forEach(({ input, output }) => {
                    expect(AugmentedFourth(output, "down")).toEqual(input);
                });
            });
            it("gets all augmented fourths for sharp notes", () => {
                Fourths.augmentedForthSharps.forEach(({ input, output }) => {
                    expect(AugmentedFourth(output, "down")).toEqual(input);
                });
            });
        });
    });
});
