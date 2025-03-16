import type { IntervalBuilder, Note } from "../types/index.js";

// TODO move to types
export type DegreeBuilder = {
  function: string;
  callable: IntervalBuilder;
};

// TODO move to types
export interface ScaleBuilder {
  (tonic: Note, degreeBuilders: Array<DegreeBuilder>): Array<DegreeBuilder>;
}
