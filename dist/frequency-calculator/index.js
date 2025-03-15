import analyzeInterval from "../interval-analyzers/index";
export default function calculateFrequency(reference, note) {
    const interval = analyzeInterval(reference, note);
    if (!interval) {
        throw new Error(`Could not calculate frequency for: ${note}`);
    }
    if (analyzeInterval(reference, note)?.direction == "down") {
        return reference.frequency / Math.pow(1.059463, interval.halfsteps);
    }
    return reference.frequency * Math.pow(1.059463, interval.halfsteps);
}
//# sourceMappingURL=index.js.map