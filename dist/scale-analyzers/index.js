"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = analyzeScale;
const index_1 = __importDefault(require("../interval-analyzers/index"));
const all_scales = [
    {
        name: "major",
        structure: [
            {
                direction: "up",
                type: "second",
                quality: "major",
            },
            {
                direction: "up",
                type: "third",
                quality: "major",
            },
            {
                direction: "up",
                type: "fourth",
                quality: "perfect",
            },
            {
                direction: "up",
                type: "fifth",
                quality: "perfect",
            },
            {
                direction: "up",
                type: "sixth",
                quality: "major",
            },
            {
                direction: "up",
                type: "seventh",
                quality: "major",
            },
        ],
    },
    {
        name: "minor",
        structure: [
            {
                direction: "up",
                type: "second",
                quality: "major",
            },
            {
                direction: "up",
                type: "third",
                quality: "minor",
            },
            {
                direction: "up",
                type: "fourth",
                quality: "perfect",
            },
            {
                direction: "up",
                type: "fifth",
                quality: "perfect",
            },
            {
                direction: "up",
                type: "sixth",
                quality: "minor",
            },
            {
                direction: "up",
                type: "seventh",
                quality: "major",
            },
        ],
    },
];
function analyzeScale(scale) {
    let result = undefined;
    outer: for (const lookup of all_scales) {
        for (let i = 0; i < lookup.structure.length; i++) {
            // analyse the scale by comparing the first degree with each other one
            // @ts-ignore
            const { direction, type, quality } = (0, index_1.default)(scale.at(0), scale.at(i + 1));
            if (direction == lookup.structure[i].direction &&
                type == lookup.structure[i].type &&
                quality == lookup.structure[i].quality) {
                result = lookup.name;
            }
            else {
                result = undefined;
                continue outer;
            }
            if (result != undefined && i == lookup.structure.length - 1) {
                break outer;
            }
        }
    }
    return result;
}
//# sourceMappingURL=index.js.map