import { getNextAlteration, getPreviousAlteration } from "../helpers";
export function getAlterationForDiminishedInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? getPreviousAlteration(getPreviousAlteration(note.alteration))
            : getPreviousAlteration(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? getNextAlteration(getNextAlteration(note.alteration))
        : getNextAlteration(note.alteration);
}
export function getAlterationForPerfectInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? getPreviousAlteration(note.alteration)
            : note.alteration;
    }
    return specialCases[direction].includes(note.name)
        ? getNextAlteration(note.alteration)
        : note.alteration;
}
export function getAlterationForAugmentedInterval(note, direction, specialCases) {
    if (direction == "up") {
        return specialCases[direction].includes(note.name)
            ? getNextAlteration(getNextAlteration(note.alteration))
            : getNextAlteration(note.alteration);
    }
    return specialCases[direction].includes(note.name)
        ? getPreviousAlteration(getPreviousAlteration(note.alteration))
        : getPreviousAlteration(note.alteration);
}
//# sourceMappingURL=getAlterationForPerfectInterval.js.map