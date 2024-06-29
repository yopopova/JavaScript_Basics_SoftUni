function examPreparation(input) {
    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let command = input[index]; // We export the variable because we might have a case where we only have a number of ratings and an "Enough" command directly. Then the while loop doesn't make sense to run, so we need to have a console outside for those cases as well.
    index++;

    let counter = 0; // Negative ratings count.
    let sumScore = 0; // Adds the sum of all scores.
    let problemCounter = 0; // Count of all solved tasks.
    let lastProblem = ""; // Will output the last solved task to the console.

    while(command !== "Enough") {
        let taskName = command;
        
        let grade = Number(input[index]);
        index++;

        sumScore += grade;
        problemCounter++;
        lastProblem = taskName; // So we take the last solved task.

        if(grade <= 4) {
            counter++;
        }

        if(counter === countNegativeGrade) {
            console.log(`You need a break, ${counter} poor grades.`); // The placeholder could also be countNegativeGrade, since they are the same.
            break;
        }

        command = input[index]; // With these 2 lines we insure that we don't get an infinite loop.
        index++;
    }

    if(command === "Enough") {
        let avgScore = sumScore / problemCounter;
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
// examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);