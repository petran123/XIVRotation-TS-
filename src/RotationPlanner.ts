import { Job } from "./Job";
import { JobRotations } from "./customTypes";

export class RotationPlanner {

    private level = 1;
    private job: keyof typeof Job = Job[1] as keyof typeof Job; //wtf typescript
    private _currentRotation: string;
    private jobRotations = new JobRotations();

    constructor(private div: HTMLDivElement, private jobSelectElement: HTMLSelectElement, private levelSelectElement: HTMLInputElement) {
        this.jobSelectElement.addEventListener('change', this.onJobChange.bind(this));
        this.levelSelectElement.addEventListener('input', this.onLevelChange.bind(this));
        this.initialiseWithCorrectValues();
        this.updateRotation();
    }

    /**
     * attempt to pick up previous values when page is loaded from cache
    */
    private initialiseWithCorrectValues(): void {
        //TODO switch to localStorage
        this.jobSelectElement.dispatchEvent(new Event("change"));
        this.levelSelectElement.dispatchEvent(new Event("input"));
    }

    /** 
     * event listener for the level input html element
     * changes the level of the planner if it is valid (1-80)
    */
    private onLevelChange(e: Event) {
        let parsedLevel = parseInt((e.target as HTMLInputElement).value);
        this.level = parsedLevel < 1 ? 1
            : parsedLevel > 80 ? 80
                : parsedLevel || this.level;
        this.updateRotation();
    }

    /**
     * event listener for the job input element
     * all possible option values are written in the Job enum
    */
    private onJobChange(e: Event) {
        this.job = (e.target as HTMLSelectElement).value as keyof typeof Job;
        this.updateRotation();
    }

    private updateRotation() {

        let tempRotation = this.pickRotation();

        if (tempRotation !== this._currentRotation) {
            this.div.innerHTML = this._currentRotation = tempRotation;
        }
    }

    public get currentRotation(): string {
        return this._currentRotation;
    }

    /**
     * Returns the best rotation for the chosen class and level
     * @returns {string} Appropriate Rotation string
     */
    private pickRotation(): string {

        for (let i = this.level; i > 0; i--) {
            if (this.jobRotations[this.job].has(i)) {
                return this.jobRotations[this.job].get(i);
            }
        }

        throw new Error("This job has no rotation for the current level");
    }

}