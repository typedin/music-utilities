import { IScale, Note } from "@/types";
import AllIntervals from "../interval-builders/index";
import { spanOver } from "./spanOver";

interface IScaleBuilder {
  tonic: Note;
  scaleSchema: any;
  tonicRepetition: boolean;
  withoutTonicRepetition: () => IScaleBuilder;
  scale: () => IScale;
}

const ScaleBuilder = function(
  this: IScaleBuilder,
  tonic: Note,
  scaleSchema: any,
  number_of_octaves: number = 1,
) {
  this.tonic = tonic;
  this.scaleSchema = scaleSchema;
  this.tonicRepetition = true;

  this.withoutTonicRepetition = () => {
    this.tonicRepetition = false;
    return this;
  };

  this.scale = () => {
    // this create a scale with 7 notes
    let result = scaleSchema.map(
      (element: { interval: string; function: string }, index: number) => {
        const note = AllIntervals.find(
          (intervalBuilder) => intervalBuilder.name == element.interval,
        )?.callable(tonic);
        return {
          ...note,
          order: index + 1,
          degree: index + 1,
          function: element.function,
        };
      },
    );

    // spanOver creates many scales with the repetition of the tonic
    // for example: 2 octaves in C Major
    // we will have 3 tonics
    if (number_of_octaves > 1) {
      result = spanOver(result, number_of_octaves);
      result.pop();
    }

    if (this.tonicRepetition) {
      result.push({
        ...tonic,
        octave: tonic.octave + number_of_octaves,
      });
    }

    return result;
  };
} as any as {
  new(
    tonic: Note,
    scaleSchema: any,
    number_of_octaves?: number,
  ): IScaleBuilder;
};

export default ScaleBuilder;
