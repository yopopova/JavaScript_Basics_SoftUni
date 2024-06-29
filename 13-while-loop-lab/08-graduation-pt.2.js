function graduation(input) {
    let index = 0;
    let name = input[index];
    index++; // We write it completely when we read something from the input, in this case what we read is index = 0.

    let level = 1;

    let score = 0; // Collects the grades over the years.
    let error = 0; // Count the number of times the student was interrupted.

    while(level <= 12) {
        let grade = Number(input[index]); // The variable is defined inside the loop because the while condition does not depend on it, but on other values.
        index++;

        if(grade >= 4.00) {
            score += grade;
            level++;
        } else {
            error += 1;

            if(error > 1) {
                console.log(`${name} has been excluded at ${level} grade`);
                break;
            }
        }

        if(level > 12) {
            let avgGrade = score / 12;
            console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
        }
    }
}

graduation(["Gosho",  "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);