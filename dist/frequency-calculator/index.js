"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateFrequency;
const index_1 = __importDefault(require("../interval-analyzers/index"));
function calculateFrequency(reference, note) {
    const interval = (0, index_1.default)(reference, note);
    if (!interval) {
        throw new Error(`Could not calculate frequency for: ${note}`);
    }
    if ((0, index_1.default)(reference, note)?.direction == "down") {
        return reference.frequency / Math.pow(1.059463, interval.halfsteps);
    }
    return reference.frequency * Math.pow(1.059463, interval.halfsteps);
}
//# sourceMappingURL=index.js.map