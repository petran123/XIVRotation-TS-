import { RotationPlanner } from "./RotationPlanner";
import { Job } from "./Job";

let rotationPlanner: RotationPlanner;

window.onload = function () {
    const rotationDiv = document.getElementById("rotation") as HTMLDivElement;
    const jobSelectElement = document.getElementById("job") as HTMLSelectElement;
    const levelSelectElement = document.getElementById("level") as HTMLInputElement;
    const randomJobButton = document.getElementById("random-job") as HTMLInputElement;

    rotationPlanner = new RotationPlanner(rotationDiv, jobSelectElement, levelSelectElement);

    const getRandom = () => Math.floor(Math.random() * 17) + 1;

    randomJobButton.addEventListener("click", () => {
        jobSelectElement.value = Job[getRandom()];
        jobSelectElement.dispatchEvent(new Event("change"));
    });
}