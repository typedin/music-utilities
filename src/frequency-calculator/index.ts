import analyzeInterval from "../interval-analyzers/index.js";
import type { IReference, Note } from "../types/index.js";

export default function calculateFrequency(reference: IReference, note: Note): number {
  const interval = analyzeInterval(reference, note);

  if (!interval) {
    throw new Error(`Could not calculate frequency for: ${note}`);
  }

  if (analyzeInterval(reference, note)?.direction == "down") {
    return reference.frequency / Math.pow(1.059463, interval.halfsteps);
  }
  return reference.frequency * Math.pow(1.059463, interval.halfsteps);
}
