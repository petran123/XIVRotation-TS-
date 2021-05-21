import { JobRotation } from "./customTypes";

export class Tanks {

    //Initialisers
    private static readonly _PLD: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Fast Blade</p>"],
            [4, "<h2>Always</h2><p>Riot Blade</p>"],
            [6, "<h2>3+</h2><p>Total Eclipse</p>"
                + "<h2>1, 2</h2><p>Riot Blade</p>"],
            [26, "<h2>3+</h2><p>Total Eclipse</p>"
                + "<h2>1, 2</h2><p>Rage of Halone</p>"],
            [40, "<h2>3+</h2><p>Prominence</p>"
                + "<h2>2</h2><p>Prominence<br>If you're mid-halone combo, finish it.</p>"
                + "<h2>1</h2><p>Halone Spam</p>"],
            [54, "<h2>3+</h2><p>Prominence</p>"
                + "<h2>2</h2><p>Goring if it lasts 2+ ticks &gt; Prominence</p>"
                + "<h2>1</h2><p>Goring Spam<br>Forget Rage of Halone at this level range.</p>"],
            [60, "<h2>3+</h2><p>Prominence</p>"
                + "<h2>2</h2><p>Goring if it lasts 3+ ticks &gt; Royal &gt; Prominence if 2 gcds remain</p>"
                + "<h2>1</h2><p>Goring if it lasts 3+ ticks &gt; Royal</p>"],
            [64, "<h2>3+</h2><p>Prominence</p>"
                + "<h2>2</h2><p>Goring if it lasts 3+ ticks &gt; Royal &gt; Holy Spirit if fewer than 3 gcds remain</p>"
                + "<h2>1</h2><p>Goring if it lasts 3+ ticks &gt; Royal = Holy Spirit<br>Holy Spirit is preferrable in situations where you know you have fewer than 3 GCDs, but you may lose autoattacks</p>"],
            [68, "<h2>3+</h2><p>Prominence</p>"
                + "<h2>2</h2><p>buffed Holy Spirit &gt; Goring if it lasts 3+ ticks &gt; Royal &gt; unbuffed Holy Spirit if fewer than 3 gcds remain<br>You can decide if you want to use 1 goring combo before starting buffed holy spirit.</p>"
                + "<h2>1</h2><p>Buffed Holy Spirit &gt; Goring if it lasts 3+ ticks &gt; Royal = unbuffed Holy Spirit<br>From here on out you pretty much fall into a buff-dependent rotation</p>"],
            [72, "<h2>3+</h2><p>Buffed Holy Circle &gt; Prominence</p>"
                + "<h2>2</h2><p>Buffed Holy Circle &gt; alternate 2*goring -&gt; 1 royal</p>"
                + "<h2>1</h2><p>Buffed Holy Spirit &gt; Goring if it lasts 3+ ticks &gt; Royal = unbuffed Holy Spirit<br>From here on out you pretty much fall into a buff-dependent rotation</p>"],
            [76, "<h2>3+</h2><p>Buffed Holy Circle &gt; Prominence</p>"
                + "<h2>2</h2><p>Buffed Holy Circle &gt; Goring -&gt; Royal &gt; 3*Atonement</p>"
                + "<h2>1</h2><p>Goring -&gt; Royal &gt; 3*Atonement &gt;= Buffed Holy Spirit<br>The reason why holy spirit is lower is because you'll probably want to save it for 2+ targets if applicable;</p>"],
            [80, "<h2>ALWAYS</h2><p>End your Requiescat with Confiteor, and you may even want to finish Requiescat early to hit MORE targets with it</p>"
                + "<h2>3+</h2><p>Buffed Holy Circle &gt; Prominence</p>"
                + "<h2>2</h2><p>Buffed Holy Circle &gt; Goring -&gt; Royal &gt; 3*Atonement</p>"
                + "<h2>1</h2><p>Goring -&gt; Royal &gt; 3*Atonement &gt;= Buffed Holy Spirit<br>The reason why holy spirit is lower is because you'll probably want to save it for 2+ targets if applicable;</p>"],
        ])
    )();

    private static readonly _WAR: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Heavy Swing</p>"],
            [4, "<h2>Always</h2><p>Heavy Swing -&gt; Maim</p>"],
            [10, "<h2>2+</h2><p>Maim if mid-combo > Overpower</p>"
                + "<h2>1</h2><p>Heavy Swing -&gt; Maim</p>"],
            [26, "<h2>3+</h2><p>Overpower</p>"
                + "<h2>2</h2><p>Storm's Path</p>"],
            [35, "<h2>3+</h2><p>Overpower</p>"
                + "<h2>2</h2><p>Storm's Path</p><p>Inner Beast is better than Path combo on average, but it boils down to what you trade it for. use it if you're not trading it for the final Storm's Path weaponskill of the fight"],
            [40, "<h2>2+</h2><p>Mythril Tempest</p><p>Cyclone if you have leftover gauge</p>"
                + "<h2>1</h2><p>Storm's Path</p><p>Try to pool gauge for aoe, but spend it on Inner Beast if you would otherwise overcap</p>"],
            [50, "WIP"],
        ])
    )();

    private static readonly _DRK: JobRotation = (
        () => new Map<number, string>([
            [1, "<h2>Always</h2><p>Hard Slash</p>"],
            [2, "<h2>Always</h2><p>Hard Slash -&gt; Syphon Strike</p>"],
            [6, "<h2>2+</h2><p>Unleash</p>"
                + "<h2>1</h2><p>Hard Slash -&gt; Syphon Strike</p>"],
            [26, "<h2>3+</h2><p>Unleash</p>"
                + "<h2>2</h2><p>both Souleater and Unleash do the same damage, pick according to GCDS left</p>"
                + "<h2>1</h2><p>Souleater</p>"],
            [30, "<h2>wip</h2>"],
        ])
    )();

    private static readonly _GNB: JobRotation = (
        () => new Map<number, string>([
            [1, "WIP"]
        ])
    )();

    //Getters
    public static get PLD(): JobRotation {
        return this._PLD;
    }

    public static get WAR(): JobRotation {
        return this._WAR;
    }

    public static get DRK(): JobRotation {
        return this._DRK;
    }

    public static get GNB(): JobRotation {
        return this._GNB;
    }

}