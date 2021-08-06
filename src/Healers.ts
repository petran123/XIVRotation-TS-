import { JobRotation } from "./customTypes.js";

export class Healers {
    //Initialisers
    private static readonly _WHM: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Stone</p>"],
            [4, "<h2>Always</h2><p>Aero if it lasts for 4+ ticks (10 sec) -&gt; Stone</p>"],
            [18, "<h2>Always</h2><p>Aero if it lasts for its FULL duration -&gt; Stone II</p>"],
            [45, "WIP",]
        ])
    )();

    private static readonly _SCH: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Ruin</p>",],
            [2, "<h2>Always</h2><p>Bio if it lasts for 9 ticks (26+sec) -&gt; Ruin</p>",],
            [26, "<h2>Always</h2><p>Bio II if it lasts for 5 ticks (14+sec) -&gt; Ruin</p>",],
            [38, "WIP"],
        ])
    )();

    private static readonly _AST: JobRotation = (
        () => new Map<number, string>([
            [1, "WIP"],
        ])
    )();

    //Getters
    public static get WHM(): JobRotation {
        return this._WHM;
    }

    public static get SCH(): JobRotation {
        return this._SCH;
    }

    public static get AST(): JobRotation {
        return this._AST;
    }
}