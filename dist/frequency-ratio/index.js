import calculateFrequency from "../frequency-calculator";
export default function frequencyRatio(frequency, interval, temperament) {
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
export function frequencyAsPercentage(reference, { from, to }) {
    const fromFrequency = calculateFrequency(reference, from);
    const toFrequency = calculateFrequency(reference, to);
    return Math.round(toAcceptablePercentage(percentage(fromFrequency, toFrequency)));
}
//# sourceMappingURL=index.js.map