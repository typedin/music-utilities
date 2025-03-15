import AllIntervals from "../interval-builders/index";
import { spanOver } from "./spanOver";
const ScaleBuilder = function (tonic, scaleSchema, number_of_octaves = 1) {
    this.tonic = tonic;
    this.scaleSchema = scaleSchema;
    this.tonicRepetition = true;
    this.withoutTonicRepetition = () => {
        this.tonicRepetition = false;
        return this;
    };
    this.scale = () => {
        // this create a scale with 7 notes
        let result = scaleSchema.map((element, index) => {
            const note = AllIntervals.find((intervalBuilder) => intervalBuilder.name == element.interval)?.callable(tonic);
            return {
                ...note,
                order: index + 1,
                degree: index + 1,
                function: element.function,
            };
        });
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
};
export default ScaleBuilder;
//# sourceMappingURL=index.js.map