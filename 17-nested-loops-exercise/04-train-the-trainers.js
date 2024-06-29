function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index]); // The jury count that plays a role in rotating the ratings in the for loop.
    index++;

    let command = input[index];
    index++;

    let avgGrade = 0; // Average score from all presentations.
    let presentationCounter = 0; // Count of the presentations.

    while (command !== "Finish") {
        let presentationName = command;
        let tempSumOfGrade = 0; // The average rating from the current presentation (from one iteration of the for loop).
        let tempAvgGrade = 0; // The average grade of the entire course.
        presentationCounter++; // To count the presentations.

        for (let i = 0; i < jury; i++) {
            let grade = Number(input[index]);
            index++;

            tempSumOfGrade += grade;
        }

        tempAvgGrade = tempSumOfGrade / jury;
        avgGrade += tempAvgGrade;
        console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`);

        command = input[index];
        index++;
    }

    avgGrade = avgGrade / presentationCounter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

// trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
// trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);