import { IMusicalString, IScaleDegree } from "../types";
type BuilderOptions = {
    isRabbath?: boolean;
};
export default function PositionBuilders(scale: IScaleDegree[], musicalString: IMusicalString, options?: BuilderOptions): IScaleDegree[];
export {};
