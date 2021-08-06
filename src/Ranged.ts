import { JobRotation } from "./customTypes.js";

export class Ranged {
    private static readonly _BRD: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Heavy Shot</p>",],
            [2, "<h2>Always</h2><p>Straight Shot &gt; Heavy Shot</p>"],
            [6, "<h2>Always</h2><p>Venomous Bite if it lasts for 3+ ticks (8+ sec) &gt; Straight Shot &gt; Heavy Shot"],
            [18, "<h2>3+</h2><p>Quick Nock</p>"
                + "<h2>2</h2><p>Venomous Bite if it lasts for 7+ ticks (20+ sec) &gt; Quick Nock<br>At this level they mostly don't last long enough for Venomous Bite to be profitable."
                + "<h2>1</h2><p><p>Venomous Bite if it lasts for 3+ ticks (8+ sec) &gt; Straight Shot &gt; Heavy Shot</p>"],
            [30, "<h2>4+</h2><p>Quick Nock</p>"
                + "<h2>3</h2><p>Windbite if it lasts for its FULL duration &gt; Quick Nock<br>Don't bother if you're not 100&percnt; sure</p>"
                + "<h2>2</h2><p>Windbite/Venomous Bite if they lasts for 7+ ticks (20+ sec) each &gt; Qucik Nock</p>"
                + "<h2>1</h2><p>Windbite if it lasts for 4+ ticks (11+ sec) &gt; Venomous Bite if it lasts for 3+ ticks (8+ sec) &gt; Straight Shot &gt; Heavy Shot</p>"
                + "<p>Windite always beats Venomous bite on 5+ ticks and they're equal on 4 ticks</p>"],
            [56, "WIP"],
        ])

    )();

    private static readonly _MCH: JobRotation = (
        () => new Map<number, string>([
            [1, "WIP"],
            [2, "WIP"],
            [4, "WIP"],
            [18, "skase"],
        ])
    )();

    private static readonly _DNC: JobRotation = (
        () => new Map<number, string>([
            [1, "WIP"],
            [2, "WIP"],
            [15, "WIP"],
        ])
    )();

    public static get BRD(): JobRotation {
        return this._BRD;
    }
    public static get MCH(): JobRotation {
        return this._MCH;
    }
    public static get DNC(): JobRotation {
        return this._DNC;
    }
}