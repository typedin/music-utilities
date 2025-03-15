"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intervalTable = void 0;
const Unison_1 = require("../interval-builders/Unison");
const Third_1 = require("../interval-builders/Third");
const Fourth_1 = require("../interval-builders/Fourth");
const Fifth_1 = require("../interval-builders/Fifth");
const Seventh_1 = require("../interval-builders/Seventh");
const Sixth_1 = require("../interval-builders/Sixth");
const Octave_1 = require("../interval-builders/Octave");
const Second_1 = require("../interval-builders/Second");
const intervalTable = [
    {
        type: "unison",
        quality: "diminished",
        callback: Unison_1.DiminishedUnison,
        halfsteps: -1,
    },
    {
        type: "unison",
        quality: "perfect",
        callback: Unison_1.PerfectUnison,
        halfsteps: 0,
    },
    {
        type: "unison",
        quality: "augmented",
        callback: Unison_1.AugmentedUnison,
        halfsteps: 1,
    },
    {
        type: "second",
        quality: "diminished",
        callback: Second_1.DiminishedSecond,
        halfsteps: 0,
    },
    {
        type: "second",
        quality: "minor",
        callback: Second_1.MinorSecond,
        halfsteps: 1,
    },
    {
        type: "second",
        quality: "major",
        callback: Second_1.MajorSecond,
        halfsteps: 2,
    },
    {
        type: "second",
        quality: "augmented",
        callback: Second_1.AugmentedSecond,
        halfsteps: 3,
    },
    {
        type: "third",
        quality: "diminished",
        callback: Third_1.DiminishedThird,
        halfsteps: 2,
    },
    {
        type: "third",
        quality: "minor",
        callback: Third_1.MinorThird,
        halfsteps: 3,
    },
    {
        type: "third",
        quality: "major",
        callback: Third_1.MajorThird,
        halfsteps: 4,
    },
    {
        type: "third",
        quality: "augmented",
        callback: Third_1.AugmentedThird,
        halfsteps: 5,
    },
    {
        type: "fourth",
        quality: "diminished",
        callback: Fourth_1.DiminishedFourth,
        halfsteps: 4,
    },
    {
        type: "fourth",
        quality: "perfect",
        callback: Fourth_1.PerfectFourth,
        halfsteps: 5,
    },
    {
        type: "fourth",
        quality: "augmented",
        callback: Fourth_1.AugmentedFourth,
        halfsteps: 6,
    },
    {
        type: "fifth",
        quality: "diminished",
        callback: Fifth_1.DiminishedFifth,
        halfsteps: 6,
    },
    {
        type: "fifth",
        quality: "perfect",
        callback: Fifth_1.PerfectFifth,
        halfsteps: 7,
    },
    {
        type: "fifth",
        quality: "augmented",
        callback: Fifth_1.AugmentedFifth,
        halfsteps: 8,
    },
    {
        type: "sixth",
        quality: "diminished",
        callback: Sixth_1.DiminishedSixth,
        halfsteps: 7,
    },
    {
        type: "sixth",
        quality: "minor",
        callback: Sixth_1.MinorSixth,
        halfsteps: 8,
    },
    {
        type: "sixth",
        quality: "major",
        callback: Sixth_1.MajorSixth,
        halfsteps: 9,
    },
    {
        type: "sixth",
        quality: "augmented",
        callback: Sixth_1.AugmentedSixth,
        halfsteps: 10,
    },
    {
        type: "seventh",
        quality: "diminished",
        callback: Seventh_1.DiminishedSeventh,
        halfsteps: 9,
    },
    {
        type: "seventh",
        quality: "minor",
        callback: Seventh_1.MinorSeventh,
        halfsteps: 10,
    },
    {
        type: "seventh",
        quality: "major",
        callback: Seventh_1.MajorSeventh,
        halfsteps: 11,
    },
    {
        type: "seventh",
        quality: "augmented",
        callback: Seventh_1.AugmentedSeventh,
        halfsteps: 12,
    },
    {
        type: "octave",
        quality: "diminished",
        callback: Octave_1.DiminishedOctave,
        halfsteps: 11,
    },
    {
        type: "octave",
        quality: "perfect",
        callback: Octave_1.PerfectOctave,
        halfsteps: 12,
    },
    {
        type: "octave",
        quality: "augmented",
        callback: Octave_1.AugmentedOctave,
        halfsteps: 13,
    },
];
exports.intervalTable = intervalTable;
//# sourceMappingURL=interval-table.js.map