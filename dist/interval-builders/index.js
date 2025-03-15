"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fifth_1 = require("./Fifth");
const Fourth_1 = require("./Fourth");
const Octave_1 = require("./Octave");
const Second_1 = require("./Second");
const Seventh_1 = require("./Seventh");
const Sixth_1 = require("./Sixth");
const Third_1 = require("./Third");
const Unison_1 = require("./Unison");
exports.default = [
    // Unison
    { callable: Unison_1.DiminishedUnison, name: "DiminishedUnison" },
    { callable: Unison_1.PerfectUnison, name: "PerfectUnison" },
    { callable: Unison_1.AugmentedUnison, name: "AugmentedUnison" },
    // second
    { callable: Second_1.DiminishedSecond, name: "DiminishedSecond" },
    { callable: Second_1.MinorSecond, name: "MinorSecond" },
    { callable: Second_1.MajorSecond, name: "MajorSecond" },
    { callable: Second_1.AugmentedSecond, name: "AugmentedSecond" },
    // third
    { callable: Third_1.DiminishedThird, name: "DiminishedThird" },
    { callable: Third_1.MinorThird, name: "MinorThird" },
    { callable: Third_1.MajorThird, name: "MajorThird" },
    { callable: Third_1.AugmentedThird, name: "AugmentedThird" },
    // forth
    { callable: Fourth_1.AugmentedFourth, name: "AugmentedFourth" },
    { callable: Fourth_1.PerfectFourth, name: "PerfectFourth" },
    { callable: Fourth_1.DiminishedFourth, name: "DiminishedFourth" },
    // fifth
    { callable: Fifth_1.AugmentedFifth, name: "AugmentedFifth" },
    { callable: Fifth_1.PerfectFifth, name: "PerfectFifth" },
    { callable: Fifth_1.DiminishedFifth, name: "DiminishedFifth" },
    // sixth
    { callable: Sixth_1.DiminishedSixth, name: "DiminishedSixth" },
    { callable: Sixth_1.MinorSixth, name: "MinorSixth" },
    { callable: Sixth_1.MajorSixth, name: "MajorSixth" },
    { callable: Sixth_1.AugmentedSixth, name: "AugmentedSixth" },
    // seventh
    { callable: Seventh_1.DiminishedSeventh, name: "DiminishedSeventh" },
    { callable: Seventh_1.MinorSeventh, name: "MinorSeventh" },
    { callable: Seventh_1.MajorSeventh, name: "MajorSeventh" },
    { callable: Seventh_1.AugmentedSeventh, name: "AugmentedSeventh" },
    // octave
    { callable: Octave_1.AugmentedOctave, name: "AugmentedOctave" },
    { callable: Octave_1.PerfectOctave, name: "PerfectOctave" },
    { callable: Octave_1.DiminishedOctave, name: "DiminishedOctave" },
];
//# sourceMappingURL=index.js.map