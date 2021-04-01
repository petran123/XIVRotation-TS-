import { Tanks } from "./Tanks";
import { Healers } from "./Healers";
import { Melee } from "./Melee";
import { Ranged } from "./Ranged";
import { Casters } from "./Casters";

export type JobRotation = Map<number, string>;

export class JobRotations {
    //Tanks
    PLD: JobRotation = Tanks.PLD;
    WAR: JobRotation = Tanks.WAR;
    DRK: JobRotation = Tanks.DRK;
    GNB: JobRotation = Tanks.GNB;

    //Healers
    WHM: JobRotation = Healers.WHM;
    SCH: JobRotation = Healers.SCH;
    AST: JobRotation = Healers.AST;

    //Melee
    MNK: JobRotation = Melee.MNK;
    DRG: JobRotation = Melee.DRG;
    NIN: JobRotation = Melee.NIN;
    SAM: JobRotation = Melee.SAM;

    //Ranged
    BRD: JobRotation = Ranged.BRD;
    MCH: JobRotation = Ranged.MCH;
    DNC: JobRotation = Ranged.DNC;

    //Casters
    BLM: JobRotation = Casters.BLM;
    SMN: JobRotation = Casters.SMN;
    RDM: JobRotation = Casters.RDM;
}