"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../interval-builders/index"));
const spanOver_1 = require("./spanOver");
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
            const note = index_1.default.find((intervalBuilder) => intervalBuilder.name == element.interval)?.callable(tonic);
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
            result = (0, spanOver_1.spanOver)(result, number_of_octaves);
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
exports.default = ScaleBuilder;
//# sourceMappingURL=index.js.map