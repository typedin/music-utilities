import { intervalAnalyzer } from "../interval-analyzers/index.js";
import type { IReference, Note } from "../types/index.js";

export function calculateFrequency(reference: IReference, note: Note): number {
  const interval = intervalAnalyzer(reference, note);

  if (!interval) {
    throw new Error(`Could not calculate frequency for: ${note}`);
  }

  if (intervalAnalyzer(reference, note)?.direction == "down") {
    return reference.frequency / Math.pow(1.059463, interval.halfsteps);
  }
  return reference.frequency * Math.pow(1.059463, interval.halfsteps);
}
