import { JobRotation } from "./customTypes.js";

export class Melee {
    private static readonly _MNK: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Bootshine</p>"],
            [4, "<h2>Always</h2><p>Bootshine -&gt; True strike</p>"],
            [6, "<h2>Always</h2><p>Bootshine -&gt; True strike -&gt; Snap Punch</p>"],
            [18, "<h2>Always</h2><p>Bootshine -&gt;"
                + "<br>Twin Snakes if it lasts for 3 globals &gt; True strike -&gt;"
                + "<br> Snap Punch</p>"
                + "<p>You want to alternate Twin / True unless you know the fight will end before you get 3 unbuffed GCDs</p>"],
            [20, "<h2>Always</h2><p>Bootshine -&gt;"
                + "<br>Twin Snakes if it lasts for 3 globals &gt; True strike -&gt;"
                + "<br> Snap Punch</p>"
                + "<p>You want to alternate Twin / True unless you know the fight will end before you get 3 unbuffed GCDs</p>"
                + "<p>If your unbuffed GCD is 2.48 or faster, you can do Twin -&gt; True -&gt; True</p>"],
            [26, "<h2>3+</h2><p>Arm Spam with Twin -&gt; Snap every ~13 sec to keep your Greased Lightning stacks up</p>"
                + "<h2>2</h2><p>Arm -&gt; <br>Twin Snakes if it lasts for 3 globals &gt; True strike -&gt;<br>Snap Punch</p>"
                + "<h2>1</h2><p>Bootshine -&gt;<br>Twin Snakes if it lasts for 3 globals &gt; True strike -&gt;<br>Snap Punch"
                + "<p>If your unbuffed GCD is 2.48 or faster, you can do Twin -&gt; True -&gt; True</p>"],
            [30, "WIP"],
            [45, "WIP"],
        ])
    )();

    private static readonly _DRG: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>True Thrust</p>"],
            [4, "<h2>Always</h2><p>True Thrust -&gt; Vorpal Thrust</p>"],
            [18, "<h2>Always</h2><p>True Thrust -&gt;<br>Disembowel if it lasts for 2 globals &gt; Vorpal Thrust</p>"],
            [26, "<h2>Always</h2><p>True Thrust -&gt; Vorpal Thrust -&gt; Full Thrust</p>"
                + "<p>Never use disembowel at this level range</p>"],
        ])
    )();

    private static readonly _NIN: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Spinning Edge</p>"],
            [4, "<h2>Always</h2><p>Spinning Edge -&gt; Gust Slash</p>"],
            [26, "WIP"],
            [30, "WIP"],
        ])
    )();

    private static readonly _SAM: JobRotation = (
        () => new Map<number, string>([
            [1, "WIP"],
            [4, "WIP"],
            [18, "WIP"],
            [26, "WIP"],
        ])
    )();

    public static get MNK(): JobRotation {
        return this._MNK;
    }
    public static get DRG(): JobRotation {
        return this._DRG;
    }
    public static get NIN(): JobRotation {
        return this._NIN;
    }
    public static get SAM(): JobRotation {
        return this._SAM;
    }
}