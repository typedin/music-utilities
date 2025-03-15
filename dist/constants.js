export const NB_OF_SEMITONES = 12;
export var FingerEnum;
(function (FingerEnum) {
    FingerEnum["thumb"] = "+";
    FingerEnum["first"] = "1";
    FingerEnum["second"] = "2";
    FingerEnum["third"] = "3";
    FingerEnum["fourth"] = "4";
    FingerEnum["fifth"] = "5";
})(FingerEnum || (FingerEnum = {}));
export var AlterationEnum;
(function (AlterationEnum) {
    AlterationEnum["doubleFlat"] = "\uD834\uDD2B";
    AlterationEnum["flat"] = "\u266D";
    AlterationEnum["natural"] = "";
    AlterationEnum["sharp"] = "\u266F";
    AlterationEnum["doubleSharp"] = "\uD834\uDD2A";
})(AlterationEnum || (AlterationEnum = {}));
export var DiatonicNoteEnum;
(function (DiatonicNoteEnum) {
    DiatonicNoteEnum["C"] = "C";
    DiatonicNoteEnum["C_SHARP"] = "undeclared c-sharp";
    DiatonicNoteEnum["D"] = "D";
    DiatonicNoteEnum["D_SHARP"] = "undeclared d-sharp";
    DiatonicNoteEnum["E"] = "E";
    DiatonicNoteEnum["F"] = "F";
    DiatonicNoteEnum["F_SHARP"] = "undeclared f-sharp";
    DiatonicNoteEnum["G"] = "G";
    DiatonicNoteEnum["G_SHARP"] = "undeclared g-sharp";
    DiatonicNoteEnum["A"] = "A";
    DiatonicNoteEnum["A_SHARP"] = "undeclared a-sharp";
    DiatonicNoteEnum["B"] = "B";
})(DiatonicNoteEnum || (DiatonicNoteEnum = {}));
export var ModeEnum;
(function (ModeEnum) {
    ModeEnum["M"] = "Major";
    ModeEnum["m"] = "Minor";
})(ModeEnum || (ModeEnum = {}));
export const ScaleFunction = [
    "tonic",
    "supertonic",
    "mediant",
    "subdominant",
    "dominant",
    "submediant",
    "leading tone",
];
export const intervals = [
    {
        type: "DiminishedSecond",
        name: "second",
        quality: "diminished",
        halfsteps: 0,
    },
    {
        type: "MinorSecond",
        name: "second",
        quality: "minor",
        halfsteps: 1,
    },
    {
        type: "MajorSecond",
        name: "second",
        quality: "major",
        halfsteps: 2,
    },
    {
        type: "AugmentedSecond",
        name: "second",
        quality: "augmented",
        halfsteps: 3,
    },
    {
        type: "DiminishedThird",
        name: "third",
        quality: "diminished",
        halfsteps: 2,
    },
    {
        type: "MinorThird",
        name: "third",
        quality: "minor",
        halfsteps: 3,
    },
    {
        type: "MajorThird",
        name: "third",
        quality: "major",
        halfsteps: 4,
    },
    {
        type: "AugmentedThird",
        name: "third",
        quality: "augmented",
        halfsteps: 5,
    },
    {
        type: "DiminishedForth",
        name: "forth",
        quality: "diminished",
        halfsteps: 4,
    },
    {
        type: "PerfectForth",
        name: "forth",
        quality: "perfect",
        halfsteps: 5,
    },
    {
        type: "AugmentedForth",
        name: "forth",
        quality: "augmented",
        halfsteps: 6,
    },
    {
        type: "DiminishedFifth",
        name: "fifth",
        quality: "diminished",
        halfsteps: 6,
    },
    {
        type: "PerfectFifth",
        name: "fifth",
        quality: "perfect",
        halfsteps: 7,
    },
    {
        type: "AugmentedFifth",
        name: "fifth",
        quality: "perfect",
        halfsteps: 8,
    },
    {
        type: "DiminishedSixth",
        name: "sixth",
        quality: "diminished",
        halfsteps: 7,
    },
    {
        type: "MinorSixth",
        name: "sixth",
        quality: "minor",
        halfsteps: 8,
    },
    {
        type: "MajorSixth",
        name: "sixth",
        quality: "major",
        halfsteps: 9,
    },
    {
        type: "AugmentedSixth",
        name: "sixth",
        quality: "augmented",
        halfsteps: 10,
    },
    {
        type: "DiminishedSeventh",
        name: "seventh",
        quality: "diminished",
        halfsteps: 9,
    },
    {
        type: "MinorSeventh",
        name: "seventh",
        quality: "minor",
        halfsteps: 10,
    },
    {
        type: "MajorSeventh",
        name: "seventh",
        quality: "major",
        halfsteps: 11,
    },
    {
        type: "AugmentedSeventh",
        name: "seventh",
        quality: "augmented",
        halfsteps: 12,
    },
    {
        type: "DiminishedOctave",
        name: "octave",
        quality: "diminished",
        halfsteps: 11,
    },
    {
        type: "Octave",
        name: "octave",
        quality: "perfect",
        halfsteps: 12,
    },
    {
        type: "AugmentedOctave",
        name: "octave",
        quality: "augmented",
        halfsteps: 13,
    },
];
//# sourceMappingURL=constants.js.map