"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = frequencyRatio;
exports.frequencyAsPercentage = frequencyAsPercentage;
const frequency_calculator_1 = __importDefault(require("../frequency-calculator"));
function frequencyRatio(frequency, interval, temperament) {
    return temperament(frequency)[interval.name][interval.direction];
}
function percentage(from, to) {
    return 100 - (from / to) * 100;
}
function toAcceptablePercentage(aPercentage) {
    return ((aPercentage + Number.EPSILON) * 100) / 100;
}
/*
 * @see: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 */
function frequencyAsPercentage(reference, { from, to }) {
    const fromFrequency = (0, frequency_calculator_1.default)(reference, from);
    const toFrequency = (0, frequency_calculator_1.default)(reference, to);
    return Math.round(toAcceptablePercentage(percentage(fromFrequency, toFrequency)));
}
//# sourceMappingURL=index.js.map