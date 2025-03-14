import { DiatonicNoteEnum, AlterationEnum } from "../../constants";

export const diminishedSeventhNatural = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.doubleFlat,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.doubleFlat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
];
export const diminishedSeventhSharps = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
];
export const diminishedSeventhFlats = [
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.doubleFlat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.doubleFlat,
			octave: 5,
		},
	},
];

export const minorSeventhNatural = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
];
export const minorSeventhSharps = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
];
export const minorSeventhFlats = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.doubleFlat,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.doubleFlat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
];

export const majorSeventhNatural = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
];
export const majorSeventhFlats = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
];
export const majorSeventhSharps = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
];

export const augmentedSeventhNatural = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
];
export const augmentedSeventhFlats = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.natural,
			octave: 4,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.D,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.natural,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.G,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
	{
		input: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.flat,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.A,
			alteration: AlterationEnum.sharp,
			octave: 5,
		},
	},
];
export const augmentedSeventhSharps = [
	{
		input: {
			name: DiatonicNoteEnum.C,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.B,
			alteration: AlterationEnum.doubleSharp,
			octave: 4,
		},
	},
	/* { */
	/*   input: { */
	/*     name: DiatonicNoteEnum.D, */
	/*     alteration: AlterationEnum.sharp, */
	/*     octave: 4, */
	/*   }, */
	/*   output: { */
	/*     name: DiatonicNoteEnum.C, */
	/*     alteration: AlterationEnum.doubleSharp, */
	/*     octave: 5, */
	/*   }, */
	/* }, */
	/* { */
	/*   input: { */
	/*     name: DiatonicNoteEnum.E, */
	/*     alteration: AlterationEnum.sharp, */
	/*     octave: 4, */
	/*   }, */
	/*   output: { */
	/*     name: DiatonicNoteEnum.D, */
	/*     alteration: AlterationEnum.doubleSharp, */
	/*     octave: 5, */
	/*   }, */
	/* }, */
	{
		input: {
			name: DiatonicNoteEnum.F,
			alteration: AlterationEnum.sharp,
			octave: 4,
		},
		output: {
			name: DiatonicNoteEnum.E,
			alteration: AlterationEnum.doubleSharp,
			octave: 5,
		},
	},
	/* { */
	/*   input: { */
	/*     name: DiatonicNoteEnum.G, */
	/*     alteration: AlterationEnum.sharp, */
	/*     octave: 4, */
	/*   }, */
	/*   output: { */
	/*     name: DiatonicNoteEnum.F, */
	/*     alteration: AlterationEnum.doubleSharp, */
	/*     octave: 5, */
	/*   }, */
	/* }, */
	/* { */
	/*   input: { */
	/*     name: DiatonicNoteEnum.A, */
	/*     alteration: AlterationEnum.sharp, */
	/*     octave: 4, */
	/*   }, */
	/*   output: { */
	/*     name: DiatonicNoteEnum.G, */
	/*     alteration: AlterationEnum.doubleSharp, */
	/*     octave: 5, */
	/*   }, */
	/* }, */
	/* { */
	/*   input: { */
	/*     name: DiatonicNoteEnum.B, */
	/*     alteration: AlterationEnum.sharp, */
	/*     octave: 4, */
	/*   }, */
	/*   output: { */
	/*     name: DiatonicNoteEnum.A, */
	/*     alteration: AlterationEnum.doubleSharp, */
	/*     octave: 5, */
	/*   }, */
	/* }, */
];
