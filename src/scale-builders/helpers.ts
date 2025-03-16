import type { IntervalBuilder, Note } from "../types/index.js";

export type DegreeBuilder = {
  function: string;
  callable: IntervalBuilder;
};

export interface ScaleBuilder {
  (tonic: Note, degreeBuilders: Array<DegreeBuilder>): Array<DegreeBuilder>;
}
