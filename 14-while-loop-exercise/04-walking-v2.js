function walking(input) {
    let index = 0;
    let command = input[index];
    index++;

    let goalSteps = 10000;
    let steps = 0;

    while (command !== "Going home") {
        let stepsPerDay = Number(command);

        steps += stepsPerDay;

        if (steps >= goalSteps) {
            let diff = steps - goalSteps;
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home") {
        let stepsPerDay = Number(input[index]);
        index++;

        steps += stepsPerDay;

        let difference = Math.abs(goalSteps - steps);
        console.log(`${difference} more steps to reach goal.`);
    }
}

// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["125", "250", "4000", "30", "2678", "4682"]);