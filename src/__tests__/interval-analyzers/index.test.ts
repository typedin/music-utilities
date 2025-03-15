import analyzeInterval from "../../interval-analyzers/index";
import { expect, describe, it } from "vitest";
import {
  A2,
  AdoubleFlat2,
  C3,
  C4,
  C5,
  Csharp4,
  Db4,
  Esharp4,
  G2,
  GFlat2,
} from "../tests-helpers";
import { G_MAJOR_SCALE } from "../__fixtures__/Scales";
import { IMusicalString } from "@/types";

describe("analyzeInterval", () => {
  describe("non compound", () => {
    it("analyzes a unisson", () => {
      expect(analyzeInterval(C4, C4)).toEqual({
        direction: expect.any(String),
        compound: false,
        type: "unison",
        quality: "perfect",
        halfsteps: 0,
      });
    });

    it("analyzes a minor second up", () => {
      expect(analyzeInterval(C4, Db4)).toEqual({
        direction: "up",
        compound: false,
        type: "second",
        quality: "minor",
        halfsteps: 1,
      });
    });

    it("analyzes a diminished second up", () => {
      expect(analyzeInterval(Csharp4, Db4)).toEqual({
        direction: "up",
        compound: false,
        type: "second",
        quality: "diminished",
        halfsteps: 0,
      });
    });

    it("analyzes a diminished second down", () => {
      expect(analyzeInterval(Db4, Csharp4)).toEqual({
        direction: "down",
        compound: false,
        type: "second",
        quality: "diminished",
        halfsteps: 0,
      });
    });
  });

  describe("compound", () => {
    describe("up", () => {
      it("analyzes a compound octave", () => {
        expect(analyzeInterval(C3, C5)).toEqual({
          direction: "up",
          compound: true,
          type: "octave",
          quality: "perfect",
          halfsteps: 24,
        });
      });
      it("analyzes an augmented third up", () => {
        expect(analyzeInterval(C3, Esharp4)).toEqual({
          direction: "up",
          compound: true,
          type: "third",
          quality: "augmented",
          halfsteps: 17,
        });
      });

      it.skip("analyzes an augmented second up", () => {
        // TODO
        expect(analyzeInterval(GFlat2, A2)).toEqual({
          direction: "up",
          compound: true,
          type: "second",
          quality: "augmented",
          halfsteps: 17,
        });
      });
    });
    describe("down", () => {
      it("analyzes a compound octave", () => {
        expect(analyzeInterval(C5, C3)).toEqual({
          direction: "down",
          compound: true,
          type: "octave",
          quality: "perfect",
          halfsteps: 24,
        });
      });

      it("analyzes an augmented third down", () => {
        expect(analyzeInterval(Esharp4, C3)).toEqual({
          direction: "down",
          compound: true,
          type: "third",
          quality: "augmented",
          halfsteps: 17,
        });
      });

      it("analyzes an augmented third down", () => {
        expect(analyzeInterval(C4, AdoubleFlat2)).toEqual({
          direction: "down",
          compound: true,
          type: "third",
          quality: "augmented",
          halfsteps: 17,
        });
      });
    });
  });

  describe("regressions", () => {
    it("should not blow 0", () => {
      const stringRoot: IMusicalString = {
        ...G2,
        frequency: 98.0,
      };
      expect(analyzeInterval(G_MAJOR_SCALE[0], stringRoot)).toEqual({
        direction: expect.any(String),
        compound: false,
        type: "unison",
        quality: "perfect",
        halfsteps: 0,
      });
    });

    it("should not blow 1", () => {
      const stringRoot: IMusicalString = {
        ...G2,
        frequency: 98.0,
      };
      expect(analyzeInterval(G_MAJOR_SCALE[1], stringRoot)).toEqual({
        direction: "down",
        compound: false,
        type: "second",
        quality: "major",
        halfsteps: 2,
      });
    });
  });
});
