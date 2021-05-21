import { RotationPlanner } from "./RotationPlanner";
import { Job } from "./Job";

const rotationPlanner: RotationPlanner = ( () => {
    const rotationDiv = document.getElementById("rotation") as HTMLDivElement;
    const jobSelectElement = document.getElementById("job") as HTMLSelectElement;
    const levelSelectElement = document.getElementById("level") as HTMLInputElement;
    const randomJobButton = document.getElementById("random-job") as HTMLInputElement;

    let tempPlanner = new RotationPlanner(rotationDiv, jobSelectElement, levelSelectElement);

    //RDM is the last assigned job
    const getRandom = () => Math.floor(Math.random() * Job.RDM) + 1;

    randomJobButton.addEventListener("click", () => {
        jobSelectElement.value = Job[getRandom()];
        jobSelectElement.dispatchEvent(new Event("change"));
    });

    return tempPlanner;
})();