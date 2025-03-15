import { IntervalBuilder, Note } from "@/types";

export type DegreeBuilder = {
  function: string;
  callable: IntervalBuilder;
};

export interface ScaleBuilder {
  (tonic: Note, degreeBuilders: Array<DegreeBuilder>): Array<DegreeBuilder>;
}
