import { Note } from "../types";
import type { AlterationEnum } from "../constants";
declare function getAlterationForDiminishedInterval(note: Note, direction: "up" | "down", specialCases: {
    up: string[];
    down: string[];
}): AlterationEnum;
declare function getAlterationForMinorInterval(note: Note, direction: "up" | "down", specialCases: {
    up: string[];
    down: string[];
}): AlterationEnum;
declare function getAlterationForMajorInterval(note: Note, direction: "up" | "down", specialCases: {
    up: string[];
    down: string[];
}): AlterationEnum;
declare function getAlterationForAugmentedInterval(note: Note, direction: "up" | "down", specialCases: {
    up: string[];
    down: string[];
}): AlterationEnum;
export { getAlterationForDiminishedInterval, getAlterationForMinorInterval, getAlterationForMajorInterval, getAlterationForAugmentedInterval, };
