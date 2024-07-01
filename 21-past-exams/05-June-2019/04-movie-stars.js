function movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let actorSalary = 0;

    while (command !== "ACTION") {
        let actorName = command; // We get the name of each actor from the command.
        let actorNameLength = actorName.length; // We take the length of each actor's name individually.

        if(actorNameLength > 15) {
            actorSalary = budget * 0.2;
        } else {
            let money = Number(input[index]);
            index++;

            actorSalary = money;
        }

        budget -= actorSalary;

        if(budget <= 0) {
            budget = Math.abs(budget);
            console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
            break;
        }

        command = input[index];
        index++;
    }

    if(command === "ACTION") {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}

// movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);