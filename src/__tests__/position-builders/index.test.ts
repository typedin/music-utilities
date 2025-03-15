import PositionBuilder from "../../position-builders";
import { expect } from "vitest";
import { C_MAJOR_SCALE } from "../__fixtures__/Scales";
import { A3, A4, E5, G2 } from "../tests-helpers";
import { buildNoteName } from "../../helpers";
import { IMusicalString } from "@/types";

const scale = C_MAJOR_SCALE;
describe("TraditionalBuilder", () => {
  describe("violin", () => {
    const firstString: IMusicalString = {
      ...E5,
      frequency: 659.25,
    };
    test("has 7 positions", () => {
      expect(PositionBuilder(scale, firstString).length).toEqual(7);
    });
    test("open string is omitted", () => {
      const first_note_position = PositionBuilder(scale, firstString)[0];

      expect(buildNoteName(first_note_position)).toEqual("F5");
    });
  });

  describe("viola", () => {
    const firstString: IMusicalString = {
      ...A4,
      frequency: 440,
    };
    test("has 7 positions", () => {
      expect(PositionBuilder(scale, firstString).length).toEqual(7);
    });
    test("open string is omitted", () => {
      const first_note_position = PositionBuilder(scale, firstString)[0];

      expect(buildNoteName(first_note_position)).toEqual("B4");
    });
  });

  describe("cello", () => {
    const firstString: IMusicalString = {
      ...A3,
      frequency: 220,
    };
    test("has 7 positions", () => {
      expect(PositionBuilder(scale, firstString).length).toEqual(7);
    });
    test("open string is omitted", () => {
      const first_note_position = PositionBuilder(scale, firstString)[0];

      expect(buildNoteName(first_note_position)).toEqual("B3");
    });
  });

  describe("doublebass", () => {
    describe("traditionnal", () => {
      const firstString: IMusicalString = {
        ...G2,
        frequency: 98.0,
      };
      test("has 7 positions", () => {
        expect(PositionBuilder(scale, firstString).length).toEqual(7);
      });

      test("open string is omitted", () => {
        const first_note_position = PositionBuilder(scale, firstString)[0];

        expect(buildNoteName(first_note_position)).not.toEqual("G2");
        expect(buildNoteName(first_note_position)).toEqual("A2");
      });
    });
    describe("Rabbath", () => {
      const firstString: IMusicalString = {
        ...G2,
        frequency: 98.0,
      };
      test("has 6 positions", () => {
        expect(
          PositionBuilder(scale, firstString, { isRabbath: true }).length,
        ).toEqual(6);
      });

      test("open string is omitted", () => {
        const all_positions = PositionBuilder(scale, firstString, {
          isRabbath: true,
        });

        expect(buildNoteName(all_positions[0])).toEqual("A2");
        expect(buildNoteName(all_positions[1])).toEqual("C3");
        expect(buildNoteName(all_positions[2])).toEqual("D3");
        expect(buildNoteName(all_positions[3])).toEqual("G3");
        expect(buildNoteName(all_positions[4])).toEqual("D4");
        expect(buildNoteName(all_positions[5])).toEqual("G4");
      });
    });
  });
});
