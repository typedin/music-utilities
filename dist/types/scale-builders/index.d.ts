import { IScale, Note } from "../types";
interface IScaleBuilder {
  tonic: Note;
  scaleSchema: any;
  tonicRepetition: boolean;
  withoutTonicRepetition: () => IScaleBuilder;
  scale: () => IScale;
}
declare const ScaleBuilder: {
  new (
    tonic: Note,
    scaleSchema: any,
    number_of_octaves?: number,
  ): IScaleBuilder;
};
export default ScaleBuilder;
