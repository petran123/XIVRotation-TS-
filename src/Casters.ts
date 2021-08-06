import { JobRotation } from "./customTypes.js";

export class Casters {
    private static readonly _BLM: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Blizzard</p>",],
            [2, "<h2>Always</h2><p>Fire until you're sub-1800 MP -&gt; Blizzard until you're full, repeat",],
            [6, "<h2>Always</h2><p><strong>If the fight lasts for 18 sec+</strong>, start with Thunder</p>"
                + "<p>Fire until you're sub-1900 MP -&gt; Transpose -&gt; Thunder if it lasts for 4 ticks (11+ sec) &gt; Blizzard until you're full -&gt; Repeat</p>"],
            [12, "<h2>6+</h2><p>Blizzard II</p>"
                + "<h2>4-5</h2><p>Same as 1 target, but you can replace Blizzard with Blizzard II <strong>if you don't have downtime because of it</strong>"
                + "<h2>1</h2><p><strong>If the fight lasts for 18 sec+</strong>, start with Thunder -&gt;"
                + "<br>Fire until you're sub-1900 MP -&gt; Transpose -&gt; Thunder if it lasts for 4 ticks (11+ sec) &gt; Blizzard until you're full -&gt; Repeat</p>"],
            [18, "<h2>6+</h2><p>Blizzard II</p>"
                + "<h2>4-5</h2><p>Same as 3 targets, but you can replace Blizzard with Blizzard II <strong>if you don't have downtime because of it</strong>"
                + "<h2>3</h2><p>Fire 2 *3 -&gt; transpose -&gt; Thunder if it lasts 4 ticks+ &gt; Blizzard"
                + "<h2>1</h2><p><strong>If the fight lasts for 18 sec+</strong>, start with Thunder -&gt;"
                + "<br>Fire until you're sub-1900 MP -&gt; Transpose -&gt; Thunder if it lasts for 4 ticks (11+ sec) &gt; Blizzard</p>"],
            [20, "<h2>6+</h2><p>Blizzard II</p>"
                + "<h2>4-5</h2><p>Same as 3 targets, but you can replace Blizzard with Blizzard II <strong>if you don't have downtime because of it</strong>"
                + "<h2>3</h2><p>Fire 2 *3 -&gt; transpose -&gt; Blizzard (for 2nd UI stack) -&gt; Thunder if it lasts 4 ticks+ &gt; blizzard"
                + "<h2>1</h2><p>Fire until you're sub-1900 MP -&gt; Transpose -&gt; Blizzard (for 2nd UI stack) -&gt; Thunder if it lasts for 4 ticks (11+ sec) &gt; Blizzard until you're full</p>"],
            [26, "WIP",],
        ])
    )();

    private static readonly _SMN: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Ruin</p>",],
            [2, "<h2>Always</h2><p>Bio if it lasts the FULL duration &gt; Ruin</p>",],
            [6, "<h2>Always</h2><p>Miasma if it lasts 9+ ticks (26+ sec) &gt; Bio if it lasts the FULL duration &gt; Ruin</p>",],
            [10, "<h2>3+</h2><p>Assault I &gt; Miasma if it lasts 9+ ticks (26+ sec) &gt; Bio if it lasts the FULL duration &gt; Ruin</p>"
                + "<p><strong>Delay Assault or delay DoTs?</strong> If DoTs are worth it, it means that they'll last their full duration with time to spare. Delay them</p>"
                + "<h2>1-2</h2><p>Miasma if it lasts 9+ ticks (26+ sec) &gt; Bio if it lasts the FULL duration &gt; Ruin</p>"],
            [18, "<h2>3+</h2><p>Assault I &gt; DoTs if you have Festers to throw &gt; Miasma if it lasts 9+ ticks (26+ sec) &gt; Bio if it lasts the FULL duration &gt; Ruin</p>"
                + "<p><strong>Delay Assault or delay DoTs?</strong> If DoTs are worth it, it means that they'll last their full duration with time to spare and you can delay them."
                + "<br>If you just want to use fester, it's whatever. I'd use DoTs first, because the chances of capping 2 stacks of Assault I are slim.</p>"
                + "<h2>1-2</h2><p>DoTs if you have Festers to throw &gt; Miasma if it lasts 9+ ticks (26+ sec) &gt; Bio if it lasts the FULL duration &gt; Ruin</p>"
                + "<p>If DoTs aren't worth it for their own damage, it may be possible to delay using your festers long enough to use 4 per DoT application, and waste fewer Ruins</p>"],
            [26, "WIP",],
        ])
    )();

    private static readonly _RDM: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Riposte</p>"],
            [2, "<h2>Always</h2><p>Jolt</p>"],
            [4, "<h2>Always</h2><p>Jolt -&gt; Verthunder</p>"],
            [10, "<h2>Always</h2><p>Jolt -&gt; Verthunder/Veraero</p>"],
            [15, "WIP"],
        ])
    )();

    public static get BLM(): JobRotation {
        return this._BLM;
    }

    public static get SMN(): JobRotation {
        return this._SMN;
    }

    public static get RDM(): JobRotation {
        return this._RDM;
    }
}