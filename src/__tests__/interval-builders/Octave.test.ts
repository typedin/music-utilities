import { describe, it, expect } from "vitest";
import { AlterationEnum, DiatonicNoteEnum } from "../../constants.js"
import { AugmentedOctave, DiminishedOctave, PerfectOctave } from "../../interval-builders/Octave";

describe("Octave", () => {
  describe("Diminished", () => {
    it("up", () => {
      expect(
        DiminishedOctave({
          alteration: AlterationEnum.natural,
          name: DiatonicNoteEnum.C,
          octave: 4,
        }),
      ).toEqual({
        alteration: AlterationEnum.flat,
        name: DiatonicNoteEnum.C,
        octave: 5,
      });
    });
    it("down", () => {
      expect(
        DiminishedOctave(
          {
            alteration: AlterationEnum.natural,
            name: DiatonicNoteEnum.C,
            octave: 4,
          },
          "down",
        ),
      ).toEqual({
        alteration: AlterationEnum.sharp,
        name: DiatonicNoteEnum.C,
        octave: 3,
      });
    });
  });
  describe("Perfect", () => {
    it("up", () => {
      expect(
        PerfectOctave({
          alteration: AlterationEnum.natural,
          name: DiatonicNoteEnum.C,
          octave: 4,
        }),
      ).toEqual({
        alteration: AlterationEnum.natural,
        name: DiatonicNoteEnum.C,
        octave: 5,
      });
    });
    it("down", () => {
      expect(
        PerfectOctave(
          {
            alteration: AlterationEnum.natural,
            name: DiatonicNoteEnum.C,
            octave: 4,
          },
          "down",
        ),
      ).toEqual({
        alteration: AlterationEnum.natural,
        name: DiatonicNoteEnum.C,
        octave: 3,
      });
    });
  });
  describe("Augmented", () => {
    it("up", () => {
      expect(
        AugmentedOctave({
          alteration: AlterationEnum.natural,
          name: DiatonicNoteEnum.C,
          octave: 4,
        }),
      ).toEqual({
        alteration: AlterationEnum.sharp,
        name: DiatonicNoteEnum.C,
        octave: 5,
      });
    });
    it("down", () => {
      expect(
        AugmentedOctave(
          {
            alteration: AlterationEnum.natural,
            name: DiatonicNoteEnum.C,
            octave: 4,
          },
          "down",
        ),
      ).toEqual({
        alteration: AlterationEnum.flat,
        name: DiatonicNoteEnum.C,
        octave: 3,
      });
    });
  });
});