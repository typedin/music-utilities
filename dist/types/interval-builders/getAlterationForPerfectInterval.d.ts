import { Note } from "../types";
import { AlterationEnum } from "../constants";
export declare function getAlterationForDiminishedInterval(
  note: Note,
  direction: "up" | "down",
  specialCases: {
    up: string[];
    down: string[];
  },
): AlterationEnum;
export declare function getAlterationForPerfectInterval(
  note: Note,
  direction: "up" | "down",
  specialCases: {
    up: string[];
    down: string[];
  },
): AlterationEnum;
export declare function getAlterationForAugmentedInterval(
  note: Note,
  direction: "up" | "down",
  specialCases: {
    up: string[];
    down: string[];
  },
): AlterationEnum;
