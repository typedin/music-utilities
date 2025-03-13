import { IReference } from "@/components/scales/FingerBoard";
import calculateFrequency from "../frequency-calculator";

type interval = {
    direction: string;
    name: string;
};

export default function frequencyRatio(
    frequency: any,
    interval: interval,
    temperament: any
): number {
    return temperament(frequency)[interval.name][interval.direction];
}

function percentage(from: number, to: number): number {
    return 100 - (from / to) * 100;
}

function toAcceptablePercentage(aPercentage: number): number {
    return ((aPercentage + Number.EPSILON) * 100) / 100;
}
/*
 * @see: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
 * We need to have
 */
export function frequencyAsPercentage(
    reference: IReference,
    { from, to }: { from: Note; to: Note }
): number {
    const fromFrequency = calculateFrequency(reference, from);
    const toFrequency = calculateFrequency(reference, to);

    return Math.round(
        toAcceptablePercentage(percentage(fromFrequency, toFrequency))
    );
}
