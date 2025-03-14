import { intervalTable, type IntervalTable } from "./interval-table";

type IntervalBuilder = (note: Note, direction: "up" | "down") => Note;

function createInterval(
  callback: IntervalBuilder,
  direction: "up" | "down",
  firstNote: Note,
  secondNote: Note,
): boolean {
  const transposedNote = callback(firstNote, direction);

  return (
    transposedNote.name == secondNote.name &&
    transposedNote.octave == secondNote.octave &&
    transposedNote.alteration == secondNote.alteration
  );
}

function intervalUp(
  firstNote: Note,
  secondNote: Note,
  intervalTable: IntervalTable[],
): Interval | undefined {
  let currentOctave = secondNote.octave;
  do {
    for (let interval of intervalTable) {
      if (
        createInterval(interval.callback, "up", firstNote, {
          ...secondNote,
          octave: currentOctave,
        })
      ) {
        const difference = 12 * (secondNote.octave - currentOctave);
        return {
          direction: "up",
          compound: difference ? true : false,
          type: interval.type,
          quality: interval.quality,
          halfsteps: interval.halfsteps + difference,
        };
      }
    }
    currentOctave--;
  } while (currentOctave >= 0);

  return undefined;
}

function intervalDown(
  firstNote: Note,
  secondNote: Note,
  intervalTable: IntervalTable[],
): Interval | undefined {
  let currentOctave = secondNote.octave;

  do {
    for (let interval of intervalTable) {
      const difference = 12 * (currentOctave - secondNote.octave);
      if (
        createInterval(interval.callback, "down", firstNote, {
          ...secondNote,
          octave: currentOctave,
        })
      ) {
        return {
          direction: "down",
          compound: difference > 0 ? true : false,
          type: interval.type,
          quality: interval.quality,
          halfsteps: Math.abs(interval.halfsteps + difference),
        };
      }
    }
    currentOctave++;
  } while (currentOctave <= 12);

  return undefined;
}

export default function IntervalAnalyzer(
  firstNote: Note,
  secondNote: Note,
): Interval | undefined {
  return (
    intervalUp(firstNote, secondNote, intervalTable) ||
    intervalDown(firstNote, secondNote, intervalTable)
  );
}
