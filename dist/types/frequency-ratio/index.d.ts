import { IReference, Note } from "../types";
type interval = {
    direction: string;
    name: string;
};
export default function frequencyRatio(frequency: any, interval: interval, temperament: any): number;
export declare function frequencyAsPercentage(reference: IReference, { from, to }: {
    from: Note;
    to: Note;
}): number;
export {};
