import analyzeInterval from "@/interval-analyzers/index";
import { IScale } from "@/types/musical";

const all_scales = [
	{
		name: 'major',
		structure: [
			{
				direction: 'up',
				type: 'second',
				quality: 'major',
			},
			{
				direction: 'up',
				type: 'third',
				quality: 'major',
			},
			{
				direction: 'up',
				type: 'fourth',
				quality: 'perfect',
			},
			{
				direction: 'up',
				type: 'fifth',
				quality: 'perfect',
			},
			{
				direction: 'up',
				type: 'sixth',
				quality: 'major',
			},
			{
				direction: 'up',
				type: 'seventh',
				quality: 'major',
			}
		]
	},
	{
		name: 'minor',
		structure: [
			{
				direction: 'up',
				type: 'second',
				quality: 'major',
			},
			{
				direction: 'up',
				type: 'third',
				quality: 'minor',
			},
			{
				direction: 'up',
				type: 'fourth',
				quality: 'perfect',
			},
			{
				direction: 'up',
				type: 'fifth',
				quality: 'perfect',
			},
			{
				direction: 'up',
				type: 'sixth',
				quality: 'minor',
			},
			{
				direction: 'up',
				type: 'seventh',
				quality: 'major',
			}
		]
	},
]

export default function analyzeScale(scale: IScale): string | undefined {
	let result: string | undefined = undefined

	outer: for (let lookup of all_scales) {
		for (let i = 0; i < lookup.structure.length; i++) {
			// analyse the scale by comparing the first degree with each other one
			// @ts-ignore
			let { direction, type, quality } = analyzeInterval(scale.at(0), scale.at(i + 1));
			if (direction == lookup.structure[i].direction && type == lookup.structure[i].type && quality == lookup.structure[i].quality) {
				result = lookup.name
			} else {
				result = undefined
				continue outer
			}
			if (result != undefined && i == lookup.structure.length - 1) { break outer }
		}
	}
	return result
}
