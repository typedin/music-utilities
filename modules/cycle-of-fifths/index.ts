import { AlterationEnum, DiatonicNoteEnum } from "../constants"
import { MinorThird } from "../interval-builders/Third";
import { PerfectFifth } from "../interval-builders/Fifth";

export default function({ name, alteration }: { name: DiatonicNoteEnum; alteration: AlterationEnum }) {

    // Default key is not necessarily
    const INDEX_FOR_DEFAULT_KEY = 5;
    const cycle = new Array(12)

    // the idea here is to begin from C
    // put it in the middle
    // work downwards for flats
    // upwards for sharps
    // begin with the middle
    cycle[INDEX_FOR_DEFAULT_KEY] = {
        major: { name, alteration, octave: 4 },
        minor: { ...MinorThird({ name, alteration, octave: 4 }, "down"), octave: 4 }
    }

    // work our way backward towards flats
    for (let i = INDEX_FOR_DEFAULT_KEY; i >= 0; i--) {
        cycle[i - 1] = {
            major: { ...PerfectFifth(cycle[i].major, 'down'), octave: 4 },
            minor: { ...PerfectFifth(cycle[i].minor, 'down'), octave: 4 }
        }
    }

    // work our way upward towards sharps
    for (let i = INDEX_FOR_DEFAULT_KEY; i < 11; i++) {
        cycle[i + 1] = {
            major: { ...PerfectFifth(cycle[i].major, 'up'), octave: 4 },
            minor: { ...PerfectFifth(cycle[i].minor, 'up'), octave: 4 }
        }
    }

    let currentIndex = INDEX_FOR_DEFAULT_KEY;

    return {
        getSequence: () => cycle,
        next: () => cycle.at(currentIndex += 1),
        previous: () => cycle.at(currentIndex -= 1),
    }
}
