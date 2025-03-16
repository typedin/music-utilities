import { AugmentedFifth, DiminishedFifth, PerfectFifth } from "./Fifth.js";
import { AugmentedFourth, DiminishedFourth, PerfectFourth } from "./Fourth.js";
import { AugmentedOctave, DiminishedOctave, PerfectOctave } from "./Octave.js";
import { AugmentedSecond, DiminishedSecond, MajorSecond, MinorSecond } from "./Second.js";
import { AugmentedSeventh, DiminishedSeventh, MajorSeventh, MinorSeventh } from "./Seventh.js";
import { AugmentedSixth, DiminishedSixth, MajorSixth, MinorSixth } from "./Sixth.js";
import { AugmentedThird, DiminishedThird, MajorThird, MinorThird } from "./Third.js";
import { AugmentedUnison, DiminishedUnison, PerfectUnison } from "./Unison.js";

const intervalBuilders = [
  // Unison
  { callable: DiminishedUnison, name: "DiminishedUnison" },
  { callable: PerfectUnison, name: "PerfectUnison" },
  { callable: AugmentedUnison, name: "AugmentedUnison" },
  // second
  { callable: DiminishedSecond, name: "DiminishedSecond" },
  { callable: MinorSecond, name: "MinorSecond" },
  { callable: MajorSecond, name: "MajorSecond" },
  { callable: AugmentedSecond, name: "AugmentedSecond" },
  // third
  { callable: DiminishedThird, name: "DiminishedThird" },
  { callable: MinorThird, name: "MinorThird" },
  { callable: MajorThird, name: "MajorThird" },
  { callable: AugmentedThird, name: "AugmentedThird" },
  // forth
  { callable: AugmentedFourth, name: "AugmentedFourth" },
  { callable: PerfectFourth, name: "PerfectFourth" },
  { callable: DiminishedFourth, name: "DiminishedFourth" },
  // fifth
  { callable: AugmentedFifth, name: "AugmentedFifth" },
  { callable: PerfectFifth, name: "PerfectFifth" },
  { callable: DiminishedFifth, name: "DiminishedFifth" },
  // sixth
  { callable: DiminishedSixth, name: "DiminishedSixth" },
  { callable: MinorSixth, name: "MinorSixth" },
  { callable: MajorSixth, name: "MajorSixth" },
  { callable: AugmentedSixth, name: "AugmentedSixth" },
  // seventh
  { callable: DiminishedSeventh, name: "DiminishedSeventh" },
  { callable: MinorSeventh, name: "MinorSeventh" },
  { callable: MajorSeventh, name: "MajorSeventh" },
  { callable: AugmentedSeventh, name: "AugmentedSeventh" },
  // octave
  { callable: AugmentedOctave, name: "AugmentedOctave" },
  { callable: PerfectOctave, name: "PerfectOctave" },
  { callable: DiminishedOctave, name: "DiminishedOctave" },
];

export { intervalBuilders };
