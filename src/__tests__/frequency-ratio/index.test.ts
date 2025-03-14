import { IReference } from "@/components/scales/FingerBoard";
import { frequencyAsPercentage } from "../../frequency-ratio/index";
import { A4, A5, Eb5 } from "../tests-helpers";

describe("frequencyAsPercentage", () => {
  const reference: IReference = {
    frequency: 442,
    ...A4,
  };
  const from = A4;
  it("returns acceptably rounded percentage", () => {
    expect(frequencyAsPercentage(reference, { from, to: A5 })).toBe(50);
  });
  it("returns acceptably rounded percentage 2", () => {
    expect(frequencyAsPercentage(reference, { from, to: Eb5 })).toBe(29);
  });
});
