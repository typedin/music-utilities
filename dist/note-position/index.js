"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createNotePosition;
const frequency_ratio_1 = require("../frequency-ratio");
const frequency_calculator_1 = __importDefault(require("../frequency-calculator"));
function createNotePosition(scaleDegree, reference, musicalString, args) {
    return {
        ...scaleDegree,
        degree: scaleDegree.degree,
        function: scaleDegree.function,
        order: 1 + args.index, // 1 indexed
        position: (0, frequency_ratio_1.frequencyAsPercentage)(reference, {
            to: scaleDegree,
            from: musicalString,
        }),
        frequency: (0, frequency_calculator_1.default)(reference, scaleDegree),
    };
}
//# sourceMappingURL=index.js.map